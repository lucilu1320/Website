// All shared types and interfaces
import { ReactNode } from 'react';
import type { Database } from './supabase';

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
  [key: string]: any;
}

export interface FormProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errors?: ValidationError[];
}

export interface FilterOptions {
  status?: 'PENDING' | 'APPROVED' | 'REJECTED' | 'all';
  class?: string;
  dateRange?: 'all' | 'today' | 'week' | 'month' | 'year';
}

// Map the Database type to our Application type
export type Application = Database['public']['Tables']['applications']['Row'];

// Map the Database type to our FileUpload type
export type FileUpload = Database['public']['Tables']['files']['Row'];

export interface PreviewProps {
  formData: FormData;
  photoPreview: string | null;
  onEdit: () => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
}

export interface EmailData {
  email: string; // Make email required
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

export interface PDFSection {
  title: string;
  fields: {
    [key: string]: string | number | boolean | undefined;
  };
}

export interface PDFData {
  studentInfo: PDFSection;
  parentInfo: PDFSection;
  academicInfo: PDFSection;
  contactInfo: PDFSection;
  guardianInfo: PDFSection;
  facilities: PDFSection;
  transport?: PDFSection;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'date' | 'select' | 'multiselect';
  value: string | string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onMultiChange?: (values: string[]) => void;
  options?: { value: string; label: string }[];
  required?: boolean;
  pattern?: string;
  maxLength?: number;
  disabled?: boolean;
  error?: string;
  uppercase?: boolean;
}

export interface PreviewSection {
  title: string;
  fields: Record<string, any>;
}

export interface SectionProps {
  title: string;
  children: ReactNode;
}

export interface TransportDetailsProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errors?: ValidationError[];
}

export interface GuardianContactProps {
  formData: FormData;
  studentAddress: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSameAddressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sameAsStudent: boolean;
  errors?: ValidationError[];
}

export interface EnrollmentDetailsProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubjectsChange: (subjects: string[]) => void;
  errors?: ValidationError[];
}

export interface PreviousSchoolDetailsProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errors?: ValidationError[];
}

export interface ContactInformationProps extends FormProps {}