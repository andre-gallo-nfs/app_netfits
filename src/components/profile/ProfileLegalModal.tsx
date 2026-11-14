import React from "react";
import { Download, X, Shield, FileText, Sparkles } from "lucide-react";

interface ProfileLegalModalProps {
  showLegalModal: "terms" | "privacy" | "points" | null;
  onClose: () => void;
  onSelectTab: (tab: "terms" | "privacy" | "points") => void;
}

export function ProfileLegalModal({
  showLegalModal,
  onClose,
  onSelectTab,
}: ProfileLegalModalProps) {
  if (!showLegalModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-zinc-900 border border-zinc-800 text-white rounded-3xl max-w-lg w-full max-h-[88vh] flex flex-col p-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full bg-zinc-800/50 cursor-pointer"
        >
          <X className="size-5" />
        </button>

        {/* Cabeçalho das Abas Legais */}
        <div className="flex items-center gap-1.5 border-b border-zinc-800 pb-3 mb-4 overflow-x-auto">
          <button
            type="button"
            onClick={() => onSelectTab("terms")}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
              showLegalModal === "terms"
                ? "bg-lime-500/20 text-lime-400 border border-lime-500/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <FileText className="size-3.5" />
            <span>Termos de Uso</span>
          </button>
          <button
            type="button"
            onClick={() => onSelectTab("privacy")}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
              showLegalModal === "privacy"
                ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Shield className="size-3.5" />
            <span>Privacidade & LGPD</span>
          </button>
          <button
            type="button"
            onClick={() => onSelectTab("points")}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 shrink-0 ${
              showLegalModal === "points"
                ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Sparkles className="size-3.5" />
            <span>Tabela de Pontuação</span>
          </button>
        </div>

        {/* Conteúdo com rolagem */}
        <div className="overflow-y-auto space-y-4 pr-1 text-xs text-zinc-300 leading-relaxed flex-1">
          {showLegalModal === "terms" && (
            <>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-white">Regulamento do Programa e Termos de Uso Netfits</h4>
                <p className="text-[11px] text-zinc-400">Versão 1.0 Oficial · Vigente a partir de 14 de novembro de 2026</p>
              </div>

              <div className="bg-purple-950/30 border border-purple-800/40 p-3 rounded-2xl text-[11px] text-purple-200">
                <p className="font-bold text-white mb-0.5">📌 Resumo Executivo das Regras:</p>
                <p>Equivalência e limites de pontos constam da Tabela de Pontuação. Alterações que reduzam benefícios exigem aviso prévio de 30 dias. Pagamentos somente dentro do aplicativo.</p>
              </div>

              <div className="space-y-2.5 text-[11px] text-zinc-300">
                <p><b>1. Objeto e Adesão:</b> A Netfits Ltda. (CNPJ nº 68.930.455/0001-40, Alameda das Embaúbas, 365, Santana de Parnaíba/SP) opera plataforma de fidelidade voltada à longevidade ativa, integrando saúde, movimento e compras no marketplace com emissão de pontos <b>nfs</b>.</p>
                
                <p><b>2. Valor e Natureza dos Pontos:</b> Os pontos <b>nfs</b> não constituem moeda corrente, não geram direito a resgate em espécie e valem a equivalência exibida no momento de cada oferta de resgate.</p>
                
                <p><b>3. Tabela de Pontuação e Aviso Prévio:</b> As formas de ganho, tetos diários e bônus constam da Tabela de Pontuação no app. Alterações desfavoráveis são comunicadas com <b>30 (trinta) dias de antecedência</b>, sem atingir pontos já creditados.</p>
                
                <p><b>4. Inatividade e Validade:</b> Pontos válidos por 24 meses (ordem FEFO). Contas sem atividade física, login ou compras por <b>12 meses</b> expiram após aviso prévio de <b>30 dias</b> (basta 1 login para reativar). Membros do Clube Netfits têm a expiração suspensa durante a assinatura.</p>
                
                <p><b>5. Resgates e Devoluções:</b> Resgate cancelado sem culpa do usuário tem pontos devolvidos; se tiverem vencido no período, recebem nova validade de <b>60 dias</b>. Até 3 tentativas de entrega de produtos físicos.</p>

                <p><b>6. Biometria e Identificação:</b> A biometria é utilizada exclusivamente no próprio dispositivo (Face ID/Touch ID) para desbloqueio local, facultada alternativa por senha. Para prevenção de fraudes, a Netfits pode solicitar documento com foto e códigos de confirmação.</p>

                <p><b>7. Segurança nos Pagamentos:</b> Todos os pagamentos ocorrem estritamente dentro do aplicativo. A Netfits nunca envia links de pagamento ou Pix por WhatsApp, e-mail ou redes sociais.</p>

                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-2.5 my-1.5 text-red-300">
                  <p className="font-bold text-white mb-1">8. Tolerância Zero para Conteúdos Impróprios & Moderação em 24h (EULA):</p>
                  <p>A Netfits adota <b>tolerância zero</b> contra assédio, ódio, discriminação, difamação ou violência. O app dispõe de ferramentas para <b>denunciar conteúdos impróprios</b> e <b>bloquear autores abusivos</b>. Nossa moderação analisa e age em até <b>24 horas</b>, removendo publicações e banindo infratores.</p>
                </div>
              </div>
            </>
          )}

          {showLegalModal === "privacy" && (
            <>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-white">Política de Privacidade e Proteção de Dados (LGPD)</h4>
                <p className="text-[11px] text-zinc-400">Versão 1.0 Oficial · Vigente a partir de 14 de novembro de 2026 (Lei nº 13.709/2018)</p>
              </div>

              <div className="bg-lime-950/30 border border-lime-800/40 p-3 rounded-2xl text-[11px] text-lime-200">
                <p className="font-bold text-white mb-0.5">🔒 Resumo em 1 Minuto:</p>
                <p>Seus dados de saúde esportiva nunca são vendidos. Dados de pagamento são tokenizados e não armazenados. Canal direto com o DPO: <span className="font-mono text-lime-400">dpo@netfits.com.br</span>.</p>
              </div>

              <div className="space-y-2.5 text-[11px] text-zinc-300">
                <p><b>1. Controladora:</b> NETFITS LTDA., inscrita no CNPJ sob o nº 68.930.455/0001-40, sediada na Alameda das Embaúbas, 365, Alphaville, Santana de Parnaíba/SP.</p>

                <p><b>2. Dados Tratados:</b> Dados cadastrais (nome, CPF, e-mail, celular, data de nascimento para maioridade) e gênero — este utilizado exclusivamente para: (i) cálculo metabólico basal e estimativa calórica (METs) em treinos; (ii) personalização de conteúdos preventivos Fibios; e (iii) filtros de vestuário no Shop.</p>

                <p><b>3. Dados Sensíveis de Telemetria:</b> Passos, frequência cardíaca, cadência e GPS coletados sob consentimento específico para validação de treinos e pontuação.</p>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-2 text-amber-200">
                  <p className="font-bold text-white">🚫 Garantia de Não-Comercialização:</p>
                  <p>A Netfits <b>NÃO vende, não comercializa e não compartilha</b> dados individuais de saúde com seguradoras, planos de saúde ou corretores de dados.</p>
                </div>

                <p><b>4. Dados com Associados:</b> O parceiro indicador recebe apenas a confirmação de que a indicação foi concluída e o valor de comissão gerado, <b>nunca</b> dados de saúde, treinos ou rotas de GPS.</p>

                <p><b>5. Transferência Internacional:</b> Provedores de nuvem certificados (Cloudflare/AWS) com processamento seguro nos Estados Unidos da América, sob cláusulas-padrão da ANPD.</p>

                <p><b>6. Segurança de Cartão:</b> A Netfits <b>não guarda o número completo do cartão</b>, que permanece tokenizado no intermediador de pagamento certificado (PCI-DSS).</p>

                <p><b>7. Direitos do Titular (Art. 18 LGPD):</b> Confirmação, acesso, correção, portabilidade, anonimização e exclusão pelo app ou pelo e-mail: <span className="text-lime-400 font-mono">dpo@netfits.com.br</span>.</p>
              </div>
            </>
          )}

          {showLegalModal === "points" && (
            <>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-white">Tabela Oficial de Pontuação e Limites</h4>
                <p className="text-[11px] text-zinc-400">Versão 1.0 Oficial · Vigente a partir de 14 de novembro de 2026</p>
              </div>

              <div className="bg-amber-950/30 border border-amber-800/40 p-3 rounded-2xl text-[11px] text-amber-200">
                <p className="font-bold text-white mb-0.5">⭐ Critérios Oficiais de Acúmulo:</p>
                <p>Ganhos por treinos com sensores, quizzes educativos, compras e assinatura do Clube Netfits. Alterações que reduzam benefícios têm aviso prévio de 30 dias.</p>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="border border-zinc-800 rounded-xl overflow-hidden">
                  <div className="bg-zinc-800/60 p-2 font-bold text-white flex justify-between">
                    <span>Modalidade de Ganho</span>
                    <span>Pontuação</span>
                  </div>
                  <div className="divide-y divide-zinc-800/50 bg-zinc-900/60">
                    <div className="p-2 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-zinc-200">Treino Validado (Wearables)</p>
                        <p className="text-[10px] text-zinc-400">Membros do Clube (até 2/dia)</p>
                      </div>
                      <span className="font-extrabold text-lime-400">+20 nfs / treino</span>
                    </div>

                    <div className="p-2 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-zinc-200">Quiz Educativo (Netfits / Fibios)</p>
                        <p className="text-[10px] text-zinc-400">Após 100% de tempo de tela no vídeo</p>
                      </div>
                      <span className="font-extrabold text-lime-400">+5 nfs / acerto</span>
                    </div>

                    <div className="p-2 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-zinc-200">Quiz Patrocinado por Marcas</p>
                        <p className="text-[10px] text-zinc-400">Campanhas especiais de parceiros</p>
                      </div>
                      <span className="font-extrabold text-amber-400">+10 nfs / acerto</span>
                    </div>

                    <div className="p-2 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-zinc-200">Compras no Netfits Shop</p>
                        <p className="text-[10px] text-zinc-400">Sobre valor líquido pago em Pix/Cartão</p>
                      </div>
                      <span className="font-extrabold text-lime-400">4 nfs / R$ 1,00</span>
                    </div>

                    <div className="p-2 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-zinc-200">Compras no Shop (Membro Clube)</p>
                        <p className="text-[10px] text-zinc-400">+20% de bônus em todas as compras</p>
                      </div>
                      <span className="font-extrabold text-purple-400">4,8 nfs / R$ 1,00</span>
                    </div>

                    <div className="p-2 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-zinc-200">Assinatura Clube Netfits</p>
                        <p className="text-[10px] text-zinc-400">R$ 19,90/mês (crédito mensal garantido)</p>
                      </div>
                      <span className="font-extrabold text-purple-400">+250 nfs / mês</span>
                    </div>

                    <div className="p-2 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-zinc-200">Bônus de Cadastro (MGM)</p>
                        <p className="text-[10px] text-zinc-400">Ao concluir cadastro com código de convite</p>
                      </div>
                      <span className="font-extrabold text-lime-400">+50 nfs</span>
                    </div>

                    <div className="p-2 flex justify-between items-center">
                      <div>
                        <p className="font-bold text-zinc-200">Bônus de Indicação (Indicador)</p>
                        <p className="text-[10px] text-zinc-400">Liberado após 1º treino/compra do indicado</p>
                      </div>
                      <span className="font-extrabold text-lime-400">+50 nfs</span>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800/40 p-2.5 rounded-xl border border-zinc-700/50 space-y-1 text-[10px] text-zinc-300">
                  <p><b>• Trava de Margem:</b> Compras que utilizarem 10% ou mais do valor em pontos não acumulam cashback.</p>
                  <p><b>• Validade FEFO:</b> 24 meses por lote. Expiração suspensa para assinantes ativos do Clube Netfits.</p>
                  <p><b>• Equivalência:</b> Dinâmica e calculada no momento de cada resgate no checkout do Shop, abatendo até 100% do valor da compra.</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Rodapé do Modal */}
        <div className="border-t border-zinc-800 pt-3 mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a
              href="/docs/Regulamento_e_Termos_de_Uso_v1_0.docx"
              download="Regulamento_e_Termos_de_Uso_v1_0.docx"
              className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white transition"
              title="Baixar Regulamento e Termos de Uso"
            >
              <Download className="size-3 text-lime-400" />
              <span>Termos</span>
            </a>
            <span className="text-zinc-600">·</span>
            <a
              href="/docs/Politica_de_Privacidade_v1_0.docx"
              download="Politica_de_Privacidade_v1_0.docx"
              className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white transition"
              title="Baixar Política de Privacidade"
            >
              <Download className="size-3 text-purple-400" />
              <span>Privacidade</span>
            </a>
            <span className="text-zinc-600">·</span>
            <a
              href="/docs/Tabela_de_Pontuacao_v1_0.docx"
              download="Tabela_de_Pontuacao_v1_0.docx"
              className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white transition"
              title="Baixar Tabela de Pontuação"
            >
              <Download className="size-3 text-amber-400" />
              <span>Tabela</span>
            </a>
          </div>

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
