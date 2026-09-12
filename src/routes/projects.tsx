import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { projectTypes } from "@/data/projects";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      {
        title: "Demolition Project Types in Dubai | Pure Golden Demolition",
      },
      {
        name: "description",
        content:
          "Villa, commercial, industrial, and earthwork demolition project types Pure Golden handles in Dubai — method, access, and handover, not stock photography of someone else’s job.",
      },
    ],
  }),
});

const answer =
  "Pure Golden handles four demolition project types in Dubai: residential villa takedowns, low-rise commercial buildings, industrial warehouses and yards, and foundation removal with earthwork. Each job is planned around access, adjoining property, and the permit authority. We describe work types here rather than inventing named client case studies.";

function Projects() {
  return (
    <main className="pb-24 md:pb-0">
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ])}
      />
      <PageHero
        kicker="Work types"
        title="Demolition projects we take on in Dubai"
        answer={answer}
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Projects" },
        ]}
      />
      <section className="mx-auto max-w-6xl space-y-10 px-4 py-14 sm:px-6">
        {projectTypes.map((p, i) => (
          <article
            key={p.slug}
            className="grid overflow-hidden border border-border lg:grid-cols-2"
          >
            <img
              src={p.image}
              alt={p.imageAlt}
              width={1200}
              height={800}
              loading="lazy"
              className={`h-64 w-full object-cover lg:h-full ${i % 2 ? "lg:order-2" : ""}`}
            />
            <div className="p-6 sm:p-10">
              <h2 className="text-3xl">{p.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.summary}</p>
              <ul className="mt-5 space-y-2 text-sm text-muted">
                {p.points.map((pt) => (
                  <li key={pt} className="border-l-2 border-gold pl-3">
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <Button asChild>
          <Link to="/contact">Discuss a plot</Link>
        </Button>
      </section>
    </main>
  );
}
