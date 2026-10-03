import React, { useState } from 'react';
import { STATES_COVERED, COMPANY_FACTS } from '../data/servicesData';
import { MapPin, Navigation, Truck, Users, CheckCircle, ShieldCheck } from 'lucide-react';

export const ServiceFootprint: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('MI');

  const currentState = STATES_COVERED.find((s) => s.code === selectedState) || STATES_COVERED[0];

  return (
    <section id="service-footprint" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Regional Hub & Multi-State Footprint
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Built to Support Facilities Across Multiple Markets
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From Southeast Michigan to multiple markets across the United States, AX Now! provides dependable facility construction, maintenance, and repair support.
          </p>
        </div>

        {/* Geographic Architecture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Geographic Graphic & Interactive State Grid (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Active Service Corridors
                </span>
              </div>
              <span className="text-xs text-slate-400">
                Click a state to review operational status
              </span>
            </div>

            {/* Interactive State Chips Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              {STATES_COVERED.map((state) => {
                const isSelected = selectedState === state.code;
                return (
                  <button
                    key={state.code}
                    type="button"
                    onClick={() => setSelectedState(state.code)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-sky-500/10 border-sky-400 text-white shadow-md'
                        : 'bg-slate-950/70 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-base font-bold">
                        {state.code}
                      </span>
                      {state.isHq && (
                        <span className="text-[9px] font-semibold text-sky-400 bg-sky-950 px-1.5 py-0.5 rounded">
                          HQ
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-medium truncate mt-1 text-slate-400">
                      {state.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected State Spotlight */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sky-400" />
                  <span className="text-sm font-bold text-white">
                    {currentState.name} Operational Profile
                  </span>
                </div>
                <span className="text-xs font-mono text-sky-400 font-semibold">
                  {currentState.status}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentState.isHq
                  ? 'Corporate headquarters and central logistics depot in Southfield, MI. Houses executive dispatch, fleet staging, heavy machinery, and engineering directors.'
                  : `Full direct retail service coverage across ${currentState.name}. Includes trade licensing, commercial builder status, and direct-deployed technician teams.`}
              </p>
            </div>

            {/* Satellite Modular Deployment Strategy Note */}
            <div className="p-4 bg-slate-950/40 rounded-xl border border-slate-800/60 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Satellite Modular Office Expansion</span>
              </div>
              <p className="leading-relaxed">
                Our satellite offices are modularly designed for rapid duplication in new or high-density retail corridors. This allows additional service personnel and management with the same veteran training to be integrated with in-house support and shop services.
              </p>
            </div>

          </div>

          {/* RIGHT: Real Verified Workforce & Fleet Numbers (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  Direct Field Capacity
                </span>
                <span className="text-[11px] font-mono text-slate-400">Direct In-House Labor</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                    56
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    Full-Time Technicians
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Direct retail service crew
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-2xl font-extrabold text-sky-400 font-mono tabular-nums">
                    48
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    Service Vehicles
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Heavy, Jetting & Vactor trucks
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-2xl font-extrabold text-white font-mono tabular-nums">
                    22
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    Commercial Plumbers
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Licensed & hydro-jetting cert
                  </div>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-2xl font-extrabold text-sky-400 font-mono tabular-nums">
                    18
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    Master Electricians
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Sales-floor & panel specialists
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
                <div className="font-semibold text-white">Specialized Fleet & Equipment on Hand:</div>
                <ul className="space-y-1.5 text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Large Hydro-Jetting Vehicles & High-Pressure Sewer Jetters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Commercial Pump Trucks & Vactor Vacuum Equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Power-Augers, Drain Inspection Cameras & Hot-Water Washers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>In-House Certified Civil & Geotechnical Engineers on Staff</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Travel Coverage Guarantee Note */}
            <div className="p-5 bg-slate-900/60 border border-slate-800/80 rounded-2xl text-xs text-slate-300 space-y-1">
              <div className="font-bold text-white">Unlimited Distance Travel Availability</div>
              <p className="text-slate-400 leading-relaxed">
                Travel rates within our defined Service Coverage Area are included at no additional charge with only minimum service call thresholds for Key Clients.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
