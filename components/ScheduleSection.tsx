import React from 'react';
import { Star, Globe, Users, CheckCircle2, Atom, Monitor } from 'lucide-react';
import TimelineItem from './TimelineItem';

export default function ScheduleSection() {
  return (
    <section id="jadwal" className="py-10 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-950 mb-4">Jadwal Seleksi</h2>
            <div className="h-1.5 w-24 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* KARTU 1: JALUR PRESTASI */}
            <div className="group relative bg-white rounded-3xl p-1 shadow-2xl shadow-slate-200/60 hover:shadow-blue-900/10 transition-shadow duration-300">
              <div className="absolute inset-0 bg-linear-to-b from-amber-50 to-white rounded-3xl opacity-50"></div>
              <div className="relative bg-white rounded-[20px] overflow-hidden border border-slate-100 h-full flex flex-col">
                 <div className="bg-amber-400 px-6 py-4 flex justify-between items-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <span className="text-blue-950 font-extrabold text-sm uppercase tracking-wider relative z-10">Jalur Undangan</span>
                    <Star className="text-blue-950 fill-blue-950 relative z-10" size={18}/>
                 </div>
                 <div className="p-8">
                    <h3 className="font-serif text-3xl font-bold text-blue-950 mb-2">Jalur Prestasi</h3>
                    <p className="text-slate-500 text-sm mb-8">Seleksi berdasarkan capaian akademik unggul.</p>
                    
                    <div className="space-y-8 relative">
                       <div className="absolute left-3.75 top-2 bottom-2 w-0.5 bg-slate-100"></div>

                       <TimelineItem 
                         date="2 Jan – 2 Feb 2026" 
                         title="Pendaftaran Online" 
                         subtitle="Upload berkas prestasi & nilai rapor."
                         icon={<Globe size={18} />}
                         colorClass="bg-amber-100 text-amber-700 border-amber-200"
                       />
                       <TimelineItem 
                         date="7 Februari 2026" 
                         title="Pelaksanaan Psikotes" 
                         subtitle="Wajib bagi peserta lolos verifikasi."
                         icon={<Users size={18} />}
                         colorClass="bg-amber-100 text-amber-700 border-amber-200"
                       />
                       <TimelineItem 
                         date="13 Februari 2026" 
                         title="Pengumuman" 
                         subtitle="Hasil akhir jalur prestasi."
                         icon={<CheckCircle2 size={18} />}
                         colorClass="bg-amber-100 text-amber-700 border-amber-200"
                         isLast
                       />
                    </div>
                 </div>
              </div>
            </div>

            {/* KARTU 2: JALUR REGULER */}
            <div className="group relative bg-white rounded-3xl p-1 shadow-2xl shadow-slate-200/60 hover:shadow-blue-900/10 transition-shadow duration-300">
               <div className="absolute inset-0 bg-linear-to-b from-cyan-50 to-white rounded-3xl opacity-50"></div>
               <div className="relative bg-white rounded-[20px] overflow-hidden border border-slate-100 h-full flex flex-col">
                 <div className="bg-blue-600 px-6 py-4 flex justify-between items-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <span className="text-white font-extrabold text-sm uppercase tracking-wider relative z-10">Jalur Reguler</span>
                    <Atom className="text-cyan-200 relative z-10" size={18}/>
                 </div>
                 <div className="p-8">
                    <h3 className="font-serif text-3xl font-bold text-blue-950 mb-2">Jalur Tes</h3>
                    <p className="text-slate-500 text-sm mb-8">Seleksi berbasis tes akademik komputer (CBT).</p>
                    
                    <div className="space-y-8 relative">
                       <div className="absolute left-3.75 top-2 bottom-2 w-0.5 bg-slate-100"></div>

                       <TimelineItem 
                         date="2 Jan – 7 Feb 2026" 
                         title="Pendaftaran Online" 
                         subtitle="Registrasi akun & pilih lokasi tes."
                         icon={<Globe size={18} />}
                         colorClass="bg-blue-100 text-blue-700 border-blue-200"
                       />
                       <TimelineItem 
                         date="14 – 15 Feb 2026" 
                         title="Computer Based Test" 
                         subtitle="Ujian CBT di lokasi yang dipilih."
                         icon={<Monitor size={18} />}
                         colorClass="bg-blue-100 text-blue-700 border-blue-200"
                       />
                       <TimelineItem 
                         date="6 Maret 2026" 
                         title="Pengumuman" 
                         subtitle="Hasil akhir jalur tes."
                         icon={<CheckCircle2 size={18} />}
                         colorClass="bg-blue-100 text-blue-700 border-blue-200"
                         isLast
                       />
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
    </section>
  );
}