
"use client";

import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  // Position tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

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
          "absolute top-0 left-0 w-12 h-12 rounded-full transition-colors duration-500",
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

      {/* The Glass Cursor Pointer */}
      <motion.div
        className="absolute top-0 left-0"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "0%",
          translateY: "0%",
        }}
        animate={{
          scale: isClicking ? 0.8 : (isHovering ? 1.1 : 0.9),
          rotate: isHovering ? 5 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
      >
        <div className="relative">
          {/* Glass Morphic Shape - Simple Arrow Head Only */}
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
          >
            <path
              d="M1 1V17L5.5 12.5H13L1 1Z"
              fill="rgba(255, 255, 255, 0.15)"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="1.5"
              style={{ backdropFilter: 'blur(8px)' }}
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomCursor;
