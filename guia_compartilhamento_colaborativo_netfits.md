# 🤝 Guia de Compartilhamento e Acompanhamento em Tempo Real — Netfits

Para permitir que um colega ou parceiro de equipe acompanhe o desenvolvimento, as atualizações e a evolução do projeto **Netfits**, recomendamos as 3 melhores alternativas:

---

## 1. 🐙 Repositório GitHub / GitLab (Ideal para Código e Versionamento)

Esta é a opção mais profissional para quem deseja acompanhar o histórico exato de modificações e commits:

### Passo a Passo para Configurar:
1. Crie um repositório (Público ou Privado) no **[GitHub](https://github.com/new)** chamado `netfits-app`.
2. No seu terminal local, execute:
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/netfits-app.git
   git branch -M main
   git push -u origin main
   ```
3. No GitHub, vá em **Settings ➔ Collaborators ➔ Add People** e insira o e-mail do seu colega.

> **Vantagem**: Toda vez que fizermos novas melhorias, enviaremos um `git push` e seu colega receberá as atualizações digitando `git pull` ou acessando o GitHub.

---

## 2. ☁️ Pasta Compartilhada no OneDrive / Google Drive (Ideal para Documentos e Word)

Como já configuramos a exportação automática para a sua pasta do **OneDrive** (`/Users/andre/OneDrive/netfits/`):

### Passo a Passo:
1. Abra o **Finder** no seu Mac e acesse a pasta `OneDrive/netfits`.
2. Clique com o botão direito na pasta `netfits` e selecione **Compartilhar** (ou acesse [onedrive.live.com](https://onedrive.live.com)).
3. Digite o e-mail do seu colega e defina se ele pode apenas **Visualizar** ou **Editar**.

> **Vantagem**: Sempre que gerarmos relatórios em `.docx` (como o custo operacional ou diagnóstico go-live), os arquivos atualizados aparecerão instantaneamente na nuvem do seu colega sem você precisar enviar e-mails.

---

## 3. 🌐 Acesso ao App Online Oficial (Cloudflare)

Para que qualquer colega ou sócio possa **navegar no aplicativo diretamente do celular ou computador**:

- **Endereço Oficial**: [https://www.netfits.com.br](https://www.netfits.com.br)
- **Hospedagem & Borda**: Cloudflare Workers com CDN global e certificados SSL automáticos.
- **Tombamento de Versões**: Qualquer nova versão homologada e promovida via `npm run promote:prod` atualiza o aplicativo instantaneamente no Cloudflare.
