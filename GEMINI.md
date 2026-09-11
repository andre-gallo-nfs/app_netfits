# Netfits — Diretrizes e Regras do Projeto para Agentes IA

## 🚨 REGRA DE OURO MANDATÓRIA: BACKUP PRÉVIO OBRIGATÓRIO

Antes de realizar QUALQUER alteração, refatoração, edição em lote ou implementação de novas funcionalidades no código do projeto:

1. **SEMPRE criar um backup prévio da versão estável anterior**:
   - **Branch de Backup no Git**: criar uma branch com formato `backup/v<versao>-<descricao>-YYYYMMDD`.
   - **Snapshot ZIP**: gerar um arquivo `.zip` da versão anterior na pasta `backups/` com a nomenclatura padrão `backups/Netfits_Backup_v<versao>_<Descricao>_<Data>.zip`.
2. **Nunca** iniciar modificações em arquivos de código-fonte sem antes assegurar que o ponto de restauração esteja registrado.
3. Informar explicitamente ao usuário que o backup prévio foi criado com sucesso antes de iniciar as modificações.

---

## 🛡️ Diretrizes de Qualidade e Governança Netfits

1. **Quality Gates Obrigatórios**:
   - Após qualquer alteração em arquivos de código, executar `npm run validate` (`validate-routes.cjs` + `tsc --noEmit`).
   - Todos os arquivos TypeScript/React devem compilar com 0 erros de tipagem.
   - Testar o build com `npm run build` antes de considerar a tarefa concluída.

2. **Isolamento e Fallback Seguro**:
   - Recursos que dependem de hardware ou HTTPS (ex: WebAuthn / Biometria FIDO2) devem possuir fallback gracioso para não quebrar ambientes de homologação ou browsers locais.
   - As 24 personas e o painel de homologação devem permanecer operacionais.

3. **Arquitetura FinOps**:
   - Priorizar soluções de custo zero (Zero-Token Fast-Path em IA, Passkeys biométricas para eliminar SMS OTP, Cold Data Tiering no PostgreSQL).

4. **Deploy Contínuo Automático na Vercel (Produção)**:
   - Toda alteração finalizada e validada deve ser enviada diretamente para o GitHub (`git push origin main`).
   - Como a Vercel está conectada ao repositório via CI/CD, o push para a `main` dispara o deploy em produção (`https://app-netfits.vercel.app`) de forma 100% automática e transparente.

