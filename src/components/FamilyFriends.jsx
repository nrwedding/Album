import React from 'react';
import { Users, Heart, ArrowRight } from 'lucide-react';
import { weddingInfo } from '../data/gallery';

export default function FamilyFriends() {
  return (
    <section
      id="family-friends"
      className="py-24 sm:py-32 bg-ivory text-royal-blue relative overflow-hidden"
      aria-labelledby="family-heading"
    >
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-dusty-rose-600 text-xs tracking-luxury uppercase font-semibold mb-4">
          <Users className="w-4 h-4 text-champagne-gold" />
          <span>Our Loved Ones</span>
        </div>

        {/* Section Heading */}
        <h2
          id="family-heading"
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-royal-blue leading-[1.15] font-normal tracking-tight"
        >
          The People Who Made <br />
          <span className="italic font-light text-dusty-rose-700">It Special.</span>
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <span className="w-16 h-px bg-champagne-gold/60" />
          <Heart className="w-3.5 h-3.5 text-dusty-rose fill-dusty-rose" />
          <span className="w-16 h-px bg-champagne-gold/60" />
        </div>

        {/* Main Text Content */}
        <p className="font-serif italic text-2xl sm:text-3xl text-royal-blue/90 max-w-2xl mx-auto leading-relaxed font-light">
          "Our celebration was made even more beautiful by the love, laughter, and blessings of our family and friends."
        </p>

        <p className="mt-6 text-sm sm:text-base text-royal-blue/70 max-w-xl mx-auto font-light leading-relaxed">
          From the warmth of our elders' prayers to the joy of our friends dancing together, every frame captured at our wedding tells the story of the people who shaped our lives.
        </p>

        {/* Editorial Feature Box */}
        <div className="mt-12 p-8 sm:p-12 rounded-2xl bg-white/70 backdrop-blur-sm border border-champagne-gold/30 shadow-lg max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <span className="text-[10px] tracking-luxury uppercase text-dusty-rose-700 font-semibold block mb-1">
                Complete Guest Collection
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-royal-blue font-normal">
                Explore the Full Celebration
              </h3>
              <p className="text-xs sm:text-sm text-royal-blue/70 mt-1 font-light max-w-md">
                Every family photo, friend group portrait, and candid reception celebration is archived in full original resolution in our dedicated cloud folder.
              </p>
            </div>

            <a
              href="#downloads"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-royal-blue text-ivory rounded-full text-xs font-semibold tracking-luxury uppercase shadow-md hover:bg-champagne-gold hover:text-royal-blue transition-all duration-300 whitespace-nowrap"
            >
              <span>View Full Album</span>
              <ArrowRight className="w-4 h-4 text-dusty-rose" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
