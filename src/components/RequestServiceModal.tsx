import React, { useState } from 'react';
import { X, CheckCircle2, Clock, AlertTriangle, Send, Phone } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/servicesData';

interface RequestServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialUrgency?: 'standard' | 'urgent' | 'emergency';
}

export const RequestServiceModal: React.FC<RequestServiceModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialUrgency = 'standard',
}) => {
  const [formData, setFormData] = useState({
    clientName: '',
    storeNumber: '',
    address: '',
    city: '',
    state: 'MI',
    zip: '',
    serviceCategory: initialService || 'Retail Construction',
    urgency: initialUrgency,
    laborPreference: 'Standard / Best Available',
    scopeDetails: '',
    siteContactName: '',
    siteContactPhone: '',
    siteContactEmail: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedTicket = `AX-DISPATCH-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedTicket);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="px-6 py-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              AX NOW! Commercial Dispatch
            </div>
            <h3 id="modal-title" className="text-xl font-bold text-white tracking-tight">
              Request Facility Service or Work Order
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mx-auto border border-sky-400/40">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 bg-sky-950 px-3 py-1 rounded-full border border-sky-800">
                Ticket Assigned: {ticketId}
              </span>
              <h4 className="text-2xl font-bold text-white pt-2">
                Service Order Initiated
              </h4>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your request has been routed to our central dispatch in Southfield, MI. A dispatcher is currently contacting <strong className="text-white">{formData.siteContactName || 'your on-site contact'}</strong> to verify accessibility, conditions, and provide an initial Lead Technician ETA.
              </p>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="text-slate-400 font-semibold uppercase">Dispatch Summary:</div>
              <div className="text-slate-300"><span className="text-slate-500">Facility: </span>{formData.clientName} {formData.storeNumber && `(Store #${formData.storeNumber})`}</div>
              <div className="text-slate-300"><span className="text-slate-500">Service: </span>{formData.serviceCategory}</div>
              <div className="text-slate-300"><span className="text-slate-500">Urgency: </span>{formData.urgency.toUpperCase()}</div>
              <div className="text-slate-300"><span className="text-slate-500">Dispatch Records: </span>dispatch@axnow.com</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:2485690800"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call Dispatch: 248.569.0800</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Submission Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-5 text-sm">
            
            {/* Urgency Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">
                Service Urgency
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', label: 'Standard / Scheduled', desc: 'Planned PM or Routine' },
                  { id: 'urgent', label: 'Urgent Priority', desc: 'Within 24–48 Hours' },
                  { id: 'emergency', label: 'Emergency (24/7)', desc: 'Immediate Dispatch' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, urgency: tier.id as any })}
                    className={`p-3 rounded-xl border text-left transition-colors cursor-pointer ${
                      formData.urgency === tier.id
                        ? tier.id === 'emergency'
                          ? 'bg-amber-950/50 border-amber-500 text-white'
                          : 'bg-sky-950/50 border-sky-400 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">
                      {tier.label}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {tier.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Facility Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">
                  Client / Brand Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. CVS, Dollar General, BJ's"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">
                  Store Number (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Store #4820"
                  value={formData.storeNumber}
                  onChange={(e) => setFormData({ ...formData, storeNumber: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 text-xs"
                />
              </div>
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-6 space-y-1">
                <label className="text-xs font-semibold text-slate-300">Facility Address *</label>
                <input
                  type="text"
                  required
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 text-xs"
                />
              </div>

              <div className="sm:col-span-3 space-y-1">
                <label className="text-xs font-semibold text-slate-300">City *</label>
                <input
                  type="text"
                  required
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 text-xs"
                />
              </div>

              <div className="sm:col-span-3 space-y-1">
                <label className="text-xs font-semibold text-slate-300">State *</label>
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white text-xs focus:outline-none focus:border-sky-400"
                >
                  {['MI', 'OH', 'IL', 'IN', 'PA', 'KY', 'TN', 'WI', 'NY', 'MO', 'MD', 'FL', 'Other'].map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Trade Category & Labor Model */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Primary Trade / Service Discipline</label>
                <input
                  type="text"
                  value={formData.serviceCategory}
                  onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                  placeholder="e.g. Electrical, Plumbing, Doors, Asphalt"
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Labor Preference</label>
                <select
                  value={formData.laborPreference}
                  onChange={(e) => setFormData({ ...formData, laborPreference: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white text-xs focus:outline-none focus:border-sky-400"
                >
                  <option value="Standard / Best Available">Standard In-House Trades (Nonunion / Prevailing)</option>
                  <option value="Union Enrolled Personnel">Union Enrolled Personnel Required</option>
                  <option value="Prevailing Wage">Prevailing Wage Required</option>
                </select>
              </div>
            </div>

            {/* Scope Details */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">Scope of Work / Issue Description *</label>
              <textarea
                rows={3}
                required
                placeholder="Describe the issue, location on property, and any specific access instructions (e.g. after-hours access, ladder needed)..."
                value={formData.scopeDetails}
                onChange={(e) => setFormData({ ...formData, scopeDetails: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 text-xs"
              />
            </div>

            {/* On-Site Contact Details */}
            <div className="pt-2 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Site Contact Person *</label>
                <input
                  type="text"
                  required
                  placeholder="Store Manager Name"
                  value={formData.siteContactName}
                  onChange={(e) => setFormData({ ...formData, siteContactName: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Contact Phone *</label>
                <input
                  type="tel"
                  required
                  placeholder="248.555.0123"
                  value={formData.siteContactPhone}
                  onChange={(e) => setFormData({ ...formData, siteContactPhone: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Email for Updates</label>
                <input
                  type="email"
                  placeholder="manager@store.com"
                  value={formData.siteContactEmail}
                  onChange={(e) => setFormData({ ...formData, siteContactEmail: e.target.value })}
                  className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 text-xs"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <div className="text-[11px] text-slate-400">
                Direct Dispatch: <span className="text-slate-200">248.569.0800</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-lg text-xs transition-colors cursor-pointer"
                >
                  <span>Dispatch Work Order</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
