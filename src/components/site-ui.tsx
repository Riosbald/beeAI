import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { agenticPhases } from "@/data/site";
import { phaseImages } from "@/data/card-images";

// useReveal moved to @/lib/use-reveal (component files export components only).

/** Tabs — active tab interlocks with the sheet below (spec: tab cut runs continuously). */
export function Tabs({
  tabs: items,
  active,
  onChange,
  label = "Tabs",
}: {
  tabs: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
  label?: string;
}) {
  return (
    <div role="tablist" aria-label={label} className="tabs-beame">
      {items.map((t) => (
        <button
          key={t.id}
          type="button"
          role="tab"
          id={`tab-${t.id}`}
          aria-selected={active === t.id}
          aria-controls={`panel-${t.id}`}
          onClick={() => onChange(t.id)}
          className={`tab-beame${active === t.id ? " active" : ""}`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-center font-mono text-xs font-bold uppercase tracking-[0.22em] text-primary">
      {children}
    </p>
  );
}

/** Carousel-style horizontal card rail with scroll-snap + prev/next arrows. */
export function Rail({
  children,
  label = "Scrollable cards",
  className = "",
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = () => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-rail-item]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className={`rail-scroll ${className}`}>
      <button
        type="button"
        aria-label={`Scroll ${label} backward`}
        className="rail-btn prev"
        hidden={!canPrev}
        onClick={() => scrollByCard(-1)}
      >
        ←
      </button>
      <div ref={ref} className="card-rail" role="region" aria-label={label} tabIndex={0}>
        {children}
      </div>
      <button
        type="button"
        aria-label={`Scroll ${label} forward`}
        className="rail-btn next"
        hidden={!canNext}
        onClick={() => scrollByCard(1)}
      >
        →
      </button>
    </div>
  );
}

export function FrameworkGrid() {
  return (
    <Rail label="A.G.E.N.T.I.C. framework phases" className="mt-8">
      {agenticPhases.map((p) => (
        <article
          key={p.letter}
          data-rail-item
          className="card-beame reveal w-[min(86vw,320px)] overflow-hidden p-5 sm:w-[300px]"
        >
          {phaseImages[p.letter] && (
            <img
              src={phaseImages[p.letter]!.src}
              alt={phaseImages[p.letter]!.alt}
              loading="lazy"
              width={768}
              height={512}
              className="mb-4 h-28 w-full rounded-none [clip-path:var(--chamfer-4)] object-cover"
            />
          )}
          <span className="grid h-11 w-11 place-items-center rounded-none [clip-path:var(--chamfer-4)] bg-primary text-lg font-extrabold text-primary-foreground">
            {p.letter}
          </span>
          <h3 className="mt-3.5 text-lg">{p.name}</h3>
          <p className="mt-1.5 text-[0.95rem] text-muted-foreground">{p.body}</p>
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-primary">{p.phase}</p>
        </article>
      ))}
    </Rail>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto mt-8 grid max-w-[900px] gap-3">
      {items.map((f) => (
        <details key={f.q} className="card-beame reveal group p-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4.5 font-semibold">
            <span>{f.q}</span>
            <span aria-hidden className="text-primary transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="px-4.5 pb-4.5 text-[0.96rem] text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="cta-beame section-beame">
      <div className="container-beame">
        <div className="cta-panel reveal">
          <h2 className="section-title text-[inherit]">Ready to become the source of truth?</h2>
          <p className="section-lead text-[inherit] opacity-95">
            Stop being invisible to the agents that matter most. Schedule your audit today.
          </p>
          <div className="mt-6 hero-ctas">
            <Link to="/" hash="audit" className="btn-beame">
              Book a free AI Visibility Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
