
"use client";

import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
        if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
             setIsHovering(true);
        }
    }
    
    const onMouseOut = (e: MouseEvent) => {
        if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
             setIsHovering(false);
        }
    }

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener('mouseover', onMouseOver);
    document.body.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener('mouseover', onMouseOver);
      document.body.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothPosition = {
    x: useSpring(position.x, smoothOptions),
    y: useSpring(position.y, smoothOptions),
  };

  if (!isClient) {
    return null;
  }

  const cursorSize = isHovering ? 60 : 30;

  return (
    <motion.div
      style={{
        left: smoothPosition.x,
        top: smoothPosition.y,
      }}
      animate={{ width: cursorSize, height: cursorSize }}
      className="fixed rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
    >
      <motion.div 
        className="w-full h-full rounded-full border-2 transition-colors duration-300"
        animate={{
          borderColor: isHovering ? "hsl(var(--primary) / 0.5)" : "hsl(var(--foreground) / 0.2)",
          backgroundColor: isHovering ? "hsl(var(--primary) / 0.1)" : "hsl(var(--foreground) / 0.1)",
        }}
        style={{
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
        }}
       />
    </motion.div>
  );
}
