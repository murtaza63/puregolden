import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Shield, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DirectAnswer } from "@/components/seo/direct-answer";
import { JsonLd } from "@/components/seo/json-ld";
import { Estimator } from "@/components/quote/estimator";
import { FaqList } from "@/components/faq/faq-list";
import { company, whyUs } from "@/data/company";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { areas } from "@/data/areas";
import { faqs } from "@/data/faqs";
import { guides } from "@/data/guides";
import { breadcrumbSchema, faqSchema, graph, howToSchema } from "@/lib/schema";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "Demolition Company in Dubai | Licensed Villa & Building Demolition | Pure Golden",
      },
      {
        name: "description",
        content:
          "Licensed demolition contractor in Dubai. Villa, building, industrial and partial demolition, excavation, concrete breaking, and site clearance — permits, DEWA NOCs, clean handover.",
      },
    ],
  }),
});

function Home() {
  const homeFaqs = faqs.filter((f) =>
    ["Cost", "Permits", "Process", "Company"].includes(f.topic),
  ).slice(0, 8);

  return (
    <main className="pb-24 md:pb-0">
      <JsonLd
        data={graph([
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          howToSchema(),
          faqSchema(homeFaqs),
        ])}
      />

      <section className="relative isolate min-h-[88vh] overflow-hidden grain">
        <img
          src="/images/hero.jpg"
          alt="Licensed villa demolition in progress in a Dubai community at golden hour"
          width={1600}
          height={900}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/25" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-28 pt-28 sm:px-6 sm:pb-20">
          <p className="text-xs uppercase tracking-[0.28em] text-gold">
            {company.legalName}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl text-foreground sm:text-7xl lg:text-[5.5rem]">
            Licensed demolition company in Dubai
          </h1>
          <p className="mt-5 max-w-xl text-base text-foreground/85 sm:text-lg">
            Villa, building, and industrial demolition — permits, controlled takedown, debris gone,
            plot handed over ready for the next foundation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">
                Request a site quote
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#estimator">Estimate a range</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            { icon: Shield, t: "Licensed in Dubai", d: "DM / DDA / Trakhees plots" },
            { icon: Clock, t: "Mon–Sat 08:00–18:00", d: "Site hours by permit" },
            { icon: Siren, t: "24/7 emergency", d: company.emergency.display },
            { icon: MapPin, t: "Al Mateen, Dubai", d: "Work across the emirate" },
          ].map((item) => (
            <div key={item.t} className="flex items-start gap-3">
              <item.icon className="mt-0.5 size-4 text-gold" />
              <div>
                <p className="text-sm font-medium text-foreground">{item.t}</p>
                <p className="text-xs text-muted">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">Direct answer</p>
        <h2 className="mt-3 max-w-3xl text-3xl sm:text-5xl">
          Who is Pure Golden Demolition?
        </h2>
        <DirectAnswer className="mt-8">{company.description}</DirectAnswer>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {whyUs.map((w) => (
            <article key={w.title} className="border-t border-border pt-5">
              <h3 className="font-sans text-lg font-medium text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Services</p>
              <h2 className="mt-3 text-3xl sm:text-5xl">What we demolish</h2>
            </div>
            <Button asChild variant="outline">
              <Link to="/services">
                All services <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group card-hover overflow-hidden border border-border bg-background"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-sans text-base font-medium text-foreground">{s.name}</h3>
                  <p className="mt-1 text-sm text-muted">{s.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">Method</p>
        <h2 className="mt-3 max-w-3xl text-3xl sm:text-5xl">How demolition works in Dubai</h2>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          The excavator is step four. Permits, isolation, and a written method come first — that is
          how adjoining villas stay standing and how the next building permit stays possible.
        </p>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <li key={s.n} className="border border-border bg-card p-5">
              <p className="display text-3xl text-gold">{s.n}</p>
              <h3 className="mt-3 font-sans text-lg font-medium">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.14em] text-faint">{s.duration}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Estimator />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-3xl sm:text-5xl">Areas we cover in Dubai</h2>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Demolition crews work across the emirate. Jurisdiction still depends on the affection
          plan — JVC is not always DM, and a master-development villa is not always DDA.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {areas.map((a) => (
            <li
              key={a}
              className="border border-border px-3 py-1.5 text-sm text-muted"
            >
              {a}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl">Guides for owners</h2>
            <Link to="/guides" className="hidden text-sm text-gold hover:text-gold-bright sm:inline">
              All guides
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {guides.map((g) => (
              <Link
                key={g.slug}
                to="/guides/$slug"
                params={{ slug: g.slug }}
                className="card-hover border border-border bg-background p-6"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-faint">
                  {g.readMins} min · {g.updated}
                </p>
                <h3 className="mt-3 font-sans text-lg font-medium leading-snug">{g.title}</h3>
                <p className="mt-3 text-sm text-muted">{g.answer.slice(0, 140)}…</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-3xl sm:text-5xl">Questions owners ask first</h2>
        <div className="mt-8">
          <FaqList items={homeFaqs} />
        </div>
        <Button asChild variant="outline" className="mt-8">
          <Link to="/faq">Full FAQ</Link>
        </Button>
      </section>

      <section className="relative isolate overflow-hidden">
        <img
          src="/images/crew.jpg"
          alt="Demolition crew and excavator on a Dubai site"
          width={1400}
          height={787}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="max-w-2xl text-4xl sm:text-6xl">Ready to take the structure down?</h2>
          <p className="mt-4 max-w-xl text-muted">
            Send the plot location and structure type. We inspect, quote, and tell you which
            authority must issue the permit before a machine starts.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/contact">Contact Pure Golden</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${company.phones[0].e164}`}>{company.phones[0].display}</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
