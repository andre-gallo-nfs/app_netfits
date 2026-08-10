import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft, Camera, MapPin, Calendar, Mail, Phone, User, Activity,
  Heart, Dumbbell, Users, Check, Plus, X, Save, Watch, UserPlus, Sprout,
} from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";
import { validateUserData } from "./user-schema";
import { toast } from "sonner";
import { AssociadoDashboardCard } from "./AssociadoDashboardCard";

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
  const [form, setForm] = useState({
    name: "Karina Lima",
    email: "karina.lima@email.com",
    phone: "+55 11 98765-4321",
    address: "Rua Augusta, 1200 — Consolação, São Paulo · SP",
    birthDate: "1985-03-14",
    sports: ["Corrida de rua", "Maratona", "Ciclismo", "Musculação"] as string[],
    otherSport: "",
    healthPlan: "SulAmérica",
    gym: "Smart Fit",
    coaching: "Pace Assessoria Esportiva — Treinador Rafael Souza",
    wearable: "Apple Watch",
  });

  // Origem do cadastro (mock): "referral" quando veio por convite de outro netfiter
  const signup = {
    type: "referral" as "organic" | "referral",
    referrerName: "Kite Larsen",
    referrerCode: "KITE-7X2",
    date: "12/03/2026",
  };

  // Tribo gerada por este netfiter (mock)
  const myReferrals = {
    total: 12,
    active: 9,
    pending: 3,
    nfsEarned: 4820,
    bySource: [
      { label: "Compras no shop", value: 1840 },
      { label: "Atividades físicas", value: 1250 },
      { label: "Sono monitorado", value: 720 },
      { label: "Consultas e saúde", value: 610 },
      { label: "Vídeos e conteúdos", value: 400 },
    ],
    recent: [
      { name: "Marina Duarte", initials: "MD", date: "02/07/2026", status: "ativo" },
      { name: "Rafael Souza", initials: "RS", date: "24/06/2026", status: "ativo" },
      { name: "Bruno Tavares", initials: "BT", date: "11/06/2026", status: "pendente" },
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
    const payload = {
      id: "a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11",
      fullName: form.name,
      email: form.email,
      phone: form.phone,
      birthDate: form.birthDate,
      address: form.address,
      sports: form.sports.length > 0 ? form.sports : ["Corrida de rua"],
      healthPlan: form.healthPlan,
      gym: form.gym,
      wearable: form.wearable,
      coaching: form.coaching,
      consentTermsAccepted: true,
      consentWearablesData: true,
      consentPartnersOffers: true,
    };

    const validation = validateUserData(payload);
    if (!validation.isValid) {
      toast.error("Erro na validação de dados de cadastro");
      return;
    }

    setSaved(true);
    toast.success("Dados de cadastro validados e salvos com integridade!");
    setTimeout(() => setSaved(false), 2400);
  }

  return (
    <div className="pb-8">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-foreground to-foreground/80 text-background px-4 pt-5 pb-16">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="size-9 rounded-full bg-background/15 backdrop-blur grid place-items-center"
            aria-label="Voltar"
          >
            <ArrowLeft className="size-4" />
          </Link>
          <p className="text-[10px] font-bold uppercase tracking-widest text-background/70">
            Meu Perfil
          </p>
          <div className="size-9" />
        </div>
      </section>

      {/* Avatar overlap */}
      <section className="px-4 -mt-12">
        <div className="bg-card rounded-2xl ring-1 ring-black/5 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={profileAvatar}
                alt="Foto de Karina Lima"
                width={88}
                height={88}
                className="size-22 w-22 h-22 rounded-full object-cover ring-4 ring-background shadow-lg"
                style={{ width: 88, height: 88 }}
              />
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
                {form.name}
              </h1>
              <p className="text-xs text-muted-foreground truncate">
                {form.email}
              </p>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="text-[9px] font-bold uppercase tracking-widest bg-brand text-brand-foreground px-2 py-0.5 rounded-full">
                  Atleta
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest bg-muted text-foreground/70 px-2 py-0.5 rounded-full">
                  25.575 nfs
                </span>
                <span
                  className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full flex items-center gap-1 ${
                    signup.type === "referral"
                      ? "bg-foreground text-background"
                      : "bg-muted text-foreground/70"
                  }`}
                >
                  {signup.type === "referral" ? (
                    <UserPlus className="size-2.5" />
                  ) : (
                    <Sprout className="size-2.5" />
                  )}
                  {signup.type === "referral" ? "Indicado" : "Orgânico"}
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

      <form onSubmit={handleSave} className="px-4 pt-5 space-y-5">
        {/* Origem do cadastro */}
        <Card
          title="Origem do cadastro"
          icon={signup.type === "referral" ? UserPlus : Sprout}
        >
          <div className="flex items-start gap-3">
            <div
              className={`size-10 shrink-0 rounded-xl grid place-items-center ${
                signup.type === "referral"
                  ? "bg-brand text-brand-foreground"
                  : "bg-muted text-foreground/70"
              }`}
            >
              {signup.type === "referral" ? (
                <UserPlus className="size-5" />
              ) : (
                <Sprout className="size-5" />
              )}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold">
                {signup.type === "referral"
                  ? "Cadastro por indicação"
                  : "Cadastro orgânico"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {signup.type === "referral" ? (
                  <>
                    Indicado por{" "}
                    <span className="font-semibold text-foreground">
                      {signup.referrerName}
                    </span>{" "}
                    · código{" "}
                    <span className="font-mono font-semibold text-foreground">
                      {signup.referrerCode}
                    </span>
                  </>
                ) : (
                  "Este netfiter chegou por conta própria, sem link de convite."
                )}
              </p>
              <p className="text-[11px] text-muted-foreground mt-1">
                Entrou em {signup.date}
              </p>
            </div>
          </div>
          {signup.type === "referral" && (
            <p className="text-[11px] text-muted-foreground bg-muted rounded-xl px-3 py-2">
              Faz parte da tribo de {signup.referrerName} — sempre que você
              acumula netfits, ela também recebe.
            </p>
          )}
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
    </div>
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
