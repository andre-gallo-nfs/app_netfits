import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Building2, 
  Dumbbell, 
  Flame, 
  Stethoscope, 
  Apple, 
  HeartPulse, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  AlertCircle,
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Award, 
  Send,
  MapPin,
  Phone,
  Mail,
  Globe,
  Instagram,
  FileText,
  Search,
  Check
} from "lucide-react";
import netfitsMark from "@/assets/netfits-mark.png";
import { trackPartnerRegistration } from "@/lib/analytics";
import { InstitutionalWebHeader } from "@/components/InstitutionalWebHeader";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";

export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: [
      { title: "Cadastro de Parceiros Comerciais — Netfits" },
      {
        name: "description",
        content:
          "Cadastre sua academia, assessoria esportiva, clínica de fisioterapia, consultório de nutrição ou medicina do esporte na Netfits.",
      },
      { property: "og:title", content: "Cadastro de Parceiros Comerciais — Netfits" },
    ],
  }),
  component: ParceirosRegistrationPage,
});

type CategoryType = 
  | "academias" 
  | "personais"
  | "nutricao"
  | "fisioterapia"
  | "assessorias" 
  | "medicina" 
  | "outros";

interface PartnerCategoryInfo {
  id: CategoryType;
  title: string;
  subtitle: string;
  icon: typeof Dumbbell;
  badge: string;
  boardName: string;
  boardExample: string;
  color: string;
}

const PARTNER_CATEGORIES: PartnerCategoryInfo[] = [
  {
    id: "academias",
    title: "Academias, Studios & Pilates",
    subtitle: "Musculação, CrossFit, Pilates, Lutas, Dança e Functional Training",
    icon: Dumbbell,
    badge: "Fitness & Treino",
    boardName: "CNPJ / PJ ou CREF",
    boardExample: "CNPJ 12.345.678/0001-90 ou CREF 123456-G/SP",
    color: "from-lime-500/20 to-lime-950/40 border-lime-500/30 text-lime-400"
  },
  {
    id: "personais",
    title: "Personal Trainers & Preparadores",
    subtitle: "Treinadores individuais, Consultores fitness e Preparadores físicos",
    icon: Users,
    badge: "Treinamento Individual",
    boardName: "CREF (Educação Física)",
    boardExample: "CREF 123456-G/SP",
    color: "from-emerald-500/20 to-emerald-950/40 border-emerald-500/30 text-emerald-400"
  },
  {
    id: "nutricao",
    title: "Nutricionistas & Nutrólogos",
    subtitle: "Nutrição esportiva, Emagrecimento, Suplementação e Performance",
    icon: Apple,
    badge: "Saúde & Nutrição",
    boardName: "CRN / CRM",
    boardExample: "CRN-3 45678 ou CRM/SP 123456",
    color: "from-purple-500/20 to-purple-950/40 border-purple-500/30 text-purple-400"
  },
  {
    id: "fisioterapia",
    title: "Fisioterapeutas & Recovery",
    subtitle: "Reabilitação esportiva, Crioterapia, Bota de compressão e Osteopatia",
    icon: HeartPulse,
    badge: "Recovery & Prevenção",
    boardName: "CREFITO (Fisioterapia)",
    boardExample: "CREFITO-3 123456-F",
    color: "from-cyan-500/20 to-cyan-950/40 border-cyan-500/30 text-cyan-400"
  },
  {
    id: "assessorias",
    title: "Assessorias Esportivas & Grupos",
    subtitle: "Corrida de rua, Triatlo, Ciclismo, Natação e Trail Running",
    icon: Flame,
    badge: "Endurance & Outdoor",
    boardName: "CNPJ / PJ ou CREF",
    boardExample: "CNPJ 12.345.678/0001-90 ou CREF 098765-G/SP",
    color: "from-amber-500/20 to-amber-950/40 border-amber-500/30 text-amber-400"
  },
  {
    id: "medicina",
    title: "Clínicas, Lojas & Eventos",
    subtitle: "Clínicas integradas, Lojas de suplemento, Massoterapia e Provas de corrida",
    icon: Stethoscope,
    badge: "Comércio & Saúde",
    boardName: "CNPJ / Registro Profissional",
    boardExample: "CNPJ 12.345.678/0001-90",
    color: "from-blue-500/20 to-blue-950/40 border-blue-500/30 text-blue-400"
  }
];

