"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./cursor-context";
import { Button } from "./ui/button";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const imageVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export function AboutSection() {
  const { setVariant } = useContext(CursorContext);

  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30"
    >
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative flex justify-center cursor-default"
            variants={imageVariants}
            onMouseEnter={() => setVariant("hover")}
            onMouseLeave={() => setVariant("default")}
          >
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 blur-xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-pulse [animation-duration:4s]" />
            <Image
              src="/icon.jpg"
              alt="A portrait of Omar Daghestani, a professional developer"
              width={450}
              height={450}
              className="relative rounded-lg shadow-2xl"
            />
          </motion.div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <motion.p variants={textVariants}>
              My journey into tech began not in a classroom, but with a
              curiosity-driven dive into the source code of my favorite
              websites. This passion for deconstructing and understanding
              digital experiences evolved into a professional drive: to build
              intuitive, powerful, and elegant solutions to complex problems.
            </motion.p>
            <motion.p variants={textVariants}>
              As a developer, I am a user-centric design advocate with a
              meticulous attention to detail. I believe the best applications
              are born from a deep understanding of user needs, translated into
              clean, scalable, and maintainable code. Whether I'm architecting a
              backend or polishing a UI, my goal is always to create something
              that is not just functional, but delightful to use.
            </motion.p>
            <motion.p variants={textVariants}>
              Outside of coding, I'm an avid hiker, a hobby that trains my
              problem-solving skills on winding trails, and an amateur chef,
              which fosters creativity and precision—traits I bring to every
              project.
            </motion.p>
            <motion.div
              variants={textVariants}
              onMouseEnter={() => setVariant("hover")}
              onMouseLeave={() => setVariant("default")}
            >
              <Button
                size="lg"
                className="mt-4 cursor-default"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#contact");
                  if (element) {
                    document.documentElement.setAttribute(
                      "data-smooth-scroll",
                      "true"
                    );
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    setTimeout(() => {
                      document.documentElement.removeAttribute(
                        "data-smooth-scroll"
                      );
                    }, 1000);
                  }
                }}
              >
                Let's Connect
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
