import React from 'react';
import { Lightbulb, Target, Compass, Award, Sparkles, Users, Rocket, Trophy } from 'lucide-react';

const visionPoints = [
  {
    icon: Lightbulb,
    title: 'Academic Excellence',
    description: 'Fostering a culture of academic rigor and intellectual curiosity that prepares students for lifelong learning and achievement.'
  },
  {
    icon: Target,
    title: 'Character Development',
    description: 'Building strong moral foundations and ethical values that shape responsible, compassionate, and principled individuals.'
  },
  {
    icon: Compass,
    title: 'Global Perspective',
    description: 'Developing culturally aware citizens who can navigate and contribute positively to an interconnected world.'
  },
  {
    icon: Award,
    title: 'Innovation & Creativity',
    description: 'Encouraging innovative thinking and creative expression that prepares students for future challenges and opportunities.'
  }
];

const pillars = [
  {
    title: 'Inspire',
    description: 'Igniting curiosity and passion for learning through innovative education',
    icon: Sparkles,
    color: 'bg-[#2196F3]'
  },
  {
    title: 'Empower',
    description: 'Equipping students with knowledge, skills, and confidence',
    icon: Users,
    color: 'bg-[#4CAF50]'
  },
  {
    title: 'Transform',
    description: 'Fostering growth and positive change through education',
    icon: Rocket,
    color: 'bg-[#9C27B0]'
  },
  {
    title: 'Achieve',
    description: 'Supporting students in reaching their highest potential',
    icon: Trophy,
    color: 'bg-[#FF9800]'
  }
];

export function Vision() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Vision"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h1>
              <p className="text-xl md:text-2xl opacity-90">
                Shaping Tomorrow's Leaders Today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-8">Vision Statement</h2>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed">
              "To be a premier educational institution that nurtures excellence, fosters innovation, and shapes compassionate, capable leaders who will make positive contributions to society and the world."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Vision Points */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visionPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-[#2A8C4A]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{point.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#2A8C4A] text-center mb-12">Our Core Pillars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="relative group bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className={`absolute top-0 left-0 w-2 h-full ${pillar.color} rounded-l-lg`} />
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${pillar.color} bg-opacity-10 rounded-full flex items-center justify-center mb-4`}>
                    <pillar.icon className={`w-8 h-8 ${pillar.color} text-opacity-90`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-[#2A8C4A]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-8">Looking to the Future</h2>
            <p className="text-lg leading-relaxed mb-8">
              As we move forward, we remain committed to evolving our educational approach, embracing new technologies, and expanding our reach while maintaining our core values and commitment to excellence.
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
}