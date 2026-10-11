import Icon from './Icon.jsx';
import { services } from '../data/site.js';

const extras = [
  { icon: 'Award', label: 'ISO 9001:2015' },
  { icon: 'ShieldCheck', label: 'NFPA Compliant' },
  { icon: 'Snowflake', label: 'ASHRAE Standards' },
];

// Slow, endless ticker of services and standards. The list is rendered twice and the track
// slides by exactly half its width, so the loop is seamless. Pauses on hover.
export default function Marquee() {
  const items = [...services.map((s) => ({ icon: s.icon, label: s.name })), ...extras];
  const row = (hidden) =>
    items.map((it, i) => (
      <li key={`${hidden ? 'b' : 'a'}-${i}`} aria-hidden={hidden || undefined}>
        <Icon name={it.icon} size={20} />
        {it.label}
      </li>
    ));

  return (
    <section className="marquee" aria-label="Our services and standards">
      <ul className="marquee-track">
        {row(false)}
        {row(true)}
      </ul>
    </section>
  );
}
