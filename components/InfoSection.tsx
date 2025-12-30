import React from 'react';
import { Phone, ExternalLink, Globe, Monitor, ArrowRight } from 'lucide-react';

export default function InfoSection() {
  return (
    <section id="informasi" className="py-24 bg-linear-to-br from-blue-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-125 h-125 border border-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute top-0 right-0 w-175 h-175 border border-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center shadow-2xl">
            
            <div className="flex-1 space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-3">Pusat Informasi</h2>
                <div className="h-1 w-16 bg-amber-400 rounded-full"></div>
              </div>
              <p className="text-blue-100/90 leading-relaxed text-lg">
                Dapatkan update resmi dan berdiskusi dengan panitia serta calon wali murid lainnya melalui kanal resmi kami.
              </p>
              
              <div className="space-y-4">
                <a href="https://chat.whatsapp.com/BCOiGOUW1rJAuzETix31tI" target="_blank" 
                   className="group flex items-center gap-4 p-4 rounded-xl bg-linear-to-r from-emerald-600/20 to-emerald-600/10 hover:from-emerald-600/30 border border-emerald-500/20 transition-all">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Grup WhatsApp</h4>
                    <p className="text-xs text-emerald-200">Diskusi SNMB 2026</p>
                  </div>
                  <ExternalLink className="ml-auto text-emerald-400 group-hover:text-white transition-colors" size={20}/>
                </a>

                <a href="https://linktr.ee/manicsiak" target="_blank"
                   className="group flex items-center gap-4 p-4 rounded-xl bg-linear-to-r from-amber-500/20 to-amber-500/10 hover:from-amber-500/30 border border-amber-500/20 transition-all">
                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center text-blue-900 shadow-lg shrink-0">
                    <Globe size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">Linktree Resmi</h4>
                    <p className="text-xs text-amber-200">Semua Informasi Penting</p>
                  </div>
                   <ExternalLink className="ml-auto text-amber-400 group-hover:text-white transition-colors" size={20}/>
                </a>
              </div>
            </div>

            <div className="hidden md:block w-px h-72 bg-linear-to-b from-transparent via-white/20 to-transparent"></div>

            <div className="flex-1 text-center">
               <div className="inline-block p-5 rounded-full bg-blue-800/50 border border-blue-700/50 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                  <Monitor size={56} className="text-cyan-300" />
               </div>
               <h3 className="text-3xl font-serif font-bold text-white mb-3">Siap Berprestasi?</h3>
               <p className="text-sm text-blue-200 mb-8 px-4 leading-relaxed">
                 Pastikan anda telah membaca persyaratan lengkap di website resmi Kementerian Agama sebelum mengisi formulir.
               </p>
               <a 
                href="https://snmb-madrasah.kemenag.go.id" 
                target="_blank"
                className="inline-flex items-center gap-2 bg-linear-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 font-bold py-4 px-10 rounded-full transition-all shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.6)] transform hover:scale-105"
               >
                 Daftar Sekarang <ArrowRight size={20}/>
               </a>
            </div>

          </div>
        </div>
    </section>
  );
}