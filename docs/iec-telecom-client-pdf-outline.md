# IEC Telecom Website Redesign - Client-Facing PDF Outline

**Document purpose:** Structure for a polished PDF presentation to IEC Telecom stakeholders.  
**Recommended length:** 24–32 pages  
**Tone:** Professional, constructive, solution-oriented  
**Audience:** Marketing, leadership, IT/web team

---

## Cover (Page 1)

**Title:** IEC Telecom Website Redesign - Discovery & Recommendations  
**Subtitle:** UX/UI Audit & Strategic Improvement Plan  
**Date:** June 2026  
**Prepared by:** [Agency / Team Name]  
**Confidentiality:** Client use only

**Visual:** Full-width hero mockup or current homepage with subtle “before” label

---

## Table of Contents (Page 2)

1. Executive Summary  
2. Project Context & Objectives  
3. Audit Methodology  
4. Current State Assessment  
5. Key Findings  
6. User Experience & Navigation  
7. Visual Design & Brand Presentation  
8. Homepage & Content Strategy  
9. Footer & Site-Wide Elements  
9. Accessibility & Compliance  
10. Competitive Landscape  
11. Recommended Solutions  
12. Proposed Information Architecture  
13. Design Direction  
14. Implementation Roadmap  
15. Investment & Phasing  
16. Success Metrics  
17. Next Steps  
Appendix

---

## 1. Executive Summary (Pages 3–4)

### 1.1 The Opportunity

IEC Telecom is a established global satellite communications operator with 25+ years of expertise, a broad product portfolio, and regional presence across 10+ offices. The website carries substantial content but does not reflect the company’s scale or simplify paths for key audiences.

### 1.2 Top-Line Findings (3–5 bullets)

- Primary navigation hides most of the site behind a desktop hamburger menu.
- Visual inconsistencies (alignment, contrast, typography) reduce perceived quality on first visit.
- Homepage combines too many goals - news, markets, contact form - without clear hierarchy.
- Footer provides minimal wayfinding for a corporate site of this scope.

### 1.3 Recommended Direction

- Restructure navigation into a two-tier system with categorized mega-menus.
- Establish a cohesive design system aligned with corporate brand standards.
- Redesign homepage around clear value proposition and guided user journeys.
- Implement Phase 1 quick wins within 1–2 weeks for immediate improvement.

### 1.4 Expected Outcomes

| Metric | Target |
|--------|--------|
| Time to key content | Reduce from 2+ clicks to 0–1 |
| WCAG contrast compliance | 100% on primary UI |
| Bounce rate on homepage | Measurable reduction post-launch |
| Contact form completion | Increase via dedicated contact flow |

**Visual:** Single summary infographic - “Today vs Proposed”

---

## 2. Project Context & Objectives (Page 5)

### 2.1 Background

