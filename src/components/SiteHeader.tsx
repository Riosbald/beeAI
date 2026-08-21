import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/insights", label: "Insights" },
  { to: "/ai-crawlability", label: "Crawlability" },
  { to: "/protocols", label: "Protocol Tracker" },
  { to: "/about", label: "About" },
] as const;

const machineFiles = [
  { href: "/llms.txt", label: "llms.txt" },
  { href: "/robots.txt", label: "robots.txt" },
  { href: "/sitemap.xml", label: "sitemap" },
] as const;

export function SiteHeader() {
  const header = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => header.current?.classList.toggle("scrolled", window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // AUD-010: lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header ref={header} className="site-header">
      <div className="container-beame flex items-center justify-between gap-3 py-3.5">
        <Link
          to="/"
          className="brand-mark flex items-baseline gap-2"
          aria-label="BeameAI by LOGON — home"
        >
          <span>
            beame<span className="text-foreground">AI</span>
          </span>
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            by LOGON
          </span>
        </Link>

        <nav className="hidden gap-6 text-sm font-semibold text-muted-foreground lg:flex">
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
        <div className="flex items-center gap-3">
          <div className="machine-links hidden xl:flex" aria-label="AI machine files">
            {machineFiles.map((f, i) => (
              <span key={f.href} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="sep" />}
                <a href={f.href}>{f.label}</a>
              </span>
            ))}
          </div>
          <Link
            to="/"
            hash="audit"
            className="hidden rounded-none [clip-path:var(--chamfer-chip)] bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Book a free audit
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-none [clip-path:var(--chamfer-chip)] border border-border text-foreground lg:hidden"
          >
            <span aria-hidden>{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
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
            <div className="mt-2 flex flex-wrap gap-4 border-t border-border pt-2 text-xs font-semibold text-muted-foreground">
              {machineFiles.map((f) => (
                <a key={f.href} href={f.href} className="hover:text-primary">
                  {f.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
