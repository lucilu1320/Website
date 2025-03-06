// src/types/components.ts
import { ReactNode } from 'react';

export interface AuthService {
  login(email: string, password: string): Promise<any>;
  getCurrentSession(): Promise<any>;
  logout(): void;
  isAuthenticated(): Promise<boolean>;
}

// Base props interface
export interface BaseSectionProps {
  onApplyNow: () => void;
  onNavigate?: (page: string) => void;
}

// Section-specific props
export interface InspireSectionProps extends BaseSectionProps {
  onNavigate: (page: string) => void; // Making onNavigate required for this specific component
}

export interface EmpowerSectionProps extends BaseSectionProps {}

export interface TransformSectionProps extends BaseSectionProps {}

export interface AchieveSectionProps extends BaseSectionProps {}

// Core component props
export interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  onNavigateHome: () => void;
  onApplyNow: () => void;
  onNavigate: (page: string) => void;
}

export interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  onApplyNow: () => void;
}

export interface FooterProps {
  onNavigate: (page: string) => void;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

// Page props
export interface InspireProps extends BaseSectionProps {
  onNavigate: (page: string) => void; // Making onNavigate required for this specific component
}

export interface EmpowerProps extends BaseSectionProps {}

export interface TransformProps extends BaseSectionProps {}

export interface AchieveProps extends BaseSectionProps {}

export interface FacultyProps {
  onNavigate: (page: string) => void;
}

// Utility props
export interface LoadingSpinnerProps {}

export interface ScrollProgressProps {}

export interface BackToTopProps {}

export interface HeroSlideshowProps {}

export interface NewsEventsProps {}

export interface SchoolsProps {}

export interface WithChildrenProps {
  children: ReactNode;
}

// Empty props for simple components
export interface EmptyProps {}

// Props for all other page components that don't need specific props
export interface BasicPageProps {}