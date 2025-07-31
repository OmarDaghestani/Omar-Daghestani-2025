"use client"

import { Code, Database, Wind, Type, Server, Bot, Globe, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React.js", icon: <Code className="w-12 h-12 text-[#61DAFB]" /> },
      { name: "Next.js", icon: <Code className="w-12 h-12 text-white" /> },
      { name: "JavaScript", icon: <Type className="w-12 h-12 text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <Type className="w-12 h-12 text-[#3178C6]" /> },
      { name: "Tailwind CSS", icon: <Wind className="w-12 h-12 text-[#38B2AC]" /> },
      { name: "HTML5", icon: <Globe className="w-12 h-12 text-[#E34F26]" /> },
      { name: "CSS3", icon: <Globe className="w-12 h-12 text-[#1572B6]" /> },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating robust and scalable server-side applications",
    skills: [
      { name: "Node.js", icon: <Server className="w-12 h-12 text-[#339933]" /> },
      { name: "Express.js", icon: <Server className="w-12 h-12 text-white" /> },
      { name: "GraphQL", icon: <Bot className="w-12 h-12 text-[#E535AB]" /> },
      { name: "MongoDB", icon: <Database className="w-12 h-12 text-[#47A248]" /> },
      { name: "PostgreSQL", icon: <Database className="w-12 h-12 text-[#4479A1]" /> },
      { name: "Firebase", icon: <Shield className="w-12 h-12 text-[#FFCA28]" /> },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Tools and technologies for deployment and development",
    skills: [
      { name: "Git", icon: <Zap className="w-12 h-12 text-[#F05032]" /> },
      { name: "GitHub", icon: <Zap className="w-12 h-12 text-white" /> },
      { name: "Docker", icon: <Shield className="w-12 h-12 text-[#2496ED]" /> },
      { name: "AWS", icon: <Shield className="w-12 h-12 text-[#FF9900]" /> },
      { name: "Vercel", icon: <Zap className="w-12 h-12 text-white" /> },
      { name: "npm", icon: <Zap className="w-12 h-12 text-[#CB3837]" /> },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, scale: 0.8, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
}

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Tech <span className="text-primary">Stack</span>
        </h2>
        
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
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md shadow-lg"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -10,
                    boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)",
                    borderColor: "hsl(var(--primary) / 0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="transition-transform duration-300 group-hover:[filter:drop-shadow(0_0_8px_hsl(var(--primary)))]">
                    {skill.icon}
                  </div>
                  <p className="mt-4 text-sm font-semibold text-center">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
