export type Status = "Supported" | "In Progress" | "Not Supported" | "Not Confirmed";

export const headlineStats = [
  {
    label: "US retail opportunity by 2030",
    value: "$1T+",
    source: "McKinsey, Oct 2025",
    href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants",
  },
  {
    label: "US agentic commerce market by 2030",
    value: "$300B–$500B",
    source: "Bain, Dec 2025",
    href: "https://www.bain.com/insights/2030-forecast-how-agentic-ai-will-reshape-us-retail-snap-chart/",
  },
  {
    label: "US consumers using GenAI for product research",
    value: "30–45%",
    source: "Bain Consumer Lab, Nov 2025",
    href: "https://www.bain.com/about/media-center/press-releases/20252/agentic-ai-poised-to-disrupt-retail-even-with-50-of-consumers-cautious-of-fully-autonomous-purchasesbain--company/",
  },
  {
    label: "Active agentic commerce protocols",
    value: "8",
    source: "As of August 2026",
    href: "#protocol-stack",
  },
];

export const protocolLayers = [
  {
    layer: "Commerce Layer",
    blurb: "Handles merchant discovery, checkout, and payments",
    protocols: [
      {
        abbr: "ACP",
        state: "Active",
        name: "Agentic Commerce Protocol",
        launch: "September 29, 2025",
        developer: "Stripe & OpenAI",
        license: "Apache 2.0",
        fact: "1,498 GitHub Stars · Open standard by Stripe & OpenAI",
        docs: "https://www.agenticcommerce.dev/",
        source: "https://stripe.com/newsroom/news/stripe-openai-instant-checkout",
      },
      {
        abbr: "UCP",
        state: "Active",
        name: "Universal Commerce Protocol",
        launch: "January 11, 2026",
        developer: "Google, Shopify, Etsy, Wayfair, Target & Walmart",
        license: "Apache 2.0",
        fact: "3,256 GitHub Stars · Cart, Catalog & Identity Linking · Expanding to Lodging & Food verticals (May 2026) · Food Technical Council formed — Block (Square), DoorDash, Google, Toast & Uber Eats (Jul 2026)",
        docs: "https://developers.google.com/merchant/ucp",
        source:
          "https://blog.google/products/ads-commerce/agentic-commerce-ai-tools-protocol-retailers-platforms/",
      },
      {
        abbr: "AP2",
        state: "Active",
        name: "Agent Payments Protocol",
        launch: "September 16, 2025",
        developer: "Google → FIDO Alliance",
        license: "Apache 2.0",
        fact: "v0.2 with Human-Not-Present support · Donated to FIDO Alliance (Apr 2026)",
        docs: "https://ap2-protocol.org/",
        source:
          "https://blog.google/products-and-platforms/platforms/google-pay/agent-payments-protocol-fido-alliance/",
      },
      {
        abbr: "MPP",
        state: "Active",
        name: "Machine Payments Protocol",
        launch: "March 18, 2026",
        developer: "Stripe & Tempo",
        license: "CC0 1.0 (spec) · Apache 2.0/MIT (tooling)",
        fact: "Machine-to-machine agent payments · Visa Card-Based MPP spec & SDK extends MPP to card rails (Mar 2026) · Complements x402",
        docs: "https://github.com/tempoxyz/mpp-specs",
        source:
          "https://corporate.visa.com/en/sites/visa-perspectives/innovation/visa-card-specification-sdk-for-machine-payments-protocol.html",
      },
      {
        abbr: "x402",
        state: "Active",
        name: "x402 Protocol",
        launch: "May 2025",
        developer: "Coinbase → Linux Foundation (x402 Foundation)",
        license: "Apache 2.0",
        fact: "HTTP-native payments · V2 spec live — wallet-based identity, automatic discovery & multi-chain/fiat via CAIP (May 2026) · 40 members incl. Coinbase, Cloudflare, Stripe, Visa, Mastercard, AWS, Google",
        docs: "https://github.com/x402-foundation/x402",
        source:
          "https://www.linuxfoundation.org/press/linux-foundation-announces-operational-launch-of-x402-foundation-to-standardize-internet-native-payments-for-ai-agents-and-applications",
      },
    ],
  },
  {
    layer: "Agent Infrastructure",
    blurb: "Enables agents to access tools and coordinate with each other",
    protocols: [
      {
        abbr: "MCP",
        state: "Active",
        name: "Model Context Protocol",
        launch: "November 25, 2024",
        developer: "Anthropic → Linux Foundation (AAIF)",
        license: "MIT / Apache 2.0",
        fact: "Donated to the Linux Foundation's Agentic AI Foundation (Dec 2025) · 2026-07-28 spec released — stateless core, Extensions, Tasks & MCP Apps · 89,102 Stars (Servers Repo)",
        docs: "https://modelcontextprotocol.io/",
        source:
          "https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation",
      },
      {
        abbr: "WebMCP",
        state: "Preview",
        name: "WebMCP",
        launch: "February 10, 2026",
        developer: "Google / Chrome",
        license: "Open",
        fact: "Two APIs — declarative (HTML) & imperative (JavaScript) · Open Origin Trial from Chrome 149 (Jun 2026)",
        docs: "https://developer.chrome.com/blog/webmcp-epp",
        source: "https://developer.chrome.com/blog/ai-webmcp-origin-trial",
      },
      {
        abbr: "A2A",
        state: "Active",
        name: "Agent2Agent Protocol",
        launch: "April 9, 2025",
        developer: "Google → Linux Foundation",
        license: "Apache 2.0",
        fact: "v1.0 — first stable, production-ready release (Apr 2026) · 165+ supporting organizations · 25,126 GitHub Stars",
        docs: "https://a2a-protocol.org/",
        source: "https://a2a-protocol.org/latest/announcing-1.0/",
      },
    ],
  },
];

