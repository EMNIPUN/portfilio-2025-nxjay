"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export function Footer({ setActiveSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    setActiveSection("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/nxjay", // Update with your actual GitHub username
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/nxjay", // Update with your actual LinkedIn username
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:your.actual.email@example.com", // Update with your actual email
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Projects", section: "projects" },
    { label: "Experience", section: "experience" },
    { label: "Contact", section: "contact" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">NX Jay</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative digital solutions 
              that make a positive impact. Available for freelance projects and collaborations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-accent hover:bg-accent/80 rounded-lg transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <motion.button
                    onClick={() => setActiveSection(link.section)}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Let&apos;s Connect</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>your.actual.email@example.com</p>
              <p>+1 (123) 456-7890</p>
              <p>Your Actual City, Country</p>
            </div>
            <motion.button
              onClick={() => setActiveSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              Get In Touch
            </motion.button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-1 text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} NX Jay. Built with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            <span>using Next.js, Tailwind CSS, and Framer Motion</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
