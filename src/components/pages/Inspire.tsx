import React, { useEffect } from 'react';
import { BookOpen, ArrowRight, Star, Heart, Brain, Rocket } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface InspireProps {
  onApplyNow: () => void;
}

const academicPrograms = [
  {
    id: 'pre-primary',
    level: 'Pre-Primary',
    grades: 'Nursery to KG-II',
    description: 'Foundation for lifelong learning through play-based education',
    image: '/inspire/pre.jpg',
    features: [
      'Play-based learning methodology',
      'Basic numeracy and literacy skills',
      'Language development activities',
      'Motor skills development',
      'Social interaction and emotional growth',
      'Creative expression through art and music'
    ]
  },
  {
    id: 'primary',
    level: 'Primary',
    grades: 'Classes I to V',
    description: 'Building strong foundations in core subjects while encouraging curiosity',
    image: '/inspire/prim.jpg',
    features: [
      'Core subject mastery',
      'Project-based learning',
      'Reading and comprehension programs',
      'Basic computer skills',
      'Art and craft activities',
      'Physical education and sports'
    ]
  },
  {
    id: 'middle',
    level: 'Middle School',
    grades: 'Classes VI to VIII',
    description: 'Expanding knowledge horizons with comprehensive academic programs',
    image: '/inspire/mid.jpg',
    features: [
      'Advanced academics',
      'Scientific inquiry and experimentation',
      'Language proficiency development',
      'Sports and athletics',
      'Cultural programs and activities',
      'Leadership development opportunities'
    ]
  },
  {
    id: 'secondary',
    level: 'Secondary',
    grades: 'Classes IX to X',
    description: 'Preparing students for board examinations with analytical focus',
    image: '/inspire/secon.jpg',
    features: [
      'Board examination preparation',
      'Career counseling sessions',
      'Advanced laboratory practices',
      'Competitive exam preparation',
      'Soft skills development',
      'Research projects and presentations'
    ]
  },
  {
    id: 'senior-secondary',
    level: 'Senior Secondary',
    grades: 'Classes XI to XII',
    description: 'Specialized streams with focused preparation for higher education',
    image: '/inspire/sen.jpg',
    features: [
      'Stream specialization (Science/Arts/Commerce)',
      'College preparation programs',
      'Advanced laboratory facilities',
      'Career guidance and counseling',
      'Entrance exam coaching',
      'Industry exposure and internships'
    ]
  }
];

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

export function Inspire({ onApplyNow }: InspireProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/apply');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # from the hash
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          const headerOffset = 72;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] mt-[72px]">
        <img
          src="common/diff.jpg"
          alt="Inspire"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white mb-4">Inspire</h1>
            <p className="text-2xl text-white/90">Nurturing Excellence Through Education</p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in inspiring young minds through innovative teaching methods and comprehensive development programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
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

      {/* Academic Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <BookOpen className="w-12 h-12 text-[#2A8C4A] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Academic Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive education programs designed for every stage of learning
            </p>
          </div>

          <div className="space-y-20">
            {academicPrograms.map((program, index) => (
              <div
                key={program.id}
                id={program.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center max-w-6xl mx-auto scroll-mt-24`}
              >
                <div className="flex-1">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                    <img
                      src={program.image}
                      alt={program.level}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{program.level}</h3>
                    <p className="text-[#2A8C4A] font-medium">{program.grades}</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{program.description}</p>

                  <div className="grid grid-cols-1 gap-4">
                    {program.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-[#90C95F] rounded-full transform transition-transform duration-300 group-hover:scale-150" />
                        <span className="text-gray-600 group-hover:text-[#2A8C4A] transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleApplyNow}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#2A8C4A] text-white rounded-lg hover:bg-[#238040] transition-colors transform hover:scale-105 duration-200"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2A8C4A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Begin Your Journey with KVA</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join us in our mission to inspire excellence and nurture future leaders.
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