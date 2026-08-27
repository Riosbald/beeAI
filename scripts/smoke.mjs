#!/usr/bin/env node
/**
 * HTTP smoke-test matrix for the BeameAI site — runs against a server of the
 * PRODUCTION build (`npm run preview` → wrangler serving .output), never
 * against `vite dev`.
 *
 * Matrix (per docs/qa-audit-report.md framework):
 *   /, /services, /insights, /about          → 200 · exactly 1 <h1> · <title> ·
 *                                               meta description · canonical
 *   /insights/<slug> (from sitemap)          → 200 · 1 <h1> · title
 *   /ai-search/<role>  (from sitemap)        → 200 · 1 <h1> · title
 *   /llms.txt                                → 200 · text/plain · "# BeameAI" header
 *   /sitemap.xml                             → 200 · <urlset> · ≥ 40 <loc>
 *   .txt twins (about, services, insights)   → 200 · text/plain · non-empty
 *   /insights.txt/<slug> (article twin)      → 200 · text/plain · non-empty
 *   /nonexistent-<rand>                      → 404
 *
 * Usage:  node scripts/smoke.mjs [--base http://127.0.0.1:8787]
 * Exit 0 only if every check passes.
 */
const args = process.argv.slice(2);
const baseIdx = args.indexOf("--base");
const BASE =
  (baseIdx !== -1 ? args[baseIdx + 1] : process.env.SMOKE_BASE_URL) ?? "http://127.0.0.1:8787";

const TIMEOUT = AbortSignal.timeout(20_000);
const fetchOk = async (path) => {
  const res = await fetch(`${BASE}${path}`, { signal: TIMEOUT, redirect: "manual" });
  const body = await res.text();
  return { status: res.status, type: res.headers.get("content-type") ?? "", body };
};

let passed = 0;
let failed = 0;
const fail = (label, detail) => {
  failed++;
  console.log(`  ✗ ${label} — ${detail}`);
};
const pass = (label) => {
  passed++;
  console.log(`  ✓ ${label}`);
};

async function checkPage(path, label) {
  try {
    const { status, body } = await fetchOk(path);
    if (status !== 200) return fail(label, `expected 200, got ${status}`);
    const h1Count = (body.match(/<h1[\s>]/g) ?? []).length;
    if (h1Count !== 1) return fail(label, `expected exactly 1 <h1>, found ${h1Count}`);
    if (!/<title>[^<]{3,}<\/title>/.test(body)) return fail(label, "missing/non-empty <title>");
    if (!/name="description"/.test(body)) return fail(label, "missing meta description");
    if (!/rel="canonical"/.test(body)) return fail(label, "missing canonical link");
    pass(`${path} → 200 · h1×1 · title · description · canonical`);
  } catch (err) {
    fail(label, `request failed: ${err.message}`);
  }
}

async function checkTxt(path, label, marker) {
  try {
    const { status, type, body } = await fetchOk(path);
    if (status !== 200) return fail(label, `expected 200, got ${status}`);
    if (!type.startsWith("text/plain")) return fail(label, `expected text/plain, got "${type}"`);
    if (body.trim().length === 0) return fail(label, "empty body");
    if (marker && !body.includes(marker)) return fail(label, `marker "${marker}" not found`);
    pass(`${path} → 200 · text/plain · ${body.trim().length} chars${marker ? " · marker ✓" : ""}`);
  } catch (err) {
    fail(label, `request failed: ${err.message}`);
  }
}

console.log(`\nSmoke matrix against ${BASE}\n`);

// 1. Sitemap first — it drives the dynamic entries.
let sitemap;
try {
  const { status, body } = await fetchOk("/sitemap.xml");
  if (status !== 200) throw new Error(`expected 200, got ${status}`);
  if (!body.includes("<urlset")) throw new Error("missing <urlset>");
  const locs = [...body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length < 40) throw new Error(`only ${locs.length} <loc> entries (expected ≥ 40)`);
  pass(`/sitemap.xml → 200 · urlset · ${locs.length} URLs`);
  sitemap = locs;
} catch (err) {
  fail("/sitemap.xml", err.message);
}

const insightsLoc = sitemap?.find((l) => /\/insights\/[^/]+$/.test(new URL(l).pathname));
const roleLoc = sitemap?.find((l) => /\/ai-search\/[^/]+$/.test(new URL(l).pathname));
const insightsPath = insightsLoc ? new URL(insightsLoc).pathname : null;
const rolePath = roleLoc ? new URL(roleLoc).pathname : null;
if (!insightsPath) fail("sitemap insights probe", "no /insights/<slug> URL in sitemap");

// 2. Core HTML pages.
await checkPage("/", "home");
await checkPage("/services", "services");
await checkPage("/insights", "insights index");
await checkPage("/about", "about");
if (insightsPath) await checkPage(insightsPath, `article page ${insightsPath}`);
if (rolePath) await checkPage(rolePath, `role landing ${rolePath}`);

// 3. Machine files.
await checkTxt("/llms.txt", "llms.txt", "# BeameAI");
await checkTxt("/about.txt", "about.txt twin");
await checkTxt("/services.txt", "services.txt twin");
await checkTxt("/insights.txt", "insights.txt twin");
if (insightsPath) {
  const twin = insightsPath.replace(/^\/insights\//, "/insights/txt/");
  await checkTxt(twin, `article twin ${twin}`);
}

// 4. 404 behavior.
try {
  const { status } = await fetchOk(`/nonexistent-${Date.now()}`);
  if (status === 404) pass("/nonexistent-… → 404");
  else fail("404 behavior", `expected 404, got ${status}`);
} catch (err) {
  fail("404 behavior", `request failed: ${err.message}`);
}

console.log(`\nSmoke result: ${passed} passed, ${failed} failed.\n`);
process.exit(failed === 0 ? 0 : 1);
