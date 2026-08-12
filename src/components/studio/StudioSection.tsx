import { useEffect, useMemo, useState } from "react";

import { testimonials } from "@/data/site";

/* ---------------------------------- Orb ---------------------------------- */

function Waveform({ bars = 9 }: { bars?: number }) {
  return (
    <div className="wave" aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span key={i} style={{ animationDelay: `${i * 90}ms` }} />
      ))}
    </div>
  );
}

function Orb() {
  return (
    <div className="orb-wrap">
      <svg className="orb" viewBox="0 0 220 220" role="img" aria-label="Agentic commerce orb">
        <defs>
          <path
            id="orb-circle"
            d="M110,110 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0"
          />
        </defs>
        <circle cx="110" cy="110" r="62" className="orb-core" />
        <circle cx="110" cy="110" r="84" className="orb-ring" />
        <g className="orb-spin">
          <text className="orb-text">
            <textPath href="#orb-circle" startOffset="0%">
              DISCOVERABLE · RECOMMENDABLE · TRANSACTABLE · DISCOVERABLE ·
              RECOMMENDABLE · TRANSACTABLE ·
            </textPath>
          </text>
        </g>
      </svg>
      <Waveform />
    </div>
  );
}

/* ----------------------------- Testimonials ------------------------------ */

const VISIBLE = 3;

function TestimonialStrip() {
  const shown = testimonials.slice(0, VISIBLE);
  const overflow = testimonials.length - shown.length;

  return (
    <div className="t-scroll">
      <div className="teal-cards">
        {shown.map((t) => (
          <blockquote key={t.name} className="tq">
            <p>“{t.quote}”</p>
            <footer>{t.name}</footer>
          </blockquote>
        ))}
        {overflow > 0 && (
          <div className="tq tq-more" aria-label={`${overflow} more testimonials`}>
            +{overflow}
          </div>
        )}
      </div>
    </div>
  );
}

/* --------------------------- Dictionary pills ---------------------------- */

const dictionary = [
  "AEO",
  "GEO",
  "Agentic checkout",
  "Knowledge graph",
  "Structured content",
  "MCP",
  "Share of voice",
  "Trust signals",
  "Feed hygiene",
  "Citation rate",
];

function DictionaryPills() {
  return (
    <ul className="dict-row">
      {dictionary.map((w) => (
        <li key={w} className="dict-pill">
          {w}
        </li>
      ))}
    </ul>
  );
}

/* ----------------------------- Snippet card ------------------------------ */

const snippet = `{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Signature Blend",
  "offers": {
    "@type": "Offer",
    "price": "24.00",
    "availability": "InStock"
  }
}`;

function SnippetCard() {
  return (
    <article className="snip-card">
      <header className="snip-head">
        <span className="snip-dot" aria-hidden="true" />
        product.jsonld
      </header>
      <pre className="snip-body">
        <code>{snippet}</code>
      </pre>
    </article>
  );
}

/* --------------------------- Category pills ------------------------------ */

const categories = [
  {
    id: "audit",
    label: "Audit",
    title: "See how agents read you today",
    body: "We benchmark your visibility across ChatGPT, Gemini, Perplexity and Copilot, then map every gap to a fix with an owner and a date.",
  },
  {
    id: "graph",
    label: "Knowledge graph",
    title: "One canonical truth for every agent",
    body: "Entities, relationships and structured data that assistants can quote without hallucinating your catalogue or your policies.",
  },
  {
    id: "content",
    label: "Content",
    title: "Answers written to be cited",
    body: "Question-shaped content with schema, sources and freshness signals so your brand is the paragraph the model repeats.",
  },
  {
    id: "checkout",
    label: "Checkout",
    title: "Transactable inside the conversation",
    body: "Feeds, protocols and payment rails wired so an agent can complete the purchase without sending the buyer back to a browser.",
  },
];

function CategoryPanel() {
  const first = categories[0]!;
  const [active, setActive] = useState(first.id);
  const [fading, setFading] = useState(false);
  const [shown, setShown] = useState(first.id);

  useEffect(() => {
    if (active === shown) return;
    setFading(true);
    const t = setTimeout(() => {
      setShown(active);
      setFading(false);
    }, 180);
    return () => clearTimeout(t);
  }, [active, shown]);

  const panel = useMemo(
    () => categories.find((c) => c.id === shown) ?? first,
    [shown, first],
  );

  return (
    <div className="cat-block">
      <div className="cat-pills" role="tablist" aria-label="Capabilities">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            id={`cat-tab-${c.id}`}
            aria-selected={active === c.id}
            aria-controls="cat-panel"
            className={`cat-pill${active === c.id ? " is-active" : ""}`}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div
        id="cat-panel"
        role="tabpanel"
        aria-labelledby={`cat-tab-${panel.id}`}
        className={`cat-panel${fading ? " is-fading" : ""}`}
      >
        <h3>{panel.title}</h3>
        <p>{panel.body}</p>
      </div>
    </div>
  );
}

/* ------------------------------- Section --------------------------------- */

export function StudioSection() {
  return (
    <section className="studio work-section" aria-labelledby="studio-heading">
      <div className="studio-inner">
        <p className="studio-eyebrow">The studio</p>
        <div className="studio-hero">
          <div className="studio-hero-copy">
            <h2 id="studio-heading" className="studio-title">
              Built to be quoted by machines
            </h2>
            <p className="studio-lead">
              A working view of the system behind every engagement — the language, the
              markup and the moments where an assistant decides whether to name you.
            </p>
          </div>
          <Orb />
        </div>

        <DictionaryPills />

        <div className="studio-grid">
          <CategoryPanel />
          <SnippetCard />
        </div>

        <TestimonialStrip />
      </div>
    </section>
  );
}
