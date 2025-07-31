"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "./cursor-context";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function CustomCursor() {
  const { variant } = useContext(CursorContext);
  const { x, y } = useMousePosition();

  const variants = {
    default: {
      height: 16,
      width: 16,
      backgroundColor: "hsl(var(--primary))",
      opacity: 0.8,
    },
    hover: {
      height: 48,
      width: 48,
      backgroundColor: "hsl(var(--primary))",
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      style={{
        transform: `translate(${x - 8}px, ${y - 8}px)`,
      }}
      variants={variants}
      animate={variant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
}
