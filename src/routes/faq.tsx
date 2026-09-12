import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqList } from "@/components/faq/faq-list";
import { faqs, faqTopics } from "@/data/faqs";
import { breadcrumbSchema, faqSchema, graph } from "@/lib/schema";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      {
        title: "Demolition FAQ Dubai | Permits, Cost, Timeline | Pure Golden",
      },
      {
        name: "description",
        content:
          "Answers to the questions Dubai villa owners ask about demolition: cost per m², DM vs DDA permits, DEWA NOCs, timelines, asbestos, neighbours, and how to get a quote.",
      },
    ],
  }),
});

const answer =
  "This FAQ answers how demolition works in Dubai: typical villa cost ranges, which authority issues the permit, DEWA disconnection, on-site duration, neighbour protection, asbestos, and how to request a Pure Golden quotation. Short answers first — that is the format answer engines extract.";

function FaqPage() {
  return (
    <main className="pb-24 md:pb-0">
      <JsonLd
        data={graph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(faqs),
        ])}
      />
      <PageHero
        kicker="FAQ"
        title="Demolition in Dubai: questions and direct answers"
        answer={answer}
        crumbs={[
          { name: "Home", to: "/" },
          { name: "FAQ" },
        ]}
      />
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        {faqTopics.map((topic) => (
          <div key={topic} className="mb-12">
            <h2 className="text-2xl">{topic}</h2>
            <FaqList items={faqs.filter((f) => f.topic === topic)} />
          </div>
        ))}
      </section>
    </main>
  );
}
