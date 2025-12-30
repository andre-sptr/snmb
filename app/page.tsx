import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ScheduleSection from '@/components/ScheduleSection';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import BackgroundEffects from '@/components/BackgroundEffects';
import FAQSection from "@/components/FAQSection";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-600 selection:text-white relative">
      <BackgroundEffects />
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <ScheduleSection />
        <FAQSection />
        <CountdownTimer 
          targetDateStr="2026-02-07T23:59:59" 
          title="Hitung Mundur Pendaftaran"
          subTitle="Segera persiapkan berkas terbaikmu dan bergabunglah bersama kami."
        />
        <InfoSection />
      </div>
      <Footer />
    </main>
  );
}