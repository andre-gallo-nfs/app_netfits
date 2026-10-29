# 🏛️ NETFITS — DIRETRIZES FUNDAMENTAIS, POLÍTICAS E REGRAS INEGOCIÁVEIS

> **WORKSPACE**: `C:\Users\aacga\OneDrive\netfits`  
> **APLICAÇÃO**: Este documento é mandatório para todos os agentes de IA, conversas e sessões de trabalho sobre a Netfits.

---

## 1. 📜 MANIFESTO DE CULTURA E IDENTIDADE (VERSÃO 2.0)
* **Arquivo Oficial**: `01_Estrategia_e_Negocios/Manifesto_Netfits_v2_0.docx`
* **Tese Central**: *"A vida em movimento vale mais."*
* **Proposta de Valor**: Uma plataforma de benefícios, inteligência e relações para quem escolhe viver de forma ativa — hoje e ao longo da vida.
* **Público**: Esportista e praticante amador de atividades físicas (corrida, ciclismo, musculação, natação, cross training, tênis, triathlon, esportes outdoor).
* **Foco Inicial**: O ponto de partida **não** é medicina intervencionista, clínica, exames ou prescrição de diagnósticos. O ponto de partida é o engajamento: o usuário pratica esporte, consome conteúdo de qualidade, compartilha, compra em parceiros e ganha pontos `nfs`. A medicina do estilo de vida e longevidade (Fibios) entra como curadoria educacional e protocolo preventivo.

---

## 2. 📊 PLANILHA DE CONTROLE MESTRA: `Business Case - v5 - atualizando o fluxo de caixa livre.xlsx`
* **Localização Oficial**: `02_Financas_e_Business_Case/Business Case - v5 - atualizando o fluxo de caixa livre.xlsx`
Todas as decisões de negócio, produtos, pontuação, finanças e telas DEVEM respeitar com rigor absoluto as premissas da planilha **`Business Case - v5`**:

| Premissa / Parâmetro Operacional | Valor Oficial de Referência |
| :--- | :--- |
| **Take-Rate Líquido (Marketplace / Shop)** | **6,0%** (0,06) |
| **Pontos por Real Gasto no Shop** | **4 nfs / R$ 1,00** |
| **Bônus de Cadastro (Novo Usuário)** | **50 nfs** |
| **Bônus de Indicação (MGM - Onboarding)** | **50 nfs** por indicação concluída |
| **Quizzes do Feed — Posts Netfits / Fibios** | **5 nfs** por resposta correta |
| **Quizzes do Feed — Posts Patrocinados** | **10 nfs** por resposta correta |
| **Compartilhamento de Conteúdo** | **1 nf** por compartilhamento |
| **Leitura de Texto / Vídeo** | **0 nfs** (pontuação concentrada no Quiz) |
| **Travas Antifraude de Leitura/Vídeo** | Scroll/tempo mínimo de leitura e *dwell time* de 90% do vídeo |
| **Custo por Ponto (CPP) — Acúmulo** | **R$ 0,015** por ponto |
| **Custo por Ponto (CPP) — Resgate** | **R$ 0,010** por ponto |
| **Custo por Ponto (CPP) — Provisionamento** | **R$ 0,010** por ponto |
| **Validade dos Pontos (FEFO)** | **24 meses** (taxa média de expiração projetada de 5%) |
| **Assinatura do Clube Netfits (Fase 2)** | **R$ 19,90 / mês** |
| **Pontos do Clube Netfits (Fase 2)** | **250 nfs na assinatura e a cada mensalidade + 25 nfs por treino validado** |
| **Bônus de Compras no Shop (Clube)** | **20% mais pontos a cada compra** (4,8 nfs / R$ 1,00) |
| **Comissão MGM de Compras (Clube)** | **10% dos pontos ganhos nas compras no shop de todos os seus indicados** |
| **Público-Alvo Primário Brasil** | **30,7 milhões** de praticantes de renda média/alta |

---

