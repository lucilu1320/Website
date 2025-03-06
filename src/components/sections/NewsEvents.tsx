import React, { useEffect, useRef, useState } from 'react';
import { Calendar, ArrowRight, Newspaper, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const news = [
  {
    date: '2024-12-06',
    title: 'Annual Function 2024: A Nostalgic Evening at KVA',
    excerpt: 'There is something undeniably magical about stepping back...',
    image: 'newspaper/annual_cove.png',
    category: 'Blog',
    link: '/blog/Blog'
  },
  {
    date: '2025-01-23',
    title: 'Netaji Subhas Chandra Bose Jayanti 2025',
    excerpt: 'Celebration of Netaji Subhas Chandra Bose Jayanti 2025 at KVA with flag hoisting, cultural programs, and student presentations honoring the great freedom fighter.',
    image: 'newspaper/netaji.jpg',
    category: 'Blog',
    link: '/blog/netaji-jayanti-2025'
  }
  // {
  //   date: '2024-07-05',
  //   title: 'Cultural Festival: Expressions 2024',
  //   excerpt: 'Mark your calendars for Expressions 2024, our annual cultural festival celebrating art, music, dance, and drama. Experience the diverse talents of our students in this two-day extravaganza.',
  //   image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920',
  //   category: 'Event',
  //   link: '/events/cultural-festival-2024'
  // }
];

export function NewsEvents() {
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const handleReadMore = (link: string) => {
    if (link !== '#') {
      navigate(link);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="w-8 h-8 text-[#2A8C4A]" />
            <h2 className="text-3xl font-bold text-[#2A8C4A]">School Newspaper</h2>
          </div>
          <p className="text-black font-bold text-lg">
            Stay updated with the latest happenings and upcoming events at KVA
          </p>
        </div>

        {/* Featured Video Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Featured Label */}
            <div className="absolute -top-4 left-4 z-10">
              <div className="flex items-center gap-2 bg-[#2A8C4A] text-white px-4 py-2 rounded-full shadow-lg">
                <Play className="w-4 h-4" />
                <span className="font-medium text-sm">Featured Video</span>
              </div>
            </div>
            
            {/* Video Container */}
            <div className="relative group">
              {/* Decorative Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A] to-[#90C95F] rounded-lg p-1">
                <div className="absolute inset-0 bg-gray-50 rounded-lg"></div>
              </div>
              
              {/* Video Player */}
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 group-hover:scale-[1.01]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/YsjSsZCrfr0?si=uLaYiJFghmVx5zhL"
                  title="Kharagpur Vision Academy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* News Carousel */}
        <div 
          className="max-w-6xl mx-auto relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Swiper
            ref={swiperRef}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            grabCursor={true}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} w-3 h-3 bg-[#2A8C4A] opacity-50 transition-all duration-300 hover:opacity-100"></span>`;
              },
            }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            className="w-full"
          >
            {news.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                      <div className="relative h-72 lg:h-[500px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                      </div>
                    </div>
                    <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-1.5 bg-[#2A8C4A]/10 text-[#2A8C4A] rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <time className="text-sm">{new Date(item.date).toLocaleDateString()}</time>
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">{item.title}</h3>
                      <p className="text-gray-600 mb-8 text-lg leading-relaxed">{item.excerpt}</p>
                      <button 
                        onClick={() => handleReadMore(item.link)}
                        className="inline-flex items-center gap-2 text-[#2A8C4A] font-medium hover:gap-3 transition-all group text-lg"
                      >
                        Read More
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-white z-10">
            <ChevronLeft className="w-6 h-6 text-[#2A8C4A]" />
          </button>
          <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-white z-10">
            <ChevronRight className="w-6 h-6 text-[#2A8C4A]" />
          </button>
        </div>
      </div>
    </section>
  );
}