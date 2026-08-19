import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { CtaBand, Eyebrow, useReveal } from "@/components/site-ui";
import { AUTHOR, articles, clusters, findArticle } from "@/data/insights";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = findArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — BeameAI" }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    const title = `${article.title} — BeameAI by LOG_ON`;
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

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const root = useReveal();
  const cluster = clusters.find((c) => c.id === article.cluster);
  const related = articles
    .filter((a) => a.cluster === article.cluster && a.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.dek,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      jobTitle: AUTHOR.role,
      sameAs: [AUTHOR.linkedin],
    },
    publisher: { "@type": "Organization", name: "BeameAI by LOG_ON" },
    mainEntityOfPage: `${SITE_URL}/insights/${article.slug}`,
    image: OG_IMAGE,
  };

  return (
    <div ref={root}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[820px]">
          <span className="hero-badge reveal">● {article.type}</span>
          <h1 className="reveal mt-5 text-[clamp(1.8rem,4vw,3.1rem)] leading-[1.08]">
            {article.title}
          </h1>
          <p className="reveal mt-4 opacity-95">{article.dek}</p>
          <p className="reveal mt-5 text-xs font-semibold uppercase tracking-[0.14em] opacity-80">
            By {AUTHOR.name} · Published {article.published} · Updated {article.updated}
          </p>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame mx-auto max-w-[820px]">
          <div className="card-beame reveal">
            <Eyebrow>Key takeaways</Eyebrow>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {article.takeaways.map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="text-primary">▸</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <article className="mt-10 space-y-9">
            {article.sections.map((s) => (
              <section key={s.h} className="reveal">
                <h2 className="text-xl font-bold md:text-2xl">{s.h}</h2>
                {s.p.map((p) => (
                  <p key={p} className="mt-3 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
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

          <div className="card-beame reveal mt-10">
            <Eyebrow>About the author</Eyebrow>
            <p className="mt-2 text-sm text-muted-foreground">{AUTHOR.bio}</p>
            <a
              href={AUTHOR.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-beame-ghost mt-5 inline-flex"
            >
              {AUTHOR.name} on LinkedIn
            </a>
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
