import { Link } from "@tanstack/react-router";

import { Eyebrow, FaqList, Rail, useReveal } from "@/components/site-ui";
import { aiSearchServices, faqItems, topFirms, topFirmsIntro } from "@/data/ai-search-content";
import { roles } from "@/data/roles";
import { useState } from "react";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const whyNowStats = [
  {
    value: "25%",
    caption:
      "Projected drop in traditional search engine volume by 2026 as users shift to AI assistants and chatbots.",
    source: "Gartner, 2024",
    href: "https://www.gartner.com/en/newsroom/press-releases/2024-02-19-gartner-predicts-search-engine-volume-will-drop-25-percent-by-2026-due-to-ai-chatbots-and-other-virtual-agents",
  },
  {
    value: "47%",
    caption:
      "Share of US informational Google searches that returned an AI Overview in 2025 — up from under 7% in mid-2024.",
    source: "Semrush AI Overviews Study, 2025",
    href: "https://www.semrush.com/blog/ai-overviews-study/",
  },
  {
    value: "78%",
    caption:
      "Share of organisations that reported using AI in at least one business function in 2024 — every one a buyer asking AI for vendor recommendations.",
    source: "McKinsey State of AI, 2024",
    href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  },
];

const diffPoints = [
  {
    h: "The unit of success is a citation, not a ranking",
    body: "Traditional SEO chases position 1 to 10 of a ranked list. AI search chases inclusion in a synthesised answer. There is no page two. Either ChatGPT, Perplexity or Google AI Overviews cite you in the answer or they do not — and the user rarely clicks beyond what is shown. That changes what counts as winning: a single sentence of citation can outperform a top-3 ranking, and absence from the AI answer is worse than ranking on page two.",
  },
  {
    h: "The optimisation surface is the entity graph, not the title tag",
    body: "LLMs answer by retrieving and synthesising — not by ranking documents. Retrieval is biased toward content that is semantically structured, schema-marked-up and tied to a recognised entity. That makes JSON-LD, DefinedTermSet, Organization, Person and Article schema, Wikidata coverage and consistent author signals the new optimisation surface. Keyword density and title-tag micro-tuning still matter for classical SEO, but they do almost nothing for AI citations.",
  },
  {
    h: "Authority is computed from citations across the web, not just backlinks",
    body: "Classical SEO authority is a function of inbound links. LLM authority is a function of how often your brand is described as an authority across the open web — citations, mentions, structured listings, knowledge bases, GitHub, industry directories, press and podcast transcripts. LLMs encode this during training and re-confirm it through retrieval. Building it is a different sport: editorial relations, citation farming, knowledge-base contributions, and original data worth referencing.",
  },
  {
    h: "Content is consumed in fragments, not in pages",
    body: "Google sends users to your page; LLMs extract a paragraph and quote it. That changes how content should be written. Every important claim needs to stand on its own, be sourced, and read as quotable in isolation. We engineer sectionAnswer blocks, citable statistics, defined terms and short standalone definitions — the units LLMs actually lift. Long-form remains valuable for E-E-A-T, but the granular unit of optimisation is the paragraph.",
  },
  {
    h: "Measurement requires LLM probing, not just Search Console",
    body: "You cannot see AI citations in Google Search Console. Measurement requires programmatic LLM probing — running representative queries through ChatGPT, Perplexity, Claude and Copilot on a schedule, parsing responses for brand mentions and citation context, and comparing against competitor citation share. Without this layer, AI search optimisation is invisible. With it, every change becomes attributable, and the ROI conversation becomes possible.",
  },
];

const programPhases = [
  {
    num: "01",
    name: "Audit",
    weeks: "Weeks 1–2",
    body: "Analyse current AI search visibility: which queries cite competitors, which cite your brand, structured data gaps, entity graph mapping, and content extractability scoring.",
  },
  {
    num: "02",
    name: "Optimize",
    weeks: "Weeks 3–8",
    body: "Restructure content for AI extractability — entity typing, sectionAnswer blocks, FAQPage schema, DefinedTerm schema, and citation-ready formatting across priority pages.",
  },
  {
    num: "03",
    name: "Track",
    weeks: "Weeks 9–12",
    body: "Monitor citation rates across ChatGPT, Perplexity and Google AI Overviews. Measure brand mention frequency, optimise underperforming content, report on lift.",
  },
];

