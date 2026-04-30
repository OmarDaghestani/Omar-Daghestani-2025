import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";

// Lazy load non-critical components
const SkillsSection = dynamic(
  () =>
    import("@/components/skills-section").then((mod) => ({
      default: mod.SkillsSection,
    })),
  {
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    ),
    ssr: true,
  }
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/projects-section").then((mod) => ({
      default: mod.ProjectsSection,
    })),
  {
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    ),
    ssr: true,
  }
);

const InsightsSection = dynamic(
  () =>
    import("@/components/insights-section").then((mod) => ({
      default: mod.InsightsSection,
    })),
  {
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    ),
    ssr: true,
  }
);

const ContactSection = dynamic(
  () =>
    import("@/components/contact-section").then((mod) => ({
      default: mod.ContactSection,
    })),
  {
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    ),
    ssr: true,
  }
);

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => ({ default: mod.Footer })),
  {
    loading: () => <div className="h-32 bg-muted animate-pulse"></div>,
    ssr: true,
  }
);

export default function Home() {
  return (
    <div className="page-shell flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="story-divider" aria-hidden="true" />
        </div>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
