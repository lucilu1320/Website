import React from 'react';
import { ArrowLeft, Send } from 'lucide-react';

interface PreviewActionsProps {
  onEdit: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export function PreviewActions({ onEdit, onSubmit, isSubmitting }: PreviewActionsProps) {
  return (
    <div className="flex justify-between mt-12">
      <button
        type="button"
        onClick={onEdit}
        className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Edit Form
      </button>

      <button
        type="button"
        onClick={onSubmit}
        disabled={isSubmitting}
        className="flex items-center gap-2 px-8 py-3 bg-[#2A8C4A] text-white rounded-lg hover:bg-[#238040] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Submit Application
          </>
        )}
      </button>
    </div>
  );
}