import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { articles } from "@/data/insights";

const BASE_URL = "https://project--ee5c8f64-5c69-471b-aacd-1340992d391a.lovable.app";

const entries = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/protocols", changefreq: "daily", priority: "0.9" },
  { path: "/insights", changefreq: "weekly", priority: "0.9" },
  ...articles.flatMap((a) => [
    { path: `/insights/${a.slug}`, changefreq: "monthly", priority: "0.8" },
    { path: `/insights/${a.slug}.txt`, changefreq: "monthly", priority: "0.4" },
  ]),
  { path: "/llms.txt", changefreq: "weekly", priority: "0.5" },
  { path: "/index.txt", changefreq: "weekly", priority: "0.5" },
  { path: "/services.txt", changefreq: "monthly", priority: "0.5" },
  { path: "/about.txt", changefreq: "monthly", priority: "0.4" },
  { path: "/protocols.txt", changefreq: "daily", priority: "0.5" },
  { path: "/insights.txt", changefreq: "weekly", priority: "0.5" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...entries.map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              `    <changefreq>${e.changefreq}</changefreq>`,
              `    <priority>${e.priority}</priority>`,
              `  </url>`,
            ].join("\n"),
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
