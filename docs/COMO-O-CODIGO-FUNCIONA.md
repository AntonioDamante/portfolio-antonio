# Como o código funciona

Explicação para estudo e para defender o projeto em entrevista. Leia com os arquivos abertos no VS Code ao lado.

---

## 1. A função de cada arquivo

| Arquivo            | Função                                                                 | Comparação           |
|--------------------|------------------------------------------------------------------------|----------------------|
| `index.html`       | O **conteúdo** e a **estrutura**: títulos, textos, listas, links.       | O esqueleto da casa  |
| `css/style.css`    | A **aparência**: cores, fontes, espaçamentos, layout, versão celular.   | A pintura e os móveis |
| `js/script.js`     | O **comportamento**: abrir o menu no celular e mostrar o ano atual.     | A parte elétrica     |
| `assets/`          | Imagens e ícones.                                                      | O depósito           |

Separar os três é uma boa prática chamada **separação de responsabilidades**: dá para mudar o visual sem mexer no conteúdo e vice-versa.

---

## 2. Estrutura principal do HTML

```html
<!DOCTYPE html>          → avisa que é HTML5
<html lang="pt-BR">      → idioma da página (ajuda Google e leitores de tela)
  <head> … </head>        → informações que não aparecem: título da aba, descrição, CSS
  <body>
    <header>  → cabeçalho com o menu (<nav>)
    <main>    → conteúdo principal, dividido em <section>
    <footer>  → rodapé
  </body>
</html>
```

**HTML semântico** é usar a tag que descreve o que o conteúdo é, e não só como ele aparece:

- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`: as regiões da página.
- `<article>`: um item independente (cada card de habilidade ou projeto).
- `<ol>` (lista numerada): usada na linha do tempo, porque a ordem importa.
- `<dl>`, `<dt>` e `<dd>`: lista de "rótulo → valor", usada no cartão de resumo.
- `<h1>` aparece **uma vez só** (seu nome). As seções usam `<h2>`, e os cards, `<h3>`.

Com isso, leitores de tela e o Google entendem a página, e o código fica fácil de ler.

**Navegação interna:** cada seção tem um `id` (`id="sobre"`), e o menu aponta para ela com `href="#sobre"`.

**Links externos** usam `target="_blank"` (abre em nova aba) e `rel="noopener noreferrer"` (segurança: a nova aba não controla a sua).

---

## 3. Como o CSS define cores e layout

### Variáveis CSS
No início do `style.css`, o bloco `:root` guarda as cores e tamanhos:

```css
:root {
  --bg: #101722;      /* fundo */
  --accent: #79b8ff;  /* azul de destaque */
}
body { background: var(--bg); }
```

Mudando `--accent`, o azul muda **no site inteiro**. Isso evita repetir o mesmo código de cor em 30 lugares.

### Classes
No HTML: `<a class="button button-primary">`. No CSS: `.button { … }` e `.button-primary { … }`. Um elemento pode ter várias classes, e as regras se somam.

### Unidades usadas
- `px`: tamanho fixo.
- `rem`: relativo ao tamanho da fonte base (1rem = 16px). Respeita quem aumenta a letra no navegador.
- `fr`: "fração" do espaço livre, usada no Grid.
- `clamp(mín, ideal, máx)`: o título cresce com a tela, mas tem um tamanho mínimo e um máximo.

---

## 4. Flexbox, Grid e media queries

### Flexbox: alinhar em **uma direção** (linha ou coluna)
Usado no cabeçalho, para deixar o nome à esquerda e o menu à direita:

```css
.nav {
  display: flex;
  justify-content: space-between; /* espalha: um item em cada ponta */
  align-items: center;            /* centraliza na vertical */
}
```

Também é usado nos botões, nas etiquetas e no rodapé.

### Grid: organizar em **linhas e colunas**
Usado nos cards de habilidades:

```css
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas de tamanho igual */
  gap: 16px;                             /* espaço entre os cards */
}
```

E no topo do site: `grid-template-columns: 1.15fr 0.85fr`, ou seja, o texto fica com um pouco mais de espaço que o cartão.

**Regra prática:** Flexbox para uma fila de itens, Grid para um layout com colunas.

### Media queries: regras que valem só em telas menores

```css
@media (max-width: 900px) { /* tablet: 2 colunas */
  .skills-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 680px) { /* celular: 1 coluna */
  .skills-grid { grid-template-columns: 1fr; }
}
```

No celular, o menu some (`display: none`) e aparece o botão de três tracinhos. Quando o JavaScript coloca a classe `is-open` no menu, o CSS o mostra de novo (`display: flex`).

### Animações
- **Transições** (`transition`): o card sobe 3px quando o mouse passa por cima.
- **Animação** (`@keyframes fade-up`): o topo do site aparece suavemente ao carregar.
- `@media (prefers-reduced-motion: reduce)`: se a pessoa configurou o sistema para menos movimento, as animações são desligadas. Isso é acessibilidade.

---

## 5. O JavaScript, linha a linha

```js
const botaoMenu = document.querySelector('.menu-toggle'); // acha o botão no HTML
const menu = document.querySelector('#menu');             // acha o menu
```

- Ao **clicar** no botão, a função `definirMenu` coloca ou tira a classe `is-open` do menu. Ela também atualiza `aria-expanded`, que avisa leitores de tela se o menu está aberto.
- Ao clicar em um **link** do menu, ele fecha.
- Ao apertar **Esc**, ele fecha e o foco volta para o botão.
- No fim, `new Date().getFullYear()` pega o ano atual e coloca no rodapé.

Por que JavaScript aqui? Porque o CSS sozinho não consegue reagir ao clique e manter o estado "aberto/fechado" de forma acessível. Todo o resto do site é só HTML e CSS.

---

## 6. Acessibilidade aplicada

- Link **"Pular para o conteúdo"**: aperte Tab ao abrir o site e ele aparece.
- **Foco visível**: contorno azul em tudo o que é clicável quando se navega com Tab.
- **Contraste**: todas as combinações de texto e fundo passam de 4,5:1 (mínimo recomendado pela norma WCAG AA).
- Elementos só decorativos têm `aria-hidden="true"`, para o leitor de tela não ler "AC" ou "↗" à toa.
- Fonte mínima de 12px. Os textos principais têm de 15 a 17px.

---

## 7. Como alterar

**Texto:** abra `index.html`, aperte Ctrl+F, procure o texto, troque e salve.

**Cor de destaque:** em `style.css`, troque `--accent: #79b8ff;` por outra cor (ex.: `#5eead4` para verde-água).

