import React from 'react';
import { Brain, Target, Compass, Trophy } from 'lucide-react';

const achievements = [
  {
    title: 'UNDERSTANDING OF THE SELF',
    icon: Brain,
    description: 'Develop self-awareness and emotional intelligence through guided introspection and mentoring.',
    image: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?auto=format&fit=crop&q=80&w=1920',
  },
  {
    title: 'EMPOWERMENT THROUGH EXPERIENCE',
    icon: Target,
    description: 'Gain practical knowledge and skills through hands-on learning experiences and real-world applications.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920',
  },
  {
    title: 'ENABLING INFORMED CHOICES',
    icon: Compass,
    description: 'Make confident decisions about your future through comprehensive career guidance and counseling.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920',
  },
];

export function AchieveSection() {
  return (
    <section id="achieve" className="py-20">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Trophy className="w-8 h-8 text-[#2A8C4A]" />
          <h2 className="text-3xl font-bold text-[#2A8C4A]">Achieve</h2>
        </div>
        <h3 className="text-black font-bold text-xl mb-12">Student Guidance And Careers</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="relative group rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A8C4A]/90 to-[#90C95F]/30 opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <item.icon className="w-8 h-8 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                <h4 className="text-lg font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {item.title}
                </h4>
                <p className="text-sm opacity-90 transform transition-all duration-300 group-hover:opacity-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}