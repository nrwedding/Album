import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import FeaturedGallery from './components/FeaturedGallery';
import GalleryLightbox from './components/GalleryLightbox';
import FamilyFriends from './components/FamilyFriends';
import DownloadMemories from './components/DownloadMemories';
import Footer from './components/Footer';

export default function App() {
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleNavigateLightbox = (newIndex) => {
    setLightboxIndex(newIndex);
  };

  return (
    <div className="min-h-screen bg-ivory text-royal-blue flex flex-col selection:bg-champagne-gold/30 selection:text-royal-blue">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Section 1: Cinematic Hero */}
        <Hero />

        {/* Section 2: Welcome & Our Story */}
        <Welcome />

        {/* Section 3: Featured Wedding Gallery */}
        <FeaturedGallery onPhotoClick={handleOpenLightbox} />

        {/* Section 4: Family & Friends */}
        <FamilyFriends />

        {/* Section 5: Download Wedding Memories (Google Drive CTA) */}
        <DownloadMemories />
      </main>

      {/* Section 6: Footer */}
      <Footer />

      {/* Full-Screen Lightbox Modal */}
      <GalleryLightbox
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onNavigate={handleNavigateLightbox}
      />
    </div>
  );
}
