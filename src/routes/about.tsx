import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { company, whyUs } from "@/data/company";
import { authorities } from "@/data/areas";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      {
        title: "About Pure Golden Demolition | Licensed Demolition Contractor in Dubai",
      },
      {
        name: "description",
        content:
          "Pure Golden Wrecking & Demolition Works LLC is a licensed demolition contractor in Dubai. Safety, permit compliance, and clean handover for villa, building, and industrial projects.",
      },
    ],
  }),
});

const answer =
  "Pure Golden Wrecking & Demolition Works LLC is a licensed demolition contractor based at Office M-02, Al Mateen, Dubai. The company provides villa, building, industrial, partial and interior demolition, excavation, concrete cutting, and site clearance, with support for Dubai Municipality, DDA, and Trakhees permit files and DEWA disconnection.";

function About() {
  return (
    <main className="pb-24 md:pb-0">
      <JsonLd data={graph([breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])])} />
      <PageHero
        kicker="Company"
        title="About Pure Golden Wrecking & Demolition Works LLC"
        answer={answer}
        crumbs={[
          { name: "Home", to: "/" },
          { name: "About" },
        ]}
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <img
          src="/images/crew.jpg"
          alt="Pure Golden demolition crew on a Dubai site with an excavator"
          width={1400}
          height={787}
          className="w-full object-cover"
        />
        <div>
          <h2 className="text-3xl sm:text-4xl">What we actually do</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            We take structures down in Dubai in a way that survives inspection: licensed contractor,
            isolated utilities, a method statement the authority can read, plant matched to access,
            and a plot that the next consultant can walk without climbing rubble.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The office is in Al Mateen. The work is across the emirate — Jumeirah villas, Al Quoz
            warehouses, DIP sheds, and interior strip-outs in live buildings. We do not claim ISO
            numbers or project counts we cannot show you on a site visit. We claim a method.
          </p>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl">Mission and vision</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <article>
              <h3 className="font-sans text-lg font-medium">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Provide reliable demolition and earthwork services throughout Dubai and the UAE,
                focusing on safety, efficiency, and client satisfaction. Protect people, property,
                and the environment. Plan each project so execution is controlled, not improvised.
              </p>
            </article>
            <article>
              <h3 className="font-sans text-lg font-medium">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Be among the demolition contractors in Dubai that owners and consultants actually
                trust for villa rebuilds and industrial clearance — safe, environmentally responsible,
                and priced in writing.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl sm:text-4xl">Why contractors and owners hire us</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {whyUs.map((w) => (
            <article key={w.title} className="border border-border p-5">
              <h3 className="font-sans text-lg font-medium">{w.title}</h3>
              <p className="mt-2 text-sm text-muted">{w.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl">Authorities we plan around</h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            The affection plan decides the portal. We do not guess DM because the community sounds
            municipal.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {authorities.map((a) => (
              <article key={a.name} className="border border-border bg-background p-5">
                <h3 className="font-sans text-base font-medium">{a.name}</h3>
                <p className="mt-2 text-sm text-muted">{a.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl">Office and contact</h2>
        <address className="mt-4 max-w-md text-sm not-italic leading-relaxed text-muted">
          {company.legalName}
          <br />
          {company.address.display}
          <br />
          {company.phones.map((p) => p.display).join(" · ")}
          <br />
          {company.email}
          <br />
          {company.hours}. Emergency 24/7 {company.emergency.display}.
        </address>
        <Button asChild className="mt-8">
          <Link to="/contact">Start a quotation</Link>
        </Button>
      </section>
    </main>
  );
}
