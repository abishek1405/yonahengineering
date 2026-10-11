import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Icon from '../components/Icon.jsx';
import { PageHeader, SectionHead, CtaBand } from '../components/Section.jsx';
import Seo, { breadcrumbSchema } from '../components/Seo.jsx';
import ScrollStack from '../components/ScrollStack.jsx';
import { QuoteButton } from '../components/Quote.jsx';
import { productGroups } from '../data/catalog.js';
import { services, img } from '../data/site.js';

const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

export default function Products() {
  const crumbs = [{ label: 'Products', to: '/products' }];
  return (
    <>
      <Seo
        title="Products & Systems — MEP Equipment"
        description="Fire pumps and sprinklers, chillers, AHUs and VRF, LED lighting, HT switchgear, LT panels and plumbing equipment, supplied, installed and tested."
        path="/products"
        image={img('electrical/electrical-1')}
        schema={[
          breadcrumbSchema([{ label: 'Home', to: '/' }, ...crumbs], '/products'),
          {
            '@context': 'https://schema.org',
            '@type': 'OfferCatalog',
            name: 'Products & systems supplied and installed by Yonah Engineering',
            itemListElement: productGroups.flatMap((g) =>
              g.categories.map((c) => ({
                '@type': 'OfferCatalog',
                name: c.name,
                itemListElement: c.items.map((it) => ({ '@type': 'Offer', itemOffered: { '@type': 'Product', name: it.name, description: it.text } })),
              }))
            ),
          },
        ]}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Products"
        title="Products &"
        accent="Systems"
        lead="The equipment we supply, install, test and maintain — selected for the hazard, the load and the codes that apply to your site."
        image={img('electrical/electrical-1')}
      />

      {productGroups.map((g, gi) => (
        <section key={g.id} className={`section${gi % 2 ? ' section-alt' : ''}`}>
          <div className="container">
            <SectionHead eyebrow={gi === 0 ? 'Mechanical' : 'Electrical'} title={g.title} lead={g.intro} />
            <div className="product-cats">
              {g.categories.map((c) => {
                const sv = serviceBySlug[c.service];
                return (
                  <article key={c.service} id={c.service} className="product-cat reveal">
                    <header className="product-cat-head">
                      <span className="sd-equip-icon"><Icon name={c.icon} size={24} /></span>
                      <div>
                        <h3>{c.name}</h3>
                        <p>{c.intro}</p>
                      </div>
                    </header>
                    <ScrollStack as="ul" className="product-items">
                      {c.items.map((it) => (
                        <li key={it.name} className="product-item">
                          <h4>{it.name}</h4>
                          <p>{it.text}</p>
                        </li>
                      ))}
                    </ScrollStack>
                    <div className="product-cat-foot">
                      <Link to={`/services/${sv.slug}`} className="link-arrow">
                        {sv.name} service details <ArrowRight size={16} />
                      </Link>
                      <QuoteButton service={sv.name} className="btn btn-outline btn-sm">
                        Request a Quote
                      </QuoteButton>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <CtaBand
        as="h2"
        title="Need equipment selected and installed?"
        text="Share your drawings or requirements and we will recommend the right equipment, install it and test it to the applicable standards."
        primary={{ label: 'Get a Quote' }}
        secondary={{ to: '/industries', label: 'Industries We Serve' }}
      />
    </>
  );
}
