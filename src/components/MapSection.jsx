import { MapPin, ExternalLink } from 'lucide-react';
import { company } from '../data/site.js';

// Full-width Google map with the office card on top. Used on the Contact and About pages.
export default function MapSection() {
  return (
    <section className="map-wrap">
      <iframe
        title={`Yonah Engineering location — ${company.location}`}
        src={company.mapsEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a className="map-card" href={company.mapsUrl} target="_blank" rel="noreferrer">
        <MapPin size={20} />
        <span>
          <strong>Yonah Engineering</strong>
          {company.location}
        </span>
        <ExternalLink size={16} />
      </a>
    </section>
  );
}
