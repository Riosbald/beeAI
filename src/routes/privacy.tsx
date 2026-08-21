import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand, useReveal } from "@/components/site-ui";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

const TITLE = "Privacy Policy — BeameAI by LOGON";
const DESC =
  "How BeameAI by LOGON handles personal data — lawful basis, data minimisation, retention, and your rights under the Nigeria Data Protection Act (NDPA) and applicable global standards.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/privacy` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    h: "Who we are",
    p: [
      "BeameAI by LOGON is an AI Insights & Consultancy anchored in Lagos, Nigeria. This policy explains how we collect, use and protect personal data when you visit this site, request an audit, or engage our services.",
    ],
  },
  {
    h: "What we collect",
    bullets: [
      "Contact details you submit through our audit forms: name, company, email, phone (optional) and the goals you share.",
      "Usage data: pages visited, referral source and device/browser basics, used to improve the site.",
      "Conversation data you share with our AI assistant and chatbot, used only to answer your questions.",
    ],
  },
  {
    h: "How we use it",
    bullets: [
      "To respond to audit and discovery-call requests.",
      "To deliver and improve our AI search, crawlability and consultancy services.",
      "To send updates you have explicitly requested.",
      "To meet legal and regulatory obligations, including the Nigeria Data Protection Act (NDPA).",
    ],
  },
  {
    h: "Lawful basis and data minimisation",
    p: [
      "We process personal data on the lawful bases of consent, contract performance and legitimate interest, and we apply data minimisation: we collect only what the request requires, and we do not sell personal data. We retain enquiry data only as long as needed to handle the enquiry and meet legal obligations, after which it is deleted or anonymised.",
    ],
  },
  {
    h: "AI measurement and analytics",
    p: [
      "Where we run LLMO prompt audits or visibility tracking, probes are anonymised and response logs are pseudonymised. We do not log personal data from prompts, and our measurement pipelines are designed to be privacy-safe by default, aligned with global AI governance standards and ISO 42001 expectations.",
    ],
  },
  {
    h: "Your rights",
    bullets: [
      "Access, correction and deletion of the personal data we hold about you.",
      "Withdrawal of consent at any time.",
      "Lodging a complaint with the Nigeria Data Protection Commission (NDPC) if you believe your data was mishandled.",
    ],
  },
  {
    h: "Contact",
    p: [
      "For any privacy request, email privacy@beameai.ng or write to BeameAI by LOGON, Lagos, Nigeria. We respond to verified requests within 30 days.",
    ],
  },
];

function PrivacyPage() {
  const root = useReveal();
  return (
    <div ref={root}>
      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[820px]">
          <span className="hero-badge reveal">● Privacy Policy</span>
          <h1 className="reveal mt-5 text-[clamp(1.9rem,4vw,3rem)] leading-[1.08]">
            Privacy Policy
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
