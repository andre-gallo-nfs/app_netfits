# 🚀 Guia de Publicação Oficial do App Netfits (100% Cloudflare)

A infraestrutura oficial, definitiva e exclusiva de produção, borda, DNS e CDN da Netfits é o **Cloudflare** (`www.netfits.com.br`).

O uso de Vercel foi totalmente descomissionado e descontinuado.

---

## 🌩️ Arquitetura de Produção: Cloudflare Workers + Static Assets

- **Domínio Oficial**: `https://www.netfits.com.br`
- **Worker**: `app-netfits`
- **Conta**: `andre.gallo@netfits.com.br`
- **Borda**: SSR TanStack Start em São Paulo (GRU)
- **Zero Egress**: FinOps 100% ativo com Cloudflare R2 e Tiered Cache

---

## 🔄 Fluxo Oficial de Publicação (Homologação ➔ Produção)

1. Todas as alterações são desenvolvidas e validadas na branch `staging`:
   ```bash
   git push origin staging
   ```
2. Após validação humana de negócio pelo André, executa-se o tombamento oficial:
   ```bash
   npm run promote:prod
   ```
3. O script realiza:
   - Validação de rotas e compilação TypeScript (`npm run validate`)
   - Build de produção com injeção de parâmetros (`npm run build:prod`)
   - Merge oficial na branch `main` e push no GitHub
   - **Deploy automático e direto no Cloudflare Workers** via Wrangler CLI (`npx wrangler deploy`)
