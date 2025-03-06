interface ValidationError {
    field: string;
    message: string;
}
export declare function useAdmissionForm(): {
    formData: {
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
    };
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
export {};
