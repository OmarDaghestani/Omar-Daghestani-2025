import Link from "next/link";
import { Github, Linkedin, Mail, Code } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-secondary/40 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <Code className="w-6 h-6 text-primary" />
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Omar Daghestani · Nexus Code
          </p>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/OmarDaghestani"
            target="_blank"
            aria-label="GitHub"
            className="focus-ring rounded-md p-1"
          >
            <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link
            href="https://linkedin.com/in/omar-daghestani"
            target="_blank"
            aria-label="LinkedIn"
            className="focus-ring rounded-md p-1"
          >
            <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Email"
            className="focus-ring rounded-md p-1"
          >
            <Mail className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </a>
        </div>
      </div>
    </footer>
  );
}
