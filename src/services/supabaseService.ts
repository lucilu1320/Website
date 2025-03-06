import { supabase, handleSupabaseError } from '../config/supabase';
import { FilterOptions, Application, FileUpload, EmailData } from '../types';
import { PostgrestError } from '@supabase/supabase-js';
import { sendConfirmationEmail, sendStatusUpdateEmail } from './emailService';

export const supabaseService = {
  async submitApplication(applicationData: Omit<Application, 'id' | 'status' | 'submission_date' | 'last_updated'>): Promise<Application> {
    try {
      // First insert the application
      const { data, error } = await supabase
        .from('applications')
        .insert([{
          ...applicationData,
          status: 'PENDING',
          submission_date: new Date().toISOString(),
          last_updated: new Date().toISOString()
        }])
        .select()
        .single();

      if (error) return handleSupabaseError(error);
      if (!data) throw new Error('No data returned from application submission');

      // After successful insertion, send confirmation email
      try {
        await sendConfirmationEmail({
          email: data.email,
          parentName: data.guardian_name || data.father_name,
          studentName: data.student_name,
          applicationId: data.id,
          class: data.class,
          submissionDate: new Date(data.submission_date).toLocaleDateString(),
          formData: data
        });
      } catch (emailError) {
        console.error('Failed to send confirmation email:', emailError);
      }

      return data;
    } catch (error) {
      if (error instanceof PostgrestError) {
        handleSupabaseError(error);
      }
      throw new Error('Failed to submit application: ' + (error as Error).message);
    }
  },

  async uploadFile(file: File, path: string): Promise<string> {
    try {
      // Validate file
      if (!file) {
        throw new Error('No file provided');
      }

      // Validate file size (max 20KB for student photos)
      const maxSize = 20 * 1024; // 20KB
      if (file.size > maxSize) {
        throw new Error('File size exceeds 20KB limit');
      }

      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        throw new Error('Invalid file type. Only JPG, JPEG, and PNG files are allowed');
      }

      // Create a unique file name to prevent collisions
      const fileExt = file.name.split('.').pop();
      const uniquePath = `${path}-${Date.now()}.${fileExt}`;

      // Upload file
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('student-photos')
        .upload(uniquePath, file, {
          cacheControl: '3600',
          contentType: file.type,
          upsert: true // Allow overwriting if file exists
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw new Error(uploadError.message);
      }

      if (!uploadData?.path) {
        throw new Error('No upload data returned');
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('student-photos')
        .getPublicUrl(uploadData.path);

      if (!urlData?.publicUrl) {
        throw new Error('Failed to get public URL');
      }

      // Save file metadata
      const fileData: Omit<FileUpload, 'id'> = {
        application_id: null, // Will be updated when application is created
        file_name: file.name,
        file_type: file.type,
        file_size: file.size,
        file_url: urlData.publicUrl,
        uploaded_at: new Date().toISOString()
      };

      const { error: metadataError } = await supabase
        .from('files')
        .insert([fileData]);

      if (metadataError) {
        console.error('Metadata error:', metadataError);
        // Don't throw here, as we still have the file URL
      }

      return urlData.publicUrl;
    } catch (error) {
      console.error('File upload error:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to upload file');
    }
  },

  // Rest of the service methods remain unchanged...
  async getApplications(filters: FilterOptions = {}): Promise<Application[]> {
    try {
      let query = supabase
        .from('applications')
        .select('*')
        .order('submission_date', { ascending: false });

      if (filters.status && filters.status !== 'all') {
        query = query.eq('status', filters.status);
      }

      if (filters.class && filters.class !== 'all') {
        query = query.eq('class', filters.class);
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

        query = query
          .gte('submission_date', startDate.toISOString())
          .lte('submission_date', now.toISOString());
      }

      const { data, error } = await query;

      if (error) return handleSupabaseError(error);
      if (!data) return [];

      return data;
    } catch (error) {
      if (error instanceof PostgrestError) {
        handleSupabaseError(error);
      }
      throw new Error('Failed to fetch applications: ' + (error as Error).message);
    }
  },

  async getApplicationById(id: string): Promise<Application> {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select(`
          *,
          files (*)
        `)
        .eq('id', id)
        .single();

      if (error) return handleSupabaseError(error);
      if (!data) throw new Error('Application not found');

      return data;
    } catch (error) {
      if (error instanceof PostgrestError) {
        handleSupabaseError(error);
      }
      throw new Error('Failed to fetch application details: ' + (error as Error).message);
    }
  },

  async updateApplicationStatus(id: string, status: 'PENDING' | 'APPROVED' | 'REJECTED'): Promise<Application> {
    try {
      const updateDate = new Date().toISOString();
      
      const { data, error } = await supabase
        .from('applications')
        .update({ 
          status,
          last_updated: updateDate
        })
        .eq('id', id)
        .select()
        .single();

      if (error) return handleSupabaseError(error);
      if (!data) throw new Error('Application not found');

      try {
        const emailData: EmailData = {
          email: data.email,
          parentName: data.guardian_name || data.father_name,
          studentName: data.student_name,
          applicationId: data.id,
          class: data.class,
          status,
          submissionDate: new Date(data.submission_date).toLocaleDateString(),
          updateDate: new Date(updateDate).toLocaleDateString(),
          approved: status === 'APPROVED',
          rejected: status === 'REJECTED',
          formalities_deadline: status === 'APPROVED'
            ? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
            : undefined
        };

        await sendStatusUpdateEmail(emailData);
      } catch (emailError) {
        console.error('Failed to send status update email:', emailError);
      }

      return data;
    } catch (error) {
      if (error instanceof PostgrestError) {
        handleSupabaseError(error);
      }
      throw new Error('Failed to update application status: ' + (error as Error).message);
    }
  },

  async deleteApplication(id: string): Promise<boolean> {
    try {
      const { error: filesError } = await supabase
        .from('files')
        .delete()
        .eq('application_id', id);

      if (filesError) return handleSupabaseError(filesError);

      const { error } = await supabase
        .from('applications')
        .delete()
        .eq('id', id);

      if (error) return handleSupabaseError(error);

      return true;
    } catch (error) {
      if (error instanceof PostgrestError) {
        handleSupabaseError(error);
      }
      throw new Error('Failed to delete application: ' + (error as Error).message);
    }
  },

  async getApplicationStats(): Promise<{
    total: number;
    pending: number;
    approved: number;
    rejected: number;
  }> {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('status')
        .order('status');

      if (error) return handleSupabaseError(error);
      if (!data) return { total: 0, pending: 0, approved: 0, rejected: 0 };

      return {
        total: data.length,
        pending: data.filter(app => app.status === 'PENDING').length,
        approved: data.filter(app => app.status === 'APPROVED').length,
        rejected: data.filter(app => app.status === 'REJECTED').length
      };
    } catch (error) {
      if (error instanceof PostgrestError) {
        handleSupabaseError(error);
      }
      throw new Error('Failed to fetch application stats: ' + (error as Error).message);
    }
  }
};
