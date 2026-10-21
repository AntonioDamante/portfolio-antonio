/* ==========================================================================
   script.js — só o necessário:
     1. Abrir e fechar o menu no celular
     2. Colocar o ano atual no rodapé
   ========================================================================== */

// 1. MENU DO CELULAR ---------------------------------------------------------

// Encontra o botão e o menu no HTML
const botaoMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

// Função que abre ou fecha o menu
function definirMenu(aberto) {
  menu.classList.toggle('is-open', aberto);                 // o CSS mostra o menu quando tem a classe "is-open"
  botaoMenu.setAttribute('aria-expanded', String(aberto));  // avisa leitores de tela se está aberto
  botaoMenu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
}

if (botaoMenu && menu) {
  // Clicar no botão alterna entre aberto e fechado
  botaoMenu.addEventListener('click', () => {
    const estaAberto = botaoMenu.getAttribute('aria-expanded') === 'true';
    definirMenu(!estaAberto);
  });

  // Clicar em um link do menu fecha o menu
  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => definirMenu(false));
  });

  // Apertar Esc fecha o menu e devolve o foco ao botão (navegação por teclado)
  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && menu.classList.contains('is-open')) {
      definirMenu(false);
      botaoMenu.focus();
    }
  });
}

// 2. ANO NO RODAPÉ ----------------------------------------------------------
const ano = document.querySelector('#ano');
if (ano) {
  ano.textContent = new Date().getFullYear();
}
