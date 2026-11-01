"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, ExternalLink, Github, Lock } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { featuredCaseStudy, projects } from "@/lib/projects-data";
import { SectionWrapper } from "./section-wrapper";
import { SectionTitle } from "./section-title";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function CaseStudy() {
  const study = featuredCaseStudy;

  return (
    <motion.article
      className="section-surface relative overflow-hidden p-6 sm:p-8 lg:p-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={cardVariants}
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative flex flex-wrap items-center gap-3">
        <span className="eyebrow rounded-full bg-primary px-3 py-1 text-primary-foreground">
          Featured case study
        </span>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <Building2 className="h-4 w-4" />
          <span className="font-medium text-foreground">{study.client}</span>
          <span className="hidden sm:inline">· {study.clientDescription}</span>
        </span>
      </div>

      <div className="relative mt-6 grid gap-8 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-4">
          <h3 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
            {study.title}
          </h3>
          <p className="text-muted-foreground sm:text-lg">{study.summary}</p>
        </div>
        <dl className="grid grid-cols-2 gap-3 self-start">
          {study.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border/60 bg-background/40 p-4"
            >
              <dd className="text-3xl font-bold tracking-tight text-primary">
                {stat.value}
              </dd>
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>

      <ul className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {study.highlights.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-border/60 bg-background/30 p-5 transition-colors hover:border-primary/40"
          >
            <h4 className="mb-2 font-semibold">{item.title}</h4>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <div className="relative mt-8 flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {study.stack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="border-primary/20 bg-primary/10 text-primary"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <p className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
          <Lock className="h-3.5 w-3.5" />
          Client code is private
        </p>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle
        eyebrow="Selected work"
        subtitle="Production client work through Nexus Code, plus open-source projects you can run yourself."
      >
        Things I&apos;ve <span className="text-primary">built</span>
      </SectionTitle>

      <CaseStudy />

      <h3 className="eyebrow mb-6 mt-16 text-muted-foreground">
        Open-source projects
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="section-surface group flex flex-col overflow-hidden transition-colors hover:border-primary/40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="relative h-44 overflow-hidden border-b border-border/60 bg-gradient-to-br from-primary/20 via-background to-indigo-500/20">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-3xl font-bold tracking-tight text-foreground/80">
                    {project.title}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h4 className="mb-2 text-lg font-bold">{project.title}</h4>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3">
                {project.liveUrl && (
                  <Button asChild size="sm" className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
