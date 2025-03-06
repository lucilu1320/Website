import { ValidationError, FormData } from '../types';
export declare function useAdmissionForm(): {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    handlePreview: (e: React.FormEvent) => void;
    handleEditForm: () => void;
    handleSubjectsChange: (subjects: string[]) => void;
    submitted: boolean;
    isSubmitting: boolean;
    showPreview: boolean;
    sameAsStudent: boolean;
    handleSameAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePhotoChange: (file: File | null) => Promise<void>;
    photoPreview: string;
    errors: ValidationError[];
    submissionResult: {
        success: boolean;
        applicationId?: string;
        message?: string;
    };
    resetForm: () => void;
};
