import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const socialLinks = [
  { 
    icon: Facebook, 
    href: 'https://www.facebook.com/Vision.Academy786',
    color: '#1877F2',
    label: 'Follow us on Facebook'
  },
  { 
    icon: Instagram, 
    href: 'https://www.instagram.com/kharagpurvisionacademy?igsh=MTIyZmd3bmE0dGJvNg%3D%3D',
    color: '#E4405F',
    label: 'Follow us on Instagram'
  },
  { 
    icon: Youtube, 
    href: 'https://youtube.com/@kharagpurvisionacademy786',
    color: '#FF0000',
    label: 'Subscribe to our YouTube'
  },
  { 
    icon: MessageCircle, 
    href: 'https://wa.me/917063375588',
    color: '#25D366',
    label: 'Chat on WhatsApp'
  },
];

const quickLinks = [
  { name: 'About Us', href: 'overview' },
  { name: 'Admissions', href: 'admissions-overview' },
  { name: 'Academics', href: 'curriculum' },
  { name: 'Infrastructure', href: 'facilities' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Contact', href: 'contact' },
  { name: 'Mandatory Disclosure', href: 'mandatory-disclosure' }
];

export function Footer({ onNavigate }: FooterProps) {
  const navigate = useNavigate();

  const handleNavigate = (href: string) => {
    navigate(`/${href}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4">
          {/* School Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczNa8FOqklGd7fG0jwp-Ett4tnmO3FyimEfT7pg_00-7JGo_oCcsr0dK2z4ooZ6T1hd8geZ-zCm2iEMb-QlWk_0JtagmtlfG6xUncdVKCfY_JnsIAJY=w2400" 
                alt="KVA Logo" 
                className="w-12 h-12 object-contain transform hover:scale-110 transition-all duration-300"
              />
              <div>
                <h3 className="font-bold text-base sm:text-lg text-[#2A8C4A]">Kharagpur Vision Academy</h3>
                <p className="text-xs sm:text-sm text-gray-600">Excellence in Education</p>
              </div>
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Empowering young minds with quality education, strong values, and the skills needed for a successful future.
            </p>
            {/* Social Links */}
            <div className="pt-4">
              <p className="font-medium text-gray-800 mb-3 text-sm">Connect With Us</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label={social.label}
                  >
                    <div className="transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                      <social.icon 
                        className="w-5 h-5 sm:w-6 sm:h-6" 
                        style={{ color: social.color }}
                      />
                    </div>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h3 className="font-bold text-lg text-[#2A8C4A] mb-6">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={`/${link.href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(link.href);
                  }}
                  className="text-gray-600 hover:text-[#2A8C4A] transition-all duration-300 flex items-center gap-2 group text-left w-full"
                >
                  <span className="w-1.5 h-1.5 bg-[#90C95F] rounded-full transform transition-all duration-300 group-hover:scale-150 group-hover:rotate-180 flex-shrink-0" />
                  <span className="transform transition-all duration-300 group-hover:translate-x-1">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg text-[#2A8C4A] mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <a 
                  href="https://maps.app.goo.gl/jrTNDXXYEgQTHdSb8?g_st=com.google.maps.preview.copy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2A8C4A] hover:text-[#238040] transition-all duration-300 transform hover:scale-110"
                >
                  <MapPin className="w-5 h-5 mt-1" />
                </a>
                <address className="text-sm text-gray-600 not-italic">
                  Mumbai - Kolkata Highway<br />
                  Sadatpur, Kharagpur<br />
                  721301, West Bengal, India
                </address>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#2A8C4A] mt-1 transform hover:scale-110 transition-all duration-300" />
                <div className="space-y-1">
                  <a href="tel:+917479005656" className="block text-sm text-gray-600 hover:text-[#2A8C4A] transition-all duration-300 transform hover:translate-x-1">
                    +91 7479005656
                  </a>
                  <a href="tel:+919083213786" className="block text-sm text-gray-600 hover:text-[#2A8C4A] transition-all duration-300 transform hover:translate-x-1">
                    +91 9474898844
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#2A8C4A] transform hover:scale-110 transition-all duration-300" />
                <a href="mailto:admissions@kvaschool.edu.in" className="text-sm text-gray-600 hover:text-[#2A8C4A] transition-all duration-300 transform hover:translate-x-1">
                  admissions@kvaschool.edu.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#2A8C4A] transform hover:scale-110 transition-all duration-300" />
                <span className="text-sm text-gray-600">
                  Mon - Sat: 8:00 AM - 2:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 py-4 px-4">
          <p className="text-center text-gray-600 text-xs sm:text-sm">
            © {new Date().getFullYear()} Kharagpur Vision Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}