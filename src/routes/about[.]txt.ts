import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";

export const Route = createFileRoute("/about.txt")({
  server: {
    handlers: {
      GET: async () => {
        const { agenticPhases, testimonials } = await import("@/data/site");
        const { AUTHOR } = await import("@/data/insights/author");
        return txt(`About BeameAI by LOGON — AI Insights & Consultancy (Lagos, Nigeria)
URL: /about

BeameAI by LOGON is an AI Insights & Consultancy anchored in Lagos, Nigeria. We
make businesses retrievable, extractable and quotable by the AI assistants
customers trust — and transactable through BeameAI, the agentic-commerce
platform. Delivered for Nigeria, Kenya, South Africa and global markets with
NDPA, global AI governance standards and ISO 42001 alignment.

Leadership: ${AUTHOR.name} (${AUTHOR.role}) — ${AUTHOR.linkedin}

## How we work
- Evidence over opinion: recommendations grounded in what assistants return for your prompt set today.
- Build, don't advise: crawler rules, schema, llms.txt, feeds and MCP integrations get implemented and monitored.
- Revenue is the metric: citations matter because they lead to AI-mediated demand.

## The A.G.E.N.T.I.C. framework
${agenticPhases.map((p) => `- ${p.phase} ${p.letter} — ${p.name}: ${p.body}`).join("\n")}

## Insights Hub
URL: /insights — 42 research-backed articles authored by ${AUTHOR.name}, reviewed
every 90 days.

## Testimonials
${testimonials.map((t) => `- "${t.quote}" — ${t.name} (${t.role})`).join("\n")}
`);
      },
    },
  },
});
