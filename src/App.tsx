/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { InvitationSection } from './components/InvitationSection';
import { CountdownSection } from './components/CountdownSection';
import { EventsSection } from './components/EventsSection';
import { VenueSection } from './components/VenueSection';
import { Footer } from './components/Footer';
import { FloatingPetals } from './components/FloatingPetals';

export default function App() {
  // Invitation welcome screen state
  const [hasOpenedInvitation, setHasOpenedInvitation] = useState<boolean>(false);

  const handleOpenInvitation = () => {
    setHasOpenedInvitation(true);
    // Smooth scroll to the invitation after opening
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReopenWelcome = () => {
    setHasOpenedInvitation(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2424] font-sans relative selection:bg-[#E2C799] selection:text-[#3B2516]">
      {/* Realistic Falling Rose Petals — Always Active Continuously */}
      <FloatingPetals />

      {/* Full-Screen 3D Wedding Envelope Opening */}
      <AnimatePresence>
        {!hasOpenedInvitation && (
          <WelcomeScreen
            isOpen={hasOpenedInvitation}
            onOpen={handleOpenInvitation}
          />
        )}
      </AnimatePresence>

      {/* Main Wedding Invitation Document Experience (No Navbar or Dashboard UI) */}
      <div className="relative">
        <main>
          {/* Section 1: Traditional Wedding Invitation with Family Details & Shlokas */}
          <InvitationSection />

          {/* Section 2: Live Varmala Countdown (26 November 2026 at 12:14 PM IST) */}
          <CountdownSection />

          {/* Section 3: Bride-Side Wedding Events (Dev Brahman Puja & Lunch, Varmala) */}
          <EventsSection />

          {/* Section 4: Wedding Venue & Embedded Google Maps */}
          <VenueSection />
        </main>

        {/* Section 5: Closing & Thank You Section */}
        <Footer onReopenWelcome={handleReopenWelcome} />
      </div>
    </div>
  );
}
