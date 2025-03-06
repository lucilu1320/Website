import React from 'react';
import { PreviousSchoolData, ValidationError } from '../types/admissionForm';
interface PreviousSchoolDetailsProps {
    formData: PreviousSchoolData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    errors?: ValidationError[];
}
export declare function PreviousSchoolDetails({ formData, onChange, errors }: PreviousSchoolDetailsProps): import("react/jsx-runtime").JSX.Element;
export {};
