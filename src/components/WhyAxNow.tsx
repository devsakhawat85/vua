import React from 'react';
import { Users, Radio, Zap, Store, ShieldAlert, ArrowRight } from 'lucide-react';

interface WhyAxNowProps {
  onRequestService: () => void;
  onOpenEmergency: () => void;
}

export const WhyAxNow: React.FC<WhyAxNowProps> = ({
  onRequestService,
  onOpenEmergency,
}) => {
  const benefits = [
    {
      index: '01',
      title: 'In-House Personnel',
      icon: Users,
      summary: 'Unlike typical maintenance call centers that broker and outsource work, AX Now! services facilities with its own in-house personnel.',
      details: 'We employ 56 full-time service technicians, 22 licensed plumbers, and 18 electricians. You get accountability, uniform appearance, and consistent quality from employees who take personal pride in your stores.'
    },
    {
      index: '02',
      title: 'Real-Time Project Control',
      icon: Radio,
      summary: 'Clients have direct access to the team responsible for servicing their projects.',
      details: 'No opaque layers or sales runarounds. When a work order is dispatched, your store manager and facilities director receive direct contact with the Lead Technician or Project Manager handling the site.'
    },
    {
      index: '03',
      title: 'Fast Response',
      icon: Zap,
      summary: 'Focused resources and experienced field teams enable efficient turnaround times.',
      details: 'With our own dedicated fleet of 48 service vehicles—including hydro-jetters, pump trucks, and heavy equipment—we deploy rapidly without waiting on third-party subcontractor availability.'
    },
    {
      index: '04',
      title: 'Retail Experience',
      icon: Store,
      summary: 'Decades of experience serving national and regional retail environments.',
      details: 'We understand sales-floor protocols, off-hours execution, shopper safety, corporate branding standards, and the urgency of zero downtime for revenue-generating square footage.'
    },
    {
      index: '05',
      title: '24/7 Emergency Support',
      icon: ShieldAlert,
      summary: 'Dedicated after-hours emergency service and live dispatcher access.',
      details: 'When storefronts are compromised, pipes burst, or power fails, dial our emergency line at 248.228.7149. Key clients receive dedicated live dispatch with private telephone access at no added cost.'
    },
  ];

  return (
    <section id="why-ax-now" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      
      {/* Subtle industrial architectural backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-sky-400">
            The Enterprise Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Why Leading Retailers Choose AX Now!
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Eliminating third-party markups, unaccountable subcontractors, and slow call centers. We deliver direct, hands-on control over your commercial real estate portfolio.
          </p>
        </div>

        {/* 5 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const isWide = idx === 0 || idx === 4;
            return (
              <div
                key={benefit.index}
                className={`bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-extrabold text-slate-700 group-hover:text-sky-400/80 transition-colors">
                      {benefit.index}
                    </span>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors font-display tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-2">
                      {benefit.summary}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-slate-800/80">
                    {benefit.details}
                  </p>
                </div>

                {benefit.index === '05' && (
                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={onOpenEmergency}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Emergency Dispatch Info</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-mono text-slate-400 tabular-nums">248.228.7149</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white">
              Ready to streamline your retail maintenance program?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Speak directly with an operations lead about facility audits, preventative maintenance, or active work orders.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:2485690800"
              className="px-5 py-2.5 text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              Call 248.569.0800
            </a>
            <button
              type="button"
              onClick={onRequestService}
              className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Request Service
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
