import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { MandalaDivider, VarmalaMotif, KalashMotif, DiyaMotif, SwastikMotif } from './Motifs';
import { CheckCircle2 } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export const CountdownSection: React.FC = () => {
  // Target: 26 November 2026 at 12:14 PM IST (UTC+05:30)
  const targetIso = weddingData.countdown.targetIsoWithTimezone;
  const targetTimestamp = new Date(targetIso).getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = targetTimestamp - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isComplete: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTimestamp]);

  const padZero = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="countdown" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial shimmer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFF9E6]/70 via-[#FAF7F2] to-[#FAF7F2] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative text-center">
        {/* Section Heading */}
        <p className="font-script text-3xl md:text-4xl text-[#B38728] mb-1">
          The Auspicious Muhurat
        </p>
        <h2 className="font-royal text-3xl sm:text-4xl text-[#2D2424] font-medium tracking-wide">
          Countdown to Varmala
        </h2>
        
        <MandalaDivider title="26 November 2026 · 12:14 PM IST" showSwastik={true} />

        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#8C6D2B] font-serif-elegant font-semibold mb-8">
          <VarmalaMotif size={24} className="text-[#C2185B]" />
          <span>Sacred Garland Exchange at 12:14 PM (Indian Standard Time)</span>
          <VarmalaMotif size={24} className="text-[#C2185B]" />
        </div>

        {/* Countdown Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border-2 border-[#D4AF37]/45 shadow-xl"
        >
          <div className="absolute inset-3 rounded-2xl border border-[#D4AF37]/25 pointer-events-none" />

          {/* Decorative Corner Kalash Motifs */}
          <div className="absolute top-4 left-4 pointer-events-none opacity-70">
            <KalashMotif size={24} className="text-[#B38728]" />
          </div>
          <div className="absolute top-4 right-4 pointer-events-none opacity-70">
            <KalashMotif size={24} className="text-[#B38728]" />
          </div>

          <AnimatePresence mode="wait">
            {!timeLeft.isComplete ? (
              <motion.div
                key="active-countdown"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5"
              >
                {/* Days */}
                <div className="bg-[#FAF5EB] rounded-2xl p-4 sm:p-5 border border-[#E8DFC8] flex flex-col items-center justify-center shadow-inner hover:border-[#D4AF37]/60 transition-colors">
                  <span className="font-royal text-4xl sm:text-5xl text-[#3B2516] font-semibold tabular-nums tracking-tight">
                    {padZero(timeLeft.days)}
                  </span>
                  <span className="font-serif-elegant text-xs uppercase tracking-[0.2em] text-[#8C6D2B] mt-1.5 font-semibold">
                    Days
                  </span>
                </div>

                {/* Hours */}
                <div className="bg-[#FAF5EB] rounded-2xl p-4 sm:p-5 border border-[#E8DFC8] flex flex-col items-center justify-center shadow-inner hover:border-[#D4AF37]/60 transition-colors">
                  <span className="font-royal text-4xl sm:text-5xl text-[#3B2516] font-semibold tabular-nums tracking-tight">
                    {padZero(timeLeft.hours)}
                  </span>
                  <span className="font-serif-elegant text-xs uppercase tracking-[0.2em] text-[#8C6D2B] mt-1.5 font-semibold">
                    Hours
                  </span>
                </div>

                {/* Minutes */}
                <div className="bg-[#FAF5EB] rounded-2xl p-4 sm:p-5 border border-[#E8DFC8] flex flex-col items-center justify-center shadow-inner hover:border-[#D4AF37]/60 transition-colors">
                  <span className="font-royal text-4xl sm:text-5xl text-[#3B2516] font-semibold tabular-nums tracking-tight">
                    {padZero(timeLeft.minutes)}
                  </span>
                  <span className="font-serif-elegant text-xs uppercase tracking-[0.2em] text-[#8C6D2B] mt-1.5 font-semibold">
                    Minutes
                  </span>
                </div>

                {/* Seconds */}
                <div className="bg-[#FAF5EB] rounded-2xl p-4 sm:p-5 border border-[#E8DFC8] flex flex-col items-center justify-center shadow-inner hover:border-[#D4AF37]/60 transition-colors">
                  <span className="font-royal text-4xl sm:text-5xl text-[#8B0000] font-semibold tabular-nums tracking-tight">
                    {padZero(timeLeft.seconds)}
                  </span>
                  <span className="font-serif-elegant text-xs uppercase tracking-[0.2em] text-[#8C6D2B] mt-1.5 font-semibold">
                    Seconds
                  </span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="zero-state"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-8 px-4 text-center space-y-4"
              >
                <div className="flex justify-center items-center gap-3 text-[#D4AF37] mb-2">
                  <DiyaMotif size={36} />
                  <VarmalaMotif size={44} className="text-[#C2185B]" />
                  <DiyaMotif size={36} />
                </div>
                {/* User's exact required zero message */}
                <h3 className="font-royal text-3xl sm:text-4xl text-[#8B0000] font-semibold tracking-wide">
                  The Moment Has Arrived! ❤️
                </h3>
                <p className="font-serif-elegant text-base sm:text-lg text-[#5C4837] italic max-w-lg mx-auto">
                  The auspicious Varmala ceremony of Priyanka &amp; Prasad is now taking place amidst holy chants and shower of rose petals.
                </p>
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFF9E6] border border-[#E8D7B5] rounded-full text-xs font-semibold text-[#8C6D2B] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Varmala Ceremony Live · 12:14 PM IST</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtitle badge below countdown */}
          <div className="mt-6 pt-4 border-t border-[#E8DFC8]/60 flex items-center justify-center gap-3 text-xs text-[#7D6B58] font-serif-elegant">
            <SwastikMotif size={16} className="text-[#8B0000]" />
            <span>Targeting 26 November 2026, 12:14 PM (IST) · Kuber Lawns, Nashik</span>
            <SwastikMotif size={16} className="text-[#8B0000]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
