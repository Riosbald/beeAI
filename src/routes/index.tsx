import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { AskAiBlock } from "@/components/AskAiBlock";
import { StudioSection } from "@/components/studio/StudioSection";
import { CtaBand, Eyebrow, FaqList, FrameworkGrid, useReveal } from "@/components/site-ui";
import {
  homeFaqs,
  ideas,
  insights,
  pillars,
  problemPoints,
  refineryFaqs,
  services,
  testimonials,
  tiers,
} from "@/data/site";
import { serviceImages } from "@/data/service-images";
import showcase from "@/assets/beame-showcase.jpg";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BeameAI — Agentic Commerce Optimization & AI Search Visibility" },
      {
        name: "description",
        content:
          "BeameAI makes your brand discoverable, recommendable and transactable by AI shopping agents. Start with a free AI Visibility Health Check.",
      },
      {
        property: "og:title",
        content: "BeameAI — Agentic Commerce Optimization & AI Search Visibility",
      },
      {
        property: "og:description",
        content:
          "AEO, GEO and agentic commerce engineering that gets your brand cited by ChatGPT, Gemini, Perplexity and Copilot.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const stats = [
  { value: "40%", label: "of buying journeys now start inside an AI assistant" },
  {
    value: "Rails are live",
    label:
      "Cloudflare pay-per-crawl and x402 already exist — agents still need something worth paying for",
  },
  { value: "$0", label: "for your first AI Visibility Health Check" },
];

const steps = [
  {
    n: "01",
    title: "Free health check",
    body: "We run your brand through the prompts your buyers actually use and show you exactly where the assistants send them instead.",
  },
  {
    n: "02",
    title: "Engineer the answer layer",
    body: "Entities, schema, evidence and feeds get rebuilt so models can quote you with confidence — implemented, not advised.",
  },
  {
    n: "03",
    title: "Wire the agentic checkout",
    body: "MCP servers and ACP/UCP/AP2 support connect your catalog so an agent can go from recommendation to purchase.",
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
    body: "Your customers no longer scan ten blue links. They ask an assistant, get one synthesized answer, and act on it. If your brand is not part of that answer, you are not in the consideration set at all. BeameAI rebuilds how machines read your business: entities, claims, evidence and structured data that models can quote with confidence.",
  },
  {
    title: "Agents buy differently than humans",
    body: "An AI shopping agent needs machine-readable inventory, pricing, availability and policies — not a beautiful product page. We connect your catalog to the agentic layer through MCP servers, clean feeds and transaction protocols such as ACP, UCP and AP2, so an agent can go from recommendation to checkout without a human in the loop.",
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

  return (
    <form
      className="mx-auto mt-8 grid max-w-[620px] gap-3 text-left sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input
        required
        name="name"
        placeholder="Your name"
        className="rounded-2xl border border-border bg-background px-4 py-3 text-foreground"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Work email"
        className="rounded-2xl border border-border bg-background px-4 py-3 text-foreground"
      />
      <input
        required
        name="website"
        placeholder="Your website"
        className="rounded-2xl border border-border bg-background px-4 py-3 text-foreground sm:col-span-2"
      />
      <button type="submit" className="btn-beame btn-solid sm:col-span-2">
        Get my free health check
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
          <span className="hero-badge reveal">● The Data Refinery</span>
          <h1 className="reveal mt-5 text-[clamp(2.2rem,5vw,4.25rem)] leading-[1.02]">
            The internet just got a new currency — and it's clean data
          </h1>
          <p className="reveal mx-auto mt-4 max-w-[720px] text-[clamp(1rem,1.8vw,1.15rem)] opacity-95">
            AI agents don't browse websites. They query verified knowledge. BeameAI
            structures your business data so agents can find it, trust it and recommend it
            — across ChatGPT, Gemini, Perplexity, Claude and Copilot.
          </p>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
            <a href="#audit" className="btn-beame">
              Book a free AI Visibility Audit
            </a>
            <Link to="/protocols" className="btn-beame">
              Protocol Tracker
            </Link>
          </div>
          <p className="reveal mt-4 text-sm opacity-90">
            No contract. Results in 2 business days.
          </p>
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

      <section id="build" className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>What we build</Eyebrow>
          <h2 className="section-title reveal">Everything you need to turn conversations into customers.</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {buildItems.map((b) => (
              <article key={b.title} className="card-beame reveal p-5">
                <h3 className="text-lg">{b.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted-foreground">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="audit" className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Start here</Eyebrow>
            <h2 className="section-title">Free AI Visibility Health Check</h2>
            <p className="section-lead">
              We run your brand through the prompts your customers actually use, and send
              back what the assistants say — and who they recommend instead.
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

      <section id="services" className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>Services</Eyebrow>
          <h2 className="section-title reveal">Strategy plus engineering</h2>
          <p className="section-lead reveal">
            Four practices that move a brand from invisible to transactable.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <article key={s.title} className="card-beame reveal p-5">
                <img
                  src={serviceImages[i]?.src}
                  alt={serviceImages[i]?.alt ?? s.title}
                  loading="lazy"
                  className="mb-4 h-40 w-full rounded-2xl object-cover"
                />
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {s.kicker}
                </p>
                <h3 className="mt-2 text-xl">{s.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </p>
                <p className="mt-3 text-[0.96rem] text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-7 text-center">
            <Link to="/services" className="btn-beame btn-solid">
              Explore all services
            </Link>
          </div>
        </div>
      </section>

      <section id="platform" className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 text-center md:p-8">
            <Eyebrow>The platform</Eyebrow>
            <h2 className="section-title">A.G.E.N.T.I.C. Commerce OS</h2>
            <img
              src={showcase}
              alt="BeameAI A.G.E.N.T.I.C. Commerce OS dashboard overview"
              loading="lazy"
              className="mx-auto mt-6 w-full max-w-[900px] rounded-3xl object-cover"
            />
            <p className="section-lead">
              One operating system for AI visibility: audit, knowledge graph, structured
              content, agent integrations, tracking, trust signals and agentic checkout —
              managed in a single roadmap.
            </p>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame grid gap-5 md:grid-cols-2">
          {longformSections.map((l) => (
            <article key={l.title} className="card-beame reveal p-6">
              <h2 className="text-2xl">{l.title}</h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">
                {l.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="framework" className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>Framework</Eyebrow>
          <h2 className="section-title reveal">The seven A.G.E.N.T.I.C. phases</h2>
          <FrameworkGrid />
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <h2 className="section-title reveal">What clients say</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="card-beame reveal p-5">
                <p className="text-[0.98rem]">“{t.quote}”</p>
                <footer className="mt-3 text-sm font-bold text-primary">{t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section-beame pt-0">
        <div className="container-beame">
          <h2 className="section-title reveal">Frequently asked questions</h2>
          <FaqList items={homeFaqs} />
        </div>
      </section>

      <section id="insights" className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>Insights</Eyebrow>
          <h2 className="section-title reveal">From the BeameAI desk</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {insights.map((i) => (
              <article key={i.title} className="card-beame reveal p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {i.date} · {i.author}
                </p>
                <h3 className="mt-2 text-lg">{i.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted-foreground">{i.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <StudioSection />

      <AskAiBlock />

      <CtaBand />
    </div>
  );
}
