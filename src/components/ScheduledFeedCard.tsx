import { useState, useEffect } from "react";
import {
  Trophy,
  Sparkles,
  BookOpen,
  Clock,
  X,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Play,
  Film,
  Calendar,
} from "lucide-react";
import netfitsMark from "@/assets/netfits-mark.png";
import clinicFibios from "@/assets/clinic-fibios.jpg";
import draIsabellaAvatar from "@/assets/dra-isabella-avatar.jpg";
import drFrancoAvatar from "@/assets/dr-franco-avatar.png";
import { wallet } from "@/lib/wallet-store";
import { feedAntifraud } from "@/lib/feed-antifraud";
import { FeedSocialActions } from "@/components/FeedSocialActions";
import { toast } from "sonner";
import scheduledPostsRaw from "@/lib/scheduled-posts-data.json";

export interface ScheduledPostOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback?: string;
}

export interface ScheduledPostDef {
  id: string;
  quizPostId: string;
  articlePostId: string;
  originalDay: number;
  publishDate: string; // ISO 8601 string
  formattedDate: string;
  line: string;
  author: string;
  authorRole: string;
  authorAvatar: "netfits" | "dr_franco" | "dra_isabella" | "fibios";
  badge: string;
  title: string;
  subtitle: string;
  format: "article" | "video_animation";
  duration?: string;
  readTime: string;
  pillText: string;
  articleContent: string[];
  quizQuestion: string;
  quizOptions: ScheduledPostOption[];
}

export const SCHEDULED_POSTS: ScheduledPostDef[] = scheduledPostsRaw as ScheduledPostDef[];

interface ScheduledFeedCardProps {
  post: ScheduledPostDef;
  isDailyChallenge?: boolean;
}

