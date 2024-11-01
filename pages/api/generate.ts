import type { NextApiRequest, NextApiResponse } from 'next'
import * as fal from '@fal-ai/serverless-client'

// Configure fal.ai client
fal.config({
  credentials: process.env.FAL_API_KEY  // Make sure this matches your .env variable name
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { prompt } = req.body

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' })
    }

    // Updated with correct model ID format
    const result = await fal.subscribe('fal-ai/stable-diffusion-xl', {  // Fixed model ID format
      input: {
        prompt: prompt,
        negative_prompt: 'blurry, bad quality, worst quality',
        num_inference_steps: 50,
        safety_checker: true,
        width: 512,
        height: 512,
        num_outputs: 1  // Changed from 4 to 1
      },
    }) as { images: { url: string }[] }  // Add type assertion here

    if (!result?.images?.[0]?.url) {
      throw new Error('No image URL in response')
    }

    return res.status(200).json({ imageUrl: result.images[0].url })  // Return single URL instead of array
  } catch (error) {
    console.error('Fal.ai API error:', error)
    return res.status(500).json({ 
      error: 'Failed to generate image',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}