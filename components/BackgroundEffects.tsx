import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-slate-50">
        <div className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: 'linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-0 right-0 w-150 h-150 bg-blue-200/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-cyan-200/20 rounded-full blur-[100px]"></div>
    </div>
  );
}