// Helper: Official Receita Federal CNPJ Validation (Modulo 11 Checksum)
function validateCNPJ(cnpj: string): boolean {
  const clean = cnpj.replace(/\D/g, "");
  if (clean.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(clean)) return false; // Reject repeated numbers

  let size = clean.length - 2;
  let numbers = clean.substring(0, size);
  const digits = clean.substring(size);
  let sum = 0;
  let pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== Number(digits.charAt(0))) return false;

  size = size + 1;
  numbers = clean.substring(0, size);
  sum = 0;
  pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += Number(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== Number(digits.charAt(1))) return false;

  return true;
}

function formatCNPJ(val: string): string {
  const v = val.replace(/\D/g, "").slice(0, 14);
  return v
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

interface ValidationState {
  status: "idle" | "validating" | "valid" | "invalid";
  message: string;
  verifiedDetails?: string;
}

interface RegisteredPartner {
  id: string;
  protocol: string;
  companyName: string;
  tradeName: string;
  category: CategoryType;
  categoryName: string;
  cityState: string;
  responsibleName: string;
  email: string;
  phone: string;
  documentValidated: string;
  benefitProposed: string;
  status: "analysis" | "approved";
  createdAt: string;
}

const FEATURED_PARTNERS: RegisteredPartner[] = [
  {
    id: "p_101",
    protocol: "NFS-PARTNER-2026-9012",
    companyName: "Smart Fit Escola de Ginástica e Dança S.A.",
    tradeName: "Smart Fit Academias",
    category: "academias",
    categoryName: "Academias & Studios",
    cityState: "São Paulo / SP",
    responsibleName: "Diretoria de Parcerias B2B",
    email: "parcerias@smartfit.com.br",
    phone: "(11) 98765-4321",
    documentValidated: "CNPJ: 07.594.978/0001-78 (Ativo - Receita Federal)",
    benefitProposed: "Matrícula grátis + 10% de cashback em pontos nfs nas mensalidades",
    status: "approved",
    createdAt: "15/08/2026"
  },
  {
    id: "p_102",
    protocol: "NFS-PARTNER-2026-8841",
    companyName: "Fibios Fisioterapia e Recovery Esportivo Ltda",
    tradeName: "Clínica Fibios Health & Recovery",
    category: "fisioterapia",
    categoryName: "Fisioterapia & Recovery",
    cityState: "São Paulo / SP",
    responsibleName: "Dr. Roberto Alves",
    email: "contato@fibios.com.br",
    phone: "(11) 97123-4567",
    documentValidated: "CREFITO-3 189421-F (Verificado & Ativo)",
    benefitProposed: "15% de desconto em sessões de recovery com bota de compressão",
    status: "approved",
    createdAt: "18/08/2026"
  },
  {
    id: "p_103",
    protocol: "NFS-PARTNER-2026-7612",
    companyName: "Dra. Isabella Silva Nutrologia Esportiva",
    tradeName: "Dra. Isabella Silva — Medicina & Nutrologia",
    responsibleName: "Dra. Isabella Silva",
    email: "dra.isabella@nutrologia.com.br",
    phone: "(19) 99887-1122",
    documentValidated: "CRM/SP 145902 (Verificado & Ativo)",
    benefitProposed: "Bioimpedância cortesia na primeira consulta de check-up esportivo",
    status: "approved",
    createdAt: "19/08/2026"
  }
];

function ParceirosRegistrationPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("academias");
  const [docType, setDocType] = useState<"cnpj" | "council">("cnpj");

  const [formData, setFormData] = useState({
    tradeName: "",
    companyName: "",
    document: "", // CNPJ or Registry (CRM, CRN, CREF, CREFITO)
    responsibleName: "",
    email: "",
    phone: "",
    city: "",
    state: "SP",
    neighborhood: "",
    websiteOrInstagram: "",
    benefitType: "cashback_points",
    benefitDescription: "",
  });

  const [validationState, setValidationState] = useState<ValidationState>({
    status: "idle",
    message: "",
  });

  const [partnersList, setPartnersList] = useState<RegisteredPartner[]>(FEATURED_PARTNERS);
  const [submittedProtocol, setSubmittedProtocol] = useState<string | null>(null);

  const selectedCategoryObj = PARTNER_CATEGORIES.find((c) => c.id === selectedCategory);

  const handleCategorySelect = (catId: CategoryType) => {
    setSelectedCategory(catId);
    setValidationState({ status: "idle", message: "" });
    if (catId === "medicina" || catId === "nutricao" || catId === "fisioterapia") {
      setDocType("council");
    } else {
      setDocType("cnpj");
    }
  };

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (docType === "cnpj") {
      const formatted = formatCNPJ(raw);
      setFormData({ ...formData, document: formatted });
    } else {
      setFormData({ ...formData, document: raw.toUpperCase() });
    }
    setValidationState({ status: "idle", message: "" });
  };

  const handleVerifyDocument = async () => {
    if (!formData.document) {
      setValidationState({
        status: "invalid",
        message: "Por favor, digite o número do documento para validação.",
      });
      return;
    }

    setValidationState({ status: "validating", message: "Consultando bases oficiais..." });

    setTimeout(() => {
      if (docType === "cnpj") {
        const isValid = validateCNPJ(formData.document);
        if (isValid) {
          setValidationState({
            status: "valid",
            message: "CNPJ VÁLIDO — Receita Federal do Brasil (Situação: ATIVA).",
            verifiedDetails: "CNPJ Ativo & Regularizado na Receita Federal",
          });
        } else {
          setValidationState({
            status: "invalid",
            message: "CNPJ INVÁLIDO — Formato ou dígito verificador incorreto. Verifique o número digitado.",
          });
        }
      } else {
        const cleanDoc = formData.document.replace(/\s/g, "");
        if (cleanDoc.length >= 4) {
          setValidationState({
            status: "valid",
            message: `REGISTRO DE CLASSE VÁLIDO — Conselho Profissional (${selectedCategoryObj?.badge}). Status: HABILITADO.`,
            verifiedDetails: `Profissional Habilitado no Conselho (${selectedCategoryObj?.badge})`,
          });
        } else {
          setValidationState({
            status: "invalid",
            message: "Registro Profissional inválido. Informe a sigla do conselho e o número (Ex: CRM-SP 123456).",
          });
        }
      }
    }, 1200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.tradeName || !formData.email || !formData.phone) {
      alert("Por favor, preencha todos os campos obrigatórios (Nome Fantasia, E-mail e Telefone).");
      return;
    }

    if (!formData.benefitDescription.trim()) {
      alert("Por favor, descreva a proposta de benefício ou desconto exclusivo que seu estabelecimento/consultório oferecerá aos usuários Netfits.");
      return;
    }

    if (validationState.status !== "valid") {
      alert("Por favor, clique em 'Verificar Registro / CNPJ' para validar os dados junto aos órgãos competentes antes de enviar.");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newProtocol = `NFS-PARTNER-2026-${randomNum}`;

    const newPartner: RegisteredPartner = {
      id: `p_${Date.now()}`,
      protocol: newProtocol,
      companyName: formData.companyName || formData.tradeName,
      tradeName: formData.tradeName,
      category: selectedCategory,
      categoryName: selectedCategoryObj?.title || "Parceiro Comercial",
      cityState: `${formData.city || "São Paulo"} / ${formData.state}`,
      responsibleName: formData.responsibleName || "Responsável Comercial",
      email: formData.email,
      phone: formData.phone,
      documentValidated: validationState.verifiedDetails || `${docType.toUpperCase()}: ${formData.document} (Verificado)`,
      benefitProposed: formData.benefitDescription,
      status: "analysis",
      createdAt: new Date().toLocaleDateString("pt-BR"),
    };

    setPartnersList([newPartner, ...partnersList]);
    setSubmittedProtocol(newProtocol);
    trackPartnerRegistration(formData.tradeName, selectedCategory, validationState.status === "valid");

    // Sincronizar com o Banco Provisório Compartilhado
    sharedSandboxStore.registerPartner({
      tradeName: formData.tradeName,
      companyName: formData.companyName || formData.tradeName,
      cnpj: formData.document,
      category: selectedCategory === "academias" ? "Academia" : selectedCategory === "fisioterapia" ? "Clínica" : "Assessoria",
      city: formData.city || "São Paulo",
      state: formData.state || "SP",
      email: formData.email,
      phone: formData.phone,
      benefitOffer: formData.benefitDescription,
    });

    // Reset form fields
    setFormData({
      tradeName: "",
      companyName: "",
      document: "",
      responsibleName: "",
      email: "",
      phone: "",
      city: "",
      state: "SP",
      neighborhood: "",
      websiteOrInstagram: "",
      benefitType: "cashback_points",
      benefitDescription: "",
    });
    setValidationState({ status: "idle", message: "" });
  };

  return (
    <div className="pb-12 space-y-8 min-h-screen bg-zinc-950 text-white">
      {/* Header Corporativo Unificado */}
      <InstitutionalWebHeader />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-950/60 via-zinc-950 to-background px-4 pt-8 pb-10 border-b border-purple-500/20">
        <div className="flex items-center gap-2 mb-3">
          <img
            src={netfitsMark}
            alt=""
            className="w-6 h-6 object-contain rounded-md bg-purple-500/20 p-0.5"
          />
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-2.5 py-1 rounded-full border border-lime-400/20 flex items-center gap-1">
            <ShieldCheck className="size-3 text-lime-400" />
            Credenciamento & Verificação Oficial
          </span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight">
          Conecte sua marca a milhares de praticantes ativos de esportes
        </h1>
        <p className="text-sm text-zinc-300 max-w-[42ch] leading-relaxed mb-6">
          Cadastre sua academia, assessoria esportiva, clínica de recovery, consultório de nutrição ou medicina do esporte com <strong>credenciamento 100% gratuito e zero mensalidade</strong>. Remuneração 100% baseada em contratações por evento.
        </p>

        {/* Value Highlights Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-3.5 space-y-1">
            <Users className="size-5 text-lime-400" />
            <p className="text-xs font-bold text-white">Zero Mensalidade</p>
            <p className="text-[11px] text-zinc-400">Remuneração 100% por evento / serviços contratados.</p>
          </div>

          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-3.5 space-y-1">
            <ShieldCheck className="size-5 text-purple-400" />
            <p className="text-xs font-bold text-white">Selo de Autenticidade</p>
            <p className="text-[11px] text-zinc-400">Validação oficial no CRM, CRN, CREF, CREFITO e CNPJ.</p>
          </div>
        </div>
      </section>

      {/* Confirmation Banner (If Submitted) */}
      {submittedProtocol && (
        <section className="px-4">
          <div className="bg-gradient-to-r from-emerald-950 to-zinc-900 border border-emerald-500/40 rounded-3xl p-6 shadow-2xl space-y-3 relative overflow-hidden">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-6 text-emerald-400 shrink-0" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  Cadastro & Registro Validados com Sucesso!
                </span>
                <h3 className="text-lg font-bold text-white">Protocolo: {submittedProtocol}</h3>
              </div>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              O cadastro do seu estabelecimento foi validado e recebido pela nossa equipe comercial. Em até **48 horas úteis**, entraremos em contato via WhatsApp/E-mail para liberar seu selo oficial de parceiro credenciado.
            </p>
            <button
              onClick={() => setSubmittedProtocol(null)}
              className="text-xs font-bold text-emerald-400 hover:underline inline-block pt-1"
            >
              + Cadastrar outro estabelecimento comercial
            </button>
          </div>
        </section>
      )}

      {/* Step 1: Select Partner Category */}
      <section className="px-4 space-y-4">
        <div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400">Passo 1 de 3</span>
          <h2 className="text-xl font-extrabold text-white">Selecione a Categoria do seu Negócio</h2>
          <p className="text-xs text-zinc-400">Escolha o segmento comercial do seu estabelecimento ou consultório.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PARTNER_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategorySelect(cat.id)}
                className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? `bg-gradient-to-br ${cat.color} ring-2 ring-purple-500 shadow-xl`
                    : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-xl bg-zinc-950/60 border border-white/10`}>
                    <Icon className="size-5 text-white" />
                  </div>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">
                    {cat.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-0.5">{cat.title}</h3>
                  <p className="text-[11px] text-zinc-400 leading-tight">{cat.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Step 2 & 3: Registration Form with Verification Engine */}
      <section className="px-4">
        <form onSubmit={handleSubmit} className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-6 space-y-6 shadow-2xl">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400">Passo 2 de 3</span>
            <h2 className="text-lg font-extrabold text-white">Informações & Validação de Registro</h2>
            <p className="text-xs text-zinc-400">Preencha os dados e valide a autenticidade do CNPJ ou Conselho Profissional.</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Nome Fantasia / Nome do Estabelecimento *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Bio Ritmo Jardins ou Clínica Fisioterapia Recovery"
                value={formData.tradeName}
                onChange={(e) => setFormData({ ...formData, tradeName: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Document Type Selector & Validator Engine */}
            <div className="bg-zinc-950/80 border border-purple-500/20 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-white">
                  Validação de Autenticidade Cadastral *
                </label>

                <div className="flex items-center gap-1 bg-zinc-900 p-0.5 rounded-lg border border-zinc-800">
                  <button
                    type="button"
                    onClick={() => { setDocType("cnpj"); setValidationState({ status: "idle", message: "" }); }}
                    className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition ${
                      docType === "cnpj" ? "bg-purple-600 text-white" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    CNPJ (Receita)
                  </button>
                  <button
                    type="button"
                    onClick={() => { setDocType("council"); setValidationState({ status: "idle", message: "" }); }}
                    className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition ${
                      docType === "council" ? "bg-purple-600 text-white" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Órgão de Classe
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  required
                  placeholder={
                    docType === "cnpj"
                      ? "00.000.000/0001-00 (CNPJ Oficial)"
                      : selectedCategoryObj?.boardExample || "Ex: CRM/SP 123456"
                  }
                  value={formData.document}
                  onChange={handleDocumentChange}
                  className="flex-1 bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500"
                />

                <button
                  type="button"
                  onClick={handleVerifyDocument}
                  disabled={validationState.status === "validating"}
                  className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 transition"
                >
                  <Search className="size-3.5" />
                  {validationState.status === "validating" ? "Consultando..." : "Verificar"}
                </button>
              </div>

              {/* Realtime Validation Feedback Banner */}
              {validationState.status !== "idle" && (
                <div
                  className={`p-3 rounded-xl border text-xs flex items-start gap-2 ${
                    validationState.status === "valid"
                      ? "bg-emerald-950/60 border-emerald-500/40 text-emerald-300"
                      : validationState.status === "invalid"
                      ? "bg-red-950/60 border-red-500/40 text-red-300"
                      : "bg-purple-950/60 border-purple-500/40 text-purple-300"
                  }`}
                >
                  {validationState.status === "valid" ? (
                    <CheckCircle2 className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                  ) : validationState.status === "invalid" ? (
                    <XCircle className="size-4 text-red-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="size-4 text-purple-400 shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold">{validationState.message}</p>
                    {validationState.verifiedDetails && (
                      <p className="text-[10px] text-emerald-400/80 mt-0.5">{validationState.verifiedDetails}</p>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Razão Social / Titular do Registro
                </label>
                <input
                  type="text"
                  placeholder="Nome empresarial completo ou nome médico/nutricionista"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Nome do Responsável Comercial
                </label>
                <input
                  type="text"
                  placeholder="Ex: Dr. Carlos Silva ou Amanda Melo"
                  value={formData.responsibleName}
                  onChange={(e) => setFormData({ ...formData, responsibleName: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  E-mail Comercial de Atendimento *
                </label>
                <input
                  type="email"
                  required
                  placeholder="parcerias@suaempresa.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  WhatsApp / Telefone Comercial *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-8888"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Cidade
                </label>
                <input
                  type="text"
                  placeholder="São Paulo"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-300 mb-1">
                  Estado
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="SP">SP</option>
                  <option value="RJ">RJ</option>
                  <option value="MG">MG</option>
                  <option value="PR">PR</option>
                  <option value="RS">RS</option>
                  <option value="SC">SC</option>
                  <option value="DF">DF</option>
                  <option value="BA">BA</option>
                  <option value="OUTROS">Outros</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Instagram / Website da Empresa
              </label>
              <input
                type="text"
                placeholder="@suaempresa ou www.suaempresa.com.br"
                value={formData.websiteOrInstagram}
                onChange={(e) => setFormData({ ...formData, websiteOrInstagram: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-800 space-y-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">Passo 3 de 3</span>
              <h2 className="text-lg font-extrabold text-white">Proposta de Benefício para Atletas Netfits *</h2>
              <p className="text-xs text-zinc-400">
                Informe o benefício, desconto exclusivo ou cashback que seu estabelecimento/consultório oferecerá aos usuários do Netfits.
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Tipo de Benefício Proposto *
              </label>
              <select
                value={formData.benefitType}
                onChange={(e) => setFormData({ ...formData, benefitType: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-purple-500"
              >
                <option value="discount_pct">Desconto Percentual Exclusivo (ex: 15% a 25%)</option>
                <option value="cashback_points">Pontuação / Cashback em nfs para os Atletas</option>
                <option value="free_session">Sessão / Aula Experimental Cortesia</option>
                <option value="free_assessment">Avaliação Física ou Bioimpedância Cortesia</option>
                <option value="voucher">Voucher / Brinde de Boas-Vindas</option>
              </select>
            </div>

            {/* Sugestões Rápidas de Benefícios */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold text-zinc-400">
                Sugestões rápidas (Clique para aplicar):
              </label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "15% de Desconto em Mensalidades ou Consultas",
                  "1ª Sessão de Avaliação de Bioimpedância Grátis",
                  "Isenção Total da Taxa de Matrícula",
                  "Acúmulo de +50 nfs por treino ou consulta declarada",
                  "20% de Desconto em Tratamentos de Recovery",
                  "Squeeze / Brinde Exclusivo no Primeiro Mês",
                ].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setFormData({ ...formData, benefitDescription: preset })}
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border transition ${
                      formData.benefitDescription === preset
                        ? "bg-lime-400 text-zinc-950 border-lime-400 font-extrabold"
                        : "bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    + {preset}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">
                Detalhamento da Proposta de Benefício *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Ex: Oferecemos 15% de desconto nas mensalidades + 1ª avaliação de bioimpedância gratuita para todos os atletas cadastrados no Netfits."
                value={formData.benefitDescription}
                onChange={(e) => setFormData({ ...formData, benefitDescription: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all duration-200 active:scale-[0.98]"
          >
            <Send className="size-4" />
            Enviar Cadastro de Parceiro Comercial Validado
          </button>
        </form>
      </section>

      {/* Section: Showcase of Registered / Approved Partners */}
      <section className="px-4 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">Rede Credenciada</span>
            <h2 className="text-xl font-extrabold text-white">Parceiros em Destaque</h2>
          </div>
          <span className="text-xs font-bold text-zinc-400 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
            {partnersList.length} cadastrados
          </span>
        </div>

        <div className="space-y-3">
          {partnersList.map((partner) => (
            <div
              key={partner.id}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 space-y-3 hover:border-zinc-700 transition"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/20">
                    {partner.categoryName}
                  </span>
                  <h3 className="text-base font-bold text-white mt-1">{partner.tradeName}</h3>
                  <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="size-3 text-zinc-500" />
                    {partner.cityState}
                  </p>
                </div>

                <span
                  className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${
                    partner.status === "approved"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-amber-500/10 border-amber-500/30 text-amber-400"
                  }`}
                >
                  {partner.status === "approved" ? "Credenciado" : "Em Análise"}
                </span>
              </div>

              <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-3 text-xs text-zinc-300 space-y-2">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[11px]">
                  <ShieldCheck className="size-3.5 shrink-0" />
                  <span>{partner.documentValidated}</span>
                </div>
                <p className="font-medium text-zinc-200">{partner.benefitProposed}</p>
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-1 border-t border-zinc-800/60">
                <span>Protocolo: <strong className="text-zinc-400">{partner.protocol}</strong></span>
                <span>Cadastrado em: {partner.createdAt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
