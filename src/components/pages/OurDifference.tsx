import React from 'react';
import { Shield, Heart, Users, Target, BookOpen, Sparkles, Award, Lightbulb } from 'lucide-react';

const differentiators = [
  {
    icon: Shield,
    title: 'Holistic Development',
    description: 'Beyond academics, we focus on character building, physical education, and emotional intelligence.',
    color: 'bg-blue-500'
  },
  {
    icon: Heart,
    title: 'Student-Centric Approach',
    description: 'Personalized attention and tailored learning paths for every student.',
    color: 'bg-red-500'
  },
  {
    icon: Users,
    title: 'Expert Faculty',
    description: 'Experienced educators committed to bringing out the best in every student.',
    color: 'bg-green-500'
  },
  {
    icon: Target,
    title: 'Modern Infrastructure',
    description: 'State-of-the-art facilities supporting both academic and extracurricular activities.',
    color: 'bg-purple-500'
  }
];

const features = [
  {
    icon: BookOpen,
    title: 'Innovative Curriculum',
    points: [
      'Integration of technology in learning',
      'Project-based learning approach',
      'Regular workshops and seminars',
      'Focus on practical knowledge'
    ]
  },
  {
    icon: Sparkles,
    title: 'Beyond Academics',
    points: [
      'Sports and physical education',
      'Art and cultural activities',
      'Leadership development',
      'Community service initiatives'
    ]
  },
  {
    icon: Award,
    title: 'Student Support',
    points: [
      'Career counseling',
      'Mental health support',
      'Learning assistance programs',
      'Parent-teacher collaboration'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Future Ready',
    points: [
      'Digital literacy programs',
      'Life skills development',
      'Environmental awareness',
      'Global perspective'
    ]
  }
];

export function OurDifference() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/diff.jpg"
          alt="KVA Difference"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">The KVA Difference</h1>
              <p className="text-xl opacity-90">What Makes Us Unique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Differentiators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="relative group bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`absolute top-0 left-0 w-2 h-full ${item.color} rounded-l-lg`} />
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${item.color} bg-opacity-10 rounded-full flex items-center justify-center mb-4`}>
                    <item.icon className={`w-8 h-8 ${item.color} text-opacity-90`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2A8C4A] mb-16">Our Comprehensive Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#2A8C4A]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                </div>
                <ul className="space-y-3">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 group">
                      <span className="w-2 h-2 bg-[#90C95F] rounded-full transform transition-transform duration-300 group-hover:scale-150" />
                      <span className="text-gray-600 group-hover:text-[#2A8C4A] transition-colors">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#2A8C4A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Experience the KVA Difference</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Join us in our journey of educational excellence and witness the transformation in your child's learning experience.
          </p>
        </div>
      </section>
    </div>
  );
}