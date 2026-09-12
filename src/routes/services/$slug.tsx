import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqList } from "@/components/faq/faq-list";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/data/services";
import { breadcrumbSchema, faqSchema, graph, serviceSchema } from "@/lib/schema";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/$slug")({
  component: ServicePage,
  head: ({ params }) => {
    const s = getService(params.slug);
    return {
      meta: [
        { title: s?.title ?? "Service | Pure Golden Demolition" },
        { name: "description", content: s?.description ?? "" },
      ],
    };
  },
});

function ServicePage() {
  const { slug } = Route.useParams();
  const service = getService(slug);
  if (!service) throw notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main className="pb-24 md:pb-0">
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          serviceSchema(service),
          faqSchema(service.faqs),
        ])}
      />
      <PageHero
        kicker="Service"
        title={service.h1}
        answer={service.answer}
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Services", to: "/services" },
          { name: service.name },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <img
            src={service.image}
            alt={service.imageAlt}
            width={1200}
            height={800}
            className="w-full object-cover"
          />
          {service.body.map((p) => (
            <p key={p.slice(0, 24)} className="mt-5 text-sm leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
        <aside className="lg:col-span-2">
          <div className="border border-border bg-card p-6">
            <h2 className="font-sans text-lg font-medium">Scope typically includes</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {service.bullets.map((b) => (
                <li key={b} className="border-l-2 border-gold pl-3">
                  {b}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-6 w-full">
              <Link to="/contact">Quote this service</Link>
            </Button>
          </div>
        </aside>
      </section>
      {service.faqs.length ? (
        <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
          <h2 className="text-3xl">Questions about {service.name.toLowerCase()}</h2>
          <div className="mt-6">
            <FaqList items={service.faqs} />
          </div>
        </section>
      ) : null}
      <section className="border-t border-border bg-card py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl">Related services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="border border-border bg-background p-5"
              >
                <h3 className="font-sans text-base font-medium">{s.name}</h3>
                <p className="mt-2 text-sm text-muted">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
