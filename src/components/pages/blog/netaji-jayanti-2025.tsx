import React, { useState } from 'react';
import { Calendar, User, Heart, Share2, Flag, Star, Users, Award } from 'lucide-react';

const highlights = [
  {
    icon: Flag,
    title: 'A Legacy of Courage',
    description: 'Reflecting on Netaji\'s enduring impact on young minds'
  },
  {
    icon: Star,
    title: 'Cultural Heritage',
    description: 'How students embrace and interpret patriotic values today'
  },
  {
    icon: Users,
    title: 'Student Perspectives',
    description: 'Modern interpretations of Netaji\'s philosophy by our youth'
  },
  {
    icon: Award,
    title: 'United in Spirit',
    description: 'Coming together to honor a national hero\'s memory'
  }
];

const schedule = [
  {
    time: '8:00 AM',
    event: 'Dawn of Remembrance',
    venue: 'School Ground',
    description: 'The morning sun witnesses our tribute to greatness'
  },
  {
    time: '9:00 AM',
    event: 'Voices of Tomorrow',
    venue: 'Student Recreation Area',
    description: 'Young minds explore Netaji\'s relevance in modern India'
  },
  {
    time: '10:30 AM',
    event: 'Art of Patriotism',
    venue: 'Student Recreation Area',
    description: 'Creative expressions of national pride through various mediums'
  }
];

export function NetajiJayanti2025() {
  const [likes, setLikes] = useState(156);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Remembering Netaji: A Student\'s Perspective',
      text: 'Reflections on celebrating Netaji\'s legacy at KVA',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="/newspaper/netaji_cover.jpg"
          alt="Netaji Jayanti Reflection"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-3xl text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1.5 bg-[#2A8C4A] rounded-full text-sm font-medium">
                  Blog
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time className="text-sm">January 23, 2025</time>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4"><b>Echoes of Freedom: A Day with Netaji's Legacy</b></h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By KVA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <button 
                onClick={handleLike}
                className={`flex items-center gap-2 transition-colors ${
                  isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span>{likes} Likes</span>
              </button>
              <button 
                onClick={handleShare}
                className="flex items-center gap-2 text-gray-600 hover:text-[#2A8C4A] transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>

            <article className="prose prose-lg max-w-none">
              <p className="lead">
                There's something profoundly moving about walking into school on Netaji Jayanti. The morning air carries a different energy - one of reverence, pride, and contemplation. As we watched the tricolor unfurl against the crisp February sky this morning, We couldn't help but reflect on what Netaji's legacy means to our generation.
              </p>

              <div className="my-8 grid grid-cols-2 gap-4">
                <img
                  src="/newspaper/netaji_form.jpg"
                  alt="Formation"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/newspaper/netaji_dance.jpg"
                  alt="Dance"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <h2><b>Dawn's Early Light</b></h2>
              <p>
                The day began differently than our usual rushed morning assemblies. As the sun peaked over the horizon, casting long shadows across our school grounds, students gathered with an unusual quietness. The flag hoisting wasn't just a ceremony today - it felt like a bridge connecting us to our history, to the countless sacrifices that paved the way for our freedom.
              </p>

              <h2><b>Voices of Tomorrow</b></h2>
              <p>
                In our morning assembly, what struck us most wasn't just the formal speeches, but the passionate discussions that followed. A student's interpretation of Netaji's famous words "Freedom is not given, it is taken" in the context of modern social media and personal privacy sparked an intense debate that continued well into our break time.
              </p>

              <div className="my-8">
                <img
                  src="/newspaper/netaji_cover.jpg"
                  alt="Student Presentations"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  A Beautiful dance by a student.
                </p>
              </div>

              <h2><b>Art Speaks Louder</b></h2>
              <p>
                The art exhibition in the school corridor became an unexpected highlight. Who knew that Netaji's life could inspire such diverse interpretations ? From traditional portraits to abstract representations of freedom, each piece told a story. A display of art using broken chains and butterflies particularly captured the essence of transformation that Netaji's journey represents.
              </p>

              <h2><b>Beyond Textbooks</b></h2>
              <p>
                Our teachers, took a different approach today. Instead of the usual chronological narrative, she encouraged us to examine Netaji's choices through the lens of modern leadership principles. The parallels drawn between his strategic decisions and contemporary global movements led to insights that no textbook could have provided.
              </p>

              <blockquote>
                "The past becomes truly valuable when it helps us navigate our present and shape our future. Netaji's legacy isn't just about what was, but about what could be."
                - KVA
              </blockquote>

              <h2><b>A Personal Connection</b></h2>
              <p>
                Perhaps the most touching moment came during the cultural program when a students, made beautiful formations and performed yoga.
              </p>

              <h2><b>Looking Forward</b></h2>
              <p>
                As the day drew to a close, our vice-principal's words resonated deeply: "Netaji's greatest gift to us wasn't just his role in our freedom struggle, but the example he set of questioning the status quo, of daring to reimagine what's possible." 
              </p>
            </article>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="bg-white p-6 rounded-lg shadow-lg">
                  <highlight.icon className="w-8 h-8 text-[#2A8C4A] mb-4" />
                  <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-[#2A8C4A] mb-6">Moments That Defined The Day</h3>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4">
                        <p className="font-bold text-[#2A8C4A]">{item.time}</p>
                        <p className="text-sm text-gray-500">{item.venue}</p>
                      </div>
                      <div className="md:w-3/4">
                        <h4 className="font-bold mb-2">{item.event}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}