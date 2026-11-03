/**
 * Application constants and configuration
 */

export const NAVIGATION_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const CONTACT_EMAIL = "omar@nexuscodelabs.dev";
export const NEXUS_URL = "https://nexuscodelabs.dev";

export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    url: "https://github.com/OmarDaghestani",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/omar-daghestani",
    icon: "linkedin",
  },
  {
    label: "Email",
    url: `mailto:${CONTACT_EMAIL}`,
    icon: "mail",
  },
] as const;

export const RESUME_URL = "/Omar-Daghestani-Resume-2026.pdf";

export const SCROLL_OFFSET = 5; // rem
export const SCROLL_DURATION = 1000; // ms
