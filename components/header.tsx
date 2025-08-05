"use client";

import { useState, useContext } from "react";
import { Button } from "./ui/button";
import { Menu, X, Code } from "lucide-react";
import { CursorContext } from "./cursor-context";
import { scrollToSection } from "@/lib/scroll-utils";
import { NAVIGATION_LINKS } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setVariant } = useContext(CursorContext);

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    scrollToSection(targetId);
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMenuOpen
          ? "bg-background/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-default"
            onMouseEnter={() => setVariant("hover")}
            onMouseLeave={() => setVariant("default")}
          >
            <Code className="w-7 h-7 text-primary" />
            <span className="[text-shadow:0_0_8px_hsl(var(--primary))]">
              Omar Daghestani
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative text-lg font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-md cursor-default"
                onMouseEnter={() => setVariant("hover")}
                onMouseLeave={() => setVariant("default")}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              onClick={handleMenuToggle}
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95">
          <nav className="flex flex-col items-center gap-6 py-8">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xl font-medium text-muted-foreground hover:text-primary transition-colors cursor-default"
                onMouseEnter={() => setVariant("hover")}
                onMouseLeave={() => setVariant("default")}
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
