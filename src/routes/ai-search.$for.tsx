import { createFileRoute, notFound } from "@tanstack/react-router";

import { RoleLanding } from "@/components/RoleLanding";
import { AUTHOR } from "@/data/insights/author";
import { roles } from "@/data/roles";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

export const Route = createFileRoute("/ai-search/$for")({
  loader: ({ params }) => {
    const role = roles.find((r) => r.slug === params.for);
    if (!role) throw notFound();
    return { role };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service not found — BeameAI by LOGON" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { role } = loaderData;
    const title = `${role.title} — BeameAI by LOGON`;
    const desc = `${role.sub} Led by ${AUTHOR.name}, ${AUTHOR.role}, anchored in Lagos, Nigeria.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "author", content: AUTHOR.name },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `${SITE_URL}/ai-search/${role.slug}` },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/ai-search/${role.slug}` }],
    };
  },
  notFoundComponent: () => (
    <section className="section-beame">
      <div className="container-beame mx-auto max-w-[640px] text-center">
        <h1 className="text-3xl font-bold">Service page not found</h1>
        <p className="mt-3 text-muted-foreground">
          This role track does not exist. Explore the AI Search Optimization services or the full
          Insights Hub instead.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/ai-search/for-cmos" className="btn-beame">
            Services
          </a>
          <a href="/insights" className="btn-beame-ghost">
            Insights Hub
          </a>
        </div>
      </div>
    </section>
  ),
  component: RolePage,
});

function RolePage() {
  const { role } = Route.useLoaderData();
  return <RoleLanding data={role} />;
}
