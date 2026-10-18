// Schema.org structured data (JSON-LD) shared across pages.
import { SITE_URL } from '../config.js';
import { company, services } from './site.js';

const ORG_ID = `${SITE_URL}/#organization`;

// The business itself — included on every page by the prerender script.
export function organizationSchema() {
  const sameAs = Object.values(company.social).filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: company.name,
    legalName: company.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description:
      'MEP engineering contractor for fire protection, HVAC, electrical & ELV, utility systems, public health engineering (PHE) and water treatment plants for industrial and commercial projects.',
    telephone: [company.landline, company.phone, company.phone2].map((p) => p.replace(/\s/g, '')),
    foundingDate: String(company.founded),
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.street,
      addressLocality: company.city,
      addressRegion: company.region,
      postalCode: company.postalCode,
      addressCountry: 'IN',
    },
    areaServed: { '@type': 'Country', name: 'India' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '18:30',
    },
    knowsAbout: services.map((s) => s.name),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.name,
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-IN',
  };
}

export function serviceSchema(s, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.name,
    description: s.description,
    url: `${SITE_URL}${path}`,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'India' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${s.name} services`,
      itemListElement: s.features.map((f) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: f.text } })),
    },
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
}

export { ORG_ID };
