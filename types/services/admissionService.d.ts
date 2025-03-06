import { FilterOptions } from '../types';
interface Application {
    id: string;
    studentName: string;
    class: string;
    submissionDate: string;
    status: string;
    email: string;
    guardianName?: string;
    fatherName?: string;
    photo?: string;
    [key: string]: any;
}
export declare const admissionService: {
    submitForm(formData: any): Promise<{
        success: boolean;
        applicationId: string;
        message: string;
        emailStatus: string;
    }>;
    getApplications(filters?: FilterOptions): Promise<Application[]>;
    getApplicationById(id: string): Promise<Application>;
    updateApplicationStatus(id: string, status: string): Promise<Application>;
};
export {};
