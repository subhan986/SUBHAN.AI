
"use client";

import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, useVelocity, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

const CustomCursor = () => {
  // Use MotionValues for high-performance position tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Velocity tracking for the "stretching" effect
  const velX = useVelocity(mouseX);
  const velY = useVelocity(mouseY);
  
  // Calculate movement speed for dynamic scaling
  const velocity = useTransform([velX, velY], ([vx, vy]) => {
    return Math.sqrt(Math.pow(Number(vx), 2) + Math.pow(Number(vy), 2));
  });

  // Dynamic scale and skew based on velocity (the "Lenis" fluid feel)
  const stretch = useTransform(velocity, [0, 3000], [1, 1.4]);
  const squash = useTransform(velocity, [0, 3000], [1, 0.7]);

  // Spring physics for the trailing outer ring (the "liquid" part)
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 150 });

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
      {/* Outer Liquid Ring */}
      <motion.div
        className={cn(
          "absolute top-0 left-0 w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center transition-colors duration-300",
          isHovering && "bg-primary/10 border-primary shadow-[0_0_20px_rgba(var(--primary),0.3)]"
        )}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          scaleX: stretch,
          scaleY: squash,
        }}
        animate={{
          scale: isClicking ? 0.7 : (isHovering ? 1.8 : 1),
          opacity: isClicking ? 1 : 0.7,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {/* Internal glow when hovering */}
        {isHovering && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full rounded-full bg-primary/20 blur-md"
          />
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-white rounded-full mix-blend-difference shadow-[0_0_10px_white]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 2.5 : (isHovering ? 0.4 : 1),
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 400 }}
      />
    </div>
  );
};

export default CustomCursor;
