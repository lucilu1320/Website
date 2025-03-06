import axios from 'axios';
import { API_BASE_URL } from '../config/constants';

export const careerService = {
  async submitApplication(formData: FormData) {
    try {
      const response = await axios.post(`${API_BASE_URL}/careers/apply`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error submitting career application:', error);
      throw new Error('Failed to submit application');
    }
  },

  async getApplications(filters = {}) {
    try {
      const response = await axios.get(`${API_BASE_URL}/careers/applications`, { params: filters });
      return response.data;
    } catch (error) {
      console.error('Error fetching career applications:', error);
      throw new Error('Failed to fetch applications');
    }
  },

  async updateApplicationStatus(id: string, status: string) {
    try {
      const response = await axios.patch(`${API_BASE_URL}/careers/applications/${id}`, { status });
      return response.data;
    } catch (error) {
      console.error('Error updating application status:', error);
      throw new Error('Failed to update application status');
    }
  }
};