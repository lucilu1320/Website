import React from 'react';
import { Briefcase, Clock, MapPin, GraduationCap, Send } from 'lucide-react';

/*const openings = [
  {
    position: 'Mathematics Teacher',
    department: 'Secondary School',
    type: 'Full Time',
    location: 'Kharagpur Campus',
    experience: '3-5 years',
    qualification: 'M.Sc. in Mathematics with B.Ed',
    requirements: [
      'Strong command over CBSE curriculum',
      'Experience in teaching Classes IX-XII',
      'Excellent communication skills',
      'Proficiency in using digital teaching tools'
    ],
    deadline: '2024-04-30'
  },
  {
    position: 'Physics Teacher',
    department: 'Senior Secondary',
    type: 'Full Time',
    location: 'Kharagpur Campus',
    experience: '5+ years',
    qualification: 'M.Sc. in Physics with B.Ed',
    requirements: [
      'Expertise in CBSE Physics curriculum',
      'Experience in lab practical supervision',
      'Strong analytical and problem-solving skills',
      'Knowledge of modern teaching methodologies'
    ],
    deadline: '2024-04-25'
  },
  {
    position: 'Primary School Teacher',
    department: 'Primary School',
    type: 'Full Time',
    location: 'Kharagpur Campus',
    experience: '2-4 years',
    qualification: 'B.Ed with relevant specialization',
    requirements: [
      'Experience in primary education',
      'Strong foundation in child psychology',
      'Creative teaching methods',
      'Ability to handle multiple subjects'
    ],
    deadline: '2024-04-28'
  },
  {
    position: 'Computer Science Teacher',
    department: 'Secondary School',
    type: 'Full Time',
    location: 'Kharagpur Campus',
    experience: '3-5 years',
    qualification: 'B.Tech/MCA with B.Ed',
    requirements: [
      'Proficiency in programming languages',
      'Experience in teaching computer science',
      'Knowledge of latest technology trends',
      'Ability to conduct practical sessions'
    ],
    deadline: '2024-05-05'
  }
];*/

export function CurrentOpenings() {
  const handleApply = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSet46bPtD4wyfNZ4xAyTjpekhRxddZzSlFjrEsrOtov-qVJ8A/viewform?usp=sf_link', '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Careers at KVA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Current Openings</h1>
              <p className="text-xl opacity-90">Join Our Team of Educators</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Available Positions</h2>
              <div className="bg-gray-50 p-12 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">🎓 No Current Openings</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We're not actively hiring at the moment, but we're always interested in connecting with talented educators. 
                  Feel free to submit your resume for future opportunities!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2A8C4A] mb-6">Stay Connected</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented educators. Send us your resume and we'll keep it on file for future opportunities.
          </p>
          <button
            onClick={handleApply}
            className="inline-flex items-center gap-2 bg-[#2A8C4A] text-white px-8 py-3 rounded-lg hover:bg-[#238040] transition-colors"
          >
            <Send className="w-5 h-5" />
            Send Your Resume
          </button>
        </div>
      </section>
    </div>
  );
}