import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Icon from '../components/Icon.jsx';
import { PageHeader, SectionHead, CtaBand } from '../components/Section.jsx';
import Seo, { breadcrumbSchema, absUrl } from '../components/Seo.jsx';
import ScrollStack from '../components/ScrollStack.jsx';
import { industries } from '../data/catalog.js';
import { services, img, thumb } from '../data/site.js';

const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

export default function Industries() {
  const crumbs = [{ label: 'Industries', to: '/industries' }];
  return (
    <>
      <Seo
        title="Industries We Serve — MEP Engineering"
        description="MEP engineering for warehouses, factories, IT parks, hospitals, data centres, pharma, residential and institutional buildings across Tamil Nadu and India."
        path="/industries"
        image={img('hvac/hvac-8')}
        schema={[
          breadcrumbSchema([{ label: 'Home', to: '/' }, ...crumbs], '/industries'),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Industries served by Yonah Engineering',
            itemListElement: industries.map((ind, i) => ({ '@type': 'ListItem', position: i + 1, name: ind.name, url: absUrl(`/industries#${ind.slug}`) })),
          },
        ]}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Industries"
        title="Industries We"
        accent="Serve"
        lead="Every sector has its own fire-safety, comfort and power demands. We plan each MEP system around how your facility actually operates."
        image={img('hvac/hvac-8')}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Sectors"
            title="Sectors We"
            accent="Engineer For"
            lead="From high-bay warehouses to critical healthcare and data facilities — the requirements we plan for and the services that deliver them."
          />
          <ScrollStack className="industry-grid">
            {industries.map((ind) => (
              <article key={ind.slug} id={ind.slug} className="industry-card reveal">
                <div className="industry-media">
                  <img src={thumb(ind.image)} alt={`${ind.name} — MEP installation`} loading="lazy" decoding="async" />
                  <span className="industry-icon"><Icon name={ind.icon} size={22} /></span>
                </div>
                <div className="industry-body">
                  <h3>{ind.name}</h3>
                  <p>{ind.summary}</p>
                  <ul className="industry-needs">
                    {ind.needs.map((n) => (
                      <li key={n}>
                        <Check size={15} strokeWidth={2.5} />
                        {n}
                      </li>
                    ))}
                  </ul>
                  <div className="industry-services">
                    {ind.services.map((slug) => (
                      <Link key={slug} to={`/services/${slug}`} className="chip-link">
                        <Icon name={serviceBySlug[slug].icon} size={15} /> {serviceBySlug[slug].name}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </ScrollStack>
        </div>
      </section>

      <section className="section section-alt section-tight">
        <div className="container">
          <SectionHead
            eyebrow="One Accountable Team"
            title="Every Discipline,"
            accent="One Contractor"
            lead="Fire protection, HVAC, electrical, HT testing and plumbing are engineered and installed by the same team, so services are coordinated on site instead of clashing."
          />
          <p className="more-links reveal">
            <Link to="/services">Explore our services</Link> · <Link to="/products">See the products &amp; systems we supply</Link> ·{' '}
            <Link to="/projects">View completed projects</Link> · <Link to="/about">About Yonah Engineering</Link>
          </p>
        </div>
      </section>

      <CtaBand
        as="h2"
        title="Planning a project in your sector?"
        text="Tell us about your facility and our engineers will recommend the right systems and a practical installation plan."
        primary={{ label: 'Talk to an Engineer' }}
        secondary={{ to: '/services', label: 'Our Services' }}
      />
    </>
  );
}
