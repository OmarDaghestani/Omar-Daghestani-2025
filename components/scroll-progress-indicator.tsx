"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-pink-600 origin-top z-[9998]"
      style={{ scaleY }}
    />
  )
}
