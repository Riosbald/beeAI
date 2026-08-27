# BeameAI by LOGON — beeAI

Marketing + insights site for **BeameAI by LOGON** (agentic-commerce optimization
consultancy, Lagos, Nigeria). Server-rendered with TanStack Start, built to a
Cloudflare Worker artifact, synced to [Lovable](https://lovable.dev).

- **Live (Lovable hosting):** <https://project--ee5c8f64-5c69-471b-aacd-1340992d391a.lovable.app>
- **Machine files:** [`/llms.txt`](https://project--ee5c8f64-5c69-471b-aacd-1340992d391a.lovable.app/llms.txt), `/sitemap.xml`, plain-text twins for every page (`/about.txt`, `/services.txt`, `/insights.txt/<slug>`, …)

## Stack

| Layer | Choice |
| --- | --- |
| UI | React 19 + Tailwind CSS 4 |
| Routing / SSR | TanStack Start + TanStack Router (file-based, `src/routes/`) |
| Build | Vite 8 (rolldown) via `@lovable.dev/vite-tanstack-config` |
| Server runtime | Nitro 3 (`cloudflare-module` preset → Cloudflare Worker `riosbald-beeai`) |
| Package manager | **npm only** (no bun — see `CONFIG_CLEANUP_SUMMARY.md`) |
| Node | pinned via `.nvmrc` (22); `engines` mirrors Vite 8's support window |

## Commands

```sh
npm ci            # clean install (package-lock.json is the source of truth)
npm run dev       # dev server (NOT a proxy for production behavior)
npm run check     # full local gate: lint → typecheck → build → bundle budget
npm run lint      # eslint (flat config)
npm run typecheck # tsc --noEmit (strict)
npm run build     # vite build → .output/ (+ postbuild SSR cycle guard, see below)
npm run check:bundle  # main chunk ≤ 400 KB, no article content leaks into it
npm run preview   # build, then serve the real Worker artifact with wrangler
npm run smoke     # HTTP smoke matrix against a preview server (default :8787)
```

Typical verification loop:

```sh
npm run preview              # terminal 1 (serves .output on http://127.0.0.1:8787)
npm run smoke -- --base http://127.0.0.1:8787   # terminal 2
```

## ⚠️ Known toolchain quirk: SSR cycle guard (postbuild)

Vite 8 / rolldown currently emits a circular chunk pair in the server bundle
(`_ssr/server-*.mjs` importing `__exportAll` from a facade chunk that imports
back), which makes **every SSR request 500 at runtime** in the built Worker —
invisible in `npm run dev` and in the client bundle gate. `npm run build` runs
`scripts/fix-ssr-cycles.mjs` (postbuild) to inline the helper and break the
cycle. It is idempotent, fails loudly on unrecognized cycles, and becomes a
no-op once the toolchain fixes the chunker. Do not remove it without re-running
the full smoke matrix against `npm run preview`.

## CI

> **Activation note:** the workflow is staged at `.github/staged/ci.yml` because
> automation tokens can't push `.github/workflows/*` (GitHub `workflows`
> permission). To activate: in the GitHub web UI, add the file
> `.github/workflows/ci.yml` with the staged content (Add file → Create new →
> paste → commit). One-time, maintainer-only.

On every PR to `main` (and pushes to `main`):

1. **gates** — lint → typecheck → build (+ cycle guard) → bundle budget
2. **smoke** — serves the built Worker with `wrangler dev`, runs
   `scripts/smoke.mjs` (status codes, single `<h1>`, title/description/canonical,
   `.txt` twins, sitemap ≥ 40 URLs, 404 behavior)
3. **lighthouse** — mobile-emulated Lighthouse; errors below a11y `0.95`,
   SEO `0.95`, performance `0.90` (config: `.github/lighthouse/lighthouserc.json`)

## Deploy & rollback

- **Deploy** = merge to `main`. Lovable syncs from `main` and publishes.
  The Nitro output is also Cloudflare-ready (`npx nitro deploy --prebuilt` or
  `wrangler deploy` from `.output/server/`) if you move off Lovable hosting.
- **Verify after deploy** (against the live URL): the smoke matrix
  (`npm run smoke -- --base https://<live-url>`) plus a Lighthouse run.
- **Rollback** = `git revert <merge-commit> && git push` on `main`. Deploys
  track the branch; there is no stateful migration to undo.

## Repo map

```
src/routes/        file-based routes (HTML pages + .txt twins + sitemap.xml)
src/components/    site chrome + sections (site-ui.tsx is the shared kit)
src/lib/           helpers: server fns, error pages, site meta, use-reveal
src/data/          content: insights hub (42 articles), roles, protocols, site
scripts/           check-bundle.mjs · fix-ssr-cycles.mjs · smoke.mjs
docs/              qa-audit-report.md (issue register), audits, hub spec
.github/           ci.yml · lighthouse/lighthouserc.json
```

Conventions: routing rules live in `src/routes/README.md`; the Lovable sync
rules (never rewrite pushed history; keep `main` deployable) live in
`AGENTS.md`; every significant fix is recorded in `docs/qa-audit-report.md`
using the Evidence → Root cause → Fix → Verification format.

## Environment

No runtime secrets are required for the site itself. The optional AI copy
assist (`src/lib/ai-assist.functions.ts`) reads `LOVABLE_API_KEY` from the
server environment — Lovable injects it; locally it degrades gracefully.

---

This project is connected to [Lovable](https://lovable.dev)
(project `ee5c8f64-5c69-471b-aacd-1340992d391a`): push to `main` on GitHub and
changes sync back into the Lovable editor.
