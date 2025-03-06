import React from 'react';
import { FormField } from '../form-components/FormField';
import { dropdownOptions } from '../form-data/dropdownOptions';
import { TransportDetails } from './TransportDetails';

interface FacilityDetailsProps {
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errors?: Array<{ field: string; message: string }>;
}

export function FacilityDetails({ formData, onChange, errors = [] }: FacilityDetailsProps) {
  const showTransportDetails = formData.transportFacility === 'YES';

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-8">
      <div className="border-2 border-[#2A8C4A] rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold text-center text-[#2A8C4A]">
          Facility Details
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <FormField
            label="Transport Facility Required"
            name="transportFacility"
            type="select"
            value={formData.transportFacility}
            onChange={onChange}
            options={dropdownOptions.yesNo}
            required
          />

          <FormField
            label="Hostel Facility Required"
            name="hostelFacility"
            type="select"
            value={formData.hostelFacility}
            onChange={onChange}
            options={dropdownOptions.yesNo}
            required
          />

          <FormField
            label="Free Shoes Required"
            name="freeShoes"
            type="select"
            value={formData.freeShoes}
            onChange={onChange}
            options={dropdownOptions.yesNo}
            required
          />

          <FormField
            label="Free Uniform Required"
            name="freeUniform"
            type="select"
            value={formData.freeUniform}
            onChange={onChange}
            options={dropdownOptions.yesNo}
            required
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <FormField
            label="Free Books Required"
            name="freeBooks"
            type="select"
            value={formData.freeBooks}
            onChange={onChange}
            options={dropdownOptions.yesNo}
            required
          />

          <FormField
            label="Free Exercise Book Required"
            name="freeExerciseBook"
            type="select"
            value={formData.freeExerciseBook}
            onChange={onChange}
            options={dropdownOptions.yesNo}
            required
          />

          <FormField
            label="RTE Education"
            name="rteEducation"
            type="select"
            value={formData.rteEducation}
            onChange={onChange}
            options={dropdownOptions.yesNo}
            required
          />

          <FormField
            label="NCC/NSS/Scouts Guides"
            name="nccParticipation"
            type="select"
            value={formData.nccParticipation}
            onChange={onChange}
            options={dropdownOptions.yesNo}
            required
          />
        </div>
      </div>

      {showTransportDetails && (
        <TransportDetails
          formData={formData}
          onChange={onChange}
        />
      )}
    </div>
  );
}