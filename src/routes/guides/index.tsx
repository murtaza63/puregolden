import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { guides } from "@/data/guides";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const Route = createFileRoute("/guides/")({
  component: GuidesIndex,
  head: () => ({
    meta: [
      {
        title: "Dubai Demolition Guides | Permits, Cost, Villa Process | Pure Golden",
      },
      {
        name: "description",
        content:
          "Practical guides to demolition in Dubai: how to get a permit in 2026, what villa demolition costs, and the owner’s process from inspection to handover.",
      },
    ],
  }),
});

const answer =
  "Pure Golden publishes practical demolition guides for Dubai owners and consultants: how demolition permits work (DM, DDA, Trakhees, DEWA), what villa demolition costs in 2026, and the step-by-step villa process. These pages are written as direct answers so they can be cited by search and AI engines.";

function GuidesIndex() {
  return (
    <main className="pb-24 md:pb-0">
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
          ]),
        ])}
      />
      <PageHero
        kicker="Guides"
        title="Demolition guides for Dubai owners"
        answer={answer}
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Guides" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.slug}
              to="/guides/$slug"
              params={{ slug: g.slug }}
              className="border border-border bg-card p-6"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-faint">
                {g.readMins} min read · {g.updated}
              </p>
              <h2 className="mt-3 font-sans text-xl font-medium leading-snug">{g.title}</h2>
              <p className="mt-3 text-sm text-muted">{g.answer}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
