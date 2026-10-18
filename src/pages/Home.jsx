import { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, MapPin, ShieldCheck, BadgeCheck, Award, X, Info } from 'lucide-react';
import Icon from '../components/Icon.jsx';
import { SectionHead, CtaBand } from '../components/Section.jsx';
import { stats, services, featuredProjects, certifications, workflow, featuredVideo, img, thumb } from '../data/site.js';
import VideoFeature from '../components/VideoFeature.jsx';
import ServiceBlock from '../components/ServiceBlock.jsx';
import { absUrl } from '../components/Seo.jsx';
import { ORG_ID } from '../data/schema.js';
import Seo from '../components/Seo.jsx';
import ScrollStack from '../components/ScrollStack.jsx';
import Marquee from '../components/Marquee.jsx';
import { QuoteButton } from '../components/Quote.jsx';

function Counter({ value, suffix }) {
  // Renders the final value by default; counts up from 0 only once it scrolls into view.
  const ref = useRef(null);
  const [n, setN] = useState(value);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - start) / 1400);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      setN(value);
    };
  }, [value]);
  return (
    <span ref={ref}>
      {n}
      <span className="stat-suffix">{suffix}</span>
    </span>
  );
}

// About-preview highlights, each with an icon that matches what it stands for.
const ABOUT_POINTS = [
  { icon: 'Award', label: 'ISO Certified' },
  { icon: 'BadgeCheck', label: 'A-Grade Electrical Licence' },
  { icon: 'Flame', label: 'NFPA Compliant' },
  { icon: 'Snowflake', label: 'ASHRAE Standards' },
];

// Hero background carousel: same card and content, three crossfading project photos.
const HERO_SLIDES = [
  { src: 'sprinkler/sprinkler-1', alt: 'Fire sprinkler pump room installed by Yonah Engineering' },
  { src: 'ht-panel/ht-panel-1', alt: 'Yonah Engineering team testing HT electrical panels on site' },
  { src: 'hvac/hvac-3', alt: 'Cooling towers and condenser water piping installed for an industrial HVAC system' },
];
const SLIDE_MS = 6000;

