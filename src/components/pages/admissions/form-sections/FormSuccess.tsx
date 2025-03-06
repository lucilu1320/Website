import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface FormSuccessProps {
  applicationId?: string;
  onReset: () => void;
}

export function FormSuccess({ applicationId, onReset }: FormSuccessProps) {
  return (
    <div className="bg-green-50 rounded-lg p-8 text-center">
      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Application Submitted Successfully!
      </h2>
      <p className="text-gray-600 mb-6">
        Thank you for submitting your application. We will review it and get back to you soon.
        {applicationId && (
          <>
            <br /><br />
            Your application reference number is: <strong>{applicationId}</strong>
            <br />
            Please save this number for future reference.
          </>
        )}
      </p>
      <div className="space-y-4">
        <p className="text-gray-600">
          You will receive a confirmation email shortly with further instructions.
        </p>
        <button
          onClick={onReset}
          className="bg-[#2A8C4A] text-white px-6 py-2 rounded-lg hover:bg-[#238040] transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    </div>
  );
}