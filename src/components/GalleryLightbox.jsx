import React, { useEffect, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { galleryPhotos } from '../data/gallery';

export default function GalleryLightbox({ currentIndex, isOpen, onClose, onNavigate }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const modalRef = useRef(null);

  const currentPhoto = galleryPhotos[currentIndex];

  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % galleryPhotos.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, currentIndex, onClose, onNavigate]);

  // Reset image loaded state on photo change
  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  // Touch Swipe navigation for mobile
  const handleTouchStart = (e) => {
    setTouchStart({
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    });
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStart.x;
    const deltaY = e.changedTouches[0].clientY - touchStart.y;

    // Detect horizontal swipe if deltaX is significant and greater than deltaY
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        // Swiped Left -> Next Photo
        onNavigate((currentIndex + 1) % galleryPhotos.length);
      } else {
        // Swiped Right -> Previous Photo
        onNavigate((currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length);
      }
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-royal-blue-950/95 backdrop-blur-xl text-ivory transition-opacity duration-300 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Wedding photo viewer"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Controls Bar */}
      <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-royal-blue-950/80 to-transparent">
        {/* Photo Counter */}
        <div className="text-xs sm:text-sm tracking-luxury uppercase font-medium text-champagne-gold">
          <span>{currentIndex + 1}</span>
          <span className="text-ivory/40 mx-2">/</span>
          <span className="text-ivory/60">{galleryPhotos.length}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 sm:p-2.5 rounded-full bg-ivory/10 hover:bg-ivory/20 transition-colors text-ivory focus:outline-none focus:ring-2 focus:ring-dusty-rose"
            aria-label={isFullscreen ? "Exit full screen" : "Enter full screen"}
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-ivory/10 hover:bg-ivory/20 transition-colors text-ivory focus:outline-none focus:ring-2 focus:ring-dusty-rose"
            aria-label="Close photo viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + galleryPhotos.length) % galleryPhotos.length)}
        className="absolute left-2 sm:left-6 z-20 p-2 sm:p-3 rounded-full bg-royal-blue-900/60 hover:bg-royal-blue border border-ivory/20 text-ivory transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-dusty-rose"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Center Image Stage */}
      <div className="relative max-w-5xl max-h-[82vh] mx-auto px-4 flex flex-col items-center justify-center">
        {/* Loading shimmer placeholder */}
        {!imageLoaded && (
          <div className="w-[320px] sm:w-[480px] h-[480px] sm:h-[640px] shimmer-loading rounded-lg flex items-center justify-center text-royal-blue/40 text-xs tracking-luxury uppercase">
            Loading photograph...
          </div>
        )}

        <img
          src={currentPhoto.src}
          alt={currentPhoto.alt}
          onLoad={() => setImageLoaded(true)}
          className={`max-w-full max-h-[75vh] object-contain rounded-md shadow-2xl transition-all duration-500 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'
          }`}
        />

        {/* Caption & Subtitle */}
        {imageLoaded && (
          <div className="mt-4 text-center max-w-xl animate-in fade-in duration-300">
            <h3 className="font-serif text-xl sm:text-2xl text-ivory font-normal tracking-wide">
              {currentPhoto.title}
            </h3>
            <p className="text-xs sm:text-sm text-ivory/70 font-light italic mt-1">
              {currentPhoto.subtitle}
            </p>
          </div>
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % galleryPhotos.length)}
        className="absolute right-2 sm:right-6 z-20 p-2 sm:p-3 rounded-full bg-royal-blue-900/60 hover:bg-royal-blue border border-ivory/20 text-ivory transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-dusty-rose"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Bottom Hint */}
      <div className="absolute bottom-4 inset-x-0 text-center z-10 pointer-events-none">
        <span className="text-[10px] tracking-luxury uppercase text-ivory/40">
          Swipe left/right or use keyboard arrows to browse
        </span>
      </div>
    </div>
  );
}
