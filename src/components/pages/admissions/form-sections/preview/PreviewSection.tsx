import React from 'react';

interface PreviewSectionProps {
  title: string;
  data: Record<string, any>;
}

export function PreviewSection({ title, data }: PreviewSectionProps) {
  const formatValue = (value: any): string => {
    if (!value) return '-';
    
    // Convert to string and uppercase
    const stringValue = String(value);
    
    // Check if it's a date value (YYYY-MM-DD format)
    const isDate = /^\d{4}-\d{2}-\d{2}$/.test(stringValue);
    if (isDate) {
      return new Date(stringValue).toLocaleDateString();
    }

    // For all other values, return uppercase
    return stringValue.toUpperCase();
  };

  const formatLabel = (key: string): string => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .toUpperCase();
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-[#2A8C4A] mb-4">{title.toUpperCase()}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <span className="text-sm text-gray-600">{formatLabel(key)}</span>
            <span className="font-medium">{formatValue(value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}