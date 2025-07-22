"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

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

const colors = [
  "bg-sky-500/20 text-sky-300 border-sky-500/30",
  "bg-green-500/20 text-green-300 border-green-500/30",
  "bg-red-500/20 text-red-300 border-red-500/30",
  "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "bg-pink-500/20 text-pink-300 border-pink-500/30",
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
    <section id="tech-stack" ref={targetRef} className="py-10 lg:py-16 relative overflow-hidden">
      <div className="flex flex-col gap-4">
        <motion.div style={{ x: x1 }} className="flex gap-4">
          <MarqueeRow items={techStackTop} />
          <MarqueeRow items={techStackTop} />
          <MarqueeRow items={techStackTop} />
        </motion.div>
         <motion.div style={{ x: x2 }} className="flex gap-4">
          <MarqueeRow items={techStackBottom} reverse />
          <MarqueeRow items={techStackBottom} reverse />
          <MarqueeRow items={techStackBottom} reverse />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background"></div>
      </div>
    </section>
  );
}

const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => {
  return (
    <div className="flex min-w-full shrink-0 items-center justify-around gap-4">
      {items.map((text, i) => (
        <div
          key={text}
          className={cn(
            "text-lg md:text-base whitespace-nowrap px-6 py-3 border rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1 font-minecraft",
            colors[(i + (reverse ? 2 : 0)) % colors.length]
          )}
        >
          {text}
        </div>
      ))}
    </div>
  );
};
