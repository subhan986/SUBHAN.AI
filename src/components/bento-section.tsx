
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShinyCard } from "./shiny-card";
import { BrainCircuit, Globe, Laptop, Rocket, Zap, Heart } from "lucide-react";
import { Badge } from "./ui/badge";

export function BentoSection() {
  return (
    <section id="bento" className="py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold font-headline text-primary">At A Glance</h2>
          <p className="mt-2 text-lg text-foreground/80 font-body">Rapid snapshots of my digital existence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 md:h-[600px]">
          {/* Main Mission Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-8 bg-card/40 border border-white/10 rounded-2xl flex flex-col justify-between">
                <Rocket className="w-12 h-12 text-primary pulsing-icon mb-4" />
                <div>
                  <h3 className="text-2xl font-bold font-headline mb-4">Golden Mission</h3>
                  <p className="text-foreground/80 font-body text-lg">
                    Merging high-level AI concepts with visual design to create tools that empower students and developers globally.
                  </p>
                </div>
                <div className="flex gap-2 mt-6">
                  <Badge variant="outline" className="bg-primary/10 border-primary/20">Bio-AI</Badge>
                  <Badge variant="outline" className="bg-primary/10 border-primary/20">EdTech</Badge>
                  <Badge variant="outline" className="bg-primary/10 border-primary/20">Web3</Badge>
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
                <Globe className="w-10 h-10 text-primary mb-2" />
                <h4 className="font-headline text-sm mb-1">Based In</h4>
                <p className="font-body text-foreground/70">Faisalabad, PK</p>
              </div>
            </ShinyCard>
          </motion.div>

          {/* Age/Status Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-card/40 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center">
                <Zap className="w-10 h-10 text-yellow-500 mb-2" />
                <h4 className="font-headline text-sm mb-1">Status</h4>
                <p className="font-body text-foreground/70">Building Daily</p>
              </div>
            </ShinyCard>
          </motion.div>

          {/* Tech Stack Mini Highlight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-card/40 border border-white/10 rounded-2xl flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-3">
                  <Laptop className="w-8 h-8 text-primary" />
                  <h4 className="font-headline text-sm">Tech Preferred</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-white/5 border-white/10 text-xs">Next.js</Badge>
                  <Badge className="bg-white/5 border-white/10 text-xs">TypeScript</Badge>
                  <Badge className="bg-white/5 border-white/10 text-xs">Firebase</Badge>
                  <Badge className="bg-white/5 border-white/10 text-xs">Genkit</Badge>
                  <Badge className="bg-white/5 border-white/10 text-xs">Tailwind</Badge>
                </div>
              </div>
            </ShinyCard>
          </motion.div>

          {/* Personality Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 md:row-span-1"
          >
            <ShinyCard className="h-full">
              <div className="h-full p-6 bg-primary/5 border border-primary/20 rounded-2xl flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Heart className="w-10 h-10 text-red-500 fill-red-500/20" />
                  <p className="font-body text-lg text-foreground/90 max-w-xl">
                    I believe that code is the modern ink, and we are writing the scriptures of the future.
                  </p>
                </div>
                <div className="hidden md:block">
                  <Badge variant="secondary" className="font-minecraft text-[10px] animate-pulse">SYSTEM ONLINE</Badge>
                </div>
              </div>
            </ShinyCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
