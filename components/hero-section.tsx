"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { scrollToSection } from "@/lib/scroll-utils";
import { SocialLinks } from "./social-links";
import { RESUME_URL } from "@/lib/constants";
import { ArrowRight, Download } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const impactMetrics = [
  { label: "Years Experience", value: "4+" },
  { label: "Projects Shipped", value: "15+" },
  { label: "Core Stack", value: "Next.js / TS" },
];

export function HeroSection() {
  const handleContactClick = () => {
    scrollToSection("#contact");
  };

  return (
    <section id="home" className="w-full pt-24 md:pt-8 lg:pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid min-h-[calc(100vh-6rem)] grid-cols-1 items-center gap-10 md:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="space-y-8 text-center md:text-left">
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
              variants={itemVariants}
            >
              Full-Stack Developer
            </motion.div>

            <motion.h1
              className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              I build scalable products with
              <span className="block bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                thoughtful user experiences.
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto max-w-2xl text-lg text-muted-foreground md:mx-0"
              variants={itemVariants}
            >
              I&apos;m Omar Daghestani, a developer who bridges product strategy,
              front-end craft, and robust backend engineering to turn ideas into
              reliable digital experiences.
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-4 sm:flex-row md:justify-start"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="group min-w-40"
                onClick={handleContactClick}
              >
                Let&apos;s Work Together
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-w-40"
              >
                <a href={RESUME_URL} download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-3 pt-1 sm:grid-cols-3"
              variants={itemVariants}
            >
              {impactMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="section-surface px-4 py-3 text-center md:text-left"
                >
                  <p className="text-2xl font-bold tracking-tight">{metric.value}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {metric.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <SocialLinks />
            </motion.div>
          </div>
          <motion.div
            className="relative flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="h-72 w-72 rounded-full bg-primary/10 blur-3xl md:h-96 md:w-96" />
            <motion.div
              className="relative rounded-full p-1.5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 opacity-90" />
              <Image
                src="/icon.jpg"
                alt="Omar Daghestani"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-background object-cover shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
