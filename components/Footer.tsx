import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#0B1120] text-slate-400 py-20 font-sans overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-800 to-transparent opacity-50"></div>
        <div className="absolute -top-75 -right-75 w-150 h-150 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="grid md:grid-cols-3 gap-12 lg:gap-20 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative opacity-100 transition-all duration-500">
                  <Image src="/favicon.ico" alt="Logo MAN IC" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-serif font-bold text-xl leading-none tracking-tight">MAN Insan Cendekia Siak</h3>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mt-1.5">Kampus Prestasi</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400/90 max-w-sm text-justify">
                Berkomitmen mencetak generasi unggul yang menyeimbangkan kecerdasan intelektual dan spiritual, berakhlak mulia, serta siap bersaing di kancah global dengan landasan iman yang kokoh demi kemajuan bangsa.
              </p>
              <div className="flex items-start gap-3 text-sm mt-6 text-slate-400 group">
                <div className="p-2 rounded-full bg-blue-900/20 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="leading-relaxed pt-1">Jl. Pemda KM 11, Perawang Barat, Kec. Tualang, Kabupaten Siak, Riau 28685</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest border-l-2 border-blue-600 pl-3">Media Sosial</h4>
              <div className="space-y-4">
                <a href="https://instagram.com/manic_siak" target="_blank" className="flex items-center gap-4 group p-2 -ml-2 rounded-lg hover:bg-white/5 transition-all">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-linear-to-tr group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white group-hover:border-transparent transition-all shadow-lg">
                    <Instagram size={18} />
                  </div>
                  <div>
                      <span className="block text-sm font-medium text-slate-300 group-hover:text-white transition-colors">@manic_siak</span>
                      <span className="text-xs text-slate-500">Instagram Official</span>
                  </div>
                </a>
                <a href="https://youtube.com/@manicsiakofficial" target="_blank" className="flex items-center gap-4 group p-2 -ml-2 rounded-lg hover:bg-white/5 transition-all">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all shadow-lg">
                    <Youtube size={18} />
                  </div>
                  <div>
                      <span className="block text-sm font-medium text-slate-300 group-hover:text-white transition-colors">MAN IC Siak Official</span>
                      <span className="text-xs text-slate-500">Youtube Channel</span>
                  </div>
                </a>
                <a href="https://facebook.com/manicsiak" target="_blank" className="flex items-center gap-4 group p-2 -ml-2 rounded-lg hover:bg-white/5 transition-all">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all shadow-lg">
                    <Facebook size={18} />
                  </div>
                  <div>
                      <span className="block text-sm font-medium text-slate-300 group-hover:text-white transition-colors">MAN Insan Cendekia Siak</span>
                      <span className="text-xs text-slate-500">Facebook Page</span>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest border-l-2 border-amber-500 pl-3">Lokasi Kami</h4>
              <div className="w-full h-64 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-colors pointer-events-none z-10"></div>
                
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5326127905546!2d101.5636605!3d0.6856847999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d44e5c7392bc85%3A0x90f4a1e1a9464d9b!2sMAN%20Insan%20Cendekia%20Siak!5e0!3m2!1sid!2sid!4v1767089661722!5m2!1sid!2sid"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-700"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} MAN Insan Cendekia Siak.</p>
            <div className="flex gap-8">
              <Link 
                href="/juknis" 
                className="hover:text-blue-400 cursor-pointer transition-colors flex items-center gap-2"
              >
                Juknis Pendaftaran
              </Link>
              
              <a href="https://snmb-madrasah.kemenag.go.id" target="_blank" className="hover:text-blue-400 cursor-pointer transition-colors">
                Link Pendaftaran
              </a>
            </div>
          </div>

        </div>
    </footer>
  );
}