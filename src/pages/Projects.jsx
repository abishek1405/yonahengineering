import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { X, MapPin, Building2, Layers, Check, ChevronLeft, ChevronRight, ArrowRight, Plus } from 'lucide-react';
import { PageHeader, CtaBand, SectionHead } from '../components/Section.jsx';
import { projects, projectCategories, services, img, thumb } from '../data/site.js';
import Seo, { breadcrumbSchema } from '../components/Seo.jsx';
import ScrollStack from '../components/ScrollStack.jsx';
import { QuoteButton } from '../components/Quote.jsx';

const serviceFor = {
  Sprinkler: 'sprinkler-systems',
  HVAC: 'hvac-systems',
  Lighting: 'lighting-power-distribution',
  'HT Panel': 'ht-panel-testing',
  Electrical: 'electrical-systems',
  Plumbing: 'plumbing-sanitary',
};

export default function Projects() {
  // ?category=HVAC (used by the service pages' "View all … projects" links) preselects a filter.
  // Applied after mount so the prerendered HTML (always "All") hydrates cleanly.
  const [params] = useSearchParams();
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    const c = params.get('category');
    if (projectCategories.includes(c)) setFilter(c);
  }, [params]);
  const [openIdx, setOpenIdx] = useState(null);
  const closeModal = useCallback(() => setOpenIdx(null), []);

  const list = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)), [filter]);
  // grouped by discipline: each group is an H3 sub-section of the portfolio
  const groups = useMemo(
    () => (filter === 'All' ? projectCategories : [filter]).map((c) => ({ c, items: projects.filter((p) => p.category === c) })),
    [filter]
  );
  const crumbs = [{ label: 'Projects', to: '/projects' }];
  const counts = useMemo(
    () => Object.fromEntries(projectCategories.map((c) => [c, projects.filter((p) => p.category === c).length])),
    []
  );

  return (
    <>
      <Seo
        title="MEP Projects — Fire, HVAC & Electrical"
        description="Completed MEP projects by Yonah Engineering: fire pump rooms, chiller plants, cooling towers, HT switchgear testing, LT panels and water treatment."
        path="/projects"
        image={img('sprinkler/sprinkler-1')}
        schema={[breadcrumbSchema([{ label: 'Home', to: '/' }, ...crumbs], '/projects')]}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Our Portfolio"
        title="Project"
        accent="Gallery"
        lead="Explore our portfolio of completed MEP engineering projects across commercial, industrial, and residential sectors across India."
        image={img('sprinkler/sprinkler-2')}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Completed Work"
            title="Project"
            accent="Portfolio"
            lead="Real installations from our sites, grouped by discipline. Select a project for its scope and technical highlights."
          />
          <div className="filter-bar">
            <div className="filters" role="toolbar" aria-label="Filter projects by category">
              {['All', ...projectCategories].map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`filter${filter === c ? ' is-active' : ''}`}
                  aria-pressed={filter === c}
                  onClick={() => setFilter(c)}
                >
                  {c}
                  <span className="filter-count">{c === 'All' ? projects.length : counts[c]}</span>
                </button>
              ))}
            </div>
            <p className="filter-result" aria-live="polite">
              Showing <strong>{list.length}</strong> project{list.length === 1 ? '' : 's'}
            </p>
          </div>

          {groups.map((g) => {
            const sv = services.find((x) => x.slug === serviceFor[g.c]);
            return (
              <div key={g.c} className="project-group">
                <div className="project-group-head">
                  <h3>
                    {sv.name} <span className="accent">Projects</span>
                  </h3>
                  <span className="project-group-count">
                    {g.items.length} project{g.items.length === 1 ? '' : 's'}
                  </span>
                  <Link to={`/services/${sv.slug}`} className="link-arrow">
                    About this service <ArrowRight size={16} />
                  </Link>
                </div>
                <ScrollStack className="project-grid">
                  {g.items.map((p) => (
                    <button type="button" key={p.title} className="project-card" onClick={() => setOpenIdx(list.indexOf(p))}>
                      <div className="project-media">
                        <img src={thumb(p.image)} alt={`${p.title} — ${p.category} project`} loading="lazy" decoding="async" />
                        <span className="tag">{p.category}</span>
                        <span className="project-plus"><Plus size={20} /></span>
                      </div>
                      <div className="project-body">
                        <h4>{p.title}</h4>
                        <p className="project-meta">
                          <span><MapPin size={14} /> {p.location}</span>
                          <span><Building2 size={14} /> {p.sector}</span>
                        </p>
                        <p className="project-scope">{p.scope}</p>
                      </div>
                    </button>
                  ))}
                </ScrollStack>
              </div>
            );
          })}
        </div>
      </section>

      {openIdx !== null && (
        <ProjectModal
          list={list}
          index={openIdx}
          onIndex={setOpenIdx}
          onClose={closeModal}
        />
      )}

      <CtaBand
        as="h2"
        title="Want to be Our Next Success Story?"
        text="Let us handle your next MEP engineering project with the same level of excellence."
        primary={{ label: 'Start Your Project' }}
      />
    </>
  );
}

function ProjectModal({ list, index, onIndex, onClose }) {
  const p = list[index];
  const service = services.find((s) => s.slug === serviceFor[p.category]);
  const closeRef = useRef(null);

  useEffect(() => {
    const prevFocus = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndex((i) => (i + 1) % list.length);
      if (e.key === 'ArrowLeft') onIndex((i) => (i - 1 + list.length) % list.length);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      prevFocus?.focus?.();
    };
  }, [list.length, onClose, onIndex]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={onClose}>
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="modal-close" onClick={onClose} aria-label="Close">
          <X size={22} />
        </button>
        <div className="modal-media">
          <img src={img(p.image)} alt={`${p.title} — ${p.category} project`} />
          <div className="modal-nav">
            <button type="button" onClick={() => onIndex((i) => (i - 1 + list.length) % list.length)} aria-label="Previous project">
              <ChevronLeft size={20} />
            </button>
            <span>{index + 1} / {list.length}</span>
            <button type="button" onClick={() => onIndex((i) => (i + 1) % list.length)} aria-label="Next project">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="modal-body">
          <span className="tag tag-soft">{p.category}</span>
          <h2 id="project-title" className="modal-title">{p.title}</h2>
          <dl className="modal-facts">
            <div><dt><MapPin size={16} /> Location</dt><dd>{p.location}</dd></div>
            <div><dt><Building2 size={16} /> Sector</dt><dd>{p.sector}</dd></div>
            <div><dt><Layers size={16} /> Service</dt><dd>{service?.name}</dd></div>
          </dl>
          <h3>Scope of Work</h3>
          <p>{p.scope}</p>
          <h3>Technical Highlights</h3>
          <ul className="modal-highlights">
            {p.highlights.map((h) => (
              <li key={h}><span className="check"><Check size={14} strokeWidth={3} /></span>{h}</li>
            ))}
          </ul>
          <div className="btn-row">
            <QuoteButton service={service?.name} className="btn btn-primary" onClick={onClose}>
              Discuss a Similar Project <ArrowRight size={18} />
            </QuoteButton>
            {service && <Link to={`/services/${service.slug}`} className="btn btn-outline">About this Service</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}
