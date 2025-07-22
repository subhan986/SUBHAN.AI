"use client";

import { useEffect, useRef, useId, useState } from "react";
import "./glass-surface.css";

type GlassSurfaceProps = {
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  xChannel?: "R" | "G" | "B" | "A";
  yChannel?: "R" | "G" | "B" | "A";
  mixBlendMode?: string;
  className?: string;
  style?: React.CSSProperties;
};

const GlassSurface = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = "R",
  yChannel = "G",
  mixBlendMode = "difference",
  className = "",
  style = {},
}: GlassSurfaceProps) => {
  const uniqueId = useId().replace(/:/g, '-');
  const filterId = `glass-filter-${uniqueId}`;
  const redGradId = `red-grad-${uniqueId}`;
  const blueGradId = `blue-grad-${uniqueId}`;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const feImageRef = useRef<FEImageElement>(null);
  const redChannelRef = useRef<FEDisplacementMapElement>(null);
  const greenChannelRef = useRef<FEDisplacementMapElement>(null);
  const blueChannelRef = useRef<FEDisplacementMapElement>(null);
  const gaussianBlurRef = useRef<FEGaussianBlurElement>(null);
  const [svgReady, setSvgReady] = useState(false);

  const generateDisplacementMap = () => {
    if (!containerRef.current) return "";
    const rect = containerRef.current.getBoundingClientRect();
    const actualWidth = rect?.width || (typeof width === 'number' ? width : 400);
    const actualHeight = rect?.height || (typeof height === 'number' ? height : 200);
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${mixBlendMode}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
      </svg>
    `;

    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  };
  
  const updateDisplacementMap = () => {
    if (feImageRef.current) {
        feImageRef.current.setAttribute("href", generateDisplacementMap());
    }
  };

  useEffect(() => {
    // Cannot run on server, need window
    if (typeof window !== 'undefined') {
        setSvgReady(true);
    }
  }, []);

  useEffect(() => {
    if (!svgReady) return;
    updateDisplacementMap();
    [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset },
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute(
          "scale",
          (distortionScale + offset).toString()
        );
        ref.current.setAttribute("xChannelSelector", xChannel);
        ref.current.setAttribute("yChannelSelector", yChannel);
      }
    });

    if (gaussianBlurRef.current) {
        gaussianBlurRef.current.setAttribute("stdDeviation", displace.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    width,
    height,
    borderRadius,
    borderWidth,
    brightness,
    opacity,
    blur,
    displace,
    distortionScale,
    redOffset,
    greenOffset,
    blueOffset,
    xChannel,
    yChannel,
    mixBlendMode,
    svgReady
  ]);

  useEffect(() => {
    if (!svgReady || !containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [svgReady]);


  useEffect(() => {
    if (!svgReady) return;
    setTimeout(updateDisplacementMap, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height, svgReady]);

  const supportsSVGFilters = () => {
    if (!svgReady) return false;
    const isWebkit =
      /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);

    if (isWebkit || isFirefox) {
      return false;
    }

    const div = document.createElement("div");
    div.style.backdropFilter = `url(#${filterId})`;
    return div.style.backdropFilter !== "";
  };

  const containerStyle = {
    ...style,
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    borderRadius: `${borderRadius}px`,
    "--glass-frost": backgroundOpacity,
    "--glass-saturation": saturation,
    "--filter-id": `url(#${filterId})`,
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className={`glass-surface ${supportsSVGFilters() ? "glass-surface--svg" : "glass-surface--fallback"} ${className}`}
      style={containerStyle}
    >
      {svgReady && (<svg className="glass-surface__filter" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feImage
              ref={feImageRef}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="map"
            />

            <feDisplacementMap
              ref={redChannelRef}
              in="SourceGraphic"
              in2="map"
              id="redchannel"
              result="dispRed"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap
              ref={greenChannelRef}
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap
              ref={blueChannelRef}
              in="SourceGraphic"
              in2="map"
              id="bluechannel"
              result="dispBlue"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur
              ref={gaussianBlurRef}
              in="output"
              stdDeviation="0.7"
            />
          </filter>
        </defs>
      </svg>)}

      <div className="glass-surface__content">{children}</div>
    </div>
  );
};

export default GlassSurface;
