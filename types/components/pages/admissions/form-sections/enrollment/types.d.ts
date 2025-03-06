export interface EnrollmentFormData {
    session: string;
    class: string;
    section: string;
    rollNo: string;
    house: string;
    secondLanguage?: string;
    thirdLanguage?: string;
    skillSubject?: string;
    subjects?: string[];
}
export interface StreamSubjects {
    [key: string]: {
        required: string[];
        optional: string[];
        minOptional: number;
        maxOptional: number;
    };
}
export interface SubjectGroup {
    name: string;
    subjects: string[];
    required: boolean;
}
