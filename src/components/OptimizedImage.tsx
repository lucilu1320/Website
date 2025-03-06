// src/components/OptimizedImage.tsx
import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  width,
  height,
  priority = false 
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState<string>('');

  useEffect(() => {
    // Generate low quality placeholder
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  // Generate srcset for responsive images
  const generateSrcSet = () => {
    const widths = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
    return widths
      .map((w) => {
        const url = new URL(src);
        url.searchParams.set('w', w.toString());
        return `${url.toString()} ${w}w`;
      })
      .join(', ');
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Blur placeholder */}
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
        />
      )}
      
      <img
        src={currentSrc}
        srcSet={generateSrcSet()}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
