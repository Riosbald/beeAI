import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () => {
        const { agenticPhases, services } = await import("@/data/site");
        return txt(`# BeameAI by LOGON — AI Insights & Consultancy

> Anchored in Lagos, Nigeria, for African and global markets. BeameAI by LOGON helps enterprises get cited by ChatGPT, Perplexity, Claude, Copilot and Google AI Overviews — AI search (LLMO/GEO), AI crawlability, entity graphs, structured data and governance (NDPA, global AI governance standards, ISO 42001). BeameAI is the agentic-commerce platform by LOGON, making brands discoverable, recommendable and transactable by AI agents.

## Pages
- [Home](/): Overview, free AI Visibility Health Check, A.G.E.N.T.I.C. Commerce OS — plain text: /index.txt
- [Services](/services): AI search optimization — AEO, GEO, entity graphs, schema, crawlability and citation tracking — plain text: /services.txt
- [AI Crawlability](/ai-crawlability): the access layer — every AI crawler, robots.txt, WAF, Bing indexation, llms.txt and monitoring
- [About](/about): Who we are and how we work — plain text: /about.txt
- [Insights](/insights): AI search, GEO and LLMO guides, playbooks and research — plain text: /insights.txt
- [Protocol Tracker](/protocols): ACP, UCP, AP2, MPP, x402 readiness — plain text: /protocols.txt

## Machine files
- robots.txt: /robots.txt — explicit crawler policy (OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot allowed; GPTBot, CCBot, Bytespider blocked)
- sitemap.xml: /sitemap.xml — every article and service page registered
- Article plain text: /insights/txt/<slug> — definition-first, TL;DR, FAQ and sources per article

## Services
${services.map((s) => `- ${s.title} (${s.tag}): ${s.body}`).join("\n")}

## A.G.E.N.T.I.C. framework
${agenticPhases.map((p) => `- ${p.phase} ${p.letter} — ${p.name}: ${p.body}`).join("\n")}
`);
      },
    },
  },
});
