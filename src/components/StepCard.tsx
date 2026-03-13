import type { ReactNode } from 'react';

export interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <div className="relative z-10 bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-slate-900 rounded-full border-4 border-slate-800 flex items-center justify-center mb-6 relative shadow-xl">
        {icon}
        <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold border-4 border-slate-800">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
}
