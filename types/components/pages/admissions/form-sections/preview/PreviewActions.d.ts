import React from 'react';
interface PreviewActionsProps {
    onEdit: () => void;
    onSubmit: (e: React.FormEvent) => void;
    isSubmitting: boolean;
}
export declare function PreviewActions({ onEdit, onSubmit, isSubmitting }: PreviewActionsProps): import("react/jsx-runtime").JSX.Element;
export {};