const seoVsAi = {
  seo: [
    "Optimize for blue link rankings",
    "Keyword density & placement",
    "Backlink authority",
    "Click-through rate optimization",
    "Page-level optimization",
  ],
  ai: [
    "Optimize for AI citations & recommendations",
    "Entity authority & semantic relationships",
    "Source credibility & citation signals",
    "Machine-readable content structure",
    "Brand-level entity optimization",
  ],
};

const relatedServices = [
  {
    title: "AI SEO Strategy",
    body: "Full-stack SEO with AI-powered research, content, and technical optimization.",
    href: "/services",
  },
  {
    title: "AI Content Strategy",
    body: "Entity-driven content architecture optimized for both search and AI citations.",
    href: "/insights/llmo-content-strategy",
  },
  {
    title: "AI Knowledge Base",
    body: "Build authoritative knowledge bases that AI systems cite and recommend.",
    href: "/insights/entity-seo-for-ai",
  },
  {
    title: "AI Crawlability Consulting",
    body: "Fix the access layer that gates every citation — every crawler, every rule, every log.",
    href: "/ai-crawlability",
  },
];

const insightLinks = [
  {
    title: "What is LLMO (large language model optimization)?",
    href: "/insights/what-is-llmo",
  },
  {
    title: "GEO vs SEO: the difference generative engine optimization makes",
    href: "/insights/geo-vs-seo",
  },
  {
    title: "Complete AI search optimization guide for 2026",
    href: "/insights/ai-search-optimization-complete-guide-2026",
  },
  {
    title: "How to get cited by ChatGPT (citation playbook)",
    href: "/insights/how-to-get-cited-by-chatgpt",
  },
  {
    title: "Perplexity AI answer engine citations and sources",
    href: "/insights/how-to-get-cited-by-perplexity",
  },
  {
    title: "Best LLMO tools for citation tracking in 2026",
    href: "/insights/best-llmo-tools-2026",
  },
  {
    title: "Google AI Overviews explained: how to appear in them",
    href: "/insights/google-ai-overviews-explained",
  },
  {
    title: "llms.txt specification and implementation guide",
    href: "/insights/llms-txt-guide-2026",
  },
];

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

