import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { CtaBand, Eyebrow, FaqList, useReveal } from "@/components/site-ui";
import { AUTHOR } from "@/data/insights/author";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

export const Route = createFileRoute("/insights/$slug")({
  loader: async ({ params }) => {
    // ADR-043: load the catalogue lazily — only article pages pull it in.
    const mod = await import("@/data/insights");
    const article = mod.findArticle(params.slug);
    if (!article) throw notFound();
    const cluster = mod.clusters.find((c) => c.id === article.cluster) ?? null;
    const next =
      (article.nextInCluster ? mod.findArticle(article.nextInCluster) : undefined) ??
      mod.nextArticleInCluster(article.slug) ??
      null;
    const related = mod.articles
      .filter((a) => a.cluster === article.cluster && a.slug !== article.slug)
      .slice(0, 3);
    const bySlug = new Map(mod.articles.map((a) => [a.slug, a]));
    return { article, cluster, next, related, bySlug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — BeameAI by LOGON" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { article } = loaderData;
    const title = `${article.title} — BeameAI by LOGON Insights Hub`;
    return {
      meta: [
        { title },
        { name: "description", content: article.dek },
        { name: "author", content: AUTHOR.name },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.dek },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `${SITE_URL}/insights/${article.slug}` },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/insights/${article.slug}` }],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <section className="section-beame">
      <div className="container-beame mx-auto max-w-[640px] text-center">
        <h1 className="text-3xl font-bold">Article not found</h1>
        <p className="mt-3 text-muted-foreground">
          That insight has moved or never existed. Browse the full library instead.
        </p>
        <Link to="/insights" className="btn-beame mt-6 inline-flex">
          All insights
        </Link>
      </div>
    </section>
  );
}

const chipClass = "chip-beame transition-colors hover:bg-tan";

function ArticlePage() {
  const { article, cluster, next, related, bySlug } = Route.useLoaderData();
  const root = useReveal();
  const keyPoints = article.keyPoints ?? article.takeaways;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.dek,
        author: {
          "@type": "Person",
          name: AUTHOR.name,
          jobTitle: AUTHOR.role,
          sameAs: [AUTHOR.linkedin, AUTHOR.linkedinCanonical],
        },
        publisher: {
          "@type": "Organization",
          name: "BeameAI by LOGON — AI Insights & Consultancy",
        },
        mainEntityOfPage: `${SITE_URL}/insights/${article.slug}`,
        image: OG_IMAGE,
        datePublished: article.published,
        dateModified: article.updated,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Insights", item: `${SITE_URL}/insights` },
          {
            "@type": "ListItem",
            position: 2,
            name: cluster?.name ?? article.type,
            item: `${SITE_URL}/insights#${cluster?.id ?? ""}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: `${SITE_URL}/insights/${article.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div ref={root}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[860px]">
          <nav className="reveal flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            <Link to="/insights" className="hover:text-primary">
              Insights
            </Link>
            <span aria-hidden>/</span>
            <Link
              to="/insights"
              {...(cluster ? { hash: cluster.id } : {})}
              className="hover:text-primary"
            >
              {cluster?.number} {cluster?.name}
            </Link>
            <span aria-hidden>/</span>
            <span className="text-primary">{article.type}</span>
            <span className="ml-2 rounded-none [clip-path:var(--chamfer-chip)] border border-border px-2.5 py-0.5 normal-case tracking-normal">
              Last reviewed {article.updated}
            </span>
          </nav>
          <h1 className="reveal mt-5 text-[clamp(1.8rem,4vw,3.1rem)] leading-[1.08]">
            {article.title}
          </h1>
          <p className="reveal mt-4 opacity-95">{article.dek}</p>
          <p className="reveal mt-5 text-xs font-semibold uppercase tracking-[0.14em] opacity-80">
            Written by {AUTHOR.name} · Reviewed by {article.reviewedBy ?? AUTHOR.name} · Published{" "}
            {article.published} · Updated {article.updated}
          </p>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame mx-auto max-w-[820px]">
          {article.definition ? (
            <div className="card-beame reveal p-6">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary">
                Definition — citation-ready
              </span>
              <p className="mt-2 text-lg font-semibold leading-snug">{article.definition}</p>
            </div>
          ) : null}

          {article.aka || article.quickFacts ? (
            <div className="reveal mt-5 flex flex-wrap items-center gap-2">
              {article.aka?.map((a) => (
                <span key={a} className={chipClass}>
                  {a}
                </span>
              ))}
              {article.quickFacts?.map((qf) => (
                <span key={qf.label} className={chipClass}>
                  <span className="mr-1 font-bold text-foreground">{qf.label}:</span>
                  {qf.value}
                </span>
              ))}
            </div>
          ) : null}

          {article.tldr ? (
            <div className="card-beame reveal mt-5 border-l-4 border-l-primary p-6">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary">
                TL;DR — built to be lifted by AI search
              </span>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {article.tldr.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-primary">▸</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="card-beame reveal mt-5">
            <Eyebrow>Key points</Eyebrow>
            <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
              {keyPoints.map((k, i) => (
                <li key={k} className="flex gap-2">
                  <span className="font-bold text-primary">{i + 1}.</span>
                  <span>{k}</span>
                </li>
              ))}
            </ol>
          </div>

          {article.examples ? (
            <div className="mt-10">
              <Eyebrow>In-context examples</Eyebrow>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {article.examples.map((ex) => (
                  <div
                    key={ex}
                    className="card-beame reveal p-5 text-[0.9rem] leading-relaxed text-muted-foreground"
                  >
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {article.relatedTerms ? (
            <div className="reveal mt-8 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Related:
              </span>
              {article.relatedTerms.map((rt) => {
                if (!bySlug.has(rt.slug)) return null;
                return (
                  <Link
                    key={rt.slug}
                    to="/insights/$slug"
                    params={{ slug: rt.slug }}
                    className={chipClass}
                  >
                    {rt.term}
                  </Link>
                );
              })}
            </div>
          ) : null}

          {article.sections.length > 1 ? (
            <nav className="card-beame reveal mt-10 p-5">
              <Eyebrow>Contents</Eyebrow>
              <ol className="mt-3 grid gap-1.5 text-sm text-muted-foreground">
                {article.sections.map((s, i) => (
                  <li key={s.h}>
                    <a href={`#s${i}`} className="transition-colors hover:text-primary">
                      {i + 1}. {s.h}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <article className="mt-10 space-y-10">
            {article.sections.map((s, i) => (
              <section key={s.h} id={`s${i}`} className="reveal scroll-mt-24">
                <h2 className="text-xl font-bold md:text-2xl">
                  {i + 1}. {s.h}
                </h2>
                {s.inshort ? (
                  <p className="mt-3 rounded-none [clip-path:var(--chamfer-4)] bg-surface-2 px-4 py-3 text-[0.95rem] font-semibold leading-relaxed text-foreground/90">
                    In short — {s.inshort}
                  </p>
                ) : null}
                {s.p.map((p) => (
                  <p key={p} className="mt-3 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {s.code ? (
                  <pre className="mt-4 overflow-x-auto rounded-none [clip-path:var(--chamfer-4)] border border-border bg-surface-2 p-4 text-[0.82rem] leading-relaxed text-foreground/90">
                    <code>{s.code}</code>
                  </pre>
                ) : null}
                {s.bullets ? (
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>

          <div className="card-beame reveal mt-10 p-6 text-center">
            <Eyebrow>Put this into practice</Eyebrow>
            <p className="mx-auto max-w-[640px] text-[0.95rem] leading-relaxed text-muted-foreground">
              Turn these insights into citations. BeameAI by LOGON's AI Search Optimization services
              implement this playbook — and BeameAI, the platform by LOGON, makes brands
              discoverable, recommendable and transactable by AI agents.
            </p>
            <div className="mt-5 hero-ctas">
              <Link to="/services" className="btn-beame">
                AI Search Optimization Services
              </Link>
              <Link to="/" hash="audit" className="btn-beame-ghost">
                Book a free AI Visibility Audit
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="card-beame reveal p-6">
              <Eyebrow>Written by</Eyebrow>
              <p className="font-bold">{AUTHOR.name}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {AUTHOR.role}, Lagos, Nigeria
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{AUTHOR.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={AUTHOR.linkedinCanonical}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-beame inline-flex text-xs"
                >
                  {AUTHOR.name} on LinkedIn
                </a>
                <a
                  href={AUTHOR.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-beame-ghost inline-flex text-xs"
                >
                  Directory profile
                </a>
              </div>
            </div>
            <div className="card-beame reveal p-6">
              <Eyebrow>Reviewed by</Eyebrow>
              <p className="font-bold">{article.reviewedBy ?? AUTHOR.name}</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                90-day review cadence
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Last reviewed {article.updated}. This page is re-checked every 90 days and updated
                when platforms, crawlers or citation patterns change.
              </p>
            </div>
          </div>

          {article.faq ? (
            <div className="mt-12">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="section-title reveal">Frequently asked questions</h2>
              <FaqList items={article.faq} />
            </div>
          ) : null}

          {article.sources ? (
            <div className="mt-12">
              <Eyebrow>Sources</Eyebrow>
              <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
                {article.sources.map((s) => (
                  <li key={s.label} className="flex gap-2">
                    <span className="font-bold text-primary">
                      {article.sources!.indexOf(s) + 1}.
                    </span>
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-2 hover:text-primary hover:underline"
                      >
                        {s.label}
                      </a>
                    ) : (
                      <span>{s.label}</span>
                    )}
                    {s.note ? <span> — {s.note}</span> : null}
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          {next ? (
            <div className="card-beame reveal mt-12 p-6">
              <Eyebrow>Next in {cluster?.name ?? "this cluster"}</Eyebrow>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="max-w-[560px]">
                  <h3 className="text-lg font-bold leading-snug">{next.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{next.dek}</p>
                </div>
                <Link
                  to="/insights/$slug"
                  params={{ slug: next.slug }}
                  className="btn-beame inline-flex"
                >
                  Read next →
                </Link>
              </div>
            </div>
          ) : null}

          <div className="card-beame reveal mt-10 p-6 text-center">
            <p className="text-sm font-semibold">
              Reviewed {article.updated}. We refresh this guide on a 90-day cadence as the AI stack
              evolves.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              See something that changed? Tell us — or book a free discovery call to apply it.
            </p>
            <div className="mt-4 hero-ctas">
              <Link to="/" hash="audit" className="btn-beame">
                Book a free AI Visibility Audit
              </Link>
            </div>
          </div>

          {related.length > 0 ? (
            <div className="mt-12">
              <Eyebrow>More in {cluster?.name ?? "this series"}</Eyebrow>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    to="/insights/$slug"
                    params={{ slug: a.slug }}
                    className="card-beame reveal block h-full transition-transform hover:-translate-y-1"
                  >
                    <h3 className="text-base font-bold leading-snug">{a.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{a.dek}</p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <p className="mt-10 text-sm">
            <Link to="/insights" className="font-semibold text-primary">
              ← All insights
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
