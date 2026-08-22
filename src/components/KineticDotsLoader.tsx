import { memo } from "react";

/**
 * KineticDotsLoader — gravity-bounce dot loader, adapted to the BeameAI by LOGON
 * chamfer design system.
 *
 * Compatibility adaptations (vs. the original shadcn/Next.js sample):
 *  - `cn` from "@/lib/utils"      → dropped (not used in body; utils.ts was removed
 *                                    in the ADR-044 dependency cleanup)
 *  - `<style jsx>` (styled-jsx)   → keyframes moved to src/styles.css (top-level;
 *                                    this is Vite/TanStack, not Next.js)
 *  - `'use client'`               → not required by TanStack Start; removed
 *  - cyan/blue palette            → remapped to chamfer flat inks: orange dot,
 *                                    paper highlight, tan ripple, ink shadow
 *  - Path                         → src/components/ (this repo removed the dead
 *                                    shadcn src/components/ui/ directory; our
 *                                    design system is bespoke CSS, not Radix)
 *
 * Usage (eager — a loader must appear instantly, so it is intentionally NOT
 * lazy-loaded itself; it is the fallback shown while lazy sections/routes load):
 *   <Suspense fallback={<KineticDotsLoader label="Loading studio" />}>…
 */
function KineticDotsLoader({ label = "Loading" }: { label?: string }) {
  const dots = 4;

  return (
    <div
      className="flex min-h-[250px] items-center justify-center p-8"
      role="status"
      aria-label={label}
    >
      <span className="sr-only">{label}…</span>
      <div className="flex gap-5">
        {[...Array(dots)].map((_, i) => (
          <div key={i} className="relative flex h-20 w-6 flex-col items-center justify-end">
            {/* 1. The bouncing dot */}
            <div
              className="relative z-10 h-5 w-5"
              style={{
                animation: "kinetic-bounce 1.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
                animationDelay: `${i * 0.15}s`,
                willChange: "transform",
              }}
            >
              <div
                className="h-full w-full rounded-none [clip-path:var(--chamfer-chip)] bg-[var(--orange)] shadow-[0_0_15px_rgba(240,78,35,0.45)]"
                style={{
                  animation: "kinetic-morph 1.4s linear infinite",
                  animationDelay: `${i * 0.15}s`,
                  willChange: "transform",
                }}
              />
              {/* Specular highlight */}
              <div className="absolute left-1 top-1 h-1.5 w-1.5 rounded-none [clip-path:var(--chamfer-chip)] bg-[var(--paper)]/70" />
            </div>

            {/* 2. Floor ripple (shockwave on impact) */}
            <div
              className="absolute bottom-0 h-3 w-10 rounded-none border border-[var(--tan)]/40 opacity-0"
              style={{
                animation: "kinetic-ripple 1.4s linear infinite",
                animationDelay: `${i * 0.15}s`,
              }}
            />

            {/* 3. Reflective shadow */}
            <div
              className="absolute -bottom-1 h-1.5 w-5 rounded-none bg-[var(--ink)]/40"
              style={{
                animation: "kinetic-shadow 1.4s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite",
                animationDelay: `${i * 0.15}s`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(KineticDotsLoader);
