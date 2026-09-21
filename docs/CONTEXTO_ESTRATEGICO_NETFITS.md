# NETFITS — CONTEXTO ESTRATÉGICO, HISTÓRICO DE DECISÕES & ARQUITETURA DE MONETIZAÇÃO
## Dossiê de Continuidade para Sessões de IA & Engenharia no Windows

**Projeto:** Netfits (App & Plataforma de Longevidade / Sweat-to-Earn)  
**Repositório Oficial:** `https://github.com/andre-gallo-nfs/app_netfits.git`  
**Diretório Local no Windows:** `C:\Users\aacga\Projetos\app_netfits`  
**Diretório de Documentos e Mídia no OneDrive:** `C:\Users\aacga\OneDrive\netfits`  
**Data de Criação no Windows:** 09 de Setembro de 2026  

---

## 1. RESUMO EXECUTIVO DO PROJETO

A Netfits é uma plataforma pioneira de **Sweat-to-Earn**, saúde preventiva e longevidade física. O modelo conecta o esforço biológico do atleta (calorias gastas validadas via Apple Watch, Wear OS, Strava e Health Connect) a recompensas econômicas tangíveis (pontos `nfs`) com liquidez garantida no **Shop Oficial** e descontos em uma rede credenciada de parceiros de alta performance.

---

## 2. PARÂMETROS OPERACIONAIS & ECONÔMICOS OFICIAIS (VALIDADOS)

Toda a lógica atuarial do aplicativo em `src/lib/operational-params-store.ts`, no painel administrativo `src/routes/admin.tsx` e na carteira `src/routes/wallet.tsx` segue estritamente as seguintes diretrizes:

1. **Custo por Ponto (CPPs):** **CPP de Acúmulo de `R$ 0,015 / nfs`**, **CPP de Resgate de `R$ 0,010 / nfs`** e **CPP de Provisionamento de `R$ 0,010 / nfs`** (Spread de R$ 0,005 retido na emissão).
2. **Validade dos Pontos:** **`24 meses`** (730 dias no algoritmo de amortização FEFO - *First-Expiring, First-Out*).
3. **Paridade de Pontos no Shop:** **4,00 nfs por R$ 1,00 gasto** em compras no e-commerce (multiplicador do Clube parametrizado em 1.0x).
4. **Bônus de Boas-Vindas:** **+50 nfs** no novo cadastro do atleta no aplicativo (primeira compra inicialmente com 0 nfs).
5. **Programa Indique um Amigo (Member-Get-Member):** **+50 nfs** para quem indica e **+50 nfs** no cadastro do novo atleta.
6. **Passivo Circulante Inicial (Go-Live):** **R$ 0,00** (banco relacional de produção inicia limpo, sem distorções de testes).

---

## 3. COCKPIT EXECUTIVO CPC 30 / IFRS 15 & BURN RATE (ROTA /ADMIN)

O painel de controle administrativo em `src/routes/admin.tsx` inclui monitoramento atuarial em tempo real:
* **Passivo Circulante de Fidelidade (CPC 30):** Valoração atuarial contínua dos pontos emitidos em reais (`totalPoints * R$ 0,010`).
* **Taxa de Queima (Burn Rate):** Acompanhamento contínuo da velocidade de resgate de pontos no Shop (benchmark projetado de 38,4%).
* **Reversão Contábil por Expiração (Breakage CPC 47):** Reconhecimento de receita líquida na DRE referente aos 12% a 15% de pontos que expiram após 24 meses.
* **Índice de Cobertura de Caixa (Solvência A+):** Relação entre a reserva de liquidez segregada em conta e o passivo total exigível.

---

## 4. SHOP OFICIAL TURNKEY (PARCERIA ROCK ENCANTECH)

* **Integração Técnica:** Protocolo **SSO JWT assimétrico com RSA-2048 (`RS256`)**.
* **Endpoints de Integração:**
  * `/customer/profile`: Validação de autenticidade do atleta e dados cadastrais.
  * `/loyalty/wallet`: Consulta de saldo de pontos `nfs` em tempo real para abater carrinhos de compras.
  * `/webhooks/rock-orders`: Recepção de pedidos aprovados, reconciliação de take-rate de 6% e crédito automático de pontos de cashback.
* **Isenção Total de App Stores:** Venda de produtos físicos (suplementos, creatina, whey protein, vestuário) enquadrada na Diretriz 3.1.5 da Apple e termos do Google. **Comissão das lojas: 0%.**

---

## 5. ASSINATURAS DO CLUBE & MARCO REGULATÓRIO CADE / APP STORES

Com a publicação do aplicativo tanto na **Apple App Store** quanto no **Google Play Store**, a estratégia de monetização da assinatura do Clube Netfits (**R$ 19,90/mês**) adota o modelo de **Precificação Assimétrica Autorizada pelo CADE**:

1. **Preço na App Store / Google Play (In-App):** **`R$ 24,90 / mês`** (absorvendo a taxa de 15% das lojas).
2. **Preço via Web / PIX Direto:** **`R$ 19,90 / mês`** (+100 pontos nfs de bônus).
3. **Pix Automático (Banco Central):** Canal prioritário de conversão, eliminando o churn involuntário de cartões vencidos e entregando mais de 98,5% de margem líquida por mensalidade (R$ 19,70 retidos).

---

## 6. DIRETÓRIO DE ARQUIVOS ESTRATÉGICOS NO ONEDRIVE (`C:\Users\aacga\OneDrive\netfits`)

Todos os documentos executivos, apresentações e vídeos estão sincronizados localmente nesta máquina Windows:
* 📊 `Netfits_Pitch_Deck_Executivo_Investidores.pptx` (Apresentação institucional de 12 slides).
* 📄 `Netfits_Estrategia_Monetizacao_AppStore_GooglePlay_e_Regulacao_CADE.docx` / `.md`.
* 📄 `Netfits_Checklist_Provisionamento_Infraestrutura_GoLive.docx` / `.md`.
* 📄 `Netfits_Relatorio_Estrategico_Banco_de_Dados_e_Matura_IA.docx` / `.md`.
* 📄 `Netfits_Plano_Estrategico_3Fases_e_Evolucao_IA_Agentica.docx` / `.md`.
* 🎬 `Netfits_Evolucao_Estrategica_e_IA_Agentica.mp4` (Vídeo oficial com narração).

---

## 7. COMO RETOMAR QUALQUER TRABALHO NESTE PROJETO

Ao abrir esta pasta de projeto no Antigravity / VS Code:
1. Executar `npm run validate` para assegurar que os 100 arquivos TypeScript/React estão 100% íntegros.
2. Executar `npm run dev` para subir o servidor local e testar as telas.
3. Consultar os documentos no OneDrive para referências contábeis, apresentações e contratos.
