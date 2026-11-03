export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  current?: boolean;
  url?: string;
}

export const roles: Role[] = [
  {
    company: "Nexus Code",
    title: "Founder & Engineer",
    period: "2025 – Present",
    location: "Denver, CO",
    summary:
      "Independent AI & automation practice. Sole engineer from architecture to operations — currently building and running Iron Buffalo's 30-system platform.",
    current: true,
    url: "https://nexuscodelabs.dev",
  },
  {
    company: "Cognizant / TriZetto",
    title: "Infrastructure Support Engineer",
    period: "Apr 2026 – Present",
    location: "Englewood, CO",
    summary:
      "Enterprise healthcare infrastructure across Windows and Linux. Incident triage and root-cause analysis, alerting automation, and LLM training and evaluation for internal automation tooling.",
    current: true,
  },
  {
    company: "edX",
    title: "Full Stack Teaching Assistant",
    period: "Jan 2023 – Oct 2025",
    location: "Remote",
    summary:
      "Mentored 200+ engineers in full-stack development, architecture patterns, systematic debugging, and Git workflows.",
  },
  {
    company: "PowerSchool",
    title: "Technical Resource Specialist",
    period: "Apr 2021 – Jan 2023",
    location: "Remote",
    summary:
      "Supported enterprise SaaS platforms, automated operational workflows with PHP and cron, and ran release testing.",
  },
];

export const education = [
  {
    school: "Western Governors University",
    credential: "B.S., Software Engineering",
    year: "2024",
  },
  {
    school: "Columbia Engineering",
    credential: "Full Stack Boot Camp",
    year: "2022",
  },
];
