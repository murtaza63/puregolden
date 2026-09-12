import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { formatAed } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const TYPES = [
  { id: "villa", label: "Villa", per: 48 },
  { id: "building", label: "Building", per: 58 },
  { id: "industrial", label: "Warehouse / industrial", per: 42 },
  { id: "interior", label: "Interior soft strip", per: 28 },
] as const;

const ACCESS = [
  { id: "open", label: "Open plot / easy plant access", m: 0.92 },
  { id: "normal", label: "Normal community street", m: 1 },
  { id: "tight", label: "Tight access / narrow road", m: 1.28 },
] as const;

export function Estimator() {
  const [type, setType] = useState<(typeof TYPES)[number]["id"]>("villa");
  const [area, setArea] = useState(420);
  const [storeys, setStoreys] = useState(2);
  const [access, setAccess] = useState<(typeof ACCESS)[number]["id"]>("normal");
  const [extras, setExtras] = useState({ pool: false, basement: false, foundations: true });

  const result = useMemo(() => {
    const t = TYPES.find((x) => x.id === type)!;
    const a = ACCESS.find((x) => x.id === access)!;
    const storeyM = 1 + Math.max(0, storeys - 1) * 0.1;
    let mid = area * t.per * storeyM * a.m;
    if (extras.pool) mid += 8500;
    if (extras.basement) mid += 14000;
    if (!extras.foundations) mid *= 0.88;
    const low = Math.round(mid * 0.78);
    const high = Math.round(mid * 1.32);
    const daysLow = Math.max(5, Math.round(area / 90));
    const daysHigh = Math.max(daysLow + 4, Math.round(area / 45));
    return { low, high, daysLow, daysHigh };
  }, [type, area, storeys, access, extras]);

  return (
    <section id="estimator" className="scroll-mt-24 border border-border bg-card p-5 sm:p-8">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">Planning range</p>
      <h2 className="mt-2 text-3xl text-foreground sm:text-4xl">Demolition cost estimator</h2>
      <p className="mt-3 max-w-2xl text-sm text-muted">
        Indicative 2026 Dubai range for superstructure demolition and debris. Not a contract. Permits,
        DEWA fees, asbestos, and night work are excluded. A site visit produces the real number.
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <Label htmlFor="type">Property type</Label>
            <select
              id="type"
              className="mt-2 flex h-11 w-full rounded-sm border border-border bg-background px-3 text-sm"
              value={type}
              onChange={(e) => setType(e.target.value as typeof type)}
            >
              {TYPES.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="area">Built-up area (m²) — {area}</Label>
            <input
              id="area"
              type="range"
              min={80}
              max={2000}
              step={10}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-3 w-full accent-gold"
            />
          </div>
          <div>
            <Label htmlFor="storeys">Storeys including ground</Label>
            <select
              id="storeys"
              className="mt-2 flex h-11 w-full rounded-sm border border-border bg-background px-3 text-sm"
              value={storeys}
              onChange={(e) => setStoreys(Number(e.target.value))}
            >
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="access">Access</Label>
            <select
              id="access"
              className="mt-2 flex h-11 w-full rounded-sm border border-border bg-background px-3 text-sm"
              value={access}
              onChange={(e) => setAccess(e.target.value as typeof access)}
            >
              {ACCESS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <fieldset className="space-y-2">
            <legend className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Scope
            </legend>
            {(
              [
                ["foundations", "Include foundation / slab removal"],
                ["pool", "Swimming pool break-out"],
                ["basement", "Basement break-out"],
              ] as const
            ).map(([key, label]) => (
              <label key={key} className="flex min-h-11 items-center gap-3 text-sm text-foreground">
                <input
                  type="checkbox"
                  className="size-4 accent-gold"
                  checked={extras[key]}
                  onChange={(e) => setExtras((s) => ({ ...s, [key]: e.target.checked }))}
                />
                {label}
              </label>
            ))}
          </fieldset>
        </form>
        <div className="flex flex-col justify-between border border-gold/30 bg-background p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted">Indicative range</p>
            <p className="display mt-3 text-4xl tabular-nums text-gold sm:text-5xl">
              {formatAed(result.low)} – {formatAed(result.high)}
            </p>
            <p className="mt-4 text-sm text-muted">
              On-site programme after permit: about {result.daysLow}–{result.daysHigh} working days.
              Permit and DEWA NOC time is usually 2–5 weeks before that.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/contact">Request a site quote</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/guides/$slug" params={{ slug: "demolition-cost-dubai" }}>
                Read the cost guide
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
