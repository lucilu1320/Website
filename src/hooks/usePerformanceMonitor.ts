// src/hooks/usePerformanceMonitor.ts
import { useEffect } from 'react';

export function usePerformanceMonitor() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Log only significant performance issues
          if (entry.duration > 100) {
            console.warn(
              `Performance issue detected: ${entry.name} took ${entry.duration}ms`
            );
          }
        });
      });

      observer.observe({ entryTypes: ['measure', 'paint', 'largest-contentful-paint'] });

      return () => observer.disconnect();
    }
  }, []);
}
