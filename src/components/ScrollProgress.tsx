import React, { useState, useEffect } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / documentHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', calculateProgress);
    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-[#2A8C4A] transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}