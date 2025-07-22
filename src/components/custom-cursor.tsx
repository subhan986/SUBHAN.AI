"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

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

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className={cn(
        "fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] transition-transform duration-300",
        "bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg"
      )}
      style={{
        translateX: position.x - 16,
        translateY: position.y - 16,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
