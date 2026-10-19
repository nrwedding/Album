import React from 'react';
import { Download, ExternalLink, Clock, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function DownloadMemories() {
  const DEFAULT_DRIVE_URL = "https://drive.google.com/drive/folders/1Yyszv9D9xUf9YhRbBIsUhAF8VUJhc7EA?usp=drive_link";
  const driveUrl = (import.meta.env.VITE_GOOGLE_DRIVE_FOLDER_URL || DEFAULT_DRIVE_URL).trim();
  const hasDriveLink = Boolean(driveUrl && driveUrl.length > 5 && driveUrl.startsWith('http'));

  return (
    <section
      id="downloads"
      className="py-24 sm:py-32 bg-royal-blue text-ivory relative overflow-hidden"
      aria-labelledby="download-heading"
    >
      {/* Background Subtle Gradient & Accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal-blue-950 via-royal-blue to-royal-blue-950 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-champagne-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-dusty-rose/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-champagne-gold text-xs tracking-luxury uppercase font-semibold mb-4 px-4 py-1.5 rounded-full bg-white/5 border border-champagne-gold/30">
          <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
          <span>Full Resolution Memories</span>
        </div>

        {/* Section Heading */}
        <h2
          id="download-heading"
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ivory leading-[1.15] font-normal tracking-tight"
        >
          Take the Memories <br />
          <span className="italic font-light text-dusty-rose">Home.</span>
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <span className="w-12 h-px bg-champagne-gold/40" />
          <span className="text-champagne-gold text-xs">✦ ✦ ✦</span>
          <span className="w-12 h-px bg-champagne-gold/40" />
        </div>

        {/* Description */}
        <p className="font-serif italic text-xl sm:text-2xl text-ivory/90 max-w-xl mx-auto font-light leading-relaxed">
          "Every smile, every celebration, every unforgettable moment. Explore and download your favorite memories from our wedding."
        </p>

        <p className="mt-4 text-xs sm:text-sm text-ivory/70 max-w-lg mx-auto font-light leading-relaxed">
          The complete wedding photography collection is hosted on Google Drive in pristine master quality. Family and friends are welcome to browse, save, and print their special moments.
        </p>

        {/* Action Button & Status */}
        <div className="mt-12 flex flex-col items-center justify-center">
          {hasDriveLink ? (
            <a
              href={driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-champagne-gold text-royal-blue font-semibold rounded-full text-xs sm:text-sm tracking-luxury uppercase shadow-2xl hover:bg-champagne-gold-light transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download className="w-4 h-4 text-royal-blue transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>View & Download All Wedding Photos</span>
              <ExternalLink className="w-4 h-4 text-royal-blue/70" />
            </a>
          ) : (
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-8 py-5 bg-white/10 border border-champagne-gold/40 rounded-2xl text-ivory shadow-lg backdrop-blur-sm max-w-lg">
              <div className="p-3 bg-champagne-gold/20 rounded-full text-champagne-gold">
                <Clock className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-left">
                <p className="text-xs tracking-luxury uppercase font-semibold text-champagne-gold">
                  Full Album Coming Soon
                </p>
                <p className="text-xs text-ivory/80 font-light mt-0.5">
                  The complete high-resolution collection is currently being prepared and curated. The Google Drive download link will appear here shortly.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Trust & Privacy Notice */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] text-ivory/60 tracking-wider font-light">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-champagne-gold" />
            <span>Master Resolution JPEGs</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-dusty-rose" />
            <span>Free For Family & Friends</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-champagne-gold" />
            <span>Direct Google Drive Access</span>
          </div>
        </div>

      </div>
    </section>
  );
}
