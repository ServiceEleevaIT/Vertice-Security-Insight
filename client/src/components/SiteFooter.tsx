import * as React from "react";
import { Container } from "@/components/Container";
import { Link } from "wouter";
import { Shield, Mail, Phone, ExternalLink } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/60 bg-background/70 backdrop-blur-xl">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-border/70 bg-card/40 shadow-sm">
                <Shield className="h-5 w-5" />
              </div>
              <div className="leading-tight">
                <div className="font-display text-lg">VERTICE</div>
                <div className="text-xs text-muted-foreground -mt-0.5">
                  Observabilidade centralizada
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformando telemetria em clareza operacional: menos ruído, mais contexto,
              decisões rápidas e confiáveis.
            </p>
            <button
              onClick={handleToTop}
              className="text-sm font-semibold text-primary hover:underline"
              data-testid="footer-top"
            >
              Voltar ao topo
            </button>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Navegação
            </div>
            <div className="grid gap-2 text-sm">
              <Link href="/#problema" className="hover:underline" data-testid="footer-link-problema">
                Problema
              </Link>
              <Link href="/#pilares" className="hover:underline" data-testid="footer-link-pilares">
                Pilares
              </Link>
              <Link href="/#como-funciona" className="hover:underline" data-testid="footer-link-como-funciona">
                Como funciona
              </Link>
              <Link href="/#faq" className="hover:underline" data-testid="footer-link-faq">
                FAQ
              </Link>
              <Link href="/privacidade" className="hover:underline" data-testid="footer-link-privacidade">
                Privacidade
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Contato
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@vertice.exemplo</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+55 (11) 0000-0000</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/40 px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors"
                  data-testid="footer-external"
                >
                  Site institucional <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {year} VERTICE. Todos os direitos reservados.</div>
          <div className="opacity-90">Segurança • Confiabilidade • Observabilidade</div>
        </div>
      </Container>
    </footer>
  );
}
