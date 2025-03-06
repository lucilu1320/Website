import React, { useState } from 'react';
import { Calendar, User, BookOpen, Heart, Share2, Trophy, Star, Award, Users } from 'lucide-react';

const toppers = [
  {
    name: 'Arjun Sharma',
    percentage: '98.8%',
    stream: 'Science',
    achievements: ['School Topper', 'District Rank 3'],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1920'
  },
  {
    name: 'Priya Patel',
    percentage: '98.4%',
    stream: 'Commerce',
    achievements: ['Commerce Stream Topper', 'Perfect Score in Accountancy'],
    image: 'https://images.unsplash.com/photo-1629872430082-93d8912beccf?auto=format&fit=crop&q=80&w=1920'
  },
  {
    name: 'Rahul Kumar',
    percentage: '97.6%',
    stream: 'Science',
    achievements: ['Perfect Score in Mathematics', 'JEE Main Qualified'],
    image: 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=1920'
  }
];

const highlights = [
  {
    icon: Trophy,
    title: '100% Pass Rate',
    description: 'All students successfully cleared the examinations'
  },
  {
    icon: Star,
    title: '45% Above 90%',
    description: 'Students scoring above 90% in aggregate'
  },
  {
    icon: Award,
    title: '15 District Toppers',
    description: 'Students ranking in district top 10'
  },
  {
    icon: Users,
    title: '100+ Distinctions',
    description: 'Subject-wise distinctions achieved'
  }
];

export default function CBSEResults2024() {
  const [likes, setLikes] = useState(324);
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
      title: 'KVA Students Excel in CBSE Board Exams 2024',
      text: 'Kharagpur Vision Academy achieves outstanding results in CBSE Board Examinations 2024!',
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
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920"
          alt="CBSE Results Celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <div className="max-w-3xl text-white">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-4 py-1.5 bg-[#2A8C4A] rounded-full text-sm font-medium">
                  News
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time className="text-sm">June 15, 2024</time>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">KVA Students Excel in CBSE Board Exams 2024</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>By Academic Department</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Academic Achievement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Social Sharing */}
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

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-[#2A8C4A]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-[#2A8C4A]" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Main Content */}
            <article className="prose prose-lg max-w-none">
              <p className="lead">
                Kharagpur Vision Academy has once again demonstrated academic excellence with outstanding results in the CBSE Board Examinations 2024. Our students have achieved remarkable success across all streams, setting new benchmarks in academic performance.
              </p>

              <h2>Outstanding Performance</h2>
              <p>
                The school has maintained its tradition of excellence with a 100% pass rate. More than 45% of our students scored above 90% in aggregate, showcasing the high standards of education at KVA. The school has produced 15 district toppers, with several students securing perfect scores in various subjects.
              </p>

              <div className="my-8">
                <img
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1920"
                  alt="Students Celebrating"
                  className="w-full rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Students celebrating their success at the school campus
                </p>
              </div>

              <h2>Stream-wise Performance</h2>
              <p>
                In the Science stream, our students have shown exceptional performance in Physics, Chemistry, and Mathematics, with multiple students scoring perfect 100s. The Commerce stream has seen remarkable results in Accountancy and Business Studies, while the Humanities stream has excelled in Economics and Political Science.
              </p>

              <h2>School Toppers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose my-8">
                {toppers.map((topper) => (
                  <div
                    key={topper.name}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="aspect-square relative">
                      <img
                        src={topper.image}
                        alt={topper.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-lg font-bold">{topper.name}</h3>
                        <p className="text-sm opacity-90">{topper.stream}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-2xl font-bold text-[#2A8C4A] mb-2">{topper.percentage}</div>
                      <ul className="space-y-1">
                        {topper.achievements.map((achievement, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#90C95F] rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Principal's Message</h2>
              <blockquote>
                "These results reflect the dedication of our students, the commitment of our teachers, and the support of our parents. We are proud of our achievers and confident that they will continue to excel in their future endeavors."
                - Mr. Saptarshi Chakraborty, Principal
              </blockquote>

              <h2>Looking Forward</h2>
              <p>
                As we celebrate these achievements, we remain committed to our mission of providing quality education and nurturing well-rounded individuals. The success of our students in the CBSE Board Examinations 2024 reinforces our position as a leading educational institution in the region.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}