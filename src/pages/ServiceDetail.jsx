import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, FileText, MapPin, Building2, Plus, MessageCircleQuestion } from 'lucide-react';
import Icon from '../components/Icon.jsx';
import { CtaBand, SectionHead, Breadcrumbs } from '../components/Section.jsx';
import { getService, services, projects, img, thumb } from '../data/site.js';
import Seo, { breadcrumbSchema } from '../components/Seo.jsx';
import { serviceSchema, faqSchema } from '../data/schema.js';
import ScrollStack from '../components/ScrollStack.jsx';
import { QuoteButton } from '../components/Quote.jsx';
import NotFound from './NotFound.jsx';

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = getService(slug);
  if (!s) return <NotFound />;
  return <ServiceView key={s.slug} s={s} />;
}

const REVIEWED = 'October 2026'; // update when the service content is re-checked

function ServiceView({ s }) {
  const [active, setActive] = useState(0);
  const faqRef = useRef(null);
  // Only one FAQ open at a time. Same-name <details> do this natively in current browsers;
  // this closes the others for browsers that don't support it yet.
  const onFaqToggle = (e) => {
    const opened = e.currentTarget;
    if (!opened.open) return;
    faqRef.current?.querySelectorAll('details[open]').forEach((d) => {
      if (d !== opened) d.open = false;
    });
  };
  const count = s.images.length;
  const go = (d) => setActive((a) => (a + d + count) % count);
  const others = services.filter((o) => o.slug !== s.slug);
  const related = s.projectCategory ? projects.filter((p) => p.category === s.projectCategory).slice(0, 3) : [];
  const [first, ...rest] = s.title;
  const path = `/services/${s.slug}`;
  const crumbs = [
    { label: 'Services', to: '/services' },
    { label: s.name, to: path },
  ];
  const portfolioCount = s.projectCategory ? projects.filter((p) => p.category === s.projectCategory).length : 0;

  return (
    <>
      <Seo
        title={`${s.name} — Installation & Testing`}
        description={`${s.short} Serving sites across Tamil Nadu and India.`}
        path={path}
        image={img(s.images[0])}
        schema={[breadcrumbSchema([{ label: 'Home', to: '/' }, ...crumbs], path), serviceSchema(s, path), faqSchema(s.faqs)]}
      />
      <section className="sd-hero">
        <div className="container sd-hero-inner">
          <div className="sd-copy">
            <Breadcrumbs items={crumbs} className="breadcrumb-dark" />
            <p className="pill">
              <Icon name={s.icon} size={16} /> {s.eyebrow}
            </p>
            <h1>
              {first} <span className="accent">{rest.join(' ')}</span>
            </h1>
            {s.tagline && <p className="sd-tagline">{s.tagline}</p>}
            <p className="sd-lead">{s.description}</p>
            <p className="sd-meta">
              Reviewed by the Yonah Engineering technical team · Updated {REVIEWED}
              {portfolioCount > 0 && (
                <>
                  {' '}· <Link to={`/projects?category=${encodeURIComponent(s.projectCategory)}`}>{portfolioCount} {s.projectCategory} projects in our portfolio</Link>
                </>
              )}
            </p>
            <ScrollStack as="ul" className="sd-badges">
              {s.badges.map((b) => (
                <li key={b.label}>
                  <span className="sd-badge-icon"><Icon name={b.icon} size={22} /></span>
                  <span>
                    <strong>{b.label}</strong>
                    <small>{b.sub}</small>
                  </span>
                </li>
              ))}
            </ScrollStack>
          </div>

          <div className="sd-gallery">
            <div className="sd-main">
              {s.images.map((src, k) => (
                <img
                  key={src}
                  src={img(src)}
                  alt={`${s.name} — project photo ${k + 1}`}
                  className={k === active ? 'is-active' : ''}
                  loading={k === 0 ? 'eager' : 'lazy'}
                />
              ))}
              <div className="sd-nav">
                <button type="button" onClick={() => go(-1)} aria-label="Previous photo"><ChevronLeft size={20} /></button>
                <span>{active + 1} / {count}</span>
                <button type="button" onClick={() => go(1)} aria-label="Next photo"><ChevronRight size={20} /></button>
              </div>
            </div>
            <div className="sd-thumbs">
              {s.images.map((src, k) => (
                <button
                  type="button"
                  key={src}
                  className={k === active ? 'is-active' : ''}
                  onClick={() => setActive(k)}
                  aria-label={`Show photo ${k + 1}`}
                  aria-pressed={k === active}
                >
                  <img src={thumb(src)} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container sd-body">
          <div className="reveal">
            <h2 className="underlined">Key Services Include</h2>
            {(s.featureGroups || [{ items: s.features }]).map((g, gi) => (
              <div key={g.title || gi} className="feature-group">
                {g.title && <p className="feature-group-title">{g.title}</p>}
                <ul className="sd-features">
                  {g.items.map((f) => (
                    <li key={f.text}>
                      <span className="sd-feature-icon"><Icon name={f.icon} size={22} /></span>
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <aside className="sd-support reveal">
            <div className="sd-support-media">
              <img src={thumb(s.images[3])} alt="" aria-hidden="true" loading="lazy" />
            </div>
            <div className="sd-support-card">
              <span className="sd-support-icon"><FileText size={26} /></span>
              <h3>Comprehensive Engineering Support</h3>
              <p>
                From concept to commissioning, we provide complete technical documentation, drawings, calculations
                and authority approval support.
              </p>
              <QuoteButton service={s.name} className="btn btn-outline btn-sm">
                Get a Quote <ChevronRight size={16} />
              </QuoteButton>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand
        title={`Need ${s.name} for your project?`}
        text="Talk to our engineers for a free consultation, site survey and competitive quote."
        primary={{ service: s.name, label: 'Request a Quote' }}
      />

      {/* WHERE WE WORK */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            as="h3"
            eyebrow="Where We Work"
            title="Industries &"
            accent="Applications"
            lead={`${s.name} we design and install for every kind of facility.`}
          />
          <ul className="sd-apps reveal">
            {s.applications.map((a) => (
              <li key={a.label}>
                <span className="icon-chip"><Icon name={a.icon} size={20} /></span>
                {a.label}
              </li>
            ))}
          </ul>
          <p className="more-links reveal">
            <Link to="/industries">See every industry we serve <ArrowRight size={15} /></Link>
          </p>
        </div>
      </section>

      {/* SYSTEMS & EQUIPMENT */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Systems & Equipment" title="What We" accent="Install & Maintain" />
          <ScrollStack className="sd-equipment">
            {s.equipment.map((e, i) => (
              <article key={e.title} className="sd-equip reveal" style={{ '--d': `${i * 70}ms` }}>
                <span className="sd-equip-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="sd-equip-icon"><Icon name={e.icon} size={26} /></span>
                <h4>{e.title}</h4>
                <p>{e.text}</p>
              </article>
            ))}
          </ScrollStack>
          <p className="more-links reveal">
            <Link to={`/products#${s.slug}`}>See every {s.name} product we supply <ArrowRight size={15} /></Link>
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHead eyebrow="Our Process" title="From Design to" accent="Handover" lead={`How we deliver safe, reliable ${s.name} on every project.`} />
          <ScrollStack as="ol" className="process">
            {s.process.map(([title, text], i) => (
              <li key={title} className="process-step reveal" style={{ '--d': `${i * 70}ms` }}>
                <span className="process-num">{String(i + 1).padStart(2, '0')}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </li>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="section section-tight section-navy">
        <div className="container">
          <SectionHead as="h3" light eyebrow="Standards & Codes" title="Built to Recognised" accent="Standards" lead="The design references our engineers work to on every project." />
          <ul className="sd-standards reveal">
            {s.standards.map((st) => (
              <li key={st.code}>
                <strong>{st.code}</strong>
                <span>{st.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHead
              as="h3"
              eyebrow="Recent Work"
              title={`${s.projectCategory}`}
              accent="Projects"
            />
            <ScrollStack className="project-grid">
              {related.map((p) => (
                <Link key={p.title} to={`/projects?category=${encodeURIComponent(s.projectCategory)}`} className="project-card">
                  <div className="project-media">
                    <img src={thumb(p.image)} alt={`${p.title} — ${p.category} project`} loading="lazy" decoding="async" />
                    <span className="tag">{p.category}</span>
                  </div>
                  <div className="project-body">
                    <h4>{p.title}</h4>
                    <p className="project-meta">
                      <span><MapPin size={14} /> {p.location}</span>
                      <span><Building2 size={14} /> {p.sector}</span>
                    </p>
                    <p className="project-scope">{p.scope}</p>
                  </div>
                </Link>
              ))}
            </ScrollStack>
            <div className="section-action reveal">
              <Link to={`/projects?category=${encodeURIComponent(s.projectCategory)}`} className="btn btn-outline">
                View All {s.projectCategory} Projects <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container sd-faq">
          <div className="sd-faq-intro reveal">
            <p className="eyebrow">FAQs</p>
            <h2>
              Common <span className="accent">Questions</span>
            </h2>
            <p className="lead">Answers to what clients most often ask us about {s.name}.</p>
            <div className="sd-faq-help">
              <MessageCircleQuestion size={28} />
              <div>
                <strong>Still have a question?</strong>
                <span>Our engineers are happy to help.</span>
              </div>
            </div>
            <QuoteButton service={s.name} className="btn btn-primary">
              Ask Our Engineers <ArrowRight size={18} />
            </QuoteButton>
          </div>
          <div className="sd-faq-list reveal" ref={faqRef}>
            {s.faqs.map(([q, a], i) => (
              <details key={q} className="faq" name={`faq-${s.slug}`} open={i === 0} onToggle={onFaqToggle}>
                <summary>
                  <h4 className="faq-q">{q}</h4>
                  <span className="faq-icon" aria-hidden="true"><Plus size={18} /></span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead as="h3" eyebrow="Explore More" title="Other" accent="Services" />
          <ScrollStack className="other-services">
            {others.map((o) => (
              <Link key={o.slug} to={`/services/${o.slug}`} className="other-service reveal">
                <span className="icon-chip"><Icon name={o.icon} size={20} /></span>
                <span>{o.name}</span>
                <ArrowRight size={18} className="other-arrow" />
              </Link>
            ))}
          </ScrollStack>
        </div>
      </section>
    </>
  );
}
