import React, { useState } from 'react';
import { Sparkles, Eye, Filter } from 'lucide-react';
import { galleryPhotos } from '../data/gallery';

export default function FeaturedGallery({ onPhotoClick }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Moments' },
    { id: 'couple', label: 'The Couple' },
    { id: 'bride', label: 'The Bride' },
    { id: 'groom', label: 'The Groom' },
  ];

  const filteredPhotos = activeFilter === 'all'
    ? galleryPhotos
    : galleryPhotos.filter(p => p.category === activeFilter);

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-[#eee8df] text-royal-blue relative"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-dusty-rose-600 text-xs tracking-luxury uppercase font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
              <span>The Curated Collection</span>
            </div>
            <h2
              id="gallery-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-royal-blue leading-[1.1] font-normal tracking-tight"
            >
              Our Beautiful <span className="italic text-dusty-rose-700">Moments.</span>
            </h2>
          </div>

          <p className="font-serif italic text-lg sm:text-xl text-royal-blue/70 max-w-md font-light">
            Every glance, every smile, frozen in time. Click any photograph to immerse in full-screen.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-between border-y border-royal-blue/15 py-4 mb-10 overflow-x-auto no-scrollbar gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[10px] tracking-luxury uppercase text-royal-blue/50 hidden sm:inline mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {filters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs tracking-luxury uppercase font-medium transition-all duration-300 whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-royal-blue text-ivory shadow-md scale-105'
                    : 'bg-ivory/60 text-royal-blue/80 hover:bg-ivory hover:text-royal-blue'
                }`}
                aria-pressed={activeFilter === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-[11px] tracking-luxury uppercase text-royal-blue/60 font-medium whitespace-nowrap pl-4">
            {filteredPhotos.length} {filteredPhotos.length === 1 ? 'Photograph' : 'Photographs'}
          </div>
        </div>

        {/* Masonry / Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPhotos.map((photo, index) => {
            // Find global index for lightbox navigation
            const globalIndex = galleryPhotos.findIndex(p => p.id === photo.id);
            
            return (
              <article
                key={photo.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg bg-ivory shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1.5"
                onClick={() => onPhotoClick(globalIndex)}
              >
                {/* Image Container with Editorial Aspect Ratio */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-ivory-300">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Editorial Hover Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-950/85 via-royal-blue-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-ivory">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[9px] tracking-luxury uppercase text-champagne-gold font-medium block mb-1">
                        {photo.category.toUpperCase()}
                      </span>
                      <h3 className="font-serif text-2xl text-ivory font-normal leading-snug">
                        {photo.title}
                      </h3>
                      <p className="text-xs text-ivory/80 font-light mt-1 italic">
                        {photo.subtitle}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-[10px] tracking-luxury uppercase text-dusty-rose-300 font-semibold">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Full Screen</span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent for Featured Photos */}
                  {photo.featured && (
                    <div className="absolute top-3 left-3 bg-royal-blue/70 backdrop-blur-sm text-champagne-gold px-2.5 py-1 rounded text-[8px] tracking-luxury uppercase font-semibold border border-champagne-gold/30">
                      Featured
                    </div>
                  )}
                </div>

                {/* Sub-Card Label */}
                <div className="p-4 bg-ivory flex items-center justify-between border-t border-royal-blue/5">
                  <div>
                    <h4 className="font-serif text-lg text-royal-blue font-medium tracking-tight">
                      {photo.title}
                    </h4>
                    <p className="text-[10px] tracking-luxury uppercase text-royal-blue/60 mt-0.5">
                      {photo.category === 'bride' ? 'The Bride' : photo.category === 'groom' ? 'The Groom' : 'Nizar & Rinsha'}
                    </p>
                  </div>
                  <span className="text-royal-blue/30 group-hover:text-dusty-rose transition-colors duration-300 text-sm">
                    ✦
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Gallery Guidance Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-xs tracking-luxury uppercase text-royal-blue/60 font-medium">
            Curated selection of our favorite wedding moments. For the complete high-resolution photo collection, please visit the Google Drive archive below.
          </p>
        </div>

      </div>
    </section>
  );
}
