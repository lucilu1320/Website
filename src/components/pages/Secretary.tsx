import React from 'react';
import { Mail, Award, Briefcase, Users } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Administrative Excellence',
    description: '20+ Experience in administration'
  },
  {
    icon: Briefcase,
    title: 'Operational Leadership',
    description: 'Streamlining processes and enhancing institutional efficiency'
  },
  {
    icon: Users,
    title: 'Stakeholder Management',
    description: 'Building strong relationships with parents, staff, and community'
  }
];

export function Secretary() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Secretary's Office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Secretary's Message</h1>
              <p className="text-xl opacity-90">Facilitating Excellence in Education</p>
            </div>
          </div>
        </div>
      </section>

      {/* Secretary Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Card */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                  <div className="aspect-[3/4] relative">
                    <img
                      src="people/secretary.jpg"
                      alt="Secretary"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-2xl font-bold mb-1">Mr. SK MD Ajiz</h2>
                      <p className="text-lg opacity-90">Secretary</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-600 hover:text-[#2A8C4A] transition-colors">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:secretary@kvaschool.edu.in">secretary@kvaschool.edu.in</a>
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
                  <h2 className="text-3xl font-bold text-[#2A8C4A] mb-6">Supporting Educational Excellence</h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Dear Parents and Students,
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    As the Secretary of Kharagpur Vision Academy, I am privileged to be part of an institution that prioritizes excellence in education and holistic development. Our administrative team works tirelessly to ensure smooth operations and create an environment conducive to learning and growth.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our administrative framework is built on the following principles:
                  </p>

                  <ul className="list-disc pl-6 text-gray-600 mb-6">
                    <li>Transparent and efficient administrative processes</li>
                    <li>Strong communication channels with all stakeholders</li>
                    <li>Regular updates on school activities and achievements</li>
                    <li>Prompt attention to parent and student concerns</li>
                    <li>Continuous improvement of facilities and services</li>
                    <li>Support for academic and extracurricular activities</li>
                  </ul>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    We understand that effective administration plays a crucial role in creating an environment where students can focus on their studies and overall development. Our team is committed to maintaining high standards of service and support for our academic community.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    The administrative office serves as a bridge between various stakeholders - students, parents, teachers, and management. We strive to ensure that all administrative processes are streamlined, efficient, and user-friendly.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    We welcome your feedback and suggestions as we continue to enhance our services and support systems. Together, we can create an environment that nurtures excellence and achievement.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Best regards,<br />
                    Mr. SK MD Ajiz<br />
                    Secretary, Kharagpur Vision Academy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}