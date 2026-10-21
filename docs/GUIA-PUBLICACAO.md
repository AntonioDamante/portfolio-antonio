# Guia de publicação no GitHub Pages

O GitHub Pages hospeda sites estáticos (HTML, CSS e JS) de graça. Siga na ordem.

> Nunca compartilhe sua senha ou códigos de acesso do GitHub com ninguém, nem comigo.

---

## 1. Acessar a conta

1. Entre em <https://github.com> e faça login.
2. Recomendo ativar a verificação em duas etapas: **foto do perfil → Settings → Password and authentication**.
3. Seu nome de usuário é **AntonioDamante** (endereço `github.com/AntonioDamante`).

## 2. Criar um repositório público

1. Clique no **+** (canto superior direito) → **New repository**.
2. **Repository name:** `portfolio-antonio`
3. **Description:** `Meu portfólio pessoal em HTML e CSS`
4. Marque **Public**. O GitHub Pages gratuito exige repositório público.
5. Não marque "Add a README" (o projeto já tem um).
6. Clique em **Create repository**.

## 3. Enviar os arquivos

1. Na página do repositório recém-criado, clique no link **uploading an existing file**.
2. Abra a pasta `portfolio-antonio` no seu computador, **selecione tudo o que está dentro dela** (`index.html`, `README.md` e as pastas `css`, `js`, `assets`, `docs`) e **arraste** para a página.
   - Arraste o **conteúdo** da pasta, não a pasta em si. O `index.html` precisa ficar na raiz do repositório.
3. Em **Commit changes**, escreva: `Primeira versão do portfólio`.
4. Clique em **Commit changes** e espere o envio terminar.
5. Confira se aparecem na lista: `index.html`, `README.md`, `css`, `js`, `assets`, `docs`.

## 4. Publicar com o GitHub Pages

1. No repositório, clique em **Settings** (aba de cima).
2. No menu lateral, clique em **Pages**.
3. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
4. Em **Branch**, escolha **main** e a pasta **/ (root)**. Clique em **Save**.
5. Aguarde de 1 a 5 minutos.

## 5. Encontrar e testar o endereço

1. Atualize a página **Settings → Pages**. Vai aparecer: *Your site is live at…*
2. O endereço será: `https://antoniodamante.github.io/portfolio-antonio/`
3. Teste:
   - [ ] Abre no computador e no celular (use os dados móveis, não só o Wi-Fi).
   - [ ] O menu do celular abre e fecha.
   - [ ] Os links do menu levam às seções.
   - [ ] O e-mail abre o programa de e-mail.
   - [ ] O LinkedIn abre o seu perfil.
4. Se aparecer erro 404, espere mais alguns minutos e confira se o `index.html` está na raiz (e não dentro de outra pasta).

Só considere o site publicado depois que o endereço abrir de verdade.

## 6. Conferir os links do GitHub no site

Os links do GitHub já estão no site, apontando para `github.com/AntonioDamante`. Os botões "Ver demonstração" e "Código no GitHub" só funcionam se o repositório se chamar **exatamente** `portfolio-antonio`. Com o site no ar, clique nos dois e confira.

## 7. Atualizar o site depois de mudar algo

1. Edite e salve o arquivo no computador.
2. No repositório, clique em **Add file → Upload files**.
3. Arraste o arquivo alterado.
   - Se ele estiver dentro de uma pasta (ex.: `css/style.css`), entre primeiro na pasta `css` no GitHub e depois faça o upload lá.
4. Escreva uma mensagem curta (ex.: `Atualiza seção de habilidades`) e clique em **Commit changes**.
5. Em 1 a 5 minutos, o site atualiza. Use **Ctrl+F5** para forçar o navegador a recarregar.

**Próximo passo, quando se sentir à vontade:** usar o Git pelo terminal ou o GitHub Desktop (`git add`, `git commit`, `git push`). É o jeito que as empresas usam e conta pontos em entrevista.

## 8. Divulgar no currículo e no LinkedIn

**Currículo**, em uma seção "Projetos":

> **Portfólio pessoal** — `https://antoniodamante.github.io/portfolio-antonio/`
> Site responsivo em HTML5 e CSS3, publicado no GitHub Pages. Projeto de estudo em desenvolvimento.

**LinkedIn:**

1. No seu perfil, **Adicionar seção → Recomendado → Adicionar projetos**. Coloque nome, descrição e o link.
2. Opcional: em **Em destaque → Adicionar link**, cole o endereço do site.
3. Opcional: em **Informações de contato → Site**, adicione o endereço como "Portfólio".
