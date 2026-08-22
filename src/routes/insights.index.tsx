import { Link, createFileRoute } from "@tanstack/react-router";

import { CtaBand, Eyebrow, Rail, useReveal } from "@/components/site-ui";
import { InsightLinks } from "@/components/ai-search-sections";
import KineticDotsLoader from "@/components/KineticDotsLoader";
import { AUTHOR } from "@/data/insights/author";
import type { Article, Cluster } from "@/data/insights/types";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

const TITLE = "AI Search & LLMO Insights Hub — BeameAI by LOGON";
const DESC =
  "Research-backed guides on AI strategy, implementation, AI search (LLMO/GEO), agents, statistics and governance. 41 articles across 7 topics, authored by Oluwamayowalogo and updated Aug 2026.";

export const Route = createFileRoute("/insights/")({
  loader: async () => {
    // ADR-043: keep the 42-article catalogue OUT of the main bundle —
    // load it lazily only when this route is requested (separate async chunk).
    const mod = await import("@/data/insights");
    const pillar = mod.articlesByCluster("start-here")[0] ?? null;
    const agentFlag = mod.articles.find((a) => a.slug === "what-is-an-ai-agent") ?? null;
    const recent = mod.articlesNewestFirst(4);
    const topicCount = mod.clusters.filter((c) => c.id !== "start-here").length;
    return {
      articles: mod.articles,
      clusters: mod.clusters,
      pillar,
      agentFlag,
      recent,
      topicCount,
    };
  },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: AUTHOR.name },
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
  pendingComponent: () => <KineticDotsLoader label="Loading the hub" />,
  component: InsightsIndex,
});

function InsightsIndex() {
  const root = useReveal();
  const { articles, clusters, pillar, agentFlag, recent, topicCount } = Route.useLoaderData();

  return (
    <div ref={root}>
      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[920px] text-center">
          <span className="hero-badge reveal">● AI Search &amp; LLMO</span>
          <h1 className="reveal mt-5 text-[clamp(2.1rem,4.8vw,3.8rem)] leading-[1.05]">
            BeameAI by LOGON: AI insights that move organizations forward.
          </h1>
          <p className="reveal mx-auto mt-4 max-w-[760px] opacity-95">
            Research-backed guides on AI strategy, implementation, AI search (LLMO/GEO), agents,
            statistics, and governance — updated continuously as the AI stack evolves. Authored by{" "}
            {AUTHOR.name}.
          </p>
          <div className="reveal mt-7 hero-ctas">
            <Link to="/services" className="btn-beame">
              AI Search Optimization Services
            </Link>
            <Link to="/" hash="audit" className="btn-beame-ghost">
              Book a free AI Visibility Audit
            </Link>
          </div>
          <dl className="ledger reveal mx-auto mt-10 grid max-w-[560px] grid-cols-3 divide-x divide-[var(--line)] border border-[var(--ink)] bg-surface">
            {[
              { v: String(articles.length), k: "Articles" },
              { v: String(topicCount), k: "Topics" },
              { v: "Aug 2026", k: "Updated" },
            ].map((s) => (
              <div key={s.k} className="flex flex-col px-4 py-4">
                <dd className="order-1 text-xl font-extrabold text-primary">{s.v}</dd>
                <dt className="order-2 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {s.k}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {pillar ? (
        <section className="section-beame pt-0">
          <div className="container-beame">
            <div className="grid gap-5 lg:grid-cols-5">
              <div className="card-beame reveal p-6 md:p-8 lg:col-span-3">
                <div className="flex h-full flex-wrap items-start justify-between gap-4">
                  <div className="max-w-[600px]">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary">
                      Editor's Pick
                    </span>
                    <h2 className="mt-2 text-2xl font-bold leading-snug">{pillar.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pillar.dek}
                    </p>
                  </div>
                  <Link
                    to="/insights/$slug"
                    params={{ slug: pillar.slug }}
                    className="btn-beame inline-flex"
                  >
                    Read the guide
                  </Link>
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Published {pillar.published} · Reviewed {pillar.updated}
                </p>
              </div>
              {agentFlag ? (
                <div className="card-beame reveal p-6 md:p-8 lg:col-span-2">
                  <div className="flex h-full flex-col">
                    <div>
                      <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary">
                        Flagship · Glossary
                      </span>
                      <h2 className="mt-2 text-2xl font-bold leading-snug">{agentFlag.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {agentFlag.dek}
                      </p>
                    </div>
                    <div className="mt-auto pt-4">
                      <Link
                        to="/insights/$slug"
                        params={{ slug: agentFlag.slug }}
                        className="btn-beame-ghost inline-flex"
                      >
                        Read the definition
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {clusters.map((c) => {
        const items = articles.filter((a) => a.cluster === c.id);
        if (items.length === 0) return null;
        return (
          <section key={c.id} id={c.id} className="section-beame pt-0">
            <div className="container-beame">
              <Eyebrow>
                {c.number} — {c.name} · {items.length} article{items.length === 1 ? "" : "s"}
              </Eyebrow>
              <p className="section-lead reveal max-w-[760px]">{c.description}</p>
              <Rail label={`Articles in ${c.name}`} className="mt-8">
                {items.map((a) => (
                  <Link
                    key={a.slug}
                    data-rail-item
                    to="/insights/$slug"
                    params={{ slug: a.slug }}
                    className="card-beame reveal block w-[min(86vw,340px)] transition-transform hover:-translate-y-1"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
                      <span className="min-w-0 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary">
                        {a.type}
                      </span>
                      {a.updated === "Aug 2026" ? (
                        <span className="chip-beame accent px-2 py-0.5 text-[0.62rem] uppercase tracking-widest">
                          New
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-2 text-lg font-bold leading-snug">{a.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{a.dek}</p>
                    <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Updated {a.updated}
                    </span>
                  </Link>
                ))}
              </Rail>
            </div>
          </section>
        );
      })}

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>More from AI Search &amp; LLMO</Eyebrow>
          <h2 className="section-title reveal">Recently published or updated in this cluster</h2>
          <p className="section-lead reveal max-w-[760px]">
            Newest first — every card routes to a live article, reviewed on the 90-day cadence
            shown.
          </p>
          <Rail label="Recently published or updated" className="mt-8">
            {recent.map((a) => (
              <Link
                key={a.slug}
                data-rail-item
                to="/insights/$slug"
                params={{ slug: a.slug }}
                className="card-beame reveal block w-[min(86vw,320px)] transition-transform hover:-translate-y-1"
              >
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary">
                  {a.type}
                </span>
                <h3 className="mt-2 text-base font-bold leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.dek}</p>
                <span className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Updated {a.updated}
                </span>
              </Link>
            ))}
          </Rail>
        </div>
      </section>

      <InsightLinks />
      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal mx-auto max-w-[820px] text-center">
            <Eyebrow>Operator authored</Eyebrow>
            <p className="mt-2 text-sm text-muted-foreground">
              Written by {AUTHOR.name} — {AUTHOR.role}, based in Lagos, Nigeria. 100+ production AI
              implementations since 2023, every article reviewed on a 90-day cadence and updated
              when platforms change.
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
