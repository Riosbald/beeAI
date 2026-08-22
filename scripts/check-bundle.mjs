#!/usr/bin/env node
/**
 * Bundle-size gate — fails the build if the main entry chunk exceeds budget.
 *
 * ADR-040 / ADR-043: the main chunk should contain framework + app shell only;
 * article content lives in lazy route chunks. Budget: 400 KB (minified).
 *
 * Usage: node scripts/check-bundle.mjs [maxKB]
 */
import { readdirSync, statSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ASSETS = join(process.cwd(), ".output", "public", "assets");
const MAX_KB = Number(process.argv[2] ?? 400);

let stat;
try {
  stat = statSync(ASSETS);
} catch {
  console.error(`✗ ${ASSETS} not found — run "npm run build" first.`);
  process.exit(1);
}
if (!stat.isDirectory()) {
  console.error(`✗ ${ASSETS} not found — run "npm run build" first.`);
  process.exit(1);
}

const js = readdirSync(ASSETS).filter((f) => f.endsWith(".js") && !f.endsWith(".map"));
const main = js
  .map((f) => ({ f, kb: statSync(join(ASSETS, f)).size / 1024 }))
  .sort((a, b) => b.kb - a.kb);

const [largest] = main;
console.log(`\nBundle report (${js.length} JS chunks):`);
for (const c of main.slice(0, 8)) {
  console.log(`  ${c.kb.toFixed(0).padStart(4)} KB  ${c.f}`);
}
const total = main.reduce((s, c) => s + c.kb, 0);
console.log(`  ${total.toFixed(0).padStart(4)} KB  TOTAL`);

// Content-presence probe: article bodies must NOT be in the main entry chunk.
const mainPath = join(ASSETS, largest.f);
const mainSrc = readFileSync(mainPath, "utf8");
const leaked = ["perceive–reason–act", "A.G.E.N.T.I.C. Commerce OS"].filter((p) =>
  mainSrc.includes(p),
);

let ok = true;
if (largest.kb > MAX_KB) {
  console.error(`\n✗ Main chunk ${largest.kb.toFixed(0)} KB exceeds budget ${MAX_KB} KB.`);
  ok = false;
}
if (leaked.length) {
  console.error(`\n✗ Article content leaked into main chunk: ${leaked.join(", ")}`);
  ok = false;
}
if (ok) {
  console.log(`\n✓ Bundle gate passed (main ≤ ${MAX_KB} KB, no content leak).`);
} else {
  process.exit(1);
}
