import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { company, nav } from "@/data/company";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Pure Golden Demolition home">
      <span className="flex h-9 w-9 flex-col justify-center gap-[3px] border border-gold/70 p-1.5" aria-hidden>
        <span className="h-[3px] w-full bg-gold" />
        <span className="h-[3px] w-[70%] bg-gold" />
        <span className="h-[3px] w-[42%] bg-gold" />
      </span>
      <span className="leading-none">
        <span className="display block text-[1.15rem] font-semibold tracking-[0.18em] text-foreground">
          PURE GOLDEN
        </span>
        <span className="block text-[0.62rem] tracking-[0.28em] text-gold">DEMOLITION · DUBAI</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-[0.72rem] font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:text-gold",
                pathname === item.to && "text-gold",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phones[0].e164}`}
            className="flex items-center gap-2 text-sm text-muted hover:text-gold"
          >
            <Phone className="size-3.5" />
            {company.phones[0].display}
          </a>
          <Button asChild size="sm">
            <Link to="/contact">Get a quote</Link>
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-foreground lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-border bg-card lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center border-b border-border/60 text-sm uppercase tracking-[0.14em] text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-4">
              <Link to="/contact" onClick={() => setOpen(false)}>
                Get a quote
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
