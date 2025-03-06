import React from 'react';
import { FormField } from '../../form-components/FormField';
import { EnrollmentFormData } from './types';

const languageOptions = [
  { value: 'BENGALI', label: 'BENGALI' },
  { value: 'HINDI', label: 'HINDI' },
  { value: 'SANSKRIT', label: 'SANSKRIT' }
];

interface LanguageSelectionProps {
  formData: EnrollmentFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function LanguageSelection({ formData, onChange }: LanguageSelectionProps) {
  return (
    <>
      <FormField
        label="Second Language"
        name="secondLanguage"
        type="select"
        value={formData.secondLanguage || ''}
        onChange={onChange}
        options={languageOptions}
        required
      />

      <FormField
        label="Third Language"
        name="thirdLanguage"
        type="select"
        value={formData.thirdLanguage || ''}
        onChange={onChange}
        options={languageOptions}
      />

      <FormField
        label="Skill Subject"
        name="skillSubject"
        type="select"
        value={formData.skillSubject || ''}
        onChange={onChange}
        options={[
          { value: 'COMPUTER', label: 'COMPUTER' },
          { value: 'INFORMATION_TECHNOLOGY', label: 'INFORMATION TECHNOLOGY' },
          { value: 'ARTIFICIAL_INTELLIGENCE', label: 'ARTIFICIAL INTELLIGENCE' }
        ]}
      />
    </>
  );
}