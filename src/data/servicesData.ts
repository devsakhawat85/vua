export interface ServiceItem {
  id: string;
  name: string;
  category: 'construction' | 'maintenance' | 'repairs' | 'civil' | 'engineering' | 'emergency';
  description: string;
  scope: 'Interior' | 'Exterior' | 'Both';
  specs?: string;
}

export const CLIENT_LIST = [
  { name: 'CVS Pharmacy', category: 'Pharmacy & Healthcare', tenure: 'Multi-State Support' },
  { name: 'Family Dollar Stores', category: 'Discount Retail', tenure: 'Regional Maintenance' },
  { name: 'Dollar General', category: 'Variety Retail', tenure: 'Facility Operations' },
  { name: 'BJ\'s Wholesale Club', category: 'Big-Box & Warehouse', tenure: 'Scheduled & Emergency' },
  { name: 'Panda Express', category: 'Commercial Food & Retail', tenure: 'Interior & Trades' },
  { name: 'Wal-Mart / Sam\'s Club', category: 'National Retail', tenure: 'Exterior & Civil' },
  { name: 'Best Buy', category: 'Consumer Electronics', tenure: 'Commercial Repairs' },
  { name: 'Sunoco', category: 'Commercial Petroleum Retail', tenure: 'Paving & Maintenance' },
  { name: 'RadioShack', category: 'Retail Electronics', tenure: 'Store Operations' },
  { name: 'Gap Stores', category: 'Apparel Retail', tenure: 'Sales-Floor Maintenance' },
];

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'construction', label: 'Retail Construction' },
  { id: 'maintenance', label: 'Facility Maintenance' },
  { id: 'repairs', label: 'Trades & Repairs' },
  { id: 'civil', label: 'Civil & Exterior' },
  { id: 'emergency', label: 'Emergency & Urgent' },
  { id: 'engineering', label: 'Engineering & QA/QC' },
] as const;

