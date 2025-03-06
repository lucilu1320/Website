import React, { useState } from 'react';
import { Calendar, User, BookOpen, Heart, Share2 } from 'lucide-react';

export function Blog() {
  const [likes, setLikes] = useState(245);
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
      title: 'A Nostalgic Evening at KVA',
      text: 'An ex-student\'s reflections on visiting their second home!',
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
          src="/newspaper/annual.jpg"
          alt="Annual Function 2024"
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
                  <time className="text-sm">December 6, 2024</time>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4"><b>A Nostalgic Evening: Kharagpur Vision Academy Annual Function 2024</b></h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By Farhan Mallik</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>2023-2024 Batch</span>
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
                There's something undeniably magical about stepping back into a place that once shaped your dreams, values, and ambitions. For me, Kharagpur Vision Academy is not just a school; it's a treasure chest of memories that continue to shine, no matter how many years pass. This January, I had the immense privilege of attending the 2024 Annual Function as an ex-student, and it was nothing short of an emotional rollercoaster.
              </p>

              <div className="my-8 grid grid-cols-2 gap-4">
                <img
                  src="/newspaper/dance.jpg"
                  alt="Dance Performance"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/newspaper/music.jpg"
                  alt="Musical Performance"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <h2><b>First Steps Back</b></h2>
              <p>
                Walking through the familiar gates, I was greeted by the cheerful chaos that defines school life: students running around in colorful costumes, teachers guiding them with a mix of patience and authority, and the faint aroma of snacks wafting from the canteen. It was as if time had paused, and I was once again the carefree student I used to be.
              </p>

              <h2><b>The Grand Celebration Begins</b></h2>
              <p>
                The evening commenced with our school's signature blend of tradition and innovation. The auditorium, adorned with vibrant decorations, buzzed with excitement as parents, teachers, and alumni gathered to witness the spectacular showcase of young talent. The lighting ceremony, performed by our respected Principal, marked the beginning of what would be an unforgettable evening.
              </p>

              <div className="my-8">
                <img
                  src="/newspaper/cultural.jpg"
                  alt="Art Exhibition"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Students presenting their cultural performance
                </p>
              </div>

              <h2><b>A Symphony of Talents</b></h2>
              <p>
                From classical dance performances to contemporary music, the students' presentations reflected KVA's commitment to nurturing diverse talents. The junior section's rendition of regional folk dances brought smiles to everyone's faces, while the senior students' theatrical performance showcased their dramatic prowess.
              </p>

              <h2><b>Echoes of Excellence</b></h2>
              <p>
                The academic achievements ceremony was a proud moment for everyone present. Watching young minds being recognized for their hard work reminded me of my own days of anticipation and triumph. The school's continued dedication to academic excellence while fostering creativity and innovation was evident in every achievement celebrated.
              </p>

              <div className="my-8 grid grid-cols-3 gap-4">
                <img
                  src="/newspaper/exp.jpg"
                  alt="Group Performance"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/newspaper/cele.jpg"
                  alt="Award Ceremony"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/newspaper/group.jpg"
                  alt="Celebration"
                  className="rounded-lg shadow-lg"
                />
              </div>

              <h2><b>Timeless Traditions</b></h2>
              <p>
                The cultural performances were a beautiful reminder of our school's commitment to preserving cultural heritage while embracing modernity. The fusion dance performance by Class XII students particularly stood out, seamlessly blending classical Indian dance forms with contemporary movements.
              </p>

              <blockquote>
                "Today's performances reflect not just talent, but the values and spirit that KVA has always stood for - excellence, creativity, and unwavering dedication."
                - Mr. Saptarshi Chakraborty, Principal
              </blockquote>

              <h2><b>A Journey Down Memory Lane</b></h2>
              <p>
                As the evening drew to a close, I found myself overwhelmed with nostalgia. The familiar corridors, the stage where I once performed, and the encouraging smiles of teachers who still remembered me - everything came together to create a beautiful reminder of why KVA will always be more than just a school. It's a place where dreams take flight and memories last a lifetime.
              </p>
            </article>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-4">
                <img
                  src="/newspaper/farhan.jpg"
                  alt="Farhan Mallik"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">Farhan Mallik</h3>
                  <p className="text-gray-600">Class of 2023 | Ex-Student</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Former KVAian and passionate about capturing moments through words and memories.
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