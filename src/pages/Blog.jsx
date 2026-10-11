import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { PageHeader, SectionHead, CtaBand } from '../components/Section.jsx';
import Seo, { breadcrumbSchema, absUrl } from '../components/Seo.jsx';
import ScrollStack from '../components/ScrollStack.jsx';
import { posts, blogAuthor } from '../data/blog.js';
import { img, thumb } from '../data/site.js';
import { ORG_ID } from '../data/schema.js';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// formatted by hand (not toLocaleDateString) so build-time HTML and the browser always agree
export const formatDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

// newest first
const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export default function Blog() {
  const crumbs = [{ label: 'Blog', to: '/blog' }];
  return (
    <>
      <Seo
        title="MEP Engineering Guides & Insights"
        description="Practical guides from our engineers on sprinkler maintenance, HT panel testing, HVAC selection and earthing design for industrial and commercial sites."
        path="/blog"
        image={img(sorted[0].image)}
        schema={[
          breadcrumbSchema([{ label: 'Home', to: '/' }, ...crumbs], '/blog'),
          {
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Yonah Engineering Insights',
            url: absUrl('/blog'),
            publisher: { '@id': ORG_ID },
            blogPost: sorted.map((p) => ({
              '@type': 'BlogPosting',
              headline: p.title,
              url: absUrl(`/blog/${p.slug}`),
              datePublished: p.date,
              author: { '@type': 'Organization', name: blogAuthor.name },
            })),
          },
        ]}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Blog"
        title="Engineering"
        accent="Insights"
        lead="Practical guides on fire protection, HVAC, electrical testing and plumbing — written from site experience by our technical team."
        image={img('ht-panel/ht-panel-2')}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Latest Articles"
            title="Guides From"
            accent="Our Engineers"
            lead={`Written and reviewed by the ${blogAuthor.name}: ${blogAuthor.role}.`}
          />
          <ScrollStack className="blog-grid">
            {sorted.map((p) => (
              <article key={p.slug} className="blog-card reveal">
                <Link to={`/blog/${p.slug}`} className="blog-card-media" tabIndex={-1} aria-hidden="true">
                  <img src={thumb(p.image)} alt="" loading="lazy" decoding="async" />
                </Link>
                <div className="blog-card-body">
                  <Link to={`/services/${p.serviceSlug}`} className="tag">
                    {p.category}
                  </Link>
                  <h3>
                    <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                  </h3>
                  <p className="blog-meta">
                    <span><CalendarDays size={14} /> <time dateTime={p.date}>{formatDate(p.date)}</time></span>
                    <span><Clock size={14} /> {p.readMinutes} min read</span>
                  </p>
                  <p>{p.excerpt}</p>
                  <Link to={`/blog/${p.slug}`} className="link-arrow">
                    Read the guide <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </ScrollStack>
        </div>
      </section>

      <CtaBand
        as="h2"
        title="Have a question about your system?"
        text="Our engineers can review your fire protection, HVAC or electrical installation and advise on the next step."
        primary={{ label: 'Ask Our Engineers' }}
        secondary={{ to: '/services', label: 'Our Services' }}
      />
    </>
  );
}
