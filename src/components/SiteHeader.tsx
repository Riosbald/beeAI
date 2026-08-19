import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/insights", label: "Insights" },
  { to: "/protocols", label: "Protocol Tracker" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const header = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () =>
      header.current?.classList.toggle("scrolled", window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header ref={header} className="site-header">
      <div className="container-beame flex items-center justify-between py-3.5">
        <Link to="/" className="brand-mark flex items-baseline gap-2" aria-label="BeameAI by LOG_ON — home">
          <span>
            beame<span className="text-foreground">AI</span>
          </span>
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            by LOG_ON
          </span>
        </Link>

        <nav className="hidden gap-7 text-sm font-semibold text-muted-foreground md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="transition-colors hover:text-primary [&.active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="audit"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Book a free audit
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground md:hidden"
          >
            <span aria-hidden>{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-beame flex flex-col py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-semibold text-muted-foreground hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
