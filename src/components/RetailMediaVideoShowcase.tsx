import { trackVideoView, trackProductSelect } from "@/lib/analytics";
import { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  X,
  Sparkles,
  Trophy,
  ShieldCheck,
  ShoppingBag,
  Clock,
  ArrowRight,
  ArrowDown,
  Lock,
  BadgeCheck,
  ExternalLink,
  ChevronRight,
  Zap,
} from "lucide-react";
import productMizunoCap from "@/assets/product-mizuno-cap.jpg";
import productLiquidz from "@/assets/product-liquidz.jpg";
import productCreatine from "@/assets/product-creatine.jpg";
import asicsNovablast from "@/assets/asics-novablast.jpg";
import gearWatch from "@/assets/gear-watch.jpg";
import { wallet } from "@/lib/wallet-store";
import { feedAntifraud } from "@/lib/feed-antifraud";
import { FeedSocialActions } from "@/components/FeedSocialActions";
import type { DetailProduct } from "@/components/ProductDetailSheet";
import { shopSelectionStore } from "@/lib/shop-selection-store";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

export interface DemoBrandProduct {
  id: string;
  brandName: string;
  brandTagline: string;
  category: string;
  timeAgo: string;
  durationLabel: string;
  durationSec: number;
  poster: string;
  badge: string;
  youtubeId: string;
  accentColor: string; // Tailwind color token
  hookTitle: string;
  hookSubtitle: string;
  videoHighlights: { atSec: number; text: string }[];
  quiz: {
    id: string;
    question: string;
    options: {
      id: string;
      text: string;
      isCorrect: boolean;
      feedback: string;
    }[];
  };
  shopProduct: DetailProduct;
}

