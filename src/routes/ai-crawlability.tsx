import { Link, createFileRoute } from "@tanstack/react-router";

import { CtaBand, Eyebrow, FaqList, Rail } from "@/components/site-ui";
import { useReveal } from "@/lib/use-reveal";
import {
  crawlDeliverables,
  crawlFaqs,
  crawlRobots,
  crawlSteps,
  crawlers,
  layers,
} from "@/data/ai-crawlability";
import { AUTHOR } from "@/data/insights/author";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

const TITLE =
  "AI Crawlability Consulting — Get Crawled by ChatGPT, Copilot & Perplexity | BeameAI by LOGON";
const DESC =
  "Fix what stops OAI-SearchBot, ClaudeBot, PerplexityBot, Bingbot and Google-Extended from reaching you: robots.txt, WAF rules, Bing indexation, entity schema, llms.txt and crawler monitoring. Every aspect covered.";

export const Route = createFileRoute("/ai-crawlability")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: AUTHOR.name },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/ai-crawlability` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/ai-crawlability" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI Crawlability Consulting",
          serviceType: "AI Crawlability",
          description: DESC,
          provider: {
            "@type": "Organization",
            name: "BeameAI by LOGON",
            url: SITE_URL,
            address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
          },
          areaServed: "Worldwide",
        }),
      },
    ],
  }),
  component: CrawlabilityPage,
});

function CrawlabilityPage() {
  const root = useReveal();

  return (
    <div ref={root}>
      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[880px] text-center">
          <span className="hero-badge reveal">● AI Crawlability Consulting</span>
          <h1 className="reveal mt-5 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05]">
            Get discovered by ChatGPT, Copilot, Perplexity &amp; Claude
          </h1>
          <p className="reveal mx-auto mt-4 max-w-[740px] opacity-95">
            Crawlability is the gate every AI visibility strategy passes through first: if the
            grounding crawlers cannot reach you, nothing else you publish matters. BeameAI by LOGON
            fixes the full access layer — every crawler, every rule, every log — so your content is
            retrievable before you invest in citation strategy.
          </p>
          <div className="reveal mt-7 hero-ctas">
            <Link to="/" hash="audit" className="btn-beame">
              Book a free AI Visibility Audit
            </Link>
            <Link
              to="/insights/$slug"
              params={{ slug: "ai-crawlability-consulting" }}
              className="btn-beame-ghost"
            >
              Read the guide
            </Link>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Definition — citation-ready</Eyebrow>
            <p className="mx-auto max-w-[860px] text-center text-lg font-semibold leading-snug">
              AI crawlability consulting finds and fixes everything standing between your content
              and the retrieval layer of ChatGPT, Copilot, Perplexity, Claude and Google AI
              Overviews — crawler access, indexation, entity resolution, machine readability and
              continuous monitoring.
            </p>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Is this you?</Eyebrow>
            <h2 className="section-title">
              Five signs your site is blocked to AI — without you knowing
            </h2>
            <ul className="mx-auto mt-6 grid max-w-[860px] gap-3">
              {[
                "You rank in Google but never appear in ChatGPT — even for your own name.",
                "You blocked GPTBot 'for safety' years ago and never revisited the policy.",
                "Nobody on your team has ever logged into Bing Webmaster Tools.",
                "Your WAF or CDN returns errors to bots, and robots.txt is the only thing you've checked.",
                "You have no llms.txt, and your sitemap doesn't match your real site structure.",
              ].map((s) => (
                <li key={s} className="check-item">
                  {s}
                </li>
              ))}
            </ul>
            <p className="section-lead reveal mt-6 font-semibold text-foreground">
              Any one of these quietly removes you from AI answers. All of them are fixable in days
              — not quarters.
            </p>
            <div className="mt-6 hero-ctas">
              <Link to="/" hash="audit" className="btn-beame">
                Book a free AI Visibility Audit
              </Link>
              <Link
                to="/insights/$slug"
                params={{ slug: "ai-crawler-management" }}
                className="btn-beame-ghost"
              >
                Read the crawler reference
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>The crawler map</Eyebrow>
          <h2 className="section-title reveal">Every AI crawler, accounted for</h2>
          <p className="section-lead reveal max-w-[820px]">
            Search-grounding crawlers drive citations; training crawlers feed models. They are
            different agents with different purposes — and each needs an explicit, documented
            policy. Nothing is left to defaults.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <th className="px-3 py-2.5">User agent</th>
                  <th className="px-3 py-2.5">Operator</th>
                  <th className="px-3 py-2.5">Purpose</th>
                  <th className="px-3 py-2.5">Default policy</th>
                </tr>
              </thead>
              <tbody>
                {crawlers.map((c) => (
                  <tr key={c.agent} className="border-b border-border/60 align-top">
                    <td className="px-3 py-2.5 font-bold">{c.agent}</td>
                    <td className="px-3 py-2.5 text-muted-foreground">{c.operator}</td>
                    <td className="px-3 py-2.5 text-muted-foreground">{c.purpose}</td>
                    <td className="px-3 py-2.5">
                      <span
                        className={
                          c.default === "Allow"
                            ? "rounded-none [clip-path:var(--chamfer-chip)] bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary"
                            : c.default === "Policy"
                              ? "rounded-none [clip-path:var(--chamfer-chip)] bg-amber-500/10 px-2.5 py-0.5 text-xs font-bold text-amber-700"
                              : "rounded-none [clip-path:var(--chamfer-chip)] bg-surface-2 px-2.5 py-0.5 text-xs font-bold text-muted-foreground"
                        }
                      >
                        {c.default}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Defaults are a starting point, not a verdict — we set policy per crawler with your
            data-governance team, and document it under NDPA, ISO 42001 and global AI Continental
            Strategy expectations.
          </p>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>The diagnostic</Eyebrow>
          <h2 className="section-title reveal">Six layers, nothing overlooked</h2>
          <p className="section-lead reveal max-w-[820px]">
            A full engagement tests all six layers in order — a break at any level removes you from
            the answer regardless of how strong the layer above it is.
          </p>
          <Rail label="Six crawlability layers" className="mt-8">
            {layers.map((l) => (
              <article
                key={l.num}
                data-rail-item
                className="card-beame reveal w-[min(86vw,320px)] p-5 sm:w-[300px]"
              >
                <span className="text-3xl font-extrabold text-primary">{l.num}</span>
                <h3 className="mt-2 text-lg font-bold">{l.name}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">{l.body}</p>
              </article>
            ))}
          </Rail>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Reference</Eyebrow>
            <h2 className="section-title">The robots.txt that earns retrieval</h2>
            <p className="section-lead mx-auto max-w-[860px] text-center">
              The BeameAI by LOGON default pattern: allow every search-grounding crawler,
              policy-gate training crawlers explicitly. Deploy this, then verify at the edge.
            </p>
            <pre className="mx-auto mt-6 max-w-[720px] overflow-x-auto rounded-none [clip-path:var(--chamfer-4)] border border-border bg-surface-2 p-5 text-[0.8rem] leading-relaxed text-foreground/90">
              <code>{crawlRobots}</code>
            </pre>
            <p className="mx-auto mt-5 max-w-[720px] text-center text-sm text-muted-foreground">
              The file is the request; the WAF and CDN are the decision. Every entry above is
              verified with real 200 responses from server logs — never assumed.
            </p>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>Engagement</Eyebrow>
          <h2 className="section-title reveal">How we deliver</h2>
          <Rail label="Crawlability engagement steps" className="mt-8">
            {crawlSteps.map((s) => (
              <article
                key={s.num}
                data-rail-item
                className="card-beame reveal w-[min(86vw,340px)] p-6"
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-extrabold text-primary">{s.num}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {s.weeks}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold">{s.name}</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </article>
            ))}
          </Rail>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Deliverables</Eyebrow>
            <h2 className="section-title">What you receive</h2>
            <Rail label="Crawlability deliverables" className="mx-auto mt-6 max-w-[900px]">
              {crawlDeliverables.map((d) => (
                <div
                  key={d.title}
                  data-rail-item
                  className="w-[min(86vw,340px)] rounded-none [clip-path:var(--chamfer-4)] bg-surface-2 p-5"
                >
                  <h3 className="font-bold">{d.title}</h3>
                  <p className="mt-1.5 text-[0.9rem] leading-relaxed text-muted-foreground">
                    {d.body}
                  </p>
                </div>
              ))}
            </Rail>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="section-title reveal">Crawlability, answered</h2>
          <FaqList items={crawlFaqs} />
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal mx-auto max-w-[820px] text-center">
            <Eyebrow>Operator authored</Eyebrow>
            <p className="mt-2 text-sm text-muted-foreground">
              Led by {AUTHOR.name}, {AUTHOR.role}, based in Lagos, Nigeria — 100+ production AI
              implementations since 2023. The same practitioner who writes the BeameAI by LOGON
              Insights Hub and implements crawler, schema and citation work daily.
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
              <Link
                to="/insights/$slug"
                params={{ slug: "ai-crawler-management" }}
                className="btn-beame-ghost"
              >
                Read the crawler reference guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
