# Website QA, UX, SEO & Mobile Optimization Audit — BeameAI by LOGON

**Audited:** 2026-08-22 · **Method:** live crawl of all routes at `localhost:8080`, source inspection, rendered-HTML checks
**Basis:** 20-point production QA framework · **Status:** issues fixed where authorized, all validated

---

## Executive Summary

The site is in strong health: **all routes return correct status codes, zero dead internal links (71 checked), every public HTML page has unique title + meta description + canonical + OG + a single H1, forms have loading/success states, the 404 is styled, the copyright year is dynamic, and there is zero placeholder/lorem content.** Three real issues were found and fixed this pass (contact links, head metadata, duplicate font load). Remaining items are lower-severity polish or content decisions for the owner.

**Overall health: Production-ready** — with the P1 contact gap now closed.

---

## Issue Register

### P0 — Critical
**None found.**

### P1 — High

| # | Issue | Category | Page/Route | Evidence | Root cause | Fix (implemented) | Verification |
|---|---|---|---|---|---|---|---|
| 1 | **No clickable contact links** — a consultancy with no `tel:`/`mailto:` anywhere; the only email (`privacy@beameai.ng`) was plain text | Contact & conversion | Footer, /privacy | `grep tel:/mailto:` → 0 hits in src; privacy email rendered as text | Contact info never made actionable | Footer: added `mailto:hello@beameai.ng` (orange mono link). Privacy: Contact section renders `mailto:privacy@beameai.ng` as a real link | Both `href="mailto:…"` confirmed in rendered HTML |

### P2 — Medium

| # | Issue | Category | Page/Route | Evidence | Root cause | Fix (implemented) | Verification |
|---|---|---|---|---|---|---|---|
| 2 | **Missing head branding metadata** — no SVG favicon, apple-touch-icon, theme-color, or color-scheme (earlier additions lost in workspace resets) | Favicon & branding | All (root shell) | `__root.tsx` head only had `favicon.ico` | Sandbox resets reverted prior head work | Added `favicon.svg`, `apple-touch-icon` (og image), `theme-color: #211d16` (ink), `color-scheme: light dark` | All 4 confirmed in rendered HTML |
| 3 | **Duplicate/legacy font stylesheet** — two Google Fonts CSS loads; the second (Cormorant + DM Sans + Space Mono) is the old studio font set, unused by the chamfer design | Performance | All (root shell) | Two `fonts.googleapis.com/css2` links in `<head>` | Legacy scaffold font link never removed | Removed the legacy stylesheet; single font load remains (Poppins, Sofia Sans, IBM Plex Mono, Cormorant Garamond) | Rendered HTML now has exactly 1 css2 link |

### P3 — Low / verified-clean (no action)

| # | Check | Result |
|---|---|---|
| 4 | Horizontal scroll / mobile overflow | ✅ `body { overflow-x: hidden }`; card rails scroll internally with side clearance; tables `overflow-x-auto` |
| 5 | Broken internal links | ✅ 71 unique links, **0 dead** |
| 6 | Broken external links / rel safety | ✅ 121 external; all `_blank` carry `rel="noopener noreferrer"` (earlier heuristic flagged 5 — all multi-line-attribute false positives) |
| 7 | Mobile menu | ✅ Hamburger + mobile nav with body-scroll lock, machine-file links |
| 8 | Favicon | ✅ `favicon.ico` + new `favicon.svg` |
| 9 | Page titles / meta descriptions | ✅ unique + descriptive on all 14 public pages |
| 10 | Footer links | ✅ all resolve; legal (Privacy/Terms), machine files, socials |
| 11 | Custom 404 | ✅ styled, explains error, links home |
| 12 | Copyright year | ✅ dynamic `new Date().getFullYear()` |
| 13 | Images | ✅ all 3 `<img>` have alt + `loading="lazy"` + `decoding="async"`; chamfer clip-paths; aspect-ratio guard |
| 14 | Broken buttons | ✅ all buttons typed; CTAs unified to "Book a free AI Visibility Audit"; loader as global pending state |
| 15 | Success/error messages | ✅ forms: loading ("Sending…"), success ("Thanks…"), `aria-busy`, double-submit guard |
| 16 | Placeholder text / lorem / TODO | ✅ zero matches |
| 17 | Unused navigation | ✅ nav trimmed (Home/Services/Insights/Crawlability/Protocol Tracker/About); dead ReadyBand/JourneyCta removed earlier |
| 18 | Logo clickable | ✅ header + footer brand link home with aria-label |
| 19 | Heading hierarchy | ✅ exactly 1 H1 per page; H2/H3 semantic |
| 20 | Canonical / OG / structured data | ✅ canonical + OG + Twitter on all pages; JSON-LD (Organization/Person/Article/FAQ/Service) present |
| 21 | Accessibility | ✅ skip link, form labels + autocomplete, focus-visible states, contrast AA (ink/paper 15:1, orange/ink 4.65:1), reduced-motion |
| 22 | Performance | ✅ main chunk 364 KB, catalogue lazy 125 KB, bundle gate in CI, single font load (fixed), images lazy |
| 23 | AI visibility | ✅ robots.txt policy, llms.txt + machine files, 42-article hub with txt twins, schema, named author |
| 24 | Console warnings | ⚠️ one pre-existing deprecation: `createServerFn().inputValidator()` (library-level, non-breaking) |

---

## Mobile Audit

- Breakpoints: fluid clamp typography; rail carousels with snap + side clearance; hero CTAs stack full-width ≤720px; mobile menu with scroll lock; tables scroll horizontally inside cards; no fixed-width elements.
- **Cannot run browser-level tests in this sandbox** (no Chrome) — viewport verification is via CSS + markup inspection. The CI Lighthouse job (a11y/SEO/performance on mobile emulation) is staged and will run once the workflow file is pushed by a maintainer.

## SEO & AI Visibility Audit

- Technical SEO: complete (title/desc/canonical/OG/robots/sitemap/structured data).
- AI readability: strong — plain-text twins for every page, llms.txt, per-crawler robots policy, entity-first schema, named-author E-E-A-T, 42-article topical hub.

## Fix Plan (implemented this pass)

1. **P1** — Footer contact email + mailto (footer + privacy page) ✅
2. **P2** — Head branding metadata (favicon.svg, apple-touch, theme-color, color-scheme) ✅
3. **P2** — Remove legacy duplicate font stylesheet ✅
4. Validated: TSC clean, ESLint clean, build passes, bundle gate passes, all routes 200, both mailto links render.

## Open items for owner

- **Push CI workflow** (`.github/workflows/ci.yml` — maintainer-only due to App `workflows` permission; staged locally).
- **Add a phone number** if the business publishes one (no tel: exists because no number is published — do not invent).
- **Real lead capture** (forms are client-side "sent" states — intentional privacy posture; wire a backend when ready).
- **Browser-level Lighthouse/axe** run post-merge via the staged CI job.
