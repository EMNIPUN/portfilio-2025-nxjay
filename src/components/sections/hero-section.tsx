"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Terminal, Code, Coffee, ExternalLink, Sparkles, User } from "lucide-react";
import { RainbowButton } from "../magicui/rainbow-button";
import { useState, useEffect } from "react";
import Image from "next/image";
import { TerminalDemo } from "../terminal";
import { Ripple } from "../magicui/ripple";


interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

export function HeroSection({ setActiveSection }: HeroSectionProps) {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState<string | null>(null);

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

  const socialIcons = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-400", hoverBg: "hover:bg-gray-800" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400", hoverBg: "hover:bg-blue-800/20" },
    { icon: Mail, href: "#", label: "Email", color: "hover:text-green-400", hoverBg: "hover:bg-green-800/20" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background via-background/95 to-teal-900/5 dark:to-teal-500/10 overflow-hidden">
      {/* Subtle Background Patterns */}
      <div className="absolute inset-0 pattern-grid-lg text-accent/[0.025] opacity-20" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-left relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
            
            {/* Main Content with Greeting */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-10">
                <span className="text-muted-foreground">Hi 👋, I'm </span>
                <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-500 bg-clip-text text-transparent">
                  Nipun Dhananjaya
                </span>
              </h1>
            </motion.div>

            {/* Terminal Component */}
            <motion.div 
              variants={itemVariants} 
              className="mb-8 relative backdrop-blur-sm rounded-lg overflow-hidden border border-accent/10"
            >
              <TerminalDemo />
              <Ripple 
                className="opacity-50" 
                mainCircleSize={150}
                mainCircleOpacity={0.05}
                numCircles={3}
              />
            </motion.div>

            {/* Status Indicators with more refined styling */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Available for projects</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 backdrop-blur-sm">
                  <Coffee className="w-4 h-4 text-amber-400" />
                  <span className="text-muted-foreground">Powered by coffee</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 backdrop-blur-sm">
                  <Code className="w-4 h-4 text-sky-400" />
                  <span className="text-muted-foreground">Always learning</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons with improved styling */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <RainbowButton
                onClick={() => setActiveSection("projects")}
                size="lg"
                className="flex items-center gap-2 shadow-lg shadow-teal-500/10"
              >
                <span className="text-black dark:text-black font-medium">View Projects</span>
                <ExternalLink className="w-4 h-4 text-black dark:text-black" />
              </RainbowButton>
              
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-lg hover:bg-accent/20 transition-all shadow-lg shadow-accent/5"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links - Properly positioned */}
            <motion.div variants={itemVariants} className="relative bottom-[500px] right-[150px] flex-col items-center gap-3">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  onMouseEnter={() => setIsHovering(social.label)}
                  onMouseLeave={() => setIsHovering(null)}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/10 transition-all ${social.color} ${social.hoverBg} shadow-lg shadow-accent/5`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>


          {/* Right Side - Profile & Visual with glass-morphism */}
          <motion.div variants={itemVariants} className="relative mb-24">
            {/* Profile Image with enhanced styling */}
            <div className="relative flex justify-center ">
              <div className="relative w-80 h-80 shadow-2xl">
                {/* Animated gradient backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/30 via-cyan-500/30 to-sky-500/30 rounded-full blur-xl animate-pulse"></div>
                
                {/* Main gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 rounded-full p-1.5 shadow-lg shadow-teal-500/20">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background/80 backdrop-blur-md p-1">
                    {/* Profile Image */}
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <Image
                        src="/profile3.jpg"
                        alt="Nipun Dhananjaya"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Experience pill indicator */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute top-5 right-0 flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/10 rounded-full px-4 py-2 shadow-lg"
            >
              <User className="w-4 h-4 text-teal-400" />
              <span className="text-sm">3+ Years Experience</span>
            </motion.div>
            
            {/* Tech stack pill */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-5 left-0 flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/10 rounded-full px-4 py-2 shadow-lg"
            >
              <Code className="w-4 h-4 text-sky-400" />
              <span className="text-sm">Full Stack Developer</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator with improved styling */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Explore more</span>
          <motion.button
            onClick={() => setActiveSection("about")}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/10 hover:bg-accent/20 transition-all"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5 text-teal-400" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Marquee Background with softer styling */}
      <div className="absolute top-20 left-0 w-full overflow-hidden opacity-5 pointer-events-none">
        <motion.div
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-6xl font-bold text-white-500/30"
        >
          DEVELOPER • CREATOR • INNOVATOR • LEARNER • BUILDER •
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-0 w-full overflow-hidden opacity-5 pointer-events-none">
        <motion.div
          animate={{ x: [1000, -1000] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-4xl font-mono text-sky-500/30"
        >
          {technologies.join(" • ")} • {technologies.join(" • ")}
        </motion.div>
      </div>

      {/* Enhanced Background Effects with relaxing colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/3 rounded-full blur-3xl animate-pulse delay-500" />
      </div>
    </section>
  );
}
