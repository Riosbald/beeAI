import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";
import { AUTHOR, articlesByCluster, clusters } from "@/data/insights";

export const Route = createFileRoute("/insights.txt")({
  server: {
    handlers: {
      GET: async () =>
        txt(`BeameAI by LOG_ON — AI Search & LLMO Insights
URL: /insights

Research, playbooks and definitions for getting cited by ChatGPT, Perplexity,
Claude and Google AI Overviews. Written by ${AUTHOR.name} (${AUTHOR.role}).
LinkedIn: ${AUTHOR.linkedin}

${clusters
  .map((c) =>
    [
      `## ${c.number} — ${c.name}`,
      c.description,
      "",
      ...articlesByCluster(c.id).map(
        (a) => `- ${a.title} (${a.type}, updated ${a.updated})\n  /insights/${a.slug}\n  ${a.dek}`,
      ),
    ].join("\n"),
  )
  .join("\n\n")}
`),
    },
  },
});
