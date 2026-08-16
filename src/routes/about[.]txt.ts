import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";
import { agenticPhases, testimonials } from "@/data/site";

export const Route = createFileRoute("/about.txt")({
  server: {
    handlers: {
      GET: async () =>
        txt(`About BeameAI
URL: /about

BeameAI is the Agentic Commerce Optimization platform by LOG_ON (BeameAI is a
sub-brand of LOG_ON). We make businesses
discoverable, recommendable and transactable by AI shopping agents, combining
strategy with hands-on engineering.

## How we work
- Evidence over opinion: recommendations grounded in what assistants return for your prompt set today.
- Build, don't advise: schema, feeds, MCP servers and protocol integrations get implemented and monitored.
- Revenue is the metric: citations matter because they lead to agent-mediated conversions.

## The A.G.E.N.T.I.C. framework
${agenticPhases.map((p) => `- ${p.phase} ${p.letter} — ${p.name}: ${p.body}`).join("\n")}

## Testimonials
${testimonials.map((t) => `- "${t.quote}" — ${t.name}`).join("\n")}
`),
    },
  },
});
