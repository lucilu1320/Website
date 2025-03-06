import React from 'react';
import { Mail, Phone, Award, BookOpen, Target, Users } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Strategic Leadership',
    description: '15+ years of experience in educational leadership and institution building'
  },
  {
    icon: Target,
    title: 'Vision & Innovation',
    description: 'Pioneering modern educational methodologies and institutional excellence'
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Fostering strong relationships between students, parents, and educators'
  }
];

export function Director() {
  const handleAppointmentRequest = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeEOFyfsIxuSZXMT1MuWURyZdrp6RSLxzFAd_YnXs4zNDiIZA/viewform', '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Director's Office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Director's Message</h1>
              <p className="text-xl opacity-90">Guiding Excellence in Education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Card */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                  <div className="aspect-[3/4] relative">
                    <img
                      src="people/director.jpg"
                      alt="Director"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-2xl font-bold mb-1">Mr. Siddharth Sircar</h2>
                      <p className="text-lg opacity-90">Director</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-600 hover:text-[#2A8C4A] transition-colors">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:director@kvaschool.edu.in">director@kvaschool.edu.in</a>
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
                  <h2 className="text-3xl font-bold text-[#2A8C4A] mb-6">Building Tomorrow's Leaders</h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Dear Parents and Students,
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    As the Director of Kharagpur Vision Academy, I am honored to lead an institution that stands at the forefront of educational innovation and excellence. Our journey has been marked by continuous growth, unwavering commitment to quality education, and a deep-rooted belief in nurturing every student's potential.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    At KVA, we have created an educational ecosystem that combines academic excellence with character development. Our approach is holistic, focusing on:
                  </p>

                  <ul className="list-disc pl-6 text-gray-600 mb-6">
                    <li>Innovative teaching methodologies that inspire curiosity and creativity</li>
                    <li>State-of-the-art infrastructure facilitating modern learning</li>
                    <li>Strong emphasis on moral values and ethical leadership</li>
                    <li>Comprehensive development through sports and cultural activities</li>
                    <li>Regular parent-teacher collaboration for student success</li>
                    <li>Integration of technology in education</li>
                  </ul>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our vision extends beyond academic achievements. We aim to shape individuals who are not just successful in their careers but are also responsible citizens, innovative thinkers, and compassionate leaders. The rapidly evolving global landscape demands an education that prepares students for future challenges while staying rooted in timeless values.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    The success of our students is a testament to our dedicated faculty, supportive parents, and the robust educational framework we have established. We continue to evolve and adapt, ensuring that our students receive the best possible education that prepares them for the challenges and opportunities of tomorrow.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    I invite you to be part of our journey in shaping the future of education and nurturing the leaders of tomorrow.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Best regards,<br />
                    Mr. Siddharth Sircar<br />
                    Director, Kharagpur Vision Academy
                  </p>
                </div>

                {/* Call to Action */}
                <div className="bg-gray-50 p-8 rounded-lg mt-12">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Connect with the Director</h3>
                  <p className="text-gray-600 mb-6">
                    Would you like to discuss your child's educational journey or learn more about our vision? Schedule a meeting with our Director.
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