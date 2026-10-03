import React from 'react';
import { X, Users, Award, HardHat, Phone, CheckCircle2 } from 'lucide-react';
import teamImg from '../assets/images/commercial_construction_team_1791034356960.jpg';

interface TeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestService: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({
  isOpen,
  onClose,
  onRequestService,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-modal-title"
      >
        <div className="px-6 py-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="space-y-0.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Staff & Field Leadership
            </div>
            <h3 id="team-modal-title" className="text-xl font-bold text-white tracking-tight">
              Meet The AX NOW! Team & Technicians
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

        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          <div className="relative rounded-xl overflow-hidden border border-slate-800">
            <img
              src={teamImg}
              alt="AX NOW! staff, project managers and field technicians"
              className="w-full h-64 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-3 left-4 text-xs font-semibold text-white">
              Field Operations & Engineering Leadership · Southfield, Michigan
            </div>
          </div>

          <div className="space-y-4 text-slate-300 leading-relaxed text-sm">
            <h4 className="text-base font-bold text-white">
              Unmatched Retail & Sales-Floor Expertise
            </h4>
            <p>
              You benefit from our unmatched diverse technical and field expertise in retail, hospitality, and active sales-floor environments. Our certified engineers and project managers have joined our team as company-leading experts from the industry’s best manufacturing, service, and consulting firms.
            </p>
            <p>
              This enables a truly optimal solution of services and personnel customized for each project without the limiting boundaries of single-concept providers.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              Our Technicians & Professional Standards
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-white">Ongoing Technical Education</div>
                <p className="text-slate-400 leading-relaxed">
                  Each employee receives continuing education in the field of their specialty and in customer service.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-white">Logo-Specific Uniforms</div>
                <p className="text-slate-400 leading-relaxed">
                  Uniformed appearance, clear identification badges, and respectful retail etiquette on client properties.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-white">Union & Non-Union Versatility</div>
                <p className="text-slate-400 leading-relaxed">
                  Flexibility to responsibly satisfy requests like union/non-union personnel and specialized shifts.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-white">Direct Communication</div>
                <p className="text-slate-400 leading-relaxed">
                  You enjoy a no-nonsense, "salesmanship-free" conversation with the person directly involved with your project.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-400">Questions for our Operations Directors?</span>
              <div className="font-bold text-white text-sm">Call 248.569.0800</div>
            </div>
            <a
              href="tel:2485690800"
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-lg font-bold"
            >
              Contact Operations
            </a>
          </div>

        </div>

        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-end gap-3 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
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
            Request Technician
          </button>
        </div>
      </div>
    </div>
  );
};
