"use client";

import { motion } from "framer-motion";
import { User, Calendar, MapPin, Heart, GraduationCap, Languages, Coffee, Mail } from "lucide-react";
import { SkillsTimeline } from "../skills-timeline";
import { Ripple } from "../magicui/ripple";
import { QuoteCarousel } from "../quote-carousel";
import { TagSphere } from "../tech-sphere";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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

  const stats = [
    { 
      label: "Years Experience", 
      value: "3+", 
      icon: Calendar,
      color: "bg-teal-500/10",
      textColor: "text-teal-500"
    },
    { 
      label: "Projects Completed", 
      value: "50+", 
      icon: Coffee,
      color: "bg-cyan-500/10",
      textColor: "text-cyan-500"
    },
    { 
      label: "Happy Clients", 
      value: "30+", 
      icon: Heart,
      color: "bg-pink-500/10",
      textColor: "text-pink-500"
    },
    { 
      label: "Technologies", 
      value: "15+", 
      icon: Languages,
      color: "bg-sky-500/10",
      textColor: "text-sky-500"
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-background via-background/95 to-teal-900/5 dark:to-teal-500/10 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pattern-grid-lg text-accent/[0.015] opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <motion.div 
          variants={itemVariants} 
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 backdrop-blur-sm border border-accent/10 text-sm text-muted-foreground mb-4">
            <User className="w-3.5 h-3.5 text-teal-400" />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designing <span className="text-teal-400">AI-Powered</span> Web Experiences with {" "}
            <span className="bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-500 bg-clip-text text-transparent">Passion</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforming ideas into elegant, intelligent digital solutions
          </p>
          

        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10 bg-accent/5 backdrop-blur-sm border border-accent/10 rounded-xl p-8 shadow-xl">
              <Ripple className="opacity-30" mainCircleSize={150} mainCircleOpacity={0.03} numCircles={3} />
              
              <div className=" text-muted-foreground relative bottom-[50px] z-10">
                <p className="text-lg leading-relaxed">
                  I&apos;m a dedicated <span className="text-teal-400 font-medium">Software Engineering undergraduate</span> at SLIIT with hands-on experience in full-stack web development, particularly with the MERN stack. I&apos;m passionate about building AI-powered and user-friendly web applications that solve real-world problems.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My journey began with a strong curiosity about how modern technologies power digital systems. This curiosity has driven me to explore web development, machine learning, and cloud integration, always staying up-to-date with the latest tools and frameworks.
                </p>

                <p className="text-lg leading-relaxed">
                  Beyond coding, I enjoy experimenting with AI tools, contributing to university projects, and sharing what I learn through content creation and collaboration with the tech community.
                </p>
              </div>

              {/* Personal Info Cards */}
              <div className="relative bottom-[30px] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/10">
                  <div className="p-2 rounded-full bg-teal-500/10">
                    <GraduationCap className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Education</div>
                    <div className="text-sm font-medium">BSc Software Engineering</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/10">
                  <div className="p-2 rounded-full bg-cyan-500/10">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="text-sm font-medium">Kurunagala, Sri Lanka</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/10">
                  <div className="p-2 rounded-full bg-sky-500/10">
                    <Heart className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Interests</div>
                    <div className="text-sm font-medium">Tech, Content Creation, Travel</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/10">
                  <div className="p-2 rounded-full bg-pink-500/10">
                    <Mail className="w-4 h-4 text-pink-400" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="text-sm font-medium">nipun@example.com</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  className="relative group overflow-hidden"
                >
                  <div className="bg-accent/5 backdrop-blur-sm border border-accent/10 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-accent/10 transition-all">
                    <div className={`p-2 rounded-full ${stat.color} mb-2`}>
                      <stat.icon className={`w-5 h-5 ${stat.textColor}`} />
                    </div>
                    <div className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-sky-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
            {/* Tech Sphere */}
            <div className="mt-12 relative right-[100px] mx-auto w-[400px] h-[400px] hidden lg:block">
              <TagSphere 
                texts={[
                  "React", "Next.js", "TypeScript", "Node.js", "Express", 
                  "MongoDB", "PostgreSQL", "TailwindCSS", "Docker", "AWS", 
                  "Git", "Python", "TensorFlow", "PyTorch", "Hugging Face",
                  "REST API", "GraphQL", "Redux", "Zustand", "Framer Motion",
                  "CI/CD", "Jest", "Firebase", "Vercel", "Webpack", "Vite"
                ]}
                radius={150}
                className="opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Right Content - Skills & Experience */}
          <motion.div variants={itemVariants} className="relative">
            <div className="sticky top-24">
              <SkillsTimeline />
              
              {/* Mission Card */}
              <motion.div
                variants={itemVariants}
                className="mt-8 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 backdrop-blur-sm border border-accent/20 rounded-lg p-6 relative overflow-hidden"
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <span className="inline-block p-1.5 rounded-md bg-teal-500/20">
                    <Heart className="w-4 h-4 text-teal-400" />
                  </span>
                  My Mission
                </h3>
                <p className="text-muted-foreground relative z-10">
                  Applying AI technologies to solve practical, real-life problems effectively, while driving innovation and creating smarter, data-driven solutions that improve everyday experiences.
                </p>
                
                {/* Background glow */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-teal-500/5 rounded-full blur-3xl"></div>
              </motion.div>
              
              {/* Quote Carousel */}
              <motion.div variants={itemVariants} className="mt-8">
                <QuoteCarousel />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
