
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { LiquidChromeBackground } from "./liquid-chrome-background";

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden pt-16">
      <LiquidChromeBackground />
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center px-4"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-2 font-minecraft">
          Muhammad Subhan
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium text-beige-200 font-minecraft">
          Developer ✦ AI Builder ✦ Visual Thinker
        </p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-2xl text-xl md:text-2xl text-foreground/80 font-body"
        >
          Crafting digital experiences with unwavering resolve.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 flex gap-4 font-headline"
        >
          <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
            <Button asChild size="lg" className="rounded-full transition-all duration-300 shadow-[0_0_0_0_hsl(var(--primary))] hover:shadow-[0_0_20px_0px_hsl(var(--primary)/0.5)]">
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>
           <motion.div whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.2 } }}>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-black/20 backdrop-blur-sm border-white/20 hover:bg-black/40 hover:border-white/50 transition-all duration-300">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.a
          href="#about"
          aria-label="Scroll down"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 1.5
          }}
          className="absolute bottom-10 z-10"
      >
          <ArrowDown className="h-8 w-8 text-foreground/50"/>
      </motion.a>
    </section>
  );
}
