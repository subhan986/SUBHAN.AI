"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

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

export function TechStackSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-5%", "25%"]);


  return (
    <section id="tech-stack" ref={targetRef} className="py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold font-headline text-primary mb-2">
          My Tech Stack
        </h2>
        <p className="text-lg text-foreground/80 font-headline mb-12">
          Technologies I use to bring ideas to life.
        </p>
      </div>
      <div className="relative flex flex-col gap-4 overflow-hidden">
        <motion.div style={{ x: x1 }} className="flex gap-4">
          <MarqueeRow items={techStackTop} />
          <MarqueeRow items={techStackTop} />
          <MarqueeRow items={techStackTop} />
        </motion.div>
         <motion.div style={{ x: x2 }} className="flex gap-4">
          <MarqueeRow items={techStackBottom} />
          <MarqueeRow items={techStackBottom} />
          <MarqueeRow items={techStackBottom} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
      </div>
    </section>
  );
}

const MarqueeRow = ({ items }: { items: string[] }) => {
  return (
    <div className="flex min-w-full shrink-0 items-center justify-around gap-4">
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