export const DEMO_BRAND_PRODUCTS: DemoBrandProduct[] = [
  {
    id: "demo-liquidz",
    brandName: "Liquidz",
    brandTagline: "Hidratação de Alta Performance & Eletrólitos",
    category: "Suplementação & Hidratação",
    timeAgo: "há 1 hora",
    durationLabel: "0:59 min",
    durationSec: 59,
    poster: productLiquidz,
    badge: "Reels / TikTok (9:16)",
    youtubeId: "efKeKBklLyw",
    accentColor: "from-blue-600 to-cyan-500",
    hookTitle: "Por que água pura não hidrata suas células após 1h de suor?",
    hookSubtitle: "A ciência da osmolaridade celular: como a reposição de sódio e potássio biodisponível previne cãibras e queda de foco.",
    videoHighlights: [
      { atSec: 8, text: "🔬 Osmolaridade celular: Por que água pura dilui o sangue após 1h de suor" },
      { atSec: 25, text: "💧 Reposição mineral: Sódio, Potássio e Magnésio sem açúcar" },
      { atSec: 42, text: "⚡ Absorção rápida: Prevenção de cãibras e preservação da volemia" },
      { atSec: 53, text: "🏆 90% Concluído: Desafio técnico desbloqueado (+10 nfs)" },
    ],
    quiz: {
      id: "quiz-sponsor-liquidz",
      question: "Qual a função primária dos eletrólitos com sódio biodisponível durante treinos com mais de 60 minutos sob calor?",
      options: [
        {
          id: "lq-1",
          text: "Manter a pressão osmótica celular, evitando a hiponatremia e cãibras musculares sem sobrecarregar a digestão.",
          isCorrect: true,
          feedback: "Exato! O suor elimina minerais essenciais. Repor sódio e potássio preserva o volume plasmático e a contração muscular.",
        },
        {
          id: "lq-2",
          text: "Forçar os rins a interromperem completamente a filtração de toxinas.",
          isCorrect: false,
          feedback: "Incorreto. A reposição de eletrólitos equilibra o trabalho renal e a volemia sanguínea.",
        },
        {
          id: "lq-3",
          text: "Acelerar a queima de massa muscular para gerar energia rápida.",
          isCorrect: false,
          feedback: "Incorreto. A hidratação correta é anticatabólica e protege as fibras musculares.",
        },
      ],
    },
    shopProduct: {
      id: "m01",
      title: "Liquidz de Jaboticaba — Caixa 12 Sachês",
      price: "R$ 99,55",
      cashback: "+199 nfs",
      image: productLiquidz,
      seller: "Liquidz Official Store",
      sellerType: "marca_parceira",
      sellerId: "liquidz",
      rating: 4.9,
      reviews: "1.420 avaliações",
      tag: "Suplementação & Hidratação",
      description: "Reposição eletrolítica avançada com sabor natural de jaboticaba, zero açúcares e rápida absorção celular.",
    },
  },
  {
    id: "demo-dux-creatine",
    brandName: "Dux Nutrition",
    brandTagline: "Nutrição Esportiva Limpa & Longevidade",
    category: "Força & Longevidade Mitocondrial",
    timeAgo: "há 3 horas",
    durationLabel: "1:28 min",
    durationSec: 88,
    poster: productCreatine,
    badge: "Reels / TikTok (9:16)",
    youtubeId: "_CyuUVK3HMs",
    accentColor: "from-amber-500 to-orange-600",
    hookTitle: "Creatina não é apenas para quem faz hipertrofia pesada!",
    hookSubtitle: "Como a pureza de 99,95% atua como combustível do cérebro, na saúde mitocondrial e na força pós-40 anos.",
    videoHighlights: [
      { atSec: 10, text: "🧠 Além do músculo: Creatina como regenerador primário de ATP celular" },
      { atSec: 30, text: "🔬 Padrão de Pureza: Matéria-prima 100% pura sem aditivos nocivos" },
      { atSec: 55, text: "🛡️ Saúde mitocondrial & longevidade: Preservação de força e cognição" },
      { atSec: 79, text: "🏆 90% Concluído: Desafio pedagógico liberado (+10 nfs)" },
    ],
    quiz: {
      id: "quiz-sponsor-dux",
      question: "Por que a certificação de alta pureza (selo Creapure® da Dux) é o padrão-ouro médico para suplementação continuada de creatina?",
      options: [
        {
          id: "dx-1",
          text: "Garante 99,95% de matéria-prima pura, livre de contaminantes tóxicos como dicianodiamida e metais pesados.",
          isCorrect: true,
          feedback: "Perfeito! A certificação Creapure® assegura pureza farmacêutica e segurança celular para uso diário ao longo de anos.",
        },
        {
          id: "dx-2",
          text: "Permite que o produto seja absorvido sem necessidade de praticar exercícios físicos.",
          isCorrect: false,
          feedback: "Incorreto. A creatina age em sinergia com o estímulo físico para regenerar o fosfato de creatina nas células.",
        },
        {
          id: "dx-3",
          text: "Aumenta o peso na balança retendo gordura visceral.",
          isCorrect: false,
          feedback: "Incorreto. A creatina hidrata o meio intracelular muscular e não causa ganho de tecido adiposo.",
        },
      ],
    },
    shopProduct: {
      id: "m19",
      title: "Creatina Creapure® Dux 300g",
      price: "R$ 179,00",
      cashback: "+716 nfs",
      image: productCreatine,
      seller: "Dux Nutrition",
      sellerType: "marca_parceira",
      sellerId: "dux",
      rating: 5.0,
      reviews: "3.850 avaliações",
      tag: "Força & Longevidade",
      description: "Creatina monohidratada com matéria-prima Creapure alemã, micronizada para diluição instantânea e máxima bioabsorção.",
    },
  },
  {
    id: "demo-asics-novablast",
    brandName: "Asics Brasil",
    brandTagline: "Inovação Biomecânica & Corrida",
    category: "Calçados & Performance",
    timeAgo: "há 4 horas",
    durationLabel: "1:00 min",
    durationSec: 60,
    poster: asicsNovablast,
    badge: "Reels / TikTok (9:16)",
    youtubeId: "mytbKMbK3TA",
    accentColor: "from-emerald-500 to-teal-600",
    hookTitle: "A Biomecânica do NovaBlast 4: Retorno de energia e proteção articular",
    hookSubtitle: "A física da espuma FF BLAST+ ECO e a geometria que economiza oxigênio a cada km rodado.",
    videoHighlights: [
      { atSec: 8, text: "👟 Entressola FF BLAST+ ECO: Geometria trampolim com máxima propulsão" },
      { atSec: 22, text: "🧪 Absorção de impacto: Menor fadiga na tíbia e articulações a cada passada" },
      { atSec: 40, text: "🏃 Transição Rocker: Rolagem fluida do pé com economia de energia" },
      { atSec: 54, text: "🏆 90% Concluído: Desafio biomecânico liberado (+10 nfs)" },
    ],
    quiz: {
      id: "quiz-sponsor-asics",
      question: "De acordo com os testes biomecânicos da Asics, qual o principal benefício da entressola responsiva em treinos de rodagem?",
      options: [
        {
          id: "as-1",
          text: "Reduzir o estresse articular na tíbia e panturrilha por meio da absorção de impacto aliada ao retorno elástico de energia.",
          isCorrect: true,
          feedback: "Corretíssimo! A dissipação de impacto combinada à propulsão diminui a fadiga periférica e preserva tendões.",
        },
        {
          id: "as-2",
          text: "Forçar o atleta a correr com a mesma rigidez de um piso de concreto.",
          isCorrect: false,
          feedback: "Incorreto. A entressola é projetada exatamente para atenuar as ondas de choque mecânico.",
        },
        {
          id: "as-3",
          text: "Aumentar o peso do calçado para deixar o treino artificialmente mais pesado.",
          isCorrect: false,
          feedback: "Incorreto. O NovaBlast prioriza leveza extrema com máxima resposta elástica.",
        },
      ],
    },
    shopProduct: {
      id: "m02",
      title: "Asics NovaBlast 4 — Masculino / Feminino",
      price: "R$ 1.290,00",
      cashback: "+1.290 nfs",
      image: asicsNovablast,
      seller: "Asics Brasil Official",
      sellerType: "marca_parceira",
      sellerId: "asics",
      rating: 4.9,
      reviews: "920 avaliações",
      tag: "Corrida & Performance",
      description: "Tênis de alta rodagem com espuma FF BLAST+ ECO, cabedal respirável em engineered mesh e sola AHAR+ de alta durabilidade.",
    },
  },
  {
    id: "demo-garmin-forerunner",
    brandName: "Garmin Brasil",
    brandTagline: "Telemetria Esportiva & GPS de Alta Precisão",
    category: "Tecnologia & Telemetria",
    timeAgo: "há 6 horas",
    durationLabel: "0:30 min",
    durationSec: 30,
    poster: gearWatch,
    badge: "Reels / TikTok (9:16)",
    youtubeId: "bSnlW44TGV8",
    accentColor: "from-purple-600 to-indigo-600",
    hookTitle: "Como a Variabilidade Cardíaca (VFC) no Garmin guia seu treino?",
    hookSubtitle: "O número invisível no seu pulso que avisa o momento exato de acelerar ou dar um passo atrás para regenerar.",
    videoHighlights: [
      { atSec: 5, text: "⌚ Sensor óptico Elevate: Medição contínua no pulso durante a corrida" },
      { atSec: 12, text: "📉 VFC Baixa: Alerta precoce de sobrecarga física e estresse sistêmico" },
      { atSec: 20, text: "📈 VFC Equilibrada: Estado ótimo para absorver treinos de intensidade" },
      { atSec: 27, text: "🏆 90% Concluído: Desafio patrocinado liberado (+10 nfs)" },
    ],
    quiz: {
      id: "quiz-sponsor-garmin",
      question: "O que a tendência da Variabilidade da Frequência Cardíaca (VFC) basal no seu Garmin indica sobre sua recuperação?",
      options: [
        {
          id: "gm-1",
          text: "Reflete o equilíbrio entre estresse e regeneração do sistema nervoso autônomo, indicando a prontidão para o esforço.",
          isCorrect: true,
          feedback: "Exato! A VFC reflete a modulação parassimpática, permitindo periodizar o treino com base na recuperação biológica real.",
        },
        {
          id: "gm-2",
          text: "Mede unicamente a quantidade de água no estômago do atleta antes da corrida.",
          isCorrect: false,
          feedback: "Incorreto. A VFC mede a modulação autônoma cardíaca e não o volume estomacal.",
        },
        {
          id: "gm-3",
          text: "Indica que o atleta nunca mais precisará dormir 8 horas por noite.",
          isCorrect: false,
          feedback: "Incorreto. Uma boa VFC depende diretamente de noites consistentes de sono de qualidade.",
        },
      ],
    },
    shopProduct: {
      id: "m20",
      title: "Garmin Forerunner 965 GPS Solar Titan",
      price: "R$ 4.299,00",
      cashback: "+4.299 nfs",
      image: gearWatch,
      seller: "Garmin Store Brasil",
      sellerType: "marca_parceira",
      sellerId: "garmin",
      rating: 5.0,
      reviews: "612 avaliações",
      tag: "GPS & Telemetria",
      description: "Smartwatch esportivo de ponta com tela AMOLED touch, mapas topográficos integrados, métricas avançadas de VFC e bateria de até 23 dias.",
    },
  },
];

