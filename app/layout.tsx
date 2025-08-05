import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CustomCursor } from "@/components/custom-cursor";
import { CursorProvider } from "@/components/cursor-context";
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator";
import { PerformanceMonitor } from "@/components/performance-monitor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Omar Daghestani - Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Node.js, and modern web technologies",
  metadataBase: new URL("https://omar-daghestani.com"),
  openGraph: {
    title: "Omar Daghestani - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, and modern web technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Daghestani - Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Node.js, and modern web technologies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
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
            <PerformanceMonitor />
            {children}
          </div>
        </CursorProvider>
      </body>
    </html>
  );
}
