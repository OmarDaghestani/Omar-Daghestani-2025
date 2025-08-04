"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useContext, useState } from "react";
import { CursorContext } from "./cursor-context";
import { SocialLinks } from "./social-links";
import { SectionWrapper } from "./section-wrapper";
import { SectionTitle } from "./section-title";
import { sendContactEmail, ContactFormData } from "../lib/contact-utils";

export function ContactSection() {
  const { setVariant } = useContext(CursorContext);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleEmailClick = () => {
    navigator.clipboard.writeText("omar.daghest@gmail.com");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message,
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "An error occurred. Please try again or use the email button below.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-muted-foreground">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="bg-transparent border-white/20 focus:ring-2 focus:ring-primary/50 focus:ring-offset-0 focus:border-primary/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-muted-foreground">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com"
                    className="bg-transparent border-white/20 focus:ring-2 focus:ring-primary/50 focus:ring-offset-0 focus:border-primary/50"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-transparent border-white/20 focus:ring-2 focus:ring-primary/50 focus:ring-offset-0 focus:border-primary/50 resize-none"
                  required
                />
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-3 rounded-lg text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                onMouseEnter={() => setVariant("hover")}
                onMouseLeave={() => setVariant("default")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
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
            <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
            <p className="text-lg text-muted-foreground mb-8">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your visions.
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
