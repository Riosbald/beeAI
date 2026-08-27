import { Link } from "@tanstack/react-router";

import { CtaBand, Eyebrow, FaqList } from "@/components/site-ui";
import { useReveal } from "@/lib/use-reveal";
import type { RoleData } from "@/data/roles";
import { AUTHOR } from "@/data/insights/author";

export function RoleLanding({ data }: { data: RoleData }) {
  const root = useReveal();

  return (
    <div ref={root}>
      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[860px] text-center">
          <span className="hero-badge reveal">● {data.badge}</span>
          <h1 className="reveal mt-5 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05]">
            {data.title}
          </h1>
          <p className="reveal mx-auto mt-4 max-w-[720px] opacity-95">{data.sub}</p>
          <div className="reveal mt-7 hero-ctas">
            <Link to="/" hash="audit" className="btn-beame">
              Book a free AI Visibility Audit
            </Link>
            <Link to="/" hash="audit" className="btn-beame-ghost">
              Talk to a {data.talk}-experienced consultant
            </Link>
            <Link to="/insights" className="btn-beame-ghost">
              Read the research hub
            </Link>
          </div>
          <p className="reveal mt-4 text-sm opacity-90">
            100+ production implementations · named author · 90-day review cadence
          </p>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>The problem</Eyebrow>
            <p className="mx-auto max-w-[820px] text-center text-[0.98rem] leading-relaxed text-muted-foreground">
              {data.problem}
            </p>
            <ul className="mx-auto mt-6 grid max-w-[920px] gap-3">
              {data.pain.map((p) => (
                <li key={p} className="check-item">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>What you get</Eyebrow>
          <h2 className="section-title reveal">Same engagement. Sharply different outcomes.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {data.get.map((g) => (
              <article key={g.title} className="card-beame reveal p-5">
                <h3 className="text-lg font-bold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal p-6 md:p-8">
            <Eyebrow>Deliverables</Eyebrow>
            <h2 className="section-title">What you actually receive</h2>
            <ul className="mx-auto mt-6 grid max-w-[860px] gap-3.5">
              {data.deliverables.map((d) => (
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
          <Eyebrow>How we deliver</Eyebrow>
          <h2 className="section-title reveal">Four moves, in order</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {data.method.map((m, i) => (
              <article key={m.h} className="card-beame reveal p-5">
                <span className="grid h-11 w-11 place-items-center rounded-none [clip-path:var(--chamfer-4)] bg-primary text-lg font-extrabold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-3.5 text-lg">{m.h}</h3>
                <p className="mt-1.5 text-[0.95rem] text-muted-foreground">{m.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal mx-auto max-w-[820px] p-6 text-center md:p-8">
            <Eyebrow>Client outcome</Eyebrow>
            <blockquote className="mt-2 text-lg font-medium leading-relaxed">
              “{data.proof.quote}”
            </blockquote>
            <p className="mt-4 text-sm font-bold">{data.proof.name}</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {data.proof.role}
            </p>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="section-title reveal">Straight answers for {data.nav}</h2>
          <FaqList items={data.faqs} />
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="card-beame reveal mx-auto max-w-[820px] text-center">
            <Eyebrow>Operator authored</Eyebrow>
            <p className="mt-2 text-sm text-muted-foreground">
              The strategy behind this engagement is led by {AUTHOR.name}, {AUTHOR.role}, based in
              Lagos, Nigeria — the same practitioner who writes the BeameAI by LOGON Insights Hub
              and implements AI visibility work daily.
            </p>
            <div className="mt-5 hero-ctas">
              <a
                href={AUTHOR.linkedinCanonical}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-beame inline-flex"
              >
                {AUTHOR.name} on LinkedIn
              </a>
              <Link to="/" hash="audit" className="btn-beame-ghost">
                Book a free AI Visibility Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
