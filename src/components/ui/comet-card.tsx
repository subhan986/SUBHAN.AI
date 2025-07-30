
"use client";

import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import React from "react";

export function CometCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = React.useRef<HTMLDivElement>(null);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  }

  const onMouseMoveRotate = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const width = cardRef.current.offsetWidth;
    const height = cardRef.current.offsetHeight;

    const rotateX = (y / height - 0.5) * -15;
    const rotateY = (x / width - 0.5) * 15;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  }
  
  const handleMouseMoveCombined = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseMove(e);
    onMouseMoveRotate(e);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMoveCombined}
      onMouseLeave={onMouseLeave}
      className={cn(
        "group relative w-full rounded-lg transition-transform duration-300 ease-out",
        className,
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              hsl(var(--primary) / 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}
