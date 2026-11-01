"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bot, Cloud, Workflow } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { SectionTitle } from "./section-title";

const imageVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const pillars = [
  {
    icon: Bot,
    title: "LLMs that earn their keep",
    description:
      "Claude wired into real workflows — auditing, classification, OCR, reporting — with evaluation behind every prompt.",
  },
  {
    icon: Cloud,
    title: "Infrastructure I can sleep on",
    description:
      "Serverless AWS, least-privilege IAM, and drift detection so nothing changes in production without someone knowing.",
  },
  {
    icon: Workflow,
    title: "End-to-end ownership",
    description:
      "From the first whiteboard sketch to the runbook — I build it, ship it, and stay on the hook for it.",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about" background="bg-secondary/30">
      <SectionTitle eyebrow="About">
        Engineer, operator, <span className="text-primary">founder</span>
      </SectionTitle>

      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[2fr_3fr]">
        <motion.div
          className="relative flex justify-center"
          variants={imageVariants}
        >
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-primary/40 to-indigo-500/40 blur-xl" />
          <Image
            src="/aboutme.jpg"
            alt="Portrait of Omar Daghestani"
            width={400}
            height={400}
            className="relative rounded-2xl shadow-2xl"
          />
        </motion.div>

        <div className="space-y-6 text-lg text-muted-foreground">
          <motion.p variants={textVariants}>
            I started in support and teaching — helping enterprise SaaS
            customers at PowerSchool and mentoring 200+ developers at edX. That
            taught me what breaks in production and how to explain it to the
            people it breaks for.
          </motion.p>
          <motion.p variants={textVariants}>
            In 2025 I founded <span className="text-foreground">Nexus Code</span>,
            an independent AI and automation practice. My flagship engagement
            is Iron Buffalo Holdings, a multi-shop heavy-truck repair company,
            where I built and run a 30-system platform that handles their
            reporting, compliance, commissions, and customer portals. I also
            support enterprise healthcare infrastructure at Cognizant/TriZetto.
          </motion.p>

          <motion.ul className="grid gap-4 pt-2 sm:grid-cols-3" variants={textVariants}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <li key={title} className="section-surface p-4">
                <Icon className="mb-3 h-6 w-6 text-primary" />
                <h3 className="mb-1 text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed">{description}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
