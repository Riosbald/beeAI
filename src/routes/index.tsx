import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useState } from "react";

import { CtaBand, Eyebrow, FaqList, FrameworkGrid, Rail, useReveal } from "@/components/site-ui";
import {
  DiffFromSeo,
  RelatedServices,
  RoleCards,
  WhyNow,
  WhyUsGrid,
} from "@/components/ai-search-sections";

const StudioSection = lazy(() =>
  import("@/components/studio/StudioSection").then((m) => ({
    default: m.StudioSection,
  })),
);
const AskAiBlock = lazy(() =>
  import("@/components/AskAiBlock").then((m) => ({
    default: m.AskAiBlock,
  })),
);
import {
  homeFaqs,
  ideas,
  pillars,
  problemPoints,
  refineryFaqs,
  testimonials,
  tiers,
} from "@/data/site";
import { AUTHOR } from "@/data/insights/author";
import { featuredHomeArticles } from "@/data/insights/featured";
import { pillarImages } from "@/data/card-images";
import showcase from "@/assets/beame-showcase.jpg";
import { BRAND, BRAND_FULL, OG_IMAGE, PARENT_BRAND, SITE_URL } from "@/lib/site-meta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BeameAI by LOGON — AI Insights & Consultancy | AI Search, LLMO & Crawlability" },
      {
        name: "description",
        content:
          "BeameAI by LOGON, anchored in Lagos, Nigeria, helps African and global enterprises get cited by ChatGPT, Perplexity, Claude, Copilot and Google AI Overviews — AI search (LLMO/GEO), crawlability, entity graphs, structured data and agentic commerce via BeameAI. Free AI Visibility Audit.",
      },
      {
        property: "og:title",
        content: "BeameAI by LOGON — AI Insights & Consultancy | AI Search, LLMO & Crawlability",
      },
      {
        property: "og:description",
        content:
          "Research-backed AI strategy, LLMO/GEO implementation, AI crawlability and agentic commerce — from Lagos to the world.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: BRAND,
              alternateName: BRAND_FULL,
              url: SITE_URL,
              logo: OG_IMAGE,
              description: `${BRAND_FULL} is an AI Insights & Consultancy anchored in Lagos, Nigeria — AI search (LLMO/GEO), AI crawlability, entity graphs, structured data and agentic commerce for African and global enterprises.`,
              parentOrganization: { "@type": "Organization", name: PARENT_BRAND },
              founder: {
                "@type": "Person",
                name: "Oluwamayowalogo",
                jobTitle: "Lead AI Strategist",
                sameAs: [
                  "https://www.linkedin.com/in/oluwamayowa",
                  "https://www.linkedin.com/pub/dir/Logo/Oluwamayowa",
                ],
              },
              areaServed: "Worldwide",
              address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
            },
            {
              "@type": "WebSite",
              url: SITE_URL,
              name: BRAND_FULL,
              inLanguage: "en",
              publisher: { "@type": "Organization", name: BRAND_FULL },
            },
            {
              "@type": "FAQPage",
              name: `${BRAND_FULL} — frequently asked questions`,
              mainEntity: [...refineryFaqs, ...homeFaqs].map((f) => ({
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
  component: Index,
});

const stats = [
  { value: "40%", label: "of buying journeys now start inside an AI assistant" },
  {
    value: "42",
    label: "research articles on AI search & LLMO — reviewed every 90 days",
  },
  { value: "$0", label: "for your first AI Visibility Health Check" },
];

const steps = [
  {
    n: "01",
    title: "Free visibility & crawlability check",
    body: "We run your brand through the prompts your buyers actually use, and test whether OAI-SearchBot, PerplexityBot, ClaudeBot and Bingbot can reach you at all.",
  },
  {
    n: "02",
    title: "Engineer the answer layer",
    body: "Crawler access, entities, schema, llms.txt and evidence get rebuilt so models can quote you with confidence — implemented, not advised.",
  },
  {
    n: "03",
    title: "Track, refresh & compound",
    body: "Monthly share-of-citation scorecards, a 90-day review cadence, and agentic commerce via the BeameAI platform — from visibility to revenue.",
  },
];

const proofPoints = [
  "No contract to start",
  "Results in 2 business days",
  "Built and shipped by engineers",
];

const longformSections = [
  {
    title: "Search didn't die — it moved inside the assistant",
    body: "Your customers no longer scan ten blue links. They ask an assistant, get one synthesized answer, and act on it. If your brand is not part of that answer, you are not in the consideration set at all. BeameAI by LOGON rebuilds how machines read your business: crawler access, entities, claims, evidence and structured data that models can quote with confidence.",
  },
  {
    title: "Agents buy differently than humans",
    body: "An AI shopping agent needs machine-readable inventory, pricing, availability and policies — not a beautiful product page. BeameAI by LOGON connects your catalog to the agentic layer through MCP servers, clean feeds and transaction protocols such as ACP, UCP and AP2 — delivered through the BeameAI platform — so an agent can go from recommendation to checkout without a human in the loop.",
  },
  {
    title: "Authority is corroborated, not claimed",
    body: "Models cross-check what you say about yourself against what the rest of the web says. We build the external trust layer — reviews, directories, press, expert commentary and consistent business data — so your claims survive verification and your brand keeps getting cited.",
  },
  {
    title: "If you can't measure it, you can't defend it",
    body: "We monitor prompt sets across ChatGPT, Gemini, Perplexity, Claude and Copilot, log citations and sentiment, track AI bot crawl activity, and report share of voice and agent-mediated conversions — so every phase of the work ties back to revenue.",
  },
];

function AuditForm() {
  const [sent, setSent] = useState(false);
  const [pending, setPending] = useState(false);

  return (
    <form
      aria-busy={pending}
      className="mx-auto mt-8 grid max-w-[620px] gap-3 text-left sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (pending) return;
        setPending(true);
        window.setTimeout(() => {
          setPending(false);
          setSent(true);
        }, 700);
      }}
    >
      <label className="text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Your name *
        <input
          required
          name="name"
          autoComplete="name"
          placeholder="Your name"
          className="mt-1.5 w-full rounded-none [clip-path:var(--chamfer-4)] border border-border bg-background px-4 py-3 text-foreground"
        />
      </label>
      <label className="text-left text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Work email *
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Work email"
          className="mt-1.5 w-full rounded-none [clip-path:var(--chamfer-4)] border border-border bg-background px-4 py-3 text-foreground"
        />
      </label>
      <label className="text-left text-xs font-bold uppercase tracking-widest text-muted-foreground sm:col-span-2">
        Your website *
        <input
          required
          name="website"
          autoComplete="url"
          placeholder="Your website"
          className="mt-1.5 w-full rounded-none [clip-path:var(--chamfer-4)] border border-border bg-background px-4 py-3 text-foreground"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="btn-beame btn-solid sm:col-span-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Sending…" : "Get my free health check"}
      </button>
      {sent && (
        <p className="sm:col-span-2 text-center text-sm font-semibold text-primary">
          Thanks — we'll send your AI Visibility Health Check within two business days.
        </p>
      )}
    </form>
  );
}

