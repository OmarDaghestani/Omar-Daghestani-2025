"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Code } from "lucide-react";
import { CursorContext } from "./cursor-context";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setVariant } = useContext(CursorContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavLinkClick = (e: React.MouseEvent, href: string) => {
    // Prevent default link behavior
    e.preventDefault();

    // Close mobile menu if open
    setIsMenuOpen(false);

    // Temporarily enable smooth scrolling
    document.documentElement.setAttribute("data-smooth-scroll", "true");

    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Disable smooth scrolling after animation completes
      setTimeout(() => {
        document.documentElement.removeAttribute("data-smooth-scroll");
      }, 1000);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-background/80 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={(e) => handleNavLinkClick(e, "#home")}
            className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-default"
            onMouseEnter={() => setVariant("hover")}
            onMouseLeave={() => setVariant("default")}
          >
            <Code className="w-7 h-7 text-primary" />
            <span className="[text-shadow:0_0_8px_hsl(var(--primary))]">
              Omar Daghestani
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="relative text-lg font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-md cursor-default"
                onMouseEnter={() => setVariant("hover")}
                onMouseLeave={() => setVariant("default")}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary))] cursor-default"
              onMouseEnter={() => setVariant("hover")}
              onMouseLeave={() => setVariant("default")}
            >
              <a href="/Omar-Daghestani-Resume-2025.pdf" download>
                Download CV
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="cursor-default"
              onMouseEnter={() => setVariant("hover")}
              onMouseLeave={() => setVariant("default")}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background/95">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="text-xl font-medium text-muted-foreground hover:text-primary transition-colors cursor-default"
                onMouseEnter={() => setVariant("hover")}
                onMouseLeave={() => setVariant("default")}
              >
                {link.label}
              </button>
            ))}
            <Button
              asChild
              className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-default"
              onMouseEnter={() => setVariant("hover")}
              onMouseLeave={() => setVariant("default")}
            >
              <a href="/Omar-Daghestani-Resume-2025.pdf" download>
                Download CV
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
