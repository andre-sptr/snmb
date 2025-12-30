// app/page.tsx
import React from 'react';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

// IMPORT COMPONENTS
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ScheduleSection from '@/components/ScheduleSection';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import BackgroundEffects from '@/components/BackgroundEffects';

// FONT CONFIGURATION
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans' });

export default function Home() {
  return (
    <main className={`${jakarta.variable} ${playfair.variable} min-h-screen bg-slate-50 font-sans selection:bg-blue-600 selection:text-white relative`}>
      
      {/* Background Layer */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <ScheduleSection />
        <InfoSection />
      </div>

      {/* Footer */}
      <Footer />
      
    </main>
  );
}