import React from 'react';
import { FormField } from '../../form-components/FormField';
import { SubjectSelection } from './SubjectSelection';
import { LanguageSelection } from './LanguageSelection';
import { useEnrollmentLogic } from './useEnrollmentLogic';
import { EnrollmentFormData } from './types';

interface EnrollmentSectionProps {
  formData: EnrollmentFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubjectsChange: (subjects: string[]) => void;
}

export function EnrollmentSection({ formData, onChange, onSubjectsChange }: EnrollmentSectionProps) {
  const {
    showLanguageOptions,
    showStreamSubjects,
    currentSession,
    sessionOptions,
    classOptions,
    sectionOptions,
    houseOptions,
    getStreamFromClass,
    validateSubjectSelection,
  } = useEnrollmentLogic(formData);

  return (
    <div className="bg-gray-50 rounded-lg p-8 mt-8">
      <div className="border-2 border-[#2A8C4A] rounded-lg p-4 mb-8">
        <h2 className="text-xl font-bold text-center text-[#2A8C4A]">
          Enrolment Details of the Student of Present Academic Year
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <FormField
            label="Session"
            name="session"
            type="select"
            value={currentSession}
            onChange={onChange}
            options={sessionOptions}
            required
            disabled
          />

          <FormField
            label="Section"
            name="section"
            type="select"
            value={formData.section}
            onChange={onChange}
            options={sectionOptions}
            required
          />

          <FormField
            label="House"
            name="house"
            type="select"
            value={formData.house}
            onChange={onChange}
            options={houseOptions}
            required
          />

          {showLanguageOptions && (
            <LanguageSelection
              formData={formData}
              onChange={onChange}
            />
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <FormField
            label="Class"
            name="class"
            type="select"
            value={formData.class}
            onChange={onChange}
            options={classOptions}
            required
          />

          <FormField
            label="Roll No"
            name="rollNo"
            type="text"
            value={formData.rollNo}
            onChange={onChange}
            pattern="\d*"
            maxLength={4}
          />

          {showStreamSubjects && (
            <SubjectSelection
              stream={getStreamFromClass(formData.class)}
              selectedSubjects={formData.subjects || []}
              onChange={onSubjectsChange}
              error={validateSubjectSelection(formData.subjects)}
            />
          )}
        </div>
      </div>
    </div>
  );
}