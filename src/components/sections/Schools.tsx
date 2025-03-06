import React from 'react';
import { MapPin, Phone, Mail, Clock, Building } from 'lucide-react';

const campusDetails = {
  name: 'Kharagpur Campus',
  location: 'Mumbai - Kolkata Highway, Sadatpur, Kharagpur',
  image: 'school-section/school.jpg',
  mapsUrl: 'https://maps.app.goo.gl/jrTNDXXYEgQTHdSb8?g_st=com.google.maps.preview.copy',
  features: [
    'State-of-the-art Classrooms',
    'Modern Science Laboratories',
    'Computer Lab with Latest Technology',
    'Well-equipped Library',
    'Indoor & Outdoor Sports Facilities',
    'Spacious Playground',
    'Activity Rooms',
    'Audio-Visual Room'
  ],
  contact: {
    phones: ['+91 7479005656', '+91 9083213786', '+91 97751017860'],
    email: 'admissions@kvaschool.edu.in',
    hours: 'Monday - Saturday: 8:00 AM - 2:00 PM'
  }
};

export function Schools() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building className="w-8 h-8 text-[#2A8C4A]" />
            <h2 className="text-3xl font-bold text-[#2A8C4A]">OUR CAMPUS</h2>
          </div>
          <p className="text-black font-bold text-lg max-w-2xl mx-auto">
            Experience excellence in education at our state-of-the-art campus
          </p>
        </div>
        
        {/* Rest of the component remains unchanged */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl">
            {/* Image Section */}
            <div className="aspect-[21/9] relative group">
              <img
                src={campusDetails.image}
                alt={campusDetails.name}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-3xl mx-auto text-white">
                  <h3 className="text-3xl font-bold mb-3">{campusDetails.name}</h3>
                  <div className="flex items-center gap-2 text-lg">
                    <MapPin className="w-5 h-5" />
                    <p>{campusDetails.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-12">
              <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                {/* Features */}
                <div className="space-y-8">
                  <h4 className="text-xl font-semibold text-[#2A8C4A] flex items-center gap-2">
                    <span className="w-2 h-8 bg-[#2A8C4A] rounded-full"></span>
                    Campus Features
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-6">
                    {campusDetails.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-[#90C95F] rounded-full transform transition-transform duration-300 group-hover:scale-150" />
                        <span className="text-gray-700 group-hover:text-[#2A8C4A] transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <h4 className="text-xl font-semibold text-[#2A8C4A] flex items-center gap-2">
                    <span className="w-2 h-8 bg-[#2A8C4A] rounded-full"></span>
                    Contact Information
                  </h4>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                        <Phone className="w-6 h-6 text-[#2A8C4A]" />
                      </div>
                      <div className="space-y-2">
                        {campusDetails.contact.phones.map((phone) => (
                          <a 
                            key={phone}
                            href={`tel:${phone}`}
                            className="block text-gray-700 hover:text-[#2A8C4A] transition-colors"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                        <Mail className="w-6 h-6 text-[#2A8C4A]" />
                      </div>
                      <a 
                        href={`mailto:${campusDetails.contact.email}`}
                        className="text-gray-700 hover:text-[#2A8C4A] transition-colors"
                      >
                        {campusDetails.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                        <Clock className="w-6 h-6 text-[#2A8C4A]" />
                      </div>
                      <span className="text-gray-700">
                        {campusDetails.contact.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-16 text-center">
                <a
                  href={campusDetails.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#2A8C4A] text-white px-10 py-4 rounded-lg hover:bg-[#238040] transition-all transform hover:scale-105 duration-300"
                >
                  <span className="text-lg font-medium">Get Directions</span>
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}