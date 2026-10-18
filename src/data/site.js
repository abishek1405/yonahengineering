import { serviceDetails } from './serviceDetails.js';

// All site content lives here so it can be edited without touching layout code.
// Images are served from /public/images as optimized WebP (full + "-sm" thumbnail).

export const img = (path) => `/images/${path}.webp`;
export const thumb = (path) => `/images/${path}-sm.webp`;

const mapsQuery = encodeURIComponent('Madhanandapuram, Sriperumbudur, Tamil Nadu 600125');

export const company = {
  name: 'Yonah Engineering',
  // registered company details (public record, Ministry of Corporate Affairs) — shown for trust/E-E-A-T
  legalName: 'Yonah Engineering and Construction Private Limited',
  cin: 'U71100TN2023PTC160680',
  street: 'Plot No. 42, First Floor, Annai Velankanni Nagar, Phase-1, Madhanandapuram',
  city: 'Sriperumbudur',
  district: 'Kanchipuram',
  region: 'Tamil Nadu',
  postalCode: '600125',
  // social profiles — shown as floating buttons, in the footer and the "Follow us" popup when filled in
  social: {
    facebook: 'https://www.facebook.com/p/Yonahengineering-100070088942772/',
    instagram: 'https://www.instagram.com/yonah_engineering/',
  },
  tagline: 'Expert MEP solutions for industrial & commercial projects.',
  location: 'Sriperumbudur, Tamil Nadu, India',
  address: [
    'Plot No. 42, First Floor,',
    'Annai Velankanni Nagar, Phase‑1,', // non-breaking hyphen keeps 'Phase-1' together
    'Madhanandapuram, Sriperumbudur,',
    'Kanchipuram, Tamil Nadu – 600125, India',
  ],
  email: 'yonahengineering@gmail.com',
  hrEmail: 'hr@yonahengineering.com', // job applications and CVs
  phone: '+91 94866 28827',
  phoneHref: 'tel:+919486628827',
  // WhatsApp chat number (country code + number, digits only) — powers the floating WhatsApp button
  whatsapp: '919486628827',
  phone2: '+91 63806 22824',
  phone2Href: 'tel:+916380622824',
  // office landline — "Talk to our executives"
  landline: '+91 44 4851 5540',
  landlineHref: 'tel:+914448515540',
  hours: 'Mon – Sat: 9:30 AM – 6:30 PM',
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapsEmbed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  founded: 2015,
};

// Featured video (Home page). The current file is a PLACEHOLDER built from project photos.
// To use the real company video either replace public/videos/yonah-site-showcase.mp4 (H.264 MP4)
// or set youtubeId (the part after "v=" in the YouTube link) — then update title, description,
// uploadDate and duration (ISO 8601, e.g. 'PT1M30S').
export const featuredVideo = {
  youtubeId: '',
  src: '/videos/yonah-site-showcase.mp4',
  poster: '/videos/yonah-site-showcase-poster.webp',
  title: 'Yonah Engineering on site: fire protection, HVAC and electrical works',
  description:
    'A look at recent Yonah Engineering sites: a fire pump room, HT panel testing, cooling towers, LT switchgear and a water booster system.',
  uploadDate: '2026-10-11',
  duration: 'PT20S',
};

export const stats = [
  { value: 75, suffix: '+', label: 'Projects Completed', icon: 'Building2' },
  { value: 11, suffix: '+', label: 'Years Experience', icon: 'CalendarCheck' },
  { value: 50, suffix: '+', label: 'Expert Engineers', icon: 'HardHat' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: 'ThumbsUp' },
];

// Each service runs through the same five stages: survey, design, approval, supply, installation.
const steps = (survey, design, approval, supply, install) => [
  ['Site Survey', survey],
  ['Design & Engineering', design],
  ['Approvals', approval],
  ['Supply', supply],
  ['Installation & Commissioning', install],
];

