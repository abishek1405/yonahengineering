import { MapPin, ExternalLink, Clock } from 'lucide-react';
import { company, thumb } from '../data/site.js';

// Office photo shown with the map. Swap for a photo of the building's exterior when the client sends one.
const OFFICE_PHOTO = 'office/office-1';

// Full-width Google map with an office card (photo, address, hours, "Open in Google Maps").
// Used on the Contact and About pages.
export default function MapSection() {
  return (
    <section className="map-wrap">
      <iframe
        title={`Yonah Engineering location — ${company.location}`}
        src={company.mapsEmbed}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="map-office">
        <a className="map-office-photo" href={company.mapsUrl} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
          <img src={thumb(OFFICE_PHOTO)} alt="" loading="lazy" decoding="async" />
        </a>
        <div className="map-office-body">
          <p className="map-office-name">Yonah Engineering Office</p>
          <p className="map-office-line">
            <MapPin size={16} /> <span>{company.address.join(' ')}</span>
          </p>
          <p className="map-office-line">
            <Clock size={16} /> <span>{company.hours}</span>
          </p>
          <a className="btn btn-primary btn-sm btn-block" href={company.mapsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
