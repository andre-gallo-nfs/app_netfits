# 🏆 Plano de Elevação para Nota 10/10 — Portal do Associado & Autenticação

Este documento apresenta as **funcionalidades e melhorias recomendadas** para levar o **Portal do Associado** e o módulo de **Autenticação & Segurança** da nota 9.5 para a **Nota Máxima (10/10)**.

---

## 👑 1. Portal do Associado (`/associado`) — De 9.5 ➔ 10/10

Para tornar o Portal do Associado uma ferramenta imbatível de vendas, engajamento e monetização da tribo:

### 💡 1.1 Simulador Interativo de Ganhos em Tempo Real (Calculadora PIX)
* **Como Funciona**: Um slider ou seletor onde o Associado ajusta o número de atletas ativos na sua tribo (ex: 10, 50, 200, 1.000 indicados) e o ticket médio mensal no Shop (ex: R$ 150/mês por atleta).
* **Resultado Visual**: O portal calcula instantaneamente a renda passiva mensal projetada (ex: `50 atletas x R$ 150/mês = R$ 7.500 GMV ➔ R$ 337,50 PIX/mês direto na conta do Associado`).

### 💡 1.2 Gerador de QR Code de Indicação & Kit de Mídia (Social Marketing Kit)
* **Como Funciona**: 
  1. **QR Code Dinâmico**: Botão para exibir e baixar o QR Code exclusivo do Associado para impressão em banners de eventos, adesivos de academias ou camisetas de corrida.
  2. **Templates para Stories/WhatsApp**: Artes pré-formatadas com o código de indicação do Associado (*"Treine comigo na Netfits e ganhe +50 nfs bônus com o código MARINA-RUN"*).

### 💡 1.3 Módulo de Saque Direto via PIX com Histórico
* **Como Funciona**: Botão **"Solicitar Saque via PIX"** ativado sempre que o saldo de comissões atinge a meta mínima (ex: R$ 50,00). 
* Inclui histórico de extrato de pagamentos com status (*Pendente, Em Processamento, Efetuado via PIX*) e comprovante.

---

## 🔐 2. Autenticação & Segurança (`/auth`) — De 9.5 ➔ 10/10

Para transformar a autenticação em uma experiência sem atrito (*frictionless*) e com padrão bancário de segurança:

### 💡 2.1 Suporte a Biometria / Passkeys (Face ID & Touch ID)
* **Como Funciona**: Integração com **WebAuthn / Passkeys**. Após o primeiro login, o aplicativo oferece a opção *"Ativar login por Biometria / Face ID"*.
* **Resultado**: No próximo acesso, o atleta entra na conta em **menos de 1 segundo com um toque no celular**, sem precisar digitar e-mail ou senha.

### 💡 2.2 Barra Dinâmica de Entropia e Força de Senha (Strength Gauge)
* **Como Funciona**: Além do checklist visual de regras (que já existe), incluir uma barra animada de força que muda de cor (*Vermelha: Fraca ➔ Amarela: Média ➔ Verde: Forte ➔ Roxa: Impenetrável*).

### 💡 2.3 Autenticação de Dois Fatores Opcional (2FA via WhatsApp / App Autenticador)
* **Como Funciona**: O usuário pode ativar 2FA na sua conta para exigir um código numérico de 6 dígitos enviado por WhatsApp ou gerado por aplicativo autenticador (Google Authenticator / 1Password) quando efetuar logins em novos dispositivos ou resgates de alto valor no Shop.

---

## 📊 Matriz de Impacto e Esforço de Implementação

| Funcionalidade Proposta | Módulo | Impacto no Negócio / UX | Esforço de Desenvolvimento |
| :--- | :--- | :--- | :--- |
| 🧮 **Simulador Interativo de Ganhos** | Portal do Associado | 🔥🔥🔥 Alto (Aumenta adesão) | ⚡ Baixo (1 hora) |
| 📲 **Gerador de QR Code de Indicação** | Portal do Associado | 🔥🔥🔥 Alto (Facilita divulgação) | ⚡ Baixo (1 hora) |
| 💸 **Solicitação de Saque via PIX** | Portal do Associado | 🔥🔥🔥 Alto (Confiança financeira) | ⚡ Médio (2 horas) |
| 👆 **Login por Biometria / Passkeys** | Autenticação | 🔥🔥🔥 Alto (UX rápida no mobile) | ⚡ Médio (2 horas) |
| 📊 **Barra Dinâmica de Força de Senha** | Autenticação | 🔥🔥 Médio (Feedback visual) | ⚡ Baixo (30 min) |
