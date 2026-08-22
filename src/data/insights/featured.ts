/**
 * Featured home-page articles — a tiny, curated list that keeps the full
 * 42-article catalogue OUT of the main bundle. The home page only needs
 * title/dek/type/dates; full bodies load with the /insights routes.
 *
 * ADR-010 + ADR-043: content lives in typed data modules; the home page must
 * not import the whole catalogue just to show three cards.
 */
export interface FeaturedArticle {
  slug: string;
  title: string;
  dek: string;
  type: string;
  published: string;
  updated: string;
}

export const featuredHomeArticles: FeaturedArticle[] = [
  {
    slug: "what-is-an-ai-agent",
    title: "What Is an AI Agent?",
    dek: "Definition → perceive–reason–act loop → vs chatbot and workflow → types in production → when not to use → governance → FAQ → sources. The BeameAI by LOGON practitioner glossary entry for AI agents in 2026.",
    type: "Definition",
    published: "Jun 2026",
    updated: "Aug 2026",
  },
  {
    slug: "ai-search-optimization-complete-guide-2026",
    title: "AI Search Optimization: The Complete Guide for 2026",
    dek: "How to get cited by ChatGPT, Perplexity, Claude and Google AI Overviews in 2026 — GEO, LLMO, schema, llms.txt and citation strategy, with sources.",
    type: "Complete Guide / Pillar",
    published: "Apr 2026",
    updated: "Aug 2026",
  },
  {
    slug: "how-to-get-cited-by-chatgpt",
    title: "How to Get Cited by ChatGPT: 12-Step Playbook for 2026",
    dek: "Twelve ordered signals, GPT-5 and ChatGPT Search v2 changes, the Bing index prerequisite, schema patterns and publisher-deal context explained.",
    type: "How-To",
    published: "Apr 2026",
    updated: "Aug 2026",
  },
];
