// types/admissionForm.ts

export interface ValidationError {
    field: string;
    message: string;
  }
  
  export interface DropdownOption {
    value: string;
    label: string;
  }
  
  export interface GeneralInformationData {
    studentName: string;
    dob: string;
    studentNameAadhar: string;
    motherName: string;
    fatherQualification: string;
    fatherOccupation: string;
    motherTongue: string;
    customMotherTongue?: string;
    socialCategory: string;
    annualIncome: string;
    ewsStatus: string;
    gender: string;
    aadharNo: string;
    fatherName: string;
    guardianName: string;
    motherQualification: string;
    motherOccupation: string;
    religion: string;
    relationWithGuardian: string;
    bloodGroup: string;
    cwsnStatus: string;
  }
  
  export interface PreviousSchoolData {
    previousStatus: string;
    previousClass: string;
    previousRollNo: string;
    admissionType: string;
    academicYear: string;
    previousSection: string;
    medium: string;
  }
  
  export interface BaseFormSectionProps {
    formData: GeneralInformationData | PreviousSchoolData;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    errors?: ValidationError[];
  }