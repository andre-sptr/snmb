"use client";

import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

export default function CountdownTimer() {
  const targetDate = new Date("2026-03-01T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/90 backdrop-blur-sm text-blue-900 text-3xl md:text-5xl font-bold p-4 md:p-6 rounded-2xl shadow-lg border border-blue-100 min-w-[80px] md:min-w-[100px] text-center font-serif">
        {value < 10 ? `0${value}` : value}
      </div>
      <span className="text-white mt-2 text-xs md:text-sm font-medium uppercase tracking-widest">
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative py-16 px-4 overflow-hidden">

      <div className="absolute inset-0 bg-linear-to-r from-blue-900 to-blue-800 -z-10" />
      <div className="absolute inset-0 opacity-10 bg-[url('/globe.svg')] bg-repeat bg-center -z-10 mix-blend-overlay" />

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-800/50 text-blue-100 border border-blue-700 text-sm font-medium mb-6">
          <Timer size={16} />
          <span>Batas Waktu Pendaftaran Jalur Tes</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="Hari" />
          <TimeUnit value={timeLeft.hours} label="Jam" />
          <TimeUnit value={timeLeft.minutes} label="Menit" />
          <TimeUnit value={timeLeft.seconds} label="Detik" />
        </div>

        <div className="mt-10">
          <p className="text-blue-100 mb-6 text-lg">Jangan sampai terlewat! Segera lengkapi berkas Anda.</p>
          <a 
            href="https://snmb-madrasah.kemenag.go.id" 
            target="_blank"
            className="inline-block bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}