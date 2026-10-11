import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import Seo from '../components/Seo.jsx';
import { QuoteButton } from '../components/Quote.jsx';

const popular = [
  { to: '/services', label: 'Our Services' },
  { to: '/products', label: 'Products' },
  { to: '/industries', label: 'Industries' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/careers', label: 'Careers' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you were looking for could not be found. Browse Yonah Engineering's services, products, industries, projects or contact our team."
        path="/404"
        noindex
      />
      <section className="nf">
      <div className="container nf-inner">
        <div className="nf-copy">
          <p className="page-pill">Error 404</p>
          <h1>
            This page got <span className="accent">disconnected</span>
          </h1>
          <p className="lead">
            The page you're looking for may have been moved, renamed or no longer exists. Let's get you reconnected.
          </p>
          <div className="btn-row">
            <Link to="/" className="btn btn-primary btn-lg">
              <Home size={18} /> Back to Home
            </Link>
            <QuoteButton className="btn btn-outline btn-lg">
              Contact Us
            </QuoteButton>
          </div>
          <div className="nf-popular">
            <span>Popular pages</span>
            <ul>
              {popular.map((p) => (
                <li key={p.to}>
                  <Link to={p.to}>
                    {p.label} <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <NotFoundArt />
      </div>
      </section>
    </>
  );
}

// Custom illustration in the brand palette: monitor showing 404 with an unplugged power plug.
function NotFoundArt() {
  return (
    <svg className="nf-art" viewBox="0 0 560 420" role="img" aria-label="Illustration of a monitor showing error 404 with an unplugged power cable">
      {/* backdrop */}
      <ellipse cx="290" cy="200" rx="250" ry="175" fill="#eef2f8" />
      <g fill="none" stroke="#c9d3e3" strokeWidth="2.5" strokeLinecap="round">
        <path d="M40 70h14M47 63v14" />
        <path d="M512 150h14M519 143v14" />
        <path d="M70 300h10M75 295v10" />
      </g>
      <circle cx="500" cy="270" r="5" fill="none" stroke="#c9d3e3" strokeWidth="2.5" />
      <circle cx="96" cy="40" r="4" fill="#c9d3e3" />
      <circle cx="430" cy="22" r="4" fill="none" stroke="#c9d3e3" strokeWidth="2.5" />

      {/* gear behind the monitor */}
      <g className="nf-gear">
        <circle cx="168" cy="72" r="40" fill="none" stroke="#1f65b0" strokeWidth="13" strokeDasharray="10 10.94" />
        <circle cx="168" cy="72" r="33" fill="#1f65b0" />
        <circle cx="168" cy="72" r="13" fill="#eef2f8" />
      </g>
      <g className="nf-gear nf-gear-sm">
        <circle cx="430" cy="64" r="22" fill="none" stroke="#c9d3e3" strokeWidth="8" strokeDasharray="6 5.52" />
        <circle cx="430" cy="64" r="18" fill="#c9d3e3" />
        <circle cx="430" cy="64" r="7" fill="#eef2f8" />
      </g>

      {/* monitor */}
      <rect x="250" y="292" width="60" height="42" fill="#16325c" />
      <rect x="200" y="330" width="160" height="12" rx="6" fill="#0b1f3a" />
      <rect x="104" y="72" width="352" height="226" rx="16" fill="#0b1f3a" />
      <rect x="119" y="87" width="322" height="186" rx="8" fill="#f7f9fc" />
      {/* faint page UI on screen */}
      <g fill="#e3e8ef">
        <rect x="136" y="102" width="120" height="10" rx="5" />
        <rect x="136" y="120" width="76" height="8" rx="4" />
        <rect x="330" y="102" width="94" height="10" rx="5" />
        <rect x="350" y="120" width="74" height="8" rx="4" />
      </g>
      <path d="M150 140l9-9 9 9z" fill="#0b1f3a" opacity="0.6" />
      <path d="M392 248l9 9 9-9z" fill="#0b1f3a" opacity="0.6" />

      {/* 404 */}
      <text x="280" y="210" textAnchor="middle" className="nf-404">
        4<tspan fill="#1f65b0">0</tspan>4
      </text>

      {/* socket */}
      <rect x="142" y="226" width="44" height="34" rx="6" fill="#c9d3e3" />
      <rect x="155" y="236" width="5" height="14" rx="2.5" fill="#667387" />
      <rect x="168" y="236" width="5" height="14" rx="2.5" fill="#667387" />
      {/* sparks */}
      <g className="nf-spark" stroke="#1f65b0" strokeWidth="3" strokeLinecap="round">
        <path d="M206 228l10-8" />
        <path d="M210 243h13" />
        <path d="M206 258l10 8" />
      </g>
      {/* unplugged plug + cable */}
      <g className="nf-plug">
        <rect x="240" y="236" width="16" height="4" rx="2" fill="#667387" />
        <rect x="240" y="246" width="16" height="4" rx="2" fill="#667387" />
        <rect x="254" y="228" width="40" height="30" rx="8" fill="#1f65b0" />
        <rect x="292" y="236" width="10" height="14" rx="3" fill="#17518f" />
        <path d="M302 243c40 0 60-6 90 6s50 34 70 70" fill="none" stroke="#0b1f3a" strokeWidth="5" strokeLinecap="round" />
      </g>

      {/* error bubbles */}
      <g className="nf-bubble">
        <rect x="26" y="150" width="104" height="40" rx="10" fill="#0b1f3a" />
        <path d="M100 189l14 16 2-16z" fill="#0b1f3a" />
        <text x="78" y="176" textAnchor="middle" className="nf-bubble-text">ERROR</text>
      </g>
      <g className="nf-bubble nf-bubble-2">
        <rect x="440" y="96" width="104" height="40" rx="10" fill="#1f65b0" />
        <path d="M462 135l-6 16 18-16z" fill="#1f65b0" />
        <text x="492" y="122" textAnchor="middle" className="nf-bubble-text">ERROR</text>
      </g>

      {/* hard hat */}
      <path d="M86 352a38 34 0 0 1 76 0z" fill="#f5b301" />
      <rect x="120" y="318" width="6" height="34" rx="3" fill="#e0a100" />
      <rect x="74" y="350" width="100" height="10" rx="5" fill="#e0a100" />

      {/* plant */}
      <g>
        <path d="M478 300c-30-20-36-56-26-80 22 18 30 48 26 80z" fill="#2f9e7a" />
        <path d="M486 300c6-34 26-58 50-66-2 30-22 56-50 66z" fill="#3fb68e" />
        <path d="M482 300c-4-38 2-74 18-96 10 30 6 66-18 96z" fill="#258a69" />
        <path d="M458 300h52l-8 56h-36z" fill="#16325c" />
      </g>

      {/* floor */}
      <rect x="20" y="360" width="520" height="8" rx="4" fill="#0b1f3a" />
      <rect x="60" y="378" width="90" height="6" rx="3" fill="#c9d3e3" />
      <rect x="170" y="378" width="240" height="6" rx="3" fill="#c9d3e3" />
      <rect x="430" y="378" width="60" height="6" rx="3" fill="#c9d3e3" />
    </svg>
  );
}
