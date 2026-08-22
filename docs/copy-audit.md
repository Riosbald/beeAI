# Conversion-Copy Audit — Consumer Psychology & Persuasion Mechanism-First Review

**Audited:** 2026-08-21 · **Framework:** Mechanism-First Copy Stack (ELM, narrative transportation, source credibility, loss/gain framing, autonomy-preserving prompts)
**Auditor role:** Consumer Psychologist / Persuasion Scientist

---

## 0. Context (per framework)

| Dimension | Assessment |
|---|---|
| **Target human** | CMO / Head of SEO / Head of Content / Founder-CEO at B2B enterprises, African + global. Awareness: **solution-aware to product-aware** (they know AI search exists and that they're not visible; they're evaluating who to trust). Emotional state: **anxious + frustrated** (visibility loss) with **aspirational** undertones (category authority). Category trust: **low-to-moderate** (consulting is trust-heavy, lots of snake oil in AI/LLMO). |
| **Objective** | Move from "I might have an AI visibility problem" → belief: "this is urgent, fixable, and BeameAI by LOGON is credible" → action: **book the free audit/discovery call**. |
| **Output** | Landing page + service + role pages (copy audit + applied rewrites). |
| **Constraints** | Authoritative B2B tone, 2026 context, BeameAI by LOGON brand, **no invented statistics** (Failure Mode 3). |

**Dominant mechanism per audience:** because trust is low and the buyer is solution-aware → **proof + specificity + source credibility**, with problem agitation that mirrors their lived language, closing with an **autonomy-preserving** low-friction CTA.

---

## 1. Page-by-page mechanism map

### 1.1 Home hero (`src/routes/index.tsx`)

| Block | Current copy | Mechanism job | Verdict |
|---|---|---|---|
| Badge | `● The Data Refinery` | — | ✗ Legacy internal jargon; signals nothing to a solution-aware buyer |
| H1 | "The internet just got a new currency — and it's clean data" | Novelty/insight | ✗ Abstract metaphor; does not anchor on audience state or name the desired progress. Fails Step 1–2 (no belief sequence, no before/after) |
| Sub | "AI agents don't browse websites… can find it, trust it and cite it" | Clarity + outcome | ✓ Partially strong ("find it, trust it, cite it") but leads with *how* before *why it matters* |
| CTA | "Book a free AI Visibility Audit" + "No contract. Results in 2 business days." | Low-friction + proof | ✓ Strong; risk-reversal at the point of action |
| Secondary CTAs | Services / Insights Hub | — | ✓ Good for stage-appropriate next steps |

**Diagnosis:** H1 is the highest-leverage failure. The reader is solution-aware; the metaphor wastes the first 300ms where the copy should name their specific fear (invisible in AI answers) and their desired identity (the brand AI recommends). **Applied fix** below.

### 1.2 "The gap" — Why AI agents ignore most businesses (home)

Messy data / No verification / No structure. **Mechanism:** problem agitation via VOC (their words: "scattered", "cross-check", "machine-readable"). ✓ Strong. Kept.

### 1.3 Role cards — "Built for every decision-maker"

| Block | Mechanism | Verdict |
|---|---|---|
| Lead | "Same engagement, sharply different outcomes per role… led by Oluwamayowalogo" | Identity + source credibility ✓ |
| Pain line | "Your traditional SEO traffic is dropping as AI Overviews answer queries directly" | Problem agitation + VOC ✓ |
| Get line | "A measurable position in LLM answers across your priority topics" | Progress framing ✓ (before/after implied) |
| Deliverables | ▸ LLM citation audit and gap analysis… | Specificity = proof at the resistance point ✓ |
| CTA | "Talk to a {role}-experienced consultant" | Source credibility + identity ✓ |

**Diagnosis:** strongest section on the site. Kept as-is; only verified it renders on home + services.

### 1.4 Why us — "What Is AI Search Optimization?" + "Top LLMO Consulting Firms in 2026"

**Mechanism:** education (authority) + source credibility (named firms, honest "we run this page but here are our criteria"). The honest-criteria framing is a *transparency* signal that raises trust in a low-trust category. ✓ Strong. Kept.

### 1.5 Why now — stats band (Gartner / Semrush / McKinsey) + "compounding advantage"

**Mechanism:** social proof + external authority + loss/gain framing ("window for first-mover advantage is still open — but not for long"). Urgency is **bounded and sourced** — honest. ✓ Strong. Kept. ("within 90 days" client claim is first-party and specific — acceptable.)

