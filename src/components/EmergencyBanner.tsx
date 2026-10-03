import React from 'react';
import { Phone, ShieldAlert, Clock, AlertTriangle, ArrowRight } from 'lucide-react';

interface EmergencyBannerProps {
  onOpenEmergencyModal: () => void;
  onRequestEmergencyService: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({
  onOpenEmergencyModal,
  onRequestEmergencyService,
}) => {
  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden border-b border-amber-900/40">
      
      {/* Industrial Emergency Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #f59e0b 0, #f59e0b 2px, transparent 0, transparent 24px)`,
        }}
      />
      <div className="absolute inset-0 bg-radial from-amber-950/20 via-slate-950 to-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-950/40 via-slate-900/90 to-slate-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <ShieldAlert className="w-4 h-4 animate-pulse" />
                <span>24/7 Rapid Incident Deployment</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Facility Issue? We're Ready When You Need Us.
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                AX Now! offers dedicated after-hours emergency service. Dial our main office or after-hours dispatch line for prompt on-call emergency assistance. Key Clients receive dedicated 24/7 live dispatch access with private telephone priority at no additional cost.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>After-Hours Dispatch: <strong className="text-white">248.228.7149</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>Immediate Board-Up & Structural Securement</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <a
                href="tel:2485690800"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-xl shadow-amber-500/20 transition-all text-center"
              >
                <Phone className="w-5 h-5 text-slate-950" />
                <span className="tabular-nums tracking-wide">CALL 248.569.0800</span>
              </a>

              <a
                href="tel:2482287149"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-slate-200 bg-slate-950 hover:bg-slate-900 border border-amber-500/30 rounded-xl transition-colors text-center"
              >
                <span>Direct After-Hours Line: 248.228.7149</span>
              </a>

              <button
                type="button"
                onClick={onRequestEmergencyService}
                className="w-full py-2.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors text-center cursor-pointer"
              >
                Submit Emergency Work Order Online →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
