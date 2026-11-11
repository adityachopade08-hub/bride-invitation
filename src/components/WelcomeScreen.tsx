import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShootingStarOrbit } from './ShootingStarOrbit';
import { GoldenGaneshaImage } from './Motifs';
import { weddingData } from '../data/weddingData';

interface WelcomeScreenProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onOpen, isOpen }) => {
  // Animation states:
  // 'idle': envelope closed, clean, no particles
  // 'star-rotating': single shooting star revolves around P&P (0 to 850ms)
  // 'blown-up': all 4 sides blow open from the center, card gradually emerges (850ms to 3.0s)
  const [animState, setAnimState] = useState<'idle' | 'star-rotating' | 'blown-up'>('idle');
  const [starActive, setStarActive] = useState<boolean>(false);
  const { groom, bride } = weddingData.couple;

  // Triggered when user clicks on P&P seal, envelope, or Open Invitation button
  const handleStartSequence = () => {
    if (animState !== 'idle') return;

    // 1. Start the single shooting star rotation
    setAnimState('star-rotating');
    setStarActive(true);

    // 2. Entire experience finishes within 3.0 seconds
    setTimeout(() => {
      onOpen();
    }, 2950);
  };

  // Called automatically when the single shooting star finishes its revolution (~850ms)
  const handleOrbitComplete = () => {
    // Blow up all 4 sides of the envelope from the center!
    setAnimState('blown-up');
  };

  if (isOpen) return null;

