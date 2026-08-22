export type ArticleType =
  | "Complete Guide / Pillar"
  | "Comparison"
  | "Deep Dive"
  | "Definition"
  | "How-To"
  | "Ranked List"
  | "Data & Research";

export interface ArticleSection {
  h: string;
  p: string[];
  bullets?: string[];
  /** Optional pre-formatted code block (JSON-LD, robots.txt, llms.txt, etc.). */
  code?: string;
  /** "In short" — a one-sentence summary of the section, meant to be AI-liftable. */
  inshort?: string;
}

export interface ArticleSource {
  label: string;
  url?: string;
  note?: string;
}

export interface Article {
  slug: string;
  cluster: string;
  type: ArticleType;
  title: string;
  dek: string;
  published: string;
  updated: string;
  takeaways: string[];
  sections: ArticleSection[];

  /* -- Glossary / practitioner template (optional; flagships carry the full set) -- */
  /** Citation-ready definition — the first sentence of the article, meant to be lifted by AI search. */
  definition?: string;
  /** Also-known-as aliases and quick-fact chips. */
  aka?: string[];
  quickFacts?: { label: string; value: string }[];
  /** TL;DR block — meant to be lifted by AI search. */
  tldr?: string[];
  /** In-context examples. */
  examples?: string[];
  /** Related terms with catalogue slugs (avoid 404s). */
  relatedTerms?: { term: string; slug: string }[];
  /** Numbered key points. */
  keyPoints?: string[];
  faq?: { q: string; a: string }[];
  sources?: ArticleSource[];
  reviewedBy?: string;
  nextInCluster?: string;
}

export interface Cluster {
  id: string;
  number: string;
  name: string;
  description: string;
}
