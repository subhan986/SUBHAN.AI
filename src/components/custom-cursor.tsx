"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white pointer-events-none z-[9999]"
      style={{
        mixBlendMode: 'difference',
      }}
      animate={{
        x: position.x - 16, // center the dot
        y: position.y - 16,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
    />
  );
};

export default CustomCursor;
