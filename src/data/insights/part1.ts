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
      "Crawler access and entity clarity gate everything else; content polish cannot compensate for a 403.",
      "Compliance (NDPA, global AI governance standards, ISO 42001) is becoming a citation factor in its own right.",
    ],
    definition:
      "AI search optimization is the practice of making a brand retrievable, extractable and quotable by generative engines — one discipline with three surfaces (SEO, GEO, LLMO), gated by crawler access and measured by share of citation.",
    aka: ["AI search optimization", "AISO", "citation optimization", "AI visibility optimization"],
    quickFacts: [
      { label: "2026 adoption", value: "700M+ ChatGPT weekly actives" },
      { label: "Zero-click", value: "~60% of US Google searches (SparkToro 2024)" },
      { label: "Research basis", value: "Aggarwal et al. 2024 (arXiv)" },
      { label: "Freshness cadence", value: "90-day reviews" },
    ],
    tldr: [
      "One discipline, three surfaces: SEO for position, GEO for inclusion in synthesised answers, LLMO for the model's knowledge of your entity.",
      "The stack: access (crawlers), entity (schema), content (citable passages), machine layer (llms.txt, honest dates) — a break at any level removes you from the answer.",
      "Measure share of citation with frozen prompt sets, fix access first, and refresh on a 90-day cadence.",
    ],
    examples: [
      "A Lagos fintech runs 45 frozen buyer prompts, finds zero citations, fixes a WAF 403 and a missing Bing index, restructures its ten highest-intent pages — and appears in ChatGPT answers for 'fintech APIs Nigeria' within one quarter.",
      "A global B2B agency measures share of citation for its category, sees a licensed competitor with structurally higher citation share, and wins the organic answer slot by publishing fresher, sourced comparison content.",
    ],
    relatedTerms: [
      { term: "What is LLMO?", slug: "what-is-llmo" },
      { term: "What is GEO?", slug: "what-is-geo" },
      { term: "GEO vs SEO", slug: "geo-vs-seo" },
      { term: "LLMO vs SEO", slug: "llmo-vs-seo" },
      { term: "AI crawler management", slug: "ai-crawler-management" },
      { term: "llms.txt guide", slug: "llms-txt-guide-2026" },
      { term: "Citation optimization", slug: "citation-optimization-for-ai" },
      { term: "What is an AI agent?", slug: "what-is-an-ai-agent" },
    ],
    keyPoints: [
      "AI search optimization is one discipline with three surfaces: retrieval, extraction and citation.",
      "Structured data and verifiable citations do more for AI visibility than keyword density ever did.",
      "Measurement is prompt-based, not rank-based — you track share of citation, not position one.",
      "Crawler access and entity clarity gate everything else; content polish cannot compensate for a 403.",
      "Compliance (NDPA, global AI governance standards, ISO 42001) is becoming a citation factor in its own right.",
    ],
    faq: [
      {
        q: "Is AI search optimization the same as SEO?",
        a: "No — SEO competes for a position in a ranked list; AI search optimization competes for inclusion in a synthesised answer. They share a technical base (indexability, speed, structure) and should run as one programme with two acceptance criteria.",
      },
      {
        q: "What is the difference between GEO and LLMO?",
        a: "GEO (generative engine optimization) optimises content so engines like Google AI Overviews synthesise and attribute it. LLMO (large language model optimization) optimises the model's knowledge of your entity — who you are, what you do, that you are verifiable. A working programme needs both.",
      },
      {
        q: "How fast do results show?",
        a: "Access and entity fixes show in weeks; first citations typically within 90 days; durable share of citation compounds over two to three quarters.",
      },
      {
        q: "Do I still need traditional SEO?",
        a: "Yes — most assistants retrieve from conventional indexes, and brand search (the leading indicator of AI-mediated demand) is driven by the same authority signals.",
      },
      {
        q: "How do you measure AI visibility?",
        a: "Frozen prompt sets across ChatGPT, Perplexity, Claude and Google AI Overviews, parsed for cited domains and brand mentions; combined with GA4 AI-referrer sessions, Search Console AI Overviews impressions and server logs.",
      },
    ],
    sources: [
      {
        label: "Aggarwal et al. (2024) — 'GEO: Generative Engine Optimization'",
        url: "https://arxiv.org/abs/2311.09735",
      },
      { label: "SparkToro — Zero-Click Search Studies (2024)", url: "https://sparktoro.com/blog/" },
      {
        label: "Semrush — AI Overviews Study (2025)",
        url: "https://www.semrush.com/blog/ai-overviews-study/",
      },
      {
        label: "OpenAI — Platform bots documentation (OAI-SearchBot, GPTBot)",
        url: "https://platform.openai.com/docs/bots",
      },
      {
        label: "Anthropic — Claude crawler documentation",
        url: "https://docs.anthropic.com/en/docs/about-claude/crawlers",
      },
      { label: "Answer.AI — llms.txt specification", url: "https://llmstxt.org/" },
    ],
    reviewedBy: "Oluwamayowalogo",
    nextInCluster: "what-is-an-ai-agent",
    sections: [
      {
        h: "What AI search optimization actually means",
        inshort:
          "AI search optimization is the practice of making a brand retrievable, extractable and quotable by generative engines — one discipline, three surfaces, gated by access and measured by share of citation.",
        p: [
          "AI search optimization is the practice of making a brand retrievable, extractable and quotable by generative engines. A model answering a buyer's question does not scan ten blue links; it retrieves a shortlist of passages, synthesises them, and attributes the ones it trusts. Optimization therefore happens at three points: whether your content is retrieved at all, whether the passage is clean enough to extract, and whether your entity is trusted enough to be named in the answer.",
          "The stakes are no longer hypothetical. By 2026, ChatGPT reports more than 700 million weekly active users, Google AI Overviews answers a meaningful subset of the billions of daily searches, and SparkToro's 2024 analysis already put roughly 60% of US Google searches at zero clicks. Buyers from Lagos to London now receive answers, not links — and the brands inside those answers receive the pipeline.",
          "GEO (generative engine optimization) and LLMO (large language model optimization) are two names for overlapping halves of that work. GEO leans toward content formatting for synthesis; LLMO leans toward entity and knowledge-layer authority. In practice a working programme uses both, plus classic technical SEO, because most assistants still retrieve from a conventional index.",
        ],
      },
      {
        h: "One discipline, three surfaces: GEO, LLMO and SEO",
        inshort:
          "SEO competes for position, GEO for inclusion in synthesised answers, LLMO for the model's knowledge of your entity — one base, three surfaces, one programme.",
        p: [
          "Teams that treat these as separate programmes waste budget. They are one discipline with three surfaces, and each surface has its own success metric:",
        ],
        bullets: [
          "SEO competes for a position in a ranked list — measured in rankings and clicks.",
          "GEO competes for inclusion in a synthesised answer — measured in mentions inside generated responses.",
          "LLMO competes for the model's knowledge of your entity — measured in whether the answer names you, describes you correctly, and cites you when it does.",
          "The shared base: indexability, crawler access, structured data, speed and honest dates. Fix the base once, then layer the surfaces.",
        ],
      },
      {
        h: "The four layers of an AI-search-ready site",
        inshort:
          "A break at any layer removes you from the answer: access, entity, content, machine — fix them in that order.",
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
        inshort:
          "Aggarwal et al. (2024): citations, statistics and quotations lift visibility by up to roughly 40%; keyword stuffing does nothing.",
        p: [
          "The most cited empirical work in this field remains Aggarwal et al. (2024), which tested content interventions against generative engines and found that adding citations, statistics and direct quotations lifted source visibility materially — up to roughly 40% for some content types — while keyword stuffing did nothing. That result shapes the whole playbook: write like a source, not like a landing page.",
          "Everything else that is claimed about AI search should be treated as an estimate unless a named study, platform announcement or first-party log supports it. Publishing unverifiable numbers is the fastest way to lose the trust signal you are trying to build.",
        ],
      },
      {
        h: "Schema that survives extraction",
        inshort:
          "Schema is how a model knows you: Organization + Person + sameAs in JSON-LD, validated before deploy.",
        p: [
          "Structured data is the difference between a model guessing who you are and a model knowing. The minimum viable entity graph is Organization plus Person with sameAs links, deployed site-wide in JSON-LD:",
          "Add Article schema with real datePublished and dateModified to every piece of content, and FAQPage where you answer buyer questions. Validate every template before deploy — broken markup is worse than none.",
        ],
        code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BeameAI by LOGON",
  "url": "https://beameai.ng",
  "address": { "@type": "PostalAddress",
               "addressLocality": "Lagos", "addressCountry": "NG" },
  "sameAs": ["https://www.linkedin.com/in/oluwamayowa"],
  "founder": { "@type": "Person", "name": "Oluwamayowalogo",
               "jobTitle": "Lead AI Strategist",
               "sameAs": ["https://www.linkedin.com/in/oluwamayowa"] }
}
</script>`,
      },
      {
        h: "llms.txt in practice",
        inshort:
          "llms.txt is a curated machine-readable index of your domain — small, strategic and placed at the root.",
        p: [
          "The Jeremy Howard / Answer.AI standard gives a model a curated, machine-readable summary of your domain in seconds. Keep it small, curate it by strategic value, and place it at the root:",
        ],
        code: `# llms.txt

> BeameAI by LOGON — AI Search & LLMO consultancy, Lagos, Nigeria.

## Flagship guides

[AI Search Optimization: The Complete Guide for 2026](https://beameai.ng/insights/ai-search-optimization-complete-guide-2026)

## Services

[AI Search Optimization Services](https://beameai.ng/services)`,
      },
      {
        h: "Compliance for African and global teams",
        inshort:
          "Compliance evidence — NDPA, global AI governance standards, ISO 42001 — is becoming a citation factor in its own right.",
        p: [
          "Trust is now a technical requirement, and compliance evidence is part of it. Organisations handling Nigerian customer data must be able to evidence Nigeria Data Protection Act (NDPA) obligations through the NDPC's framework; teams serving the continent should track the global AI governance standards; and global enterprises increasingly require AI management systems aligned to ISO 42001. Where you serve European markets, the EU AI Act's transparency and risk requirements apply to AI products and high-risk use cases.",
          "The strategic read: publish a governance statement, document your data handling, and let models verify it. Compliance documentation is becoming a citation factor in its own right — a verifiable signal that your claims about how you operate will survive cross-checking.",
        ],
      },
      {
        h: "A 90-day operating cadence",
        inshort:
          "Audit 40–60 prompts, fix access and entity, rebuild high-intent pages, re-run at day 90 — compare share of citation, not traffic.",
        p: [
          "Run a prompt audit against 40 to 60 buyer questions and record which brands are cited. Fix access and entity issues first, because they are binary. Then rewrite the ten pages closest to purchase intent into extractable answer formats with sourced claims. Re-run the same prompt set at day 90 and compare share of citation, not traffic. AI-mediated demand shows up in brand search and direct sessions long before it shows up in a referral report.",
          "Within that quarter, hold the cadence that compounds: allow and monitor grounding crawlers monthly, review dates and sources on schedule, refresh cited pages rather than publishing new ones, and log every platform change that touches retrieval. The discipline is boring; the compounding is not.",
        ],
      },
      {
        h: "How to measure what matters",
        inshort:
          "Track share of citation with frozen prompt sets monthly, and link citations to brand search and pipeline.",
        p: [
          "The frame is share of citation, not position one. Track a frozen prompt set monthly across ChatGPT, Perplexity, Claude and Google AI Overviews; publish a scorecard quarterly; and link citations to brand search, AI-referred sessions and discovery-call sources. That linkage — citation to pipeline — is what lets a CMO defend the budget and a founder decide where the next dollar goes.",
          "The bottom line: in 2026, visibility is something you earn at the retrieval layer, prove at the extraction layer, and keep at the trust layer. Access first, entity second, content third, compliance throughout — that ordering is the whole guide.",
        ],
      },
    ],
  },

  // Flagship glossary — What is an AI agent?
  {
    slug: "what-is-an-ai-agent",
    cluster: "start-here",
    type: "Definition",
    title: "What Is an AI Agent?",
    dek: "Definition → perceive–reason–act loop → vs chatbot and workflow → types in production → when not to use → governance → FAQ → sources. The BeameAI by LOGON practitioner glossary entry for AI agents in 2026.",
    published: "Jun 2026",
    updated: "Aug 2026",
    definition:
      "An AI agent is a software system that perceives an environment, reasons toward a goal, and acts on it — running a loop of planning, tool use and self-correction with limited or no human supervision.",
    aka: ["AI agent", "autonomous agent", "agentic system", "agentic AI"],
    quickFacts: [
      { label: "Main loop", value: "Perceive → reason → act → observe" },
      { label: "Key enabler", value: "Tool-calling LLMs + MCP (2024–2026)" },
      { label: "Watch term", value: "Agentic AI — a top strategic tech trend" },
      { label: "Enterprise state", value: "Production in support, research, commerce" },
    ],
    tldr: [
      "An agent is a system that acts: it perceives, plans, calls tools, observes results and iterates toward a goal without step-by-step human instruction.",
      "The model is the brain, tools are the hands, memory is the context — the loop is what makes it an agent, not the model alone.",
      "Agents matter for AI search because they are a new retrieval and commerce surface: machine-readable, entity-clear brands get cited and transacted with.",
    ],
    examples: [
      "Support: an agent checks an order via the courier API, drafts a refund, and hands a human the approval.",
      "Research: an agent queries the web, reads sources, cites them, and writes a dated brief.",
      "Commerce: a shopping agent compares products, checks stock and price, and transacts — the agentic-commerce use case the platform by BeameAI by LOGON BeameAI prepares brands for.",
    ],
    relatedTerms: [
      { term: "What is LLMO?", slug: "what-is-llmo" },
      { term: "Entity SEO for AI", slug: "entity-seo-for-ai" },
      { term: "AI crawler management", slug: "ai-crawler-management" },
      { term: "llms.txt guide", slug: "llms-txt-guide-2026" },
      { term: "AI search optimization guide", slug: "ai-search-optimization-complete-guide-2026" },
    ],
    keyPoints: [
      "An agent is defined by the loop: perceive, reason, act, observe, repeat.",
      "The model is the brain; tools are the hands; memory is the context.",
      "A chatbot answers; a workflow executes fixed steps; an agent adapts its plan mid-run.",
      "Production types run from single tool-calling agents to multi-agent systems.",
      "Guardrails — permissions, sandboxes, human escalation, compliance — decide whether agents are useful or reckless.",
    ],
    takeaways: [
      "The definition is the loop: perceive, reason, act, observe, repeat — autonomy within boundaries.",
      "Chatbots answer, workflows execute fixed steps, agents adapt their own plan.",
      "Agents are the newest AI-search and commerce surface — brand visibility now includes being agent-discoverable.",
    ],
    sections: [
      {
        h: "The definition: what an AI agent is",
        inshort:
          "An AI agent is a goal-directed software system that acts on its environment through a perceive–reason–act loop, using tools and memory, with limited human supervision.",
        p: [
          "The term 'agent' has been overloaded, so the practitioner definition must be exact. A chatbot answers questions; an agent pursues goals. An agent perceives (input, context, tool results), reasons (plans the next step), acts (calls a tool, writes, transacts), observes the outcome, and repeats — until the goal is reached, a safety boundary is hit, or it escalates to a human.",
          "What makes a system an agent in 2026 is not the model — it is the loop. Models have been capable of reasoning for years; the agentic era arrived when models gained reliable tool-calling and a standard way to connect to the world (MCP, the Model Context Protocol, and a wave of agent frameworks).",
        ],
        bullets: [
          "Goal-orientation: it optimises toward an outcome, not just a reply.",
          "Tool use: it calls APIs, search, databases and other software.",
          "Memory: it carries context across steps — conversation, working memory, long-term storage.",
          "Self-correction: it observes results and adjusts its plan.",
          "Autonomy boundary: it acts within permissions, escalating when uncertain.",
        ],
      },
      {
        h: "How agents actually work: the perceive–reason–act loop",
        inshort:
          "Every agent — simple or multi-agent — runs the same loop: perceive, reason, act, observe; the frameworks and tools only change how fast and how far each step reaches.",
        p: [
          "The canonical pattern is ReAct-style reasoning: the model alternates thought (what should I do next?) with action (which tool do I call?), reads the tool result, and continues. In 2026 the standard connection layer is MCP — the Model Context Protocol — which standardises how agents discover and call tools, files and data sources instead of one-off API glue per vendor.",
        ],
        bullets: [
          "Perceive: prompt, context, tool output, environment state.",
          "Reason: plan the next action — often explicitly as a 'thought'.",
          "Act: call a tool — search, API, code interpreter, database, transaction.",
          "Observe: read the result and verify it against the goal.",
          "Repeat until done, blocked, out of budget, or escalated.",
        ],
      },
      {
        h: "Agent vs chatbot vs workflow",
        inshort:
          "Chatbots answer, workflows execute fixed steps, and agents adapt — the difference is where the decision-making lives.",
        p: [
          "The three labels are frequently conflated; the distinction matters for architecture, cost and risk:",
        ],
        bullets: [
          "Chatbot: answers questions from the model's knowledge and context — no persistent goal, no tool loop.",
          "Workflow: executes a predefined sequence (e.g., triage → route → respond); deterministic and auditable.",
          "Agent: decides its own sequence, calls tools, and changes course based on results.",
          "In practice the boundary blurs: many production systems are workflows with agentic steps, which is usually the right architecture — autonomy only where it earns its risk.",
        ],
      },
      {
        h: "Types of agents in production (2026)",
        inshort:
          "Production agents span a spectrum — tool-calling agents, RAG-backed agents, multi-agent systems, commerce agents and OS-level agents — each with different reliability and governance needs.",
        p: ["The useful taxonomy in 2026 is by architecture and surface, not by marketing label:"],
        bullets: [
          "Tool-calling LLM agents: one model, a tool registry, an execution loop — support and coding assistants.",
          "RAG-backed agents: retrieval grounded in a knowledge base; the agent cites sources and answers from vetted data.",
          "Multi-agent systems: specialised agents (researcher, writer, reviewer) that hand work to each other.",
          "Agentic commerce agents: agents that compare, recommend and transact on a buyer's behalf — the surface BeameAI optimises brands for.",
          "OS and on-device agents: system-level assistants that operate apps and files on a device.",
          "Autonomous research agents: long-horizon tasks with planning, reflection and citation.",
        ],
      },
      {
        h: "When not to use an agent",
        inshort:
          "Autonomy is a liability in high-consequence, high-regulation or ill-specified settings — reach for a workflow, a human, or a well-scoped chatbot instead.",
        p: [
          "Agent adoption is accelerating, but the discipline is knowing where autonomy does not pay. Avoid agents when:",
        ],
        bullets: [
          "Deterministic, compliance-mandated processes where every step must be auditable.",
          "High-consequence errors — finance settlements, medical decisions, legal filings — without a human-in-the-loop checkpoint.",
          "Poorly specified goals or missing tooling and documentation — agents amplify ambiguity.",
          "Cost and latency ceilings: agent loops multiply model calls and time.",
          "Regulatory uncertainty: if NDPA, global AI governance standards or EU AI Act obligations for the use case are unresolved, scope narrows first.",
        ],
      },
      {
        h: "Governance and compliance for agentic systems",
        inshort:
          "Agents are only as trustworthy as their guardrails — permissions, sandboxes, logging, human escalation — plus documented compliance under NDPA, the global AI governance standards, ISO 42001 and, where relevant, the EU AI Act.",
        p: [
          "The 2026 enterprise question is not 'can we build an agent?' but 'can we govern one?' The responsible pattern: least-privilege tool permissions, sandboxed execution, full action logging, explicit escalation to humans, and a documented AI management system aligned to ISO 42001.",
        ],
        bullets: [
          "NDPA: personal data processed by agents requires lawful basis, purpose limitation and data-minimisation.",
          "global AI governance standards: continental guidance on trustworthy AI adoption for African organisations.",
          "ISO 42001: an AI management system that makes governance auditable — increasingly expected by global enterprises.",
          "EU AI Act: applies to agents serving EU markets or affecting EU persons; high-risk classifications require conformity work.",
          "Procurement angle: buyers now ask vendors for agent-governance documentation — it is becoming a deal-breaker.",
        ],
      },
      {
        h: "What this means for your AI visibility",
        inshort:
          "Agents are the newest retrieval and commerce surface: they ground in LLM knowledge and live retrieval, so entity clarity, machine-readable structure and citable claims decide whether agents discover, recommend and transact with your brand.",
        p: [
          "For brands, agents are not just a technology story — they are a distribution channel. When a buyer's agent searches for a vendor, it retrieves from the same indexed, entity-verified surfaces the assistants use. The BeameAI by LOGON thesis: the brands that are retrievable, extractable and quotable by LLMs are the brands agents will cite, recommend and buy from.",
          "That is why the LLMO discipline in this hub — crawler access, entity graphs, schema, llms.txt, citable content — is also the agent-readiness checklist. BeameAI, the platform by BeameAI by LOGON, extends the same foundation to agentic commerce: making brands discoverable, recommendable and transactable by AI agents.",
        ],
      },
    ],
    faq: [
      {
        q: "What is the difference between an AI agent and a chatbot?",
        a: "A chatbot answers questions from the model's knowledge and context. An agent pursues a goal: it perceives, plans, calls tools, observes results and iterates. Chatbots explain; agents act.",
      },
      {
        q: "Do AI agents need LLMs?",
        a: "Most modern agents use an LLM as the reasoning core, but the agent is the loop around the model — tools, memory and permissions — not the model itself. Rule-based agents exist, but they cannot adapt to novel situations.",
      },
      {
        q: "What is a multi-agent system?",
        a: "A system where specialised agents — a researcher, a writer, a reviewer — hand work to each other and coordinate on a shared goal. It scales capability but multiplies cost, latency and failure modes; start with one agent.",
      },
      {
        q: "Are AI agents safe to deploy?",
        a: "With guardrails: least-privilege permissions, sandboxes, logging, human escalation and a documented governance posture under NDPA, ISO 42001, the global AI governance standards and, where relevant, the EU AI Act. Autonomy without guardrails is how incidents happen.",
      },
      {
        q: "How do agents affect AI search and visibility?",
        a: "Agents retrieve from the same entity-verified surfaces assistants use, so the LLMO stack — crawler access, schema, llms.txt, citable content — determines whether an agent discovers, cites and transacts with your brand.",
      },
      {
        q: "What is agentic commerce?",
        a: "Agentic commerce is the buying journey executed by agents: they compare products, check availability and price, and complete transactions on a buyer's behalf. Brands prepare by making inventory and offers machine-readable — the surface BeameAI optimises.",
      },
    ],
    sources: [
      {
        label: "Anthropic — Building Effective Agents",
        url: "https://www.anthropic.com/research/building-effective-agents",
      },
      {
        label: "OpenAI — A Practical Guide to Building Agents",
        url: "https://platform.openai.com/docs/guides/agents",
      },
      {
        label: "Model Context Protocol (MCP) — Specification",
        url: "https://modelcontextprotocol.io",
      },
      {
        label: "Gartner — Agentic AI named a top strategic technology trend",
        url: "https://www.gartner.com/en/newsroom",
      },
      {
        label: "ISO/IEC 42001 — AI management system standard",
        url: "https://www.iso.org/standard/81230.html",
      },
      { label: "global AI governance standards", url: "https://au.int/" },
      { label: "Nigeria Data Protection Act (NDPA) — NDPC", url: "https://ndpc.gov.ng/" },
    ],
    reviewedBy: "Oluwamayowalogo",
    nextInCluster: "geo-vs-seo",
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
