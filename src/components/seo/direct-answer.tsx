import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function DirectAnswer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "direct-answer max-w-3xl border-l-2 border-gold bg-card/80 py-4 pl-5 pr-4 text-base leading-relaxed text-foreground/90",
        className,
      )}
    >
      {children}
    </p>
  );
}
