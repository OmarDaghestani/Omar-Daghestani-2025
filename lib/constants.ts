/**
 * Application constants and configuration
 */

export const NAVIGATION_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

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
    url: "mailto:omar.daghest@gmail.com",
    icon: "mail",
  },
] as const;

export const RESUME_URL = "/Omar-Daghestani-Resume-2025.pdf";

export const SCROLL_OFFSET = 5; // rem
export const SCROLL_DURATION = 1000; // ms
