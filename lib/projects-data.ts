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
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather forecasting application with interactive maps, location-based services, and severe weather alerts integration.",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=450&fit=crop",
    tags: ["React", "OpenWeather API", "Mapbox", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/OmarDaghestani/weather-dashboard",
    liveUrl: "https://weather.omar-daghestani.com",
    problem:
      "Users need a comprehensive weather application that provides accurate forecasts, interactive maps, and location-based services in a single, intuitive interface.",
    role: "Frontend developer focused on creating an intuitive weather interface, integrating multiple weather APIs, and implementing interactive map features for location-based weather data.",
    features: [
      "Real-time weather data with hourly and daily forecasts",
      "Interactive maps with weather overlay and location search",
      "Severe weather alerts and notifications system",
      "Location-based services with GPS integration",
      "Responsive design optimized for mobile weather checking",
    ],
    impact:
      "Provided users with a comprehensive weather solution that combines multiple weather services, improving weather awareness and planning capabilities.",
  },
  {
    title: "Fitness Tracker",
    description:
      "Personal fitness application with workout planning, progress tracking, and nutrition monitoring. Includes data visualization and goal setting features.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop",
    tags: ["React Native", "GraphQL", "Node.js", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/OmarDaghestani/fitness-tracker",
    liveUrl: "https://fitness.omar-daghestani.com",
    problem:
      "Fitness enthusiasts struggle to track their progress, plan workouts, and maintain consistency without a comprehensive tool that combines workout planning, progress tracking, and nutrition monitoring.",
    role: "Mobile app developer responsible for creating a cross-platform fitness application with workout planning, progress visualization, and nutrition tracking features.",
    features: [
      "Customizable workout plans with exercise library",
      "Progress tracking with charts and analytics",
      "Nutrition monitoring and meal planning",
      "Goal setting and achievement tracking",
      "Social features for motivation and sharing",
    ],
    impact:
      "Helped users achieve their fitness goals more effectively, with 45% of users reporting improved consistency and 30% better goal achievement rates.",
  },
  {
    title: "AI Image Generator",
    description:
      "Creative tool that generates unique images using AI algorithms. Features custom style transfer, image manipulation, and social sharing capabilities.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop",
    tags: ["React", "TensorFlow.js", "Python", "AWS", "Canvas API"],
    githubUrl: "https://github.com/OmarDaghestani/ai-image-generator",
    liveUrl: "https://ai-art.omar-daghestani.com",
    problem:
      "Creators and designers need accessible AI-powered tools for generating unique images and artwork without requiring deep technical knowledge of machine learning.",
    role: "Full-stack developer focused on creating an intuitive AI image generation interface, implementing style transfer algorithms, and building a social platform for sharing generated artwork.",
    features: [
      "AI-powered image generation with multiple style options",
      "Custom style transfer and image manipulation tools",
      "Social gallery for sharing and discovering artwork",
      "Real-time image processing and preview",
      "Export functionality for high-resolution images",
    ],
    impact:
      "Democratized AI art creation, enabling users without technical backgrounds to create unique artwork and explore creative possibilities with AI technology.",
  },
];
