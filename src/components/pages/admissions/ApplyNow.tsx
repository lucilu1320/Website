import React from 'react';
import { GeneralInformation } from './form-sections/GeneralInformation';
import { EnrollmentDetails } from './form-sections/EnrollmentDetails';
import { PreviousSchoolDetails } from './form-sections/PreviousSchoolDetails';
import { FacilityDetails } from './form-sections/FacilityDetails';
import { ContactInformation } from './form-sections/ContactInformation';
import { GuardianContact } from './form-sections/GuardianContact';
import { PhotoUpload } from './form-sections/PhotoUpload';
import { FormHeader } from './form-sections/FormHeader';
import { FormPreview } from './form-sections/FormPreview';
import { FormSuccess } from './form-sections/FormSuccess';
import { useAdmissionForm } from '../../../hooks/useAdmissionForm';

export function ApplyNow() {
  const {
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
  } = useAdmissionForm();

  const renderFormContent = () => {
    if (submitted) {
      return (
        <FormSuccess 
          applicationId={submissionResult?.applicationId} 
          onReset={resetForm} 
        />
      );
    }

    if (showPreview) {
      return (
        <FormPreview
          formData={formData}
          photoPreview={photoPreview}
          onEdit={handleEditForm}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      );
    }

    return (
      <form onSubmit={handlePreview} className="space-y-8">
        <GeneralInformation 
          formData={formData} 
          onChange={handleChange}
          errors={errors}
        />

        <EnrollmentDetails 
          formData={formData} 
          onChange={handleChange}
          onSubjectsChange={handleSubjectsChange}
          errors={errors}
        />

        <PreviousSchoolDetails 
          formData={formData} 
          onChange={handleChange}
          errors={errors}
        />

        <FacilityDetails 
          formData={formData} 
          onChange={handleChange}
          errors={errors}
        />

        <ContactInformation 
          formData={formData} 
          onChange={handleChange}
          errors={errors}
        />

        <GuardianContact
          formData={formData}
          studentAddress={formData}
          onChange={handleChange}
          onSameAddressChange={handleSameAddressChange}
          sameAsStudent={sameAsStudent}
          errors={errors}
        />

        <PhotoUpload
          onPhotoChange={handlePhotoChange}
          photoPreview={photoPreview}
        />
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#2A8C4A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#238040] transition-colors transform hover:scale-105 duration-200"
          >
            Preview Application
          </button>
        </div>

        {errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="text-red-800 font-medium mb-2">Please fix the following errors:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {errors.map((error, index) => (
                <li key={index} className="text-red-600">
                  {error.message}
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[30vh] sm:h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Apply Now"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Apply Now</h1>
              <p className="text-lg sm:text-xl opacity-90">Begin Your Journey with KVA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <FormHeader />
          {renderFormContent()}
        </div>
      </div>
    </div>
  );
}