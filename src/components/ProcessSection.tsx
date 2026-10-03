import React from 'react';
import { PhoneCall, SearchCheck, Layers, Wrench, FileCheck, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onRequestService: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onRequestService,
}) => {
  const steps = [
    {
      num: '01',
      title: 'REQUEST',
      subtitle: 'Tell us what your facility needs',
      description: 'One call, email, or digital work order initiates service. We immediately contact your on-site store manager to verify accessibility, hours, and site conditions.',
      icon: PhoneCall,
    },
    {
      num: '02',
      title: 'ASSESS',
      subtitle: 'Our team evaluates the requirement',
      description: 'Dispatcher confirms estimated time of arrival (ETA) and assigns the dedicated Lead Technician or Project Manager responsible for your project.',
      icon: SearchCheck,
    },
    {
      num: '03',
      title: 'PLAN',
      subtitle: 'We coordinate resources and approach',
      description: 'We stage specialized equipment (hydro-jetters, bucket trucks, materials) and deploy appropriate Union or Non-Union personnel per your store requirements.',
      icon: Layers,
    },
    {
      num: '04',
      title: 'EXECUTE',
      subtitle: 'Our experienced personnel complete work',
      description: 'In-house uniformed technicians complete the job to strict retail brand specifications with minimal interruption to your customers and sales floor.',
      icon: Wrench,
    },
    {
      num: '05',
      title: 'REPORT',
      subtitle: 'Clear project information and updates',
      description: 'Receive real-time updates via updates@axnow.com, photographic before/after documentation, and full 90–360 day warranty coverage.',
      icon: FileCheck,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Frictionless Retail Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            One Call or Digital Request. Complete Operational Execution.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our established 5-stage dispatch protocol guarantees rapid field staging, direct communication with the technician on site, and complete accountability.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-slate-950/80 border border-slate-800 hover:border-sky-500/40 rounded-xl p-6 flex flex-col justify-between group transition-all duration-300 relative"
              >
                {/* Step Number & Line */}
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <span className="font-mono text-2xl font-bold text-sky-400">
                      {step.num}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-sky-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="pt-4 space-y-1">
                    <h3 className="text-lg font-bold text-white font-display tracking-tight group-hover:text-sky-400 transition-colors">
                      {step.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-400">
                      {step.subtitle}
                    </div>
                    <p className="text-xs text-slate-300 pt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Stage {step.num}</span>
                  <span className="text-slate-600">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dispatch Action Box */}
        <div className="mt-12 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">
              Have an urgent facility work order or scheduled project?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Direct dispatch hotline: <strong className="text-slate-200">248.569.0800</strong> · Email: <strong className="text-slate-200">dispatch@axnow.com</strong>
            </p>
          </div>

          <button
            type="button"
            onClick={onRequestService}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-sm"
          >
            <span>Initiate Service Request</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
