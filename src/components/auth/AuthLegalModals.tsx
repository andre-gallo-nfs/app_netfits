import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";

/* ============================================================================
   MODAL 1: REGULAMENTO OFICIAL E TERMOS DE USO
   ============================================================================ */
export function TermsModal({
  onClose,
  onAgree,
}: {
  onClose: () => void;
  onAgree: () => void;
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
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Passo 1 de 2 · Transparência & Direitos</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition font-bold"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Terms Content */}
        <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 text-xs text-zinc-700 leading-relaxed border-b border-zinc-200 pb-4">
          <div className="bg-purple-50 p-3 rounded-2xl border border-purple-100 text-[11px] text-purple-900">
            <p className="font-bold">📌 Regulamento Oficial, Termos e Condições de Uso (Rev. 2.0):</p>
            <p>Este Regulamento rege a participação no Programa Netfits, o acúmulo de pontos nfs, estorno híbrido, validade FEFO e regras estritas de integridade e antifraude.</p>
          </div>

          <h3 className="font-extrabold text-zinc-900 text-sm">1. Objeto do Programa</h3>
          <p>
            O Programa Netfits é um ecossistema digital de saúde (*healthspan*) e fidelidade operado pela <b>Netfits Ltda.</b> (CNPJ/MF nº <b>68.930.455/0001-40</b>, com sede na Alameda das Embaúbas, 365, Quadra 06 Lote 19 sala 01, Alphaville, Santana de Parnaíba-SP, CEP 06.542-195), destinado a incentivar treinos, consumo de conteúdo e compras no Marketplace com acúmulo de pontos <b>nfs</b>.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">2. Matriz Antifraude e Retenção em Vídeos (100% Dwell Time)</h3>
          <p>
            A atribuição de pontos <b>nfs</b> por visualização de vídeos no Feed exige <b>retenção visual contínua e foco de 100% da duração do vídeo</b>. É terminantemente proibido o uso de automações, scripts, bots, emuladores, alteração de dados de GPS ou criação de contas falsas para geração indevida de pontos.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">3. Direito Irrevogável de Exclusão Sumária & Perda de Saldo</h3>
          <p className="font-semibold text-red-700 bg-red-50 p-2.5 rounded-xl border border-red-200">
            ⚠️ <b>A Netfits Ltda. reserva-se o direito irrevogável, incondicional e incontestável de cancelar, suspender ou excluir sumariamente a conta de qualquer Usuário</b> que descumprir este Regulamento ou em caso de suspeita fundamentada de fraude, implicando na <b>perda imediata e irreversível de 100% dos pontos nfs acumulados</b>, sem direito a qualquer indenização ou ressarcimento.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">4. Validade, Inatividade (360 dias) e Estorno Híbrido</h3>
          <p>
            Os pontos <b>nfs</b> possuem validade de 24 meses sob o sistema FEFO. Contas sem atividade por mais de 360 dias expiram de pleno direito. Em compras híbridas (pontos + cartão/Pix) canceladas no Marketplace, a devolução é realizada proporcionalmente na carteira e no gateway conforme o Art. 49 do CDC.
          </p>
        </div>

        {/* Footer Action */}
        <div className="shrink-0 pt-2 space-y-2">
          <button
            onClick={onAgree}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-md shadow-purple-600/20 active:scale-98"
          >
            <CheckCircle2 className="size-4 text-lime-400" />
            Eu concordo com o Regulamento Oficial (Ir para Passo 2)
          </button>
          <p className="text-[10px] text-center text-zinc-500">
            Ao clicar em "Eu concordo", você será direcionado para o Consentimento LGPD.
          </p>
        </div>
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
}: {
  onClose: () => void;
  onAgree: () => void;
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
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Passo 2 de 2 · Lei Federal nº 13.709/2018</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="size-8 rounded-full bg-zinc-100 hover:bg-zinc-200 grid place-items-center text-zinc-600 transition font-bold"
          >
            ✕
          </button>
        </div>

        {/* Scrollable LGPD Content */}
        <div className="flex-1 overflow-y-auto space-y-3.5 pr-2 text-xs text-zinc-700 leading-relaxed border-b border-zinc-200 pb-4">
          <div className="bg-lime-50 p-3 rounded-2xl border border-lime-200 text-[11px] text-lime-950">
            <p className="font-bold">🔒 Tratamento Transparente & Proteção de Dados:</p>
            <p>Seus dados cadastrais, transacionais e de telemetria esportiva são tratados com segurança e conformidade rigorosa com a LGPD pela Netfits Ltda.</p>
          </div>

          <h3 className="font-extrabold text-zinc-900 text-sm">1. Bases Legais e Controladora</h3>
          <p>
            A <b>Netfits Ltda.</b> atua como Controladora dos dados. O tratamento baseia-se em: <b>Execução de Contrato</b> (Art. 7º, V) para gerenciamento de pontos e marketplace; <b>Obrigação Legal</b> (Art. 7º, II) para guarda de registros do Marco Civil da Internet; e <b>Consentimento Específico</b> (Art. 11, I) para dados de telemetria esportiva.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">2. Garantia de Não-Comercialização de Dados de Saúde</h3>
          <p>
            A Netfits compromete-se a <b>não vender, não repassar e não disponibilizar dados de frequência cardíaca, biometria ou telemetria esportiva para seguradoras de saúde ou planos médicos</b> sem sua autorização expressa.
          </p>

          <h3 className="font-extrabold text-zinc-900 text-sm">3. Direitos do Titular (Art. 18 da LGPD)</h3>
          <p>
            Você pode exercer seus direitos de confirmação, acesso, correção, anonimização, portabilidade ou revogação de consentimento contatando nosso Encarregado de Proteção de Dados (DPO) pelo e-mail <b>dpo@netfits.com.br</b>.
          </p>
        </div>

        {/* Footer Action */}
        <div className="shrink-0 pt-2 space-y-2">
          <button
            onClick={onAgree}
            className="w-full bg-lime-500 hover:bg-lime-400 text-zinc-950 font-extrabold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-md active:scale-98"
          >
            <CheckCircle2 className="size-4" />
            Eu concordo com o Tratamento de Dados (LGPD)
          </button>
          <p className="text-[10px] text-center text-zinc-500">
            Ao aceitar, os 2 aceites estarão validados e o cadastro será habilitado.
          </p>
        </div>
      </div>
    </div>
  );
}
