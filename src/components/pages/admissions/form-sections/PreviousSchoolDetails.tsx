// src/components/pages/admissions/form-sections/PreviousSchoolDetails.tsx

import React, { useEffect } from 'react';
import { FormField } from '../form-components/FormField';
import { PreviousSchoolData, ValidationError } from '../types/admissionForm';

interface PreviousSchoolDetailsProps {
  formData: PreviousSchoolData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errors?: ValidationError[];
}

export function PreviousSchoolDetails({ 
  formData, 
  onChange, 
  errors = [] 
}: PreviousSchoolDetailsProps) {
  const isFromOtherSchool = formData.previousStatus === 'STUDIED_AT_OTHER_SCHOOL';

  useEffect(() => {
    if (!isFromOtherSchool) {
      const fieldsToReset = [
        'previousClass',
        'previousSection',
        'previousRollNo',
        'academicYear',
        'medium'
      ];

      fieldsToReset.forEach(field => {
        onChange({
          target: {
            name: field,
            value: ''
          }
        } as React.ChangeEvent<HTMLSelectElement>);
      });
    }

    onChange({
      target: {
        name: 'admissionType',
        value: isFromOtherSchool ? 'NEW_ADMISSION_WITH_TC' : 'FIRST_TIME_ADMISSION'
      }
    } as React.ChangeEvent<HTMLSelectElement>);
  }, [formData.previousStatus, isFromOtherSchool, onChange]);

  const handleAcademicYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');

    if (value.length > 0) {
      value = value.slice(0, 8);
      
      if (value.length > 4) {
        value = value.slice(0, 4) + '-' + value.slice(4);
      }
    }

    if (value.length === 9) {
      const [startYear, endYear] = value.split('-').map(Number);
      if (endYear !== startYear + 1) {
        value = value.slice(0, 4);
      }
    }

    onChange({
      target: {
        name: 'academicYear',
        value
      }
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const getFieldError = (fieldName: string): string | undefined => {
    const error = errors.find(err => err.field === fieldName);
    return error?.message;
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-8">
      <div className="border-2 border-[#2A8C4A] rounded-lg p-4 mb-6">
        <h2 className="text-xl font-bold text-center text-[#2A8C4A]">
          Enrolment Details of the Student of Previous School
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <FormField
            label="Status of the student in Previous Academic year of schooling"
            name="previousStatus"
            type="select"
            value={formData.previousStatus}
            onChange={onChange}
            options={[
              { value: 'ANGANWADI', label: 'Anganwadi' },
              { value: 'NONE', label: 'None' },
              { value: 'NOT_STUDYING', label: 'Not Studying' },
              { value: 'STUDIED_AT_OTHER_SCHOOL', label: 'Studied at Other School' }
            ]}
            required
            error={getFieldError('previousStatus')}
          />

          <FormField
            label="Previous Class"
            name="previousClass"
            type="select"
            value={formData.previousClass || ''}
            onChange={onChange}
            options={[
              { value: '', label: 'Select Previous Class' },
              { value: 'NURSERY', label: 'Nursery' },
              { value: 'LKG', label: 'LKG' },
              { value: 'UKG', label: 'UKG' },
              { value: 'CLASS_I', label: 'Class I' },
              { value: 'CLASS_II', label: 'Class II' },
              { value: 'CLASS_III', label: 'Class III' },
              { value: 'CLASS_IV', label: 'Class IV' },
              { value: 'CLASS_V', label: 'Class V' },
              { value: 'CLASS_VI', label: 'Class VI' },
              { value: 'CLASS_VII', label: 'Class VII' },
              { value: 'CLASS_VIII', label: 'Class VIII' },
              { value: 'CLASS_IX', label: 'Class IX' },
              { value: 'CLASS_X', label: 'Class X' },
              { value: 'CLASS_XI_SCIENCE', label: 'Class XI - Science' },
              { value: 'CLASS_XI_ARTS', label: 'Class XI - Arts' },
              { value: 'CLASS_XI_COMMERCE', label: 'Class XI - Commerce' }
            ]}
            required={isFromOtherSchool}
            disabled={!isFromOtherSchool}
            error={getFieldError('previousClass')}
          />

          <FormField
            label="Previous Roll No"
            name="previousRollNo"
            type="text"
            value={formData.previousRollNo || ''}
            onChange={onChange}
            pattern="\d*"
            maxLength={4}
            required={isFromOtherSchool}
            disabled={!isFromOtherSchool}
            error={getFieldError('previousRollNo')}
          />

          <FormField
            label="Admission Type"
            name="admissionType"
            type="select"
            value={formData.admissionType || ''}
            onChange={onChange}
            options={[
              { value: 'FIRST_TIME_ADMISSION', label: 'First Time Admission' },
              { value: 'NEW_ADMISSION_WITH_TC', label: 'New Admission with TC' }
            ]}
            required
            disabled={true}
            error={getFieldError('admissionType')}
          />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Academic Year
              {isFromOtherSchool && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
              type="text"
              name="academicYear"
              value={formData.academicYear || ''}
              onChange={handleAcademicYearChange}
              placeholder="YYYY-YYYY"
              className="w-full rounded-lg border-gray-300 focus:border-[#2A8C4A] focus:ring focus:ring-[#2A8C4A] focus:ring-opacity-50 h-11"
              required={isFromOtherSchool}
              disabled={!isFromOtherSchool}
              maxLength={9}
            />
            <p className="text-sm text-gray-500">Format: YYYY-YYYY (e.g., 2023-2024)</p>
            {getFieldError('academicYear') && (
              <p className="text-sm text-red-600 mt-1">{getFieldError('academicYear')}</p>
            )}
          </div>

          <FormField
            label="Previous Section"
            name="previousSection"
            type="select"
            value={formData.previousSection || ''}
            onChange={onChange}
            options={[
              { value: '', label: 'Select Section' },
              { value: 'A', label: 'A' },
              { value: 'B', label: 'B' },
              { value: 'C', label: 'C' }
            ]}
            required={isFromOtherSchool}
            disabled={!isFromOtherSchool || !formData.previousClass}
            error={getFieldError('previousSection')}
          />

          <FormField
            label="Medium of Instruction"
            name="medium"
            type="select"
            value={formData.medium || ''}
            onChange={onChange}
            options={[
              { value: '', label: 'Select Medium' },
              { value: 'BENGALI', label: 'Bengali' },
              { value: 'ENGLISH', label: 'English' },
              { value: 'HINDI', label: 'Hindi' }
            ]}
            required={isFromOtherSchool}
            disabled={!isFromOtherSchool}
            error={getFieldError('medium')}
          />

          {isFromOtherSchool && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                Note: Transfer Certificate (TC) from previous school is mandatory for admission.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}