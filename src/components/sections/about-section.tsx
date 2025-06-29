"use client";

import { motion } from "framer-motion";
import { User, Calendar, MapPin, Heart } from "lucide-react";
import { AnimatedListDemo } from "../animaatelist";

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
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Technologies", value: "15+" },
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-accent/3 dark:bg-accent/8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center gap-2 text-primary mb-4">
                <User className="w-5 h-5" />
                <span className="font-medium">About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Designing AI-Powered Web Experiences with {" "}
                <span className="text-primary">Passion</span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                I'm a dedicated Software Engineering undergraduate at SLIIT with hands-on experience in full-stack web development, particularly with the MERN stack. I’m passionate about building AI-powered and user-friendly web applications that solve real-world problems.
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey began with a strong curiosity about how modern technologies power digital systems. This curiosity has driven me to explore web development, machine learning, and cloud integration, always staying up-to-date with the latest tools and frameworks.
              </p>

              <p className="text-lg leading-relaxed">
                Beyond coding, I enjoy experimenting with AI tools, contributing to university projects, and sharing what I learn through content creation and collaboration with the tech community.
              </p>
            </motion.div>

            {/* Personal Info */}
            <motion.div variants={itemVariants} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Born: December 2001</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Location: Kurunagala, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Heart className="w-5 h-5 text-primary" />
                <span>Interests: Tech, Content Creation, Travel</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stats */}
          <motion.div variants={itemVariants} className="lg:pl-8">
            <AnimatedListDemo />

            {/* Additional Info Card */}
            <motion.div
              variants={itemVariants}
              className="mt-8 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-3">My Mission</h3>
              <p className="text-muted-foreground">
                Applying AI technologies to solve practical, real-life problems effectively, while driving innovation and creating smarter, data-driven solutions that improve everyday experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
