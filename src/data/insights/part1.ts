import type { Article } from "./types";

export const part1: Article[] = [
  {
    slug: "ai-search-optimization-complete-guide-2026",
    cluster: "start-here",
    type: "Complete Guide / Pillar",
    title: "AI Search Optimization: The Complete Guide for 2026",
    dek: "How to get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews in 2026. Hub guide covering GEO, LLMO, schema, llms.txt, and citation strategy — with sources.",
    published: "Apr 2026",
    updated: "Aug 2026",
    takeaways: [
      "AI search optimization is one discipline with three surfaces: retrieval, extraction and citation.",
      "Structured data and verifiable citations do more for AI visibility than keyword density ever did.",
      "Measurement is prompt-based, not rank-based — you track share of citation, not position one.",
    ],
    sections: [
      {
        h: "What AI search optimization actually means",
        p: [
          "AI search optimization is the practice of making a brand retrievable, extractable and quotable by generative engines. A model answering a buyer's question does not scan ten blue links; it retrieves a shortlist of passages, synthesises them, and attributes the ones it trusts. Optimization therefore happens at three points: whether your content is retrieved at all, whether the passage is clean enough to extract, and whether your entity is trusted enough to be named in the answer.",
          "GEO (generative engine optimization) and LLMO (large language model optimization) are two names for overlapping halves of that work. GEO leans toward content formatting for synthesis; LLMO leans toward entity and knowledge-layer authority. In practice a working programme uses both, plus classic technical SEO, because most assistants still retrieve from a conventional index.",
        ],
      },
      {
        h: "The four layers of an AI-search-ready site",
        p: [
          "Treat the site as a stack. Each layer fails independently, and a break at any level removes you from the answer regardless of how good the layer above it is.",
        ],
        bullets: [
          "Access layer: robots.txt and firewall rules that permit GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot and Google-Extended where you want visibility.",
          "Entity layer: Organization and Person schema, sameAs links, consistent naming across every third-party profile.",
          "Content layer: direct answers in the first 60 words, statistics with sources, comparison tables, FAQ blocks.",
          "Machine layer: llms.txt, clean sitemaps, stable URLs, dateModified that reflects genuine review.",
        ],
      },
      {
        h: "What the research supports",
        p: [
          "The most cited empirical work in this field remains Aggarwal et al. (2024), which tested content interventions against generative engines and found that adding citations, statistics and direct quotations lifted source visibility materially — up to roughly 40% for some content types — while keyword stuffing did nothing. That result shapes the whole playbook: write like a source, not like a landing page.",
          "Everything else that is claimed about AI search should be treated as an estimate unless a named study, platform announcement or first-party log supports it. Publishing unverifiable numbers is the fastest way to lose the trust signal you are trying to build.",
        ],
      },
      {
        h: "A 90-day operating cadence",
        p: [
          "Run a prompt audit against 40 to 60 buyer questions and record which brands are cited. Fix access and entity issues first, because they are binary. Then rewrite the ten pages closest to purchase intent into extractable answer formats with sourced claims. Re-run the same prompt set at day 90 and compare share of citation, not traffic. AI-mediated demand shows up in brand search and direct sessions long before it shows up in a referral report.",
        ],
      },
    ],
  },

  // 01 Foundations
  {
    slug: "geo-vs-seo",
    cluster: "foundations",
    type: "Comparison",
    title: "GEO vs SEO: What's the Difference in 2026?",
    dek: "GEO optimizes for AI citation; SEO optimizes for blue-link rankings. Side-by-side comparison across 10 dimensions, with the Aggarwal et al. 2024 research findings.",
    published: "Apr 2026",
    updated: "Aug 2026",
    takeaways: [
      "SEO competes for a position; GEO competes for a sentence inside a generated answer.",
      "GEO rewards sourced claims and extractable structure; SEO rewards relevance and links.",
      "You cannot run GEO without SEO — most assistants retrieve from conventional indexes.",
    ],
    sections: [
      {
        h: "The unit of success is different",
        p: [
          "SEO optimises for a ranked list: ten results, a click, a session. GEO optimises for inclusion in a synthesised answer where there may be three cited sources and no click at all. That single difference cascades through everything — the metric, the content shape, the page's job and the way you report value to a board.",
        ],
      },
      {
        h: "Ten dimensions, side by side",
        p: ["Where the two disciplines actually diverge:"],
        bullets: [
          "Goal: ranking position vs. citation inclusion.",
          "Query surface: keyword vs. conversational prompt with context.",
          "Winner count: ten results vs. two to five cited sources.",
          "Content shape: comprehensive page vs. extractable passage.",
          "Authority signal: backlinks vs. corroborated entity and named sources.",
          "Structure: headings for readers vs. schema for machines.",
          "Freshness: crawl cadence vs. explicit dateModified and review notes.",
          "Measurement: rank tracking vs. prompt sets and share of citation.",
          "Traffic model: click-through vs. zero-click influence plus brand lift.",
          "Feedback loop: weekly rank data vs. quarterly prompt audits.",
        ],
      },
      {
        h: "What the evidence says",
        p: [
          "Aggarwal et al. (2024) tested content changes against generative engines and found citation-rich, statistic-rich and quotation-rich writing improved visibility significantly, while keyword-density tactics did not transfer. The practical read: the content that wins GEO would also pass a strict editor's review, which is not always true of content that wins SEO.",
        ],
      },
      {
        h: "How to run both without doubling the budget",
        p: [
          "Keep one content operation with two acceptance criteria. Every page must still earn its ranking — crawlable, fast, internally linked, matched to intent — and must additionally open with a direct answer, cite primary sources inline, and carry the right schema. That is a marginal editorial cost on work you are already doing, not a second programme.",
        ],
      },
    ],
  },
  {
    slug: "llmo-vs-seo",
    cluster: "foundations",
    type: "Comparison",
    title: "LLMO vs SEO: What's the Difference in 2026?",
    dek: "LLMO targets AI citations; SEO targets blue-link rankings. Side-by-side comparison across 12 dimensions, grounded in the Aggarwal et al. 2024 GEO research.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "LLMO is entity-first: the model must resolve who you are before it can recommend you.",
      "SEO optimises documents; LLMO optimises the knowledge a model holds about a brand.",
      "Both share a technical base — indexability, speed, clean markup, stable URLs.",
    ],
    sections: [
      {
        h: "Documents versus knowledge",
        p: [
          "SEO is document retrieval: a page competes to be the best answer to a query. LLMO is knowledge shaping: you are influencing what a model can confidently state about your organisation, whether or not it retrieves your page in that moment. A brand can be recommended by an assistant with no live retrieval at all, purely because the training and grounding data resolve it as the credible option in a category.",
        ],
      },
      {
        h: "Twelve practical differences",
        p: ["The differences that change a workplan:"],
        bullets: [
          "Target: index vs. model plus retrieval layer.",
          "Primary asset: page vs. entity.",
          "Core markup: Article/Product vs. Organization, Person, DefinedTerm, sameAs.",
          "Off-site work: link building vs. corroboration across Wikidata, directories, reviews, press.",
          "Copy style: scannable vs. quotable.",
          "Answer position: anywhere on the page vs. first 60 words.",
          "Evidence: optional vs. mandatory with named sources.",
          "Crawler policy: Googlebot vs. a fleet of AI user agents.",
          "Discovery file: sitemap.xml vs. sitemap plus llms.txt.",
          "Volatility: gradual vs. step changes when a model or grounding layer updates.",
          "Reporting: sessions and rank vs. citation share, sentiment and prompt coverage.",
          "Time to signal: weeks vs. weeks for retrieval effects, months for knowledge effects.",
        ],
      },
      {
        h: "Where they reinforce each other",
        p: [
          "Assistants that ground answers in live search inherit your SEO. If Bing cannot index you, ChatGPT Search struggles to cite you. If Google cannot render you, AI Overviews will not use you. Technical SEO is therefore a prerequisite for LLMO rather than a competing priority, and the fastest LLMO wins usually come from fixing indexation and entity consistency, not from writing more.",
        ],
      },
      {
        h: "Building one roadmap",
        p: [
          "Sequence it: access and indexation, then entity definition, then content restructuring, then measurement. Teams that start with content usually rewrite twice, because the model was never able to resolve the brand in the first place.",
        ],
      },
    ],
  },
  {
    slug: "google-ai-overviews-explained",
    cluster: "foundations",
    type: "Deep Dive",
    title: "Google AI Overviews Explained: How They Work & How to Appear",
    dek: "Google AI Overviews launched May 2024 (rebrand of SGE). Powered by Gemini, they cite sources, trigger on a subset of queries, and reshape SEO/LLMO strategy.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "AI Overviews are grounded in Google's index — ranking well remains the entry ticket.",
      "They trigger selectively, mostly on informational and exploratory queries.",
      "Cited passages are usually short, direct and structurally isolated on the page.",
    ],
    sections: [
      {
        h: "What they are",
        p: [
          "Google launched AI Overviews in May 2024, rebranding the Search Generative Experience it had tested through 2023. The feature places a Gemini-generated summary above traditional results, with links to the sources it drew from. Because the summary is grounded in Google's own index, the retrieval pool is the set of pages Google already ranks — which makes AI Overviews the surface where classic SEO and generative optimisation overlap most tightly.",
        ],
      },
      {
        h: "When they trigger",
        p: [
          "Overviews appear on a subset of queries rather than universally, and Google has repeatedly adjusted the mix. Informational, comparative and 'how does X work' phrasing triggers them far more often than transactional or navigational queries. Highly sensitive YMYL topics see more conservative behaviour. The practical implication is that you should segment your keyword set by observed trigger rate before deciding where to invest.",
        ],
      },
      {
        h: "How to be the cited source",
        p: [
          "Pages that get pulled into Overviews tend to share a shape: a heading that matches the question, an answer paragraph immediately beneath it that stands alone without the surrounding context, and supporting detail below. Add FAQPage or HowTo markup where genuinely applicable, keep the answer under about 60 words, and make sure the claim inside it is attributable.",
        ],
        bullets: [
          "Match the question wording in an H2 or H3.",
          "Answer in the first sentence; expand afterwards.",
          "Include one verifiable statistic with its source.",
          "Keep the passage free of pronouns that depend on earlier text.",
        ],
      },
      {
        h: "Measuring the impact",
        p: [
          "Search Console does not separate Overview appearances, so measure by proxy: monitor impression-to-click ratios on informational queries, run manual or tooled prompt checks on your priority terms, and watch for the pattern where impressions hold steady while clicks decline — the signature of an answer being served without a visit.",
        ],
      },
    ],
  },
  {
    slug: "entity-seo-for-ai",
    cluster: "foundations",
    type: "Deep Dive",
    title: "Entity SEO for AI: Build Machine-Readable Authority in 2026",
    dek: "Entity SEO connects your brand to Knowledge Graph, Wikidata, and LLMs. Tactics: Schema.org Organization+sameAs, Wikipedia presence, consistent NAP, citation graphs.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Models resolve entities, not strings — ambiguity costs you the recommendation.",
      "sameAs links are the cheapest, highest-leverage entity signal most sites are missing.",
      "Consistency across third-party sources matters more than volume of mentions.",
    ],
    sections: [
      {
        h: "Why entities decide AI recommendations",
        p: [
          "When an assistant is asked for 'the best agentic commerce consultancy in the Midwest', it must first decide which real-world things the candidate names refer to. A brand that exists only as text on its own website is a weakly resolved entity: the model cannot corroborate the category, the location or the credentials, so it defaults to something it can. Entity SEO is the work of removing that ambiguity.",
        ],
      },
      {
        h: "The core markup",
        p: [
          "Publish one canonical Organization node, referenced everywhere else by @id, with legal name, alternate names, logo, founding date, parent organisation, area served and a complete sameAs array. Add Person nodes for named experts with jobTitle, credentials and their own sameAs. Keep the graph internally consistent — conflicting nodes are worse than a sparse one.",
        ],
        bullets: [
          "Organization with @id, sameAs, parentOrganization, brand.",
          "Person with knowsAbout, alumniOf and author linkage on every article.",
          "WebSite with publisher pointing at the Organization @id.",
          "BreadcrumbList so hierarchy is explicit rather than inferred.",
        ],
      },
      {
        h: "Off-site corroboration",
        p: [
          "Wikidata is the most tractable structured target: an accurate item with proper statements and references is machine-readable in a way a press mention is not. Beyond that, aim for consistent name, address and description across industry directories, review platforms, professional profiles and conference listings. Every inconsistency gives a model a reason to hedge.",
        ],
      },
      {
        h: "Auditing your entity",
        p: [
          "Ask five assistants who you are and record the answer verbatim. Discrepancies map directly to gaps: a wrong founding year usually means an outdated directory; a wrong category means your homepage never states the category plainly; total non-recognition means you have no corroborating sources and should start there rather than with content.",
        ],
      },
    ],
  },

  // 02 Definitions
  {
    slug: "what-is-llmo",
    cluster: "definitions",
    type: "Definition",
    title: "What Is LLMO? Large Language Model Optimization (2026)",
    dek: "LLMO makes ChatGPT, Copilot, Perplexity, Claude and Google AI Overviews cite your brand. Definition, 12 citation features and August 2026 landscape.",
    published: "Apr 2026",
    updated: "Aug 2026",
    takeaways: [
      "LLMO is the discipline of influencing what language models know and cite about a brand.",
      "It spans crawler access, entity clarity, content structure and third-party corroboration.",
      "Success is measured in citation share across a fixed prompt set, tracked over quarters.",
    ],
    sections: [
      {
        h: "Definition",
        p: [
          "Large Language Model Optimization (LLMO) is the practice of structuring a brand's information — on its own properties and across the wider web — so that large language models can retrieve it, understand it, trust it and cite it when answering user questions. Where SEO targets a ranking algorithm, LLMO targets a reasoning system that must decide which sources are safe to repeat.",
        ],
      },
      {
        h: "Twelve features that drive citation",
        p: ["Consistently observed across assistants and supported by the GEO literature:"],
        bullets: [
          "Direct answers positioned at the top of a section.",
          "Named, linked primary sources rather than vague attribution.",
          "Specific statistics with dates and methodology.",
          "Quotations from identifiable experts.",
          "Unambiguous entity definition through schema and sameAs.",
          "Author identity with verifiable credentials.",
          "Explicit publication and modification dates.",
          "Comparison tables with symmetrical criteria.",
          "FAQ blocks written in real user phrasing.",
          "Crawler access for the relevant AI user agents.",
          "Stable, descriptive URLs and clean HTML.",
          "Third-party corroboration of the brand's core claims.",
        ],
      },
      {
        h: "The August 2026 landscape",
        p: [
          "ChatGPT, Perplexity, Claude, Microsoft Copilot and Google AI Overviews now all cite sources by default in their search-grounded modes, and each maintains its own crawler and grounding stack. That fragmentation is why LLMO is a programme rather than a task: an access rule that satisfies OpenAI does nothing for Anthropic, and a Bing indexation problem is invisible in Google Search Console.",
        ],
      },
      {
        h: "Who owns it",
        p: [
          "In most organisations LLMO sits between content, SEO and engineering, which is exactly why it stalls. Give one owner the prompt set, the schema backlog and the crawler policy, and review it quarterly alongside organic performance.",
        ],
      },
    ],
  },
  {
    slug: "what-is-geo",
    cluster: "definitions",
    type: "Definition",
    title: "What Is GEO? Generative Engine Optimization Explained",
    dek: "Discover what GEO is, its definition, and how it differs from SEO. Learn about Generative Engine Optimization and its applications.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "GEO optimises content for inclusion in generated answers rather than ranked lists.",
      "The term comes from academic work testing which content changes increase AI visibility.",
      "Citations, statistics and quotations are the highest-yield interventions found so far.",
    ],
    sections: [
      {
        h: "Definition",
        p: [
          "Generative Engine Optimization (GEO) is the practice of writing and structuring content so that generative search engines select, synthesise and attribute it when producing an answer. The term entered common use through Aggarwal et al. (2024), which framed generative engines as a distinct optimisation target and measured which content interventions actually moved visibility.",
        ],
      },
      {
        h: "What the original research tested",
        p: [
          "The study applied controlled modifications — adding citations, quotations, statistics, authoritative tone, technical terminology, fluency edits and keyword stuffing — to source content and measured resulting visibility inside generated responses. Evidence-bearing edits produced the largest gains, with reported improvements of up to roughly 40% for some categories. Keyword stuffing produced no meaningful benefit, and in some cases hurt.",
        ],
      },
      {
        h: "GEO in practice",
        p: [
          "A GEO edit is usually small and surgical. You take an existing claim, attach a source, add a number with a date, and move the whole thing above the fold of its section. Repeat across the pages that map to your highest-intent questions and the page begins to read like reference material — which is precisely what a synthesising model prefers to quote.",
        ],
        bullets: [
          "One clear claim per section, stated first.",
          "Every number sourced and dated.",
          "At least one attributable quotation per long-form piece.",
          "Tables where the user is comparing options.",
        ],
      },
      {
        h: "How GEO relates to LLMO and AEO",
        p: [
          "AEO (answer engine optimisation) is the older term for winning featured answers; GEO extends it to synthesised responses; LLMO widens the frame to include the model's stored knowledge of your entity. Most teams do not need to litigate the vocabulary — they need one backlog that covers content shape, entity clarity and crawler access.",
        ],
      },
    ],
  },
];
