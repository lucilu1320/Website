import jsPDF from 'jspdf';
import { getFare } from '../components/pages/admissions/form-data/transportData';

interface TransportDetails {
  busRoute: string;
  pickupPoint: string;
  transportMonth: string;
  monthlyFare: string;
}

const getTransportDetails = (formData: Record<string, any>): TransportDetails | null => {
  if (formData.transportFacility === 'YES' && formData.busRoute && formData.pickupPoint) {
    const fare = getFare(formData.busRoute, formData.pickupPoint);
    return {
      busRoute: formData.busRoute,
      pickupPoint: formData.pickupPoint,
      transportMonth: formData.transportMonth,
      monthlyFare: fare ? `Rs. ${fare}` : '-'
    };
  }
  return null;
};

export const generatePDF = async (
  formData: Record<string, any>,
  photoPreview: string | null,
  returnBlob: boolean = false
): Promise<void | Blob> => {
  try {
    // Initialize PDF with custom font size
    const pdf = new jsPDF();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    let y = margin;

    // Header with green background
    pdf.setFillColor(42, 140, 74); // #2A8C4A
    pdf.rect(0, 0, pageWidth, 40, 'F');

    // School name and form title
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Kharagpur Vision Academy', pageWidth / 2, 20, { align: 'center' });
    pdf.setFontSize(16);
    pdf.text('Admission Application Form (2025-2026)', pageWidth / 2, 30, { align: 'center' });
    y = 50;

    // Add photo if available
    if (photoPreview) {
      try {
        pdf.addImage(photoPreview, 'JPEG', pageWidth - 60, 45, 40, 40);
        pdf.setDrawColor(42, 140, 74);
        pdf.setLineWidth(0.5);
        pdf.rect(pageWidth - 60, 45, 40, 40);
      } catch (error) {
        console.error('Error adding photo:', error);
      }
    }

    // Helper function to add section header
    const addSectionHeader = (title: string) => {
      pdf.setFillColor(42, 140, 74);
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.rect(margin, y, pageWidth - 2 * margin, 10, 'F');
      pdf.text(title, margin + 2, y + 7);
      y += 15;
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(10);
    };

    // Helper function to add field
    const addField = (label: string, value: any) => {
      if (value) {
        // Check if we need a new page
        if (y > pdf.internal.pageSize.getHeight() - 20) {
          pdf.addPage();
          y = margin;
        }
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${label}:`, margin, y);
        pdf.setFont('helvetica', 'normal');
        const formattedValue = String(value).toUpperCase();
        pdf.text(formattedValue, margin + 60, y);
        y += 7;
      }
    };

    // Student Information
    addSectionHeader('Student Information');
    addField('Name of Student', formData.studentName);
    addField('Name as per Aadhar', formData.studentNameAadhar);
    addField('Gender', formData.gender);
    addField('Date of Birth', formData.dob);
    addField('Aadhar Number', formData.aadharNo);
    addField('Blood Group', formData.bloodGroup);
    addField('Religion', formData.religion);
    addField('Mother Tongue', formData.motherTongue);
    addField('Social Category', formData.socialCategory);
    addField('EWS Status', formData.ewsStatus);
    addField('CWSN Status', formData.cwsnStatus);

    // Academic Information
    addSectionHeader('Academic Information');
    addField('Session', formData.session);
    addField('Class', formData.class);
    addField('Section', formData.section);
    addField('Roll Number', formData.rollNo);
    addField('House', formData.house);
    addField('Second Language', formData.secondLanguage);
    addField('Third Language', formData.thirdLanguage);
    addField('Skill Subject', formData.skillSubject);

    // Parent Information
    addSectionHeader('Parent Information');
    addField('Father\'s Name', formData.fatherName);
    addField('Mother\'s Name', formData.motherName);
    addField('Guardian\'s Name', formData.guardianName);
    addField('Father\'s Qualification', formData.fatherQualification);
    addField('Mother\'s Qualification', formData.motherQualification);
    addField('Father\'s Occupation', formData.fatherOccupation);
    addField('Mother\'s Occupation', formData.motherOccupation);
    addField('Relationship with Guardian', formData.relationWithGuardian);
    addField('Annual Family Income', formData.annualIncome);

    // Contact Information
    addSectionHeader('Contact Information');
    addField('Country', formData.country);
    addField('State', formData.state);
    addField('District', formData.district);
    addField('Block/Munc/Corp', formData.block);
    addField('Panchayat', formData.panchayat);
    addField('Police Station', formData.policeStation);
    addField('Post Office', formData.postOffice);
    addField('Pin Code', formData.pinCode);
    addField('Mobile Number', formData.mobileNumber);
    addField('Email', formData.email);

    // Guardian Contact Information
    addSectionHeader('Guardian Contact Information');
    addField('Country', formData.guardianCountry);
    addField('State', formData.guardianState);
    addField('District', formData.guardianDistrict);
    addField('Block/Munc/Corp', formData.guardianBlock);
    addField('Panchayat', formData.guardianPanchayat);
    addField('Police Station', formData.guardianPoliceStation);
    addField('Post Office', formData.guardianPostOffice);
    addField('Pin Code', formData.guardianPinCode);
    addField('Mobile Number', formData.guardianMobile);
    addField('Email', formData.guardianEmail);

    // Previous School Details
    addSectionHeader('Previous School Details');
    addField('Previous Status', formData.previousStatus);
    addField('Previous Class', formData.previousClass);
    addField('Previous Section', formData.previousSection);
    addField('Previous Roll No', formData.previousRollNo);
    addField('Academic Year', formData.academicYear);
    addField('Medium of Instruction', formData.medium);
    addField('Admission Type', formData.admissionType);

    // Facilities
    addSectionHeader('Facilities');
    addField('Transport Facility Required', formData.transportFacility);
    addField('Hostel Facility Required', formData.hostelFacility);
    addField('Free Shoes Required', formData.freeShoes);
    addField('Free Uniform Required', formData.freeUniform);
    addField('Free Books Required', formData.freeBooks);
    addField('Free Exercise Book Required', formData.freeExerciseBook);
    addField('RTE Education', formData.rteEducation);
    addField('NCC/NSS/Scouts Guides', formData.nccParticipation);

    // Transport Details if applicable
    const transportDetails = getTransportDetails(formData);
    if (transportDetails) {
      addSectionHeader('Transport Details');
      addField('Bus Route', transportDetails.busRoute);
      addField('Pickup Point', transportDetails.pickupPoint);
      addField('Transport Month', transportDetails.transportMonth);
      addField('Monthly Fee', transportDetails.monthlyFare);
    }

    // Add page numbers
    const pageCount = pdf.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setTextColor(128, 128, 128);
      pdf.text(
        `Page ${i} of ${pageCount}`,
        pageWidth / 2,
        pdf.internal.pageSize.getHeight() - 10,
        { align: 'center' }
      );
    }

    // Add current date and time at the bottom
    const now = new Date().toLocaleString();
    pdf.setFontSize(8);
    pdf.setTextColor(128, 128, 128);
    pdf.text(
      `Generated on: ${now}`,
      margin,
      pdf.internal.pageSize.getHeight() - 10
    );

    if (returnBlob) {
      // Return PDF as Blob for email attachment
      return pdf.output('blob');
    } else {
      // Save PDF to file
      const fileName = `KVA_Application_${formData.studentName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
      pdf.save(fileName);
    }
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF');
  }
};