import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowLeft, Camera, MapPin, Calendar, Mail, Phone, User, Activity,
  Heart, Dumbbell, Users, Check, Plus, X, Save, Watch, UserPlus, Sprout, LogIn, LogOut, Copy,
} from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";
import { validateUserData } from "../lib/user-schema";
import { toast } from "sonner";
import { AssociadoDashboardCard } from "../components/AssociadoDashboardCard";
import { LoyaltyProgramsCard } from "../components/LoyaltyProgramsCard";
import { sharedSandboxStore } from "../lib/shared-sandbox-store";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Meu Perfil — Netfits" },
      { name: "description", content: "Gerencie seus dados Netfits." },
    ],
  }),
  component: ProfilePage,
});

const RUNNING_SPORTS = [
  "Corrida de rua",
  "Trail running",
  "Maratona",
  "Triathlon",
  "Ciclismo",
  "Natação",
  "Caminhada",
  "Treino funcional",
  "Musculação",
  "Yoga",
];

const HEALTH_PLANS = [
  "Sem plano",
  "Amil",
  "Bradesco Saúde",
  "SulAmérica",
  "Unimed",
  "Hapvida / NotreDame",
  "Porto Seguro Saúde",
  "Allianz Saúde",
  "Care Plus",
  "Omint",
];

const GYMS = [
  "Não frequento",
  "Smart Fit",
  "Bio Ritmo",
  "Bodytech",
  "Companhia Athletica",
  "Selfit",
  "Just Fit",
  "Pratique",
  "Academia local / Independente",
];

const WEARABLES = [
  "Não uso",
  "Apple Watch",
  "Garmin Forerunner",
  "Garmin Fenix",
  "Samsung Galaxy Watch",
  "Fitbit",
  "Polar",
  "Coros",
  "Suunto",
  "Amazfit",
  "Xiaomi Mi Band",
  "Outro",
];

