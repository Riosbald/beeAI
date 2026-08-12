import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";
import { agenticPhases, services } from "@/data/site";

export const Route = createFileRoute("/llms.txt")({
  server: {
    handlers: {
      GET: async () =>
        txt(`# Beame.ng

> Agentic Commerce Optimization. Beame.ng makes brands discoverable, recommendable and transactable by AI shopping agents across ChatGPT, Gemini, Perplexity, Claude and Copilot.

## Pages
- [Home](/): Overview, free AI Visibility Health Check, A.G.E.N.T.I.C. Commerce OS — plain text: /index.txt
- [Services](/services): AEO, GEO, knowledge graph and agentic commerce engineering — plain text: /services.txt
- [About](/about): Who we are and how we work — plain text: /about.txt
- [Protocol Tracker](/protocols): ACP, UCP, AP2, MPP, x402 readiness — plain text: /protocols.txt

## Services
${services.map((s) => `- ${s.title} (${s.tag}): ${s.body}`).join("\n")}

## A.G.E.N.T.I.C. framework
${agenticPhases.map((p) => `- ${p.phase} ${p.letter} — ${p.name}: ${p.body}`).join("\n")}
`),
    },
  },
});
