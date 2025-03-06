import { FilterOptions, Application } from '../types';
export declare const supabaseService: {
    submitApplication(applicationData: Omit<Application, "id" | "status" | "submission_date" | "last_updated">): Promise<Application>;
    uploadFile(file: File, path: string): Promise<string>;
    getApplications(filters?: FilterOptions): Promise<Application[]>;
    getApplicationById(id: string): Promise<Application>;
    updateApplicationStatus(id: string, status: "PENDING" | "APPROVED" | "REJECTED"): Promise<Application>;
    deleteApplication(id: string): Promise<boolean>;
    getApplicationStats(): Promise<{
        total: number;
        pending: number;
        approved: number;
        rejected: number;
    }>;
};
