import React from 'react';
interface FormPreviewProps {
    formData: any;
    photoPreview: string | null;
    onEdit: () => void;
    onSubmit: (e: React.FormEvent) => Promise<void>;
    isSubmitting: boolean;
}
export declare function FormPreview({ formData, photoPreview, onEdit, onSubmit, isSubmitting }: FormPreviewProps): import("react/jsx-runtime").JSX.Element;
export {};
