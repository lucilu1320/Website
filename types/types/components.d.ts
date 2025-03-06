import { ReactNode } from 'react';
export interface AuthService {
    login(email: string, password: string): Promise<any>;
    getCurrentSession(): Promise<any>;
    logout(): void;
    isAuthenticated(): Promise<boolean>;
}
export interface BaseSectionProps {
    onApplyNow: () => void;
    onNavigate?: (page: string) => void;
}
export interface InspireSectionProps extends BaseSectionProps {
    onNavigate: (page: string) => void;
}
export interface EmpowerSectionProps extends BaseSectionProps {
}
export interface TransformSectionProps extends BaseSectionProps {
}
export interface AchieveSectionProps extends BaseSectionProps {
}
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
export interface InspireProps extends BaseSectionProps {
    onNavigate: (page: string) => void;
}
export interface EmpowerProps extends BaseSectionProps {
}
export interface TransformProps extends BaseSectionProps {
}
export interface AchieveProps extends BaseSectionProps {
}
export interface FacultyProps {
    onNavigate: (page: string) => void;
}
export interface LoadingSpinnerProps {
}
export interface ScrollProgressProps {
}
export interface BackToTopProps {
}
export interface HeroSlideshowProps {
}
export interface NewsEventsProps {
}
export interface SchoolsProps {
}
export interface WithChildrenProps {
    children: ReactNode;
}
export interface EmptyProps {
}
export interface BasicPageProps {
}
