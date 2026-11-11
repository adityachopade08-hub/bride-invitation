import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import {
  GoldenGaneshaImage,
  LotusMotif,
  DiyaMotif,
  KalashMotif,
  SwastikMotif
} from './Motifs';
import { Heart, Copy, Check, ArrowUp } from 'lucide-react';

export const Footer: React.FC<{ onReopenWelcome: () => void }> = ({ onReopenWelcome }) => {
  const { couple, footer } = weddingData;
  const [copied, setCopied] = useState(false);

  const handleCopyHashtag = () => {
    navigator.clipboard.writeText(couple.hashtag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#201A18] text-[#FAF7F2] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Golden Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      {/* Background Subtle Radial Warmth */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#B38728]/15 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-4xl mx-auto relative text-center">
        {/* Auspicious Symbols Header with Uploaded Golden Ganesha */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <SwastikMotif size={20} className="text-[#8B0000]" />
          <div className="p-2 sm:p-2.5 bg-white/5 rounded-2xl border border-[#D4AF37]/40 shadow-inner flex items-center justify-center">
            <GoldenGaneshaImage size={56} className="w-12 h-12 sm:w-14 sm:h-14 brightness-105" />
          </div>
          <SwastikMotif size={20} className="text-[#8B0000]" />
        </div>

        {/* Couple Names */}
        <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl text-white font-medium tracking-wide">
          {couple.bride.firstName}
          <span className="font-serif-elegant italic text-[#D4AF37] mx-3">&amp;</span>
          {couple.groom.firstName}
        </h2>

        {/* Wedding Hashtag Badge with Copy Button */}
        <div className="my-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-[#D4AF37]/40 shadow-sm">
          <span className="font-royal text-base sm:text-lg text-[#FFE8A3] tracking-widest font-semibold">
            {couple.hashtag}
          </span>
          <button
            onClick={handleCopyHashtag}
            className="p-1 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Copy wedding hashtag"
            title="Copy hashtag"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Thank You Note & Auspicious Shloka */}
        <div className="max-w-xl mx-auto space-y-3 mb-10">
          <p className="font-serif-elegant text-base sm:text-lg text-stone-300 italic leading-relaxed">
            &ldquo;{footer.thankYouMessage}&rdquo;
          </p>
          <p className="font-serif-elegant text-sm text-[#D4AF37] font-semibold">
            {footer.blessingsText}
          </p>
        </div>

        {/* Diya Motifs & Kalash Centerpiece */}
        <div className="flex items-center justify-center gap-4 text-[#D4AF37] my-8">
          <DiyaMotif size={28} />
          <KalashMotif size={36} className="text-[#D4AF37]" />
          <LotusMotif size={36} />
          <KalashMotif size={36} className="text-[#D4AF37]" />
          <DiyaMotif size={28} />
        </div>

        {/* Footer Actions */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif-elegant text-stone-400">
          <p className="flex items-center gap-1.5">
            Celebrating with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> Priyanka &amp; Prasad · Nashik 2026
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onReopenWelcome}
              className="hover:text-[#FFE8A3] transition-colors cursor-pointer underline underline-offset-4"
            >
              Reopen Invitation Envelope
            </button>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-300 hover:text-[#FFE8A3] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
