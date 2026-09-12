import { DirectAnswer } from "@/components/seo/direct-answer";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";

export function PageHero({
  kicker,
  title,
  answer,
  crumbs,
}: {
  kicker?: string;
  title: string;
  answer: string;
  crumbs: { name: string; to?: string }[];
}) {
  return (
    <section className="page-hero border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={crumbs} />
        {kicker ? (
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-gold">{kicker}</p>
        ) : null}
        <h1 className="max-w-4xl text-4xl text-foreground sm:text-6xl">{title}</h1>
        <div className="gold-rule mt-8 max-w-xs" />
        <DirectAnswer className="mt-8">{answer}</DirectAnswer>
      </div>
    </section>
  );
}
