"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Smartphone, Globe, Zap } from "lucide-react";

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "iOS Development", level: 70 },
        { name: "Android Development", level: 72 },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Zap,
      skills: [
        { name: "Docker", level: 78 },
        { name: "AWS", level: 82 },
        { name: "Git/GitHub", level: 95 },
        { name: "CI/CD", level: 80 },
      ],
    },
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "Docker", "AWS", "Tailwind CSS", "Framer Motion",
    "Git", "Figma", "Vercel", "Firebase"
  ];

  return (
    <section className="min-h-screen py-20 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <Code className="w-5 h-5" />
            <span className="font-medium">Skills & Technologies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I Bring to the{" "}
            <span className="text-primary">Table</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set covering the full spectrum of modern web development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-accent/30 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <motion.div variants={itemVariants} className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-accent/50 hover:bg-accent border border-border rounded-full text-sm font-medium cursor-default transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
