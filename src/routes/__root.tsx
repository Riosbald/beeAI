import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { lazy, Suspense, useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Analytics } from "@/components/Analytics";
import { BRAND, BRAND_FULL, PARENT_BRAND, PLATFORM_BRAND, SITE_URL } from "@/lib/site-meta";

const ExpertChat = lazy(() =>
  import("@/components/ExpertChat").then((m) => ({
    default: m.ExpertChat,
  })),
);

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-none [clip-path:var(--chamfer-chip)] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-none [clip-path:var(--chamfer-chip)] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-none [clip-path:var(--chamfer-chip)] border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${BRAND_FULL} — AI Search Optimization & LLMO Consulting` },
      {
        name: "description",
        content: `${BRAND}, anchored in Lagos, Nigeria, helps global enterprises get cited by ChatGPT, Perplexity, Claude, Copilot and Google AI Overviews — AI search (LLMO/GEO), crawlability, entity graphs and agentic commerce via ${PLATFORM_BRAND}.`,
      },
      { name: "author", content: PARENT_BRAND },
      { name: "publisher", content: PARENT_BRAND },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:site_name", content: BRAND_FULL },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: `${BRAND_FULL} — AI Search Optimization & LLMO Consulting` },
      {
        property: "og:description",
        content:
          "Research-backed AI strategy, LLMO/GEO implementation, AI crawlability and agentic commerce — from Lagos to the world.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Sofia+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Cormorant+Garamond:wght@500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "alternate", type: "text/plain", href: "/llms.txt", title: "llms.txt" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": `${SITE_URL}/#organization`,
              name: BRAND,
              alternateName: BRAND_FULL,
              url: SITE_URL,
              logo: `${SITE_URL}/og-beameai.jpg`,
              description: `${BRAND} is an AI Insights & Consultancy anchored in Lagos, Nigeria — AI search (LLMO/GEO), AI crawlability, entity graphs, structured data and agentic commerce for African and global enterprises. ${PLATFORM_BRAND} is its agentic-commerce platform.`,
              founder: {
                "@type": "Person",
                name: "Oluwamayowalogo",
                jobTitle: "Lead AI Strategist",
                sameAs: [
                  "https://www.linkedin.com/in/oluwamayowa",
                  "https://www.linkedin.com/pub/dir/Logo/Oluwamayowa",
                ],
              },
              brand: {
                "@type": "Brand",
                name: PLATFORM_BRAND,
                description: `${PLATFORM_BRAND} is the agentic-commerce platform by ${BRAND}.`,
              },
              areaServed: ["NG", "KE", "ZA", "GH", "EG", "Worldwide"],
              address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
              sameAs: [
                "https://www.linkedin.com/in/oluwamayowa",
                "https://www.linkedin.com/pub/dir/Logo/Oluwamayowa",
              ],
            },
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: BRAND_FULL,
              inLanguage: "en",
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Analytics />
      <SiteHeader />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
      <Suspense fallback={null}>
        <ExpertChat />
      </Suspense>
    </QueryClientProvider>
  );
}
