"use client";

import { motion } from "framer-motion";
import { PenTool } from "lucide-react";

export function InsightsSection() {
  return (
    <section id="insights" className="w-full py-12 sm:py-16 md:py-24 lg:py-32">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center mb-4">
          <PenTool className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">
          My <span className="text-primary">Insights</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          New articles and thoughts on technology, development, and design are
          coming soon. Stay tuned for deep dives into my problem-solving process
          and explorations of the latest tech.
        </p>
      </motion.div>
    </section>
  );
}
