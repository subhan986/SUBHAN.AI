
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import type React from "react";
import { useState } from "react";

export function Header() {
  const [clickCount, setClickCount] = useState(0);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Favorites", href: "#favorites" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - 80; // Adjusted for header height

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleLogoClick = () => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    if (newClickCount === 5) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
      setClickCount(0); // Reset counter
    }
  };

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => handleScroll(e, item.href)}
          className={mobile 
            ? "text-lg font-medium text-foreground hover:text-primary transition-colors" 
            : "text-sm font-medium text-foreground/80 hover:text-primary transition-colors"}
        >
          {item.name}
        </a>
      ))}
    </>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-lg font-body shadow-[0_1px_0_hsl(var(--primary)/0.1)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" onClick={handleLogoClick} className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors font-minecraft">
          <span className="opacity-75">M</span>S
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </nav>
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col space-y-4 p-4">
                      <NavLinks mobile />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
