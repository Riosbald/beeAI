import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";
import { headlineStats, protocolLayers, recentNews } from "@/data/protocols";

export const Route = createFileRoute("/protocols.txt")({
  server: {
    handlers: {
      GET: async () =>
        txt(`Beame.ng — Agentic Commerce Protocol Tracker
URL: /protocols

Live tracker of agentic commerce and agent infrastructure protocols — ACP, UCP,
AP2, MPP, x402, MCP, WebMCP and A2A — plus AI and commerce platform support.

## Headline stats
${headlineStats.map((s) => `- ${s.value} — ${s.label} (${s.source})`).join("\n")}

## Protocol layers
${protocolLayers
  .map(
    (l) =>
      `### ${l.layer}: ${l.blurb}\n` +
      l.protocols
        .map(
          (p) =>
            `- ${p.abbr} — ${p.name} [${p.state}] · launched ${p.launch} · by ${p.developer} · ${p.license} · ${p.docs}`,
        )
        .join("\n"),
  )
  .join("\n\n")}

## Recent news
${recentNews.map((n) => `- ${n.date} · ${n.tag}: ${n.title} — ${n.href}`).join("\n")}
`),
    },
  },
});
