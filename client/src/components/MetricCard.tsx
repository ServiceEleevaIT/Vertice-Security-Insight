import * as React from "react";
import { cn } from "@/lib/utils";

export function MetricCard({
  label,
  value,
  supporting,
  gradient = "from-primary/22 via-primary/10 to-transparent",
  icon,
  "data-testid": dataTestId,
}: {
  label: string;
  value: string;
  supporting?: string;
  gradient?: string;
  icon?: React.ReactNode;
  "data-testid"?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-card-border/70 bg-card/55 backdrop-blur",
        "shadow-[var(--shadow-soft)] transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] hover:border-card-border",
      )}
      data-testid={dataTestId}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", gradient)} />
      <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-primary/15 blur-2xl transition-opacity duration-300 group-hover:opacity-90" />
      <div className="relative p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {label}
            </div>
            <div className="text-3xl sm:text-4xl font-display font-semibold leading-none">
              {value}
            </div>
          </div>
          {icon ? (
            <div className="shrink-0 rounded-2xl border border-border/60 bg-background/30 p-3 shadow-sm">
              {icon}
            </div>
          ) : null}
        </div>

        {supporting ? (
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            {supporting}
          </p>
        ) : null}
      </div>
    </div>
  );
}
