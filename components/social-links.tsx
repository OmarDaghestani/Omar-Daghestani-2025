"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useContext } from "react";
import { CursorContext } from "./cursor-context";
import { SOCIAL_LINKS } from "@/lib/constants";

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

interface SocialLinksProps {
  className?: string;
  iconSize?: string;
}

export function SocialLinks({
  className = "",
  iconSize = "h-8 w-8",
}: SocialLinksProps) {
  const { setVariant } = useContext(CursorContext);

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {SOCIAL_LINKS.map((social) => {
        const IconComponent =
          socialIconMap[social.icon as keyof typeof socialIconMap];
        return (
          <motion.a
            key={social.label}
            href={social.url}
            target={social.icon === "mail" ? undefined : "_blank"}
            aria-label={social.label}
            whileHover={{
              scale: 1.1,
              y: -2,
              color: "hsl(var(--primary))",
            }}
            whileTap={{ scale: 0.95 }}
            rel={social.icon === "mail" ? undefined : "noreferrer"}
            className="text-muted-foreground cursor-default"
            onMouseEnter={() => setVariant("hover")}
            onMouseLeave={() => setVariant("default")}
          >
            <IconComponent className={iconSize} />
          </motion.a>
        );
      })}
    </div>
  );
}
