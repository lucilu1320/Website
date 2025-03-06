import React from 'react';
import { BookOpen, Code, Star, Award } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'CBSE Curriculum',
    description: 'Following the latest CBSE guidelines with modern teaching methodologies',
  },
  {
    icon: Code,
    title: 'Digital Integration',
    description: 'Smart classrooms and digital resources enhancing learning experience',
  },
  {
    icon: Star,
    title: 'Experiential Learning',
    description: 'Hands-on activities and practical applications of concepts',
  },
  {
    icon: Award,
    title: 'Continuous Assessment',
    description: 'Regular evaluation and feedback for improved performance',
  },
];

export function Curriculum() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/diff.jpg"
          alt="Curriculum"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Curriculum</h1>
              <p className="text-xl opacity-90">Excellence in Education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Curriculum Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive curriculum is designed to nurture academic excellence and holistic development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#2A8C4A]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Academic Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive education programs designed for every stage of learning.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pre-Primary */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative">
                  <img
                    src="/inspire/pre.jpg"
                    alt="Pre-Primary Education"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">Pre-Primary Education</h3>
                    <p className="text-sm opacity-90">Nursery to Kindergarten</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Play-based learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Social and emotional development</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Introduction to basic concepts</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Primary */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative">
                  <img
                    src="/inspire/prim.jpg"
                    alt="Primary Education"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">Primary Education</h3>
                    <p className="text-sm opacity-90">Classes I to V</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Foundation in core subjects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Activity-based learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Basic skill development</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Middle */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative">
                  <img
                    src="/inspire/mid.jpg"
                    alt="Middle School"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">Middle School</h3>
                    <p className="text-sm opacity-90">Classes VI to VIII</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Advanced core subjects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Project-based learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Practical applications</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Second Row for Secondary and Senior Secondary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Secondary */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative">
                  <img
                    src="/inspire/secon.jpg"
                    alt="Secondary Education"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">Secondary Education</h3>
                    <p className="text-sm opacity-90">Classes IX to X</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Board exam preparation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Subject specialization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Skill development</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Senior Secondary */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative">
                  <img
                    src="/inspire/sen.jpg"
                    alt="Senior Secondary Education"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">Senior Secondary Education</h3>
                    <p className="text-sm opacity-90">Classes XI to XII</p>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Stream specialization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">Career-focused curriculum</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">University entrance preparation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2A8C4A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Academic Excellence</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Experience our comprehensive curriculum designed to nurture future leaders.
          </p>
        </div>
      </section>
    </div>
  );
}