import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import { agenticPhases } from "@/data/site";

export function useReveal() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const targets = Array.from(el.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      targets.forEach((t) => t.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return root;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 text-center text-xs font-bold uppercase tracking-[0.22em] text-primary">
      {children}
    </p>
  );
}

export function FrameworkGrid() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {agenticPhases.map((p) => (
        <article key={p.letter} className="card-beame reveal p-5">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-lg font-extrabold text-primary-foreground">
            {p.letter}
          </span>
          <h3 className="mt-3.5 text-lg">{p.name}</h3>
          <p className="mt-1.5 text-[0.95rem] text-muted-foreground">{p.body}</p>
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-primary">
            {p.phase}
          </p>
        </article>
      ))}
    </div>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mx-auto mt-8 grid max-w-[900px] gap-3">
      {items.map((f) => (
        <details key={f.q} className="card-beame reveal group p-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4.5 font-semibold">
            <span>{f.q}</span>
            <span
              aria-hidden
              className="text-primary transition-transform group-open:rotate-45"
            >
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
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/" hash="audit" className="btn-beame">
              Book an AI Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
