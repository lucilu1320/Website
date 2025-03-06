import React from 'react';
import { Trophy, Star, Users, Award, Medal, BookOpen, Target, Crown } from 'lucide-react';

const highlights = [
  {
    icon: Trophy,
    value: '100%',
    label: 'Board Results',
    description: 'Consistent academic excellence in CBSE examinations'
  },
  {
    icon: Star,
    value: '50+',
    label: 'Competition Wins',
    description: 'Victories in various inter-school competitions'
  },
  {
    icon: Users,
    value: '500+',
    label: 'Alumni Network',
    description: 'Successful graduates making their mark globally'
  },
  {
    icon: Award,
    value: '5+',
    label: 'Major Awards',
    description: 'Recognition for academic and extracurricular excellence'
  }
];

const achievements = [
  {
    year: '2023',
    items: [
      {
        title: 'Academic Excellence',
        description: 'Ranked among top 5% of CBSE schools in West Bengal',
        icon: BookOpen
      },
      {
        title: 'Sports Championship',
        description: 'District-level champions in football and cricket',
        icon: Trophy
      },
      {
        title: 'Science Olympiad',
        description: 'National-level winners in Olympiad',
        icon: Medal
      }
    ]
  },
  {
    year: '2022',
    items: [
      {
        title: 'Cultural Excellence',
        description: 'State-level winners in dance and music competitions',
        icon: Crown
      },
      {
        title: 'Affordable Education Award',
        description: 'Best School Innovation Award for STEM initiatives',
        icon: Target
      },
      {
        title: 'Green Campus',
        description: 'Recognized for environmental sustainability practices',
        icon: Award
      }
    ]
  }
];

const studentAchievers = [
  {
    name: 'MD Iyamin Sekh',
    achievement: 'CBSE Class 12 School Topper',
    score: '94.00%',
    year: '2023-24',
    image: '/achievements/cs.jpg'
  },
  {
    name: 'Soham De',
    achievement: 'CBSE Class 10 School Topper',
    score: '92.00%',
    year: '2023-24',
    image: '/achievements/cs.jpg'
  },
  {
    name: 'Utsav Ghosh',
    achievement: 'International Professional Boxing Championship',
    score: 'Cash Prize',
    year: '2024',
    image: '/achievements/utsav.jpg'
  }
];

export function Achievements() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Achievements"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h1>
              <p className="text-xl opacity-90">A Legacy of Excellence</p>
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
                key={item.label}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-[#2A8C4A]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#2A8C4A]">{item.value}</h3>
                    <p className="text-gray-600 font-medium">{item.label}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2A8C4A] mb-16">Recent Achievements</h2>
          <div className="max-w-4xl mx-auto">
            {achievements.map((yearGroup, index) => (
              <div key={yearGroup.year} className="mb-16 last:mb-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-[#2A8C4A] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {yearGroup.year}
                  </div>
                  <div className="flex-1 h-0.5 bg-[#2A8C4A]/20"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {yearGroup.items.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-[#2A8C4A]" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#2A8C4A] mb-16">Student Achievers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {studentAchievers.map((student) => (
              <div
                key={student.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{student.name}</h3>
                    <p className="text-sm opacity-90">{student.year}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-[#2A8C4A] mb-2">{student.achievement}</h4>
                  <p className="text-gray-600">{student.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Banner */}
      <section className="bg-[#2A8C4A] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Legacy of Excellence</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Be part of an institution that consistently achieves excellence in academics, sports, and extracurricular activities.
          </p>
        </div>
      </section>
    </div>
  );
}