import type { Article, Cluster } from "./types";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";

export * from "./types";
export { AUTHOR } from "./author";

export const articles: Article[] = [...part1, ...part2, ...part3];

export const clusters: Cluster[] = [
  {
    id: "start-here",
    number: "00",
    name: "Start here",
    description:
      "The pillar guide to AI search optimization — how retrieval, extraction and citation fit together across ChatGPT, Perplexity, Claude and Google AI Overviews.",
  },
  {
    id: "foundations",
    number: "01",
    name: "Foundations",
    description:
      "The vocabulary and mental models: GEO versus SEO, how generative engines retrieve, and what actually changes when the answer replaces the results page.",
  },
  {
    id: "definitions",
    number: "02",
    name: "Definitions",
    description:
      "Plain-language definitions of the terms buyers, boards and engineers keep colliding over — written to be quoted verbatim by an assistant.",
  },
  {
    id: "tactics",
    number: "03",
    name: "Tactics & playbooks",
    description:
      "Step-by-step implementation: getting cited by each engine, schema patterns, llms.txt, entity architecture and the crawl-access work that gates all of it.",
  },
  {
    id: "data",
    number: "04",
    name: "Data & research",
    description:
      "Benchmarks, studies and platform changes — with named sources — so claims about AI visibility can be checked rather than believed.",
  },
  {
    id: "technical",
    number: "05",
    name: "AI search technical",
    description:
      "The machine layer: crawlers, structured data, llms.txt and the plumbing that decides whether your content is even retrievable — with deploy-ready code.",
  },
  {
    id: "by-industry",
    number: "06",
    name: "AI search by industry",
    description:
      "Vertical playbooks for the sectors where AI-mediated research already shapes demand — SaaS, commerce, finance, B2B, legal, healthcare and agencies — with NDPA, global AI governance standards and EU AI Act notes where they apply.",
  },
  {
    id: "llmo-services",
    number: "07",
    name: "LLMO services",
    description:
      "Where the playbooks become engagements: diagnostics, deliverables and measurement for organisations that want the work done by practitioners.",
  },
];

export function articlesByCluster(id: string): Article[] {
  return articles.filter((a) => a.cluster === id);
}

export function findArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Month index of a "Mon YYYY" date string, for newest-first sorting. */
function monthIndex(dateStr: string): number {
  const m = MONTHS.indexOf(dateStr.slice(0, 3));
  return m === -1 ? 0 : m;
}

/** Articles sorted newest-first by their updated date (all 2026 in this catalogue). */
export function articlesNewestFirst(limit: number): Article[] {
  return [...articles]
    .sort((a, b) => monthIndex(b.updated) - monthIndex(a.updated))
    .slice(0, limit);
}

/** Next article in the same cluster by catalogue order (for "Next in cluster" navigation). */
export function nextArticleInCluster(slug: string): Article | undefined {
  const idx = articles.findIndex((a) => a.slug === slug);
  const current = articles[idx];
  if (!current) return undefined;
  const cluster = current.cluster;
  const inCluster = articles.filter((a) => a.cluster === cluster);
  const pos = inCluster.findIndex((a) => a.slug === slug);
  return inCluster[pos + 1];
}
