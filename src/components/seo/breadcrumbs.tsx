import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { name: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-xs uppercase tracking-[0.16em] text-faint">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            {i > 0 ? <ChevronRight className="size-3" /> : null}
            {item.to ? (
              <Link to={item.to} className="hover:text-gold">
                {item.name}
              </Link>
            ) : (
              <span className="text-muted">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
