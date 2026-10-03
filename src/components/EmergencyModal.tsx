import React from 'react';
import { X, ShieldAlert, Phone, Clock, AlertTriangle, ArrowRight } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestEmergencyService: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  onRequestEmergencyService,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="emergency-modal-title"
      >
        <div className="px-6 py-5 bg-amber-950/80 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h3 id="emergency-modal-title" className="text-xl font-bold text-white tracking-tight">
              24/7 Emergency Dispatch Protocol
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

        <div className="p-6 space-y-6 text-sm">
          
          <div className="p-4 bg-amber-950/30 border border-amber-500/30 rounded-xl space-y-2">
            <div className="font-bold text-amber-300 text-sm flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Direct Emergency Telephone Numbers</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              By dialing our main office after hours at <strong className="text-white font-mono">248.228.7149</strong>, you will receive friendly and easy-to-use prompts to reach on-call emergency service assistance immediately.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="tel:2482287149"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call After-Hours: 248.228.7149</span>
              </a>

              <a
                href="tel:2485690800"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-950 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-lg text-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Main Office: 248.569.0800</span>
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Key Client Priority Access
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Key Clients receive dedicated 24/7 live dispatch and priority service access with a private direct telephone number at no additional cost.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="font-bold text-white">Common Emergency Scenarios We Handle:</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
              <li className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                • Storefront Board-Up & Vehicle Impact
              </li>
              <li className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                • Commercial Glass & Glazing Breach
              </li>
              <li className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                • Main Sewer Backups & Hydro-Jetting
              </li>
              <li className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                • Commercial Lock & Entry Door Failure
              </li>
              <li className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                • Storm Damage & Roof Leaks
              </li>
              <li className="p-2.5 bg-slate-950 rounded-lg border border-slate-800">
                • Power Outages & Panel Failures
              </li>
            </ul>
          </div>

        </div>

        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400 font-mono">
            dispatch@axnow.com
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
                onRequestEmergencyService();
              }}
              className="px-5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Submit Emergency Request Online
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
