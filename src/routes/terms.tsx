import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand } from "@/components/site-ui";
import { useReveal } from "@/lib/use-reveal";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

const TITLE = "Terms of Service — BeameAI by LOGON";
const DESC =
  "The terms that govern use of the BeameAI by LOGON website and services — scope, engagements, intellectual property, liability and governing law.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/terms` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    h: "Acceptance",
    p: [
      "By using this website and its services, you agree to these terms. If you do not agree, please do not use the site.",
    ],
  },
  {
    h: "Services",
    p: [
      "BeameAI by LOGON provides AI search optimization (LLMO/GEO), AI crawlability consulting, entity and structured-data engineering, and agentic-commerce preparation via the BeameAI platform. Engagements are scoped individually: the free AI Visibility Health Check is provided as an informational baseline and does not constitute a binding proposal.",
    ],
  },
  {
    h: "Your responsibilities",
    bullets: [
      "Provide accurate information in audit requests and engagements.",
      "Ensure you have the right to share any business data or content you provide.",
      "Not use the site to transmit unlawful, harmful or infringing material.",
    ],
  },
  {
    h: "Intellectual property",
    p: [
      "All content on this site — including the LOGON Insights Hub articles, frameworks and methodology — is the intellectual property of BeameAI by LOGON unless otherwise stated. You may reference and link to our content; you may not republish it commercially without written permission.",
    ],
  },
  {
    h: "No guarantees",
    p: [
      "AI search visibility is influenced by third-party platforms we do not control. While we work to evidence-based methods, we do not guarantee specific rankings, citations or revenue outcomes. The free audit and all informational content are provided 'as is'.",
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      "To the maximum extent permitted by law, BeameAI by LOGON is not liable for indirect, incidental or consequential damages arising from use of this site or our services, including loss of data, revenue or business opportunity.",
    ],
  },
  {
    h: "Governing law",
    p: [
      "These terms are governed by the laws of the Federal Republic of Nigeria, and any disputes are subject to the exclusive jurisdiction of the courts of Lagos, Nigeria.",
    ],
  },
  {
    h: "Changes",
    p: [
      "We may update these terms as our services evolve. The current version is always available at /terms, and continued use after changes constitutes acceptance.",
    ],
  },
];

function TermsPage() {
  const root = useReveal();
  return (
    <div ref={root}>
      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[820px]">
          <span className="hero-badge reveal">● Terms of Service</span>
          <h1 className="reveal mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.08]">
            Terms of Service
          </h1>
          <p className="reveal mt-4 opacity-95">Last updated: August 2026</p>
        </div>
      </section>
      <section className="section-beame pt-0">
        <div className="container-beame mx-auto max-w-[760px] space-y-8">
          {sections.map((s) => (
            <div key={s.h} className="reveal">
              <h2 className="text-xl font-bold md:text-2xl">{s.h}</h2>
              {s.p?.map((p) => (
                <p key={p} className="mt-2 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {s.bullets?.map((b) => (
                <li key={b} className="mt-2 flex gap-2 leading-relaxed text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </div>
          ))}
          <p className="reveal text-sm">
            <Link to="/" className="font-semibold text-primary">
              ← Back to home
            </Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
