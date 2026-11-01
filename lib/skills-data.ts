export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "AI Engineering",
    icon: "sparkles",
    skills: [
      "Anthropic Claude API",
      "Tool use & vision",
      "OCR pipelines",
      "Prompt design & evaluation",
      "Model routing",
      "MCP servers",
      "LLM workflow automation",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      "AWS Lambda",
      "ECS Fargate",
      "RDS",
      "S3",
      "API Gateway",
      "EventBridge",
      "SES",
      "IAM",
      "Docker",
      "GitHub Actions",
      "Drift detection",
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: "code",
    skills: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL (T-SQL)",
      "Node.js",
      "React",
      "Next.js",
      "Google Apps Script",
      "PHP",
    ],
  },
  {
    title: "Data",
    icon: "database",
    skills: [
      "SQL Server on RDS",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "REST API design",
      "Data API Builder",
    ],
  },
  {
    title: "Security & Reliability",
    icon: "shield",
    skills: [
      "JWT & OTP auth",
      "Least-privilege IAM",
      "SQL injection remediation",
      "Credential rotation",
      "Incident triage",
      "Runbooks & SOPs",
      "SLA compliance",
    ],
  },
];

export const certifications = [
  "AWS Certified Cloud Practitioner",
  "CompTIA Security+",
  "CompTIA Project+",
];
