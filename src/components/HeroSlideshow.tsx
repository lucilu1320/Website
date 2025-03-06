import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'slide-pictures/modern.jpg',
    title: 'Modern Campus Facilities'
  },
  {
    image: 'slide-pictures/laboratories.jpg',
    title: 'State-of-the-art Laboratories'
  },
  {
    image: 'slide-pictures/interactive-learning.jpg',
    title: 'Interactive Learning'
  },
  {
    image: 'slide-pictures/sports-facilities.jpg',
    title: 'Sports Facilities'
  },
  {
    image: 'slide-pictures/cultural-activities.jpg',
    title: 'Cultural Activities'
  },
  {
    image: '/slide-pictures/kinder.jpg',
    title: 'Kindergarten Area'
  },
  {
    image: '/slide-pictures/digi.jpg',
    title: 'Digital Learning Hub'
  },
  {
    image: '/slide-pictures/buses.jpg',
    title: 'School Buses for Every Student'
  },
  {
    image: '/slide-pictures/library.jpg',
    title: 'Library & Resource Center'
  },
  {
    image: '/slide-pictures/recreation.jpg',
    title: 'Student Recreation Area'
  },
  {
    image: '/slide-pictures/collab.jpg',
    title: 'Collaborative learning'
  },
  {
    image: '/slide-pictures/ailabs.jpg',
    title: 'AI and Robotics Lab'
  },
  {
    image: '/slide-pictures/yoga.jpg',
    title: 'Stretch, Breathe, Smile'
  },
  {
    image: '/slide-pictures/pro.jpg',
    title: 'Practical & Project-based Curriculum'
  },
  {
    image: '/slide-pictures/clicks.jpg',
    title: 'Moments Captured'
  }
];

export function HeroSlideshow() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full h-screen mt-0">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={!isMobile}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        watchSlidesProgress
        speed={800}
        grabCursor={true}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        breakpoints={{
          320: {
            allowTouchMove: true
          },
          768: {
            allowTouchMove: false
          }
        }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-[2000ms] hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="text-center text-white transform transition-all duration-500 hover:scale-105">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 transition-all duration-300 ease-in-out">
                    {slide.title}
                  </h2>
                  <div className="w-20 md:w-32 h-1 bg-[#90C95F] mx-auto transition-all duration-300" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}