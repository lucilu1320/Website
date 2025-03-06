import { useState } from 'react';
import { supabaseService } from '../services/supabaseService';
import { sendConfirmationEmail } from '../services/emailService';
import { ValidationError, FormData } from '../types';

const initialFormState: FormData = {
 studentName: '',
 studentNameAadhar: '',
 gender: '',
 dob: '',
 aadharNo: '',
 bloodGroup: '',
 religion: '',
 motherTongue: '',
 customMotherTongue: '',
 socialCategory: '',
 ewsStatus: '',
 cwsnStatus: '',
 fatherName: '',
 motherName: '',
 guardianName: '',
 relationWithGuardian: '',
 fatherQualification: '',
 motherQualification: '',
 fatherOccupation: '',
 motherOccupation: '',
 annualIncome: '',
 session: '',
 class: '',
 section: '',
 rollNo: '',
 house: '',
 secondLanguage: '',
 thirdLanguage: '',
 skillSubject: '',
 subjects: [],
 previousStatus: '',
 previousClass: '',
 previousSection: '',
 previousRollNo: '',
 academicYear: '',
 medium: '',
 admissionType: '',
 email: '',
 mobileNumber: '',
 address: '',
 country: 'INDIA',
 state: '',
 district: '',
 block: '',
 panchayat: '',
 locality: '',
 postOffice: '',
 policeStation: '',
 pinCode: '',
 guardianCountry: '',
 guardianState: '',
 guardianDistrict: '',
 guardianBlock: '',
 guardianPanchayat: '',
 guardianAddress: '',
 guardianLocality: '',
 guardianPostOffice: '',
 guardianPoliceStation: '',
 guardianPinCode: '',
 guardianMobile: '',
 guardianEmail: '',
 transportFacility: '',
 hostelFacility: '',
 freeShoes: '',
 freeUniform: '',
 freeBooks: '',
 freeExerciseBook: '',
 rteEducation: '',
 nccParticipation: '',
 busRoute: '',
 pickupPoint: '',
 transportMonth: ''
};

