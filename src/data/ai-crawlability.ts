export interface Crawler {
  agent: string;
  operator: string;
  purpose: string;
  default: "Allow" | "Policy" | "Block";
}

export interface CrawlLayer {
  num: string;
  name: string;
  body: string;
}

export interface CrawlDeliverable {
  title: string;
  body: string;
}

export interface CrawlFaq {
  q: string;
  a: string;
}

export const crawlers: Crawler[] = [
  {
    agent: "OAI-SearchBot",
    operator: "OpenAI",
    purpose: "Search grounding — drives citations in ChatGPT Search answers.",
    default: "Allow",
  },
  {
    agent: "GPTBot",
    operator: "OpenAI",
    purpose: "Training data collection for OpenAI models.",
    default: "Policy",
  },
  {
    agent: "ClaudeBot / Claude-SearchBot",
    operator: "Anthropic",
    purpose: "Grounding and training for Claude; search grounding where documented.",
    default: "Allow",
  },
  {
    agent: "PerplexityBot",
    operator: "Perplexity",
    purpose: "Live retrieval for every Perplexity answer — the most citation-visible agent.",
    default: "Allow",
  },
  {
    agent: "Googlebot",
    operator: "Google",
    purpose: "Core Google indexing — the entry ticket to Search and AI Overviews.",
    default: "Allow",
  },
  {
    agent: "Google-Extended",
    operator: "Google",
    purpose: "AI training and Gemini grounding; decide separately from Googlebot.",
    default: "Allow",
  },
  {
    agent: "Bingbot",
    operator: "Microsoft",
    purpose: "Bing index — the hard prerequisite for ChatGPT Search and Copilot.",
    default: "Allow",
  },
  {
    agent: "BingBot-Extended",
    operator: "Microsoft",
    purpose: "Copilot grounding and AI retrieval on top of the Bing index.",
    default: "Allow",
  },
  {
    agent: "Common Crawl (CCBot)",
    operator: "Common Crawl Foundation",
    purpose: "Bulk web archive used in training pipelines — snapshot timing matters.",
    default: "Block",
  },
  {
    agent: "Applebot-Extended",
    operator: "Apple",
    purpose: "Apple Intelligence training (launched 2024).",
    default: "Policy",
  },
  {
    agent: "Amazonbot",
    operator: "Amazon",
    purpose: "Amazon AI and shopping-agent retrieval (launched 2024).",
    default: "Policy",
  },
  {
    agent: "Meta-ExternalAgent",
    operator: "Meta",
    purpose: "Meta AI assistant retrieval (launched 2024).",
    default: "Policy",
  },
  {
    agent: "Bytespider",
    operator: "ByteDance",
    purpose: "Training data collection (2024+).",
    default: "Block",
  },
];

export const layers: CrawlLayer[] = [
  {
    num: "01",
    name: "Access",
    body: "robots.txt rules and WAF/CDN edge rules for every grounding and training crawler, confirmed with real 200 responses from server logs. A robots.txt that says Allow while the firewall says 403 is the most common failure in this industry.",
  },
  {
    num: "02",
    name: "Indexation",
    body: "Bing Webmaster Tools submission and verification (the hard prerequisite for ChatGPT Search and Copilot), Google Search Console health, clean sitemaps and no orphaned or blocked pages.",
  },
  {
    num: "03",
    name: "Entity graph",
    body: "Organization and Person schema with sameAs links, consistent naming across LinkedIn, directories, Wikidata and press — so the model resolves who you are before it decides whether to cite you.",
  },
  {
    num: "04",
    name: "Content surface",
    body: "Direct answers in the first 40–60 words, named and dated sources, comparison tables and FAQ blocks — the units assistants actually extract and quote.",
  },
  {
    num: "05",
    name: "Machine layer",
    body: "llms.txt at the root, a sitemap that matches your real architecture, stable URLs and honest dateModified — the machine layer must agree with the visible layer.",
  },
  {
    num: "06",
    name: "Monitoring",
    body: "Monthly crawler-health reports per user agent — hit rates, status codes, crawl depth — plus alerting when any grounding crawler's access collapses.",
  },
];

