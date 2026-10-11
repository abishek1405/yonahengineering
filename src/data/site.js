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
  tagline: 'Expert MEP solutions for commercial & industrial projects.',
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
  hours: 'Mon – Fri: 8:00 AM – 6:00 PM',
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapsEmbed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  founded: 2009,
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
  { value: 200, suffix: '+', label: 'Projects Completed', icon: 'Building2' },
  { value: 15, suffix: '+', label: 'Years Experience', icon: 'CalendarCheck' },
  { value: 50, suffix: '+', label: 'Expert Engineers', icon: 'HardHat' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: 'ThumbsUp' },
];

export const services = [
  {
    slug: 'sprinkler-systems',
    name: 'Sprinkler Systems',
    title: ['Sprinkler', 'Systems'],
    eyebrow: 'Fire Suppression & Protection',
    icon: 'Flame',
    short:
      'Complete fire suppression design, installation, and commissioning for commercial and industrial facilities.',
    description:
      'Yonah Engineering specializes in the complete design, supply, installation, testing, and commissioning of fire sprinkler systems for commercial, industrial, and high-rise buildings. Our systems comply with NFPA, local fire-safety regulations and international fire codes.',
    badges: [
      { icon: 'ShieldCheck', label: 'NFPA', sub: 'Compliant' },
      { icon: 'BadgeCheck', label: 'Fire NOC', sub: 'Approval Support' },
      { icon: 'Globe', label: 'International', sub: 'Fire Codes' },
    ],
    features: [
      { icon: 'Droplets', text: 'Wet pipe, dry pipe, and pre-action systems' },
      { icon: 'Cog', text: 'Fire pump room design and installation' },
      { icon: 'Calculator', text: 'Hydraulic calculations and system design' },
      { icon: 'FileCheck2', text: 'Fire department NOC approvals' },
      { icon: 'Wrench', text: 'Annual maintenance and inspection' },
      { icon: 'TrendingUp', text: 'Retrofit and upgrade of existing systems' },
    ],
    images: ['sprinkler/sprinkler-1', 'sprinkler/sprinkler-3', 'sprinkler/sprinkler-8', 'sprinkler/sprinkler-10'],
    process: [
      ['Site Assessment', 'Understanding project requirements, hazard class and site conditions.'],
      ['Design & Engineering', 'Hydraulic calculations and detailed system design.'],
      ['Installation', 'Professional installation with approved, quality materials.'],
      ['Testing & Commissioning', 'Flow and pressure testing for fire NOC approval.'],
      ['Handover & Maintenance', 'Documentation, training and ongoing support.'],
    ],
  },
  {
    slug: 'hvac-systems',
    name: 'HVAC Systems',
    title: ['HVAC', 'Systems'],
    eyebrow: 'Heating, Ventilation & Air Conditioning',
    icon: 'Snowflake',
    short:
      'Advanced heating, ventilation, and air conditioning solutions engineered for efficiency and comfort.',
    description:
      'Our HVAC engineering team designs and installs high-efficiency heating, ventilation, and air conditioning systems for commercial buildings, warehouses, manufacturing plants, and data centers. We optimize for energy efficiency and indoor air quality.',
    badges: [
      { icon: 'Award', label: 'ASHRAE', sub: 'Standards' },
      { icon: 'Leaf', label: 'Energy', sub: 'Efficient Design' },
      { icon: 'MonitorCog', label: 'BMS', sub: 'Integration Ready' },
    ],
    features: [
      { icon: 'Snowflake', text: 'Central chilled water systems' },
      { icon: 'Split', text: 'VRF/VRV multi-split systems' },
      { icon: 'Fan', text: 'AHU and FCU installation' },
      { icon: 'Factory', text: 'Cooling tower and chiller plants' },
      { icon: 'Ruler', text: 'Ductwork design and fabrication' },
      { icon: 'MonitorCog', text: 'Building Management System (BMS) integration' },
    ],
    images: ['hvac/hvac-1', 'hvac/hvac-3', 'hvac/hvac-9', 'hvac/hvac-14'],
    process: [
      ['Load Survey', 'Heat-load study, site survey and occupancy requirements.'],
      ['System Design', 'Equipment selection, ductwork and piping design.'],
      ['Installation', 'Chillers, AHUs, ducting and chilled water piping.'],
      ['Testing & Balancing', 'Testing, adjusting and balancing for rated performance.'],
      ['Handover & Maintenance', 'O&M manuals, training and preventive maintenance.'],
    ],
  },
  {
    slug: 'lighting-power-distribution',
    name: 'Lighting & Power Distribution',
    title: ['Lighting &', 'Power Distribution'],
    eyebrow: 'Electrical Lighting Systems',
    icon: 'Lightbulb',
    short:
      'Professional lighting design and power distribution systems for warehouses, offices, and industrial spaces.',
    description:
      'We design and install energy-efficient lighting and power distribution systems for warehouses, industrial facilities, offices, and commercial spaces. Our solutions comply with Indian and international electrical standards.',
    badges: [
      { icon: 'BadgeCheck', label: 'Electrical Code', sub: 'Compliant' },
      { icon: 'Lightbulb', label: 'Energy-Efficient', sub: 'LED Design' },
      { icon: 'Globe', label: 'International', sub: 'Standards' },
    ],
    features: [
      { icon: 'Lightbulb', text: 'LED lighting design and installation' },
      { icon: 'Cable', text: 'Cable tray and conduit systems' },
      { icon: 'PanelsTopLeft', text: 'Power distribution boards (PDB)' },
      { icon: 'Siren', text: 'Emergency lighting systems' },
      { icon: 'Warehouse', text: 'Warehouse high-bay lighting' },
      { icon: 'Lamp', text: 'Street and area lighting' },
    ],
    images: ['lighting/lighting-2', 'lighting/lighting-1', 'lighting/lighting-3', 'lighting/lighting-11'],
    process: [
      ['Site Survey', 'Space usage, lux requirements and electrical loads.'],
      ['Lighting & Load Design', 'Lighting layouts, load schedules and cable sizing.'],
      ['Installation', 'Cable trays, conduits, fixtures and distribution boards.'],
      ['Testing & Energisation', 'Insulation, continuity and lux-level verification.'],
      ['Handover', 'As-built drawings, approval documentation and support.'],
    ],
  },
  {
    slug: 'ht-panel-testing',
    name: 'HT Panel Testing',
    title: ['HT Panel', 'Testing'],
    eyebrow: 'High Tension Electrical Testing',
    icon: 'Zap',
    short:
      'High-tension panel testing, commissioning, and maintenance by certified electrical engineers.',
    description:
      'Yonah Engineering provides professional high-tension (HT) panel testing, commissioning, and maintenance services. Our certified engineers perform comprehensive electrical testing to ensure safety and reliability of HT electrical systems.',
    badges: [
      { icon: 'HardHat', label: 'Certified', sub: 'Test Engineers' },
      { icon: 'ClipboardCheck', label: 'Standard', sub: 'Test Procedures' },
      { icon: 'FileText', label: 'Detailed', sub: 'Test Reports' },
    ],
    features: [
      { icon: 'Zap', text: 'HT switchgear testing and commissioning' },
      { icon: 'BatteryCharging', text: 'Transformer testing and maintenance' },
      { icon: 'ShieldCheck', text: 'Protection relay testing' },
      { icon: 'Gauge', text: 'Insulation resistance testing' },
      { icon: 'Cable', text: 'High voltage cable testing' },
      { icon: 'Activity', text: 'Power quality analysis' },
    ],
    images: ['ht-panel/ht-panel-1', 'ht-panel/ht-panel-5', 'ht-panel/ht-panel-6', 'ht-panel/ht-panel-9'],
    process: [
      ['Pre-Test Inspection', 'Visual inspection, isolation and safety checks.'],
      ['Test Planning', 'Test sequences agreed against manufacturer data.'],
      ['On-site Testing', 'Switchgear, relay, transformer and cable tests.'],
      ['Analysis & Reporting', 'Results reviewed and documented in full reports.'],
      ['Commissioning', 'Energisation, handover and maintenance planning.'],
    ],
  },
  {
    slug: 'electrical-systems',
    name: 'Electrical Systems',
    title: ['Electrical', 'Systems'],
    eyebrow: 'Complete Electrical Engineering',
    icon: 'PlugZap',
    short:
      'Complete electrical system design and installation for commercial and industrial projects.',
    description:
      'Our electrical engineering team provides complete design, supply, installation, and commissioning of electrical systems for all types of commercial and industrial projects. We handle everything from LV panels to complete building electrification.',
    badges: [
      { icon: 'FileCheck2', label: 'Statutory', sub: 'Approval Drawings' },
      { icon: 'PanelsTopLeft', label: 'LV & MCC', sub: 'Systems' },
      { icon: 'ClipboardCheck', label: 'Full', sub: 'Commissioning' },
    ],
    features: [
      { icon: 'PanelsTopLeft', text: 'Main LV switchboard design' },
      { icon: 'Cog', text: 'Motor control centers (MCC)' },
      { icon: 'CloudLightning', text: 'Earthing and lightning protection' },
      { icon: 'Calculator', text: 'Electrical load calculations' },
      { icon: 'FileCheck2', text: 'Statutory approval drawings' },
      { icon: 'ClipboardCheck', text: 'Commissioning and handover' },
    ],
    images: ['electrical/electrical-1', 'electrical/electrical-6', 'electrical/electrical-7', 'electrical/electrical-5'],
    process: [
      ['Load Assessment', 'Connected load, demand and diversity calculations.'],
      ['Design & Approvals', 'Single-line diagrams and statutory approval drawings.'],
      ['Installation', 'LV panels, MCCs, cabling, earthing and protection.'],
      ['Testing & Commissioning', 'Functional testing and energisation of systems.'],
      ['Handover', 'As-built records, training and after-sales support.'],
    ],
  },
  {
    slug: 'plumbing-sanitary',
    name: 'Plumbing & Sanitary',
    title: ['Plumbing &', 'Sanitary'],
    eyebrow: 'Water Supply & Drainage Systems',
    icon: 'Wrench',
    short: 'Expert plumbing and sanitary engineering solutions compliant with local building codes.',
    description:
      'Yonah Engineering delivers comprehensive plumbing and sanitary engineering services for commercial, industrial, and residential projects. Our systems are designed and installed in full compliance with local building codes and international standards.',
    badges: [
      { icon: 'Building2', label: 'Local', sub: 'Building Codes' },
      { icon: 'Droplets', label: 'Water-Efficient', sub: 'Design' },
      { icon: 'Globe', label: 'International', sub: 'Standards' },
    ],
    features: [
      { icon: 'Thermometer', text: 'Domestic cold and hot water systems' },
      { icon: 'Waves', text: 'Drainage and sewage systems' },
      { icon: 'Cog', text: 'Pump room design and installation' },
      { icon: 'Container', text: 'Water storage tank systems' },
      { icon: 'CloudRain', text: 'Rainwater harvesting' },
      { icon: 'Filter', text: 'Grease trap design and installation' },
    ],
    images: ['plumbing/plumbing-3', 'plumbing/plumbing-6', 'plumbing/plumbing-1', 'plumbing/plumbing-9'],
    process: [
      ['Site Assessment', 'Water demand, fixture units and drainage routes.'],
      ['Design', 'Pipe sizing, pump selection and tank capacities.'],
      ['Installation', 'Supply, drainage, pump rooms and storage tanks.'],
      ['Pressure Testing', 'Leak testing, flushing and disinfection.'],
      ['Handover & Maintenance', 'Documentation, training and ongoing support.'],
    ],
  },
];

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

