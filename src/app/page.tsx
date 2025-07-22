
"use client";

import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { FavoritesSection } from "@/components/favorites-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ValuesSection } from "@/components/values-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { useEffect, useState } from "react";
import { GridBackground } from "@/components/grid-background";
import { TechStackSection } from "@/components/tech-stack-section";

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
        <GridBackground>
          <div className="space-y-10 md:space-y-16">
            <AboutSection />
            <FavoritesSection />
            <TechStackSection />
            <SkillsSection />
            <ProjectsSection />
            <ValuesSection />
            <ContactSection />
          </div>
          <Footer />
        </GridBackground>
      </main>
    </div>
  );
}
