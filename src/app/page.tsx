"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ValuesSection } from "@/components/values-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="space-y-20 md:space-y-32">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ValuesSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
