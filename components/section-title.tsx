"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  subtitle?: string;
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
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
