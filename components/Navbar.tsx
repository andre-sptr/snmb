"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Menu, X, FileText, Calendar, Info } from 'lucide-react'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Jadwal Seleksi', href: '/#jadwal', icon: <Calendar size={16} /> },
    { name: 'Pusat Informasi', href: '/#informasi', icon: <Info size={16} /> },
    { name: 'Juknis', href: '/juknis', icon: <FileText size={16} /> },
  ];

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 flex justify-center px-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div 
          className={`
            border border-white/60 rounded-4xl px-5 py-3 w-full max-w-5xl transition-all duration-300 relative
            ${isScrolled 
              ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-blue-900/10' 
              : 'bg-white/80 backdrop-blur-md shadow-md shadow-blue-900/5 hover:bg-white/95'}
          `}
        >
          
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 md:w-12 md:h-12 drop-shadow-md transition-transform group-hover:scale-105">
                 <Image 
                   src="/favicon.ico" 
                   alt="Logo MAN IC" 
                   fill
                   priority
                   className="object-contain"
                 />
              </div>
              <div>
                <h1 className="font-serif font-bold text-blue-950 leading-none text-sm md:text-base group-hover:text-blue-700 transition-colors">MAN IC Siak</h1>
                <p className="text-[10px] font-bold text-blue-600 tracking-wider uppercase">Kampus Berprestasi</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
               {navLinks.map((link) => (
                 <Link 
                    key={link.name}
                    href={link.href} 
                    className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-all"
                 >
                    {link.name}
                 </Link>
               ))}
            </div>

            <div className="flex items-center gap-3">
                <a 
                href="https://snmb-madrasah.kemenag.go.id" 
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-linear-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-lg shadow-blue-600/20 transform hover:-translate-y-0.5 active:scale-95"
                >
                Portal SNMB <ChevronRight size={14} />
                </a>

                <button 
                className="md:hidden text-blue-950 p-2 hover:bg-blue-50 rounded-full transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Buka Menu Navigasi"
                >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-white/95 backdrop-blur-2xl border border-white/60 rounded-2xl shadow-xl flex flex-col gap-2 md:hidden animate-menu-slide origin-top">
               {navLinks.map((link) => (
                 <Link 
                    key={link.name}
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="flex items-center gap-3 text-slate-700 font-medium p-3 hover:bg-blue-50 hover:text-blue-700 rounded-xl transition-colors"
                 >
                    <span className="text-blue-500">{link.icon}</span>
                    {link.name}
                 </Link>
               ))}
               
               <div className="h-px bg-slate-100 my-1"></div>

               <a 
                href="https://snmb-madrasah.kemenag.go.id" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-600/20 active:scale-95 transition-transform"
              >
                Portal SNMB <ChevronRight size={14} />
              </a>
            </div>
          )}

        </div>
    </nav>
  );
}