"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techStackTop = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Firebase",
  "Genkit",
];
const techStackBottom = [
  "Python",
  "Zod",
  "Git",
  "GitHub",
  "Figma",
  "REST APIs",
  "Three.js",
  "Framer Motion",
  "ShadCN UI",
  "Vercel",
];

const allTech = [...techStackTop, ...techStackBottom];

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary mb-2">
          My Tech Stack
        </h2>
        <p className="text-lg text-foreground/80 font-headline mb-12">
          Technologies I use to bring ideas to life.
        </p>
      </div>
      <div className="relative flex flex-col gap-4 overflow-hidden">
        <div className="flex -translate-x-1/4">
          <MarqueeRow items={techStackTop} />
          <MarqueeRow items={techStackTop} />
          <MarqueeRow items={techStackTop} />
        </div>
         <div className="flex -translate-x-1/4">
          <MarqueeRow items={techStackBottom} reverse />
          <MarqueeRow items={techStackBottom} reverse />
          <MarqueeRow items={techStackBottom} reverse />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
      </div>
    </section>
  );
}

const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => {
  return (
    <div className={`flex min-w-full shrink-0 items-center justify-around gap-4 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
      {items.map((text) => (
        <Badge
          key={text}
          variant="secondary"
          className="text-lg md:text-xl whitespace-nowrap px-6 py-2 border-primary/20 border"
        >
          {text}
        </Badge>
      ))}
    </div>
  );
};
