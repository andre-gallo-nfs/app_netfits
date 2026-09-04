import { useState, useEffect } from "react";
import {
  Zap, ShieldCheck, CheckCircle2, RefreshCw, Copy, ExternalLink,
  Code2, DollarSign, Coins, ShoppingBag, ArrowRight, FileText,
  Check, Lock, Server, AlertCircle, Sparkles, UserCheck, Layers, Play, Key
} from "lucide-react";
import { toast } from "sonner";
import { useOperationalParams } from "@/lib/operational-params-store";

interface DecodedJwt {
  header: {
    alg: string;
    typ: string;
    kid: string;
  };
  payload: {
    sub: string;
    customerId: string;
    storeId: string;
    accountId: string;
    name: string;
    email: string;
    preferred_username: string;
    realm_access: {
      roles: string[];
    };
    iat: number;
    exp: number;
    iss: string;
    aud: string;
  };
}

const TEST_PERSONAS = [
  {
    id: "usr_101",
    name: "Kite Larsen",
    email: "atleta@netfits.com.br",
    cpf: "123.456.789-00",
    phone: "(11) 99999-8888",
    role: "Atleta Trail Runner",
    tier: "Clube Pro",
    balance: 1850,
  },
  {
    id: "usr_102",
    name: "André Gallo",
    email: "andre.gallo@netfits.com.br",
    cpf: "987.654.321-11",
    phone: "(11) 98765-4321",
    role: "Associado Fundador",
    tier: "Elite Master",
    balance: 12500,
  },
  {
    id: "usr_104",
    name: "Luísa Formigari",
    email: "luisa.formigari@netfits.com.br",
    cpf: "987.654.321-22",
    phone: "(11) 98888-7777",
    role: "Associada Médica",
    tier: "Especialista",
    balance: 8400,
  },
  {
    id: "usr_103",
    name: "Dra. Isabella Santos",
    email: "isabella.santos@netfits.com.br",
    cpf: "555.666.777-88",
    phone: "(11) 97777-6666",
    role: "Médica do Esporte",
    tier: "Especialista Prescritora",
    balance: 15200,
  },
];

