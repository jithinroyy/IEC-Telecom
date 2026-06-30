# IEC Telecom Website - UX/UI Audit & Redesign Recommendations

**Site reviewed:** [https://iec-telecom.com/en/](https://iec-telecom.com/en/)  
**Audit date:** 30 June 2026  
**Site type:** Corporate B2B - satellite communications  
**Platform:** WordPress (assets dated 2020–2021; section classes such as `section1-v2`, `news-v2`)

**Related deliverables:**

- [Client-facing PDF outline](./iec-telecom-client-pdf-outline.md)
- [Figma-ready sitemap](./iec-telecom-figma-sitemap.md)
- [Phase 1 implementation spec](./iec-telecom-phase-1-implementation-spec.md)

---

## Executive Summary

IEC Telecom’s website communicates credibility as a global satellite operator, but the experience feels dated and difficult to navigate. The most critical problems are:

1. **Navigation hides the business** - core offerings sit behind a full-screen hamburger menu on desktop.
2. **Visual polish gaps** - header misalignment, poor contrast, inconsistent naming, and gradient-heavy UI undermine trust.
3. **Homepage overload** - long hero copy, a 7-item news block, vertical markets, a full contact form, and a large cookie bar compete for attention.
4. **Footer underperforms** - minimal links, poor alignment, and weak corporate presence.

For a corporate telecom site, visitors should quickly understand *what IEC offers*, *who it serves*, *why IEC*, and *how to get in touch*. Today that path requires too many clicks and too much scanning.

---

## 1. Brand & Visual Identity

### Issues

| Issue | Severity | Details |
|-------|----------|---------|
| Favicon with gradient background | Medium | Gradient favicons read poorly at 16×16 in browser tabs and bookmarks. Corporate sites typically use a flat mark on a solid brand color or transparent background. |
| Aging asset pipeline | Medium | Logo from 2020, favicon from 2021 - suggests no recent brand refresh on the web layer. |
| Inconsistent typography | Medium | Mix of Myriad Pro, Arial, and Times New Roman. No clear type scale. |
| Overuse of ALL CAPS | Medium | Headings, nav, and H1 are difficult to scan (`DIGITALISATION ENABLED BY SATELLITE NETWORK MANAGEMENT...`). |
| Gradient buttons | Low–Medium | “IEC Telecom Offices”, “SEND”, language pill - gradients feel dated vs. modern flat corporate UI. |
| Header background treatment | Low | Diagonal white/gray split behind logo adds noise without improving hierarchy. |

### Recommendations

- **Favicon:** Single-color “IEC” mark or swoosh on brand navy (`#003366` or equivalent), no gradient. Provide ICO, SVG, and apple-touch-icon variants.
- **Type system:** One sans-serif family (e.g. Inter, DM Sans, or licensed corporate face), 4–5 defined sizes, sentence case for body copy.
- **Color tokens:** Primary navy, secondary blue, neutrals, one accent - document and reuse sitewide.
- **Retire decorative gradients** on CTAs; use solid fill with clear hover states.

---

## 2. Header & Navigation

### Alignment & Layout Issues

- Logo and right-side navigation are **not vertically centered** on the same baseline.
- Logo sits in one visual band; links, search, and language selector sit higher - creates a “broken” first impression.
- No semantic `<header>` landmark detected in DOM - hurts SEO, accessibility, and maintainability.

### Information Architecture Issues

**Currently visible:** Search · OptiView · OptiSim · Support · Contact Us · MENU · EN

**Hidden behind MENU (~60+ links across 9 groups):**

- About Us (Introduction, History, Management)
- Our Partners (Satellite Operators, Equipment Manufacturers, Application Partners)
- Regional Offices (10 countries)
- Value Added Services (12+ products)
- Vertical Markets (Land + Maritime)
- Our Offer (All Products, Starlink Portfolio)
- Support (duplicate of header)
- News (6 subtypes)
- Contact (duplicate of header)

| Problem | Impact |
|---------|--------|
| Hamburger menu on desktop | Extra click for primary journeys; unusual for enterprise telecom |
| “Our Offer” / Starlink buried | Revenue paths hidden |
| “Vertical Markets” buried | Industry segmentation not visible |
| “About Us” / “News” hidden | Weak trust and thought leadership signals |
| Duplicate Support & Contact | Confusing; wastes header space |
| Inconsistent casing | `OptiView` vs `OPTISIM` vs `Support` vs `Contact Us` |
| Regional offices as flat list | Hard to scan; no map or region grouping |
| VALUE ADDED SERVICES column overload | 12 items in one column - cognitive overload |

### Recommended Navigation Model

**Row 1 - Primary (always visible)**  
`Solutions` · `Industries` · `Products & Services` · `About` · `News` · `Contact`  
+ Search · Language · `Client Portals` (OptiView / OptiSim)

**Row 2 - Secondary (optional)**  
`Starlink` · `Maritime` · `Land` · `Support` · `Regional Offices` · `Become a Partner`

**Hover mega-menus (grouped):**

```
Solutions              Industries              Products & Services
├─ Satellite Comms     ├─ Maritime             ├─ OptiView
├─ Starlink Portfolio  │  ├─ Shipping          ├─ OptiSim
├─ Hybrid Connectivity │  ├─ Fishing           ├─ OptiShield
└─ Managed Services    │  └─ Offshore Energy   └─ View all services
                       └─ Land
                          ├─ Government
                          └─ Enterprise
```

**Behavior:**

- Desktop: hover/focus mega-menu, max 3 columns, short descriptions for flagship products.
- Mobile: accordion by section (not one 60-link list).
- Sticky header with consistent 72px height, `align-items: center`.
- Move OptiView/OptiSim under **Client Portals** dropdown.

**Alignment fix:**

```css
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  padding: 0 24px;
}
.site-header .logo,
.site-header .nav-actions {
  display: flex;
  align-items: center;
}
```

---

## 3. Full-Screen Menu Overlay

### Issues

- Full viewport takeover - disorienting; user loses page context.
- Uneven columns - Value Added Services column much longer than others.
- Weak visual hierarchy - bold headings and sub-links share similar weight.
- No icons or descriptions for product names (e.g. “OneAssist – Remote Maintenance”).
- Staggered layout - Vertical Markets starts lower than Regional Offices.
- No in-menu search for 60+ links.
- Close affordance (“MENU” + X) is easy to miss.

### Recommendations

- Replace full-screen overlay with **in-place mega-menu** under header.
- Cap 7±2 items per group; use “View all” for long lists.
- Add featured tile in mega-menu (e.g. Starlink, latest news).
- Group regional offices by region: Europe · Middle East · Asia-Pacific · Africa.
- Support keyboard focus; trap focus only on mobile sheet.

---

## 4. Homepage Content & Layout

### Hero Section

| Issue | Details |
|-------|---------|
| Weak value proposition | “ENABLING DIGITAL” / `#satellite` is vague for B2B buyers |
| Busy background | Ship + map + network lines compete with text |
| No primary CTA in hero | “Lets talk” appears below the fold |
| H1 too long (~100 characters) | Poor for SEO snippets and screen readers |
| Keyword repetition | “satellite communication” repeated excessively in opening paragraph |

**Suggested hero:**

- **Headline (8–12 words):** “Global Satellite Connectivity for Maritime & Remote Operations”
- **Subhead:** 25+ years, governments & enterprise, 24/7 support
- **CTAs:** `Explore Solutions` (primary) + `Contact Sales` (secondary)
- **Trust strip:** partner logos or “25+ years · 10+ offices · 24/7 support”

### Featured News Section

| Issue | Severity |
|-------|----------|
| Dark blue text on black background | **Critical** - fails WCAG contrast |
| 7 news items at once | High - overwhelming |
| Abrupt black band vs white hero | Medium - harsh transition |

**Fix:** Light background, dark text, show 3 items + “View all news”. Use cards with image, title, date, and category tag.

### Body Sections

- **“Why IEC Telecom?”** - solid content but text-heavy; add icons or stat blocks.
- **Vertical markets widget** - good homepage feature; naming must match menu (`Yachting` vs `Superyachts`, `humanitarian` lowercase, `Energy - Inland` vs `Energy – Onshore`).
- **Contact form on homepage** - 9 fields + reCAPTCHA is heavy; use short CTA linking to `/contact`.

### Cookie Consent

- Large banner blocks content on first visit.
- **Fix:** Compact bottom bar; persist choice; avoid covering primary CTAs.

---

## 5. Footer

### Current State

- Tagline: “MANAGED SATCOM SOLUTIONS”
- Links: Legal Notices, Privacy Policy only
- Social: Facebook, YouTube, Twitter/X, LinkedIn - icon links with **empty accessible text**
- Copyright: © 2025 (stale)
- Poor alignment and spacing

### Missing for Corporate Site

- Company links (About, Careers, Partners, Offices)
- Solution links (Maritime, Land, Starlink, Products)
- Support (Download center, HQ, UAE)
- Contact (worldwide, become partner)
- HQ address / phone
- Newsletter or “Stay updated”

### Recommended Footer (5 Columns)

```
[Logo + 2-line mission]

Company          Solutions         Support           Connect
About Us         Maritime          Support HQ        Worldwide contacts
History          Land              Download Center   Become a partner
Management       Starlink          OptiView login    Social links
Careers          All products      OptiSim login
Regional offices Value-added svcs

────────────────────────────────────────────────────────────
© 2026 IEC Telecom  |  Legal  |  Privacy  |  Cookie settings
```

Use 12-column grid, consistent gutters, `max-width` container aligned with header.

---

## 6. UX & Information Architecture

### Site Map Problems

- No clear primary taxonomy: product vs industry vs region - all exist, none leads.
- OptiView & OptiSim are products and portals - group under “Platforms”.
- News has 6 subtypes - one nav item with filters on listing page is sufficient.
- Partners split three ways - could be one page with tabs.

### User Journey Friction

| Persona | Current friction | Fix |
|---------|------------------|-----|
| Shipping fleet manager | MENU → Vertical Markets → Maritime | Top nav: Industries → Maritime |
| Government buyer | Same buried path | Industries → Land → Government |
| Existing customer | OptiView in header (good) | Add “Client login” grouping |
| Press/analyst | News hidden | Top-level News + footer link |
| Partner prospect | “Become Our Partner” only in menu | Footer + About CTA |

### Search

- Search icon scope is unclear.
- **Fix:** Global search with categorized results (pages, news, products, PDFs).

---

## 7. Accessibility (WCAG 2.1 AA Target)

| Issue | WCAG impact |
|-------|-------------|
| News text contrast | Fail 1.4.3 Contrast (Minimum) |
| Placeholder-only form labels | Fail 1.3.1 / 3.3.2 |
| Social links with no accessible name | Fail 2.4.4 / 4.1.2 |
| ALL CAPS H1 | Harder for dyslexia / screen readers |
| No `<header>` landmark | Fail 1.3.1 Info and Relationships |
| Menu keyboard trap unclear | Risk on 2.1.2 No Keyboard Trap |
| Language selector “EN” only | Should expose full language name |

---

## 8. Content & SEO

- Title tag pattern is generic - inner pages need unique titles.
- Meta description exists on homepage - ensure per-page descriptions.
- H1 should be one clear phrase, not a keyword string.
- Reduce duplicate phrasing (“satellite communication services” repeated ~9× on homepage).
- Standardize spelling: digitalization vs digitalisation per locale.
- Fix “Lets talk” → “Let’s talk”.
- Mirror vertical market naming sitewide.

---

## 9. Technical & Performance

- WordPress theme with layered “v2” sections - incremental patches, not unified design system.
- Large hero imagery - optimize WebP/AVIF, lazy-load below fold.
- Full country list in contact form DOM - use async country picker.
- reCAPTCHA on homepage form - consider dedicated contact page.
- Favicon SVG returned 500 when fetched - verify CDN/cache.
- Mixed asset ages (2020 logo) - audit stale assets.

---

## 10. Mobile & Responsive (Expected Issues)

- Same hamburger with 60+ links on small screens.
- Full-screen menu scroll fatigue.
- Hero text over busy image.
- Multi-column contact form cramped.
- Small language pill touch targets.

**Fix:** Bottom sticky “Contact” on mobile; accordion nav; single-column form; 44px minimum touch targets.

---

## 11. Competitive Benchmark

Modern B2B telecom/satcom sites typically provide:

- Clear Solutions / Industries in top nav
- Outcome-focused hero + proof points
- Partner/certification logos
- Structured footer with full sitemap
- Separate contact vs product exploration flows
- No desktop hamburger for primary navigation

IEC Telecom’s **content depth is strong**; the **presentation layer** lags these benchmarks.

---

## Prioritized Redesign Roadmap

### Phase 1 - Quick Wins (1–2 weeks)

1. Fix header vertical alignment + consistent nav casing
2. Fix news section contrast (critical a11y)
3. New favicon (flat, no gradient)
4. Footer: 4-column links, alignment, copyright, social labels
5. Shorten H1; fix “Let’s talk”
6. Unify vertical market naming

### Phase 2 - Navigation Restructure (2–4 weeks)

1. Two-row nav with hover mega-menus
2. Remove full-screen menu on desktop
3. Group Value Added Services; elevate Starlink & Industries
4. Client Portals dropdown for OptiView/OptiSim

### Phase 3 - Homepage & Design System (4–8 weeks)

1. New hero with clear CTAs and trust strip
2. Reduce news to 3 cards
3. Move contact form to dedicated page
4. Typography + color tokens + component library
5. WCAG audit and remediation

### Phase 4 - Content & Polish

1. Rewrite homepage copy (reduce keyword stuffing)
2. Regional offices map/interactive component
3. Search redesign
4. Performance budget (LCP, CLS)

---

## Wireframe - Two-Row Navigation Concept

```
┌─────────────────────────────────────────────────────────────────────────┐
│ [IEC telecom logo]     Solutions ▾  Industries ▾  Products ▾  About    │
│                        News  Contact          🔍  Client Portals ▾  EN  │
├─────────────────────────────────────────────────────────────────────────┤
│  Starlink  |  Maritime  |  Land  |  Support  |  Offices  |  Partners  │
└─────────────────────────────────────────────────────────────────────────┘
         │ hover │
         ▼       ▼
    ┌──────────────────┐
    │ Mega-menu panel  │  3 cols, icons, "View all"
    └──────────────────┘
```

---

## Observation Validation

| Observation | Valid | Additional notes |
|-------------|-------|------------------|
| Favicon gradient | Yes | Replace with flat brand mark |
| Logo/nav misalignment | Yes | Flexbox `align-items: center` on single header row |
| Important links hidden in menu | Yes | ~90% of IA behind MENU on desktop |
| Menu is huge uncategorized list | Yes | 9 sections, 60+ links, uneven columns |
| Two-row nav + hover dropdowns | Recommended | Matches B2B best practice |
| Minimal misaligned footer | Yes | Only 2 legal links; social a11y broken |

---

*Document version: 1.0 · Prepared for IEC Telecom website redesign project*
