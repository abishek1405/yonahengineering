import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { company } from '../data/site.js';

// Brand marks drawn inline (the icon library ships no brand logos).
export function FacebookIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.25-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.9 9.9 0 0 0-8.47 15.01L2.2 22l5.12-1.34A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.04.8.81-2.96-.2-.31a8.2 8.2 0 1 1 6.91 3.8Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.41-.56-.42h-.48a.92.92 0 0 0-.66.31 2.8 2.8 0 0 0-.87 2.07c0 1.22.89 2.4 1.01 2.57.12.16 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

// WhatsApp chat link with a short greeting already typed in.
const whatsappLink = company.whatsapp
  ? {
      key: 'whatsapp',
      label: 'WhatsApp',
      url: `https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hello Yonah Engineering, I would like to know more about your services.')}`,
      Icon: WhatsAppIcon,
    }
  : null;

// Social profiles that are filled in (empty URLs are skipped).
export const socialLinks = [
  { key: 'facebook', label: 'Facebook', url: company.social.facebook, Icon: FacebookIcon },
  { key: 'instagram', label: 'Instagram', url: company.social.instagram, Icon: InstagramIcon },
].filter((s) => s.url);

export function SocialIcons({ className = '' }) {
  if (!socialLinks.length) return null;
  return (
    <ul className={`social-icons ${className}`}>
      {socialLinks.map(({ key, label, url, Icon }) => (
        <li key={key}>
          <a href={url} target="_blank" rel="noopener noreferrer" className={`social-${key}`} aria-label={`Yonah Engineering on ${label}`}>
            <Icon size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}

const POPUP_KEY = 'ye-follow-popup-seen';
const POPUP_DELAY = 15000; // ms on the site before the invitation appears

// Floating buttons on every page (WhatsApp first, then Facebook / Instagram),
// plus a one-time "Follow us" invitation for the social profiles.
const floatLinks = [whatsappLink, ...socialLinks].filter(Boolean);

export default function SocialFloat() {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    if (!socialLinks.length) return undefined;
    let seen = false;
    try {
      seen = localStorage.getItem(POPUP_KEY) === '1';
    } catch {
      /* storage blocked — still show once per page load */
    }
    if (seen) return undefined;
    const t = setTimeout(() => setPopup(true), POPUP_DELAY);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    setPopup(false);
    try {
      localStorage.setItem(POPUP_KEY, '1');
    } catch {
      /* ignore */
    }
  };

  if (!floatLinks.length) return null;
  return (
    <>
      <div className="social-float" aria-label="Follow Yonah Engineering">
        {floatLinks.map(({ key, label, url, Icon }) => (
          <a key={key} href={url} target="_blank" rel="noopener noreferrer" className={`social-float-btn social-${key}`} aria-label={key === 'whatsapp' ? 'Chat with us on WhatsApp' : `Follow us on ${label}`}>
            <Icon size={20} />
            <span className="social-float-label">{label}</span>
          </a>
        ))}
      </div>

      {popup && (
        <aside className="follow-popup" role="dialog" aria-label="Follow Yonah Engineering">
          <button type="button" className="follow-close" onClick={dismiss} aria-label="Close">
            <X size={18} />
          </button>
          <p className="follow-title">Follow our latest projects</p>
          <p className="follow-text">See site updates, installations and engineering tips from the Yonah Engineering team.</p>
          <div className="follow-actions">
            {socialLinks.map(({ key, label, url, Icon }) => (
              <a key={key} href={url} target="_blank" rel="noopener noreferrer" className={`follow-btn social-${key}`} onClick={dismiss}>
                <Icon size={18} /> {label}
              </a>
            ))}
          </div>
        </aside>
      )}
    </>
  );
}
