import { useState, useEffect, useCallback } from 'react';

interface UseOptimizedImageProps {
  src: string;
  quality?: number;
}

export function useOptimizedImage({ src, quality = 75 }: UseOptimizedImageProps) {
  const [optimizedSrc, setOptimizedSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const isValidUrl = (urlString: string): boolean => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  const loadImage = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // If src is not a valid URL, use it as is
      if (!isValidUrl(src)) {
        setOptimizedSrc(src);
        return;
      }

      // For valid URLs, attempt optimization
      const url = new URL(src);
      let finalSrc = src;

      if (url.hostname.includes('unsplash.com')) {
        url.searchParams.set('q', quality.toString());
        finalSrc = url.toString();
      }

      setOptimizedSrc(finalSrc);

      // Load the image
      const img = new Image();
      img.src = finalSrc;
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

    } catch (err) {
      console.error('Image loading error:', err);
      setError(err instanceof Error ? err.message : 'Failed to load image');
      // Fallback to original source on error
      setOptimizedSrc(src);
    } finally {
      setIsLoading(false);
    }
  }, [src, quality]);

  useEffect(() => {
    if (src) {
      loadImage();
    }
  }, [loadImage]);

  return { optimizedSrc, isLoading, error };
}