"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  const handleEmailClick = () => {
    navigator.clipboard.writeText("omar.daghest@gmail.com");
  };

  const socialLinks = [
    {
      label: "GitHub",
      url: "https://github.com/OmarDaghestani",
      icon: <Github className="h-6 w-6" />,
      color: "hover:text-primary",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/omar-daghestani",
      icon: <Linkedin className="h-6 w-6" />,
      color: "hover:text-primary",
    },
    {
      label: "Email",
      url: "#",
      icon: <Mail className="h-6 w-6" />,
      color: "hover:text-primary",
      onClick: handleEmailClick,
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-muted-foreground">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-transparent border-white/20 focus:ring-2 focus:ring-primary/50 focus:ring-offset-0 focus:border-primary/50 cursor-default"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-muted-foreground">
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="bg-transparent border-white/20 focus:ring-2 focus:ring-primary/50 focus:ring-offset-0 focus:border-primary/50 cursor-default"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-muted-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    className="bg-transparent border-white/20 focus:ring-2 focus:ring-primary/50 focus:ring-offset-0 focus:border-primary/50 cursor-default"
                  />
                </div>
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 transition-shadow duration-300 hover:shadow-[0_0_30px_hsl(var(--primary))] cursor-default"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-lg mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target={link.onClick ? undefined : "_blank"}
                    rel={link.onClick ? undefined : "noopener noreferrer"}
                    onClick={link.onClick}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full bg-white/5 border border-white/10 text-muted-foreground transition-colors duration-300 cursor-default ${link.color}`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Contact Details</h4>
              <div className="space-y-3">
                <div
                  className="flex items-center gap-3 cursor-default"
                  onClick={handleEmailClick}
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    omar.daghest@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    github.com/OmarDaghestani
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">
                    linkedin.com/in/omar-daghestani
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
