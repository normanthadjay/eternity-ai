'use client'

import { useState } from 'react'

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<any>(null)

  const handleGenerate = async () => {
    setLoading(true)
    setError(null)
    try {
      console.log('Sending prompt:', prompt);

      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt })
      })

      console.log('Response status:', response.status);
      
      const data = await response.json();
      console.log('API Response:', data);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      setResult({ imageUrl: data.imageUrl });
      console.log('Set result:', { imageUrl: data.imageUrl });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate image'
      setError(errorMessage)
      console.log('Generation error:', errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter your prompt..."
          rows={4}
          disabled={loading}
        />
        
        <button
          onClick={handleGenerate}
          disabled={loading || !prompt}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Image'}
        </button>

        {error && (
          <div className="p-4 bg-red-50 text-red-500 rounded">
            {error}
          </div>
        )}

        <div className="text-sm text-gray-500">
          Status: {loading ? 'Loading...' : error ? 'Error' : result ? 'Done' : 'Ready'}
        </div>

        {result?.imageUrl && (
          <div className="mt-4">
            <p className="mb-2 text-sm">Image URL: {result.imageUrl}</p>
            <img 
              src={result.imageUrl} 
              alt="Generated image" 
              className="max-w-full rounded border"
              onError={(e) => console.log('Image loading error:', e)}
            />
          </div>
        )}
      </div>
    </div>
  )
}