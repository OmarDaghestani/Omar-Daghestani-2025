"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: string;
  containerClassName?: string;
}

export function SectionWrapper({
  id,
  children,
  className = "",
  background = "",
  containerClassName = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`w-full py-12 sm:py-16 md:py-24 lg:py-32 ${background} ${className}`}
    >
      <motion.div
        className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
