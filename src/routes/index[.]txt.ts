import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";
import { homeFaqs, pillars, problemPoints, refineryFaqs, services, testimonials, tiers } from "@/data/site";

export const Route = createFileRoute("/index.txt")({
  server: {
    handlers: {
      GET: async () =>
        txt(`BeameAI by LOG_ON — The Data Refinery for the Agentic Web
URL: /

The internet just got a new currency — clean data. AI agents don't browse
websites, they query verified knowledge. BeameAI structures business data so
agents can find it, trust it and recommend it across ChatGPT, Gemini,
Perplexity, Claude and Copilot.

## Why AI agents ignore most businesses
${problemPoints.map((p) => `- ${p.title}: ${p.body}`).join("\n")}

## The Data Refinery — four pillars
${pillars.map((p) => `- ${p.title}: ${p.body} (${p.points.join("; ")})`).join("\n")}

## Engagement tiers
${tiers.map((t) => `- ${t.name} (${t.price}): ${t.body}`).join("\n")}

## Services
${services.map((s) => `- ${s.title} (${s.tag}): ${s.body}`).join("\n")}

## Testimonials
${testimonials.map((t) => `- "${t.quote}" — ${t.name}`).join("\n")}

## FAQ
${[...refineryFaqs, ...homeFaqs].map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}
`),
    },
  },
});
