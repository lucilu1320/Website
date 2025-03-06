import React from 'react';
import { BookOpen, Award, Star, GraduationCap, Users, Heart, Mail, Phone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const departments = [
  {
    name: 'Post Graduate Teachers (PGT)',
    description: 'Expert educators leading advanced academic instruction',
    teachers: [
      {
        name: 'Saptarshi Chakraborty',
        role: 'Principal',
        qualification: 'M.Sc., B.Ed',
        image: 'people/new_princi.jpg'
      },
      {
        name: 'Mousumi Pal Sarkar',
        role: 'PGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Monami Mondal',
        role: 'PGT',
        qualification: 'M.C.A, B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Payel Dutta',
        role: 'PGT',
        qualification: 'M.Sc., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'D. Shanti Kumari',
        role: 'PGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Shabnam Parveen',
        role: 'PGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Swapan Bera',
        role: 'PGT',
        qualification: 'M.Sc., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Ankita Guha',
        role: 'PGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Lila Kumari Gurung',
        role: 'PGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Swati Sharma',
        role: 'PGT',
        qualification: 'M.Com, B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Subash Chandra Mandi',
        role: 'PGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Sumit Bera',
        role: 'PGT',
        qualification: 'M.Tech',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Sonali Mal',
        role: 'PGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Bommidala Lavanya Kumari',
        role: 'PGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Shayan Kumar Nag',
        role: 'PGT',
        qualification: 'M.Sc., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Papu Maity',
        role: 'PGT',
        qualification: 'M.Sc., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Dr Priyanka Kumari',
        role: 'PGT',
        qualification: 'M.Sc., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Subhas Das',
        role: 'PGT',
        qualification: 'M.F.A.',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Preet Kaur',
        role: 'PGT',
        qualification: 'M.Com, B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Suparna Bera',
        role: 'PGT',
        qualification: 'M.Sc, B.ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Melrene Teresa Juans',
        role: 'PGT',
        qualification: 'M.A., B.ED',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'M T Srinivas Rao',
        role: 'PGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      }
    ]
  },
  {
    name: 'Trained Graduate Teachers (TGT)',
    description: 'Dedicated educators shaping middle school excellence',
    teachers: [
      {
        name: 'Ishani Mukherjee',
        role: 'TGT',
        qualification: 'M.Sc., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Purnima Chakraborty',
        role: 'TGT',
        qualification: 'B.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Ruheena Afza Begum',
        role: 'TGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Gurmeet Kaur Dhami',
        role: 'TGT',
        qualification: 'B.Sc, B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Deepika Gupta',
        role: 'TGT',
        qualification: 'B.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Moumita Deb',
        role: 'TGT',
        qualification: 'M.Sc., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Banishri Sharma',
        role: 'TGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Bubai Maity',
        role: 'TGT',
        qualification: 'M.C.A.',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Nasibul Hasan',
        role: 'TGT',
        qualification: 'M.Sc., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Annu',
        role: 'TGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Moumita Chakraborty',
        role: 'TGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Sneha Dey',
        role: 'TGT',
        qualification: 'M.Sc., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Babul Mallick',
        role: 'TGT',
        qualification: 'B.Sc., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Bahnideepa Sharma',
        role: 'TGT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Shilpi Adhikari Dey',
        role: 'TGT',
        qualification: 'M.Sc., B.Ed',
        image: '/api/placeholder/400/300'
      }
    ]
  },
  {
    name: 'Primary Teachers (PRT)',
    description: 'Nurturing young minds with foundational knowledge',
    teachers: [
      {
        name: 'Tabassum Ali',
        role: 'PRT',
        qualification: 'B.A., D.El.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Matilda Manjula Baru',
        role: 'PRT',
        qualification: 'B.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Puja Maity Das',
        role: 'PRT',
        qualification: 'B.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Babli Chakraborty',
        role: 'PRT',
        qualification: 'B.Com, D.El.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Subhamita Dutta',
        role: 'PRT',
        qualification: 'M.A., D.El.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Priya Gajway',
        role: 'PRT',
        qualification: 'M.A., MTT (B.Ed)',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Sudeshna Bandyopadhyay',
        role: 'PRT',
        qualification: 'M.A., Music',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Shamma Parween',
        role: 'PRT',
        qualification: 'B.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Saleshtee Varsha John',
        role: 'PRT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Anshu Sharma',
        role: 'PRT',
        qualification: 'B.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Anju Sharma',
        role: 'PRT',
        qualification: 'BCA, B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Manisha Mukherjee',
        role: 'PRT',
        qualification: 'MCA',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Satabdi Dandapat',
        role: 'PRT',
        qualification: 'MCA',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Susmita Dhal',
        role: 'PRT',
        qualification: 'M.A. (Music)',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Inamur Rahman',
        role: 'PRT',
        qualification: 'B.A., D.El.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Madhavi Rani Vishwakarma',
        role: 'PRT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'G Vandana',
        role: 'PRT',
        qualification: 'M.Sc., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Mahajabi Sabanam',
        role: 'PRT',
        qualification: 'M.A., B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Premlata',
        role: 'PRT',
        qualification: 'M.A., B.ED',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Y Showjanya',
        role: 'PRT',
        qualification: 'B.Com., D.El.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Sayani Kaity',
        role: 'PRT',
        qualification: 'M.A.',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Priyanka Thakur',
        role: 'PRT',
        qualification: 'B.Com, B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Suchit Sharma',
        role: 'PRT',
        qualification: 'B.Tech, B.Ed',
        image: '/api/placeholder/400/300'
      }
    ]
  },
  {
    name: 'Special Faculty & Support Staff',
    description: 'Specialized educators and support staff enriching the learning experience',
    teachers: [
      {
        name: 'Shilpi Sarkar',
        role: 'NTT',
        qualification: 'B.A., MTT',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Shreen Parveen',
        role: 'NTT',
        qualification: 'H.S., MTT',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Sayani Ghosh',
        role: 'NTT',
        qualification: 'M.A., MTT',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'B Seema Rao',
        role: 'NTT',
        qualification: 'B.A., MTT',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Amitava Pal',
        role: 'PTI',
        qualification: 'M.P.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Joyashree Dolai',
        role: 'PTI',
        qualification: 'M.P.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Chaitali Das',
        role: 'Dance Teacher',
        qualification: 'M.A. (Dance)',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Paramita Paul',
        role: 'Wellness Teacher',
        qualification: 'M.A. in Psychology, B.Ed',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Tapas Tapadar',
        role: 'Special Educator',
        qualification: 'B.Ed (Spl. Edn), M.A.(Psychology)',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Ganapathi Tanuja Reddy',
        role: 'Counsellor',
        qualification: 'M.A. in Psychology',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Rumali Choudhary',
        role: 'Librarian',
        qualification: 'M.Lib.I.Sc',
        image: '/api/placeholder/400/300'
      },
      {
        name: 'Dr. Shamim Mallik',
        role: 'Physician',
        qualification: 'B.M.H.S',
        image: '/api/placeholder/400/300'
      }
    ]
  }
];

const stats = [
  {
    icon: Users,
    value: '72+',
    label: 'Expert Teachers'
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years Average Experience'
  },
  {
    icon: GraduationCap,
    value: '95%',
    label: 'Advanced Degrees'
  },
  {
    icon: Star,
    value: '100%',
    label: 'Qualified Staff'
  }
];

interface FacultyProps {
  onNavigate?: (page: string) => void;
}

export function Faculty({ onNavigate }: FacultyProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleViewOpenings = () => {
    navigate('/openings');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="Faculty"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
              <p className="text-xl opacity-90">Dedicated Educators Shaping Future Leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-[#2A8C4A]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#2A8C4A]">{stat.value}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-[#2A8C4A] mb-16">Our Departments</h2>
    <div className="space-y-16">
      {departments.map((department) => (
        <div key={department.name}>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">{department.name}</h3>
          <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">{department.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {department.teachers.map((teacher) => (
                    <div
                      key={teacher.name}
                      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="aspect-[3/2] relative">
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h4 className="text-xl font-bold">{teacher.name}</h4>
                          <p className="text-sm opacity-90">{teacher.role}</p>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="space-y-2">
                          <p className="text-gray-600">
                            <span className="font-medium">Qualification:</span> {teacher.qualification}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-[#2A8C4A] mb-6">Contact Faculty Office</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#2A8C4A]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:faculty@kvaschool.edu.in" className="text-gray-800 hover:text-[#2A8C4A]">
                      faculty@kvaschool.edu.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#2A8C4A]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href="tel:+917479005656" className="text-gray-800 hover:text-[#2A8C4A]">
                      +91 7479005656
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-[#2A8C4A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Teaching Team</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            We're always looking for passionate educators to join our team. If you're interested in making a difference in students' lives, we'd love to hear from you.
          </p>
          <button
            onClick={handleViewOpenings}
            className="bg-white text-[#2A8C4A] px-8 py-3 rounded-lg font-semibold hover:bg-[#90C95F] hover:text-white transition-colors transform hover:scale-105 duration-200"
          >
            View Openings
          </button>
        </div>
      </section>
    </div>
  );
}