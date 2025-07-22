"use client";

import MetallicPaint, { parseLogoImage } from "./MetallicPaint";
import { useState, useEffect } from 'react';

const Loader = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLogo() {
      try {
        const response = await fetch('/ms-logo.svg');
        const blob = await response.blob();
        const file = new File([blob], "ms-logo.svg", { type: "image/svg+xml" });

        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
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
