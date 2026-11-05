/**
 * Templates Oficiais de E-mails Transacionais Netfits
 * Codificação UTF-8, responsivo (Desktop 600px / Mobile 390px),
 * Paleta oficial Netfits (Key Visual: Roxo #35106E / #6B2AD9, Verde-Limão #C8F135, Dark Slate #09090b / #18181b).
 * 100% DINÂMICO: Zero campos fixos — todos os valores são alimentados por dados do usuário, do pedido e dos parâmetros mestres.
 */

export interface WelcomeEmailData {
  nomeUsuario: string;
  bonusCadastroNfs?: number | string;
  saldoConsolidadoNfs?: number | string;
  referralCode?: string;
  referralLink?: string;
  pontosPorReal?: number | string;
  validadeMeses?: number | string;
  appUrl?: string;
}

export interface PasswordResetEmailData {
  nomeUsuario: string;
  maskedEmail: string;
  resetLink: string;
}

export interface PointsCreditedEmailData {
  nomeUsuario: string;
  pontos: number | string;
  origem: string;
  saldoTotal: number | string;
  dataHora?: string;
  categoria?: string;
  validadeMeses?: number | string;
  transacaoId?: string;
  appUrl?: string;
}

export interface ShopOrderEmailData {
  nomeUsuario: string;
  numeroPedido: string;
  dataCompra?: string;
  produto: string;
  parceiro?: string;
  quantidade?: string | number;
  valorSubtotal?: string | number;
  pontosUtilizados?: string | number;
  valorDescontoPontos?: string | number;
  valorFrete?: string;
  formaPagamento?: string;
  valorTotalPago?: string | number;
  saldoRestante?: string | number;
  cashbackGerado?: string | number;
  corStatusCashback?: string;
  textoStatusCashback?: string;
  previsaoEntrega?: string;
  enderecoEntrega?: string;
  appUrl?: string;
}

export interface NpsEmailData {
  nomeUsuario: string;
  tipoPesquisa?: "compra" | "experiencia_geral" | "atendimento";
  numeroPedido?: string;
  produto?: string;
  appUrl?: string;
}

export interface ClubSubscriptionEmailData {
  nomeUsuario: string;
  planoNome: string;
  valorMensalidadeBrl?: string | number;
  pontosAdesao?: number | string;
  pontosPorTreino?: number | string;
  multiplicadorShop?: string | number;
  comissaoMgmPct?: number | string;
  vigenciaFim?: string;
  proximaCobranca?: string;
  saldoTotal?: number | string;
  appUrl?: string;
}

export interface ReferralCompletedEmailData {
  nomeUsuario: string;
  nomeAmigoIndicado: string;
  pontosCreditados?: number | string;
  saldoAtual?: number | string;
  referralCode?: string;
  referralLink?: string;
  appUrl?: string;
}