- Current site: [iec-telecom.com/en/](https://iec-telecom.com/en/)
- Platform: WordPress
- Primary audiences: Maritime operators, land/enterprise/government, partners, press, existing clients (OptiView/OptiSim)

### 2.2 Business Objectives

1. Present IEC Telecom as a modern, trustworthy global leader  
2. Surface Starlink, vertical markets, and value-added services prominently  
3. Shorten paths to contact, support, and client portals  
4. Improve accessibility and SEO foundations  
5. Create a scalable design system for future content growth

### 2.3 Scope of This Document

- UX/UI audit findings  
- Strategic recommendations  
- Phased implementation plan  
- *Out of scope for this PDF:* final creative comps, development estimates (optional addendum)

---

## 3. Audit Methodology (Page 6)

### How We Evaluated the Site

| Method | Application |
|--------|-------------|
| Heuristic review | Nielsen usability principles, corporate web best practices |
| Live site walkthrough | Homepage, navigation, menu, footer, forms |
| Accessibility check | WCAG 2.1 AA contrast, landmarks, form labels, link text |
| Content review | Headlines, SEO, naming consistency, keyword density |
| IA mapping | Full menu inventory (~60 links), duplicate paths |
| Competitive scan | B2B satcom / telecom corporate sites |

**Visual:** Screenshot grid - header, menu open, news section, footer (annotated)

---

## 4. Current State Assessment (Pages 7–9)

### 4.1 First Impression

- Logo and navigation misaligned vertically in header  
- Diagonal header background adds visual noise  
- Favicon uses gradient - poor legibility at small sizes  

### 4.2 Navigation Snapshot

**Visible:** Search, OptiView, OptiSim, Support, Contact Us, Menu, Language  
**Hidden:** About, Partners, Offices, Products, Industries, News, 12+ value-added services

### 4.3 Homepage Snapshot

- Hero: vague messaging (“Enabling Digital”)  
- News: contrast failure (dark text on black)  
- Full contact form above minimal footer  
- Cookie banner dominates lower viewport  

### 4.4 Footer Snapshot

- Two legal links only  
- Social icons without accessible labels  
- Copyright year outdated  
- No sitemap-style navigation  

**Visual:** Annotated “pain point” callouts on live screenshots

---

## 5. Key Findings (Pages 10–11)

### Priority Matrix

| Priority | Finding | Business impact |
|----------|---------|-----------------|
| P0 | News section contrast failure | Legal/reputational (accessibility) |
| P0 | Core offerings hidden in menu | Lost leads, poor discoverability |
| P1 | Header alignment & visual polish | Trust erosion on first visit |
| P1 | Homepage lacks clear CTA hierarchy | Lower conversion |
| P1 | Minimal footer | Poor wayfinding, SEO |
| P2 | Favicon & dated UI patterns | Brand perception |
| P2 | Naming inconsistencies | Confusion across journeys |
| P2 | Homepage keyword stuffing | SEO quality signals |

**Visual:** 2×2 impact/effort matrix chart

---

## 6. User Experience & Navigation (Pages 12–14)

### 6.1 The Problem

Full-screen menu with 60+ links forces users to scan a wall of text. Critical paths (Industries, Starlink, About) require opening Menu first - non-standard for B2B corporate sites.

### 6.2 User Personas & Journeys

| Persona | Goal | Current friction |
|---------|------|------------------|
| Fleet manager | Maritime solutions | 2+ clicks, buried in menu |
| Government buyer | Land connectivity | Same |
| Existing client | OptiView login | Visible (good) |
| Partner | Become a partner | Hidden in menu |
| Journalist | Press/news | Hidden in menu |

### 6.3 Proposed Navigation

**Row 1:** Solutions · Industries · Products & Services · About · News · Contact  
**Row 2:** Starlink · Maritime · Land · Support · Offices · Partners  
**Utility:** Search · Client Portals · Language

### 6.4 Mega-Menu Principles

- Max 3 columns per dropdown  
- 7±2 links per group  
- Featured content tile (e.g. Starlink)  
- Mobile: accordion, not full-screen list  

**Visual:** Wireframe of two-row header + mega-menu expanded

---

## 7. Visual Design & Brand Presentation (Pages 15–16)

### 7.1 Typography

- Current: mixed Myriad Pro, Arial, Times New Roman  
- Proposed: single sans-serif family, defined scale, reduced ALL CAPS  

### 7.2 Color & UI

- Retire gradient buttons and favicon gradient  
- Define token set: primary, secondary, neutral, accent, semantic (error/success)  
- Consistent 8px spacing grid  

### 7.3 Header & Logo

- Vertically centered logo and nav (`align-items: center`)  
- Remove decorative diagonal header split or simplify to flat white/sticky bar  
- Sticky header on scroll with subtle shadow  

**Visual:** Side-by-side “current header” vs “proposed header” mockup

---

## 8. Homepage & Content Strategy (Pages 17–18)

### 8.1 Hero Redesign

- Outcome-focused headline (8–12 words)  
- Supporting subhead with proof points  
- Dual CTA: Explore Solutions + Contact Sales  
- Trust strip: years in business, offices, 24/7 support  

### 8.2 News Section

- Light background, 3 featured articles, “View all”  
- Category tags, readable contrast  

### 8.3 Contact Strategy

- Replace full homepage form with CTA block  
- Dedicated `/contact` page with optimized form  

### 8.4 Content Cleanup

- Shorten H1  
- Fix grammar (“Let’s talk”)  
- Unify vertical market naming  
- Reduce keyword repetition in body copy  

**Visual:** Homepage wireframe - proposed layout blocks

---

## 9. Footer & Site-Wide Elements (Page 19)

### Proposed 5-Column Footer

- Company · Solutions · Support · Connect · Logo/mission  
- Social links with accessible labels  
- © 2026, Legal, Privacy, Cookie settings  
- Grid-aligned with header container width  

**Visual:** Footer wireframe

---

## 10. Accessibility & Compliance (Page 20)

### Current Gaps

- Contrast failures in news section  
- Missing header landmark  
- Unlabeled social icons  
- Placeholder-only form fields  

### Target

WCAG 2.1 Level AA on all primary templates

**Visual:** Contrast pass/fail comparison table

---

## 11. Competitive Landscape (Page 21)

### Benchmark Themes (B2B Satcom / Telecom)

- Solutions and Industries in primary nav  
- Clear hero value proposition  
- Structured footer sitemap  
- No desktop hamburger for main IA  

**Visual:** 3 competitor nav screenshots (anonymized or credited) with bullet comparison

---

## 12. Recommended Solutions (Page 22)

### Solution Summary Table

| Area | Recommendation | Phase |
|------|----------------|-------|
| Navigation | Two-row + mega-menus | 2 |
| Header | Alignment, semantic HTML, sticky | 1 |
| Favicon | Flat mark, multi-format | 1 |
| News contrast | Light bg, 3 cards | 1 |
| Footer | 5-column sitemap | 1 |
| Homepage hero | New copy + CTAs | 3 |
| Design system | Tokens, components | 3 |
| Contact form | Move off homepage | 3 |

---

## 13. Proposed Information Architecture (Page 23)

High-level sitemap - reference full sitemap document:

- Home  
- Solutions (Satellite, Starlink, Hybrid, Managed)  
- Industries (Maritime, Land)  
- Products & Services (OptiView, OptiSim, OptiShield, + view all)  
- About (Introduction, History, Management, Partners)  
- Regional Offices  
- News (with filters)  
- Support  
- Contact  

**Visual:** Tree diagram (1 page, simplified)

---

## 14. Design Direction (Pages 24–25)

### Mood & Principles

- **Professional** - navy, white, restrained accent  
- **Global** - imagery of maritime, remote land, connectivity  
- **Clear** - generous whitespace, scannable hierarchy  
- **Trustworthy** - partner logos, stats, case study snippets  

### Component Preview List

- Primary / secondary buttons  
- Nav item + mega-menu panel  
- News card  
- Footer column  
- Form field (visible label)  
- Stat block  

**Visual:** Mood board - 4–6 reference tiles (not final brand)

---

## 15. Implementation Roadmap (Page 26)

### Timeline Overview

```
Phase 1 (Weeks 1–2)   Quick wins - header, footer, contrast, favicon
Phase 2 (Weeks 3–6)   Navigation restructure + mega-menus
Phase 3 (Weeks 7–14)  Homepage redesign + design system
Phase 4 (Ongoing)     Content, search, performance, offices map
```

**Visual:** Gantt-style horizontal timeline

---

## 16. Investment & Phasing (Page 27)

### Optional Pricing Framework

| Phase | Deliverables | Duration |
|-------|--------------|----------|
| Phase 1 | Spec + CSS/HTML fixes or WP theme patches | 1–2 weeks |
| Phase 2 | Nav component, mega-menu, mobile accordion | 2–4 weeks |
| Phase 3 | Homepage templates, design system, contact page | 4–8 weeks |
| Phase 4 | Content migration support, QA, performance | TBD |

*Customize with actual estimates before client presentation.*

---

## 17. Success Metrics (Page 28)

### KPIs to Track Post-Launch

| Category | Metric |
|----------|--------|
| Usability | Task completion rate (find Maritime, find Starlink, contact) |
| Engagement | Pages per session, time on key solution pages |
| Conversion | Contact form submissions, portal logins |
| SEO | Organic traffic, indexed pages, Core Web Vitals |
| Accessibility | Automated audit score (axe/Lighthouse) |

### Baseline Recommendation

Capture current analytics and Lighthouse scores before Phase 1 deployment.

---

## 18. Next Steps (Page 29)

1. **Stakeholder review** - approve findings and phasing  
2. **Brand asset audit** - logo, favicon, typography licensing  
3. **Sign-off Phase 1 spec** - begin quick wins  
4. **Workshop** - validate proposed IA with internal teams (sales, support, marketing)  
5. **Figma sitemap** - refine in design tool  
6. **Schedule Phase 2 kickoff** - navigation component design  

**Contact:** [Project lead name / email]

---

## Appendix A - Full Menu Inventory (Pages 30–31)

Complete list of current menu links grouped by section (from audit).

## Appendix B - Naming Inconsistencies Log

| Location | Current | Proposed |
|----------|---------|----------|
| Homepage | Yachting | Superyachts |
| Homepage | humanitarian | Humanitarian |
| Homepage | Energy - Inland | Energy – Onshore |
| Header | OptiView / OPTISIM | Consistent title case |

## Appendix C - WCAG Checklist Snapshot

Pass/fail table for audited elements.

## Appendix D - Glossary

- IA - Information Architecture  
- VAS - Value Added Services  
- WCAG - Web Content Accessibility Guidelines  
- CTA - Call to Action  

---

## PDF Production Notes

| Item | Recommendation |
|------|----------------|
| Page size | A4 or US Letter |
| Brand colors | IEC navy `#003366` (verify with client brand guide) |
| Fonts | Corporate sans for body; avoid system defaults in export |
| Screenshots | High-DPI, annotated with red callout boxes — see [Screenshot Shot List](./iec-telecom-pdf-screenshot-shot-list.md) |
| Export | Figma → PDF, or InDesign; keep file under 15MB |
| Versioning | v1.0 - [date] - [author] |

---

*This outline pairs with: [UX Audit Report](./iec-telecom-ux-audit-report.md) · [Screenshot Shot List](./iec-telecom-pdf-screenshot-shot-list.md) · [Figma Sitemap](./iec-telecom-figma-sitemap.md) · [Phase 1 Spec](./iec-telecom-phase-1-implementation-spec.md)*
