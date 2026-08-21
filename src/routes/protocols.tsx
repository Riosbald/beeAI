import { createFileRoute, Link } from "@tanstack/react-router";

import { CtaBand, Eyebrow, Tabs, useReveal } from "@/components/site-ui";
import { useState } from "react";
import {
  commerceMatrix,
  headlineStats,
  industryVoices,
  platformMatrix,
  protocolLayers,
  recentNews,
} from "@/data/protocols";
import { OG_IMAGE, SITE_URL } from "@/lib/site-meta";

export const Route = createFileRoute("/protocols")({
  head: () => ({
    meta: [
      { title: "Agentic Commerce Protocol Tracker | BeameAI by LOGON" },
      {
        name: "description",
        content:
          "Live tracker of agentic commerce and agent infrastructure protocols — ACP, UCP, AP2, MPP, x402, MCP, WebMCP and A2A — plus AI and commerce platform support matrices.",
      },
      { property: "og:title", content: "Agentic Commerce Protocol Tracker | BeameAI by LOGON" },
      {
        property: "og:description",
        content:
          "Who supports ACP, UCP, AP2, MPP, x402, MCP and A2A — updated support matrices for AI assistants and commerce platforms.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/protocols` },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/protocols" }],
  }),
  component: ProtocolsPage,
});

function statusClass(s: string) {
  if (s === "Supported") return "status-pill status-yes";
  if (s === "In Progress") return "status-pill status-wip";
  if (s === "Not Supported") return "status-pill status-no";
  return "status-pill status-unknown";
}

function ProtocolsPage() {
  const root = useReveal();
  const [activeLayer, setActiveLayer] = useState(protocolLayers[0]!.layer);

  return (
    <div ref={root}>
      <section className="hero-beame">
        <div className="container-beame relative mx-auto max-w-[900px] text-center">
          <span className="hero-badge reveal">● Updated August 2026</span>
          <h1 className="reveal mt-5 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.05]">
            Agentic Commerce Protocol Tracker
          </h1>
          <p className="reveal mx-auto mt-4 max-w-[720px] opacity-95">
            The standards that decide whether an AI agent can find, trust and buy from your business
            — and who has shipped support for each one.
          </p>
        </div>
      </section>

      <section className="section-beame">
        <div className="container-beame grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {headlineStats.map((s) => (
            <article key={s.label} className="card-beame reveal p-5">
              <p className="text-2xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-2 text-[0.95rem] text-muted-foreground">{s.label}</p>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary"
              >
                {s.source}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="protocol-stack" className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>The stack</Eyebrow>
          <h2 className="section-title reveal">Protocols in production</h2>
          <Tabs
            label="Protocol layers"
            tabs={protocolLayers.map((l) => ({ id: l.layer, label: l.layer }))}
            active={activeLayer}
            onChange={setActiveLayer}
          />
          {protocolLayers
            .filter((layer) => layer.layer === activeLayer)
            .map((layer) => (
              <div key={layer.layer} className="tab-panel reveal">
                <p className="text-[0.95rem] text-muted-foreground">{layer.blurb}</p>
                <table className="ledger mt-4">
                  <thead>
                    <tr>
                      <th>protocol</th>
                      <th>name</th>
                      <th>state</th>
                      <th>developer</th>
                      <th>license</th>
                    </tr>
                  </thead>
                  <tbody>
                    {layer.protocols.map((p) => (
                      <tr key={p.abbr}>
                        <td>{p.abbr}</td>
                        <td>{p.name}</td>
                        <td>{p.state}</td>
                        <td>{p.developer}</td>
                        <td>{p.license}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {layer.protocols.map((p) => (
                    <div key={p.abbr} className="check-item">
                      <p className="font-semibold">
                        {p.abbr} — {p.fact}
                      </p>
                      <div className="mt-1 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-primary">
                        <a href={p.docs} target="_blank" rel="noopener noreferrer">
                          Docs
                        </a>
                        <a href={p.source} target="_blank" rel="noopener noreferrer">
                          Source
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>Support matrix</Eyebrow>
          <h2 className="section-title reveal">AI platforms</h2>
          <div className="card-beame reveal mt-8 overflow-x-auto p-4">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  {platformMatrix.columns.map((c) => (
                    <th key={c}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {platformMatrix.rows.map((r) => (
                  <tr key={r.platform}>
                    <th scope="row">{r.platform}</th>
                    {r.cells.map((cell, i) => (
                      <td key={platformMatrix.columns[i]}>
                        <span className={statusClass(cell.s)}>{cell.s}</span>
                        {"note" in cell && cell.note ? (
                          <span className="mt-1 block text-[0.72rem] text-muted-foreground">
                            {cell.note}
                          </span>
                        ) : null}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>Support matrix</Eyebrow>
          <h2 className="section-title reveal">Commerce platforms</h2>
          <div className="card-beame reveal mt-8 overflow-x-auto p-4">
            <table className="matrix-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  {commerceMatrix.columns.map((c) => (
                    <th key={c}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {commerceMatrix.rows.map((r) => (
                  <tr key={r.platform}>
                    <th scope="row">{r.platform}</th>
                    {r.cells.map((cell, i) => (
                      <td key={commerceMatrix.columns[i]}>
                        <span className={statusClass(cell)}>{cell}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>Industry voices</Eyebrow>
          <h2 className="section-title reveal">What the operators are saying</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {industryVoices.map((v) => (
              <blockquote key={v.name} className="card-beame reveal p-5">
                <p className="text-[0.98rem]">“{v.quote}”</p>
                <footer className="mt-3 text-sm">
                  <span className="font-bold text-primary">{v.name}</span>
                  <span className="text-muted-foreground"> — {v.role}</span>
                  <a
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-xs font-semibold uppercase tracking-widest text-primary"
                  >
                    {v.label} · {v.date}
                  </a>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <Eyebrow>Recent news</Eyebrow>
          <h2 className="section-title reveal">What moved this month</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {recentNews.map((n) => (
              <article key={n.title} className="card-beame reveal p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {n.date} · {n.tag}
                </p>
                <h3 className="mt-2 text-lg">{n.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted-foreground">{n.body}</p>
                <a
                  href={n.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-bold uppercase tracking-widest text-primary"
                >
                  {n.label}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-beame pt-0">
        <div className="container-beame">
          <div className="cta-panel reveal">
            <Eyebrow>What this means for you</Eyebrow>
            <h2 className="section-title text-[inherit]">
              Your brand is being discovered by agents whether you're ready or not
            </h2>
            <p className="section-lead mx-auto max-w-[820px] text-[inherit] opacity-95">
              Every protocol on this page represents a new way an AI agent can find, compare and
              buy. The brands that prepare their entity graph, structured data and crawler access
              now will be the ones agents recommend first. Start with a free AI Visibility Audit —
              we'll show you exactly where you stand today.
            </p>
            <div className="mt-6 hero-ctas">
              <Link to="/" hash="audit" className="btn-beame">
                Book a free AI Visibility Audit
              </Link>
              <Link to="/ai-crawlability" className="btn-beame-ghost">
                Explore AI Crawlability
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
