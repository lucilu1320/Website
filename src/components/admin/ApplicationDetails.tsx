import React from 'react';
import { X, Mail, Download, CheckCircle, XCircle, User, Calendar } from 'lucide-react';

interface ApplicationDetailsProps {
  application: any;
  onClose: () => void;
  onStatusChange: (id: string, status: string) => void;
}

export function ApplicationDetails({
  application,
  onClose,
  onStatusChange
}: ApplicationDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Application Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Student Information */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-[#2A8C4A]" />
                <h3 className="text-lg font-semibold text-gray-800">Student Information</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="font-medium text-gray-900">{application.studentName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date of Birth</p>
                  <p className="font-medium text-gray-900">{application.dob}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Class Applied For</p>
                  <p className="font-medium text-gray-900">{application.class}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Application ID</p>
                  <p className="font-medium text-gray-900">{application.id}</p>
                </div>
              </div>
            </div>

            {/* Parent Information */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-[#2A8C4A]" />
                <h3 className="text-lg font-semibold text-gray-800">Parent Information</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Father's Name</p>
                  <p className="font-medium text-gray-900">{application.fatherName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mother's Name</p>
                  <p className="font-medium text-gray-900">{application.motherName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Contact Number</p>
                  <p className="font-medium text-gray-900">{application.mobileNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{application.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application Timeline */}
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-[#2A8C4A]" />
              <h3 className="text-lg font-semibold text-gray-800">Application Timeline</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#2A8C4A] rounded-full"></div>
                <div>
                  <p className="text-sm text-gray-500">Submitted on</p>
                  <p className="font-medium text-gray-900">
                    {new Date(application.submissionDate).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between p-6 border-t bg-gray-50">
          <div className="flex items-center gap-4">
            <button
              onClick={() => onStatusChange(application.id, 'APPROVED')}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <CheckCircle className="w-4 h-4" />
              Approve
            </button>
            <button
              onClick={() => onStatusChange(application.id, 'REJECTED')}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <XCircle className="w-4 h-4" />
              Reject
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
              <Mail className="w-4 h-4" />
              Send Email
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}