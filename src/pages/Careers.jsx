import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, MapPin, Briefcase, Clock, Paperclip, GraduationCap, ArrowRight, Mail } from 'lucide-react';
import Icon from '../components/Icon.jsx';
import { PageHeader, SectionHead } from '../components/Section.jsx';
import Seo, { breadcrumbSchema, absUrl } from '../components/Seo.jsx';
import ScrollStack from '../components/ScrollStack.jsx';
import { openings, roleAreas, perks, hiringSteps } from '../data/careers.js';
import { company, img } from '../data/site.js';
import { SITE_URL } from '../config.js';

const TYPE_LABEL = { FULL_TIME: 'Full-time', PART_TIME: 'Part-time', CONTRACTOR: 'Contract', INTERN: 'Internship' };

// How a role appears in the form and the email subject: title plus the advert's reference code.
const roleLabel = (j) => `${j.title} (${j.id})`;

// JobPosting schema for each real opening (Google for Jobs).
const jobSchema = (j) => ({
  '@context': 'https://schema.org',
  '@type': 'JobPosting',
  title: j.title,
  description:
    `<p>${company.name} is hiring a ${j.title} for MEP projects in ${j.location}.</p>` +
    `<ul>${j.responsibilities.map((t) => `<li>${t}</li>`).join('')}</ul>` +
    `<p>Experience: ${j.experience} in MEP projects. Qualification: ${j.qualification}.</p>` +
    `<p>Email your CV to ${company.hrEmail} with "${roleLabel(j)}" in the subject line.</p>`,
  datePosted: j.datePosted,
  validThrough: j.validThrough,
  employmentType: j.type,
  hiringOrganization: { '@type': 'Organization', name: company.legalName, sameAs: SITE_URL, logo: `${SITE_URL}/images/logo.png` },
  jobLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      addressLocality: company.city,
      addressRegion: company.region,
      postalCode: company.postalCode,
      addressCountry: 'IN',
    },
  },
  identifier: { '@type': 'PropertyValue', name: company.name, value: j.id },
  directApply: true,
});

