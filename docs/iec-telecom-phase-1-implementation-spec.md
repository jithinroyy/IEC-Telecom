# IEC Telecom - Phase 1 Implementation Spec

**Phase:** 1 - Quick Wins  
**Duration:** 1–2 weeks  
**Goal:** Fix highest-impact UX, accessibility, and trust issues without full navigation rebuild  
**Platform:** WordPress (existing theme - patch in place or child theme)  
**Out of scope for Phase 1:** Mega-menus, homepage hero redesign, URL restructuring (Phase 2+)

---

## Phase 1 Deliverables Checklist

| # | Deliverable | Owner | Status |
|---|-------------|-------|--------|
| 1 | Header alignment fix | Front-end | ☐ |
| 2 | Nav label casing consistency | Front-end / Content | ☐ |
| 3 | News section contrast fix | Front-end | ☐ |
| 4 | New favicon set | Design + Front-end | ☐ |
| 5 | Footer redesign (4-column) | Design + Front-end | ☐ |
| 6 | Social link accessibility | Front-end | ☐ |
| 7 | H1 shorten + “Let’s talk” fix | Content + Front-end | ☐ |
| 8 | Vertical market naming sync | Content | ☐ |
| 9 | Semantic `<header>` / `<footer>` | Front-end | ☐ |
| 10 | Copyright year update | Content | ☐ |
| 11 | QA + accessibility smoke test | QA | ☐ |

---

## 1. Header Alignment Fix

### Problem

Logo and right-side navigation are not vertically aligned; decorative diagonal background adds visual noise.

### Acceptance criteria

- [ ] Logo vertical center within header bar matches nav links ±2px
- [ ] Header height consistent: **72px** desktop, **64px** mobile
- [ ] All interactive elements minimum **44×44px** touch target on mobile
- [ ] Sticky header optional in Phase 1; if enabled, add `box-shadow: 0 1px 0 rgba(0,0,0,0.08)`

### Implementation

**HTML structure (target):**

```html
<header class="site-header" role="banner">
  <div class="site-header__inner container">
    <a class="site-header__logo" href="/en/" aria-label="IEC Telecom home">
      <img src="..." alt="IEC Telecom" width="245" height="60" />
    </a>
    <nav class="site-header__nav" aria-label="Primary">
      <!-- existing links -->
    </nav>
    <div class="site-header__actions">
      <!-- search, menu toggle, language -->
    </div>
  </div>
</header>
```

**CSS (minimum):**

```css
.site-header {
  position: relative;
  z-index: 100;
  background: #fff;
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  padding: 0 24px;
  max-width: 1440px;
  margin: 0 auto;
}

.site-header__logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.site-header__logo img {
  display: block;
  height: 48px;
  width: auto;
}

.site-header__nav,
.site-header__actions {
  display: flex;
  align-items: center;
  gap: 24px;
}

.site-header__nav a {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: none;
  color: #003366;
  text-decoration: none;
}

.site-header__nav a:hover {
  color: #0055a4;
}
```

### WordPress notes

- Locate header template: `header.php` or theme builder (Elementor / WPBakery header block)
- Remove or override diagonal background via child theme CSS
- Do not change menu structure in Phase 1 - alignment and semantics only

---

## 2. Navigation Label Casing

### Problem

Inconsistent casing: `OptiView`, `OPTISIM`, `Support`, `CONTACT US`.

### Standard (Phase 1)

| Current | Phase 1 label |
|---------|---------------|
| OPTIVIEW / OptiView | OptiView |
| OPTISIM | OptiSim |
| SUPPORT | Support |
| CONTACT US | Contact Us |
| MENU | Menu |

### Acceptance criteria

- [ ] All visible header links use **Title Case** for product names, **Sentence case** for generic labels
- [ ] No change to URLs or menu hierarchy in Phase 1

---

## 3. News Section Contrast Fix (P0 - Accessibility)

### Problem

Featured News uses dark blue text on black background - fails WCAG 2.1 AA (contrast ratio < 4.5:1).

### Target design

| Element | Background | Text color | Min contrast |
|---------|------------|------------|--------------|
| Section | `#F5F7FA` | - | - |
| Section title | `#F5F7FA` | `#003366` | 12:1+ |
| Article title | `#FFFFFF` card | `#003366` | 12:1+ |
| Date/meta | card | `#5A6B7D` | 4.5:1+ |

### CSS override (if structure unchanged):

```css
.news-v2,
.section-news {
  background-color: #f5f7fa !important;
}

.news-v2 h2,
.news-v2 h3,
.news-v2 a {
  color: #003366 !important;
}

.news-v2 .news-date,
.news-v2 time {
  color: #5a6b7d !important;
}
```

### Acceptance criteria

