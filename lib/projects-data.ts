export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  problem: string;
  role: string;
  features: string[];
  impact: string;
}

export const projects: Project[] = [
  {
    title: "WanderQuest",
    description:
      "A comprehensive travel planning platform that helps users discover destinations, plan itineraries, and book experiences.",
    image: "/wanderQuest.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "REST API"],
    githubUrl: "https://github.com/OmarDaghestani/WanderQuest",
    liveUrl: "https://wanderquest.omar-daghestani.com",
    problem:
      "Travel planning is often fragmented across multiple platforms, making it difficult for users to organize their trips efficiently and discover new destinations.",
    role: "Full-stack developer responsible for designing the user interface, implementing the backend API, and integrating third-party services for location data and booking functionality.",
    features: [
      "Interactive map integration for destination discovery",
      "Customizable itinerary planning with drag-and-drop functionality",
      "Real-time weather and local information",
      "Social features for sharing travel experiences",
      "Responsive design for mobile and desktop users",
    ],
    impact:
      "Streamlined the travel planning process, reducing planning time by 40% and improving user satisfaction through an intuitive, all-in-one platform.",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce solution with advanced features like real-time inventory, secure payments, and admin dashboard.",
    image: "/ecommerce.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/OmarDaghestani/ecommerce-platform",
    liveUrl: "https://ecom.omar-daghestani.com/",
    problem:
      "Small businesses need a cost-effective, scalable e-commerce solution that provides enterprise-level features without the complexity of traditional platforms.",
    role: "Lead developer focused on creating a scalable architecture, implementing secure payment processing, and building an intuitive admin interface for product and order management.",
    features: [
      "Secure payment processing with Stripe integration",
      "Real-time inventory management and stock alerts",
      "Advanced product filtering and search functionality",
      "Comprehensive admin dashboard with analytics",
      "Mobile-optimized shopping experience",
    ],
    impact:
      "Enabled small businesses to launch online stores quickly, with 60% faster setup time compared to traditional e-commerce platforms.",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and progress tracking.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop",
    tags: ["React", "Firebase", "Redux", "Material-UI", "Real-time", "PWA"],
    githubUrl: "https://github.com/OmarDaghestani/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    problem:
      "Teams struggle with task coordination and progress tracking, leading to missed deadlines and inefficient project management.",
    role: "Full-stack developer responsible for implementing real-time collaboration features, user authentication, and creating an intuitive task management interface.",
    features: [
      "Real-time task updates and team collaboration",
      "Drag-and-drop task organization and priority management",
      "Progress tracking with visual analytics and reporting",
      "Team member assignment and notification system",
      "Cross-platform synchronization and offline support",
    ],
    impact:
      "Improved team productivity by 35% and reduced project completion time through better task visibility and collaboration tools.",
  },
];
