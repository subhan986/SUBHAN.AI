
"use client";

import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  // Use MotionValues for performance (avoids React re-renders on every mouse move)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for the trailing ring
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
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Outer Trailing Ring */}
      <motion.div
        className={cn(
          "absolute top-0 left-0 w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center",
          isHovering && "bg-primary/5 border-primary shadow-[0_0_20px_rgba(var(--primary),0.2)]"
        )}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.8 : (isHovering ? 1.5 : 1),
          opacity: isClicking ? 1 : 0.6,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {/* Subtle internal glow on hover */}
        {isHovering && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full rounded-full bg-primary/10 blur-sm"
          />
        )}
      </motion.div>

      {/* Inner Core Dot */}
      <motion.div
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-white rounded-full mix-blend-difference shadow-[0_0_10px_white]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 2 : (isHovering ? 0.5 : 1),
        }}
      />
    </div>
  );
};

export default CustomCursor;
