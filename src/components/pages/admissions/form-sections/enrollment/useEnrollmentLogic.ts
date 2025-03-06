import { useMemo } from 'react';
import { EnrollmentFormData, StreamSubjects } from './types';

const STREAM_SUBJECTS: StreamSubjects = {
  SCIENCE: {
    required: ['PHYSICS', 'CHEMISTRY'],
    optional: ['MATHEMATICS', 'BIOLOGY', 'COMPUTER_SCIENCE'],
    minOptional: 2,
    maxOptional: 2
  },
  ARTS: {
    required: ['HISTORY', 'POLITICAL_SCIENCE'],
    optional: ['GEOGRAPHY', 'ECONOMICS', 'SOCIOLOGY', 'PSYCHOLOGY'],
    minOptional: 2,
    maxOptional: 2
  },
  COMMERCE: {
    required: ['ACCOUNTANCY', 'BUSINESS_STUDIES'],
    optional: ['MATHEMATICS', 'ECONOMICS', 'INFORMATICS_PRACTICE'],
    minOptional: 1,
    maxOptional: 2
  }
};

export function useEnrollmentLogic(formData: EnrollmentFormData) {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  
  const currentSession = `${currentYear}-${nextYear}`;
  const sessionOptions = [
    { value: currentSession, label: currentSession }
  ];

  const classOptions = [
    { value: 'NURSERY', label: 'NURSERY' },
    { value: 'LKG', label: 'LKG' },
    { value: 'UKG', label: 'UKG' },
    { value: 'CLASS_I', label: 'CLASS I' },
    { value: 'CLASS_II', label: 'CLASS II' },
    { value: 'CLASS_III', label: 'CLASS III' },
    { value: 'CLASS_IV', label: 'CLASS IV' },
    { value: 'CLASS_V', label: 'CLASS V' },
    { value: 'CLASS_VI', label: 'CLASS VI' },
    { value: 'CLASS_VII', label: 'CLASS VII' },
    { value: 'CLASS_VIII', label: 'CLASS VIII' },
    { value: 'CLASS_IX', label: 'CLASS IX' },
    { value: 'CLASS_X', label: 'CLASS X' },
    { value: 'CLASS_XI-SCIENCE', label: 'CLASS XI - SCIENCE' },
    { value: 'CLASS_XI-ARTS', label: 'CLASS XI - ARTS' },
    { value: 'CLASS_XI-COMMERCE', label: 'CLASS XI - COMMERCE' },
    { value: 'CLASS_XII-SCIENCE', label: 'CLASS XII - SCIENCE' },
    { value: 'CLASS_XII-ARTS', label: 'CLASS XII - ARTS' },
    { value: 'CLASS_XII-COMMERCE', label: 'CLASS XII - COMMERCE' }
  ];

  const sectionOptions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' }
  ];

  const houseOptions = [
    { value: 'RED_HOUSE', label: 'RED HOUSE' },
    { value: 'GREEN_HOUSE', label: 'GREEN HOUSE' },
    { value: 'BLUE_HOUSE', label: 'BLUE HOUSE' },
    { value: 'YELLOW_HOUSE', label: 'YELLOW HOUSE' }
  ];

  const showLanguageOptions = useMemo(() => {
    const classValue = formData.class;
    return !classValue?.includes('XI') && !classValue?.includes('XII');
  }, [formData.class]);

  const showStreamSubjects = useMemo(() => {
    return formData.class?.includes('XI');
  }, [formData.class]);

  const getStreamFromClass = (classValue: string): string | null => {
    if (!classValue?.includes('XI')) return null;
    return classValue.split('-')[1];
  };

  const validateSubjectSelection = (subjects?: string[]): string | null => {
    if (!showStreamSubjects || !subjects) return null;

    const stream = getStreamFromClass(formData.class);
    if (!stream || !STREAM_SUBJECTS[stream]) return null;

    const { required, optional, minOptional, maxOptional } = STREAM_SUBJECTS[stream];
    
    // Check required subjects
    const hasAllRequired = required.every(sub => subjects.includes(sub));
    if (!hasAllRequired) {
      return `All required subjects must be selected`;
    }

    // Count optional subjects
    const optionalSelected = subjects.filter(sub => optional.includes(sub)).length;
    if (optionalSelected < minOptional) {
      return `Please select at least ${minOptional} optional subjects`;
    }
    if (optionalSelected > maxOptional) {
      return `You can select maximum ${maxOptional} optional subjects`;
    }

    return null;
  };

  return {
    showLanguageOptions,
    showStreamSubjects,
    currentSession,
    sessionOptions,
    classOptions,
    sectionOptions,
    houseOptions,
    getStreamFromClass,
    validateSubjectSelection,
  };
}