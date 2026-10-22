import { useState, useMemo } from "react";
import {
  Rss, Download, Megaphone, Award, LayoutGrid, Receipt, ShieldCheck
} from "lucide-react";
import { toast } from "sonner";
import { PaginationControls } from "./admin-ui";

export interface ProprietaryFeedPostDef {
  id: string;
  title: string;
  partner: string;
  specialist: string;
  format: string;
  category: "Incentivo Mídia Netfits";
  theme: string;
  rewardRule: string;
  statusBadge: string;
  queryRegex: RegExp;
  simulatedViews: number;
  simulatedClicks: number;
  simulatedNfs: number;
}

export const PROPRIETARY_FEED_POSTS: ProprietaryFeedPostDef[] = [
  {
    id: "post_fibios_franco",
    title: "Dr. Franco Merici: Força, Hipertrofia & Longevidade Saudável",
    partner: "Fibios Medicina & Saúde",
    specialist: "Dr. Franco Merici — Médico (CRM) sócio fundador da Fibios",
    format: "Artigo Científico + Desafio Diário (Quiz 24h)",
    category: "Incentivo Mídia Netfits",
    theme: "Fisiologia do Exercício & Longevidade",
    rewardRule: "5 nfs resposta correta do quiz (leitura 0 nfs)",
    statusBadge: "🟢 Topo do Feed (Quiz Ativo)",
    queryRegex: /franco|força & longevidade/i,
    simulatedViews: 24500,
    simulatedClicks: 3800,
    simulatedNfs: 380000,
  },
  {
    id: "post_fibios_isabella_artigo",
    title: "Dra. Isabella Formigari: Biomarcadores, Ritmo Circadiano & Sono",
    partner: "Fibios Medicina & Saúde",
    specialist: "Dra. Isabella Formigari — Médica (CRM) sócia fundadora da Fibios",
    format: "Artigo Científico Permanente",
    category: "Incentivo Mídia Netfits",
    theme: "Nutrologia, Cronobiologia & Sono Reparador",
    rewardRule: "5 nfs resposta correta do quiz (leitura 0 nfs)",
    statusBadge: "🟢 Ativo no Feed (Permanente)",
    queryRegex: /isabella|sono|biomarcador/i,
    simulatedViews: 21800,
    simulatedClicks: 2900,
    simulatedNfs: 310000,
  },
  {
    id: "post_fibios_isabella_video",
    title: "Dra. Isabella Formigari: Protocolos de Longevidade & Consulta Médica",
    partner: "Fibios Medicina & Saúde",
    specialist: "Dra. Isabella Formigari — Médica (CRM) sócia fundadora da Fibios",
    format: "Vídeo Educativo (4:12) + Agendamento Clínico",
    category: "Incentivo Mídia Netfits",
    theme: "Medicina Preventiva & Recovery",
    rewardRule: "5 nfs quiz + 1 nf compartilhamento",
    statusBadge: "🟢 Ativo no Feed (Vídeo 4:12)",
    queryRegex: /vídeo|video|protocolo|consulta/i,
    simulatedViews: 19400,
    simulatedClicks: 2600,
    simulatedNfs: 265000,
  },
  {
    id: "post_fibios_spot",
    title: "Fibios Medicina e Saúde: Centro Integrado de Longevidade Pinheiros",
    partner: "Fibios Medicina & Saúde",
    specialist: "Corpo Clínico Integrado Fibios",
    format: "Spot Institucional Parceiro Fundador",
    category: "Incentivo Mídia Netfits",
    theme: "Centro Clínico de Referência",
    rewardRule: "1 nf por compartilhamento verificado",
    statusBadge: "🟢 Ativo no Feed (Spot Institucional)",
    queryRegex: /fibios medicina|compartilhamento/i,
    simulatedViews: 18200,
    simulatedClicks: 2100,
    simulatedNfs: 215000,
  },
  {
    id: "post_netfits_educational",
    title: "Time Netfits: O Propósito Netfits & Healthspan Integral (Os 3 Pilares)",
    partner: "Time Netfits Oficial",
    specialist: "Conselho Editorial Netfits",
    format: "Artigo Educacional Institucional",
    category: "Incentivo Mídia Netfits",
    theme: "Educação em Saúde, Hábitos & Propósito",
    rewardRule: "5 nfs quiz + 1 nf compartilhamento",
    statusBadge: "🟢 Ativo no Feed (Educacional)",
    queryRegex: /propósito|educacional|feed social|feed de conteúdo/i,
    simulatedViews: 15600,
    simulatedClicks: 1800,
    simulatedNfs: 114000,
  },
];

