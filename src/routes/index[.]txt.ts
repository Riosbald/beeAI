import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";
import { buildItems, homeFaqs, services, testimonials } from "@/data/site";

export const Route = createFileRoute("/index.txt")({
  server: {
    handlers: {
      GET: async () =>
        txt(`BeameAI — Agentic Commerce Optimization & AI Search Visibility
URL: /

Get your brand recommended by AI agents. BeameAI makes businesses discoverable,
recommendable and transactable across ChatGPT, Gemini, Perplexity, Claude and
Copilot — then wires them into the agentic checkout layer.

## What we build
${buildItems.map((b) => `- ${b.title}: ${b.body}`).join("\n")}

## Services
${services.map((s) => `- ${s.title} (${s.tag}): ${s.body}`).join("\n")}

## Testimonials
${testimonials.map((t) => `- "${t.quote}" — ${t.name}`).join("\n")}

## FAQ
${homeFaqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}
`),
    },
  },
});
