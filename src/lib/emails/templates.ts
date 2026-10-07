/**
 * Templates Oficiais de E-mails Transacionais Netfits
 * Codificação UTF-8, responsivo (Desktop 600px / Mobile 390px),
 * Paleta oficial Netfits (Dark Slate #09090b / #18181b, Roxo #7c3aed / #c084fc, Verde Lime #a3e635).
 */

export interface WelcomeEmailData {
  nomeUsuario: string;
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
  corStatusCashback?: string;
  textoStatusCashback?: string;
  previsaoEntrega?: string;
  enderecoEntrega?: string;
}

export function renderWelcomeEmail({ nomeUsuario, appUrl = "https://www.netfits.com.br" }: WelcomeEmailData): string {
  const nome = nomeUsuario || "Atleta";
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
        Seus +50 nfs bônus de boas-vindas já estão liberados! Comece a transformar seus treinos e hábitos saudáveis em recompensas reais.
        &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy;
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #09090b;">
        <tr>
            <td align="center" style="padding: 40px 15px 40px 15px;">
                <!-- Container Principal -->
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #18181b; border: 1px solid #27272a; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
                    
                    <!-- Header com Marca Netfits -->
                    <tr>
                        <td align="center" style="padding: 36px 30px 24px 30px; background: linear-gradient(135deg, #18181b 0%, #2e1065 100%); border-bottom: 1px solid #3f3f46;">
                            <table border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td align="center">
                                        <a href="${appUrl}" target="_blank" style="text-decoration: none;">
                                            <div style="font-size: 28px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
                                                NET<span style="color: #a3e635;">FITS</span>
                                            </div>
                                        </a>
                                        <div style="font-size: 11px; font-weight: 600; letter-spacing: 1.5px; color: #a1a1aa; text-transform: uppercase; margin-top: 8px;">
                                            Fidelidade &bull; Movimento &bull; Bem-Estar
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Bloco de Destaque: Bônus de Cadastro -->
                    <tr>
                        <td align="center" style="padding: 30px 30px 10px 30px;">
                            <div style="display: inline-block; background-color: rgba(163, 230, 53, 0.1); border: 1px solid #a3e635; border-radius: 50px; padding: 8px 20px;">
                                <span style="color: #a3e635; font-size: 13px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase;">
                                    🎁 BÔNUS DE BOAS-VINDAS LIBERADO
                                </span>
                            </div>
                            <h1 style="color: #ffffff; font-size: 26px; font-weight: 800; line-height: 1.3; margin: 18px 0 8px 0;">
                                Parabéns, <span style="color: #c084fc;">${nome}</span>!
                            </h1>
                            <p style="color: #a1a1aa; font-size: 15px; line-height: 1.6; margin: 0; max-width: 480px;">
                                Seu cadastro foi concluído com sucesso. A partir de agora, cada treino concluído, cada meta atingida e cada hábito saudável vale pontos <b style="color: #ffffff;">nfs</b>.
                            </p>
                        </td>
                    </tr>

                    <!-- Card de Saldo Bônus -->
                    <tr>
                        <td align="center" style="padding: 20px 30px;">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #27272a; border: 1px solid #3f3f46; border-radius: 16px; text-align: center;">
                                <tr>
                                    <td style="padding: 24px 20px;">
                                        <div style="font-size: 12px; font-weight: 700; color: #a1a1aa; text-transform: uppercase; letter-spacing: 1px;">
                                            Seu Saldo Inicial
                                        </div>
                                        <div style="font-size: 42px; font-weight: 900; color: #a3e635; margin: 6px 0 4px 0; font-family: -apple-system, sans-serif;">
                                            +50 <span style="font-size: 22px; color: #ffffff;">nfs</span>
                                        </div>
                                        <div style="font-size: 12px; color: #d4d4d8;">
                                            Creditados automaticamente na sua carteira digital Netfits.
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Passos para Começar -->
                    <tr>
                        <td style="padding: 10px 30px 25px 30px;">
                            <div style="font-size: 14px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 16px;">
                                3 formas rápidas de acumular mais pontos hoje:
                            </div>

                            <!-- Passo 1 -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 12px;">
                                <tr>
                                    <td width="36" valign="top" style="padding-right: 12px;">
                                        <div style="width: 32px; height: 32px; background-color: #7c3aed; color: #ffffff; border-radius: 50%; text-align: center; line-height: 32px; font-weight: 800; font-size: 14px;">
                                            1
                                        </div>
                                    </td>
                                    <td valign="top">
                                        <div style="color: #ffffff; font-size: 14px; font-weight: 700;">Conecte seus Aplicativos de Treino</div>
                                        <div style="color: #a1a1aa; font-size: 12px; line-height: 1.5; margin-top: 2px;">
                                            Vincule Strava, Apple Health, Garmin ou catracas Smart Fit e ganhe <b>+20 nfs</b> a cada treino validado.
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- Passo 2 -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 12px;">
                                <tr>
                                    <td width="36" valign="top" style="padding-right: 12px;">
                                        <div style="width: 32px; height: 32px; background-color: #7c3aed; color: #ffffff; border-radius: 50%; text-align: center; line-height: 32px; font-weight: 800; font-size: 14px;">
                                            2
                                        </div>
                                    </td>
                                    <td valign="top">
                                        <div style="color: #ffffff; font-size: 14px; font-weight: 700;">Leia os Artigos Diários do Feed</div>
                                        <div style="color: #a1a1aa; font-size: 12px; line-height: 1.5; margin-top: 2px;">
                                            Acesse artigos curados de saúde, longevidade e performance e ganhe <b>+5 nfs</b> por leitura.
                                        </div>
                                    </td>
                                </tr>
                            </table>

                            <!-- Passo 3 -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%;">
                                <tr>
                                    <td width="36" valign="top" style="padding-right: 12px;">
                                        <div style="width: 32px; height: 32px; background-color: #7c3aed; color: #ffffff; border-radius: 50%; text-align: center; line-height: 32px; font-weight: 800; font-size: 14px;">
                                            3
                                        </div>
                                    </td>
                                    <td valign="top">
                                        <div style="color: #ffffff; font-size: 14px; font-weight: 700;">Aproveite o Netfits Shop</div>
                                        <div style="color: #a1a1aa; font-size: 12px; line-height: 1.5; margin-top: 2px;">
                                            Compre suplementos, equipamentos e vestuário esportivo acumulando <b>4,00 nfs por R$ 1,00</b> gasto.
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
                                    <td align="center" style="border-radius: 12px; background-color: #7c3aed;">
                                        <a href="${appUrl}" target="_blank" style="display: inline-block; padding: 16px 36px; font-size: 15px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 12px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4);">
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
                                Seus pontos possuem validade de 24 meses conforme a política FEFO do programa.
                            </p>
                            <p style="color: #52525b; font-size: 10px; line-height: 1.5; margin: 0;">
                                <b>NETFITS LTDA</b> &bull; CNPJ 68.930.455/0001-40<br>
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
                        <td align="center" style="padding: 32px 30px 20px 30px; background: linear-gradient(135deg, #18181b 0%, #2e1065 100%); border-bottom: 1px solid #3f3f46;">
                            <a href="https://www.netfits.com.br" target="_blank" style="text-decoration: none;">
                                <div style="font-size: 28px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
                                    NET<span style="color: #a3e635;">FITS</span>
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
                                                <td align="center" style="border-radius: 12px; background-color: #7c3aed;">
                                                    <a href="${resetLink}" target="_blank" style="display: inline-block; padding: 15px 36px; font-size: 14px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 12px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4);">
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
                                <b>NETFITS LTDA</b> &bull; CNPJ 68.930.455/0001-40 &bull; Santana de Parnaíba - SP<br>
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

export function renderPointsCreditedEmail(data: PointsCreditedEmailData): string {
  const nome = data.nomeUsuario || "Atleta";
  const dataHoraStr = data.dataHora || new Date().toLocaleString("pt-BR");
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
                        <td align="center" style="padding: 32px 30px 20px 30px; background: linear-gradient(135deg, #18181b 0%, #1e1b4b 100%); border-bottom: 1px solid #3f3f46;">
                            <a href="https://www.netfits.com.br" target="_blank" style="text-decoration: none;">
                                <div style="font-size: 28px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
                                    NET<span style="color: #a3e635;">FITS</span>
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
                            <div style="display: inline-block; background-color: rgba(163, 230, 53, 0.1); border: 1px solid #a3e635; border-radius: 50px; padding: 6px 18px; margin-bottom: 16px;">
                                <span style="color: #a3e635; font-size: 12px; font-weight: 800; text-transform: uppercase;">
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
                                        <div style="font-size: 46px; font-weight: 900; color: #a3e635; margin: 6px 0 2px 0; font-family: -apple-system, sans-serif;">
                                            +${data.pontos} <span style="font-size: 24px; color: #ffffff;">nfs</span>
                                        </div>
                                        <div style="font-size: 13px; font-weight: 600; color: #d4d4d8; margin-top: 4px;">
                                            Origem: <b style="color: #ffffff;">${data.origem}</b>
                                        </div>
                                        
                                        <!-- Divisória Interna -->
                                        <div style="border-top: 1px solid #3f3f46; margin: 18px 20px 14px 20px;"></div>

                                        <!-- Saldo Consolidado -->
                                        <div style="font-size: 13px; color: #a1a1aa;">
                                            Seu novo saldo consolidado: <b style="color: #c084fc; font-size: 15px;">${data.saldoTotal} nfs</b>
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
                                    <td align="center" style="border-radius: 12px; background-color: #7c3aed;">
                                        <a href="https://www.netfits.com.br/feed" target="_blank" style="display: inline-block; padding: 16px 36px; font-size: 14px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 12px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4);">
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
                                <b>NETFITS LTDA</b> &bull; CNPJ 68.930.455/0001-40 &bull; Santana de Parnaíba - SP<br>
                                Pontos válidos por 24 meses (regra FEFO) &bull; <a href="mailto:extrato@netfits.com.br" style="color: #a1a1aa; text-decoration: underline;">extrato@netfits.com.br</a>
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

export function renderShopOrderEmail(data: ShopOrderEmailData): string {
  const nome = data.nomeUsuario || "Atleta";
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
        Pedido ${data.numeroPedido} confirmado com sucesso no Netfits Shop!
        &#847; &zwnj; &nbsp; &#8199; &shy; &#847; &zwnj; &nbsp; &#8199; &shy;
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #09090b;">
        <tr>
            <td align="center" style="padding: 40px 15px;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #18181b; border: 1px solid #27272a; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.6);">
                    
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 32px 30px 20px 30px; background: linear-gradient(135deg, #18181b 0%, #2e1065 100%); border-bottom: 1px solid #3f3f46;">
                            <a href="https://www.netfits.com.br" target="_blank" style="text-decoration: none;">
                                <div style="font-size: 28px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff;">
                                    NET<span style="color: #a3e635;">FITS</span>
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
                            <div style="display: inline-block; background-color: rgba(163, 230, 53, 0.1); border: 1px solid #a3e635; border-radius: 50px; padding: 6px 18px; margin-bottom: 16px;">
                                <span style="color: #a3e635; font-size: 12px; font-weight: 800; text-transform: uppercase;">
                                    🛍️ PEDIDO CONFIRMADO
                                </span>
                            </div>

                            <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; line-height: 1.3; margin: 0 0 8px 0;">
                                Parabéns pela sua compra, ${nome}!
                            </h1>
                            <p style="color: #a1a1aa; font-size: 14px; line-height: 1.5; margin: 0;">
                                Seu pedido foi processado com sucesso. Seus pontos Netfits foram aplicados de forma transparente no checkout.
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
                                        <div style="font-size: 15px; color: #a3e635; font-weight: 800; margin-top: 3px;">${data.numeroPedido}</div>
                                    </td>
                                    <td width="50%" align="right" style="padding: 6px 0;">
                                        <div style="font-size: 11px; color: #a1a1aa; text-transform: uppercase; font-weight: 700;">Data</div>
                                        <div style="font-size: 13px; color: #ffffff; font-weight: 600; margin-top: 3px;">${data.dataCompra || new Date().toLocaleDateString("pt-BR")}</div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Item Comprado -->
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
                                            Vendido por: <b style="color: #ffffff;">${data.parceiro || "Netfits Shop"}</b> &bull; Qtd: <b style="color: #ffffff;">${data.quantidade || "1"} un.</b>
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
                                    <td align="center" style="border-radius: 12px; background-color: #7c3aed;">
                                        <a href="https://www.netfits.com.br/feed" target="_blank" style="display: inline-block; padding: 16px 36px; font-size: 14px; font-weight: 800; color: #ffffff; text-decoration: none; border-radius: 12px; letter-spacing: 0.5px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.4);">
                                            ACOMPANHAR NO APP &rarr;
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
                                <b>NETFITS LTDA</b> &bull; CNPJ 68.930.455/0001-40 &bull; Santana de Parnaíba - SP<br>
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
