import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft, Camera, MapPin, Calendar, Mail, Phone, User, Activity,
  Heart, Dumbbell, Users, Check, Plus, X, Save, Watch, UserPlus, Sprout, LogOut, Copy, Upload, Image as ImageIcon, Trash2, Sparkles, Share2, CreditCard, Lock, Shield, Building2,
  FileText, AlertTriangle, ExternalLink, Download
} from "lucide-react";
import { validateUserData } from "../lib/user-schema";
import { toast } from "sonner";
import { LoyaltyProgramsCard } from "../components/LoyaltyProgramsCard";
import { sharedSandboxStore } from "../lib/shared-sandbox-store";
import { appLockStore } from "../lib/app-lock-store";
import { authStore } from "../lib/auth-store";
import { isValidCPF } from "../lib/utils";
import { badgesStore } from "../lib/badges-store";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Meu Perfil — Netfits" },
      { name: "description", content: "Gerencie seus dados Netfits." },
    ],
  }),
  component: ProfilePage,
});

const PRESET_AVATARS = [
  { id: "runner", label: "Corrida / Marathon", url: "https://images.unsplash.com/photo-1483721074892-4a85dd908069?w=200&auto=format&fit=crop&q=80" },
  { id: "gym", label: "Musculação / Gym", url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=200&auto=format&fit=crop&q=80" },
  { id: "swim", label: "Natação / Swimmer", url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=200&auto=format&fit=crop&q=80" },
  { id: "personal", label: "Personal Trainer", url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=200&auto=format&fit=crop&q=80" },
  { id: "crossfit", label: "Treino Funcional", url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&auto=format&fit=crop&q=80" },
  { id: "yoga", label: "Yoga & Wellness", url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&auto=format&fit=crop&q=80" },
];

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
  "Outro",
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

export const formatBirthDateForDisplay = (val?: string) => {
  if (!val) return "";
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(val)) return val;
  if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
    const [y, m, d] = val.split("-");
    return `${d}/${m}/${y}`;
  }
  return val;
};

export const formatBirthDateMask = (val: string) => {
  let v = val.replace(/\D/g, "");
  if (v.length > 8) v = v.slice(0, 8);
  if (v.length > 4) {
    return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
  } else if (v.length > 2) {
    return `${v.slice(0, 2)}/${v.slice(2)}`;
  }
  return v;
};

export const formatPhoneMask = (val: string) => {
  let v = val.replace(/\D/g, "");
  if (v.length > 11) v = v.slice(0, 11);
  if (v.length > 6) {
    return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
  } else if (v.length > 2) {
    return `(${v.slice(0, 2)}) ${v.slice(2)}`;
  }
  return v;
};

export const formatCpfMask = (val: string) => {
  let v = val.replace(/\D/g, "");
  if (v.length > 11) v = v.slice(0, 11);
  if (v.length > 9) {
    return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6, 9)}-${v.slice(9)}`;
  } else if (v.length > 6) {
    return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6)}`;
  } else if (v.length > 3) {
    return `${v.slice(0, 3)}.${v.slice(3)}`;
  }
  return v;
};

export const formatCepMask = (val: string) => {
  let v = val.replace(/\D/g, "");
  if (v.length > 8) v = v.slice(0, 8);
  if (v.length > 5) {
    return `${v.slice(0, 5)}-${v.slice(5)}`;
  }
  return v;
};

function ProfilePage() {
  const navigate = useNavigate();
  const [activeUser, setActiveUser] = useState(sharedSandboxStore.getActiveUser());
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState<"terms" | "privacy" | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!sharedSandboxStore.hasActiveSession()) {
      navigate({ to: "/auth" });
      return;
    }
    const unsubscribe = sharedSandboxStore.subscribe(() => {
      setActiveUser(sharedSandboxStore.getActiveUser());
    });
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error("Por favor, selecione uma imagem de até 10MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const rawData = event.target?.result as string;
      if (!rawData) return;
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const size = 256;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const minDim = Math.min(img.width, img.height);
          const sx = (img.width - minDim) / 2;
          const sy = (img.height - minDim) / 2;
          ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, size, size);
          const compressed = canvas.toDataURL("image/jpeg", 0.85);
          sharedSandboxStore.updateUser(activeUser.id, { avatarUrl: compressed });
          setShowAvatarModal(false);
          toast.success("📸 Sua foto de perfil foi salva e atualizada com sucesso!");
        }
      };
      img.src = rawData;
    };
    reader.readAsDataURL(file);
  };

  const handlePresetSelect = (avatarUrl: string) => {
    sharedSandboxStore.updateUser(activeUser.id, { avatarUrl });
    setShowAvatarModal(false);
    toast.success("✨ Avatar alterado com sucesso!");
  };

  const handleRemoveAvatar = () => {
    sharedSandboxStore.updateUser(activeUser.id, { avatarUrl: undefined });
    setShowAvatarModal(false);
    toast.info("Avatar removido. Exibindo suas iniciais.");
  };

  const getInitialForm = () => {
    let backup: any = {};
    if (typeof window !== "undefined") {
      try {
        const rawBackup = localStorage.getItem(`netfits_profile_saved_${activeUser.id}`);
        if (rawBackup) {
          backup = JSON.parse(rawBackup);
        }
      } catch {}
    }

    const resolvedStreet = activeUser.street || backup.street || "";
    const resolvedNumber = activeUser.number || backup.number || "";
    const resolvedZipcode = activeUser.zipcode || backup.zipcode || "";
    const resolvedComplement = activeUser.complement !== undefined ? activeUser.complement : (backup.complement || "");
    const resolvedNeighborhood = activeUser.neighborhood || backup.neighborhood || "";
    const resolvedCity = activeUser.city || backup.city || "";
    const resolvedShortState = (activeUser.shortState || backup.shortState || "SP").toUpperCase();
    const resolvedState = activeUser.state || backup.state || (resolvedShortState === "SP" ? "São Paulo" : resolvedShortState);
    const resolvedAddress = activeUser.address || backup.address || (resolvedStreet ? `${resolvedStreet}${resolvedNumber ? `, ${resolvedNumber}` : ""}${resolvedNeighborhood ? ` - ${resolvedNeighborhood}` : ""}${resolvedCity ? `, ${resolvedCity}` : ""}${resolvedShortState ? ` · ${resolvedShortState}` : ""}` : "");

    return {
      name: activeUser.fullName || backup.fullName || backup.name || "",
      email: activeUser.email || activeUser.identifier || backup.email || "",
      cpf: formatCpfMask(activeUser.cpf || backup.cpf || ""),
      phone: formatPhoneMask(activeUser.phone || backup.phone || ""),
      zipcode: formatCepMask(resolvedZipcode),
      street: resolvedStreet,
      number: resolvedNumber,
      complement: resolvedComplement,
      neighborhood: resolvedNeighborhood,
      city: resolvedCity,
      state: resolvedState,
      shortState: resolvedShortState,
      address: resolvedAddress,
      birthDate: formatBirthDateForDisplay(activeUser.birthDate || backup.birthDate || ""),
      sports: ((Array.isArray(activeUser.sports) && activeUser.sports.length > 0) ? activeUser.sports : (backup.sports || [])) as string[],
      otherSport: activeUser.otherSport || backup.otherSport || "",
      healthPlan: activeUser.healthPlan || backup.healthPlan || "Sem plano",
      otherHealthPlan: activeUser.otherHealthPlan || backup.otherHealthPlan || "",
      gym: activeUser.gym || backup.gym || "Não frequento",
      coaching: activeUser.coaching || backup.coaching || "",
      wearable: activeUser.wearable || backup.wearable || "Não uso",
      otherWearable: activeUser.otherWearable || backup.otherWearable || "",
    };
  };

  const [form, setForm] = useState(getInitialForm);

  useEffect(() => {
    setForm((prev) => {
      let backup: any = {};
      if (typeof window !== "undefined") {
        try {
          const raw = localStorage.getItem(`netfits_profile_saved_${activeUser.id}`);
          if (raw) backup = JSON.parse(raw);
        } catch {}
      }
      return {
        ...prev,
        name: activeUser.fullName || prev.name || backup.name || backup.fullName || "",
        email: activeUser.email || activeUser.identifier || prev.email || backup.email || "",
        cpf: activeUser.cpf ? formatCpfMask(activeUser.cpf) : (prev.cpf || (backup.cpf ? formatCpfMask(backup.cpf) : "")),
        phone: activeUser.phone ? formatPhoneMask(activeUser.phone) : (prev.phone || (backup.phone ? formatPhoneMask(backup.phone) : "")),
        zipcode: activeUser.zipcode ? formatCepMask(activeUser.zipcode) : (prev.zipcode || (backup.zipcode ? formatCepMask(backup.zipcode) : "")),
        street: activeUser.street || prev.street || backup.street || "",
        number: activeUser.number || prev.number || backup.number || "",
        complement: activeUser.complement !== undefined ? activeUser.complement : (prev.complement || backup.complement || ""),
        neighborhood: activeUser.neighborhood || prev.neighborhood || backup.neighborhood || "",
        city: activeUser.city || prev.city || backup.city || "",
        state: activeUser.state || prev.state || backup.state || "",
        shortState: activeUser.shortState ? activeUser.shortState.toUpperCase() : (prev.shortState || backup.shortState || "SP"),
        address: activeUser.address || prev.address || backup.address || (activeUser.street ? `${activeUser.street}${activeUser.number ? `, ${activeUser.number}` : ""}${activeUser.neighborhood ? ` - ${activeUser.neighborhood}` : ""}${activeUser.city ? `, ${activeUser.city}` : ""}${activeUser.shortState ? ` · ${activeUser.shortState}` : ""}` : ""),
        birthDate: activeUser.birthDate ? formatBirthDateForDisplay(activeUser.birthDate) : (prev.birthDate || (backup.birthDate ? formatBirthDateForDisplay(backup.birthDate) : "")),
        sports: (Array.isArray(activeUser.sports) && activeUser.sports.length > 0 ? activeUser.sports : (prev.sports.length > 0 ? prev.sports : (backup.sports || []))) as string[],
        otherSport: activeUser.otherSport || prev.otherSport || backup.otherSport || "",
        healthPlan: activeUser.healthPlan || prev.healthPlan || backup.healthPlan || "Sem plano",
        otherHealthPlan: activeUser.otherHealthPlan || prev.otherHealthPlan || backup.otherHealthPlan || "",
        gym: activeUser.gym || prev.gym || backup.gym || "Não frequento",
        coaching: activeUser.coaching || prev.coaching || backup.coaching || "",
        wearable: activeUser.wearable || prev.wearable || backup.wearable || "Não uso",
        otherWearable: activeUser.otherWearable || prev.otherWearable || backup.otherWearable || "",
      };
    });
  }, [activeUser.id, activeUser.address, activeUser.street, activeUser.number, activeUser.zipcode, activeUser.cpf, activeUser.phone, activeUser.birthDate]);

  const handleCepChange = async (cepInput: string) => {
    const masked = formatCepMask(cepInput);
    setForm((prev) => ({ ...prev, zipcode: masked }));

    const digits = masked.replace(/\D/g, "");
    if (digits.length === 8) {
      try {
        const res = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
        if (res.ok) {
          const data = await res.json();
          if (!data.erro) {
            setForm((prev) => {
              const updatedStreet = data.logradouro || prev.street;
              const updatedNeighborhood = data.bairro || prev.neighborhood;
              const updatedCity = data.localidade || prev.city;
              const updatedShortState = (data.uf || prev.shortState).toUpperCase();
              const updatedState = data.estado || data.uf || prev.state;
              const fullAddr = `${updatedStreet}${prev.number ? `, ${prev.number}` : ""}${updatedNeighborhood ? ` - ${updatedNeighborhood}` : ""}${updatedCity ? `, ${updatedCity}` : ""}${updatedShortState ? ` · ${updatedShortState}` : ""}`;
              return {
                ...prev,
                street: updatedStreet,
                neighborhood: updatedNeighborhood,
                city: updatedCity,
                shortState: updatedShortState,
                state: updatedState,
                address: fullAddr,
              };
            });
            toast.success(`📍 Endereço preenchido via CEP: ${data.localidade}/${data.uf}!`);
          }
        }
      } catch {
        // Ignora se indisponível
      }
    }
  };

  // Tribo gerada dinamicamente pelo banco de dados definitivo (zero mocks)
  const allUsers = sharedSandboxStore.getUsers();
  const triboMembers = allUsers.filter(
    (u) =>
      u.id !== activeUser.id &&
      ((u.referredBy && u.referredBy === activeUser.referralCode) ||
        (u.associatedWith && u.associatedWith === activeUser.referralCode))
  );

  const referralTxs = sharedSandboxStore.getUserTransactions(activeUser.id).filter(
    (tx) => tx.category === "referral" || tx.category === "associado_bonus"
  );
  const nfsEarnedTribo = referralTxs.reduce((sum, tx) => sum + (tx.amount > 0 ? tx.amount : 0), 0);

  const myReferrals = {
    total: triboMembers.length,
    active: triboMembers.filter((m) => m.nfsBalance > 0).length,
    pending: triboMembers.filter((m) => m.nfsBalance === 0).length,
    nfsEarned: nfsEarnedTribo,
    members: triboMembers.map((m) => {
      const parts = (m.fullName || "Atleta").trim().split(" ");
      const initials = (parts[0]?.[0] || "A") + (parts[parts.length - 1]?.[0] || "N");
      const dateFormatted = m.registeredAt
        ? new Date(m.registeredAt).toLocaleDateString("pt-BR")
        : "Recente";
      return {
        name: m.fullName,
        initials: initials.toUpperCase(),
        date: dateFormatted,
        status: m.nfsBalance > 0 ? "ativo" : "pendente",
      };
    }),
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

  const checklistItems = [
    { id: "name", label: "Nome", done: Boolean(form.name && form.name.trim().length >= 3) },
    { id: "birthDate", label: "Nascimento", done: Boolean(form.birthDate && form.birthDate.trim().length >= 8) },
    { id: "phone", label: "Celular", done: Boolean(form.phone && form.phone.replace(/\D/g, "").length >= 10) },
    { id: "cpf", label: "CPF", done: Boolean(form.cpf && form.cpf.replace(/\D/g, "").length === 11) },
    {
      id: "address",
      label: "Endereço",
      done: Boolean(
        (form.address && form.address.trim().length >= 5) ||
        (form.street && form.number && form.zipcode.replace(/\D/g, "").length === 8)
      ),
    },
    { id: "sports", label: "Modalidades", done: Boolean(Array.isArray(form.sports) && form.sports.length > 0) },
    { id: "photo", label: "Foto / Avatar", done: Boolean(activeUser.avatarUrl) },
  ];

  const completedChecklistCount = checklistItems.filter((i) => i.done).length;
  const profileCompletionPct = Math.round((completedChecklistCount / checklistItems.length) * 100);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    const cleanPhone = form.phone.trim();
    const cleanCpf = form.cpf.trim();
    const digitsCpf = cleanCpf.replace(/\D/g, "");

    if (digitsCpf.length > 0 && !isValidCPF(digitsCpf)) {
      toast.error("CPF informado é inválido. Por favor, verifique os 11 dígitos digitados.");
      return;
    }

    const cleanBirth = form.birthDate.trim();
    const cleanZipcode = form.zipcode.replace(/\D/g, "");
    const cleanStreet = form.street.trim();
    const cleanNumber = form.number.trim();
    const cleanComplement = form.complement.trim();
    const cleanNeighborhood = form.neighborhood.trim();
    const cleanCity = form.city.trim();
    const cleanShortState = (form.shortState || "SP").trim().toUpperCase();
    const cleanState = form.state.trim() || (cleanShortState === "SP" ? "São Paulo" : cleanShortState);
    const formattedAddress = cleanStreet
      ? `${cleanStreet}, ${cleanNumber || "S/N"}${cleanComplement ? ` (${cleanComplement})` : ""}${cleanNeighborhood ? ` - ${cleanNeighborhood}` : ""}${cleanCity ? `, ${cleanCity}` : ""}${cleanShortState ? ` · ${cleanShortState}` : ""}`
      : form.address.trim();

    const targetUserId = activeUser.id;

    if (typeof window !== "undefined") {
      try {
        const payloadToSave = {
          id: targetUserId,
          fullName: form.name.trim(),
          email: form.email.trim(),
          cpf: cleanCpf,
          phone: cleanPhone,
          zipcode: cleanZipcode,
          street: cleanStreet,
          number: cleanNumber,
          complement: cleanComplement,
          neighborhood: cleanNeighborhood,
          city: cleanCity,
          state: cleanState,
          shortState: cleanShortState,
          address: formattedAddress,
          birthDate: cleanBirth,
          sports: form.sports,
          otherSport: form.otherSport.trim(),
          healthPlan: form.healthPlan,
          otherHealthPlan: form.otherHealthPlan.trim(),
          gym: form.gym,
          coaching: form.coaching.trim(),
          wearable: form.wearable,
          otherWearable: form.otherWearable.trim(),
        };
        localStorage.setItem(`netfits_profile_saved_${targetUserId}`, JSON.stringify(payloadToSave));
        localStorage.setItem("netfits_production_session_v2", targetUserId);
      } catch (err) {
        console.warn("[Profile] Local storage backup warning:", err);
      }
    }

    sharedSandboxStore.updateUser(targetUserId, {
      fullName: form.name.trim(),
      identifier: form.email.trim(),
      email: form.email.trim(),
      cpf: cleanCpf,
      phone: cleanPhone,
      zipcode: cleanZipcode,
      street: cleanStreet,
      number: cleanNumber,
      complement: cleanComplement,
      neighborhood: cleanNeighborhood,
      city: cleanCity,
      state: cleanState,
      shortState: cleanShortState,
      address: formattedAddress,
      birthDate: cleanBirth,
      sports: form.sports,
      otherSport: form.otherSport.trim(),
      healthPlan: form.healthPlan,
      otherHealthPlan: form.otherHealthPlan.trim(),
      gym: form.gym,
      coaching: form.coaching.trim(),
      wearable: form.wearable,
      otherWearable: form.otherWearable.trim(),
    });

    // Atualiza imediatamente o estado de activeUser no componente para evitar descompasso de renderização
    const freshUser = sharedSandboxStore.getActiveUser();
    setActiveUser(freshUser);

    // Mantém credenciais sincronizadas no authStore para login e desbloqueio por senha
    authStore.recordRegisteredUser({
      id: targetUserId,
      fullName: form.name.trim(),
      email: form.email.trim(),
      cpf: cleanCpf,
      phone: cleanPhone,
      passwordHash: activeUser.passwordHash,
    });

    // Sincroniza imediatamente com o servidor para disponibilizar CPF e endereço estruturado para a Loja Oficial
    try {
      await fetch("/api/users-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: {
            id: targetUserId,
            fullName: form.name.trim(),
            email: form.email.trim(),
            cpf: cleanCpf,
            phone: cleanPhone,
            zipcode: cleanZipcode,
            street: cleanStreet,
            number: cleanNumber,
            complement: cleanComplement,
            neighborhood: cleanNeighborhood,
            city: cleanCity,
            state: cleanState,
            shortState: cleanShortState,
            address: formattedAddress,
            birthDate: cleanBirth,
          },
        }),
      });
    } catch (err) {
      console.warn("[Profile] Server sync warning:", err);
    }

    setSaved(true);
    badgesStore.evaluate();
    toast.success("Dados do perfil atualizados e salvos com sucesso no banco de dados!");
    setTimeout(() => setSaved(false), 3000);
  }

  const isReferred = !!activeUser.referredBy;

  return (
    <div className="min-h-screen bg-background pb-28 font-sans">
      {/* Header com Safe Area Superior */}
      <header className="bg-foreground text-background px-4 pt-[calc(env(safe-area-inset-top,0px)+1rem)] pb-16 relative" role="banner">
        <div className="flex items-center justify-between">
          <Link
            to="/feed"
            aria-label="Voltar para o Feed"
            className="size-9 rounded-full bg-background/10 hover:bg-background/20 grid place-items-center transition"
          >
            <ArrowLeft className="size-5" />
          </Link>
          <div className="flex items-center gap-2">
            <User className="size-4 text-brand" />
            <h1 className="text-sm font-bold tracking-tight">Meu Perfil Netfits</h1>
          </div>
          <div className="size-9" aria-hidden="true" />
        </div>
      </header>

      {/* Avatar overlap */}
      <section className="px-4 -mt-12">
        <div className="bg-card rounded-2xl ring-1 ring-black/5 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              {activeUser.avatarUrl ? (
                <img
                  src={activeUser.avatarUrl}
                  alt={activeUser.fullName}
                  className="size-20 rounded-full object-cover shadow-lg border-2 border-background ring-2 ring-purple-500/30"
                />
              ) : (
                <div className="size-20 rounded-full bg-gradient-to-tr from-purple-700 to-lime-400 grid place-items-center text-white text-2xl font-black shadow-lg border-2 border-background">
                  {activeUser.fullName.substring(0, 2).toUpperCase()}
                </div>
              )}
              <button
                type="button"
                onClick={() => setShowAvatarModal(true)}
                className="absolute bottom-0 right-0 size-8 rounded-full bg-purple-600 text-white grid place-items-center ring-2 ring-background hover:bg-purple-500 active:scale-95 transition shadow-md cursor-pointer"
                aria-label="Alterar foto ou avatar de perfil"
                title="Alterar foto ou avatar de perfil"
              >
                <Camera className="size-4" />
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

      {/* Badge / Checklist: Completar Cadastro (Feedback #7) */}
      <section className="px-4 pt-4">
        <div className="bg-gradient-to-br from-purple-900/40 via-purple-950/30 to-zinc-900/60 border border-purple-500/30 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className={`size-7 rounded-lg grid place-items-center font-bold text-xs ${profileCompletionPct === 100 ? "bg-lime-500 text-black" : "bg-purple-600 text-white"}`}>
                {profileCompletionPct === 100 ? "✓" : `${profileCompletionPct}%`}
              </div>
              <div>
                <h3 className="text-xs font-bold text-foreground">
                  {profileCompletionPct === 100 ? "Cadastro 100% Completo & Verificado" : "Completar Cadastro"}
                </h3>
                <p className="text-[10px] text-muted-foreground">
                  {profileCompletionPct === 100
                    ? "Todos os seus dados estão salvos e sincronizados com segurança."
                    : `${completedChecklistCount} de ${checklistItems.length} etapas preenchidas.`}
                </p>
              </div>
            </div>
            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${profileCompletionPct === 100 ? "bg-lime-500/10 text-lime-600 dark:text-lime-400 border border-lime-500/20" : "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20"}`}>
              {profileCompletionPct === 100 ? "Perfil Ativo" : "+50 nfs bônus"}
            </span>
          </div>

          {/* Barra de Progresso */}
          <div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden mb-3">
            <div
              className={`h-full transition-all duration-500 rounded-full ${profileCompletionPct === 100 ? "bg-lime-400" : "bg-purple-500"}`}
              style={{ width: `${profileCompletionPct}%` }}
            />
          </div>

          {/* Chips dos Itens do Checklist */}
          <div className="flex flex-wrap gap-1.5">
            {checklistItems.map((item) => (
              <span
                key={item.id}
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 border ${
                  item.done
                    ? "bg-lime-500/10 text-lime-600 dark:text-lime-400 border-lime-500/20"
                    : "bg-zinc-800/60 text-zinc-400 border-zinc-700/50"
                }`}
              >
                <span>{item.done ? "✓" : "○"}</span>
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </div>
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
              {/* Card de Link Direto de Cadastro Member-Get-Member (MGM) */}
              <div className="mt-3 pt-3 border-t border-border space-y-2.5 bg-purple-600/5 dark:bg-purple-950/20 p-3 rounded-2xl border border-purple-500/20">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="size-3.5" /> Link Direto de Cadastro (Member-Get-Member)
                  </span>
                  <span className="text-[10px] font-bold text-lime-600 dark:text-lime-400 bg-lime-500/10 px-2 py-0.5 rounded-full border border-lime-500/20">
                    +50 nfs por indicação | 10% no Shop (Clube)
                  </span>
                </div>

                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Ao enviar este link direto, seu amigo abre a página de cadastro com seu código <strong className="text-foreground">{activeUser.referralCode}</strong> pré-preenchido automaticamente! Você ganha <strong>+50 nfs</strong> no cadastro dele (premiação única com marcação permanente). Assinantes do <strong>Netfits Club</strong> turbinam a regra para <strong>10% de comissão em pontos</strong> sobre todas as compras dos indicados no Shop!
                </p>

                <div className="flex items-center gap-2 bg-card p-2.5 rounded-xl border border-border">
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] font-bold uppercase text-muted-foreground block">Link Direto de Indicação:</span>
                    <span className="text-xs font-mono font-bold text-foreground truncate block">
                      https://www.netfits.com.br/auth?ref={activeUser.referralCode}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const directUrl = `https://www.netfits.com.br/auth?ref=${activeUser.referralCode}`;
                      navigator.clipboard.writeText(directUrl);
                      toast.success(`📋 Link direto de cadastro copiado! (${directUrl})`);
                    }}
                    className="bg-purple-600 text-white font-bold text-xs px-3 py-2 rounded-xl flex items-center gap-1.5 hover:bg-purple-700 active:scale-95 transition shadow-xs shrink-0"
                  >
                    <Copy className="size-3.5" /> Copiar Link
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      const directUrl = `https://www.netfits.com.br/auth?ref=${activeUser.referralCode}`;
                      const msg = `Vem para o Netfits comigo! Cadastre-se pelo meu link de convite, receba +50 nfs bônus de boas-vindas e aproveite 4 nfs/R$ no Shop: ${directUrl}`;
                      window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
                    }}
                    className="flex-1 bg-[#25D366] text-white font-bold text-xs py-2 rounded-xl flex items-center justify-center gap-1.5 hover:opacity-90 active:scale-95 transition"
                  >
                    <Share2 className="size-3.5" /> Enviar Convite via WhatsApp
                  </button>
                </div>
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
          {myReferrals.total === 0 ? (
            <div className="bg-muted/40 border border-border/60 rounded-xl p-4 text-center space-y-1.5 mt-2">
              <Users className="size-5 text-muted-foreground mx-auto" />
              <p className="text-xs font-bold text-foreground">Sua tribo ainda não possui indicados</p>
              <p className="text-[11px] text-muted-foreground max-w-xs mx-auto">
                Você ainda não possui indicados cadastrados. Compartilhe seu link exclusivo de convite no WhatsApp acima para trazer amigos e ganhar +50 nfs por indicação!
              </p>
            </div>
          ) : (
            <>
              <div className="bg-muted rounded-xl px-3 py-3 space-y-2 mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-muted-foreground">
                    Seus nfs gerados pelas atividades da tribo
                  </span>
                  <span className="text-sm font-bold">
                    {myReferrals.nfsEarned.toLocaleString("pt-BR")} nfs
                  </span>
                </div>
              </div>
              <ul className="space-y-2 mt-2">
                {myReferrals.members.map((r) => (
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
            </>
          )}
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
                type="text"
                inputMode="numeric"
                maxLength={10}
                value={form.birthDate}
                onChange={(e) => setForm({ ...form, birthDate: formatBirthDateMask(e.target.value) })}
                placeholder="DD/MM/AAAA"
                className={inputClass}
              />
            </Field>
            <Field label="Telefone" icon={Phone}>
              <input
                type="tel"
                maxLength={15}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: formatPhoneMask(e.target.value) })}
                placeholder="(11) 99999-9999"
                className={inputClass}
              />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Field label="E-mail" icon={Mail}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </Field>
            <Field label="CPF" icon={CreditCard}>
              <input
                type="text"
                inputMode="numeric"
                maxLength={14}
                value={form.cpf}
                onChange={(e) => setForm({ ...form, cpf: formatCpfMask(e.target.value) })}
                placeholder="000.000.000-00"
                className={inputClass}
              />
            </Field>
          </div>
          {/* Endereço Estruturado de Entrega & Cobrança (Obrigatório para Loja & Cartão de Crédito) */}
          <div className="pt-3 border-t border-border/60 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-foreground flex items-center gap-1.5">
                <MapPin className="size-3.5 text-brand" /> Endereço de Entrega & Cobrança
              </span>
              <span className="text-[10px] text-muted-foreground font-medium">Requerido na Loja Oficial</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Field label="CEP" icon={MapPin}>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={9}
                  value={form.zipcode}
                  onChange={(e) => handleCepChange(e.target.value)}
                  placeholder="00000-000"
                  className={inputClass}
                />
              </Field>
              <div className="col-span-2">
                <Field label="Rua / Logradouro">
                  <input
                    type="text"
                    value={form.street}
                    onChange={(e) => {
                      const updated = e.target.value;
                      setForm((prev) => ({
                        ...prev,
                        street: updated,
                        address: `${updated}${prev.number ? `, ${prev.number}` : ""}${prev.neighborhood ? ` - ${prev.neighborhood}` : ""}${prev.city ? `, ${prev.city}` : ""}${prev.shortState ? ` · ${prev.shortState}` : ""}`,
                      }));
                    }}
                    placeholder="Av. Paulista, Rua..."
                    className={inputClass}
                  />
                </Field>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Field label="Número">
                <input
                  type="text"
                  value={form.number}
                  onChange={(e) => {
                    const updated = e.target.value;
                    setForm((prev) => ({
                      ...prev,
                      number: updated,
                      address: `${prev.street ? `${prev.street}, ` : ""}${updated}${prev.neighborhood ? ` - ${prev.neighborhood}` : ""}${prev.city ? `, ${prev.city}` : ""}${prev.shortState ? ` · ${prev.shortState}` : ""}`,
                    }));
                  }}
                  placeholder="1000 ou S/N"
                  className={inputClass}
                />
              </Field>
              <div className="col-span-2">
                <Field label="Complemento">
                  <input
                    type="text"
                    value={form.complement}
                    onChange={(e) => setForm({ ...form, complement: e.target.value })}
                    placeholder="Apto, Bloco (opcional)"
                    className={inputClass}
                  />
                </Field>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Field label="Bairro">
                <input
                  type="text"
                  value={form.neighborhood}
                  onChange={(e) => {
                    const updated = e.target.value;
                    setForm((prev) => ({
                      ...prev,
                      neighborhood: updated,
                      address: `${prev.street ? `${prev.street}, ` : ""}${prev.number || ""}${updated ? ` - ${updated}` : ""}${prev.city ? `, ${prev.city}` : ""}${prev.shortState ? ` · ${prev.shortState}` : ""}`,
                    }));
                  }}
                  placeholder="Bairro"
                  className={inputClass}
                />
              </Field>
              <Field label="Cidade">
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => {
                    const updated = e.target.value;
                    setForm((prev) => ({
                      ...prev,
                      city: updated,
                      address: `${prev.street ? `${prev.street}, ` : ""}${prev.number || ""}${prev.neighborhood ? ` - ${prev.neighborhood}` : ""}${updated ? `, ${updated}` : ""}${prev.shortState ? ` · ${prev.shortState}` : ""}`,
                    }));
                  }}
                  placeholder="Cidade"
                  className={inputClass}
                />
              </Field>
              <Field label="UF">
                <input
                  type="text"
                  maxLength={2}
                  value={form.shortState}
                  onChange={(e) => {
                    const updated = e.target.value.toUpperCase();
                    setForm((prev) => ({
                      ...prev,
                      shortState: updated,
                      state: updated === "SP" ? "São Paulo" : updated,
                      address: `${prev.street ? `${prev.street}, ` : ""}${prev.number || ""}${prev.neighborhood ? ` - ${prev.neighborhood}` : ""}${prev.city ? `, ${prev.city}` : ""}${updated ? ` · ${updated}` : ""}`,
                    }));
                  }}
                  placeholder="SP"
                  className={inputClass}
                />
              </Field>
            </div>
          </div>
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
          {form.healthPlan === "Outro" && (
            <Field label="Nome do seu plano de saúde" icon={Plus}>
              <input
                type="text"
                value={form.otherHealthPlan}
                onChange={(e) => setForm({ ...form, otherHealthPlan: e.target.value })}
                placeholder="Ex.: GNDI, Santa Helena, Seguros Unimed..."
                className={inputClass}
              />
            </Field>
          )}
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
          {form.wearable === "Outro" && (
            <Field label="Qual dispositivo ou wearable você utiliza?" icon={Plus}>
              <input
                type="text"
                value={form.otherWearable}
                onChange={(e) => setForm({ ...form, otherWearable: e.target.value })}
                placeholder="Ex.: Whoop, Oura Ring, Huawei Watch, Polar Vantage..."
                className={inputClass}
              />
            </Field>
          )}
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

        {/* Salvar Perfil — Logo abaixo da assessoria esportiva */}
        <div className="pt-1">
          <button
            type="submit"
            className="w-full bg-foreground text-background text-sm font-bold py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-foreground/20 cursor-pointer active:scale-98 transition"
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

        {/* Segurança e Bloqueio do Aplicativo */}
        <Card title="Segurança & Bloqueio do App" icon={Shield}>
          <div className="space-y-3">
            <p className="text-[11px] text-muted-foreground -mt-1 leading-relaxed">
              Seus dados de acesso e sessão permanecem salvos com segurança neste dispositivo para que você não precise digitar sua senha ou autenticar a todo momento. Se desejar proteger o app imediatamente (por exemplo, ao emprestar o celular), utilize a opção abaixo.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => appLockStore.lock()}
                className="w-full sm:flex-1 bg-zinc-900 text-white dark:bg-zinc-800 dark:hover:bg-zinc-700 font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-zinc-700 transition cursor-pointer active:scale-98"
              >
                <Lock className="size-3.5 text-lime-400" />
                <span>Bloquear Aplicativo Agora</span>
              </button>
            </div>
          </div>
        </Card>

        {/* Sessão & Desconexão / Alternar Usuário */}
        <Card title="Sessão & Alternar Usuário" icon={LogOut}>
          <div className="space-y-3">
            <p className="text-[11px] text-muted-foreground -mt-1 leading-relaxed">
              Você está conectado como <strong className="text-foreground">{activeUser.fullName}</strong> ({activeUser.email || activeUser.identifier}).
              Se este aparelho for compartilhado com outras pessoas, utilize a opção abaixo para encerrar sua sessão com segurança. Seus dados, saldos, badges e transações permanecem sempre protegidos e isolados na sua conta.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={() => {
                  authStore.logoutUser();
                  appLockStore.setUnlocked(false);
                  navigate({ to: "/auth" });
                }}
                className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 dark:text-red-400 font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 border border-red-500/30 transition cursor-pointer active:scale-98"
              >
                <LogOut className="size-4" />
                <span>Sair desta Conta / Alternar Usuário</span>
              </button>
            </div>
          </div>
        </Card>

        {/* Privacidade, Termos & LGPD (Conformidade Unificada Apple / Google / Brasil) */}
        <Card title="Privacidade, Termos & LGPD" icon={Shield}>
          <div className="space-y-3">
            <p className="text-[11px] text-muted-foreground -mt-1 leading-relaxed">
              A Netfits assegura total transparência e conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e com as diretrizes globais da Apple Store e Google Play.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowLegalModal("terms")}
                className="bg-card hover:bg-muted text-foreground border border-border/80 text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-between transition cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FileText className="size-3.5 text-lime-500" />
                  <span>Termos de Uso</span>
                </div>
                <ExternalLink className="size-3 text-muted-foreground" />
              </button>
              <button
                type="button"
                onClick={() => setShowLegalModal("privacy")}
                className="bg-card hover:bg-muted text-foreground border border-border/80 text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-between transition cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Shield className="size-3.5 text-purple-500" />
                  <span>Política de Privacidade</span>
                </div>
                <ExternalLink className="size-3 text-muted-foreground" />
              </button>
            </div>
            <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/40">
              <span>Encarregado de Dados (DPO): dpo@netfits.com.br</span>
              <a
                href="/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
                download="Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
                className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
              >
                <Download className="size-3" />
                <span>PDF Oficial</span>
              </a>
            </div>
          </div>
        </Card>

        {/* Exclusão de Conta & Anonimização (Mandatório Apple Guideline 5.1.1(v) e Google Play) */}
        <Card title="Gestão de Conta & Zona de Privacidade" icon={Trash2}>
          <div className="space-y-3">
            <p className="text-[11px] text-muted-foreground -mt-1 leading-relaxed">
              Você pode solicitar a qualquer momento a exclusão definitiva da sua conta e a anonimização de todos os seus dados cadastrais e de telemetria esportiva.
            </p>
            <div className="pt-1">
              <button
                type="button"
                onClick={() => {
                  setDeleteConfirmText("");
                  setShowDeleteModal(true);
                }}
                className="w-full bg-red-500/5 hover:bg-red-500/15 text-red-600 dark:text-red-400 font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 border border-red-500/20 transition cursor-pointer active:scale-98"
              >
                <Trash2 className="size-4" />
                <span>Excluir Minha Conta e Dados Pessoais</span>
              </button>
            </div>
          </div>
        </Card>
      </form>
      {/* Modal de Escolha / Upload de Avatar */}
      {showAvatarModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-zinc-800 text-white rounded-3xl max-w-sm w-full p-6 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setShowAvatarModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full bg-zinc-800/50"
            >
              <X className="size-5" />
            </button>

            <div className="text-center space-y-1">
              <div className="size-12 rounded-full bg-purple-600/20 text-purple-400 mx-auto grid place-items-center mb-2">
                <Camera className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Alterar Foto de Perfil</h3>
              <p className="text-xs text-zinc-400">
                Envie uma foto do seu dispositivo ou escolha um avatar esportivo.
              </p>
            </div>

            {/* Input de Arquivo Oculto */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            />

            {/* Opção 1: Upload de Foto Própria */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs py-3 rounded-2xl transition flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 cursor-pointer"
            >
              <Upload className="size-4" />
              <span>Enviar Foto do Dispositivo / Câmera</span>
            </button>

            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-zinc-800"></div>
              <span className="flex-shrink mx-3 text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                ou selecione um avatar
              </span>
              <div className="flex-grow border-t border-zinc-800"></div>
            </div>

            {/* Opção 2: Grid de Avatares Esportivos Prontos */}
            <div className="grid grid-cols-3 gap-2.5">
              {PRESET_AVATARS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handlePresetSelect(preset.url)}
                  className="group relative rounded-xl overflow-hidden aspect-square border border-zinc-800 hover:border-purple-500 transition focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                >
                  <img
                    src={preset.url}
                    alt={preset.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-200"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-1 text-center">
                    <span className="text-[9px] font-bold text-white leading-tight">{preset.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Opção 3: Remover Foto (Restaurar Iniciais) */}
            {activeUser.avatarUrl && (
              <button
                type="button"
                onClick={handleRemoveAvatar}
                className="w-full bg-zinc-800 hover:bg-red-950 hover:text-red-400 text-zinc-300 font-medium text-xs py-2.5 rounded-2xl transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Trash2 className="size-3.5" />
                <span>Remover Foto (Usar Iniciais)</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Modal de Exclusão de Conta & Anonimização (Mandatório Apple Guideline 5.1.1(v) e Google Play) */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-red-500/30 text-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setShowDeleteModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full bg-zinc-800/50"
            >
              <X className="size-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="size-12 rounded-full bg-red-500/20 text-red-400 mx-auto grid place-items-center mb-1">
                <AlertTriangle className="size-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white">Excluir Conta & Dados Pessoais</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Esta ação é irreversível e atende ao Artigo 18 da LGPD (Lei nº 13.709/2018) e às diretrizes obrigatórias da Apple Store e Google Play.
              </p>
            </div>

            <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl p-3.5 space-y-2 text-[11px] text-zinc-300">
              <div className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span><b>Remoção Imediata:</b> Seu perfil, preferências, foto e credenciais biométricas serão permanentemente apagados deste e de qualquer aparelho.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span><b>Cancelamento de Saldo:</b> Quaisquer pontos <b>nfs</b> e conquistas associadas a esta conta serão cancelados sem direito a resgate posterior.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-zinc-400 font-bold">•</span>
                <span><b>Preservação Legal / Fiscal:</b> Registros de compras físicas já faturadas no Marketplace serão mantidos pelo prazo estritamente legal para cumprimento de obrigações tributárias (Art. 16 da LGPD).</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                Digite <strong className="text-red-400">EXCLUIR</strong> para confirmar:
              </label>
              <input
                type="text"
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                placeholder="EXCLUIR"
                className="w-full bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-600 rounded-xl px-3.5 py-2.5 text-xs font-mono tracking-wider focus:outline-none focus:border-red-500 transition"
              />
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                disabled={isDeleting}
                className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-bold text-xs py-3 rounded-xl transition cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="button"
                disabled={deleteConfirmText.trim().toUpperCase() !== "EXCLUIR" || isDeleting}
                onClick={() => {
                  if (deleteConfirmText.trim().toUpperCase() !== "EXCLUIR") return;
                  setIsDeleting(true);
                  try {
                    authStore.deleteAccount(activeUser.id);
                    appLockStore.setUnlocked(false);
                    setShowDeleteModal(false);
                    navigate({ to: "/auth" });
                  } catch (e) {
                    toast.error("Erro ao excluir conta. Tente novamente.");
                    setIsDeleting(false);
                  }
                }}
                className={`flex-1 font-bold text-xs py-3 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer ${
                  deleteConfirmText.trim().toUpperCase() === "EXCLUIR" && !isDeleting
                    ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30"
                    : "bg-red-600/30 text-zinc-500 cursor-not-allowed"
                }`}
              >
                <Trash2 className="size-3.5" />
                <span>{isDeleting ? "Excluindo..." : "Confirmar Exclusão"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Unificado de Termos de Uso e Política de Privacidade LGPD */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-zinc-900 border border-zinc-800 text-white rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col p-6 shadow-2xl relative">
            <button
              onClick={() => setShowLegalModal(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full bg-zinc-800/50"
            >
              <X className="size-5" />
            </button>

            {/* Cabeçalho das Abas Legais */}
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 mb-4">
              <button
                type="button"
                onClick={() => setShowLegalModal("terms")}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                  showLegalModal === "terms"
                    ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Termos de Uso
              </button>
              <button
                type="button"
                onClick={() => setShowLegalModal("privacy")}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                  showLegalModal === "privacy"
                    ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Privacidade & LGPD
              </button>
            </div>

            {/* Conteúdo com rolagem */}
            <div className="overflow-y-auto space-y-4 pr-1 text-xs text-zinc-300 leading-relaxed">
              {showLegalModal === "terms" ? (
                <>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-sm text-white">Regulamento Oficial do Programa Netfits</h4>
                    <p className="text-[11px] text-zinc-400">Versão 2.0 — Atualizada para Plataformas Mobile (iOS / Android)</p>
                  </div>
                  <div className="space-y-2 text-[11px] text-zinc-300">
                    <p><b>1. Objeto:</b> O Programa Netfits é um ecossistema digital voltado à longevidade ativa, promoção do esporte e fidelidade com recompensas na moeda <b>nfs</b>.</p>
                    <p><b>2. Pontos nfs & Validade Atuarial:</b> Os pontos acumulados por treinos validados e compras no marketplace seguem a regra atuarial FEFO (First-Expired, First-Out), com validade padrão de 24 meses.</p>
                    <p><b>3. Shop Netfits & Marketplace:</b> A venda e entrega de produtos físicos (suplementos, tênis, vestuário) é operada em parceria com sellers homologados e integrada de ponta a ponta com emissão de nota fiscal direta de mercadorias.</p>
                    <p><b>4. Políticas Antifraude:</b> Treinos e interações com vídeos/quizzes exigem tempo de visualização mínimo auditado (dwell time). Suspeitas de spoofing de GPS ou automação fraudulenta implicam bloqueio da conta.</p>
                    <p><b>5. Disposições Finais:</b> O regulamento integral pode ser baixado em PDF ou consultado na íntegra a qualquer momento através do nosso portal oficial.</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-sm text-white">Política de Privacidade & Proteção de Dados (LGPD)</h4>
                    <p className="text-[11px] text-zinc-400">Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)</p>
                  </div>
                  <div className="space-y-2 text-[11px] text-zinc-300">
                    <p><b>1. Controladora dos Dados:</b> Netfits Fidelidade Ltda., CNPJ nº 68.930.455/0001-40, com sede em Santana de Parnaíba/SP.</p>
                    <p><b>2. Dados Tratados:</b> Coletamos dados cadastrais (nome, CPF, telefone, e-mail, data de nascimento), dados de saúde esportiva voluntariamente fornecidos e telemetria de treinos para pontuação.</p>
                    <p><b>3. Finalidade e Base Legal:</b> Execução do contrato do programa de benefícios, prevenção a fraudes e cumprimento de obrigações legais (Art. 7º, V e IX da LGPD).</p>
                    <p><b>4. Direitos do Titular (Art. 18 LGPD):</b> Você pode acessar, corrigir, anonimizar, bloquear ou excluir seus dados pessoais a qualquer tempo diretamente pelo app ou pelo canal do DPO.</p>
                    <p><b>5. Encarregado de Proteção de Dados (DPO):</b> Para esclarecimentos e solicitações formais sobre dados, contate: <span className="text-lime-400 font-mono">dpo@netfits.com.br</span>.</p>
                  </div>
                </>
              )}
            </div>

            {/* Rodapé do Modal */}
            <div className="border-t border-zinc-800 pt-3 mt-4 flex items-center justify-between">
              <a
                href="/Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
                download="Netfits_Regulamento_e_Termo_LGPD_Oficial.pdf"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition"
              >
                <Download className="size-3.5 text-lime-400" />
                <span>Baixar Documento Consolidado (PDF)</span>
              </a>
              <button
                type="button"
                onClick={() => setShowLegalModal(null)}
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs py-2 px-4 rounded-xl transition cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
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
          {Icon && typeof Icon === "function" ? (
            <Icon className="size-3.5 text-foreground/70" />
          ) : null}
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