export function RoleCards() {
  const root = useReveal();
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <Eyebrow>Services</Eyebrow>
        <h2 className="section-title reveal">Built for every decision-maker</h2>
        <p className="section-lead reveal max-w-[760px]">
          Same engagement, sharply different outcomes per role. Each track is led by
          Oluwamayowalogo, Lead AI Strategist at BeameAI by LOGON, anchored in Lagos and built for
          African and global markets.
        </p>
        <Rail label="Role tracks" className="mt-8">
          {roles.map((r) => (
            <Link
              key={r.slug}
              data-rail-item
              to="/ai-search/$for"
              params={{ for: r.slug }}
              className="card-beame reveal flex h-full w-[min(88vw,400px)] flex-col p-6 transition-transform hover:-translate-y-1"
            >
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary">
                {r.badge}
              </span>
              <h3 className="mt-2 text-xl font-bold leading-snug">{r.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                <span className="font-bold text-foreground">The pain:</span> {r.painLine}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="font-bold text-foreground">What you get:</span> {r.getLine}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {r.deliverables.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-5 pt-2 text-sm font-bold text-primary">
                Talk to a {r.talk}-experienced consultant →
              </span>
            </Link>
          ))}
        </Rail>
      </div>
    </section>
  );
}

export function WhyUsGrid() {
  const root = useReveal();
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Why us</Eyebrow>
            <h2 className="text-2xl font-bold">What Is AI Search Optimization?</h2>
            <p className="mt-3 text-[0.96rem] leading-relaxed text-muted-foreground">
              <strong className="text-foreground">AI Search Optimization</strong> encompasses two
              disciplines: <strong className="text-foreground">GEO</strong> (Generative Engine
              Optimization) — optimizing for AI-powered search results like Google AI Overviews —
              and <strong className="text-foreground">LLMO</strong> (Large Language Model
              Optimization) — ensuring your brand is recognized, cited, and recommended by AI models
              like ChatGPT, Perplexity, and Claude.
            </p>
            <p className="mt-3 text-[0.96rem] leading-relaxed text-muted-foreground">
              As AI search market share grows — projected at 30%+ of search interactions by 2027 —
              brands that invest early in AI visibility gain compounding advantages. The principles
              are different from traditional SEO: entity authority over keyword density,
              machine-readable structure over human-only formatting, and citable claims over vague
              marketing language.
            </p>
            <p className="mt-3 text-[0.96rem] leading-relaxed text-muted-foreground">
              At <strong className="text-foreground">BeameAI by LOGON</strong>, we combine deep SEO
              expertise with AI-native strategies to build your brand's AI search presence. We don't
              just optimize for today's AI search — we build the entity foundation that ensures your
              brand is cited as AI systems evolve.
            </p>
          </div>
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Why us</Eyebrow>
            <h2 className="text-2xl font-bold">Top LLMO Consulting Firms in 2026</h2>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">
              {topFirmsIntro}
            </p>
            <ol className="mt-4 space-y-3.5">
              {topFirms.map((f) => (
                <li key={f.rank} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-none [clip-path:var(--chamfer-chip)] bg-primary text-xs font-extrabold text-primary-foreground">
                    {f.rank}
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-tight">
                      {f.name}{" "}
                      <span className="font-semibold text-muted-foreground">— {f.where}</span>
                    </p>
                    <p className="mt-0.5 text-[0.85rem] leading-relaxed text-muted-foreground">
                      {f.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RegionalFocus() {
  const root = useReveal();
  const regions = [
    {
      h: "Nigeria & West Africa",
      body: "Nigerian entity graph, NITDA and NDPC citation anchoring, and citation tracking against local competitors. This is BeameAI by LOGON's home moat — Lagos is the operational hub.",
    },
    {
      h: "East Africa (Kenya & the Nairobi hub)",
      body: "Kenyan fintech and agritech entity graph, Nairobi tech-hub positioning, and regulator citations (CBK, CMA) plus regional press coverage that LLMs weight for East African queries.",
    },
    {
      h: "Southern Africa (South Africa)",
      body: "South African market structure, SARB and FSCA citations, Johannesburg/Cape Town hub positioning, and English-language optimization tuned for SA regulator and industry-body sources.",
    },
    {
      h: "North & Francophone Africa",
      body: "Multilingual citation tracking (French, Arabic), local knowledge-base contributions and language-specific FAQPage schema for Francophone and Maghreb markets.",
    },
  ];
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <div className="cta-panel reveal">
          <Eyebrow>Regional focus</Eyebrow>
          <h2 className="section-title text-[inherit]">
            AI Search Optimization for African &amp; Global Consultants
          </h2>
          <p className="section-lead mx-auto max-w-[860px] text-[inherit] opacity-95">
            African consultancies, professional services firms and B2B enterprises face a citation
            problem that US-only playbooks do not solve: LLMs default to English-language,
            US-centric sources unless local entity and geo signals are engineered explicitly.
            BeameAI by LOGON, headquartered in Lagos with 100+ production AI implementations since
            2023, runs LLMO programmes tuned for African entity graphs, NDPA obligations and global
            AI Continental Strategy alignment.
          </p>
          <div className="mx-auto mt-8 grid max-w-[980px] gap-5 text-left sm:grid-cols-2">
            {regions.map((r) => (
              <div
                key={r.h}
                className="rounded-none [clip-path:var(--chamfer-4)] bg-surface/70 p-5 backdrop-blur"
              >
                <h3 className="font-bold">{r.h}</h3>
                <p className="mt-1.5 text-[0.9rem] leading-relaxed opacity-90">{r.body}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-[860px] text-left">
            <h3 className="font-bold text-[inherit]">
              NDPA, global AI governance standards &amp; ISO 42001 compliance built in
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed opacity-90">
              LLMO measurement typically involves probing LLMs at scale, logging responses and
              processing brand mentions. Done naively that creates Nigeria Data Protection Act
              exposure — personal data in prompts and responses — and global AI governance standards
              / ISO 42001 questions for clients using AI features in-product. BeameAI by LOGON
              designs the measurement pipeline so probes are anonymized, response logs are
              pseudonymized, and any in-product AI features referenced in citation content align
              with continental and international transparency obligations. Where clients serve
              European markets, EU AI Act transparency requirements are mapped as well.
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed opacity-90">
              For African consultancies specifically, the LLM opportunity is asymmetric: LLMs
              under-cite African experts because the training data is US-heavy. Deliberate LLMO
              investment closes that gap fast, and being cited as "the African authority on X"
              compounds because LLMs re-rank you upward in future responses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AISearchServices({ lead }: { lead?: string }) {
  const root = useReveal();
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <Eyebrow>Services</Eyebrow>
        <h2 className="section-title reveal">Our AI Search Services</h2>
        <p className="section-lead reveal max-w-[760px]">
          {lead ?? "Full-stack AI search visibility: from entity building to citation tracking."}
        </p>
        <Rail label="AI search services" className="mt-8">
          {aiSearchServices.map((s) => (
            <article
              key={s.title}
              data-rail-item
              className="card-beame reveal w-[min(86vw,320px)] p-5 sm:w-[300px]"
            >
              <h3 className="text-base font-bold leading-snug">{s.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </Rail>
      </div>
    </section>
  );
}

export function WhyNow() {
  const root = useReveal();
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <div className="card-beame reveal p-6 md:p-10">
          <Eyebrow>Why now</Eyebrow>
          <h2 className="section-title">Why AI Search Visibility Matters Now</h2>
          <p className="section-lead mx-auto max-w-[820px] text-center">
            AI-powered search is no longer emerging — it's mainstream. Google AI Overviews appear on
            a large share of searches, ChatGPT and Perplexity handle hundreds of millions of queries
            per day, and buyers increasingly ask AI before visiting websites. When someone asks
            ChatGPT "who are the best AI consultants in Africa?", the answer is built from citations
            — not ads, not blue links.
          </p>
          <div className="mx-auto mt-8 grid max-w-[980px] gap-5 md:grid-cols-3">
            {whyNowStats.map((s) => (
              <div
                key={s.value}
                className="rounded-none [clip-path:var(--chamfer-4)] bg-surface-2 p-6 text-center"
              >
                <p className="text-4xl font-extrabold text-primary">{s.value}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.caption}</p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-bold text-primary underline-offset-2 hover:underline"
                >
                  Source: {s.source} ↗
                </a>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 max-w-[820px] text-center">
            <h3 className="text-lg font-bold">The compounding advantage</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
              Brands cited today train the next version of every AI model. Early LLMO investment
              creates a self-reinforcing authority signal that becomes harder for competitors to
              displace over time. The brands that establish AI search presence in 2025–2026 will
              dominate AI-generated recommendations for years. At BeameAI by LOGON, we've seen
              clients go from zero AI citations to consistent mentions across ChatGPT, Perplexity
              and Google AI Overviews within 90 days. The window for first-mover advantage in your
              category is still open — but not for long.
            </p>
            <div className="mt-6 hero-ctas">
              <Link to="/" hash="audit" className="btn-beame">
                Book an AI Search Audit
              </Link>
              <Link to="/services" className="btn-beame-ghost">
                See our LLMO services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DiffFromSeo() {
  const root = useReveal();
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <Eyebrow>The difference</Eyebrow>
        <h2 className="section-title reveal">How AI Search Differs From Traditional SEO</h2>
        <p className="section-lead reveal max-w-[760px]">
          Same web. Different retrieval. Different optimisation surface. Different unit of success.
        </p>
        <Rail label="SEO vs AI search differences" className="mt-8">
          {diffPoints.map((d) => (
            <article key={d.h} data-rail-item className="card-beame reveal w-[min(86vw,340px)] p-5">
              <h3 className="text-base font-bold leading-snug">{d.h}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{d.body}</p>
            </article>
          ))}
        </Rail>
      </div>
    </section>
  );
}

export function Program() {
  const root = useReveal();
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="section-title reveal">How We Build Your AI Search Presence</h2>
        <p className="section-lead reveal max-w-[760px]">
          A 12-week structured programme from audit to measurable citation lift.
        </p>
        <Rail label="12-week programme" className="mt-8">
          {programPhases.map((p) => (
            <article
              key={p.num}
              data-rail-item
              className="card-beame reveal w-[min(86vw,340px)] p-6"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-extrabold text-primary">{p.num}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {p.weeks}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </Rail>
        <div className="mt-6 text-center">
          <Link to="/" hash="audit" className="btn-beame-ghost inline-flex">
            Get your AI citation baseline
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SeoVsAiSearch() {
  const root = useReveal();
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <Eyebrow>Side by side</Eyebrow>
        <h2 className="section-title reveal">Traditional SEO vs AI Search</h2>
        <p className="section-lead reveal max-w-[760px]">
          Both matter. Here's how they differ and work together.
        </p>
        <div className="mx-auto mt-8 grid max-w-[900px] gap-5 md:grid-cols-2">
          <div className="card-beame reveal p-6">
            <h3 className="text-lg font-bold">Traditional SEO</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {seoVsAi.seo.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-beame reveal p-6">
            <h3 className="text-lg font-bold">AI Search (GEO/LLMO)</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {seoVsAi.ai.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RelatedServices() {
  const root = useReveal();
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <Eyebrow>Related services</Eyebrow>
        <h2 className="section-title reveal">Built on the same foundation</h2>
        <Rail label="Related services" className="mt-8">
          {relatedServices.map((s) => (
            <Link
              key={s.title}
              data-rail-item
              to={s.href}
              className="card-beame reveal block w-[min(86vw,320px)] p-5 transition-transform hover:-translate-y-1"
            >
              <h3 className="text-base font-bold leading-snug">{s.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{s.body}</p>
            </Link>
          ))}
        </Rail>
      </div>
    </section>
  );
}

export function InsightLinks() {
  const root = useReveal();
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <Eyebrow>GEO &amp; LLMO insights</Eyebrow>
        <h2 className="section-title reveal">Deep guides on getting cited by AI</h2>
        <p className="section-lead reveal max-w-[760px]">
          Generative engine optimization, LLM citation strategy, and the tactics behind being cited
          by ChatGPT, Perplexity and Google AI Overviews — all authored by Oluwamayowalogo.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {insightLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="card-beame reveal block p-4 transition-transform hover:-translate-y-0.5"
            >
              <span className="text-sm font-semibold leading-snug">{l.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClientOutcomes() {
  const root = useReveal();
  const testimonials = [
    {
      quote:
        "Within two quarters, ChatGPT and Perplexity began citing our research and documentation in fintech prompts. AI-referred discovery calls doubled, and for the first time we could report brand position in AI answers to the board.",
      name: "Adeola Bello",
      role: "CEO, Lagos-based fintech",
    },
    {
      quote:
        "BeameAI by LOGON didn't hand us a report — they trained our content team and shipped the schema themselves. We now appear in AI answers for precision-agriculture questions across three markets.",
      name: "Kwame Mensah",
      role: "CTO, Pan-African agritech platform",
    },
    {
      quote:
        "The only partner that could pair GEO strategy with actual engineering. Their 90-day review cadence keeps our clients ahead of model updates instead of chasing them.",
      name: "Sarah Okafor",
      role: "Managing Partner, global B2B agency",
    },
  ];
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <Eyebrow>Client outcomes</Eyebrow>
        <h2 className="section-title reveal">What Our Clients Say</h2>
        <Rail label="Client testimonials" className="mt-8">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              data-rail-item
              className="card-beame reveal w-[min(88vw,400px)] p-5"
            >
              <blockquote className="text-[0.95rem] leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </Rail>
      </div>
    </section>
  );
}

export function QuickDefinition() {
  const root = useReveal();
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <div className="card-beame reveal mx-auto max-w-[820px] p-6 md:p-8">
          <Eyebrow>Quick definition</Eyebrow>
          <h2 className="section-title">What is AI search optimisation?</h2>
          <p className="mx-auto mt-3 max-w-[720px] text-center text-[0.96rem] leading-relaxed text-muted-foreground">
            AI search optimisation (also called LLMO or GEO) is the discipline of ranking content
            inside answers from ChatGPT, Perplexity, Claude and Google AI Overviews. It combines
            structured data, citation-friendly content design, entity SEO and traditional SEO
            foundations to capture traffic that bypasses the classic blue-link search results.
          </p>
        </div>
      </div>
    </section>
  );
}

export function LandingFaq() {
  const root = useReveal();
  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="section-title reveal">
          Everything you need to know about AI search visibility
        </h2>
        <FaqList items={faqItems} />
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Have more questions? Let's talk — no commitment, just a conversation about what AI can
            do for your business.
          </p>
          <Link to="/" hash="audit" className="btn-beame mt-4 inline-flex">
            Book a Call
          </Link>
        </div>
      </div>
    </section>
  );
}

export function AuditForm() {
  const root = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  return (
    <section className="section-beame pt-0">
      <div ref={root} className="container-beame">
        <div className="card-beame reveal mx-auto max-w-[720px] p-6 md:p-8">
          <Eyebrow>Get started</Eyebrow>
          <h2 className="section-title">Ready to Be Found by AI?</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Book an AI Search Audit to discover your AI visibility gaps. No long-term contracts —
            results first.
          </p>
          {submitted ? (
            <div className="mx-auto mt-6 max-w-[520px] rounded-none [clip-path:var(--chamfer-4)] bg-surface-2 p-6 text-center">
              <p className="text-lg font-bold">Request received — thank you.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                A BeameAI by LOGON consultant will be in touch within one business day to schedule
                your audit and map your highest-impact AI opportunities.
              </p>
            </div>
          ) : (
            <form
              aria-busy={pending}
              className="mx-auto mt-6 grid max-w-[520px] gap-3.5"
              onSubmit={(e) => {
                e.preventDefault();
                if (pending) return;
                setPending(true);
                window.setTimeout(() => {
                  setPending(false);
                  setSubmitted(true);
                }, 700);
              }}
            >
              <label className="text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Name *
                <input
                  required
                  name="name"
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-none [clip-path:var(--chamfer-4)] border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary"
                  placeholder="Your full name"
                />
              </label>
              <label className="text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Company *
                <input
                  required
                  name="company"
                  autoComplete="organization"
                  className="mt-1.5 w-full rounded-none [clip-path:var(--chamfer-4)] border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary"
                  placeholder="Company name"
                />
              </label>
              <label className="text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Email *
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-none [clip-path:var(--chamfer-4)] border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary"
                  placeholder="you@company.com"
                />
              </label>
              <label className="text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Phone (optional)
                <input
                  name="phone"
                  autoComplete="tel"
                  className="mt-1.5 w-full rounded-none [clip-path:var(--chamfer-4)] border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary"
                  placeholder="+234 ..."
                />
              </label>
              <label className="text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Tell us about your goals
                <textarea
                  name="goals"
                  rows={3}
                  className="mt-1.5 w-full rounded-none [clip-path:var(--chamfer-4)] border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none focus:border-primary"
                  placeholder="Which topics or markets matter most to you?"
                />
              </label>
              <button
                type="submit"
                disabled={pending}
                className="btn-beame mt-1 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {pending ? "Sending…" : "Request AI Search Audit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
