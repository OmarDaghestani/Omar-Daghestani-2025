"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote, Star } from "lucide-react";
import { platformStats, testimonials } from "@/lib/testimonials-data";
import { SectionWrapper } from "./section-wrapper";
import { SectionTitle } from "./section-title";

function Stars({ count }: { count: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
      ))}
    </span>
  );
}

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials">
      <SectionTitle
        eyebrow="Client feedback"
        subtitle="Reviews from freelance clients, verifiable on each platform."
      >
        What clients <span className="text-primary">say</span>
      </SectionTitle>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.figure
            key={t.quote}
            className="section-surface flex flex-col p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <Stars count={t.rating} />
              <Quote className="h-5 w-5 text-primary/40" aria-hidden="true" />
            </div>
            <blockquote className="flex-1 leading-relaxed text-foreground">“{t.quote}”</blockquote>
            <figcaption className="mt-5 border-t border-border/60 pt-4 text-sm">
              <p className="font-medium">{t.client}</p>
              <p className="text-muted-foreground">
                {t.project} ·{" "}
                <a href={t.url} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                  {t.platform}
                </a>
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {platformStats.map((p) => (
          <a
            key={p.platform}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="section-surface group flex items-center justify-between gap-4 p-5 transition-colors hover:border-primary/40"
          >
            <div>
              <p className="eyebrow text-muted-foreground">{p.platform}</p>
              <p className="mt-1 text-lg font-semibold">{p.headline}</p>
              <p className="text-sm text-muted-foreground">{p.details.join(" · ")}</p>
            </div>
            <ExternalLink className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
