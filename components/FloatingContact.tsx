import React from 'react';
import { Headset } from 'lucide-react';

export default function FloatingContact() {
  return (
    <a
      href="https://linktr.ee/manicsiak"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white w-14 h-14 rounded-full shadow-xl shadow-blue-600/30 transition-transform hover:scale-110 active:scale-95"
      aria-label="Hubungi Panitia (Contact Person)"
    >
      <Headset size={28} />
    </a>
  );
}