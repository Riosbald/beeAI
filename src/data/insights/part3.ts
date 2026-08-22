import type { Article } from "./types";

export const part3: Article[] = [
  // 05 Technical
  {
    slug: "llms-txt-guide-2026",
    cluster: "technical",
    type: "How-To",
    title: "llms.txt Guide 2026: How to Create & Optimize for AI Crawlers",
    dek: "Complete llms.txt guide: format spec, deployment, real code examples, validation. The Jeremy Howard / Answer.AI standard for machine-readable site summaries.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "llms.txt is a machine-readable index, not a replacement for your content.",
      "A curated, small file outperforms a dump of every URL you own.",
      "Pair it with robots.txt allowances and a clean sitemap; no single file is enough.",
    ],
    sections: [
      {
        h: "What llms.txt is and is not",
        p: [
          "llms.txt is the standard proposed by Jeremy Howard and Answer.AI for giving language models a distilled, human-curated summary of what a site is and where its most important information lives. A model that wants to understand your domain can read the file in seconds instead of crawling hundreds of pages — and a model that reads it is far more likely to describe your business accurately in an answer.",
          "It is not a ranking lever on its own, and it does not bypass robots.txt. It is a signal of intent and structure: the file says, in effect, 'if you only take one thing from this domain, take this.'",
        ],
      },
      {
        h: "The format spec",
        p: [
          "The spec is deliberately minimal: one block per URL, with an optional title line and optional H1 markdown sections.",
        ],
        code: `# llms.txt

> BeameAI by LOGON — AI Search & LLMO consultancy, Lagos, Nigeria.

## Flagship guides

[AI Search Optimization: The Complete Guide for 2026](https://beameai.ng/insights/ai-search-optimization-complete-guide-2026)
[How to Get Cited by ChatGPT: 12-Step Playbook for 2026](https://beameai.ng/insights/how-to-get-cited-by-chatgpt)

## Services

[AI Search Optimization Services](https://beameai.ng/services)`,
      },
      {
        h: "Deploying and validating",
        p: [
          "Place the file at the site root as /llms.txt, keep it under a few dozen links, and order entries by strategic value rather than alphabetical tidiness. Validate by curling it from a neutral network, checking the response is 200 with a text/plain content type, and confirming no WAF rule blocks the path.",
          "If you maintain llms-full.txt for the long tail, keep the short file curated. Assistants that hit length limits will consume the short file, and an unfocused one is worse than none.",
        ],
      },
      {
        h: "Where it fits in the stack",
        p: [
          "Think of llms.txt as the machine-readable equivalent of your about page. It works with, not instead of, robots.txt allowances for each crawler, a sitemap that reflects your real information architecture, and Schema.org that lets a model verify the entity relationships the file claims. For African and global teams alike, it is the cheapest way to make a domain legible to a cold model — which is precisely the audience that decides whether you are cited.",
        ],
      },
    ],
  },
  {
    slug: "schema-org-for-ai",
    cluster: "technical",
    type: "How-To",
    title: "Schema.org for AI: Structured Data That LLMs Understand (2026)",
    dek: "How to write Schema.org for AI search: real JSON-LD code for Article, FAQPage, HowTo, Organization, Person + DefinedTerm — validated and ready to deploy.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "JSON-LD in the head is the format models parse most reliably.",
      "Organization + Person + sameAs is the minimum viable entity graph.",
      "Validate before deploy and monitor after — broken markup is worse than none.",
    ],
    sections: [
      {
        h: "Why structured data survives extraction",
        p: [
          "A generative engine has to decide what your page claims, who makes the claim, and whether the claim can be verified elsewhere. Schema.org markup compresses that work: it states the entity, the relationship, and the property in a form that does not depend on prose. In 2026, every major assistant grounds answers in structured understanding to some degree, and the sites that ship clean JSON-LD consistently resolve better than equally authoritative pages without it.",
        ],
      },
      {
        h: "The minimum entity graph: Organization, Person, sameAs",
        p: [
          "This is the foundation for any brand that wants to be described correctly in AI answers. Deploy it on every page that mentions the brand.",
        ],
        code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BeameAI by LOGON",
  "url": "https://beameai.ng",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lagos",
    "addressCountry": "NG"
  },
  "sameAs": [
    "https://www.linkedin.com/in/oluwamayowa"
  ],
  "founder": {
    "@type": "Person",
    "name": "Oluwamayowalogo",
    "jobTitle": "Lead AI Strategist",
    "sameAs": ["https://www.linkedin.com/in/oluwamayowa"]
  }
}
</script>`,
      },
      {
        h: "Article and FAQPage for quotable content",
        p: [
          "Articles carry author, datePublished and dateModified — the three fields an assistant uses to decide whether a source is fresh and attributable. FAQPage gives the model ready-made question-answer pairs it can restate verbatim, which is why FAQ blocks remain among the most cited page elements in prompt audits.",
        ],
        code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "AI Search Optimization: The Complete Guide for 2026",
  "author": { "@type": "Person", "name": "Oluwamayowalogo",
              "sameAs": "https://www.linkedin.com/in/oluwamayowa" },
  "datePublished": "2026-04-02",
  "dateModified": "2026-08-05",
  "publisher": { "@type": "Organization", "name": "BeameAI by LOGON" }
}
</script>`,
      },
      {
        h: "DefinedTerm: the glossary play",
        p: [
          "For definitional content — LLMO, GEO, citation optimization — wrap each term in DefinedTerm within a DefinedTermSet. Models building a vocabulary to answer definition prompts reach for machine-readable definitions first. It is the single most underused schema type in African B2B content.",
        ],
      },
      {
        h: "Validate and govern",
        p: [
          "Run every template through the Schema Markup Validator and Google's Rich Results Test, then make schema part of your review checklist rather than a launch-day afterthought. A schema regression that silently drops your entity markup for a quarter is invisible in conventional analytics and shows up only as a slow decay in AI visibility.",
        ],
      },
    ],
  },
  {
    slug: "citation-optimization-for-ai",
    cluster: "technical",
    type: "How-To",
    title: "Citation Optimization for AI: Get Linked from AI Answers (2026)",
    dek: "Citation optimization is the #1 LLMO lever (Aggarwal et al. 2024: up to 40% lift). Tier-1 source hierarchy, inline citation patterns, inbound citation tactics.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Assistants quote sources that are named, dated and specific.",
      "Tier-1 citations — regulators, statistical agencies, standards bodies — outrank marketing claims.",
      "Being cited by tier-1 sources compounds your own citation share.",
    ],
    sections: [
      {
        h: "The citation layer is the #1 lever",
        p: [
          "Aggarwal et al. (2024) measured which content interventions actually moved visibility inside generative engines and found citation-rich writing among the strongest — up to roughly 40% improvement for some content types. The mechanism is intuitive: a cautious assistant will not repeat a claim it cannot attribute, so the pages that hand it an attributable sentence win the extraction game.",
        ],
      },
      {
        h: "The tier-1 source hierarchy",
        p: [
          "Not all citations are equal. Models weight sources by perceived authority, and the hierarchy is roughly consistent across assistants:",
        ],
        bullets: [
          "Regulators and statistical agencies: Central Bank of Nigeria, NBS, NITDA, NDPC; international organisations; World Bank, IMF, BIS, UN agencies.",
          "Standards bodies: ISO (including ISO 42001), IEEE, W3C, Schema.org.",
          "Peer-reviewed research and universities: PubMed, arXiv, institutional repositories.",
          "Major industry data: Gartner, Forrester, IDC, Grand View Research — cited with dates.",
          "Your own first-party data — but only when it is specific, dated and verifiable.",
        ],
      },
      {
        h: "Inline citation patterns that get quoted",
        p: [
          "Attach the source in the same sentence as the claim, with a date and, where possible, a number. A model extracting a sentence should not have to hunt for provenance.",
          "Weak: 'AI search is reshaping marketing.' Strong: 'SparkToro's 2024 analysis found roughly 60% of US Google searches ended without a click, and generative answers have accelerated that curve.' The second sentence is quotable because it is specific, dated and attributed.",
        ],
      },
      {
        h: "Inbound citation tactics",
        p: [
          "The compounding move is to make tier-1 sources cite you. Publish original data and give journalists and researchers clean numbers to quote; brief analysts; submit to standards and conference proceedings; and document every third-party mention on your entity page with sameAs links. When a model verifies your claim against an independent source, your citation share stops depending on your own site alone.",
        ],
      },
    ],
  },
  {
    slug: "ai-crawler-management",
    cluster: "technical",
    type: "Deep Dive",
    title: "AI Crawler Management: GPTBot, ClaudeBot, PerplexityBot & More",
    dek: "Complete AI crawler reference: user agents per platform (OpenAI, Anthropic, Google, Perplexity, Common Crawl) with robots.txt syntax + strategic allow/block decisions.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Search-grounding crawlers and training crawlers are different agents with different purposes.",
      "An allow-list strategy keeps you visible where answers are generated.",
      "Server logs are the only ground truth for whether a crawler can actually reach you.",
    ],
    sections: [
      {
        h: "The crawler landscape in 2026",
        p: [
          "Each major assistant operates at least one crawler, and they are not interchangeable. The ones that matter most for AI search visibility:",
        ],
        bullets: [
          "OpenAI — OAI-SearchBot (search grounding and citations) and GPTBot (training).",
          "Google — Google-Extended (training and Gemini grounding) alongside Googlebot.",
          "Anthropic — ClaudeBot (training and grounding).",
          "Perplexity — PerplexityBot (live retrieval).",
          "Microsoft — Bingbot and BingBot-Extended; Copilot grounds in the Bing index.",
          "Common Crawl — bulk web data used in training pipelines; its snapshot timing matters.",
        ],
      },
      {
        h: "robots.txt in practice",
        p: ["A deliberate allow-list strategy for a brand that wants AI visibility:"],
        code: `# Allow search-grounding agents that drive citations
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

# Bingbot must be allowed — Copilot and ChatGPT Search both rely on Bing indexation
User-agent: Bingbot
Allow: /

# Training policy is a business decision, not a default
User-agent: GPTBot
Disallow: /`,
      },
      {
        h: "The strategic decision: grounding vs training",
        p: [
          "Allowing a search-grounding crawler is the visibility decision; allowing a training crawler is a data-governance decision. Many organisations allow grounding and block training, and that is a defensible default. Whatever you choose, document it — compliance teams, and increasingly clients, ask. Under the Nigeria Data Protection Act and emerging global AI governance standards guidance, a written, proportionate crawler policy is itself a governance signal.",
        ],
      },
      {
        h: "Monitor at the edge",
        p: [
          "Robots.txt says 'may'; your WAF, CDN and security rules decide 'can'. The classic failure is a bot-mitigation rule that 403s PerplexityBot or OAI-SearchBot while pretending to allow them. Check server logs for each user agent monthly, confirm 200 responses, and set an alert when any grounding crawler's hit rate collapses — that is usually the first symptom of a visibility outage that will not show in Google Search Console.",
        ],
      },
    ],
  },
  {
    slug: "faq-schema-for-ai-search",
    cluster: "technical",
    type: "How-To",
    title: "FAQ Schema for AI Search: Complete 2026 Guide (with JSON-LD)",
    dek: "FAQ schema still matters for LLMs even after Google narrowed Rich Results in 2023. Real JSON-LD code, sourcing tactics, validation — for AI Overviews + ChatGPT/Claude.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Google restricted FAQ rich results in 2023; LLM extraction did not go away.",
      "A sourced 40–60 word answer is the most quoted element in prompt audits.",
      "Question phrasing should match real assistant queries, not internal terminology.",
    ],
    sections: [
      {
        h: "What actually changed in 2023",
        p: [
          "In August 2023 Google restricted FAQ rich results to authoritative government and health sites. The understandable conclusion — 'FAQ schema is dead' — conflates Google's SERP policy with machine readability. ChatGPT, Claude and Perplexity still prize clean question-answer pairs, and Google's own AI Overviews synthesises answers from exactly that content. FAQPage JSON-LD remains one of the highest-yield schema types for AI visibility.",
        ],
      },
      {
        h: "The JSON-LD template",
        p: [
          "Answer each question in 40–60 words, lead with the conclusion, and attach a source where the answer contains a factual claim.",
        ],
        code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is LLMO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LLMO (large language model optimization) is the practice of making a brand retrievable, extractable and quotable by generative engines. It covers crawler access, entity schema, citation-worthy content and llms.txt. In 2026 it is measured by share of citation, not rank position."
      }
    }
  ]
}
</script>`,
      },
      {
        h: "Sourcing tactics inside FAQ answers",
        p: [
          "Every factual answer should name a date and a source: 'per the Central Bank of Nigeria's 2026 report', 'per SparkToro's 2024 analysis'. Because a model may quote the answer verbatim, the source travels with the quote — which is exactly the attribution you want. Keep questions phrased the way buyers actually ask assistants, pulled from your prompt audit, not the way your sales team describes the product.",
        ],
      },
      {
        h: "Validation and governance",
        p: [
          "Validate each FAQ block with the Schema Markup Validator, keep the visible FAQ and the JSON-LD identical, and review quarterly: assistant query behaviour shifts, and a question that mattered in January is often dead by August. A live, honest FAQ is a small machine-readable knowledge base; a stale one teaches models that your dates cannot be trusted.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-analytics",
    cluster: "technical",
    type: "How-To",
    title: "AI Search Analytics: Measure Your AI Visibility (2026 Guide)",
    dek: "Five LLMO measurement methods: prompt audits, citation tracking tools (Profound/Otterly/Ziptie), GA4 referrer filters, GSC monitoring, server log analysis.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Rank tracking is the wrong frame; share of citation is the right one.",
      "A quarterly prompt audit is the baseline every team can run.",
      "Combine first-party data — GA4, GSC, logs — with sampled prompt data.",
    ],
    sections: [
      {
        h: "Why rank tracking is the wrong frame",
        p: [
          "AI visibility does not produce a position; it produces a sentence, a citation or an omission. The metric that matters is share of citation: of the answers your buyer prompts generate, what fraction name your brand. Tracking keywords you do not rank for is the old game; tracking whether the answer to your buyer's question carries your name is the new one.",
        ],
      },
      {
        h: "Method 1: the prompt audit",
        p: [
          "The foundational practice. Define 40–60 buyer questions grouped by stage, run them monthly against ChatGPT, Perplexity, Claude and Google AI Overviews, and record every cited domain and the sentiment of any brand mention. Keep the prompt set frozen — changing prompts invalidates the comparison. A spreadsheet with disciplined logging beats an enterprise dashboard that samples loosely.",
        ],
      },
      {
        h: "Methods 2–5: tooling and first-party data",
        p: ["Each method answers a different question; run all five."],
        bullets: [
          "Citation tools (Profound, Otterly.ai, Ziptie, AthenaHQ): sampled, automated share-of-citation across assistants — useful once your prompt set is stable.",
          "GA4 referrer and traffic filters: AI crawlers and assistant-referred sessions appear as referrers such as chat.openai.com, perplexity.ai, claude.ai and copilot.microsoft.com; segment and trend them.",
          "Google Search Console: monitor AI Overviews impressions separately and track brand-query growth — brand search is the leading indicator of AI-mediated demand.",
          "Server logs: per-user-agent crawl frequency, 200/403 status, and bandwidth — the only ground truth on access-layer health.",
        ],
      },
      {
        h: "The cadence that compounds",
        p: [
          "Run the frozen prompt set monthly; publish a share-of-citation scorecard quarterly; tie it to brand search, referral sessions and discovery-call source data. That linkage — citation to pipeline — is what turns LLMO from a novelty metric into a line item your CFO will fund again.",
        ],
      },
    ],
  },
  {
    slug: "site-architecture-for-ai-crawlers",
    cluster: "technical",
    type: "How-To",
    title: "Site Architecture for AI Crawlers: Hub-and-Spoke for LLMs",
    dek: "Site architecture optimized for AI crawlers: hub-and-spoke pattern, URL structure, internal linking density, BreadcrumbList schema, llms.txt + sitemap + robots.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "A hub-and-spoke structure mirrors how assistants group evidence around a topic.",
      "Short, stable URLs and dense internal links make extraction cheaper and more accurate.",
      "The machine layer — llms.txt, sitemap, robots — must agree with the visible layer.",
    ],
    sections: [
      {
        h: "Hub-and-spoke for extraction",
        p: [
          "Assistants build an answer from a shortlist of passages, and the structure of your site tells a crawler which passages belong together. A hub page (the definitive guide) with spokes (each answering one buyer question) creates a topic cluster a model can traverse and cite coherently. Flat, sprawling architectures force a crawler to guess; clusters let it navigate.",
        ],
      },
      {
        h: "URL and linking rules",
        p: ["The rules that keep the machine layer cheap and correct."],
        bullets: [
          "Keep URLs short, stable and descriptive — never change a URL a model has cited.",
          "Link every spoke to its hub and every hub to its spokes; 3–5 contextual links per page is a healthy density.",
          "Use descriptive anchor text; models read anchors as topic signals.",
          "Avoid parameter-heavy URLs, redirect chains and pagination depth beyond two levels.",
          "Add BreadcrumbList schema so the model can place any page in your hierarchy.",
        ],
      },
      {
        h: "BreadcrumbList schema",
        p: ["A small schema that pays disproportionately in machine understanding."],
        code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Insights",
      "item": "https://beameai.ng/insights" },
    { "@type": "ListItem", "position": 2, "name": "AI Search & LLMO",
      "item": "https://beameai.ng/insights/ai-search-optimization-complete-guide-2026" }
  ]
}
</script>`,
      },
      {
        h: "The machine layer must agree with the visible layer",
        p: [
          "llms.txt, sitemap.xml and robots.txt should tell the same story as your navigation: same hubs, same spokes, same priorities. When they disagree — a sitemap listing pages robots blocks, an llms.txt pointing at a de-indexed page — the model resolves the conflict by dropping you. Architecture is not decoration; it is the retrieval contract between your content and the engines that decide who gets cited.",
        ],
      },
    ],
  },
  {
    slug: "content-freshness-ai-search",
    cluster: "technical",
    type: "Deep Dive",
    title: "Content Freshness & AI Search: Why Dates Matter (2026)",
    dek: "Why content freshness matters more in AI search. Schema.org datePublished/dateModified, visible 'Updated' badges, 90-day review cadence by content type.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Assistants expose stale dates ruthlessly and weight recent material.",
      "dateModified must reflect genuine review — models and users both check.",
      "Refreshing a cited page usually beats publishing a new one.",
    ],
    sections: [
      {
        h: "Recency is a first-class ranking signal inside answers",
        p: [
          "When an assistant synthesises an answer about a fast-moving topic — AI search itself being the canonical example — it privileges pages with credible recent dates. SparkToro's zero-click research and the 2024–2026 platform timeline show how quickly the answer set turns over. A page last touched in 2024 is not just stale; it is actively excluded in favour of a competitor who updated in 2026.",
        ],
      },
      {
        h: "Dates in schema and in the UI",
        p: [
          "Publish dateModified in Article schema, show it to humans, and make it honest. The combination matters:",
        ],
        code: `"datePublished": "2026-04-02",
"dateModified": "2026-08-05"`,
        bullets: [
          "Visible 'Updated Aug 2026' badge directly under the headline.",
          "dateModified updated in schema on the same day the content changes.",
          "No cosmetic date bumps — models and readers can both detect them, and the trust cost is severe.",
        ],
      },
      {
        h: "A 90-day review cadence by content type",
        p: ["Set cadences by how fast the facts change, not by convenience:"],
        bullets: [
          "Statistics and market data — quarterly, with sources re-verified.",
          "Platform behaviour (crawlers, features, citation patterns) — every 90 days.",
          "Definitions and fundamentals — twice a year.",
          "Compliance notes (NDPA, global AI governance standards, EU AI Act) — quarterly, because regulation moves.",
          "Case studies — on any material outcome change.",
        ],
      },
      {
        h: "The economics of refresh versus publish",
        p: [
          "Because assistants accumulate trust in a page that has a history of accurate updates, refreshing an existing cited page compounds: each review adds a dateModified event, and each event reinforces the freshness signal. Publishing a new page fragments the trust. The default should be refresh; publish only for genuinely new questions.",
        ],
      },
    ],
  },

  // 06 By industry
  {
    slug: "ai-search-saas",
    cluster: "by-industry",
    type: "Deep Dive",
    title: "AI Search Optimization for SaaS Companies (2026 Playbook)",
    dek: "Why SaaS is uniquely exposed to LLM-mediated buyer research. Schema, comparison content, G2/Capterra strategy, and the BeameAI by LOGON LLMO Citation Benchmark.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "SaaS buyers shortlist inside ChatGPT and Perplexity before they ever visit a pricing page.",
      "Comparison content and review-platform data are the two highest-leverage surfaces.",
      "A frozen prompt set across 40–60 buyer prompts becomes your category benchmark.",
    ],
    sections: [
      {
        h: "The SaaS buying journey moved into assistants",
        p: [
          "Software research is the canonical AI search use case: buyers ask for recommendations, alternatives and comparisons in natural language, and the assistant answers with a shortlist. For SaaS, the cost of absence is not a lost rank — it is being omitted from the answer entirely while two competitors share the citation. In 2026, category-defining SaaS brands treat appearing in the AI shortlist as a pipeline stage.",
        ],
      },
      {
        h: "The playbook",
        p: ["What moves the needle for software companies."],
        bullets: [
          "Entity clarity: Organization, SoftwareApplication and Person schema; consistent naming on G2, Capterra, Product Hunt, GitHub and LinkedIn.",
          "Comparison content: own your 'vs' pages with honest, dated feature matrices — assistants cite them constantly.",
          "Review-platform strategy: reviews feed model grounding; respond, consolidate and let genuine volume build.",
          "Documentation as citation bait: well-structured docs get quoted for implementation and troubleshooting prompts.",
          "Public pricing and changelog: both are high-freshness, machine-readable assets.",
        ],
      },
      {
        h: "The BeameAI by LOGON LLMO Citation Benchmark",
        p: [
          "We run a frozen set of 40–60 buyer prompts monthly — category questions, comparison queries, alternative-seeking queries — and track which vendors the assistants name. It is the same method we use for enterprise clients, and it turns 'we want to be mentioned by AI' from a wish into a measured gap with a remediation list.",
        ],
      },
      {
        h: "African and global SaaS alike",
        p: [
          "The method transfers across markets, but the source mix differs: a Lagos-based fintech SaaS should anchor citations in CBN and NDPC publications and NITDA guidance, while a global platform layers Gartner and Forrester on top. Buyers in every region ask assistants the same questions; the winning vendors are the ones that made themselves easy to verify everywhere the model looks.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-ecommerce",
    cluster: "by-industry",
    type: "Deep Dive",
    title: "AI Search Optimization for E-commerce: Product Schema & Reviews",
    dek: "AI search optimization for e-commerce: full Product/Offer/AggregateRating/Review JSON-LD, category page LLMO, comparison content, brand authority signals.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Product data is the product for shopping agents; schema is how they read it.",
      "Aggregate ratings and review velocity are among the strongest brand-verification signals.",
      "Cross-border commerce rewards complete offer, shipping and return data.",
    ],
    sections: [
      {
        h: "What shopping agents need",
        p: [
          "An agent recommending a product wants price, availability, shipping terms, ratings and return policy — in machine-readable form. A beautiful product page that states none of it clearly is, to a shopping agent, indistinguishable from an empty page. E-commerce LLMO is less about prose and more about data completeness.",
        ],
      },
      {
        h: "The Product schema stack",
        p: ["Deploy this on every product page, with real offers and genuine aggregate ratings."],
        code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "BeameAI by LOGON LLMO Audit",
  "image": "https://beameai.ng/assets/llmo-audit.jpg",
  "description": "A prompt-based audit of your brand's citation share across ChatGPT, Perplexity, Claude and Google AI Overviews.",
  "offers": {
    "@type": "Offer",
    "price": "350000",
    "priceCurrency": "NGN",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47"
  }
}
</script>`,
      },
      {
        h: "Category pages and comparison content",
        p: [
          "Category pages should answer the question the shopper actually asked — 'best CRM for Nigerian SMEs' — with a shortlist, selection criteria and dated evidence, not a wall of tiles. Comparison content earns citations in both AI Overviews and shopping-agent summaries. Review velocity matters too: assistants weight recent, specific reviews more than cumulative counts.",
        ],
      },
      {
        h: "Brand authority and cross-border readiness",
        p: [
          "The same entity work applies: consistent brand naming across marketplaces, social profiles and payment pages, plus clean data on currency, delivery windows and returns for the markets you serve. Under the Nigeria Data Protection Act, customer data handling across review and loyalty features must be documented — and a documented privacy posture is itself a trust signal models weigh when deciding whether to recommend a merchant.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-financial-services",
    cluster: "by-industry",
    type: "Deep Dive",
    title: "AI Search Optimization for Financial Services: YMYL, NDPA & EU AI Act",
    dek: "Finance has the highest LLMO bar (YMYL). Author credentials, regulator citations (CBN, SEC Nigeria, BIS/IMF), FinancialService schema, NDPA and EU AI Act compliance for fintech AI.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Financial content sits under the strictest YMYL bar — models decline to answer without credible sources.",
      "Regulator-first citation hierarchies (CBN, SEC Nigeria, NDPC, BIS, IMF) decide who gets quoted.",
      "NDPA and EU AI Act compliance is a visibility asset, not just a legal burden.",
    ],
    sections: [
      {
        h: "The YMYL bar in an LLM world",
        p: [
          "Your Money or Your Life content — financial advice, lending, investing — carries the highest quality bar in AI search. A cautious assistant will answer a money question from a regulator or a named institution and skip an anonymous blog entirely, regardless of its prose. For financial services, citation strategy is not a nice-to-have; it is the whole game.",
        ],
      },
      {
        h: "The regulator-first citation hierarchy",
        p: ["Ground claims in the sources models trust most for money questions:"],
        bullets: [
          "Nigeria: Central Bank of Nigeria publications, SEC Nigeria, NITDA, Nigeria Data Protection Commission (NDPC).",
          "Global: international organisations (UN agencies, AfDB, World Bank, BIS, IMF) and global AI governance standards.",
          "Global: BIS, IMF, World Bank, and — where you serve those markets — ECB and EU regulators.",
          "Standards: ISO 42001 for AI management systems.",
        ],
      },
      {
        h: "Credentials, schema and disclosure",
        p: [
          "Every financial author needs a Person schema with credentials, and every page needs FinancialService or ProfessionalService markup plus clear disclosure of regulatory status. The combination tells a model: this institution, these named people, this licence. That is the trust package YMYL extraction requires.",
        ],
        code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "BeameAI by LOGON Advisory",
  "areaServed": ["NG", "KE", "ZA", "GB"],
  "founder": { "@type": "Person", "name": "Oluwamayowalogo" },
  "address": { "@type": "PostalAddress",
               "addressLocality": "Lagos", "addressCountry": "NG" }
}
</script>`,
      },
      {
        h: "Compliance as a visibility asset",
        p: [
          "Fintechs serving European markets must map EU AI Act obligations for high-risk use cases; every organisation handling Nigerian customer data must evidence NDPA compliance through the NDPC's lawful-basis and data-minimisation requirements. Increasingly, models and buyers check for exactly these signals. A published AI governance statement, an ISO 42001-aligned AI management system, and NDPA documentation are becoming citation factors in their own right.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-b2b",
    cluster: "by-industry",
    type: "Deep Dive",
    title: "AI Search Optimization for B2B: Long-Form, Comparison & Brand",
    dek: "B2B buyers research via ChatGPT and Perplexity before contacting vendors. Long-form, schema, Tier-1 citation hierarchy (Gartner/Forrester/IDC), comparison content.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "The B2B shortlist is now drafted inside assistants before sales ever engages.",
      "Long-form with structure and comparison content earn the citations that feed that shortlist.",
      "Analyst and standards citations compound your brand's verifiability.",
    ],
    sections: [
      {
        h: "The B2B research loop",
        p: [
          "The modern enterprise buying committee starts with an assistant: 'which vendors meet this requirement, what do customers say, how do the top three compare?' The assistant compiles the shortlist, and the shortlist then filters which vendors ever get a meeting. For B2B, LLMO is lead generation at the earliest possible stage — before intent is even visible to your CRM.",
        ],
      },
      {
        h: "Content shapes that earn citations",
        p: ["The formats assistants cite most in B2B answers:"],
        bullets: [
          "Definitive long-form guides with a dated evidence trail — the hub of your topic cluster.",
          "Comparison pages and feature matrices — the single most-quoted format for 'vs' queries.",
          "Named-outcome case studies with verifiable metrics.",
          "Methodology pages that explain how you work — models quote them to describe your process.",
          "Person schema and executive bios for every visible leader, with credentials and sameAs links.",
        ],
      },
      {
        h: "The Tier-1 citation hierarchy for B2B",
        p: [
          "Enterprise assistants weight analyst research, standards and customer evidence above vendor claims. Map your claims to Gartner, Forrester or IDC where you genuinely appear; anchor methodology claims in ISO/IEC standards; and keep customer outcomes specific, dated and linkable. Every sentence a model can verify independently is a sentence it can safely repeat about you.",
        ],
      },
      {
        h: "Bridging African and global procurement",
        p: [
          "Buyers in Lagos, Nairobi and Johannesburg run the same research loop, often against global vendors with heavier citation footprints. That is the opportunity: regional vendors who anchor in NITDA, NDPC and AU sources, publish comparison content honestly, and document outcomes are frequently better verified in local answers than their global competitors — because the global brands never did the local entity work.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-legal",
    cluster: "by-industry",
    type: "Deep Dive",
    title: "AI Search Optimization for Legal & Professional Services 2026",
    dek: "Legal services LLMO under YMYL: bar credentials, LegalService schema, Tier-1 statute citation hierarchy, and compliance notes for legal AI tools.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Legal answers are high-stakes; assistants default to the most credentialed, most citable sources.",
      "Bar credentials, LegalService schema and statute-first citation hierarchies form the trust package.",
      "Client confidentiality and NDPA obligations shape what you may make machine-readable at all.",
    ],
    sections: [
      {
        h: "Why legal queries are high-stakes for LLMs",
        p: [
          "A wrong legal answer is a liability for the assistant and the firm alike, so models apply the strictest sourcing standards: named lawyers with verifiable credentials, primary sources over commentary, and jurisdiction-aware answers. Firms that publish anonymous, uncited content are invisible to this standard no matter how well they rank in classic search.",
        ],
      },
      {
        h: "The trust package",
        p: ["Credentials, schema and sourcing, in that order."],
        bullets: [
          "Person schema for every named attorney with bar membership, practice areas and sameAs links.",
          "LegalService schema on practice pages with the jurisdiction and regulators named.",
          "A Tier-1 citation hierarchy: statutes and regulations, court decisions, bar and regulatory guidance, law-reform commission papers — always with jurisdiction and date.",
          "Dated summaries of changes in law; assistants cite the firm that explained the change first.",
        ],
      },
      {
        h: "LegalService schema",
        p: ["A minimal, correct template for a practice page:"],
        code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "BeameAI by LOGON Legal Advisory",
  "areaServed": "NG",
  "address": { "@type": "PostalAddress",
               "addressLocality": "Lagos", "addressCountry": "NG" },
  "employee": [
    { "@type": "Person", "name": "Oluwamayowalogo",
      "jobTitle": "Partner", "sameAs": "https://www.linkedin.com/in/oluwamayowa" }
  ]
}
</script>`,
      },
      {
        h: "Compliance: confidentiality first",
        p: [
          "Professional conduct rules and the Nigeria Data Protection Act constrain what you may publish about clients — which shapes LLMO strategy: publish legal analysis and firm expertise, never client data without consent. For firms building or procuring legal AI tools, EU AI Act and emerging global AI governance standards guidance on high-risk systems apply to legal-assistance products. A documented governance stance here is increasingly part of what enterprise clients verify before they instruct a firm.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-healthcare",
    cluster: "by-industry",
    type: "Deep Dive",
    title: "AI Search Optimization for Healthcare: YMYL & Medical Schema",
    dek: "Healthcare LLMO under the highest YMYL bar: medical credentials, MedicalCondition/Drug/Hospital schema, Tier-1 PubMed/WHO/NIH citations, EU AI Act Annex III.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Health answers carry the highest possible YMYL bar — uncredentialed content is filtered outright.",
      "Medical schema plus Tier-1 citations (PubMed, WHO, NIH, NAFDAC) is the trust package.",
      "EU AI Act Annex III and NDPA health-data rules shape what and how you publish.",
    ],
    sections: [
      {
        h: "The highest YMYL bar",
        p: [
          "Health is the strictest category in every major assistant. Models decline or heavily hedge health answers that lack credentialed, citable sources. For hospitals, clinics, pharma and medtech, AI visibility is therefore gated by credentials and provenance, not by content volume.",
        ],
      },
      {
        h: "The trust package for health",
        p: ["What a model needs before it will quote you on a health question:"],
        bullets: [
          "MedicalCondition, Drug and Hospital schema on relevant pages, with the institution named and geocoded.",
          "Named clinicians with Person schema, licensure and affiliations.",
          "Tier-1 citations: PubMed-indexed research, WHO and NIH guidance, national bodies such as NAFDAC and Nigeria's Federal Ministry of Health — dated and linked.",
          "Clear separation of patient education from promotional content; models mirror that distinction.",
        ],
      },
      {
        h: "Hospital and condition schema",
        p: ["A minimal correct block for a provider page:"],
        code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Hospital",
  "name": "BeameAI by LOGON Health Centre",
  "address": { "@type": "PostalAddress",
               "addressLocality": "Lagos", "addressCountry": "NG" },
  "medicalSpecialty": "Cardiology",
  "member": [
    { "@type": "Physician", "name": "Dr. A. Example",
      "sameAs": "https://www.linkedin.com/in/oluwamayowa" }
  ]
}
</script>`,
      },
      {
        h: "Compliance: EU AI Act Annex III and NDPA health data",
        p: [
          "AI systems used in healthcare are flagged as high-risk under EU AI Act Annex III where they affect medical care, which matters for any provider serving European patients or building AI triage tools. In Nigeria, health data is sensitive personal data under the NDPA, requiring explicit consent and documented processing. Both regimes reward the same behaviour: transparent, minimal, well-governed data handling — which is also precisely the behaviour models reward with citations.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-agencies",
    cluster: "by-industry",
    type: "Deep Dive",
    title: "AI Search Optimization for Agencies & Consultancies (2026)",
    dek: "Why agencies face a unique LLMO opportunity: methodology assets, Person schema with credentials, named-outcome case studies. The BeameAI by LOGON playbook as meta-example.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Agencies optimise clients for AI search but are invisible in it themselves.",
      "Methodology assets and named-outcome case studies are the highest-cited agency formats.",
      "Running your own 90-day cycle is the strongest sales demonstration you have.",
    ],
    sections: [
      {
        h: "The agency paradox",
        p: [
          "Firms that build AI visibility for clients routinely fail to run the same playbook on themselves: no Person schema on the team, no methodology page, no dated case data, an entity graph that stops at a logo. When a prospect asks an assistant for 'an AI search agency', the answer rarely names the firms that could do the work best — it names the ones that made themselves easiest to verify.",
        ],
      },
      {
        h: "The agency citation formats",
        p: ["The three assets assistants cite when recommending a consultancy:"],
        bullets: [
          "Methodology pages: a dated, named framework (like the BeameAI by LOGON A.G.E.N.T.I.C. and 90-day cadence) that models can describe and reuse.",
          "Named-outcome case studies with verifiable metrics, client consent and links — specificity beats volume.",
          "Person schema with credentials for every visible consultant, including sameAs links to LinkedIn and industry registries.",
        ],
      },
      {
        h: "The meta-example",
        p: [
          "This hub is the playbook applied to itself: entity-first schema, a pillar guide, 41 dated articles across seven clusters, a frozen prompt audit, and a 90-day review cadence — all authored by a named Lead AI Strategist with a verifiable profile. If you are reading this from a consultancy, the fastest credibility upgrade is to copy that structure in your own domain.",
        ],
      },
      {
        h: "Run your own 90-day cycle",
        p: [
          "Agencies should measure their own share of citation monthly and publish the journey. Nothing sells LLMO capability like demonstrable, dated movement in the client's own category — and the discipline of eating your own cooking is what keeps methodology honest.",
        ],
      },
    ],
  },

  // 07 LLMO services
  {
    slug: "ai-crawlability-consulting",
    cluster: "llmo-services",
    type: "Deep Dive",
    title: "AI Crawlability Consulting: Get Discovered by ChatGPT & Copilot",
    dek: "AI crawlability consulting fixes what stops ChatGPT, Copilot, and Perplexity from citing you: OAI-SearchBot access, Bing indexing, entity graph, and schema.",
    published: "Aug 2026",
    updated: "Aug 2026",
    takeaways: [
      "Most 'invisible in AI search' cases are access-layer failures, not content failures.",
      "Crawlability is binary: a 403 or missing Bing index removes you before quality matters.",
      "It is the highest-leverage first engagement — every other LLMO tactic is gated on it.",
    ],
    sections: [
      {
        h: "What crawlability consulting is",
        p: [
          "AI crawlability consulting is a focused engagement that finds and fixes everything standing between your content and the retrieval layer of ChatGPT, Copilot, Perplexity, Claude and Google AI Overviews. It is deliberately narrow: no content strategy, no design — just the plumbing that decides whether a grounding crawler can reach you, parse you and verify you.",
        ],
      },
      {
        h: "The diagnostic scope",
        p: ["A full crawlability engagement covers six layers in order:"],
        bullets: [
          "Access: robots.txt, WAF and CDN rules for OAI-SearchBot, GPTBot, ClaudeBot, PerplexityBot, Google-Extended and Bingbot — confirmed 200s from server logs.",
          "Indexation: Bing Webmaster Tools and Google Search Console health; Bing indexation is a hard prerequisite for ChatGPT Search and Copilot.",
          "Entity graph: Organization, Person and sameAs schema so the model can resolve who you are.",
          "Content surface: direct answers, sourced claims and quotable structure on the pages that matter.",
          "Machine layer: llms.txt, sitemap.xml and dateModified coherence.",
          "Monitoring: a monthly crawler-health report and alerting on access regressions.",
        ],
      },
      {
        h: "What an engagement delivers",
        p: [
          "A written crawlability report with pass/fail per layer, remediation performed or specified in engineering-ready detail, a re-test against the same checks, and a monthly monitoring loop. Typical remediation is fast — access rules and schema are days of work, not quarters — which makes this the right first engagement for organisations not yet visible in AI search at all.",
        ],
      },
      {
        h: "Why it comes first",
        p: [
          "Every other LLMO investment — content restructuring, citation farming, PR — assumes the retrieval layer can reach you. Teams that skip this step spend quarters polishing content that a WAF rule was silently blocking. Fix access first, prove retrieval, then compound with strategy. That ordering is the difference between an LLMO programme that moves metrics and one that moves deck slides.",
        ],
      },
    ],
  },
];
