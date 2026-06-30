# PDF Screenshot Shot List — IEC Telecom Redesign

**Purpose:** Exact capture list for the client-facing PDF ([PDF outline](./iec-telecom-client-pdf-outline.md))  
**Site:** [https://iec-telecom.com/en/](https://iec-telecom.com/en/)  
**Related:** [UX Audit](./iec-telecom-ux-audit-report.md) · [Phase 1 Spec](./iec-telecom-phase-1-implementation-spec.md)

---

## Capture Standards

| Setting | Value |
|---------|-------|
| Browser | Chrome (latest) |
| Desktop viewport | **1440 × 900** |
| Zoom | 100% |
| Format | PNG @ 2× (2880px wide for full-width shots) |
| Cookies | Accept All before capture (except shot 14) |
| Naming | `01-cover-homepage.png`, `02-header-alignment.png`, etc. |
| Annotations | Red `#E53935`, 2px stroke, 14px labels; max 4 callouts per image |

---

## A. Required Live-Site Screenshots

### 01 — Cover / Executive Summary Hero

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Capture** | Full viewport, top of page (hero + header visible) |
| **PDF page** | Cover (p.1), optionally Executive Summary (p.3) |
| **Annotate** | Small “CURRENT STATE” badge top-left; no red callouts on cover |
| **Why** | Sets context — first thing stakeholders see |

---

### 02 — Header Alignment (Close-Up)

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Capture** | Crop header only: logo left + nav right (Search, OptiView, OptiSim, Support, Contact Us, Menu, EN) |
| **PDF page** | Methodology grid (p.6), Current State 4.1 (p.7), Visual Design 7.3 (p.15) |
| **Annotate** | ① Red line on logo vertical center ② Red line on nav vertical center ③ “Misaligned baselines” ④ Optional: diagonal gray background — “Visual noise” |
| **Why** | Primary flagged issue — must be visually obvious |

---

### 03 — Favicon in Browser Tab

| Field | Detail |
|-------|--------|
| **URL** | Any page on `iec-telecom.com` |
| **Capture** | Crop browser tab area: favicon + “IEC Telecom” tab title |
| **PDF page** | Current State 4.1 (p.7) |
| **Annotate** | Arrow to favicon + “Gradient background — illegible at 16×16” |
| **Why** | Supports favicon finding; zoom crop if needed |

---

### 04 — Full-Screen Menu Open (Desktop)

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Action** | Click **Menu** to open overlay |
| **Capture** | Full viewport — all 3 columns of links visible |
| **PDF page** | Methodology grid (p.6), Current State 4.2 (p.7–8), UX & Navigation 6.1 (p.12) |
| **Annotate** | ① “60+ links — no categorization in nav” ② Box around long “Value Added Services” column ③ “Starlink buried here” arrow to Our Offer ④ “Duplicate: Support / Contact” |
| **Why** | Core IA problem |

---

### 05 — Visible vs Hidden Nav (Comparison)

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Capture** | Two panels in one image (compose in Figma): **Left:** header with only 4 links visible **Right:** menu open showing full list |
| **PDF page** | Executive Summary (p.4), Key Findings P0 (p.10) |
| **Annotate** | Left: “Visible without Menu” · Right: “Hidden behind Menu” |
| **Why** | One glance shows the IA problem |

---

### 06 — Featured News Section (Contrast Failure)

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Action** | Scroll until “FEATURED NEWS” + article headlines fully visible |
| **Capture** | News block only — black background + dark blue/purple headlines |
| **PDF page** | Methodology grid (p.6), Current State 4.3 (p.8), Accessibility (p.20) |
| **Annotate** | ① “Fails WCAG contrast” ② Sample headline with contrast ratio from picker (e.g. “~2.5:1 — needs 4.5:1”) |
| **Why** | P0 accessibility issue |

---

### 07 — Hero Section (Weak Messaging)

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Capture** | Hero only: ship image, “ENABLING DIGITAL”, `#satellite` hashtag, no clear CTA |
| **PDF page** | Current State 4.3 (p.8), Homepage strategy 8.1 (p.17) |
| **Annotate** | ① “Vague value proposition” ② “No primary CTA in hero” ③ “Busy background competes with text” |
| **Why** | Homepage hierarchy problem |

---

### 08 — Homepage H1 + Body Copy Block

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Action** | Scroll to long ALL CAPS H1 and first paragraph |
| **Capture** | H1 + 2–3 paragraphs below |
| **PDF page** | Current State 4.3 (p.8), Appendix B naming (p.30) |
| **Annotate** | ① “100+ character H1” ② “Keyword repetition” — highlight “satellite communication” instances |
| **Why** | SEO/content quality finding |

---

### 09 — Vertical Markets Widget (Naming Inconsistencies)

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Action** | Scroll to Maritime / Land tabs section |
| **Capture** | Full widget showing link labels |
| **PDF page** | Appendix B (p.30) |
| **Annotate** | Callouts: “Yachting” vs menu “Superyachts”, “humanitarian” lowercase, “Energy - Inland” vs “Energy – Onshore” |
| **Why** | Naming inconsistency evidence |

---

### 10 — “Why IEC Telecom?” Text Wall (Optional)

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Capture** | Section with heading + dense paragraphs |
| **PDF page** | Current State 4.3 (p.8) |
| **Annotate** | “Text-heavy — no stats, icons, or proof points” |
| **Why** | Content density / scanability |

---

### 11 — Contact Form on Homepage

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Action** | Scroll to “CONTACT US” form |
| **Capture** | Full form: fields, reCAPTCHA, SEND button |
| **PDF page** | Current State 4.3 (p.8), Homepage strategy 8.3 (p.17), Accessibility (p.20) |
| **Annotate** | ① “9 fields on homepage” ② “Placeholder-only labels — a11y issue” on 2–3 fields ③ “Form should live on /contact” |
| **Why** | Homepage overload + form a11y |

---

### 12 — “Find Your Nearest Office” + Gradient Button

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Capture** | Section with heading + “IEC Telecom offices” gradient button |
| **PDF page** | Visual Design 7.2 (p.15) |
| **Annotate** | “Dated gradient button style” |
| **Why** | UI pattern / brand polish |

---

### 13 — Footer (Full Width)

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Action** | Scroll to bottom; dismiss cookie banner if it covers footer |
| **Capture** | Entire footer: tagline, legal links, social icons, copyright |
| **PDF page** | Methodology grid (p.6), Current State 4.4 (p.9), Footer section (p.19) |
| **Annotate** | ① “Only 2 legal links” ② “No sitemap columns” ③ “© 2025 outdated” ④ “Social icons — no accessible labels” ⑤ “Misaligned layout” if visible |
| **Why** | Minimal footer / alignment issue |

---

### 14 — Cookie Consent Banner

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` (incognito / fresh session) |
| **Capture** | Homepage with cookie bar visible over content |
| **PDF page** | Current State 4.3 (p.8) — optional |
| **Annotate** | “Blocks primary content on first visit” |
| **Why** | First-visit UX friction |

---

### 15 — Full Homepage Scroll (Single Long Image)

| Field | Detail |
|-------|--------|
| **URL** | `https://iec-telecom.com/en/` |
| **Capture** | Full-page screenshot (Chrome DevTools → Capture full size screenshot, or GoFullPage extension) |
| **PDF page** | Appendix or Current State overview (p.7) |
| **Annotate** | Numbered markers on the right: 1 Header, 2 Hero, 3 News, 4 H1, 5 Markets, 6 Why IEC, 7 Contact form, 8 Footer |
| **Why** | One-page site anatomy for stakeholders |

---

## B. Mobile Screenshots (3 Required)

Use **iPhone 14 Pro** (393 × 852) in Chrome DevTools device mode.

| ID | Capture | PDF page | Annotate |
|----|---------|----------|----------|
| **16** | Header + Menu button | UX & Navigation (p.14) | “Same hamburger on mobile — acceptable; problem is desktop” |
| **17** | Menu open (scroll top) | UX & Navigation (p.14) | “Long scroll — 60+ links” |
| **18** | Contact form on mobile | Homepage 8.3 (p.17) | “Cramped multi-column form” |

---

## C. Tool-Generated Captures

| ID | What to capture | How | PDF page |
|----|-----------------|-----|----------|
| **19** | Lighthouse Accessibility score (homepage) | Chrome DevTools → Lighthouse → Accessibility | Accessibility (p.20), Success Metrics (p.28) |
| **20** | Lighthouse Performance score | Same, Performance tab | Success Metrics (p.28) — baseline |
| **21** | axe DevTools violations list | axe extension on homepage | Accessibility (p.20), Appendix C |
| **22** | Contrast pass/fail table | Build in Figma from picker values on news section | Accessibility (p.20) — designed graphic, not raw screenshot |

---

## D. Competitor Screenshots (3 Required)

Capture **header + primary nav only** from desktop (1440px). Credit site names in PDF.

| ID | Suggested site | What to show | PDF page |
|----|----------------|--------------|----------|
| **23** | [Inmarsat](https://www.inmarsat.com/) or similar satcom B2B | Solutions / Industries in top nav | Competitive (p.21) |
| **24** | [KVH](https://www.kvh.com/) or [Speedcast](https://www.speedcast.com/) | Clear hero + nav structure | Competitive (p.21) |
| **25** | Any enterprise telecom corporate site | Structured footer with columns | Competitive (p.21) |

**Annotate each:** One bullet — what they do better (e.g. “Industries in primary nav”, “No desktop hamburger”).

---

## E. Designed Visuals (Wireframes — Not Live Screenshots)

Create in Figma. These are mockups, not site captures.

| ID | Create in Figma | PDF page |
|----|-----------------|----------|
| **26** | “Today vs Proposed” summary (2 columns) | Executive Summary (p.4) |
| **27** | 2×2 Impact/Effort matrix | Key Findings (p.11) |
| **28** | Proposed two-row header + mega-menu open | UX & Navigation (p.13–14) |
| **29** | Current header vs proposed header (side-by-side) | Visual Design (p.16) |
| **30** | Proposed homepage wireframe (blocks only) | Homepage strategy (p.18) |
| **31** | Proposed 5-column footer wireframe | Footer (p.19) |
| **32** | Sitemap tree diagram | IA (p.23) |
| **33** | Phase 1–4 Gantt timeline | Roadmap (p.26) |
| **34** | Mood board (4–6 tiles) | Design Direction (p.24–25) |

---

## F. Methodology Page — 4-Up Grid Layout

**Page 6** uses one composite. Combine these four crops:

```
┌─────────────────┬─────────────────┐
│  02 Header      │  04 Menu open    │
├─────────────────┼─────────────────┤
│  06 News        │  13 Footer       │
└─────────────────┴─────────────────┘
```

---

## G. Minimum vs Ideal Shot Count

| Tier | Screenshots | Count |
|------|-------------|-------|
| **Minimum viable PDF** | 01, 02, 04, 05, 06, 07, 11, 13, 23–25, + wireframes 26–28 | ~12 live + 3 competitor + 3 mockups |
| **Recommended** | All of Section A (01–15) + mobile 16–18 + tools 19–21 | 21 captures |
| **Full package** | Everything above + 15 full-page + all wireframes | 34 assets total |

---

## H. Capture Checklist

```
[ ] 01  Homepage hero (cover)
[ ] 02  Header alignment close-up
[ ] 03  Favicon in tab
[ ] 04  Menu open — full overlay
[ ] 05  Visible nav vs hidden menu (composite)
[ ] 06  Featured News contrast
[ ] 07  Hero messaging
[ ] 08  H1 + keyword paragraph
[ ] 09  Vertical markets naming
[ ] 10  Why IEC text section (optional)
[ ] 11  Homepage contact form
[ ] 12  Office CTA gradient button
[ ] 13  Footer full
[ ] 14  Cookie banner (incognito)
[ ] 15  Full-page homepage scroll
[ ] 16–18  Mobile header, menu, form
[ ] 19–21  Lighthouse + axe scores
[ ] 23–25  Competitor nav/footer shots
[ ] 26–34  Figma wireframes and diagrams
```

---

## I. PDF Page → Screenshot Map

| PDF page | Section | Screenshots / assets |
|----------|---------|----------------------|
| 1 | Cover | 01 |
| 3–4 | Executive Summary | 01, 05, 26 |
| 6 | Audit Methodology | 02, 04, 06, 13 (4-up grid) |
| 7 | Current State — First impression | 02, 03 |
| 7–8 | Current State — Navigation | 04, 05 |
| 8 | Current State — Homepage | 06, 07, 08, 11, 14, 15 |
| 9 | Current State — Footer | 13 |
| 10–11 | Key Findings | 05, 27 |
| 12–14 | UX & Navigation | 04, 16, 17, 28 |
| 15–16 | Visual Design | 02, 12, 29 |
| 17–18 | Homepage Strategy | 07, 08, 11, 18, 30 |
| 19 | Footer | 13, 31 |
| 20 | Accessibility | 06, 11, 19, 21, 22 |
| 21 | Competitive | 23, 24, 25 |
| 23 | Information Architecture | 32 |
| 24–25 | Design Direction | 34 |
| 26 | Roadmap | 33 |
| 28 | Success Metrics | 19, 20 |
| 30 | Appendix B — Naming | 08, 09 |

---

## J. Technical Tips

1. **Hide cookie bar** for shots 02, 04, 06–13 — click Accept All first; use incognito only for shot 14.
2. **Consistent browser chrome** — either include Chrome UI in all shots or crop to content only; do not mix.
3. **Export** — PNG for photos; SVG/PDF for wireframes.
4. **File size** — compress PNGs with TinyPNG; aim under 500KB each, under 15MB total PDF.
5. **Existing references** — header (shot 02) and menu (shot 04) may be sourced from prior audit captures; re-capture at 1440×900 for consistency.

---

*Document version: 1.0 · June 2026*
