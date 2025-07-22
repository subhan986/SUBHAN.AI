"use client";

import React from "react";

export function GridBackground({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePosition({ x: clientX - left, y: clientY - top });
  };

  return (
    <div
      className="relative w-full bg-background group"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 z-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary)/0.15), transparent 40%)`,
        }}
      />
       <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(hsl(var(--border) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '2rem 2rem',
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