function Index() {
  const root = useReveal();

  return (
    <div ref={root}>
      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[900px] text-center">
          <span className="hero-badge reveal">● AI Search &amp; LLMO Consulting</span>
          <h1 className="reveal mt-5 text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.02]">
            Be the brand AI search answers with.
          </h1>
          <p className="reveal mx-auto mt-4 max-w-[720px] text-[clamp(1rem,1.8vw,1.15rem)] opacity-95">
            Buyers no longer search Google first — they ask AI, and the answer is built from
            citations, not ads. If your brand isn't in that answer, you're not in the consideration
            set. BeameAI by LOGON makes your business retrievable, extractable and quotable across
            ChatGPT, Perplexity, Claude, Copilot and Google AI Overviews — and shows you exactly who
            is answering for you today, free.
          </p>
          <div className="reveal mt-8 hero-ctas">
            <a href="#audit" className="btn-beame">
              Book a free AI Visibility Audit
            </a>
            <Link to="/services" className="btn-beame">
              AI Search Optimization Services
            </Link>
            <Link to="/insights" className="btn-beame-ghost">
              Insights Hub
            </Link>
          </div>
          <p className="reveal mt-4 text-sm opacity-90">No contract. Results in 2 business days.</p>
        </div>
      </section>

      <section className="section-beame">
        <div className="container-beame grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <article key={s.value} className="card-beame reveal p-5 text-center">
              <p className="text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-2 text-[0.95rem] text-muted-foreground">{s.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="problem" className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>The gap</Eyebrow>
          <h2 className="section-title reveal">Why AI agents ignore most businesses</h2>
          <Rail label="Why AI agents ignore most businesses" className="mt-8">
            {problemPoints.map((p) => (
              <article
                key={p.title}
                data-rail-item
                className="card-beame reveal w-[min(88vw,360px)] p-6"
              >
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-3 text-[0.96rem] text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </Rail>
          <p className="section-lead reveal mt-7 font-semibold text-foreground">
            The businesses that solve this first won't just rank higher. They'll become the
            licensable source of truth for their niche.
          </p>
        </div>
      </section>

      <section id="build" className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>The Data Refinery</Eyebrow>
          <h2 className="section-title reveal">Your business, refinery-grade</h2>
          <p className="section-lead reveal">
            We don't build payment rails. We build the thing worth paying for: clean, verified,
            structured knowledge in your niche — then plug it into the agentic commerce layer
            (Cloudflare, x402, MCP) so agents can discover, quote and transact.
          </p>
          <Rail label="Data Refinery pillars" className="mt-8">
            {pillars.map((p, i) => (
              <article
                key={p.title}
                data-rail-item
                className="card-beame reveal w-[min(88vw,420px)] overflow-hidden p-6"
              >
                {pillarImages[i] && (
                  <img
                    src={pillarImages[i]!.src}
                    alt={pillarImages[i]!.alt}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="mb-5 h-44 w-full rounded-none [clip-path:var(--chamfer-4)] object-cover"
                  />
                )}
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-3 text-[0.96rem] text-muted-foreground">{p.body}</p>
                <ul className="mt-4 grid gap-1.5 text-[0.92rem] font-semibold text-muted-foreground">
                  {p.points.map((pt) => (
                    <li key={pt}>✓ {pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </Rail>
        </div>
      </section>

      <section id="audit" className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Start here</Eyebrow>
            <h2 className="section-title">Free AI Visibility Health Check</h2>
            <p className="section-lead">
              We run your brand through the prompts your customers actually use, and send back a
              plain-language report: which assistants mention you, which competitors they name in
              your place, and what is quietly blocking your crawlers from reaching you at all.
            </p>
            <AuditForm />
            <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-semibold text-muted-foreground">
              {proofPoints.map((p) => (
                <li key={p}>✓ {p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="how" className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="section-title reveal">Three steps from invisible to transactable</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <article key={s.n} className="card-beame reveal p-6">
                <p className="text-sm font-extrabold tracking-widest text-primary">{s.n}</p>
                <h3 className="mt-2 text-xl">{s.title}</h3>
                <p className="mt-3 text-[0.96rem] text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 text-center">
            <a href="#audit" className="btn-beame btn-solid">
              Start with the free health check
            </a>
          </div>
        </div>
      </section>

      <RoleCards />

      <WhyUsGrid />

      <section id="gate" className="section-beame pt-0">
        <div className="container-beame">
          <div className="cta-panel reveal">
            <Eyebrow>The gate</Eyebrow>
            <h2 className="section-title text-[inherit]">
              AI Crawlability — the access layer every citation depends on
            </h2>
            <p className="section-lead mx-auto max-w-[840px] text-[inherit] opacity-95">
              Before ChatGPT, Copilot, Perplexity or Claude can cite you, their grounding crawlers
              must reach you. Our crawlability consulting covers every aspect — crawler policy,
              robots.txt, WAF rules, Bing indexation, entity schema, llms.txt and continuous
              monitoring — across six layers.
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
                <span key={c} className="chip-beame">
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-6 hero-ctas">
              <Link to="/ai-crawlability" className="btn-beame">
                Explore the service
              </Link>
              <Link
                to="/insights/$slug"
                params={{ slug: "ai-crawlability-consulting" }}
                className="btn-beame-ghost"
              >
                Read the crawlability guide
              </Link>
              <Link
                to="/insights/$slug"
                params={{ slug: "ai-crawler-management" }}
                className="btn-beame-ghost"
              >
                Crawler reference
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhyNow />

      <DiffFromSeo />

      <section id="platform" className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 text-center md:p-8">
            <Eyebrow>The platform</Eyebrow>
            <h2 className="section-title">A.G.E.N.T.I.C. Commerce OS</h2>
            <img
              src={showcase}
              alt="BeameAI A.G.E.N.T.I.C. Commerce OS dashboard overview"
              loading="lazy"
              className="sheet-xl mx-auto mt-6 w-full max-w-[900px] object-cover"
            />
            <p className="section-lead">
              One operating system for AI visibility: audit, knowledge graph, structured content,
              agent integrations, tracking, trust signals and agentic checkout — managed in a single
              roadmap.
            </p>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame grid gap-5 md:grid-cols-2">
          {longformSections.map((l) => (
            <article key={l.title} className="card-beame reveal p-6">
              <h2 className="text-2xl">{l.title}</h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">{l.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="framework" className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>The refinery pipeline</Eyebrow>
          <h2 className="section-title reveal">From raw data to agent-ready knowledge</h2>
          <p className="section-lead reveal">
            The A.G.E.N.T.I.C. pipeline — seven phases, one outcome: your business becomes the
            verified source agents pay to query.
          </p>
          <FrameworkGrid />
        </div>
      </section>

      <section id="integration" className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 text-center md:p-8">
            <Eyebrow>One combined offer</Eyebrow>
            <h2 className="section-title">Data refinery + agentic checkout</h2>
            <p className="section-lead">
              Most businesses need two things: clean data and a way to monetize it. We structure
              your data, verify your claims, wire up x402 / Cloudflare monetization and make your
              content agent-ready in one engagement — the full value chain without the
              infrastructure headache.
            </p>
            <a href="#audit" className="btn-beame btn-solid mt-6">
              Book a free audit
            </a>
          </div>
        </div>
      </section>

      <section id="tiers" className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>Engagement tiers</Eyebrow>
          <h2 className="section-title reveal">Start small, prove it, then scale</h2>
          <Rail label="Engagement tiers" className="mt-8">
            {tiers.map((t) => (
              <article
                key={t.name}
                data-rail-item
                className="card-beame reveal w-[min(86vw,320px)] p-5 sm:w-[280px]"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {t.price}
                </p>
                <h3 className="mt-2 text-lg">{t.name}</h3>
                <p className="mt-2 text-[0.95rem] text-muted-foreground">{t.body}</p>
              </article>
            ))}
          </Rail>
        </div>
      </section>

      <RelatedServices />

      <section className="section-beame pt-0">
        <div className="container-beame">
          <h2 className="section-title reveal">What clients say</h2>
          <Rail label="Testimonials" className="mt-8">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                data-rail-item
                className="card-beame reveal w-[min(88vw,380px)] p-5"
              >
                <p className="text-[0.98rem]">“{t.quote}”</p>
                <footer className="mt-3 text-sm font-bold text-primary">{t.name}</footer>
              </blockquote>
            ))}
          </Rail>
        </div>
      </section>

      <section id="faq" className="section-beame pt-0">
        <div className="container-beame">
          <h2 className="section-title reveal">Frequently asked questions</h2>
          <FaqList items={[...refineryFaqs, ...homeFaqs]} />
        </div>
      </section>

      <section id="insights" className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>Insights</Eyebrow>
          <h2 className="section-title reveal">From the BeameAI by LOGON Insights Hub</h2>
          <p className="section-lead reveal max-w-[720px]">
            Research-backed guides on AI strategy, implementation, AI search (LLMO/GEO), agents,
            statistics and governance — authored by Oluwamayowalogo and reviewed on a 90-day
            cadence.
          </p>
          <Rail label="Latest insights" className="mt-8">
            {featuredHomeArticles.map((a) => (
              <Link
                key={a.slug}
                data-rail-item
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="card-beame reveal block w-[min(88vw,380px)] p-5 transition-transform hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {a.type} · Updated {a.updated} · {AUTHOR.name}
                </p>
                <h3 className="mt-2 text-lg">{a.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted-foreground">{a.dek}</p>
                <span className="mt-3 inline-block text-sm font-bold text-primary">
                  Read the guide →
                </span>
              </Link>
            ))}
          </Rail>
        </div>
      </section>

      <Suspense fallback={null}>
        <StudioSection />
      </Suspense>

      <section id="ideas" className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>Ideas</Eyebrow>
          <h2 className="section-title reveal">
            The ideas that shape how we think about AI and business
          </h2>
          <p className="section-lead reveal">If these resonate, you're our people.</p>
          <Rail label="Ideas" className="mt-8">
            {ideas.map((i) => (
              <article
                key={i.title}
                data-rail-item
                className="card-beame reveal w-[min(86vw,320px)] p-5 sm:w-[280px]"
              >
                <h3 className="text-lg">{i.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted-foreground">{i.body}</p>
              </article>
            ))}
          </Rail>
        </div>
      </section>

      <Suspense fallback={null}>
        <AskAiBlock />
      </Suspense>

      <CtaBand />
    </div>
  );
}
