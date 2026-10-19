import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { weddingInfo } from '../data/gallery';

export default function Welcome() {
  return (
    <section
      id="story"
      className="relative py-24 sm:py-32 bg-ivory text-royal-blue overflow-hidden"
      aria-labelledby="welcome-heading"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dusty-rose/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo Framing */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Offset Border Frame */}
              <div className="absolute -inset-4 border border-champagne-gold/40 rounded-t-[140px] rounded-b-lg -z-0 transform -rotate-1 hidden sm:block" />
              
              {/* Photo Card with Arched Top */}
              <div className="relative z-10 overflow-hidden rounded-t-[130px] rounded-b-lg shadow-2xl bg-ivory-300">
                <img
                  src={weddingInfo.welcomePhoto}
                  alt="Nizar and Rinsha gazing affectionately at each other"
                  loading="lazy"
                  className="w-full h-[450px] sm:h-[540px] object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                
                {/* Subtle Gradient & Badge */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-royal-blue-950/80 via-royal-blue-950/40 to-transparent text-ivory">
                  <p className="text-[10px] tracking-luxury uppercase text-champagne-gold font-medium">Chapter One</p>
                  <p className="font-serif italic text-lg sm:text-xl text-ivory">A glance that holds forever.</p>
                </div>
              </div>

              {/* Little Stamp Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 bg-royal-blue text-ivory p-4 rounded-full shadow-xl border-2 border-champagne-gold hidden sm:flex flex-col items-center justify-center w-24 h-24 text-center">
                <Heart className="w-4 h-4 text-dusty-rose fill-dusty-rose mb-1" />
                <span className="text-[8px] tracking-luxury uppercase font-semibold">18.10.26</span>
                <span className="text-[7px] text-champagne-gold uppercase tracking-wider">Forever</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Welcome Note */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center lg:pl-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-dusty-rose-600 text-xs tracking-luxury uppercase font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
              <span>A Warm Welcome</span>
            </div>

            {/* Heading */}
            <h2
              id="welcome-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-royal-blue leading-[1.15] font-normal tracking-tight"
            >
              Together, We Made <br />
              <span className="italic font-light text-dusty-rose-700">Memories.</span>
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <span className="w-12 h-px bg-champagne-gold" />
              <span className="text-champagne-gold text-xs">✧ ✧ ✧</span>
              <span className="w-12 h-px bg-champagne-gold" />
            </div>

            {/* Narrative Body Copy */}
            <div className="space-y-6 text-sm sm:text-base leading-relaxed text-royal-blue/80 font-light">
              <p className="font-serif italic text-xl sm:text-2xl text-royal-blue/90 leading-snug">
                "Some moments become memories, and some memories stay with us forever."
              </p>
              
              <p>
                Thank you for being part of our beautiful celebration. Every smile, every blessing, and every joyful moment you shared with us made our wedding day completely unforgettable.
              </p>

              <p>
                As we begin this sacred new journey as husband and wife, we hold the warmth of your presence close to our hearts. Here, we invite you to revisit the laughter, the love, and the quiet glances that made October 18th our most treasured day.
              </p>
            </div>

            {/* Couple Signature */}
            <div className="mt-10 pt-6 border-t border-royal-blue/10 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-serif italic text-2xl sm:text-3xl text-royal-blue font-normal">
                  With all our love,
                </p>
                <p className="text-xs tracking-luxury uppercase text-dusty-rose-700 font-semibold mt-1">
                  Nizar & Rinsha Febin
                </p>
              </div>

              <div className="text-right">
                <span className="text-[10px] tracking-luxury uppercase text-royal-blue/60 block">Celebrated in</span>
                <span className="font-serif text-base text-champagne-gold-dark font-medium">Kozhikode, Kerala</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
