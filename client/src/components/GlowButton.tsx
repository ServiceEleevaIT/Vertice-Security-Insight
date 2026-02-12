import * as React from "react";
import { cn } from "@/lib/utils";

type GlowButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  leftIcon?: React.ReactNode;
};

export function GlowButton({
  className,
  variant = "primary",
  leftIcon,
  children,
  ...props
}: GlowButtonProps) {
  const styles =
    variant === "primary"
      ? "text-primary-foreground bg-gradient-to-r from-primary to-primary/80 shadow-[0_18px_80px_hsl(var(--primary)/0.24)] hover:shadow-[0_24px_110px_hsl(var(--primary)/0.30)] border border-primary/30"
      : variant === "secondary"
        ? "text-foreground bg-gradient-to-b from-card/80 to-card/50 border border-border/70 shadow-[var(--shadow-soft)] hover:border-border hover:shadow-[var(--shadow-lift)]"
        : "text-foreground/90 bg-transparent border border-border/60 hover:bg-muted/40";

  return (
    <button
      {...props}
      className={cn(
        "btn-premium focus-ring inline-flex items-center justify-center gap-2",
        "h-11 px-5 sm:px-6",
        "disabled:opacity-55 disabled:cursor-not-allowed disabled:transform-none",
        "hover:-translate-y-0.5 active:translate-y-0 transition-transform",
        styles,
        className,
      )}
    >
      {leftIcon ? <span className="text-current/95">{leftIcon}</span> : null}
      <span className="whitespace-nowrap">{children}</span>
    </button>
  );
}
