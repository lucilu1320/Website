export interface EmailData {
    email: string;
    parentName: string;
    studentName: string;
    applicationId: string;
    class: string;
    submissionDate: string;
    formData?: Record<string, any>;
    photoPreview?: string;
    approved?: boolean;
    rejected?: boolean;
    status?: string;
    formalities_deadline?: string;
    updateDate?: string;
}
export declare function sendConfirmationEmail(data: EmailData): Promise<void>;
export declare function sendStatusUpdateEmail(data: EmailData): Promise<void>;