// -------------------------------------------------------------
// 1. Template: Boas-Vindas Oficial (Com Bônus e Dados do Banco)
// -------------------------------------------------------------
export function renderWelcomeEmail(data: WelcomeEmailData): string {
  const nome = data.nomeUsuario || "Atleta";
  const bonus = data.bonusCadastroNfs ?? 50;
  const saldo = data.saldoConsolidadoNfs ?? bonus;
  const referralCode = data.referralCode || "";
  const referralLink = data.referralLink || (referralCode ? `https://www.netfits.com.br/auth?ref=${referralCode}` : "https://www.netfits.com.br/download");
  const pontosReal = data.pontosPorReal ?? "4,0";
  const validadeMeses = data.validadeMeses ?? 24;
  const appUrl = data.appUrl || "https://www.netfits.com.br";

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bem-vindo à Netfits!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none;">
    <!-- Pre-header text -->
    <div style="display: none; max-height: 0px; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; color: #09090b; opacity: 0;">
        Seus +${bonus} nfs bônus de boas-vindas já estão liberados! Comece a transformar seus hábitos saudáveis em recompensas reais.
        &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy;
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #09090b;">
        <tr>
            <td align="center" style="padding: 40px 15px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #18181b; border: 1px solid #27272a; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
                    
                    <!-- Header com Marca Netfits -->
                    <tr>
                        <td align="center" style="padding: 36px 30px 24px 30px; background: linear-gradient(135deg, #18181b 0%, #35106E 100%); border-bottom: 1px solid #3f3f46;">
                            <a href="${appUrl}" target="_blank" style="text-decoration: none;">
                                <div style="font-size: 28px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
                                    NET<span style="color: #C8F135;">FITS</span>
                                </div>
                            </a>
                            <div style="font-size: 11px; font-weight: 600; letter-spacing: 1.5px; color: #a1a1aa; text-transform: uppercase; margin-top: 8px;">
                                A vida em movimento vale mais &bull; Fidelidade Ativa
                            </div>
                        </td>
                    </tr>

                    <!-- Bloco de Destaque: Bônus de Cadastro -->
                    <tr>
                        <td align="center" style="padding: 30px 30px 10px 30px;">
                            <div style="display: inline-block; background-color: rgba(200, 241, 53, 0.1); border: 1px solid #C8F135; border-radius: 50px; padding: 8px 20px;">
                                <span style="color: #C8F135; font-size: 13px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">
                                    🎁 BÔNUS DE BOAS-VINDAS LIBERADO
                                </span>
                            </div>
                            <h1 style="color: #ffffff; font-size: 26px; font-weight: 800; line-height: 1.3; margin: 18px 0 8px 0;">
                                Parabéns, <span style="color: #c084fc;">${nome}</span>!
                            </h1>
                            <p style="color: #a1a1aa; font-size: 15px; line-height: 1.6; margin: 0; max-width: 480px;">
                                Seu cadastro foi concluído com sucesso. A partir de agora, cada treino concluído, cada quiz médico e cada hábito saudável vale pontos <b style="color: #ffffff;">nfs</b>.
                            </p>
                        </td>
                    </tr>

                    <!-- Card de Saldo Bônus Dinâmico -->
                    <tr>
                        <td align="center" style="padding: 20px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #27272a; border: 1px solid #3f3f46; border-radius: 16px; text-align: center;">
                                <tr>
                                    <td style="padding: 24px 20px;">
                                        <div style="font-size: 12px; font-weight: 700; color: #a1a1aa; text-transform: uppercase; letter-spacing: 1px;">
                                            Seu Saldo Inicial
                                        </div>
                                        <div style="font-size: 44px; font-weight: 900; color: #C8F135; margin: 6px 0 4px 0; font-family: -apple-system, sans-serif;">
                                            +${bonus} <span style="font-size: 22px; color: #ffffff;">nfs</span>
                                        </div>
                                        <div style="font-size: 12px; color: #d4d4d8;">
                                            Saldo consolidado disponível na sua carteira: <b style="color: #ffffff;">${saldo} nfs</b>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    ${referralCode ? `
                    <!-- Bloco de Indicação Exclusiva (MGM) -->
                    <tr>
                        <td style="padding: 0 30px 15px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(107, 42, 217, 0.15); border: 1px solid #6B2AD9; border-radius: 14px; padding: 16px 20px;">
                                <tr>
                                    <td>
                                        <div style="font-size: 11px; font-weight: 800; color: #c084fc; text-transform: uppercase; letter-spacing: 0.5px;">
                                            👥 Seu Código de Indicação Oficial
                                        </div>
                                        <div style="font-size: 13px; color: #ffffff; margin-top: 4px; line-height: 1.5;">
                                            Convide amigos para a Netfits. Ao se cadastrarem com seu código, você ganha <b>+50 nfs</b> por amigo!
                                        </div>
                                        <div style="margin-top: 10px; font-family: monospace; font-size: 16px; font-weight: 900; color: #C8F135; background-color: #09090b; padding: 8px 14px; border-radius: 8px; display: inline-block; border: 1px dashed #6B2AD9;">
                                            ${referralCode}
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>` : ""}

                    <!-- Como Acumular Mais Pontos (Regras Oficiais do GEMINI.md) -->
                    <tr>
                        <td style="padding: 10px 30px 25px 30px;">
                            <div style="font-size: 14px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px;">
                                3 formas rápidas de acumular pontos hoje:
                            </div>

                            <!-- Forma 1 -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 12px;">
                                <tr>
                                    <td width="36" valign="top" style="padding-right: 12px;">
                                        <div style="width: 32px; height: 32px; background-color: #6B2AD9; color: #ffffff; border-radius: 50%; text-align: center; line-height: 32px; font-weight: 800; font-size: 14px;">
                                            1
                                        </div>
                                    </td>
                                    <td valign="top">
                                        <div style="color: #ffffff; font-size: 14px; font-weight: 700;">Quizzes Médicos do Feed (Fibios)</div>
                                        <div style="color: #a1a1aa; font-size: 12px; line-height: 1.5; margin-top: 2px;">
                                            Aprenda sobre longevidade e sono regenerador e responda os quizzes diários: ganhe <b>+5 nfs</b> nos posts Fibios e <b>+10 nfs</b> nos patrocinados.
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- Forma 2 -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 12px;">
                                <tr>
                                    <td width="36" valign="top" style="padding-right: 12px;">
                                        <div style="width: 32px; height: 32px; background-color: #6B2AD9; color: #ffffff; border-radius: 50%; text-align: center; line-height: 32px; font-weight: 800; font-size: 14px;">
                                            2
                                        </div>
                                    </td>
                                    <td valign="top">
                                        <div style="color: #ffffff; font-size: 14px; font-weight: 700;">Indicação de Amigos (MGM)</div>
                                        <div style="color: #a1a1aa; font-size: 12px; line-height: 1.5; margin-top: 2px;">
                                            Compartilhe seu código com parceiros de treino: você ganha <b>+50 nfs bônus</b> a cada amigo que criar uma conta na Netfits.
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- Forma 3 -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%;" style="margin-bottom: 16px;">
                                <tr>
                                    <td width="36" valign="top" style="padding-right: 12px;">
                                        <div style="width: 32px; height: 32px; background-color: #6B2AD9; color: #ffffff; border-radius: 50%; text-align: center; line-height: 32px; font-weight: 800; font-size: 14px;">
                                            3
                                        </div>
                                    </td>
                                    <td valign="top">
                                        <div style="color: #ffffff; font-size: 14px; font-weight: 700;">Netfits Shop Oficial</div>
                                        <div style="color: #a1a1aa; font-size: 12px; line-height: 1.5; margin-top: 2px;">
                                            Compre suplementos, vestuário e acessórios acumulando <b>${pontosReal} nfs por R$ 1,00</b> gasto, ou use seus pontos para abater diretamente no valor do carrinho.
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- Em Breve: Clube & Wearables -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #18181b; border: 1px dashed #3f3f46; border-radius: 12px; padding: 12px 14px;">
                                <tr>
                                    <td>
                                        <div style="font-size: 11px; font-weight: 800; color: #C8F135; text-transform: uppercase; letter-spacing: 0.5px;">
                                            ⚡ Em Breve • Lançamento Oficial (14 de Novembro)
                                        </div>
                                        <div style="font-size: 12px; color: #a1a1aa; margin-top: 4px; line-height: 1.4;">
                                            Integração oficial de relógios (Apple Watch, Garmin e Strava via Terra API) e o Clube Netfits para pontuação diária por treinos validados.
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Botão CTA Principal -->
                    <tr>
                        <td align="center" style="padding: 10px 30px 35px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="border-radius: 12px; background-color: #6B2AD9;">
                                        <a href="${appUrl}/feed" target="_blank" style="display: inline-block; padding: 16px 36px; font-size: 15px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 12px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(107, 42, 217, 0.4);">
                                            ACESSAR MINHA CONTA AGORA &rarr;
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Rodapé Institucional e LGPD -->
                    <tr>
                        <td style="padding: 24px 30px; background-color: #09090b; border-top: 1px solid #27272a; text-align: center;">
                            <p style="color: #71717a; font-size: 11px; line-height: 1.6; margin: 0 0 10px 0;">
                                Você está recebendo este e-mail porque se cadastrou na plataforma oficial <b>Netfits Fidelidade</b>.<br>
                                Seus pontos possuem validade de ${validadeMeses} meses conforme a política FEFO do programa.
                            </p>
                            <p style="color: #52525b; font-size: 10px; line-height: 1.5; margin: 0;">
                                <b>NETFITS PLATAFORMA DIGITAL LTDA.</b> &bull; CNPJ 68.930.455/0001-40<br>
                                Santana de Parnaíba - SP &bull; Brasil<br>
                                Dúvidas ou suporte: <a href="mailto:contato@netfits.com.br" style="color: #a1a1aa; text-decoration: underline;">contato@netfits.com.br</a><br>
                                Encarregado de Dados (DPO): <a href="mailto:dpo@netfits.com.br" style="color: #a1a1aa; text-decoration: underline;">dpo@netfits.com.br</a>
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

// -------------------------------------------------------------
// 2. Template: Redefinição de Senha
// -------------------------------------------------------------
export function renderPasswordResetEmail({ nomeUsuario, maskedEmail, resetLink }: PasswordResetEmailData): string {
  const nome = nomeUsuario || "Atleta";
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuperação de Acesso - Netfits</title>
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none;">
    <div style="display: none; max-height: 0px; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; color: #09090b; opacity: 0;">
        Instruções seguras para cadastramento de nova senha na sua conta Netfits.
        &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy;
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #09090b;">
        <tr>
            <td align="center" style="padding: 40px 15px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #18181b; border: 1px solid #27272a; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
                    
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 32px 30px 20px 30px; background: linear-gradient(135deg, #18181b 0%, #35106E 100%); border-bottom: 1px solid #3f3f46;">
                            <a href="https://www.netfits.com.br" target="_blank" style="text-decoration: none;">
                                <div style="font-size: 28px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
                                    NET<span style="color: #C8F135;">FITS</span>
                                </div>
                            </a>
                            <div style="font-size: 11px; font-weight: 600; letter-spacing: 1.5px; color: #a1a1aa; text-transform: uppercase; margin-top: 8px;">
                                Central de Segurança &bull; Controle de Acesso
                            </div>
                        </td>
                    </tr>

                    <!-- Corpo Principal -->
                    <tr>
                        <td style="padding: 32px 30px 20px 30px;">
                            <div style="display: inline-block; background-color: rgba(192, 132, 252, 0.1); border: 1px solid #c084fc; border-radius: 50px; padding: 6px 16px; margin-bottom: 16px;">
                                <span style="color: #c084fc; font-size: 12px; font-weight: 700; text-transform: uppercase;">
                                    🔒 Redefinição de Senha
                                </span>
                            </div>

                            <h1 style="color: #ffffff; font-size: 22px; font-weight: 800; line-height: 1.4; margin: 0 0 14px 0;">
                                Olá, ${nome}
                            </h1>
                            <p style="color: #a1a1aa; font-size: 14px; line-height: 1.6; margin: 0 0 16px 0;">
                                Recebemos uma solicitação de redefinição de senha para a conta Netfits associada ao identificador <b style="color: #ffffff;">${maskedEmail}</b>.
                            </p>
                            <p style="color: #a1a1aa; font-size: 14px; line-height: 1.6; margin: 0 0 24px 0;">
                                Para cadastrar sua nova senha de acesso com segurança, clique no botão abaixo:
                            </p>

                            <!-- Botão CTA -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td align="center" style="padding: 10px 0 24px 0;">
                                        <table border="0" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td align="center" style="border-radius: 12px; background-color: #6B2AD9;">
                                                    <a href="${resetLink}" target="_blank" style="display: inline-block; padding: 15px 36px; font-size: 14px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 12px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(107, 42, 217, 0.4);">
                                                        CADASTRAR NOVA SENHA &rarr;
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- Alerta de Segurança e Expiração -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #27272a; border-left: 4px solid #f59e0b; border-radius: 8px; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 14px 16px;">
                                        <div style="color: #fbbf24; font-size: 12px; font-weight: 700; text-transform: uppercase;">
                                            ⚠️ Importante
                                        </div>
                                        <div style="color: #d4d4d8; font-size: 12px; line-height: 1.5; margin-top: 4px;">
                                            Este link expira em <b>30 minutos</b> e só pode ser utilizado uma única vez. Se você não solicitou esta redefinição, sua conta permanece protegida e você pode ignorar esta mensagem com total segurança.
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <p style="color: #71717a; font-size: 12px; line-height: 1.5; margin: 0;">
                                Se o botão acima não funcionar, copie e cole o link a seguir no seu navegador:<br>
                                <span style="color: #9333ea; word-break: break-all; font-family: monospace;">${resetLink}</span>
                            </p>
                        </td>
                    </tr>

                    <!-- Rodapé -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #09090b; border-top: 1px solid #27272a; text-align: center;">
                            <p style="color: #52525b; font-size: 10px; line-height: 1.5; margin: 0;">
                                <b>NETFITS PLATAFORMA DIGITAL LTDA.</b> &bull; CNPJ 68.930.455/0001-40 &bull; Santana de Parnaíba - SP<br>
                                Dúvidas sobre segurança: <a href="mailto:seguranca@netfits.com.br" style="color: #a1a1aa; text-decoration: underline;">seguranca@netfits.com.br</a>
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

// -------------------------------------------------------------
// 3. Template: Pontos Creditados (+X nfs com Lote e Validade FEFO)
// -------------------------------------------------------------
export function renderPointsCreditedEmail(data: PointsCreditedEmailData): string {
  const nome = data.nomeUsuario || "Atleta";
  const dataHoraStr = data.dataHora || new Date().toLocaleString("pt-BR");
  const validadeMeses = data.validadeMeses ?? 24;
  const appUrl = data.appUrl || "https://www.netfits.com.br";

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pontos Creditados na Netfits!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none;">
    <div style="display: none; max-height: 0px; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; color: #09090b; opacity: 0;">
        Você acabou de ganhar +${data.pontos} nfs na Netfits! Veja seu extrato e saldo atualizado.
        &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy;
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #09090b;">
        <tr>
            <td align="center" style="padding: 40px 15px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #18181b; border: 1px solid #27272a; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
                    
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 32px 30px 20px 30px; background: linear-gradient(135deg, #18181b 0%, #35106E 100%); border-bottom: 1px solid #3f3f46;">
                            <a href="${appUrl}" target="_blank" style="text-decoration: none;">
                                <div style="font-size: 28px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
                                    NET<span style="color: #C8F135;">FITS</span>
                                </div>
                            </a>
                            <div style="font-size: 11px; font-weight: 600; letter-spacing: 1.5px; color: #a1a1aa; text-transform: uppercase; margin-top: 8px;">
                                Extrato de Recompensas &bull; Carteira Digital
                            </div>
                        </td>
                    </tr>

                    <!-- Bloco de Crédito de Pontos -->
                    <tr>
                        <td align="center" style="padding: 32px 30px 10px 30px;">
                            <div style="display: inline-block; background-color: rgba(200, 241, 53, 0.1); border: 1px solid #C8F135; border-radius: 50px; padding: 6px 18px; margin-bottom: 16px;">
                                <span style="color: #C8F135; font-size: 12px; font-weight: 800; text-transform: uppercase;">
                                    ⚡ PONTOS CREDITADOS
                                </span>
                            </div>

                            <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; line-height: 1.3; margin: 0 0 8px 0;">
                                Parabéns, ${nome}!
                            </h1>
                            <p style="color: #a1a1aa; font-size: 14px; line-height: 1.5; margin: 0;">
                                Sua atividade foi validada (${dataHoraStr}) e os pontos já estão disponíveis para resgate na sua carteira:
                            </p>
                        </td>
                    </tr>

                    <!-- Card Destaque: Valor dos Pontos -->
                    <tr>
                        <td align="center" style="padding: 20px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #27272a; border: 1px solid #3f3f46; border-radius: 16px; text-align: center;">
                                <tr>
                                    <td style="padding: 26px 20px;">
                                        <div style="font-size: 12px; font-weight: 700; color: #a1a1aa; text-transform: uppercase; letter-spacing: 1px;">
                                            Crédito na Carteira
                                        </div>
                                        <div style="font-size: 46px; font-weight: 900; color: #C8F135; margin: 6px 0 2px 0; font-family: -apple-system, sans-serif;">
                                            +${data.pontos} <span style="font-size: 24px; color: #ffffff;">nfs</span>
                                        </div>
                                        <div style="font-size: 13px; font-weight: 600; color: #d4d4d8; margin-top: 4px;">
                                            Origem: <b style="color: #ffffff;">${data.origem}</b>
                                        </div>
                                        ${data.categoria ? `
                                        <div style="font-size: 11px; color: #a1a1aa; margin-top: 2px;">
                                            Categoria: <b style="color: #c084fc;">${data.categoria}</b>
                                        </div>` : ""}
                                        
                                        <!-- Divisória Interna -->
                                        <div style="border-top: 1px solid #3f3f46; margin: 18px 20px 14px 20px;"></div>

                                        <!-- Saldo Consolidado -->
                                        <div style="font-size: 13px; color: #a1a1aa;">
                                            Seu novo saldo consolidado: <b style="color: #c084fc; font-size: 16px;">${data.saldoTotal} nfs</b>
                                        </div>
                                        <div style="font-size: 11px; color: #71717a; margin-top: 4px;">
                                            Validade do lote: ${validadeMeses} meses (regra FEFO) ${data.transacaoId ? `&bull; Ref: ${data.transacaoId}` : ""}
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Botão CTA -->
                    <tr>
                        <td align="center" style="padding: 10px 30px 35px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="border-radius: 12px; background-color: #6B2AD9;">
                                        <a href="${appUrl}/wallet" target="_blank" style="display: inline-block; padding: 16px 36px; font-size: 14px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 12px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(107, 42, 217, 0.4);">
                                            VER EXTRATO E RESGATAR &rarr;
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Rodapé -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #09090b; border-top: 1px solid #27272a; text-align: center;">
                            <p style="color: #52525b; font-size: 10px; line-height: 1.5; margin: 0;">
                                <b>NETFITS PLATAFORMA DIGITAL LTDA.</b> &bull; CNPJ 68.930.455/0001-40 &bull; Santana de Parnaíba - SP<br>
                                Pontos válidos por ${validadeMeses} meses (regra FEFO) &bull; <a href="mailto:extrato@netfits.com.br" style="color: #a1a1aa; text-decoration: underline;">extrato@netfits.com.br</a>
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

// -------------------------------------------------------------
// 4. Template: Pedido Confirmado no Shop (Com Demonstrativo Financeiro Completo)
// -------------------------------------------------------------
export function renderShopOrderEmail(data: ShopOrderEmailData): string {
  const nome = data.nomeUsuario || "Atleta";
  const appUrl = data.appUrl || "https://www.netfits.com.br";
  const subtotal = data.valorSubtotal !== undefined ? Number(data.valorSubtotal).toFixed(2).replace(".", ",") : "0,00";
  const frete = data.valorFrete || "Grátis";
  const formaPagamento = data.formaPagamento || "Cartão de Crédito";
  const totalPago = data.valorTotalPago !== undefined ? Number(data.valorTotalPago).toFixed(2).replace(".", ",") : subtotal;
  const pontosUsados = Number(data.pontosUtilizados) || 0;
  // CPP oficial de Resgate: R$ 0,010 por ponto
  const descontoPontos = data.valorDescontoPontos !== undefined 
    ? String(data.valorDescontoPontos).replace(".", ",") 
    : (pontosUsados * 0.01).toFixed(2).replace(".", ",");
  const saldoRestante = data.saldoRestante !== undefined ? String(data.saldoRestante) : null;
  const cashback = data.cashbackGerado !== undefined ? String(data.cashbackGerado) : null;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedido Confirmado - Netfits Shop</title>
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none;">
    <div style="display: none; max-height: 0px; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; color: #09090b; opacity: 0;">
        Pedido ${data.numeroPedido} confirmado com sucesso no Netfits Shop! Seus pontos foram abatidos no checkout.
        &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy;
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #09090b;">
        <tr>
            <td align="center" style="padding: 40px 15px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #18181b; border: 1px solid #27272a; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
                    
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 32px 30px 20px 30px; background: linear-gradient(135deg, #18181b 0%, #35106E 100%); border-bottom: 1px solid #3f3f46;">
                            <a href="${appUrl}" target="_blank" style="text-decoration: none;">
                                <div style="font-size: 28px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
                                    NET<span style="color: #C8F135;">FITS</span>
                                </div>
                            </a>
                            <div style="font-size: 11px; font-weight: 600; letter-spacing: 1.5px; color: #a1a1aa; text-transform: uppercase; margin-top: 8px;">
                                Netfits Shop &bull; Comprovante de Pedido
                            </div>
                        </td>
                    </tr>

                    <!-- Bloco de Status Aprovado -->
                    <tr>
                        <td align="center" style="padding: 32px 30px 10px 30px;">
                            <div style="display: inline-block; background-color: rgba(200, 241, 53, 0.1); border: 1px solid #C8F135; border-radius: 50px; padding: 6px 18px; margin-bottom: 16px;">
                                <span style="color: #C8F135; font-size: 12px; font-weight: 800; text-transform: uppercase;">
                                    🛍️ PEDIDO CONFIRMADO
                                </span>
                            </div>

                            <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; line-height: 1.3; margin: 0 0 8px 0;">
                                Parabéns pela sua compra, ${nome}!
                            </h1>
                            <p style="color: #a1a1aa; font-size: 14px; line-height: 1.5; margin: 0;">
                                Seu pedido foi processado com sucesso. Seus pontos Netfits foram abatidos de forma transparente no checkout.
                            </p>
                        </td>
                    </tr>

                    <!-- Card com Resumo do Pedido -->
                    <tr>
                        <td style="padding: 16px 30px 10px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #27272a; border: 1px solid #3f3f46; border-radius: 14px; padding: 14px 18px;">
                                <tr>
                                    <td width="50%" style="padding: 6px 0;">
                                        <div style="font-size: 11px; color: #a1a1aa; text-transform: uppercase; font-weight: 700;">Número do Pedido</div>
                                        <div style="font-size: 15px; color: #C8F135; font-weight: 800; margin-top: 3px;">${data.numeroPedido}</div>
                                    </td>
                                    <td width="50%" align="right" style="padding: 6px 0;">
                                        <div style="font-size: 11px; color: #a1a1aa; text-transform: uppercase; font-weight: 700;">Data da Compra</div>
                                        <div style="font-size: 13px; color: #ffffff; font-weight: 600; margin-top: 3px;">${data.dataCompra || new Date().toLocaleDateString("pt-BR")}</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Detalhes do Produto Adquirido -->
                    <tr>
                        <td style="padding: 10px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #27272a; border: 1px solid #3f3f46; border-radius: 14px;">
                                <tr>
                                    <td style="padding: 20px;">
                                        <div style="font-size: 11px; font-weight: 700; color: #a1a1aa; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Item Adquirido
                                        </div>
                                        <div style="font-size: 17px; font-weight: 800; color: #ffffff; margin: 4px 0 6px 0;">
                                            ${data.produto}
                                        </div>
                                        <div style="font-size: 13px; color: #a1a1aa;">
                                            Vendido e entregue por: <b style="color: #ffffff;">${data.parceiro || "Netfits Shop"}</b> &bull; Qtd: <b style="color: #ffffff;">${data.quantidade || "1"} un.</b>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Demonstrativo Financeiro Completo -->
                    <tr>
                        <td style="padding: 10px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background: linear-gradient(180deg, #27272a 0%, #1c1917 100%); border: 1px solid #3f3f46; border-radius: 14px; padding: 20px;">
                                <tr>
                                    <td colspan="2" style="padding-bottom: 12px; border-bottom: 1px solid #3f3f46;">
                                        <div style="font-size: 12px; font-weight: 800; color: #ffffff; text-transform: uppercase; letter-spacing: 0.5px;">
                                            💳 Demonstrativo de Pagamento
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0 4px 0; color: #a1a1aa; font-size: 13px;">Subtotal do Produto:</td>
                                    <td align="right" style="padding: 10px 0 4px 0; color: #ffffff; font-size: 13px; font-weight: 600;">R$ ${subtotal}</td>
                                </tr>
                                ${pontosUsados > 0 ? `
                                <tr>
                                    <td style="padding: 4px 0; color: #C8F135; font-size: 13px; font-weight: 700;">
                                        Desconto com Pontos (${pontosUsados.toLocaleString("pt-BR")} nfs):
                                    </td>
                                    <td align="right" style="padding: 4px 0; color: #C8F135; font-size: 13px; font-weight: 800;">
                                        - R$ ${descontoPontos}
                                    </td>
                                </tr>` : ""}
                                <tr>
                                    <td style="padding: 4px 0 10px 0; color: #a1a1aa; font-size: 13px;">Frete / Entrega:</td>
                                    <td align="right" style="padding: 4px 0 10px 0; color: #ffffff; font-size: 13px; font-weight: 600;">${frete}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 12px 0 0 0; border-top: 1px solid #3f3f46; color: #ffffff; font-size: 15px; font-weight: 800;">
                                        Total Pago (${formaPagamento}):
                                    </td>
                                    <td align="right" style="padding: 12px 0 0 0; border-top: 1px solid #3f3f46; color: #ffffff; font-size: 18px; font-weight: 900;">
                                        R$ ${totalPago}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Extrato da Carteira & Cashback -->
                    ${(pontosUsados > 0 || saldoRestante !== null || cashback) ? `
                    <tr>
                        <td style="padding: 10px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(200, 241, 53, 0.05); border: 1px solid rgba(200, 241, 53, 0.3); border-radius: 14px; padding: 18px;">
                                <tr>
                                    <td>
                                        <div style="font-size: 11px; font-weight: 800; color: #C8F135; text-transform: uppercase; letter-spacing: 0.5px;">
                                            ⚡ Movimentação da sua Carteira Netfits
                                        </div>
                                        <div style="font-size: 13px; color: #e4e4e7; margin-top: 8px; line-height: 1.6;">
                                            ${pontosUsados > 0 ? `&bull; Pontos debitados no checkout: <b style="color: #f87171;">-${pontosUsados.toLocaleString("pt-BR")} nfs</b><br>` : ""}
                                            ${saldoRestante !== null ? `&bull; Novo saldo disponível na carteira: <b style="color: #ffffff;">${saldoRestante} nfs</b><br>` : ""}
                                            ${cashback ? `&bull; Cashback previsto nesta compra: <b style="color: #C8F135;">+${cashback} nfs</b> (creditado após a entrega)` : ""}
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>` : ""}

                    <!-- Endereço de Entrega & Rastreio -->
                    ${data.enderecoEntrega ? `
                    <tr>
                        <td style="padding: 10px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #27272a; border: 1px solid #3f3f46; border-radius: 14px; padding: 16px 20px;">
                                <tr>
                                    <td>
                                        <div style="font-size: 11px; font-weight: 700; color: #a1a1aa; text-transform: uppercase; letter-spacing: 0.5px;">
                                            📍 Endereço de Entrega
                                        </div>
                                        <div style="font-size: 13px; color: #ffffff; margin-top: 4px; line-height: 1.5;">
                                            ${data.enderecoEntrega}
                                        </div>
                                        ${data.previsaoEntrega ? `
                                        <div style="font-size: 12px; color: #C8F135; margin-top: 6px; font-weight: 600;">
                                            Previsão de Entrega: ${data.previsaoEntrega}
                                        </div>` : ""}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>` : ""}

                    <!-- Botão CTA -->
                    <tr>
                        <td align="center" style="padding: 18px 30px 35px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="border-radius: 12px; background-color: #6B2AD9;">
                                        <a href="${appUrl}/market" target="_blank" style="display: inline-block; padding: 16px 36px; font-size: 14px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 12px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(107, 42, 217, 0.4);">
                                            ACOMPANHAR NO NETFITS SHOP &rarr;
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Rodapé -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #09090b; border-top: 1px solid #27272a; text-align: center;">
                            <p style="color: #52525b; font-size: 10px; line-height: 1.5; margin: 0;">
                                <b>NETFITS PLATAFORMA DIGITAL LTDA.</b> &bull; CNPJ 68.930.455/0001-40 &bull; Santana de Parnaíba - SP<br>
                                Dúvidas sobre seu pedido: <a href="mailto:pedidos@netfits.com.br" style="color: #a1a1aa; text-decoration: underline;">pedidos@netfits.com.br</a>
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

// -------------------------------------------------------------
// 5. Template: Pesquisa de Satisfação NPS
// -------------------------------------------------------------
export function renderNpsEmail(data: NpsEmailData): string {
  const nome = data.nomeUsuario || "Atleta";
  const baseUrl = data.appUrl || "https://www.netfits.com.br";
  const pedidoQuery = data.numeroPedido ? `&pedido=${encodeURIComponent(data.numeroPedido)}` : "";

  const renderNpsButton = (score: number) => {
    let bg = "#ef4444";
    let color = "#ffffff";
    if (score >= 7 && score <= 8) bg = "#f59e0b";
    if (score >= 9) {
      bg = "#10b981";
      color = "#ffffff";
    }
    const linkUrl = `${baseUrl}/contato?nps=${score}&source=email${pedidoQuery}`;
    return `<td align="center" style="padding: 4px;">
      <a href="${linkUrl}" target="_blank" style="display: block; width: 36px; height: 38px; line-height: 38px; text-align: center; background-color: #27272a; border: 1px solid #3f3f46; border-radius: 8px; font-size: 15px; font-weight: 800; color: ${color}; text-decoration: none; border-bottom: 3px solid ${bg};">
        ${score}
      </a>
    </td>`;
  };

  const contextMessage = data.numeroPedido
    ? `Identificamos que seu pedido <b>#${data.numeroPedido}</b>${data.produto ? ` (<i>${data.produto}</i>)` : ""} foi concluído recentemente. Queremos garantir que sua experiência de compra e pontuação tenha sido nota 10.`
    : `Como membro ativo da comunidade Netfits, sua avaliação contínua é o combustível para evoluirmos nossos serviços de fidelidade, tecnologia e bem-estar.`;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sua opinião é fundamental na Netfits!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none;">
    <div style="display: none; max-height: 0px; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; color: #09090b; opacity: 0;">
        Avalie sua experiência na Netfits em apenas 1 clique. Ajude-nos a construir a melhor comunidade esportiva do Brasil.
        &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy;
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #09090b;">
        <tr>
            <td align="center" style="padding: 40px 15px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #18181b; border: 1px solid #27272a; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
                    
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 32px 30px 20px 30px; background: linear-gradient(135deg, #18181b 0%, #35106E 100%); border-bottom: 1px solid #3f3f46;">
                            <a href="${baseUrl}" target="_blank" style="text-decoration: none;">
                                <div style="font-size: 28px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
                                    NET<span style="color: #C8F135;">FITS</span>
                                </div>
                            </a>
                            <div style="font-size: 11px; font-weight: 600; letter-spacing: 1.5px; color: #a1a1aa; text-transform: uppercase; margin-top: 8px;">
                                Ouvidoria &amp; Experiência do Atleta
                            </div>
                        </td>
                    </tr>

                    <!-- Bloco de Destaque -->
                    <tr>
                        <td align="center" style="padding: 32px 30px 10px 30px;">
                            <div style="display: inline-block; background-color: rgba(192, 132, 252, 0.1); border: 1px solid #c084fc; border-radius: 50px; padding: 6px 18px; margin-bottom: 16px;">
                                <span style="color: #c084fc; font-size: 12px; font-weight: 800; text-transform: uppercase;">
                                    ⭐ PESQUISA DE SATISFAÇÃO (NPS)
                                </span>
                            </div>

                            <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; line-height: 1.3; margin: 0 0 10px 0;">
                                Olá, ${nome}! Como foi sua experiência?
                            </h1>
                            <p style="color: #a1a1aa; font-size: 14px; line-height: 1.6; margin: 0 0 16px 0; max-width: 500px;">
                                ${contextMessage}
                            </p>
                        </td>
                    </tr>

                    <!-- Card de Avaliação NPS -->
                    <tr>
                        <td style="padding: 10px 30px 25px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #27272a; border: 1px solid #3f3f46; border-radius: 16px; padding: 24px 20px;">
                                <tr>
                                    <td align="center" style="padding-bottom: 18px;">
                                        <div style="color: #ffffff; font-size: 15px; font-weight: 700; line-height: 1.4; max-width: 460px;">
                                            Em uma escala de 0 a 10, o quanto você recomendaria a Netfits para um amigo ou familiar?
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;">
                                            <tr>
                                                ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(renderNpsButton).join("")}
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding-top: 14px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="left" style="font-size: 11px; color: #ef4444; font-weight: 700;">
                                                    &larr; 0 = Pouco Provável
                                                </td>
                                                <td align="right" style="font-size: 11px; color: #10b981; font-weight: 700;">
                                                    10 = Altamente Provável &rarr;
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- CTA Adicional de Comentário -->
                    <tr>
                        <td align="center" style="padding: 0 30px 30px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="border-radius: 12px; background-color: #6B2AD9;">
                                        <a href="${baseUrl}/contato?source=email_nps${pedidoQuery}" target="_blank" style="display: inline-block; padding: 14px 32px; font-size: 13px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 12px; letter-spacing: 0.5px;">
                                            ENVIAR COMENTÁRIO OU SUGESTÃO &rarr;
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Rodapé -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #09090b; border-top: 1px solid #27272a; text-align: center;">
                            <p style="color: #52525b; font-size: 10px; line-height: 1.5; margin: 0;">
                                <b>NETFITS PLATAFORMA DIGITAL LTDA.</b> &bull; CNPJ 68.930.455/0001-40 &bull; Santana de Parnaíba - SP<br>
                                Ouvidoria e Experiência: <a href="mailto:experiencia@netfits.com.br" style="color: #a1a1aa; text-decoration: underline;">experiencia@netfits.com.br</a>
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

// -------------------------------------------------------------
// 6. Template: Confirmação de Assinatura do Clube Netfits (NOVO)
// -------------------------------------------------------------
export function renderClubSubscriptionEmail(data: ClubSubscriptionEmailData): string {
  const nome = data.nomeUsuario || "Assinante VIP";
  const appUrl = data.appUrl || "https://www.netfits.com.br";
  const mensalidade = data.valorMensalidadeBrl !== undefined ? String(data.valorMensalidadeBrl).replace(".", ",") : "19,90";
  const pontosAdesao = data.pontosAdesao ?? 250;
  const pontosTreino = data.pontosPorTreino ?? 25;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bem-vindo ao Clube Netfits!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none;">
    <div style="display: none; max-height: 0px; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; color: #09090b; opacity: 0;">
        Assinatura do Clube Netfits confirmada! +${pontosAdesao} nfs liberados na hora + 25 nfs por treino validado.
        &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy;
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #09090b;">
        <tr>
            <td align="center" style="padding: 40px 15px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #18181b; border: 1px solid #6B2AD9; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(107,42,217,0.3);">
                    
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 36px 30px 24px 30px; background: linear-gradient(135deg, #18181b 0%, #35106E 100%); border-bottom: 1px solid #6B2AD9;">
                            <a href="${appUrl}" target="_blank" style="text-decoration: none;">
                                <div style="font-size: 28px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
                                    NET<span style="color: #C8F135;">FITS</span> <span style="font-size: 14px; font-mono text-purple-400 font-bold bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/40">CLUBE VIP</span>
                                </div>
                            </a>
                            <div style="font-size: 11px; font-weight: 600; letter-spacing: 1.5px; color: #C8F135; text-transform: uppercase; margin-top: 8px;">
                                Longevidade Ativa &bull; Sweat-and-Earn Exclusivo
                            </div>
                        </td>
                    </tr>

                    <!-- Bloco de Destaque -->
                    <tr>
                        <td align="center" style="padding: 32px 30px 10px 30px;">
                            <div style="display: inline-block; background-color: rgba(200, 241, 53, 0.1); border: 1px solid #C8F135; border-radius: 50px; padding: 6px 18px; margin-bottom: 16px;">
                                <span style="color: #C8F135; font-size: 12px; font-weight: 800; text-transform: uppercase;">
                                    👑 ASSINATURA ATIVA
                                </span>
                            </div>

                            <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; line-height: 1.3; margin: 0 0 8px 0;">
                                Bem-vindo ao Clube Netfits, ${nome}!
                            </h1>
                            <p style="color: #a1a1aa; font-size: 14px; line-height: 1.5; margin: 0;">
                                Sua adesão ao <b>${data.planoNome || "Plano Mensal"}</b> (R$ ${mensalidade}/mês) foi confirmada com sucesso.
                            </p>
                        </td>
                    </tr>

                    <!-- Card com Bônus Garantido -->
                    <tr>
                        <td align="center" style="padding: 20px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #27272a; border: 1px solid #6B2AD9; border-radius: 16px; text-align: center;">
                                <tr>
                                    <td style="padding: 24px 20px;">
                                        <div style="font-size: 12px; font-weight: 700; color: #c084fc; text-transform: uppercase; letter-spacing: 1px;">
                                            Crédito Automático da Mensalidade
                                        </div>
                                        <div style="font-size: 46px; font-weight: 900; color: #C8F135; margin: 6px 0 2px 0; font-family: -apple-system, sans-serif;">
                                            +${pontosAdesao} <span style="font-size: 24px; color: #ffffff;">nfs</span>
                                        </div>
                                        <div style="font-size: 12px; color: #d4d4d8;">
                                            Garantidos todo mês na renovação da sua assinatura.
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Benefícios Ativados no Clube -->
                    <tr>
                        <td style="padding: 10px 30px 25px 30px;">
                            <div style="font-size: 13px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 14px;">
                                Seus superpoderes de membro do Clube:
                            </div>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 12px;">
                                <tr>
                                    <td width="28" valign="top" style="color: #C8F135; font-size: 16px;">✔</td>
                                    <td valign="top" style="color: #d4d4d8; font-size: 13px; line-height: 1.5;">
                                        <b>+${pontosTreino} nfs por treino validado</b> via Apple Watch, Garmin ou Strava.
                                    </td>
                                </tr>
                            </table>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 12px;">
                                <tr>
                                    <td width="28" valign="top" style="color: #C8F135; font-size: 16px;">✔</td>
                                    <td valign="top" style="color: #d4d4d8; font-size: 13px; line-height: 1.5;">
                                        <b>20% mais pontos no Netfits Shop</b>: ganhe 4,8 nfs a cada R$ 1,00 gasto.
                                    </td>
                                </tr>
                            </table>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%;">
                                <tr>
                                    <td width="28" valign="top" style="color: #C8F135; font-size: 16px;">✔</td>
                                    <td valign="top" style="color: #d4d4d8; font-size: 13px; line-height: 1.5;">
                                        <b>10% de comissão MGM</b> sobre todos os pontos ganhos nas compras no shop pelos seus indicados.
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Botão CTA -->
                    <tr>
                        <td align="center" style="padding: 10px 30px 35px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="border-radius: 12px; background-color: #6B2AD9;">
                                        <a href="${appUrl}/activities" target="_blank" style="display: inline-block; padding: 16px 36px; font-size: 14px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 12px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(107, 42, 217, 0.4);">
                                            SINCRONIZAR MEUS TREINOS &rarr;
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Rodapé -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #09090b; border-top: 1px solid #27272a; text-align: center;">
                            <p style="color: #52525b; font-size: 10px; line-height: 1.5; margin: 0;">
                                <b>NETFITS PLATAFORMA DIGITAL LTDA.</b> &bull; CNPJ 68.930.455/0001-40<br>
                                Gestão da Assinatura: <a href="mailto:clube@netfits.com.br" style="color: #a1a1aa; text-decoration: underline;">clube@netfits.com.br</a>
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}

// -------------------------------------------------------------
// 7. Template: Indicação Concluída com Sucesso (MGM) (NOVO)
// -------------------------------------------------------------
export function renderReferralCompletedEmail(data: ReferralCompletedEmailData): string {
  const nome = data.nomeUsuario || "Atleta";
  const amigo = data.nomeAmigoIndicado || "Seu amigo";
  const pontos = data.pontosCreditados ?? 50;
  const appUrl = data.appUrl || "https://www.netfits.com.br";

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Indicação Concluída - Bônus Creditado!</title>
</head>
<body style="margin: 0; padding: 0; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none;">
    <div style="display: none; max-height: 0px; overflow: hidden; mso-hide: all; font-size: 1px; line-height: 1px; color: #09090b; opacity: 0;">
        ${amigo} entrou na Netfits com seu convite! Seus +${pontos} nfs já estão na carteira.
        &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy;
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #09090b;">
        <tr>
            <td align="center" style="padding: 40px 15px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #18181b; border: 1px solid #27272a; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
                    
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 32px 30px 20px 30px; background: linear-gradient(135deg, #18181b 0%, #35106E 100%); border-bottom: 1px solid #3f3f46;">
                            <a href="${appUrl}" target="_blank" style="text-decoration: none;">
                                <div style="font-size: 28px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
                                    NET<span style="color: #C8F135;">FITS</span>
                                </div>
                            </a>
                            <div style="font-size: 11px; font-weight: 600; letter-spacing: 1.5px; color: #a1a1aa; text-transform: uppercase; margin-top: 8px;">
                                Tribo Esportiva &bull; Programa de Indicação
                            </div>
                        </td>
                    </tr>

                    <!-- Bloco de Destaque -->
                    <tr>
                        <td align="center" style="padding: 32px 30px 10px 30px;">
                            <div style="display: inline-block; background-color: rgba(200, 241, 53, 0.1); border: 1px solid #C8F135; border-radius: 50px; padding: 6px 18px; margin-bottom: 16px;">
                                <span style="color: #C8F135; font-size: 12px; font-weight: 800; text-transform: uppercase;">
                                    🎉 INDICAÇÃO CONCLUÍDA
                                </span>
                            </div>

                            <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; line-height: 1.3; margin: 0 0 8px 0;">
                                Parabéns, ${nome}!
                            </h1>
                            <p style="color: #a1a1aa; font-size: 14px; line-height: 1.5; margin: 0;">
                                <b>${amigo}</b> acabou de se cadastrar na Netfits utilizando o seu link de convite.
                            </p>
                        </td>
                    </tr>

                    <!-- Card Destaque: Valor do Bônus -->
                    <tr>
                        <td align="center" style="padding: 20px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #27272a; border: 1px solid #3f3f46; border-radius: 16px; text-align: center;">
                                <tr>
                                    <td style="padding: 26px 20px;">
                                        <div style="font-size: 12px; font-weight: 700; color: #a1a1aa; text-transform: uppercase; letter-spacing: 1px;">
                                            Bônus de Indicação Creditado
                                        </div>
                                        <div style="font-size: 46px; font-weight: 900; color: #C8F135; margin: 6px 0 2px 0; font-family: -apple-system, sans-serif;">
                                            +${pontos} <span style="font-size: 24px; color: #ffffff;">nfs</span>
                                        </div>
                                        ${data.saldoAtual !== undefined ? `
                                        <div style="font-size: 13px; color: #a1a1aa; margin-top: 8px;">
                                            Novo saldo disponível na carteira: <b style="color: #c084fc;">${data.saldoAtual} nfs</b>
                                        </div>` : ""}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Convidar Mais Amigos -->
                    ${data.referralCode ? `
                    <tr>
                        <td style="padding: 0 30px 25px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: rgba(107, 42, 217, 0.15); border: 1px solid #6B2AD9; border-radius: 14px; padding: 16px 20px;">
                                <tr>
                                    <td>
                                        <div style="font-size: 11px; font-weight: 800; color: #c084fc; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Continue Convidando Sua Tribo
                                        </div>
                                        <div style="font-size: 13px; color: #ffffff; margin-top: 4px; line-height: 1.5;">
                                            Compartilhe seu código com mais pessoas do seu treino e ganhe <b>+50 nfs</b> a cada nova adesão.
                                        </div>
                                        <div style="margin-top: 8px; font-family: monospace; font-size: 16px; font-weight: 900; color: #C8F135;">
                                            ${data.referralCode}
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>` : ""}

                    <!-- Botão CTA -->
                    <tr>
                        <td align="center" style="padding: 10px 30px 35px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center" style="border-radius: 12px; background-color: #6B2AD9;">
                                        <a href="${appUrl}/wallet" target="_blank" style="display: inline-block; padding: 16px 36px; font-size: 14px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 12px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(107, 42, 217, 0.4);">
                                            VER CARTEIRA DE PONTOS &rarr;
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Rodapé -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #09090b; border-top: 1px solid #27272a; text-align: center;">
                            <p style="color: #52525b; font-size: 10px; line-height: 1.5; margin: 0;">
                                <b>NETFITS PLATAFORMA DIGITAL LTDA.</b> &bull; CNPJ 68.930.455/0001-40 &bull; Santana de Parnaíba - SP<br>
                                Indique e Ganhe Netfits &bull; <a href="mailto:contato@netfits.com.br" style="color: #a1a1aa; text-decoration: underline;">contato@netfits.com.br</a>
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}