export default function Careers() {
  const crumbs = [{ label: 'Careers', to: '/careers' }];
  // "Apply for this role" on a job card pre-selects that role in the application form
  const [applyRole, setApplyRole] = useState('');
  return (
    <>
      <Seo
        title="Careers — MEP Engineering Jobs in Chennai"
        description="MEP jobs at Yonah Engineering, Chennai: project manager, electrical, mechanical, QC, ELV and estimation engineers, project co-ordinator and draftsman."
        path="/careers"
        image={img('site/site-2')}
        schema={[breadcrumbSchema([{ label: 'Home', to: '/' }, ...crumbs], '/careers'), ...openings.map(jobSchema)]}
      />
      <PageHeader crumbs={crumbs} title="Careers at" accent="Yonah Engineering" image={img('site/site-2')} />

      {/* WHY WORK WITH US */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Careers"
            title="Build Your Career"
            accent="With Us"
            lead="We design, install, test and maintain the systems that keep industrial and commercial buildings safe and running. Join a team that learns on real sites every day."
          />
          <ScrollStack className="career-perks">
            {perks.map((p) => (
              <article key={p.title} className="career-perk reveal">
                <span className="sd-equip-icon"><Icon name={p.icon} size={24} /></span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* OPENINGS + ROLES */}
      <section className="section section-alt" id="openings">
        <div className="container">
          <SectionHead
            eyebrow="Opportunities"
            title="Current Openings"
            accent="& Roles"
            lead={
              openings.length
                ? 'Positions we are hiring for right now. Do not see your role? Send a general application below.'
                : 'There are no specific vacancies listed right now, but we welcome applications from experienced professionals and fresh graduates throughout the year.'
            }
          />

          {openings.length > 0 && (
            <>
              <div className="jobs-bar reveal">
                <h3>
                  {openings.length} Open <span className="accent">Positions</span>
                </h3>
                <p>
                  <Mail size={16} /> Email your CV to{' '}
                  <a href={`mailto:${company.hrEmail}`}>{company.hrEmail}</a> with the position and reference code in
                  the subject line, or use the form below.
                </p>
              </div>
              <div className="job-list">
                {openings.map((j) => (
                  <article key={j.id} className="job-card reveal">
                    <div className="job-head">
                      <span className="icon-chip"><Icon name={j.icon} size={20} /></span>
                      <div>
                        <h4>{j.title}</h4>
                        <span className="job-ref">Ref. {j.id}</span>
                      </div>
                    </div>
                    <p className="job-meta">
                      <span><Clock size={14} /> {j.experience} in MEP</span>
                      <span><MapPin size={14} /> {j.location}</span>
                      <span><Briefcase size={14} /> {TYPE_LABEL[j.type] || j.type}</span>
                    </p>
                    <ul>
                      {j.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                    <p className="job-qual">
                      <GraduationCap size={16} /> {j.qualification}
                    </p>
                    <a href="#apply" className="btn btn-outline btn-sm" onClick={() => setApplyRole(roleLabel(j))}>
                      Apply for this role <ArrowRight size={16} />
                    </a>
                  </article>
                ))}
              </div>
            </>
          )}

          <p className="roles-label reveal">Roles we regularly hire for</p>
          <ScrollStack className="role-grid">
            {roleAreas.map((r) => (
              <article key={r.title} className="role-card reveal">
                <span className="icon-chip"><Icon name={r.icon} size={20} /></span>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.text}</p>
                </div>
              </article>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* APPLY */}
      <section className="section" id="apply">
        <div className="container">
          <SectionHead
            eyebrow="Apply"
            title="Apply"
            accent="Now"
            lead="Tell us about yourself and email us your CV. Our team reviews every application and will contact shortlisted candidates."
          />
          <div className="careers-apply">
            <div className="hire-steps reveal">
              <h3>How We Hire</h3>
              <ol>
                {hiringSteps.map((st, i) => (
                  <li key={st.title}>
                    <span className="process-num">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h4>{st.title}</h4>
                      <p>{st.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="more-links hire-contact">
                Send your CV to <a href={`mailto:${company.hrEmail}`}>{company.hrEmail}</a>, or call{' '}
                <a href={company.phoneHref}>{company.phone}</a> with questions. Learn more <Link to="/about">about our team</Link>.
              </p>
            </div>
            <div className="form-card reveal">
              <ApplicationForm presetRole={applyRole} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const EXPERIENCE = ['Fresher', '1–3 years', '3–5 years', '5–10 years', '10+ years'];
const empty = { name: '', email: '', phone: '', role: '', experience: '', location: '', message: '' };

// No backend: the application opens in the candidate's email app, pre-filled; they attach their CV there.
function ApplicationForm({ presetRole }) {
  const uid = useId();
  const fid = (k) => `${uid}-${k}`;
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const roles = [...openings.map(roleLabel), ...roleAreas.map((r) => `General application – ${r.title}`), 'Other'];

  useEffect(() => {
    if (!presetRole) return;
    setSent(false);
    setForm((f) => ({ ...f, role: presetRole }));
    setErrors((er) => ({ ...er, role: undefined }));
  }, [presetRole]);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Please enter a valid email address.';
    if (form.phone.replace(/\D/g, '').length < 10) er.phone = 'Please enter a valid phone number.';
    if (!form.role) er.role = 'Please choose the role you are applying for.';
    setErrors(er);
    if (Object.keys(er).length) {
      document.getElementById(fid(Object.keys(er)[0]))?.focus();
      return;
    }
    const subject = `Application for ${form.role} — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Applying for: ${form.role}`,
      form.experience && `Experience: ${form.experience}`,
      form.location && `Current location: ${form.location}`,
      '',
      form.message,
      '',
      '(CV attached)',
    ]
      .filter((l) => l !== false && l !== undefined)
      .join('\n');
    window.location.href = `mailto:${company.hrEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={48} />
        <h4>Almost done, {form.name.split(' ')[0]}!</h4>
        <p>
          Your email app should have opened with your application. <strong>Attach your CV</strong> and press send. If it
          didn't open, email your CV to <a href={`mailto:${company.hrEmail}`}>{company.hrEmail}</a> with “{form.role}” in
          the subject line.
        </p>
        <button type="button" className="btn btn-outline" onClick={() => { setForm(empty); setSent(false); }}>
          Start a new application
        </button>
      </div>
    );
  }

  const field = (k, extra = {}) => ({
    id: fid(k),
    value: form[k],
    onChange: set(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? `${fid(k)}-e` : undefined,
    ...extra,
  });
  const err = (k) => errors[k] && <p className="field-error" id={`${fid(k)}-e`}>{errors[k]}</p>;

  return (
    <form onSubmit={onSubmit} noValidate>
      <h3 className="form-title">Application Form</h3>
      <p className="form-sub">Fields marked * are required.</p>
      <div className="form-row">
        <div className={`field${errors.name ? ' has-error' : ''}`}>
          <label htmlFor={fid('name')}>Full Name <span className="req">*</span></label>
          <input {...field('name')} autoComplete="name" placeholder="Your full name" />
          {err('name')}
        </div>
        <div className={`field${errors.email ? ' has-error' : ''}`}>
          <label htmlFor={fid('email')}>Email Address <span className="req">*</span></label>
          <input {...field('email')} type="email" autoComplete="email" placeholder="you@example.com" />
          {err('email')}
        </div>
      </div>
      <div className="form-row">
        <div className={`field${errors.phone ? ' has-error' : ''}`}>
          <label htmlFor={fid('phone')}>Phone Number <span className="req">*</span></label>
          <input {...field('phone')} type="tel" autoComplete="tel" placeholder="+91 ..." />
          {err('phone')}
        </div>
        <div className={`field${errors.role ? ' has-error' : ''}`}>
          <label htmlFor={fid('role')}>Applying For <span className="req">*</span></label>
          <select {...field('role')}>
            <option value="">Select a role...</option>
            {roles.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
          {err('role')}
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor={fid('experience')}>Experience</label>
          <select {...field('experience')}>
            <option value="">Select...</option>
            {EXPERIENCE.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor={fid('location')}>Current Location</label>
          <input {...field('location')} autoComplete="address-level2" placeholder="City" />
        </div>
      </div>
      <div className="field">
        <label htmlFor={fid('message')}>About You</label>
        <textarea {...field('message')} rows={4} placeholder="Your qualification, key projects and skills (AutoCAD, Revit, testing equipment…)." />
      </div>
      <p className="cv-note">
        <Paperclip size={16} /> After you press Send, your email app opens — attach your CV (PDF or Word) before sending.
      </p>
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        Send Application <Send size={18} />
      </button>
    </form>
  );
}
