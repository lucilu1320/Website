import React from 'react';
import { EnrollmentFormData } from './types';
interface EnrollmentSectionProps {
    formData: EnrollmentFormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubjectsChange: (subjects: string[]) => void;
}
export declare function EnrollmentSection({ formData, onChange, onSubjectsChange }: EnrollmentSectionProps): import("react/jsx-runtime").JSX.Element;
export {};
