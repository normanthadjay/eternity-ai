'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function AITools() {
  const [prompt, setPrompt] = useState('')
  const [generatedImage, setGeneratedImage] = useState('')
  const [generatedVideo, setGeneratedVideo] = useState('')

  const generateImage = async () => {
    // In a real application, this would call an AI service API
    setGeneratedImage('/placeholder.svg?height=300&width=300')
  }

  const generateVideo = async () => {
    // In a real application, this would call an AI service API
    setGeneratedVideo('/placeholder.svg?height=300&width=300')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Generate Photo</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Enter your prompt here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="mb-4"
            />
            <Button onClick={generateImage}>Generate Photo</Button>
            {generatedImage && (
              <div className="mt-4">
                <img src={generatedImage} alt="Generated" className="w-full" />
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button disabled={!generatedImage}>Download Photo</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Generate Video</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Enter your prompt here..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="mb-4"
            />
            <Button onClick={generateVideo}>Generate Video</Button>
            {generatedVideo && (
              <div className="mt-4">
                <video src={generatedVideo} controls className="w-full" />
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button disabled={!generatedVideo}>Download Video</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}