export const TOP_FEED_CONTENTS = [
  {
    id: "post_01",
    title: "Dr. Franco Merici: Força, Hipertrofia e Longevidade Saudável",
    author: "Dr. Franco Merici (Fibios)",
    category: "Fisiologia e Longevidade",
    viewsCount: 28400,
    clicksCount: 4120,
    sharesCount: 3890,
    nfsIssuedTotal: 189000,
    revenueBrl: 42500.0,
  },
  {
    id: "post_02",
    title: "Dra. Isabella Formigari: Biomarcadores, Ritmo Circadiano e Sono",
    author: "Dra. Isabella Formigari (Fibios)",
    category: "Nutrologia e Sono",
    viewsCount: 22100,
    clicksCount: 3450,
    sharesCount: 2980,
    nfsIssuedTotal: 148000,
    revenueBrl: 38000.0,
  },
  {
    id: "post_03",
    title: "Por que atletas usam boné com proteção UV50+? (Mizuno Run Sky)",
    author: "Mizuno e Rock Encantech",
    category: "Equipamentos e Run",
    viewsCount: 19800,
    clicksCount: 5120,
    sharesCount: 2450,
    nfsIssuedTotal: 162000,
    revenueBrl: 68400.0,
  },
  {
    id: "post_04",
    title: "Time Netfits: O Propósito Netfits e Healthspan Integral (Os 3 Pilares)",
    author: "Time Netfits Oficial",
    category: "Educação em Saúde",
    viewsCount: 17400,
    clicksCount: 2890,
    sharesCount: 2100,
    nfsIssuedTotal: 114000,
    revenueBrl: 24500.0,
  },
  {
    id: "post_05",
    title: "Fibios Medicina e Saúde: Protocolos Integrados Pinheiros",
    author: "Corpo Clínico Fibios",
    category: "Medicina Preventiva",
    viewsCount: 14900,
    clicksCount: 3980,
    sharesCount: 1890,
    nfsIssuedTotal: 129000,
    revenueBrl: 51200.0,
  },
];

interface AdminFeedTabProps {
  isReal: boolean;
  pf: number;
  shortLabel: string;
  realFeedNfsIssued: number;
  realFeedExpenseBrl: number;
  realFeedReadsNfs: number;
  realFeedReadsCount: number;
  realFeedQuizzesNfs: number;
  realFeedQuizzesCount: number;
  realFeedSharesNfs: number;
  realFeedSharesCount: number;
  realFeedSocialNfs: number;
  realFeedEngagedUsers: number;
  realFeedTransactions: any[];
  itemsPerPage?: number;
}

