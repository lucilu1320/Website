import React from 'react';
import { Mail, Phone, Award, BookOpen } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Educational Leadership',
    description: '10+ years of experience in educational administration and teaching'
  },
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Committed to maintaining high academic standards and holistic development'
  }
];

export function Principal() {
  const handleAppointmentRequest = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSchoP8FAFF5fBmwqKVKgzbL1IW3Pi7peGEgAC3zHIA29m9ROw/viewform', '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Principal's Office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Principal's Message</h1>
              <p className="text-xl opacity-90">Leading with Vision and Purpose</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Card */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                  <div className="aspect-[3/4] relative">
                    <img
                      src="people/new_princi.jpg"
                      alt="Principal"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-2xl font-bold mb-1">Mr. Saptarshi Chakraborty</h2>
                      <p className="text-lg opacity-90">Principal</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-600 hover:text-[#2A8C4A] transition-colors">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:principal@kvaschool.edu.in">principal@kvaschool.edu.in</a>
                    </div>
                    <div className="pt-4 space-y-3">
                      {achievements.map((achievement) => (
                        <div key={achievement.title} className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <achievement.icon className="w-5 h-5 text-[#2A8C4A]" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">{achievement.title}</h3>
                            <p className="text-sm text-gray-600">{achievement.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold text-[#2A8C4A] mb-6">Welcome to Kharagpur Vision Academy</h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Dear Parents, Students, and Well-wishers,
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    It gives me immense pleasure to welcome you to Kharagpur Vision Academy, an institution that stands as a beacon of educational excellence and holistic development. As the Principal, I am proud to lead a team of dedicated educators who share our vision of nurturing young minds into becoming responsible, capable, and compassionate individuals.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    At KVA, we believe that education goes beyond textbooks and examinations. Our approach integrates academic rigor with character building, creativity, and practical skills. We strive to create an environment where every student feels valued, supported, and encouraged to explore their full potential.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our curriculum is designed to meet the challenges of the 21st century while staying rooted in timeless values. We emphasize:
                  </p>

                  <ul className="list-disc pl-6 text-gray-600 mb-6">
                    <li>Critical thinking and problem-solving skills</li>
                    <li>Character development and ethical values</li>
                    <li>Innovation and technological literacy</li>
                    <li>Physical education and sports</li>
                    <li>Arts and cultural activities</li>
                    <li>Environmental awareness and social responsibility</li>
                  </ul>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    We understand that each child is unique, with their own talents and aspirations. Our experienced faculty members work tirelessly to identify and nurture these individual strengths while providing the support needed to overcome challenges.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Parent partnership is crucial to our success. We encourage active participation from parents in their child's educational journey and maintain open channels of communication to ensure the best possible outcomes for our students.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    As we continue to grow and evolve, our commitment to excellence remains unwavering. We invite you to join us in this exciting journey of discovery, growth, and achievement.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Warm regards,<br />
                    Mr. Saptarshi Chakraborty<br />
                    Principal, Kharagpur Vision Academy
                  </p>
                </div>

                {/* Call to Action */}
                <div className="bg-gray-50 p-8 rounded-lg mt-12">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Schedule a Meeting</h3>
                  <p className="text-gray-600 mb-6">
                    Would you like to discuss your child's education? Schedule a personal meeting with our Principal.
                  </p>
                  <button
                    onClick={handleAppointmentRequest}
                    className="bg-[#2A8C4A] text-white px-6 py-3 rounded-lg hover:bg-[#238040] transition-colors transform hover:scale-105 duration-200"
                  >
                    Request Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}