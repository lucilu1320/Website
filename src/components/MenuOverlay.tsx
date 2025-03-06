import React, { useState } from 'react';
import { ChevronRight, ChevronDown, GraduationCap, BookOpen, Users, Rocket, Heart, Briefcase, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  onApplyNow: () => void;
}

const menuStructure = {
  'WHO WE ARE': {
    icon: Users,
    items: [
      { name: 'Overview', href: 'overview' },
      { name: 'Our Vision', href: 'vision' },
      { name: 'Leadership', href: null },
      { name: 'Principal', href: 'principal', indent: true },
      { name: 'Director', href: 'director', indent: true },
      { name: 'Chairperson', href: 'chairman', indent: true },
      { name: 'Secretary', href: 'secretary', indent: true }
    ]
  },
  'WHY KVA': {
    icon: Heart,
    items: [
      { name: 'Our Difference', href: 'difference' },
      { name: 'Infrastructure & Facilities', href: 'facilities' },
      { name: 'Achievements', href: 'achievements' }
    ]
  },
  'WHAT WE DO': {
    icon: Rocket,
    items: [
      { name: 'Inspire', href: 'inspire' },
      { name: 'Empower', href: 'empower' },
      { name: 'Transform', href: 'transform' },
      { name: 'Achieve', href: 'achieve' }
    ]
  },
  'ADMISSION': {
    icon: GraduationCap,
    items: [
      { name: 'Overview', href: 'admissions-overview' },
      { name: 'Fee & Age Criteria', href: 'fee' },
      { name: 'Guidelines', href: 'guidelines' },
      { name: 'Apply Now', href: 'apply', highlight: true }
    ]
  },
  'ACADEMICS': {
    icon: BookOpen,
    items: [
      { name: 'Curriculum', href: 'curriculum' },
      { name: 'Faculty', href: 'faculty' }
    ]
  },
  'CAREERS': {
    icon: Briefcase,
    items: [
      { name: 'Current Openings', href: 'openings' }
    ]
  }
};

export function MenuOverlay({ isOpen, onClose, onNavigate, onApplyNow }: MenuOverlayProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNavigate = (href: string | null) => {
    if (!href) return;

    if (href === 'apply') {
      navigate('/apply');
      window.scrollTo(0, 0);
      onClose();
    } else {
      navigate(`/${href}`);
      window.scrollTo(0, 0);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop with blur effect */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col">
        {/* Close Button Header - Fixed at top */}
        <div className="flex justify-end p-4 bg-white border-b border-gray-100">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content Area - Add padding bottom to account for fixed buttons */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-8 pb-36 space-y-8"> {/* Added pb-36 for padding bottom */}
            {Object.entries(menuStructure).map(([section, { icon: Icon, items }]) => (
              <div key={section} className="space-y-4">
                <button
                  onClick={() => setExpandedSection(expandedSection === section ? null : section)}
                  className="flex items-center justify-between w-full group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#2A8C4A]" />
                    </div>
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-[#2A8C4A] transition-colors">
                      {section}
                    </span>
                  </div>
                  {expandedSection === section ? (
                    <ChevronDown className="w-5 h-5 text-[#2A8C4A]" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-[#2A8C4A]" />
                  )}
                </button>
                
                {expandedSection === section && (
                  <div className="pl-12 space-y-4">
                    {items.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigate(item.href)}
                        className={`flex items-center gap-2 w-full text-left transition-colors group ${
                          item.highlight
                            ? 'text-[#2A8C4A] font-semibold hover:text-[#238040]'
                            : 'text-gray-600 hover:text-[#2A8C4A]'
                        } ${item.indent ? 'pl-4' : ''}`}
                      >
                        {item.href !== null && (
                          <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full transform transition-transform duration-300 group-hover:scale-150" />
                        )}
                        <span className={item.href === null ? 'font-semibold text-gray-800' : ''}>
                          {item.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Login Buttons - Fixed at bottom with white background */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100 space-y-3">
          <a
            href="https://visionacademy.webtechedusolutions.co.in/site/login"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#2A8C4A] text-white py-3 rounded-lg font-semibold hover:bg-[#238040] transition-colors flex items-center justify-center gap-2"
          >
            Teacher's ERP Login
          </a>
          <a
            href="https://visionacademy.webtechedusolutions.co.in/site/userlogin"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#90C95F] text-white py-3 rounded-lg font-semibold hover:bg-[#7CB342] transition-colors flex items-center justify-center gap-2"
          >
            Student's ERP Login
          </a>
        </div>
      </div>
    </div>
  );
}