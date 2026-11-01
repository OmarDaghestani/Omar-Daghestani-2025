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
  { label: "Production systems", value: "30" },
  { label: "Claude workflows live", value: "10+" },
  { label: "Lines in production", value: "~60K" },
];

export function HeroSection() {
  const handleWorkClick = () => {
    scrollToSection("#projects");
  };

  return (
    <section id="home" className="w-full pt-28 md:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid min-h-[calc(100vh-7rem)] grid-cols-1 items-center gap-10 md:grid-cols-[1.25fr_1fr]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="space-y-8 text-center md:text-left">
            <motion.div
              className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-primary"
              variants={itemVariants}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              AI &amp; Automation Engineer · Founder, Nexus Code
            </motion.div>

            <motion.h1
              className="text-balance text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              I build AI-powered systems
              <span className="text-gradient block">
                that run real businesses.
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto max-w-2xl text-lg text-muted-foreground md:mx-0"
              variants={itemVariants}
            >
              I&apos;m Omar Daghestani. I design, ship, and operate production
              systems end to end — LLM workflows, AWS infrastructure, CI/CD, and
              data pipelines — for companies that need automation that holds up
              on a Monday morning.
            </motion.p>

            <motion.div
              className="flex flex-col items-center gap-4 sm:flex-row md:justify-start"
              variants={itemVariants}
            >
              <Button size="lg" className="group min-w-40" onClick={handleWorkClick}>
                See the work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button asChild size="lg" variant="outline" className="min-w-40">
                <a href={RESUME_URL} download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.dl
              className="grid grid-cols-3 gap-3 pt-1"
              variants={itemVariants}
            >
              {impactMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="section-surface px-3 py-3 text-center md:px-4 md:text-left"
                >
                  <dd className="text-2xl font-bold tracking-tight md:text-3xl">
                    {metric.value}
                  </dd>
                  <dt className="text-[11px] uppercase tracking-wide text-muted-foreground md:text-xs">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </motion.dl>

            <motion.div
              className="flex justify-center md:justify-start"
              variants={itemVariants}
            >
              <SocialLinks />
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="absolute h-72 w-72 rounded-full bg-primary/15 blur-3xl md:h-96 md:w-96" />
            <div className="relative">
              <div className="relative rounded-full p-1.5">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-sky-400 to-indigo-500 opacity-90" />
                <Image
                  src="/icon.jpg"
                  alt="Omar Daghestani"
                  width={360}
                  height={360}
                  className="relative aspect-square h-64 w-64 rounded-full border-4 border-background object-cover shadow-2xl sm:h-80 sm:w-80"
                  priority
                />
              </div>
              <div className="section-surface absolute -bottom-4 left-1/2 w-max -translate-x-1/2 bg-background/80 px-4 py-2 shadow-xl md:-left-6 md:translate-x-0">
                <p className="eyebrow text-muted-foreground">Currently</p>
                <p className="text-sm font-semibold">
                  Running Iron Buffalo&apos;s automation platform
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
