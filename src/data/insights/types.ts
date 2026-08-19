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
}

export interface Cluster {
  id: string;
  number: string;
  name: string;
  description: string;
}

export const AUTHOR = {
  name: "Oluwamayowa",
  role: "AI Search & LLMO Strategist, LOG_ON",
  linkedin: "https://www.linkedin.com/pub/dir/Logo/Oluwamayowa",
  bio: "Oluwamayowa leads AI search and LLMO research at LOG_ON, the parent brand behind BeameAI. He works with B2B and commerce teams on entity architecture, structured data and citation strategy across ChatGPT, Perplexity, Claude, Copilot and Google AI Overviews.",
};
