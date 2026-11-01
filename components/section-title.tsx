"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
}

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function SectionTitle({
  children,
  className = "",
  subtitle,
  eyebrow,
  centered = true,
}: SectionTitleProps) {
  return (
    <motion.div
      className={`mb-8 sm:mb-12 ${centered ? "text-center" : ""} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={titleVariants}
    >
      {eyebrow && <p className="eyebrow mb-3 text-primary">{eyebrow}</p>}
      <h2 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
