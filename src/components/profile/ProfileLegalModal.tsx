import React from "react";
import { Download, X } from "lucide-react";

interface ProfileLegalModalProps {
  showLegalModal: "terms" | "privacy" | null;
  onClose: () => void;
  onSelectTab: (tab: "terms" | "privacy") => void;
}

export function ProfileLegalModal({
  showLegalModal,
  onClose,
  onSelectTab,
}: ProfileLegalModalProps) {
  if (!showLegalModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-zinc-800 text-white rounded-3xl max-w-lg w-full max-h-[85vh] flex flex-col p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full bg-zinc-800/50 cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {/* Cabeçalho das Abas Legais */}
        <div className="flex items-center gap-2 border-b border-zinc-800 pb-3 mb-4">
          <button
            type="button"
            onClick={() => onSelectTab("terms")}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg transition cursor-pointer ${
              showLegalModal === "terms"
                ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Termos de Uso
          </button>
          <button
            type="button"
            onClick={() => onSelectTab("privacy")}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg transition cursor-pointer ${
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
            onClick={onClose}
            className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs py-2 px-4 rounded-xl transition cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
