export default function Footer() {
    return (
      <footer className="bg-background border-t">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-foreground">
            © {new Date().getFullYear()} Eternity AI. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }