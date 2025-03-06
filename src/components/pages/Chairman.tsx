import React from 'react';
import { Mail, Award, Briefcase, Users } from 'lucide-react';

const achievements = [
  {
    icon: Award,
    title: 'Visionary Leadership',
    description: 'Experience in education and institutional development'
  },
  {
    icon: Briefcase,
    title: 'Educational Excellence',
    description: 'Pioneering innovative educational initiatives and institutional growth'
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Transforming lives through quality education and social initiatives'
  }
];

export function Chairman() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Chairman's Office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Chairperson's Message</h1>
              <p className="text-xl opacity-90">Leading with Purpose and Vision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Card */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                  <div className="aspect-[3/4] relative">
                    <img
                      src="people/chairman.jpg"
                      alt="Chairman"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-2xl font-bold mb-1">Mrs. Nilima Begam</h2>
                      <p className="text-lg opacity-90">Chairperson</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-600 hover:text-[#2A8C4A] transition-colors">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:chairman@kvaschool.edu.in">chairman@kvaschool.edu.in</a>
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
                  <h2 className="text-3xl font-bold text-[#2A8C4A] mb-6">Shaping Future Generations</h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Dear Students, Parents, and Well-wishers,
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    As the Chairman of Kharagpur Vision Academy, it gives me immense pleasure to welcome you to an institution that stands as a beacon of educational excellence and innovation. Our journey began with a vision to create an educational institution that not only imparts knowledge but also shapes character, nurtures talent, and builds future leaders.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    At KVA, we believe in the transformative power of education. Our commitment extends beyond academic excellence to encompass:
                  </p>

                  <ul className="list-disc pl-6 text-gray-600 mb-6">
                    <li>Holistic development of every student</li>
                    <li>Integration of traditional values with modern education</li>
                    <li>Creation of a nurturing and innovative learning environment</li>
                    <li>Development of leadership qualities and life skills</li>
                    <li>Promotion of research and analytical thinking</li>
                    <li>Focus on character building and ethical values</li>
                  </ul>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our institution stands on the pillars of excellence, innovation, and ethical values. We have consistently worked towards creating an educational ecosystem that prepares students not just for examinations, but for life itself. Our state-of-the-art infrastructure, dedicated faculty, and comprehensive curriculum are designed to provide students with the best possible learning experience.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    As we move forward, we remain committed to our founding principles while adapting to the changing needs of education in the 21st century. Our focus on technology integration, environmental consciousness, and global awareness ensures that our students are well-prepared for the challenges of tomorrow.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    I invite you to be part of this transformative journey in education. Together, let us build a future where every student can realize their full potential and contribute meaningfully to society.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Warm regards,<br />
                    Mrs. Nilima Begam<br />
                    Chairperson, Kharagpur Vision Academy
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