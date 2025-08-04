"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useContext } from "react";
import { CursorContext } from "./cursor-context";
import { SocialLinks } from "./social-links";
import { SectionWrapper } from "./section-wrapper";
import { SectionTitle } from "./section-title";

export function ContactSection() {
  const { setVariant } = useContext(CursorContext);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("omar.daghest@gmail.com");
  };

  return (
    <SectionWrapper id="contact" background="bg-secondary/30">
      <SectionTitle subtitle="I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!">
        Get In <span className="text-primary">Touch</span>
      </SectionTitle>

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
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-transparent border-white/20 focus:ring-2 focus:ring-primary/50 focus:ring-offset-0 focus:border-primary/50 cursor-default resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground cursor-default"
                onMouseEnter={() => setVariant("hover")}
                onMouseLeave={() => setVariant("default")}
              >
                Send Message
              </Button>
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
            <p className="text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-semibold">📧</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground">omar.daghest@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-semibold">📍</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-muted-foreground">
                  Available for remote work worldwide
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-semibold">⏰</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Availability</h4>
                <p className="text-muted-foreground">
                  Open to new opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Follow Me</h4>
            <SocialLinks iconSize="h-6 w-6" />
          </div>

          <div className="pt-6">
            <Button
              onClick={handleEmailClick}
              variant="outline"
              className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground cursor-default"
              onMouseEnter={() => setVariant("hover")}
              onMouseLeave={() => setVariant("default")}
            >
              Copy Email Address
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
