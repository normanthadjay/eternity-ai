"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Navigation() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="bg-background shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">Eternity AI</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/ai-tools" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                AI Tools
              </Link>
              <Link href="/gallery" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Gallery
              </Link>
              <Link href="/mockup-generator" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Mockup Generator
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="mr-4"
            >
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}