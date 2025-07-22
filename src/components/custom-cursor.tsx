
"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element && (e.target.closest('a') || e.target.closest('button'))) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (e.target instanceof Element && (e.target.closest('a') || e.target.closest('button'))) {
        setIsHovering(false);
      }
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]",
        "bg-white/10 backdrop-blur-sm border border-white/20",
        "pulsing-glow",
        isHovering && "shiny-cursor"
      )}
      style={{
        translateX: position.x - 12,
        translateY: position.y - 12,
        // @ts-ignore
        '--x': `${position.x}px`,
        '--y': `${position.y}px`,
      }}
      animate={{
        scale: isClicking ? 0.8 : (isHovering ? 1.5 : 1),
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
