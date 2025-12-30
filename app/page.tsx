import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ScheduleSection from '@/components/ScheduleSection';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import BackgroundEffects from '@/components/BackgroundEffects';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white relative">
      <BackgroundEffects />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <ScheduleSection />
        <InfoSection />
      </div>
      <Footer />
    </main>
  );
}