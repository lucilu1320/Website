import React from 'react';
import { Target, Heart, Users, BookOpen } from 'lucide-react';

const stats = [
  { 
    label: 'Years of Excellence', 
    value: '8+',
    icon: BookOpen,
    description: 'Providing quality and affordable education since 2017'
  },
  { 
    label: 'Student Success Rate', 
    value: '100%',
    icon: Target,
    description: 'Consistent academic achievement'
  },
  { 
    label: 'Classroom Size', 
    value: 'Optimal',
    icon: Users,
    description: 'Small class sizes ensuring individual attention'
  },
  { 
    label: 'Student Satisfaction', 
    value: '98.89%',
    icon: Heart,
    description: 'Happy and engaged learners'
  }
];

const values = [
  {
    title: 'Our Mission',
    content: `At Kharagpur Vision Academy, our mission extends beyond traditional academics. 
    We are dedicated to:

    • Fostering academic excellence through innovative teaching methods.
    • Developing critical thinking, problem-solving, and creative skills essential for future success.
    • Nurturing moral values, ethical behavior, and social responsibility.
    • Promoting cultural awareness and global perspectives.
    • Building character through leadership opportunities and community service.
    • Supporting emotional growth and personal development.
    • Preparing students for the challenges and opportunities of the 21st century.
    
    We believe in creating an educational environment where every student can discover their potential and pursue their dreams with confidence and determination.`
  },
  {
    title: 'Our Philosophy',
    content: `Our educational philosophy is built on the following core principles:

    • Every child is unique and deserves personalized attention to flourish.
    • Learning should be engaging, interactive, and enjoyable.
    • Education must balance academic excellence with character development.
    • Technology and tradition should complement each other in learning.
    • Strong parent-teacher partnerships are essential for student success.
    • Environmental awareness and sustainability are crucial for future generations.
    • Physical education and sports are vital for holistic development.
    • Arts and creativity are fundamental to cognitive and emotional growth.
    
    We strive to create a nurturing environment where students feel safe, respected, and motivated to achieve their highest potential while developing into responsible global citizens.`
  }
];

export function Overview() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="/common/common.jpg"
          alt="School Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Welcome to Kharagpur Vision Academy
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                Where Excellence Meets Education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#2A8C4A]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#2A8C4A]">{stat.value}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-500 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">
            {values.map((value) => (
              <div
                key={value.title}
                className="relative pl-8 group bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-[#90C95F] group-hover:bg-[#2A8C4A] transition-colors rounded-l-lg" />
                <h2 className="text-2xl font-bold text-[#2A8C4A] mb-6 group-hover:translate-x-2 transition-transform">
                  {value.title}
                </h2>
                <div className="text-gray-600 leading-relaxed group-hover:translate-x-2 transition-transform whitespace-pre-line">
                  {value.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-48"
                  src="people/new_princi.jpg"
                  alt="School Principal"
                />
              </div>
              <div className="p-8">
                <blockquote className="italic text-gray-600 mb-4">
                  "At Kharagpur Vision Academy, we are committed to nurturing not just academic excellence, but also character, creativity, and compassion. Our students are encouraged to dream big, think critically, and act responsibly."
                </blockquote>
                <div className="text-[#2A8C4A] font-semibold">
                  - Principal, Kharagpur Vision Academy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2A8C4A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Educational Journey
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Experience excellence in education at Kharagpur Vision Academy, where we nurture young minds and build future leaders.
          </p>
        </div>
      </section>
    </div>
  );
}