  const isBlownUp = animState === 'blown-up';
  const isStarted = animState !== 'idle';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-3 sm:p-6 bg-[#F6EFE5] overflow-hidden select-none min-h-[100svh]"
    >
      {/* Warm ambient studio lighting background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,_#FFFDF8_0%,_#F8EFE2_45%,_#EADFCF_80%,_#DACAB4_100%)] pointer-events-none" />

      {/* Atmospheric vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(140,105,65,0.18)] pointer-events-none" />

      {/* 3D Envelope Stage Container */}
      <div
        className="relative z-10 flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md"
        style={{ perspective: '1800px' }}
      >
        {/* Envelope Body (Aspect Ratio 1 : 1.6 matching reference envelope) */}
        <div
          onClick={handleStartSequence}
          className={`relative w-[88vw] max-w-[370px] sm:max-w-[400px] aspect-[1/1.6] rounded-2xl cursor-pointer transition-transform duration-300 ${
            !isStarted ? 'hover:scale-[1.015] active:scale-[0.995]' : ''
          }`}
          style={{
            transformStyle: 'preserve-3d',
            filter:
              'drop-shadow(0 30px 45px rgba(80, 55, 30, 0.28)) drop-shadow(0 10px 18px rgba(110, 80, 45, 0.16))'
          }}
        >
          {/* ========================================================= */}
          {/* 1. ENVELOPE BACK BASE & INNER GOLD LINING                 */}
          {/* ========================================================= */}
          <div className="absolute inset-0 rounded-2xl bg-[#FBF8F3] border border-[#D4AF37]/40 overflow-hidden shadow-inner">
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#8C6D2B_1px,_transparent_1px)] [background-size:12px_12px]" />

            {/* Inner Double Gold Foil Frame */}
            <div className="absolute inset-3 rounded-xl border border-[#D4AF37]/35 pointer-events-none" />
            <div className="absolute inset-4.5 rounded-lg border border-[#D4AF37]/20 pointer-events-none" />

            {/* Radiating Golden Light Burst when blown open */}
            <motion.div
              animate={
                isBlownUp
                  ? {
                      opacity: [0, 0.95, 0.45],
                      scale: [0.6, 1.5, 2.0],
                      transition: { duration: 1.8, ease: 'easeOut' }
                    }
                  : { opacity: 0, scale: 0.6 }
              }
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none bg-[radial-gradient(circle,_rgba(255,250,225,1)_0%,_rgba(230,196,119,0.8)_35%,_rgba(212,175,55,0.35)_65%,_transparent_100%)] blur-md"
            />
          </div>

          {/* ========================================================= */}
          {/* 2. INNER INVITATION CARD (Gradually emerges when opened)  */}
          {/* ========================================================= */}
          <motion.div
            animate={
              isBlownUp
                ? {
                    y: -190,
                    scale: 1.08,
                    z: 220,
                    opacity: 1,
                    transition: {
                      delay: 0.35,
                      duration: 1.45,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }
                : { y: 0, scale: 0.94, z: 2, opacity: 0.85 }
            }
            className="absolute inset-x-3.5 top-4 bottom-4 rounded-xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9] border-2 border-[#D4AF37]/70 p-5 sm:p-6 flex flex-col items-center justify-between text-center overflow-hidden"
            style={{
              transformStyle: 'preserve-3d',
              boxShadow: '0 20px 40px rgba(90, 65, 35, 0.28)'
            }}
          >
            {/* Card Gold Trim Border */}
            <div className="absolute inset-2 rounded-lg border border-[#D4AF37]/45 pointer-events-none" />
            <div className="absolute inset-3 rounded-md border border-[#D4AF37]/25 pointer-events-none" />

            {/* Auspicious Header with Lord Ganesha */}
            <div className="pt-1">
              <div className="p-1.5 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] rounded-xl border border-[#D4AF37]/40 shadow-sm inline-block">
                <GoldenGaneshaImage size={46} className="w-11 h-11 mx-auto drop-shadow-sm" />
              </div>
              <p className="font-serif-elegant text-[11px] tracking-[0.25em] text-[#8C6D2B] uppercase font-semibold mt-1">
                ॥ ॐ श्री गणेशाय नमः ॥
              </p>
            </div>

            {/* Couple Photo in Gold Frame */}
            <div className="my-auto py-1">
              <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-b from-[#D4AF37] via-[#FFF2B2] to-[#AA771C] shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden border border-[#D4AF37]/50 bg-white">
                  <img
                    src="/assets/aistudio/WhatsApp_Image_2026-11-07_at_11.14.22_PM_1dd3b1c3.jpeg"
                    alt="Priyanka and Prasad"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <p className="font-serif-elegant italic text-xs text-[#720E28] font-medium mt-2">
                Together with their families
              </p>
              <h2 className="font-cinzel text-xl sm:text-2xl text-[#2D2424] font-semibold tracking-wide mt-0.5">
                {bride.firstName}
                <span className="font-serif-elegant italic text-[#D4AF37] mx-1.5 font-normal">&amp;</span>
                {groom.firstName}
              </h2>
              <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-1.5" />
              <p className="font-serif-elegant text-[11px] text-[#5C4837] tracking-wider uppercase font-semibold">
                25 &amp; 26 November 2026
              </p>
              <p className="font-serif-elegant text-[10px] text-[#8C7A68]">
                Kuber Lawns, Nashik
              </p>
            </div>

            {/* Bottom Auspicious Badge */}
            <div className="pb-0.5">
              <span className="px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#D4AF37]/60 text-[#8C6D2B] text-[10px] sm:text-[11px] tracking-widest uppercase font-cinzel font-semibold">
                Shubh Vivah
              </span>
            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* 3. FOUR ENVELOPE FLAPS (BLOW OPEN FROM THE CENTER)        */}
          {/* 3D blind-embossed sculpted roses and leaves matching      */}
          {/* the reference video. Blown outward in 3D from center!     */}
          {/* ========================================================= */}

          {/* Left Flap: Blows open to the left from center */}
          <motion.div
            animate={
              isBlownUp
                ? {
                    rotateY: -160,
                    opacity: 0.1,
                    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] }
                  }
                : { rotateY: 0, opacity: 1 }
            }
            className="absolute inset-0 pointer-events-none origin-left"
            style={{
              transformStyle: 'preserve-3d',
              zIndex: isBlownUp ? 5 : 12,
              clipPath: 'polygon(0% 0%, 50% 55.5%, 0% 100%)'
            }}
          >
            <img
              src="/assets/envelope_cropped.jpg"
              alt="Envelope Left Flap"
              className="w-full h-full object-fill select-none"
              style={{
                filter: 'drop-shadow(3px 0 6px rgba(100, 75, 45, 0.22))'
              }}
            />
          </motion.div>

