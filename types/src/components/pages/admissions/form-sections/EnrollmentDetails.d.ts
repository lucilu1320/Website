import React from 'react';
interface EnrollmentDetailsProps {
    formData: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubjectsChange: (subjects: string[]) => void;
}
export declare function EnrollmentDetails({ formData, onChange, onSubjectsChange }: EnrollmentDetailsProps): import("react/jsx-runtime").JSX.Element;
export {};
