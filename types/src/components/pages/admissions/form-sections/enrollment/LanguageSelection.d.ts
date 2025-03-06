import React from 'react';
import { EnrollmentFormData } from './types';
interface LanguageSelectionProps {
    formData: EnrollmentFormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}
export declare function LanguageSelection({ formData, onChange }: LanguageSelectionProps): import("react/jsx-runtime").JSX.Element;
export {};
