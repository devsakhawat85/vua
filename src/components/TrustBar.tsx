import React from 'react';
import { Calendar, Building2, Users2, Store, ShieldCheck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const credentials = [
    {
      icon: Calendar,
      title: 'ESTABLISHED 1997',
      subtitle: '29+ Years Serving Retail Chains'
    },
    {
      icon: Building2,
      title: 'FULL-SERVICE FACILITY SUPPORT',
      subtitle: 'Construction, Maintenance & Repairs'
    },
    {
      icon: Users2,
      title: 'IN-HOUSE PERSONNEL',
      subtitle: 'Direct Technicians, Plumbers & Electricians'
    },
    {
      icon: Store,
      title: 'NATIONAL RETAIL EXPERIENCE',
      subtitle: 'Fortune-100 & Major Store Chains'
    },
    {
      icon: ShieldCheck,
      title: 'INSURED & LICENSED',
      subtitle: 'Multi-State Trade & GC Licensing'
    },
  ];

  return (
    <section className="bg-slate-900/90 border-b border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 group"
              >
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sky-400 group-hover:border-sky-500/50 group-hover:text-sky-300 transition-colors shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h2 className="text-xs font-bold text-white tracking-wider uppercase font-display truncate">
                    {item.title}
                  </h2>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
