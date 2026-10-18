import { Link } from 'react-router-dom';
import { Target, Eye } from 'lucide-react';
import Icon from '../components/Icon.jsx';
import { PageHeader, SectionHead, CtaBand } from '../components/Section.jsx';
import { company, values, certifications, milestones, team, img, thumb } from '../data/site.js';
import Seo, { breadcrumbSchema } from '../components/Seo.jsx';
import ScrollStack from '../components/ScrollStack.jsx';
import MapSection from '../components/MapSection.jsx';

// "Our Journey" chart: years run up the vertical axis, each milestone is a stem that rises to its year.
const FIRST_YEAR = 2015;
const LAST_YEAR = 2024;
const YEARS = Array.from({ length: LAST_YEAR - FIRST_YEAR + 1 }, (_, i) => LAST_YEAR - i);
const heightFor = (year) => `${((year - FIRST_YEAR) / (LAST_YEAR - FIRST_YEAR)) * 100}%`;

export default function About() {
  const crumbs = [{ label: 'About Us', to: '/about' }];
  return (
    <>
      <Seo
        title="About Us — MEP Engineers in Tamil Nadu"
        description="Meet Yonah Engineering: MEP engineers for fire protection, HVAC, electrical & ELV, utilities, PHE and water treatment. Our story, credentials and team."
        path="/about"
        schema={[breadcrumbSchema([{ label: 'Home', to: '/' }, ...crumbs], '/about')]}
      />
      <PageHeader
        crumbs={crumbs}
        eyebrow="Who We Are"
        title="About Yonah"
        accent="Engineering"
        lead="A trusted MEP engineering partner for over 11 years, delivering innovative and reliable solutions for industrial and commercial projects across India."
        image={img('office/office-3')}
      />

      {/* STORY */}
      <section className="section">
        <div className="container story">
          <div className="story-media reveal">
            <img src={thumb('site/site-4')} alt="Yonah Engineering team on a fire pump room walk-through" loading="lazy" />
            <div className="story-badge">
              <strong>75+</strong>
              <span>Projects Delivered</span>
            </div>
          </div>
          <div className="reveal">
            <p className="eyebrow">Our Story</p>
            <h2>
              11+ Years of Engineering <span className="accent">Excellence</span>
            </h2>
            <p>
              Founded in {company.founded}, Yonah Engineering has grown from a small mechanical engineering firm into a
              comprehensive MEP solutions provider trusted by leading developers, contractors, and facility managers
              across India.
            </p>
            <p>
              Our journey began with a commitment to delivering engineering solutions that combine technical
              excellence with practical innovation. Today, with a team of over 50 certified engineers and
              technicians, we handle projects ranging from commercial fit-outs to large-scale industrial MEP
              installations.
            </p>
            <p>
              Our work follows ISO 9001:2015 quality processes and is engineered to meet national and international
              standards, ensuring every system we install meets the strictest safety and quality requirements.
            </p>
            <dl className="company-facts">
              <div>
                <dt>Registered name</dt>
                <dd>{company.legalName}</dd>
              </div>
              <div>
                <dt>CIN</dt>
                <dd>{company.cin}</dd>
              </div>
              <div>
                <dt>Registered office</dt>
                <dd>{company.address.join(' ')}</dd>
              </div>
              <div>
                <dt>Talk to our executives</dt>
                <dd>
                  <a href={company.landlineHref}>{company.landline}</a> · <a href={company.phoneHref}>{company.phone}</a>
                  <br />
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </dd>
              </div>
            </dl>
            <p className="more-links">
              Explore <Link to="/services">our services</Link>, the <Link to="/products">products we supply</Link> and the{' '}
              <Link to="/industries">industries we serve</Link>. Want to join us? See{' '}
              <Link to="/careers">careers at Yonah</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section section-alt section-tight">
        <ScrollStack className="container mv-grid">
          <article className="mv-card reveal">
            <div className="mv-head">
              <span className="mv-icon"><Target size={24} /></span>
              <h3>Our Mission</h3>
            </div>
            <p>
              To deliver innovative, reliable, and sustainable MEP engineering solutions that exceed client
              expectations, uphold the highest safety standards, and contribute to the development of world-class
              infrastructure across India and beyond.
            </p>
          </article>
          <article className="mv-card mv-card-navy reveal">
            <div className="mv-head">
              <span className="mv-icon"><Eye size={24} /></span>
              <h3>Our Vision</h3>
            </div>
            <p>
              To be the most trusted and innovative MEP engineering company in India, recognized for our
              technical expertise, commitment to quality, and the long-lasting impact we create through every project
              we undertake.
            </p>
          </article>
        </ScrollStack>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="What Drives Us"
            title="Our Core"
            accent="Values"
            lead="These values guide everything we do, from design to installation, and help us build safer, smarter and more reliable systems."
          />
          <ScrollStack className="values-grid">
            {values.map((v, i) => (
              <article key={v.title} className="value-card reveal" style={{ '--d': `${(i % 3) * 70}ms` }}>
                <div className="value-copy">
                  <div className="value-top">
                    <span className="value-icon"><Icon name={v.icon} size={22} /></span>
                    <span className="value-num">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.text}</p>
                </div>
                <div className="value-media">
                  <img src={thumb(v.image)} alt="" aria-hidden="true" loading="lazy" />
                </div>
              </article>
            ))}
          </ScrollStack>
        </div>
      </section>

      <CtaBand
        title="Let's Work Together"
        text="Partner with Yonah Engineering for your next MEP project and experience the difference that expertise and dedication makes."
        primary={{ label: 'Contact Us' }}
        secondary={{ to: '/projects', label: 'View Our Projects' }}
      />

      {/* CERTIFICATIONS */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            as="h3"
            eyebrow="Our Credentials"
            title="Certifications &"
            accent="Licences"
            lead="Certified and licensed to recognised quality, electrical and engineering standards."
          />
          <ScrollStack className="cert-grid">
            {certifications.map((c) => (
              <div key={c.title} className="cert-card reveal">
                <span className="cert-icon"><Icon name={c.icon} size={24} /></span>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </ScrollStack>
        </div>
      </section>

      {/* OUR JOURNEY — milestone graph */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Our Journey"
            title="Growing Since"
            accent={String(FIRST_YEAR)}
            lead="Key moments that have shaped our growth and strengthened our commitment to safer, smarter engineering."
          />
          <div className="journey reveal" style={{ '--cols': milestones.length }}>
            {/* the chart is a picture of the list below, which carries the same content as text */}
            <div className="journey-chart" aria-hidden="true">
              <div className="journey-axis">
                {YEARS.map((y) => (
                  <span key={y}>{y}</span>
                ))}
              </div>
              <div className="journey-plot">
                {milestones.map((m) => (
                  <div key={m.year} className="journey-col">
                    <span className="journey-stem" style={{ '--h': heightFor(m.year) }}>
                      <span className="journey-dot" />
                      <span className="journey-tip">
                        {m.year} · {m.title}
                      </span>
                    </span>
                    <span className="journey-xlabel">{m.year}</span>
                  </div>
                ))}
              </div>
            </div>
            <ol className="journey-list">
              {milestones.map((m) => (
                <li key={m.year} className="journey-item">
                  <span className="journey-year">{m.year}</span>
                  <span className="journey-icon"><Icon name={m.icon} size={18} /></span>
                  <h4>{m.title}</h4>
                  <p>{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section section-alt">
        <div className="container">
          <SectionHead
            eyebrow="Our Team"
            title="Expert Engineering"
            accent="Team"
            lead="Our team of highly qualified engineers brings decades of combined experience to every project."
          />
          <ScrollStack className="team-grid">
            {team.map((t) => (
              <article key={t.role} className="team-card reveal">
                <div className="team-head">
                  <span className="team-icon"><Icon name={t.icon} size={22} /></span>
                  <div>
                    <h4>{t.role}</h4>
                    <p>{t.focus}</p>
                  </div>
                </div>
                <span className="team-years">
                  <strong>{t.years}</strong> years experience
                </span>
              </article>
            ))}
          </ScrollStack>
        </div>
      </section>

      <MapSection />
    </>
  );
}
