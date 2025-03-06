import React from 'react';
import { ArrowLeft, Send, Download } from 'lucide-react';
import { generatePDF } from '../../../../utils/pdfGenerator';
import { getFare } from '../form-data/transportData';

interface FormData {
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
  country: string;
  state: string;
  district: string;
  block: string;
  panchayat: string;
  address: string;
  locality: string;
  postOffice: string;
  policeStation: string;
  pinCode: string;
  mobileNumber: string;
  email: string;
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
  busRoute?: string;
  pickupPoint?: string;
  transportMonth?: string;
}

interface Section {
  title: string;
  fields: Record<string, any>;
}

interface FormPreviewProps {
  formData: FormData;
  photoPreview: string | null;
  onEdit: () => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  isSubmitting: boolean;
}

export function FormPreview({ formData, photoPreview, onEdit, onSubmit, isSubmitting }: FormPreviewProps) {
  const formatValue = (value: any): string => {
    if (!value) return '-';
    if (Array.isArray(value)) return value.join(', ');
    return String(value).toUpperCase();
  };

  const transportFare = formData.transportFacility === 'YES' && formData.busRoute && formData.pickupPoint
    ? getFare(formData.busRoute, formData.pickupPoint)
    : null;

  const sections: Section[] = [
    {
      title: 'Student Information',
      fields: {
        'Student Name': formData.studentName,
        'Name as per Aadhar': formData.studentNameAadhar,
        'Gender': formData.gender,
        'Date of Birth': formData.dob,
        'Aadhar Number': formData.aadharNo,
        'Blood Group': formData.bloodGroup,
        'Religion': formData.religion,
        'Mother Tongue': formData.motherTongue,
        'Custom Mother Tongue': formData.customMotherTongue,
        'Social Category': formData.socialCategory,
        'EWS Status': formData.ewsStatus,
        'CWSN Status': formData.cwsnStatus
      }
    },
    {
      title: 'Parent Information',
      fields: {
        'Father\'s Name': formData.fatherName,
        'Mother\'s Name': formData.motherName,
        'Guardian\'s Name': formData.guardianName,
        'Relationship with Guardian': formData.relationWithGuardian,
        'Father\'s Qualification': formData.fatherQualification,
        'Mother\'s Qualification': formData.motherQualification,
        'Father\'s Occupation': formData.fatherOccupation,
        'Mother\'s Occupation': formData.motherOccupation,
        'Annual Income': formData.annualIncome
      }
    },
    {
      title: 'Academic Information',
      fields: {
        'Session': formData.session,
        'Class': formData.class,
        'Section': formData.section,
        'Roll No': formData.rollNo,
        'House': formData.house,
        'Second Language': formData.secondLanguage,
        'Third Language': formData.thirdLanguage,
        'Skill Subject': formData.skillSubject,
        'Selected Subjects': formData.subjects
      }
    },
    {
      title: 'Previous School Details',
      fields: {
        'Previous Status': formData.previousStatus,
        'Previous Class': formData.previousClass,
        'Previous Section': formData.previousSection,
        'Previous Roll No': formData.previousRollNo,
        'Academic Year': formData.academicYear,
        'Medium': formData.medium,
        'Admission Type': formData.admissionType
      }
    },
    {
      title: 'Contact Information',
      fields: {
        'Country': formData.country,
        'State': formData.state,
        'District': formData.district,
        'Block': formData.block,
        'Panchayat': formData.panchayat,
        'Address': formData.address,
        'Locality': formData.locality,
        'Post Office': formData.postOffice,
        'Police Station': formData.policeStation,
        'Pin Code': formData.pinCode,
        'Mobile': formData.mobileNumber,
        'Email': formData.email
      }
    },
    {
      title: 'Guardian Contact Information',
      fields: {
        'Country': formData.guardianCountry,
        'State': formData.guardianState,
        'District': formData.guardianDistrict,
        'Block': formData.guardianBlock,
        'Panchayat': formData.guardianPanchayat,
        'Address': formData.guardianAddress,
        'Locality': formData.guardianLocality,
        'Post Office': formData.guardianPostOffice,
        'Police Station': formData.guardianPoliceStation,
        'Pin Code': formData.guardianPinCode,
        'Mobile': formData.guardianMobile,
        'Email': formData.guardianEmail
      }
    },
    {
      title: 'Facilities',
      fields: {
        'Transport Facility': formData.transportFacility,
        'Hostel Facility': formData.hostelFacility,
        'Free Shoes': formData.freeShoes,
        'Free Uniform': formData.freeUniform,
        'Free Books': formData.freeBooks,
        'Free Exercise Book': formData.freeExerciseBook,
        'RTE Education': formData.rteEducation,
        'NCC Participation': formData.nccParticipation
      }
    }
  ];

  // Add transport details if transport facility is YES
  if (formData.transportFacility === 'YES') {
    sections.push({
      title: 'Transport Details',
      fields: {
        'Bus Route': formData.busRoute,
        'Pickup Point': formData.pickupPoint,
        'Transport Month': formData.transportMonth,
        'Monthly Fee': transportFare ? `₹${transportFare}` : '-'
      }
    });
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await onSubmit(e as any);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleDownload = async () => {
    try {
      await generatePDF(formData, photoPreview);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center text-[#2A8C4A] mb-8">
        Application Preview
      </h2>

      {/* Photo Preview */}
      {photoPreview && (
        <div className="mb-8 flex justify-center">
          <img
            src={photoPreview}
            alt="Student"
            className="w-32 h-32 object-cover rounded-lg border-4 border-[#2A8C4A]"
          />
        </div>
      )}

      {/* Sections */}
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title} className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-[#2A8C4A] mb-4">{section.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(section.fields).map(([key, value]) => (
                value && (
                  <div key={key} className="flex flex-col">
                    <span className="text-sm text-gray-600">{key}</span>
                    <span className="font-medium">{formatValue(value)}</span>
                  </div>
                )
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-12">
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onEdit}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Edit Form
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-[#90C95F] text-white rounded-lg hover:bg-[#7CB342] transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Form
          </button>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="flex items-center gap-2 px-8 py-3 bg-[#2A8C4A] text-white rounded-lg hover:bg-[#238040] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Submit Application
            </>
          )}
        </button>
      </div>
    </div>
  );
}