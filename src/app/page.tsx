"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroSection setActiveSection={setActiveSection} />;
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "experience":
        return <ExperienceSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <main className="min-h-screen">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="pt-16">
        {renderSection()}
      </div>
      <Footer setActiveSection={setActiveSection} />
    </main>
  );
}
