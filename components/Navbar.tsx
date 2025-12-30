"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-center py-4 px-4">
        <div className="bg-white/80 backdrop-blur-md border border-white/60 shadow-lg shadow-blue-900/5 rounded-4xl px-5 py-3 w-full max-w-5xl transition-all hover:bg-white/95 relative">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 md:w-12 md:h-12 drop-shadow-md">
                 <Image 
                   src="/favicon.ico" 
                   alt="Logo MAN IC" 
                   fill
                   className="object-contain"
                 />
              </div>
              <div>
                <h1 className="font-serif font-bold text-blue-950 leading-none text-sm md:text-base">MAN IC Siak</h1>
                <p className="text-[10px] font-bold text-blue-600 tracking-wider uppercase">Kampus Berprestasi</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
               <a href="#jadwal" className="hover:text-blue-600 transition-colors">Jadwal Seleksi</a>
               <a href="#informasi" className="hover:text-blue-600 transition-colors">Pusat Informasi</a>
            </div>

            <a 
              href="https://snmb-madrasah.kemenag.go.id" 
              target="_blank"
              className="hidden md:flex items-center gap-2 bg-linear-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg shadow-blue-600/20 transform hover:-translate-y-0.5"
            >
              Portal SNMB <ChevronRight size={14} />
            </a>

            <button 
              className="md:hidden text-blue-950 p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white/95 backdrop-blur-xl border border-white/60 rounded-2xl shadow-xl flex flex-col gap-4 md:hidden border-t">
               <a href="#jadwal" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-lg">Jadwal Seleksi</a>
               <a href="#informasi" onClick={() => setIsOpen(false)} className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-lg">Pusat Informasi</a>
               <a 
                href="https://snmb-madrasah.kemenag.go.id" 
                target="_blank"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-bold text-sm"
              >
                Portal SNMB <ChevronRight size={14} />
              </a>
            </div>
          )}

        </div>
    </nav>
  );
}