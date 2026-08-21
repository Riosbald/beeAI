import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";

export const Route = createFileRoute("/services.txt")({
  server: {
    handlers: {
      GET: async () => {
        const { aiSearchServices } = await import("@/data/ai-search-content");
        const { crawlers, layers } = await import("@/data/ai-crawlability");
        const { AUTHOR } = await import("@/data/insights/author");
        return txt(`BeameAI by LOGON — AI Search Optimization Services
URL: /services

Full-stack AI search visibility from entity building to citation tracking:
crawler access, entity graphs, schema, content and measurement, so your brand
gets cited by ChatGPT, Perplexity, Claude, Copilot and Google AI Overviews.
Anchored in Lagos, Nigeria, delivered across Africa and global markets.
Authored by ${AUTHOR.name} (${AUTHOR.role}) — ${AUTHOR.linkedin}

## Practices
${aiSearchServices.map((s) => `- ${s.title}: ${s.body}`).join("\n")}

## AI Crawlability Consulting (URL: /ai-crawlability)
Crawlability is the gate every AI visibility strategy passes through first.
The engagement covers all six layers:

${layers.map((l) => `- ${l.num} ${l.name}: ${l.body}`).join("\n")}

Crawler policy map:

${crawlers.map((c) => `- ${c.agent} (${c.operator}) — ${c.purpose} — default ${c.default}`).join("\n")}

## Role tracks
- /ai-search/for-cmos — Win visibility in ChatGPT, Perplexity and Google AI Overviews.
- /ai-search/for-seo-leads — Add LLMO to your existing SEO stack without scrapping it.
- /ai-search/for-content-heads — Build content that ranks in both Google and ChatGPT.
- /ai-search/for-founders — Become the LLM-cited authority in your category.

## Platform
BeameAI — BeameAI by LOGON's agentic-commerce platform — makes brands discoverable,
recommendable and transactable by AI agents.
`);
      },
    },
  },
});
