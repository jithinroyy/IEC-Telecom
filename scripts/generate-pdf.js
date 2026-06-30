const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const DOCS = path.join(__dirname, '..', 'docs');
const OUT = path.join(DOCS, 'iec-telecom-redesign-audit.pdf');

function img(name, caption) {
  const p = path.join(DOCS, name);
  if (!fs.existsSync(p)) return '';
  const uri = 'file:///' + p.replace(/\\/g, '/');
  return `
    <figure class="shot">
      <img src="${uri}" alt="${caption}" />
      <figcaption>${caption}</figcaption>
    </figure>`;
}

function section(title, body) {
  return `<section class="page-break"><h2>${title}</h2>${body}</section>`;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>IEC Telecom Website Redesign — Discovery & Recommendations</title>
  <style>
    @page { size: A4; margin: 18mm 16mm; }
    * { box-sizing: border-box; }
    body {
      font-family: "Segoe UI", Arial, sans-serif;
      color: #1a2b3c;
      font-size: 11pt;
      line-height: 1.55;
      margin: 0;
    }
    .cover {
      min-height: 250mm;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 0 0 24mm;
      page-break-after: always;
      border-bottom: 6px solid #003366;
    }
    .cover h1 {
      font-size: 28pt;
      color: #003366;
      margin: 0 0 8px;
      line-height: 1.2;
    }
    .cover .sub { font-size: 14pt; color: #5a6b7d; margin-bottom: 24px; }
    .cover .meta { font-size: 10pt; color: #5a6b7d; }
    .cover img { width: 100%; border-radius: 6px; margin-bottom: 20px; border: 1px solid #e2e8f0; }
    h2 {
      font-size: 16pt;
      color: #003366;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 6px;
      margin: 0 0 14px;
    }
    h3 { font-size: 12pt; color: #003366; margin: 18px 0 8px; }
    p { margin: 0 0 10px; }
    ul { margin: 0 0 12px; padding-left: 20px; }
    li { margin-bottom: 6px; }
    table { width: 100%; border-collapse: collapse; margin: 12px 0 16px; font-size: 10pt; }
    th, td { border: 1px solid #e2e8f0; padding: 8px 10px; text-align: left; vertical-align: top; }
    th { background: #f5f7fa; color: #003366; }
    .shot { margin: 14px 0 18px; page-break-inside: avoid; }
    .shot img { width: 100%; border: 1px solid #e2e8f0; border-radius: 4px; display: block; }
    .shot figcaption { font-size: 9pt; color: #5a6b7d; margin-top: 6px; font-style: italic; }
    .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .callout {
      background: #f5f7fa;
      border-left: 4px solid #003366;
      padding: 12px 14px;
      margin: 12px 0;
      font-size: 10.5pt;
    }
    .priority-p0 { color: #b71c1c; font-weight: 700; }
    .priority-p1 { color: #e65100; font-weight: 700; }
    .page-break { page-break-before: always; }
    .toc { page-break-after: always; }
    .toc li { margin-bottom: 4px; }
    footer.doc-footer {
      margin-top: 24px;
      padding-top: 12px;
      border-top: 1px solid #e2e8f0;
      font-size: 9pt;
      color: #5a6b7d;
      text-align: center;
    }
  </style>
</head>
<body>

  <div class="cover">
    ${img('01-cover-homepage.png', 'Current homepage — IEC Telecom')}
    <h1>IEC Telecom Website Redesign</h1>
    <div class="sub">Discovery & Recommendations — UX/UI Audit & Strategic Improvement Plan</div>
    <div class="meta">June 2026 · Confidential — Client use only<br/>https://iec-telecom.com/en/</div>
  </div>

  <div class="toc">
    <h2>Contents</h2>
    <ol>
      <li>Executive Summary</li>
      <li>Key Findings</li>
      <li>Header & Navigation</li>
      <li>Homepage Issues</li>
      <li>Footer & Site-Wide Elements</li>
      <li>Accessibility</li>
      <li>Recommended Solutions</li>
      <li>Implementation Roadmap</li>
      <li>Next Steps</li>
    </ol>
  </div>

  ${section('1. Executive Summary', `
    <p>IEC Telecom is an established global satellite communications operator with 25+ years of expertise, a broad product portfolio, and regional presence across 10+ offices. The website carries substantial content but does not reflect the company's scale or simplify paths for key audiences.</p>
    <div class="callout">
      <strong>Top findings</strong>
      <ul>
        <li>Primary navigation hides most of the site behind a desktop hamburger menu.</li>
        <li>Visual inconsistencies (alignment, contrast, typography) reduce perceived quality on first visit.</li>
        <li>Homepage combines too many goals — news, markets, contact form — without clear hierarchy.</li>
        <li>Footer provides minimal wayfinding for a corporate site of this scope.</li>
      </ul>
    </div>
    <h3>Recommended direction</h3>
    <ul>
      <li>Restructure navigation into a two-tier system with categorized mega-menus.</li>
      <li>Establish a cohesive design system aligned with corporate brand standards.</li>
      <li>Redesign homepage around a clear value proposition and guided user journeys.</li>
      <li>Implement Phase 1 quick wins within 1–2 weeks.</li>
    </ul>
  `)}

  ${section('2. Key Findings', `
    <table>
      <tr><th>Priority</th><th>Finding</th><th>Business impact</th></tr>
      <tr><td class="priority-p0">P0</td><td>News section contrast failure</td><td>Accessibility / legal risk</td></tr>
      <tr><td class="priority-p0">P0</td><td>Core offerings hidden in menu</td><td>Lost leads, poor discoverability</td></tr>
      <tr><td class="priority-p1">P1</td><td>Header alignment & visual polish</td><td>Trust erosion on first visit</td></tr>
      <tr><td class="priority-p1">P1</td><td>Homepage lacks clear CTA hierarchy</td><td>Lower conversion</td></tr>
      <tr><td class="priority-p1">P1</td><td>Minimal footer</td><td>Poor wayfinding, SEO</td></tr>
      <tr><td>P2</td><td>Favicon gradient & dated UI patterns</td><td>Brand perception</td></tr>
      <tr><td>P2</td><td>Naming inconsistencies</td><td>Confusion across journeys</td></tr>
    </table>
    ${img('03-favicon-gradient.png', 'Favicon uses gradient background — illegible at small sizes in browser tabs')}
  `)}

  ${section('3. Header & Navigation', `
    <p>The logo and right-side navigation are not vertically aligned. Only four utility links are visible in the header; approximately 60+ links are hidden behind the Menu overlay on desktop.</p>
    <div class="grid2">
      ${img('02-header-alignment.png', 'Header misalignment — logo and nav on different baselines')}
      ${img('04-menu-core-offerings.png', 'Full-screen menu — core offerings buried among 60+ links')}
    </div>
    <h3>Proposed navigation</h3>
    <p><strong>Row 1:</strong> Solutions · Industries · Products & Services · About · News · Contact</p>
    <p><strong>Row 2:</strong> Starlink · Maritime · Land · Support · Offices · Partners</p>
    <p><strong>Utility:</strong> Search · Client Portals (OptiView / OptiSim) · Language</p>
  `)}

  ${section('4. Homepage Issues', `
    ${img('07-hero-messaging.png', 'Hero — vague messaging, no primary CTA, busy background')}
    ${img('06-featured-news-contrast.png', 'Featured News — dark text on black background fails WCAG contrast')}
    ${img('08-h1-body-copy.png', 'H1 is 100+ characters in ALL CAPS; keyword repetition in body copy')}
    ${img('11-homepage-contact-form.png', 'Full contact form on homepage — 9 fields + reCAPTCHA; should live on /contact')}
  `)}

  ${section('5. Footer & Site-Wide Elements', `
    ${img('13-footer-full.png', 'Current footer — minimal links, misaligned social icons, outdated copyright')}
    <h3>Proposed 5-column footer</h3>
    <p>Company · Solutions · Support · Connect · Logo/mission — with full sitemap links, accessible social labels, and © 2026.</p>
  `)}

  ${section('6. Accessibility', `
    <ul>
      <li>News section contrast failure (WCAG 1.4.3)</li>
      <li>Placeholder-only form labels</li>
      <li>Social links without accessible names</li>
      <li>Missing semantic header landmark</li>
    </ul>
    <p><strong>Target:</strong> WCAG 2.1 Level AA on all primary templates.</p>
  `)}

  ${section('7. Recommended Solutions', `
    <table>
      <tr><th>Area</th><th>Recommendation</th><th>Phase</th></tr>
      <tr><td>Navigation</td><td>Two-row nav + hover mega-menus</td><td>2</td></tr>
      <tr><td>Header</td><td>Alignment, semantic HTML, sticky bar</td><td>1</td></tr>
      <tr><td>Favicon</td><td>Flat mark, multi-format</td><td>1</td></tr>
      <tr><td>News contrast</td><td>Light background, 3 cards</td><td>1</td></tr>
      <tr><td>Footer</td><td>5-column sitemap</td><td>1</td></tr>
      <tr><td>Homepage hero</td><td>New copy + dual CTAs</td><td>3</td></tr>
      <tr><td>Contact form</td><td>Move off homepage</td><td>3</td></tr>
    </table>
    ${img('15-full-homepage.png', 'Full homepage anatomy — current state')}
  `)}

  ${section('8. Implementation Roadmap', `
    <table>
      <tr><th>Phase</th><th>Duration</th><th>Focus</th></tr>
      <tr><td>Phase 1</td><td>1–2 weeks</td><td>Header alignment, footer, news contrast, favicon, copy fixes</td></tr>
      <tr><td>Phase 2</td><td>2–4 weeks</td><td>Navigation restructure + mega-menus</td></tr>
      <tr><td>Phase 3</td><td>4–8 weeks</td><td>Homepage redesign + design system</td></tr>
      <tr><td>Phase 4</td><td>Ongoing</td><td>Content, search, performance, offices map</td></tr>
    </table>
  `)}

  ${section('9. Next Steps', `
    <ol>
      <li>Stakeholder review — approve findings and phasing</li>
      <li>Brand asset audit — logo, favicon, typography</li>
      <li>Sign off Phase 1 spec — begin quick wins</li>
      <li>IA workshop with sales, support, marketing</li>
      <li>Refine Figma sitemap and navigation wireframes</li>
      <li>Schedule Phase 2 kickoff</li>
    </ol>
    <footer class="doc-footer">IEC Telecom Website Redesign — Discovery & Recommendations · v1.0 · June 2026</footer>
  `)}

</body>
</html>`;

async function main() {
  const htmlPath = path.join(DOCS, 'pdf-report.html');
  fs.writeFileSync(htmlPath, html, 'utf8');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0' });
  await page.pdf({
    path: OUT,
    format: 'A4',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' },
  });
  await browser.close();
  console.log('PDF written to', OUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
