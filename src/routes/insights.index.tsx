import { Link, createFileRoute } from "@tanstack/react-router";

import { CtaBand, Eyebrow, useReveal } from "@/components/site-ui";
import { AUTHOR, articles, articlesByCluster, clusters } from "@/data/insights";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

const TITLE = "AI Search & LLMO Insights — BeameAI by LOG_ON";
const DESC =
  "Research, playbooks and definitions for getting cited by ChatGPT, Perplexity, Claude and Google AI Overviews. Operator-authored, source-backed, reviewed every 90 days.";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/insights` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  const root = useReveal();

  return (
    <div ref={root}>
      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[880px] text-center">
          <span className="hero-badge reveal">● AI Search &amp; LLMO</span>
          <h1 className="reveal mt-5 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05]">
            Get cited by ChatGPT, Perplexity, Claude &amp; Google AI Overviews
          </h1>
          <p className="reveal mx-auto mt-4 max-w-[720px] opacity-95">
            {articles.length} guides, comparisons and research notes on AI search
            optimization — written by practitioners who implement this work daily, with
            named sources and honest uncertainty.
          </p>
          <div className="reveal mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/services" className="btn-beame">
              AI Search Optimization Services
            </Link>
            <Link to="/" hash="audit" className="btn-beame-ghost">
              Book a free audit
            </Link>
          </div>
        </div>
      </section>

      {clusters.map((c) => {
        const items = articlesByCluster(c.id);
        if (items.length === 0) return null;
        return (
          <section key={c.id} id={c.id} className="section-beame pt-0">
            <div className="container-beame">
              <Eyebrow>
                {c.number} — {c.name}
              </Eyebrow>
              <p className="section-lead reveal max-w-[760px]">{c.description}</p>
              <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {items.map((a) => (
                  <Link
                    key={a.slug}
                    to="/insights/$slug"
                    params={{ slug: a.slug }}
                    className="card-beame reveal block h-full transition-transform hover:-translate-y-1"
                  >
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary">
                      {a.type}
                    </span>
                    <h3 className="mt-2 text-lg font-bold leading-snug">{a.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{a.dek}</p>
                    <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Updated {a.updated}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal mx-auto max-w-[820px] text-center">
            <Eyebrow>Operator authored</Eyebrow>
            <p className="mt-2 text-sm text-muted-foreground">
              Written by {AUTHOR.name} — {AUTHOR.role}. Every article is reviewed on a
              90-day cadence and updated when platforms change.
            </p>
            <a
              href={AUTHOR.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-beame-ghost mt-5 inline-flex"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
