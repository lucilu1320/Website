import React from 'react';
import { Building, BookOpen, Trophy, Bus, ChevronRight } from 'lucide-react';

const facilities = [
  {
    id: 'infrastructure',
    icon: Building,
    title: 'Infrastructure',
    description: 'State-of-the-art facilities designed for modern education',
    topImages: [
      {
        url: '/infrastructure/playful.jpg',
        caption: 'Front Side'
      },
      {
        url: '/infrastructure/spacious.jpg',
        caption: 'Spacious Ground'
      },
      {
        url: '/infrastructure/art.jpg',
        caption: 'Beautiful Wall Art'
      },
      {
        url: '/infrastructure/rec.jpg',
        caption: 'Student Recreation Area'
      },
      {
        url: '/infrastructure/assemble.jpg',
        caption: 'Assembly Ground'
      },
      {
        url: '/infrastructure/par.jpg',
        caption: 'Slides for children\'s'
      },
      {
        url: '/infrastructure/flo.jpg',
        caption: 'Green & Blooming Campus'
      },
      {
        url: 'common/4.jpg',
        caption: 'Classes'
      }
    ],
    centerImage: {
      url: '/infrastructure/sudden.jpg',
      caption: 'Modern Academic Block'
    },
    features: [
      'Modern air-conditioned classrooms(under development',
      'Interactive smart boards in every classroom',
      'Spacious corridors and common areas',
      'Dedicated activity rooms',
      'Hygienic cafeteria',
      'Medical room for emergency care'
    ]
  },
  {
    id: 'labs-libraries',
    icon: BookOpen,
    title: 'Labs & Libraries',
    description: 'Well-equipped laboratories and extensive library resources',
    topImages: [
      {
        url: '/labs-and-libs/chem.jpg',
        caption: 'Chemistry Lab'
      },
      {
        url: '/labs-and-libs/chem_2.jpg',
        caption: 'Chemistry Lab'
      },
      {
        url: '/labs-and-libs/bio.jpg',
        caption: 'Biology Lab'
      },
      {
        url: '/labs-and-libs/bio_2.jpg',
        caption: 'Biology Lab'
      },
      {
        url: '/labs-and-libs/phy.jpg',
        caption: 'Physics Lab'
      },
      {
        url: '/labs-and-libs/phy_2.jpg',
        caption: 'Physics Lab'
      },
      {
        url: '/labs-and-libs/sasamp.jpg',
        caption: 'Library'
      },
      {
        url: '/labs-and-libs/lib_stud.jpg',
        caption: 'Library'
      },
      {
        url: '/labs-and-libs/lib_ta.jpg',
        caption: 'Library'
      },
      
      {
        url: '/labs-and-libs/group_lib.jpg',
        caption: 'Library'
      }
    ],
    centerImage: {
      url: '/labs-and-libs/comp.jpg',
      caption: 'Computer Lab'
    },
    features: [
      'Fully equipped labs',
      'Digital library with online resources',
      'Reading rooms with extensive collection of books',
      'Language lab for communication skills',
      'Robotics and innovation lab',
      'Regular workshops and practical sessions'
    ]
  },
  {
    id: 'sports',
    icon: Trophy,
    title: 'Sports Facilities',
    description: 'Comprehensive sports infrastructure for physical development',
    topImages: [
      {
        url: '/sports-facilities/volley.jpg',
        caption: 'Volley Ball Ground'
      },
      {
        url: '/sports-facilities/train.jpg',
        caption: 'Basketball Ground'
      },
      {
        url: '/sports-facilities/bass.jpg',
        caption: 'Basketball Ground'
      },
      {
        url: '/sports-facilities/bas_2.jpg',
        caption: 'Basketball Ground'
      }
    ],
    centerImage: {
      url: '/sports-facilities/grp.jpg',
      caption: 'Basketball Court'
    },
    features: [
      'Large playground for outdoor sports',
      'Indoor sports complex',
      'Basketball and volleyball courts',
      'Table tennis facility',
      'Professional sports coaching',
      'Regular sports events and competitions'
    ]
  },
  {
    id: 'transport',
    icon: Bus,
    title: 'Transport',
    description: 'Safe and reliable transportation service',
    topImages: [
      {
        url: '/transport/bus.jpg',
        caption: 'School Buses'
      },
      {
        url: '/transport/bus_1.jpg',
        caption: 'Professional Drivers'
      }
    ],
    centerImage: {
      url: '/transport/bus_2.jpg',
      caption: 'School Bus Fleet'
    },
    features: [
      'Fleet of modern buses',
      'Affordable Fee',
      'Experienced and trained drivers',
      'Regular maintenance and safety checks',
      'Convenient route planning',
      'Safety Regulations'
    ]
  }
];

export function Facilities() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="common/common.jpg"
          alt="KVA Facilities"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Facilities</h1>
              <p className="text-xl opacity-90">World-class infrastructure for holistic development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Menu */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {facilities.map((facility) => (
              <a
                key={facility.id}
                href={`#${facility.id}`}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <facility.icon className="w-8 h-8 text-[#2A8C4A]" />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-[#2A8C4A] transition-colors">
                  {facility.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Sections */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          {facilities.map((facility, index) => (
            <section
              key={facility.id}
              id={facility.id}
              className={`mb-32 ${index % 2 === 0 ? '' : 'bg-gray-50 py-20 -mx-4 px-4'}`}
            >
              <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <facility.icon className="w-12 h-12 text-[#2A8C4A] mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-[#2A8C4A] mb-4">{facility.title}</h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">{facility.description}</p>
                </div>

                {/* Top Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {facility.topImages.map((image, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[16/9] rounded-lg overflow-hidden group"
                    >
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                        <p className="text-lg font-medium">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Center Image */}
                <div className="max-w-4xl mx-auto mb-12">
                  <div className="relative aspect-[21/9] rounded-lg overflow-hidden group">
                    <img
                      src={facility.centerImage.url}
                      alt={facility.centerImage.caption}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-lg font-medium">{facility.centerImage.caption}</p>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="max-w-3xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {facility.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 group"
                      >
                        <ChevronRight className="w-5 h-5 text-[#90C95F] transform transition-transform group-hover:translate-x-1" />
                        <span className="text-gray-700 group-hover:text-[#2A8C4A] transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-[#2A8C4A] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Experience Our Facilities</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Visit our campus to explore our world-class facilities and see how we provide the best environment for learning and growth.
          </p>
        </div>
      </section>
    </div>
  );
}