import React from 'react';
import { motion } from 'motion/react';
import {
  GoldenGaneshaImage,
  MandalaDivider,
  CornerFlourish,
  LotusMotif,
  ElephantMotif,
  KalashMotif,
  SwastikMotif,
  ToranArchMotif
} from './Motifs';
import { weddingData } from '../data/weddingData';
import { Heart } from 'lucide-react';

export const InvitationSection: React.FC = () => {
  const { couple, invitation } = weddingData;

  return (
    <section id="invitation" className="relative pt-10 pb-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#FFF5DC]/70 via-[#FAF7F2]/40 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        {/* Main Royal Parchment Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 md:p-16 border-2 border-[#D4AF37]/50 shadow-2xl text-center overflow-hidden"
        >
          {/* Top Decorative Toran Garland */}
          <div className="absolute top-0 left-0 right-0 z-10">
            <ToranArchMotif />
          </div>

          {/* Inner hairline border */}
          <div className="absolute inset-4 sm:inset-6 rounded-2xl border border-[#D4AF37]/35 pointer-events-none" />

          {/* Four Corner Flourishes */}
          <div className="absolute top-5 left-5 pointer-events-none">
            <CornerFlourish size={38} rotation={0} className="text-[#C5A059]" />
          </div>
          <div className="absolute top-5 right-5 pointer-events-none">
            <CornerFlourish size={38} rotation={90} className="text-[#C5A059]" />
          </div>
          <div className="absolute bottom-5 right-5 pointer-events-none">
            <CornerFlourish size={38} rotation={180} className="text-[#C5A059]" />
          </div>
          <div className="absolute bottom-5 left-5 pointer-events-none">
            <CornerFlourish size={38} rotation={270} className="text-[#C5A059]" />
          </div>

          {/* Auspicious Mangal Swastiks and Uploaded Golden Lord Ganesha Image */}
          <div className="flex flex-col items-center mt-4 sm:mt-6 mb-6">
            <div className="flex items-center justify-center gap-4 sm:gap-8 mb-3">
              <div className="hidden sm:block">
                <KalashMotif size={36} className="text-[#B38728]" />
              </div>
              <SwastikMotif size={24} className="text-[#8B0000]" />
              <div className="p-2 sm:p-2.5 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EB] rounded-2xl border border-[#E8D7B5] shadow-sm flex items-center justify-center">
                <GoldenGaneshaImage size={68} className="w-16 h-16 sm:w-20 sm:h-20" />
              </div>
              <SwastikMotif size={24} className="text-[#8B0000]" />
              <div className="hidden sm:block">
                <KalashMotif size={36} className="text-[#B38728]" />
              </div>
            </div>

            <p className="font-royal text-sm md:text-base font-semibold tracking-[0.25em] text-[#8C6D2B] uppercase">
              ॥ श्री गणेशाय नमः ॥
            </p>

            <blockquote className="mt-3 max-w-xl font-serif-elegant text-base md:text-lg text-[#4A3928] italic font-medium leading-relaxed">
              &ldquo;{invitation.ganeshaMantra.sanskrit}&rdquo;
            </blockquote>
          </div>

          <MandalaDivider title="Shubh Vivah" showSwastik={true} />

          {/* Traditional Formal Invitation Verse */}
          <p className="max-w-2xl mx-auto font-serif-elegant text-base sm:text-lg text-[#4A3928] leading-relaxed mb-6 mt-4">
            {invitation.formalMessage}
          </p>

          {/* REAL COUPLE PHOTOGRAPH: Beautifully presented in royal gold frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="my-8 max-w-md mx-auto"
          >
            <div className="relative p-2.5 sm:p-3 bg-[#FAF5EB] rounded-3xl border-2 border-[#D4AF37]/60 shadow-xl">
              {/* Inner golden trim */}
              <div className="absolute inset-2 rounded-2xl border border-[#D4AF37]/40 pointer-events-none" />

              {/* Four small decorative corner flourishes on photo */}
              <div className="absolute top-2 left-2 pointer-events-none">
                <CornerFlourish size={22} rotation={0} className="text-[#C5A059]" />
              </div>
              <div className="absolute top-2 right-2 pointer-events-none">
                <CornerFlourish size={22} rotation={90} className="text-[#C5A059]" />
              </div>
              <div className="absolute bottom-2 right-2 pointer-events-none">
                <CornerFlourish size={22} rotation={180} className="text-[#C5A059]" />
              </div>
              <div className="absolute bottom-2 left-2 pointer-events-none">
                <CornerFlourish size={22} rotation={270} className="text-[#C5A059]" />
              </div>

              {/* The Actual Uploaded Couple Photograph */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1.15/1] bg-stone-100 shadow-inner">
                <img
                  src={couple.couplePhoto}
                  alt="Priyanka Deshpande and Prasad Chopade"
                  className="w-full h-full object-cover object-[center_28%] hover:scale-103 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Photo Caption Tag */}
              <div className="mt-2 text-center">
                <span className="font-royal text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#8C6D2B] font-semibold">
                  Priyanka &amp; Prasad
                </span>
              </div>
            </div>
          </motion.div>

          {/* Couple Announcement with Parents in Traditional Format */}
          <div className="my-6 md:my-10 space-y-7">
            {/* Bride Lockup */}
            <div className="space-y-1.5 relative">
              <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl text-[#2D2424] font-medium tracking-wide">
                {couple.bride.fullName}
              </h2>
              <p className="text-xs sm:text-sm font-serif-elegant tracking-wider uppercase text-[#8C6D2B] font-semibold">
                Daughter of
              </p>
              <p className="font-serif-elegant text-base sm:text-lg text-[#4A3928] font-semibold">
                Smt. {couple.bride.motherName} &amp; Shri {couple.bride.fatherName}
              </p>
            </div>

            {/* Sacred Knot Symbol with Refined Royal Elephants on either side */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 text-[#C5A059] my-6">
              <div className="hidden sm:block">
                <ElephantMotif size={65} mirrored={false} className="text-[#8B0000]" />
              </div>
              <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-[#C5A059]" />
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF5EB] border border-[#E8D7B5]">
                <Heart className="w-4 h-4 fill-[#8B0000] text-[#8B0000]" />
                <span className="font-serif-elegant italic text-sm text-[#8C6D2B] font-semibold">weds</span>
              </div>
              <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-[#C5A059]" />
              <div className="hidden sm:block">
                <ElephantMotif size={65} mirrored={true} className="text-[#8B0000]" />
              </div>
            </div>

            {/* Groom Lockup */}
            <div className="space-y-1.5 relative">
              <h2 className="font-royal text-3xl sm:text-4xl md:text-5xl text-[#2D2424] font-medium tracking-wide">
                {couple.groom.fullName}
              </h2>
              <p className="text-xs sm:text-sm font-serif-elegant tracking-wider uppercase text-[#8C6D2B] font-semibold">
                Son of
              </p>
              <p className="font-serif-elegant text-base sm:text-lg text-[#4A3928] font-semibold">
                Smt. {couple.groom.motherName} &amp; Shri {couple.groom.fatherName}
              </p>
            </div>
          </div>

          {/* Family Request and Sacred Shloka Note */}
          <div className="pt-6 border-t border-[#E8DFC8]/70 max-w-2xl mx-auto space-y-3">
            <p className="font-serif-elegant text-sm sm:text-base text-[#5C4837] italic leading-relaxed">
              &ldquo;{invitation.familyRequest}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-3 text-[#C5A059] pt-2">
              <KalashMotif size={24} className="text-[#B38728]" />
              <LotusMotif size={22} className="text-[#C5A059]" />
              <KalashMotif size={24} className="text-[#B38728]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
