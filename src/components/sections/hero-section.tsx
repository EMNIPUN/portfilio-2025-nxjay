"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Terminal, Code, Coffee } from "lucide-react";
import { RainbowButton } from "../magicui/rainbow-button";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TerminalDemo } from "../terminal";

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export function HeroSection({ setActiveSection }: HeroSectionProps) {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const terminalTexts = [
    "Full-Stack Developer",
    "AI Enthusiast", 
    "Problem Solver",
    "Code Creator",
    "Tech Explorer"
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "Python", "AI/ML", 
    "JavaScript", "TailwindCSS", "MongoDB", "PostgreSQL", "Git", "Docker"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % terminalTexts.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-accent/5 dark:to-accent/10 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Content */}
          <div className="text-left">

            {/* Main Content */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-muted-foreground">Hi👋 ,I'm </span>
                <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Nipun Dhananjaya
                </span>
              </h1>
            </motion.div>

            {/* Terminal Header */}
            <TerminalDemo/>

            {/* Status Indicators */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Available for projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-yellow-500" />
                  <span className="text-muted-foreground">Powered by coffee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-500" />
                  <span className="text-muted-foreground">Always learning</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <RainbowButton
                onClick={() => setActiveSection("projects")}
                size="lg"
                className="flex items-center gap-2"
              >
                <span className="text-black font-medium">View Projects</span>
              </RainbowButton>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - Profile & Visual */}
          <motion.div variants={itemVariants} className="relative">
            {/* Profile Image */}
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <Image
                      src="/profile3.jpg"
                      alt="Nipun Dhananjaya"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

                {/* Social Links */}
                <motion.div variants={itemVariants} className="relative right-[750px] bottom-[300px] flex-col gap-4">
                  {[
                    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400" },
                    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
                    { icon: Mail, href: "#", label: "Email", color: "hover:text-green-400" },
                ].map((social) => (
                    <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-lg bg-accent/50 hover:bg-accent transition-all ${social.color}`}
                    aria-label={social.label}
                    >
                    <social.icon className="w-5 h-5" />
                    </motion.a>
                ))}
                </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Explore more</span>
          <motion.button
            onClick={() => setActiveSection("about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2 rounded-full hover:bg-accent transition-colors"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Marquee Background */}
      <div className="absolute top-20 left-0 w-full overflow-hidden opacity-10 pointer-events-none">
        <motion.div
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-6xl font-bold text-primary/20"
        >
          DEVELOPER • CREATOR • INNOVATOR • LEARNER • BUILDER •
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-0 w-full overflow-hidden opacity-10 pointer-events-none">
        <motion.div
          animate={{ x: [1000, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-4xl font-mono text-muted-foreground/20"
        >
          {technologies.join(" • ")} • {technologies.join(" • ")}
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
    </section>
  );
}
