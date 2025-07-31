import Link from "next/link"
import { Github, Linkedin, Twitter, Code } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-8 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Code className="w-6 h-6 text-primary" />
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="https://github.com" target="_blank" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
