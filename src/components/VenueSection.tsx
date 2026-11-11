import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/weddingData';
import { MandalaDivider, LotusMotif, CornerFlourish, KalashMotif, SwastikMotif } from './Motifs';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const VenueSection: React.FC = () => {
  const { venue } = weddingData;

  return (
    <section id="venue" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F5EFEB]/50 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-script text-3xl md:text-4xl text-[#B38728] mb-1">
            Auspicious Destination
          </p>
          <h2 className="font-royal text-3xl sm:text-4xl text-[#2D2424] font-medium tracking-wide">
            The Wedding Venue
          </h2>
          <MandalaDivider title="Nashik, Maharashtra" showSwastik={true} />
          <p className="font-serif-elegant text-base md:text-lg text-[#5C4837] italic mt-1.5">
            We cordially invite you to join us at Kuber Lawns for the wedding ceremonies.
          </p>
        </div>

        {/* Venue Master Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#D4AF37]/50 shadow-xl overflow-hidden"
        >
          {/* Corner Flourishes */}
          <div className="absolute top-4 left-4 pointer-events-none">
            <CornerFlourish size={36} rotation={0} className="text-[#C5A059]" />
          </div>
          <div className="absolute top-4 right-4 pointer-events-none">
            <CornerFlourish size={36} rotation={90} className="text-[#C5A059]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Venue Details & Prominent Get Directions CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-royal text-xs uppercase tracking-[0.2em] text-[#B38728] font-semibold">
                  Ceremony &amp; Celebration Grounds
                </span>
                <h3 className="font-royal text-3xl sm:text-4xl text-[#2D2424] font-semibold mt-1">
                  {venue.name}
                </h3>
                <p className="font-serif-elegant italic text-sm text-[#8C6D2B] mt-1">
                  {venue.tagline}
                </p>
              </div>

              {/* Complete Address Box */}
              <div className="bg-[#FAF5EB] rounded-2xl p-5 sm:p-6 border border-[#E8DFC8] space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#8B0000] shrink-0 mt-0.5" />
                  <div className="text-sm text-[#4A3928] leading-relaxed font-serif-elegant">
                    <p className="font-semibold text-base text-[#2D2424]">
                      {venue.name}
                    </p>
                    <p className="mt-1">
                      {venue.address}
                    </p>
                    <p className="font-semibold text-[#8B0000]">
                      {venue.city} - {venue.pincode}, {venue.state}.
                    </p>
                  </div>
                </div>

                {/* Prominent "Get Directions" Button Opening Maps link */}
                <div className="pt-2">
                  <a
                    href={venue.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-5 py-3.5 bg-gradient-to-r from-[#B38728] via-[#D4AF37] to-[#AA771C] hover:from-[#C5A059] hover:to-[#B38728] text-white rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Navigation className="w-4 h-4 text-[#FFE8A3]" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#7D6B58] font-serif-elegant">
                <SwastikMotif size={16} className="text-[#8B0000]" />
                <span>Gayatri Nagar, near Govind Nagar, Old CIDCO, Nashik</span>
                <SwastikMotif size={16} className="text-[#8B0000]" />
              </div>
            </div>

            {/* Right Column: Embedded Interactive Google Map */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-inner bg-[#FAF5EB]">
                <iframe
                  title="Kuber Lawns Nashik Wedding Venue Map"
                  src={venue.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-105"
                />
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-[#D4AF37]/50 shadow text-xs text-[#4A3928] font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8B0000]" />
                  <span>Kuber Lawns · Nashik</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-4 mt-12 text-[#C5A059]">
          <KalashMotif size={28} className="text-[#B38728]" />
          <LotusMotif size={24} className="text-[#C5A059]" />
          <KalashMotif size={28} className="text-[#B38728]" />
        </div>
      </div>
    </section>
  );
};
