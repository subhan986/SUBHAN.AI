"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Bento", href: "#bento" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

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

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => handleScroll(e, item.href)}
          className={cn(
            "transition-all duration-300 relative group overflow-hidden",
            mobile 
              ? "text-lg font-medium text-foreground hover:text-primary py-2 px-4 rounded-lg" 
              : "text-xs font-medium text-foreground/70 hover:text-white px-3 py-1.5 rounded-full button-shine"
          )}
        >
          <span className="relative z-10">{item.name}</span>
          {!mobile && (
            <span className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors rounded-full -z-0" />
          )}
          {!mobile && (
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-1/2" />
          )}
        </a>
      ))}
    </>
  );

  return (
    <div className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
        className={cn(
          "pointer-events-auto flex items-center gap-4 md:gap-8 px-6 h-14",
          "bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full",
          "shadow-[0_8px_32px_rgba(0,0,0,0.5)] font-body relative",
          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none before:-z-10"
        )}
      >
        <Link 
          href="/" 
          className="text-lg font-bold text-primary hover:text-primary/80 transition-all font-minecraft shrink-0 group relative overflow-hidden px-2 py-1 rounded-md"
        >
          <span className="opacity-75 group-hover:opacity-100 transition-opacity">M</span>S
          <span className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform rounded-md -z-10" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <NavLinks />
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
                      <NavLinks mobile />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </motion.header>
    </div>
  );
}
