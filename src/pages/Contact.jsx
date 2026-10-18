import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/Section.jsx';
import QuoteForm from '../components/QuoteForm.jsx';
import { company, services, img } from '../data/site.js';
import Seo, { breadcrumbSchema, absUrl } from '../components/Seo.jsx';
import { ORG_ID } from '../data/schema.js';
import ScrollStack from '../components/ScrollStack.jsx';
import MapSection from '../components/MapSection.jsx';

export default function Contact() {
  // ?service=… preselects the form's service; applied after mount so the prerendered HTML hydrates cleanly
  const [params] = useSearchParams();
  const [service, setService] = useState('');
  useEffect(() => setService(params.get('service') || ''), [params]);
  const crumbs = [{ label: 'Contact', to: '/contact' }];

  return (
    <>
      <Seo
        title="Contact Us — Get a Free MEP Quote"
        description={`Contact Yonah Engineering, Sriperumbudur, Tamil Nadu. Call ${company.phone}, email ${company.email} or send your project details for a free quote.`}
        path="/contact"
        schema={[
          breadcrumbSchema([{ label: 'Home', to: '/' }, ...crumbs], '/contact'),
          { '@context': 'https://schema.org', '@type': 'ContactPage', url: absUrl('/contact'), name: 'Contact Yonah Engineering', about: { '@id': ORG_ID } },
        ]}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Let's Talk"
        title="Contact"
        accent="Us"
        lead="Ready to start your project? Get in touch with our engineering team for a free consultation and competitive quote."
        image={img('office/office-1')}
      />

      <section className="section">
        <div className="container contact-grid">
          <aside className="contact-info reveal">
            <h2>Get in Touch</h2>
            <p>Our team is available to discuss your MEP engineering requirements and provide expert advice on your project.</p>
            <ScrollStack as="ul" className="contact-list">
              <li>
                <span className="contact-icon"><MapPin size={20} /></span>
                <div><h3 className="contact-label">Office Address</h3><a href={company.mapsUrl} target="_blank" rel="noreferrer">{company.address.map((line) => <span key={line} className="addr-line">{line}</span>)}</a></div>
              </li>
              <li>
                <span className="contact-icon"><Mail size={20} /></span>
                <div><h3 className="contact-label">Email Address</h3><a href={`mailto:${company.email}`}>{company.email}</a></div>
              </li>
              <li>
                <span className="contact-icon"><Phone size={20} /></span>
                <div><h3 className="contact-label">Phone Numbers</h3><a href={company.landlineHref}>{company.landline} (Office)</a><a href={company.phoneHref}>{company.phone}</a><a href={company.phone2Href}>{company.phone2}</a></div>
              </li>
              <li>
                <span className="contact-icon"><Clock size={20} /></span>
                <div><h3 className="contact-label">Office Hours</h3><span>{company.hours}</span></div>
              </li>
            </ScrollStack>
            <div className="contact-services">
              <h3>Our Services</h3>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>
                ))}
              </ul>
              <Link to="/services" className="link-arrow">View All Services <ArrowRight size={16} /></Link>
            </div>
          </aside>

          <div className="form-card reveal">
            <QuoteForm
              key={service}
              initialService={service}
              heading="Send Us a Message"
              subheading="Fill in the form below and we'll get back to you within 24 hours."
            />
          </div>
        </div>
      </section>

      <MapSection />
    </>
  );
}