export const services = [
  {
    slug: 'fire-protection-systems',
    name: 'Fire Protection Systems',
    title: ['Fire Protection', 'Systems'],
    eyebrow: 'Fire Detection, Suppression & Protection',
    icon: 'Flame',
    short:
      'Sprinklers, hydrants, gas suppression, fire alarm and extinguishers, designed, supplied and installed to code.',
    description:
      'Yonah Engineering specializes in the complete design, supply, installation, testing and commissioning of fire protection systems for commercial and industrial buildings. Our systems comply with NFPA, local fire-safety regulations and national and international fire codes.',
    badges: [
      { icon: 'ShieldCheck', label: 'NFPA', sub: 'Compliant' },
      { icon: 'BadgeCheck', label: 'Fire NOC', sub: 'Approval Support' },
      { icon: 'ClipboardCheck', label: 'Design to', sub: 'Execution' },
    ],
    features: [
      { icon: 'Droplets', text: 'Various sprinkler systems' },
      { icon: 'Waypoints', text: 'Fire hydrant system' },
      { icon: 'Wind', text: 'Gas detection & suppression system' },
      { icon: 'Siren', text: 'Fire alarm & PA system' },
      { icon: 'FireExtinguisher', text: 'Fire extinguishers' },
      { icon: 'FileCheck2', text: 'Design, engineering, execution & fire NOC' },
    ],
    images: ['sprinkler/sprinkler-2', 'sprinkler/sprinkler-4', 'sprinkler/sprinkler-8', 'sprinkler/sprinkler-14'],
    process: steps(
      'Hazard class, occupancy, water source and site conditions.',
      'Hydraulic calculations, detection layouts and system drawings.',
      'Drawings and documents for the fire department NOC.',
      'Pumps, valves, piping, detectors and suppression equipment.',
      'Installation, flow and pressure tests, and NOC inspection.'
    ),
  },
  {
    slug: 'hvac-systems',
    name: 'HVAC Systems',
    title: ['HVAC', 'Systems'],
    eyebrow: 'Heating, Ventilation & Air Conditioning',
    icon: 'Snowflake',
    short:
      'Chilled water, VRF, fresh air, smoke extraction and ducting, designed, supplied and installed for efficiency.',
    description:
      'Our HVAC engineering team designs, supplies and installs high-efficiency heating, ventilation and air conditioning systems for commercial buildings, warehouses, manufacturing plants and data centres. We optimise for energy efficiency and indoor air quality.',
    badges: [
      { icon: 'Award', label: 'ASHRAE', sub: 'Standards' },
      { icon: 'Leaf', label: 'Energy', sub: 'Efficient Design' },
      { icon: 'MonitorCog', label: 'BMS', sub: 'Integration Ready' },
    ],
    features: [
      { icon: 'Snowflake', text: 'Chilled water systems — air-cooled & water-cooled chillers, AHU / FCU units' },
      { icon: 'Split', text: 'VRV / VRF multi-split systems' },
      { icon: 'Fan', text: 'Fresh air & ventilation systems' },
      { icon: 'CloudFog', text: 'Smoke extraction systems' },
      { icon: 'MonitorCog', text: 'BMS — Building Management System' },
      { icon: 'Ruler', text: 'All kinds of ducts — AC, ventilation & fresh air' },
    ],
    images: ['hvac/hvac-1', 'hvac/hvac-3', 'hvac/hvac-14', 'hvac/hvac-2'],
    process: steps(
      'Heat-load study, site survey and occupancy requirements.',
      'Equipment selection, ductwork and piping design.',
      'Drawings and approvals with the consultant and client.',
      'Chillers, AHUs, FCUs, VRF units, fans and ductwork.',
      'Installation, testing, air balancing and commissioning.'
    ),
  },
  {
    slug: 'electrical-elv-systems',
    name: 'Electrical & ELV Systems',
    title: ['Electrical &', 'ELV Systems'],
    eyebrow: 'Power, Lighting & Extra-Low Voltage',
    icon: 'Zap',
    short:
      'HT 33 kV / 11 kV and LT systems, power and lighting, emergency power, plus networking, CCTV, PA and access control.',
    description:
      'We design, supply, install and commission complete electrical and ELV systems for industrial and commercial projects — from 33 kV and 11 kV HT systems and LT distribution to UPS and diesel generators, and the extra-low-voltage systems for data, CCTV, PA, access control and BMS.',
    badges: [
      { icon: 'Zap', label: 'HT 33 / 11 kV', sub: 'Systems' },
      { icon: 'BadgeCheck', label: 'A-Grade', sub: 'Electrical Licence' },
      { icon: 'Network', label: 'ELV', sub: 'Integrated Systems' },
    ],
    // shown as two groups on the page; `features` (all items) feeds the summaries and schema
    featureGroups: [
      {
        title: 'Electrical',
        items: [
          { icon: 'Zap', text: 'HT 33 kV system' },
          { icon: 'Zap', text: 'HT 11 kV system' },
          { icon: 'PanelsTopLeft', text: 'LT system' },
          { icon: 'Lightbulb', text: 'Power & lighting distribution' },
          { icon: 'CloudLightning', text: 'Lightning protection — conventional & surge protection' },
          { icon: 'BatteryCharging', text: 'Emergency power distribution — UPS & diesel generators' },
        ],
      },
      {
        title: 'ELV',
        items: [
          { icon: 'Network', text: 'Networking & data' },
          { icon: 'Cctv', text: 'CCTV' },
          { icon: 'Megaphone', text: 'PA (public address)' },
          { icon: 'KeyRound', text: 'Access control' },
          { icon: 'MonitorCog', text: 'BMS' },
        ],
      },
    ],
    images: ['electrical/electrical-1', 'ht-panel/ht-panel-1', 'electrical/electrical-7', 'lighting/lighting-2'],
    process: steps(
      'Connected load, site layout and ELV requirements.',
      'Single-line diagrams, cable sizing and ELV layouts.',
      'Drawings for electrical inspectorate and utility approval.',
      'HT and LT panels, transformers, cables, UPS, DG and ELV equipment.',
      'Installation, testing, energisation and system integration.'
    ),
  },
  {
    slug: 'utility-systems',
    name: 'Utility Systems',
    title: ['Utility', 'Systems'],
    eyebrow: 'Plant & Process Utilities',
    icon: 'Factory',
    short:
      'Compressed air, steam and hot water, cooling water, industrial gases, diesel fuel, RO and process water networks.',
    description:
      'We design, supply and install the plant utilities that keep production running — compressed air, steam and hot water, cooling water, industrial gases, diesel fuel, RO water and process water networks — engineered for safe operation and easy maintenance.',
    badges: [
      { icon: 'Factory', label: 'Process', sub: 'Ready Utilities' },
      { icon: 'FileCheck2', label: 'IBR / PESO', sub: 'Approval Support' },
      { icon: 'ClipboardCheck', label: 'Tested', sub: '& Commissioned' },
    ],
    features: [
      { icon: 'Gauge', text: 'Compressed air system' },
      { icon: 'Thermometer', text: 'Steam & hot water generation system' },
      { icon: 'Waves', text: 'Cooling water system' },
      { icon: 'Cylinder', text: 'CO₂ / N₂ / O₂ / LPG storage & distribution system' },
      { icon: 'Fuel', text: 'Diesel fuel storage & distribution system' },
      { icon: 'Filter', text: 'RO water system' },
      { icon: 'Waypoints', text: 'Process water network' },
    ],
    images: ['hvac/hvac-9', 'hvac/hvac-7', 'plumbing/plumbing-10', 'hvac/hvac-10'],
    process: steps(
      'Utility demand, user points and plant layout.',
      'Equipment sizing, piping layouts and P&IDs.',
      'Statutory approvals such as IBR and PESO where needed.',
      'Compressors, boilers, pumps, tanks, manifolds and piping.',
      'Installation, pressure tests, tie-ins and commissioning.'
    ),
  },
  {
    slug: 'public-health-engineering',
    name: 'Public Health Engineering (PHE)',
    title: ['Public Health', 'Engineering (PHE)'],
    eyebrow: 'Plumbing, Water Supply & Drainage',
    icon: 'Droplets',
    short: 'Plumbing and sanitary, hot and cold water supply, SWR piping, rainwater harvesting and STP / ETP / WTP.',
    description:
      'Yonah Engineering delivers comprehensive public health engineering (PHE) services for commercial and industrial projects. Our systems are designed, supplied and installed in full compliance with local building codes and national and international standards.',
    badges: [
      { icon: 'Building2', label: 'NBC Part 9', sub: 'Compliant' },
      { icon: 'Droplets', label: 'Water-Efficient', sub: 'Design' },
      { icon: 'ClipboardCheck', label: 'Supply &', sub: 'Installation' },
    ],
    features: [
      { icon: 'Bath', text: 'Plumbing & sanitary' },
      { icon: 'Thermometer', text: 'Various water supply systems — hot, cold & steam' },
      { icon: 'Waves', text: 'SWR piping system' },
      { icon: 'CloudRain', text: 'Rainwater harvesting' },
      { icon: 'Waypoints', text: 'Slurry piping process' },
      { icon: 'Recycle', text: 'STP / ETP / WTP' },
    ],
    images: ['plumbing/plumbing-3', 'plumbing/plumbing-1', 'plumbing/plumbing-5', 'plumbing/plumbing-12'],
    process: steps(
      'Water demand, fixture units and drainage routes.',
      'Pipe sizing, pump selection and tank capacities.',
      'Drawings and approvals with the local authority.',
      'Pumps, tanks, pipes, valves and sanitary fixtures.',
      'Installation, pressure and leak testing, flushing and handover.'
    ),
  },
  {
    slug: 'water-treatment-plants',
    name: 'Water Treatment Plants',
    title: ['Water Treatment', 'Plants'],
    eyebrow: 'STP · ETP · WTP · RO',
    icon: 'Recycle',
    short: 'Sewage, effluent and water treatment plants, RO and filtration, supplied, installed and commissioned.',
    description:
      'We supply, install and commission water and wastewater treatment plants — sewage treatment (STP), effluent treatment (ETP), water treatment (WTP) and RO plants — so sites meet pollution control norms and reuse treated water wherever possible.',
    badges: [
      { icon: 'ShieldCheck', label: 'Pollution Control', sub: 'Norms' },
      { icon: 'Recycle', label: 'Treated Water', sub: 'Reuse' },
      { icon: 'Wrench', label: 'O&M', sub: 'Support' },
    ],
    features: [
      { icon: 'Recycle', text: 'Sewage treatment plants (STP)' },
      { icon: 'Factory', text: 'Effluent treatment plants (ETP)' },
      { icon: 'Droplets', text: 'Water treatment plants (WTP)' },
      { icon: 'Filter', text: 'Reverse osmosis (RO) plants' },
      { icon: 'Container', text: 'Pressure sand & carbon filters and softeners' },
      { icon: 'Wrench', text: 'Operation & maintenance support' },
    ],
    images: ['plumbing/plumbing-6', 'plumbing/plumbing-9', 'plumbing/plumbing-7', 'plumbing/plumbing-8'],
    process: steps(
      'Flow, raw water or effluent quality and site space.',
      'Process design, plant sizing and layouts.',
      'Pollution control board consent documentation.',
      'Tanks, filters, RO skids, pumps, blowers and dosing systems.',
      'Installation, commissioning, operator training and handover.'
    ),
  },
];

