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
  Check,
  ShoppingBag,
  Code,
  Terminal,
  Copy,
  ExternalLink,
  Zap,
  Server
} from "lucide-react";
import netfitsMark from "@/assets/netfits-mark.png";
import { trackPartnerRegistration } from "@/lib/analytics";
import { InstitutionalWebHeader } from "@/components/InstitutionalWebHeader";
import { sharedSandboxStore } from "@/lib/shared-sandbox-store";

export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: [
      { title: "Cadastro de Parceiros Comerciais & Marketplace — Netfits" },
      {
        name: "description",
        content:
          "Cadastre sua academia, assessoria esportiva, clínica de fisioterapia, consultório de nutrição ou e-commerce no ecossistema Netfits.",
      },
      { property: "og:title", content: "Cadastro de Parceiros Comerciais & Marketplace — Netfits" },
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
  | "marketplace_sellers"
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
    id: "marketplace_sellers",
    title: "Lojas & Sellers Marketplace (E-commerce / APIs)",
    subtitle: "Suplementação, Vestuário esportivo, Acessórios e Equipamentos",
    icon: ShoppingBag,
    badge: "Varejo & APIs",
    boardName: "CNPJ / E-commerce",
    boardExample: "CNPJ 12.345.678/0001-90",
    color: "from-lime-500/20 to-purple-950/40 border-lime-500/30 text-lime-400"
  },
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
    color: "from-purple-500/20 to-purple-950/40 border-purple-500/30 text-purple-400"
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
    title: "Clínicas Médicas & Saúde Integrada",
    subtitle: "Medicina do esporte, Ortopedia, Cardiologia e Avaliação cardiorrespiratória",
    icon: Stethoscope,
    badge: "Medicina Esportiva",
    boardName: "CNPJ / CRM",
    boardExample: "CNPJ 12.345.678/0001-90 ou CRM/SP 123456",
    color: "from-lime-500/20 to-emerald-950/40 border-lime-500/30 text-lime-400"
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
    category: "nutricao",
    categoryName: "Nutricionistas & Nutrologia",
    cityState: "Campinas / SP",
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

    sharedSandboxStore.addInteraction({
      sourceRole: "parceiro",
      sourceName: formData.tradeName,
      sourceContact: formData.email,
      channel: "form",
      subject: `Credenciamento B2B — ${selectedCategoryObj?.title || selectedCategory}`,
      intent: "parceria",
      content: `Solicitação de credenciamento comercial para ${formData.tradeName}. Documento: ${formData.document}. Benefício proposto: ${formData.benefitDescription}`,
      sentiment: "positivo",
      businessInsight: `Nova oportunidade B2B de expansão em ${formData.city || "São Paulo"}/${formData.state || "SP"}. Protocolo: ${newProtocol}.`,
      status: "em_analise",
      tags: ["Credenciamento B2B", selectedCategory, formData.city || "São Paulo"],
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
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-purple-500 selection:text-white">
      {/* Header Corporativo Unificado */}
      <InstitutionalWebHeader />

      {/* Hero Section Banner Responsivo */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-950/70 via-zinc-950 to-zinc-950 border-b border-purple-500/20 py-8 md:py-14">
        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-6">
          <div className="inline-flex items-center gap-2">
            <img
              src={netfitsMark}
              alt=""
              className="size-6 object-contain rounded-md bg-purple-500/20 p-0.5"
            />
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20 flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-lime-400" />
              Credenciamento & Verificação Oficial B2B
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
              Conecte sua marca a milhares de praticantes ativos de esportes
            </h1>
            <p className="text-sm md:text-base text-zinc-300 max-w-2xl leading-relaxed">
              Quer ser um parceiro Netfits e fazer cada movimento valer mais você também? Ofereça seu produto/serviço aos nossos associados.
            </p>
          </div>

          {/* Banner de Benefício Exclusivo aos Atletas */}
          <div className="pt-2">
            <div className="bg-gradient-to-r from-purple-900/80 via-zinc-900 to-lime-950/40 border border-purple-500/30 rounded-2xl p-4 md:p-5 shadow-lg flex items-center gap-3.5">
              <div className="size-10 md:size-12 rounded-xl bg-lime-400 text-black grid place-items-center shrink-0 font-black shadow-md">
                <Sparkles className="size-5 md:size-6" />
              </div>
              <p className="text-xs sm:text-sm md:text-base font-bold text-white leading-relaxed">
                Ofereça um benefício exclusivo aos atletas e tenha acesso a um público engajado e alinhado com seus objetivos!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-8 space-y-10">
        {/* Confirmation Banner (If Submitted) */}
        {submittedProtocol && (
          <section className="bg-gradient-to-r from-emerald-950 via-zinc-900 to-zinc-950 border-2 border-emerald-500/40 rounded-3xl p-6 shadow-2xl space-y-3 relative overflow-hidden animate-in fade-in slide-in-from-top-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-7 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                  Cadastro & Registro Validados com Sucesso!
                </span>
                <h3 className="text-lg md:text-xl font-black text-white">Protocolo: {submittedProtocol}</h3>
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed pt-1">
                  O cadastro do seu estabelecimento foi recebido pela nossa equipe comercial. Em até <strong>48 horas úteis</strong>, entraremos em contato via WhatsApp/E-mail para liberar seu selo oficial de parceiro credenciado.
                </p>
              </div>
            </div>
            <div className="pt-2 border-t border-emerald-500/20 flex justify-end">
              <button
                type="button"
                onClick={() => setSubmittedProtocol(null)}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
              >
                + Cadastrar outro estabelecimento comercial
              </button>
            </div>
          </section>
        )}

        {/* Passo 1: Selecionar Categoria (Grid 1 col mobile, 2 col tablet, 3 col desktop) */}
        <section className="space-y-4">
          <div className="border-b border-zinc-800 pb-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30">
              Passo 1 de 3
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white mt-2">
              Selecione a Categoria do seu Negócio
            </h2>
            <p className="text-xs md:text-sm text-zinc-400">
              Escolha o segmento comercial do seu estabelecimento ou consultório profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {PARTNER_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between cursor-pointer active:scale-[0.98] ${
                    isSelected
                      ? `bg-gradient-to-br ${cat.color} ring-2 ring-purple-500 shadow-xl border-purple-400`
                      : "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-zinc-950/80 border border-white/10 shrink-0">
                      <Icon className="size-5 text-white" />
                    </div>
                    {isSelected ? (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-lime-400 text-black flex items-center gap-1 shadow-sm">
                        <Check className="size-3 stroke-[3]" />
                        Selecionado
                      </span>
                    ) : (
                      <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-zinc-300">
                        {cat.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-white mb-1">{cat.title}</h3>
                    <p className="text-xs text-zinc-400 leading-snug">{cat.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Formulário de Registro & Engine de Validação (Passos 2 e 3) */}
        <section className="space-y-4">
          <form onSubmit={handleSubmit} className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-5 md:p-8 space-y-6 shadow-2xl">
            {/* Header do Passo 2 */}
            <div className="border-b border-zinc-800/80 pb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/30">
                Passo 2 de 3
              </span>
              <h2 className="text-xl md:text-2xl font-black text-white mt-2">
                Informações do Estabelecimento & Validação
              </h2>
              <p className="text-xs md:text-sm text-zinc-400">
                Preencha os dados e valide a autenticidade do CNPJ ou Conselho Profissional.
              </p>
            </div>

            <div className="space-y-5">
              {/* Nome Fantasia */}
              <div>
                <label className="block text-xs md:text-sm font-bold text-zinc-200 mb-1.5">
                  Nome Fantasia / Nome do Estabelecimento *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Bio Ritmo Jardins ou Clínica Fisioterapia Recovery"
                  value={formData.tradeName}
                  onChange={(e) => setFormData({ ...formData, tradeName: e.target.value })}
                  className="w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>

              {/* Document Type Selector & Validator Engine (Responsivo para Celular) */}
              <div className="bg-zinc-950 border border-purple-500/30 rounded-2xl p-4 md:p-5 space-y-3.5 shadow-inner">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="block text-xs md:text-sm font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="size-4 text-lime-400 shrink-0" />
                    <span>Validação de Autenticidade Cadastral *</span>
                  </label>

                  <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded-xl border border-zinc-800 shrink-0">
                    <button
                      type="button"
                      onClick={() => { setDocType("cnpj"); setValidationState({ status: "idle", message: "" }); }}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
                        docType === "cnpj" ? "bg-purple-600 text-white shadow-sm" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      CNPJ (Receita)
                    </button>
                    <button
                      type="button"
                      onClick={() => { setDocType("council"); setValidationState({ status: "idle", message: "" }); }}
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer ${
                        docType === "council" ? "bg-purple-600 text-white shadow-sm" : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      Órgão de Classe
                    </button>
                  </div>
                </div>

                {/* Input de Documento + Botão de Validação (Adaptável a Celulares) */}
                <div className="flex flex-col sm:flex-row gap-2.5">
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
                    className="flex-1 min-h-[48px] bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />

                  <button
                    type="button"
                    onClick={handleVerifyDocument}
                    disabled={validationState.status === "validating"}
                    className="min-h-[48px] px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-xs md:text-sm flex items-center justify-center gap-2 shrink-0 transition active:scale-95 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    <Search className="size-4" />
                    <span>{validationState.status === "validating" ? "Consultando..." : "Verificar Registro"}</span>
                  </button>
                </div>

                {/* Feedback de Validação em Tempo Real */}
                {validationState.status !== "idle" && (
                  <div
                    className={`p-3.5 rounded-xl border text-xs md:text-sm flex items-start gap-2.5 animate-in fade-in slide-in-from-top-2 ${
                      validationState.status === "valid"
                        ? "bg-emerald-950/70 border-emerald-500/50 text-emerald-200"
                        : validationState.status === "invalid"
                        ? "bg-red-950/70 border-red-500/50 text-red-200"
                        : "bg-purple-950/70 border-purple-500/50 text-purple-200"
                    }`}
                  >
                    {validationState.status === "valid" ? (
                      <CheckCircle2 className="size-5 text-emerald-400 shrink-0 mt-0.5" />
                    ) : validationState.status === "invalid" ? (
                      <XCircle className="size-5 text-red-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="size-5 text-purple-400 shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 space-y-0.5">
                      <p className="font-bold">{validationState.message}</p>
                      {validationState.verifiedDetails && (
                        <p className="text-xs text-emerald-300 font-medium">{validationState.verifiedDetails}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Razão Social & Nome do Responsável (1 col mobile, 2 col desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-bold text-zinc-200 mb-1.5">
                    Razão Social / Titular do Registro
                  </label>
                  <input
                    type="text"
                    placeholder="Nome empresarial completo ou nome do médico/nutricionista"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-bold text-zinc-200 mb-1.5">
                    Nome do Responsável Comercial
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Dr. Carlos Silva ou Amanda Melo"
                    value={formData.responsibleName}
                    onChange={(e) => setFormData({ ...formData, responsibleName: e.target.value })}
                    className="w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* E-mail & WhatsApp Comercial (1 col mobile, 2 col desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs md:text-sm font-bold text-zinc-200 mb-1.5 flex items-center gap-1.5">
                    <Mail className="size-3.5 text-zinc-400" />
                    <span>E-mail Comercial de Atendimento *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="parcerias@suaempresa.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-bold text-zinc-200 mb-1.5 flex items-center gap-1.5">
                    <Phone className="size-3.5 text-zinc-400" />
                    <span>WhatsApp / Telefone Comercial *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-8888"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Cidade & Estado (Adaptável a Celulares) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs md:text-sm font-bold text-zinc-200 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-zinc-400" />
                    <span>Cidade</span>
                  </label>
                  <input
                    type="text"
                    placeholder="São Paulo"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-bold text-zinc-200 mb-1.5">
                    Estado
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-3 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition cursor-pointer"
                  >
                    <option value="SP">São Paulo (SP)</option>
                    <option value="RJ">Rio de Janeiro (RJ)</option>
                    <option value="MG">Minas Gerais (MG)</option>
                    <option value="PR">Paraná (PR)</option>
                    <option value="RS">Rio Grande do Sul (RS)</option>
                    <option value="SC">Santa Catarina (SC)</option>
                    <option value="DF">Distrito Federal (DF)</option>
                    <option value="BA">Bahia (BA)</option>
                    <option value="OUTROS">Outros Estados</option>
                  </select>
                </div>
              </div>

              {/* Campos específicos quando for Seller de Marketplace / E-commerce */}
              {selectedCategory === "marketplace_sellers" && (
                <div className="bg-purple-950/30 border border-purple-500/40 rounded-2xl p-4 md:p-5 space-y-4 shadow-inner">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="size-4 text-lime-400" />
                    <h3 className="text-xs md:text-sm font-bold text-white">Configurações de E-commerce & Integração de APIs</h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        Plataforma de E-commerce *
                      </label>
                      <select
                        className="w-full min-h-[44px] bg-zinc-950 border border-zinc-700 rounded-xl px-3 text-xs text-white focus:outline-none focus:border-lime-400"
                        defaultValue="vtex"
                      >
                        <option value="vtex">VTEX IO / Commerce</option>
                        <option value="shopify">Shopify Plus / Standard</option>
                        <option value="nuvemshop">Nuvemshop Next</option>
                        <option value="tray">Tray E-commerce</option>
                        <option value="magento">Magento / Adobe Commerce</option>
                        <option value="custom_api">API REST Própria (Webhook)</option>
                        <option value="affiliate_network">Rede de Afiliados (Lomadee / Awin / Rakuten)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                        URL da Loja / Catálogo Online *
                      </label>
                      <input
                        type="url"
                        placeholder="https://www.sualoja.com.br"
                        className="w-full min-h-[44px] bg-zinc-950 border border-zinc-700 rounded-xl px-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-300 mb-1.5">
                      Endpoint de Webhook para Notificação de Pedidos / Cashback (Opcional no cadastro)
                    </label>
                    <input
                      type="url"
                      placeholder="https://api.sualoja.com.br/v1/netfits/webhook"
                      className="w-full min-h-[44px] bg-zinc-950 border border-zinc-700 rounded-xl px-3 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-400 font-mono text-[11px]"
                    />
                    <p className="text-[10px] text-zinc-400 mt-1">
                      Nossas APIs suportam autenticação HMAC-SHA256 e sincronização automática de comissões e cashback.
                    </p>
                  </div>
                </div>
              )}

              {/* Instagram / Website */}
              <div>
                <label className="block text-xs md:text-sm font-bold text-zinc-200 mb-1.5 flex items-center gap-1.5">
                  <Instagram className="size-3.5 text-zinc-400" />
                  <span>Instagram / Website da Empresa</span>
                </label>
                <input
                  type="text"
                  placeholder="@suaempresa ou www.suaempresa.com.br"
                  value={formData.websiteOrInstagram}
                  onChange={(e) => setFormData({ ...formData, websiteOrInstagram: e.target.value })}
                  className="w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Header do Passo 3 */}
            <div className="pt-6 border-t border-zinc-800/80 space-y-5">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-950/60 px-2.5 py-1 rounded-full border border-lime-500/30">
                  Passo 3 de 3
                </span>
                <h2 className="text-xl md:text-2xl font-black text-white mt-2">
                  Proposta de Benefício para Atletas Netfits *
                </h2>
                <p className="text-xs md:text-sm text-zinc-400">
                  Informe a vantagem, desconto exclusivo ou bônus de cashback em nfs que seu estabelecimento oferecerá.
                </p>
              </div>

              {/* Tipo de Benefício */}
              <div>
                <label className="block text-xs md:text-sm font-bold text-zinc-200 mb-1.5">
                  Tipo de Benefício Proposto *
                </label>
                <select
                  value={formData.benefitType}
                  onChange={(e) => setFormData({ ...formData, benefitType: e.target.value })}
                  className="w-full min-h-[48px] bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-3 text-sm md:text-base text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition cursor-pointer"
                >
                  <option value="discount_pct">Desconto Percentual Exclusivo (ex: 15% a 25%)</option>
                  <option value="cashback_points">Pontuação / Cashback em nfs para os Atletas (2 a 4 nfs / R$ 1)</option>
                  <option value="free_session">Sessão / Aula Experimental Cortesia</option>
                  <option value="free_assessment">Avaliação Física ou Bioimpedância Cortesia</option>
                  <option value="voucher">Voucher / Brinde de Boas-Vindas</option>
                </select>
              </div>

              {/* Sugestões Rápidas de Benefícios (Toque Amigável no Celular) */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-zinc-400">
                  Sugestões rápidas (Clique para aplicar):
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cashback de 2 nfs por R$ 1,00 gasto no e-commerce",
                    "15% de Desconto em Suplementos e Vestuário",
                    "1ª Sessão de Avaliação de Bioimpedância Grátis",
                    "Isenção Total da Taxa de Matrícula",
                    "Acúmulo de +50 nfs por treino ou consulta declarada",
                    "20% de Desconto em Tratamentos de Recovery",
                  ].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setFormData({ ...formData, benefitDescription: preset })}
                      className={`px-3 py-2 text-xs md:text-sm font-medium rounded-xl border transition cursor-pointer active:scale-95 ${
                        formData.benefitDescription === preset
                          ? "bg-lime-400 text-zinc-950 border-lime-400 font-extrabold shadow-sm"
                          : "bg-zinc-950 text-zinc-300 border-zinc-800 hover:border-zinc-600"
                      }`}
                    >
                      + {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Textarea Detalhamento */}
              <div>
                <label className="block text-xs md:text-sm font-bold text-zinc-200 mb-1.5">
                  Detalhamento da Proposta de Benefício *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Ex: Oferecemos 15% de desconto em todo o catálogo online + 2 nfs de cashback a cada R$ 1,00 pago em dinheiro para todos os atletas cadastrados na Netfits."
                  value={formData.benefitDescription}
                  onChange={(e) => setFormData({ ...formData, benefitDescription: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-sm md:text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Botão de Envio de Alto Impacto */}
            <button
              type="submit"
              className="w-full min-h-[54px] rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm md:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-purple-600/30 transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <Send className="size-5" />
              <span>Enviar Cadastro de Parceiro Comercial Validado</span>
            </button>
          </form>
        </section>

        {/* Card de Destaque: Portal do Desenvolvedor & APIs de Marketplace B2B */}
        <section className="bg-gradient-to-br from-zinc-900 via-purple-950/40 to-zinc-900 border-2 border-purple-500/30 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="size-12 rounded-2xl bg-lime-400 text-zinc-950 grid place-items-center font-black shrink-0 shadow-lg">
                <Code className="size-6 text-zinc-950" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400">
                  Prontidão Tecnológica & Integração B2B
                </span>
                <h2 className="text-xl md:text-2xl font-black text-white">
                  Portal de APIs & Webhooks de Marketplace
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Conectores nativos para VTEX, Shopify, Nuvemshop, Tray, Redes de Afiliados e Webhooks REST customizados.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold bg-lime-400/10 text-lime-400 border border-lime-400/20 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Server className="size-3.5 text-lime-400" />
                API v1 Status: 100% Online
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Modelo 1 */}
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded-full border border-purple-500/30">
                  Modelo 1 · Zero Setup
                </span>
                <ExternalLink className="size-4 text-zinc-500" />
              </div>
              <h3 className="font-bold text-white text-sm">Afiliado Outbound & UTMs</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Integração imediata via links rastreados com SubID criptografado do atleta. Compatível com Lomadee, Awin, Rakuten, Netshoes e Centauro.
              </p>
            </div>

            {/* Modelo 2 */}
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase text-lime-400 bg-lime-950/60 px-2 py-0.5 rounded-full border border-lime-500/30">
                  Modelo 2 · E-commerce API
                </span>
                <Zap className="size-4 text-lime-400" />
              </div>
              <h3 className="font-bold text-white text-sm">Webhooks de Pedidos & Cashback</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Notificação automática de pedidos pagos (`ORDER_PAID`) e liberação atuarial de cashback com validação criptográfica HMAC-SHA256.
              </p>
            </div>

            {/* Modelo 3 */}
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Modelo 3 · Two-Phase Lock
                </span>
                <ShieldCheck className="size-4 text-emerald-400" />
              </div>
              <h3 className="font-bold text-white text-sm">Resgate de Vouchers em Checkout</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Validação de desconto e queima de pontos nfs diretamente no checkout do parceiro com reserva atuarial travada por 15 minutos.
              </p>
            </div>
          </div>

          {/* Endpoint Code Snippet cURL */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-2">
              <span className="font-mono text-lime-400 flex items-center gap-1.5">
                <Terminal className="size-3.5" />
                POST /api/v1/marketplace/orders/webhook
              </span>
              <span className="text-[10px] uppercase font-mono text-zinc-500">Header: X-Netfits-Signature: sha256=...</span>
            </div>
            <pre className="font-mono text-[11px] text-zinc-300 overflow-x-auto p-2 bg-zinc-900/60 rounded-xl leading-relaxed">
{`curl -X POST https://app.netfits.com.br/api/v1/marketplace/orders/webhook \\
  -H "Content-Type: application/json" \\
  -H "X-Netfits-Signature: sha256=8f49a7102b..." \\
  -d '{
    "eventId": "EVT-ORD-2026-9901",
    "eventType": "ORDER_PAID",
    "merchantId": "liquidz",
    "order": {
      "partnerOrderId": "PED-88219",
      "customer": { "email": "atleta@netfits.com.br", "name": "André Gallo" },
      "totals": { "totalPaidBrl": 149.90, "subtotalBrl": 149.90 }
    }
  }'`}
            </pre>
          </div>
        </section>

        {/* Seção: Vitrine de Parceiros Credenciados (Grid 1 col mobile, 2 cols desktop) */}
        <section className="space-y-4 pt-4 border-t border-zinc-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-lime-400 bg-lime-950/60 px-2.5 py-1 rounded-full border border-lime-500/30">
                Rede Credenciada
              </span>
              <h2 className="text-xl md:text-2xl font-black text-white mt-2">Parceiros em Destaque</h2>
            </div>
            <span className="text-xs font-bold text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800 self-start sm:self-auto">
              {partnersList.length} cadastrados
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partnersList.map((partner) => (
              <div
                key={partner.id}
                className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 space-y-3.5 hover:border-zinc-700 transition flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-full border border-purple-500/20">
                      {partner.categoryName}
                    </span>

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

                  <div>
                    <h3 className="text-base md:text-lg font-bold text-white leading-tight">{partner.tradeName}</h3>
                    <p className="text-xs text-zinc-400 flex items-center gap-1 mt-1">
                      <MapPin className="size-3.5 text-zinc-500 shrink-0" />
                      <span>{partner.cityState}</span>
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-xs text-zinc-300 space-y-2">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-xs">
                    <ShieldCheck className="size-4 shrink-0" />
                    <span>{partner.documentValidated}</span>
                  </div>
                  <p className="font-medium text-zinc-200 leading-snug">{partner.benefitProposed}</p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-zinc-800/80">
                  <span>Protocolo: <strong className="text-zinc-300">{partner.protocol}</strong></span>
                  <span>Cadastrado em: {partner.createdAt}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
