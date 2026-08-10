# 🚀 Guia de Publicação Online do App Netfits em 1-Clique (Vercel & Cloudflare)

Como o código-fonte do Netfits já está salvo e sincronizado no seu repositório GitHub ([`github.com/andre-gallo-nfs/app_netfits`](https://github.com/andre-gallo-nfs/app_netfits)), publicá-lo online leva **menos de 2 minutos**!

---

## ⚡ Opção 1: Vercel (Recomendado — O mais rápido e prático)

### Passo a Passo:
1. Acesse o site da **[Vercel](https://vercel.com)**.
2. Clique em **Continue with GitHub** para entrar usando sua conta `andre-gallo-nfs`.
3. No painel inicial, clique no botão **"Add New..."** ➔ escolha **"Project"**.
4. Na lista de repositórios, localize **`app_netfits`** e clique no botão **"Import"**.
5. Deixe as configurações padrão (a Vercel identifica o Vite automaticamente) e clique no botão **"Deploy"**.

> 🎉 **Resultado**: Em aproximadamente 45 segundos, a Vercel gerará o seu link público seguro com certificado SSL gratuito (ex: `https://app-netfits.vercel.app`).

---

## 🌩️ Opção 2: Cloudflare Pages (Máxima velocidade global)

### Passo a Passo:
1. Acesse o painel da **[Cloudflare](https://dash.cloudflare.com)**.
2. No menu lateral, acesse **Workers & Pages** ➔ clique na aba **Pages**.
3. Clique em **Connect to Git** e selecione seu repositório `andre-gallo-nfs/app_netfits`.
4. Preencha as configurações de build:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build` ou `bun run build`
   - **Build output directory**: `dist`
5. Clique em **Save and Deploy**.

> 🎉 **Resultado**: O aplicativo estará publicado na CDN global da Cloudflare com o link `https://app-netfits.pages.dev`.

---

## 🔄 Atualização Automática (Continuous Deployment)
Toda vez que fizermos uma nova alteração ou backup no código e dermos um `git push`, a Vercel/Cloudflare **atualizará o site online automaticamente em segundos**, sem você precisar fazer nada!