// grouped services expose a flat feature list too, for the summaries and schema
services.forEach((s) => {
  if (s.featureGroups) s.features = s.featureGroups.flatMap((g) => g.items);
});

// each service gains its page-specific sections (applications, equipment, standards, FAQs)
services.forEach((s) => Object.assign(s, serviceDetails[s.slug]));

export const getService = (slug) => services.find((s) => s.slug === slug);

// Project portfolio — every photo is from Yonah Engineering's own sites.
// Sector / location / scope are summarised from each photo and service — update
// with exact project names, cities and completion years as the client provides them.
const P = (title, category, image, sector, scope, highlights) => ({
  title,
  category,
  image,
  sector,
  location: 'India',
  scope,
  highlights,
});

// Portfolio categories, in menu order, and the service page each one belongs to.
export const projectCategories = ['Fire Protection', 'HVAC', 'Electrical & ELV', 'Utility', 'PHE', 'Water Treatment'];
export const categoryService = {
  'Fire Protection': 'fire-protection-systems',
  HVAC: 'hvac-systems',
  'Electrical & ELV': 'electrical-elv-systems',
  Utility: 'utility-systems',
  PHE: 'public-health-engineering',
  'Water Treatment': 'water-treatment-plants',
};

export const projects = [
  P('Fire Pump Room', 'Fire Protection', 'sprinkler/sprinkler-1', 'Industrial',
    'Complete fire pump room with main, standby and jockey pumps, suction and delivery headers and pump controllers.',
    ['Main, standby & jockey pumps', 'Header & valve assemblies', 'Flow & pressure testing']),
  P('Fire Protection Header Piping', 'Fire Protection', 'sprinkler/sprinkler-2', 'Industrial',
    'Large-bore fire protection headers and risers routed through the pump room and service corridor.',
    ['Painted & identified mains', 'Supports at code spacing', 'Hydrostatic testing']),
  P('Fire Pump Sets & Strainers', 'Fire Protection', 'sprinkler/sprinkler-4', 'Industrial',
    'Fire pump sets with suction strainers, isolation valves and delivery piping on raised plinths.',
    ['Pump & motor alignment', 'Suction strainers', 'Vibration-free mounting']),
  P('Fire Pump Controllers', 'Fire Protection', 'sprinkler/sprinkler-8', 'Industrial',
    'Fire pump control panels for automatic and manual starting, wired to the pumps and the fire alarm system.',
    ['Auto / manual start', 'Pressure switch start-up', 'Alarm & status signals']),
  P('Pump Room Valve Stations', 'Fire Protection', 'sprinkler/sprinkler-5', 'Industrial',
    'Valve stations, gauges and access platforms around the fire pump headers.',
    ['Gate & butterfly valves', 'Pressure gauges', 'Access steps & platforms']),
  P('Rooftop Fire Pressurisation Skids', 'Fire Protection', 'sprinkler/sprinkler-10', 'Industrial',
    'Rooftop pressurisation skids with pressure vessels and valves to keep the hydrant and sprinkler network charged.',
    ['Pressure vessels', 'Isolation & non-return valves', 'Weather-protected install']),
  P('Fire NOC Inspection', 'Fire Protection', 'sprinkler/sprinkler-13', 'Industrial',
    'Pump room walk-through and witness testing with fire officials and the client team ahead of the fire NOC.',
    ['Witness testing', 'Test records & drawings', 'Authority walk-through']),
  P('Air-Cooled Chiller Plant', 'HVAC', 'hvac/hvac-1', 'Industrial',
    'Rooftop air-cooled chillers supplied and installed with chilled water piping, valves and power connections.',
    ['Chiller positioning on plinths', 'Insulated CHW piping', 'Start-up & commissioning']),
  P('VRF Outdoor Units', 'HVAC', 'hvac/hvac-2', 'Commercial',
    'VRF outdoor condensing units on the roof with refrigerant piping to the indoor units.',
    ['Refrigerant piping', 'Pressure & vacuum tests', 'Controller set-up']),
  P('Cooling Towers & Condenser Water', 'HVAC', 'hvac/hvac-3', 'Industrial',
    'Cooling towers with large-bore condenser water piping and pump sets on the roof.',
    ['Cooling tower erection', 'Condenser water loop', 'Performance checks']),
  P('Insulated Chilled Water Headers', 'HVAC', 'hvac/hvac-14', 'Industrial',
    'Insulated chilled water headers with branch valves serving the building plant.',
    ['Cladded insulation', 'Branch isolation valves', 'Leak-tested joints']),
  P('Rooftop Chilled Water Piping', 'HVAC', 'hvac/hvac-13', 'Industrial',
    'Long insulated chilled water runs across the roof on low-level supports.',
    ['Aluminium-cladded insulation', 'Long-radius bends', 'Roof-level supports']),
  P('AHU Room Installation', 'HVAC', 'hvac/hvac-15', 'Industrial',
    'Air handling unit room with chilled water connections, insulated piping and duct connections.',
    ['AHU positioning', 'CHW coil connections', 'Duct & damper hook-up']),
  P('HT Panel Testing', 'Electrical & ELV', 'ht-panel/ht-panel-1', 'Industrial',
    'On-site testing of HT panels by our engineers before energisation.',
    ['Insulation resistance', 'Breaker timing', 'Test reports']),
  P('HT Switchgear Commissioning', 'Electrical & ELV', 'ht-panel/ht-panel-5', 'Industrial',
    'Commissioning of an HT switchgear line-up with metering and protection.',
    ['Pre-commissioning checks', 'Interlock verification', 'Energisation']),
  P('Dry-Type Transformer Installation', 'Electrical & ELV', 'ht-panel/ht-panel-6', 'Industrial',
    'Dry-type distribution transformers installed, connected and tested in the substation.',
    ['Transformer positioning', 'Bus trunking connections', 'Ratio & winding tests']),
  P('LT Switchgear Line-up', 'Electrical & ELV', 'electrical/electrical-1', 'Industrial',
    'Main LT switchgear line-up installed, cabled and tested in the electrical room.',
    ['Panel erection', 'Cable terminations', 'Functional testing']),
  P('Transformer & LT Panel Room', 'Electrical & ELV', 'electrical/electrical-5', 'Industrial',
    'Transformer connected by bus trunking to the LT panels in the same room.',
    ['Bus trunking', 'Earthing connections', 'IR testing']),
  P('Power Cable Laying', 'Electrical & ELV', 'electrical/electrical-6', 'Industrial',
    'Unloading and laying of large power cable drums with crane support on site.',
    ['Crane-assisted handling', 'Cable pulling', 'Safe work practices']),
  P('DG Set Installation', 'Electrical & ELV', 'electrical/electrical-7', 'Industrial',
    'Diesel generator sets installed outdoors with exhaust, cabling and changeover for emergency power.',
    ['DG positioning', 'Exhaust & cabling', 'Load testing']),
  P('UPS & Battery Room', 'Electrical & ELV', 'electrical/electrical-14', 'Industrial',
    'Battery banks and UPS systems for critical loads.',
    ['Battery racks', 'UPS connections', 'Backup-time tests']),
  P('Busduct Rising Mains', 'Electrical & ELV', 'lighting/lighting-9', 'Commercial',
    'Busduct rising mains with tap-off boxes for floor-wise power distribution.',
    ['Busduct risers', 'Tap-off units', 'Joint & IR testing']),
  P('Cable Tray to Chiller Panels', 'Electrical & ELV', 'lighting/lighting-2', 'Industrial',
    'Overhead ladder trays and drop routes feeding chiller starter panels.',
    ['Ladder & perforated trays', 'Bends & drop routes', 'Earthing continuity']),
  P('Office Lighting Fit-Out', 'Electrical & ELV', 'lighting/lighting-1', 'Commercial',
    'LED panel lighting across a large open-plan office floor with grid ceiling.',
    ['LED panel lights', 'Uniform lux levels', 'Circuit-wise switching']),
  P('Cooling Water Pump Sets', 'Utility', 'hvac/hvac-9', 'Industrial',
    'Cooling water pump sets on steel frames with strainers, valves and green-painted piping.',
    ['Pump & motor sets', 'Strainers & valves', 'Alignment & testing']),
  P('Cooling Water Piping Network', 'Utility', 'hvac/hvac-7', 'Industrial',
    'Cooling water supply and return piping with pipe racks and supports across the roof.',
    ['Pipe racks & supports', 'Expansion allowances', 'Flushing & cleaning']),
  P('Cooling Water Headers', 'Utility', 'hvac/hvac-10', 'Industrial',
    'Cooling water headers and pump connections linking the cooling towers to the plant.',
    ['Large-bore headers', 'Pump connections', 'Pressure testing']),
  P('Domestic Water Booster System', 'PHE', 'plumbing/plumbing-3', 'Industrial',
    'Stainless steel water tanks with booster pump sets, pressure vessels and control panel.',
    ['Booster pump sets', 'Pressure vessels', 'Pump control panel']),
  P('SS Water Storage Tanks', 'PHE', 'plumbing/plumbing-5', 'Industrial',
    'Sectional stainless steel water storage tanks on the roof with inlet and outlet piping.',
    ['Sectional SS tanks', 'Inlet & outlet piping', 'Leak testing']),
  P('Water Transfer Pumps', 'PHE', 'plumbing/plumbing-4', 'Industrial',
    'Transfer pump set and control panel feeding the rooftop storage tanks.',
    ['Transfer pumps', 'Level controls', 'Pump control panel']),
  P('RO Water Treatment Plant', 'Water Treatment', 'plumbing/plumbing-6', 'Industrial',
    'Reverse osmosis plant with pressure sand and carbon filters, dosing and treated water storage.',
    ['Pressure sand filters', 'RO skid & dosing', 'Treated water tank']),
  P('Pressure Sand Filters', 'Water Treatment', 'plumbing/plumbing-7', 'Industrial',
    'Pressure sand and activated carbon filters with backwash piping and controls.',
    ['PSF & ACF vessels', 'Backwash piping', 'Control panel']),
  P('Sewage Treatment Plant', 'Water Treatment', 'plumbing/plumbing-9', 'Industrial',
    'Sewage treatment plant with treated water storage tanks for reuse on site.',
    ['STP process units', 'Treated water tanks', 'Reuse connections']),
];

