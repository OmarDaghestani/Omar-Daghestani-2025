"use client";

import { useContext, useCallback } from "react";
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
import { projects } from "@/lib/projects-data";
import { SectionWrapper } from "./section-wrapper";
import { SectionTitle } from "./section-title";

export function ProjectsSection() {
  const { setVariant } = useContext(CursorContext);

  const handleCarouselSelect = useCallback(() => {
    // Handle carousel selection if needed
  }, []);

  return (
    <SectionWrapper id="projects">
      <SectionTitle subtitle="Here are some of my recent projects that showcase my skills in full-stack development, user experience design, and problem-solving.">
        Featured <span className="text-primary">Projects</span>
      </SectionTitle>

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
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 h-full"
            >
              <div className="p-1 h-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      onMouseEnter={() => setVariant("hover")}
                      onMouseLeave={() => setVariant("default")}
                      className="cursor-default"
                    >
                      <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 project-card">
                        <CardContent className="p-0 project-card-content">
                          <div className="relative overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.title}
                              width={800}
                              height={450}
                              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                              priority={index < 2}
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="flex items-center gap-2 text-white border border-white/50 rounded-full px-4 py-2">
                                <Eye className="h-5 w-5" />
                                <span>View Case Study</span>
                              </div>
                            </div>
                          </div>
                          <CardHeader className="flex-1 flex flex-col">
                            <CardTitle className="text-xl font-bold truncate">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="project-card-description text-sm leading-relaxed">
                              {project.description}
                            </CardDescription>
                          </CardHeader>
                          <CardFooter className="mt-auto">
                            <div className="flex flex-wrap gap-2">
                              {project.tags.slice(0, 3).map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="bg-primary/10 text-primary border-primary/20 text-xs"
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
                  <DialogContent className="max-w-4xl w-[95vw] sm:w-[90vw] max-h-[90vh] overflow-y-auto bg-background/80 backdrop-blur-2xl border-white/10 text-foreground p-4 sm:p-6">
                    <DialogHeader className="space-y-3">
                      <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
                        {project.title}
                      </DialogTitle>
                      <DialogDescription className="text-sm sm:text-base md:text-lg text-muted-foreground">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                            Problem
                          </h4>
                          <p className="text-muted-foreground text-sm sm:text-base">
                            {project.problem}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                            My Role
                          </h4>
                          <p className="text-muted-foreground text-sm sm:text-base">
                            {project.role}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                            Key Features
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
                            {project.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                            Impact
                          </h4>
                          <p className="text-muted-foreground text-sm sm:text-base">
                            {project.impact}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                        <Button
                          asChild
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base"
                          onMouseEnter={() => setVariant("hover")}
                          onMouseLeave={() => setVariant("default")}
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Live
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1 text-sm sm:text-base"
                          onMouseEnter={() => setVariant("hover")}
                          onMouseLeave={() => setVariant("default")}
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </SectionWrapper>
  );
}
