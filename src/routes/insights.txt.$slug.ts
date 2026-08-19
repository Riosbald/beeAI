import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { txt } from "@/lib/txt-response";
import { AUTHOR, findArticle } from "@/data/insights";

export const Route = createFileRoute("/insights/txt/$slug")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const slug = params.slug;
        const article = findArticle(slug);
        if (!article) return new Response("Not found\n", { status: 404 });

        return txt(`${article.title}
URL: /insights/${article.slug}
Plain text: /insights/txt/${article.slug}
Type: ${article.type} | Published: ${article.published} | Updated: ${article.updated}
Author: ${AUTHOR.name} — ${AUTHOR.role} (${AUTHOR.linkedin})

${article.dek}

## Key takeaways
${article.takeaways.map((t) => `- ${t}`).join("\n")}

${article.sections
  .map((s) =>
    [
      `## ${s.h}`,
      ...s.p,
      ...(s.bullets ? s.bullets.map((b) => `- ${b}`) : []),
    ].join("\n\n"),
  )
  .join("\n\n")}
`);
      },
    },
  },
});