          {/* Right Flap: Blows open to the right from center */}
          <motion.div
            animate={
              isBlownUp
                ? {
                    rotateY: 160,
                    opacity: 0.1,
                    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] }
                  }
                : { rotateY: 0, opacity: 1 }
            }
            className="absolute inset-0 pointer-events-none origin-right"
            style={{
              transformStyle: 'preserve-3d',
              zIndex: isBlownUp ? 5 : 12,
              clipPath: 'polygon(100% 0%, 50% 55.5%, 100% 100%)'
            }}
          >
            <img
              src="/assets/envelope_cropped.jpg"
              alt="Envelope Right Flap"
              className="w-full h-full object-fill select-none"
              style={{
                filter: 'drop-shadow(-3px 0 6px rgba(100, 75, 45, 0.22))'
              }}
            />
          </motion.div>

          {/* Bottom Flap: Blows downward from center */}
          <motion.div
            animate={
              isBlownUp
                ? {
                    rotateX: -160,
                    opacity: 0.12,
                    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
                  }
                : { rotateX: 0, opacity: 1 }
            }
            className="absolute inset-0 pointer-events-none origin-bottom"
            style={{
              transformStyle: 'preserve-3d',
              zIndex: isBlownUp ? 6 : 13,
              clipPath: 'polygon(0% 100%, 100% 100%, 50% 55.5%)'
            }}
          >
            <img
              src="/assets/envelope_cropped.jpg"
              alt="Envelope Bottom Flap"
              className="w-full h-full object-fill select-none"
              style={{
                filter: 'drop-shadow(0 -3px 8px rgba(100, 75, 45, 0.25))'
              }}
            />
          </motion.div>

          {/* Top Flap: Blows upward from center */}
          <motion.div
            animate={
              isBlownUp
                ? {
                    rotateX: 180,
                    opacity: 0.12,
                    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] }
                  }
                : { rotateX: 0, opacity: 1 }
            }
            className="absolute inset-0 pointer-events-none origin-top"
            style={{
              transformStyle: 'preserve-3d',
              zIndex: isBlownUp ? 7 : 20,
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 55.5%)'
            }}
          >
            <img
              src="/assets/envelope_cropped.jpg"
              alt="Envelope Top Flap"
              className="w-full h-full object-fill select-none"
              style={{
                filter: 'drop-shadow(0 6px 12px rgba(100, 75, 45, 0.32))'
              }}
            />
          </motion.div>

          {/* ========================================================= */}
          {/* 4. REVOLVING SINGLE SHOOTING STAR ON CLICK                */}
          {/* Revolves 1 rotation around P&P, then triggers blow-up     */}
          {/* ========================================================= */}
          <div className="absolute top-[55.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-35">
            <ShootingStarOrbit
              active={starActive}
              onOrbitComplete={handleOrbitComplete}
            />
          </div>

          {/* ========================================================= */}
          {/* 5. P & P WAX SEAL MONOGRAM (BLOWS UP FROM CENTER)         */}
          {/* Pearl-Ivory Wax with 3D Embossed Gold Calligraphy         */}
          {/* ========================================================= */}
          <motion.div
            animate={
              isBlownUp
                ? {
                    scale: 1.45,
                    opacity: 0,
                    z: 90,
                    y: -20,
                    transition: { duration: 0.45, ease: 'easeOut' }
                  }
                : animState === 'star-rotating'
                ? {
                    scale: 1.05,
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }
                : {
                    scale: [1, 1.02, 1],
                    opacity: 1,
                    y: 0,
                    transition: {
                      scale: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
                    }
                  }
            }
            className="absolute top-[55.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
            style={{
              filter: isBlownUp
                ? 'drop-shadow(0 0 45px rgba(230, 196, 119, 1)) drop-shadow(0 15px 30px rgba(100, 70, 30, 0.5))'
                : animState === 'star-rotating'
                ? 'drop-shadow(0 0 25px rgba(230, 196, 119, 0.8)) drop-shadow(0 8px 16px rgba(90, 60, 25, 0.4))'
                : 'drop-shadow(0 12px 24px rgba(90, 60, 25, 0.42)) drop-shadow(0 4px 8px rgba(0,0,0,0.18))'
            }}
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
              {/* Subtle golden aura */}
              <div
                className={`absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(255,240,190,0.85)_0%,_rgba(212,175,55,0.4)_50%,_transparent_75%)] transition-all duration-300 ${
                  animState === 'star-rotating'
                    ? 'scale-125 opacity-90'
                    : isBlownUp
                    ? 'scale-150 opacity-100'
                    : 'scale-100 opacity-40'
                }`}
              />

              {/* The Handcrafted Wax Seal Medallion with P & P */}
              <img
                src="/assets/seal_perfect.png"
                alt="P & P Monogram Seal"
                className="relative z-10 w-full h-full object-contain select-none"
              />
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* 6. CLEAN TACTILE "OPEN INVITATION" CTA BUTTON              */}
        {/* ========================================================= */}
        <motion.div
          animate={isStarted ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 text-center cursor-pointer"
          onClick={handleStartSequence}
        >
          <div className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-gradient-to-r from-[#FFFDF9] via-[#FAF5EB] to-[#FFFDF9] border-2 border-[#D4AF37]/75 shadow-lg hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300">
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.22em] uppercase text-[#7A5B20] font-semibold">
              Open Invitation
            </span>
          </div>

          <p className="font-serif-elegant italic text-xs text-[#8C7A68] mt-2.5">
            Click on P&amp;P to open the envelope
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
