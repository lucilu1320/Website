import React from 'react';
import { Trophy, Brain, Target, Crosshair, Heart, Users, BookOpen, Star, Rocket } from 'lucide-react';

export interface AchieveProps {
  onApplyNow: () => void;
}

const highlights = [
  {
    icon: Brain,
    title: 'Critical Thinking',
    description: 'Developing analytical and problem-solving skills'
  },
  {
    icon: Heart,
    title: 'Holistic Growth',
    description: 'Focus on academic, physical, and emotional development'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Striving for the highest standards in education'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Embracing modern teaching methodologies'
  }
];

const studentAchievers = [
  {
    name: 'Shan Molla',
    achievement: 'CBSE Class 12, School 2nd Topper',
    score: '92.00%',
    year: '2023-24',
    image: '/achievements/cs.jpg'
  },
  {
    name: 'Anish Pati',
    achievement: 'CBSE Class 10, School 2nd Topper',
    score: '91.00%',
    year: '2023-24',
    image: '/achievements/cs.jpg'
  },
  {
    name: 'Mohammed Rahim',
    achievement: 'National Sports Meet Champion',
    score: 'Gold in Athletics',
    year: '2023',
    image: '/achievements/cs.jpg'
  }
];

export function AchieveSection({ onApplyNow }: AchieveProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] mt-[72px]">
        <img
          src="common/diff.jpg"
          alt="Achieve"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Achieve</h1>
            <p className="text-2xl text-white/90">Guiding Paths to Success</p>
          </div>
        </div>
      </section>

      
    

      {/* Student Guidance Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Student Guidance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support system to help students achieve their full potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Self-Discovery Card */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1920"
                alt="Self-Discovery"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <Brain className="w-8 h-8 text-white mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Self-Discovery</h3>
                <p className="text-white/90">
                  Understanding personal strengths, interests, and potential career paths.
                </p>
              </div>
            </div>

            {/* Career Planning Card */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920"
                alt="Career Planning"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <Target className="w-8 h-8 text-white mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Career Planning</h3>
                <p className="text-white/90">
                  Strategic guidance for academic and professional goals.
                </p>
              </div>
            </div>

            {/* Skill Development Card */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1920"
                alt="Skill Development"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <Crosshair className="w-8 h-8 text-white mb-3" />
                <h3 className="text-xl font-bold text-white mb-2">Skill Development</h3>
                <p className="text-white/90">
                  Building essential skills for future success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Our Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured programs designed to ensure academic and personal success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Academic Excellence */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold">Academic Excellence</h3>
              </div>
              <p className="text-gray-600 mb-6">Comprehensive support for academic achievement</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Personalized study plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Extra academic support</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Regular progress monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Advanced learning opportunities</span>
                </li>
              </ul>
            </div>

            {/* Career Counseling */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold">Career Counseling</h3>
              </div>
              <p className="text-gray-600 mb-6">Expert guidance for career choices</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">One-on-one counseling</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Career assessment tests</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Industry exposure</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">College application support</span>
                </li>
              </ul>
            </div>

            {/* Skill Enhancement */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold">Skill Enhancement</h3>
              </div>
              <p className="text-gray-600 mb-6">Development of crucial life skills</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Communication skills</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Leadership development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Time management</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Problem-solving abilities</span>
                </li>
              </ul>
            </div>

            {/* Competitive Edge */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold">Competitive Edge</h3>
              </div>
              <p className="text-gray-600 mb-6">Preparation for competitive examinations</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Entrance exam coaching</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Mock tests</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Performance analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                  <span className="text-gray-600">Expert guidance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our students' achievements speak volumes about our guidance and support system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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

      {/* Stats Section */}
      <section className="py-20 bg-[#2A8C4A] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            {/* College Placement */}
            <div>
              <Star className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">95%</h3>
              <p className="text-xl mb-2">College Placement</p>
              <p className="text-white/80">
                Students placed in top universities in Australia & Netherlands
              </p>
            </div>

            {/* Competition Winners */}
            <div>
              <Trophy className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-xl mb-2">Competition Winners</p>
              <p className="text-white/80">
                National and international achievements
              </p>
            </div>

            {/* Student Satisfaction */}
            <div>
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-xl mb-2">Student Satisfaction</p>
              <p className="text-white/80">
                With career guidance services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}