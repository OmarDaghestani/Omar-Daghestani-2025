"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useContext } from "react";
import { CursorContext } from "./cursor-context";

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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export function HeroSection() {
  const { setVariant } = useContext(CursorContext);

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
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  className="inline-block mr-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-muted-foreground"
              variants={itemVariants}
            >
              Full-Stack Web Developer
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              I specialize in building exceptional, high-quality websites and
              applications. Passionate about creating seamless user experiences
              and robust back-end solutions.
            </motion.p>
            <motion.div
              className="flex justify-center md:justify-start items-center gap-4"
              variants={itemVariants}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary))] cursor-default"
                onMouseEnter={() => setVariant("hover")}
                onMouseLeave={() => setVariant("default")}
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
              <div className="flex items-center gap-4">
                <motion.a
                  href="https://github.com/OmarDaghestani"
                  target="_blank"
                  aria-label="GitHub"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    color: "hsl(var(--primary))",
                  }}
                  whileTap={{ scale: 0.95 }}
                  rel="noreferrer"
                  className="text-muted-foreground cursor-default"
                  onMouseEnter={() => setVariant("hover")}
                  onMouseLeave={() => setVariant("default")}
                >
                  <Github className="h-8 w-8" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/omar-daghestani"
                  target="_blank"
                  aria-label="LinkedIn"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    color: "hsl(var(--primary))",
                  }}
                  whileTap={{ scale: 0.95 }}
                  rel="noreferrer"
                  className="text-muted-foreground cursor-default"
                  onMouseEnter={() => setVariant("hover")}
                  onMouseLeave={() => setVariant("default")}
                >
                  <Linkedin className="h-8 w-8" />
                </motion.a>
                <motion.a
                  href="mailto:omar.daghest@gmail.com"
                  aria-label="Email"
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    color: "hsl(var(--primary))",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground cursor-default"
                  onMouseEnter={() => setVariant("hover")}
                  onMouseLeave={() => setVariant("default")}
                >
                  <Mail className="h-8 w-8" />
                </motion.a>
              </div>
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