export function AdminFeedTab({
  isReal,
  pf,
  shortLabel,
  realFeedNfsIssued,
  realFeedExpenseBrl,
  realFeedReadsNfs,
  realFeedReadsCount,
  realFeedQuizzesNfs,
  realFeedQuizzesCount,
  realFeedSharesNfs,
  realFeedSharesCount,
  realFeedSocialNfs,
  realFeedEngagedUsers,
  realFeedTransactions,
  itemsPerPage = 10,
}: AdminFeedTabProps) {
  const [feedCategoryTab, setFeedCategoryTab] = useState<"all" | "proprietary" | "sponsored" | "audit">("all");
  const [feedPage, setFeedPage] = useState<number>(1);

  const feedMetrics = useMemo(() => {
    return isReal
      ? {
          totalAds: 0,
          totalAdvertisers: 0,
          adsPerAdvertiser: 0,
          totalAdRevenueBrl: 0,
          revenuePerAdBrl: 0,
          totalClicks: 0,
          clicksPerPost: 0,
          viewsPerPost: 0,
          proprietaryPostsCount: PROPRIETARY_FEED_POSTS.length,
          totalFeedNfsIssued: realFeedNfsIssued,
          totalFeedExpenseBrl: realFeedExpenseBrl,
          nfsIssuedForReads: realFeedReadsNfs,
          readsCount: realFeedReadsCount,
          nfsIssuedForQuizzes: realFeedQuizzesNfs,
          quizzesCount: realFeedQuizzesCount,
          nfsIssuedForShares: realFeedSharesNfs,
          sharesCount: realFeedSharesCount,
          nfsIssuedForClicks: realFeedSocialNfs,
          nfsIssuedForViews: realFeedReadsNfs + realFeedSocialNfs,
          engagedUsersCount: realFeedEngagedUsers,
        }
      : {
          totalAds: Math.max(1, Math.round(142 * Math.min(1, pf * 1.5))),
          totalAdvertisers: 28,
          adsPerAdvertiser: 5.07,
          totalAdRevenueBrl: 384500.0 * pf,
          revenuePerAdBrl: 2707.74,
          totalClicks: Math.round(184200 * pf),
          clicksPerPost: 14.34,
          viewsPerPost: 1000.0,
          proprietaryPostsCount: Math.round(24 * pf),
          totalFeedNfsIssued: Math.round(1284000 * pf),
          totalFeedExpenseBrl: Math.round(1284000 * pf * 0.01),
          nfsIssuedForReads: Math.round(420000 * pf),
          readsCount: Math.round(42000 * pf),
          nfsIssuedForQuizzes: Math.round(316800 * pf),
          quizzesCount: Math.round(31680 * pf),
          nfsIssuedForShares: Math.round(284000 * pf),
          sharesCount: Math.round(28400 * pf),
          nfsIssuedForClicks: Math.round(736800 * pf),
          nfsIssuedForViews: Math.round(547200 * pf),
          engagedUsersCount: Math.round(18500 * pf),
        };
  }, [
    isReal, pf, realFeedNfsIssued, realFeedExpenseBrl, realFeedReadsNfs,
    realFeedReadsCount, realFeedQuizzesNfs, realFeedQuizzesCount,
    realFeedSharesNfs, realFeedSharesCount, realFeedSocialNfs, realFeedEngagedUsers
  ]);

  return (
    <div className="space-y-6">
      {/* Header do Painel */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
              4º Pilar: Governança &amp; Operação
            </span>
            <span className="text-[10px] font-bold text-zinc-400">
              • {isReal ? "Banco Oficial (Tempo Real)" : `Projeção (${shortLabel})`}
            </span>
          </div>
          <h3 className="text-base font-extrabold text-white flex items-center gap-2">
            <Rss className="size-4 text-purple-400" />
            Painel de Feed, Mídias &amp; Incentivos
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Governança segregada: <b>Posts Patrocinados</b> (Receitas de Mídia B2B) e <b>Posts Proprietários &quot;Incentivo Mídia Netfits&quot;</b> (Despesas com Emissão de Pontos de Engajamento).
          </p>
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            type="button"
            onClick={() => toast.success(`Relatório de Mídias e Incentivos (${shortLabel}) exportado com sucesso!`)}
            className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition cursor-pointer"
          >
            <Download className="size-3.5" />
            Exportar Relatório
          </button>
        </div>
      </div>

      {/* COCKPIT EXECUTIVO BIPARTIDO: RECEITAS vs DESPESAS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
        {/* CARD 1: CATEGORIA POSTS PATROCINADOS (RECEITAS DE MÍDIA) */}
        <div className="bg-gradient-to-br from-emerald-950/30 via-zinc-900 to-zinc-950 border-2 border-emerald-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="size-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 grid place-items-center">
                <Megaphone className="size-4" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 block">
                  Categoria 1 • Entrada de Recursos
                </span>
                <h4 className="text-sm font-bold text-white">Posts Patrocinados (Retail Media)</h4>
              </div>
            </div>
            <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
              isReal
                ? "bg-zinc-800/80 text-zinc-400 border-zinc-700"
                : "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
            }`}>
              {isReal ? "🟡 0 Contratos Ativos" : "🟢 Em Negociação"}
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-zinc-400">Receita Total de Publicidade no Feed</span>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl sm:text-4xl font-black font-mono text-emerald-400">
                R$ {(feedMetrics.totalAdRevenueBrl ?? 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </p>
              <span className="text-xs font-semibold text-zinc-500">
                {isReal ? "(Nenhum post patrocinado ainda)" : "faturamento bruto"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
            <div className="bg-zinc-950/70 p-3 rounded-2xl border border-zinc-800/80 space-y-0.5">
              <span className="text-[10px] text-zinc-400 font-semibold block">Anunciantes</span>
              <p className="font-extrabold text-white text-base">{feedMetrics.totalAdvertisers}</p>
              <span className="text-[9px] text-zinc-500">{isReal ? "0 marcas reais" : "28 marcas B2B"}</span>
            </div>
            <div className="bg-zinc-950/70 p-3 rounded-2xl border border-zinc-800/80 space-y-0.5">
              <span className="text-[10px] text-zinc-400 font-semibold block">Peças Ativas</span>
              <p className="font-extrabold text-white text-base">{feedMetrics.totalAds}</p>
              <span className="text-[9px] text-zinc-500">{isReal ? "0 anúncios" : "peças ativas"}</span>
            </div>
            <div className="bg-zinc-950/70 p-3 rounded-2xl border border-zinc-800/80 space-y-0.5">
              <span className="text-[10px] text-zinc-400 font-semibold block">Ticket Médio</span>
              <p className="font-extrabold text-emerald-300 text-sm font-mono">
                R$ {(feedMetrics.revenuePerAdBrl ?? 0).toLocaleString("pt-BR", { minimumFractionDigits: 0 })}
              </p>
              <span className="text-[9px] text-zinc-500">por anúncio</span>
            </div>
            <div className="bg-zinc-950/70 p-3 rounded-2xl border border-zinc-800/80 space-y-0.5">
              <span className="text-[10px] text-zinc-400 font-semibold block">Clicks em Mídia</span>
              <p className="font-extrabold text-white text-base">
                {(feedMetrics.totalClicks ?? 0).toLocaleString("pt-BR")}
              </p>
              <span className="text-[9px] text-zinc-500">links externos</span>
            </div>
          </div>

          <p className="text-[11px] text-zinc-400 leading-relaxed bg-zinc-950/40 p-3 rounded-2xl border border-zinc-900">
            💡 <b>Modelo de Monetização:</b> Marcas parceiras e sellers contratam veiculação de posts patrocinados, native ads e banners no feed. Faturamento 100% líquido como receita comercial.
          </p>
        </div>

        {/* CARD 2: CATEGORIA POSTS PROPRIETÁRIOS (INCENTIVO MÍDIA NETFITS — DESPESAS) */}
        <div className="bg-gradient-to-br from-purple-950/30 via-zinc-900 to-zinc-950 border-2 border-purple-500/30 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="size-9 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 grid place-items-center">
                <Award className="size-4" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-400 block">
                  Categoria 2 • Incentivos &amp; Gamificação
                </span>
                <h4 className="text-sm font-bold text-white">Incentivo Mídia Netfits (Posts Próprios)</h4>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border bg-purple-500/20 text-purple-300 border-purple-500/30">
              🟢 100% Ativo em Produção
            </span>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-zinc-400">Total de Netfits Emitidos pelo Feed (Passivo de Recompensas)</span>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl sm:text-4xl font-black font-mono text-purple-300">
                {(feedMetrics.totalFeedNfsIssued ?? 0).toLocaleString("pt-BR")} nfs
              </p>
              <span className="text-xs font-semibold text-lime-400 font-mono">
                (Custo Contábil: R$ {(feedMetrics.totalFeedExpenseBrl ?? 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 })})
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs">
            <div className="bg-zinc-950/70 p-3 rounded-2xl border border-zinc-800/80 space-y-0.5">
              <span className="text-[10px] text-zinc-400 font-semibold block">Posts Próprios</span>
              <p className="font-extrabold text-white text-base">{feedMetrics.proprietaryPostsCount}</p>
              <span className="text-[9px] text-purple-400">Fibios, Franco, Isabella</span>
            </div>
            <div className="bg-zinc-950/70 p-3 rounded-2xl border border-zinc-800/80 space-y-0.5">
              <span className="text-[10px] text-zinc-400 font-semibold block">Leituras Artigos</span>
              <p className="font-extrabold text-white text-base">
                {feedMetrics.readsCount} <span className="text-[10px] text-lime-400 font-normal">(+{(feedMetrics.nfsIssuedForReads ?? 0)} nfs)</span>
              </p>
              <span className="text-[9px] text-zinc-500">&gt;25s validados</span>
            </div>
            <div className="bg-zinc-950/70 p-3 rounded-2xl border border-zinc-800/80 space-y-0.5">
              <span className="text-[10px] text-zinc-400 font-semibold block">Quizzes / Desafios</span>
              <p className="font-extrabold text-white text-base">
                {feedMetrics.quizzesCount} <span className="text-[10px] text-lime-400 font-normal">(+{(feedMetrics.nfsIssuedForQuizzes ?? 0)} nfs)</span>
              </p>
              <span className="text-[9px] text-zinc-500">respostas certas</span>
            </div>
            <div className="bg-zinc-950/70 p-3 rounded-2xl border border-zinc-800/80 space-y-0.5">
              <span className="text-[10px] text-zinc-400 font-semibold block">Shares / Interações</span>
              <p className="font-extrabold text-white text-base">
                {feedMetrics.sharesCount} <span className="text-[10px] text-lime-400 font-normal">(+{(feedMetrics.nfsIssuedForShares ?? 0)} nfs)</span>
              </p>
              <span className="text-[9px] text-zinc-500">com a comunidade</span>
            </div>
          </div>

          <p className="text-[11px] text-zinc-400 leading-relaxed bg-zinc-950/40 p-3 rounded-2xl border border-zinc-900">
            🎯 <b>Controle de Despesas:</b> Postagens próprias da Netfits emitem pontos como investimento em <b>Educação em Saúde, Hábitos e Retenção</b>. Cada 1 NFS emitido equivale a R$ 0,01 de poder de resgate no Shop.
          </p>
        </div>
      </div>

      {/* BARRA DE NAVEGAÇÃO ENTRE AS VISÕES DE GESTÃO DO FEED */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar border-b border-zinc-800">
        <button
          type="button"
          onClick={() => setFeedCategoryTab("all")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
            feedCategoryTab === "all"
              ? "bg-purple-600 text-white shadow-md"
              : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
          }`}
        >
          <LayoutGrid className="size-3.5" />
          Visão Consolidada
        </button>
        <button
          type="button"
          onClick={() => setFeedCategoryTab("proprietary")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
            feedCategoryTab === "proprietary"
              ? "bg-purple-600 text-white shadow-md"
              : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
          }`}
        >
          <Award className="size-3.5 text-purple-300" />
          🏢 Posts Proprietários: Incentivo Mídia Netfits ({PROPRIETARY_FEED_POSTS.length})
        </button>
        <button
          type="button"
          onClick={() => setFeedCategoryTab("sponsored")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
            feedCategoryTab === "sponsored"
              ? "bg-purple-600 text-white shadow-md"
              : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
          }`}
        >
          <Megaphone className="size-3.5 text-emerald-400" />
          📢 Posts Patrocinados: Retail Media ({isReal ? 0 : TOP_FEED_CONTENTS.length})
        </button>
        <button
          type="button"
          onClick={() => setFeedCategoryTab("audit")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
            feedCategoryTab === "audit"
              ? "bg-purple-600 text-white shadow-md"
              : "bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800"
          }`}
        >
          <Receipt className="size-3.5 text-lime-400" />
          📜 Extrato de Emissões de Incentivo ({realFeedTransactions.length})
        </button>
      </div>

      {/* SEÇÃO 1: TABELA DE POSTS PROPRIETÁRIOS (INCENTIVO MÍDIA NETFITS) */}
      {(feedCategoryTab === "all" || feedCategoryTab === "proprietary") && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-purple-400 animate-pulse" />
                <h4 className="text-base font-bold text-white">
                  Controle de Posts Proprietários — &quot;Incentivo Mídia Netfits&quot;
                </h4>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Postagens institucionais, científicas e médicas (Fibios, Dra. Isabella Formigari e Dr. Franco Merici). Despesas controladas por emissão de NFS.
              </p>
            </div>
            <span className="text-xs text-purple-300 font-bold bg-purple-500/10 px-3 py-1 rounded-xl border border-purple-500/20">
              5 Conteúdos Ativos • {feedMetrics.totalFeedNfsIssued.toLocaleString("pt-BR")} NFS Emitidos
            </span>
          </div>

          <div className="overflow-x-auto w-full max-w-full">
            <table className="w-full text-left text-xs text-zinc-300 min-w-[700px]">
              <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                <tr>
                  <th className="py-3 px-4">Postagem / Conteúdo</th>
                  <th className="py-3 px-4">Parceiro / Autor</th>
                  <th className="py-3 px-4">Formato &amp; Regra de Incentivo</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-right">Ações Auditadas</th>
                  <th className="py-3 px-4 text-right">NFS Emitidos</th>
                  <th className="py-3 px-4 text-right">Despesa (R$)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 font-medium">
                {PROPRIETARY_FEED_POSTS.map((post) => {
                  const matchingTxs = realFeedTransactions.filter((t) => post.queryRegex.test(t.description || ""));
                  const realCount = matchingTxs.length;
                  const realNfs = matchingTxs.reduce((sum, t) => sum + (t.amount || 0), 0);
                  const realExpenseBrl = realNfs * 0.01;

                  const displayCount = isReal ? realCount : Math.round(post.simulatedClicks * pf);
                  const displayNfs = isReal ? realNfs : Math.round(post.simulatedNfs * pf);
                  const displayExpenseBrl = isReal ? realExpenseBrl : Math.round(post.simulatedNfs * pf * 0.01);

                  return (
                    <tr key={post.id} className="hover:bg-zinc-800/40 transition">
                      <td className="py-3.5 px-4 max-w-[260px]">
                        <p className="font-bold text-white text-xs leading-snug">{post.title}</p>
                        <span className="inline-block mt-1 text-[9px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {post.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-bold text-zinc-200">{post.partner}</p>
                        <p className="text-[10px] text-zinc-400">{post.specialist}</p>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="text-zinc-300 text-xs">{post.format}</p>
                        <p className="text-[10px] text-lime-400 font-mono mt-0.5">{post.rewardRule}</p>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20 whitespace-nowrap">
                          {post.statusBadge}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-white">
                        {displayCount} {isReal ? "ações" : "est."}
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-purple-300">
                        +{displayNfs.toLocaleString("pt-BR")} nfs
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-lime-400">
                        R$ {displayExpenseBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-zinc-400">
              <ShieldCheck className="size-4 text-lime-400" />
              <span><b>Auditoria de Passivo:</b> Todos os pontos de incentivo emitidos são lastreados no passivo circulante a R$ 0,01 por NFS.</span>
            </div>
            <span className="font-mono font-bold text-lime-400 text-sm">
              Despesa Total com Incentivos: R$ {feedMetrics.totalFeedExpenseBrl.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>
      )}

      {/* SEÇÃO 2: TABELA DE POSTS PATROCINADOS (RETAIL MEDIA) */}
      {(feedCategoryTab === "all" || feedCategoryTab === "sponsored") && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-base font-bold text-white">
                  Controle de Posts Patrocinados — Retail Media B2B
                </h4>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Monetização com marcas patrocinadoras, fabricantes e lojistas terceiros que anunciam no Feed.
              </p>
            </div>
            {!isReal && (
              <span className="text-xs text-lime-400 font-bold bg-lime-400/10 px-3 py-1 rounded-xl border border-lime-400/20">
                Página {feedPage} de {Math.ceil(TOP_FEED_CONTENTS.length / itemsPerPage)}
              </span>
            )}
          </div>

          {isReal ? (
            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800 text-center space-y-3">
              <div className="size-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 grid place-items-center mx-auto">
                <Megaphone className="size-6" />
              </div>
              <h5 className="text-sm font-bold text-white">Nenhum Post ou Anúncio Patrocinado Contratado no Banco Oficial</h5>
              <p className="text-xs text-zinc-400 max-w-lg mx-auto leading-relaxed">
                Conforme o estágio atual de Go-Live, o feed está operando exclusivamente com <b>Posts Proprietários (&quot;Incentivo Mídia Netfits&quot;)</b> curados pela Fibios. O pipeline comercial de Retail Media está aberto para captação de marcas anunciantes (Nike, Asics, Dux, Centauro, etc.). Alterne para o modo <b>Projeção</b> para visualizar os dados orçados no Business Plan.
              </p>
              <div className="pt-2 flex items-center justify-center gap-3">
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400">
                  Receita Real de Mídia: R$ 0,00
                </span>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  Espaços Disponíveis: 12 cotas
                </span>
              </div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto w-full max-w-full">
                <table className="w-full text-left text-xs text-zinc-300 min-w-[640px]">
                  <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                    <tr>
                      <th className="py-3 px-4">Título do Conteúdo</th>
                      <th className="py-3 px-4">Autor / Anunciante</th>
                      <th className="py-3 px-4 text-right">Views ({shortLabel})</th>
                      <th className="py-3 px-4 text-right">Clicks</th>
                      <th className="py-3 px-4 text-right">Compartilhamentos</th>
                      <th className="py-3 px-4 text-right">NFS Emitidos</th>
                      <th className="py-3 px-4 text-right">Receita (R$)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800 font-medium">
                    {TOP_FEED_CONTENTS.slice((feedPage - 1) * itemsPerPage, feedPage * itemsPerPage).map((c, idx) => (
                      <tr key={c.id} className="hover:bg-zinc-800/40 transition">
                        <td className="py-3 px-4">
                          <p className="font-bold text-white">#{(feedPage - 1) * itemsPerPage + idx + 1} {c.title}</p>
                          <p className="text-[10px] text-zinc-400">{c.category}</p>
                        </td>
                        <td className="py-3 px-4 font-bold text-zinc-300">{c.author}</td>
                        <td className="py-3 px-4 text-right font-bold text-white">
                          {Math.round(c.viewsCount * pf).toLocaleString("pt-BR")}
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-lime-400">
                          {Math.round(c.clicksCount * pf).toLocaleString("pt-BR")}
                        </td>
                        <td className="py-3 px-4 text-right text-purple-300 font-bold">
                          {Math.round(c.sharesCount * pf).toLocaleString("pt-BR")}
                        </td>
                        <td className="py-3 px-4 text-right text-zinc-300 font-mono">
                          {Math.round(c.nfsIssuedTotal * pf).toLocaleString("pt-BR")} nfs
                        </td>
                        <td className="py-3 px-4 text-right font-bold text-lime-400">
                          R$ {(c.revenueBrl * pf).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <PaginationControls
                currentPage={feedPage}
                totalPages={Math.ceil(TOP_FEED_CONTENTS.length / itemsPerPage)}
                onPageChange={setFeedPage}
                totalItems={TOP_FEED_CONTENTS.length}
                itemsPerPage={itemsPerPage}
              />
            </>
          )}
        </div>
      )}

      {/* SEÇÃO 3: EXTRATO DE AUDITORIA EM TEMPO REAL DE EMISSÕES DE INCENTIVO */}
      {(feedCategoryTab === "all" || feedCategoryTab === "audit") && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl space-y-4 w-full">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <div className="flex items-center gap-2">
                <Receipt className="size-4 text-lime-400" />
                <h4 className="text-base font-bold text-white">
                  Extrato Contábil de Emissões de Incentivo no Feed
                </h4>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Registro de cada ponto emitido por leitura de artigo, desafio/quiz, vídeo ou compartilhamento registrado no banco de dados.
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/20">
              {realFeedTransactions.length} lançamentos auditados • Total: {realFeedNfsIssued} nfs
            </span>
          </div>

          {realFeedTransactions.length === 0 ? (
            <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 text-center space-y-2">
              <p className="text-xs text-zinc-400">Nenhum ponto de feed emitido até o momento.</p>
            </div>
          ) : (
            <div className="overflow-x-auto w-full max-w-full">
              <table className="w-full text-left text-xs text-zinc-300 min-w-[650px]">
                <thead className="bg-zinc-950 text-zinc-400 uppercase font-bold text-[10px] tracking-wider border-b border-zinc-800">
                  <tr>
                    <th className="py-3 px-4">Data / Hora</th>
                    <th className="py-3 px-4">Atleta Beneficiado</th>
                    <th className="py-3 px-4">Ação / Conteúdo</th>
                    <th className="py-3 px-4 text-center">Tipo de Incentivo</th>
                    <th className="py-3 px-4 text-right">Pontos Creditados</th>
                    <th className="py-3 px-4 text-right">Custo Contábil (R$)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 font-medium">
                  {realFeedTransactions.map((tx) => {
                    const isQuiz = /desafio|quiz/i.test(tx.description || "");
                    const isRead = /leitura|artigo/i.test(tx.description || "");
                    const isShare = tx.category === "share" || /compartilhamento/i.test(tx.description || "");
                    const actionType = isQuiz
                      ? "🧠 Quiz / Desafio"
                      : isRead
                      ? "📖 Leitura de Artigo"
                      : isShare
                      ? "🔗 Compartilhamento"
                      : "❤️ Engajamento / Interação";

                    const txDate = new Date(tx.timestamp);
                    const dateStr = !isNaN(txDate.getTime())
                      ? txDate.toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })
                      : "05/10/2026";

                    return (
                      <tr key={tx.id} className="hover:bg-zinc-800/40 transition">
                        <td className="py-3 px-4 text-zinc-400 font-mono text-[11px] whitespace-nowrap">
                          {dateStr}
                        </td>
                        <td className="py-3 px-4 font-bold text-white whitespace-nowrap">
                          {tx.userName}
                        </td>
                        <td className="py-3 px-4 max-w-[280px]">
                          <p className="text-zinc-200 text-xs truncate" title={tx.description}>
                            {tx.description}
                          </p>
                          <span className="text-[10px] text-zinc-500 font-mono">{tx.id}</span>
                        </td>
                        <td className="py-3 px-4 text-center whitespace-nowrap">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            isQuiz
                              ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                              : isRead
                              ? "bg-lime-500/20 text-lime-400 border-lime-500/30"
                              : "bg-blue-500/20 text-blue-300 border-blue-500/30"
                          }`}>
                            {actionType}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-lime-400 whitespace-nowrap">
                          +{tx.amount} nfs
                        </td>
                        <td className="py-3 px-4 text-right font-mono font-bold text-zinc-300 whitespace-nowrap">
                          R$ {((tx.amount || 0) * 0.01).toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
