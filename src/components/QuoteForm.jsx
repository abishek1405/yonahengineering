import { useId, useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { company, services } from '../data/site.js';

const empty = { name: '', email: '', phone: '', service: '', message: '' };

// Enquiry form shared by the Contact page and the quote popup.
// No backend on this site: the enquiry opens in the visitor's email app, pre-filled.
// Swap the mailto in onSubmit for a form service (Formspree, EmailJS, or an API endpoint) when available.
export default function QuoteForm({ initialService = '', heading, subheading, submitLabel = 'Send Message', onDone }) {
  const uid = useId();
  const fid = (k) => `${uid}-f-${k}`;
  const eid = (k) => `${uid}-e-${k}`;
  const preset = services.some((s) => s.name === initialService) ? initialService : '';
  const [form, setForm] = useState({ ...empty, service: preset });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Please enter a valid email address.';
    if (form.message.trim().length < 10) er.message = 'Please add a few details about your project.';
    return er;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      document.getElementById(fid(Object.keys(er)[0]))?.focus();
      return;
    }
    const subject = `Project enquiry${form.service ? ` — ${form.service}` : ''} from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.service && `Service: ${form.service}`,
      '',
      form.message,
    ]
      .filter((l) => l !== false && l !== '')
      .join('\n');
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={48} />
        <h2>Thank you, {form.name.split(' ')[0]}!</h2>
        <p>
          Your email app should have opened with your enquiry ready to send. If it didn't, email us directly at{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a> or call <a href={company.phoneHref}>{company.phone}</a>.
        </p>
        <div className="btn-row btn-row-center">
          <button type="button" className="btn btn-outline" onClick={() => { setForm(empty); setSent(false); }}>
            Send another enquiry
          </button>
          {onDone && (
            <button type="button" className="btn btn-navy" onClick={onDone}>
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  const field = (k) => ({
    id: fid(k),
    value: form[k],
    onChange: set(k),
    'aria-invalid': errors[k] ? true : undefined,
    'aria-describedby': errors[k] ? eid(k) : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      {heading && <h2>{heading}</h2>}
      {subheading && <p className="form-sub">{subheading}</p>}
      <div className="form-row">
        <Field htmlFor={fid('name')} errorId={eid('name')} label="Full Name" required error={errors.name}>
          <input {...field('name')} autoComplete="name" placeholder="Your full name" />
        </Field>
        <Field htmlFor={fid('email')} errorId={eid('email')} label="Email Address" required error={errors.email}>
          <input {...field('email')} type="email" autoComplete="email" placeholder="you@company.com" />
        </Field>
      </div>
      <div className="form-row">
        <Field htmlFor={fid('phone')} label="Phone Number">
          <input {...field('phone')} type="tel" autoComplete="tel" placeholder="+91 ..." />
        </Field>
        <Field htmlFor={fid('service')} label="Service Required">
          <select {...field('service')}>
            <option value="">Select a service...</option>
            {services.map((s) => <option key={s.slug}>{s.name}</option>)}
            <option>General Enquiry</option>
          </select>
        </Field>
      </div>
      <Field htmlFor={fid('message')} errorId={eid('message')} label="Project Details" required error={errors.message}>
        <textarea {...field('message')} rows={4} placeholder="Tell us about your project — location, building type, scope and timeline." />
      </Field>
      <button type="submit" className="btn btn-primary btn-lg btn-block">
        {submitLabel} <Send size={18} />
      </button>
    </form>
  );
}

function Field({ htmlFor, errorId, label, required, error, children }) {
  return (
    <div className={`field${error ? ' has-error' : ''}`}>
      <label htmlFor={htmlFor}>
        {label} {required && <span className="req" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <p className="field-error" id={errorId}>{error}</p>}
    </div>
  );
}
