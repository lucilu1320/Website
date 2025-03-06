import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface InspireSectionProps {
  onApplyNow: () => void;
}

const programs = [
  { name: 'Pre-Primary', section: 'pre-primary' },
  { name: 'Primary', section: 'primary' },
  { name: 'Middle', section: 'middle' },
  { name: 'Secondary', section: 'secondary' },
  { name: 'Senior Secondary', section: 'senior-secondary' }
];

export function InspireSection({ onApplyNow }: InspireSectionProps) {
  const navigate = useNavigate();

  const handleNavigate = (section: string) => {
    if (!section) return;
    navigate(`/inspire#${section}`);
    // Let the Inspire component handle the scrolling
  };

  const handleLearnMore = () => {
    navigate('/inspire');
    window.scrollTo(0, 0);
  };

  return (
    <section id="inspire" className="relative py-20 overflow-hidden mt-[72px]">
      <div className="absolute inset-0">
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-5">
          <path d="M30 30c0-16.57 13.43-30 30-30v30h-30z" fill="#90C95F" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-[#2A8C4A]" />
            <h2 className="text-3xl font-bold text-[#2A8C4A]">Inspire</h2>
          </div>
          
          <h3 className="text-black font-bold text-xl mb-8">Approach And Curriculum</h3>
          
          <p className="text-gray-700 mb-12 leading-relaxed max-w-2xl">
            At Kharagpur Vision Academy, we believe in nurturing young minds through a holistic approach to education. Our curriculum is designed to inspire curiosity, foster creativity, and build a strong foundation for life-long learning.
          </p>
          
          {/* First Row - Pre-Primary and Primary */}
          <div className="grid grid-cols-2 gap-4 mb-4 w-full max-w-2xl">
            {programs.slice(0, 2).map((program) => (
              <button
                key={program.name}
                onClick={() => handleNavigate(program.section)}
                className="bg-[#8BC34A] text-white py-4 px-6 rounded-lg hover:bg-[#7CB342] transition-all transform hover:scale-105 duration-200 text-center shadow-md hover:shadow-lg"
              >
                {program.name}
              </button>
            ))}
          </div>
          
          {/* Second Row - Middle and Secondary */}
          <div className="grid grid-cols-2 gap-4 mb-4 w-full max-w-2xl">
            {programs.slice(2, 4).map((program) => (
              <button
                key={program.name}
                onClick={() => handleNavigate(program.section)}
                className="bg-[#8BC34A] text-white py-4 px-6 rounded-lg hover:bg-[#7CB342] transition-all transform hover:scale-105 duration-200 text-center shadow-md hover:shadow-lg"
              >
                {program.name}
              </button>
            ))}
          </div>
          
          {/* Third Row - Senior Secondary */}
          <div className="w-full max-w-2xl">
            <button
              onClick={() => handleNavigate(programs[4].section)}
              className="w-full bg-[#8BC34A] text-white py-4 px-6 rounded-lg hover:bg-[#7CB342] transition-all transform hover:scale-105 duration-200 font-semibold shadow-md hover:shadow-lg"
            >
              {programs[4].name}
            </button>
          </div>
          
          {/* Learn More button */}
          <button 
            onClick={handleLearnMore}
            className="inline-flex items-center gap-2 mt-12 border-2 border-[#2A8C4A] text-[#2A8C4A] px-8 py-3 rounded-lg hover:bg-[#2A8C4A] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}