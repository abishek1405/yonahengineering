import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Phone, Mail, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import QuoteForm from './QuoteForm.jsx';
import { company, currentProjects, thumb } from '../data/site.js';

// Site-wide "Get a Quote" popup. Any button can open it with useQuote()(serviceName?).
const QuoteContext = createContext(() => {});

export const useQuote = () => useContext(QuoteContext);

export function QuoteProvider({ children }) {
  const [state, setState] = useState(null); // null = closed, otherwise { service, key }
  const openQuote = useCallback((service = '') => setState({ service, key: Date.now() }), []);
  const close = useCallback(() => setState(null), []);
  const { pathname } = useLocation();

  useEffect(() => setState(null), [pathname]);

  return (
    <QuoteContext.Provider value={openQuote}>
      {children}
      {state && <QuoteModal key={state.key} service={state.service} onClose={close} />}
    </QuoteContext.Provider>
  );
}

export function QuoteButton({ service, className = 'btn btn-primary', children, onClick }) {
  const openQuote = useQuote();
  return (
    <button
      type="button"
      className={className}
      aria-haspopup="dialog"
      onClick={() => {
        onClick?.();
        openQuote(service);
      }}
    >
      {children}
    </button>
  );
}

function QuoteModal({ service, onClose }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const prevFocus = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector('input')?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      // keep keyboard focus inside the dialog
      if (e.key === 'Tab' && panelRef.current) {
        const items = panelRef.current.querySelectorAll('button, a[href], input, select, textarea');
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="modal quote-modal" role="dialog" aria-modal="true" aria-labelledby="quote-title" onMouseDown={onClose}>
      <div className="quote-panel" ref={panelRef} onMouseDown={(e) => e.stopPropagation()}>
        <button type="button" className="quote-close" onClick={onClose} aria-label="Close quote form">
          <X size={20} />
        </button>
        <CurrentProjects />
        <div className="quote-main">
          <div className="quote-head">
            <p className="quote-eyebrow">Free Consultation</p>
            <h2 id="quote-title">
              Request a <span className="accent">Quote</span>
            </h2>
            <p>Tell us about your project and our engineers will get back to you within 24 hours.</p>
          </div>
          <div className="quote-body">
            <QuoteForm initialService={service} submitLabel="Send Request" onDone={onClose} compact />
          </div>
        </div>
      </div>
    </div>
  );
}

const SLIDE_MS = 3500;

// Side panel of the quote popup: running photos of current projects, plus direct contacts.
function CurrentProjects() {
  const [i, setI] = useState(0);
  const n = currentProjects.length;
  const go = (d) => setI((x) => (x + d + n) % n);

  // advances on its own; restarting on `i` gives a full interval after an arrow is pressed
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % n), SLIDE_MS);
    return () => clearInterval(t);
  }, [i, n]);

  const p = currentProjects[i];
  return (
    <aside className="quote-side" aria-label="Current projects">
      <p className="quote-eyebrow">Current Projects</p>
      <div className="quote-slides">
        {currentProjects.map((cp, k) => (
          <img key={cp.image} src={thumb(cp.image)} alt={k === i ? cp.name : ''} className={k === i ? 'is-active' : ''} loading="lazy" decoding="async" />
        ))}
      </div>
      <div className="quote-proj" aria-live="polite">
        <p className="quote-proj-name">{p.name}</p>
        <p className="quote-proj-meta">
          <MapPin size={14} /> {p.location}
          {p.value && <> · Value: {p.value}</>}
        </p>
      </div>
      <div className="quote-slide-nav">
        <button type="button" onClick={() => go(-1)} aria-label="Previous project"><ChevronLeft size={18} /></button>
        <span>{i + 1} / {n}</span>
        <button type="button" onClick={() => go(1)} aria-label="Next project"><ChevronRight size={18} /></button>
      </div>
      <div className="quote-contacts">
        <a href={company.landlineHref}><Phone size={15} /> {company.landline}</a>
        <a href={company.phoneHref}><Phone size={15} /> {company.phone}</a>
        <a href={`mailto:${company.email}`}><Mail size={15} /> {company.email}</a>
      </div>
    </aside>
  );
}
