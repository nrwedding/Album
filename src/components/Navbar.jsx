import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "#story" },
    { name: "The Gallery", href: "#gallery" },
    { name: "Family & Friends", href: "#family-friends" },
    { name: "Download Memories", href: "#downloads" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/90 backdrop-blur-md shadow-sm py-4 border-b border-royal-blue/10 text-royal-blue'
          : 'bg-gradient-to-b from-royal-blue/70 via-royal-blue/30 to-transparent py-6 text-ivory'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#home"
          className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-dusty-rose rounded px-1"
          aria-label="Nizar and Rinsha Febin, return to top"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-tight transition-transform duration-300 group-hover:scale-105">
            N <span className={`italic font-serif transition-colors duration-300 ${scrolled ? 'text-dusty-rose' : 'text-dusty-rose-300'}`}>&</span> R
          </span>
          <span className={`text-[9px] tracking-luxury uppercase -mt-1 font-medium transition-colors duration-300 ${
            scrolled ? 'text-royal-blue/70' : 'text-ivory/80'
          }`}>
            18 · 10 · 2026
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-luxury uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-all duration-300 relative py-1 hover:text-dusty-rose ${
                scrolled ? 'text-royal-blue/85' : 'text-ivory/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#downloads"
            className="inline-flex items-center gap-2 px-4 py-2 text-[10px] tracking-widest uppercase border border-champagne-gold/60 rounded-full hover:bg-champagne-gold hover:text-royal-blue transition-all duration-300 shadow-sm"
          >
            <Heart className="w-3 h-3 text-dusty-rose fill-dusty-rose" />
            <span>Full Album</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-dusty-rose ${
            scrolled ? 'text-royal-blue hover:bg-royal-blue/5' : 'text-ivory hover:bg-white/10'
          }`}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory border-b border-royal-blue/10 px-6 py-8 shadow-xl text-royal-blue animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col space-y-5 text-sm tracking-luxury uppercase font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-royal-blue/5 hover:text-dusty-rose transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#downloads"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 py-3 bg-royal-blue text-ivory text-xs tracking-luxury uppercase rounded hover:bg-royal-blue/90 transition-all shadow-md"
            >
              <Heart className="w-3.5 h-3.5 text-dusty-rose fill-dusty-rose" />
              <span>Full Google Drive Album</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
