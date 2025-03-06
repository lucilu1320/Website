import React, { useState } from 'react';
import { Send, ArrowLeft, Upload, X } from 'lucide-react';
import { FormField } from '../admissions/form-components/FormField';

interface CareerApplicationFormProps {
  position?: string;
  onClose: () => void;
}

export function CareerApplicationForm({ position, onClose }: CareerApplicationFormProps) {
  const [formData, setFormData] = useState({
    position: position || '',
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
    currentEmployer: '',
    noticePeriod: '',
    resumeFile: null as File | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        setError('Resume file size must be less than 2MB');
        return;
      }
      setFormData(prev => ({ ...prev, resumeFile: file }));
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formDataToSend.append(key, value);
      });

      // Here we would make the API call to submit the application
      // For now, simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess(true);
      setTimeout(onClose, 2000);
    } catch (err) {
      setError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              {position ? `Apply for ${position}` : 'Career Application'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {position && (
            <FormField
              label="Position"
              name="position"
              type="text"
              value={position}
              onChange={() => {}}
              disabled
            />
          )}

          <FormField
            label="Full Name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <FormField
            label="Email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />

          <FormField
            label="Phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="\d{10}"
          />

          <FormField
            label="Highest Qualification"
            name="qualification"
            type="text"
            value={formData.qualification}
            onChange={handleChange}
            required
          />

          <FormField
            label="Total Experience (in years)"
            name="experience"
            type="text"
            value={formData.experience}
            onChange={handleChange}
            required
          />

          <FormField
            label="Current Employer"
            name="currentEmployer"
            type="text"
            value={formData.currentEmployer}
            onChange={handleChange}
          />

          <FormField
            label="Notice Period (in days)"
            name="noticePeriod"
            type="text"
            value={formData.noticePeriod}
            onChange={handleChange}
          />

          {/* Resume Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Resume (PDF, max 2MB)*
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-[#2A8C4A] hover:text-[#238040] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#2A8C4A]">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="sr-only"
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF up to 2MB
                </p>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
              Application submitted successfully!
            </div>
          )}

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2 bg-[#2A8C4A] text-white rounded-lg hover:bg-[#238040] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Application
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}