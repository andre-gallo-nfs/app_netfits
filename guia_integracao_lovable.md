# 💖 Guia de Integração com o Lovable.dev — Netfits

Sim! **É 100% possível e simples conectar o projeto Netfits com o Lovable.dev.**

Como o Lovable utiliza o **GitHub** como sua base de sincronização bidirecional (two-way sync), todas as telas, componentes e rotas que construímos no repositório [`github.com/andre-gallo-nfs/app_netfits`](https://github.com/andre-gallo-nfs/app_netfits) podem ser importadas e editadas no Lovable.

---

## 🛠️ Passo a Passo para Conectar:

### 1. Importar o Repositório no Lovable
1. Acesse o seu painel no **[Lovable.dev](https://lovable.dev)**.
2. Clique em **Import Project** ou **Connect GitHub Repository**.
3. Autorize o acesso à sua conta do GitHub `andre-gallo-nfs`.
4. Selecione o repositório **`app_netfits`**.

---

## 🔄 Fluxo de Trabalho em Dupla Via (Bidirecional):

### 📤 Do Antigravity para o Lovable:
Sempre que atualizarmos o código aqui e dermos um `git push origin main`, o Lovable detectará o novo commit no GitHub e atualizará o projeto na interface dele automaticamente.

### 📥 Do Lovable para o Antigravity:
Se você alterar telas, cores ou componentes dentro da interface do Lovable, o Lovable enviará os commits para a branch `main` do GitHub. Para puxar essas atualizações para o seu computador local, basta rodar no terminal:

```bash
cd /Users/andre/.gemini/antigravity/scratch/netfits
git pull origin main
```
