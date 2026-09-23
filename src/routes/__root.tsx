import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { MobileCta } from "@/components/layout/mobile-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { graph } from "@/lib/schema";
import { company } from "@/data/company";
import "../styles.css";

const APP_NAME = "Pure Golden Demolition";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content: company.description,
      },
      { name: "theme-color", content: "#0B0A08" },
      { name: "author", content: company.legalName },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "geo.region", content: "AE-DU" },
      { name: "geo.placename", content: "Dubai" },
      { name: "format-detection", content: "telephone=yes" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },

      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Figtree:ital,wght@0,400;0,500;0,600;1,400&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="en-AE" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <PreviewHostBridge />
        <AuthProvider>
          <JsonLd data={graph([])} />
          <SiteHeader />
          <Outlet />
          <SiteFooter />
          <MobileCta />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 pb-32 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">404</p>
      <h1 className="mt-3 text-5xl">Page not found</h1>
      <p className="mt-4 text-muted">
        That URL is not a Pure Golden page. Try services, guides, or request a demolition quote.
      </p>
      <a href="/" className="mt-8 inline-flex h-11 items-center bg-gold px-6 text-sm font-medium text-background">
        Back to home
      </a>
    </main>
  );
}
