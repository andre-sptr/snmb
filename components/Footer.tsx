import React from 'react';
import Image from 'next/image';
import { MapPin, Instagram, Youtube, Facebook, Mail, ExternalLink } from 'lucide-react';

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
                <div className="w-12 h-12 relative grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                  <Image src="/favicon.ico" alt="Logo MAN IC" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-white font-serif font-bold text-xl leading-none tracking-tight">MAN IC Siak</h3>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mt-1.5">Kampus Prestasi</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400/90 max-w-sm">
                Mewujudkan sumber daya manusia yang berkualitas tinggi dalam keimanan dan ketaqwaan, serta menguasai ilmu pengetahuan dan teknologi.
              </p>
              <div className="flex items-start gap-3 text-sm mt-6 text-slate-400 group">
                <div className="p-2 rounded-full bg-blue-900/20 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="leading-relaxed pt-1">Jl. Pemda, Kp. Perawang Barat, Kec. Tualang, Kabupaten Siak, Riau 28772</span>
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
                <a href="https://youtube.com" target="_blank" className="flex items-center gap-4 group p-2 -ml-2 rounded-lg hover:bg-white/5 transition-all">
                  <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all shadow-lg">
                    <Youtube size={18} />
                  </div>
                  <div>
                      <span className="block text-sm font-medium text-slate-300 group-hover:text-white transition-colors">MAN IC Siak Official</span>
                      <span className="text-xs text-slate-500">Youtube Channel</span>
                  </div>
                </a>
                <a href="https://facebook.com" target="_blank" className="flex items-center gap-4 group p-2 -ml-2 rounded-lg hover:bg-white/5 transition-all">
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
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest border-l-2 border-amber-500 pl-3">Hubungi Panitia</h4>
              <div className="space-y-6 text-sm">
                <a href="mailto:humas@manicsiak.sch.id" className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group">
                  <div className="p-2 rounded-lg bg-slate-900 group-hover:bg-blue-900/30 transition-colors">
                      <Mail size={18} />
                  </div>
                  <span className="font-medium">humas@manicsiak.sch.id</span>
                </a>
                
                <div className="p-6 rounded-2xl bg-linear-to-br from-slate-900 to-slate-900/50 border border-slate-800 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl -mr-10 -mt-10 group-hover:bg-blue-500/20 transition-all"></div>
                    <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-semibold">Pusat Bantuan</p>
                    <a href="https://snmb-madrasah.kemenag.go.id" className="text-white hover:text-blue-400 font-bold text-sm flex items-center gap-2 transition-colors">
                      helpdesk.snmb@kemenag.go.id <ExternalLink size={14} className="text-blue-500"/>
                    </a>
                    <p className="text-[10px] text-slate-600 mt-2">Senin - Jumat (08.00 - 16.00 WIB)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} MAN Insan Cendekia Siak. Developed with Pride.</p>
            <div className="flex gap-8">
              <span className="hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-blue-400 cursor-pointer transition-colors">Sitemap</span>
            </div>
          </div>

        </div>
    </footer>
  );
}