"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <motion.div
      className={cn("w-full flex items-center justify-center py-12", className)}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-lg flex items-center">
        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
        <div className="relative mx-4">
          <div className="w-3 h-3 rounded-full bg-teal-500/30"></div>
          <div className="absolute inset-0 rounded-full bg-teal-500/30 animate-ping" style={{ animationDuration: '3s' }}></div>
        </div>
        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
      </div>
    </motion.div>
  );
}
