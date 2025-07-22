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
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      className={cn("shiny-effect rounded-lg", className)}
    >
      {children}
    </div>
  );
}
