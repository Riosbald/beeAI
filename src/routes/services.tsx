import { createFileRoute } from "@tanstack/react-router";

import { CtaBand, Eyebrow, FaqList, FrameworkGrid, useReveal } from "@/components/site-ui";
import { services } from "@/data/site";
import { serviceFaqs } from "@/data/site";
import { serviceImages } from "@/data/service-images";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AEO, GEO & Agentic Commerce | BeameAI" },
      {
        name: "description",
        content:
          "Knowledge graph architecture, AI search optimization, agentic commerce integration and AI search analytics from BeameAI.",
      },
      { property: "og:title", content: "Services — AEO, GEO & Agentic Commerce | BeameAI" },
      {
        property: "og:description",
        content:
          "Four practices that make your brand discoverable, recommendable and transactable by AI agents.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/services` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const deliverables = [
  "Entity and schema map for your brand, products, people and locations",
  "Rewritten, citation-ready content with evidence and comparison tables",
  "MCP server and feed integration for agent-readable inventory",
  "Protocol readiness for ACP, UCP, AP2, MPP and x402",
  "Citation, sentiment and share-of-voice dashboards",
  "Quarterly roadmap tied to the seven A.G.E.N.T.I.C. phases",
];

function ServicesPage() {
  const root = useReveal();

  return (
    <div ref={root}>
      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[860px] text-center">
          <span className="hero-badge reveal">● Services</span>
          <h1 className="reveal mt-5 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05]">
            Engineering for the agentic era
          </h1>
          <p className="reveal mx-auto mt-4 max-w-[700px] opacity-95">
            We don't hand over a slide deck. We ship the structured data, integrations and
            measurement that make AI assistants cite and transact with your brand.
          </p>
        </div>
      </section>

      <section className="section-beame">
        <div className="container-beame grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <article key={s.title} className="card-beame reveal p-6">
              <img
                src={serviceImages[i]?.src}
                alt={serviceImages[i]?.alt ?? s.title}
                loading="lazy"
                className="mb-5 h-48 w-full rounded-2xl object-cover"
              />
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                {s.kicker}
              </p>
              <h2 className="mt-2 text-2xl">{s.title}</h2>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {s.tag}
              </p>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Deliverables</Eyebrow>
            <h2 className="section-title">What you actually receive</h2>
            <ul className="mx-auto mt-6 grid max-w-[860px] gap-3.5">
              {deliverables.map((d) => (
                <li key={d} className="check-item">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>Framework</Eyebrow>
          <h2 className="section-title reveal">How the work is sequenced</h2>
          <FrameworkGrid />
        </div>
      </section>

      <section id="faq" className="section-beame pt-0">
        <div className="container-beame">
          <h2 className="section-title reveal">Service FAQs</h2>
          <FaqList items={serviceFaqs} />
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
