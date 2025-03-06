// src/hooks/useIntersectionObserver.ts
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
}

export function useIntersectionObserver({
  threshold = 0,
  root = null,
  rootMargin = '0px'
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIntersecting] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        threshold,
        root,
        rootMargin
      }
    );

    const element = targetRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, root, rootMargin]);

  return [targetRef, isIntersecting] as const;
}