**Uma seção nova:** copie um bloco `<section class="section" id="…">…</section>`, dê um `id` novo e adicione o link no `<nav>`.

**Uma habilidade:** quando começar a estudar HTML, mude na área "Em desenvolvimento":
```html
<li><span>HTML5</span><span class="status">Estudando</span></li>
```
Quando já tiver praticado, crie um card em `skills-grid` e tire o item da área "Em desenvolvimento".

---

## 8. Como adicionar um projeto novo

Dentro de `<div class="ideas-grid">`, ou criando outra grade "Projetos publicados", use este modelo:

```html
<article class="card idea">
  <small>Projeto 002 · HTML + CSS</small>
  <h4>Guia de componentes do PC</h4>
  <p>Página com cards sobre processador, memória e armazenamento.</p>
  <p>
    <a class="text-link" href="https://antoniodamante.github.io/guia-pc/" target="_blank" rel="noopener noreferrer">Ver site</a> ·
    <a class="text-link" href="https://github.com/AntonioDamante/guia-pc" target="_blank" rel="noopener noreferrer">Código</a>
  </p>
</article>
```

Só coloque links depois que o projeto estiver publicado e o endereço abrir.

---

## 9. GitHub: guardar e atualizar o código

- **Repositório:** a "pasta" do projeto no GitHub, com o histórico de todas as versões.
- **Commit:** um "salvamento" com uma mensagem explicando o que mudou. Escreva mensagens claras: `Adiciona projeto Guia de PC`.
- **Branch `main`:** a versão principal. É dela que o GitHub Pages publica o site.
- Cada commit na `main` atualiza o site publicado em alguns minutos.

O passo a passo completo está em `GUIA-PUBLICACAO.md`.

---

## 10. Perguntas que podem cair na entrevista

- **"Por que não usou Bootstrap ou React?"** Porque queria aprender a base: HTML semântico e CSS puro, com Flexbox e Grid. Frameworks vêm depois.
- **"Como o site se adapta ao celular?"** Com media queries: em 900px o Grid passa para 2 colunas, e em 680px para 1, com o menu virando um botão.
- **"Qual a diferença entre Flexbox e Grid?"** Flexbox alinha em uma direção. Grid organiza em linhas e colunas.
- **"O que você fez pensando em acessibilidade?"** HTML semântico, foco visível, link de pular conteúdo, contraste verificado, respeito a movimento reduzido e `aria-expanded` no menu.
- **"Onde está hospedado?"** No GitHub Pages, de graça, publicado a partir da branch `main`.

Dica: seja honesto e diga que o projeto foi seu ponto de partida e que você estudou cada parte do código. Isso vale mais do que fingir domínio.
