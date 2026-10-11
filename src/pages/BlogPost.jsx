import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock, Lightbulb, Plus, BookOpen, UserRound } from 'lucide-react';
import { Breadcrumbs, CtaBand } from '../components/Section.jsx';
import Icon from '../components/Icon.jsx';
import Seo, { breadcrumbSchema, absUrl } from '../components/Seo.jsx';
import { QuoteButton } from '../components/Quote.jsx';
import { getPost, posts, blogAuthor } from '../data/blog.js';
import { getService, img, thumb } from '../data/site.js';
import { ORG_ID, faqSchema } from '../data/schema.js';
import { formatDate } from './Blog.jsx';
import NotFound from './NotFound.jsx';

const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;
  return <Article key={post.slug} p={post} />;
}

function Article({ p }) {
  const path = `/blog/${p.slug}`;
  const service = getService(p.serviceSlug);
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 2);
  const crumbs = [
    { label: 'Blog', to: '/blog' },
    { label: p.title, to: path },
  ];
  const faqRef = useRef(null);
  const onFaqToggle = (e) => {
    if (!e.currentTarget.open) return;
    faqRef.current?.querySelectorAll('details[open]').forEach((d) => d !== e.currentTarget && (d.open = false));
  };

  return (
    <>
      <Seo
        title={p.title}
        description={p.description}
        path={path}
        type="article"
        image={img(p.image)}
        schema={[
          breadcrumbSchema([{ label: 'Home', to: '/' }, ...crumbs], path),
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: p.title,
            description: p.description,
            image: absUrl(img(p.image)),
            datePublished: p.date,
            dateModified: p.updated || p.date,
            author: { '@type': 'Organization', name: blogAuthor.name, url: absUrl('/about') },
            publisher: { '@id': ORG_ID },
            mainEntityOfPage: absUrl(path),
            articleSection: p.category,
            about: { '@type': 'Service', name: service.name, url: absUrl(`/services/${service.slug}`) },
          },
          faqSchema(p.faqs),
        ]}
      />

      <article className="post">
        <header className="post-hero">
          <div className="container post-hero-grid">
            <div className="post-hero-copy">
              <Breadcrumbs items={crumbs} />
              <Link to={`/services/${service.slug}`} className="post-cat">
                <Icon name={service.icon} size={15} /> {p.category}
              </Link>
              <h1>{p.title}</h1>
              <p className="post-dek">{p.excerpt}</p>
              <div className="post-byline">
                <span className="post-avatar"><UserRound size={20} /></span>
                <span className="post-byline-text">
                  <strong>{blogAuthor.name}</strong>
                  <span>{blogAuthor.role}</span>
                </span>
              </div>
              <ul className="post-facts">
                <li><CalendarDays size={15} /> <time dateTime={p.date}>{formatDate(p.date)}</time></li>
                <li><Clock size={15} /> {p.readMinutes} min read</li>
                <li><BookOpen size={15} /> {p.sections.length} sections · {p.faqs.length} FAQs</li>
              </ul>
            </div>
            <figure className="post-hero-media">
              <img src={img(p.image)} alt={`${p.category} — ${p.title}`} fetchPriority="high" />
              <figcaption>
                <Icon name={service.icon} size={14} /> {service.name}
              </figcaption>
            </figure>
          </div>
        </header>

        <div className="container post-layout">
          <div className="post-body">
            {p.intro.map((t) => (
              <p key={t} className="post-intro">{t}</p>
            ))}

            <nav className="post-toc" aria-label="In this article">
              <p className="post-toc-title"><BookOpen size={16} /> In this article</p>
              <ol>
                {p.sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${slugify(s.heading)}`}>{s.heading}</a>
                  </li>
                ))}
              </ol>
            </nav>

            {p.sections.map((s) => (
              <section key={s.heading} className="post-section">
                <h2 id={slugify(s.heading)}>{s.heading}</h2>
                {s.body.map((t) => (
                  <p key={t}>{t}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
                {(s.subsections || []).map((sub) => (
                  <div key={sub.heading} className="post-sub">
                    <h3>{sub.heading}</h3>
                    {sub.body.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                    {sub.list && (
                      <ul>
                        {sub.list.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            ))}

            <aside className="post-takeaways">
              <h4><Lightbulb size={18} /> Key takeaways</h4>
              <ul>
                {p.takeaways.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </aside>

            <section className="post-section">
              <h2 id="faqs">Frequently Asked Questions</h2>
              <div className="sd-faq-list" ref={faqRef}>
                {p.faqs.map(([q, a], i) => (
                  <details key={q} className="faq" name={`faq-${p.slug}`} open={i === 0} onToggle={onFaqToggle}>
                    <summary>
                      <span className="faq-q">{q}</span>
                      <span className="faq-icon" aria-hidden="true"><Plus size={18} /></span>
                    </summary>
                    <p>{a}</p>
                  </details>
                ))}
              </div>
            </section>

            <footer className="post-footer">
              <div className="post-refs">
                <h4>References</h4>
                <ul>
                  {p.references.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <p className="post-disclaimer">
                  This guide is general information. Requirements depend on your building, the current edition of each
                  standard and your local authority — always confirm with a qualified engineer.
                </p>
              </div>
              <div className="author-box">
                <span className="author-avatar"><UserRound size={26} /></span>
                <div>
                  <h4>{blogAuthor.name}</h4>
                  <p className="author-role">{blogAuthor.role}</p>
                  <p>{blogAuthor.bio}</p>
                  <Link to="/about" className="link-arrow">About our team <ArrowRight size={15} /></Link>
                </div>
              </div>
            </footer>
          </div>

          <aside className="post-aside">
            <div className="post-aside-card">
              <p className="post-aside-title">Need help with {service.name}?</p>
              <p>Our engineers design, install, test and maintain {service.name} for industrial and commercial sites.</p>
              <QuoteButton service={service.name} className="btn btn-primary btn-block">
                Get a Free Quote <ArrowRight size={16} />
              </QuoteButton>
              <Link to={`/services/${service.slug}`} className="link-arrow">
                {service.name} service <ArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="section section-alt section-tight">
        <div className="container">
          <h3 className="section-title related-title">
            More <span className="accent">Guides</span>
          </h3>
          <div className="blog-grid blog-grid-2">
            {related.map((r) => (
              <article key={r.slug} className="blog-card">
                <Link to={`/blog/${r.slug}`} className="blog-card-media" tabIndex={-1} aria-hidden="true">
                  <img src={thumb(r.image)} alt="" loading="lazy" decoding="async" />
                </Link>
                <div className="blog-card-body">
                  <span className="tag">{r.category}</span>
                  <h4>
                    <Link to={`/blog/${r.slug}`}>{r.title}</Link>
                  </h4>
                  <p>{r.excerpt}</p>
                  <Link to={`/blog/${r.slug}`} className="link-arrow">
                    Read the guide <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        as="p"
        title="Talk to an engineer about your site"
        text="Free consultation and site survey for fire protection, HVAC, electrical and plumbing projects."
        primary={{ service: service.name, label: 'Request a Quote' }}
      />
    </>
  );
}
