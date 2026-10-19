import React, { useState } from 'react';
import { Lock, Heart, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PrivateGate({ onUnlock }) {
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState(false);

  const expectedKey = (import.meta.env.VITE_ACCESS_KEY || '3606').trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passkey.trim() === expectedKey) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-royal-blue-950 text-ivory px-6 py-12 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-gradient from-royal-blue-900/40 via-royal-blue-950/80 to-royal-blue-950 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-champagne-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-dusty-rose/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Lock Card */}
      <div className="relative z-10 max-w-md w-full bg-royal-blue/90 border border-champagne-gold/30 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md text-center">
        
        {/* Monogram Badge */}
        <div className="mx-auto w-16 h-16 rounded-full border border-champagne-gold/40 flex items-center justify-center bg-white/5 shadow-inner mb-6">
          <span className="font-serif text-3xl tracking-tighter text-ivory">
            N<span className="italic text-dusty-rose text-2xl">&</span>R
          </span>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-champagne-gold text-[10px] tracking-luxury uppercase font-semibold mb-3 px-3 py-1 rounded-full bg-white/5 border border-champagne-gold/20">
          <Lock className="w-3 h-3 text-champagne-gold" />
          <span>Private Wedding Album</span>
        </div>

        {/* Couple Names */}
        <h1 className="font-serif text-3xl sm:text-4xl text-ivory font-normal leading-tight">
          Nizar <span className="italic text-dusty-rose font-serif">&</span> Rinsha
        </h1>

        {/* Date */}
        <p className="text-[11px] tracking-widest-plus uppercase text-champagne-gold/80 font-medium mt-1">
          18 October 2026 · Kozhikode
        </p>

        {/* Explanatory Note */}
        <p className="mt-5 text-xs sm:text-sm text-ivory/70 font-light leading-relaxed">
          This celebration album is private for family, relatives, and invited guests. If you were sent a direct invitation link, please tap it on your phone, or enter the passkey below.
        </p>

        {/* Passkey Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="relative">
            <input
              type="password"
              value={passkey}
              onChange={(e) => {
                setPasskey(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Enter invitation passkey"
              className={`w-full px-5 py-3.5 rounded-full bg-royal-blue-950/70 border text-center text-sm tracking-widest text-ivory placeholder:text-ivory/30 focus:outline-none transition-all duration-300 ${
                error
                  ? 'border-red-400 ring-2 ring-red-400/30 animate-shake'
                  : 'border-champagne-gold/40 focus:border-champagne-gold focus:ring-2 focus:ring-champagne-gold/20'
              }`}
              autoFocus
            />
          </div>

          {error && (
            <p className="text-xs text-red-300 font-light animate-in fade-in">
              Incorrect passkey. Please check your invitation or use your direct link.
            </p>
          )}

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-champagne-gold text-royal-blue font-semibold text-xs tracking-luxury uppercase shadow-lg hover:bg-champagne-gold-light transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Unlock Memories</span>
            <ArrowRight className="w-4 h-4 text-royal-blue" />
          </button>
        </form>

        {/* Trust Note */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-[10px] tracking-widest uppercase text-ivory/50">
          <ShieldCheck className="w-3.5 h-3.5 text-champagne-gold" />
          <span>Private Family & Friends Access</span>
        </div>

      </div>
    </div>
  );
}
