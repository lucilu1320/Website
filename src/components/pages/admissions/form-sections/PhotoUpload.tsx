import React, { useRef, useState } from 'react';
import { Upload, X } from 'lucide-react';

interface PhotoUploadProps {
  onPhotoChange: (file: File | null) => void;
  photoPreview: string | null;
}

// Helper function to compress an image file using a canvas.
// Returns a Promise that resolves to a new File object.
function compressImage(file: File, quality: number = 0.7): Promise<File> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = () => {
      // Create a canvas with the image dimensions.
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Failed to get canvas context'));
        return;
      }
      // Draw the image onto the canvas.
      ctx.drawImage(image, 0, 0);
      // Convert the canvas to a Blob at the given quality.
      canvas.toBlob(
        (blob) => {
          if (blob) {
            // Create a new File from the Blob.
            const compressedFile = new File([blob], file.name, { type: file.type });
            resolve(compressedFile);
          } else {
            reject(new Error('Compression failed'));
          }
        },
        file.type,
        quality
      );
    };
    image.onerror = (error) => {
      reject(error);
    };
  });
}

export function PhotoUpload({ onPhotoChange, photoPreview }: PhotoUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setError('');

    if (!file) return;

    // Validate file type.
    if (!['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
      setError('Only JPG, JPEG, and PNG files are allowed');
      onPhotoChange(null);
      return;
    }

    // Validate file name for disallowed characters (e.g. underscore or dash).
    if (/[_-]/.test(file.name)) {
      setError('File name should not contain underscores or dashes');
      onPhotoChange(null);
      return;
    }

    let finalFile = file;
    // If the file size is greater than 20KB, compress it.
    if (file.size > 20 * 1024) {
      try {
        finalFile = await compressImage(file, 0.7);
        // Optionally, if the compressed file is still too large, compress further.
        if (finalFile.size > 20 * 1024) {
          finalFile = await compressImage(file, 0.5);
        }
      } catch (err) {
        setError('Image compression failed');
        onPhotoChange(null);
        return;
      }
    }

    // Optional: create an Image object to check dimensions if needed.
    const img = new Image();
    img.src = URL.createObjectURL(finalFile);
    img.onload = () => {
      onPhotoChange(finalFile);
    };
  };

  const handleRemovePhoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onPhotoChange(null);
    setError('');
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-8">
      <div className="border-2 border-[#2A8C4A] rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold text-center text-[#2A8C4A]">
          Upload Student Photo
        </h2>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <label className="text-gray-700">
          Upload Student Photo* (Max upload size 20KB)
        </label>

        <div className="w-full max-w-md">
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              {photoPreview ? (
                <div className="relative inline-block">
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="h-32 w-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Upload className="w-12 h-12 text-gray-400" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="photo-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-[#2A8C4A] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#2A8C4A] focus-within:ring-offset-2 hover:text-[#238040]"
                    >
                      <span>Choose file</span>
                      <input
                        id="photo-upload"
                        ref={fileInputRef}
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        className="sr-only"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    JPG, JPEG, PNG up to 20KB 
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
      </div>
    </div>
  );
}