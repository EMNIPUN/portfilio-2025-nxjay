"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  Briefcase, Code, Database, Brain, 
  LineChart, Globe, Server, PenTool, 
  Cloud, Cpu
} from "lucide-react";
import React from "react";

interface SkillItem {
  category: string;
  items: string[];
  icon: React.ElementType;
  color: string;
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const skills: SkillItem[] = [
  {
    category: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    icon: Code,
    color: "from-teal-500 to-cyan-500",
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    icon: Server,
    color: "from-sky-500 to-blue-500",
  },
  {
    category: "AI & Machine Learning",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face"],
    icon: Brain,
    color: "from-purple-500 to-indigo-500",
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "AWS", "CI/CD", "Git"],
    icon: Cloud,
    color: "from-cyan-500 to-blue-500",
  },
];

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Tech Innovations Ltd.",
    period: "2024 - Present",
    description: "Leading development of AI-powered web applications using the MERN stack.",
    icon: Briefcase,
    color: "from-teal-500 to-cyan-500",
  },
  {
    role: "Software Engineering Intern",
    company: "WebSolutions Inc.",
    period: "2023 - 2024",
    description: "Collaborated on frontend development using React and Next.js.",
    icon: Code,
    color: "from-sky-500 to-blue-500",
  },
  {
    role: "Research Assistant",
    company: "SLIIT AI Lab",
    period: "2022 - 2023",
    description: "Worked on implementing machine learning algorithms for data analysis projects.",
    icon: Brain,
    color: "from-purple-500 to-indigo-500",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2021 - 2022",
    description: "Designed and developed websites for small businesses and startups.",
    icon: Globe,
    color: "from-amber-500 to-orange-500",
  },
];

export function SkillsTimeline() {
  return (
    <div className="space-y-10 relative">
      
      {/* Experience Timeline */}
      <div className="relative">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="w-5 h-5 text-teal-500" />
          <h3 className="text-xl font-semibold">Experience Timeline</h3>
        </div>
        
        <div className="relative border-l-2 border-accent/20 pl-6 ml-2 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div 
                className={`absolute -left-[30px] p-1.5 rounded-full bg-gradient-to-br ${exp.color}`}
              >
                <exp.icon className="w-3 h-3 text-white" />
              </div>
              
              {/* Content */}
              <div className="bg-accent/5 backdrop-blur-sm border border-accent/10 rounded-lg p-4 hover:bg-accent/10 transition-all">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">{exp.role}</h4>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <div className="text-sm text-primary/80 mb-2">{exp.company}</div>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
    </div>
  );
}
