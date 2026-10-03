import React, { useState } from 'react';
import { 
  Building2, 
  Wrench, 
  Hammer, 
  Truck, 
  ClipboardCheck, 
  AlertTriangle,
  ArrowRight,
  Search,
  CheckCircle2,
  SlidersHorizontal
} from 'lucide-react';
import { DETAILED_SERVICES, SERVICE_CATEGORIES, ServiceItem } from '../data/servicesData';
import pavingImg from '../assets/images/commercial_paving_facility_1791034344983.jpg';

interface ServicesGridProps {
  onRequestService: (serviceName?: string) => void;
  onSelectServiceDetail: (service: ServiceItem) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  onRequestService,
  onSelectServiceDetail,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showFullCatalog, setShowFullCatalog] = useState<boolean>(false);

  // 6 Primary Enterprise Pillars as requested
  const primaryPillars = [
    {
      id: 'construction',
      title: 'RETAIL CONSTRUCTION',
      icon: Hammer,
      badge: 'Commercial Builder & GC',
      description: 'Full-scope retail buildouts, interior store fit-outs, drywall partitions, ceiling grids, cash wrap counters, and structural alterations.',
      keyTrades: ['Drywall & Framing', 'Store Demising Walls', 'Cash Wraps & POS', 'Floor & Ceiling Systems'],
    },
    {
      id: 'maintenance',
      title: 'FACILITY MAINTENANCE',
      icon: Building2,
      badge: 'Scheduled & Preventative',
      description: 'Scheduled preventative maintenance programs to extend asset lifespans, preserve store appearance, and prevent costly customer interruptions.',
      keyTrades: ['Power-Washing Walks & Walls', 'Ceiling Tile Cleaning', 'Roof PM Inspections', 'Lift-Station Maintenance'],
    },
    {
      id: 'repairs',
      title: 'FACILITY REPAIR',
      icon: Wrench,
      badge: 'Skilled Trades Dispatch',
      description: 'Immediate on-demand repair for mechanical, electrical, and structural store issues with in-house master tradespeople.',
      keyTrades: ['Commercial Plumbing', 'Electrical & Sales-Floor Lighting', 'HVAC Service', 'Storefront Doors & Closers'],
    },
    {
      id: 'civil',
      title: 'BUILDING SERVICES',
      icon: Truck,
      badge: 'Exterior & Civil Envelope',
      description: 'Comprehensive exterior infrastructure management adhering to strict municipal codes and state department of transportation specs.',
      keyTrades: ['Asphalt Paving (M-DOT/O-DOT)', 'Concrete Curbs & ADA Ramps', 'Parking Lot Re-Striping', 'Masonry & Tuckpointing'],
    },
    {
      id: 'engineering',
      title: 'PROJECT MANAGEMENT',
      icon: ClipboardCheck,
      badge: 'QA/QC & Engineering',
      description: 'End-to-end site control managed by Certified Civil Engineers on staff, ensuring precision quality control, logistics, and milestone delivery.',
      keyTrades: ['Certified Civil Engineers', 'Geotechnical Consulting', 'Store Rollout Management', 'Code Compliance & Permitting'],
    },
    {
      id: 'emergency',
      title: 'EMERGENCY SERVICE',
      icon: AlertTriangle,
      badge: '24/7 Live Response',
      description: 'Around-the-clock emergency response for unexpected storefront damage, break-ins, storm impacts, sewer backups, and power failures.',
      keyTrades: ['Emergency Board-Up', '24/7 Live Dispatch Line', 'Hydro-Jetting & Pumping', 'Glass & Glazier Securement'],
    },
  ];

  // Filtered detailed service catalog
  const filteredCatalog = DETAILED_SERVICES.filter((svc) => {
    const matchesCategory = selectedCategory === 'all' || svc.category === selectedCategory;
    const matchesQuery = 
      svc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      svc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (svc.specs && svc.specs.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Comprehensive Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
            Complete Facility Services. One Reliable Partner.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From planned retail renovations to ongoing preventative maintenance and urgent repairs, AX Now! provides enterprise retailers with single-source accountability.
          </p>
        </div>

        {/* Primary 6 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {primaryPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-slate-950/80 border border-slate-800 hover:border-sky-500/40 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-black/40"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-sky-400 group-hover:text-sky-300 group-hover:border-sky-500/50 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-400">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 font-display tracking-tight transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Included Capabilities:
                    </div>
                    <ul className="space-y-1">
                      {pillar.keyTrades.map((trade, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400/80 shrink-0" />
                          <span>{trade}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory(pillar.id === 'repairs' ? 'repairs' : pillar.id);
                      setShowFullCatalog(true);
                      const el = document.getElementById('catalog-browser');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    <span>View All Trades</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onRequestService(pillar.title)}
                    className="px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Request
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Spotlight: Exterior Commercial Infrastructure with Real Image */}
        <div className="mt-12 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 lg:p-12 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>Federal & DOT Specifications</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Civil, Asphalt Paving & Exterior Envelope Management
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We provide comprehensive exterior facility work complying with M-DOT, O-DOT, and state Super Pave guidelines. With our own service trucks, hydro-jetters, and heavy equipment, AX Now! manages commercial lots, sidewalks, storm drains, and structural masonry without relying on external third-party brokers.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="text-slate-400">Asphalt & Paving</div>
                <div className="font-bold text-white mt-0.5">Super Pave / DOT</div>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="text-slate-400">Concrete Work</div>
                <div className="font-bold text-white mt-0.5">Curbs, Flatwork & ADA</div>
              </div>
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <div className="text-slate-400">Engineering</div>
                <div className="font-bold text-white mt-0.5">Civil Engineers on Staff</div>
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={() => onRequestService('Exterior & Paving Service')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors cursor-pointer"
              >
                <span>Schedule Exterior Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 h-72 lg:h-full relative min-h-[320px]">
            <img
              src={pavingImg}
              alt="AX NOW! commercial asphalt paving and retail plaza exterior maintenance"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
          </div>
        </div>

        {/* Detailed 45+ Trade Service Catalog Browser */}
        <div id="catalog-browser" className="mt-16 pt-12 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Full Operational Trade Catalog</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Browse All Documented Facility Services
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Direct in-house execution for over 35+ specialized retail trade disciplines.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search trades (e.g. asphalt, locks, HVAC)..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
              />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-4 no-scrollbar">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-sky-400 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Filtered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {(showFullCatalog ? filteredCatalog : filteredCatalog.slice(0, 9)).map((item) => (
              <div
                key={item.id}
                className="p-4 bg-slate-950/70 border border-slate-800 hover:border-slate-700 rounded-xl transition-colors flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span className="font-mono text-sky-400/90 font-medium uppercase">
                      {item.scope} Scope
                    </span>
                    {item.specs && (
                      <span className="text-slate-400 bg-slate-900 px-2 py-0.5 rounded text-[10px]">
                        {item.specs}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-xs">
                  <button
                    type="button"
                    onClick={() => onSelectServiceDetail(item)}
                    className="text-slate-400 hover:text-sky-300 transition-colors font-medium cursor-pointer"
                  >
                    View Details
                  </button>

                  <button
                    type="button"
                    onClick={() => onRequestService(item.name)}
                    className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More / Show Less Toggle */}
          {filteredCatalog.length > 9 && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowFullCatalog(!showFullCatalog)}
                className="px-6 py-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                {showFullCatalog ? 'Show Less Trades' : `View All ${filteredCatalog.length} Trade Disciplines`}
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