export const platformMatrix = {
  columns: ["MCP", "A2A", "AP2", "ACP", "UCP"],
  rows: [
    {
      platform: "ChatGPT / OpenAI",
      cells: [
        { s: "Supported" },
        { s: "Not Supported" },
        { s: "Supported", note: "co-chairs FIDO Agentic Auth WG" },
        { s: "Supported" },
        { s: "Not Supported" },
      ],
    },
    {
      platform: "Google Gemini",
      cells: [
        { s: "Supported" },
        { s: "Supported" },
        { s: "Supported", note: "governance moved to FIDO Apr 2026" },
        { s: "Not Supported" },
        { s: "Supported" },
      ],
    },
    {
      platform: "Microsoft Copilot",
      cells: [
        { s: "Supported" },
        { s: "Supported" },
        { s: "Not Supported" },
        { s: "Supported" },
        { s: "Supported", note: "joined UCP Tech Council Apr 2026" },
      ],
    },
    {
      platform: "Perplexity",
      cells: [
        { s: "Supported" },
        { s: "Not Confirmed" },
        { s: "Not Confirmed" },
        { s: "Not Confirmed" },
        { s: "Not Confirmed" },
      ],
    },
    {
      platform: "Claude / Anthropic",
      cells: [
        { s: "Supported" },
        { s: "Supported", note: "via Vertex AI" },
        { s: "Not Supported" },
        { s: "Not Supported" },
        { s: "Not Supported" },
      ],
    },
    {
      platform: "xAI / Grok",
      cells: [
        { s: "Supported" },
        { s: "Not Confirmed" },
        { s: "Not Confirmed" },
        { s: "Not Confirmed" },
        { s: "Not Confirmed" },
      ],
    },
  ],
} as const;

export const commerceMatrix = {
  columns: ["ACP", "UCP", "AP2", "MPP", "MCP", "x402"],
  rows: [
    {
      platform: "Shopify",
      cells: ["Supported", "Supported", "Supported", "In Progress", "Supported", "Supported"],
    },
    {
      platform: "WooCommerce",
      cells: [
        "In Progress",
        "Not Confirmed",
        "Not Confirmed",
        "Not Confirmed",
        "Supported",
        "Not Confirmed",
      ],
    },
    {
      platform: "Salesforce Commerce Cloud",
      cells: [
        "Supported",
        "Supported",
        "Supported",
        "Not Confirmed",
        "Supported",
        "Not Confirmed",
      ],
    },
    {
      platform: "BigCommerce",
      cells: [
        "Supported",
        "Supported",
        "Not Confirmed",
        "Not Confirmed",
        "Supported",
        "Not Confirmed",
      ],
    },
    {
      platform: "Adobe Commerce",
      cells: [
        "Supported",
        "Supported",
        "Supported",
        "Not Confirmed",
        "Supported",
        "Not Confirmed",
      ],
    },
    {
      platform: "Wix",
      cells: [
        "Supported",
        "Not Confirmed",
        "Not Confirmed",
        "Not Confirmed",
        "Supported",
        "Not Confirmed",
      ],
    },
    {
      platform: "commercetools",
      cells: [
        "Supported",
        "Not Confirmed",
        "Not Confirmed",
        "Not Confirmed",
        "Supported",
        "Not Confirmed",
      ],
    },
  ],
} as const;

