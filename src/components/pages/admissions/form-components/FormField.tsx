import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'date' | 'select' | 'multiselect';
  value: string | string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onMultiChange?: (values: string[]) => void;
  options?: { value: string; label: string }[];
  required?: boolean;
  uppercase?: boolean;
  pattern?: string;
  maxLength?: number;
  disabled?: boolean;
  error?: string;
}

export function FormField({
  label,
  name,
  type,
  value = '', // Provide default empty string for value
  onChange,
  onMultiChange,
  options,
  required,
  uppercase,
  pattern,
  maxLength,
  disabled,
  error
}: FormFieldProps) {
  const baseClasses = "w-full rounded-lg focus:ring focus:ring-opacity-50 bg-white";
  const inputClasses = `${baseClasses} ${uppercase ? 'uppercase' : ''} ${
    error 
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
      : 'border-gray-300 focus:border-[#2A8C4A] focus:ring-[#2A8C4A]'
  }`;
  const disabledClasses = disabled ? "bg-gray-100 cursor-not-allowed" : "";

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(option => option.value);
    onMultiChange?.(selectedOptions);
  };

  // Ensure value is always a string for single inputs
  const inputValue = Array.isArray(value) ? value : (value || '');

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {type === 'select' || type === 'multiselect' ? (
        <select
          name={name}
          value={inputValue}
          onChange={type === 'multiselect' ? handleMultiSelectChange : onChange}
          className={`${inputClasses} ${disabledClasses} h-11`}
          required={required}
          disabled={disabled}
          multiple={type === 'multiselect'}
        >
          {!type.includes('multi') && <option value="">Select {label}</option>}
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={inputValue}
          onChange={onChange}
          className={`${inputClasses} ${disabledClasses} h-11`}
          required={required}
          pattern={pattern}
          maxLength={maxLength}
          disabled={disabled}
        />
      )}

      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}