export const featuredProjects = [
  'Fire Pump Room',
  'Air-Cooled Chiller Plant',
  'HT Panel Testing',
  'LT Switchgear Line-up',
  'Cooling Towers & Condenser Water',
  'Domestic Water Booster System',
].map((t) => projects.find((p) => p.title === t));

// "Current Projects" panel in the Get a Quote popup. PLACEHOLDERS built from site photos —
// replace name / location / value with the client's running projects (value is hidden while empty).
export const currentProjects = [
  { name: 'Fire Protection Works — Industrial Facility', location: 'Tamil Nadu', value: '', image: 'sprinkler/sprinkler-1' },
  { name: 'HVAC Chiller Plant — Manufacturing Unit', location: 'Tamil Nadu', value: '', image: 'hvac/hvac-1' },
  { name: 'HT & LT Electrical Works — Industrial Park', location: 'Tamil Nadu', value: '', image: 'ht-panel/ht-panel-1' },
  { name: 'Cooling Water Utilities — Process Plant', location: 'Tamil Nadu', value: '', image: 'hvac/hvac-9' },
  { name: 'Water Booster & Storage — Industrial Campus', location: 'Tamil Nadu', value: '', image: 'plumbing/plumbing-3' },
];

// Core values (About page). Concept photos, not project photos: free Unsplash License images
// (commercial use, no attribution needed) — sources: unsplash.com/photos/_XTY6lD8jgM (trophy),
// n95VMLxqM2I (handshake), jw3GOzxiSkw (bulb), GmvH5v9l3K4 (gears), 0w-uTa0Xz7w (wind turbines),
// hard-hats-and-safety-vests-wjHdeYmI-XU (hard hats).
export const values = [
  { icon: 'Trophy', title: 'Excellence', text: 'We maintain the highest standards in every project, from design to commissioning.', image: 'values/excellence' },
  { icon: 'Handshake', title: 'Integrity', text: 'Honest, transparent communication and ethical practices in everything we do.', image: 'values/integrity' },
  { icon: 'Lightbulb', title: 'Innovation', text: 'Embracing the latest technologies to deliver smarter, more efficient solutions.', image: 'values/innovation' },
  { icon: 'Zap', title: 'Reliability', text: 'On-time delivery and consistent quality that our clients can always count on.', image: 'values/reliability' },
  { icon: 'Leaf', title: 'Sustainability', text: 'Designing energy-efficient systems that reduce environmental impact.', image: 'values/sustainability' },
  { icon: 'ShieldCheck', title: 'Safety', text: 'Zero-compromise approach to workplace safety and system compliance.', image: 'values/safety' },
];

