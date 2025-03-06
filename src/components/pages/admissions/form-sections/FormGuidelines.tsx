import React from 'react';

export function FormGuidelines() {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-[#2A8C4A] mb-4">General Guidelines:</h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        <li>All inputs will be in BLOCK Letter by default.</li>
        <li>Submission form will be in Portrait A4 size paper.</li>
        <li>Every input data will be exported in excel file with individual columns and rows.</li>
      </ul>
    </div>
  );
}