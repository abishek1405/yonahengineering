import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { company, services } from '../data/site.js';
import Icon from './Icon.jsx';
import { QuoteButton } from './Quote.jsx';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/industries', label: 'Industries' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false); // Services sub-list in the mobile menu
  const [ddHold, setDdHold] = useState(false); // keeps the desktop dropdown shut after picking a page, until the mouse leaves
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const firstPath = useRef(true);

  useEffect(() => {
    setOpen(false);
    setSvcOpen(false);
    if (firstPath.current) firstPath.current = false;
    else setDdHold(true); // only after an actual navigation
    // the desktop dropdown stays open while it holds focus, so release focus after navigating
    if (document.activeElement?.closest?.('.dd-panel')) document.activeElement.blur();
  }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' menu-open' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Yonah Engineering home">
          <img src="/images/logo.png" alt="Yonah Engineering" width="150" height="54" />
        </Link>

        <nav id="site-nav" className={`nav${open ? ' is-open' : ''}`} aria-label="Main">
          <ul>
            {links.map((l) =>
              l.to === '/services' ? (
                <li key={l.to} className={`has-dd${svcOpen ? ' is-expanded' : ''}${ddHold ? ' dd-hold' : ''}`} onMouseLeave={() => setDdHold(false)}>
                  <div className="dd-row">
                    <NavLink to="/services">
                      Services <ChevronDown size={16} className="dd-caret" aria-hidden="true" />
                    </NavLink>
                    <button
                      type="button"
                      className="dd-toggle"
                      aria-expanded={svcOpen}
                      aria-controls="services-menu"
                      aria-label={svcOpen ? 'Hide services list' : 'Show services list'}
                      onClick={() => setSvcOpen((v) => !v)}
                    >
                      <ChevronDown size={22} />
                    </button>
                  </div>
                  <div id="services-menu" className="dd-panel">
                    {services.map((sv) => (
                      <Link key={sv.slug} to={`/services/${sv.slug}`} className="dd-link">
                        <span className="icon-chip"><Icon name={sv.icon} size={18} /></span>
                        <span>
                          <strong>{sv.name}</strong>
                          <small>{sv.eyebrow}</small>
                        </span>
                      </Link>
                    ))}
                    <Link to="/services" className="dd-all">
                      View all services <ArrowRight size={16} />
                    </Link>
                  </div>
                </li>
              ) : (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.end}>
                    {l.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <div className="nav-mobile-extra">
            <a href={company.phoneHref} className="nav-phone">
              <Phone size={18} /> {company.phone}
            </a>
            <QuoteButton className="btn btn-primary btn-block" onClick={() => setOpen(false)}>
              Get a Free Quote <ArrowRight size={18} />
            </QuoteButton>
          </div>
        </nav>

        <div className="header-actions">
          <a href={company.phoneHref} className="header-phone">
            <span className="header-phone-icon"><Phone size={16} /></span>
            <span>
              <small>Call us</small>
              {company.phone}
            </span>
          </a>
          <QuoteButton className="btn btn-primary btn-sm header-cta">
            Get a Quote
          </QuoteButton>
          <button
            type="button"
            className={`menu-toggle${open ? ' is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="burger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
