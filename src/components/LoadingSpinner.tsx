import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#2A8C4A] border-t-transparent"></div>
    </div>
  );
}