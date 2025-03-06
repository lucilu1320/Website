interface Application {
    id: string;
    studentName: string;
    class: string;
    submissionDate: string;
    status: string;
    [key: string]: any;
}
export declare const generateExcel: (applications: Application[]) => void;
export {};
