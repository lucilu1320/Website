import axios from 'axios';
import { FilterOptions } from '../types';
import { sendConfirmationEmail, sendStatusUpdateEmail, EmailData } from './emailService';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface Application {
  id: string;
  studentName: string;
  class: string;
  submissionDate: string;
  status: string;
  email: string;
  guardianName?: string;
  fatherName?: string;
  photo?: string;
  [key: string]: any;
}

// Mock data for demonstration (remove in production)
let mockApplications: Application[] = [];

export const admissionService = {
  async submitForm(formData: any) {
    if (!formData) {
      throw new Error('Form data is required');
    }

    if (!formData.email) {
      throw new Error('Email is required for application submission');
    }

    try {
      // Generate an application ID
      const applicationId = 'KVA-' + Date.now().toString(36).toUpperCase();
      const submissionDate = new Date().toLocaleDateString();
      
      // Create application object
      const application = {
        id: applicationId,
        ...formData,
        status: 'PENDING',
        submissionDate: new Date().toISOString()
      };

      // Add to mock data (remove in production)
      mockApplications.push(application);

      try {
        // Send confirmation emails with PDF attachment
        const emailData: EmailData = {
          email: formData.email,
          parentName: formData.guardianName || formData.fatherName,
          studentName: formData.studentName,
          applicationId,
          class: formData.class,
          submissionDate,
          formData: formData,
          photoPreview: formData.photo
        };

        await sendConfirmationEmail(emailData);

        return {
          success: true,
          applicationId,
          message: 'Application submitted successfully',
          emailStatus: 'sent'
        };
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
        return {
          success: true,
          applicationId,
          message: 'Application submitted successfully, but email notification failed',
          emailStatus: 'failed'
        };
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      console.error('Error submitting application:', error);
      throw new Error(`Failed to submit application: ${errorMessage}`);
    }
  },

  async getApplications(filters: FilterOptions = {}) {
    try {
      let filteredApplications = [...mockApplications];

      if (filters.status && filters.status !== 'all') {
        filteredApplications = filteredApplications.filter(app => app.status === filters.status);
      }
      if (filters.class && filters.class !== 'all') {
        filteredApplications = filteredApplications.filter(app => app.class === filters.class);
      }
      if (filters.dateRange && filters.dateRange !== 'all') {
        const now = new Date();
        const startDate = new Date();
        
        switch (filters.dateRange) {
          case 'today':
            startDate.setHours(0, 0, 0, 0);
            break;
          case 'week':
            startDate.setDate(now.getDate() - 7);
            break;
          case 'month':
            startDate.setMonth(now.getMonth() - 1);
            break;
          case 'year':
            startDate.setFullYear(now.getFullYear() - 1);
            break;
        }

        filteredApplications = filteredApplications.filter(app => 
          new Date(app.submissionDate) >= startDate && new Date(app.submissionDate) <= now
        );
      }

      return filteredApplications;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      console.error('Error fetching applications:', error);
      throw new Error(`Failed to fetch applications: ${errorMessage}`);
    }
  },

  async getApplicationById(id: string) {
    if (!id) {
      throw new Error('Application ID is required');
    }

    try {
      const application = mockApplications.find(app => app.id === id);
      if (!application) {
        throw new Error('Application not found');
      }
      return application;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      console.error('Error fetching application:', error);
      throw new Error(`Failed to fetch application details: ${errorMessage}`);
    }
  },

  async updateApplicationStatus(id: string, status: string) {
    if (!id || !status) {
      throw new Error('Application ID and status are required');
    }

    try {
      const applicationIndex = mockApplications.findIndex(app => app.id === id);
      if (applicationIndex === -1) {
        throw new Error('Application not found');
      }

      mockApplications[applicationIndex] = {
        ...mockApplications[applicationIndex],
        status,
        updateDate: new Date().toISOString()
      };

      const application = mockApplications[applicationIndex];
      const currentDate = new Date().toLocaleDateString();

      try {
        // Send status update email
        const emailData: EmailData = {
          email: application.email,
          parentName: application.guardianName || application.fatherName,
          studentName: application.studentName,
          applicationId: application.id,
          class: application.class,
          submissionDate: new Date(application.submissionDate).toLocaleDateString(),
          status,
          updateDate: currentDate,
          approved: status === 'APPROVED',
          rejected: status === 'REJECTED',
          formalities_deadline: status === 'APPROVED'
            ? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
            : undefined
        };

        await sendStatusUpdateEmail(emailData);
      } catch (emailError) {
        console.error('Status update email failed:', emailError);
      }

      return application;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      console.error('Error updating application status:', error);
      throw new Error(`Failed to update application status: ${errorMessage}`);
    }
  }
};