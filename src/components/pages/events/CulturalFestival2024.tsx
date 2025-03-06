import React from 'react';
import { Calendar, MapPin, Clock, Music, Palette, Theater, Star, Ticket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const schedule = [
  {
    time: '9:00 AM - 10:30 AM',
    event: 'Inauguration Ceremony',
    venue: 'Main Auditorium',
    description: 'Opening ceremony with traditional lamp lighting and cultural performances'
  },
  {
    time: '11:00 AM - 1:00 PM',
    event: 'Classical Dance Competition',
    venue: 'Main Stage',
    description: 'Showcasing various Indian classical dance forms'
  },
  {
    time: '2:00 PM - 4:00 PM',
    event: 'Music Competition',
    venue: 'Indoor Stadium',
    description: 'Solo and group performances in classical and contemporary music'
  },
  {
    time: '4:30 PM - 6:30 PM',
    event: 'Drama Performances',
    venue: 'Open Air Theatre',
    description: 'Theatrical presentations in multiple languages'
  }
];

const highlights = [
  {
    icon: Music,
    title: 'Musical Extravaganza',
    description: 'Live performances featuring classical and contemporary music'
  },
  {
    icon: Palette,
    title: 'Art Exhibition',
    description: 'Display of student artwork and installations'
  },
  {
    icon: Theater,
    title: 'Theatrical Shows',
    description: 'Drama performances showcasing diverse cultural themes'
  },
  {
    icon: Star,
    title: 'Talent Showcase',
    description: 'Platform for students to display their artistic abilities'
  }
];

export function CulturalFestival2024() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/apply');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920"
          alt="Cultural Festival"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-3xl text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1.5 bg-[#2A8C4A] rounded-full text-sm font-medium">
                  Event
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time className="text-sm">July 5-6, 2024</time>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cultural Festival: Expressions 2024</h1>
              <p className="text-xl opacity-90">A celebration of art, music, dance, and creativity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Event Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Calendar className="w-8 h-8 text-[#2A8C4A] mb-4" />
                <h3 className="text-lg font-semibold mb-2">Date</h3>
                <p className="text-gray-600">July 5-6, 2024</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <MapPin className="w-8 h-8 text-[#2A8C4A] mb-4" />
                <h3 className="text-lg font-semibold mb-2">Venue</h3>
                <p className="text-gray-600">KVA Campus, Main Auditorium</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Clock className="w-8 h-8 text-[#2A8C4A] mb-4" />
                <h3 className="text-lg font-semibold mb-2">Time</h3>
                <p className="text-gray-600">9:00 AM - 7:00 PM</p>
              </div>
            </div>

            {/* Event Description */}
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold text-[#2A8C4A] mb-6">About the Event</h2>
              <p className="text-gray-600 leading-relaxed">
                Join us for Expressions 2024, KVA's annual cultural festival celebrating the diverse talents of our students. This two-day extravaganza features performances in music, dance, drama, and visual arts, showcasing the rich cultural heritage and creative expressions of our young artists.
              </p>
            </div>

            {/* Event Highlights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#2A8C4A] mb-8">Event Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {highlights.map((highlight) => (
                  <div key={highlight.title} className="bg-white p-6 rounded-lg shadow-lg">
                    <highlight.icon className="w-10 h-10 text-[#2A8C4A] mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#2A8C4A] mb-8">Event Schedule</h2>
              <div className="space-y-6">
                {schedule.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-1/4">
                        <p className="text-[#2A8C4A] font-semibold">{item.time}</p>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-lg font-semibold mb-2">{item.event}</h3>
                        <p className="text-gray-500 text-sm mb-2">Venue: {item.venue}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration CTA */}
            <div className="bg-[#2A8C4A] rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Register Now</h2>
              <p className="text-white/90 mb-6">
                Don't miss out on this spectacular celebration of art and culture!
              </p>
              <button
                onClick={handleRegister}
                className="inline-flex items-center gap-2 bg-white text-[#2A8C4A] px-8 py-3 rounded-lg font-semibold hover:bg-[#90C95F] hover:text-white transition-colors"
              >
                <Ticket className="w-5 h-5" />
                Register for Event
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}