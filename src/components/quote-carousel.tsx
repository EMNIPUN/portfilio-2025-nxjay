"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useEffect } from "react";

interface QuoteProps {
  author: string;
  role: string;
  content: string;
}

const quotes: QuoteProps[] = [
  {
    author: "Dr. Sarah Chen",
    role: "Lead AI Researcher, TechLabs",
    content: "Nipun's ability to combine AI models with web interfaces is exceptional. His projects demonstrate both technical depth and creative problem-solving.",
  },
  {
    author: "Michael Rodriguez",
    role: "Senior Developer, WebSolutions Inc.",
    content: "Working with Nipun was a pleasure. His clean code and attention to detail make him an outstanding developer with tremendous potential.",
  },
  {
    author: "Prof. Anjali Patel",
    role: "Computer Science Department, SLIIT",
    content: "Nipun consistently demonstrates exceptional problem-solving skills and a remarkable ability to grasp complex concepts quickly.",
  },
];

export function QuoteCarousel({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative bg-accent/5 backdrop-blur-sm border border-accent/10 rounded-xl p-6 h-60 overflow-hidden">
        {/* Quote icon */}
        <div className="absolute top-4 right-4">
          <Quote className="w-12 h-12 text-accent/10" />
        </div>
        
        {/* Background glow */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl" />
        
        {/* Quotes */}
        <div className="relative h-full flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-between h-full"
            >
              <p className="text-lg text-muted-foreground italic mb-4">
                "{quotes[activeIndex].content}"
              </p>
              
              <div>
                <div className="font-medium">{quotes[activeIndex].author}</div>
                <div className="text-sm text-muted-foreground">{quotes[activeIndex].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-4">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-teal-500 w-6' : 'bg-accent/20'}`}
            aria-label={`Show quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