export const industryVoices = [
  {
    quote:
      "AI agents will be a big part of how we shop in the not-so-distant future. To help lay the groundwork, we partnered with Shopify, Etsy, Wayfair, Target and Walmart, and endorsed by 20+ more.",
    name: "Sundar Pichai",
    role: "CEO, Google & Alphabet",
    date: "January 11, 2026",
    label: "Google Blog",
    href: "https://blog.google/company-news/inside-google/message-ceo/nrf-2026-remarks/",
  },
  {
    quote:
      "I'm really really excited about Agentic Commerce. There is so much amazing stuff being built. Everything I test just feels delightful and magical.",
    name: "Tobi Lütke",
    role: "CEO, Shopify",
    date: "December 23, 2025",
    label: "X (Twitter)",
    href: "https://x.com/tobi/status/2003586628145807568",
  },
  {
    quote:
      "In 2026, AI agents won't just assist your shopping — they will complete your purchases, powered by Visa's global scale, standards leadership, and unparalleled commitment to secure agentic commerce.",
    name: "Rubail Birwadker",
    role: "SVP Head of Growth Products & Partnerships, Visa",
    date: "December 18, 2025",
    label: "Visa Newsroom",
    href: "https://usa.visa.com/about-visa/newsroom/press-releases.releaseId.21961.html",
  },
  {
    quote:
      "By 2030, the US B2C retail market alone could see up to $1 trillion in orchestrated revenue from agentic commerce, with global projections reaching as high as $3 trillion to $5 trillion.",
    name: "McKinsey & Company",
    role: "QuantumBlack AI Research",
    date: "October 17, 2025",
    label: "McKinsey.com",
    href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-agentic-commerce-opportunity-how-ai-agents-are-ushering-in-a-new-era-for-consumers-and-merchants",
  },
];

export const recentNews = [
  {
    date: "Aug 7, 2026",
    tag: "Research",
    title:
      "Salesforce Agentic Enterprise Index Reports 4x Higher Retail Online Sales Growth for Agent Deployers",
    body: "Salesforce published its 2026 Agentic Enterprise Index, analysing Agentforce usage from February 2025 through April 2026. Organizations increased activated agents nearly 3x while cutting average agent creation time 53%, and deploying agents corresponded to 4x higher retail online sales growth.",
    label: "Salesforce News",
    href: "https://www.salesforce.com/news/stories/agentic-enterprise-index-insights-2026/",
  },
  {
    date: "Aug 6, 2026",
    tag: "Commerce",
    title: "Google Adds Agentic Food Ordering to Ask Maps in Google Maps",
    body: "Ask Maps, the Gemini-powered assistant inside Google Maps, can now complete multi-step transactional tasks by voice or text — including ordering takeout along a route — plus hotel and event discovery with real-time price comparison. Rolling out in the US first.",
    label: "Google Blog",
    href: "https://blog.google/products-and-platforms/products/maps/order-food-in-ask-maps/",
  },
  {
    date: "Aug 6, 2026",
    tag: "Protocol",
    title: "Google Joins Agent Plugins 1.0.0 as a Core Maintainer",
    body: "Agent Plugins 1.0.0 is a vendor-neutral specification for packaging Agent Skills and MCP servers into a single portable directory. Google has rolled out support in the Agents CLI and Data Agent Kit; the v1 spec is a package format only.",
    label: "Google Developers Blog",
    href: "https://developers.googleblog.com/en/agent-plugins-package-your-skills-tools-and-more/",
  },
  {
    date: "Jul 29, 2026",
    tag: "Commerce",
    title:
      "Salesforce Ships July 2026 B2C Commerce Release With AI-Native Agentic Commerce Search",
    body: "Agentic Commerce Search is an AI-native search engine trained on catalog data, real shopper behaviour, and simulated queries to decode intent rather than match keywords, natively integrated into the Agentforce Shopper Agent.",
    label: "Salesforce Blog",
    href: "https://www.salesforce.com/blog/",
  },
];
