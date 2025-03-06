// src/hooks/useImagePreload.ts
import { useState, useEffect } from 'react';

export function useImagePreload(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);

    return () => {
      img.onload = null;
    };
  }, [src]);

  return isLoaded;
}
