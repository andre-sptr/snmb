import React from 'react';
import { Sparkles, Monitor, Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold tracking-wide mb-8 shadow-sm">
            <Sparkles size={12} className="text-amber-500 fill-amber-500" />
            PENERIMAAN PESERTA DIDIK BARU
          </div>

          <h1 className="font-serif text-5xl md:text-8xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
            Seleksi Nasional <br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-blue-700 via-cyan-500 to-blue-700">Murid Baru</span>
              <div className="absolute bottom-2 left-0 w-full h-3 bg-amber-300/30 z-0 -skew-x-12"></div>
            </span>
          </h1>
          
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Bergabunglah bersama <span className="font-bold text-blue-700">Generasi Cendekia</span>. Wujudkan prestasi di madrasah unggulan berasrama yang berkarakter, saintifik, dan berwawasan global.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://snmb-madrasah.kemenag.go.id" 
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl shadow-xl shadow-blue-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 border border-blue-800"
            >
              <Monitor size={20} /> Portal Pendaftaran
            </a>
             <a 
              href="https://linktr.ee/manicsiak" 
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-blue-900 font-bold rounded-xl border border-slate-200 shadow-lg shadow-slate-200/50 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Globe size={20} /> Pusat Informasi
            </a>
          </div>

           <div className="mt-12 flex flex-col items-center justify-center gap-2">
             <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Tahun Ajaran</span>
             <span className="text-2xl font-serif font-bold text-blue-950">2026 / 2027</span>
           </div>
        </div>
    </section>
  );
}