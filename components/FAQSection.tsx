"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Apakah siswa wajib tinggal di asrama?",
    answer: "Ya, MAN Insan Cendekia Siak adalah madrasah berasrama (boarding school). Seluruh siswa wajib tinggal di asrama yang telah disediakan selama masa pendidikan."
  },
  {
    question: "Apakah diperbolehkan membawa HP/Laptop?",
    answer: "Siswa diperbolehkan membawa Laptop untuk menunjang pembelajaran. Penggunaan HP diatur secara ketat dan hanya boleh digunakan pada waktu-waktu tertentu sesuai kebijakan madrasah."
  },
  {
    question: "Bagaimana sistem seleksinya?",
    answer: "Seleksi terdiri dari dua jalur: Jalur Prestasi (tanpa tes tertulis, berdasarkan rapot & sertifikat) dan Jalur Tes (menggunakan Computer Based Test/CBT)."
  },
  {
    question: "Apakah ada biaya pendaftaran?",
    answer: "Informasi mengenai biaya pendaftaran dan biaya pendidikan dapat dilihat secara rinci pada menu 'Pusat Informasi' atau Juknis PPDB tahun berjalan."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="faq">
      <div className="text-center mb-12 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
          <HelpCircle size={14} />
          <span>Tanya Jawab</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-950">
          Pertanyaan Umum
        </h2>
        <p className="text-slate-600">
          Hal-hal yang sering ditanyakan oleh calon peserta didik dan orang tua.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`border rounded-2xl transition-all duration-300 ${
              openIndex === index 
                ? 'bg-white border-blue-200 shadow-lg shadow-blue-900/5' 
                : 'bg-white/50 border-slate-200 hover:border-blue-200'
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className={`font-bold ${openIndex === index ? 'text-blue-700' : 'text-slate-700'}`}>
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-blue-600 shrink-0" />
              ) : (
                <ChevronDown className="text-slate-400 shrink-0" />
              )}
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-dashed border-blue-100 mt-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}