import React from 'react';
import { ValidationError } from '../../../../types';
interface EnrollmentDetailsProps {
    formData: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubjectsChange: (subjects: string[]) => void;
    errors?: ValidationError[];
}
export declare function EnrollmentDetails({ formData, onChange, onSubjectsChange, errors }: EnrollmentDetailsProps): import("react/jsx-runtime").JSX.Element;
export {};
