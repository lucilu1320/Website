// components/form-sections/GeneralInformation.tsx

import React, { useState } from 'react';
import { FormField } from '../form-components/FormField';
import { dropdownOptions } from '../form-data/dropdownOptions';
import { GeneralInformationData, ValidationError } from '../types/admissionForm';
interface GeneralInformationProps {
  formData: GeneralInformationData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errors?: ValidationError[];
}

export function GeneralInformation({ formData, onChange, errors = [] }: GeneralInformationProps) {
  const [showOtherMotherTongue, setShowOtherMotherTongue] = useState(formData.motherTongue === 'OTHERS');

  const handleMotherTongueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setShowOtherMotherTongue(value === 'OTHERS');
    onChange(e);

    if (value !== 'OTHERS') {
      onChange({
        target: {
          name: 'customMotherTongue',
          value: ''
        }
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const getFieldError = (fieldName: string): string | undefined => {
    const error = errors.find(err => err.field === fieldName);
    return error?.message;
  };

  return (
    <div className="bg-gray-50 rounded-lg p-8">
      <div className="border-2 border-[#2A8C4A] rounded-lg p-4 mb-8">
        <h2 className="text-xl font-bold text-center text-[#2A8C4A]">
          General Information of the Student
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <FormField
            label="Name of the Student"
            name="studentName"
            type="text"
            value={formData.studentName}
            onChange={onChange}
            required
            uppercase
            error={getFieldError('studentName')}
          />

          <FormField
            label="Date of Birth"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={onChange}
            required
            error={getFieldError('dob')}
          />

          <FormField
            label="Name of Student as per Aadhar"
            name="studentNameAadhar"
            type="text"
            value={formData.studentNameAadhar}
            onChange={onChange}
            required
            uppercase
            error={getFieldError('studentNameAadhar')}
          />

          <FormField
            label="Mother's Name"
            name="motherName"
            type="text"
            value={formData.motherName}
            onChange={onChange}
            required
            uppercase
            error={getFieldError('motherName')}
          />

          <FormField
            label="Father's Qualification"
            name="fatherQualification"
            type="select"
            value={formData.fatherQualification}
            onChange={onChange}
            options={dropdownOptions.qualification}
            error={getFieldError('fatherQualification')}
          />

          <FormField
            label="Father's Occupation"
            name="fatherOccupation"
            type="select"
            value={formData.fatherOccupation}
            onChange={onChange}
            options={dropdownOptions.fatherOccupation}
            error={getFieldError('fatherOccupation')}
          />

          <div className="space-y-2">
            <FormField
              label="Mother Tongue"
              name="motherTongue"
              type="select"
              value={formData.motherTongue}
              onChange={handleMotherTongueChange}
              options={[
                { value: 'ASSAMESE', label: 'ASSAMESE' },
                { value: 'BENGALI', label: 'BENGALI' },
                { value: 'BODO', label: 'BODO' },
                { value: 'DOGRI', label: 'DOGRI' },
                { value: 'GUJARATI', label: 'GUJARATI' },
                { value: 'HINDI', label: 'HINDI' },
                { value: 'KANNADA', label: 'KANNADA' },
                { value: 'KASHMIRI', label: 'KASHMIRI' },
                { value: 'KONKANI', label: 'KONKANI' },
                { value: 'MAITHILI', label: 'MAITHILI' },
                { value: 'MALAYALAM', label: 'MALAYALAM' },
                { value: 'MANIPURI', label: 'MANIPURI' },
                { value: 'MARATHI', label: 'MARATHI' },
                { value: 'NEPALI', label: 'NEPALI' },
                { value: 'ODIA', label: 'ODIA' },
                { value: 'PUNJABI', label: 'PUNJABI' },
                { value: 'SANSKRIT', label: 'SANSKRIT' },
                { value: 'SANTALI', label: 'SANTALI' },
                { value: 'SINDHI', label: 'SINDHI' },
                { value: 'TAMIL', label: 'TAMIL' },
                { value: 'TELUGU', label: 'TELUGU' },
                { value: 'URDU', label: 'URDU' },
                { value: 'OTHERS', label: 'OTHERS' }
              ]}
              required
              error={getFieldError('motherTongue')}
            />
            {showOtherMotherTongue && (
              <FormField
                label="Specify Mother Tongue"
                name="customMotherTongue"
                type="text"
                value={formData.customMotherTongue || ''}
                onChange={onChange}
                required
                uppercase
                error={getFieldError('customMotherTongue')}
              />
            )}
          </div>

          <FormField
            label="Social Category"
            name="socialCategory"
            type="select"
            value={formData.socialCategory}
            onChange={onChange}
            options={dropdownOptions.socialCategory}
            error={getFieldError('socialCategory')}
          />

          <FormField
            label="Annual Family Income"
            name="annualIncome"
            type="select"
            value={formData.annualIncome}
            onChange={onChange}
            options={dropdownOptions.annualIncome}
            error={getFieldError('annualIncome')}
          />

          <FormField
            label="Whether belongs to EWS / Disadvantaged Group"
            name="ewsStatus"
            type="select"
            value={formData.ewsStatus}
            onChange={onChange}
            options={dropdownOptions.yesNo}
            error={getFieldError('ewsStatus')}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <FormField
            label="Gender"
            name="gender"
            type="select"
            value={formData.gender}
            onChange={onChange}
            options={dropdownOptions.gender}
            required
            error={getFieldError('gender')}
          />

          <FormField
            label="Aadhar No of Student"
            name="aadharNo"
            type="text"
            value={formData.aadharNo}
            onChange={onChange}
            pattern="\d{12}"
            maxLength={12}
            required
            error={getFieldError('aadharNo')}
          />

          <FormField
            label="Father's Name"
            name="fatherName"
            type="text"
            value={formData.fatherName}
            onChange={onChange}
            required
            uppercase
            error={getFieldError('fatherName')}
          />

          <FormField
            label="Guardian's Name"
            name="guardianName"
            type="text"
            value={formData.guardianName}
            onChange={onChange}
            uppercase
            error={getFieldError('guardianName')}
          />

          <FormField
            label="Mother's Qualification"
            name="motherQualification"
            type="select"
            value={formData.motherQualification}
            onChange={onChange}
            options={dropdownOptions.qualification}
            error={getFieldError('motherQualification')}
          />

          <FormField
            label="Mother's Occupation"
            name="motherOccupation"
            type="select"
            value={formData.motherOccupation}
            onChange={onChange}
            options={dropdownOptions.motherOccupation}
            error={getFieldError('motherOccupation')}
          />

          <FormField
            label="Religion"
            name="religion"
            type="select"
            value={formData.religion}
            onChange={onChange}
            options={dropdownOptions.religion}
            error={getFieldError('religion')}
          />

          <FormField
            label="Relationship with Guardian"
            name="relationWithGuardian"
            type="select"
            value={formData.relationWithGuardian}
            onChange={onChange}
            options={dropdownOptions.guardianRelation}
            error={getFieldError('relationWithGuardian')}
          />

          <FormField
            label="Blood Group"
            name="bloodGroup"
            type="select"
            value={formData.bloodGroup}
            onChange={onChange}
            options={dropdownOptions.bloodGroup}
            error={getFieldError('bloodGroup')}
          />

          <FormField
            label="Whether CWSN"
            name="cwsnStatus"
            type="select"
            value={formData.cwsnStatus}
            onChange={onChange}
            options={dropdownOptions.yesNo}
            error={getFieldError('cwsnStatus')}
          />
        </div>
      </div>
    </div>
  );
}