import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Estimator } from "@/components/quote/estimator";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      {
        title: "Contact a Demolition Company in Dubai | Pure Golden Quote",
      },
      {
        name: "description",
        content:
          "Request a demolition quotation in Dubai. Call +971 50 748 5948, WhatsApp, or send plot details. Office M-02, Al Mateen. Emergency 24/7 on +971 50 594 7422.",
      },
    ],
  }),
});

const answer =
  "Contact Pure Golden Wrecking & Demolition Works LLC at Office M-02, Al Mateen, Dubai, UAE. Call +971 50 748 5948, email info@puregoldendemolition.com, or send the form with plot location and structure type. Hours are Monday–Saturday 08:00–18:00. Emergency demolition: +971 50 594 7422, 24/7.";

function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    try {
      const prev = JSON.parse(localStorage.getItem("pg-enquiries") || "[]") as unknown[];
      localStorage.setItem("pg-enquiries", JSON.stringify([...prev, { ...payload, at: Date.now() }]));
    } catch {
      /* ignore quota */
    }
    setName(String(payload.name || ""));
    setSent(true);
  }

  return (
    <main className="pb-24 md:pb-0">
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ])}
      />
      <PageHero
        kicker="Contact"
        title="Request a demolition quotation in Dubai"
        answer={answer}
        crumbs={[
          { name: "Home", to: "/" },
          { name: "Contact" },
        ]}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          {sent ? (
            <div className="border border-gold/40 bg-card p-8">
              <Check className="size-8 text-gold" />
              <h2 className="mt-4 text-3xl">We have the enquiry{name ? `, ${name}` : ""}</h2>
              <p className="mt-3 text-sm text-muted">
                This preview stores the message on this device. For a live quote, call or WhatsApp
                the numbers on this page — that is how Dubai jobs actually get booked.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href={`tel:${company.phones[0].e164}`}>
                    <Phone className="size-4" />
                    {company.phones[0].display}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={`https://wa.me/${company.whatsapp}`}>
                    <MessageCircle className="size-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4 border border-border bg-card p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" required className="mt-2" autoComplete="name" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" required className="mt-2" autoComplete="tel" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" className="mt-2" autoComplete="email" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="area">Plot area / community</Label>
                  <Input id="area" name="area" className="mt-2" placeholder="e.g. Jumeirah 3" />
                </div>
                <div>
                  <Label htmlFor="service">Service</Label>
                  <select
                    id="service"
                    name="service"
                    className="mt-2 flex h-11 w-full rounded-sm border border-border bg-background px-3 text-sm"
                    defaultValue="villa-demolition"
                  >
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <Label htmlFor="message">Plot notes</Label>
                <Textarea
                  id="message"
                  name="message"
                  className="mt-2"
                  placeholder="G+1 villa, approx. 420 m², pool yes/no, access notes"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send enquiry
              </Button>
            </form>
          )}
        </div>
        <aside className="space-y-6 lg:col-span-2">
          <div className="border border-border bg-card p-6">
            <h2 className="font-sans text-lg font-medium">Office</h2>
            <address className="mt-3 space-y-2 text-sm not-italic text-muted">
              <p>{company.legalName}</p>
              <p>{company.address.display}</p>
              <p>{company.hours}</p>
            </address>
            <ul className="mt-4 space-y-2 text-sm">
              {company.phones.map((p) => (
                <li key={p.display}>
                  <a className="text-gold hover:text-gold-bright" href={`tel:${p.e164}`}>
                    {p.label}: {p.display}
                  </a>
                </li>
              ))}
              <li>
                <a className="text-gold hover:text-gold-bright" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted">
              Emergency 24/7:{" "}
              <a className="text-gold" href={`tel:${company.emergency.e164}`}>
                {company.emergency.display}
              </a>
            </p>
          </div>
          <iframe
            title="Office M-02 Al Mateen Dubai map"
            className="h-56 w-full border border-border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Al%20Mateen%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
        </aside>
      </section>

      <section className="bg-card py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Estimator />
        </div>
      </section>
    </main>
  );
}