export function ScheduledFeedCard({ post, isDailyChallenge = true }: ScheduledFeedCardProps) {
  const [selectedOption, setSelectedOption] = useState<string>(post.quizOptions[0]?.id || "");
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [readClaimed, setReadClaimed] = useState<boolean>(false);
  const [dwellTimeSeconds, setDwellTimeSeconds] = useState<number>(0);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (feedAntifraud.hasClaimed("quiz", post.quizPostId)) {
        setHasSubmitted(true);
      }
      if (feedAntifraud.hasClaimed("read", post.articlePostId)) {
        setReadClaimed(true);
      }
    }
  }, [post.quizPostId, post.articlePostId]);

  // Cronômetro de Dwell Time Antifraude (10s mínimo auditado)
  useEffect(() => {
    let timer: any = null;
    if (modalOpen && !readClaimed) {
      setHasScrolledToBottom(false);
      setDwellTimeSeconds(0);
      timer = setInterval(() => {
        setDwellTimeSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [modalOpen, readClaimed]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollHeight - target.scrollTop <= target.clientHeight + 35) {
      setHasScrolledToBottom(true);
    }
  };

  const handleClaimRead = () => {
    if (readClaimed) {
      toast.info("Você já concluiu a leitura e destravou o desafio!");
      return;
    }

    const minDwell = feedAntifraud.getRules().minDwellTimeSeconds ?? 10;
    if (dwellTimeSeconds < minDwell) {
      toast.warning(`Permaneça mais ${minDwell - dwellTimeSeconds}s no conteúdo para validar sua atenção.`);
      return;
    }

    if (feedAntifraud.getRules().requireScrollToBottom && !hasScrolledToBottom) {
      toast.warning("Role até o final do conteúdo para confirmar a leitura completa.");
      return;
    }

    setReadClaimed(true);
    feedAntifraud.recordAction("read", post.articlePostId, 0);
    toast.success("👏 Leitura validada! O Desafio Quiz está destravado (0 nfs por leitura / +5 nfs no acerto).");
  };

  const handleSubmitQuiz = () => {
    if (hasSubmitted) {
      toast.info("Você já respondeu este desafio com sucesso!");
      return;
    }

    const option = post.quizOptions.find((o) => o.id === selectedOption);
    if (!option) return;

    if (option.isCorrect) {
      const validation = feedAntifraud.validateAction("quiz", post.quizPostId);
      if (!validation.allowed) {
        toast.warning(validation.reason || "Ação bloqueada pelas regras antifraude.");
        return;
      }

      const points = feedAntifraud.getRules().pointsPerEducationalQuiz ?? 5;
      setErrorMsg(null);
      setHasSubmitted(true);
      wallet.earn(points, `Quiz Diário: ${post.title}`);
      feedAntifraud.recordAction("quiz", post.quizPostId, points);
      toast.success(`🎉 Parabéns! Resposta correta (+${points} nfs creditados na sua carteira)`);
    } else {
      setErrorMsg(option.feedback || "Resposta incorreta. Revise o conteúdo e tente novamente!");
      toast.error("Resposta incorreta. Revise o conteúdo e tente novamente!");
    }
  };

  const getAvatarSrc = () => {
    switch (post.authorAvatar) {
      case "dr_franco":
        return drFrancoAvatar;
      case "dra_isabella":
        return draIsabellaAvatar;
      case "fibios":
        return clinicFibios;
      case "netfits":
      default:
        return netfitsMark;
    }
  };

  const minDwellRequired = feedAntifraud.getRules().minDwellTimeSeconds ?? 10;
  const isDwellQualified = dwellTimeSeconds >= minDwellRequired;
  const isScrollQualified = !feedAntifraud.getRules().requireScrollToBottom || hasScrolledToBottom;
  const canClaim = isDwellQualified && isScrollQualified;

  return (
    <>
      <article className="px-4 space-y-3.5">
        {/* Header Oficial do Autor */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              onClick={() => setModalOpen(true)}
              className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-primary/20 transition-all bg-card overflow-hidden"
            >
              <img src={getAvatarSrc()} alt={post.author} className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span
                  onClick={() => setModalOpen(true)}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {post.author}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                  {post.line}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground line-clamp-1">{post.authorRole}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground bg-muted/40 px-2 py-0.5 rounded-md border border-border/50">
            <Calendar className="w-3 h-3 text-primary" />
            <span>{post.formattedDate}</span>
          </div>
        </div>

        {/* Card Visual com Badge & Título */}
        <div
          onClick={() => setModalOpen(true)}
          className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-4 sm:p-5 cursor-pointer shadow-sm hover:border-primary/40 transition-all"
        >
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-primary/10 text-primary border border-primary/20">
              {post.format === "video_animation" ? (
                <Film className="w-3 h-3 text-primary" />
              ) : (
                <BookOpen className="w-3 h-3 text-primary" />
              )}
              {post.badge}
            </span>

            <span className="text-[11px] text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors mb-2">
            {post.title}
          </h3>

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
            {post.subtitle}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs font-semibold text-primary">
            <span className="flex items-center gap-1.5">
              {post.format === "video_animation" ? (
                <>
                  <Play className="w-3.5 h-3.5 fill-primary" /> Assistir Animação Didática ({post.duration || "60s"})
                </>
              ) : (
                <>
                  <BookOpen className="w-3.5 h-3.5" /> Ler Artigo Completo
                </>
              )}
            </span>
            <span className="text-[11px] text-muted-foreground font-normal">
              {readClaimed ? "✓ Leitura auditada" : "Trava 10s antifraude"}
            </span>
          </div>
        </div>

        {/* Social Actions (0 nfs por visualização, 1 nf compartilhamento) */}
        <FeedSocialActions
          id={post.id}
          title={post.title}
          postCategory="educational"
          showViewButton={false}
          onOpenArticle={() => setModalOpen(true)}
        />

        {/* Card do Desafio Quiz Diário (+5 nfs) */}
        <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                <Trophy className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-foreground">
                    Desafio do Dia {String(post.originalDay).padStart(2, "0")}
                  </h4>
                  {isDailyChallenge && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                      24h
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground">
                  Acerte para creditar <strong className="text-foreground">+5 nfs</strong> na carteira
                </p>
              </div>
            </div>

            {hasSubmitted ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> Concluído
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary">
                <Sparkles className="w-3 h-3" /> +5 nfs
              </span>
            )}
          </div>

          <div className="text-xs sm:text-sm font-medium text-foreground leading-snug">
            {post.quizQuestion}
          </div>

          {/* Opções de Resposta */}
          <div className="space-y-2">
            {post.quizOptions.map((opt) => {
              const isSelected = selectedOption === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={hasSubmitted}
                  onClick={() => {
                    setSelectedOption(opt.id);
                    setErrorMsg(null);
                  }}
                  className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-2.5 ${
                    isSelected
                      ? "border-primary bg-primary/10 text-foreground font-medium shadow-sm"
                      : "border-border/70 hover:border-border hover:bg-muted/30 text-muted-foreground"
                  } ${hasSubmitted ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                      isSelected ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground/40"
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <span className="leading-relaxed flex-1">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-2 text-xs text-destructive">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {!hasSubmitted ? (
            <button
              onClick={handleSubmitQuiz}
              className="w-full py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-semibold text-xs sm:text-sm shadow-sm hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" /> Confirmar Resposta & Pontuar (+5 nfs)
            </button>
          ) : (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-400 font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Pontos creditados com sucesso! Revise sempre para consolidar seus hábitos.</span>
            </div>
          )}
        </div>
      </article>

      {/* Modal / Sheet de Leitura Auditada Antifraude */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-card w-full max-w-lg max-h-[88vh] rounded-2xl border border-border shadow-2xl flex flex-col overflow-hidden">
            {/* Header Modal */}
            <div className="p-4 border-b border-border flex items-center justify-between bg-muted/20">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-primary/10 text-primary uppercase tracking-wide">
                  {post.line}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo com Scroll Listener */}
            <div onScroll={handleScroll} className="p-5 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed text-foreground/90">
              <h2 className="text-base sm:text-xl font-bold text-foreground leading-snug">{post.title}</h2>
              <p className="text-xs sm:text-sm text-primary font-medium">{post.subtitle}</p>

              {post.format === "video_animation" && (
                <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 flex items-center gap-3 text-xs text-primary">
                  <Film className="w-5 h-5 shrink-0" />
                  <div>
                    <div className="font-bold">Vídeo Didático em Produção (Motion 2D)</div>
                    <div className="text-[11px] text-muted-foreground">
                      Duração: {post.duration || "60s"} · Roteiro e storyboard homologados para animação vertical.
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3 pt-2 text-foreground/80">
                {post.articleContent.map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Pílula de Sabedoria / Longevidade */}
              <div className="p-3.5 rounded-xl bg-muted/50 border border-border/80 text-xs text-foreground/90 italic">
                💡 <strong>Dica Oficial:</strong> "{post.pillText}"
              </div>

              {/* Trava Antifraude Status Bar */}
              <div className="pt-3 border-t border-border/60">
                <div className="flex items-center justify-between text-[11px] text-muted-foreground mb-1.5">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Auditoria de Leitura
                  </span>
                  <span>
                    {dwellTimeSeconds}s / {minDwellRequired}s
                    {hasScrolledToBottom ? " · 100% rolado ✓" : " · role até o fim"}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{
                      width: `${Math.min(100, (dwellTimeSeconds / minDwellRequired) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Footer Modal */}
            <div className="p-4 border-t border-border bg-muted/20 flex items-center justify-between gap-3">
              <span className="text-[11px] text-muted-foreground">
                0 nfs por leitura · +5 nfs no Quiz
              </span>
              <button
                disabled={!canClaim || readClaimed}
                onClick={handleClaimRead}
                className={`px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all ${
                  readClaimed
                    ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 cursor-default"
                    : canClaim
                    ? "bg-primary text-primary-foreground hover:opacity-90 active:scale-95"
                    : "bg-muted text-muted-foreground cursor-not-allowed border border-border/40"
                }`}
              >
                {readClaimed ? "✓ Leitura Concluída" : canClaim ? "Concluir Leitura" : "Aguarde a Trava (10s)"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
