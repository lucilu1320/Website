import React from 'react';
import { SubjectGroup } from './types';

interface SubjectSelectionProps {
  stream: string | null;
  selectedSubjects: string[];
  onChange: (subjects: string[]) => void;
  error: string | null;
}

const streamSubjects: Record<string, SubjectGroup[]> = {
  SCIENCE: [
    {
      name: 'Core Subjects (Required)',
      subjects: ['PHYSICS', 'CHEMISTRY'],
      required: true
    },
    {
      name: 'Optional Subjects (Select 2)',
      subjects: ['MATHEMATICS', 'BIOLOGY', 'COMPUTER_SCIENCE'],
      required: false
    }
  ],
  ARTS: [
    {
      name: 'Core Subjects (Required)',
      subjects: ['HISTORY', 'POLITICAL_SCIENCE'],
      required: true
    },
    {
      name: 'Optional Subjects (Select 2)',
      subjects: ['GEOGRAPHY', 'ECONOMICS', 'SOCIOLOGY', 'PSYCHOLOGY'],
      required: false
    }
  ],
  COMMERCE: [
    {
      name: 'Core Subjects (Required)',
      subjects: ['ACCOUNTANCY', 'BUSINESS_STUDIES'],
      required: true
    },
    {
      name: 'Optional Subjects (Select 1-2)',
      subjects: ['MATHEMATICS', 'ECONOMICS', 'INFORMATICS_PRACTICE'],
      required: false
    }
  ]
};

export function SubjectSelection({ stream, selectedSubjects, onChange, error }: SubjectSelectionProps) {
  if (!stream || !streamSubjects[stream]) return null;

  const handleSubjectChange = (subject: string) => {
    const newSelection = selectedSubjects.includes(subject)
      ? selectedSubjects.filter(s => s !== subject)
      : [...selectedSubjects, subject];
    onChange(newSelection);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-[#2A8C4A]">Subject Selection</h3>
      
      {streamSubjects[stream].map((group, index) => (
        <div key={index} className="space-y-3">
          <h4 className="font-medium text-gray-700">{group.name}</h4>
          <div className="space-y-2">
            {group.subjects.map(subject => (
              <label key={subject} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(subject)}
                  onChange={() => handleSubjectChange(subject)}
                  disabled={group.required}
                  className="rounded border-gray-300 text-[#2A8C4A] focus:ring-[#2A8C4A]"
                />
                <span className="text-gray-700">
                  {subject.replace(/_/g, ' ')}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}