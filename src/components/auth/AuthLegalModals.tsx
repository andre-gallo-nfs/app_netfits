import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { formatConsentDate } from "@/lib/legal-consent-store";

/* ============================================================================
   MODAL 1: REGULAMENTO OFICIAL E TERMOS DE USO
   ============================================================================ */
export function TermsModal({
  onClose,
  onAgree,
  alreadyAcceptedAt,
  version = "1.0",
}: {
  onClose: () => void;
  onAgree?: () => void;
  alreadyAcceptedAt?: string | null;
  version?: string;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white text-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-200 space-y-4 max-h-[88vh] flex flex-col text-left">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-purple-100 text-purple-600 grid place-items-center">
              <ShieldCheck className="size-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-zinc-900">Termos de Uso & Regulamento Netfits</h2>
              {alreadyAcceptedAt ? (
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-lime-100 text-lime-800 border border-lime-300">
                    <CheckCircle2 className="size-3 text-lime-600" />
                    Consentimento Ativo · Aceito em {formatConsentDate(alreadyAcceptedAt)}
                  </span>
                </div>
              ) : (
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Passo 1 de 2 · Versão {version} Oficial (14/11/2026)</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Terms Content */}
        <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 text-xs text-zinc-700 leading-relaxed border-b border-zinc-200 pb-4">
          <div className="bg-purple-50 p-3 rounded-2xl border border-purple-100 text-[11px] text-purple-900">
            <p className="font-bold">📌 Regulamento Geral e Termos de Uso (Versão 1.0):</p>
            <p>Este Regulamento rege a participação no Programa Netfits, o acúmulo de pontos nfs, validade FEFO, regras antifraude e governança de alterações conforme o Código de Defesa do Consumidor.</p>
          </div>

          <h3 className="font-extrabold text-zinc-900 text-sm">1. Objeto do Programa</h3>
          <p>
            O Programa Netfits é um ecossistema digital de longevidade ativa (*healthspan*) e fidelidade operado pela <b>Netfits Ltda.</b> (CNPJ/MF nº <b>68.930.455/0001-40</b>, com sede na Alameda das Embaúbas, 365, Quadra 06 Lote 19 sala 01, Alphaville, Santana de Parnaíba-SP, CEP 06.542-195), destinado a incentivar treinos, consumo de conteúdo educativo e compras no Marketplace com pontos <b>nfs</b>.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">2. Tabela de Pontuação & Proteção do Consumidor (Aviso de 30 Dias)</h3>
          <p>
            Os critérios de pontuação, limites diários e bônus constam da <b>Tabela de Pontuação</b> no aplicativo. Quaisquer alterações que tornem os critérios menos vantajosos aos Usuários serão informadas no app com antecedência mínima de <b>30 (trinta) dias</b>, produzindo efeitos estritamente futuros sem nunca atingir pontos já conquistados.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">3. Tempo de Permanência em Vídeos & Matriz Antifraude</h3>
          <p>
            O quiz educativo só é liberado após a visualização contínua com tela ativa durante 100% da duração do vídeo (*dwell time*). É terminantemente proibido o uso de automações, bots, adulteração de GPS ou cadastros falsos. Em caso de fraude confirmada, a conta é cancelada com <b>perda total, automática e definitiva de todos os pontos</b>.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">4. Validade, Inatividade (12 Meses) e Estornos</h3>
          <p>
            Os pontos possuem validade de 24 meses (ordem FEFO). Contas sem atividade física, login ou compras por <b>12 meses ininterruptos</b> expiram de pleno direito, após notificação prévia de <b>30 dias</b> (basta um login para reativar). Membros do Clube Netfits têm a expiração suspensa. Resgates cancelados sem culpa do usuário devolvem os pontos com nova validade de <b>60 dias</b> caso tenham expirado no período.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">5. Biometria e Segurança em Pagamentos</h3>
          <p>
            O app utiliza biometria nativa do aparelho (Face ID/Touch ID) apenas para desbloqueio local, facultada alternativa por senha. <b>Pagamentos ao Programa são realizados exclusivamente dentro do aplicativo</b> (a Netfits nunca solicita Pix ou dados fora da plataforma).
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">6. Tolerância Zero para Conteúdos Impróprios, Moderação em 24h & EULA (Apple Guideline 1.2)</h3>
          <div className="bg-red-50 p-3 rounded-2xl border border-red-200 text-xs text-red-950 space-y-2">
            <p>
              <b>Contrato de Licença de Usuário Final (EULA):</b> A Netfits adota <b>tolerância zero</b> contra qualquer forma de assédio, ódio, discriminação, difamação, nudez, violência, desinformação perigosa ou comportamento abusivo por parte de usuários.
            </p>
            <p>
              <b>Mecanismos de Proteção Ativa:</b> Todo usuário tem o direito e a ferramenta no aplicativo para:
            </p>
            <ul className="list-disc pl-4 space-y-1">
              <li><b>Sinalizar / Denunciar Conteúdo:</b> Notificando imediatamente nossa equipe de moderação.</li>
              <li><b>Bloquear Usuário Abusivo:</b> Ocultando instantaneamente todas as publicações e interações daquele autor do seu feed e disparando alerta prioritário aos administradores.</li>
            </ul>
            <p>
              <b>Compromisso Operacional de 24 Horas:</b> A Netfits Ltda. compromete-se a analisar e agir sobre qualquer conteúdo sinalizado em <b>no máximo 24 horas</b>, removendo o conteúdo inadequado e <b>expulsando e banindo sumariamente o usuário infrator</b> da plataforma.
            </p>
          </div>
        </div>

        {/* Footer Action */}
        {alreadyAcceptedAt ? (
          <div className="shrink-0 pt-2 space-y-2">
            <div className="p-3 bg-lime-50 rounded-2xl border border-lime-200 text-[11px] text-lime-900 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-lime-600 shrink-0" />
              <div>
                <p className="font-extrabold">Você já concordou com este Regulamento Oficial.</p>
                <p className="text-[10px] text-lime-800">Aceite registrado no seu cadastro em {formatConsentDate(alreadyAcceptedAt)}.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold py-3.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                <span>Entendido (Fechar Leitura)</span>
              </button>
              {onAgree && (
                <button
                  type="button"
                  onClick={onAgree}
                  className="px-4 bg-purple-100 hover:bg-purple-200 text-purple-700 font-bold py-3.5 rounded-xl text-xs transition cursor-pointer"
                  title="Ver Consentimento LGPD"
                >
                  Ver LGPD →
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="shrink-0 pt-2 space-y-2">
            <button
              onClick={onAgree}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-md shadow-purple-600/20 active:scale-98 cursor-pointer"
            >
              <CheckCircle2 className="size-4 text-lime-400" />
              Eu concordo com o Regulamento Oficial (Ir para Passo 2)
            </button>
            <p className="text-[10px] text-center text-zinc-500">
              Ao clicar em "Eu concordo", você será direcionado para o Consentimento LGPD.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================================
   MODAL 2: POLÍTICA DE PRIVACIDADE E CONSENTIMENTO LGPD (LEI Nº 13.709/2018)
   ============================================================================ */
export function LgpdPrivacyModal({
  onClose,
  onAgree,
  alreadyAcceptedAt,
  version = "1.0",
}: {
  onClose: () => void;
  onAgree?: () => void;
  alreadyAcceptedAt?: string | null;
  version?: string;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white text-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-200 space-y-4 max-h-[88vh] flex flex-col text-left">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-3 shrink-0">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-xl bg-lime-500/15 text-lime-600 grid place-items-center">
              <ShieldCheck className="size-4" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-zinc-900">Consentimento para Uso de Dados (LGPD)</h2>
              {alreadyAcceptedAt ? (
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-lime-100 text-lime-800 border border-lime-300">
                    <CheckCircle2 className="size-3 text-lime-600" />
                    Tratamento Autorizado · Aceito em {formatConsentDate(alreadyAcceptedAt)}
                  </span>
                </div>
              ) : (
                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Passo 2 de 2 · Versão {version} Oficial (14/11/2026)</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition font-bold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Scrollable LGPD Content */}
        <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 text-xs text-zinc-700 leading-relaxed border-b border-zinc-200 pb-4">
          <div className="bg-lime-50 p-3 rounded-2xl border border-lime-200 text-[11px] text-lime-950">
            <p className="font-bold">🔒 Resumo em 1 Minuto — Seus Dados Protegidos:</p>
            <p>Seus dados cadastrais e de telemetria esportiva são tratados com segurança técnica de ponta pela Netfits Ltda. em conformidade estrita com a LGPD.</p>
          </div>

          <h3 className="font-extrabold text-zinc-900 text-sm">1. Bases Legais e Finalidades Específicas</h3>
          <p>
            A <b>Netfits Ltda.</b> atua como Controladora dos dados. O tratamento baseia-se em: <b>Execução de Contrato</b> (Art. 7º, V) para gerenciamento de pontos e marketplace; <b>Obrigação Legal</b> (Art. 7º, II) para guarda de registros do Marco Civil da Internet; e <b>Consentimento Específico</b> (Art. 11, I) para dados de telemetria esportiva.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">2. Finalidades do Dado de Gênero</h3>
          <p>
            O dado de gênero é coletado exclusivamente para: (i) cálculo metabólico basal e estimativa calórica precisa (METs) em treinos; (ii) personalização de artigos educativos de saúde preventiva e longevidade; e (iii) filtros de modelagem e vestuário esportivo no Netfits Shop.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">3. Garantia de Não-Comercialização de Dados de Saúde</h3>
          <p className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-amber-950 font-medium">
            🚫 A Netfits <b>NÃO vende, não comercializa e não compartilha dados de saúde, frequência cardíaca ou biometria com seguradoras de saúde ou planos médicos</b> para obtenção de vantagem econômica.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">4. Segurança de Cartões e Transferência Internacional</h3>
          <p>
            A Netfits <b>não armazena números de cartões de pagamento</b> (dados tokenizados pelo gateway PCI-DSS). Nossos provedores de nuvem certificados operam nós com custódia segura nos Estados Unidos, sob as cláusulas-padrão contratuais da ANPD.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">5. Direitos do Titular (Art. 18 da LGPD)</h3>
          <p>
            Você pode exercer seus direitos de confirmação, acesso, correção, anonimização, portabilidade ou exclusão da conta a qualquer momento diretamente no app ou contatando o Encarregado de Dados (DPO) pelo e-mail <b>dpo@netfits.com.br</b>.
          </p>
        </div>

        {/* Footer Action */}
        {alreadyAcceptedAt ? (
          <div className="shrink-0 pt-2 space-y-2">
            <div className="p-3 bg-lime-50 rounded-2xl border border-lime-200 text-[11px] text-lime-900 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-lime-600 shrink-0" />
              <div>
                <p className="font-extrabold">Seu consentimento LGPD está ativo e arquivado.</p>
                <p className="text-[10px] text-lime-800">Autorização registrada em {formatConsentDate(alreadyAcceptedAt)} para os propósitos de longevidade, treinos e marketplace.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold py-3.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <span>Entendido (Fechar Leitura)</span>
            </button>
          </div>
        ) : (
          <div className="shrink-0 pt-2 space-y-2">
            <button
              onClick={onAgree}
              className="w-full bg-lime-500 hover:bg-lime-400 text-zinc-950 font-extrabold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-md active:scale-98 cursor-pointer"
            >
              <CheckCircle2 className="size-4" />
              Eu concordo com o Tratamento de Dados (LGPD)
            </button>
            <p className="text-[10px] text-center text-zinc-500">
              Ao aceitar, os 2 aceites estarão validados e o cadastro será habilitado.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
