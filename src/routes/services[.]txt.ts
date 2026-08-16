import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";
import { agenticPhases, serviceFaqs, services } from "@/data/site";

export const Route = createFileRoute("/services.txt")({
  server: {
    handlers: {
      GET: async () =>
        txt(`BeameAI by LOG_ON Services — AEO, GEO & Agentic Commerce
URL: /services

Engineering for the agentic era: structured data, integrations and measurement
that make AI assistants cite and transact with your brand.

## Practices
${services.map((s) => `- ${s.title} (${s.kicker} — ${s.tag}): ${s.body}`).join("\n")}

## Sequencing
${agenticPhases.map((p) => `- ${p.phase} ${p.letter} — ${p.name}: ${p.body}`).join("\n")}

## FAQ
${serviceFaqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}
`),
    },
  },
});