export function useAdmissionForm() {
 const [formData, setFormData] = useState<FormData>(initialFormState);
 const [submitted, setSubmitted] = useState(false);
 const [isSubmitting, setIsSubmitting] = useState(false);
 const [showPreview, setShowPreview] = useState(false);
 const [sameAsStudent, setSameAsStudent] = useState(false);
 const [photoPreview, setPhotoPreview] = useState<string | null>(null);
 const [errors, setErrors] = useState<ValidationError[]>([]);
 const [submissionResult, setSubmissionResult] = useState<{
   success: boolean;
   applicationId?: string;
   message?: string;
 } | null>(null);

 const validateField = (fieldName: string, value: any): ValidationError | null => {
   if (sameAsStudent && fieldName.startsWith('guardian') && fieldName !== 'guardianMobile' && fieldName !== 'guardianEmail') {
     return null;
   }

   if (fieldName === 'guardianAddress') {
     return null;
   }

   if (!value || (typeof value === 'string' && !value.trim())) {
     const optionalFields = [
       'guardianName',
       'customMotherTongue',
       'thirdLanguage',
       'skillSubject',
       'previousRollNo',
       'panchayat',
       'guardianPanchayat',
       'busRoute',
       'pickupPoint',
       'transportMonth',
       'guardianLocality',
       'guardianPostOffice',
       'guardianPoliceStation'
     ];

     if (optionalFields.includes(fieldName)) {
       return null;
     }
     return {
       field: fieldName,
       message: `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, ' $1')} is required`
     };
   }

   if (fieldName === 'email' || fieldName === 'guardianEmail') {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(value)) {
       return {
         field: fieldName,
         message: 'Please enter a valid email address'
       };
     }
   }

   if (fieldName === 'mobileNumber' || fieldName === 'guardianMobile') {
     const mobileRegex = /^\d{10}$/;
     if (!mobileRegex.test(value)) {
       return {
         field: fieldName,
         message: 'Mobile number must be 10 digits'
       };
     }
   }

   if (fieldName === 'aadharNo') {
     const aadharRegex = /^\d{12}$/;
     if (!aadharRegex.test(value)) {
       return {
         field: fieldName,
         message: 'Aadhar number must be 12 digits'
       };
     }
   }

   if (fieldName === 'pinCode' || fieldName === 'guardianPinCode') {
     const pinCodeRegex = /^\d{6}$/;
     if (!pinCodeRegex.test(value)) {
       return {
         field: fieldName,
         message: 'Pin code must be 6 digits'
       };
     }
   }

   if (fieldName === 'dob') {
     const dobDate = new Date(value);
     const today = new Date();
     if (dobDate >= today) {
       return {
         field: fieldName,
         message: 'Date of birth must be in the past'
       };
     }
   }

   return null;
 };

 const validateForm = () => {
   const requiredFields = [
     'studentName',
     'studentNameAadhar',
     'gender',
     'dob',
     'aadharNo',
     'fatherName',
     'motherName',
     'class',
     'email',
     'mobileNumber',
     'country',
     'state',
     'district',
     'pinCode'
   ];

   const newErrors: ValidationError[] = [];

   requiredFields.forEach(fieldName => {
     const error = validateField(fieldName, formData[fieldName]);
     if (error) {
       newErrors.push(error);
     }
   });

   if (!sameAsStudent) {
     const guardianFields = [
       'guardianMobile',
       'guardianEmail',
       'guardianCountry',
       'guardianState',
       'guardianDistrict',
       'guardianPinCode'
     ];

     guardianFields.forEach(fieldName => {
       const error = validateField(fieldName, formData[fieldName]);
       if (error) {
         newErrors.push(error);
       }
     });
   }

   if (!photoPreview) {
     newErrors.push({
       field: 'photo',
       message: 'Please upload a student photo'
     });
   }

   setErrors(newErrors);
   return newErrors.length === 0;
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
   const { name, value } = e.target;
   setFormData(prev => ({ ...prev, [name]: value }));
   setErrors(prev => prev.filter(error => error.field !== name));
 };

 const handleSubjectsChange = (subjects: string[]) => {
   setFormData(prev => ({ ...prev, subjects }));
 };

 const handleSameAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
   const checked = e.target.checked;
   setSameAsStudent(checked);

   if (checked) {
     const addressFields = [
       ['country', 'guardianCountry'],
       ['state', 'guardianState'],
       ['district', 'guardianDistrict'],
       ['block', 'guardianBlock'],
       ['panchayat', 'guardianPanchayat'],
       ['locality', 'guardianLocality'],
       ['postOffice', 'guardianPostOffice'],
       ['policeStation', 'guardianPoliceStation'],
       ['pinCode', 'guardianPinCode']
     ];

     const newFormData = { ...formData };
     addressFields.forEach(([from, to]) => {
       newFormData[to] = formData[from] || '';
     });
     setFormData(newFormData);
   }
 };

 const handlePhotoChange = async (file: File | null) => {
   if (file) {
     try {
       const previewUrl = URL.createObjectURL(file);
       setPhotoPreview(previewUrl);
       setErrors(prev => prev.filter(error => error.field !== 'photo'));

       const photoPath = `student-photos/${Date.now()}-${file.name}`;
       const photoUrl = await supabaseService.uploadFile(file, photoPath);
       
       setPhotoPreview(photoUrl);
       URL.revokeObjectURL(previewUrl);
     } catch (error) {
       console.error('Error uploading photo:', error);
       setErrors(prev => [...prev, { field: 'photo', message: 'Failed to upload photo' }]);
       setPhotoPreview(null);
     }
   } else {
     setPhotoPreview(null);
   }
 };

 const handlePreview = (e: React.FormEvent) => {
   e.preventDefault();
   if (validateForm()) {
     setShowPreview(true);
     window.scrollTo(0, 0);
   }
 };

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   if (isSubmitting) return;
   
   try {
     setIsSubmitting(true);
     setErrors([]);

     if (!validateForm()) {
       throw new Error('Please fix all validation errors before submitting');
     }

     const applicationData = {
       photo_url: photoPreview,
       submission_date: new Date().toISOString(),
       last_updated: new Date().toISOString(),
       student_name: formData.studentName,
       student_name_aadhar: formData.studentNameAadhar,
       gender: formData.gender,
       dob: formData.dob,
       aadhar_no: formData.aadharNo,
       blood_group: formData.bloodGroup,
       religion: formData.religion,
       mother_tongue: formData.motherTongue,
       custom_mother_tongue: formData.customMotherTongue,
       social_category: formData.socialCategory,
       ews_status: formData.ewsStatus,
       cwsn_status: formData.cwsnStatus,
       father_name: formData.fatherName,
       mother_name: formData.motherName,
       guardian_name: formData.guardianName,
       relation_with_guardian: formData.relationWithGuardian,
       father_qualification: formData.fatherQualification,
       mother_qualification: formData.motherQualification,
       father_occupation: formData.fatherOccupation,
       mother_occupation: formData.motherOccupation,
       annual_income: formData.annualIncome,
       session: formData.session,
       class: formData.class as string,
       section: formData.section,
       roll_no: formData.rollNo,
       house: formData.house,
       second_language: formData.secondLanguage,
       third_language: formData.thirdLanguage,
       skill_subject: formData.skillSubject,
       subjects: formData.subjects,
       previous_status: formData.previousStatus,
       previous_class: formData.previousClass,
       previous_section: formData.previousSection,
       previous_roll_no: formData.previousRollNo,
       academic_year: formData.academicYear,
       medium: formData.medium,
       admission_type: formData.admissionType,
       email: formData.email,
       mobile_number: formData.mobileNumber,
       address: formData.address,
       country: formData.country,
       state: formData.state,
       district: formData.district,
       block: formData.block,
       panchayat: formData.panchayat,
       locality: formData.locality,
       post_office: formData.postOffice,
       police_station: formData.policeStation,
       pin_code: formData.pinCode,
       guardian_country: formData.guardianCountry,
       guardian_state: formData.guardianState,
       guardian_district: formData.guardianDistrict,
       guardian_block: formData.guardianBlock,
       guardian_panchayat: formData.guardianPanchayat,
       guardian_address: formData.guardianAddress,
       guardian_locality: formData.guardianLocality,
       guardian_post_office: formData.guardianPostOffice,
       guardian_police_station: formData.guardianPoliceStation,
       guardian_pin_code: formData.guardianPinCode,
       guardian_mobile: formData.guardianMobile,
       guardian_email: formData.guardianEmail,
       transport_facility: formData.transportFacility,
       hostel_facility: formData.hostelFacility,
       free_shoes: formData.freeShoes,
       free_uniform: formData.freeUniform,
       free_books: formData.freeBooks,
       free_exercise_book: formData.freeExerciseBook,
       rte_education: formData.rteEducation,
       ncc_participation: formData.nccParticipation,
       bus_route: formData.busRoute,
       pickup_point: formData.pickupPoint,
       transport_month: formData.transportMonth
     };

     const result = await supabaseService.submitApplication(applicationData);

     try {
       await sendConfirmationEmail({
         email: formData.email,
         parentName: formData.guardianName || formData.fatherName,
         studentName: formData.studentName,
         applicationId: result.id,
         class: formData.class as string,
         submissionDate: new Date().toLocaleDateString(),
         formData: formData,
         photoPreview: photoPreview
       });
     } catch (emailError) {
       console.error('Error sending confirmation email:', emailError);
     }

     setSubmissionResult({
       success: true,
       applicationId: result.id,
       message: 'Application submitted successfully'
     });
     
     setSubmitted(true);
     window.scrollTo(0, 0);
   } catch (error) {
     const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
     setErrors([{ field: 'submit', message: errorMessage }]);
     console.error('Error submitting form:', error);
   } finally {
     setIsSubmitting(false);
   }
 };

 const handleEditForm = () => {
   setShowPreview(false);
   window.scrollTo(0, 0);
 };

 const resetForm = () => {
   setFormData(initialFormState);
   setSubmitted(false);
   setShowPreview(false);
   setPhotoPreview(null);
   setErrors([]);
   setSubmissionResult(null);
 };

 return {
   formData,
   handleChange,
   handleSubmit,
   handlePreview,
   handleEditForm,
   handleSubjectsChange,
   submitted,
   isSubmitting,
   showPreview,
   sameAsStudent,
   handleSameAddressChange,
   handlePhotoChange,
   photoPreview,
   errors,
   submissionResult,
   resetForm
 };
}