import * as React from "react";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon,
  title,
  description,
  bullets,
  tone = "primary",
  "data-testid": dataTestId,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets?: string[];
  tone?: "primary" | "accent" | "neutral";
  "data-testid"?: string;
}) {
  const toneStyles =
    tone === "primary"
      ? "from-primary/25 via-primary/10 to-transparent"
      : tone === "accent"
        ? "from-accent/25 via-accent/10 to-transparent"
        : "from-foreground/10 via-foreground/5 to-transparent";

  const ring =
    tone === "primary"
      ? "group-hover:shadow-[var(--shadow-glow)]"
      : tone === "accent"
        ? "group-hover:shadow-[0_0_0_1px_hsl(var(--accent)/0.22),_0_18px_80px_hsl(var(--accent)/0.12)]"
        : "group-hover:shadow-[0_0_0_1px_hsl(var(--foreground)/0.12),_0_18px_80px_hsl(222_80%_2%/0.30)]";

  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-card-border/70 bg-card/50 backdrop-blur",
        "shadow-[var(--shadow-soft)] transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:border-card-border",
        ring,
      )}
      data-testid={dataTestId}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", toneStyles)} />
      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
      <div className="relative p-6 sm:p-7">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl border border-border/60 bg-background/35 p-3 shadow-sm">
            {icon}
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-xl sm:text-2xl leading-tight">{title}</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {bullets?.length ? (
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {bullets.map((b, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/80 shadow-[0_0_0_3px_hsl(var(--primary)/0.12)]" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
