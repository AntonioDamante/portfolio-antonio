# Portfólio pessoal — Antonio Carlos Damante de Souza

Site pessoal feito com **HTML5 e CSS3**, com um pequeno arquivo de **JavaScript** só para o menu do celular e o ano do rodapé.
É também meu primeiro projeto de estudo em desenvolvimento web: o código está comentado para eu entender e evoluir cada parte.

- Não precisa de servidor, banco de dados nem serviço pago.
- Funciona em celular, tablet e computador.
- Publicação gratuita pelo GitHub Pages.

## Estrutura

```
portfolio-antonio/
├── index.html          → conteúdo e estrutura do site
├── css/
│   └── style.css       → cores, fontes, layout e versão para celular
├── js/
│   └── script.js       → menu do celular e ano do rodapé
├── assets/
│   └── favicon.svg     → ícone da aba do navegador (coloque imagens aqui)
├── docs/
│   ├── GUIA-PUBLICACAO.md        → passo a passo do GitHub Pages
│   └── COMO-O-CODIGO-FUNCIONA.md → explicação do código para estudo
└── README.md           → este arquivo
```

## Como abrir no computador

1. Extraia o ZIP.
2. Dê dois cliques em `index.html`. O site abre no navegador.
3. Para editar, instale o [Visual Studio Code](https://code.visualstudio.com/) e use **Arquivo → Abrir pasta** na pasta `portfolio-antonio`.
4. Depois de salvar uma alteração, aperte **F5** no navegador para ver o resultado.

As fontes (Manrope e DM Mono) vêm do Google Fonts. Sem internet, o site usa as fontes do próprio sistema e continua funcionando.

## Manutenção rápida

| Quero…                         | Onde mexer                                                         |
|--------------------------------|--------------------------------------------------------------------|
| Mudar um texto                 | `index.html`, procure o texto com Ctrl+F                           |
| Mudar as cores                 | `css/style.css`, bloco `:root` no início                           |
| Adicionar uma habilidade       | `index.html`, copie um `<article class="card skill">` inteiro      |
| Mudar o status de "Em desenvolvimento" | `index.html`, troque "A iniciar" por "Estudando"           |
| Mudar os links do projeto      | `index.html`, procure o comentário `LINKS DO PROJETO`              |

## Regras que este projeto segue

- Só aparece como habilidade o que eu já sei de verdade.
- Nenhum link falso: o que ainda não existe aparece como texto, não como botão.
- Não há formulário de contato. O e-mail usa `mailto:`, que abre o programa de e-mail de quem clicar.

Site publicado (após ativar o GitHub Pages): https://antoniodamante.github.io/portfolio-antonio/
Código: https://github.com/AntonioDamante/portfolio-antonio

Publicação: veja `docs/GUIA-PUBLICACAO.md`.
