import * as React from "react";
import { Link, useLocation } from "wouter";
import { Container } from "@/components/Container";
import { GlowButton } from "@/components/GlowButton";
import { cn } from "@/lib/utils";
import { Shield, Radar, LineChart, Sparkles, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { LanguageToggle } from "@/components/LanguageToggle";
import { useTranslation } from "react-i18next";

export function SiteHeader({
  onPrimaryCta,
  onSecondaryCta,
}: {
  onPrimaryCta: () => void;
  onSecondaryCta: () => void;
}) {
  const [location] = useLocation();
  const { t } = useTranslation();
  const isHome = location === "/" || location.startsWith("/#");
  const [isOpen, setIsOpen] = React.useState(false);

  const nav = [
    { href: "/#problema", label: t("nav.problem") },
    { href: "/#pilares", label: t("nav.pillars") },
    { href: "/#como-funciona", label: t("nav.howItWorks") },
    { href: "/#faq", label: t("nav.faq") },
  ];

  const handleNav = (href: string) => (e: React.MouseEvent) => {
    setIsOpen(false); // Close mobile menu if open
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
            onClick={() => setIsOpen(false)}
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

          {/* Desktop Nav */}
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
            <LanguageToggle />

            {/* Desktop only secondary button */}
            <div className="hidden md:block">
              <GlowButton
                variant="ghost"
                onClick={onSecondaryCta}
                data-testid="btn-falar-especialista"
                aria-label={t("nav.speakToSpecialist")}
              >
                {t("nav.speakToSpecialist")}
              </GlowButton>
            </div>

            <GlowButton
              variant="primary"
              onClick={onPrimaryCta}
              data-testid="btn-agendar-demo"
              aria-label={t("nav.scheduleDemo")}
              className="hidden sm:inline-flex"
            >
              {t("nav.scheduleDemo")}
            </GlowButton>

            {/* Phone/Mobile Primary Button */}
            <GlowButton
              variant="primary"
              onClick={onPrimaryCta}
              data-testid="btn-agendar-demo-mobile"
              aria-label={t("nav.scheduleDemo")}
              className="sm:hidden px-3 text-xs"
            >
              {t("nav.demo")}
            </GlowButton>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-muted-foreground hover:bg-muted/50 focus:outline-none"
                  aria-label="Menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-border/60 bg-background/95 backdrop-blur-xl">
                <SheetHeader className="text-left mb-6">
                  <SheetTitle className="font-display text-xl">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNav(item.href)}
                      className="px-4 py-3 rounded-xl text-base font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="h-px bg-border/50 my-2" />
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onSecondaryCta();
                    }}
                    className="px-4 py-3 rounded-xl text-base font-semibold text-left text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {t("nav.speakToSpecialist")}
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onPrimaryCta();
                    }}
                    className="px-4 py-3 rounded-xl text-base font-semibold text-left text-primary hover:bg-primary/10 transition-colors"
                  >
                    {t("nav.scheduleDemo")}
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
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
