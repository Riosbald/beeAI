import { Link, createFileRoute } from "@tanstack/react-router";

import { CtaBand, Eyebrow, FrameworkGrid, Rail } from "@/components/site-ui";
import { useReveal } from "@/lib/use-reveal";
import { AUTHOR } from "@/data/insights/author";
import { testimonials } from "@/data/site";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BeameAI by LOGON — AI Insights & Consultancy, Lagos" },
      {
        name: "description",
        content:
          "BeameAI by LOGON is an AI Insights & Consultancy anchored in Lagos, Nigeria — AI search (LLMO/GEO), AI crawlability, entity graphs and agentic commerce via BeameAI, led by Oluwamayowalogo.",
      },
      { property: "og:title", content: "About BeameAI by LOGON — AI Insights & Consultancy" },
      {
        property: "og:description",
        content:
          "Who we are, how we work, and why African-rooted AI visibility changes the rules for every brand.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "BeameAI by LOGON",
              alternateName: "BeameAI",
              url: SITE_URL,
              logo: OG_IMAGE,
              description:
                "BeameAI by LOGON is an AI Insights & Consultancy anchored in Lagos, Nigeria — AI search (LLMO/GEO), AI crawlability, entity graphs, structured data and agentic commerce for African and global enterprises.",
              parentOrganization: { "@type": "Organization", name: "LOGON" },
              areaServed: "Worldwide",
              address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
            },
            {
              "@type": "Person",
              name: "Oluwamayowalogo",
              alternateName: "Oluwamayowa",
              jobTitle: "Lead AI Strategist",
              worksFor: { "@type": "Organization", name: "BeameAI by LOGON" },
              sameAs: [
                "https://www.linkedin.com/in/oluwamayowa",
                "https://www.linkedin.com/pub/dir/Logo/Oluwamayowa",
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Evidence over opinion",
    body: "Every recommendation is grounded in what the assistants actually return for your prompt set today — and whether their crawlers can even reach you. No generic best practice.",
  },
  {
    title: "Build, don't advise",
    body: "Crawler rules, schema, llms.txt, feeds and MCP integrations get implemented, tested and monitored — not handed off as a to-do list.",
  },
  {
    title: "Revenue is the metric",
    body: "Citations matter because they lead to AI-mediated demand. We report share of citation, brand search and pipeline — and tie the roadmap to the revenue.",
  },
];

function AboutPage() {
  const root = useReveal();

  return (
    <div ref={root}>
      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[860px] text-center">
          <span className="hero-badge reveal">● About BeameAI by LOGON</span>
          <h1 className="reveal mt-5 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05]">
            We make brands legible to machines
          </h1>
          <p className="reveal mx-auto mt-4 max-w-[700px] opacity-95">
            BeameAI by LOGON is an AI Insights &amp; Consultancy anchored in Lagos, Nigeria. Our
            mission is simple: make your business retrievable, extractable and quotable by the AI
            assistants your customers now trust — and transactable through BeameAI, our
            agentic-commerce platform.
          </p>
          <div className="reveal mt-8 hero-ctas">
            <Link to="/" hash="audit" className="btn-beame">
              Book a free AI Visibility Audit
            </Link>
            <Link to="/insights" className="btn-beame-ghost">
              Explore the Insights Hub
            </Link>
          </div>
        </div>
      </section>

      <section className="section-beame">
        <div className="container-beame">
          <Rail label="Our values" className="mt-8">
            {values.map((v) => (
              <article
                key={v.title}
                data-rail-item
                className="card-beame reveal w-[min(86vw,340px)] p-6"
              >
                <h2 className="text-xl">{v.title}</h2>
                <p className="mt-3 text-[0.96rem] text-muted-foreground">{v.body}</p>
              </article>
            ))}
          </Rail>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="section-title">
              From Lagos to the world — the BeameAI by LOGON journey
            </h2>
            <p className="mx-auto mt-4 max-w-[860px] text-[0.99rem] leading-relaxed text-muted-foreground">
              BeameAI by LOGON started by helping African businesses answer customers faster with AI
              chat and automation. As buying journeys moved inside AI assistants, the same question
              came back in a new form: can a machine find you, understand you, trust you, and buy
              from you? Today we combine strategy with hands-on engineering — AI search (LLMO/GEO),
              AI crawlability, knowledge graphs, structured data, and agentic commerce through the
              BeameAI platform — so the answer is yes on every major assistant.
            </p>
            <p className="mx-auto mt-4 max-w-[860px] text-[0.99rem] leading-relaxed text-muted-foreground">
              We deliver from Lagos for Nigeria, Kenya, South Africa and global markets, with NDPA,
              global AI governance standards and ISO 42001 alignment built into every engagement —
              and the EU AI Act mapped wherever clients serve European markets.
            </p>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Proof, not promises</Eyebrow>
            <h2 className="section-title">The numbers behind the practice</h2>
            <div className="mx-auto mt-6 grid max-w-[900px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { v: "100+", k: "production AI implementations since 2023" },
                { v: "42", k: "research articles, reviewed every 90 days" },
                {
                  v: "5",
                  k: "assistant surfaces covered — ChatGPT, Perplexity, Claude, Copilot, AI Overviews",
                },
                { v: "NDPA · ISO 42001", k: "compliance posture built into every engagement" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-none [clip-path:var(--chamfer-4)] bg-surface-2 p-5 text-center"
                >
                  <p className="text-3xl font-extrabold text-primary">{s.v}</p>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{s.k}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal mx-auto max-w-[860px] p-6 md:p-8">
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="section-title">Authored by the practitioner</h2>
            <div className="mx-auto mt-5 max-w-[720px] text-center">
              <p className="text-lg font-bold">{AUTHOR.name}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {AUTHOR.role} — Lagos, Nigeria
              </p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                {AUTHOR.bio} Every article in the BeameAI by LOGON Insights Hub and every engagement
                carries his byline and 90-day review cadence — 100+ production AI implementations
                since 2023.
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
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="section-title reveal">The A.G.E.N.T.I.C. framework</h2>
          <FrameworkGrid />
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal mx-auto max-w-[820px] p-6 text-center">
            <Eyebrow>Platform</Eyebrow>
            <h2 className="section-title">BeameAI — the platform by LOGON</h2>
            <p className="mx-auto max-w-[680px] text-[0.96rem] leading-relaxed text-muted-foreground">
              The same entity foundation that earns citations also makes brands discoverable,
              recommendable and transactable by AI agents. BeameAI, the agentic-commerce platform by
              BeameAI by LOGON, takes your brand from visibility to agent-mediated revenue.
            </p>
            <Link to="/protocols" className="btn-beame-ghost mt-5 inline-flex">
              Agentic Commerce Protocol Tracker
            </Link>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <h2 className="section-title reveal">Clients</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="card-beame reveal p-5">
                <p className="text-[0.98rem]">“{t.quote}”</p>
                <footer className="mt-3 text-sm font-bold text-primary">
                  {t.name}
                  <span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {t.role}
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="cta-panel reveal">
            <Eyebrow>Explore</Eyebrow>
            <h2 className="section-title text-[inherit]">
              Research you can verify, by an author you can check
            </h2>
            <p className="section-lead text-[inherit] opacity-95">
              42 research-backed articles on AI strategy, implementation, AI search (LLMO/GEO),
              agents, statistics and governance — authored by {AUTHOR.name} and reviewed every 90
              days.
            </p>
            <div className="mt-6 hero-ctas">
              <Link to="/insights" className="btn-beame">
                Explore the Insights Hub
              </Link>
              <Link to="/ai-crawlability" className="btn-beame-ghost">
                AI Crawlability
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
