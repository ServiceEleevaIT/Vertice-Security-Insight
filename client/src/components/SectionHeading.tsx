import * as React from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  "data-testid": dataTestId,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  "data-testid"?: string;
}) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left",
        className,
      )}
      data-testid={dataTestId}
    >
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.18)]" />
          <span>{eyebrow}</span>
        </div>
      ) : null}

      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.04] tracking-tight whitespace-pre-line">
        {title}
      </h2>

      {description ? (
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
