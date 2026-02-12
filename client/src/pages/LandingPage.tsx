import * as React from "react";
import Seo from "@/components/Seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { MetricCard } from "@/components/MetricCard";
import { FeatureCard } from "@/components/FeatureCard";
import { LeadDialog } from "@/components/LeadDialog";
import { GlowButton } from "@/components/GlowButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Activity,
  Brain,
  ChartNoAxesCombined,
  CircuitBoard,
  Database,
  GitMerge,
  Layers,
  Link2,
  Lock,
  MessageSquareText,
  Radar,
  Shield,
  Sparkles,
  Timer,
  Wrench,
} from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `/#${id}`);
}

export default function LandingPage() {
  const [leadOpen, setLeadOpen] = React.useState(false);
  const [leadContext, setLeadContext] = React.useState<{
    title: string;
    subtitle: string;
    source: string;
  }>({
    title: "Agendar uma demo",
    subtitle: "Vamos entender seu cenário e mostrar como reduzir ruído, acelerar correlação e otimizar custos.",
    source: "landing-hero-demo",
  });

  const openLead = (context: Partial<typeof leadContext>) => {
    setLeadContext((p) => ({ ...p, ...context }));
    setLeadOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="VERTICE | Observabilidade Centralizada"
        description="Transformando a Observabilidade em Vantagem Competitiva e Econômica. Ingestão unificada, contexto via CMDB e análise inteligente com IA."
      />

      <SiteHeader
        onPrimaryCta={() =>
          openLead({
            title: "Agendar uma demo",
            subtitle: "Um walkthrough guiado com foco em resultados: redução de downtime, custos e MTTR.",
            source: "landing-header-demo",
          })
        }
        onSecondaryCta={() =>
          openLead({
            title: "Falar com um especialista",
            subtitle: "Conte suas dores: fragmentação, custos, correlação e priorização — a gente organiza o caminho.",
            source: "landing-header-specialist",
          })
        }
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="noise-overlay relative">
          <Container className="py-14 sm:py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 reveal-up">
                <div
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm"
                  data-testid="hero-badge"
                >
                  <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_3px_hsl(var(--accent)/0.16)]" />
                  Segurança operacional • Observabilidade centralizada • IA aplicada
                </div>

                <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl leading-[0.98]">
                  VERTICE
                  <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Transformando a Observabilidade em Vantagem Competitiva e Econômica
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Unifique telemetria (logs, métricas e traces), aplique contexto de negócio via CMDB
                  e antecipe incidentes com análises inteligentes — para reduzir ruído, custos e MTTR
                  sem perder visibilidade.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowButton
                    variant="primary"
                    onClick={() =>
                      openLead({
                        title: "Agendar uma demo",
                        subtitle: "Veja a plataforma em ação: ingestão, correlação e insights com IA.",
                        source: "landing-hero-demo",
                      })
                    }
                    data-testid="hero-cta-demo"
                    leftIcon={<Radar className="h-4 w-4" />}
                  >
                    Agendar demo
                  </GlowButton>

                  <GlowButton
                    variant="secondary"
                    onClick={() =>
                      openLead({
                        title: "Falar com especialista",
                        subtitle: "Uma conversa técnica e objetiva para mapear ferramentas atuais e ganhos rápidos.",
                        source: "landing-hero-specialist",
                      })
                    }
                    data-testid="hero-cta-specialist"
                    leftIcon={<MessageSquareText className="h-4 w-4" />}
                  >
                    Falar com especialista
                  </GlowButton>

                  <button
                    onClick={() => scrollToId("pilares")}
                    className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
                    data-testid="hero-cta-learn"
                  >
                    Entender a solução
                  </button>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { icon: <Lock className="h-4 w-4 text-primary" />, label: "Menos risco" },
                    { icon: <Timer className="h-4 w-4 text-primary" />, label: "MTTR menor" },
                    { icon: <GitMerge className="h-4 w-4 text-primary" />, label: "Correlação" },
                    { icon: <Sparkles className="h-4 w-4 text-primary" />, label: "IA aplicada" },
                  ].map((it) => (
                    <div
                      key={it.label}
                      className="glass rounded-2xl px-4 py-3 border border-card-border/60 flex items-center gap-3"
                      data-testid={`hero-pill-${it.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="grid h-9 w-9 place-items-center rounded-xl border border-border/60 bg-background/30 shadow-sm">
                        {it.icon}
                      </div>
                      <div className="text-sm font-semibold">{it.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 reveal-fade">
                <div className="relative rounded-3xl border border-border/60 bg-card/45 backdrop-blur-xl shadow-[var(--shadow-lift)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
                  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl floaty" />
                  <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/16 blur-3xl floaty" style={{ animationDelay: "1.2s" }} />
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Painel de observabilidade (visão executiva)
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/30 px-3 py-1 text-xs font-semibold">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        saudável
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {[
                        { label: "Incidentes críticos", value: "2", trend: "↘ 33%", tone: "accent" },
                        { label: "Sinais correlacionados", value: "86%", trend: "↗ +12%", tone: "primary" },
                        { label: "Ruído eliminado", value: "41%", trend: "↗ +8%", tone: "primary" },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/25 px-4 py-3 shadow-sm"
                          data-testid={`hero-kpi-${row.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <div className="min-w-0">
                            <div className="text-sm font-semibold">{row.label}</div>
                            <div className="text-xs text-muted-foreground">Últimas 24 horas</div>
                          </div>
                          <div className="text-right">
                            <div className="font-display text-2xl leading-none">{row.value}</div>
                            <div
                              className={
                                "text-xs font-semibold " +
                                (row.tone === "accent" ? "text-accent" : "text-primary")
                              }
                            >
                              {row.trend}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {[
                        { title: "Ingestão", sub: "OTel • Telegraf • Beats", icon: <CircuitBoard className="h-4 w-4" /> },
                        { title: "Contexto", sub: "CMDB + negócio", icon: <Database className="h-4 w-4" /> },
                        { title: "IA", sub: "Preditivo + acionável", icon: <Brain className="h-4 w-4" /> },
                        { title: "Governança", sub: "Custos + compliance", icon: <Shield className="h-4 w-4" /> },
                      ].map((c) => (
                        <div
                          key={c.title}
                          className="rounded-2xl border border-border/60 bg-background/25 p-4 shadow-sm hover:bg-muted/30 transition-colors"
                          data-testid={`hero-mini-${c.title.toLowerCase()}`}
                        >
                          <div className="flex items-center gap-2 text-sm font-semibold">
                            <span className="text-primary">{c.icon}</span>
                            {c.title}
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">{c.sub}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between gap-3 rounded-2xl border border-border/60 bg-gradient-to-r from-primary/15 via-transparent to-accent/10 px-4 py-3">
                      <div className="text-sm font-semibold">Quer ver isso no seu ambiente?</div>
                      <button
                        onClick={() =>
                          openLead({
                            title: "Agendar demo",
                            subtitle: "Uma sessão curta e objetiva, com foco em ganhos rápidos.",
                            source: "landing-hero-card-cta",
                          })
                        }
                        className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/15 px-3 py-2 text-sm font-semibold text-foreground hover:bg-primary/20 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                        data-testid="hero-card-cta"
                      >
                        Agendar <span aria-hidden>→</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-xs text-muted-foreground">
                  * Ilustração conceitual para comunicar benefícios e fluxos. Integração e métricas variam por cenário.
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* PROBLEMA */}
      <section id="problema" className="relative py-14 sm:py-20" data-testid="section-problema">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5 reveal-up">
              <SectionHeading
                eyebrow="O desafio real"
                title="Ferramentas fragmentadas viram incidentes caros"
                description="Quando cada camada observa “do seu jeito”, correlação fica lenta, o ruído cresce e a priorização vira adivinhação."
                data-testid="heading-problema"
              />

              <div className="mt-6 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Ambientes modernos combinam legados e cloud nativa. É comum ver Zabbix, Dynatrace,
                  AppDynamics, Oracle EM, além de soluções de cada provedor — tudo coexistindo.
                </p>
                <p>
                  O resultado: múltiplos painéis, alertas conflitantes e uma cadeia de investigação
                  longa. O MTTR aumenta, o custo de indisponibilidade explode e decisões ficam reativas.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Zabbix", "Dynatrace", "AppDynamics", "Oracle EM", "Cloud nativa", "Logs isolados"].map((t) => (
                  <div
                    key={t}
                    className="rounded-full border border-border/60 bg-card/40 px-3 py-1 text-xs font-semibold text-muted-foreground hover:bg-muted/40 transition-colors"
                    data-testid={`chip-${t.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 reveal-fade">
              <div className="grid gap-4 sm:grid-cols-3">
                <MetricCard
                  label="Custo médio de downtime"
                  value="US$ 5.600 / min"
                  supporting="Interrupções custam mais do que infraestrutura: impacto em receita, reputação e compliance."
                  icon={<ChartNoAxesCombined className="h-5 w-5 text-primary" />}
                  gradient="from-primary/28 via-primary/10 to-transparent"
                  data-testid="metric-downtime"
                />
                <MetricCard
                  label="Redução potencial"
                  value="até 50%"
                  supporting="Com correlação, contexto e automação — menos incidentes e contenção mais rápida."
                  icon={<Activity className="h-5 w-5 text-primary" />}
                  gradient="from-accent/22 via-accent/10 to-transparent"
                  data-testid="metric-reducao"
                />
                <MetricCard
                  label="Rapidez de resposta"
                  value="até 40%"
                  supporting="Diagnóstico mais curto ao unir sinais e priorizar por impacto de negócio."
                  icon={<Timer className="h-5 w-5 text-primary" />}
                  gradient="from-[hsl(var(--chart-3))]/18 via-primary/8 to-transparent"
                  data-testid="metric-rapidez"
                />
              </div>

              <div className="mt-5 glass rounded-3xl p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border/60 bg-background/30 shadow-sm">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-xl leading-tight">
                      Sintoma: muitos alertas. Causa: pouca correlação.
                    </div>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      A VERTICE centraliza ingestão, agrega contexto e aplica análise inteligente
                      para transformar telemetria em decisões — com governança e eficiência.
                    </p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                      <GlowButton
                        variant="secondary"
                        onClick={() => scrollToId("pilares")}
                        data-testid="problema-cta-pilares"
                        leftIcon={<Layers className="h-4 w-4" />}
                      >
                        Ver pilares
                      </GlowButton>
                      <GlowButton
                        variant="primary"
                        onClick={() =>
                          openLead({
                            title: "Mapear seu cenário",
                            subtitle: "Compartilhe ferramentas atuais e objetivos. Nós sugerimos um caminho técnico e econômico.",
                            source: "landing-problema-mapear",
                          })
                        }
                        data-testid="problema-cta-mapear"
                        leftIcon={<Link2 className="h-4 w-4" />}
                      >
                        Mapear cenário
                      </GlowButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PILARES */}
      <section id="pilares" className="relative py-14 sm:py-20" data-testid="section-pilares">
        <Container>
          <SectionHeading
            eyebrow="A solução"
            title="3 pilares para observabilidade centralizada — do dado ao impacto"
            description="Ingestão unificada, contexto via CMDB e análise inteligente com IA/ML/LLMs. Menos ruído, mais decisão."
            align="center"
            data-testid="heading-pilares"
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <FeatureCard
              icon={<CircuitBoard className="h-6 w-6 text-primary" />}
              title="1) Ingestão unificada e dinâmica"
              description="Colete sinais de qualquer fonte, normalize e distribua com governança — sem travar no fornecedor."
              bullets={[
                "Pipeline visual com interface gráfica",
                "Suporte a OpenTelemetry, Telegraf, Beats",
                "Agentes proprietários quando necessário",
              ]}
              tone="primary"
              data-testid="pillar-1"
            />
            <FeatureCard
              icon={<Database className="h-6 w-6 text-primary" />}
              title="2) Enriquecimento via CMDB"
              description="Telemetria sem contexto vira ruído. Com CMDB, cada sinal ganha significado de negócio."
              bullets={[
                "Relacionamento serviço → componente → dono → criticidade",
                "Priorização inteligente de incidentes",
                "Relatórios e alocação eficiente",
              ]}
              tone="accent"
              data-testid="pillar-2"
            />
            <FeatureCard
              icon={<Brain className="h-6 w-6 text-primary" />}
              title="3) Análise inteligente (IA/ML/LLMs)"
              description="Detecte padrões, antecipe riscos e gere recomendações acionáveis — com transparência e rastreabilidade."
              bullets={[
                "Insights preditivos e alertas mais precisos",
                "Sumários e explicabilidade por contexto",
                "Playbooks e sugestões de remediação",
              ]}
              tone="neutral"
              data-testid="pillar-3"
            />
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <GlowButton
              variant="primary"
              onClick={() =>
                openLead({
                  title: "Agendar demo — Pilares VERTICE",
                  subtitle: "Vamos mostrar o fluxo completo: ingestão → contexto → correlação → decisão.",
                  source: "landing-pilares-demo",
                })
              }
              data-testid="pilares-cta-demo"
              leftIcon={<Radar className="h-4 w-4" />}
            >
              Agendar demo
            </GlowButton>
            <GlowButton
              variant="secondary"
              onClick={() => scrollToId("como-funciona")}
              data-testid="pilares-cta-detalhar"
              leftIcon={<GitMerge className="h-4 w-4" />}
            >
              Ver como funciona
            </GlowButton>
          </div>
        </Container>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="relative py-14 sm:py-20" data-testid="section-como-funciona">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6 reveal-up">
              <SectionHeading
                eyebrow="Detalhes do fluxo"
                title="Do dado bruto ao diagnóstico com contexto"
                description="Uma arquitetura de observabilidade que respeita o seu ecossistema e melhora continuamente a precisão."
                data-testid="heading-como-funciona"
              />

              <div className="mt-6 space-y-4">
                {[
                  {
                    n: "01",
                    title: "Captura e normalização",
                    desc: "Colete de múltiplas fontes (OTel/Telegraf/Beats/agentes) e normalize em um modelo comum.",
                    icon: <CircuitBoard className="h-5 w-5" />,
                  },
                  {
                    n: "02",
                    title: "Pipeline visual e governança",
                    desc: "Orquestre rotas, filtros e enriquecimentos com controle de versões e visibilidade do fluxo.",
                    icon: <Layers className="h-5 w-5" />,
                  },
                  {
                    n: "03",
                    title: "Enriquecimento CMDB + negócio",
                    desc: "Adicione dono, criticidade, dependências e SLA por serviço — para priorizar com impacto.",
                    icon: <Database className="h-5 w-5" />,
                  },
                  {
                    n: "04",
                    title: "Correlação e IA",
                    desc: "Combine sinais e gere insights: provável causa raiz, padrões e próximos passos recomendados.",
                    icon: <Brain className="h-5 w-5" />,
                  },
                ].map((step) => (
                  <div
                    key={step.n}
                    className="glass rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)]"
                    data-testid={`flow-step-${step.n}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border/60 bg-background/30 shadow-sm text-primary">
                        {step.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-3">
                          <div className="font-display text-xl">{step.title}</div>
                          <div className="text-xs font-semibold text-muted-foreground rounded-full border border-border/60 bg-card/40 px-2 py-0.5">
                            {step.n}
                          </div>
                        </div>
                        <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 reveal-fade">
              <div className="rounded-3xl border border-border/60 bg-card/45 backdrop-blur-xl shadow-[var(--shadow-lift)] overflow-hidden">
                <div className="relative p-6 sm:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/18 via-transparent to-accent/10" />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Benefícios do CMDB + contexto
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/30 px-3 py-1 text-xs font-semibold">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        fluxo 1–4
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {[
                        {
                          title: "Priorização inteligente",
                          desc: "Incidentes deixam de ser “mais um alerta” e passam a ser “impacto no serviço X”.",
                          icon: <Shield className="h-5 w-5 text-primary" />,
                        },
                        {
                          title: "Alocação eficiente",
                          desc: "Encaminhamento por dono, criticidade e dependência reduz handoffs e tempo morto.",
                          icon: <GitMerge className="h-5 w-5 text-primary" />,
                        },
                        {
                          title: "Relatórios confiáveis",
                          desc: "Indicadores e custos por serviço e por unidade — com rastreabilidade.",
                          icon: <ChartNoAxesCombined className="h-5 w-5 text-primary" />,
                        },
                      ].map((b) => (
                        <div
                          key={b.title}
                          className="rounded-2xl border border-border/60 bg-background/25 p-5 shadow-sm hover:bg-muted/30 transition-colors"
                          data-testid={`cmdb-benefit-${b.title.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="grid h-10 w-10 place-items-center rounded-xl border border-border/60 bg-background/30">
                              {b.icon}
                            </div>
                            <div>
                              <div className="font-display text-lg leading-tight">{b.title}</div>
                              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                                {b.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-border/60 bg-gradient-to-r from-primary/15 via-transparent to-accent/10 p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="min-w-0">
                          <div className="font-display text-xl">Pronto para reduzir ruído e custo?</div>
                          <div className="mt-1 text-sm text-muted-foreground">
                            Uma demo focada no seu cenário — sem apresentação genérica.
                          </div>
                        </div>
                        <GlowButton
                          variant="primary"
                          onClick={() =>
                            openLead({
                              title: "Agendar demo — CMDB & contexto",
                              subtitle: "Vamos desenhar o fluxo de contexto e priorização para seu ambiente.",
                              source: "landing-cmdb-demo",
                            })
                          }
                          data-testid="cmdb-cta-demo"
                          leftIcon={<Sparkles className="h-4 w-4" />}
                        >
                          Agendar
                        </GlowButton>
                      </div>
                    </div>

                    <div className="mt-6 text-xs text-muted-foreground">
                      Nota: CMDB pode integrar com fontes existentes ou ser consolidado com governança progressiva.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Integrações abertas",
                    desc: "OpenTelemetry-first, com conectores quando necessário.",
                    icon: <Link2 className="h-4 w-4" />,
                  },
                  {
                    title: "Segurança e auditoria",
                    desc: "Governança por fluxo, com rastreabilidade e controles.",
                    icon: <Lock className="h-4 w-4" />,
                  },
                ].map((mini) => (
                  <div
                    key={mini.title}
                    className="glass rounded-2xl p-4"
                    data-testid={`mini-${mini.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-xl border border-border/60 bg-background/30 text-primary">
                        {mini.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold">{mini.title}</div>
                        <div className="text-xs text-muted-foreground leading-relaxed mt-1">
                          {mini.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-14 sm:py-20" data-testid="section-faq">
        <Container>
          <SectionHeading
            eyebrow="Perguntas frequentes"
            title="Dúvidas comuns (com respostas objetivas)"
            description="Se você está comparando ferramentas ou tentando sair da fragmentação, aqui está o que mais perguntam."
            align="center"
            data-testid="heading-faq"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="glass rounded-3xl p-4 sm:p-6">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      q: "A VERTICE substitui minhas ferramentas atuais?",
                      a: "Ela pode coexistir e unificar ingestão/correlação, reduzindo redundâncias. O caminho é incremental: integramos, medimos ganhos e então decidimos consolidação com segurança.",
                    },
                    {
                      q: "Como lida com ambientes híbridos (legado + cloud)?",
                      a: "Com conectores e agentes (padrões abertos como OpenTelemetry, Telegraf, Beats) e estratégia de normalização. O objetivo é ter um “modelo comum” de sinais, independente da origem.",
                    },
                    {
                      q: "Qual é o papel do CMDB na observabilidade?",
                      a: "Ele fornece contexto: dono, criticidade, dependências e impacto de negócio. Isso melhora roteamento, priorização e relatórios — reduzindo tempo perdido com investigação.",
                    },
                    {
                      q: "IA aqui é “mágica” ou explicável?",
                      a: "O foco é em insights acionáveis e rastreáveis: correlação, resumo, sugestão de causa e próximos passos com base em contexto e evidências dos sinais.",
                    },
                    {
                      q: "Como começo sem um projeto longo?",
                      a: "Com um piloto orientado a resultado: selecionamos serviços críticos, unificamos ingestão, adicionamos contexto e medimos redução de ruído e MTTR em semanas.",
                    },
                  ].map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger data-testid={`faq-q-${idx}`} className="text-left">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent data-testid={`faq-a-${idx}`} className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-border/60 bg-card/45 backdrop-blur-xl shadow-[var(--shadow-lift)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/18 via-transparent to-accent/10" />
                <div className="noise-overlay relative p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border/60 bg-background/30 shadow-sm">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-display text-2xl leading-tight">
                        Vamos desenhar seu “estado futuro”
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Uma conversa técnica para mapear ferramentas, custos, ruído e
                        objetivos. Saia com um plano incremental e mensurável.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {[
                      { t: "Diagnóstico rápido", d: "Identifique onde a fragmentação custa mais.", icon: <Radar className="h-4 w-4" /> },
                      { t: "Plano de piloto", d: "Metas: ruído, MTTR, custo e governança.", icon: <Layers className="h-4 w-4" /> },
                      { t: "Próximos passos", d: "Integrações e sucesso mensurável.", icon: <Shield className="h-4 w-4" /> },
                    ].map((row) => (
                      <div
                        key={row.t}
                        className="rounded-2xl border border-border/60 bg-background/25 p-4"
                        data-testid={`faq-side-${row.t.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="grid h-9 w-9 place-items-center rounded-xl border border-border/60 bg-background/30 text-primary">
                            {row.icon}
                          </div>
                          <div>
                            <div className="text-sm font-semibold">{row.t}</div>
                            <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                              {row.d}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3">
                    <GlowButton
                      variant="primary"
                      onClick={() =>
                        openLead({
                          title: "Agendar demo — Próximos passos",
                          subtitle: "Vamos mapear seu cenário e sugerir um piloto com metas claras.",
                          source: "landing-faq-cta-demo",
                        })
                      }
                      data-testid="faq-cta-demo"
                      leftIcon={<MessageSquareText className="h-4 w-4" />}
                    >
                      Agendar agora
                    </GlowButton>
                    <GlowButton
                      variant="secondary"
                      onClick={() => scrollToId("problema")}
                      data-testid="faq-cta-voltar"
                      leftIcon={<Activity className="h-4 w-4" />}
                    >
                      Rever problema
                    </GlowButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-16 sm:py-20" data-testid="section-final-cta">
        <div className="absolute inset-0 bg-mesh" />
        <div className="absolute inset-0 bg-grid opacity-55" />
        <div className="noise-overlay relative">
          <Container>
            <div className="rounded-[2rem] border border-border/60 bg-card/40 backdrop-blur-xl shadow-[var(--shadow-lift)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/22 via-transparent to-accent/10" />
              <div className="relative p-8 sm:p-12">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-8">
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.02]">
                      Observabilidade que respeita
                      <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        segurança, contexto e resultado
                      </span>
                    </h2>
                    <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      Pare de “apagar incêndio” com dados desconexos. Centralize telemetria,
                      conecte com o negócio e use IA para agir antes do impacto.
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <GlowButton
                        variant="primary"
                        onClick={() =>
                          openLead({
                            title: "Agendar demo — VERTICE",
                            subtitle: "Uma sessão curta, guiada e técnica — com foco em ganhos mensuráveis.",
                            source: "landing-final-demo",
                          })
                        }
                        data-testid="final-cta-demo"
                        leftIcon={<Radar className="h-4 w-4" />}
                      >
                        Agendar demo
                      </GlowButton>
                      <GlowButton
                        variant="secondary"
                        onClick={() =>
                          openLead({
                            title: "Falar com especialista — VERTICE",
                            subtitle: "Vamos entender seu ambiente e recomendar próximos passos com segurança.",
                            source: "landing-final-specialist",
                          })
                        }
                        data-testid="final-cta-specialist"
                        leftIcon={<Shield className="h-4 w-4" />}
                      >
                        Falar com especialista
                      </GlowButton>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="grid gap-3">
                      {[
                        { t: "Ingestão unificada", d: "OTel/Telegraf/Beats + conectores", icon: <CircuitBoard className="h-4 w-4" /> },
                        { t: "CMDB + contexto", d: "Impacto e priorização por serviço", icon: <Database className="h-4 w-4" /> },
                        { t: "IA aplicada", d: "Insights acionáveis e preditivos", icon: <Brain className="h-4 w-4" /> },
                      ].map((x) => (
                        <div
                          key={x.t}
                          className="rounded-2xl border border-border/60 bg-background/25 p-4 shadow-sm hover:bg-muted/30 transition-colors"
                          data-testid={`final-pill-${x.t.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="grid h-9 w-9 place-items-center rounded-xl border border-border/60 bg-background/30 text-primary">
                              {x.icon}
                            </div>
                            <div>
                              <div className="text-sm font-semibold">{x.t}</div>
                              <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                {x.d}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-muted-foreground">
              Segurança e observabilidade caminham juntas: visibilidade com governança e decisões rápidas com contexto.
            </div>
          </Container>
        </div>
      </section>

      <SiteFooter />

      {/* Single shared dialog instance (keeps state unified) */}
      <LeadDialog
        open={leadOpen}
        onOpenChange={setLeadOpen}
        defaultSource={leadContext.source}
        title={leadContext.title}
        subtitle={leadContext.subtitle}
      />
    </div>
  );
}
