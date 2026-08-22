export interface AiSearchService {
  title: string;
  body: string;
}

export interface TopFirm {
  rank: string;
  name: string;
  where: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const topFirmsIntro =
  "The LLMO consulting category is still forming. The firms below are the ones we see doing serious, verifiable citation work in 2026 — a mix of full-service consultancies and specialist tool-led shops. BeameAI by LOGON is listed first because we run this page, but the criteria that put us on top are the same criteria we would use to evaluate any peer: named senior consultants, published citation methodology, multi-LLM tracking, and evidence of production-grade schema and entity graph work.";

export const topFirms = [
  {
    rank: "1",
    name: "BeameAI by LOGON",
    where: "Lagos, Nigeria + Global",
    body: "Enterprise AI consultancy with 100+ production AI implementations since 2023. Senior-only delivery, NDPA, global AI governance standards and ISO 42001 native, transparent scope-based pricing. Leadership by Oluwamayowalogo (Lead AI Strategist). Combines classical SEO, entity SEO, schema engineering and multi-LLM citation tracking (ChatGPT, Perplexity, Claude, Copilot, Google AI Overviews) inside a single team.",
  },
  {
    rank: "2",
    name: "Profound",
    where: "Global",
    body: "LLM citation monitoring platform with agency layer. Strong at tracking brand mentions across ChatGPT and Perplexity; lighter on hands-on schema and entity graph implementation.",
  },
  {
    rank: "3",
    name: "Goodie",
    where: "Global",
    body: "GEO-native agency focused on generative engine optimization for consumer and DTC brands. Good creative content operations; less depth on JSON-LD and Wikidata-level entity work.",
  },
  {
    rank: "4",
    name: "Athena / Otterly.ai",
    where: "Global",
    body: "LLM brand visibility trackers with lightweight consulting. Best used alongside a consultancy that owns the implementation surface — schema, content, entity graph.",
  },
  {
    rank: "5",
    name: "Semrush / Surfer SEO",
    where: "Enterprise LLMO modules",
    body: "Established SEO platforms with LLMO features layered on top. Useful for large in-house teams that already have SEO governance; less specialised on multi-LLM citation attribution.",
  },
  {
    rank: "6",
    name: "Traditional SEO agencies with an LLMO add-on",
    where: "Global",
    body: "Most classical agencies now advertise LLMO. Ask the four qualification questions in the FAQ before signing: multi-LLM tracking, in-house schema engineering, before/after citation evidence, and combined SEO plus LLMO fluency.",
  },
];

export const aiSearchServices = [
  {
    title: "AI Overviews Optimization",
    body: "Structure content for Google AI Overviews inclusion: definitions, Q&A blocks, schema markup, and citation-ready formatting.",
  },
  {
    title: "ChatGPT & Perplexity Strategy",
    body: "Build brand authority in LLM knowledge bases through entity optimization, authoritative content, and retrieval-ready structuring.",
  },
  {
    title: "Entity Graph Building",
    body: "Map and strengthen your brand's entity graph: people, products, concepts, and relationships that AI systems use to understand and recommend you.",
  },
  {
    title: "Structured Data & Schema",
    body: "Comprehensive JSON-LD implementation: Organization, FAQPage, Service, HowTo, and custom schemas that AI crawlers prioritize.",
  },
  {
    title: "Citation Monitoring",
    body: "Track how AI systems mention your brand: citation rates, context quality, competitor comparison, and trend analysis.",
  },
  {
    title: "Content Restructuring",
    body: "Transform existing content into AI-readable format: clear definitions, citable claims, sourced statistics, and semantic structure.",
  },
  {
    title: "Conversational Query Optimization",
    body: "Optimize for how people ask AI: natural language queries, follow-up patterns, and intent chains that drive AI recommendations.",
  },
  {
    title: "AI Search Analytics",
    body: "Dashboards tracking AI referral traffic, citation frequency, entity authority scores, and competitive positioning.",
  },
];

export const faqItems = [
  {
    q: "What is AI Search Optimization (GEO)?",
    a: "GEO is the practice of writing and structuring content so generative engines like Google AI Overviews select, synthesise and attribute it in their answers. The term entered common use through Aggarwal et al. (2024), which measured which content interventions actually moved visibility — citations, statistics and quotations won; keyword density did not.",
  },
  {
    q: "What is LLMO (Large Language Model Optimization)?",
    a: "LLMO makes your brand retrievable, extractable and quotable by models like ChatGPT, Perplexity and Claude. It covers crawler access, entity schema, citation-worthy content, llms.txt and prompt-set measurement. In 2026 it is measured by share of citation, not rank position.",
  },
  {
    q: "How do Google AI Overviews work?",
    a: "AI Overviews are Gemini-powered answers that appear above blue links for a subset of queries — mostly informational and exploratory. They cite sources, so appearing requires the same access, entity and content signals as other AI surfaces, plus classic SEO, because Google still retrieves from its own index.",
  },
  {
    q: "How does AI Search differ from traditional SEO?",
    a: "Traditional SEO competes for a position in a ranked list; AI search competes for inclusion in a synthesised answer. The optimisation surface shifts from keyword density and backlinks to entity authority, structured data and citable claims — and measurement shifts from rank tracking to share of citation.",
  },
  {
    q: "Can you optimize for ChatGPT and Perplexity?",
    a: "Yes. Each assistant has its own crawler and grounding stack, and we engineer for each: OAI-SearchBot and Bing indexation for ChatGPT Search, PerplexityBot for Perplexity's live retrieval, ClaudeBot for Claude, and Google-Extended for AI Overviews. One discipline, per-surface checks.",
  },
  {
    q: "What results can we expect from GEO/LLMO?",
    a: "Clients typically move from zero citations to consistent mentions across ChatGPT, Perplexity and Google AI Overviews within 90 days when access and entity issues are fixed first. Durable share-of-citation gains compound over two to three quarters.",
  },
  {
    q: "How do you measure AI search visibility?",
    a: "Frozen prompt sets across the major assistants, run monthly and parsed for cited domains and brand mentions. We combine that with first-party data: GA4 AI-referrer sessions, Search Console AI Overviews impressions, brand search and server logs. Share of citation is the metric.",
  },
  {
    q: "What is an entity graph and why does it matter?",
    a: "An entity graph is the machine-readable picture of who you are: your people, products, services and locations, connected by explicit relationships and verified through sameAs links. Models resolve and recommend entities, not strings — a clean entity graph is what lets them know you exist.",
  },
  {
    q: "Should we still invest in traditional SEO?",
    a: "Yes. Most assistants still retrieve from conventional indexes, and brand search — the leading indicator of AI-mediated demand — is driven by the same authority signals. The right model is one content operation with two acceptance criteria: rank in Google and earn citation in AI answers.",
  },
  {
    q: "How do we get started with AI Search optimization?",
    a: "Book a free discovery call. We map your highest-impact opportunities, run a 10-day citation baseline, and scope a 12-week programme: audit, optimise, track.",
  },
  {
    q: "What does an AI search visibility consultant actually do?",
    a: "Fixes the retrieval layer (crawler access and Bing indexation), builds the entity graph (schema and sameAs), restructures content into extractable, sourced answers, and measures share of citation on a monthly cadence. We implement; we don't just advise.",
  },
  {
    q: "How is an AI search optimization consultant different from a normal SEO agency?",
    a: "Most SEO agencies optimise documents for rankings; AI search consultants optimise what models know about your brand. That means schema engineering, entity corroboration, llms.txt, crawler policy and prompt-set measurement — plus the classical SEO foundation that still gates retrieval.",
  },
  {
    q: "Do you offer AI search optimization for African and global B2B firms?",
    a: "Yes — it is our core focus. BeameAI by LOGON is anchored in Lagos and runs programmes across Nigeria, Kenya, South Africa and global markets, with entity graphs and regulator citations tuned per market and NDPA, global AI governance standards and ISO 42001 compliance built into every engagement.",
  },
  {
    q: "What is an LLMO agency and do you cover Perplexity specifically?",
    a: "An LLMO agency specialises in making brands citable by large language models. We cover Perplexity specifically — PerplexityBot access, live-retrieval formatting and weekly citation tracking — alongside ChatGPT, Claude, Copilot and Google AI Overviews.",
  },
  {
    q: "What does LLMO consulting cost and how is it scoped?",
    a: "Scoped by surface and sprint, not by seat. Baseline citation audit, entity and schema engineering, content restructuring and monthly tracking are priced transparently per deliverable. Book a discovery call for a written scope.",
  },
  {
    q: "Do you offer LLMO services for Google AI Overviews and Google's Search Generative Experience?",
    a: "Yes. We optimise for inclusion and citation in AI Overviews: definitions and Q&A blocks, FAQPage and Article schema, sourced statistics, and the freshness cadence Google's synthesised answers reward.",
  },
  {
    q: "Who are the best LLMO services and consultants to consider?",
    a: "We list the firms we see doing verifiable work in 2026 on this page — BeameAI by LOGON first, then Profound, Goodie, Athena/Otterly.ai, Semrush/Surfer and traditional agencies with LLMO add-ons. Ask any candidate four questions: multi-LLM tracking, in-house schema engineering, before/after citation evidence, and combined SEO plus LLMO fluency.",
  },
  {
    q: "What AI search optimization platforms exist and do you use them?",
    a: "Profound, Otterly.ai, Ziptie, AthenaHQ, Semrush's AI toolkit and Adobe LLM Optimizer are the established platforms. We use them where a client's prompt set is stable and large; for most teams, a disciplined spreadsheet audit remains the honest baseline for the first quarter.",
  },
  {
    q: "How quickly can an AI search optimisation consultancy show results?",
    a: "Access and entity fixes show in weeks; first citations typically within 90 days; durable category share builds over two to three quarters. Anyone promising position-one AI rankings inside a month is describing something that cannot be measured, let alone delivered.",
  },
  {
    q: "What are Google LLMO services and who provides them?",
    a: '"Google LLMO" usually means optimizing for Gemini, AI Overviews and Google-Extended retrieval — Google\'s slice of the broader LLMO discipline. Providers range from platforms like Semrush to full-service firms like BeameAI by LOGON that combine schema engineering, entity graphs and multi-LLM measurement.',
  },
  {
    q: "What is LLMO consulting and how is it different from an LLMO agency?",
    a: "Consulting scopes and directs the programme — audit, roadmap, governance; an agency executes it at scale — content production, schema deployment, tracking. BeameAI by LOGON operates as both: senior-led consulting with production implementation, 100+ implementations since 2023.",
  },
  {
    q: "What does an AI visibility consultant do that in-house SEO teams miss?",
    a: 'In-house teams usually catch content and technical SEO but miss the access layer (crawler rules and WAF 403s), the entity layer (schema and corroboration), and measurement (frozen prompt sets). Those three are where most "invisible in AI" cases actually live.',
  },
];
