
"use client";

import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useVelocity, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  // Position tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Velocity for the subtle trailing effect
  const velX = useVelocity(mouseX);
  const velY = useVelocity(mouseY);
  
  // Spring physics for the background glow
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.getAttribute('role') === 'button') {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button') || target.getAttribute('role') === 'button') {
        setIsHovering(false);
      }
    };
    
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Subtle Trailing Glow */}
      <motion.div
        className={cn(
          "absolute top-0 left-0 w-16 h-16 rounded-full transition-colors duration-500",
          isHovering ? "bg-primary/10 blur-xl" : "bg-primary/5 blur-2xl"
        )}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.5 : (isHovering ? 1.2 : 1),
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* The Glass Cursor Image */}
      <motion.div
        className="absolute top-0 left-0 w-7 h-7"
        style={{
          x: mouseX,
          y: mouseY,
          // Offset so the "tip" of the arrow is at the mouse coordinate
          translateX: "-10%",
          translateY: "-10%",
          backgroundImage: "url('/glass-cursor.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))',
        }}
        animate={{
          scale: isClicking ? 0.9 : (isHovering ? 1.15 : 1),
          rotate: isHovering ? 10 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 350 }}
      />
    </div>
  );
};

export default CustomCursor;
