import React from 'react';
import { CLIENT_LIST } from '../data/servicesData';
import { ShieldCheck } from 'lucide-react';

export const ClientTrust: React.FC = () => {
  return (
    <section className="py-16 bg-slate-900/50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="text-xs font-bold uppercase tracking-widest text-sky-400">
              Enterprise Client Relationships
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Trusted in Demanding Retail Environments
            </h2>
          </div>
          
          <div className="text-sm text-slate-400 max-w-md">
            Serving Fortune-100 corporations, national retail chains, and high-volume regional brands with continuous, brand-standard facility performance.
          </div>
        </div>

        {/* Clean Typographic Client Grid (No fake/distorted logos — authentic editorial treatment) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {CLIENT_LIST.map((client, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between h-28 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">
                  {client.category}
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-slate-600 group-hover:text-sky-400 transition-colors" />
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-200 group-hover:text-white font-display tracking-tight transition-colors">
                  {client.name}
                </h3>
                <span className="text-[11px] text-slate-400 font-medium">
                  {client.tenure}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote statement grounded in original site facts */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            Work performed in compliance with individual national retail chain brand standards, insurance limits, and safety protocols.
          </div>
          <div className="text-slate-300 font-medium whitespace-nowrap">
            Key Clients receive dedicated 24/7 live dispatch access
          </div>
        </div>

      </div>
    </section>
  );
};
