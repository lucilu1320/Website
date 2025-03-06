import { supabase } from '../config/supabase';

export const authService = {
  async login(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw new Error('Invalid credentials');
    }
  },

  async logout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

  async isAuthenticated() {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      return !!session;
    } catch (error) {
      console.error('Auth check error:', error);
      return false;
    }
  },

  async isAdmin() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      return user?.email === import.meta.env.VITE_ADMIN_EMAIL;
    } catch (error) {
      console.error('Admin check error:', error);
      return false;
    }
  }
};