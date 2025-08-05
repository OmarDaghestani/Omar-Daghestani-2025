"use client";

import { useEffect } from "react";

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log to console for debugging (remove in production)
        console.log(`${entry.name}: ${entry.startTime}`);

        // Send to analytics service (replace with your preferred service)
        if (entry.name === "LCP") {
          // Largest Contentful Paint
          console.log("LCP:", entry.startTime);
        } else if (entry.name === "FID") {
          // First Input Delay
          console.log("FID:", entry.startTime);
        } else if (entry.name === "CLS") {
          // Cumulative Layout Shift
          console.log("CLS:", entry.startTime);
        }
      }
    });

    // Observe Core Web Vitals
    observer.observe({
      entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"],
    });

    // Monitor page load performance
    window.addEventListener("load", () => {
      const navigation = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log(
          "Page Load Time:",
          navigation.loadEventEnd - navigation.loadEventStart
        );
        console.log(
          "DOM Content Loaded:",
          navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart
        );
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
