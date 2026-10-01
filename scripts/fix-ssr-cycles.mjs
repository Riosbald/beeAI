#!/usr/bin/env node
/**
 * Post-build fix: neutralize circular-chunk init bugs in the Nitro SSR output.
 *
 * Bug (observed with vite 8 / rolldown + nitro 3.0.260603-beta, 2026-08-27):
 * Rolldown emits a tiny "facade" chunk (e.g. _ssr/server-CXIMen1H.mjs) that
 * exports the rolldown runtime helper `__exportAll` AND imports `server_exports`
 * back from a sibling app chunk (e.g. _ssr/server-CXIMen1H2.mjs). The sibling
 * imports `__exportAll` from the facade and CALLS IT AT TOP LEVEL:
 *
 *   facade.mjs:1:   import { c as server_exports } from "./sibling.mjs";
 *   sibling.mjs:7:  import { n as __exportAll } from "./facade.mjs";
 *   sibling.mjs:…:  var server_exports = __exportAll({ … });   // top level
 *
 * When the cycle resolves facade-first, `__exportAll` is still `undefined`
 * inside the sibling → `TypeError: __exportAll is not a function` → every SSR
 * request 500s. This is invisible to `npm run dev` (no bundling) and to the
 * bundle gate (client output), so it slipped through every existing check.
 *
 * Fix: for every server chunk that imports a rolldown runtime helper from a
 * chunk that (transitively) imports it back, strip that import specifier and
 * define the helper locally. Behavior is identical; evaluation order no longer
 * matters. Idempotent: once the import statement is rewritten it no longer
 * matches, so re-running is a no-op. If it detects a cycle it cannot rewrite,
 * it exits 1 so CI fails loudly instead of shipping a broken Worker.
 *
 * Usage: node scripts/fix-ssr-cycles.mjs   (wired as the `postbuild` script)
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname, resolve, basename } from "node:path";

const SERVER_DIR = resolve(process.cwd(), ".output", "server");

// Rolldown runtime helpers that are safe to inline (pure, dependency-free).
const HELPERS = {
  __exportAll: `(all, no_symbols) => {\n\tlet target = {};\n\tfor (var name in all) __defProp(target, name, { get: all[name], enumerable: true });\n\tif (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });\n\treturn target;\n}`,
};

// "n as __exportAll" → "__exportAll"; "n" → "n"
const localAlias = (spec) => spec.match(/(?:^|\s)as\s+([A-Za-z_$][\w$]*)$/)?.[1] ?? spec.trim();

const files = (() => {
  const out = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (entry.name.endsWith(".mjs")) out.push(p);
    }
  };
  walk(SERVER_DIR);
  return out;
})();

if (files.length === 0) {
  console.error(`✗ ${SERVER_DIR} has no .mjs files — run "npm run build" first.`);
  process.exit(1);
}

// Original import graph: file -> Map<importedFile, fullImportStatement>
const imports = new Map();
for (const file of files) {
  const src = readFileSync(file, "utf8");
  const map = new Map();
  const re = /import\s*\{([^}]*)\}\s*from\s*"(\.\/[^"]+\.mjs)"/g;
  let m;
  while ((m = re.exec(src))) {
    const target = resolve(dirname(file), m[2]);
    if (files.includes(target)) map.set(target, m[0]);
  }
  imports.set(file, map);
}

// does `from` (transitively) import `to`?
const reaches = (from, to, seen = new Set()) => {
  if (from === to) return true;
  if (seen.has(from)) return false;
  seen.add(from);
  for (const next of imports.get(from)?.keys() ?? []) {
    if (reaches(next, to, seen)) return true;
  }
  return false;
};

let patched = 0;
let failed = 0;
for (const file of files) {
  let src = readFileSync(file, "utf8");
  let changed = false;

  for (const [target, statement] of imports.get(file) ?? []) {
    const specMatch = statement.match(/\{([^}]*)\}/);
    if (!specMatch) continue;
    const specifiers = specMatch[1]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    const cyclical = specifiers.filter(
      (spec) => Object.hasOwn(HELPERS, localAlias(spec)) && reaches(target, file),
    );
    if (cyclical.length === 0) {
      // Unknown cyclical bindings that get CALLED would crash at init — fail loudly.
      const body = src.replace(statement, "");
      for (const spec of specifiers) {
        const alias = localAlias(spec);
        if (!reaches(target, file) || Object.hasOwn(HELPERS, alias)) continue;
        if (new RegExp(`\\b${alias}\\s*\\(`).test(body)) {
          console.error(
            `✗ ${basename(file)}: cyclical binding "${alias}" (via ${basename(target)}) is called but not inlinable — manual review required.`,
          );
          failed++;
        }
      }
      continue;
    }

    const kept = specifiers.filter((s) => !cyclical.includes(s));
    const replacementImport =
      kept.length > 0 ? statement.replace(/\{[^}]*\}/, `{ ${kept.join(", ")} }`) : "";
    const localDefs = cyclical.map((spec) => {
      const alias = localAlias(spec);
      return `var __defProp = Object.defineProperty; /* inlined by fix-ssr-cycles: circular-chunk TDZ guard */\nvar ${alias} = ${HELPERS[alias]};`;
    });

    src = src.replace(
      statement,
      `${replacementImport}${replacementImport ? "\n" : ""}${localDefs.join("\n")}`,
    );
    changed = true;
    patched++;
    console.log(
      `· ${basename(file)}: inlined ${cyclical.map(localAlias).join(", ")} (cycle via ${basename(target)})`,
    );
  }

  if (changed) writeFileSync(file, src);
}

if (failed !== 0) {
  console.error(`✗ SSR cycle check FAILED for ${failed} file(s) — manual review required.`);
  process.exit(1);
}
console.log(
  `\n✓ SSR cycle guard done — ${patched} import(s) inlined across ${files.length} chunks.`,
);
