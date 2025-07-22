"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function ShinyCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const width = cardRef.current.offsetWidth;
    const height = cardRef.current.offsetHeight;

    const rotateX = (y / height - 0.5) * -15; // Invert for natural feel
    const rotateY = (x / width - 0.5) * 15;

    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("shiny-effect rounded-lg transition-transform duration-300 ease-out", className)}
    >
      {children}
    </div>
  );
}
