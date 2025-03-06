import * as XLSX from 'xlsx';
import { Application } from '../types';
import { getFare } from '../components/pages/admissions/form-data/transportData';

export const generateExcel = (applications: Application[]) => {
  try {
    // Transform data for Excel
    const excelData = applications.map(app => {
      // Calculate transport fare if applicable
      const transportFare = app.transport_facility === 'YES' && app.bus_route && app.pickup_point
        ? getFare(app.bus_route, app.pickup_point)
        : null;

      return {
        'Application ID': app.id,
        'Submission Date': new Date(app.submission_date).toLocaleDateString(),
        'Status': app.status,
        // Student Information
        'Student Name': app.student_name,
        'Name as per Aadhar': app.student_name_aadhar,
        'Gender': app.gender,
        'Date of Birth': app.dob,
        'Aadhar Number': app.aadhar_no,
        'Blood Group': app.blood_group,
        'Religion': app.religion,
        'Mother Tongue': app.mother_tongue,
        'Social Category': app.social_category,
        'EWS Status': app.ews_status,
        'CWSN Status': app.cwsn_status,
        // Academic Information
        'Session': app.session,
        'Class': app.class,
        'Section': app.section,
        'Roll No': app.roll_no,
        'House': app.house,
        'Second Language': app.second_language,
        'Third Language': app.third_language,
        'Skill Subject': app.skill_subject,
        'Subjects': Array.isArray(app.subjects) ? app.subjects.join(', ') : app.subjects,
        // Parent Information
        'Father\'s Name': app.father_name,
        'Mother\'s Name': app.mother_name,
        'Father\'s Qualification': app.father_qualification,
        'Mother\'s Qualification': app.mother_qualification,
        'Father\'s Occupation': app.father_occupation,
        'Mother\'s Occupation': app.mother_occupation,
        'Guardian\'s Name': app.guardian_name,
        'Relationship with Guardian': app.relation_with_guardian,
        'Annual Income': app.annual_income,
        // Contact Information
        'Country': app.country,
        'State': app.state,
        'District': app.district,
        'Block': app.block,
        'Panchayat': app.panchayat,
        'Locality': app.locality,
        'Police Station': app.police_station,
        'Post Office': app.post_office,
        'Pin Code': app.pin_code,
        'Mobile Number': app.mobile_number,
        'Email': app.email,
        // Guardian Contact
        'Guardian Country': app.guardian_country,
        'Guardian State': app.guardian_state,
        'Guardian District': app.guardian_district,
        'Guardian Block': app.guardian_block,
        'Guardian Panchayat': app.guardian_panchayat,
        'Guardian Locality': app.guardian_locality,
        'Guardian Police Station': app.guardian_police_station,
        'Guardian Post Office': app.guardian_post_office,
        'Guardian Pin Code': app.guardian_pin_code,
        'Guardian Mobile': app.guardian_mobile,
        'Guardian Email': app.guardian_email,
        // Previous School Details
        'Previous Status': app.previous_status,
        'Previous Class': app.previous_class,
        'Previous Section': app.previous_section,
        'Previous Roll No': app.previous_roll_no,
        'Academic Year': app.academic_year,
        'Medium': app.medium,
        'Admission Type': app.admission_type,
        // Facilities
        'Transport Facility': app.transport_facility,
        'Bus Route': app.bus_route,
        'Pickup Point': app.pickup_point,
        'Transport Month': app.transport_month,
        'Transport Fee': transportFare ? `₹${transportFare}` : '-',
        'Hostel Facility': app.hostel_facility,
        'Free Shoes': app.free_shoes,
        'Free Uniform': app.free_uniform,
        'Free Books': app.free_books,
        'Free Exercise Book': app.free_exercise_book,
        'RTE Education': app.rte_education,
        'NCC/NSS/Scouts Guides': app.ncc_participation,
        // Metadata
        'Last Updated': new Date(app.last_updated).toLocaleDateString()
      };
    });

    // Create workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(excelData);

    // Auto-size columns
    const colWidths = Object.keys(excelData[0] || {}).map(key => ({
      wch: Math.max(
        key.length,
        ...excelData.map(row => 
          String(row[key] || '').length
        )
      )
    }));
    ws['!cols'] = colWidths;

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Applications');

    // Generate Excel file
    const timestamp = new Date().toISOString().split('T')[0];
    XLSX.writeFile(wb, `KVA_Applications_${timestamp}.xlsx`);
  } catch (error) {
    console.error('Error generating Excel:', error);
    throw new Error('Failed to generate Excel file');
  }
};