export const certifications = [
  { icon: 'Award', title: 'ISO 9001:2015', text: 'Quality Management System' },
  { icon: 'BadgeCheck', title: 'A-Grade Electrical Licence', text: 'Licensed Electrical Contractor' },
  { icon: 'ShieldCheck', title: 'NFPA Member', text: 'National Fire Protection Association' },
  { icon: 'Snowflake', title: 'ASHRAE Certified', text: 'HVAC & Refrigeration Engineers' },
];

// "Our Journey" graph on the About page (2015 → 2024).
// The years and titles after 2015 are PLACEHOLDERS to confirm with the client; 2023 matches the CIN.
export const milestones = [
  { year: 2015, icon: 'Building2', title: 'Yonah Engineering Founded', text: 'Established in Sriperumbudur to deliver dependable MEP engineering.' },
  { year: 2017, icon: 'Award', title: 'ISO 9001:2015 Quality System', text: 'Quality processes adopted across design, installation and testing.' },
  { year: 2019, icon: 'Factory', title: 'Industrial MEP & Utilities', text: 'Grew into large industrial MEP and plant utility projects.' },
  { year: 2021, icon: 'Zap', title: 'Electrical & ELV Division', text: 'HT, LT and ELV systems delivered under an A-grade electrical licence.' },
  { year: 2023, icon: 'Briefcase', title: 'Private Limited Company', text: 'Incorporated as Yonah Engineering and Construction Pvt Ltd.' },
  { year: 2024, icon: 'TrendingUp', title: '75+ Projects Delivered', text: 'A trusted MEP partner for industrial and commercial clients.' },
];

