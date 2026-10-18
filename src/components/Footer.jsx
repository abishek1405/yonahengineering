import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, ArrowUp } from 'lucide-react';
import { company, services } from '../data/site.js';
import { SocialIcons } from './Social.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="footer-logo" src="/images/logo.png" alt="Yonah Engineering" width="150" height="54" loading="lazy" />
          <p>
            {company.tagline} Delivering quality engineering services across India since {company.founded}.
          </p>
          <div className="footer-certs">
            <span>ISO 9001:2015</span>
            <span>NFPA</span>
            <span>ASHRAE</span>
          </div>
          <SocialIcons className="footer-social" />
        </div>

        <div>
          <p className="footer-title">Our Services</p>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="footer-title">Quick Links</p>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="footer-title">Contact Us</p>
          <ul className="footer-contact">
            <li><MapPin size={18} /><a href={company.mapsUrl} target="_blank" rel="noreferrer">{company.address.join(' ')}</a></li>
            <li><Mail size={18} /><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><Phone size={18} /><span className="footer-phones"><a href={company.landlineHref}>{company.landline}</a><a href={company.phoneHref}>{company.phone}</a><a href={company.phone2Href}>{company.phone2}</a></span></li>
            <li><Clock size={18} /><span>{company.hours}</span></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} {company.legalName} · CIN {company.cin}. All rights reserved.
        </p>
        <p>MEP Engineering · Tamil Nadu, India</p>
        <button type="button" className="to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