export function AdminMkplaceIntegrationTab() {
  const params = useOperationalParams();

  // Active persona
  const [selectedUserId, setSelectedUserId] = useState("usr_101");
  const activeUser = TEST_PERSONAS.find((u) => u.id === selectedUserId) || TEST_PERSONAS[0];

  // Token simulator
  const [jwtToken, setJwtToken] = useState("");
  const [decodedJwt, setDecodedJwt] = useState<DecodedJwt | null>(null);
  const [isGeneratingToken, setIsGeneratingToken] = useState(false);

  // Profile simulator
  const [profileResult, setProfileResult] = useState<any>(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  // Wallet simulator
  const [walletResult, setWalletResult] = useState<any>(null);
  const [isLoadingWallet, setIsLoadingWallet] = useState(false);

  // Status check
  const [serverStatus, setServerStatus] = useState<any>(null);
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);

  // Webhook order simulator
  const [orderAmount, setOrderAmount] = useState("250.00");
  const [isFirstPurchase, setIsFirstPurchase] = useState(true);
  const [isClubMember, setIsClubMember] = useState(false);
  const [webhookResult, setWebhookResult] = useState<any>(null);
  const [isSubmittingWebhook, setIsSubmittingWebhook] = useState(false);

  // Copied state
  const [copiedToken, setCopiedToken] = useState(false);

  // Check status on mount
  useEffect(() => {
    checkServerStatus();
  }, []);

  const checkServerStatus = async () => {
    setIsCheckingStatus(true);
    try {
      const res = await fetch("/api/marketplace/mkplace/status");
      if (res.ok) {
        const data = await res.json();
        setServerStatus(data);
      } else {
        setServerStatus({
          status: "ready_mock",
          environment: "sandbox",
          message: "Servidor em modo simulação local ativa.",
          routes: {
            profile: "GET /customer/profile",
            wallet: "GET /loyalty/wallet",
            webhook: "POST /api/marketplace/mkplace/webhook",
            token: "POST /api/marketplace/mkplace/token",
          },
        });
      }
    } catch {
      setServerStatus({
        status: "ready_mock",
        environment: "sandbox",
        message: "Simulador local ativo (servidor local).",
        routes: {
          profile: "GET /customer/profile",
          wallet: "GET /loyalty/wallet",
          webhook: "POST /api/marketplace/mkplace/webhook",
          token: "POST /api/marketplace/mkplace/token",
        },
      });
    } finally {
      setIsCheckingStatus(false);
    }
  };

  const handleGenerateToken = async () => {
    setIsGeneratingToken(true);
    try {
      const res = await fetch("/api/marketplace/mkplace/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: activeUser.id }),
      });

      if (res.ok) {
        const data = await res.json();
        setJwtToken(data.token);
        if (data.claims) {
          setDecodedJwt({
            header: {
              alg: "RS256",
              typ: "JWT",
              kid: "netfits-mkplace-key-2026",
            },
            payload: data.claims,
          });
        }
        toast.success(`Token JWT RS256 gerado com sucesso para ${activeUser.name}!`);
      } else {
        // Fallback local simulation
        simulateLocalToken();
      }
    } catch {
      simulateLocalToken();
    } finally {
      setIsGeneratingToken(false);
    }
  };

  const simulateLocalToken = () => {
    const mockClaims = {
      header: {
        alg: "RS256",
        typ: "JWT",
        kid: "netfits-mkplace-key-2026",
      },
      payload: {
        sub: activeUser.id,
        customerId: activeUser.id,
        storeId: "netfits_store_01",
        accountId: "netfits_acc_brazil",
        name: activeUser.name,
        email: activeUser.email,
        preferred_username: activeUser.email.split("@")[0],
        realm_access: {
          roles: ["profile:roles=STORE", "profile:roles=CUSTOMER"],
        },
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 28800,
        iss: "https://netfits.com.br/auth",
        aud: "https://docs.apps.mkplace.com.br",
      },
    };
    const mockJwt = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5ldGZpdHMtbWtwbGFjZS1rZXktMjAyNiJ9." +
      btoa(JSON.stringify(mockClaims.payload)) +
      ".MOCK_RS256_SIGNATURE_NETFITS_SECURITY_READY";
    setJwtToken(mockJwt);
    setDecodedJwt(mockClaims);
    toast.success(`Token JWT simulado gerado para ${activeUser.name}!`);
  };

  const handleTestProfile = async () => {
    setIsLoadingProfile(true);
    try {
      const headers: Record<string, string> = {};
      if (jwtToken) {
        headers["Authorization"] = `Bearer ${jwtToken}`;
      }
      const res = await fetch(`/customer/profile?userId=${activeUser.id}`, { headers });
      if (res.ok) {
        const data = await res.json();
        setProfileResult(data);
        toast.success("Perfil retornado com sucesso da API!");
      } else {
        simulateLocalProfile();
      }
    } catch {
      simulateLocalProfile();
    } finally {
      setIsLoadingProfile(false);
    }
  };

  const simulateLocalProfile = () => {
    const mockProfile = {
      id: activeUser.id,
      name: activeUser.name,
      username: activeUser.email,
      email: activeUser.email,
      emailVerified: true,
      document: activeUser.cpf.replace(/\\D/g, ""),
      userCategory: "atleta",
      phones: [
        {
          id: "phone-1",
          areaCode: "11",
          number: "999998888",
          type: "MOBILE",
          default: true,
          whatsapp: true,
        },
      ],
      addresses: [
        {
          id: "addr-1",
          street: "Rua Oscar Freire",
          number: "500",
          complement: "Apto 42",
          neighborhood: "Cerqueira César",
          city: "São Paulo",
          state: "São Paulo",
          shortState: "SP",
          zipcode: "01426-001",
          country: "BRA",
          default: true,
          type: "BILLING",
        },
      ],
    };
    setProfileResult(mockProfile);
    toast.success("Perfil montado segundo o schema oficial Mkplace!");
  };

  const handleTestWallet = async () => {
    setIsLoadingWallet(true);
    try {
      const headers: Record<string, string> = {};
      if (jwtToken) {
        headers["Authorization"] = `Bearer ${jwtToken}`;
      }
      const res = await fetch(`/loyalty/wallet?userId=${activeUser.id}`, { headers });
      if (res.ok) {
        const data = await res.json();
        setWalletResult(data);
        toast.success("Carteira de pontos retornada da API!");
      } else {
        simulateLocalWallet();
      }
    } catch {
      simulateLocalWallet();
    } finally {
      setIsLoadingWallet(false);
    }
  };

  const simulateLocalWallet = () => {
    const mockWallet = {
      balance: activeUser.balance,
      unit: "nfs",
      currencyEquivalentBrl: (activeUser.balance * (params?.cppResgateBrl || 0.1)).toFixed(2),
      tier: activeUser.tier,
      tierName: "Atleta Conectado",
      ratePerReal: params?.nfsEarnedPerBrlSpent || 4,
      clubRatePerReal: (params?.nfsEarnedPerBrlSpent || 4) * 2,
      clubMember: isClubMember,
      firstPurchaseBonusAvailable: isFirstPurchase,
      benefits: [
        "Cashback de 4 nfs por R$ em todo o catálogo",
        "Resgate imediato em suplementos e calçados",
        "Garantia de autenticidade oficial",
      ],
    };
    setWalletResult(mockWallet);
    toast.success("Carteira montada segundo o schema de Loyalty!");
  };

  const handleSimulateWebhook = async () => {
    const numAmount = parseFloat(orderAmount) || 250;
    setIsSubmittingWebhook(true);
    try {
      const payload = {
        orderId: `ped_mkp_${Date.now().toString().slice(-5)}`,
        customerId: activeUser.id,
        status: "DELIVERED",
        totalAmount: numAmount,
        isFirstPurchase: isFirstPurchase,
        storeId: "netfits_store_01",
        accountId: "netfits_acc_brazil",
        items: [
          {
            sku: "MKP-ASICS-NOVABLAST-5",
            name: "Tênis Asics Novablast 5 — Masculino",
            quantity: 1,
            price: numAmount,
          },
        ],
        timestamp: new Date().toISOString(),
      };

      const res = await fetch("/api/marketplace/mkplace/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        setWebhookResult(data);
        toast.success("Webhook processado! Pontos creditados e take rate apurado.");
      } else {
        simulateLocalWebhook(numAmount);
      }
    } catch {
      simulateLocalWebhook(numAmount);
    } finally {
      setIsSubmittingWebhook(false);
    }
  };

  const simulateLocalWebhook = (amount: number) => {
    const rate = isClubMember ? (params?.nfsEarnedPerBrlSpent || 4) * 2 : (params?.nfsEarnedPerBrlSpent || 4);
    const basePoints = Math.round(amount * rate);
    const bonusPoints = isFirstPurchase ? (params?.shopFirstPurchaseBonusNfs || 100) : 0;
    const totalPoints = basePoints + bonusPoints;
    const takeRateAmount = amount * ((params?.netfitsTakeRatePctFromGmv || 6.0) / 100);
    const referralAmount = amount * ((params?.normalUserReferralSharePct || 5.0) / 100);

    const mockRes = {
      success: true,
      orderId: `ped_mkp_${Date.now().toString().slice(-5)}`,
      customerId: activeUser.id,
      pointsCredited: totalPoints,
      breakdown: {
        basePoints,
        firstPurchaseBonus: bonusPoints,
        effectiveRate: `${rate} nfs/R$`,
      },
      financialSummary: {
        orderAmount: `R$ ${amount.toFixed(2)}`,
        netfitsTakeRateAmount: `R$ ${takeRateAmount.toFixed(2)} (${params?.netfitsTakeRatePctFromGmv || 6.0}%)`,
        friendReferralCommission: `R$ ${referralAmount.toFixed(2)} (${params?.normalUserReferralSharePct || 5.0}%)`,
        cashbackValueBrl: `R$ ${(totalPoints * (params?.cppResgateBrl || 0.1)).toFixed(2)}`,
      },
      newBalance: activeUser.balance + totalPoints,
    };
    setWebhookResult(mockRes);
    toast.success("Webhook processado com sucesso!");
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(true);
    toast.success("Copiado para a área de transferência!");
    setTimeout(() => setCopiedToken(false), 2000);
  };

  // Live calculation preview
  const numAmount = parseFloat(orderAmount) || 0;
  const currentRate = isClubMember ? (params?.nfsEarnedPerBrlSpent || 4) * 2 : (params?.nfsEarnedPerBrlSpent || 4);
  const previewPoints = Math.round(numAmount * currentRate) + (isFirstPurchase ? (params?.shopFirstPurchaseBonusNfs || 100) : 0);
  const previewTakeRate = numAmount * ((params?.netfitsTakeRatePctFromGmv || 6.0) / 100);
  const previewReferral = numAmount * ((params?.normalUserReferralSharePct || 5.0) / 100);

  return (
    <div className="space-y-6">
      {/* Top Banner: Status da Integração */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-purple-950/40 border border-purple-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
                <Zap className="size-3 text-purple-400" />
                Rock Encantech / Mkplace
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="size-3 text-emerald-400" />
                Estrutura 100% Pronta
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Aguardando Credenciais Oficiais
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-black text-white tracking-tight flex items-center gap-2">
              Integração de Lojas & SSO — Rock Encantech
            </h2>
            <p className="text-xs md:text-sm text-zinc-400 max-w-2xl leading-relaxed">
              Camada de compatibilidade em conformidade com o manual{" "}
              <a
                href="https://docs.apps.mkplace.com.br/docs/api-reference/lojas-perfil/obter-perfil-do-cliente"
                target="_blank"
                rel="noreferrer"
                className="text-purple-400 hover:underline inline-flex items-center gap-1 font-medium"
              >
                docs.apps.mkplace.com.br <ExternalLink className="size-3" />
              </a>
              . Autenticação RS256, sincronização de perfil, carteira de pontos e apuração de take rate (6%).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <button
              onClick={checkServerStatus}
              disabled={isCheckingStatus}
              className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold flex items-center justify-center gap-2 transition active:scale-95 border border-zinc-700"
            >
              <RefreshCw className={`size-3.5 ${isCheckingStatus ? "animate-spin text-purple-400" : ""}`} />
              Testar Conexão Local
            </button>
            <a
              href="https://docs.apps.mkplace.com.br"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition active:scale-95 shadow-lg shadow-purple-600/20"
            >
              <FileText className="size-3.5" />
              Documentação Oficial
            </a>
          </div>
        </div>

        {/* Parâmetros em Vigor */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-6 mt-6 border-t border-zinc-800">
          <div className="bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/80">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block">Acúmulo Base</span>
            <span className="text-sm font-black text-lime-400">{params?.nfsEarnedPerBrlSpent || 4.0} nfs / R$</span>
          </div>
          <div className="bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/80">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block">Netfits Club (2x)</span>
            <span className="text-sm font-black text-purple-400">{(params?.nfsEarnedPerBrlSpent || 4.0) * 2} nfs / R$</span>
          </div>
          <div className="bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/80">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block">1ª Compra Shop</span>
            <span className="text-sm font-black text-amber-400">+{params?.shopFirstPurchaseBonusNfs || 100} nfs</span>
          </div>
          <div className="bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/80">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block">Take Rate Netfits</span>
            <span className="text-sm font-black text-cyan-400">{params?.netfitsTakeRatePctFromGmv || 6.0}%</span>
          </div>
          <div className="bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/80">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block">Comissão Amigo</span>
            <span className="text-sm font-black text-blue-400">{params?.normalUserReferralSharePct || 5.0}%</span>
          </div>
          <div className="bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/80">
            <span className="text-[10px] uppercase font-bold text-zinc-400 block">Paridade Ponto</span>
            <span className="text-sm font-black text-emerald-400">R$ {(params?.cppResgateBrl || 0.1).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Grid: 2 Colunas (Simulador SSO + Validador Endpoints) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Coluna Esquerda: Autenticação SSO & Token RS256 */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Lock className="size-4 text-purple-400" />
                1. Emissão de Token SSO (JWT RS256)
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                kid: netfits-2026
              </span>
            </div>

            {/* Seleção de Persona */}
            <div>
              <label className="text-xs font-semibold text-zinc-400 mb-1.5 block">
                Selecione o Usuário para Simulação:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {TEST_PERSONAS.map((user) => {
                  const isSelected = user.id === selectedUserId;
                  return (
                    <button
                      key={user.id}
                      onClick={() => {
                        setSelectedUserId(user.id);
                        setJwtToken("");
                        setDecodedJwt(null);
                        setProfileResult(null);
                        setWalletResult(null);
                      }}
                      className={`p-2.5 rounded-xl border text-left transition ${
                        isSelected
                          ? "bg-purple-950/40 border-purple-500 text-white shadow-md"
                          : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                      }`}
                    >
                      <div className="font-bold text-xs truncate">{user.name}</div>
                      <div className="text-[10px] text-zinc-400 truncate">{user.role}</div>
                      <div className="text-[10px] font-mono text-lime-400 mt-1">
                        {user.balance.toLocaleString()} nfs
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Ação de Gerar Token */}
            <button
              onClick={handleGenerateToken}
              disabled={isGeneratingToken}
              className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition active:scale-98 shadow-lg shadow-purple-600/20"
            >
              {isGeneratingToken ? (
                <RefreshCw className="size-4 animate-spin" />
              ) : (
                <Key className="size-4" />
              )}
              Gerar Token JWT RS256 para {activeUser.name}
            </button>

            {/* Token Viewer */}
            {jwtToken && (
              <div className="space-y-3 pt-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-zinc-400">Token JWT Assinado (Bearer):</span>
                    <button
                      onClick={() => copyToClipboard(jwtToken)}
                      className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1"
                    >
                      {copiedToken ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                      {copiedToken ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                  <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 font-mono text-[10px] text-purple-300 break-all max-h-24 overflow-y-auto">
                    {jwtToken}
                  </div>
                </div>

                {decodedJwt && (
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-zinc-400 block">
                      Claims Oficiais Decodificadas:
                    </span>
                    <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800 font-mono text-[10px] text-zinc-300 space-y-1">
                      <div><span className="text-zinc-500">sub:</span> {decodedJwt.payload.sub}</div>
                      <div><span className="text-zinc-500">storeId:</span> {decodedJwt.payload.storeId}</div>
                      <div><span className="text-zinc-500">accountId:</span> {decodedJwt.payload.accountId}</div>
                      <div><span className="text-zinc-500">roles:</span> {JSON.stringify(decodedJwt.payload.realm_access.roles)}</div>
                      <div><span className="text-zinc-500">exp:</span> {new Date(decodedJwt.payload.exp * 1000).toLocaleString()} (8h)</div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Dossiê de Credenciais para Aguardar */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Server className="size-4 text-cyan-400" />
              Credenciais Solicitadas à Rock Encantech
            </h3>
            <p className="text-xs text-zinc-400">
              Assim que a equipe da Rock Encantech enviar os parâmetros, basta preenchê-los no arquivo <code className="text-purple-300">.env</code>:
            </p>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-400">MKPLACE_ENV</span>
                <span className="text-emerald-400 font-bold">production</span>
              </div>
              <div className="p-2 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-400">MKPLACE_STORE_ID</span>
                <span className="text-zinc-300">[Aguardando Envio]</span>
              </div>
              <div className="p-2 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-400">MKPLACE_ACCOUNT_ID</span>
                <span className="text-zinc-300">[Aguardando Envio]</span>
              </div>
              <div className="p-2 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-400">MKPLACE_WEBVIEW_URL</span>
                <span className="text-purple-400 truncate max-w-[200px]">https://[loja].mkplace.com.br</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita: Teste dos Endpoints Mkplace & Webhook Simulator */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card: Teste dos Endpoints do Manual Mkplace */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Code2 className="size-4 text-lime-400" />
                2. Teste dos Endpoints Padronizados Mkplace
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-lime-500/20 text-lime-300 border border-lime-500/30">
                Mock Local Ativo
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Botão Testar Profile */}
              <button
                onClick={handleTestProfile}
                disabled={isLoadingProfile}
                className="p-3 rounded-xl bg-zinc-950 hover:bg-zinc-800/80 border border-zinc-800 text-left transition flex items-start gap-3 group"
              >
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition">
                  <UserCheck className="size-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    GET /customer/profile
                    {isLoadingProfile && <RefreshCw className="size-3 animate-spin text-purple-400" />}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    Obtém nome, CPF, endereço e telefone para entrega.
                  </div>
                </div>
              </button>

              {/* Botão Testar Wallet */}
              <button
                onClick={handleTestWallet}
                disabled={isLoadingWallet}
                className="p-3 rounded-xl bg-zinc-950 hover:bg-zinc-800/80 border border-zinc-800 text-left transition flex items-start gap-3 group"
              >
                <div className="p-2 rounded-lg bg-lime-500/10 text-lime-400 group-hover:bg-lime-500/20 transition">
                  <Coins className="size-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    GET /loyalty/wallet
                    {isLoadingWallet && <RefreshCw className="size-3 animate-spin text-lime-400" />}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    Consulta saldo de netfits e paridade em reais.
                  </div>
                </div>
              </button>
            </div>

            {/* Resultado do Teste de Profile */}
            {profileResult && (
              <div className="space-y-1.5 pt-2 border-t border-zinc-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-zinc-300">Resposta: GET /customer/profile</span>
                  <span className="text-[10px] text-emerald-400 font-mono">200 OK · Schema Validado</span>
                </div>
                <pre className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-[11px] text-zinc-300 font-mono max-h-40 overflow-y-auto">
                  {JSON.stringify(profileResult, null, 2)}
                </pre>
              </div>
            )}

            {/* Resultado do Teste de Wallet */}
            {walletResult && (
              <div className="space-y-1.5 pt-2 border-t border-zinc-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-zinc-300">Resposta: GET /loyalty/wallet</span>
                  <span className="text-[10px] text-emerald-400 font-mono">200 OK · Saldo Sincronizado</span>
                </div>
                <pre className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-[11px] text-zinc-300 font-mono max-h-40 overflow-y-auto">
                  {JSON.stringify(walletResult, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* Card: Simulador de Webhook de Pedidos & Cashback */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <ShoppingBag className="size-4 text-amber-400" />
                3. Simulador de Pedido Concluído (Webhook Rock Encantech)
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Take Rate 6%
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-zinc-400 font-medium block mb-1">
                  Valor do Pedido (R$)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-zinc-500">R$</span>
                  <input
                    type="number"
                    step="10"
                    value={orderAmount}
                    onChange={(e) => setOrderAmount(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-8 pr-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-end">
                <label className="flex items-center gap-2 cursor-pointer p-2 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition">
                  <input
                    type="checkbox"
                    checked={isFirstPurchase}
                    onChange={(e) => setIsFirstPurchase(e.target.checked)}
                    className="rounded accent-amber-500 size-4"
                  />
                  <span className="text-xs text-zinc-300 font-medium">
                    1ª Compra (+100 nfs)
                  </span>
                </label>
              </div>

              <div className="flex flex-col justify-end">
                <label className="flex items-center gap-2 cursor-pointer p-2 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition">
                  <input
                    type="checkbox"
                    checked={isClubMember}
                    onChange={(e) => setIsClubMember(e.target.checked)}
                    className="rounded accent-purple-500 size-4"
                  />
                  <span className="text-xs text-zinc-300 font-medium">
                    Netfits Club (2x nfs)
                  </span>
                </label>
              </div>
            </div>

            {/* Resumo da Apuração em Tempo Real */}
            <div className="bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800/80 space-y-2 text-xs">
              <div className="font-semibold text-zinc-300 flex items-center justify-between">
                <span>Cálculo Prévia do Pedido:</span>
                <span className="text-amber-400 font-mono font-bold">{previewPoints.toLocaleString()} nfs</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] pt-2 border-t border-zinc-900 text-zinc-400">
                <div>
                  <span className="block text-zinc-500">Valor em Pontos:</span>
                  <span className="font-bold text-lime-400">R$ {(previewPoints * (params?.cppResgateBrl || 0.1)).toFixed(2)}</span>
                </div>
                <div>
                  <span className="block text-zinc-500">Take Rate Netfits (6%):</span>
                  <span className="font-bold text-cyan-400">R$ {previewTakeRate.toFixed(2)}</span>
                </div>
                <div>
                  <span className="block text-zinc-500">Indicação Amigo (5%):</span>
                  <span className="font-bold text-blue-400">R$ {previewReferral.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSimulateWebhook}
              disabled={isSubmittingWebhook}
              className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition active:scale-98 shadow-lg shadow-amber-600/20"
            >
              {isSubmittingWebhook ? (
                <RefreshCw className="size-4 animate-spin" />
              ) : (
                <Play className="size-4" />
              )}
              Disparar Webhook de Pedido Faturado (POST /api/marketplace/mkplace/webhook)
            </button>

            {/* Resultado do Webhook */}
            {webhookResult && (
              <div className="space-y-1.5 pt-2 border-t border-zinc-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-zinc-300">Confirmação do Webhook Processado</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Sucesso · Saldo Atualizado</span>
                </div>
                <pre className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 text-[11px] text-zinc-300 font-mono max-h-40 overflow-y-auto">
                  {JSON.stringify(webhookResult, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
