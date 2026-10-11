import { createContext, useContext, useEffect } from 'react';
import { SITE_URL } from '../config.js';

// During the build-time prerender this context collects each page's head tags so they are written
// into the static HTML (what Google, SEO tools and Facebook/WhatsApp previews read). In the
// browser the same values are applied on navigation.
export const HeadContext = createContext(null);

const SITE_NAME = 'Yonah Engineering';
const DEFAULT_IMAGE = '/og-image.jpg';

export const absUrl = (path = '/') => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

// BreadcrumbList schema from [{ label, to }] (last item = current page, `to` optional)
export function breadcrumbSchema(crumbs, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: absUrl(c.to || path),
    })),
  };
}

export default function Seo({ title, description, path = '/', image = DEFAULT_IMAGE, type = 'website', schema = [], noindex = false }) {
  // add the brand only when the whole title still fits in Google's ~60-character display
  const branded = `${title} | ${SITE_NAME}`;
  const fullTitle = title.includes(SITE_NAME) || branded.length > 60 ? title : branded;
  const url = absUrl(path);
  const imageUrl = absUrl(image);
  const schemas = Array.isArray(schema) ? schema : [schema];

  const head = useContext(HeadContext);
  if (head) Object.assign(head, { title: fullTitle, description, url, image: imageUrl, type, schemas, noindex });

  useEffect(() => {
    document.title = fullTitle;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');
    setLink('canonical', url);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', imageUrl);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', imageUrl);
    let el = document.getElementById('page-schema');
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = 'page-schema';
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(schemas);
  }, [fullTitle, description, url, imageUrl, type, noindex, JSON.stringify(schemas)]);

  return null;
}

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

// Head tags as an HTML string — used by the prerender script.
export function headToHtml(head) {
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  return [
    `<title>${esc(head.title)}</title>`,
    `<meta name="description" content="${esc(head.description)}" />`,
    `<meta name="robots" content="${head.noindex ? 'noindex, follow' : 'index, follow'}" />`,
    `<link rel="canonical" href="${esc(head.url)}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:type" content="${esc(head.type)}" />`,
    `<meta property="og:title" content="${esc(head.title)}" />`,
    `<meta property="og:description" content="${esc(head.description)}" />`,
    `<meta property="og:url" content="${esc(head.url)}" />`,
    `<meta property="og:image" content="${esc(head.image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(head.title)}" />`,
    `<meta name="twitter:description" content="${esc(head.description)}" />`,
    `<meta name="twitter:image" content="${esc(head.image)}" />`,
    `<script type="application/ld+json" id="page-schema">${JSON.stringify(head.schemas).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
}
