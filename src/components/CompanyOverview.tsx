import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Wrench, Building } from 'lucide-react';
import technicianImg from '../assets/images/retail_technician_service_1791034333161.jpg';

interface CompanyOverviewProps {
  onOpenCompanyProfile: () => void;
  onRequestService: () => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({
  onOpenCompanyProfile,
  onRequestService,
}) => {
  return (
    <section id="company-profile" className="py-20 lg:py-28 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Large Editorial Headline & Visual Asset */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Company Profile & Heritage
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] text-balance">
                Built Around Your Facilities. Focused on Your Business.
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                AX Now! (Ax, Inc.) was established in Southeast Michigan in 1997 to provide national retail brands and regional operators with dependable, on-time construction, scheduled preventative maintenance, and rapid commercial repairs.
              </p>
            </div>

            {/* Visual Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
              <img
                src={technicianImg}
                alt="AX NOW! service technician inspecting commercial retail facilities"
                className="w-full h-80 object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-400">Direct In-House Labor</div>
                  <div className="text-sm font-bold text-white">56 Full-Time Technicians · 22 Plumbers · 18 Electricians</div>
                </div>
                <div className="hidden sm:block text-right">
                  <div className="text-xs font-semibold text-slate-400">Legal Entity</div>
                  <div className="text-xs font-mono text-sky-400">Ax, Inc. (Est. 1997)</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Factual Overview & Proof Points */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Unlike generic maintenance brokers or call centers that outsource work to unvetted third parties, AX Now! operates with its own <strong className="text-white font-semibold">in-house skilled trades personnel</strong>. Our clients have direct access to the lead technicians and project managers actively servicing their facilities.
              </p>
              
              <p>
                From our corporate headquarters in Southfield, Michigan, we deploy across <strong className="text-white font-semibold">Michigan, Ohio, Illinois, Indiana, Pennsylvania, Kentucky, Tennessee, Wisconsin, New York (including NYC)</strong>, and select metropolitan hubs nationwide.
              </p>
            </div>

            {/* Key Business Pillars (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <Shield className="w-4 h-4" />
                  <span>All Work Guaranteed</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Typical warranty period is 90 to 360 days. Standard limits waived for our enterprise retail partners.
                </p>
              </div>

              <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <Building className="w-4 h-4" />
                  <span>Union & Non-Union</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We deploy nonunion/prevailing wage personnel by default, and retain enrolled Union staff to fulfill mandatory project requirements.
                </p>
              </div>

              <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <Wrench className="w-4 h-4" />
                  <span>In-House Engineering</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Certified Civil & Geotechnical Engineers on staff providing QA/QC, structural review, and specialized asphalt/concrete testing.
                </p>
              </div>

              <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Transparent Pricing</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  No charge for estimating appropriate scope-size service jobs. Unlimited distance travel within our core service footprint.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenCompanyProfile}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-white font-bold text-sm rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                <span>LEARN ABOUT AX NOW!</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>

              <button
                type="button"
                onClick={onRequestService}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-slate-300 hover:text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                <span>Request Facility Assessment →</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
