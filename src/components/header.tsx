
"use client";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import type React from "react";

export function Header() {
  const { scrollY } = useScroll();
  
  // Smooth scroll progress
  const scrollSpring = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dynamic values based on scroll
  const headerPadding = useTransform(scrollSpring, [0, 100], ["2rem", "1.5rem"]);
  const headerHeight = useTransform(scrollSpring, [0, 100], ["4rem", "3.5rem"]);
  const headerScale = useTransform(scrollSpring, [0, 100], [1, 0.95]);
  const headerOpacity = useTransform(scrollSpring, [0, 100], [0.4, 0.8]);
  const headerBlur = useTransform(scrollSpring, [0, 100], [12, 24]);

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
          className={mobile 
            ? "text-lg font-medium text-foreground hover:text-primary transition-colors" 
            : "text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"}
        >
          {item.name}
          {!mobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          )}
        </a>
      ))}
    </>
  );

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.header
        style={{
          paddingLeft: headerPadding,
          paddingRight: headerPadding,
          height: headerHeight,
          scale: headerScale,
          backgroundColor: `rgba(13, 1, 20, ${headerOpacity.get()})`, // Approximating background with opacity
          backdropFilter: `blur(${headerBlur.get()}px)`,
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto flex items-center gap-6 md:gap-8 border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] font-body"
      >
        <Link href="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors font-minecraft shrink-0">
          <span className="opacity-75">M</span>S
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>

        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-white/10">
                        <Menu className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col space-y-6 mt-12 p-4">
                      <NavLinks mobile />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </motion.header>
    </div>
  );
}