function HeroSlides() {
  const [active, setActive] = useState(0);

  // Always advances on its own (only skipped while the browser tab is hidden).
  // Restarting on `active` gives a full interval after a dot is clicked.
  useEffect(() => {
    const t = setInterval(() => {
      if (!document.hidden) setActive((a) => (a + 1) % HERO_SLIDES.length);
    }, SLIDE_MS);
    return () => clearInterval(t);
  }, [active]);

  return (
    <>
      {HERO_SLIDES.map((sl, i) => (
        <img
          key={sl.src}
          className={`hero-bg${i === active ? ' is-active' : ''}`}
          src={img(sl.src)}
          alt={i === active ? sl.alt : ''}
          aria-hidden={i === active ? undefined : true}
          fetchPriority={i === 0 ? 'high' : 'low'}
          decoding="async"
        />
      ))}
      <div className="hero-dots" role="group" aria-label="Choose banner photo">
        {HERO_SLIDES.map((sl, i) => (
          <button
            key={sl.src}
            type="button"
            className={i === active ? 'is-active' : ''}
            aria-label={`Show photo ${i + 1} of ${HERO_SLIDES.length}`}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </>
  );
}

// Hero headline split into words so they can rise in one after another.
const HERO_WORDS = [
  { t: 'Engineering' },
  { t: 'Excellence', accent: true },
  { t: 'for' },
  { t: 'Every' },
  { t: 'Project' },
];

export default function Home() {
  // the banner card can be closed to show the photos; a small button brings it back
  const [cardOpen, setCardOpen] = useState(true);
  return (
    <>
      <Seo
        title="Yonah Engineering | MEP Contractor in Tamil Nadu, India"
        description="MEP contractor in Tamil Nadu: fire protection, HVAC, electrical & ELV, utility, PHE and water treatment systems designed, supplied and installed."
        path="/"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: featuredVideo.title,
            description: featuredVideo.description,
            thumbnailUrl: absUrl(featuredVideo.poster),
            uploadDate: featuredVideo.uploadDate,
            duration: featuredVideo.duration,
            ...(featuredVideo.youtubeId
              ? { embedUrl: `https://www.youtube.com/embed/${featuredVideo.youtubeId}` }
              : { contentUrl: absUrl(featuredVideo.src) }),
            publisher: { '@id': ORG_ID },
          },
        ]}
      />
      {/* HERO  single focal image, left-aligned content, one primary action */}
      <section className="hero">
        <HeroSlides />
        <div className="container hero-inner">
          <div className={`hero-card${cardOpen ? '' : ' is-closed'}`} aria-hidden={cardOpen ? undefined : true}>
            <button type="button" className="hero-card-close" onClick={() => setCardOpen(false)} aria-label="Close banner and view photos" tabIndex={cardOpen ? undefined : -1}>
              <X size={18} />
            </button>
            <p className="hero-eyebrow page-pill">
              <span className="dot" />
              <span>
                <span className="hide-sm">Expert </span>MEP Engineering · All over India
              </span>
            </p>
            <h1 aria-label="Engineering Excellence for Every Project">
              {HERO_WORDS.map((w, i) => (
                <Fragment key={w.t}>
                  <span className="hw" aria-hidden="true">
                    <span className={w.accent ? 'accent' : undefined} style={{ '--w': i }}>
                      {w.t}
                    </span>
                  </span>{' '}
                </Fragment>
              ))}
            </h1>
            <p className="hero-lead">
              World-class MEP (Mechanical, Electrical, Plumbing &amp; Fire Protection) solutions for industrial &amp;
              commercial sectors across India.
            </p>
            <div className="hero-actions">
              <QuoteButton className="btn btn-primary btn-lg">
                Get a Free Quote <ArrowRight size={18} />
              </QuoteButton>
              <Link to="/services" className="btn btn-outline btn-lg">
                Explore Services
              </Link>
            </div>
            <ul className="hero-trust">
              <li><ShieldCheck size={18} /> NFPA Compliant</li>
              <li><BadgeCheck size={18} /> ASHRAE Standards</li>
              <li><Award size={18} /> ISO 9001:2015</li>
            </ul>
          </div>
          {!cardOpen && (
            <button type="button" className="hero-card-reopen" onClick={() => setCardOpen(true)}>
              <Info size={16} /> Show details
            </button>
          )}
        </div>
      </section>

      {/* STATS */}
      <section className="stats-wrap">
        <div className="container">
          <ul className="stats reveal">
            {stats.map((s) => (
              <li key={s.label} className="stat">
                <span className="stat-icon"><Icon name={s.icon} size={24} /></span>
                <div>
                  <strong className="stat-value"><Counter value={s.value} suffix={s.suffix} /></strong>
                  <span className="stat-label">{s.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <div className="container about-preview">
          <div className="about-media reveal">
            <img className="about-media-main" src={thumb('ht-panel/ht-panel-3')} alt="Yonah engineers testing HT switchgear on site" loading="lazy" />
            <img className="about-media-sub" src={thumb('hvac/hvac-9')} alt="Condenser water pump sets and piping installed on a rooftop" loading="lazy" />
            <div className="about-badge">
              <strong>11+</strong>
              <span>Years of engineering excellence</span>
            </div>
          </div>
          <div className="about-copy reveal">
            <p className="eyebrow">About Yonah Engineering</p>
            <h2>
              Building the Infrastructure of <span className="accent">Tomorrow</span>
            </h2>
            <p>
              Yonah Engineering is a leading MEP (Mechanical, Electrical, Plumbing and Fire Protection) engineering firm
              based in Sriperumbudur, Tamil Nadu, India. With over 11 years of experience, we have delivered 75+ projects
              for industrial and commercial clients across India.
            </p>
            <p>
              Our team of certified engineers brings expertise in fire protection, HVAC, electrical and ELV systems,
              plant utilities, public health engineering and water treatment, ensuring every project meets national
              and international standards.
            </p>
            <ul className="check-grid">
              {ABOUT_POINTS.map((c) => (
                <li key={c.label}>
                  <span className="check-icon"><Icon name={c.icon} size={18} /></span>
                  {c.label}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-outline">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Marquee />

      {/* SERVICES */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="What We Do"
            title="Comprehensive MEP"
            accent="Engineering Services"
            lead="From design and installation to testing and commissioning, we deliver complete engineering solutions tailored to your project requirements."
          />
          <ScrollStack className="service-grid">
            {services.map((s, i) => (
              <Link to={`/services/${s.slug}`} key={s.slug} className="service-card reveal" style={{ '--d': `${(i % 3) * 70}ms` }}>
                <div className="service-card-media">
                  <div className="service-card-img">
                    <img src={thumb(s.images[0])} alt={`${s.name} by Yonah Engineering`} loading="lazy" />
                  </div>
                  <span className="service-card-icon"><Icon name={s.icon} size={24} /></span>
                </div>
                <div className="service-card-body">
                  <h3>{s.name}</h3>
                  <p>{s.short}</p>
                  <span className="link-arrow">
                    Learn More <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </ScrollStack>
          <div className="section-action reveal">
            <Link to="/services" className="btn btn-outline">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
          <p className="more-links reveal">
            Looking for specific equipment or your sector?{' '}
            <Link to="/products">Browse products &amp; systems</Link> ·{' '}
            <Link to="/industries">See industries we serve</Link> ·{' '}
            <Link to="/about">Learn about our team</Link>
          </p>
        </div>
      </section>

      {/* FEATURED SERVICE — same block as on the Services page */}
      <ServiceBlock service={services[0]} titleAs="h4" subAs="h5" />

      <CtaBand
        as="p"
        title="Ready to Start Your Project?"
        text="Contact our team of expert engineers today for a free consultation and competitive quote for your MEP project requirements."
        secondary={{ to: '/projects', label: 'View Our Work' }}
      />

      {/* HOW WE WORK */}
      <section className="section">
        <div className="container">
          <SectionHead
            as="h3"
            eyebrow="How We Work"
            title="From First Survey to"
            accent="Final Handover"
            lead="One accountable team across design, approvals, installation and commissioning."
          />
          <ScrollStack as="ol" className="workflow">
            {workflow.map((w, i) => (
              <li key={w.title} className="workflow-step reveal" style={{ '--d': `${i * 80}ms` }}>
                <div className="workflow-head">
                  <span className="workflow-icon"><Icon name={w.icon} size={20} /></span>
                  <h4>{w.title}</h4>
                </div>
                <p>{w.text}</p>
              </li>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* VIDEO */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            as="h3"
            eyebrow="Watch"
            title="See Our Work"
            accent="On Site"
            lead="Pump rooms, chiller plants, HT panel testing and more a quick look at installations delivered by our teams."
          />
          <VideoFeature />
        </div>
      </section>

      {/* TRUST  certifications */}
      <section className="section section-tight">
        <div className="container">
          <SectionHead eyebrow="Our Credentials" title="Certified &" accent="Approved" lead="Certified to internationally recognised quality and engineering standards." />
          <ScrollStack as="ul" className="cert-strip reveal">
            {certifications.map((c) => (
              <li key={c.title}>
                <span className="cert-icon"><Icon name={c.icon} size={22} /></span>
                <div>
                  <strong>{c.title}</strong>
                  <span>{c.text}</span>
                </div>
              </li>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section section-navy">
        <div className="container">
          <SectionHead
            light
            eyebrow="Our Work"
            title="Featured"
            accent="Projects"
            lead="A glimpse into our portfolio of successfully completed projects across India."
          />
          <ScrollStack className="featured-grid">
            {featuredProjects.map((p, i) => (
              <Link to="/projects" key={p.title} className={`featured-card reveal${i === 0 ? ' is-large' : ''}`} style={{ '--d': `${(i % 3) * 70}ms` }}>
                <img src={i === 0 ? img(p.image) : thumb(p.image)} alt={`${p.title} — ${p.category} project`} loading="lazy" />
                <div className="featured-info">
                  <span className="tag">{p.category}</span>
                  <h4>{p.title}</h4>
                  <p>
                    <MapPin size={14} /> {p.location} · {p.sector}
                  </p>
                </div>
                <span className="featured-arrow"><ArrowUpRight size={20} /></span>
              </Link>
            ))}
          </ScrollStack>
          <div className="section-action reveal">
            <Link to="/projects" className="btn btn-ghost-light">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
