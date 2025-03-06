export const getPreviewSections = (formData: any) => ({
  'General Information': {
    'Student Name': formData.studentName,
    'Gender': formData.gender,
    'Date of Birth': formData.dob,
    'Aadhar Number': formData.aadharNo,
    'Father\'s Name': formData.fatherName,
    'Mother\'s Name': formData.motherName,
    'Guardian\'s Name': formData.guardianName
  },
  'Academic Details': {
    'Class': formData.class,
    'Section': formData.section,
    'Roll Number': formData.rollNo,
    'House': formData.house,
    'Second Language': formData.secondLanguage,
    'Third Language': formData.thirdLanguage,
    'Skill Subject': formData.skillSubject
  },
  'Contact Information': {
    'Address': formData.address,
    'City': formData.locality,
    'State': formData.state,
    'Pin Code': formData.pinCode,
    'Mobile': formData.mobileNumber,
    'Email': formData.email
  },
  'Guardian Information': {
    'Guardian Name': formData.guardianName,
    'Relationship': formData.relationWithGuardian,
    'Mobile': formData.guardianMobile,
    'Email': formData.guardianEmail,
    'Address': formData.guardianAddress
  },
  'Transport Details': {
    'Bus Route': formData.busRoute,
    'Pickup Point': formData.pickupPoint,
    'Transport Month': formData.transportMonth
  }
});