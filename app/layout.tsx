import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator";
import { PerformanceMonitor } from "@/components/performance-monitor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omar Daghestani - AI & Automation Engineer",
  description:
    "AI and automation engineer and founder of Nexus Code. Production LLM workflows, MCP servers, AWS infrastructure, and CI/CD, built and run end to end.",
  metadataBase: new URL("https://omar-daghestani.com"),
  openGraph: {
    title: "Omar Daghestani - AI & Automation Engineer",
    description:
      "AI and automation engineer and founder of Nexus Code. Production LLM workflows, MCP servers, AWS infrastructure, and CI/CD, built and run end to end.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Daghestani - AI & Automation Engineer",
    description:
      "AI and automation engineer and founder of Nexus Code. Production LLM workflows, MCP servers, AWS infrastructure, and CI/CD, built and run end to end.",
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
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          mono.variable
        )}
      >
        <div className="animated-background noise-texture">
          <ScrollProgressIndicator />
          <PerformanceMonitor />
          {children}
        </div>
      </body>
    </html>
  );
}
