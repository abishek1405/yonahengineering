// Build-time renderer: turns each route into static HTML (see scripts/prerender.mjs).
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import { HeadContext, headToHtml } from './components/Seo.jsx';
import { services } from './data/site.js';
import { posts } from './data/blog.js';
import { organizationSchema, websiteSchema } from './data/schema.js';

// Every page that gets its own HTML file (and a sitemap entry).
export const routes = [
  { path: '/', priority: '1.0' },
  { path: '/about', priority: '0.8' },
  { path: '/services', priority: '0.9' },
  ...services.map((s) => ({ path: `/services/${s.slug}`, priority: '0.9' })),
  { path: '/products', priority: '0.8' },
  { path: '/industries', priority: '0.8' },
  { path: '/projects', priority: '0.7' },
  { path: '/blog', priority: '0.7' },
  ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: '0.6', lastmod: p.updated || p.date })),
  { path: '/careers', priority: '0.6' },
  { path: '/contact', priority: '0.8' },
];

export function render(url) {
  const head = {};
  const html = renderToString(
    <StrictMode>
      <HeadContext.Provider value={head}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadContext.Provider>
    </StrictMode>
  );
  return { html, head: headToHtml(head), noindex: head.noindex };
}

// Organization + WebSite schema, added to every page once.
export const siteSchema = JSON.stringify([organizationSchema(), websiteSchema()]).replace(/</g, '\\u003c');
