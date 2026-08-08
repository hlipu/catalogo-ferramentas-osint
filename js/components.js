// js/components.js

const UI = {
  // Renderiza o Cabeçalho
  loadHeader: function(basePath = '') {
    const headerHTML = `
      <header>
        <div class="logo">OSINT<span>LIPU</span></div>
        <div class="header-meta" style="display: flex; gap: 20px; align-items: center;">
          <a href="${basePath}index.html" style="color:var(--blue); text-decoration:none; font-family:var(--mono);">[ CATÁLOGO ]</a>
          <a href="${basePath}pages/gerenciador.html" style="color:var(--amber); text-decoration:none; font-family:var(--mono);">[ GERENCIADOR ]</a>
          <a href="${basePath}pages/trilhas.html" style="color:var(--red); text-decoration:none; font-family:var(--mono);">[ TRILHAS ]</a>
          <div>STATUS: <span style="color:var(--green)">● OFFLINE</span></div>
        </div>
      </header>
    `;
    document.getElementById('header-placeholder').innerHTML = headerHTML;
  },

  // Renderiza o Rodapé
  loadFooter: function() {
    const footerHTML = `
      <footer style="text-align: center; padding: 24px; border-top: 1px solid var(--border); background: var(--bg2); color: var(--text-dim); font-family: var(--mono); font-size: 0.75rem; margin-top: 40px;">
          OSINT VAULT // ASSET MANAGEMENT SYSTEM // OFFLINE MODE
      </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
  }
};