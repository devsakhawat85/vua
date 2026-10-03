import React from 'react';
import { AxLogo } from './AxLogo';
import { Phone, Mail, MapPin, Printer, ShieldAlert, ArrowUp } from 'lucide-react';
import { COMPANY_FACTS } from '../data/servicesData';

interface FooterProps {
  onOpenCompanyProfile: () => void;
  onRequestService: () => void;
  onOpenTeamModal: () => void;
  onOpenEmergency: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCompanyProfile,
  onRequestService,
  onOpenTeamModal,
  onOpenEmergency,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 border-t border-slate-800">
      
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <AxLogo variant="light" size="lg" showTagline={true} />
            
            <p className="text-sm text-slate-400 leading-relaxed pt-2">
              Full-service retail facility construction, maintenance, and repair provider serving Fortune-100 companies, national retail chains, and regional operators.
            </p>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div>Legal Entity: <span className="text-slate-300 font-mono">Ax, Inc.</span></div>
              <div>Established: <span className="text-slate-300 font-mono">1997</span> (Incorporated in Michigan)</div>
              <div>Federal EIN: <span className="text-slate-300 font-mono">38-3453632</span></div>
            </div>
          </div>

          {/* Quick Nav (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenCompanyProfile}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Company Profile
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTeamModal}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Meet The Staff
                </button>
              </li>
              <li>
                <a href="#service-footprint" className="hover:text-white transition-colors">Service Footprint</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onRequestService}
                  className="text-sky-400 hover:text-sky-300 font-semibold transition-colors cursor-pointer text-left"
                >
                  Request Service
                </button>
              </li>
            </ul>
          </div>

          {/* Head Office & Dispatch (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <address className="not-italic text-slate-300 leading-relaxed">
                  29200 Southfield Road<br />
                  Suite 210<br />
                  Southfield, Michigan 48076
                </address>
              </div>

              <div className="pt-2 space-y-1.5 text-xs">
                <div className="text-slate-400">
                  Normal Office Hours:<br />
                  <span className="text-slate-200 font-medium">8:30 AM – 5:00 PM EST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Communications (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Communications
            </h4>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Office: </span>
                <a href="tel:2485690800" className="text-white hover:text-sky-400 font-mono font-bold">
                  248.569.0800
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <Printer className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Fax: </span>
                <span className="text-slate-300 font-mono">248.569.0892</span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
                <span>After Hours: </span>
                <a href="tel:2482287149" className="text-amber-400 hover:underline font-mono font-semibold">
                  248.228.7149
                </a>
              </div>

              <div className="pt-2 space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>Orders: </span>
                  <a href="mailto:dispatch@axnow.com" className="text-sky-400 hover:underline">
                    dispatch@axnow.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>Updates: </span>
                  <a href="mailto:updates@axnow.com" className="text-slate-300 hover:underline">
                    updates@axnow.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AX NOW! (Ax, Inc.) · Established 1997 · On-Time Retail Construction and Facility Service · All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenCompanyProfile}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              EIN & Licenses
            </button>
            <span className="text-slate-700">·</span>
            <button
              type="button"
              onClick={onOpenEmergency}
              className="text-amber-500/80 hover:text-amber-400 transition-colors cursor-pointer"
            >
              Emergency Dispatch Protocols
            </button>
            <span className="text-slate-700">·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