export const DETAILED_SERVICES: ServiceItem[] = [
  // Exterior & Civil
  {
    id: 'asphalt-paving',
    name: 'Asphalt Paving & Repair',
    category: 'civil',
    description: 'Full depth patch, milling, repaving, and joint sealing adhering to M-DOT, O-DOT, and all state Super Pave/Federal specifications.',
    scope: 'Exterior',
    specs: 'M-DOT & O-DOT Super Pave specs'
  },
  {
    id: 'concrete-repair',
    name: 'Concrete Repair & Flat-Work',
    category: 'civil',
    description: 'Complete commercial concrete restoration, installation, flat-work, sidewalks, curbs, ADA ramps, and heavy-load truck docks.',
    scope: 'Exterior'
  },
  {
    id: 'parking-lot-restriping',
    name: 'Parking Lot Re-Striping',
    category: 'civil',
    description: 'High-durability traffic paint application, ADA stall compliance, directional stenciling, fire lane markings, and layout redesigns.',
    scope: 'Exterior'
  },
  {
    id: 'pothole-repair',
    name: 'Pothole & Base Repair',
    category: 'civil',
    description: 'Rapid hot-pour and cold-patch pothole repairs to eliminate customer liability and vehicle damage on retail lots.',
    scope: 'Exterior'
  },
  {
    id: 'dumpster-enclosures',
    name: 'Dumpster Enclosures',
    category: 'civil',
    description: 'New construction and structural repair of masonry and steel dumpster enclosures, bollards, and heavy-duty gates.',
    scope: 'Exterior'
  },
  {
    id: 'iron-fabrication',
    name: 'Iron Fabrication & Gate Repair',
    category: 'civil',
    description: 'On-site welding, iron fence fabrication, security gate alignment, hinge replacement, and protective bollards.',
    scope: 'Exterior'
  },
  {
    id: 'masonry-tuckpointing',
    name: 'Masonry Restoration & Tuckpointing',
    category: 'civil',
    description: 'Brickwork restoration, mortar joint repointing, lintel replacement, stone resetting, and waterproof masonry sealing.',
    scope: 'Exterior'
  },
  {
    id: 'eifs-stucco',
    name: 'E.I.F.S. & Stucco Installation & Repair',
    category: 'civil',
    description: 'Exterior Insulation and Finish System repair, impact patching, color matching, and elastomeric weatherproofing.',
    scope: 'Exterior'
  },
  {
    id: 'power-washing',
    name: 'Commercial Power-Washing',
    category: 'maintenance',
    description: 'Hot-water pressure cleaning for retail walkways, driveways, exterior walls, trash corrals, awnings, and entrance overhangs.',
    scope: 'Exterior'
  },
  {
    id: 'commercial-roofing',
    name: 'Roofing — Flat, Mansard & Shingle',
    category: 'construction',
    description: 'Flat TPO/EPDM roof repair, tear-off rebuilds, mansard refurbishing, storm leak mitigation, and warranty inspections.',
    scope: 'Exterior'
  },
  {
    id: 'commercial-signage',
    name: 'Sign Repair, Maintenance & Installation',
    category: 'repairs',
    description: 'Advertising, monument, pylon, and traffic directional sign repair, ballast replacement, face replacement, and new installations.',
    scope: 'Exterior'
  },
  {
    id: 'flagpole-service',
    name: 'Flag Pole Service & Rigging',
    category: 'maintenance',
    description: 'Halyard replacement, truck assembly repair, internal winch repair, and complete flagpole installation.',
    scope: 'Exterior'
  },
  {
    id: 'drive-through-repair',
    name: 'Drive-Through Repair & Maintenance',
    category: 'repairs',
    description: 'Clearance bar repairs, drive-through lane curb restoration, sensor loops, communication conduit protection, and bollards.',
    scope: 'Exterior'
  },
  {
    id: 'tree-removal',
    name: 'Tree Removal & Canopy Trimming',
    category: 'maintenance',
    description: 'Hazardous limb removal over storefronts, sightline clearing for retail signage, and stump grinding.',
    scope: 'Exterior'
  },
  // Interior & Trades
  {
    id: 'carpentry-framing',
    name: 'Carpentry, Drywall & Framing',
    category: 'construction',
    description: 'Light gauge steel stud framing, drywall hanging, taping, acoustic insulation, architectural demising walls, and retail partitions.',
    scope: 'Interior'
  },
  {
    id: 'entry-doors-locks',
    name: 'Entry Doors, Closers & Locks',
    category: 'repairs',
    description: 'Commercial automatic and manual aluminum doors, hollow metal doors, panic hardware, closers, continuous hinges, and re-keying.',
    scope: 'Both'
  },
  {
    id: 'lock-repair',
    name: 'Lock Repair & Security Hardware',
    category: 'repairs',
    description: 'High-security mortise locks, exit devices, master key systems, electronic strikes, and storefront deadbolts.',
    scope: 'Both'
  },
  {
    id: 'commercial-glazing',
    name: 'Windows & Commercial Glazing',
    category: 'repairs',
    description: 'Storefront glass replacement, safety laminate, drive-through windows, polycarbonate security panels, and thermal seal restoration.',
    scope: 'Both'
  },
  {
    id: 'cooler-doors',
    name: 'Walk-In Cooler Doors & Gaskets',
    category: 'repairs',
    description: 'Supermarket and convenience store cooler door alignment, heater wire troubleshooting, magnetic gaskets, and threshold repair.',
    scope: 'Interior'
  },
  {
    id: 'floor-tile',
    name: 'Floor Tile Installation & Repair',
    category: 'construction',
    description: 'VCT, ceramic, porcelain, and quarry tile replacement, grout re-coloration, subfloor leveling, and high-traffic transition strips.',
    scope: 'Interior'
  },
  {
    id: 'carpet-removal',
    name: 'Carpet Installation & Tear-Out',
    category: 'construction',
    description: 'Commercial carpet tile installation, adhesive removal, floor prep, and seamless overnight turnover.',
    scope: 'Interior'
  },
  {
    id: 'ceiling-tile-grid',
    name: 'Ceiling Tile & T-Bar Grid Repair',
    category: 'maintenance',
    description: 'Acoustical ceiling grid re-suspension, damaged tile replacement, water-stain tile swap, and HEPA vacuum tile cleaning.',
    scope: 'Interior'
  },
  {
    id: 'plumbing-hydrojetting',
    name: 'Plumbing & Hydro-Jetting',
    category: 'repairs',
    description: 'Complete commercial retail plumbing, backflow prevention, flushometer repairs, water heaters, and high-pressure sewer hydro-jetting.',
    scope: 'Interior'
  },
  {
    id: 'electrical-lighting',
    name: 'Electrical & Retail Lighting',
    category: 'repairs',
    description: 'Sales-floor LED retrofits, ballast replacement, breaker panel maintenance, emergency exit signs, and dedicated POS circuits.',
    scope: 'Interior'
  },
  {
    id: 'hvac-repair',
    name: 'HVAC Repair & Filter PM',
    category: 'repairs',
    description: 'Commercial RTU troubleshooting, belt and motor replacement, thermostat controls, condensate line clearing, and scheduled PM.',
    scope: 'Both'
  },
  {
    id: 'cash-wraps-pos',
    name: 'Counter Service & Cash Wraps',
    category: 'construction',
    description: 'POS station modifications, re-laminating checkout counters, transaction counter hinge repair, and custom architectural casework.',
    scope: 'Interior'
  },
  {
    id: 'computer-racks',
    name: 'Computer Room Set-Up & Racks',
    category: 'construction',
    description: 'Back-of-house server rack installation, structured cabling pass-throughs, secure IT cage framing, and UPS shelf brackets.',
    scope: 'Interior'
  },
  {
    id: 'painting-coatings',
    name: 'Painting & Architectural Coatings',
    category: 'construction',
    description: 'Interior and exterior low-VOC retail paint, epoxy floor coatings, bollard safety yellow, and architectural brand color matching.',
    scope: 'Both'
  },
  {
    id: 'waterproofing',
    name: 'Waterproofing & Sealants',
    category: 'civil',
    description: 'Below-grade foundation waterproofing, expansion joint caulking, perimeter window sealing, and concrete slab vapor barriers.',
    scope: 'Both'
  },
  {
    id: 'lift-station-pm',
    name: 'Lift-Station PM & Pump Trucks',
    category: 'civil',
    description: 'Preventative maintenance for sanitary and storm lift stations, submersible pump inspection, float switches, and vacuum truck pumping.',
    scope: 'Exterior'
  },
  {
    id: 'board-up-service',
    name: 'Emergency Board-Up & Securement',
    category: 'emergency',
    description: 'Immediate 24/7 emergency storefront board-up for vehicle impacts, break-ins, civil incidents, and storm damage.',
    scope: 'Both'
  },
  {
    id: 'engineering-qaqc',
    name: 'Civil Engineering & QA/QC',
    category: 'engineering',
    description: 'Certified civil & geotechnical engineering oversight, pavement thickness testing, core sampling, and structural reviews.',
    scope: 'Both',
    specs: 'Certified Civil Engineers on staff'
  }
];

