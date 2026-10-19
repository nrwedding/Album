import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Sparkles } from 'lucide-react';
import { weddingInfo } from '../data/gallery';

export default function Hero() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Check user accessibility preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && heroRef.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Hero background image reveal and subtle zoom settle
        tl.fromTo(
          imageRef.current,
          { scale: 1.12, opacity: 0.8 },
          { scale: 1.0, opacity: 1, duration: 2.2 }
        );

        // Content elements stagger entrance
        tl.fromTo(
          '.hero-anim-item',
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.18 },
          '-=1.6'
        );
      }, heroRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-royal-blue-950 text-ivory pt-20 pb-16"
      aria-label="Welcome hero banner"
    >
      {/* Background Image with Cinematic Subtle Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={imageRef}
          src={weddingInfo.heroPhoto}
          alt="Nizar and Rinsha Febin beneath blooming garden blossoms on their wedding day"
          fetchPriority="high"
          className="w-full h-full object-cover object-[50%_25%] sm:object-[50%_35%] transition-transform duration-1000"
        />
        {/* Editorial Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-royal-blue-950 via-royal-blue-950/65 to-royal-blue-950/40" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-royal-blue-950/30 to-royal-blue-950/80 mix-blend-multiply" />
      </div>

      {/* Floating Sparkle / Luxury Accent Details */}
      <div className="absolute top-28 left-8 sm:left-16 hidden lg:flex items-center gap-2 text-[10px] tracking-luxury uppercase text-champagne-gold/80 font-medium">
        <Sparkles className="w-3.5 h-3.5 text-champagne-gold animate-pulse" />
        <span>The Wedding Celebration</span>
      </div>

      <div className="absolute top-28 right-8 sm:right-16 hidden lg:block text-[10px] tracking-luxury uppercase text-champagne-gold/80 font-medium">
        <span>Kozhikode, Kerala · 2026</span>
      </div>

      {/* Main Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center mt-6 sm:mt-10"
      >
        {/* Eyebrow / Monogram Subtitle */}
        <div className="hero-anim-item inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-ivory/10 backdrop-blur-sm border border-champagne-gold/30 mb-6 text-champagne-gold-light text-xs sm:text-sm tracking-luxury uppercase">
          <span>✧</span>
          <span className="font-medium">Together, A Beautiful Beginning</span>
          <span>✧</span>
        </div>

        {/* Couple Names */}
        <h1 className="hero-anim-item font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-ivory leading-[1.05] drop-shadow-md">
          Nizar <span className="italic font-serif text-dusty-rose font-light px-1 sm:px-2">&</span>
          <br className="hidden sm:inline" /> Rinsha Febin
        </h1>

        {/* Wedding Date */}
        <div className="hero-anim-item mt-6 flex items-center justify-center gap-4 text-xs sm:text-sm tracking-widest-plus uppercase text-ivory/90 font-medium">
          <span className="w-8 sm:w-12 h-px bg-champagne-gold/60" />
          <span className="text-champagne-gold-light">18 October 2026 · Sunday</span>
          <span className="w-8 sm:w-12 h-px bg-champagne-gold/60" />
        </div>

        {/* Tagline */}
        <p className="hero-anim-item mt-5 text-base sm:text-xl md:text-2xl font-serif italic text-ivory/80 max-w-xl font-light tracking-wide">
          "{weddingInfo.tagline}"
        </p>

        {/* Primary CTA */}
        <div className="hero-anim-item mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#gallery"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-royal-blue border border-champagne-gold/60 text-ivory rounded-full text-xs font-semibold tracking-luxury uppercase shadow-lg hover:bg-champagne-gold hover:text-royal-blue hover:border-champagne-gold transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Explore Our Memories</span>
            <ArrowDown className="w-4 h-4 text-dusty-rose transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>

      {/* Smooth Scroll Down Indicator */}
      <a
        href="#story"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ivory/60 hover:text-dusty-rose transition-colors duration-300 group"
        aria-label="Scroll down to welcome story"
      >
        <span className="text-[9px] tracking-luxury uppercase font-medium">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-ivory/30 flex items-start justify-center p-1 group-hover:border-dusty-rose transition-colors">
          <div className="w-1 h-2 bg-champagne-gold rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}
