"use client";

import { useEffect } from "react";

export function PerformanceMonitor() {
  useEffect(() => {
    // Disabled by default to avoid extra runtime overhead.
    // Set NEXT_PUBLIC_ENABLE_PERF_MONITOR=true when actively profiling.
    if (process.env.NEXT_PUBLIC_ENABLE_PERF_MONITOR !== "true") return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Send to analytics service (replace with your preferred service)
        if (entry.name === "LCP") {
          // Largest Contentful Paint
        } else if (entry.name === "FID") {
          // First Input Delay
        } else if (entry.name === "CLS") {
          // Cumulative Layout Shift
        }
      }
    });

    // Observe Core Web Vitals
    observer.observe({
      entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
