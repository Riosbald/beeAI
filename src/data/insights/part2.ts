import type { Article } from "./types";

export const part2: Article[] = [
  // 03 Tactics & Playbooks
  {
    slug: "how-to-get-cited-by-chatgpt",
    cluster: "tactics",
    type: "How-To",
    title: "How to Get Cited by ChatGPT: 12-Step Playbook for 2026",
    dek: "Get cited by ChatGPT in 2026: 12 signals, GPT-5 and ChatGPT Search v2 changes, Bing index prereq, schema patterns, and publisher deals explained.",
    published: "Apr 2026",
    updated: "Aug 2026",
    takeaways: [
      "ChatGPT's browsing mode leans on a conventional search index — indexation is the prerequisite.",
      "OAI-SearchBot and GPTBot are separate agents with separate purposes; allow deliberately.",
      "Short, sourced, self-contained passages are what actually get quoted.",
    ],
    sections: [
      {
        h: "Get the plumbing right first",
        p: [
          "Nothing in this playbook works if the retrieval layer cannot reach you. Confirm the site is indexed in Bing Webmaster Tools as well as Google, allow OAI-SearchBot for search grounding, decide separately whether to allow GPTBot for training, and check that no CDN bot-mitigation rule is silently returning 403s to those user agents. This single audit resolves a surprising share of 'we are invisible in ChatGPT' cases.",
        ],
      },
      {
        h: "The twelve steps",
        p: ["Work them in order; the early ones gate the later ones."],
        bullets: [
          "Verify indexation in Bing and Google.",
          "Allow OAI-SearchBot in robots.txt and at the WAF.",
          "Decide and document your GPTBot training policy.",
          "Publish a canonical Organization schema node with sameAs.",
          "Add Person schema and real bylines to every article.",
          "Open each key section with a 40–60 word direct answer.",
          "Attach a named source to every factual claim.",
          "Add comparison tables for evaluative queries.",
          "Publish and maintain llms.txt.",
          "Keep dateModified honest and review quarterly.",
          "Earn corroboration on third-party sources the model already trusts.",
          "Track a fixed prompt set monthly and log which competitors are cited.",
        ],
      },
      {
        h: "Why some pages never get quoted",
        p: [
          "The most common failure is prose that cannot survive extraction. If a paragraph starts with 'this means that' or 'as we saw above', it depends on context the model will not carry across. Rewrite so every paragraph is intelligible alone. The second most common failure is unattributed confidence: strong claims with no source are exactly what a cautious assistant declines to repeat.",
        ],
      },
    ],
  },
  {
    slug: "how-to-get-cited-by-perplexity",
    cluster: "tactics",
    type: "How-To",
    title: "How to Get Cited by Perplexity AI: Complete 2026 Playbook",
    dek: "Get cited by Perplexity AI with a 9-step playbook: entity clarity, schema, llms.txt, citation-rich writing, and PerplexityBot setup — grounded in verified research.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Perplexity cites aggressively and visibly, which makes it the best surface for fast feedback.",
      "It favours recent, specific, well-sourced pages over broad brand pages.",
      "PerplexityBot access plus fast server response is a hard requirement.",
    ],
    sections: [
      {
        h: "How Perplexity picks sources",
        p: [
          "Perplexity runs live retrieval on nearly every query and shows numbered citations inline, so the selection behaviour is observable in a way it is not elsewhere. In practice it rewards pages that answer the specific question asked, carry a recent date, and contain concrete details — figures, named products, versions, dates — rather than category-level marketing copy.",
        ],
      },
      {
        h: "The nine steps",
        p: ["A tight loop you can complete in one sprint and re-test the same week."],
        bullets: [
          "Allow PerplexityBot and confirm it receives 200s.",
          "Fix crawl speed; slow pages get dropped from live retrieval.",
          "Define the entity with Organization and Person schema.",
          "Publish llms.txt pointing at your highest-value pages.",
          "Write one page per real question, not one page per keyword.",
          "Lead with the answer and keep it self-contained.",
          "Cite primary sources inline with links.",
          "Add a visible 'Updated' date and honour it.",
          "Re-run your prompt set weekly and log citation changes.",
        ],
      },
      {
        h: "Using Perplexity as a diagnostic",
        p: [
          "Because citations are visible, Perplexity is the cheapest way to see who owns a topic. Run twenty buyer questions, record every cited domain, and you have a competitive map plus a content gap list in an afternoon. Findings usually transfer partially to other assistants, because the underlying quality signals overlap.",
        ],
      },
    ],
  },
  {
    slug: "best-llmo-tools-2026",
    cluster: "tactics",
    type: "Ranked List",
    title: "Best LLMO Tools 2026: 10 Platforms for AI Visibility Tracking",
    dek: "10 verified LLMO tools for 2026: Profound, Peec AI, Otterly.ai, Adobe LLM Optimizer, Ziptie, AthenaHQ, LLMrefs and more. Pricing, coverage, methodology notes.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Every tool in this category samples prompts — none has privileged access to model internals.",
      "Coverage of assistants and refresh frequency matter more than dashboard polish.",
      "A spreadsheet plus a disciplined prompt set beats an unused enterprise licence.",
    ],
    sections: [
      {
        h: "How to evaluate the category",
        p: [
          "LLMO tracking tools work by running prompt sets against assistants on a schedule and parsing which sources are cited. That means results are samples, sensitive to prompt phrasing, geography and model version. Judge a vendor on which assistants it covers, how often it refreshes, whether it exposes raw responses, and whether you can bring your own prompts.",
        ],
      },
      {
        h: "Ten platforms worth a shortlist",
        p: ["Grouped by what they are actually good at."],
        bullets: [
          "Profound — enterprise-grade citation and share-of-voice analytics.",
          "Peec AI — lightweight competitive visibility tracking for lean teams.",
          "Otterly.ai — prompt monitoring with straightforward alerting.",
          "Adobe LLM Optimizer — fits organisations already inside the Adobe stack.",
          "Ziptie — crawl and indexation insight oriented toward AI retrieval.",
          "AthenaHQ — brand monitoring across assistants with sentiment scoring.",
          "LLMrefs — citation-graph style reporting for content teams.",
          "Semrush AI toolkit — useful when you need demand data in the same place.",
          "Server log analysis — the only ground truth on AI crawler behaviour.",
          "A maintained spreadsheet — still the honest baseline for a first quarter.",
        ],
      },
      {
        h: "Buy later than you think",
        p: [
          "Most teams should run a manual prompt audit for one quarter before buying. It teaches you which prompts matter, exposes your access and entity problems for free, and gives you a benchmark that a vendor's own methodology cannot quietly reset.",
        ],
      },
    ],
  },
  {
    slug: "llmo-content-strategy",
    cluster: "tactics",
    type: "Deep Dive",
    title: "LLMO Content Strategy: What AI Models Actually Cite",
    dek: "LLMO content strategy grounded in Aggarwal et al. 2024 GEO research: citations, statistics, and quotation tactics that lift AI source visibility by up to 40%.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Evidence density, not word count, predicts citation.",
      "One question per page beats one keyword cluster per page.",
      "Refreshing an existing cited page usually outperforms publishing a new one.",
    ],
    sections: [
      {
        h: "Write like a source",
        p: [
          "The content a model quotes reads like reference material: a claim, a number, an attribution, a boundary condition. Marketing prose fails not because it is promotional but because it is unfalsifiable — there is nothing in it a model can safely restate. The editorial standard for LLMO is simply that a stranger could verify every sentence.",
        ],
      },
      {
        h: "The page template that works",
        p: ["Apply it to any format — definition, comparison, how-to or data piece."],
        bullets: [
          "H1 that matches the question a buyer would type or say.",
          "Answer block of 40–60 words directly beneath it.",
          "Three key takeaways, each independently quotable.",
          "Body sections, each opening with its own conclusion.",
          "A table wherever the reader is comparing.",
          "A sources block with dates and links.",
          "An author byline with credentials and a profile link.",
        ],
      },
      {
        h: "Maintenance is the strategy",
        p: [
          "Assistants privilege current material and expose stale dates ruthlessly. Set a review cadence by content type — statistics quarterly, platform behaviour every 90 days, definitions twice a year — and record what changed. A page reviewed on schedule accumulates citation share; a page published and abandoned decays out of the answer set.",
        ],
      },
    ],
  },
  {
    slug: "how-to-get-cited-by-claude",
    cluster: "tactics",
    type: "How-To",
    title: "How to Get Cited by Claude & Anthropic: 2026 Guide",
    dek: "Get cited by Claude in 9 steps: entity clarity, schema, llms.txt for ClaudeBot, citation patterns Claude prefers. Verified Anthropic facts and methodology.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Claude is conservative: it prefers sources it can characterise and date.",
      "ClaudeBot and Claude-User are distinct agents; handle both explicitly.",
      "Hedged, well-qualified writing is an advantage here, not a weakness.",
    ],
    sections: [
      {
        h: "What Claude rewards",
        p: [
          "Claude's answering style is careful — it qualifies, attributes and declines more readily than its peers. Content that mirrors that posture is easier for it to use: claims with stated scope, numbers with methodology, and explicit acknowledgement of uncertainty. Overconfident copy is a liability, because the model must either dilute it or skip it.",
        ],
      },
      {
        h: "The nine steps",
        p: ["Ordered from access to authority."],
        bullets: [
          "Allow ClaudeBot in robots.txt and at the edge.",
          "Decide your policy for user-initiated fetches separately.",
          "Publish llms.txt with a plain-language site summary.",
          "State the entity plainly in the first paragraph of key pages.",
          "Use Organization, Person and DefinedTerm schema.",
          "Write claims with scope: who, when, measured how.",
          "Cite primary documents rather than aggregator coverage.",
          "Keep a visible changelog on evergreen pages.",
          "Test with the same prompts monthly and record phrasing shifts.",
        ],
      },
      {
        h: "Common blockers",
        p: [
          "Bot mitigation is the usual culprit: many enterprise WAF presets block Anthropic's agents by default while allowing Googlebot. The second is content locked behind interstitials or heavy client-side rendering, which produces an empty document for a fetcher that does not execute your full application.",
        ],
      },
    ],
  },
  {
    slug: "geo-strategy-google-ai-overviews",
    cluster: "tactics",
    type: "How-To",
    title: "GEO Strategy: How to Optimize for Google AI Overviews (2026)",
    dek: "GEO strategy grounded in Aggarwal et al. 2024 (40% lift): citations, statistics, quotation. Plus E-E-A-T, schema, llms.txt, and a quarterly LLMO cycle.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Overviews draw from ranked results — GEO here is SEO plus extractability.",
      "E-E-A-T signals do double duty: they help ranking and they help selection.",
      "Segment keywords by observed trigger rate before investing.",
    ],
    sections: [
      {
        h: "Start from your existing rankings",
        p: [
          "Because AI Overviews are grounded in Google's index, your realistic candidate set is pages already ranking in the top ten for triggering queries. Pull that list first. Optimising a page that ranks 40th for Overview inclusion is wasted effort; lifting a page from 8th to 3rd and making it extractable is not.",
        ],
      },
      {
        h: "The intervention list",
        p: ["Applied to each candidate page."],
        bullets: [
          "Restructure headings to mirror question phrasing.",
          "Insert a standalone answer paragraph under each heading.",
          "Add one sourced statistic per section.",
          "Add FAQPage or HowTo schema where genuinely applicable.",
          "Strengthen author credentials and reviewer attribution.",
          "Update dateModified only when the content truly changed.",
        ],
      },
      {
        h: "A quarterly cycle",
        p: [
          "Month one: audit trigger rates and fix structure. Month two: evidence pass — sources, statistics, quotations. Month three: measure impression-to-click patterns, re-run prompts and choose the next cohort. Treat it as a repeating operation rather than a project with an end date, because the trigger behaviour itself keeps moving.",
        ],
      },
    ],
  },
  {
    slug: "geo-audit-checklist",
    cluster: "tactics",
    type: "How-To",
    title: "GEO Audit Checklist: Is Your Site AI-Search Ready? (12 Categories)",
    dek: "Audit your site's AI-search readiness across 12 categories: schema, entity signals, llms.txt, robots.txt, citations, freshness, FAQ markup, brand monitoring.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Most failures are binary access problems, not subtle content problems.",
      "Score each category red, amber or green — partial credit hides blockers.",
      "Re-audit quarterly; crawler policies and platform behaviour change fast.",
    ],
    sections: [
      {
        h: "How to run it",
        p: [
          "Give each of the twelve categories a single owner and a red/amber/green score, with evidence attached. The audit is only useful if it produces a prioritised backlog: access and entity items first because they gate everything, then structure, then evidence, then measurement.",
        ],
      },
      {
        h: "The twelve categories",
        p: ["Each has a pass condition you can verify in an afternoon."],
        bullets: [
          "Crawler access: named AI agents receive 200s.",
          "Indexation: present in both Google and Bing.",
          "Entity schema: one canonical Organization node with sameAs.",
          "Author identity: Person schema and real credentials.",
          "Content structure: answer-first sections throughout key pages.",
          "Evidence: sourced statistics on every factual claim.",
          "FAQ markup: real questions, valid JSON-LD.",
          "llms.txt: present, accurate, linked.",
          "Freshness: honest dates and a review cadence.",
          "Site architecture: hub-and-spoke with dense internal linking.",
          "Off-site corroboration: consistent data across directories and profiles.",
          "Monitoring: a fixed prompt set with recorded baselines.",
        ],
      },
      {
        h: "Turning findings into a roadmap",
        p: [
          "Group reds into a two-week technical sprint, ambers into the content calendar, and greens into the quarterly review. Publish the scorecard internally — the visibility is what keeps schema work from being deprioritised behind the next campaign.",
        ],
      },
    ],
  },
  {
    slug: "bing-copilot-optimization",
    cluster: "tactics",
    type: "How-To",
    title: "Bing Copilot Optimization: Get Cited in Microsoft AI (2026)",
    dek: "Optimize for Bing Copilot in 8 steps: Bing Webmaster Tools, Schema.org, llms.txt, citation patterns, Edge + Microsoft 365 integration. Verified Microsoft tooling.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Copilot grounds in Bing — Bing indexation is the whole ballgame.",
      "Bing Webmaster Tools gives free diagnostics most teams never open.",
      "Enterprise distribution through Windows and Microsoft 365 makes this a B2B surface.",
    ],
    sections: [
      {
        h: "Why Copilot deserves attention",
        p: [
          "Copilot is embedded in Windows, Edge and Microsoft 365, which places it in front of exactly the corporate users who make B2B purchase decisions. Its answers are grounded in Bing's index, so the optimisation path is unusually concrete: fix Bing, and you have fixed the retrieval layer.",
        ],
      },
      {
        h: "The eight steps",
        p: ["Straightforward, and mostly free."],
        bullets: [
          "Verify the site in Bing Webmaster Tools and submit sitemaps.",
          "Resolve Bing-specific crawl and index errors — they differ from Google's.",
          "Allow Bingbot and Microsoft's AI agents at the WAF.",
          "Use IndexNow for fast change notification.",
          "Deploy Organization, Person, FAQPage and Product schema.",
          "Publish llms.txt with a plain summary of your offering.",
          "Write answer-first passages with sourced claims.",
          "Track Copilot answers for your priority prompts monthly.",
        ],
      },
      {
        h: "The enterprise angle",
        p: [
          "If your buyers work inside Microsoft 365, being absent from Copilot means being absent from the tool open on their second monitor during vendor research. Treat Bing performance as a board-level distribution question rather than a legacy search channel.",
        ],
      },
    ],
  },
  {
    slug: "llmo-for-b2b-enterprise",
    cluster: "tactics",
    type: "Deep Dive",
    title: "LLMO for B2B Enterprise: 4-Phase Playbook for 2026",
    dek: "B2B enterprise LLMO playbook: buying committee research patterns, enterprise schema stack, Tier-1 citation strategy, and a four-phase methodology.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Buying committees now use assistants for shortlisting before vendor contact.",
      "Enterprise LLMO is governance work as much as content work.",
      "Tier-1 corroboration — analysts, standards bodies, regulators — carries disproportionate weight.",
    ],
    sections: [
      {
        h: "How the committee actually researches",
        p: [
          "In a modern enterprise deal, several people research independently before anyone fills in a form. Each asks an assistant a different question: the practitioner asks about integration, finance asks about pricing models, security asks about compliance. If your brand only answers the practitioner's question well, you get shortlisted by one member and blocked by another.",
        ],
      },
      {
        h: "The four phases",
        p: ["Sequenced to survive procurement and legal review."],
        bullets: [
          "Phase 1 — Baseline: prompt audit across all committee personas, competitor citation map.",
          "Phase 2 — Foundation: crawler policy signed off, entity graph published, author identities established.",
          "Phase 3 — Coverage: one authoritative asset per persona question, including security, pricing and integration.",
          "Phase 4 — Corroboration: analyst briefings, standards participation, customer evidence with named outcomes.",
        ],
      },
      {
        h: "Governance details that decide it",
        p: [
          "Two enterprise-specific blockers recur. First, security teams block AI crawlers wholesale, so nothing else matters; get an explicit, documented policy instead of a default deny. Second, legal restricts specificity, leaving content that cannot be cited; negotiate an approved evidence library of numbers and quotations that writers can use without a fresh review each time.",
        ],
      },
    ],
  },
  {
    slug: "llmo-case-studies",
    cluster: "tactics",
    type: "Data & Research",
    title: "LLMO Case Studies: How to Read Reported Outcomes (2026)",
    dek: "How to evaluate LLMO case studies: what metrics are meaningful, which are unverifiable, and how to structure your own so AI assistants can cite them.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Treat any AI-visibility claim without a stated prompt set and date as marketing.",
      "Baseline, method and time window are the three fields that make a case study citable.",
      "Publishing your own methodology is itself an LLMO tactic.",
    ],
    sections: [
      {
        h: "Why most published numbers are not usable",
        p: [
          "Citation share depends on prompt wording, region, model version and the day it was sampled. A headline percentage with none of that context cannot be reproduced, which is exactly why cautious assistants decline to repeat it. Before you cite someone else's case study — or write your own — check whether the method is stated.",
        ],
      },
      {
        h: "The fields a citable case study needs",
        p: ["Include all of them, even when the result is modest."],
        bullets: [
          "The prompt set, verbatim, and how it was chosen.",
          "Assistants tested and the dates of each sample.",
          "Baseline citation share before intervention.",
          "The specific changes made, in order.",
          "Result with the same measurement method as the baseline.",
          "Confounders you could not control.",
        ],
      },
      {
        h: "Publishing your own",
        p: [
          "A methodologically honest case study is a strong citation magnet, because assistants asked 'does GEO work?' need sourceable evidence and find very little of it. Anonymise the client if you must, but never the method. Where you cannot disclose a number, publish the direction and the mechanism instead of inventing precision.",
        ],
      },
    ],
  },

  // 04 Data & trends
  {
    slug: "ai-search-engine-market-share",
    cluster: "data",
    type: "Data & Research",
    title: "AI Search Engine Market Share 2026: ChatGPT, Perplexity, Google & Microsoft",
    dek: "The 5 major AI search players in 2026: ChatGPT, Perplexity, Google AI Overviews, Microsoft Copilot, Anthropic Claude. Verified launch dates, user counts, and methodology.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "There is no audited market-share figure for AI search — every number is an estimate.",
      "Compare platforms on distribution and grounding stack, not on disputed user counts.",
      "Your own share of citation is the only reliable metric you control.",
    ],
    sections: [
      {
        h: "The methodology problem",
        p: [
          "AI assistants are not measured by a common panel. Vendors publish selective metrics — weekly actives here, queries there — on different definitions and cadences. Any 'market share' chart in this category is a modelled estimate. Say so when you use one, and prefer platform-reported milestones with dates attached.",
        ],
      },
      {
        h: "The five surfaces that matter",
        p: ["Ranked by how they reach your buyers, not by claimed size."],
        bullets: [
          "Google AI Overviews — largest reach because it rides existing search demand.",
          "ChatGPT — the default general assistant and the strongest brand-research surface.",
          "Microsoft Copilot — enterprise distribution through Windows and Microsoft 365.",
          "Perplexity — smaller, but citation-transparent and popular with researchers.",
          "Claude — heavily used in technical and professional workflows.",
        ],
      },
      {
        h: "What to do with the uncertainty",
        p: [
          "Stop trying to allocate budget by market share. Run your prompt set on all five, see where your category actually gets researched, and weight effort by observed citation gaps. That is a first-party measurement you can defend in a board meeting; a third-party pie chart is not.",
        ],
      },
    ],
  },
  {
    slug: "zero-click-search-ai-era",
    cluster: "data",
    type: "Deep Dive",
    title: "Zero-Click Search in the AI Era: What Marketers Need to Know",
    dek: "Zero-click search hit ~60% of US Google searches in 2024 (SparkToro). AI Overviews and ChatGPT Search compounded the shift — here's the strategic response.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "SparkToro's 2024 analysis put roughly 60% of US Google searches at zero clicks.",
      "Generated answers extend that pattern rather than creating it.",
      "The response is to optimise for influence and brand recall, not just sessions.",
    ],
    sections: [
      {
        h: "The trend predates AI",
        p: [
          "Zero-click behaviour grew through a decade of SERP features — knowledge panels, featured snippets, local packs. SparkToro's 2024 study found around 60% of US Google searches ended without a click to the open web. Generative answers accelerate a curve that was already steep, which matters because the strategic response was already known: be the answer, and make the answer carry your name.",
        ],
      },
      {
        h: "What still drives revenue",
        p: ["Zero-click does not mean zero value — it moves value to other measurable places."],
        bullets: [
          "Branded search volume, which rises when you are named in answers.",
          "Direct traffic from users who saw you cited and typed the domain.",
          "Assisted conversions where the first touch was an assistant.",
          "Sales conversations that open with your framing and vocabulary.",
        ],
      },
      {
        h: "Reporting it honestly",
        p: [
          "Build a dashboard that pairs organic sessions with branded search trend, direct sessions and citation share. When clicks flatten while brand demand climbs, you are winning the zero-click game. Without that pairing, a successful AI-search programme looks like a traffic decline.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-roi",
    cluster: "data",
    type: "Data & Research",
    title: "AI Search ROI: Is Optimizing for ChatGPT & Perplexity Worth It?",
    dek: "60% of search demand is now zero-click (SparkToro 2024). The ROI question: addressable demand, citation lift, and brand search compounding.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "The honest ROI case rests on influence and brand lift, not referral traffic.",
      "Most of the cost is one-off technical work with a long tail of editorial discipline.",
      "Model it as risk reduction against a shrinking click supply.",
    ],
    sections: [
      {
        h: "Framing the business case",
        p: [
          "Referral traffic from assistants is real but small. The defensible argument is different: a growing share of category research now happens inside an assistant, and whoever is cited there shapes the shortlist. The investment buys presence in the consideration set at the moment the shortlist forms — the same logic that justified SEO before attribution existed.",
        ],
      },
      {
        h: "What it costs",
        p: ["Typical first-year shape for a mid-sized B2B site."],
        bullets: [
          "Technical foundation — crawler policy, schema, llms.txt: a few engineering weeks, once.",
          "Content restructuring: an editorial standard applied to work already planned.",
          "Corroboration: PR and partnership effort you likely already fund.",
          "Measurement: a prompt set and a monthly hour, before any tooling spend.",
        ],
      },
      {
        h: "Proving it internally",
        p: [
          "Baseline citation share on 40 prompts before you start. Report the same 40 quarterly beside branded search and direct sessions. Two quarters of that data is more persuasive than any industry statistic, and it is the only version of the number your CFO can audit.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-market-statistics",
    cluster: "data",
    type: "Data & Research",
    title: "AI Search Market Statistics 2026: Size, Growth & Platform Timeline",
    dek: "AI search market 2026: LLM tooling forecast to $22B by 2030 (Grand View, 48.8% CAGR), LLMOps growth projections, platform launch timeline and behaviour shifts.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Market forecasts are modelled projections — cite the firm and the date every time.",
      "The verifiable record is the platform launch timeline, not the revenue numbers.",
      "Use statistics to size the shift, never to justify a specific tactic.",
    ],
    sections: [
      {
        h: "What is actually verifiable",
        p: [
          "Two categories of number circulate in this space. Platform events — launch dates, feature announcements, stated user milestones — are checkable against primary announcements. Market sizes and CAGRs are analyst projections from firms such as Grand View Research; they are legitimate to cite with attribution and date, and misleading when repeated as fact.",
        ],
      },
      {
        h: "The timeline that matters",
        p: ["The sequence explains why buyer behaviour changed when it did."],
        bullets: [
          "Nov 2022 — ChatGPT launches and reaches 100M users faster than any prior consumer app.",
          "2023 — Bing Chat and Google SGE bring generated answers into mainstream search.",
          "May 2024 — Google rebrands SGE as AI Overviews and rolls it out broadly.",
          "2024–2025 — Perplexity, Claude and Copilot standardise inline citation.",
          "2025–2026 — Agentic shopping and transaction protocols move from pilot to production.",
        ],
      },
      {
        h: "Using statistics responsibly",
        p: [
          "Attach the source, the publication date and the methodology qualifier to every figure you publish. Beyond accuracy, it is a citation tactic: assistants preferentially quote passages where the provenance is explicit, so disciplined sourcing is both honest and effective.",
        ],
      },
    ],
  },
  {
    slug: "ai-overview-trigger-rate",
    cluster: "data",
    type: "Data & Research",
    title: "AI Overview Trigger Rate: Which Queries Show AI Answers?",
    dek: "Google AI Overviews trigger on a subset of queries — typically informational and exploratory. Query patterns by likelihood, measurement methods, and strategic implications.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Trigger rate varies enormously by intent, vertical and phrasing.",
      "Measure your own keyword set rather than trusting a published average.",
      "High-trigger informational terms need different content than low-trigger transactional ones.",
    ],
    sections: [
      {
        h: "Why published averages mislead",
        p: [
          "Reported trigger rates swing widely because samples differ: a keyword set weighted to informational queries produces a high number, a commercial set produces a low one, and Google keeps adjusting the mix. The only figure that should drive your plan is the rate across the terms you actually care about.",
        ],
      },
      {
        h: "Patterns that hold",
        p: ["Consistent across most observed samples."],
        bullets: [
          "Question phrasing and 'how/why/what is' formats trigger most often.",
          "Comparative and 'best X for Y' queries frequently trigger.",
          "Navigational and branded queries rarely trigger.",
          "Transactional queries with strong commercial intent trigger less.",
          "Sensitive YMYL topics show more conservative behaviour.",
        ],
      },
      {
        h: "Turning it into strategy",
        p: [
          "Split your keyword set in two. On high-trigger terms, optimise for citation and accept fewer clicks — the win is presence and brand recall. On low-trigger terms, keep optimising for the click, since the classic result set still delivers the session. Reporting the two segments separately prevents a healthy programme from looking like a failure.",
        ],
      },
    ],
  },
  {
    slug: "voice-search-ai-convergence",
    cluster: "data",
    type: "Deep Dive",
    title: "Voice Search + AI: The 2024–2026 Convergence",
    dek: "Voice search and AI converged 2023–2025: ChatGPT Voice (Sept 2023), Apple Intelligence and Siri (June 2024), Amazon Alexa+ (Feb 2025). Speakable schema strategy.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Voice stopped being command-and-control and became conversational retrieval.",
      "Spoken answers usually name one source — the winner-takes-most surface.",
      "Conversational phrasing in headings maps directly onto how people speak.",
    ],
    sections: [
      {
        h: "What changed",
        p: [
          "Legacy voice search matched a spoken query to a snippet. The current generation reasons over retrieved context and speaks a synthesised answer. ChatGPT's voice mode arrived in September 2023, Apple announced Apple Intelligence with a rebuilt Siri in June 2024, and Amazon launched its LLM-based Alexa+ in February 2025. Together they normalised spoken, multi-turn research.",
        ],
      },
      {
        h: "Why the stakes are higher",
        p: [
          "A screen shows several citations; a speaker names one, maybe two. Voice therefore concentrates reward on whichever source the model trusts most, and follow-up questions make the conversation stateful — meaning your content has to survive being the answer to question three, not just question one.",
        ],
      },
      {
        h: "Practical optimisation",
        p: ["Small changes, disproportionate effect on spoken answers."],
        bullets: [
          "Write headings as full spoken questions.",
          "Keep the answer to one or two sentences that read naturally aloud.",
          "Add Speakable schema on genuinely readable sections.",
          "Anticipate the follow-up and answer it in the next section.",
          "Keep local business data consistent for 'near me' handling.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-users-adoption",
    cluster: "data",
    type: "Data & Research",
    title: "AI Search Users 2026: Adoption Data, Milestones & Behavior",
    dek: "How AI search adoption is measured: ChatGPT's reported 700M+ weekly actives, Google's ~8.5B daily searches, and the behavioural shifts that matter more than totals.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Assistant usage is large but still small next to Google's daily query volume.",
      "Behaviour change matters more than headcount: longer, more specific prompts.",
      "Only cite user figures with the source and the date attached.",
    ],
    sections: [
      {
        h: "The verifiable milestones",
        p: [
          "OpenAI has publicly reported weekly active usage in the hundreds of millions, and ChatGPT remains the fastest consumer product to reach 100 million users. Google has long described search volume on the order of billions of queries per day. Both should be quoted with attribution and date; anything more precise circulating without a source should be treated as invented.",
        ],
      },
      {
        h: "The behaviour shift",
        p: ["This is where the strategic implication lives."],
        bullets: [
          "Prompts are longer and carry constraints — budget, region, integration, timeline.",
          "Research is multi-turn, so brands are compared inside one session.",
          "Users accept a synthesised answer without visiting sources.",
          "Assistant output increasingly seeds the vocabulary buyers bring to sales calls.",
        ],
      },
      {
        h: "What to measure instead",
        p: [
          "Ignore global adoption totals and measure your own funnel: the share of your prompt set where you are cited, the share where a competitor is, and the trend in branded search. Those three numbers tell you whether adoption is helping or hurting you specifically.",
        ],
      },
    ],
  },
  {
    slug: "ai-search-vs-google-search",
    cluster: "data",
    type: "Comparison",
    title: "AI Search vs Google Search: 2026 Comparison (12 Dimensions)",
    dek: "Traditional Google versus AI search engines (ChatGPT, Perplexity, Claude): a 12-dimension comparison, where each wins, and when to optimize for which.",
    published: "May 2026",
    updated: "Aug 2026",
    takeaways: [
      "Google still wins on coverage, freshness and transactional intent.",
      "Assistants win on synthesis, constraints and multi-turn exploration.",
      "Most journeys now use both, which is why you cannot pick one.",
    ],
    sections: [
      {
        h: "Twelve dimensions",
        p: ["Where each surface genuinely outperforms the other."],
        bullets: [
          "Coverage: Google's index is broader.",
          "Freshness: Google is faster on breaking information.",
          "Synthesis: assistants combine sources into one answer.",
          "Constraint handling: assistants handle multi-condition questions better.",
          "Transparency: Google shows sources by default; assistants vary.",
          "Follow-up: assistants keep conversational state.",
          "Transactional intent: Google still routes to purchase more reliably.",
          "Local: Google's data advantage remains decisive.",
          "Trust: users verify Google results more readily.",
          "Result count: ten links versus two to five citations.",
          "Ads: mature on Google, emerging on assistants.",
          "Optimisation: rank position versus citation inclusion.",
        ],
      },
      {
        h: "How buyers actually move between them",
        p: [
          "A typical journey now starts with an assistant to frame the problem and build a shortlist, moves to Google to verify specific vendors and check reviews, and returns to the assistant to compare the finalists. Being strong in one and absent in the other breaks the chain at a predictable point.",
        ],
      },
      {
        h: "The unified brief",
        p: [
          "Write pages that rank and passages that get quoted. The technical base — crawlability, speed, structured data, internal linking — serves both, so the incremental cost of covering the assistant surface is editorial discipline rather than a second budget line.",
        ],
      },
    ],
  },
];