export const STATES_COVERED = [
  { code: 'MI', name: 'Michigan', isHq: true, status: 'Headquarters & Core Hub', region: 'Midwest' },
  { code: 'OH', name: 'Ohio', isHq: false, status: 'Direct Service Region', region: 'Midwest' },
  { code: 'IL', name: 'Illinois', isHq: false, status: 'Direct Service Region', region: 'Midwest' },
  { code: 'IN', name: 'Indiana', isHq: false, status: 'Direct Service Region', region: 'Midwest' },
  { code: 'PA', name: 'Pennsylvania', isHq: false, status: 'Direct Service Region', region: 'East' },
  { code: 'KY', name: 'Kentucky', isHq: false, status: 'Direct Service Region', region: 'South' },
  { code: 'TN', name: 'Tennessee', isHq: false, status: 'Direct Service Region', region: 'South' },
  { code: 'WI', name: 'Wisconsin', isHq: false, status: 'Direct Service Region', region: 'Midwest' },
  { code: 'NY', name: 'New York (inc. NYC)', isHq: false, status: 'Licensed Market', region: 'East' },
  { code: 'MO', name: 'Missouri', isHq: false, status: 'Licensed Market', region: 'Midwest' },
  { code: 'MD', name: 'Maryland', isHq: false, status: 'Licensed Market', region: 'East' },
  { code: 'FL', name: 'Florida', isHq: false, status: 'Licensed Market', region: 'South' }
];

export const COMPANY_FACTS = {
  established: 1997,
  legalName: 'Ax, Inc.',
  entityType: 'Michigan Corporation (Inc. 1997)',
  ein: '38-3453632',
  headquarters: '29200 Southfield Road, Suite 210, Southfield, MI 48076',
  phone: '248.569.0800',
  fax: '248.569.0892',
  afterHoursEmergency: '248.228.7149',
  dispatchEmail: 'dispatch@axnow.com',
  updatesEmail: 'updates@axnow.com',
  hours: 'Monday – Friday, 8:30 AM – 5:00 PM EST',
  emergencyAvailability: '24/7/365 On-Call Live Dispatch',
  laborModel: 'Union & Non-Union (Direct in-house personnel)',
  warranty: '90 to 360 Days All Work Guaranteed',
  serviceVehicles: '48 Heavy & Specialized Service Trucks, Hydro-Jetters, Pump & Vactor Trucks',
  technicians: '56 Full-Time Service Technicians, 22 Plumbers, 18 Electricians',
  engineering: 'Certified Civil & Geotechnical Engineers on staff'
};
