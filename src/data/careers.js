// Careers page content.
//
// `openings` are REAL current vacancies. Each one is shown as a job card and published to Google
// as JobPosting schema (Google for Jobs), so only add roles that are actually open, and remove them
// when filled. While the list is empty the page invites general applications.
//
// Fields: id = the reference code candidates quote in their email subject; type = FULL_TIME |
// PART_TIME | CONTRACTOR | INTERN; validThrough (optional, 'YYYY-MM-DD') = closing date.
const SITE_DUTIES = [
  'Design review, site co-ordination and material handling',
  'Installation, testing and commissioning of MEP works',
];
const job = (id, title, icon, experience, responsibilities, qualification) => ({
  id,
  title,
  icon,
  location: 'Chennai, Tamil Nadu',
  type: 'FULL_TIME',
  experience,
  datePosted: '2026-10-11',
  responsibilities,
  qualification,
});

export const openings = [
  job('YRPM260101', 'Project Manager', 'ClipboardList', '10–14 years', SITE_DUTIES,
    'Engineering degree or diploma'),
  job('YREE260102', 'Senior Electrical Engineer', 'Zap', '8–12 years', SITE_DUTIES,
    'Engineering degree or diploma'),
  job('YRME260103', 'Senior Mechanical Engineer', 'Cog', '8–12 years', SITE_DUTIES,
    'Engineering degree or diploma'),
  job('YRPC260104', 'Project Co-ordinator', 'Users', '5–10 years', [
    'Co-ordinate material supply, planning, budgets and client meetings',
    'Take on multiple responsibilities across running projects',
  ], 'Engineering degree'),
  job('YRDR260105', 'MEP Draftsman', 'PencilRuler', '5–10 years', [
    'Prepare design, shop and as-built drawings',
    'Assist the sales and estimation team',
  ], 'Engineering degree or diploma'),
  job('YRQC-260106', 'QC Engineer', 'ClipboardCheck', '5–10 years', [
    'Handle quality documentation for MEP systems',
    'Co-ordinate site inspections and NCR close-out with the project consultant',
  ], 'Engineering degree'),
  job('YREL260107', 'ELV Testing & Commissioning Engineer', 'Siren', '10 years', [
    'Commission ELV systems: fire alarm, PA, access control, IT and CCTV',
    'Co-ordinate with site teams before commissioning starts',
  ], 'Engineering degree'),
  job('YRSE260108', 'Sales & Estimation Engineer', 'Calculator', '5–10 years', [
    'Prepare bid proposals with cost breakdowns and technical specifications',
    'Study customer requirements and recommend the right MEP products and services',
  ], 'Degree'),
];

// Roles the company typically recruits for (shown so candidates know where they could fit).
export const roleAreas = [
  {
    icon: 'Flame',
    title: 'Fire Protection Engineers',
    text: 'Site and design engineers for sprinkler, hydrant and fire pump installations.',
  },
  {
    icon: 'Snowflake',
    title: 'HVAC Engineers',
    text: 'Engineers for chilled-water plants, VRF systems, AHUs, ducting and testing & balancing.',
  },
  {
    icon: 'Zap',
    title: 'Electrical Engineers (HT / LT)',
    text: 'Engineers for HT panel testing, LT panels, power distribution, earthing and commissioning.',
  },
  {
    icon: 'Ruler',
    title: 'MEP Draughtsmen & Designers',
    text: 'AutoCAD / Revit drafting for shop drawings, layouts and as-built documentation.',
  },
  {
    icon: 'HardHat',
    title: 'Supervisors & Technicians',
    text: 'Site supervisors, electricians, plumbers, pipe fitters and fire technicians.',
  },
  {
    icon: 'Award',
    title: 'Graduate Engineer Trainees',
    text: 'Fresh mechanical and electrical graduates who want hands-on site experience.',
  },
];

export const perks = [
  {
    icon: 'Factory',
    title: 'Real Site Experience',
    text: 'Work on live industrial and commercial projects, from survey and installation to testing and handover.',
  },
  {
    icon: 'Users',
    title: 'Learn From Senior Engineers',
    text: 'Work alongside experienced engineers across fire protection, HVAC, electrical and plumbing.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Safety First',
    text: 'Safe work practices, PPE and permit-to-work discipline on every site we run.',
  },
  {
    icon: 'TrendingUp',
    title: 'Grow Across Disciplines',
    text: 'Our six disciplines give you room to build skills in more than one MEP trade.',
  },
];

export const hiringSteps = [
  { title: 'Send your application', text: 'Fill in the form and email us your CV.' },
  { title: 'Profile review', text: 'Our team reviews your experience against current and upcoming projects.' },
  { title: 'Technical discussion', text: 'A conversation with our engineers about your site and design experience.' },
  { title: 'Offer & onboarding', text: 'Joining formalities, safety induction and introduction to your project team.' },
];
