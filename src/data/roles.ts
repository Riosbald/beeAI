export interface RoleOutcome {
  title: string;
  body: string;
}

export interface RoleStep {
  h: string;
  p: string;
}

export interface RoleData {
  slug: string;
  nav: string;
  badge: string;
  title: string;
  sub: string;
  problem: string;
  pain: string[];
  painLine: string;
  get: RoleOutcome[];
  getLine: string;
  talk: string;
  deliverables: string[];
  method: RoleStep[];
  proof: { quote: string; name: string; role: string };
  faqs: { q: string; a: string }[];
}

export const roles: RoleData[] = [
  {
    slug: "for-cmos",
    nav: "CMOs",
    badge: "For CMOs",
    title: "Win visibility in ChatGPT, Perplexity, and Google AI Overviews.",
    sub: "Your buyers start research inside AI assistants long before they land on your site. BeameAI by LOGON turns the AI-search shift from a share-of-voice threat into a measurable growth channel — with board-ready reporting.",
    problem:
      "Traditional SEO is dropping, and the demand it used to capture is being answered — not redirected — inside AI assistants. As CMO you are accountable for brand presence in a channel that has no ranking report. BeameAI by LOGON gives that channel a metric, a plan and a quarter-over-quarter trajectory.",
    painLine:
      "Your traditional SEO traffic is dropping as AI Overviews answer queries directly — and you have no visibility in LLM responses.",
    getLine:
      "A measurable position in LLM answers across your priority topics, with ongoing citation tracking.",
    talk: "CMO",
    pain: [
      "Traditional SEO is dropping: zero-click answers keep a growing share of demand away from your site.",
      "No reliable answer to “what position do we hold in AI?” — competitors get named by ChatGPT and you are not.",
      "Marketing budget scrutiny: LLM visibility is expected by the board but impossible to report without a method.",
    ],
    get: [
      {
        title: "Measurable LLM position",
        body: "A quarterly share-of-citation scorecard across ChatGPT, Perplexity, Claude and Google AI Overviews, benchmarked against the competitors your buyers actually ask about.",
      },
      {
        title: "Board-ready reporting",
        body: "Citations linked to brand search, AI-referred sessions and discovery-call sources — so the channel defends its own budget with pipeline language, not impressions.",
      },
      {
        title: "Presence where decisions start",
        body: "Your category narrative appears inside the AI answers that shape the shortlist before your brand is even searched. That is share of mind you can point to.",
      },
    ],
    deliverables: [
      "LLM citation audit and gap analysis",
      "Content restructuring for AI extraction",
      "Monthly citation tracking and lift reporting",
    ],
    method: [
      {
        h: "Audit",
        p: "We run your buyer prompts across every major assistant and map who owns the answers today — you, competitors, or category blogs.",
      },
      {
        h: "Entity & access",
        p: "We fix retrieval first: crawler access, Bing indexation and your entity graph. Nothing else moves if the model cannot reach you.",
      },
      {
        h: "Content",
        p: "We restructure the highest-intent pages into extractable, sourced answers and refresh them on a 90-day cadence.",
      },
      {
        h: "Track",
        p: "Monthly scorecards, quarterly narratives, and a direct line from citations to brand search and pipeline.",
      },
    ],
    proof: {
      quote:
        "Within two quarters, ChatGPT and Perplexity began citing our research and documentation in fintech prompts. AI-referred discovery calls doubled, and for the first time we could report brand position in AI answers to the board.",
      name: "Adeola Bello",
      role: "CEO, Lagos-based fintech",
    },
    faqs: [
      {
        q: "How fast can we see movement in AI answers?",
        a: "Access and entity fixes show in weeks; durable share-of-citation gains typically build over two to three quarters as content and corroboration compound. You get a baseline in the first 10 days.",
      },
      {
        q: "Which platforms do you measure?",
        a: "ChatGPT (Search), Perplexity, Claude, Microsoft Copilot and Google AI Overviews — the same five surfaces your buyers use. You can add regional or industry-specific assistants.",
      },
      {
        q: "How is success reported to the board?",
        a: "A quarterly scorecard that ties share of citation to brand search, AI-referred sessions and pipeline sources — the same language finance already speaks.",
      },
    ],
  },
  {
    slug: "for-seo-leads",
    nav: "Heads of SEO",
    badge: "For Heads of SEO",
    title: "Add LLMO to your existing SEO stack without scrapping it.",
    sub: "Your playbook was built for blue links. We hand you the hybrid model — ranking and citation — engineered as an extension of the SEO investment you already made, not a replacement for it.",
    problem:
      "Every SEO leader can see the shift: answers replacing results pages, entity and schema work growing in importance, and a measurement model built on positions going soft. The risk is treating LLMO as a parallel programme. The right move is a hybrid operating model where every page earns both a rank and a citation.",
    painLine:
      "Your SEO playbook is optimised for blue links, but you need to add LLMO without losing existing organic traffic.",
    getLine:
      "An integrated SEO + LLMO programme that grows both classical organic and AI-citation traffic.",
    talk: "Heads of SEO",
    pain: [
      "Your playbook is optimised for blue links in a world where answers replace results pages.",
      "Entity and schema work is clearly coming, but the team has no capacity or template to ship it.",
      "LLMO feels like a separate budget — it isn't when engineered as an extension of your stack.",
    ],
    get: [
      {
        title: "Integrated SEO + LLMO",
        body: "One content operation, two acceptance criteria: rank in Google and earn citation in AI answers. No duplicated programmes, no scrapped tooling.",
      },
      {
        title: "Entity-first technical foundation",
        body: "Schema, crawler access, llms.txt and architecture changes that lift both engines at once — deployed by engineers, not recommended in slides.",
      },
      {
        title: "Hybrid measurement",
        body: "Rank tracking plus share-of-citation in a single quarterly view, so your reporting shows owned visibility in both search and AI.",
      },
    ],
    deliverables: [
      "Hybrid SEO + LLMO content frameworks",
      "Schema, entity SEO, structured-data audit",
      "Internal linking and authority architecture",
    ],
    method: [
      {
        h: "Map",
        p: "We audit your current stack and map where LLMO slots in — same tools, same pipeline, new acceptance criteria.",
      },
      {
        h: "Fix the base",
        p: "Crawler access, Bing indexation and entity schema — the shared foundation both engines depend on.",
      },
      {
        h: "Extend",
        p: "We add the LLMO layer: llms.txt, direct-answer formats, comparison content and internal linking for extraction.",
      },
      {
        h: "Prove",
        p: "Hybrid reporting that shows rank positions and share of citation side by side, with the causal links between them.",
      },
    ],
    proof: {
      quote:
        "The only partner that could pair GEO strategy with actual engineering. BeameAI by LOGON shipped the schema and crawler work themselves, and our clients' AI visibility started moving within a quarter.",
      name: "Sarah Okafor",
      role: "Managing Partner, global B2B agency",
    },
    faqs: [
      {
        q: "Does this replace our SEO tooling or process?",
        a: "No. We extend what you have. Most teams keep their rank trackers and content pipeline; we add the entity, access and prompt-measurement layers.",
      },
      {
        q: "What is the biggest early win for an SEO team?",
        a: "The access and schema audit. A surprising share of AI invisibility is a WAF rule or a missing Bing index — fixes that show results in weeks, not quarters.",
      },
      {
        q: "How do you avoid doubling the workload?",
        a: "One content operation, two acceptance criteria. The marginal cost of LLMO-ready writing is small once the template exists; we bring the templates.",
      },
    ],
  },
  {
    slug: "for-content-heads",
    nav: "Heads of Content",
    badge: "For Heads of Content",
    title: "Build content that ranks in both Google and ChatGPT.",
    sub: "Great content is invisible in LLMs when it cannot be extracted, verified or attributed. We give your team the dual-ranking framework — without doubling the editorial workload.",
    problem:
      "Your team publishes excellent content that ranks in Google and never appears in AI answers. The gap is structural, not creative: AI extraction wants direct answers, dated sources and machine-readable structure, and most editorial pipelines were built for none of those. The fix is a template, not a rewrite of your team's talent.",
    painLine:
      "Your content team produces great work that classical SEO loved — but it is invisible in LLM answers.",
    getLine:
      "Content frameworks designed for dual ranking with measurable citation lift inside 90 days.",
    talk: "Heads of Content",
    pain: [
      "Content performs in Google but never appears in AI answers or citations.",
      "Editorial teams have no repeatable template for citation-worthy, extractable writing.",
      "Refresh cadence is ad hoc — and assistants ruthlessly expose stale dates.",
    ],
    get: [
      {
        title: "Dual ranking frameworks",
        body: "One editorial process that satisfies Google quality guidance and LLM extraction equally — the same page wins both.",
      },
      {
        title: "3–10x AI velocity",
        body: "From brief to published, sourced answer in days. Template-driven production, not one-off heroics from your best writer.",
      },
      {
        title: "Quarterly refresh system",
        body: "A 90-day cadence by content type with honest dateModified governance that compounds trust instead of decaying it.",
      },
    ],
    deliverables: [
      "Featured snippet and citation-friendly templates",
      "AI-assisted content production at 3–10x velocity",
      "Quarterly content audit and refresh programme",
    ],
    method: [
      {
        h: "Template",
        p: "We design the page templates: direct answer block, sourced claims, FAQ and comparison modules, author schema.",
      },
      {
        h: "Train",
        p: "We train your writers on the dual-ranking standard with live examples from your own category.",
      },
      {
        h: "Deploy",
        p: "We restructure your highest-intent pages and ship the first wave together with your team.",
      },
      {
        h: "Refresh",
        p: "The 90-day cadence takes over: reviewed dates, re-verified sources, and pages that keep earning citations.",
      },
    ],
    proof: {
      quote:
        "BeameAI by LOGON trained our content team and shipped the schema themselves. We now appear in AI answers for precision-agriculture questions across three markets — content we already had, restructured.",
      name: "Kwame Mensah",
      role: "CTO, Pan-African agritech platform",
    },
    faqs: [
      {
        q: "Will this slow our publishing cadence?",
        a: "The opposite. Templates remove the hardest decisions — structure, sourcing, schema — so publishing gets faster, not slower.",
      },
      {
        q: "What counts as a 'direct answer'?",
        a: "A 40–60 word paragraph that answers the question in full, stands alone out of context, and carries a named, dated source. It is the unit of extraction.",
      },
      {
        q: "How do you keep freshness honest?",
        a: "Cadences by content type: statistics quarterly, platform behaviour every 90 days, definitions twice a year. dateModified changes only when the page genuinely changes.",
      },
    ],
  },
  {
    slug: "for-founders",
    nav: "Founders & CEOs",
    badge: "For Founders / CEOs",
    title: "Become the LLM-cited authority in your category.",
    sub: "When a buyer asks an assistant who the leaders in your category are, is your name in the answer? BeameAI by LOGON builds the entity, the evidence and the corroboration that make it so — for your company and for you.",
    problem:
      "Authority in AI search is decided by what the model knows and can verify, not by what you claim. If competitors are named in category answers and you are not, the gap is usually a missing entity graph, missing corroboration or missing extractable content — all fixable, none requiring luck.",
    painLine:
      "Your competitors are starting to be named by ChatGPT and Perplexity for queries in your space — and you are not.",
    getLine:
      "Brand-level LLMO programme that establishes your authority across the LLM citation graph.",
    talk: "Founders / CEO",
    pain: [
      "Competitors are named by AI; you are not — and you only find out when a buyer says it out loud.",
      "Authority feels like luck: there is no system for shaping what the model knows about you.",
      "Agency 'brand' work usually returns logos and taglines, not LLM knowledge and citations.",
    ],
    get: [
      {
        title: "Brand-level LLMO",
        body: "Your company and named leaders become entities the model resolves, describes and recommends — consistently, in every assistant.",
      },
      {
        title: "A named-authority estate",
        body: "Wikipedia/GitHub presence, executive bios with Person schema, and analyst, press and directory corroboration — the third-party layer models verify against.",
      },
      {
        title: "Category ownership",
        body: "The answers to your category's biggest questions cite you first, quarter after quarter — measured, not felt.",
      },
    ],
    deliverables: [
      "Authority building on Wikipedia, GitHub, industry sites",
      "Founder and team E-E-A-T optimisation",
      "PR and citation farming campaigns",
    ],
    method: [
      {
        h: "Entity",
        p: "We define who the model thinks you are: Organization and Person schema, sameAs graph, consistent naming everywhere.",
      },
      {
        h: "Evidence",
        p: "We build the extractable content and named-outcome case studies that give assistants something safe to repeat.",
      },
      {
        h: "Corroborate",
        p: "We drive the third-party layer — directories, press, analyst mentions, Wikipedia/GitHub — that models check claims against.",
      },
      {
        h: "Own",
        p: "Quarterly scorecards show your share of citation rising while competitors' answers start naming you first.",
      },
    ],
    proof: {
      quote:
        "We went from never appearing in AI answers to being the first vendor cited in our category's core prompts. BeameAI by LOGON made authority a system instead of a hope.",
      name: "Adeola Bello",
      role: "CEO, Lagos-based fintech",
    },
    faqs: [
      {
        q: "How long does it take to become a named authority?",
        a: "Entity and evidence work shows in the first quarter; corroboration compounds over two to three quarters. The baseline is measurable from day one.",
      },
      {
        q: "Do we need Wikipedia?",
        a: "Not necessarily, but a credible presence on the knowledge layer — Wikipedia, Wikidata, GitHub, industry registries — is the strongest corroboration signal models trust. We build the roadmap around what you qualify for.",
      },
      {
        q: "What if competitors already own the category answers?",
        a: "That is a gap list, not a wall. We audit exactly who is cited and why, then target the weakest claims with better evidence and fresher dates. Category answers turn over.",
      },
    ],
  },
];
