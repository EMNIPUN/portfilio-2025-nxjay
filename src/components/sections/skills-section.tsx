"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Smartphone, Globe, Zap } from "lucide-react";
import { MarqueeDemo } from "../3dMarqueue";

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

  // Technologies grouped by type for better visual organization
  const technologies = {
    languages: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
    frontend: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux", "Material UI", "Shadcn UI"],
    backend: ["Node.js", "Express", "Flask", "GraphQL", "REST API"],
    databases: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "Redis"],
    devOps: ["Docker", "AWS", "Vercel", "CI/CD", "GitHub Actions", "Netlify"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Jest"]
  };

  // Technology icons mapping as a Record<string, string> to fix TypeScript error
  const techIcons: Record<string, string> = {
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    "Framer Motion": "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    "Redux": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "Material UI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    "Shadcn UI": "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    "REST API": "https://www.vectorlogo.zone/logos/openapis/openapis-icon.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "Supabase": "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
    "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    "Vercel": "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    "CI/CD": "https://cdn-icons-png.flaticon.com/512/5568/5568377.png",
    "GitHub Actions": "https://github.githubassets.com/assets/actions-icon-actions-61925a4b8822.svg",
    "Netlify": "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Postman": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "Jest": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  };

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
          <MarqueeDemo/>
        </motion.div>

        {/* Technology Tags */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-10">
            My <span className="text-primary">Tech Stack</span>
          </h3>
          
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div 
              key={category} 
              className="mb-10"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-8 w-1 rounded-full bg-gradient-to-b from-primary to-purple-500"></div>
                <h4 className="text-lg font-semibold capitalize bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">{category}</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.05 * techIndex + 0.1 * categoryIndex,
                      duration: 0.3
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
                      y: -2
                    }}
                    className="px-4 py-2 rounded-xl text-sm font-medium bg-white/20 dark:bg-gray-800/30 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 hover:border-primary/40 transition-all cursor-default flex items-center gap-2.5 hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 shadow-sm"
                  >
                    <div className="w-5 h-5 flex items-center justify-center rounded-md overflow-hidden bg-white/80 dark:bg-gray-900/80 p-0.5">
                      <img 
                        src={techIcons[tech]} 
                        alt={`${tech} icon`} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <span className="font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </motion.div>
    </section>
  );
}
