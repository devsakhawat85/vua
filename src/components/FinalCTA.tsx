import React from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onRequestService: () => void;
  onOpenCompanyProfile: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onRequestService,
  onOpenCompanyProfile,
}) => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-4">
          <div className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Enterprise Facility Partnership
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Keep Your Facilities Moving.
          </h2>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From construction and maintenance to repairs and emergency service, AX Now! provides dependable facility support when your business needs it.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            type="button"
            onClick={onRequestService}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 active:bg-sky-500 rounded-xl shadow-xl shadow-sky-500/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>REQUEST SERVICE</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="tel:2485690800"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 rounded-xl transition-all whitespace-nowrap"
          >
            <Phone className="w-5 h-5 text-sky-400" />
            <span className="tabular-nums">248.569.0800</span>
          </a>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>Michigan Headquarters: 29200 Southfield Rd</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>All Work Guaranteed (90–360 Days)</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-sky-400" />
            <span>Direct In-House Technicians</span>
          </span>
        </div>

      </div>
    </section>
  );
};
