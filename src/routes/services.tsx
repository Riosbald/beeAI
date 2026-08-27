import { Link, createFileRoute } from "@tanstack/react-router";

import { CtaBand, Eyebrow, Rail } from "@/components/site-ui";
import { useReveal } from "@/lib/use-reveal";
import {
  AISearchServices,
  AuditForm,
  ClientOutcomes,
  DiffFromSeo,
  LandingFaq,
  Program,
  QuickDefinition,
  RegionalFocus,
  RelatedServices,
  RoleCards,
  SeoVsAiSearch,
  WhyNow,
  WhyUsGrid,
} from "@/components/ai-search-sections";
import { aiSearchServices, faqItems } from "@/data/ai-search-content";
import { AUTHOR } from "@/data/insights/author";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

const TITLE = "AI Search Optimization Services — BeameAI by LOGON";
const DESC =
  "Full-stack AI search visibility from entity building to citation tracking: AI Overviews optimization, ChatGPT & Perplexity strategy, entity graphs, schema, citation monitoring, AI crawlability — delivered from Lagos for Africa and global markets.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: AUTHOR.name },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/services` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            ...aiSearchServices.map((s) => ({
              "@type": "Service",
              name: s.title,
              description: s.body,
              provider: {
                "@type": "Organization",
                name: "BeameAI by LOGON",
                url: SITE_URL,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Lagos",
                  addressCountry: "NG",
                },
              },
              areaServed: "Worldwide",
            })),
            {
              "@type": "Service",
              name: "AI Crawlability Consulting",
              description:
                "Fix what stops OAI-SearchBot, ClaudeBot, PerplexityBot, Bingbot and Google-Extended from reaching you: robots.txt, WAF rules, Bing indexation, entity schema, llms.txt and crawler monitoring.",
              provider: {
                "@type": "Organization",
                name: "BeameAI by LOGON",
                url: SITE_URL,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Lagos",
                  addressCountry: "NG",
                },
              },
              areaServed: "Worldwide",
            },
            {
              "@type": "FAQPage",
              mainEntity: faqItems.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const root = useReveal();

  return (
    <div ref={root}>
      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[880px] text-center">
          <span className="hero-badge reveal">● AI Search Optimization Services</span>
          <h1 className="reveal mt-5 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05]">
            Full-stack AI search visibility: from entity building to citation tracking
          </h1>
          <p className="reveal mx-auto mt-4 max-w-[740px] opacity-95">
            Every buyer question in your category now produces an AI answer — and only the brands
            inside it get considered. One team, one discipline: crawler access, entity graphs,
            schema, content and measurement, so ChatGPT, Perplexity, Claude, Copilot and Google AI
            Overviews cite you instead of your competitors. Anchored in Lagos, delivered across
            Africa and global markets, led by {AUTHOR.name}.
          </p>
          <div className="reveal mt-7 hero-ctas">
            <Link to="/" hash="audit" className="btn-beame">
              Book a free AI Visibility Audit
            </Link>
            <Link to="/insights" className="btn-beame-ghost">
              Read the research hub
            </Link>
          </div>
        </div>
      </section>

      <RoleCards />

      <AISearchServices lead="Eight practices that stack into a full AI search programme — plus the crawlability gate that makes everything else retrievable." />

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="cta-panel reveal">
            <Eyebrow>The gate</Eyebrow>
            <h2 className="section-title text-[inherit]">AI Crawlability Consulting</h2>
            <p className="section-lead mx-auto max-w-[840px] text-[inherit] opacity-95">
              Before any citation strategy can work, the grounding crawlers must be able to reach
              you. Our crawlability engagement covers every aspect — OAI-SearchBot, GPTBot,
              ClaudeBot, PerplexityBot, Google-Extended, Bingbot, Common Crawl and the rest — across
              six layers: access, indexation, entity, content, machine and monitoring. Nothing left
              to defaults.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {[
                "OAI-SearchBot",
                "GPTBot",
                "ClaudeBot",
                "PerplexityBot",
                "Google-Extended",
                "Bingbot",
                "Common Crawl",
              ].map((c) => (
                <span
                  key={c}
                  className="rounded-none [clip-path:var(--chamfer-chip)] border border-border bg-surface/70 px-3 py-1 text-xs font-semibold text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-6 hero-ctas">
              <Link to="/ai-crawlability" className="btn-beame">
                Explore AI Crawlability
              </Link>
              <Link
                to="/insights/$slug"
                params={{ slug: "ai-crawlability-consulting" }}
                className="btn-beame-ghost"
              >
                Read the crawlability guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Program />

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>We practise what we sell</Eyebrow>
            <h2 className="section-title">AI discoverability — applied to this page</h2>
            <p className="section-lead mx-auto max-w-[840px] text-center">
              This site is a live implementation of the LLMO stack we sell. Every strategy below is
              deployed here — inspect it, and hold us to it.
            </p>
            <Rail label="AI discoverability practices" className="mx-auto mt-7 max-w-[960px]">
              {[
                {
                  title: "robots.txt with explicit crawler policy",
                  body: "OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended and Bingbot allowed; GPTBot, CCBot and Bytespider blocked; policy-gated agents documented.",
                  href: "/robots.txt",
                },
                {
                  title: "llms.txt machine-readable summary",
                  body: "A curated, AI-consumable index of our highest-value pages, deployed at the root.",
                  href: "/llms.txt",
                },
                {
                  title: "sitemap.xml with all 42 articles",
                  body: "Every article, service page and plain-text route registered — nothing orphaned.",
                  href: "/sitemap.xml",
                },
                {
                  title: "Plain-text routes for AI consumption",
                  body: "index.txt, about.txt, services.txt, insights.txt and per-article /insights/txt/ pages.",
                  href: "/insights.txt",
                },
                {
                  title: "JSON-LD: Organization, Service, FAQPage, Article",
                  body: "Entity-first schema with founder Person and sameAs LinkedIn links on every page.",
                  href: "/insights/entity-seo-for-ai",
                },
                {
                  title: "Direct answers + sourced statistics",
                  body: "40–60 word answer blocks and dated sources (Gartner, Semrush, McKinsey) — the units AI extracts.",
                  href: "/insights/ai-search-optimization-complete-guide-2026",
                },
                {
                  title: "Honest freshness with a 90-day cadence",
                  body: "dateModified only changes when content genuinely changes; every article re-reviewed quarterly.",
                  href: "/insights/content-freshness-ai-search",
                },
                {
                  title: "Named author with verified profile",
                  body: "Every article is bylined to Oluwamayowalogo with a verifiable LinkedIn profile.",
                  href: "https://www.linkedin.com/in/oluwamayowa",
                },
                {
                  title: "Internal linking to the full hub",
                  body: "Related terms, next-in-cluster and hub cards bind every page into one navigable knowledge graph.",
                  href: "/insights",
                },
              ].map((d) => (
                <a
                  key={d.title}
                  data-rail-item
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block w-[min(86vw,320px)] rounded-none [clip-path:var(--chamfer-4)] bg-surface-2 p-5 transition-colors hover:border hover:border-primary"
                >
                  <h3 className="font-bold">{d.title}</h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted-foreground">
                    {d.body}
                  </p>
                </a>
              ))}
            </Rail>
          </div>
        </div>
      </section>

      <WhyUsGrid />
      <DiffFromSeo />
      <WhyNow />
      <SeoVsAiSearch />
      <RelatedServices />
      <RegionalFocus />

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal mx-auto max-w-[820px] p-6 text-center">
            <Eyebrow>Platform</Eyebrow>
            <h2 className="section-title">BeameAI — the agentic-commerce platform by LOGON</h2>
            <p className="mx-auto max-w-[680px] text-[0.96rem] leading-relaxed text-muted-foreground">
              The same entity foundation that earns citations also makes brands discoverable,
              recommendable and transactable by AI agents. BeameAI, the platform by LOGON, prepares
              your inventory and offers for the agentic buying journey — from visibility to revenue.
            </p>
            <div className="mt-5 hero-ctas">
              <Link to="/" className="btn-beame-ghost">
                Explore BeameAI
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ClientOutcomes />
      <QuickDefinition />
      <LandingFaq />
      <AuditForm />

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal mx-auto max-w-[820px] text-center">
            <Eyebrow>Operator authored</Eyebrow>
            <p className="mt-2 text-sm text-muted-foreground">
              Strategy led by {AUTHOR.name}, {AUTHOR.role}, based in Lagos, Nigeria — 100+
              production AI implementations since 2023, NDPA, global AI governance standards and ISO
              42001 aligned, with every engagement tracked on a 90-day review cadence.
            </p>
            <div className="mt-5 hero-ctas">
              <a
                href={AUTHOR.linkedinCanonical}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-beame inline-flex"
              >
                {AUTHOR.name} on LinkedIn
              </a>
              <a
                href={AUTHOR.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-beame-ghost inline-flex"
              >
                LinkedIn directory profile
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
