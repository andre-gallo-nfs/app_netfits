# NETFITS PLATAFORMA DIGITAL S.A.
## MANUAL OPERACIONAL: AMBIENTES DE HOMOLOGAÇÃO & PRODUÇÃO (DUAL-STAGE)

**Data de Implementação:** 08 de Outubro de 2026  
**Status:** Ativo e Homologado  
**Branch de Homologação (Staging):** `staging`  
**Branch de Produção (Prod):** `main`  

---

### 1. O Princípio Fundamental (A Regra de Ouro)

> 🛑 **REGRA DE OURO:**  
> **NENHUMA alteração, ajuste de código ou nova funcionalidade é feita diretamente na branch `main`.**  
> Todo e qualquer pedido via prompt, correção ou refatoração é desenvolvido, testado e publicado inicialmente na branch `staging` (Ambiente de Homologação).  
> A branch `main` só recebe código que foi **testado e aprovado expressamente pelo André**.

---

### 2. Por que esse modelo é obrigatório?

Robôs de teste automatizados (`tsc`, linters, checadores de rota) validam apenas se o código **não contém erros de sintaxe**. Eles são incapazes de detectar:
1. Se a IA **entendeu errado** o que você pediu no prompt.
2. Se a alteração causou um **efeito colateral indesejado de negócio** (ex: apagar dados legítimos, quebrar regras de pontuação ou conflitar com parâmetros da Rock Encantech).

Por isso, o **Portão Humano (Human-in-the-Loop)** em Homologação é a garantia definitiva de blindagem operacional.

---

### 3. O Fluxo Operacional Passo a Passo

```
[1. Solicitação do André via Prompt]
                ↓
[2. Execução Técnica na branch 'staging']
                ↓
[3. Build & Deploy Automático em HOMOLOGAÇÃO]
                ↓
[4. VALIDAÇÃO HUMANA DO ANDRÉ]
    ├── ❌ Rejeitado / Desvio ➔ Volta ao passo 2 (Produção não sofre nada)
    └── ✅ APROVADO ➔ André autoriza: "Pode tombar para produção"
                ↓
[5. Comando Oficial de Tombamento: npm run promote:prod]
                ↓
[6. Mesclagem em 'main' + Revalidação + Deploy Oficial PRODUÇÃO]
```

---

### 4. Matriz Comparativa dos Ambientes

| Item | 🧪 Homologação (Staging) | 🚀 Produção (Prod) |
| :--- | :--- | :--- |
| **Branch Git** | `staging` | `main` |
| **Identificador Visual** | Badge discreta `HOMOLOG` no topo | Sem badge (visual limpo oficial) |
| **Arquivo de Configuração** | `.env.staging` (`VITE_APP_ENV=staging`) | `.env.production` (`VITE_APP_ENV=production`) |
| **Credenciais Rock Mkplace** | Sandbox / Simulação Controlada | Chaves RSA Oficiais em Produção (`PUQ4cwt2...`) |
| **Dados & Carteiras** | Dados de teste | Base de dados oficial dos clientes e parceiros |
| **Deploy Mobile** | Teste interno / Emulador | Trilha de Release (.aab assinado) |

---

### 5. Como Operar no Dia a Dia

#### Para criar uma nova funcionalidade ou correção:
1. Certifique-se de estar na branch `staging`:
   ```bash
   git checkout staging
   ```
2. Realize as alterações e valide localmente:
   ```bash
   npm run validate
   npm run build:staging
   ```
3. Suba para o GitHub:
   ```bash
   git push origin staging
   ```
4. Teste a versão no ambiente de Homologação.

#### Para tombar de Homologação para Produção (Após a sua aprovação):
Basta rodar o comando automatizado no terminal:
```bash
npm run promote:prod
```
O que o script `promote:prod` faz sozinho:
1. Confere se você está na branch `staging` e sem arquivos soltos.
2. Roda o Quality Gate completo e simula o build de produção.
3. Alterna para a `main`, atualiza e faz o merge oficial de `staging`.
4. Roda a validação final na `main` e publica no GitHub (`git push origin main`).
5. Retorna o terminal automaticamente para a branch `staging`, mantendo o seu ambiente seguro.