export function RetailMediaVideoShowcase() {
  const navigate = useNavigate();
  const [activeModalProduct, setActiveModalProduct] = useState<DemoBrandProduct | null>(null);

  const isStaging =
    typeof import.meta !== "undefined" &&
    (import.meta.env?.VITE_APP_ENV === "staging" || import.meta.env?.DEV);

  const handleBuyProduct = (product: DetailProduct) => {
    trackProductSelect(product.id, product.title, product.price);
    toast.success(`Abrindo "${product.title}" no Shop Netfits...`, {
      description: `Parceiro: ${product.seller || "Shop Netfits"} · Ganhe ${product.cashback}`,
    });

    shopSelectionStore.setProduct({
      id: product.id,
      title: product.title,
      price: product.price,
      cashback: product.cashback || "+360 nfs",
      seller: product.seller || "Shop Netfits",
      image: product.image || productLiquidz,
      targetPath: product.targetPath || "https://loja.netfits.com.br",
    });

    navigate({
      to: "/market",
      search: { product: product.id },
    });
  };

  if (!isStaging) {
    return null;
  }

  // Estados de reprodução do vídeo
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [elapsedSec, setElapsedSec] = useState<number>(0);
  const [progressPct, setProgressPct] = useState<number>(0);
  const [hasQualifiedAntifraud, setHasQualifiedAntifraud] = useState<boolean>(false);

  // Estados do Quiz
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizError, setQuizError] = useState<string | null>(null);

  // Referência para rolagem suave ao liberar o Quiz
  const quizSectionRef = useRef<HTMLDivElement | null>(null);
  const modalScrollRef = useRef<HTMLDivElement | null>(null);

  // Simulação de reprodução com controle de Dwell Time
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (activeModalProduct && isPlaying && progressPct < 100) {
      timer = setInterval(() => {
        setElapsedSec((prev) => {
          const nextSec = prev + 1;
          const nextPct = Math.min(100, Math.round((nextSec / activeModalProduct.durationSec) * 100));
          setProgressPct(nextPct);

          // Trava Antifraude de 90%
          if (nextPct >= 90 && !hasQualifiedAntifraud) {
            setHasQualifiedAntifraud(true);
            feedAntifraud.recordAction("video_view", activeModalProduct.id, 0);
            trackVideoView(activeModalProduct.id, activeModalProduct.brandName, 100, activeModalProduct.durationSec);
            toast.success("🎉 Retenção de 90% auditada com sucesso! O Quiz Patrocinado de +10 nfs foi liberado.");
            setTimeout(() => {
              quizSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);
          }

          if (nextPct >= 100) {
            setIsPlaying(false);
            if (timer) clearInterval(timer);
          }
          return nextSec;
        });
      }, 1000); // 1 segundo real a cada 1000ms sincronizado exatamente com a duração real do vídeo
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [activeModalProduct, isPlaying, progressPct, hasQualifiedAntifraud]);

  const handleOpenVideo = (item: DemoBrandProduct) => {
    setActiveModalProduct(item);
    trackVideoView(item.id, item.brandName, 0, item.durationSec);
    setElapsedSec(0);
    setProgressPct(0);
    setSelectedOption(item.quiz.options[0]?.id || "");
    setQuizSubmitted(false);
    setQuizError(null);

    // Checa se já havia qualificado antes
    const alreadyDone = feedAntifraud.hasClaimed("quiz", item.quiz.id);
    if (alreadyDone) {
      setHasQualifiedAntifraud(true);
      setQuizSubmitted(true);
    } else {
      setHasQualifiedAntifraud(false);
    }

    setIsPlaying(true);
  };

  const handleCloseModal = () => {
    if (!hasQualifiedAntifraud && progressPct < 90) {
      toast.info("Atenção: A retenção de 90% é necessária para destravar o Quiz de +10 nfs do patrocinador.");
    }
    setActiveModalProduct(null);
    setIsPlaying(false);
  };

  const handleQuizSubmit = () => {
    if (!activeModalProduct) return;

    if (quizSubmitted) {
      toast.info("Você já concluiu este desafio patrocinado!");
      return;
    }

    if (!hasQualifiedAntifraud && progressPct < 90) {
      toast.warning("🚫 Antifraude Netfits: Assista ao menos 90% do vídeo para habilitar a resposta do Quiz.");
      return;
    }

    const opt = activeModalProduct.quiz.options.find((o) => o.id === selectedOption);
    if (!opt) return;

    if (opt.isCorrect) {
      // 10 nfs para post patrocinado (conforme Tabela Mestre e GEMINI.md)
      wallet.earn(10, `Quiz Patrocinado: ${activeModalProduct.brandName}`);
      feedAntifraud.recordAction("quiz", activeModalProduct.quiz.id, 10);
      setQuizSubmitted(true);
      setQuizError(null);
      toast.success(`🎉 Resposta correta! +10 nfs creditados na sua carteira digital.`);
    } else {
      setQuizError(opt.feedback || "Resposta incorreta. Reveja a explicação no vídeo!");
      toast.error("Resposta incorreta. Tente novamente após rever o vídeo.");
    }
  };

  // Encontra o highlight ativo no segundo atual
  const currentHighlight =
    activeModalProduct?.videoHighlights
      .slice()
      .reverse()
      .find((h) => elapsedSec >= h.atSec)?.text ||
    "Apresentação da tecnologia oficial do parceiro";

  return (
    <>
      {DEMO_BRAND_PRODUCTS.map((brand) => {
        const isQuizClaimed = typeof window !== "undefined" && feedAntifraud.hasClaimed("quiz", brand.quiz.id);

        return (
          <article
            key={brand.id}
            className="mx-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-4 sm:p-5 shadow-sm space-y-4"
          >
            {/* Topo: Marca e Badge de Patrocínio */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-11 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700 flex items-center justify-center p-2 text-white font-black text-xs shadow-inner">
                  {brand.brandName.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                      {brand.brandName}
                    </h3>
                    <BadgeCheck className="size-4 text-purple-600 dark:text-purple-400 fill-purple-600/20" />
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                      Patrocinado
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    {brand.brandTagline} · {brand.timeAgo}
                  </p>
                </div>
              </div>

              <span className="text-[10px] font-bold text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full border border-zinc-200 dark:border-zinc-700">
                {brand.category}
              </span>
            </div>

            {/* Thumbnail do Vídeo Vertical 09:16 com Botão Play e Badges */}
            <div
              onClick={() => handleOpenVideo(brand)}
              className="relative rounded-3xl overflow-hidden aspect-[9/16] max-w-[340px] sm:max-w-[360px] mx-auto bg-zinc-950 cursor-pointer group shadow-2xl border border-zinc-800"
              role="button"
              tabIndex={0}
              aria-label={`Assistir ao vídeo vertical da ${brand.brandName}`}
            >
              <img
                src={brand.poster}
                alt={brand.hookTitle}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

              {/* Badge Topo */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="bg-purple-600 text-white text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="size-3 text-lime-400" />
                  <span>{brand.badge}</span>
                </span>
              </div>

              {/* Duração & Badge de Vídeo Real */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5">
                <span className="bg-red-600/90 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                  <span className="size-1.5 rounded-full bg-white animate-pulse" />
                  <span>Vídeo Real HD</span>
                </span>
                <div className="bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                  <Clock className="size-3 text-purple-400" />
                  <span>{brand.durationLabel}</span>
                </div>
              </div>

              {/* Botão Central de Play com efeito Pulsante */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="size-16 rounded-full bg-purple-600 text-white grid place-items-center shadow-2xl group-hover:scale-110 transition-transform ring-4 ring-purple-600/30">
                  <Play className="size-7 ml-0.5 fill-white text-white" />
                </div>
              </div>

              {/* Legenda de Gancho sobreposta no rodapé */}
              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1 p-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-lime-400 uppercase tracking-widest">
                    {isQuizClaimed
                      ? "✓ Desafio Respondido · +10 nfs Coletados"
                      : "Vídeo Oficial da Marca · +10 nfs"}
                  </span>
                  <span className="text-[10px] text-zinc-300 font-medium hidden sm:inline">
                    · Toque para assistir com som
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-black leading-snug drop-shadow-md">
                  {brand.hookTitle}
                </h4>
                <p className="text-xs text-zinc-200 line-clamp-2 drop-shadow-sm font-medium">
                  {brand.hookSubtitle}
                </p>
              </div>
            </div>

            {/* Rodapé: Ações Sociais e Atalho Direto de Conversão */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-zinc-100 dark:border-zinc-800">
              <FeedSocialActions
                id={brand.id}
                title={`${brand.brandName}: ${brand.hookTitle}`}
                postCategory="sponsored"
              />

              <button
                type="button"
                onClick={() => handleBuyProduct(brand.shopProduct)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer active:scale-98"
              >
                <ShoppingBag className="size-3.5" />
                <span>Comprar este produto no Shop</span>
              </button>
            </div>
          </article>
        );
      })}

      {/* ========================================================================= */}
      {/* 3. MODAL DE REPRODUÇÃO DE VÍDEO COM AUDITORIA ANTIFRAUDE & QUIZ PATROCINADO */}
      {/* ========================================================================= */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-zinc-950 border border-zinc-800 w-full max-w-sm sm:max-w-md rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[92vh] sm:max-h-[94vh]">
            {/* Header do Modal — Fixo no topo com X e informações da marca */}
            <div className="p-3.5 border-b border-zinc-800/80 flex items-center justify-between text-white bg-zinc-900/90 backdrop-blur-md shrink-0 z-20">
              <div className="flex items-center gap-2">
                <span className="size-8 rounded-xl bg-purple-600/20 text-purple-400 grid place-items-center text-xs font-black">
                  {activeModalProduct.brandName.slice(0, 2).toUpperCase()}
                </span>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold text-white">
                      {activeModalProduct.brandName}
                    </h4>
                    <BadgeCheck className="size-3.5 text-purple-400" />
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-400 border border-pink-500/30">
                      Reels 09:16
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-400">Vídeo Vertical Oficial de Campanha</p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                className="size-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center transition cursor-pointer"
                aria-label="Fechar vídeo"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Container Principal de Rolagem Unificada: o vídeo sobe na tela liberando espaço total para o Quiz */}
            <div
              ref={modalScrollRef}
              className="flex-1 overflow-y-auto overscroll-contain focus:outline-none divide-y divide-zinc-900"
            >
              {/* Player de Vídeo Real Vertical 09:16 (Instagram Reels / TikTok / Shorts) */}
              <div className="p-3 sm:p-4 bg-zinc-950 flex flex-col items-center justify-center">
                <div className="relative aspect-[9/16] w-full max-w-[280px] sm:max-w-[320px] bg-black rounded-2xl overflow-hidden shadow-2xl border border-zinc-800/90">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${activeModalProduct.youtubeId}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1&playsinline=1`}
                    title={`${activeModalProduct.brandName} - ${activeModalProduct.hookTitle}`}
                    className="w-full h-full border-0 object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Painel de Auditoria Antifraude & Controle de Dwell Time (90%) */}
              <div className="p-4 bg-zinc-900/90 border-t border-b border-zinc-800/80 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck
                      className={`size-4 shrink-0 ${
                        hasQualifiedAntifraud ? "text-lime-400" : "text-purple-400"
                      }`}
                    />
                    <div>
                      <span className="text-xs font-bold text-white block">
                        Auditoria de Retenção Antifraude
                      </span>
                      <span className="text-[10px] text-zinc-400">
                        {hasQualifiedAntifraud
                          ? "✓ 90% auditado — Quiz liberado abaixo!"
                          : `Assista ao menos 90% para liberar o Quiz (${progressPct}% concluído)`}
                      </span>
                    </div>
                  </div>

                  {/* Atalho Demo para Homologação OU Botão de Ir para o Quiz */}
                  {hasQualifiedAntifraud ? (
                    <button
                      type="button"
                      onClick={() =>
                        quizSectionRef.current?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        })
                      }
                      className="px-2.5 py-1.5 rounded-full bg-lime-400 hover:bg-lime-500 text-zinc-950 text-[10px] font-black flex items-center gap-1 transition cursor-pointer shadow-md shrink-0"
                    >
                      <span>Ir ao Quiz (+10 nfs)</span>
                      <ArrowDown className="size-3 text-zinc-950" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setElapsedSec(Math.round(activeModalProduct.durationSec * 0.92));
                        setProgressPct(92);
                        setHasQualifiedAntifraud(true);
                        feedAntifraud.recordAction("video_view", activeModalProduct.id, 0);
                        toast.success("⚡ Atalho Staging: 90% aprovado! Quiz de +10 nfs liberado.");
                        setTimeout(() => {
                          quizSectionRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }, 250);
                      }}
                      className="px-2.5 py-1.5 rounded-full bg-purple-600/30 hover:bg-purple-600/50 text-purple-300 border border-purple-500/40 text-[10px] font-extrabold flex items-center gap-1.5 transition cursor-pointer shrink-0"
                      title="Atalho para testes: simular 90% imediatamente"
                    >
                      <Zap className="size-3 text-yellow-400 fill-yellow-400" />
                      <span>Pular para 90% (Demo)</span>
                    </button>
                  )}
                </div>

                {/* Barra de Progresso com Marcador de 90% */}
                <div className="relative w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      hasQualifiedAntifraud
                        ? "bg-gradient-to-r from-lime-400 to-emerald-500"
                        : "bg-gradient-to-r from-purple-500 to-indigo-500"
                    }`}
                    style={{ width: `${progressPct}%` }}
                  />
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-yellow-400 z-10 shadow"
                    style={{ left: "90%" }}
                    title="Meta de 90% Antifraude"
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-purple-400 transition cursor-pointer flex items-center gap-1 font-sans text-xs"
                    >
                      {isPlaying ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
                      <span>{isPlaying ? "Pausar Contador" : "Continuar"}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setElapsedSec(0);
                        setProgressPct(0);
                        setIsPlaying(true);
                      }}
                      className="hover:text-white transition cursor-pointer flex items-center gap-1 font-sans text-xs"
                    >
                      <RotateCcw className="size-3" />
                      <span>Reiniciar</span>
                    </button>
                  </div>

                  <span>
                    {Math.floor(elapsedSec / 60)}:{String(elapsedSec % 60).padStart(2, "0")} /{" "}
                    {Math.floor(activeModalProduct.durationSec / 60)}:
                    {String(activeModalProduct.durationSec % 60).padStart(2, "0")} ({progressPct}%)
                  </span>
                </div>
              </div>

              {/* Painel do Quiz e Chamada de Conversão (Rola naturalmente ocupando a tela toda) */}
              <div
                ref={quizSectionRef}
                className="p-4 sm:p-5 space-y-4 text-white bg-zinc-950 scroll-mt-2"
              >
                {/* Notificação Antifraude */}
                <div
                  className={`p-3 rounded-2xl border text-xs flex items-center gap-3 transition-colors ${
                    hasQualifiedAntifraud
                      ? "bg-lime-950/40 border-lime-500/40 text-lime-300"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400"
                  }`}
                >
                  {hasQualifiedAntifraud ? (
                    <CheckCircle2 className="size-5 text-lime-400 shrink-0" />
                  ) : (
                    <Lock className="size-5 text-zinc-500 shrink-0" />
                  )}
                  <div>
                    <p className="font-bold">
                      {hasQualifiedAntifraud
                        ? "🎉 90% assistido! Desafio Patrocinado Desbloqueado."
                        : "Assista ao menos 90% do vídeo para liberar a resposta do Quiz."}
                    </p>
                    <p className="text-[10px] opacity-80">
                      Recompensa oficial do anunciante: <strong>+10 nfs na carteira</strong>
                    </p>
                  </div>
                </div>

                {/* Desafio / Pergunta do Quiz */}
                <div className="space-y-3 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="size-4 text-yellow-400" />
                    <span className="text-[11px] font-black uppercase tracking-wider text-yellow-400">
                      Desafio Técnico Patrocinado (+10 nfs)
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {activeModalProduct.quiz.question}
                  </p>

                  {/* Opções de Resposta */}
                  <div className="space-y-2 pt-1">
                    {activeModalProduct.quiz.options.map((opt) => {
                      const isSelected = selectedOption === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          disabled={!hasQualifiedAntifraud && !quizSubmitted}
                          onClick={() => setSelectedOption(opt.id)}
                          className={`w-full p-3 rounded-xl border text-left text-xs transition-all flex items-start gap-2.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                            isSelected
                              ? "bg-purple-600 text-white border-purple-400 font-semibold shadow-md"
                              : "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                          }`}
                        >
                          <span
                            className={`size-4 rounded-full border grid place-items-center shrink-0 mt-0.5 ${
                              isSelected
                                ? "border-white bg-white text-purple-600 font-black text-[9px]"
                                : "border-zinc-600"
                            }`}
                          >
                            {isSelected ? "✓" : ""}
                          </span>
                          <span className="leading-snug">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {quizError && (
                    <div className="p-2.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="size-4 shrink-0 text-red-400" />
                      <span>{quizError}</span>
                    </div>
                  )}

                  {/* Botão de Envio do Quiz */}
                  <button
                    type="button"
                    disabled={!hasQualifiedAntifraud || quizSubmitted}
                    onClick={handleQuizSubmit}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {quizSubmitted ? (
                      <>
                        <CheckCircle2 className="size-4 text-lime-400" />
                        <span>Desafio Concluído (+10 nfs coletados)</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="size-4 text-yellow-300" />
                        <span>Confirmar Resposta (+10 nfs)</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Botão Direto para o Shop Netfits */}
                <div className="pt-2 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      handleCloseModal();
                      handleBuyProduct(activeModalProduct.shopProduct);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-lime-400 hover:bg-lime-500 text-zinc-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <ShoppingBag className="size-4" />
                    <span>Comprar este produto no Shop</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="py-3 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 text-xs font-semibold border border-zinc-800 transition cursor-pointer"
                  >
                    Concluir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


    </>
  );
}
