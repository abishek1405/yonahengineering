// After `vite build` (browser bundle) and `vite build --ssr` (server renderer), write a complete
// static HTML file for every route, a real 404 page and the XML sitemap. Search engines, SEO
// tools and social previews then see full content, headings, meta tags and schema without
// running JavaScript.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, routes, siteSchema } = await import(pathToFileURL(ssrEntry).href);
const { SITE_URL, GTM_ID, GA4_ID, GSC_VERIFICATION } = await import(pathToFileURL(path.join(root, 'src', 'config.js')).href);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-head-->') || !template.includes('<div id="root"></div>')) {
  throw new Error('index.html is missing the <!--app-head--> or <div id="root"></div> placeholder');
}

// Tags shared by every page: site-wide schema, optional Search Console + Analytics.
const shared = [`<script type="application/ld+json" id="site-schema">${siteSchema}</script>`];
if (GSC_VERIFICATION) shared.push(`<meta name="google-site-verification" content="${GSC_VERIFICATION}" />`);
if (GTM_ID) {
  shared.unshift(
    `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');</script>`
  );
}
// GTM's <noscript> fallback must sit right after <body>
const bodyOpen = GTM_ID
  ? `<body>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
  : '<body>';
if (GA4_ID) {
  shared.push(
    `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>`,
    `<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');</script>`
  );
}

function page(url) {
  const { html, head } = render(url);
  return template
    .replace('<!--app-head-->', `${head}\n    ${shared.join('\n    ')}`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace('<body>', bodyOpen);
}

let count = 0;
for (const r of routes) {
  const file = r.path === '/' ? path.join(dist, 'index.html') : path.join(dist, r.path, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(r.path));
  count++;
}

// Real 404 page (hosts serve it with a 404 status for unknown URLs).
fs.writeFileSync(path.join(dist, '404.html'), page('/__page-not-found__'));

// XML sitemap
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc><lastmod>${r.lastmod || today}</lastmod><priority>${r.priority}</priority></url>`
  )
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`prerendered ${count} pages + 404.html, sitemap.xml (${routes.length} URLs)`);
