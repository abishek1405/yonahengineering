import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import { QuoteButton } from './Quote.jsx';

// Section heading: eyebrow → title (accented ending) → lead.
// `as` sets the heading level so each page keeps a clean H1 → H2 → H3 outline.
export function SectionHead({ as: H = 'h2', eyebrow, title, accent, lead, light, action }) {
  return (
    <div className={`section-head${light ? ' is-light' : ''} reveal`}>
      <div className="section-head-text">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <H className="section-title">
          {title} {accent && <span className="accent">{accent}</span>}
        </H>
        {lead && <p className="lead">{lead}</p>}
      </div>
      {action}
    </div>
  );
}

// Breadcrumb trail. `items` excludes Home (always first); the last item is the current page.
export function Breadcrumbs({ items, className = '' }) {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">
            <Home size={14} aria-hidden="true" /> Home
          </Link>
        </li>
        {items.map((c, i) => (
          <Fragment key={c.label}>
            <li aria-hidden="true" className="breadcrumb-sep">
              <ChevronRight size={14} />
            </li>
            <li>
              {c.to && i < items.length - 1 ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}

// Inner-page header: a clear, photo-only banner followed by the breadcrumb bar.
// The page's single H1 is kept for search engines and screen readers but not shown on screen.
// (eyebrow / lead are accepted for compatibility but not displayed.)
export function PageHeader({ title, accent, image, crumbs }) {
  return (
    <>
      <section className="page-header">
        {image && <img className="page-header-bg" src={image} alt="" aria-hidden="true" fetchPriority="high" />}
        <h1 className="sr-only">{accent ? `${title} ${accent}` : title}</h1>
      </section>
      {crumbs && (
        <div className="crumb-bar">
          <div className="container">
            <Breadcrumbs items={crumbs} />
          </div>
        </div>
      )}
    </>
  );
}

// Closing call-to-action. primary opens the quote popup (optionally pre-selecting a service);
// secondary is a page link. `as` sets the heading level for the page outline.
export function CtaBand({ as: H = 'h3', title, text, primary = { label: 'Contact Us Today' }, secondary }) {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-card reveal">
          <div>
            <H className="cta-title">{title}</H>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <QuoteButton service={primary.service} className="btn btn-primary btn-lg">
              {primary.label} <ArrowRight size={18} />
            </QuoteButton>
            {secondary && (
              <Link to={secondary.to} className="btn btn-ghost-light btn-lg">
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