### 1.6 The gate — AI Crawlability

**Mechanism:** problem agitation with mechanistic specificity (crawler names = proof of expertise). ✓ Kept.

### 1.7 Audit-form section (home) — "Free AI Visibility Health Check"

> "We run your brand through the prompts your customers actually use, and send back what the assistants say — and who they recommend instead."

**Mechanism:** specificity + curiosity gap + concrete deliverable. ✓ **Best copy on the site** — it promises a *reveal* ("who they recommend instead" is the hook). **Applied fix:** extend with one more concrete reveal (what the report contains) to raise the perceived value of the free offer.

### 1.8 CTA consistency (friction audit)

| Surface | CTA |
|---|---|
| Home hero | Book a free AI Visibility Audit |
| CtaBand (all pages) | Book an AI Audit |
| ReadyBand (dead) | Book a Discovery Call |
| JourneyCta (dead) | Book a Meeting |
| Services / roles | Book a free discovery call |
| Audit form | Get my free health check / Request AI Search Audit |

**Diagnosis:** five different verbs for the same action = measurable friction and inconsistent mental model. **Applied fix:** unify the universal offer to **"Book a free AI Visibility Audit"** and the secondary posture to **"Book a free discovery call"**; remove the two dead CTA components.

### 1.9 Services / insights heroes, CtaBand, operator band

- CtaBand: "Ready to become the source of truth? / Stop being invisible to the agents that matter most." → identity + pain; strong. Kept (button text unified).
- Insights hub: credibility-first (named author, 90-day reviews, sources) ✓ appropriate for a content hub.
- Services hero: mechanism-light sub → minor tightening applied (audience anchor + outcome).

---

## 2. Failure-mode check (honesty gate)

| Failure mode | Status |
|---|---|
| FM1 — pretty copy, no mechanism | No. Every live section has a labeled psychological job (map above). |
| FM2 — emotion where proof is needed | No. Trust-heavy category → proof-dense (stats with sources, named firms, named author, case testimonials). |
| FM3 — overstating claims | Pass. All statistics sourced; "90 days" tied to first-party client outcomes; no invented numbers introduced in this pass. |

---

## 3. Applied changes (this pass)

1. **Home hero rewrite** — audience-state anchored, problem→identity→outcome, VOC language ("buyers ask AI before they search", "citation is the new ranking").
2. **Home audit-section** microcopy — added a third concrete reveal to the free-audit promise (what the report contains).
3. **CTA unification** — CtaBand button → "Book a free AI Visibility Audit"; removed dead `ReadyBand` + `JourneyCta` components.
4. **Services hero** — tightened sub with audience anchor + outcome framing.
5. Verified role cards, Why us, Why now, The gate, The gap — kept (already mechanism-sound).

---

## 4. Future levers (not applied — need human input)

- **Scarcity/social proof on the audit form**: real "X audits completed this month" only if first-party data exists.
- **Objection-handling FAQ** already present (22-question) — could be surfaced closer to the final CTA on services.
- **Case-study depth**: testimonial quotes are strong; linked named case studies would raise proof density for the product-aware segment.

## 5. Other-pages improvement pass (applied 2026-08-21)

- **CTA unification completed site-wide**: all remaining "Book a free discovery call" / "Book a free crawlability audit" → **"Book a free AI Visibility Audit"** (7 more swaps; zero stale CTA verbs remain in src).
- **About page**: hero now has CTAs (audit + insights hub) — previously had none; new **"Proof, not promises"** stat band after the story (100+ implementations · 42 articles · 5 assistant surfaces · NDPA/ISO 42001); Explore heading tightened to "Research you can verify, by an author you can check".
- **AI Crawlability**: new **"Five signs your site is blocked to AI"** problem-agitation checklist (VOC signs: ranks in Google but never ChatGPT, blocked GPTBot years ago, no Bing Webmaster Tools, WAF errors, no llms.txt) + "fixable in days — not quarters" progress line + audit CTA; hero CTA unified.
- **Protocols**: new agent-readiness bridge band ("Your brand is being discovered by agents whether you're ready or not") with audit CTA — ties the tracker to the offer.
- **Role pages** (×4): hero micro-proof line ("100+ production implementations · named author · 90-day review cadence"); CTA unified.
- **Article page**: fixed redundant brand phrase ("BeameAI, BeameAI by LOGON's platform" → "BeameAI, the platform by LOGON"); mid-article + band CTAs unified.
- **Services page**: fixed same brand redundancy in the Platform band.
