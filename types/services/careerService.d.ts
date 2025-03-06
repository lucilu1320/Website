export declare const careerService: {
    submitApplication(formData: FormData): Promise<any>;
    getApplications(filters?: {}): Promise<any>;
    updateApplicationStatus(id: string, status: string): Promise<any>;
};
