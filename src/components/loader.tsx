"use client";

import MetallicPaint, { parseLogoImage } from "./MetallicPaint";
import { useState, useEffect, type ImageData } from 'react';

const Loader = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLogo() {
      try {
        // Embed SVG content directly as a string
        const svgString = `
          <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
              .minecraft-font { font-family: 'Press Start 2P', cursive; }
            </style>
            <rect width="500" height="500" fill="black"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="minecraft-font">
              <tspan x="50%" dy="-0.1em" font-size="120" fill="white" fill-opacity="0.75">M</tspan>
              <tspan x="50%" dy="0.9em" font-size="120" fill="white">S</tspan>
            </text>
          </svg>
        `;
        const blob = new Blob([svgString], { type: 'image/svg+xml' });
        const file = new File([blob], "ms-logo.svg", { type: "image/svg+xml" });

        const parsedData = await parseLogoImage(file);
        if (parsedData) {
          setImageData(parsedData.imageData);
        }
      } catch (err) {
        console.error("Error loading default image:", err);
      }
    }

    loadLogo();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // Hide after 4 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null;
  }
  
  return (
    <div style={{ width: '100%', height: '100vh', position: 'fixed', zIndex: 9999, backgroundColor: '#0A0A0A' }}>
      {imageData && <MetallicPaint imageData={imageData} />}
    </div>
  );
}

export default Loader;