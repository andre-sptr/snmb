import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  isLast?: boolean;
  colorClass?: string;
}

export default function TimelineItem({ date, title, subtitle, icon, isLast, colorClass }: TimelineItemProps) {
  const styleClass = colorClass || "bg-slate-100 text-slate-700 border-slate-200";
  
  return (
    <div className="flex gap-4 relative z-10 group">
      <div className={`w-10 h-10 rounded-full ${styleClass} flex items-center justify-center border shadow-sm shrink-0 transition-transform group-hover:scale-110`}>
        {icon}
      </div>
      <div>
        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{date}</span>
        <h4 className="text-slate-800 font-bold text-lg leading-tight group-hover:text-blue-700 transition-colors">{title}</h4>
        <p className="text-slate-500 text-sm mt-1">{subtitle}</p>
      </div>
    </div>
  );
}