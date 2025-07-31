import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { CursorProvider } from "@/components/cursor-context";
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Omar Daghestani - Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Node.js, and modern web technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased cursor-none md:cursor-none",
          inter.variable
        )}
      >
        <CursorProvider>
          <div className="animated-background noise-texture">
            <CustomCursor />
            <ScrollProgressIndicator />
            <Header />
            <main>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </main>
            <Footer />
          </div>
        </CursorProvider>
      </body>
    </html>
  );
}
