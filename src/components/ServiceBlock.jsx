import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Icon from './Icon.jsx';
import { QuoteButton } from './Quote.jsx';
import { img, thumb } from '../data/site.js';

// One service as a two-column block: label, name, description, key services, buttons and a
// photo gallery. Used on the Services page (all six) and the Home page (featured service).
// `titleAs` / `subAs` set the heading levels so each page keeps a clean outline.
export default function ServiceBlock({ service: s, flipped = false, alt = false, titleAs: T = 'h3', subAs: S = 'h4', id }) {
  return (
    <section id={id} className={`section service-block${alt ? ' section-alt' : ''}${flipped ? ' is-flipped' : ''}`}>
      <div className="container service-block-inner">
        <div className="service-block-copy reveal">
          <p className="eyebrow eyebrow-icon">
            <span className="icon-chip"><Icon name={s.icon} size={18} /></span>
            {s.eyebrow}
          </p>
          <T className="service-block-title">{s.name}</T>
          <p>{s.description}</p>
          <S className="mini-title">Key Services Include</S>
          {(s.featureGroups || [{ items: s.features }]).map((g, gi) => (
            <div key={g.title || gi} className="feature-group">
              {g.title && <p className="feature-group-title">{g.title}</p>}
              <ul className="feature-list">
                {g.items.map((f) => (
                  <li key={f.text}>
                    <span className="check"><Check size={14} strokeWidth={3} /></span>
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="btn-row">
            <Link to={`/services/${s.slug}`} className="btn btn-navy">
              View Details <ArrowRight size={18} />
            </Link>
            <QuoteButton service={s.name} className="btn btn-outline">
              Get a Quote
            </QuoteButton>
          </div>
        </div>
        <ServiceGallery name={s.name} images={s.images} />
      </div>
    </section>
  );
}

// Large photo + thumbnails. Clicking a thumbnail swaps it into the large slot.
function ServiceGallery({ name, images }) {
  const [order, setOrder] = useState(images);
  const [main, ...rest] = order;
  const label = (src) => `${name} — project photo ${images.indexOf(src) + 1}`;

  const promote = (k) =>
    setOrder((o) => {
      const next = [...o];
      [next[0], next[k + 1]] = [next[k + 1], next[0]];
      return next;
    });

  return (
    <div className="service-gallery reveal">
      <img key={main} className="service-gallery-main" src={img(main)} alt={label(main)} loading="lazy" />
      {rest.map((src, k) => (
        <button key={src} type="button" className="service-gallery-thumb" onClick={() => promote(k)} aria-label={`Show ${label(src)}`}>
          <img src={thumb(src)} alt="" loading="lazy" />
        </button>
      ))}
    </div>
  );
}
