"use client";

import React, { useState, useEffect } from 'react';
import { Timer, ArrowRight } from 'lucide-react';

interface CountdownTimerProps {
  targetDateStr: string; // Format: "YYYY-MM-DDTHH:mm:ss"
  title?: string;
  subTitle?: string;
}

export default function CountdownTimer({ 
  targetDateStr = "2026-03-01T23:59:59", // Default value jika tidak diisi
  title = "Batas Waktu Pendaftaran Jalur Tes",
  subTitle = "Jangan sampai terlewat! Waktu terus berjalan menuju penutupan pendaftaran."
}: CountdownTimerProps) {
  
  // State untuk waktu
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  // State untuk memastikan ini hanya jalan di client (mencegah hydration error)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const targetDate = new Date(targetDateStr).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    // Set waktu awal segera
    setTimeLeft(calculateTime());

    const interval = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateStr]);

  // Komponen kecil untuk kotak waktu
  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center group">
      <div className="relative overflow-hidden bg-white/10 backdrop-blur-md text-white border border-white/20 
        text-4xl md:text-6xl font-serif font-bold p-4 md:p-6 rounded-2xl shadow-xl 
        min-w-21.25 md:min-w-30 text-center transition-transform transform group-hover:-translate-y-1 duration-300">
        
        {/* Efek kilau (shine effect) */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Menampilkan angka dengan leading zero */}
        <span className="drop-shadow-md">
           {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="text-blue-100 mt-3 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </div>
  );

  // Jika belum mounted, tampilkan loading state atau struktur kosong agar layout tidak bergeser
  if (!isMounted) return null;

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Utama dengan Gradient Modern */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 -z-20" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/globe.svg')] bg-repeat bg-center -z-10 mix-blend-overlay animate-pulse" style={{ animationDuration: '10s' }} />
      
      {/* Dekorasi Blur Bulat (Glow Effect) */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Label Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm text-blue-50 border border-white/20 text-sm font-medium mb-8 shadow-lg hover:bg-white/20 transition-colors cursor-default">
          <Timer size={18} className="animate-spin-slow" style={{ animationDuration: '3s' }} />
          <span>{title}</span>
        </div>

        {/* Counter Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          <TimeUnit value={timeLeft.days} label="Hari" />
          <TimeUnit value={timeLeft.hours} label="Jam" />
          <TimeUnit value={timeLeft.minutes} label="Menit" />
          <TimeUnit value={timeLeft.seconds} label="Detik" />
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-blue-100 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            {subTitle}
          </p>
          
          <a 
            href="https://snmb-madrasah.kemenag.go.id" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1 active:translate-y-0 overflow-hidden"
          >
            <span className="relative z-10">Daftar Sekarang</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            
            {/* Efek Hover Button */}
            <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}