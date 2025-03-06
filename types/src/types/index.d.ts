export interface FilterOptions {
    status?: string;
    class?: string;
    dateRange?: string;
}
export interface ValidationError {
    field: string;
    message: string;
}
export interface FormData {
    studentName: string;
    studentNameAadhar: string;
    gender: string;
    dob: string;
    aadharNo: string;
    bloodGroup: string;
    religion: string;
    motherTongue: string;
    customMotherTongue: string;
    socialCategory: string;
    ewsStatus: string;
    cwsnStatus: string;
    fatherName: string;
    motherName: string;
    guardianName: string;
    relationWithGuardian: string;
    fatherQualification: string;
    motherQualification: string;
    fatherOccupation: string;
    motherOccupation: string;
    annualIncome: string;
    session: string;
    class: string;
    section: string;
    rollNo: string;
    house: string;
    secondLanguage: string;
    thirdLanguage: string;
    skillSubject: string;
    subjects: string[];
    previousStatus: string;
    previousClass: string;
    previousSection: string;
    previousRollNo: string;
    academicYear: string;
    medium: string;
    admissionType: string;
    email: string;
    mobileNumber: string;
    address: string;
    country: string;
    state: string;
    district: string;
    block: string;
    panchayat: string;
    locality: string;
    postOffice: string;
    policeStation: string;
    pinCode: string;
    guardianCountry: string;
    guardianState: string;
    guardianDistrict: string;
    guardianBlock: string;
    guardianPanchayat: string;
    guardianAddress: string;
    guardianLocality: string;
    guardianPostOffice: string;
    guardianPoliceStation: string;
    guardianPinCode: string;
    guardianMobile: string;
    guardianEmail: string;
    transportFacility: string;
    hostelFacility: string;
    freeShoes: string;
    freeUniform: string;
    freeBooks: string;
    freeExerciseBook: string;
    rteEducation: string;
    nccParticipation: string;
    busRoute: string;
    pickupPoint: string;
    transportMonth: string;
}
export interface FormProps {
    formData: FormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    errors?: ValidationError[];
}
export interface PhotoUploadProps {
    onPhotoChange: (file: File | null) => void;
    photoPreview: string | null;
}
export interface FormPreviewFields {
    [key: string]: any;
}
export interface EmailData {
    email: string;
    parentName: string;
    studentName: string;
    applicationId: string;
    class: string;
    submissionDate: string;
    status?: string;
    updateDate?: string;
    approved?: boolean;
    rejected?: boolean;
    formalities_deadline?: string;
    formData?: FormData;
    photoPreview?: string | null;
}
