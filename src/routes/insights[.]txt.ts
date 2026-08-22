import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";

export const Route = createFileRoute("/insights.txt")({
  server: {
    handlers: {
      GET: async () => {
        const { AUTHOR, articlesByCluster, clusters } = await import("@/data/insights");
        return txt(`BeameAI by LOGON — AI Search & LLMO Insights Hub
URL: /insights

Research-backed guides on AI strategy, implementation, AI search (LLMO/GEO),
agents, statistics and governance. Written by ${AUTHOR.name} (${AUTHOR.role}),
anchored in Lagos, Nigeria, for African and global markets.
LinkedIn: ${AUTHOR.linkedin}

${clusters
  .map((c) =>
    [
      `## ${c.number} — ${c.name}`,
      c.description,
      "",
      ...articlesByCluster(c.id).map(
        (a) =>
          `- ${a.title} (${a.type}, updated ${a.updated})\n  /insights/${a.slug} (plain text: /insights/txt/${a.slug})\n  ${a.dek}`,
      ),
    ].join("\n"),
  )
  .join("\n\n")}
`);
      },
    },
  },
});
