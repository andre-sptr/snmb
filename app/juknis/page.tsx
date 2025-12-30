"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, FileText, ExternalLink, AlertCircle } from 'lucide-react';

export default function JuknisPage() {

  const pdfUrl = "/JuknisSNMB.pdf";

  return (
    <main className="min-h-screen bg-[#0f172a] flex flex-col relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-96 bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <header className="sticky top-0 z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-700/50 px-4 py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Link 
              href="/" 
              className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all flex items-center justify-center shrink-0"
              title="Kembali ke Beranda"
            >
              <ArrowLeft size={20} />
            </Link>
            
            <div className="flex items-center gap-3">
              <div className="bg-blue-600/20 p-2 rounded-lg text-blue-400 hidden sm:block">
                <FileText size={20} />
              </div>
              <div>
                <h1 className="text-white font-bold text-sm md:text-lg leading-tight">Juknis Pendaftaran SNMB</h1>
                <p className="text-xs text-slate-400">Pratinjau Dokumen PDF</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
             <a 
              href={pdfUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 hover:border-slate-500 transition-all"
            >
              <ExternalLink size={22} /> Buka Penuh
            </a>

            <a 
              href={pdfUrl} 
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold shadow-lg shadow-blue-900/50 hover:shadow-blue-600/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </header>

      <div className="flex-1 p-4 md:p-8 flex justify-center overflow-hidden">
        <div className="w-full max-w-3xl h-[70vh] md:h-[80vh] bg-slate-800 rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden relative">

          <div className="absolute inset-0 flex items-center justify-center text-slate-500 z-0">
             <div className="text-center animate-pulse">
                <FileText size={48} className="mx-auto mb-2 opacity-50" />
                <p className="text-sm">Memuat Dokumen...</p>
             </div>
          </div>

          <object
            data={`${pdfUrl}#toolbar=0&view=FitH`}
            type="application/pdf"
            className="w-full h-full relative z-10"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/90 text-center p-6 z-0">

              <div className="relative mb-6 group">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full group-hover:bg-blue-500/30 transition-all duration-700" />
                <div className="relative bg-slate-800/80 backdrop-blur-md p-5 rounded-2xl border border-slate-700 shadow-2xl ring-1 ring-white/10">
                  <FileText size={40} className="text-blue-400" />
                  <div className="absolute -top-2 -right-2 bg-slate-900 text-amber-500 rounded-full p-1 border border-slate-700 shadow-lg">
                    <AlertCircle size={14} />
                  </div>
                </div>
              </div>

              <h3 className="text-white text-lg md:text-xl font-bold mb-2 tracking-tight">
                Tampilan Pratinjau Terbatas
              </h3>
              <p className="text-slate-400 text-sm max-w-xs md:max-w-sm mb-8 leading-relaxed">
                Browser Anda tidak mendukung tampilan PDF langsung. Jangan khawatir, Anda tetap bisa membaca dokumen lengkapnya.
              </p>

              <a 
                href={pdfUrl} 
                download
                className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-900/40 transition-all transform hover:-translate-y-1"
              >
                <Download size={18} className="group-hover:animate-bounce" />
                <span>Download PDF</span>
                <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

            </div>
          </object>
        </div>
      </div>
    </main>
  );
}