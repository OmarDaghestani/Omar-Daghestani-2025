"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { skillIcons } from "@/lib/icon-utils";
import { skillGroups, certifications } from "@/lib/skills-data";
import { SectionWrapper } from "./section-wrapper";
import { SectionTitle } from "./section-title";

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        eyebrow="Toolkit"
        subtitle="The stack behind the systems above — what I reach for when it has to work in production."
      >
        Skills &amp; <span className="text-primary">technologies</span>
      </SectionTitle>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon =
            skillIcons[group.icon as keyof typeof skillIcons] || skillIcons.code;

          return (
            <motion.div
              key={group.title}
              className={`section-surface p-6 ${
                index === 0 ? "border-primary/40 bg-primary/5" : ""
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-border/70 bg-background/40 px-2.5 py-1 text-sm text-muted-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}

        <motion.div
          className="section-surface flex flex-col justify-center p-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: skillGroups.length * 0.05 }}
        >
          <h3 className="eyebrow mb-4 text-muted-foreground">Certifications</h3>
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-center gap-3">
                <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium">{cert}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
