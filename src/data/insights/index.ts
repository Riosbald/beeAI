import type { Article, Cluster } from "./types";
import { part1 } from "./part1";
import { part2 } from "./part2";

export * from "./types";

export const articles: Article[] = [...part1, ...part2];

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
];

export function articlesByCluster(id: string): Article[] {
  return articles.filter((a) => a.cluster === id);
}

export function findArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
