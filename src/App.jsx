import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import FeaturedGallery from './components/FeaturedGallery';
import GalleryLightbox from './components/GalleryLightbox';
import FamilyFriends from './components/FamilyFriends';
import DownloadMemories from './components/DownloadMemories';
import Footer from './components/Footer';
import PrivateGate from './components/PrivateGate';

export default function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const expectedKey = (import.meta.env.VITE_ACCESS_KEY || '181026').trim().toLowerCase();

    // Check localStorage first
    const storedAuth = localStorage.getItem('nr_wedding_auth');
    if (storedAuth === expectedKey) {
      setIsAuthorized(true);
      setCheckingAuth(false);
      return;
    }

    // Check URL parameters for direct one-click link access (e.g. ?access=181026 or ?key=181026)
    const urlParams = new URLSearchParams(window.location.search);
    const providedKey = (
      urlParams.get('access') ||
      urlParams.get('key') ||
      urlParams.get('passkey') ||
      ''
    ).trim().toLowerCase();

    if (providedKey && providedKey === expectedKey) {
      // Grant access and remember on this device
      localStorage.setItem('nr_wedding_auth', expectedKey);
      setIsAuthorized(true);

      // Clean URL in address bar so the query parameter is removed seamlessly
      const cleanUrl = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, cleanUrl);
    }

    setCheckingAuth(false);
  }, []);

  const handleManualUnlock = () => {
    const expectedKey = (import.meta.env.VITE_ACCESS_KEY || '181026').trim().toLowerCase();
    localStorage.setItem('nr_wedding_auth', expectedKey);
    setIsAuthorized(true);
  };

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

  // While checking initial authentication
  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-royal-blue-950 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-champagne-gold/30 border-t-champagne-gold rounded-full animate-spin" />
      </div>
    );
  }

  // If unauthorized, render the luxury private gate
  if (!isAuthorized) {
    return <PrivateGate onUnlock={handleManualUnlock} />;
  }

  // Full wedding website when authorized
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
