import { Link } from "@tanstack/react-router";
import { company, nav } from "@/data/company";
import { services } from "@/data/services";
import { guides } from "@/data/guides";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="display text-xl tracking-[0.16em] text-foreground">PURE GOLDEN</p>
          <p className="mt-1 text-[0.65rem] tracking-[0.22em] text-gold">WRECKING & DEMOLITION WORKS LLC</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{company.description}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold">Services</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-gold">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold">Contact</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-muted">
            <p>{company.address.display}</p>
            <p>
              <a className="hover:text-gold" href={`tel:${company.phones[0].e164}`}>
                {company.phones[0].display}
              </a>
            </p>
            <p>
              <a className="hover:text-gold" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <p>{company.hours}</p>
            <p>
              24/7 emergency{" "}
              <a className="text-gold hover:text-gold-bright" href={`tel:${company.emergency.e164}`}>
                {company.emergency.display}
              </a>
            </p>
          </address>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-faint">Guides</p>
          <ul className="mt-2 space-y-1 text-sm text-muted">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link to="/guides/$slug" params={{ slug: g.slug }} className="hover:text-gold">
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Licensed demolition contractor in Dubai.
          </p>
          <p>English · Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
}