## 3. 💼 PLANO DE NEGÓCIOS (BUSINESS PLAN GALLO V2)
* **Arquivo Oficial**: `01_Estrategia_e_Negocios/Business Plan Netfits - v2 Gallo.docx`
1. **Fases de Expansão**:
   * **Fase 1 (Launch & MVP)**: Feed de conteúdo com gamificação de Quizzes (5 nfs/10 nfs), Marketplace curado (Rock Encantech / 4 nfs por R$ 1) e Clube de fidelidade.
   * **Fase 2 (Club & Serviços)**: Assinatura de R$ 19,90/mês, integração com assessorias esportivas, academias e consultas especializadas.
   * **Fase 3 (Ecossistema Integrado de Longevidade)**: Parcerias corporativas, telemetria avançada de wearables (Apple Health, Garmin, Strava) e marketplace ampliado de serviços de saúde preventiva.
2. **Exclusividade Cloudflare**:
   * A infraestrutura oficial é o **Cloudflare** (`www.netfits.com.br`). O uso de Vercel foi descomissionado.

---

## 4. 🩺 COMPLIANCE MÉDICO E IDENTIFICAÇÃO DOS SÓCIOS FIBIOS (CFM)
* **Diretriz Mandatória**: A Dra. Isabella Formigari e o Dr. Franco Merici estão em processo de conclusão de suas especializações médicas. Em estrito cumprimento às normas regulatórias do Conselho Federal de Medicina (CFM / Codame / RQE), é **estritamente vedado** atribuir a eles qualquer titulação de especialista (como Medicina do Esporte, Ortopedia ou Nutrologia) em qualquer tela, card, modal, assistente virtual ou comunicação pública da Netfits.
* **Titulação e Assinatura Oficial Única**:
  * **Dr. Franco Merici**: `Médico (CRM-SP 212567) sócio fundador da Fibios`
  * **Dra. Isabella Formigari**: `Médica (CRM-SP 282951) sócia fundadora da Fibios`

---

## 5. 🛑 PROTOCOLO OBRIGATÓRIO DE DEPLOY EM PRODUÇÃO (ISOLAMENTO CIRÚRGICO E GATE DE CONFIRMAÇÃO)
* **Regra Inegociável — PROIBIÇÃO ABSOLUTA DE TOMBAMENTO INDISCRIMINADO (`git merge staging`)**:
  O branch `staging` é um ambiente de homologação contínua que frequentemente contém recursos em teste, protótipos, telas da Fase 2 (ex.: Clube Netfits, Hub de Wearables) e experimentos não autorizados para o público geral.
  **É TERMINANTEMENTE PROIBIDO realizar `git merge staging` direto para `main` ou qualquer comando que "tombe" a homologação inteira para produção.** As subidas em produção DEVEM refletir **EXCLUSIVAMENTE as alterações determinadas e aprovadas**.

* **Rito Operacional Obrigatório para Produção**:
  1. **Seleção Cirúrgica de Alterações (Cherry-Pick / Branch Dedicado)**:
     - Isolar as alterações autorizadas utilizando `git cherry-pick <commit-hash>` dos commits específicos aprovados, OU criar uma branch de release a partir de `main` aplicando cirurgicamente apenas os arquivos autorizados.
     - Garantir que nenhum outro commit, tela em teste ou funcionalidade de homologação seja arrastada.
  2. **Auditoria de Contaminação (Sanitização do Diff)**:
     - Executar auditoria de diff antes da subida (`git diff main...HEAD` ou `git log main..HEAD`).
     - Certificar-se de que 100% dos arquivos alterados pertencem estritamente ao escopo aprovado pelo usuário.
  3. **Diff e Inventário Cirúrgico**:
     - Listar detalhadamente e em formato de tópicos todas as alterações de código, telas, regras de negócio e componentes que pretendem subir para produção.
  4. **Identificação de Impacto**:
     - Deixar explicitamente claro se há componentes novos, remoção de funcionalidades ou alterações de layout/fluxo.
  5. **Pedido Formal de Confirmação**:
     - Solicitar validação explícita do usuário: *"Por favor, confirme se são EXCLUSIVAMENTE estas alterações que devem subir para produção."*
  6. **Execução Apenas Após o 'Sim' Explícito**:
     - O deploy (merge/push para `main` e `wrangler deploy`) só poderá ser disparado após o usuário responder positivamente àquela listagem exata. Qualquer item não aprovado deve ser retido antes da publicação.
