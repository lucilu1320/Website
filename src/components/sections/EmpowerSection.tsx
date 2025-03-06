import React from 'react';
import { Users, Calendar, Music, Trophy, Heart } from 'lucide-react';

interface EmpowerSectionProps {
  onApplyNow: () => void;
}

const experiences = [
  {
    title: 'The Engaging Programme',
    icon: Users,
    image: 'empower-section/engage.jpg',
  },
  {
    title: 'Sports Day',
    icon: Trophy,
    image: 'empower-section/sports.jpg',
  },
  {
    title: 'Annual Function',
    icon: Calendar,
    image: 'empower-section/annual_emp.jpg',
  },
  {
    title: 'Competition',
    icon: Music,
    image: 'empower-section/compete.jpg',
  },
];

export function EmpowerSection({ onApplyNow }: EmpowerSectionProps) {
  return (
    <section id="empower" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-8 h-8 text-[#2A8C4A]" />
          <h2 className="text-3xl font-bold text-[#2A8C4A]">Empower</h2>
        </div>
        <h3 className="text-black font-bold text-xl mb-12">Programs And Experiences</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item) => (
            <div 
              key={item.title}
              className="group relative h-80 rounded-lg overflow-hidden border border-[#2A8C4A] shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A8C4A]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <item.icon className="w-12 h-12 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                <h4 className="text-xl font-semibold text-center transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-8 bg-[#2196F3] text-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
          <p className="text-center text-lg font-medium">
            "Empowering students to become confident, capable, and compassionate leaders of tomorrow."
          </p>
        </div>
      </div>
    </section>
  );
}