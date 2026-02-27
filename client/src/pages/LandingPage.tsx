import * as React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [leadOpen, setLeadOpen] = React.useState(false);
  const [leadContext, setLeadContext] = React.useState<{
    title: string;
    subtitle: string;
    source: string;
  }>({
    title: t("lead.heroDemo.title"),
    subtitle: t("lead.heroDemo.subtitle"),
    source: "landing-hero-demo",
  });

  const openLead = (context: Partial<typeof leadContext>) => {
    setLeadContext((p) => ({ ...p, ...context }));
    setLeadOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title={t("seo.title")}
        description={t("seo.description")}
      />

      <SiteHeader
        onPrimaryCta={() =>
          openLead({
            title: t("lead.headerDemo.title"),
            subtitle: t("lead.headerDemo.subtitle"),
            source: "landing-header-demo",
          })
        }
        onSecondaryCta={() =>
          openLead({
            title: t("lead.headerSpecialist.title"),
            subtitle: t("lead.headerSpecialist.subtitle"),
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
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_20px_rgba(var(--primary),0.2)] mb-8"
                  data-testid="hero-badge"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  {t("hero.badge")}
                </div>

                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.95] sm:leading-[0.92] tracking-tight">
                  {t("hero.title")}
                  <span className="block mt-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    {t("hero.subtitle")}
                  </span>
                </h1>

                <p className="mt-6 sm:mt-8 text-base sm:text-xl font-medium text-muted-foreground/80 leading-relaxed max-w-2xl">
                  {t("hero.text")}
                </p>

                <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowButton
                    variant="primary"
                    onClick={() =>
                      openLead({
                        title: t("lead.heroDemo.title"),
                        subtitle: t("lead.heroDemo.subtitle"),
                        source: "landing-hero-demo",
                      })
                    }
                    data-testid="hero-cta-demo"
                    leftIcon={<Radar className="h-4 w-4" />}
                    className="w-full sm:w-auto justify-center"
                  >
                    {t("hero.ctaDemo")}
                  </GlowButton>

                  <GlowButton
                    variant="secondary"
                    onClick={() =>
                      openLead({
                        title: t("lead.heroSpecialist.title"),
                        subtitle: t("lead.heroSpecialist.subtitle"),
                        source: "landing-hero-specialist",
                      })
                    }
                    data-testid="hero-cta-specialist"
                    leftIcon={<MessageSquareText className="h-4 w-4" />}
                    className="w-full sm:w-auto justify-center"
                  >
                    {t("hero.ctaSpecialist")}
                  </GlowButton>

                  <button
                    onClick={() => scrollToId("pilares")}
                    className="mt-2 sm:mt-0 sm:ml-4 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline text-center"
                    data-testid="hero-cta-learn"
                  >
                    {t("hero.ctaLearn")}
                  </button>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    { icon: <Lock className="h-4 w-4 text-primary" />, label: t("hero.pillrisk") },
                    { icon: <Timer className="h-4 w-4 text-primary" />, label: t("hero.pillmttr") },
                    { icon: <GitMerge className="h-4 w-4 text-primary" />, label: t("hero.pillcorrelation") },
                    { icon: <Sparkles className="h-4 w-4 text-primary" />, label: t("hero.pillai") },
                  ].map((it) => (
                    <div
                      key={it.label}
                      className="glass rounded-2xl px-3 py-3 border border-card-border/60 flex flex-col sm:flex-row items-center sm:gap-3 text-center sm:text-left justify-center sm:justify-start"
                      data-testid={`hero-pill-${it.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <div className="grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-xl border border-border/60 bg-background/30 shadow-sm mb-2 sm:mb-0">
                        {it.icon}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold">{it.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 reveal-fade mt-10 lg:mt-0">
                <div className="relative rounded-3xl border border-border/60 bg-card/45 backdrop-blur-xl shadow-[var(--shadow-lift)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
                  <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl floaty pulse-slow" />
                  <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-accent/16 blur-3xl floaty" style={{ animationDelay: "1.2s", animationDuration: "9s" }} />
                  <div className="relative p-5 sm:p-8">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {t("hero.dashboard.title")}
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/30 px-3 py-1 text-xs font-semibold">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        {t("hero.dashboard.status")}
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {[
                        { label: t("hero.dashboard.criticalIncidents"), value: "2", trend: "↘ 33%", tone: "accent" },
                        { label: t("hero.dashboard.correlatedSignals"), value: "86%", trend: "↗ +12%", tone: "primary" },
                        { label: t("hero.dashboard.noiseEliminated"), value: "41%", trend: "↗ +8%", tone: "primary" },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between rounded-2xl border border-border/60 bg-background/25 px-4 py-3 shadow-sm"
                          data-testid={`hero-kpi-${row.label.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          <div className="min-w-0">
                            <div className="text-sm font-semibold truncate pr-2">{row.label}</div>
                            <div className="text-xs text-muted-foreground">Últimas 24 horas</div>
                          </div>
                          <div className="text-right shrink-0">
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
                        { title: t("hero.dashboard.ingestion"), sub: t("hero.dashboard.ingestionSub"), icon: <CircuitBoard className="h-4 w-4" /> },
                        { title: t("hero.dashboard.context"), sub: t("hero.dashboard.contextSub"), icon: <Database className="h-4 w-4" /> },
                        { title: t("hero.dashboard.ai"), sub: t("hero.dashboard.aiSub"), icon: <Brain className="h-4 w-4" /> },
                        { title: t("hero.dashboard.governance"), sub: t("hero.dashboard.governanceSub"), icon: <Shield className="h-4 w-4" /> },
                      ].map((c) => (
                        <div
                          key={c.title}
                          className="rounded-2xl border border-border/60 bg-background/25 p-3 sm:p-4 shadow-sm hover:bg-muted/30 transition-colors"
                          data-testid={`hero-mini-${c.title.toLowerCase()}`}
                        >
                          <div className="flex items-center gap-2 text-sm font-semibold mb-1">
                            <span className="text-primary shrink-0">{c.icon}</span>
                            <span className="truncate">{c.title}</span>
                          </div>
                          <div className="text-xs text-muted-foreground truncate">{c.sub}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-border/60 bg-gradient-to-r from-primary/15 via-transparent to-accent/10 px-4 py-3 text-center sm:text-left">
                      <div className="text-sm font-semibold">{t("hero.dashboard.seeInAction")}</div>
                      <button
                        onClick={() =>
                          openLead({
                            title: t("lead.heroCard.title"),
                            subtitle: t("lead.heroCard.subtitle"),
                            source: "landing-hero-card-cta",
                          })
                        }
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/15 px-3 py-2 text-sm font-semibold text-foreground hover:bg-primary/20 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
                        data-testid="hero-card-cta"
                      >
                        {t("hero.dashboard.schedule")} <span aria-hidden>→</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-xs text-muted-foreground text-center sm:text-left px-2">
                  {t("hero.note")}
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
                eyebrow={t("problem.eyebrow")}
                title={t("problem.title")}
                description={t("problem.description")}
                data-testid="heading-problema"
              />

              <div className="mt-6 space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  {t("problem.p1")}
                </p>
                <p>
                  {t("problem.p2")}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {(t("problem.chips", { returnObjects: true }) as string[]).map((t) => (
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
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="hover:scale-105 transition-transform duration-300">
                  <MetricCard
                    label={t("problem.metrics.downtime.label")}
                    value={t("problem.metrics.downtime.value")}
                    supporting={t("problem.metrics.downtime.supporting")}
                    icon={<ChartNoAxesCombined className="h-5 w-5 text-primary" />}
                    gradient="from-primary/28 via-primary/10 to-transparent"
                    data-testid="metric-downtime"
                  />
                </div>
                <div className="hover:scale-105 transition-transform duration-300 sm:translate-y-6">
                  <MetricCard
                    label={t("problem.metrics.reduction.label")}
                    value={t("problem.metrics.reduction.value")}
                    supporting={t("problem.metrics.reduction.supporting")}
                    icon={<Activity className="h-5 w-5 text-primary" />}
                    gradient="from-accent/22 via-accent/10 to-transparent"
                    data-testid="metric-reducao"
                  />
                </div>
                <div className="hover:scale-105 transition-transform duration-300">
                  <MetricCard
                    label={t("problem.metrics.speed.label")}
                    value={t("problem.metrics.speed.value")}
                    supporting={t("problem.metrics.speed.supporting")}
                    icon={<Timer className="h-5 w-5 text-primary" />}
                    gradient="from-[hsl(var(--chart-3))]/18 via-primary/8 to-transparent"
                    data-testid="metric-rapidez"
                  />
                </div>
              </div>

              <div className="mt-5 glass rounded-3xl p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border/60 bg-background/30 shadow-sm">
                    <Wrench className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-xl leading-tight">
                      {t("problem.card.text")}
                    </div>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {t("problem.card.subtext")}
                    </p>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
                      <GlowButton
                        variant="secondary"
                        onClick={() => scrollToId("pilares")}
                        data-testid="problema-cta-pilares"
                        leftIcon={<Layers className="h-4 w-4" />}
                      >
                        {t("problem.card.ctaPillars")}
                      </GlowButton>
                      <GlowButton
                        variant="primary"
                        onClick={() =>
                          openLead({
                            title: t("lead.problemMap.title"),
                            subtitle: t("lead.problemMap.subtitle"),
                            source: "landing-problema-mapear",
                          })
                        }
                        data-testid="problema-cta-mapear"
                        leftIcon={<Link2 className="h-4 w-4" />}
                      >
                        {t("problem.card.ctaMap")}
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
            eyebrow={t("pillars.eyebrow")}
            title={t("pillars.title")}
            description={t("pillars.description")}
            align="center"
            data-testid="heading-pilares"
          />

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <div className="group hover:-translate-y-2 transition-transform duration-300">
              <FeatureCard
                icon={<CircuitBoard className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />}
                title={t("pillars.p1.title")}
                description={t("pillars.p1.description")}
                bullets={(t("pillars.p1.bullets", { returnObjects: true }) as string[])}
                tone="primary"
                data-testid="pillar-1"
              />
            </div>
            <div className="group hover:-translate-y-2 transition-transform duration-300 lg:-mt-6">
              <FeatureCard
                icon={<Database className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />}
                title={t("pillars.p2.title")}
                description={t("pillars.p2.description")}
                bullets={(t("pillars.p2.bullets", { returnObjects: true }) as string[])}
                tone="accent"
                data-testid="pillar-2"
              />
            </div>
            <div className="group hover:-translate-y-2 transition-transform duration-300">
              <FeatureCard
                icon={<Brain className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />}
                title={t("pillars.p3.title")}
                description={t("pillars.p3.description")}
                bullets={(t("pillars.p3.bullets", { returnObjects: true }) as string[])}
                tone="neutral"
                data-testid="pillar-3"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <GlowButton
              variant="primary"
              onClick={() =>
                openLead({
                  title: t("lead.pillarsDemo.title"),
                  subtitle: t("lead.pillarsDemo.subtitle"),
                  source: "landing-pilares-demo",
                })
              }
              data-testid="pilares-cta-demo"
              leftIcon={<Radar className="h-4 w-4" />}
            >
              {t("pillars.ctaDemo")}
            </GlowButton>
            <GlowButton
              variant="secondary"
              onClick={() => scrollToId("como-funciona")}
              data-testid="pilares-cta-detalhar"
              leftIcon={<GitMerge className="h-4 w-4" />}
            >
              {t("pillars.ctaHow")}
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
                eyebrow={t("howItWorks.eyebrow")}
                title={t("howItWorks.title")}
                description={t("howItWorks.description")}
                data-testid="heading-como-funciona"
              />

              <div className="mt-10 space-y-6 relative">
                <div className="absolute left-[28px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/30 via-primary/10 to-transparent hidden sm:block" />
                {[
                  {
                    n: "01",
                    title: t("howItWorks.steps.s1.title"),
                    desc: t("howItWorks.steps.s1.desc"),
                    icon: <CircuitBoard className="h-5 w-5" />,
                  },
                  {
                    n: "02",
                    title: t("howItWorks.steps.s2.title"),
                    desc: t("howItWorks.steps.s2.desc"),
                    icon: <Layers className="h-5 w-5" />,
                  },
                  {
                    n: "03",
                    title: t("howItWorks.steps.s3.title"),
                    desc: t("howItWorks.steps.s3.desc"),
                    icon: <Database className="h-5 w-5" />,
                  },
                  {
                    n: "04",
                    title: t("howItWorks.steps.s4.title"),
                    desc: t("howItWorks.steps.s4.desc"),
                    icon: <Brain className="h-5 w-5" />,
                  },
                ].map((step) => (
                  <div
                    key={step.n}
                    className="glass rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:scale-[1.01] relative z-10"
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
                        {t("howItWorks.benefits.eyebrow")}
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/30 px-3 py-1 text-xs font-semibold">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {t("howItWorks.benefits.badge")}
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {[
                        {
                          title: t("howItWorks.benefits.b1.title"),
                          desc: t("howItWorks.benefits.b1.desc"),
                          icon: <Shield className="h-5 w-5 text-primary" />,
                        },
                        {
                          title: t("howItWorks.benefits.b2.title"),
                          desc: t("howItWorks.benefits.b2.desc"),
                          icon: <GitMerge className="h-5 w-5 text-primary" />,
                        },
                        {
                          title: t("howItWorks.benefits.b3.title"),
                          desc: t("howItWorks.benefits.b3.desc"),
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
                          <div className="font-display text-xl">{t("howItWorks.card.title")}</div>
                          <div className="mt-1 text-sm text-muted-foreground">
                            {t("howItWorks.card.subtitle")}
                          </div>
                        </div>
                        <GlowButton
                          variant="primary"
                          onClick={() =>
                            openLead({
                              title: t("lead.cmdbDemo.title"),
                              subtitle: t("lead.cmdbDemo.subtitle"),
                              source: "landing-cmdb-demo",
                            })
                          }
                          data-testid="cmdb-cta-demo"
                          leftIcon={<Sparkles className="h-4 w-4" />}
                        >
                          {t("howItWorks.card.cta")}
                        </GlowButton>
                      </div>
                    </div>

                    <div className="mt-6 text-xs text-muted-foreground">
                      {t("howItWorks.note")}
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
            eyebrow={t("faq.eyebrow")}
            title={t("faq.title")}
            description={t("faq.description")}
            align="center"
            data-testid="heading-faq"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="glass rounded-3xl p-4 sm:p-6">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      q: t("faq.q1.q"),
                      a: t("faq.q1.a"),
                    },
                    {
                      q: t("faq.q2.q"),
                      a: t("faq.q2.a"),
                    },
                    {
                      q: t("faq.q3.q"),
                      a: t("faq.q3.a"),
                    },
                    {
                      q: t("faq.q4.q"),
                      a: t("faq.q4.a"),
                    },
                    {
                      q: t("faq.q5.q"),
                      a: t("faq.q5.a"),
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
                        {t("faq.sidebar.title")}
                      </div>
                      <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {t("faq.sidebar.text")}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {[
                      { t: t("faq.sidebar.rows.r1.title"), d: t("faq.sidebar.rows.r1.desc"), icon: <Radar className="h-4 w-4" /> },
                      { t: t("faq.sidebar.rows.r2.title"), d: t("faq.sidebar.rows.r2.desc"), icon: <Layers className="h-4 w-4" /> },
                      { t: t("faq.sidebar.rows.r3.title"), d: t("faq.sidebar.rows.r3.desc"), icon: <Shield className="h-4 w-4" /> },
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
                          title: t("lead.faqDemo.title"),
                          subtitle: t("lead.faqDemo.subtitle"),
                          source: "landing-faq-cta-demo",
                        })
                      }
                      data-testid="faq-cta-demo"
                      leftIcon={<MessageSquareText className="h-4 w-4" />}
                    >
                      {t("faq.sidebar.ctaSchedule")}
                    </GlowButton>
                    <GlowButton
                      variant="secondary"
                      onClick={() => scrollToId("problema")}
                      data-testid="faq-cta-voltar"
                      leftIcon={<Activity className="h-4 w-4" />}
                    >
                      {t("faq.sidebar.ctaBack")}
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
                      {t("finalCta.title")}
                      <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        {t("finalCta.highlight")}
                      </span>
                    </h2>
                    <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                      {t("finalCta.text")}
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <GlowButton
                        variant="primary"
                        onClick={() =>
                          openLead({
                            title: t("lead.finalDemo.title"),
                            subtitle: t("lead.finalDemo.subtitle"),
                            source: "landing-final-demo",
                          })
                        }
                        data-testid="final-cta-demo"
                        leftIcon={<Radar className="h-4 w-4" />}
                      >
                        {t("finalCta.ctaDemo")}
                      </GlowButton>
                      <GlowButton
                        variant="secondary"
                        onClick={() =>
                          openLead({
                            title: t("lead.finalSpecialist.title"),
                            subtitle: t("lead.finalSpecialist.subtitle"),
                            source: "landing-final-specialist",
                          })
                        }
                        data-testid="final-cta-specialist"
                        leftIcon={<Shield className="h-4 w-4" />}
                      >
                        {t("finalCta.ctaSpecialist")}
                      </GlowButton>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="grid gap-3">
                      {[
                        { t: t("finalCta.pills.ingestion.title"), d: t("finalCta.pills.ingestion.desc"), icon: <CircuitBoard className="h-4 w-4" /> },
                        { t: t("finalCta.pills.cmdb.title"), d: t("finalCta.pills.cmdb.desc"), icon: <Database className="h-4 w-4" /> },
                        { t: t("finalCta.pills.ai.title"), d: t("finalCta.pills.ai.desc"), icon: <Brain className="h-4 w-4" /> },
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
              {t("finalCta.note")}
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
