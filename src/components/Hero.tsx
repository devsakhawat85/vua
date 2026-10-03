import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin, Wrench } from 'lucide-react';
import heroImage from '../assets/images/hero_retail_facility_1791034319776.jpg';

interface HeroProps {
  onRequestService: () => void;
  onExploreServices: () => void;
  onOpenCompanyProfile: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestService,
  onExploreServices,
  onOpenCompanyProfile,
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 border-b border-slate-800">
      {/* Background Photography with Sophisticated Dark Architectural Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AX NOW! commercial retail construction and facility maintenance technicians servicing active commercial facilities"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1] scale-[1.02] transform transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Scrim Gradients for Absolute Text Readability & WCAG AAA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        
        {/* Subtle Engineering Grid Line Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy & CTAs (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Trust Kicker — Clean unboxed text with typographic separator */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-sky-400 tracking-wide">
              <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Serving national retail chains since 1997</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-300">Michigan HQ & Multi-State Footprint</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-3xl text-balance">
              ON-TIME RETAIL CONSTRUCTION & FACILITY SERVICES
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Reliable construction, maintenance, and repair services for national and regional retail facilities. We keep your stores open, compliant, and operating at peak performance.
            </p>

            {/* Primary & Secondary Action Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onRequestService}
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 active:bg-sky-500 rounded-lg shadow-lg shadow-sky-500/20 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>REQUEST SERVICE</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="tel:2485690800"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-base font-bold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg shadow-sm transition-all whitespace-nowrap hover:border-slate-500"
              >
                <Phone className="w-5 h-5 text-sky-400" />
                <span className="tabular-nums">CALL 248.569.0800</span>
              </a>

              <button
                type="button"
                onClick={onOpenCompanyProfile}
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Company Profile →</span>
              </button>
            </div>

            {/* Value Proof Badges (Adjacency to Claim) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="space-y-0.5">
                <div className="text-slate-400 font-medium">In-House Staff</div>
                <div className="text-white font-bold text-sm">56 Technicians</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-slate-400 font-medium">Direct Fleet</div>
                <div className="text-white font-bold text-sm">48 Service Trucks</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-slate-400 font-medium">Warranty Guarantee</div>
                <div className="text-white font-bold text-sm">90–360 Days</div>
              </div>
              <div className="space-y-0.5">
                <div className="text-slate-400 font-medium">Emergency Line</div>
                <div className="text-amber-400 font-bold text-sm tabular-nums">24/7 Live Dispatch</div>
              </div>
            </div>

          </div>

          {/* Quick Dispatch Card / Interactive Terminal (Right 4 Cols) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 shadow-2xl backdrop-blur-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Direct Retail Dispatch</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">HQ: Southfield, MI</span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80 space-y-1">
                  <div className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span>Response Turnaround</span>
                  </div>
                  <div className="text-slate-200 font-semibold">Immediate site verification & lead tech assignment</div>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80 space-y-1">
                  <div className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                    <span>Labor Flexibility</span>
                  </div>
                  <div className="text-slate-200 font-semibold">Union & Non-Union Certified Trades</div>
                </div>

                <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800/80 space-y-1">
                  <div className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-sky-400" />
                    <span>Engineering Staff</span>
                  </div>
                  <div className="text-slate-200 font-semibold">In-house Certified Civil & Geotech Engineers</div>
                </div>
              </div>

              <button
                type="button"
                onClick={onRequestService}
                className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-sky-400 hover:text-sky-300 border border-sky-500/30 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Dispatch Work Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
