import React from 'react';

interface PreviewPhotoProps {
  photoPreview: string | null;
}

export function PreviewPhoto({ photoPreview }: PreviewPhotoProps) {
  if (!photoPreview) return null;

  return (
    <div className="mb-8 flex justify-center">
      <img
        src={photoPreview}
        alt="Student"
        className="w-32 h-32 object-cover rounded-lg border-4 border-[#2A8C4A]"
      />
    </div>
  );
}