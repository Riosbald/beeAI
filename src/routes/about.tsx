import { createFileRoute } from "@tanstack/react-router";

import { CtaBand, Eyebrow, FrameworkGrid, useReveal } from "@/components/site-ui";
import { testimonials } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BeameAI — Agentic Commerce Optimization" },
      {
        name: "description",
        content:
          "BeameAI is an Agentic Commerce Optimization company combining AEO/GEO strategy with real engineering: MCP, structured data and agent checkout protocols.",
      },
      { property: "og:title", content: "About BeameAI — Agentic Commerce Optimization" },
      {
        property: "og:description",
        content:
          "Who we are, how we work, and why agentic commerce changes the rules for every brand.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Evidence over opinion",
    body: "Every recommendation is grounded in what the assistants actually return for your prompt set today, not in generic best practice.",
  },
  {
    title: "Build, don't advise",
    body: "Schema, feeds, MCP servers and protocol integrations get implemented, tested and monitored — not handed off as a to-do list.",
  },
  {
    title: "Revenue is the metric",
    body: "Citations matter because they lead to agent-mediated conversions. We report both, and we tie the roadmap to the second one.",
  },
];

function AboutPage() {
  const root = useReveal();

  return (
    <div ref={root}>
      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[860px] text-center">
          <span className="hero-badge reveal">● About us</span>
          <h1 className="reveal mt-5 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05]">
            We make brands legible to machines
          </h1>
          <p className="reveal mx-auto mt-4 max-w-[700px] opacity-95">
            BeameAI is an Agentic Commerce Optimization company. Our mission is simple:
            make your business discoverable, recommendable and transactable by the AI
            agents your customers now trust.
          </p>
        </div>
      </section>

      <section className="section-beame">
        <div className="container-beame grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <article key={v.title} className="card-beame reveal p-6">
              <h2 className="text-xl">{v.title}</h2>
              <p className="mt-3 text-[0.96rem] text-muted-foreground">{v.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="section-title">From SEO to agentic commerce</h2>
            <p className="mx-auto mt-4 max-w-[860px] text-[0.99rem] leading-relaxed text-muted-foreground">
              BeameAI started by helping businesses answer customers faster with chat and
              automation. As buying journeys moved inside AI assistants, the same question
              came back in a new form: can a machine find you, understand you, trust you,
              and buy from you? Today we combine strategy with hands-on engineering —
              knowledge graphs, structured data, MCP integrations and agentic checkout
              protocols — so the answer is yes on every major platform.
            </p>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="section-title reveal">The A.G.E.N.T.I.C. framework</h2>
          <FrameworkGrid />
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <h2 className="section-title reveal">Clients</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="card-beame reveal p-5">
                <p className="text-[0.98rem]">“{t.quote}”</p>
                <footer className="mt-3 text-sm font-bold text-primary">{t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
