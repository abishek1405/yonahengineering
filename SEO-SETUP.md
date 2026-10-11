# SEO setup: Tag Manager, Analytics, Search Console, sitemap

The website already includes everything Google needs: every page is generated as finished HTML,
with a title and description, H1–H4 headings, a breadcrumb, structured data (schema), link previews,
an XML sitemap and a real 404 page. The items below need the client's Google account. Each one is a
copy-and-paste into `src/config.js`, followed by a rebuild and redeploy.

Before going live, set `SITE_URL` in `src/config.js` to the final domain. It is currently
`https://yonahengineering.org`. The sitemap, canonical links and share previews all use this address.

---

## 1. Google Search Console (verify ownership)

1. Go to <https://search.google.com/search-console> and sign in with the client's Google account.
2. Click **Add property**, choose **URL prefix**, and enter `https://yonahengineering.org/`.
3. Choose the **HTML tag** method. Google shows a tag like:
   `<meta name="google-site-verification" content="AbC123...xyz" />`
4. Copy only the `content` value (`AbC123...xyz`) into `src/config.js`:
   ```js
   export const GSC_VERIFICATION = 'AbC123...xyz';
   ```
5. Run `npm run build`, deploy the `dist/` folder, then click **Verify** in Search Console.

(If the client already verified the domain with a DNS record, skip steps 3–5.)

## 2. Submit the XML sitemap

The build writes `dist/sitemap.xml` automatically. It lists every page, including services, blog
posts, Products and Industries, and it updates on every build.

1. In Search Console, open **Sitemaps** in the left menu.
2. Enter `sitemap.xml` and click **Submit**.
3. Optionally, use **URL Inspection** → **Request indexing** for the Home page and the six service
   pages to speed up the first crawl.

`robots.txt` also points crawlers to the sitemap.

## 3. Google Analytics 4 — choose ONE of these two options

> **Status: done with Option B.** `GA4_ID = 'G-BC988TFEEK'` is set in `src/config.js` (web stream
> "Yonah Engineering", stream ID 16095535800). After deploying, the "Data collection isn't active"
> warning in Analytics clears within about 48 hours. Check **Reports → Realtime** to confirm.

**Option A (recommended): through Google Tag Manager.** Use this if the client wants Tag Manager
(also useful for Meta Pixel, Google Ads conversions and so on). See section 4. In that case leave
`GA4_ID` empty.

**Option B: directly, without Tag Manager.**

1. Go to <https://analytics.google.com> → **Admin** → **Create property**, fill in the business
   details, then create a **Web** data stream for `https://yonahengineering.org`.
2. Copy the **Measurement ID**, which looks like `G-ABC123XYZ9`, into `src/config.js`:
   ```js
   export const GA4_ID = 'G-ABC123XYZ9';
   ```
3. Run `npm run build` and deploy. Analytics then loads on every page and records each page view,
   including moves between pages inside the site.
4. Check it in Analytics under **Reports → Realtime** while browsing the live site.

Optional: in Search Console, go to **Settings → Associations** to link Search Console with
Analytics.

## 4. Google Tag Manager

1. Go to <https://tagmanager.google.com>, click **Create account**, and add a **Web** container for
   `yonahengineering.org`.
2. Copy the container ID, which looks like `GTM-ABC1234`, into `src/config.js`:
   ```js
   export const GTM_ID = 'GTM-ABC1234';
   ```
3. Run `npm run build` and deploy. Both Tag Manager snippets (the script in `<head>` and the
   `<noscript>` frame right after `<body>`) are then added to every page automatically.
4. Inside Tag Manager, add a **Google tag** with the GA4 Measurement ID and the trigger
   **All Pages**. Then add a second trigger: **Custom Event** named `virtual_page_view`. The website
   sends this event when visitors move between pages without a full reload.
5. Click **Submit → Publish**, then check with **Preview** (Tag Assistant).

Do not set both `GTM_ID` and `GA4_ID` when GA4 is also configured inside Tag Manager, otherwise
every page view is counted twice.

---

## Video and Careers content

- **Video (Home page, "See Our Work On Site").** The current video is a **placeholder** made from
  project photos (`public/videos/yonah-site-showcase.mp4`). To use the real video, either:
  - replace that MP4 (keep the same name, H.264 format, ideally under 15 MB), and update the poster
    image `yonah-site-showcase-poster.webp`, or
  - upload it to YouTube and put the video ID (the part after `v=`) in `featuredVideo.youtubeId` in
    `src/data/site.js`.

  Then update `title`, `description`, `uploadDate` and `duration` in the same place. These feed
  the VideoObject schema.
- **Careers (`/careers`).** Vacancies are listed in `openings` in `src/data/careers.js`; there are
  currently 8, taken from the Chennai recruitment advert, each with its reference code. Each opening
  appears as a job card and is published as **JobPosting** schema, so it can show in Google's job
  search. Remove roles once they are filled, and add a `validThrough` closing date if there is one.
  Applications open the candidate's email app addressed to `company.hrEmail`
  (hr@yonahengineering.com), with the role and reference code in the subject line, and the
  candidate attaches their CV there.

---

## Still needed from the client

- **E-E-A-T details that strengthen trust:**
  - real project names and cities, plus completion years (in `src/data/site.js` → `projects`)
  - named engineers with their qualifications (Team section on the About page)
  - client testimonials or logos, used only with permission
  - copies or numbers of certificates (ISO 9001:2015 and others)
  - confirmation of the founding year. The site says 2009; public listings suggest 2017 or 2023.
- **Blog articles.** The four starter guides should be read and approved by the client's engineers
  before launch. Add new posts in `src/data/blog.js`; the sitemap and blog page update on the next
  build.
