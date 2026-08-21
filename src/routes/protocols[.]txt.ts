import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";

export const Route = createFileRoute("/protocols.txt")({
  server: {
    handlers: {
      GET: async () => {
        const { headlineStats, protocolLayers, recentNews } = await import("@/data/protocols");
        return txt(`BeameAI by LOGON — Agentic Commerce Protocol Tracker
URL: /protocols

Live tracker of agentic commerce and agent infrastructure protocols — ACP, UCP,
AP2, MPP, x402, MCP, WebMCP and A2A — plus AI and commerce platform support.

## Headline stats
${headlineStats.map((s) => `- ${s.value} — ${s.label} (${s.source})`).join("\n")}

## Protocol layers
${protocolLayers
  .map((l) => {
    const protos = l.protocols
      .map((p) => `  - ${p.abbr} — ${p.name} (${p.state}, ${p.developer}, ${p.license})`)
      .join("\n");
    return `- ${l.layer}: ${l.blurb}\n${protos}`;
  })
  .join("\n")}

## Recent news
${recentNews.map((n) => `- ${n.date} — ${n.title}: ${n.body}`).join("\n")}
`);
      },
    },
  },
});
