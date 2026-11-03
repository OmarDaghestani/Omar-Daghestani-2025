export interface CaseStudy {
  client: string;
  clientDescription: string;
  title: string;
  summary: string;
  stats: { value: string; label: string }[];
  highlights: { title: string; description: string }[];
  stack: string[];
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const featuredCaseStudy: CaseStudy = {
  client: "Iron Buffalo Holdings",
  clientDescription: "Multi-shop heavy-truck repair and fleet services",
  title: "A 30-system automation platform, built and run by one engineer",
  summary:
    "Through Nexus Code I architected, shipped, and operate the systems that run Iron Buffalo day to day — revenue reporting, compliance, commissions, and customer portals — with Claude woven into the workflows that used to eat hours of manual work.",
  stats: [
    { value: "30", label: "Production systems" },
    { value: "2,400+", label: "Merged pull requests" },
    { value: "10+", label: "Claude-powered workflows" },
    { value: "45", label: "Entities exposed via MCP" },
  ],
  highlights: [
    {
      title: "AI in production",
      description:
        "Claude API integrated into invoice auditing, service-request classification, handwritten-note OCR, and twice-daily AI-written operations briefings. New audit rules are dry-run on live tickets first: one first run was 69% false positives, traced to two bugs and fixed before anyone saw it.",
    },
    {
      title: "MCP server for the business",
      description:
        "A read-only MCP server on ECS Fargate that lets the team ask natural-language questions of the production SQL Server database.",
    },
    {
      title: "DOT compliance platform",
      description:
        "Offline-capable digital inspections for DOT annual (49 CFR 396.17) and PM work, with countersignatures, dispatch queues, and randomized integrity checks that catch inspections signed off without being performed.",
    },
    {
      title: "Fleet customer portal",
      description:
        "Externally authenticated portal (email OTP + JWT sessions) serving fleet-readiness and spend KPIs to the largest national fleet account.",
    },
    {
      title: "Safe-deploy CI/CD",
      description:
        "GitHub Actions pipelines with deploy gates that harvest out-of-band production edits into pull requests, plus nine scheduled detectors for drift, unshipped merges, and stalled jobs.",
    },
    {
      title: "Hardened API surface",
      description:
        "Closed a read-path SQL write bypass, enforced table whitelisting, flipped fail-open defaults to fail-closed, and wrote the credential-rotation runbook.",
    },
  ],
  stack: [
    "Claude API",
    "MCP",
    "AWS Lambda",
    "ECS Fargate",
    "SQL Server (RDS)",
    "S3",
    "EventBridge",
    "Google Apps Script",
    "Python",
    "TypeScript",
    "GitHub Actions",
  ],
};

export const projects: Project[] = [
  {
    title: "Roamify",
    description:
      "Budget-aware trip planner with an LLM chat assistant. Suggested destinations are enriched with live weather, exchange rates, and language notes.",
    tags: ["LLM", "React", "Node.js", "MongoDB", "JWT"],
    githubUrl: "https://github.com/OmarDaghestani/Roamify",
  },
  {
    title: "WanderQuest",
    description:
      "Travel planning platform for discovering destinations and organizing itineraries in one place.",
    image: "/wanderQuest.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/OmarDaghestani/WanderQuest",
    liveUrl: "https://wanderquest.omar-daghestani.com",
  },
  {
    title: "E-Commerce Application",
    description:
      "Full-stack store with product browsing, cart, checkout, and order tracking, secured with JWT authentication.",
    image: "/ecommerce.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com/OmarDaghestani/d424",
    liveUrl: "https://ecom.omar-daghestani.com/",
  },
];
