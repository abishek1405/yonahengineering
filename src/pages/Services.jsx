import { Link } from 'react-router-dom';
import Icon from '../components/Icon.jsx';
import { PageHeader, CtaBand, SectionHead } from '../components/Section.jsx';
import { services, img } from '../data/site.js';
import Seo, { breadcrumbSchema, absUrl } from '../components/Seo.jsx';
import ServiceBlock from '../components/ServiceBlock.jsx';

export default function Services() {
  const crumbs = [{ label: 'Services', to: '/services' }];
  return (
    <>
      <Seo
        title="MEP Engineering Services"
        description="Fire protection, HVAC, electrical & ELV, utility systems, public health engineering and water treatment plants, designed, supplied and installed."
        path="/services"
        schema={[
          breadcrumbSchema([{ label: 'Home', to: '/' }, ...crumbs], '/services'),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Yonah Engineering services',
            itemListElement: services.map((sv, i) => ({ '@type': 'ListItem', position: i + 1, name: sv.name, url: absUrl(`/services/${sv.slug}`) })),
          },
        ]}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow="What We Offer"
        title="Our Engineering"
        accent="Services"
        lead="Comprehensive MEP engineering solutions delivered with precision, quality, and compliance across India."
        image={img('electrical/electrical-16')}
      />

      <nav className="service-jump" aria-label="Jump to service">
        <div className="container">
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`#${s.slug}`}>
                  <Icon name={s.icon} size={18} /> {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="section section-tight services-intro">
        <div className="container">
          <SectionHead
            eyebrow="Six Disciplines, One Team"
            title="Engineering Services"
            accent="We Deliver"
            lead="Each service is handled end to end by our own engineers — survey, design, approvals, supply and installation, through to testing and commissioning — so one team stays accountable for your system."
          />
          <p className="more-links reveal">
            Need specific equipment? <Link to="/products">See the products &amp; systems we supply</Link>. Planning for a
            particular facility? <Link to="/industries">See the industries we serve</Link>.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <ServiceBlock key={s.slug} id={s.slug} service={s} flipped={i % 2 === 1} alt={i % 2 === 1} />
      ))}

      <CtaBand
        as="h2"
        title="Need Our Services?"
        text="Contact us for a detailed consultation and free project estimate."
        primary={{ label: 'Get in Touch' }}
        secondary={{ to: '/projects', label: 'View Our Projects' }}
      />
    </>
  );
}
