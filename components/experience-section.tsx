"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { roles, education } from "@/lib/experience-data";
import { SectionWrapper } from "./section-wrapper";
import { SectionTitle } from "./section-title";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" background="bg-secondary/30">
      <SectionTitle eyebrow="Experience">
        Where I&apos;ve <span className="text-primary">worked</span>
      </SectionTitle>

      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[2fr_1fr]">
        <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
          {roles.map((role, index) => (
            <motion.li
              key={role.company}
              className="relative"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <span
                className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-background sm:-left-[39px] ${
                  role.current ? "bg-primary" : "bg-muted-foreground/50"
                }`}
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold">
                  {role.title}{" "}
                  <span className="text-primary">· {role.company}</span>
                </h3>
                <p className="eyebrow shrink-0 text-muted-foreground">
                  {role.period}
                </p>
              </div>
              <p className="mb-2 text-sm text-muted-foreground">
                {role.location}
              </p>
              <p className="leading-relaxed text-muted-foreground">
                {role.summary}
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="section-surface h-fit p-6">
          <div className="mb-4 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Education</h3>
          </div>
          <ul className="space-y-4">
            {education.map((item) => (
              <li key={item.school}>
                <p className="font-medium">{item.credential}</p>
                <p className="text-sm text-muted-foreground">
                  {item.school} · {item.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}
