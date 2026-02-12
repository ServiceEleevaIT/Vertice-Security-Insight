import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useCreateLead } from "@/hooks/use-leads";
import { GlowButton } from "@/components/GlowButton";
import { Loader2, Send, ShieldCheck } from "lucide-react";

type LeadDialogProps = {
  trigger?: React.ReactNode;
  defaultSource?: string;
  title?: string;
  subtitle?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const fieldBase =
  "w-full rounded-xl border-2 border-border bg-background/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/80 shadow-sm " +
  "focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition-all";

export function LeadDialog({
  trigger,
  defaultSource = "landing",
  title = "Agendar uma demo",
  subtitle = "Conte um pouco sobre o seu cenário. Respondemos rápido — com contexto e próximos passos.",
  open,
  onOpenChange,
}: LeadDialogProps) {
  const controlled = typeof open === "boolean";
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isOpen = controlled ? open : internalOpen;

  const setOpen = (v: boolean) => {
    if (controlled) onOpenChange?.(v);
    else setInternalOpen(v);
  };

  const { toast } = useToast();
  const createLead = useCreateLead();

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    message: "",
    source: defaultSource,
  });

  React.useEffect(() => {
    setForm((p) => ({ ...p, source: defaultSource }));
  }, [defaultSource]);

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((p) => ({ ...p, [key]: value }));
    };

  const canSubmit = form.name.trim().length >= 2 && form.company.trim().length >= 2 && form.email.includes("@");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) {
      toast({
        title: "Confira os campos obrigatórios",
        description: "Nome, e-mail e empresa precisam estar preenchidos corretamente.",
        variant: "destructive",
      });
      return;
    }

    try {
      await createLead.mutateAsync({
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        role: form.role.trim() || undefined,
        phone: form.phone.trim() || undefined,
        message: form.message.trim() || undefined,
        source: form.source || "landing",
      });

      toast({
        title: "Recebido com sucesso",
        description: "Obrigado! Em breve um especialista entrará em contato.",
      });

      setForm({
        name: "",
        email: "",
        company: "",
        role: "",
        phone: "",
        message: "",
        source: defaultSource,
      });
      setOpen(false);
    } catch (err: any) {
      toast({
        title: "Não foi possível enviar",
        description: err?.message || "Tente novamente em instantes.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      {trigger ? (
        <DialogTrigger asChild>{trigger}</DialogTrigger>
      ) : null}

      <DialogContent className="max-w-xl overflow-hidden rounded-3xl border border-border/70 bg-background/70 p-0 shadow-2xl backdrop-blur-xl">
        <div className="relative">
          <div className="absolute inset-0 bg-mesh" />
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="noise-overlay relative p-6 sm:p-7">
            <DialogHeader>
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl border border-border/70 bg-card/40 shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <DialogTitle className="font-display text-2xl">{title}</DialogTitle>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{subtitle}</p>
                </div>
              </div>
            </DialogHeader>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={onChange("name")}
                    placeholder="Seu nome"
                    className={fieldBase}
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={onChange("email")}
                    placeholder="voce@empresa.com"
                    className={fieldBase}
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa *</Label>
                  <Input
                    id="company"
                    value={form.company}
                    onChange={onChange("company")}
                    placeholder="Nome da empresa"
                    className={fieldBase}
                    data-testid="input-company"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Cargo (opcional)</Label>
                  <Input
                    id="role"
                    value={form.role}
                    onChange={onChange("role")}
                    placeholder="Ex.: SRE, Infra, TI"
                    className={fieldBase}
                    data-testid="input-role"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone (opcional)</Label>
                  <Input
                    id="phone"
                    value={form.phone}
                    onChange={onChange("phone")}
                    placeholder="+55 (11) 9xxxx-xxxx"
                    className={fieldBase}
                    data-testid="input-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="source">Origem</Label>
                  <Input
                    id="source"
                    value={form.source}
                    onChange={onChange("source")}
                    placeholder="landing"
                    className={fieldBase}
                    data-testid="input-source"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem (opcional)</Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Contexto: ferramentas atuais, dores, objetivos, SLAs..."
                  className={fieldBase + " min-h-[110px] resize-none"}
                  data-testid="input-message"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs text-muted-foreground leading-relaxed">
                  Ao enviar, você concorda em receber contato sobre a demo e materiais técnicos.
                </div>

                <GlowButton
                  type="submit"
                  disabled={createLead.isPending || !canSubmit}
                  leftIcon={createLead.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  data-testid="btn-submit-lead"
                >
                  {createLead.isPending ? "Enviando..." : "Enviar"}
                </GlowButton>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
