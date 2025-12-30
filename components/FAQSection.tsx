"use client";

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Apakah siswa wajib tinggal di asrama?",
    answer: "Ya, MAN Insan Cendekia Siak adalah madrasah berasrama penuh (boarding school). Seluruh siswa wajib tinggal di asrama selama masa pendidikan untuk pembinaan akademik dan karakter yang intensif."
  },
  {
    question: "Apa kurikulum yang diterapkan di MAN IC?",
    answer: "Kami menerapkan integrasi Kurikulum Merdeka (Kemendikbud), Kurikulum PAI (Kemenag), dan Kurikulum Khas Insan Cendekia. Fokus utama adalah keseimbangan antara IPTEK (Sains & Teknologi) dan IMTAK (Iman & Taqwa)."
  },
  {
    question: "Bagaimana sistem seleksi masuknya?",
    answer: "Seleksi Nasional Murid Baru (SNMB) terdiri dari dua jalur utama: Jalur Prestasi (penelusuran prestasi akademik/non-akademik) dan Jalur Tes (menggunakan Computer Based Test/CBT yang diselenggarakan serentak se-Indonesia)."
  },
  {
    question: "Apakah diperbolehkan membawa HP dan Laptop?",
    answer: "Siswa **diwajibkan** membawa Laptop untuk menunjang pembelajaran digital. Untuk Handphone (HP), penggunaan diatur secara ketat dan biasanya dititipkan ke pembina asrama, hanya boleh digunakan pada waktu-waktu khusus (seperti akhir pekan) untuk menghubungi orang tua."
  },
  {
    question: "Bagaimana dengan lulusan/alumninya?",
    answer: "Alumni MAN Insan Cendekia Siak tersebar di berbagai Perguruan Tinggi Negeri (PTN) favorit (UI, ITB, UGM, ITS, Unpad, dll), Perguruan Tinggi Luar Negeri, serta Sekolah Kedinasan. Tradisi prestasi akademik menjadi prioritas kami."
  },
  {
    question: "Apakah tersedia beasiswa bagi siswa kurang mampu?",
    answer: "Ya, tersedia berbagai jalur beasiswa, mulai dari Program Indonesia Pintar (PIP), beasiswa dari komite madrasah, hingga beasiswa prestasi dari lembaga mitra, yang diperuntukkan bagi siswa berprestasi namun memiliki keterbatasan ekonomi."
  },
  {
    question: "Bagaimana fasilitas makan dan laundry?",
    answer: "Madrasah menyediakan makan 3 kali sehari dengan menu bergizi yang terjamin kehalalannya. Untuk pakaian seragam sekolah, tersedia layanan laundry yang dikelola madrasah, sementara pakaian pribadi dapat dicuci mandiri."
  },
  {
    question: "Kapan orang tua boleh berkunjung (jenguk)?",
    answer: "Kunjungan orang tua diatur dalam jadwal khusus (biasanya sebulan sekali atau dua minggu sekali di akhir pekan) agar tidak mengganggu kegiatan belajar mengajar dan program keasramaan."
  },
  {
    question: "Berapa biaya pendaftaran dan biaya pendidikan?",
    answer: "Biaya pendaftaran seleksi **gratis** (ditanggung pemerintah). Untuk biaya personal (makan, asrama, seragam) saat diterima, rinciannya akan disampaikan melalui surat resmi saat kelulusan atau dapat dilihat pada Juknis PPDB tahun berjalan."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="faq">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-50 -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100 rounded-full blur-[80px] opacity-50 -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
            <HelpCircle size={14} />
            <span>Pusat Bantuan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Temukan jawaban cepat untuk pertanyaan umum seputar pendaftaran, asrama, dan akademik di MAN Insan Cendekia Siak.
          </p>
        </div>

        <div className="
          max-h-100 overflow-y-auto pr-2 md:pr-4 
          scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-slate-50 
          hover:scrollbar-thumb-blue-400
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-slate-100
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-blue-300
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:border-2
          [&::-webkit-scrollbar-thumb]:border-white
        ">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`
                  border rounded-2xl transition-all duration-300 overflow-hidden
                  ${openIndex === index 
                    ? 'bg-white border-blue-200 shadow-lg shadow-blue-900/5' 
                    : 'bg-slate-50 border-transparent hover:bg-white hover:border-blue-100'
                  }
                `}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-blue-700' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`
                    shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300
                    ${openIndex === index ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'}
                  `}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <div 
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-blue-100 mx-5 mt-2">
                    <div className="pt-4" dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-slate-400 text-sm mt-8">
          Masih punya pertanyaan lain? <a href="https://wa.me/6285240031876" className="text-blue-600 font-semibold hover:underline">Hubungi Panitia</a>
        </p>

      </div>
    </section>
  );
}