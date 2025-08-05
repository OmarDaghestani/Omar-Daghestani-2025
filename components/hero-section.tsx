"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { useContext } from "react";
import { CursorContext } from "./cursor-context";
import { scrollToSection } from "@/lib/scroll-utils";
import { SocialLinks } from "./social-links";
import { RESUME_URL } from "@/lib/constants";
import { Download } from "lucide-react";

const words = ["Hello,", "I'm", "Omar", "Daghestani"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const wordVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

const nameVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export function HeroSection() {
  const { setVariant } = useContext(CursorContext);

  const handleContactClick = () => {
    scrollToSection("#contact");
  };

  return (
    <section id="home" className="w-full pt-20 md:pt-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-5rem)]"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="space-y-6 text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
              variants={containerVariants}
            >
              {words.map((word, index) => {
                // Special styling for "Omar Daghestani"
                if (word === "Omar" || word === "Daghestani") {
                  return (
                    <motion.span
                      key={index}
                      className="inline-block mr-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 relative"
                      variants={nameVariants}
                    >
                      {word}
                      {/* Glow effect for the name */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-pink-500 blur-lg opacity-30 -z-10" />
                    </motion.span>
                  );
                }

                // Regular styling for other words
                return (
                  <motion.span
                    key={index}
                    className="inline-block mr-4 text-muted-foreground"
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.h1>

            {/* Enhanced name highlight */}
            <motion.div
              className="flex justify-center md:justify-start items-center gap-2"
              variants={itemVariants}
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="text-sm font-medium text-primary/70 uppercase tracking-wider">
                Full-Stack Developer
              </span>
              <div className="h-px w-8 bg-gradient-to-r from-primary/50 to-transparent" />
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              I specialize in building exceptional, high-quality websites and
              applications. Passionate about creating seamless user experiences
              and robust back-end solutions.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary))] cursor-default"
                onMouseEnter={() => setVariant("hover")}
                onMouseLeave={() => setVariant("default")}
                onClick={handleContactClick}
              >
                Contact Me
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary))] cursor-default"
                onMouseEnter={() => setVariant("hover")}
                onMouseLeave={() => setVariant("default")}
              >
                <a href={RESUME_URL} download>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>
            <motion.div variants={itemVariants}>
              <SocialLinks />
            </motion.div>
          </div>
          <motion.div
            className="relative flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 blur-3xl animate-pulse [animation-duration:4s]" />
            <motion.div
              className="relative rounded-full p-1 cursor-default"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onMouseEnter={() => setVariant("hover")}
              onMouseLeave={() => setVariant("default")}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-spin [animation-duration:4s]" />
              <Image
                src="/icon.jpg"
                alt="Omar Daghestani"
                width={400}
                height={400}
                className="relative rounded-full object-cover border-4 border-background"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
