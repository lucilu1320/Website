import { FilterOptions } from '../types';
export declare const firebaseService: {
    submitApplication(applicationData: any): Promise<any>;
    getApplications(filters?: FilterOptions): Promise<{
        id: string;
    }[]>;
    getApplicationById(id: string): Promise<{
        id: string;
    }>;
    updateApplicationStatus(id: string, status: string): Promise<{
        id: string;
    }>;
    uploadFile(file: File, path: string): Promise<string>;
    submitCareerApplication(applicationData: any): Promise<any>;
    getCareerApplications(filters?: FilterOptions): Promise<{
        id: string;
    }[]>;
};