- [ ] Lighthouse accessibility contrast audit passes for news section
- [ ] Manual check: article titles readable without squinting
- [ ] Phase 1 may keep 7 items; reducing to 3 cards is Phase 3

---

## 4. Favicon Replacement

### Problem

Gradient background favicon illegible at 16×16.

### Deliverables

| File | Size | Notes |
|------|------|-------|
| `favicon.ico` | 16, 32, 48 | Multi-size ICO |
| `favicon.svg` | scalable | Flat mark, no gradient |
| `apple-touch-icon.png` | 180×180 | Solid `#003366` background |
| `site.webmanifest` | - | Optional PWA manifest |

### Design spec

- **Mark:** IEC swoosh or “IEC” monogram only
- **Background:** Solid `#003366` OR transparent (SVG)
- **No:** gradients, fine text “telecom” below 32px

### WordPress implementation

```html
<link rel="icon" href="/wp-content/themes/child/favicon.ico" sizes="any" />
<link rel="icon" href="/wp-content/themes/child/favicon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/wp-content/themes/child/apple-touch-icon.png" />
```

- Replace via child theme or **Appearance → Customize → Site Identity**
- Verify SVG does not return 500 (current asset issue on live site)

### Acceptance criteria

- [ ] Readable in Chrome tab at 16×16
- [ ] Consistent on iOS home screen add

---

## 5. Footer Redesign (4-Column)

### Problem

Minimal footer: 2 legal links, misaligned social icons, outdated copyright.

### Target structure

```
┌────────────────────────────────────────────────────────────────────────┐
│  [Logo]                                                                │
│  Managed satellite solutions for maritime and remote operations.       │
│                                                                        │
│  COMPANY          SOLUTIONS        SUPPORT           CONNECT           │
│  About Us         Maritime         Support HQ        Contact Us        │
│  History          Land             Download Center   Become a Partner  │
│  Management       Starlink         OptiView          Worldwide Contacts│
│  Regional Offices All Products     OptiSim           Careers           │
│                                                                        │
│  [Facebook] [YouTube] [LinkedIn]                                       │
│                                                                        │
│  © 2026 IEC Telecom  ·  Legal Notices  ·  Privacy Policy               │
└────────────────────────────────────────────────────────────────────────┘
```

### Grid spec

```css
.site-footer {
  background: #003366;
  color: #ffffff;
  padding: 48px 24px 24px;
}

.site-footer__inner {
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 32px;
}

.site-footer__column h3 {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.7);
}

.site-footer__column a {
  display: block;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  line-height: 2;
}

.site-footer__column a:hover {
  text-decoration: underline;
}

.site-footer__bottom {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}

@media (max-width: 768px) {
  .site-footer__inner {
    grid-template-columns: 1fr 1fr;
  }
}
```

### Link map (use existing URLs - no redirects in Phase 1)

| Label | URL (verify on staging) |
|-------|-------------------------|
| About Us | `/en/about-us/introduction/` |
| Maritime | `/en/vertical-markets/maritime/` (or current path) |
| Support HQ | `/en/support/support-headquarter/` |
| Contact Us | `/en/contact/` or anchor |
| Starlink | `/en/our-offer/starlink-portfolio/` |

### Acceptance criteria

- [ ] 4 link columns + brand column aligned to same grid as header `max-width`
- [ ] All links functional (no 404)
- [ ] Footer uses `<footer role="contentinfo">`

---

## 6. Social Link Accessibility

### Problem

Social links have empty text - screen readers announce “link” with no name.

### Fix

```html
<a href="https://www.facebook.com/iectelecomofficial/"
   aria-label="IEC Telecom on Facebook"
   target="_blank"
   rel="noopener noreferrer">
  <svg aria-hidden="true" focusable="false">...</svg>
</a>

<a href="https://www.youtube.com/user/IECTELECOM"
   aria-label="IEC Telecom on YouTube"
   target="_blank"
   rel="noopener noreferrer">
  <svg aria-hidden="true" focusable="false">...</svg>
</a>

<a href="https://www.linkedin.com/company/iec-telecom-group/"
   aria-label="IEC Telecom on LinkedIn"
   target="_blank"
   rel="noopener noreferrer">
  <svg aria-hidden="true" focusable="false">...</svg>
</a>
```

- Remove or update deprecated Twitter/X link if account inactive
- Icon size: 24×24, touch target 44×44

### Acceptance criteria

- [ ] axe DevTools: no “links must have discernible text” errors for social

---

## 7. Homepage Copy Fixes

### H1

**Current (~100 chars):**  
`DIGITALISATION ENABLED BY SATELLITE NETWORK MANAGEMENT SOLUTIONS AND SATELLITE COMMUNICATION SERVICE`

**Phase 1 target (≤70 chars, sentence case):**  
`Global satellite connectivity for maritime and remote operations`

