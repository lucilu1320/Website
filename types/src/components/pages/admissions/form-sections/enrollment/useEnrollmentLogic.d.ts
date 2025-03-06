import { EnrollmentFormData } from './types';
export declare function useEnrollmentLogic(formData: EnrollmentFormData): {
    showLanguageOptions: boolean;
    showStreamSubjects: boolean;
    currentSession: string;
    sessionOptions: {
        value: string;
        label: string;
    }[];
    classOptions: {
        value: string;
        label: string;
    }[];
    sectionOptions: {
        value: string;
        label: string;
    }[];
    houseOptions: {
        value: string;
        label: string;
    }[];
    getStreamFromClass: (classValue: string) => string | null;
    validateSubjectSelection: (subjects?: string[]) => string | null;
};
