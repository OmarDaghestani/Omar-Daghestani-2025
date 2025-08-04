"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Wind,
  Type,
  Server,
  Bot,
  Globe,
  Shield,
  Zap,
} from "lucide-react";
import { skillCategories } from "@/lib/skills-data";
import { SectionWrapper } from "./section-wrapper";
import { SectionTitle } from "./section-title";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, scale: 0.8, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
};

const iconMap = {
  code: Code,
  database: Database,
  wind: Wind,
  type: Type,
  server: Server,
  bot: Bot,
  globe: Globe,
  shield: Shield,
  zap: Zap,
};

export function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle>
        My Tech <span className="text-primary">Stack</span>
      </SectionTitle>

      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              {category.title}
            </h3>
            <p className="text-muted-foreground">{category.description}</p>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            variants={containerVariants}
          >
            {category.skills.map((skill) => {
              const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={skill.name}
                  className="group flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-lg"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-200">
                    <IconComponent
                      className="w-12 h-12"
                      style={{ color: skill.color }}
                    />
                  </div>
                  <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      ))}
    </SectionWrapper>
  );
}
