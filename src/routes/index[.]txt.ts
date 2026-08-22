import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";

export const Route = createFileRoute("/index.txt")({
  server: {
    handlers: {
      GET: async () => {
        const { homeFaqs, pillars, problemPoints, refineryFaqs, services, testimonials, tiers } =
          await import("@/data/site");
        const { AUTHOR } = await import("@/data/insights/author");
        return txt(`BeameAI by LOGON — AI Insights & Consultancy (Lagos, Nigeria)
URL: /

AI agents don't browse websites, they query verified knowledge. BeameAI by LOGON
structures business data so ChatGPT, Perplexity, Claude, Copilot and Google AI
Overviews can find it, trust it and cite it — and the BeameAI platform extends
that same foundation to agent transactions. Anchored in Lagos for African and
global markets. Authored by ${AUTHOR.name} (${AUTHOR.role}) — ${AUTHOR.linkedin}

## Why AI agents ignore most businesses
${problemPoints.map((p) => `- ${p.title}: ${p.body}`).join("\n")}

## The Data Refinery — four pillars
${pillars.map((p) => `- ${p.title}: ${p.body} (${p.points.join("; ")})`).join("\n")}

## Engagement tiers
${tiers.map((t) => `- ${t.name} (${t.price}): ${t.body}`).join("\n")}

## Services
${services.map((s) => `- ${s.title} (${s.tag}): ${s.body}`).join("\n")}

## AI Crawlability
URL: /ai-crawlability — the access layer every citation depends on: every AI
crawler, robots.txt, WAF rules, Bing indexation, entity schema, llms.txt and
continuous monitoring across six layers.

## Insights Hub
URL: /insights — 42 research-backed articles on AI search & LLMO, authored by
${AUTHOR.name} and reviewed on a 90-day cadence.

## Testimonials
${testimonials.map((t) => `- "${t.quote}" — ${t.name} (${t.role})`).join("\n")}

## FAQ
${[...refineryFaqs, ...homeFaqs].map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}
`);
      },
    },
  },
});
