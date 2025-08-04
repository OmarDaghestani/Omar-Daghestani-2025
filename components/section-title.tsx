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
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={titleVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{children}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
