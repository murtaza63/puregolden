import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { services } from "@/data/services";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
  head: () => ({
    meta: [
      {
        title: "Demolition Services in Dubai | Villa, Building, Industrial | Pure Golden",
      },
      {
        name: "description",
        content:
          "Demolition services in Dubai: villa demolition, building demolition, industrial demolition, partial and interior strip-out, excavation, concrete cutting, and site clearance.",
      },
    ],
  }),
});

const answer =
  "Pure Golden provides licensed demolition services in Dubai including villa demolition, building demolition, industrial demolition, partial and interior demolition, excavation and earthwork, concrete cutting and breaking, and site clearance with debris removal. Each job is quoted after inspection and planned around the permit authority on the plot.";

function ServicesIndex() {
  return (
    <main className="pb-24 md:pb-0">
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ])}
      />
      <PageHero
        kicker="Services"
        title="Demolition services in Dubai"
        answer={answer}
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Services" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group grid overflow-hidden border border-border sm:grid-cols-5"
            >
              <div className="sm:col-span-2">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="h-48 w-full object-cover sm:h-full"
                />
              </div>
              <div className="sm:col-span-3 p-5">
                <h2 className="font-sans text-xl font-medium">{s.name}</h2>
                <p className="mt-2 text-sm text-muted">{s.answer}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