export const projectCategories = ['Sprinkler', 'HVAC', 'Lighting', 'HT Panel', 'Electrical', 'Plumbing'];

export const projects = [
  P('Fire Pump Room', 'Sprinkler', 'sprinkler/sprinkler-1', 'Industrial',
    'Complete fire pump room with main, standby and jockey pumps, suction and delivery headers and pump controllers.',
    ['Main, standby & jockey pumps', 'Header & valve assemblies', 'Flow & pressure testing']),
  P('Fire Protection Header Piping', 'Sprinkler', 'sprinkler/sprinkler-2', 'Industrial',
    'Large-bore fire protection headers and risers routed through the pump room and service corridor.',
    ['Painted & identified mains', 'Supports at code spacing', 'Hydrostatic testing']),
  P('Fire Pump Sets & Strainers', 'Sprinkler', 'sprinkler/sprinkler-4', 'Industrial',
    'Fire pump sets with suction strainers, isolation valves and delivery piping on raised plinths.',
    ['Pump & motor alignment', 'Suction strainers', 'Vibration-free mounting']),
  P('Fire Pump Controllers', 'Sprinkler', 'sprinkler/sprinkler-8', 'Industrial',
    'Fire pump control panels for automatic and manual starting, wired to the pumps and the fire alarm system.',
    ['Auto / manual start', 'Pressure switch start-up', 'Alarm & status signals']),
  P('Pump Room Valve Stations', 'Sprinkler', 'sprinkler/sprinkler-5', 'Industrial',
    'Valve stations, gauges and access platforms around the fire pump headers.',
    ['Gate & butterfly valves', 'Pressure gauges', 'Access steps & platforms']),
  P('Rooftop Fire Pressurisation Skids', 'Sprinkler', 'sprinkler/sprinkler-10', 'Industrial',
    'Rooftop pressurisation skids with pressure vessels and valves to keep the hydrant and sprinkler network charged.',
    ['Pressure vessels', 'Isolation & non-return valves', 'Weather-protected install']),
  P('Fire NOC Inspection', 'Sprinkler', 'sprinkler/sprinkler-13', 'Industrial',
    'Pump room walk-through and witness testing with fire officials and the client team ahead of the fire NOC.',
    ['Witness testing', 'Test records & drawings', 'Authority walk-through']),
  P('Air-Cooled Chiller Plant', 'HVAC', 'hvac/hvac-1', 'Industrial',
    'Rooftop air-cooled chillers installed with chilled water piping, valves and power connections.',
    ['Chiller positioning on plinths', 'Insulated CHW piping', 'Start-up & commissioning']),
  P('VRF Outdoor Units', 'HVAC', 'hvac/hvac-2', 'Commercial',
    'VRF outdoor condensing units on the roof with refrigerant piping to the indoor units.',
    ['Refrigerant piping', 'Pressure & vacuum tests', 'Controller set-up']),
  P('Cooling Towers & Condenser Water', 'HVAC', 'hvac/hvac-3', 'Industrial',
    'Cooling towers with large-bore condenser water piping and pump sets on the roof.',
    ['Cooling tower erection', 'Condenser water loop', 'Performance checks']),
  P('Condenser Water Pump Sets', 'HVAC', 'hvac/hvac-9', 'Industrial',
    'Condenser water pump sets on steel frames with strainers, valves and green-painted piping.',
    ['Pump & motor sets', 'Strainers & valves', 'Alignment & testing']),
  P('Cooling Tower Piping', 'HVAC', 'hvac/hvac-7', 'Industrial',
    'Cooling tower supply and return piping with pipe racks and supports across the roof.',
    ['Pipe racks & supports', 'Expansion allowances', 'Flushing & cleaning']),
  P('Insulated Chilled Water Headers', 'HVAC', 'hvac/hvac-14', 'Industrial',
    'Insulated chilled water headers with branch valves serving the building plant.',
    ['Cladded insulation', 'Branch isolation valves', 'Leak-tested joints']),
  P('Rooftop Chilled Water Piping', 'HVAC', 'hvac/hvac-13', 'Industrial',
    'Long insulated chilled water runs across the roof on low-level supports.',
    ['Aluminium-cladded insulation', 'Long-radius bends', 'Roof-level supports']),
  P('Office Lighting Fit-Out', 'Lighting', 'lighting/lighting-1', 'Commercial',
    'LED panel lighting across a large open-plan office floor with grid ceiling.',
    ['LED panel lights', 'Uniform lux levels', 'Circuit-wise switching']),
  P('Cable Tray to Chiller Panels', 'Lighting', 'lighting/lighting-2', 'Industrial',
    'Overhead ladder trays and drop routes feeding chiller starter panels.',
    ['Ladder & perforated trays', 'Bends & drop routes', 'Earthing continuity']),
  P('Ladder Tray & Riser Routes', 'Lighting', 'lighting/lighting-3', 'Industrial',
    'Ladder trays and vertical risers carrying power cables above the motor control centres.',
    ['Vertical cable risers', 'Neat cable dressing', 'Supports & hangers']),
  P('Busduct Rising Mains', 'Lighting', 'lighting/lighting-9', 'Commercial',
    'Busduct rising mains with tap-off boxes for floor-wise power distribution.',
    ['Busduct risers', 'Tap-off units', 'Joint & IR testing']),
  P('Workplace Lighting & Power', 'Lighting', 'lighting/lighting-6', 'Commercial',
    'Lighting and power points for a large workplace floor, from distribution boards to fittings.',
    ['Distribution boards', 'Lighting circuits', 'Power points']),
  P('HT Panel Testing', 'HT Panel', 'ht-panel/ht-panel-1', 'Industrial',
    'On-site testing of HT panels by our engineers before energisation.',
    ['Insulation resistance', 'Breaker timing', 'Test reports']),
  P('HT Switchgear Commissioning', 'HT Panel', 'ht-panel/ht-panel-5', 'Industrial',
    'Commissioning of an HT switchgear line-up with metering and protection.',
    ['Pre-commissioning checks', 'Interlock verification', 'Energisation']),
  P('Dry-Type Transformer Installation', 'HT Panel', 'ht-panel/ht-panel-6', 'Industrial',
    'Dry-type distribution transformers installed, connected and tested in the substation.',
    ['Transformer positioning', 'Bus trunking connections', 'Ratio & winding tests']),
  P('Protection Relay & Breaker Tests', 'HT Panel', 'ht-panel/ht-panel-3', 'Industrial',
    'Protection relay and circuit breaker tests with test kits on the HT panels.',
    ['Secondary injection', 'Trip circuit checks', 'Settings verification']),
  P('HT Panel Line-up', 'HT Panel', 'ht-panel/ht-panel-9', 'Industrial',
    'Installation and testing of an HT panel line-up in the electrical room.',
    ['Panel erection & levelling', 'Busbar torque checks', 'Contact resistance']),
  P('Pre-Energisation Testing', 'HT Panel', 'ht-panel/ht-panel-11', 'Industrial',
    'Final testing of HT equipment with the client team before the system is energised.',
    ['Witness testing', 'Safety isolation', 'Handover records']),
  P('LT Switchgear Line-up', 'Electrical', 'electrical/electrical-1', 'Industrial',
    'Main LT switchgear line-up installed, cabled and tested in the electrical room.',
    ['Panel erection', 'Cable terminations', 'Functional testing']),
  P('Main LT Panel Room', 'Electrical', 'electrical/electrical-3', 'Industrial',
    'Main LT panel room with incomers, bus couplers and outgoing feeders.',
    ['Incomers & bus couplers', 'Metering & protection', 'Rubber mats & safety signage']),
  P('Transformer & LT Panel Room', 'Electrical', 'electrical/electrical-5', 'Industrial',
    'Transformer connected by bus trunking to the LT panels in the same room.',
    ['Bus trunking', 'Earthing connections', 'IR testing']),
  P('Power Cable Laying', 'Electrical', 'electrical/electrical-6', 'Industrial',
    'Unloading and laying of large power cable drums with crane support on site.',
    ['Crane-assisted handling', 'Cable pulling', 'Safe work practices']),
  P('DG Set Installation', 'Electrical', 'electrical/electrical-7', 'Industrial',
    'Diesel generator sets installed outdoors with exhaust, cabling and changeover.',
    ['DG positioning', 'Exhaust & cabling', 'Load testing']),
  P('Motor Control Centres', 'Electrical', 'electrical/electrical-17', 'Industrial',
    'Motor control centres for plant equipment, fed from overhead cable trays.',
    ['MCC panels', 'Starter wiring', 'Motor trial runs']),
  P('UPS & Battery Room', 'Electrical', 'electrical/electrical-14', 'Industrial',
    'Battery banks and UPS systems for critical loads.',
    ['Battery racks', 'UPS connections', 'Backup-time tests']),
  P('Domestic Water Booster System', 'Plumbing', 'plumbing/plumbing-3', 'Industrial',
    'Stainless steel water tanks with booster pump sets, pressure vessels and control panel.',
    ['Booster pump sets', 'Pressure vessels', 'Pump control panel']),
  P('SS Water Storage Tanks', 'Plumbing', 'plumbing/plumbing-5', 'Industrial',
    'Sectional stainless steel water storage tanks on the roof with inlet and outlet piping.',
    ['Sectional SS tanks', 'Inlet & outlet piping', 'Leak testing']),
  P('RO Water Treatment Plant', 'Plumbing', 'plumbing/plumbing-6', 'Industrial',
    'Reverse osmosis plant with pressure sand and carbon filters, dosing and treated water storage.',
    ['Pressure sand filters', 'RO skid & dosing', 'Treated water tank']),
  P('Pressure Sand Filters', 'Plumbing', 'plumbing/plumbing-7', 'Industrial',
    'Pressure sand and activated carbon filters with backwash piping and controls.',
    ['PSF & ACF vessels', 'Backwash piping', 'Control panel']),
  P('Sewage Treatment Plant', 'Plumbing', 'plumbing/plumbing-9', 'Industrial',
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

export const values = [
  { icon: 'Trophy', title: 'Excellence', text: 'We maintain the highest standards in every project, from design to commissioning.', image: 'sprinkler/sprinkler-2' },
  { icon: 'Handshake', title: 'Integrity', text: 'Honest, transparent communication and ethical practices in everything we do.', image: 'site/site-3' },
  { icon: 'Lightbulb', title: 'Innovation', text: 'Embracing the latest technologies to deliver smarter, more efficient solutions.', image: 'hvac/hvac-1' },
  { icon: 'Zap', title: 'Reliability', text: 'On-time delivery and consistent quality that our clients can always count on.', image: 'electrical/electrical-1' },
  { icon: 'Leaf', title: 'Sustainability', text: 'Designing energy-efficient systems that reduce environmental impact.', image: 'plumbing/plumbing-6' },
  { icon: 'ShieldCheck', title: 'Safety', text: 'Zero-compromise approach to workplace safety and system compliance.', image: 'ht-panel/ht-panel-2' },
];

export const certifications = [
  { icon: 'Award', title: 'ISO 9001:2015', text: 'Quality Management System' },
  { icon: 'ShieldCheck', title: 'NFPA Member', text: 'National Fire Protection Association' },
  { icon: 'Snowflake', title: 'ASHRAE Certified', text: 'HVAC & Refrigeration Engineers' },
];

export const milestones = [
  { year: 2009, icon: 'Building2', title: 'Yonah Engineering Founded', text: 'Yonah Engineering was established with a clear vision — to deliver world-class MEP engineering solutions.', image: 'office/office-1' },
  { year: 2012, icon: 'Award', title: 'ISO 9001 Quality Certification', text: 'Achieved ISO 9001 certification, reinforcing our commitment to quality and process excellence.', image: 'ht-panel/ht-panel-11' },
  { year: 2015, icon: 'Factory', title: 'Expanded to Industrial MEP', text: 'Extended our expertise to large-scale industrial MEP projects across India.', image: 'electrical/electrical-6' },
  { year: 2018, icon: 'TrendingUp', title: 'Completed 100th Major Project', text: 'Reached a significant milestone with the completion of our 100th major MEP project.', image: 'sprinkler/sprinkler-1' },
  { year: 2021, icon: 'Zap', title: 'Launched HT Panel Testing Division', text: 'Introduced a dedicated HT panel testing division for testing and commissioning services.', image: 'ht-panel/ht-panel-1' },
  { year: 2024, icon: 'Users', title: '200+ Projects Delivered', text: 'Successfully delivered 200+ projects, strengthening our position as a trusted MEP partner.', image: 'hvac/hvac-3' },
];

export const team = [
  { role: 'Chief Executive Officer', focus: 'MEP Engineering & Project Management', years: '20+', icon: 'Briefcase' },
  { role: 'Lead HVAC Engineer', focus: 'Chilled Water Systems & Energy Efficiency', years: '15+', icon: 'Snowflake' },
  { role: 'Fire Protection Engineer', focus: 'Sprinkler & Fire Suppression Systems', years: '12+', icon: 'Flame' },
  { role: 'Senior Electrical Engineer', focus: 'HT/LV Systems & Power Distribution', years: '14+', icon: 'Zap' },
  { role: 'Plumbing Design Engineer', focus: 'Water Supply & Drainage Engineering', years: '10+', icon: 'Droplets' },
  { role: 'Project Manager', focus: 'Commercial & Industrial MEP Projects', years: '12+', icon: 'ClipboardList' },
];

export const workflow = [
  { icon: 'Search', title: 'Consult & Survey', text: 'We study your site, drawings and requirements in detail.' },
  { icon: 'PencilRuler', title: 'Design & Approve', text: 'Engineered designs with authority approvals handled for you.' },
  { icon: 'HardHat', title: 'Install & Test', text: 'Certified teams install, test and commission every system.' },
  { icon: 'Headset', title: 'Handover & Support', text: 'Full documentation, training and maintenance after handover.' },
];
