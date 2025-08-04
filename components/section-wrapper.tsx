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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

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
      className={`w-full py-16 md:py-24 lg:py-32 ${background} ${className}`}
    >
      <motion.div
        className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {children}
      </motion.div>
    </section>
  );
}
