import React, { useState } from 'react';
import { Image as ImageIcon, ChevronLeft, ChevronRight, X, Play } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  // Academic Activities
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=1920",
    category: "Academic",
    title: "Science Exhibition",
    description: "Students showcasing innovative science projects"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1920",
    category: "Academic",
    title: "Library Session",
    description: "Students engaged in research and reading"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=1920",
    category: "Academic",
    title: "Computer Lab",
    description: "Advanced computer education facilities"
  },

  // Sports Activities
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1920",
    category: "Sports",
    title: "Annual Sports Meet",
    description: "Students participating in track events"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&q=80&w=1920",
    category: "Sports",
    title: "Basketball Tournament",
    description: "Inter-house basketball competition"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1526238573732-37979010a0ff?auto=format&fit=crop&q=80&w=1920",
    category: "Sports",
    title: "Cricket Match",
    description: "School cricket team in action"
  },

  // Cultural Events
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920",
    category: "Cultural",
    title: "Annual Day Celebration",
    description: "Students performing cultural dance"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&q=80&w=1920",
    category: "Cultural",
    title: "Music Performance",
    description: "School band performance"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=1920",
    category: "Cultural",
    title: "Art Exhibition",
    description: "Student artwork display"
  },

  // Infrastructure
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1920",
    category: "Infrastructure",
    title: "School Building",
    description: "Modern school infrastructure"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1920",
    category: "Infrastructure",
    title: "Library",
    description: "Well-equipped library facility"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1920",
    category: "Infrastructure",
    title: "Smart Classroom",
    description: "Technology-enabled learning spaces"
  }
];

const categories = ["All", "Academic", "Sports", "Cultural", "Infrastructure"];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = selectedCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setLightboxIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (lightboxIndex - 1 + filteredImages.length) % filteredImages.length
      : (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1920"
          alt="Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2A8C4A]/90 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
              <p className="text-xl opacity-90">Capturing Moments, Creating Memories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#2A8C4A] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <ImageIcon className="w-5 h-5 text-white/60" />
                      <span className="text-white/60 text-sm">{image.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl mx-auto px-4">
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[80vh] mx-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-lg">
                <h3 className="text-white font-bold text-xl mb-2">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}