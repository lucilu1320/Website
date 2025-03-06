import React from 'react';
interface FormFieldProps {
    label: string;
    name: string;
    type: 'text' | 'date' | 'select' | 'multiselect';
    value: string | string[];
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onMultiChange?: (values: string[]) => void;
    options?: {
        value: string;
        label: string;
    }[];
    required?: boolean;
    uppercase?: boolean;
    pattern?: string;
    maxLength?: number;
    disabled?: boolean;
    error?: string;
}
export declare function FormField({ label, name, type, value, // Provide default empty string for value
onChange, onMultiChange, options, required, uppercase, pattern, maxLength, disabled, error }: FormFieldProps): import("react/jsx-runtime").JSX.Element;
export {};
