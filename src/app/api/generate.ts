import type { NextApiRequest, NextApiResponse } from 'next'
import * as fal from '@fal-ai/serverless-client'

fal.config({
  credentials: process.env.FAL_KEY,
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

    console.log('Generating image for prompt:', prompt) // Debug log

    const result = await fal.subscribe('fal-ai/stable-diffusion', {
      input: {
        prompt: prompt,
        negative_prompt: 'blurry, bad quality, worst quality',
        num_inference_steps: 30,
        safety_checker: true,
        width: 512,
        height: 512,
      },
    }) as { images: { url: string }[] }

    console.log('FAL.ai response:', result) // Debug log

    if (!result?.images?.[0]?.url) {
      throw new Error('No image URL in response')
    }

    return res.status(200).json({ imageUrl: result.images[0].url })
  } catch (error) {
    console.error('API error:', error)
    return res.status(500).json({ error: 'Failed to generate image' })
  }
}