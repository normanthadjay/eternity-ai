import ImageGenerator from '@/components/ImageGenerator'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Eternity AI Image Generator
      </h1>
      <ImageGenerator />
    </main>
  )
}