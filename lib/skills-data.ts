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
  Cpu,
  Palette,
  Cloud,
  Layers,
  FileCode,
  FileText,
  GitBranch,
  Github,
  Package,
  Container,
  Flame,
  Box,
  Terminal,
  Settings,
  Monitor,
  Smartphone,
  Layout,
} from "lucide-react";

export interface Skill {
  name: string;
  icon: string;
  color?: string;
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
  yearsOfExperience?: number;
  description?: string;
  isHighlighted?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
  priority: number;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces",
    icon: "palette",
    priority: 1,
    skills: [
      {
        name: "React.js",
        icon: "layers",
        color: "#61DAFB",
        proficiency: "expert",
        yearsOfExperience: 4,
        description: "Modern UI development with hooks and context",
        isHighlighted: true,
      },
      {
        name: "Next.js",
        icon: "code",
        color: "white",
        proficiency: "advanced",
        yearsOfExperience: 3,
        description: "Full-stack React framework with SSR/SSG",
        isHighlighted: true,
      },
      {
        name: "TypeScript",
        icon: "type",
        color: "#3178C6",
        proficiency: "advanced",
        yearsOfExperience: 3,
        description: "Type-safe JavaScript development",
      },
      {
        name: "JavaScript",
        icon: "code",
        color: "#F7DF1E",
        proficiency: "expert",
        yearsOfExperience: 5,
        description: "Core language and modern ES6+ features",
      },
      {
        name: "Tailwind CSS",
        icon: "wind",
        color: "#38B2AC",
        proficiency: "advanced",
        yearsOfExperience: 3,
        description: "Utility-first CSS framework",
      },
      {
        name: "HTML5",
        icon: "globe",
        color: "#E34F26",
        proficiency: "expert",
        yearsOfExperience: 6,
        description: "Semantic markup and accessibility",
      },
      {
        name: "CSS3",
        icon: "palette",
        color: "#1572B6",
        proficiency: "advanced",
        yearsOfExperience: 5,
        description: "Modern styling with Flexbox and Grid",
      },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating robust and scalable server-side applications",
    icon: "server",
    priority: 2,
    skills: [
      {
        name: "Node.js",
        icon: "server",
        color: "#339933",
        proficiency: "advanced",
        yearsOfExperience: 4,
        description: "Server-side JavaScript runtime",
        isHighlighted: true,
      },
      {
        name: "Express.js",
        icon: "code",
        color: "white",
        proficiency: "advanced",
        yearsOfExperience: 4,
        description: "Web application framework for Node.js",
      },
      {
        name: "GraphQL",
        icon: "database",
        color: "#E535AB",
        proficiency: "beginner",
        yearsOfExperience: 2,
        description: "Query language for APIs",
      },
      {
        name: "MongoDB",
        icon: "database",
        color: "#47A248",
        proficiency: "advanced",
        yearsOfExperience: 3,
        description: "NoSQL document database",
      },
      {
        name: "PostgreSQL",
        icon: "database",
        color: "#4479A1",
        proficiency: "intermediate",
        yearsOfExperience: 2,
        description: "Relational database management",
      },
      {
        name: "Firebase",
        icon: "flame",
        color: "#FFCA28",
        proficiency: "beginner",
        yearsOfExperience: 2,
        description: "Backend-as-a-Service platform",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Tools and technologies for deployment and development",
    icon: "cloud",
    priority: 3,
    skills: [
      {
        name: "Git",
        icon: "gitBranch",
        color: "#F05032",
        proficiency: "advanced",
        yearsOfExperience: 4,
        description: "Version control and collaboration",
      },
      {
        name: "GitHub",
        icon: "github",
        color: "white",
        proficiency: "advanced",
        yearsOfExperience: 4,
        description: "Code hosting and collaboration platform",
      },
      {
        name: "Docker",
        icon: "container",
        color: "#2496ED",
        proficiency: "beginner",
        yearsOfExperience: 2,
        description: "Containerization and deployment",
      },
      {
        name: "AWS",
        icon: "cloud",
        color: "#FF9900",
        proficiency: "beginner",
        yearsOfExperience: 2,
        description: "Cloud computing services",
      },
      {
        name: "Vercel",
        icon: "zap",
        color: "white",
        proficiency: "advanced",
        yearsOfExperience: 3,
        description: "Frontend deployment platform",
      },
      {
        name: "npm",
        icon: "package",
        color: "#CB3837",
        proficiency: "advanced",
        yearsOfExperience: 4,
        description: "Package management and scripting",
      },
    ],
  },
];
