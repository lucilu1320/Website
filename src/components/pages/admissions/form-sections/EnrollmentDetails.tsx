import React, { useEffect } from 'react';
import { FormField } from '../form-components/FormField';
import { dropdownOptions } from '../form-data/dropdownOptions';
import { ValidationError } from '../../../../types';

interface EnrollmentDetailsProps {
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubjectsChange: (subjects: string[]) => void;
  errors?: ValidationError[];
}

export function EnrollmentDetails({ formData, onChange, onSubjectsChange, errors = [] }: EnrollmentDetailsProps) {
  // Get current and next academic year options
  const getSessionOptions = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    return [
      { value: `${currentYear}-${currentYear + 1}`, label: `${currentYear}-${currentYear + 1}` },
      { value: `${currentYear + 1}-${currentYear + 2}`, label: `${currentYear + 1}-${currentYear + 2}` }
    ];
  };

  // Check if class is between Nursery and Class 9
  const shouldShowLanguageOptions = () => {
    const classValue = formData.class;
    if (!classValue) return false;

    const classOrder = {
      'NURSERY': 0, 'LKG': 1, 'UKG': 2,
      'CLASS_I': 3, 'CLASS_II': 4, 'CLASS_III': 5,
      'CLASS_IV': 6, 'CLASS_V': 7, 'CLASS_VI': 8,
      'CLASS_VII': 9, 'CLASS_VIII': 10, 'CLASS_IX': 11
    };

    return classValue in classOrder;
  };

  const showLanguageOptions = shouldShowLanguageOptions();
  const showStreamSubjects = formData.class?.includes('XI');
  const stream = formData.class?.split('-')[1];

  const languageOptions = [
    { value: 'NOT_APPLICABLE', label: 'Not Applicable' },
    { value: 'BENGALI', label: 'Bengali' },
    { value: 'HINDI', label: 'Hindi' },
    { value: 'SANSKRIT', label: 'Sanskrit' }
  ];

  const getSubjectsByStream = (stream: string) => {
    switch (stream) {
      case 'SCIENCE':
        return [
          { value: 'PHYSICS', label: 'Physics (Required)', required: true },
          { value: 'CHEMISTRY', label: 'Chemistry (Required)', required: true },
          { value: 'MATHEMATICS', label: 'Mathematics', required: false },
          { value: 'BIOLOGY', label: 'Biology', required: false },
          { value: 'COMPUTER_SCIENCE', label: 'Computer Science', required: false }
        ];
      case 'ARTS':
        return [
          { value: 'HISTORY', label: 'History (Required)', required: true },
          { value: 'POLITICAL_SCIENCE', label: 'Political Science (Required)', required: true },
          { value: 'GEOGRAPHY', label: 'Geography', required: false },
          { value: 'ECONOMICS', label: 'Economics', required: false },
          { value: 'SOCIOLOGY', label: 'Sociology', required: false }
        ];
      case 'COMMERCE':
        return [
          { value: 'ACCOUNTANCY', label: 'Accountancy (Required)', required: true },
          { value: 'BUSINESS_STUDIES', label: 'Business Studies (Required)', required: true },
          { value: 'MATHEMATICS', label: 'Mathematics', required: false },
          { value: 'ECONOMICS', label: 'Economics', required: false },
          { value: 'INFORMATICS_PRACTICE', label: 'Informatics Practice', required: false }
        ];
      default:
        return [];
    }
  };

  // Initialize required subjects when stream changes
  useEffect(() => {
    if (showStreamSubjects && stream) {
      const requiredSubjects = getSubjectsByStream(stream)
        .filter(subject => subject.required)
        .map(subject => subject.value);
      
      if (requiredSubjects.length > 0) {
        const currentSubjects = formData.subjects || [];
        const newSubjects = [...new Set([...currentSubjects, ...requiredSubjects])];
        onSubjectsChange(newSubjects);
      }
    }
  }, [stream, showStreamSubjects]);

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
            value={formData.session}
            onChange={onChange}
            options={getSessionOptions()}
            required
            error={errors?.find(e => e.field === 'session')?.message}
          />

          <FormField
            label="Section"
            name="section"
            type="select"
            value={formData.section}
            onChange={onChange}
            options={dropdownOptions.section}
            error={errors?.find(e => e.field === 'section')?.message}
          />

          <FormField
            label="House"
            name="house"
            type="select"
            value={formData.house}
            onChange={onChange}
            options={dropdownOptions.house}
            error={errors?.find(e => e.field === 'house')?.message}
          />

          {showLanguageOptions && (
            <>
              <FormField
                label="Second Language"
                name="secondLanguage"
                type="select"
                value={formData.secondLanguage}
                onChange={onChange}
                options={languageOptions}
                required
                error={errors?.find(e => e.field === 'secondLanguage')?.message}
              />

              <FormField
                label="Third Language"
                name="thirdLanguage"
                type="select"
                value={formData.thirdLanguage}
                onChange={onChange}
                options={languageOptions}
                error={errors?.find(e => e.field === 'thirdLanguage')?.message}
              />
            </>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <FormField
            label="Class"
            name="class"
            type="select"
            value={formData.class}
            onChange={(e) => {
              onChange(e);
              if (!shouldShowLanguageOptions()) {
                onChange({
                  target: { name: 'secondLanguage', value: '' }
                } as React.ChangeEvent<HTMLSelectElement>);
                onChange({
                  target: { name: 'thirdLanguage', value: '' }
                } as React.ChangeEvent<HTMLSelectElement>);
              }
              // Clear subjects when changing class
              onSubjectsChange([]);
            }}
            options={[
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
              { value: 'CLASS_XI-SCIENCE', label: 'Class XI - Science' },
              { value: 'CLASS_XI-ARTS', label: 'Class XI - Arts' },
              { value: 'CLASS_XI-COMMERCE', label: 'Class XI - Commerce' },
              { value: 'CLASS_XII-SCIENCE', label: 'Class XII - Science' },
              { value: 'CLASS_XII-ARTS', label: 'Class XII - Arts' },
              { value: 'CLASS_XII-COMMERCE', label: 'Class XII - Commerce' }
            ]}
            required
            error={errors?.find(e => e.field === 'class')?.message}
          />

          <FormField
            label="Roll No"
            name="rollNo"
            type="text"
            value={formData.rollNo}
            onChange={onChange}
            pattern="\d*"
            error={errors?.find(e => e.field === 'rollNo')?.message}
          />

          {showStreamSubjects && (
            <div className="space-y-4">
              <h3 className="font-medium text-gray-700">Select Subjects</h3>
              {getSubjectsByStream(stream).map((subject) => (
                <label key={subject.value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.subjects?.includes(subject.value)}
                    onChange={(e) => {
                      const newSubjects = e.target.checked
                        ? [...(formData.subjects || []), subject.value]
                        : (formData.subjects || []).filter(s => s !== subject.value);
                      onSubjectsChange(newSubjects);
                    }}
                    disabled={subject.required}
                    className="rounded border-gray-300 text-[#2A8C4A] focus:ring-[#2A8C4A]"
                  />
                  <span className="text-gray-700">{subject.label}</span>
                </label>
              ))}
              {errors?.find(e => e.field === 'subjects')?.message && (
                <p className="text-red-500 text-sm">{errors.find(e => e.field === 'subjects')?.message}</p>
              )}
            </div>
          )}

          {!showStreamSubjects && (
            <FormField
              label="Skill Subject"
              name="skillSubject"
              type="select"
              value={formData.skillSubject}
              onChange={onChange}
              options={dropdownOptions.skillSubjects}
              error={errors?.find(e => e.field === 'skillSubject')?.message}
            />
          )}
        </div>
      </div>
    </div>
  );
}