function ProfilePage() {
  const [activeUser, setActiveUser] = useState(sharedSandboxStore.getActiveUser());

  useEffect(() => {
    const unsubscribe = sharedSandboxStore.subscribe(() => {
      setActiveUser(sharedSandboxStore.getActiveUser());
    });
    return unsubscribe;
  }, []);

  const [form, setForm] = useState({
    name: activeUser.fullName,
    email: activeUser.identifier,
    phone: "+55 11 98765-4321",
    address: "São Paulo · SP",
    birthDate: "1995-06-15",
    sports: ["Corrida de rua", "Musculação"] as string[],
    otherSport: "",
    healthPlan: "SulAmérica",
    gym: "Smart Fit",
    coaching: "Assessoria Esportiva",
    wearable: "Apple Watch",
  });

  useEffect(() => {
    setForm((f) => ({
      ...f,
      name: activeUser.fullName,
      email: activeUser.identifier,
    }));
  }, [activeUser.id, activeUser.fullName, activeUser.identifier]);

  // Tribo gerada por este netfiter
  const myReferrals = {
    total: 12,
    active: 9,
    pending: 3,
    nfsEarned: activeUser.nfsBalance,
    bySource: [
      { label: "Compras no shop", value: Math.floor(activeUser.nfsBalance * 0.4) },
      { label: "Atividades físicas", value: Math.floor(activeUser.nfsBalance * 0.3) },
      { label: "Sono monitorado", value: Math.floor(activeUser.nfsBalance * 0.15) },
      { label: "Consultas e saúde", value: Math.floor(activeUser.nfsBalance * 0.1) },
      { label: "Vídeos e conteúdos", value: Math.floor(activeUser.nfsBalance * 0.05) },
    ],
    recent: [
      { name: "Marina Duarte", initials: "MD", date: "02/08/2026", status: "ativo" },
      { name: "Rafael Souza", initials: "RS", date: "24/07/2026", status: "ativo" },
      { name: "Bruno Tavares", initials: "BT", date: "11/07/2026", status: "pendente" },
    ],
  };

  const [saved, setSaved] = useState(false);

  function toggleSport(s: string) {
    setForm((f) => ({
      ...f,
      sports: f.sports.includes(s)
        ? f.sports.filter((x) => x !== s)
        : [...f.sports, s],
    }));
  }

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    sharedSandboxStore.updateUser(activeUser.id, {
      fullName: form.name,
      identifier: form.email,
    });
    setSaved(true);
    toast.success("Dados do perfil atualizados com sucesso!");
    setTimeout(() => setSaved(false), 3000);
  }

  const isReferred = !!activeUser.referredBy;

  return (
    <main className="min-h-screen bg-background pb-28 font-sans">
      {/* Header */}
      <section className="bg-foreground text-background px-4 pt-6 pb-16 relative">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="size-9 rounded-full bg-background/10 hover:bg-background/20 grid place-items-center transition"
          >
            <ArrowLeft className="size-5" />
          </Link>
          <div className="flex items-center gap-2">
            <User className="size-4 text-brand" />
            <span className="text-sm font-bold tracking-tight">Meu Perfil Netfits</span>
          </div>
          <Link
            to="/auth"
            className="text-xs font-bold bg-brand text-brand-foreground px-3 py-1.5 rounded-full hover:opacity-90 transition flex items-center gap-1"
          >
            <LogIn className="size-3" />
            Sessão / Trocar
          </Link>
        </div>
      </section>

      {/* Avatar overlap */}
      <section className="px-4 -mt-12">
        <div className="bg-card rounded-2xl ring-1 ring-black/5 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="size-20 rounded-full bg-gradient-to-tr from-purple-700 to-lime-400 grid place-items-center text-white text-2xl font-black shadow-lg border-2 border-background">
                {activeUser.fullName.substring(0, 2).toUpperCase()}
              </div>
              <button
                type="button"
                className="absolute bottom-0 right-0 size-7 rounded-full bg-brand text-brand-foreground grid place-items-center ring-2 ring-background"
                aria-label="Alterar foto"
              >
                <Camera className="size-3.5" />
              </button>
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg font-bold leading-tight truncate">
                {activeUser.fullName}
              </h1>
              <p className="text-xs text-muted-foreground truncate">
                {activeUser.identifier}
              </p>
              <div className="flex items-center gap-1.5 mt-2 flex-wrap">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-brand text-brand-foreground px-2 py-0.5 rounded-full">
                  {activeUser.type === "associado"
                    ? "Associado Credenciado"
                    : activeUser.type === "admin"
                    ? "Administrador"
                    : "Atleta Netfits"}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest bg-muted text-foreground/70 px-2 py-0.5 rounded-full">
                  {activeUser.nfsBalance.toLocaleString()} nfs
                </span>
                <span
                  className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full flex items-center gap-1 ${
                    isReferred
                      ? "bg-foreground text-background"
                      : "bg-muted text-foreground/70"
                  }`}
                >
                  {isReferred ? (
                    <UserPlus className="size-2.5" />
                  ) : (
                    <Sprout className="size-2.5" />
                  )}
                  {isReferred ? `Indicado por ${activeUser.referredBy}` : "Orgânico"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Painel do Associado VIP */}
      <section className="px-4 pt-5">
        <AssociadoDashboardCard />
      </section>

      {/* Programas de Fidelidade Declarados */}
      <section className="px-4 pt-4">
        <LoyaltyProgramsCard />
      </section>

      <form onSubmit={handleSave} className="px-4 pt-5 space-y-5">
        {/* Origem do cadastro */}
        <Card
          title="Origem do cadastro e Convites"
          icon={isReferred ? UserPlus : Sprout}
        >
          <div className="flex items-start gap-3">
            <div
              className={`size-10 shrink-0 rounded-xl grid place-items-center ${
                isReferred
                  ? "bg-brand text-brand-foreground"
                  : "bg-muted text-foreground/70"
              }`}
            >
              {isReferred ? (
                <UserPlus className="size-5" />
              ) : (
                <Sprout className="size-5" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold">
                {isReferred
                  ? "Cadastro realizado com código de indicação"
                  : "Cadastro orgânico"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {isReferred ? (
                  <>
                    Vincularam sua conta com o código{" "}
                    <span className="font-mono font-bold text-foreground">
                      {activeUser.referredBy}
                    </span>
                  </>
                ) : (
                  "Você se cadastrou diretamente no Netfits."
                )}
              </p>
              <div className="mt-2.5 pt-2 border-t border-border flex items-center justify-between bg-muted/60 p-2.5 rounded-xl">
                <div>
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase block">Seu código pessoal de convite:</span>
                  <span className="font-mono font-bold text-sm text-foreground">{activeUser.referralCode}</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(activeUser.referralCode);
                    toast.success(`Código ${activeUser.referralCode} copiado!`);
                  }}
                  className="bg-brand text-brand-foreground font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 hover:opacity-90"
                >
                  <Copy className="size-3" /> Copiar
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Indicações geradas */}
        <Card title="Sua tribo" icon={Users}>
          <p className="text-[11px] text-muted-foreground -mt-1">
            Netfiters cadastrados a partir da sua indicação.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <Stat value={myReferrals.total} label="Indicados" highlight />
            <Stat value={myReferrals.active} label="Ativos" />
            <Stat value={myReferrals.pending} label="Pendentes" />
          </div>
          <div className="bg-muted rounded-xl px-3 py-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground">
                Seus nfs gerados pelas atividades da tribo
              </span>
              <span className="text-sm font-bold">
                {myReferrals.nfsEarned.toLocaleString("pt-BR")} nfs
              </span>
            </div>
            <ul className="space-y-1.5 pt-1 border-t border-black/5">
              {myReferrals.bySource.map((s) => (
                <li key={s.label} className="flex items-center justify-between">
                  <span className="text-[11px] text-foreground/70">{s.label}</span>
                  <span className="text-[11px] font-semibold tabular-nums">
                    +{s.value.toLocaleString("pt-BR")} nfs
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <ul className="space-y-2">
            {myReferrals.recent.map((r) => (
              <li key={r.name} className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-foreground text-background grid place-items-center text-[10px] font-bold">
                  {r.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold truncate">{r.name}</p>
                  <p className="text-[10px] text-muted-foreground">
                    Entrou em {r.date}
                  </p>
                </div>
                <span
                  className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                    r.status === "ativo"
                      ? "bg-brand text-brand-foreground"
                      : "bg-muted text-foreground/60"
                  }`}
                >
                  {r.status}
                </span>
              </li>
            ))}
          </ul>
        </Card>


        {/* Personal */}

        <Card title="Dados pessoais" icon={User}>
          <Field label="Nome completo" icon={User}>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
          </Field>
          <div className="grid grid-cols-2 gap-2">
            <Field label="Data de nascimento" icon={Calendar}>
              <input
                type="date"
                value={form.birthDate}
                onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
                className={inputClass}
              />
            </Field>
            <Field label="Telefone" icon={Phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
            </Field>
          </div>
          <Field label="E-mail" icon={Mail}>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
          </Field>
          <Field label="Endereço" icon={MapPin}>
            <input
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="Rua, número, bairro, cidade · UF"
              className={inputClass}
            />
          </Field>
        </Card>

        {/* Sports */}
        <Card title="Esportes praticados" icon={Activity}>
          <p className="text-[11px] text-muted-foreground -mt-1 mb-1">
            Selecione todos os esportes ligados à corrida e endurance que você
            pratica.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {RUNNING_SPORTS.map((s) => {
              const active = form.sports.includes(s);
              return (
                <button
                  type="button"
                  key={s}
                  onClick={() => toggleSport(s)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full ring-1 transition flex items-center gap-1 ${
                    active
                      ? "bg-brand text-brand-foreground ring-brand"
                      : "bg-card text-foreground/80 ring-black/10 hover:ring-foreground/30"
                  }`}
                >
                  {active && <Check className="size-3" />}
                  {s}
                </button>
              );
            })}
          </div>
          <Field label="Outro esporte" icon={Plus}>
            <input
              type="text"
              value={form.otherSport}
              onChange={(e) => setForm({ ...form, otherSport: e.target.value })}
              placeholder="Ex.: escalada, remo, surf..."
              className={inputClass}
            />
          </Field>
        </Card>

        {/* Health plan */}
        <Card title="Plano de saúde" icon={Heart}>
          <SelectChips
            options={HEALTH_PLANS}
            value={form.healthPlan}
            onChange={(v) => setForm({ ...form, healthPlan: v })}
          />
        </Card>

        {/* Gym */}
        <Card title="Academia" icon={Dumbbell}>
          <SelectChips
            options={GYMS}
            value={form.gym}
            onChange={(v) => setForm({ ...form, gym: v })}
          />
        </Card>

        {/* Wearable */}
        <Card title="Wearable" icon={Watch}>
          <SelectChips
            options={WEARABLES}
            value={form.wearable}
            onChange={(v) => setForm({ ...form, wearable: v })}
          />
        </Card>

        {/* Coaching */}
        <Card title="Assessoria esportiva" icon={Users}>
          <Field label="Nome da assessoria e treinador">
            <textarea
              rows={2}
              value={form.coaching}
              onChange={(e) => setForm({ ...form, coaching: e.target.value })}
              placeholder="Ex.: Pace Assessoria — Treinador João Silva"
              className={`${inputClass} resize-none`}
            />
          </Field>
        </Card>

        {/* Save */}
        <div className="sticky bottom-24 pt-2">
          <button
            type="submit"
            className="w-full bg-foreground text-background text-sm font-bold py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-foreground/20"
          >
            {saved ? (
              <>
                <Check className="size-4" />
                Salvo!
              </>
            ) : (
              <>
                <Save className="size-4" />
                Salvar perfil
              </>
            )}
          </button>
        </div>
      </form>
    </main>
  );
}

const inputClass =
  "w-full bg-card ring-1 ring-black/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:ring-brand transition";

function Card({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof User;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-card rounded-2xl ring-1 ring-black/5 p-4 space-y-3">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-lg bg-muted grid place-items-center">
          <Icon className="size-3.5 text-foreground/70" />
        </div>
        <h2 className="text-sm font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon?: typeof User;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1 mb-1">
        {Icon && <Icon className="size-3" />}
        {label}
      </span>
      {children}
    </label>
  );
}

function SelectChips({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            type="button"
            key={o}
            onClick={() => onChange(o)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-full ring-1 transition flex items-center gap-1 ${
              active
                ? "bg-foreground text-background ring-foreground"
                : "bg-card text-foreground/80 ring-black/10 hover:ring-foreground/30"
            }`}
          >
            {active && <Check className="size-3" />}
            {o}
          </button>
        );
      })}
    </div>
  );
}

function Stat({
  value,
  label,
  highlight,
}: {
  value: number;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl px-2 py-2.5 text-center ring-1 ${
        highlight
          ? "bg-brand text-brand-foreground ring-brand"
          : "bg-muted ring-black/5"
      }`}
    >
      <p className="text-lg font-bold leading-none">{value}</p>
      <p className="text-[9px] font-bold uppercase tracking-widest mt-1 opacity-70">
        {label}
      </p>
    </div>
  );
}
