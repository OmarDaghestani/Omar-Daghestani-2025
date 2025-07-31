"use client";

import { motion } from "framer-motion";
import { useContext, useState, useCallback } from "react";
import { CursorContext } from "./cursor-context";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Eye, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "WanderQuest",
    description:
      "A comprehensive travel planning platform that helps users discover destinations, plan itineraries, and book experiences.",
    image: "/wanderQuest.png",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "REST API"],
    githubUrl: "https://github.com/OmarDGreat/WanderQuest",
    liveUrl: "https://wanderquest-app.vercel.app",
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
    githubUrl: "https://github.com/OmarDGreat/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.vercel.app",
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
    githubUrl: "https://github.com/OmarDGreat/task-manager",
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
      "Improved team productivity by 35% through better task visibility and streamlined collaboration workflows.",
  },
];

export function ProjectsSection() {
  const { setVariant } = useContext(CursorContext);
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(projects.length);

  const handleCarouselSelect = useCallback((api: any) => {
    if (api) {
      setCurrent(api.selectedScrollSnap() + 1);
      setCount(api.scrollSnapList().length);
    }
  }, []);

  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development, user experience design, and problem-solving.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onSelect={handleCarouselSelect}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        onMouseEnter={() => setVariant("hover")}
                        onMouseLeave={() => setVariant("default")}
                        className="cursor-default"
                      >
                        <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                          <CardContent className="p-0">
                            <div className="relative overflow-hidden">
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                priority={index < 2}
                              />
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex items-center gap-2 text-white border border-white/50 rounded-full px-4 py-2">
                                  <Eye className="h-5 w-5" />
                                  <span>View Case Study</span>
                                </div>
                              </div>
                            </div>
                            <CardHeader>
                              <CardTitle className="text-xl font-bold truncate">
                                {project.title}
                              </CardTitle>
                              <CardDescription className="h-10 text-ellipsis overflow-hidden">
                                {project.description}
                              </CardDescription>
                            </CardHeader>
                            <CardFooter>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.slice(0, 3).map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="bg-primary/10 text-primary border-primary/20"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </CardFooter>
                          </CardContent>
                        </Card>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-[90vw] bg-background/80 backdrop-blur-2xl border-white/10 text-foreground">
                      <DialogHeader>
                        <DialogTitle className="text-3xl font-bold text-primary mb-2">
                          {project.title}
                        </DialogTitle>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <DialogDescription className="text-lg text-muted-foreground">
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-bold text-xl mb-2">Problem</h3>
                            <p className="text-muted-foreground">
                              {project.problem}
                            </p>
                          </div>
                          <div>
                            <h3 className="font-bold text-xl mb-2">My Role</h3>
                            <p className="text-muted-foreground">
                              {project.role}
                            </p>
                          </div>
                          <div>
                            <h3 className="font-bold text-xl mb-2">
                              Impact / Results
                            </h3>
                            <p className="text-muted-foreground">
                              {project.impact}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <h3 className="font-bold text-xl mb-2">
                            Key Features & Solutions
                          </h3>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            {project.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end gap-4">
                        <Button
                          asChild
                          variant="outline"
                          className="cursor-default"
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" /> GitHub
                          </a>
                        </Button>
                        <Button asChild className="cursor-default">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </a>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex cursor-default" />
          <CarouselNext className="hidden sm:flex cursor-default" />
        </Carousel>
        <div className="py-4 text-center text-sm text-muted-foreground">
          Slide {current} of {count}
        </div>
      </div>
    </section>
  );
}
