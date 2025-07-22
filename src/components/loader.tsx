"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 1000); // Duration of the loader

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.5, delay: show ? 0 : 0.7 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1, 0.8] }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 0.2, 0.8, 1],
        }}
        className="text-6xl font-bold text-primary font-minecraft"
      >
        <span className="opacity-75">M</span>S
      </motion.div>
    </motion.div>
  );
};

export default Loader;
