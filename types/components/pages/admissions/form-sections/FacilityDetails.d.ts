import React from 'react';
interface FacilityDetailsProps {
    formData: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    errors?: Array<{
        field: string;
        message: string;
    }>;
}
export declare function FacilityDetails({ formData, onChange, errors }: FacilityDetailsProps): import("react/jsx-runtime").JSX.Element;
export {};
