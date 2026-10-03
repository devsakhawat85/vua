import React from 'react';
import { X, Building2, ShieldCheck, Truck, Users, MapPin, Phone, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_FACTS, CLIENT_LIST, STATES_COVERED } from '../data/servicesData';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestService: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  isOpen,
  onClose,
  onRequestService,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-title"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="space-y-0.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Corporate Credentials & Verification
            </div>
            <h3 id="profile-title" className="text-xl font-bold text-white tracking-tight">
              AX NOW! (Ax, Inc.) Official Company Profile
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-8 text-sm">
          
          {/* Quick Legal & Corporate Identifiers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Established</span>
              <div className="text-base font-bold text-white mt-0.5 font-mono">1997</div>
              <div className="text-[11px] text-slate-500">29+ Years in Retail</div>
            </div>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Legal Entity</span>
              <div className="text-base font-bold text-white mt-0.5 font-mono">Ax, Inc.</div>
              <div className="text-[11px] text-slate-500">Michigan Corporation</div>
            </div>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Federal EIN</span>
              <div className="text-base font-bold text-sky-400 mt-0.5 font-mono tabular-nums">38-3453632</div>
              <div className="text-[11px] text-slate-500">Verified Corporate Tax ID</div>
            </div>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase">Warranty Period</span>
              <div className="text-base font-bold text-white mt-0.5 font-mono">90–360 Days</div>
              <div className="text-[11px] text-slate-500">All Work Guaranteed</div>
            </div>
          </div>

          {/* Section: Operational Structure & Labor Model */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <span>Labor Model: Union & Non-Union Personnel</span>
            </h4>
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-slate-300 leading-relaxed text-xs sm:text-sm space-y-2">
              <p>
                By default, work is performed via direct <strong className="text-white">nonunion or prevailing wage personnel</strong>. We also retain a fully enrolled <strong className="text-white">Union-member personnel and staff</strong> to fulfill frequent client requests, store lease stipulations, and mall/center requirements for Union labor.
              </p>
              <p className="text-slate-400">
                Unlike brokerage firms that sub out work, our direct labor structure gives our retail partners complete operational control, consistent workmanship, and predictable costs.
              </p>
            </div>
          </div>

          {/* Section: Direct Personnel & Fleet Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <Truck className="w-4 h-4" />
              <span>Full-Time Service Personnel & Fleet Assets</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-white">Direct In-House Tradespeople:</div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center justify-between py-1 border-b border-slate-900">
                    <span>Full-Time Service Technicians:</span>
                    <span className="font-mono font-bold text-white">56 Personnel</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-slate-900">
                    <span>Licensed Commercial Plumbers:</span>
                    <span className="font-mono font-bold text-white">22 Personnel</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-slate-900">
                    <span>Licensed Commercial Electricians:</span>
                    <span className="font-mono font-bold text-white">18 Personnel</span>
                  </li>
                  <li className="flex items-center justify-between py-1">
                    <span>Certified Civil & Geotech Engineers:</span>
                    <span className="font-mono font-bold text-sky-400">In-House on Staff</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-white">Dedicated Fleet & Heavy Machinery:</div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center justify-between py-1 border-b border-slate-900">
                    <span>Service Trucks & Vans:</span>
                    <span className="font-mono font-bold text-white">48 Vehicles</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-slate-900">
                    <span>Hydro-Jetting & Sewer Jetters:</span>
                    <span className="font-mono font-bold text-white">Large & Truck-Mounted</span>
                  </li>
                  <li className="flex items-center justify-between py-1 border-b border-slate-900">
                    <span>Pump Trucks & Vactor Trucks:</span>
                    <span className="font-mono font-bold text-white">High Capacity</span>
                  </li>
                  <li className="flex items-center justify-between py-1">
                    <span>Power Augers, Eeling & Washers:</span>
                    <span className="font-mono font-bold text-white">Complete Shop Equipment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Licensing & State Footprint */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Multi-State Trade & General Contractor Licensing</span>
            </h4>
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 space-y-3">
              <p className="text-xs text-slate-300">
                AX Now! holds trade licenses and GC credentials across our core operating markets:
              </p>
              <div className="flex flex-wrap gap-2">
                {STATES_COVERED.map(st => (
                  <span key={st.code} className="px-2.5 py-1 bg-slate-900 border border-slate-700/80 rounded text-xs font-mono text-slate-200">
                    {st.name} ({st.code})
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                *Specific trade license certificates (Electrical, HVAC, Plumbing, Mechanical, Builder) and certificate of insurance (COI) available immediately upon request for vendor onboarding.
              </p>
            </div>
          </div>

          {/* Section: Service Terms & Guarantees */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>Estimates, Travel & Warranty Terms</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-white">Free Estimates</div>
                <p className="text-slate-400 leading-relaxed">
                  We do not charge for estimating service jobs of appropriate scope-size (above standard NTE on Right-of-First-Refusal basis).
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-white">Unlimited Distance Travel</div>
                <p className="text-slate-400 leading-relaxed">
                  Travel within defined Service Coverage Area included with no added travel surcharge (minimum service call applies for Key Clients).
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-white">Guaranteed Workmanship</div>
                <p className="text-slate-400 leading-relaxed">
                  90 to 360 days typical warranty on executed work. Limits on service warranty may be waived for enterprise retail partners.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2">
            <div className="font-bold text-white flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>Headquarters: 29200 Southfield Road, Suite 210, Southfield, MI 48076</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-slate-400">
              <div>Phone: <strong className="text-white font-mono">248.569.0800</strong></div>
              <div>Fax: <strong className="text-white font-mono">248.569.0892</strong></div>
              <div>After-Hours: <strong className="text-amber-400 font-mono">248.228.7149</strong></div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400">
            Official Document of Ax, Inc.
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestService();
              }}
              className="px-5 py-2 bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Request Service with AX NOW!
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
