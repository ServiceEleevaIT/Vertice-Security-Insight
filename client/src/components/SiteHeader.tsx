import * as React from "react";
import { Link, useLocation } from "wouter";
import { Container } from "@/components/Container";
import { GlowButton } from "@/components/GlowButton";
import { cn } from "@/lib/utils";
import { Shield, Radar, LineChart, Sparkles } from "lucide-react";

const nav = [
  { href: "/#problema", label: "Problema" },
  { href: "/#pilares", label: "Pilares" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader({
  onPrimaryCta,
  onSecondaryCta,
}: {
  onPrimaryCta: () => void;
  onSecondaryCta: () => void;
}) {
  const [location] = useLocation();
  const isHome = location === "/" || location.startsWith("/#");

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("/#")) return;
    e.preventDefault();
    const id = href.replace("/#", "");
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 rounded-xl"
            data-testid="link-logo"
          >
            <div className="relative grid h-10 w-10 place-items-center rounded-2xl border border-border/70 bg-card/40 shadow-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/20 opacity-80" />
              <Shield className="relative h-5 w-5 text-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-tight">
                VERTICE
              </div>
              <div className="text-xs text-muted-foreground -mt-0.5">
                Observabilidade centralizada
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNav(item.href)}
                className={cn(
                  "px-3 py-2 rounded-xl text-sm font-semibold text-muted-foreground",
                  "hover:text-foreground hover:bg-muted/50 transition-colors",
                )}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-2 rounded-2xl border border-border/60 bg-card/40 px-2 py-1 shadow-sm">
              <div className="flex items-center gap-1 px-2 py-1 rounded-xl text-xs font-semibold text-muted-foreground">
                <Radar className="h-4 w-4" />
                Telemetria
              </div>
              <div className="h-5 w-px bg-border/70" />
              <div className="flex items-center gap-1 px-2 py-1 rounded-xl text-xs font-semibold text-muted-foreground">
                <LineChart className="h-4 w-4" />
                Correlação
              </div>
              <div className="h-5 w-px bg-border/70" />
              <div className="flex items-center gap-1 px-2 py-1 rounded-xl text-xs font-semibold text-muted-foreground">
                <Sparkles className="h-4 w-4" />
                IA
              </div>
            </div>

            <GlowButton
              variant="ghost"
              onClick={onSecondaryCta}
              data-testid="btn-falar-especialista"
              aria-label="Falar com especialista"
            >
              Falar com especialista
            </GlowButton>

            <GlowButton
              variant="primary"
              onClick={onPrimaryCta}
              data-testid="btn-agendar-demo"
              aria-label="Agendar demo"
              className="hidden sm:inline-flex"
            >
              Agendar demo
            </GlowButton>

            <GlowButton
              variant="primary"
              onClick={onPrimaryCta}
              data-testid="btn-agendar-demo-mobile"
              aria-label="Agendar demo"
              className="sm:hidden px-4"
            >
              Demo
            </GlowButton>
          </div>
        </div>

        {!isHome ? (
          <div className="mt-2 text-xs text-muted-foreground">
            Você está em uma página interna.{" "}
            <Link href="/" className="text-primary hover:underline" data-testid="link-voltar-home">
              Voltar para a landing
            </Link>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
