import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";

export const Route = createFileRoute("/insights/txt/$slug")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const { AUTHOR, findArticle } = await import("@/data/insights");
        const slug = params.slug;
        const article = findArticle(slug);
        if (!article) return new Response("Not found\n", { status: 404 });

        return txt(`${article.title}
URL: /insights/${article.slug}
Plain text: /insights/txt/${article.slug}
Type: ${article.type} | Published: ${article.published} | Updated: ${article.updated}
Author: ${AUTHOR.name} — ${AUTHOR.role} (${AUTHOR.linkedin})
Reviewed by: ${article.reviewedBy ?? AUTHOR.name}

${article.dek}

${article.definition ? `Definition: ${article.definition}\n` : ""}${
          article.aka?.length ? `Also known as: ${article.aka.join(", ")}\n` : ""
        }${
          article.quickFacts?.length
            ? `Quick facts:\n${article.quickFacts.map((f) => `- ${f.label}: ${f.value}`).join("\n")}\n`
            : ""
        }${
          article.tldr?.length ? `\nTL;DR:\n${article.tldr.map((t) => `- ${t}`).join("\n")}\n` : ""
        }

## Key takeaways
${article.takeaways.map((t) => `- ${t}`).join("\n")}

${
  article.keyPoints?.length
    ? `## Key points
${article.keyPoints.map((k, i) => `${i + 1}. ${k}`).join("\n")}

`
    : ""
}${article.sections
          .map((s) =>
            [
              `## ${s.h}`,
              ...(s.inshort ? [`In short: ${s.inshort}`] : []),
              ...s.p,
              ...(s.code ? [`\`\`\`\n${s.code}\n\`\`\``] : []),
              ...(s.bullets ? s.bullets.map((b) => `- ${b}`) : []),
            ].join("\n\n"),
          )
          .join("\n\n")}${
          article.faq?.length
            ? `\n\n## FAQ\n${article.faq.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}`
            : ""
        }${
          article.sources?.length
            ? `\n\n## Sources\n${article.sources
                .map((s, i) => `${i + 1}. ${s.label}${s.url ? ` — ${s.url}` : ""}`)
                .join("\n")}`
            : ""
        }
`);
      },
    },
  },
});