export const team = [
  { role: 'Chief Executive Officer', focus: 'MEP Engineering & Project Management', years: '20+', icon: 'Briefcase' },
  { role: 'HVAC Engineer', focus: 'Chilled Water, VRF & Ventilation Systems', years: '15+', icon: 'Snowflake' },
  { role: 'Fire Protection Engineer', focus: 'Sprinkler, Hydrant, Alarm & Suppression', years: '15+', icon: 'Flame' },
  { role: 'Electrical Engineer', focus: 'HT / LT, Power Distribution & ELV', years: '15+', icon: 'Zap' },
  { role: 'Plumbing Engineer', focus: 'PHE, Water Supply & Drainage', years: '15+', icon: 'Droplets' },
  { role: 'Design Engineers', focus: 'MEP Design, Drawings & Coordination', years: '15+', icon: 'PencilRuler' },
  { role: 'Project Manager', focus: 'Industrial & Commercial MEP Projects', years: '20+', icon: 'ClipboardList' },
];

export const workflow = [
  { icon: 'Search', title: 'Survey', text: 'We study your site, drawings and requirements in detail.' },
  { icon: 'PencilRuler', title: 'Design & Approval', text: 'Engineered designs with authority approvals handled for you.' },
  { icon: 'Truck', title: 'Supply & Installation', text: 'We supply the equipment and our teams install it to the drawings.' },
  { icon: 'HardHat', title: 'Testing & Handover', text: 'Every system is tested, commissioned and documented before handover.' },
];
