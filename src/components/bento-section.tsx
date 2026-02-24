
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShinyCard } from "./shiny-card";
import { 
  BrainCircuit, 
  Globe, 
  Laptop, 
  Rocket, 
  Zap, 
  Code, 
  Sparkles, 
  Coffee, 
  Timer, 
  Book, 
  Gamepad2, 
  Cpu,
  Target,
  MessageCircle
} from "lucide-react";
import { Badge } from "./ui/badge";

export function BentoSection() {
  return (
    <section id="bento" className="py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold font-headline text-primary">System Architecture</h2>
          <p className="mt-2 text-lg text-foreground/80 font-body">Mapping the core components of my digital identity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[160px] gap-4">
          {/* Main Mission Card - Large */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-8 bg-card/40 border border-white/10 rounded-2xl flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Cpu className="w-32 h-32" />
                </div>
                <Rocket className="w-12 h-12 text-primary pulsing-icon mb-4" />
                <div>
                  <h3 className="text-2xl font-bold font-headline mb-4">The Golden Mission</h3>
                  <p className="text-foreground/80 font-body text-lg leading-relaxed">
                    Merging high-level AI concepts with visual design to create tools that empower students and developers globally. I don't just write code; I design solutions for human potential.
                  </p>
                </div>
                <div className="flex gap-2 mt-6">
                  <Badge variant="outline" className="bg-primary/10 border-primary/20">Visionary</Badge>
                  <Badge variant="outline" className="bg-primary/10 border-primary/20">Builder</Badge>
                  <Badge variant="outline" className="bg-primary/10 border-primary/20">Thinker</Badge>
                </div>
              </div>
            </ShinyCard>
          </motion.div>

          {/* Location Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-card/40 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center">
                <Globe className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-headline text-[10px] mb-1 opacity-50 uppercase tracking-tighter">Location</h4>
                <p className="font-body text-foreground/90 font-bold">Faisalabad, PK</p>
              </div>
            </ShinyCard>
          </motion.div>

          {/* Age Highlight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-primary/10 border border-primary/30 rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="text-3xl font-headline text-primary mb-1">15</div>
                <h4 className="font-headline text-[10px] opacity-70 uppercase tracking-tighter">Years Young</h4>
              </div>
            </ShinyCard>
          </motion.div>

          {/* Goals Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-card/40 border border-white/10 rounded-2xl flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-red-500" />
                  <h4 className="font-headline text-[8px] uppercase">Roadmap 2025</h4>
                </div>
                <p className="font-body text-[10px] text-foreground/70">Democratizing AI for education through intuitive SaaS platforms.</p>
              </div>
            </ShinyCard>
          </motion.div>

          {/* Tech Stack Mini Highlight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-card/40 border border-white/10 rounded-2xl flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <Laptop className="w-5 h-5 text-primary" />
                  <h4 className="font-headline text-[8px] uppercase">Core Tools</h4>
                </div>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-[9px] px-1 py-0 border-white/10">Next.js</Badge>
                  <Badge variant="outline" className="text-[9px] px-1 py-0 border-white/10">Firebase</Badge>
                  <Badge variant="outline" className="text-[9px] px-1 py-0 border-white/10">Tailwind</Badge>
                </div>
              </div>
            </ShinyCard>
          </motion.div>

          {/* streak box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="md:col-span-1 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-card/40 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center">
                <Timer className="w-8 h-8 text-green-500 mb-2" />
                <p className="font-headline text-[10px]">365+ Days</p>
                <p className="font-body text-[10px] text-foreground/50">Continuous Building</p>
              </div>
            </ShinyCard>
          </motion.div>

          {/* Habits Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="md:col-span-1 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-card/40 border border-white/10 rounded-2xl flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <Gamepad2 className="w-4 h-4 text-orange-500" />
                  <h4 className="font-headline text-[8px] uppercase">Interests</h4>
                </div>
                <ul className="text-[9px] font-body text-foreground/60 space-y-0.5">
                  <li>• UI/UX Motion Design</li>
                  <li>• Reading Philosphy</li>
                  <li>• Anime & Narrative Art</li>
                </ul>
              </div>
            </ShinyCard>
          </motion.div>

          {/* Coffee box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="md:col-span-1 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-card/40 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center">
                <Coffee className="w-8 h-8 text-amber-600 mb-2" />
                <p className="font-headline text-[10px]">Infinite</p>
                <p className="font-body text-[10px] text-foreground/50">Fuel Consumption</p>
              </div>
            </ShinyCard>
          </motion.div>

          {/* Community Involvement */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="md:col-span-1 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-card/40 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center">
                <MessageCircle className="w-8 h-8 text-blue-400 mb-2" />
                <h4 className="font-headline text-[8px] uppercase mb-1">Community</h4>
                <p className="font-body text-[10px] text-foreground/70">Learning & Building in public.</p>
              </div>
            </ShinyCard>
          </motion.div>

          {/* Current Focus - EdTech */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="md:col-span-2 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-card/40 border border-white/10 rounded-2xl flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <BrainCircuit className="w-8 h-8 text-purple-500" />
                  <div>
                    <h4 className="font-headline text-[8px] uppercase">Current Research</h4>
                    <p className="font-body text-sm text-foreground/90">Bio-AI & Synthetic Biology Interfaces</p>
                  </div>
                </div>
                <p className="font-body text-xs text-foreground/60 leading-tight">Exploring how generative AI can accelerate the design of synthetic gene circuits and biological simulations.</p>
              </div>
            </ShinyCard>
          </motion.div>

           {/* Code Box */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
            className="md:col-span-1 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-card/40 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center">
                <Code className="w-8 h-8 text-blue-500 mb-2" />
                <p className="font-body text-[10px] text-foreground/70 leading-tight">Writing the scriptures of the future, one line at a time.</p>
              </div>
            </ShinyCard>
          </motion.div>

          {/* Philosophy/Status Card - Wide Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="md:col-span-4 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-primary/5 border border-primary/20 rounded-2xl flex items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-10 opacity-5 pointer-events-none">
                  <Sparkles className="w-40 h-40 text-primary" />
                </div>
                <div className="flex items-center gap-4 relative z-10">
                  <Sparkles className="w-10 h-10 text-primary pulsing-icon shrink-0" />
                  <p className="font-body text-base md:text-lg text-foreground/90 max-w-2xl leading-relaxed">
                    "I believe that code is the modern ink, and we are writing the scriptures of the future. Every line is a heartbeat of a new reality."
                  </p>
                </div>
                <div className="hidden lg:flex flex-col items-end gap-1 shrink-0">
                  <Badge variant="secondary" className="font-minecraft text-[10px] animate-pulse bg-primary text-primary-foreground">SYSTEM CORE: NOMINAL</Badge>
                  <span className="text-[8px] font-mono text-foreground/30">ID: SUBHAN_0.1.5_REV_2024</span>
                </div>
              </div>
            </ShinyCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
