import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-royal-blue-950 text-ivory py-16 sm:py-20 border-t border-royal-blue/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col items-center text-center">
        
        {/* Monogram Emblem */}
        <div className="mb-6 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full border border-champagne-gold/40 flex items-center justify-center bg-white/5 shadow-inner">
            <span className="font-serif text-2xl tracking-tighter text-ivory">
              N<span className="italic text-dusty-rose text-xl">&</span>R
            </span>
          </div>
        </div>

        {/* Names */}
        <h3 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide font-normal">
          Nizar <span className="text-dusty-rose font-serif italic">&</span> Rinsha Febin
        </h3>

        {/* Date */}
        <p className="mt-2 text-xs sm:text-sm tracking-widest-plus uppercase text-champagne-gold font-medium">
          18 October 2026 · Kozhikode, Kerala
        </p>

        {/* Quote */}
        <p className="mt-4 font-serif italic text-base sm:text-lg text-ivory/70 max-w-md font-light">
          "Made with love, treasured forever."
        </p>

        {/* Subtle Heart */}
        <div className="my-8 flex items-center justify-center gap-3">
          <span className="w-8 h-px bg-white/10" />
          <Heart className="w-3.5 h-3.5 text-dusty-rose fill-dusty-rose animate-pulse" />
          <span className="w-8 h-px bg-white/10" />
        </div>

        {/* Back to Top & Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-white/10 text-xs tracking-luxury uppercase text-ivory/60 gap-4">
          <p>© 2026 Nizar & Rinsha Febin. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-champagne-gold hover:text-ivory transition-colors"
            aria-label="Scroll back to top of the page"
          >
            <span>Back to the beginning</span>
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}
