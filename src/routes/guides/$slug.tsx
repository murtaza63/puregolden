import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { getGuide, guides } from "@/data/guides";
import { articleSchema, breadcrumbSchema, graph } from "@/lib/schema";

export const Route = createFileRoute("/guides/$slug")({
  component: GuidePage,
  head: ({ params }) => {
    const g = getGuide(params.slug);
    return {
      meta: [
        { title: g ? `${g.title} | Pure Golden Demolition` : "Guide" },
        { name: "description", content: g?.description ?? "" },
      ],
    };
  },
});

function GuidePage() {
  const { slug } = Route.useParams();
  const guide = getGuide(slug);
  if (!guide) throw notFound();

  return (
    <main className="pb-24 md:pb-0">
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path: `/guides/${guide.slug}` },
          ]),
          articleSchema(guide),
        ])}
      />
      <PageHero
        kicker={`${guide.readMins} min · Updated ${guide.updated}`}
        title={guide.h1}
        answer={guide.answer}
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Guides", to: "/guides" },
          { name: guide.title },
        ]}
      />
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        {guide.sections.map((s) => (
          <section key={s.h2} className="mb-12">
            <h2 className="text-3xl">{s.h2}</h2>
            {s.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="mt-4 text-sm leading-relaxed text-muted">
                {p}
              </p>
            ))}
            {s.list ? (
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {s.list.map((item) => (
                  <li key={item} className="border-l-2 border-gold pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        <p className="text-xs text-faint">
          This guide is general information for Dubai plots as of {guide.updated}. Confirm fees and
          document lists on the live DM, DDA, Trakhees, and DEWA portals before you file.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/contact">Get a demolition quote</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/faq">Read the FAQ</Link>
          </Button>
        </div>
        <h2 className="mt-16 text-2xl">Other guides</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {guides
            .filter((g) => g.slug !== guide.slug)
            .map((g) => (
              <li key={g.slug}>
                <Link className="text-gold hover:text-gold-bright" to="/guides/$slug" params={{ slug: g.slug }}>
                  {g.title}
                </Link>
              </li>
            ))}
        </ul>
      </article>
    </main>
  );
}
