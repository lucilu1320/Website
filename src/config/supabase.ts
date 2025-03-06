import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

// Get environment variables with fallbacks for development
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(`
    Missing Supabase configuration. Please make sure you have the following environment variables set:
    - VITE_SUPABASE_URL
    - VITE_SUPABASE_ANON_KEY
    
    Using mock data for development...
  `);
}

// Create and export the typed Supabase client
export const supabase = createClient<Database>(
  supabaseUrl || 'http://localhost:54321',  // Fallback for development
  supabaseAnonKey || 'dummy-key', // Fallback for development
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    },
    db: {
      schema: 'public'
    },
    global: {
      headers: {
        'x-application-name': 'kva-school'
      }
    }
  }
);

// Export helper to check if Supabase is configured
export const isSupabaseConfigured = (): boolean => {
  return Boolean(supabaseUrl && supabaseAnonKey);
};

// Export reusable error handler
export const handleSupabaseError = (error: any): never => {
  console.error('Supabase error:', error);
  
  if (error?.message) {
    throw new Error(`Supabase error: ${error.message}`);
  }
  
  throw new Error('An unexpected error occurred with Supabase');
};

// Mock data for development when Supabase is not configured
export const mockData = {
  applications: [],
  files: []
};