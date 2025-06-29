"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Briefcase } from "lucide-react";
import { RainbowButton } from "../magicui/rainbow-button";

export function ProjectsSection() {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, featuring real-time inventory management, secure payment processing, and responsive design.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that provides detailed forecasts, interactive maps, and location-based weather alerts.",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Express.js", "OpenWeather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Social Media Analytics",
      description: "An analytics dashboard for social media managers to track engagement, growth metrics, and content performance across platforms.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Python", "Django", "PostgreSQL", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Fitness Tracking App",
      description: "A mobile-first fitness application with workout tracking, progress visualization, and social features for motivation.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Real Estate Platform",
      description: "A comprehensive real estate platform with property listings, virtual tours, and mortgage calculator integration.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="min-h-screen py-20 bg-accent/3 dark:bg-accent/8">
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
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projects That Define{" "}
            <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work, demonstrating technical expertise and creative problem-solving
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Project Image */}
              <motion.div
                className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative group overflow-hidden rounded-lg border border-border">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary/50">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-black hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-black hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              {/* Project Info */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <RainbowButton size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </RainbowButton>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary/50">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-accent text-xs rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-primary text-primary-foreground rounded-md text-sm hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 border border-border rounded-md text-sm hover:bg-accent transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
