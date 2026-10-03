import React from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building, Wrench } from 'lucide-react';
import { ServiceItem } from '../data/servicesData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-title"
      >
        <div className="px-6 py-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
              Trade Specification
            </span>
            <h3 id="service-title" className="text-xl font-bold text-white tracking-tight">
              {service.name}
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

        <div className="p-6 space-y-5 text-sm">
          <div className="flex items-center gap-3 text-xs">
            <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 font-mono">
              Scope: {service.scope}
            </span>
            {service.specs && (
              <span className="px-2.5 py-1 rounded bg-sky-950 border border-sky-800 text-sky-300 font-mono">
                {service.specs}
              </span>
            )}
            <span className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300 font-mono capitalize">
              {service.category} Discipline
            </span>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Operational Scope & Execution
            </h4>
            <p className="text-slate-300 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs">
            <div className="font-bold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>AX NOW! Service Standards</span>
            </div>
            <ul className="space-y-1 text-slate-400">
              <li>• Direct in-house technicians, certified plumbers, or electricians</li>
              <li>• Adheres to national retail client safety guidelines & brand specs</li>
              <li>• Covered under our comprehensive 90–360 day warranty</li>
              <li>• Single point of contact with your assigned Lead Technician</li>
            </ul>
          </div>
        </div>

        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400 font-mono">
            Southfield, MI HQ
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
                const name = service.name;
                onClose();
                onRequestService(name);
              }}
              className="px-5 py-2 bg-sky-400 hover:bg-sky-300 text-slate-950 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Request This Service
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
