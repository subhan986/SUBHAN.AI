"use client";

import { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import GlassSurface from "./glass-surface";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = (e: MouseEvent) => {
        if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
             setIsHovering(true);
        }
    }
    
    const onMouseLeave = (e: MouseEvent) => {
        if (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLButtonElement) {
             setIsHovering(false);
        }
    }

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener('mouseover', onMouseEnter);
    document.body.addEventListener('mouseout', onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener('mouseover', onMouseEnter);
      document.body.removeEventListener('mouseout', onMouseLeave);
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
        position: "fixed",
        left: smoothPosition.x,
        top: smoothPosition.y,
        translateX: "-50%",
        translateY: "-50%",
        pointerEvents: "none",
        zIndex: 9999,
        transition: 'width 0.2s ease-in-out, height 0.2s ease-in-out',
      }}
      animate={{ width: cursorSize, height: cursorSize }}
    >
      <GlassSurface
        width="100%"
        height="100%"
        borderRadius={30}
        blur={5}
        displace={10}
        opacity={0.1}
        borderWidth={0.1}
        brightness={10}
        distortionScale={-80}
        mixBlendMode="screen"
      >
        <div />
      </GlassSurface>
    </motion.div>
  );
}
