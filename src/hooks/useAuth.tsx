import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  role: 'ADMIN' | 'USER';
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'administration@kvaschool.edu.in';
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

const determineRole = (email: string): 'ADMIN' | 'USER' => {
  return email === ADMIN_EMAIL ? 'ADMIN' : 'USER';
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        const user: User = {
          email: session.user.email!,
          role: determineRole(session.user.email!)
        };
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('lastActivity', Date.now().toString());
      } else {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('lastActivity');
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const user: User = {
          email: session.user.email!,
          role: determineRole(session.user.email!)
        };
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('lastActivity', Date.now().toString());
      }
    } catch (error) {
      console.error('Error checking user:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const updateLastActivity = () => {
      if (user) {
        localStorage.setItem('lastActivity', Date.now().toString());
      }
    };

    const checkSession = () => {
      const lastActivity = localStorage.getItem('lastActivity');
      if (user && lastActivity) {
        const timeSinceLastActivity = Date.now() - parseInt(lastActivity, 10);
        if (timeSinceLastActivity >= SESSION_TIMEOUT) {
          logout();
        }
      }
    };

    window.addEventListener('mousemove', updateLastActivity);
    window.addEventListener('keydown', updateLastActivity);
    window.addEventListener('click', updateLastActivity);
    window.addEventListener('scroll', updateLastActivity);

    const sessionCheckInterval = setInterval(checkSession, 60000);

    return () => {
      window.removeEventListener('mousemove', updateLastActivity);
      window.removeEventListener('keydown', updateLastActivity);
      window.removeEventListener('click', updateLastActivity);
      window.removeEventListener('scroll', updateLastActivity);
      clearInterval(sessionCheckInterval);
    };
  }, [user]);

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      if (data.user) {
        const user: User = {
          email: data.user.email!,
          role: determineRole(data.user.email!)
        };
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('lastActivity', Date.now().toString());
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      localStorage.removeItem('user');
      localStorage.removeItem('lastActivity');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'ADMIN',
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}