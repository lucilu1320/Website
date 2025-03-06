import React from 'react';
import { Cpu, Palette, Code, Rocket } from 'lucide-react';

interface TransformSectionProps {
  onApplyNow: () => void;
}

const technologies = [
  { 
    name: 'Robotics', 
    icon: Cpu,
    description: 'Hands-on experience with modern robotics and automation'
  },
  { 
    name: 'Graphics', 
    icon: Palette,
    description: 'Creative design and digital art skills development'
  },
  { 
    name: 'Programming', 
    icon: Code,
    description: 'Learning essential coding and computational thinking'
  },
];

export function TransformSection({ onApplyNow }: TransformSectionProps) {
  return (
    <section id="transform" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-[#2A8C4A]" />
            <h2 className="text-3xl font-bold text-[#2A8C4A]">Transform</h2>
          </div>
          <h3 className="text-black font-bold text-xl">Design And Technology</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Video Player */}
          <div className="flex items-center justify-center">
            <div className="aspect-video w-full max-w-2xl rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-300">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/SUzkwMw_Muo?si=Q-41crIc9nfpJrHU&amp;start=40"
                title="Kharagpur Vision Academy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Technology Grid */}
          <div className="grid grid-cols-1 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group relative bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-center gap-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center">
                    <tech.icon className="w-8 h-8 text-[#2A8C4A] transform transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-xl text-gray-800 group-hover:text-[#2A8C4A] transition-colors mb-2">
                      {tech.name}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#90C95F]/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}