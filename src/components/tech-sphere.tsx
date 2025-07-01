"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface TagSphereProps {
  texts: string[];
  radius?: number;
  className?: string;
}

export function TagSphere({ texts = [], radius = 200, className = "" }: TagSphereProps) {
  const [isHovering, setIsHovering] = useState(false);
  const cloudRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const depth = 2 * radius;
  const size = 1.5 * radius;
  const [tags, setTags] = useState<HTMLElement[]>([]);

  useEffect(() => {
    // Initialize tags
    if (!cloudRef.current) return;
    
    const cloud = cloudRef.current;
    const createdTags: HTMLElement[] = [];
    
    texts.forEach((text, i) => {
      const tag = document.createElement("div");
      tag.dataset.index = i.toString();
      tag.style.position = "absolute";
      tag.style.cursor = "default";
      tag.style.userSelect = "none";
      tag.style.transition = "color 0.2s ease-in-out";
      tag.innerText = text;
      
      cloud.appendChild(tag);
      createdTags.push(tag);
    });
    
    setTags(createdTags);
    
    return () => {
      // Cleanup
      createdTags.forEach(tag => tag.remove());
    };
  }, [texts]);

  useEffect(() => {
    let animationFrameId: number;
    let time = new Date().getTime();
    
    const updateTagPosition = () => {
      const a = mouseX.current / size;
      const b = -mouseY.current / size;
      
      // Slower rotation when not hovering
      const speed = isHovering ? 1.0 : 0.3;
      
      // Current time
      const newTime = new Date().getTime();
      // Cumulative rotation
      const dtr = ((newTime - time) / 1000) * speed;
      time = newTime;
      
      tags.forEach((tag, i) => {
        // Initial position
        const phi = Math.acos(-1 + (2 * i) / tags.length);
        const theta = Math.sqrt(tags.length * Math.PI) * phi;
        
        // Convert to cartesian
        let x = radius * Math.cos(theta) * Math.sin(phi);
        let y = radius * Math.sin(theta) * Math.sin(phi);
        let z = radius * Math.cos(phi);
        
        // Add some auto rotation
        const rx1 = x;
        const ry1 = y * Math.cos(a) + z * Math.sin(a);
        const rz1 = -y * Math.sin(a) + z * Math.cos(a);
        
        const rx2 = rx1 * Math.cos(b) + rz1 * Math.sin(b);
        const ry2 = ry1;
        const rz2 = -rx1 * Math.sin(b) + rz1 * Math.cos(b);
        
        // Animate automatic rotation
        const rx3 = rx2 * Math.cos(dtr) + ry2 * Math.sin(dtr);
        const ry3 = -rx2 * Math.sin(dtr) + ry2 * Math.cos(dtr);
        const rz3 = rz2;
        
        // Set new position
        x = rx3;
        y = ry3;
        z = rz3;
        
        // Calculate opacity and scale based on depth
        const scale = depth / (depth + z);
        const opacity = (z + radius) / (2 * radius);
        
        // Update tag element style
        if (tag) {
          tag.style.left = `${(x * scale) + size}px`;
          tag.style.top = `${(y * scale) + size}px`;
          tag.style.zIndex = Math.round((scale) * 100).toString();
          tag.style.opacity = opacity.toString();
          tag.style.fontSize = `${Math.max(12, 25 * scale)}px`;
          
          // Add color transition based on depth
          if (z < 0) {
            tag.style.color = `rgba(120, 220, 232, ${0.8 * opacity})`; // teal color for tags in front
          } else {
            tag.style.color = `rgba(100, 155, 220, ${0.8 * opacity})`; // blue color for tags in back
          }
          
          // Make tags pop on hover
          tag.onmouseover = () => {
            tag.style.fontSize = `${Math.max(15, 30 * scale)}px`;
            tag.style.fontWeight = "bold";
            tag.style.color = z < 0 ? "rgba(0, 203, 203, 1)" : "rgba(79, 125, 201, 1)";
          };
          
          tag.onmouseout = () => {
            tag.style.fontSize = `${Math.max(12, 25 * scale)}px`;
            tag.style.fontWeight = "normal";
            
            if (z < 0) {
              tag.style.color = `rgba(120, 220, 232, ${0.8 * opacity})`;
            } else {
              tag.style.color = `rgba(100, 155, 220, ${0.8 * opacity})`;
            }
          };
        }
      });
      
      animationFrameId = requestAnimationFrame(updateTagPosition);
    };
    
    updateTagPosition();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [tags, radius, size, depth, isHovering]);

  // Event handlers
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cloudRef.current) return;
    
    const rect = cloudRef.current.getBoundingClientRect();
    mouseX.current = e.clientX - (rect.left + rect.width / 2);
    mouseY.current = e.clientY - (rect.top + rect.height / 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`relative ${className}`}
      style={{ width: 2 * size, height: 2 * size }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        ref={cloudRef} 
        style={{ position: "relative", width: "100%", height: "100%" }}
        className="cursor-grab active:cursor-grabbing"
      />
    </motion.div>
  );
}