export const crawlDeliverables: CrawlDeliverable[] = [
  {
    title: "Crawlability report",
    body: "Pass/fail per layer across all six layers, with evidence from server logs and live tests.",
  },
  {
    title: "Remediation",
    body: "Access rules, robots.txt and schema shipped in engineering-ready detail — most fixes are days, not quarters.",
  },
  {
    title: "Re-test",
    body: "The same checks re-run after remediation, with before/after crawler hit data.",
  },
  {
    title: "Monthly health loop",
    body: "Ongoing monitoring with alerting on access regressions — because WAF updates break crawlers silently.",
  },
];

export const crawlRobots = `# BeameAI by LOGON default: allow search grounding, policy-gate training
User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Google-Extended
Allow: /

# Bing is the index ChatGPT Search and Copilot ground in
User-agent: Bingbot
Allow: /

User-agent: BingBot-Extended
Allow: /

# Training policy is a business decision, not a default
User-agent: GPTBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

# Policy-gate the rest explicitly
User-agent: Applebot-Extended
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /`;

export const crawlFaqs: CrawlFaq[] = [
  {
    q: "Why does Bing indexation matter for ChatGPT?",
    a: "ChatGPT Search grounds answers in a conventional index with the Bing stack at its core. If Bingbot cannot reach you — or the site was never submitted to Bing Webmaster Tools — ChatGPT Search cannot retrieve you, regardless of content quality.",
  },
  {
    q: "What is the difference between robots.txt and the WAF?",
    a: "robots.txt is a polite request; the WAF and CDN decide what actually happens. The classic failure is a bot-mitigation rule that returns 403 to PerplexityBot or OAI-SearchBot while robots.txt says Allow. We verify at the edge with real 200s, not just the file.",
  },
  {
    q: "Should we allow GPTBot and other training crawlers?",
    a: "That is a data-governance decision, separate from search visibility. Allowing OAI-SearchBot drives citations; GPTBot feeds training. Many organisations allow grounding and block training, and document the policy under NDPA, ISO 42001 and global AI governance standards expectations.",
  },
  {
    q: "How do I check what crawlers actually reach my site?",
    a: "Server logs per user agent — hit rate, status code, crawl depth — are the only ground truth. We set up monthly crawler-health reporting and alerting, so a WAF regression is caught the day it happens, not the quarter it goes unnoticed.",
  },
  {
    q: "Do we need llms.txt if we have a sitemap?",
    a: "Yes — they do different jobs. The sitemap tells every crawler what pages exist; llms.txt tells a model what matters and how to describe you, in seconds. Keep llms.txt small and curated, and make all three layers — robots, sitemap, llms.txt — agree.",
  },
  {
    q: "How fast do crawlability fixes show results?",
    a: "Access and indexation fixes typically produce first crawler hits within days and first citations within weeks. That is why crawlability is the right first engagement: it is binary, fast and gates every other LLMO investment.",
  },
  {
    q: "What does an engagement cost and how is it scoped?",
    a: "Scoped by surface and sprint: diagnostic, remediation, re-test and a monthly monitoring loop. Book a discovery call for a written scope with transparent pricing — the diagnostic itself starts with a free audit conversation.",
  },
];

export const crawlSteps = [
  {
    num: "01",
    name: "Diagnose",
    weeks: "Days 1–5",
    body: "Live tests and server-log analysis across all six layers: which grounding crawlers can reach you, which are 403'd, what Bing and Google actually index.",
  },
  {
    num: "02",
    name: "Remediate",
    weeks: "Weeks 1–2",
    body: "Ship robots.txt, WAF/CDN rules, Bing submission, schema and llms.txt fixes — engineering-ready, not advisory.",
  },
  {
    num: "03",
    name: "Re-test & monitor",
    weeks: "Week 3+",
    body: "Re-run the same checks, document before/after crawler hit data, and hand over the monthly health loop with alerting.",
  },
];
