import React from 'react';
import { Users2, Award, HardHat, ShieldCheck, ArrowRight } from 'lucide-react';
import teamImg from '../assets/images/commercial_construction_team_1791034356960.jpg';

interface MeetTheTeamProps {
  onOpenTeamModal: () => void;
  onRequestService: () => void;
}

export const MeetTheTeam: React.FC<MeetTheTeamProps> = ({
  onOpenTeamModal,
  onRequestService,
}) => {
  return (
    <section id="meet-team" className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Team Photo (Left 6 cols) */}
          <div className="lg:col-span-6 relative group">
            <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative">
              <img
                src={teamImg}
                alt="AX NOW! commercial construction project managers and trade technicians"
                className="w-full h-[420px] object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl">
                <div className="flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <div className="font-bold text-white">Direct Field Operations</div>
                    <div className="text-slate-400">Trade Specialists & Certified Engineers</div>
                  </div>
                  <span className="font-mono text-sky-400 font-semibold bg-sky-950 px-2 py-1 rounded">
                    Southfield, MI
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content (Right 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Skilled In-House Workforce
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Experienced People. Responsive Service.
              </h2>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              You benefit from our unmatched technical and field expertise across retail, hospitality, and active sales-floor environments. Certified civil engineers, licensed master tradespeople, and seasoned project managers work together to support client facilities without the limiting boundaries of single-concept providers.
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3 p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <HardHat className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Continuing Specialty Education</div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Each technician receives regular training in their specific trade specialty, safety protocols, and customer service.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <Award className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Logo-Specific Uniforms & Safety Compliance</div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Professional presentation in branded uniforms with proper identification, safety badges, and background checks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-slate-950/60 rounded-xl border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Direct Communication, Zero Salesmanship</div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Enjoy a no-nonsense, salesmanship-free conversation with the person directly responsible for managing your project.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenTeamModal}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 hover:bg-slate-800 border border-slate-700 text-white font-bold text-xs rounded-lg transition-colors cursor-pointer"
              >
                <span>MEET OUR TEAM</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>

              <button
                type="button"
                onClick={onRequestService}
                className="text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
              >
                Assign Crew to Facility →
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
