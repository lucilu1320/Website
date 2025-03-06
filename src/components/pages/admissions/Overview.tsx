import React from 'react';
import { Calendar, ClipboardCheck, GraduationCap, Users, FileCheck, Clock, BookOpen, Heart } from 'lucide-react';

const admissionSteps = [
  {
    icon: ClipboardCheck,
    title: 'Application Submission',
    description: 'Complete and submit the online application form with required documents.',
    color: 'bg-blue-500'
  },
  {
    icon: FileCheck,
    title: 'Document Verification',
    description: 'Submit and verify all necessary academic and personal documents.',
    color: 'bg-green-500'
  },
  {
    icon: Users,
    title: 'Entrance Assessment',
    description: 'Students undergo an assessment test appropriate for their grade level.',
    color: 'bg-purple-500'
  },
  {
    icon: Calendar,
    title: 'Personal Interview',
    description: 'Interactive session with student and parents.',
    color: 'bg-orange-500'
  }
];

const highlights = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Consistently high board exam results and academic achievements'
  },
  {
    icon: BookOpen,
    title: 'Holistic Development',
    description: 'Focus on academic, physical, and emotional growth'
  },
  {
    icon: Heart,
    title: 'Inclusive Environment',
    description: 'Welcoming atmosphere that celebrates diversity'
  },
  {
    icon: Clock,
    title: 'Modern Facilities',
    description: 'State-of-the-art infrastructure and learning resources'
  }
];

export function AdmissionsOverview() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Admissions"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
              <p className="text-xl opacity-90">Your Journey Begins Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[#2A8C4A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2A8C4A] mb-16">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {admissionSteps.map((step) => (
              <div
                key={step.title}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center mb-6`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2A8C4A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Begin Your Journey with KVA</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Take the first step towards excellence. Join Kharagpur Vision Academy.
          </p>
        </div>
      </section>
    </div>
  );
}