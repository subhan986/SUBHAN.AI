
"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { name: "About", href: "#about", id: "about" },
    { name: "Bento", href: "#bento", id: "bento" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    const homeSection = document.getElementById("home");
    if (homeSection) observer.observe(homeSection);

    return () => observer.disconnect();
  }, [navItems]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const offset = 100;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        className={cn(
          "pointer-events-auto flex items-center gap-4 md:gap-8 px-6 h-14",
          "bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-full",
          "shadow-[0_8px_32px_rgba(0,0,0,0.5)] font-body relative group",
          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none before:-z-10",
          "hover:border-primary/30 transition-all duration-500"
        )}
      >
        {/* Ambient Glow */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10 bg-primary/5 blur-xl" />

        <Link 
          href="/" 
          className="text-lg font-bold text-primary transition-all font-minecraft shrink-0 group/logo relative px-2 py-1 rounded-md"
        >
          <motion.span 
            animate={{ opacity: [0.6, 1, 0.6] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="opacity-75 group-hover/logo:opacity-100"
          >
            M
          </motion.span>
          S
          <div className="absolute -inset-2 bg-primary/20 blur-lg rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1 relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;
            
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={cn(
                  "relative z-10 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 px-4 py-2 rounded-full",
                  isActive || isHovered ? "text-white" : "text-white/40 hover:text-white/70"
                )}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Active/Hover Pill */}
                <AnimatePresence>
                  {(isActive || isHovered) && (
                    <motion.div
                      layoutId="nav-pill"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={cn(
                        "absolute inset-0 rounded-full -z-10",
                        isActive ? "bg-white/10 border border-white/10" : "bg-white/5"
                      )}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </nav>

        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-white/10 text-foreground/70">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-white/10">
                    <div className="flex flex-col space-y-4 mt-12 p-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleScroll(e, item.href)}
                                className={cn(
                                  "text-lg font-medium py-2 px-4 rounded-lg transition-colors",
                                  activeSection === item.id ? "text-primary bg-primary/10" : "text-foreground hover:bg-white/5"
                                )}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </motion.header>
    </div>
  );
}
