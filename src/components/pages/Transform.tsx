import React from 'react';
import { Cpu, Code, Palette, Rocket, Brain, Lightbulb, Target, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TransformProps {
  onApplyNow: () => void;
}

const technologies = [
  {
    icon: Cpu,
    title: 'Robotics & AI',
    description: 'Hands-on experience with cutting-edge robotics and artificial intelligence technologies.',
    image: '/transform/robo.jpg',
    features: [
      'Robotics lab with modern equipment',
      'AI and machine learning projects',
      'Programming fundamentals',
      'Hardware integration'
    ]
  },
  {
    icon: Code,
    title: 'Coding & Development',
    description: 'Learning essential programming skills and computational thinking.',
    image: '/transform/cod.jpg',
    features: [
      'Web development',
      'Mobile app creation',
      'Game development',
      'Software engineering principles'
    ]
  },
  {
    icon: Palette,
    title: 'Digital Arts & Design',
    description: 'Creative expression through digital media and design tools.',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80&w=1920',
    features: [
      'Graphic design',
      '3D modeling',
      'Digital animation',
      'UI/UX design basics'
    ]
  }
];

const innovationAreas = [
  {
    icon: Brain,
    title: 'Design Thinking',
    description: 'Problem-solving methodology that puts human needs at the center of all solutions.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Lab',
    description: 'Dedicated space for experimenting with new ideas and technologies.'
  },
  {
    icon: Target,
    title: 'Project-Based Learning',
    description: 'Hands-on projects that apply theoretical knowledge to real-world challenges.'
  },
  {
    icon: Zap,
    title: 'Future Skills',
    description: 'Preparing students for emerging technologies and future careers.'
  }
];

const projects = [
  {
    title: 'Remote Control Car with Object Detection 🚗',
    description: 'IOT/Science Exhibition.',
    image: '/transform/car.jpg'
  },
  {
    title: 'Natural Farming 🚜',
    description: 'Social Scence project 2024-25.',
    image: '/transform/farm.jpg'
  },
  {
    title: 'Split of Africa 🌍',
    description: 'Social Scence project 2024-25.',
    image: '/transform/split.jpg'
  }
];

export function Transform({ onApplyNow }: TransformProps) {
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
          alt="Transform"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Transform</h1>
              <p className="text-xl opacity-90">Innovating Education for Tomorrow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Technology & Innovation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Exploring cutting-edge technologies and fostering innovation through hands-on learning experiences.
            </p>
          </div>

          <div className="space-y-20">
            {technologies.map((tech, index) => (
              <div
                key={tech.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center max-w-6xl mx-auto`}
              >
                <div className="flex-1">
                  <div className="relative aspect-video rounded-lg overflow-hidden group">
                    <img
                      src={tech.image}
                      alt={tech.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center">
                      <tech.icon className="w-6 h-6 text-[#2A8C4A]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{tech.title}</h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>

                  <ul className="grid grid-cols-1 gap-3">
                    {tech.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-[#90C95F] rounded-full transform transition-transform duration-300 group-hover:scale-150" />
                        <span className="text-gray-600 group-hover:text-[#2A8C4A] transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Innovation Framework</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach to fostering innovation and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {innovationAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center mb-6">
                  <area.icon className="w-6 h-6 text-[#2A8C4A]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative student projects and achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-90 transform transition-all duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2A8C4A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Innovation Journey</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Experience the transformative power of technology and innovation at KVA.
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