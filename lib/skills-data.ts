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

export interface Skill {
  name: string;
  icon: string;
  color?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    skills: [
      { name: "React.js", icon: "code", color: "#61DAFB" },
      { name: "Next.js", icon: "code", color: "white" },
      { name: "JavaScript", icon: "type", color: "#F7DF1E" },
      { name: "TypeScript", icon: "type", color: "#3178C6" },
      { name: "Tailwind CSS", icon: "wind", color: "#38B2AC" },
      { name: "HTML5", icon: "globe", color: "#E34F26" },
      { name: "CSS3", icon: "globe", color: "#1572B6" },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating robust and scalable server-side applications",
    skills: [
      { name: "Node.js", icon: "server", color: "#339933" },
      { name: "Express.js", icon: "server", color: "white" },
      { name: "GraphQL", icon: "bot", color: "#E535AB" },
      { name: "MongoDB", icon: "database", color: "#47A248" },
      { name: "PostgreSQL", icon: "database", color: "#4479A1" },
      { name: "Firebase", icon: "shield", color: "#FFCA28" },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Tools and technologies for deployment and development",
    skills: [
      { name: "Git", icon: "zap", color: "#F05032" },
      { name: "GitHub", icon: "zap", color: "white" },
      { name: "Docker", icon: "shield", color: "#2496ED" },
      { name: "AWS", icon: "shield", color: "#FF9900" },
      { name: "Vercel", icon: "zap", color: "white" },
      { name: "npm", icon: "zap", color: "#CB3837" },
    ],
  },
];
