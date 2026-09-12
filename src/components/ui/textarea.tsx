import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-sm border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-faint",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";
