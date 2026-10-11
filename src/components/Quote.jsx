import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { X, Phone, Mail } from 'lucide-react';
import QuoteForm from './QuoteForm.jsx';
import { company } from '../data/site.js';

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
        <div className="quote-head">
          <p className="quote-eyebrow">Free Consultation</p>
          <h2 id="quote-title">
            Request a <span className="accent">Quote</span>
          </h2>
          <p>Tell us about your project and our engineers will get back to you within 24 hours.</p>
          <div className="quote-contacts">
            <a href={company.phoneHref}><Phone size={16} /> {company.phone}</a>
            <a href={company.phone2Href}><Phone size={16} /> {company.phone2}</a>
            <a href={`mailto:${company.email}`}><Mail size={16} /> {company.email}</a>
          </div>
          <button type="button" className="quote-close" onClick={onClose} aria-label="Close quote form">
            <X size={22} />
          </button>
        </div>
        <div className="quote-body">
          <QuoteForm initialService={service} submitLabel="Send Request" onDone={onClose} />
        </div>
      </div>
    </div>
  );
}
