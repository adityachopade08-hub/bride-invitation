import React from 'react';
import { motion } from 'motion/react';
import { weddingData, WeddingEvent } from '../data/weddingData';
import {
  MandalaDivider,
  LotusMotif,
  CornerFlourish,
  ShehnaiDholMotif,
  SacredAgniMotif,
  VarmalaMotif,
  KalashMotif,
  SwastikMotif
} from './Motifs';
import {
  Sun,
  Calendar,
  Clock,
  MapPin,
  CalendarPlus
} from 'lucide-react';

export const EventsSection: React.FC = () => {
  const { events, venue } = weddingData;

  // Return domain-authentic traditional motif for each of the functions
  const renderFunctionIllustration = (visualTheme: WeddingEvent['visualTheme']) => {
    switch (visualTheme) {
      case 'puja':
        return (
          <div className="p-2.5 rounded-full bg-amber-100/80 border border-amber-300 shadow-sm shrink-0">
            <KalashMotif size={32} className="text-[#B38728]" />
          </div>
        );
      case 'haldi':
        return (
          <div className="p-2.5 rounded-full bg-amber-100/80 border border-amber-300 shadow-sm shrink-0">
            <Sun className="w-7 h-7 text-amber-600 animate-spin-slow" />
          </div>
        );
      case 'sangeet':
        return (
          <div className="p-2.5 rounded-full bg-purple-100/80 border border-purple-300 shadow-sm shrink-0">
            <ShehnaiDholMotif size={32} className="text-purple-700" />
          </div>
        );
      case 'vivah':
        return (
          <div className="p-2.5 rounded-full bg-rose-100/80 border border-rose-300 shadow-sm shrink-0">
            <SacredAgniMotif size={32} className="text-rose-700" />
          </div>
        );
      case 'varmala':
        return (
          <div className="p-2.5 rounded-full bg-red-100/80 border border-red-300 shadow-sm shrink-0">
            <VarmalaMotif size={32} className="text-[#8B0000]" />
          </div>
        );
    }
  };

  // Google Calendar URL specific to Varmala: 26 November 2026, 12:14 PM IST to 1:14 PM IST
  const createVarmalaGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Varmala – Prasad & Priyanka");
    const details = encodeURIComponent(
      "Auspicious Varmala ceremony of Priyanka Deshpande & Prasad Chopade at 12:14 PM IST sharp.\n\nVenue: Kuber Lawns, Gayatri Nagar, near Govind Nagar, Old CIDCO, Nashik - 422009."
    );
    const location = encodeURIComponent(venue.fullAddress);
    // 26 Nov 2026 12:14 PM to 1:14 PM
    const dates = "20261126T121400/20261126T131400";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  return (
    <section id="events" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-script text-3xl md:text-4xl text-[#B38728] mb-1">
            Auspicious Celebrations
          </p>
          <h2 className="font-royal text-3xl sm:text-4xl text-[#2D2424] font-medium tracking-wide">
            Wedding Itinerary
          </h2>
          <MandalaDivider title="Shubh Mangal Karyakram" showSwastik={true} />
          <p className="font-serif-elegant text-base md:text-lg text-[#5C4837] italic mt-1.5">
            Join us in the sacred ceremonies of Dev Brahman Puja and the auspicious Varmala.
          </p>
        </div>

        {/* 2 Events Vertical Cards Container without any numbering */}
        <div className="space-y-7 sm:space-y-9">
          {events.map((ev, idx) => {
            const isVarmala = ev.id === 'varmala';

            return (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 md:p-9 border-2 ${
                  isVarmala
                    ? 'border-[#D4AF37] shadow-xl ring-1 ring-[#D4AF37]/30'
                    : 'border-[#D4AF37]/40 shadow-lg'
                } hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Corner Flourishes */}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <CornerFlourish size={24} rotation={0} className="text-[#C5A059]/60" />
                </div>
                <div className="absolute top-3 right-3 pointer-events-none">
                  <CornerFlourish size={24} rotation={90} className="text-[#C5A059]/60" />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-3 border-b border-[#E8DFC8]/60 pb-3">
                  <div className="flex items-center gap-3">
                    {renderFunctionIllustration(ev.visualTheme)}
                    <div>
                      {/* Name only without any function numbering */}
                      <h3 className="font-royal text-2xl sm:text-3xl text-[#2D2424] font-semibold tracking-wide">
                        {ev.name}
                      </h3>
                      <p className="font-serif-elegant text-xs sm:text-sm text-[#8B0000] font-medium tracking-wide">
                        {ev.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Event Date & Time Pill */}
                  <div className="bg-[#FAF5EB] px-4 py-2 rounded-xl border border-[#D4AF37]/50 text-right shrink-0">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B0000] font-serif-elegant">
                      <Calendar className="w-4 h-4 text-[#C5A059]" />
                      <span>{ev.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#5C4837] font-medium justify-end mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{ev.time}</span>
                    </div>
                  </div>
                </div>

                {/* Venue details */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#5C4837] font-serif-elegant mb-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="font-semibold text-[#4A3928]">
                    {ev.id === 'dev-brahman-puja' ? 'Our Home' : ev.venue}
                  </span>
                </div>

                {/* Event Description */}
                <p className="font-sans text-xs sm:text-sm text-[#665544] leading-relaxed">
                  {ev.description}
                </p>

                {/* Action Buttons — ONLY for VARMALA (No Google Maps or address for Dev Brahman Puja) */}
                {isVarmala && (
                  <div className="pt-4 mt-4 border-t border-[#E8DFC8]/70 flex items-center justify-between flex-wrap gap-3">
                    <span className="text-xs text-[#8C6D2B] font-serif-elegant font-medium italic">
                      Auspicious Muhurat at 12:14 PM IST
                    </span>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <a
                        href={venue.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 bg-[#FAF5EB] hover:bg-[#F5EBD7] text-[#8C6D2B] border border-[#D4AF37]/60 rounded-xl text-xs font-semibold tracking-wider transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-xs hover:shadow-sm"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#B38728]" />
                        <span>Google Maps</span>
                      </a>
                      <a
                        href={createVarmalaGoogleCalendarUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-[#B38728] to-[#996515] hover:from-[#C5A059] hover:to-[#AA771C] text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer"
                      >
                        <CalendarPlus className="w-4 h-4 text-[#FFE8A3]" />
                        <span>Add to Google Calendar</span>
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Closing traditional icons */}
        <div className="flex items-center justify-center gap-4 mt-12 text-[#C5A059]">
          <KalashMotif size={28} className="text-[#B38728]" />
          <SwastikMotif size={20} className="text-[#8B0000]" />
          <LotusMotif size={26} className="text-[#C5A059]" />
          <SwastikMotif size={20} className="text-[#8B0000]" />
          <KalashMotif size={28} className="text-[#B38728]" />
        </div>
      </div>
    </section>
  );
};
