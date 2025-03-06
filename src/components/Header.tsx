import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const navItems = ['Inspire', 'Empower', 'Transform', 'Achieve'];

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  onNavigateHome: () => void;
  onApplyNow: () => void;
  onNavigate: (page: string) => void;
}

export function Header({ isMenuOpen, setIsMenuOpen, onNavigateHome, onApplyNow, onNavigate }: HeaderProps) {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // First navigate to home if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId.toLowerCase());
        if (section) {
          const headerOffset = 72;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // If already on home page, just scroll
      const section = document.getElementById(sectionId.toLowerCase());
      if (section) {
        const headerOffset = 72;
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo and School Info */}
            <div className="flex items-center gap-4">
              <Link 
                to="/"
                className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] flex-shrink-0 transform hover:scale-105 transition-all duration-300"
                aria-label="Go to home page"
              >
                <img 
                  src="https://lh3.googleusercontent.com/pw/AP1GczNa8FOqklGd7fG0jwp-Ett4tnmO3FyimEfT7pg_00-7JGo_oCcsr0dK2z4ooZ6T1hd8geZ-zCm2iEMb-QlWk_0JtagmtlfG6xUncdVKCfY_JnsIAJY=w2400" 
                  alt="Kharagpur Vision Academy" 
                  className="w-full h-full object-contain"
                />
              </Link>
              <div className="hidden sm:block">
                <Link 
                  to="/"
                  className="text-left hover:opacity-80 transition-all duration-300 cursor-pointer"
                >
                  <h1 className="text-[#2A8C4A] font-bold text-lg sm:text-xl md:text-2xl">
                    Kharagpur Vision Academy
                  </h1>
                  <span className="text-gray-700 text-sm sm:text-base block mt-1">
                    <b>An English Medium Co-Educational Sr. Secondary School</b>
                  </span>
                  <p className="text-gray-600 text-xs md:text-sm mt-1 max-w-[400px] leading-tight hidden md:block">
                    <b>Affiliated to Central Board of Secondary Education(CBSE) <br />
                    New Delhi. Affiliation No.2430236, School Code -15653</b>
                  </p>
                </Link>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden md:flex flex-col gap-2">
                <Link 
                  to="/apply"
                  className="bg-[#2A8C4A] text-white px-6 py-2.5 rounded-full hover:bg-[#238040] transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Apply Now
                </Link>
                <Link 
                  to="/mandatory-disclosure"
                  className="bg-[#2A8C4A] text-white px-6 py-2.5 rounded-full border-2 border-[#FFD700] hover:bg-[#238040] transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.3)] font-medium text-center"
                >
                  Mandatory Disclosure
                </Link>
              </div>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-[#90C95F]/10 rounded-full transition-all duration-300"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-[#2A8C4A]" />
                ) : (
                  <Menu className="w-6 h-6 text-[#2A8C4A]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-gradient-to-r from-[#2A8C4A] to-[#90C95F] text-white shadow-md hidden md:block">
        <div className="container mx-auto">
          <ul className="flex justify-center items-center gap-4 sm:gap-8 py-3 px-4 overflow-x-auto hide-scrollbar">
            {navItems.map((item) => (
              <li key={item} className="relative group whitespace-nowrap">
                <button 
                  onClick={() => scrollToSection(item)}
                  className="flex items-center gap-1 py-1 hover:text-white/90 transition-all duration-300 text-sm sm:text-base"
                >
                  {item}
                  <ChevronDown className="w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity transform group-hover:-translate-y-0.5 duration-300" />
                </button>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300" />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}