- Update in WordPress page editor or ACF field
- Single `<h1>` per page
- Remove ALL CAPS styling via CSS if applied with `text-transform: uppercase`

### CTA grammar

| Current | Fixed |
|---------|-------|
| Lets talk | Let's talk |

### Acceptance criteria

- [ ] One H1, readable, no forced uppercase
- [ ] CTA uses correct apostrophe

---

## 8. Vertical Market Naming Sync

Apply on homepage widget and anywhere visible in Phase 1 (menu text if editable in WP menu admin):

| Current | Standardized |
|---------|--------------|
| Yachting | Superyachts |
| humanitarian | Humanitarian |
| Energy - Inland | Energy – Onshore |
| Energy - Offshore | Energy – Offshore |

### Acceptance criteria

- [ ] Homepage vertical markets match menu labels
- [ ] Document full rename for Phase 2 URL slugs

---

## 9. Semantic Landmarks

### Required landmarks

```html
<header role="banner">...</header>
<main id="main-content">...</main>
<footer role="contentinfo">...</footer>
```

- Wrap page content in `<main>` - skip link optional: `<a href="#main-content" class="skip-link">Skip to content</a>`
- One `<h1>` inside `<main>`

### Acceptance criteria

- [ ] Lighthouse: proper landmark structure
- [ ] No duplicate `banner` or `contentinfo` roles

---

## 10. Copyright & Legal

- Update footer text: `© 2026 IEC Telecom. All Rights Reserved.`
- Keep Legal Notices and Privacy Policy in footer bottom bar
- Cookie banner: reduce height if theme allows (optional Phase 1 nice-to-have)

---

## Design Tokens (Phase 1 Minimum)

Use consistently across header/footer/news fixes:

```css
:root {
  --color-primary: #003366;
  --color-primary-hover: #0055a4;
  --color-text: #1a2b3c;
  --color-text-muted: #5a6b7d;
  --color-bg: #ffffff;
  --color-bg-alt: #f5f7fa;
  --color-border: #e2e8f0;

  --font-sans: "Myriad Pro", "Segoe UI", Arial, sans-serif;

  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 48px;

  --header-height: 72px;
  --container-max: 1440px;
}
```

*Phase 3 may replace `--font-sans` with new brand font.*

---

## File / Theme Change Map

| Area | Likely file(s) | Change type |
|------|----------------|-------------|
| Header | `header.php`, `style.css`, theme builder header | CSS + HTML semantics |
| News | Homepage template, `news-v2` CSS class | CSS |
| Footer | `footer.php`, widget area | HTML + CSS |
| Favicon | Child theme root, `functions.php` enqueue | Assets |
| H1 / CTA | Homepage WP editor / ACF | Content |
| Menus | WP Admin → Menus | Label text only |

**Recommendation:** Use **child theme** for all CSS/PHP changes to preserve parent theme updates.

---

## QA Test Plan

### Visual regression

- [ ] Desktop 1440px - header alignment
- [ ] Desktop 1280px - footer columns
- [ ] Tablet 768px - footer 2-column
- [ ] Mobile 375px - header wrap, touch targets

### Accessibility (smoke)

- [ ] axe DevTools: 0 critical on homepage
- [ ] News section contrast ≥ 4.5:1 body text, ≥ 3:1 large text
- [ ] Tab through header links in logical order
- [ ] Social links announce platform name

### Functional

- [ ] All footer links return 200
- [ ] Favicon loads (no 500 on SVG)
- [ ] No layout shift on header (CLS)

### Browsers

- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

---

## Deployment Steps

1. Create staging branch / staging subdomain  
2. Implement child theme changes  
3. Upload favicon assets  
4. Content updates (H1, labels, copyright) in staging CMS  
5. QA sign-off on checklist above  
6. Deploy to production in low-traffic window  
7. Purge CDN/cache (if applicable)  
8. Post-deploy smoke test on live URL  

### Rollback

- Keep parent theme untouched; revert child theme activation or CSS file only

---

## Phase 1 → Phase 2 Handoff

Document for Phase 2 team:

| Item | Phase 1 state | Phase 2 action |
|------|---------------|----------------|
| Menu structure | Unchanged (hamburger) | Replace with mega-menus |
| URLs | Unchanged | Implement sitemap redirects |
| Homepage form | Still on homepage | Move to `/contact/` |
| News count | 7 items (readable) | Reduce to 3 cards |
| Footer links | Point to old paths | Update after URL migration |

---

## Sign-Off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Client stakeholder | | | |
| Design lead | | | |
| Development lead | | | |
| QA | | | |

---

*Related documents: [UX Audit Report](./iec-telecom-ux-audit-report.md) · [PDF Outline](./iec-telecom-client-pdf-outline.md) · [Figma Sitemap](./iec-telecom-figma-sitemap.md)*
