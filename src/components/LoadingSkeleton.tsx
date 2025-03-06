import React from 'react';

interface LoadingSkeletonProps {
  type?: 'text' | 'image' | 'card';
  lines?: number;
  className?: string;
}

export function LoadingSkeleton({ type = 'text', lines = 1, className = '' }: LoadingSkeletonProps) {
  const baseClass = 'animate-pulse bg-gray-200 rounded';

  if (type === 'image') {
    return <div className={`${baseClass} h-48 w-full ${className}`} />;
  }

  if (type === 'card') {
    return (
      <div className={`${baseClass} p-4 ${className}`}>
        <div className="h-32 bg-gray-300 rounded mb-4" />
        <div className="h-4 bg-gray-300 rounded mb-2" />
        <div className="h-4 bg-gray-300 rounded w-2/3" />
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`${baseClass} h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'} ${className}`}
        />
      ))}
    </div>
  );
}