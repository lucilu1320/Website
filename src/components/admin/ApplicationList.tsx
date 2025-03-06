import React from 'react';
import { Eye, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface ApplicationListProps {
  applications: any[];
  onViewDetails: (application: any) => void;
  onStatusChange: (id: string, status: string) => void;
  loading: boolean;
}

export function ApplicationList({
  applications,
  onViewDetails,
  onStatusChange,
  loading
}: ApplicationListProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#2A8C4A] border-t-transparent"></div>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4">
        <AlertCircle className="w-12 h-12 text-gray-400 mb-4" />
        <p className="text-gray-600 text-lg">No applications found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">ID</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Student Name</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Class</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Date</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {applications.map((app) => (
            <tr key={app.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">{app.id}</td>
              <td className="px-6 py-4 text-sm text-gray-900 font-medium">{app.studentName}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{app.class}</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {new Date(app.submissionDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  app.status === 'APPROVED' ? 'bg-green-100 text-green-800' :
                  app.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {app.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onViewDetails(app)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    title="View Details"
                  >
                    <Eye className="w-5 h-5 text-gray-500" />
                  </button>
                  {app.status === 'PENDING' && (
                    <>
                      <button
                        onClick={() => onStatusChange(app.id, 'APPROVED')}
                        className="p-1 hover:bg-green-100 rounded-full transition-colors"
                        title="Approve Application"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </button>
                      <button
                        onClick={() => onStatusChange(app.id, 'REJECTED')}
                        className="p-1 hover:bg-red-100 rounded-full transition-colors"
                        title="Reject Application"
                      >
                        <XCircle className="w-5 h-5 text-red-500" />
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}