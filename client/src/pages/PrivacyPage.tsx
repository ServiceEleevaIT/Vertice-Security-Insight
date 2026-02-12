import * as React from "react";
import Seo from "@/components/Seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Container } from "@/components/Container";
import { LeadDialog } from "@/components/LeadDialog";
import { Shield, Lock, Database, FileText } from "lucide-react";

export default function PrivacyPage() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Privacidade | VERTICE"
        description="Informações sobre privacidade e uso de dados relacionados ao formulário de contato da VERTICE."
      />

      <SiteHeader
        onPrimaryCta={() => setOpen(true)}
        onSecondaryCta={() => setOpen(true)}
      />

      <main className="relative">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="noise-overlay relative">
          <Container className="py-12 sm:py-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm" data-testid="privacy-badge">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.18)]" />
                Privacidade e transparência
              </div>

              <h1 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.02]">
                Política de Privacidade (Resumo)
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Esta página descreve, em alto nível, como os dados enviados pelo formulário são tratados.
                Ajuste conforme sua política oficial e requisitos legais.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Coleta mínima",
                    desc: "Solicitamos apenas dados necessários para contato e entendimento do cenário.",
                    icon: <FileText className="h-5 w-5 text-primary" />,
                  },
                  {
                    title: "Segurança",
                    desc: "Boas práticas de proteção e acesso restrito aos dados de leads.",
                    icon: <Shield className="h-5 w-5 text-primary" />,
                  },
                  {
                    title: "Finalidade",
                    desc: "Contato para demo, materiais técnicos e alinhamento de necessidades.",
                    icon: <Lock className="h-5 w-5 text-primary" />,
                  },
                  {
                    title: "Retenção",
                    desc: "Retenção pelo período necessário ao relacionamento comercial e auditoria.",
                    icon: <Database className="h-5 w-5 text-primary" />,
                  },
                ].map((c) => (
                  <div
                    key={c.title}
                    className="glass rounded-2xl p-5"
                    data-testid={`privacy-card-${c.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-background/30 shadow-sm">
                        {c.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{c.title}</div>
                        <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                          {c.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 glass rounded-3xl p-6 sm:p-7" data-testid="privacy-content">
                <div className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
                  <p>
                    <strong>Quais dados coletamos?</strong> Nome, e-mail, empresa e (opcionalmente) cargo, telefone e mensagem.
                  </p>
                  <p>
                    <strong>Como usamos?</strong> Para retornar contato, entender necessidades, agendar uma demonstração e compartilhar materiais relacionados.
                  </p>
                  <p>
                    <strong>Com quem compartilhamos?</strong> Em geral, não compartilhamos com terceiros, exceto quando necessário para operação (ex.: CRM) ou exigência legal.
                  </p>
                  <p>
                    <strong>Seus direitos.</strong> Você pode solicitar atualização ou remoção dos dados entrando em contato pelos canais oficiais.
                  </p>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/15 px-4 py-2 text-sm font-semibold hover:bg-primary/20 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                    data-testid="privacy-cta"
                  >
                    Solicitar contato <span aria-hidden>→</span>
                  </button>
                </div>
              </div>

              <div className="mt-6 text-xs text-muted-foreground">
                Importante: este texto é um resumo de UI. Substitua por sua política oficial antes de publicar.
              </div>
            </div>
          </Container>
        </div>
      </main>

      <SiteFooter />

      <LeadDialog
        open={open}
        onOpenChange={setOpen}
        defaultSource="privacy-page"
        title="Contato sobre privacidade"
        subtitle="Envie sua solicitação e retornaremos com os próximos passos."
      />
    </div>
  );
}
