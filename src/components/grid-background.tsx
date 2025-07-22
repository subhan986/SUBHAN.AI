"use client";

import React from "react";

export function GridBackground({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative w-full bg-background breathing-background"
    >
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
