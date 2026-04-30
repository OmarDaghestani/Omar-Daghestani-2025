"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Code } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-utils";
import { NAVIGATION_LINKS } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  // Handle scroll events to change header opacity
  useEffect(() => {
    let previousIsScrolled = false;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const nextIsScrolled = scrollTop > 50;

      if (nextIsScrolled === previousIsScrolled) return;
      previousIsScrolled = nextIsScrolled;
      setIsScrolled(nextIsScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionElements = NAVIGATION_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean) as Element[];

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;
        setActiveSection(`#${visibleEntry.target.id}`);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
    setActiveSection(targetId);
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Calculate background opacity based on scroll and menu state
  const getBackgroundOpacity = () => {
    if (isMenuOpen) return "bg-background/95";
    if (isScrolled) return "bg-background/80";
    return "bg-transparent"; // Transparent when at top
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-md transition-all duration-300 ${getBackgroundOpacity()}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={(e) => handleNavClick(e, "#home")}
            className="focus-ring flex items-center gap-2 rounded-md text-2xl font-bold text-foreground transition-colors hover:text-primary"
          >
            <Code className="w-7 h-7 text-primary" />
            <span>Omar Daghestani</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={activeSection === link.href ? "page" : undefined}
                className={`focus-ring relative rounded-md px-4 py-2 text-lg font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary transition-opacity ${
                    activeSection === link.href ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              onClick={handleMenuToggle}
              variant="ghost"
              size="icon"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <nav className="flex flex-col items-center gap-3 px-4 py-6">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={activeSection === link.href ? "page" : undefined}
                className={`focus-ring w-full rounded-lg px-4 py-3 text-center text-lg font-medium transition-colors ${
                  activeSection === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-primary"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
