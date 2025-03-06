import React from 'react';
import { GeneralInformationData, ValidationError } from '../types/admissionForm';
interface GeneralInformationProps {
    formData: GeneralInformationData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    errors?: ValidationError[];
}
export declare function GeneralInformation({ formData, onChange, errors }: GeneralInformationProps): import("react/jsx-runtime").JSX.Element;
export {};
