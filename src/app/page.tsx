import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Welcome to <span className="text-primary">Eternity AI</span>
        </h1>
        <p className="mt-3 text-xl sm:text-2xl mb-8">
          Generate high-quality, realistic photos and videos with AI
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">AI Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Explore our suite of AI-powered tools for photo and video generation.</p>
              <Link href="/ai-tools">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">View amazing creations by our users and get inspired.</p>
              <Link href="/gallery">
                <Button variant="outline" className="w-full">Explore Gallery</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Mockup Generator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Create realistic mockups for various products and templates.</p>
              <Link href="/mockup-generator">
                <Button className="w-full">Generate Mockups</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <Link href="/about" className="mt-8 text-blue-500 hover:text-blue-700">
          Go to About Page
        </Link>
      </div>
    </main>
  )
}