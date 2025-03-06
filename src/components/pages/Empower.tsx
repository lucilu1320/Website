import React from 'react';
import { Users, Book, Target, Star, Award, Rocket, Heart, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface EmpowerProps {
  onApplyNow: () => void;
}

const empowermentAreas = [
  {
    icon: Book,
    title: 'Academic Excellence',
    description: 'Rigorous academic programs that challenge and inspire students to reach their full potential.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1920'
  },
  {
    icon: Target,
    title: 'Skill Development',
    description: 'Comprehensive programs focusing on practical skills and real-world applications.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1920'
  },
  {
    icon: Star,
    title: 'Leadership Training',
    description: 'Opportunities to develop leadership skills through various initiatives and programs.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920'
  },
  {
    icon: Heart,
    title: 'Personal Growth',
    description: 'Focus on emotional intelligence and character development.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1920'
  }
];

const programs = [
  {
    title: 'Student Council',
    description: 'Developing leadership skills through active participation in school governance',
    features: [
      'Democratic election process',
      'Project management experience',
      'Event organization',
      'Community service initiatives'
    ],
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    title: 'Mentorship Program',
    description: 'Personalized guidance from experienced mentors for academic and personal growth',
    features: [
      'One-on-one mentoring',
      'Career guidance',
      'Skill development',
      'Personal development plans'
    ],
    icon: Shield,
    color: 'bg-green-500'
  },
  {
    title: 'Achievement Program',
    description: 'Recognition and rewards for outstanding performance in various fields',
    features: [
      'Academic achievements',
      'Sports excellence',
      'Cultural accomplishments',
      'Leadership recognition'
    ],
    icon: Award,
    color: 'bg-purple-500'
  },
  {
    title: 'Innovation Hub',
    description: 'Platform for students to explore and develop innovative ideas',
    features: [
      'Research projects',
      'Innovation workshops',
      'Technology exposure',
      'Problem-solving challenges'
    ],
    icon: Rocket,
    color: 'bg-orange-500'
  }
];

const testimonials = [
  {
    name: 'Riya Sharma',
    role: 'Class XII Student',
    quote: 'The empowerment programs at KVA have helped me discover my potential and develop confidence in my abilities.',
    image: '/achievements/cs.jpg'
  },
  {
    name: 'Arjun Patel',
    role: 'Student Council President',
    quote: 'Being part of the Student Council has taught me valuable leadership skills and the importance of teamwork.',
    image: '/achievements/cs.jpg'
  }
];

export function Empower({ onApplyNow }: EmpowerProps) {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/apply');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/diff.jpg"
          alt="Empower"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Empower</h1>
              <p className="text-xl opacity-90">Building Confidence, Creating Leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Empowerment Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Areas of Empowerment</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to student empowerment focuses on key areas that prepare students for future success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {empowermentAreas.map((area) => (
              <div
                key={area.title}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <area.icon className="w-8 h-8 mb-4 transform transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-bold mb-2">{area.title}</h3>
                  <p className="text-sm opacity-90 transform transition-all duration-300 group-hover:translate-y-0">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Empowerment Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Structured programs designed to develop various aspects of student potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 ${program.color} rounded-lg flex items-center justify-center`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-3">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#90C95F] rounded-full" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Student Voices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our students about their empowerment journey at KVA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[3/2] relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-sm opacity-90">{testimonial.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <blockquote className="text-gray-600 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2A8C4A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Start Your Journey</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join our empowerment programs and unlock your full potential at KVA.
          </p>
          <button 
            onClick={handleApplyNow}
            className="bg-white text-[#2A8C4A] px-8 py-3 rounded-lg font-semibold hover:bg-[#90C95F] hover:text-white transition-colors transform hover:scale-105 duration-200"
          >
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}