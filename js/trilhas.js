// js/trilhas.js

/**
 * Renderiza uma ferramenta detalhada com suporte a Uso e Aplicação em OSINT
 */
function renderFerramentaItem(f) {
  const isLink = f.url && f.url !== '#';
  const titleHtml = isLink 
    ? `<a href="${f.url}" target="_blank" class="tool-link">🔗 ${f.nome}</a> <span class="tool-url-text">(${f.url.replace(/^https?:\/\//, '')})</span>`
    : `<span class="tool-name">🛠️ ${f.nome}</span>`;

  return `
    <div class="tool-detail-card">
      <div class="tool-header">
        ${titleHtml}
      </div>
      ${f.desc ? `<div class="tool-text tool-desc">${f.desc}</div>` : ''}
      ${f.aplicacao ? `<div class="tool-text tool-aplicacao"> ${f.aplicacao}</div>` : ''}
    </div>
  `;
}

/**
 * Renderiza o bloco de ferramentas (simples ou detalhado)
 */
function renderFerramentas(ferramentas) {
  if (!ferramentas || ferramentas.length === 0) return '';

  if (typeof ferramentas[0] === 'object') {
    return `
      <div class="step-tools-detailed">
        ${ferramentas.map(f => renderFerramentaItem(f)).join('')}
      </div>
    `;
  }

  return `
    <div class="step-tools">
      ${ferramentas.map(f => `<span class="tool-chip">${f}</span>`).join('')}
    </div>
  `;
}

/**
 * Renderiza as camadas detalhadas dentro de um módulo como elementos expansíveis (<details>)
 */
function renderCamadas(camadas) {
  if (!camadas || camadas.length === 0) return '';

  return camadas.map((c, index) => {
    // A primeira camada pode vir aberta por padrão (opcional, remova 'open' se quiser todas fechadas)
    const isOpen = index === 0;

    return `
      <details class="camada-block" ${isOpen}>
        <summary class="camada-summary">
          <h4 class="camada-titulo">${c.titulo}</h4>
        </summary>
        
        <div class="camada-content">
          ${c.conceito ? `
            <p class="camada-texto">
              <span class="camada-label camada-label--blue">Conceito Técnico</span>
              ${c.conceito}
            </p>
          ` : ''}

          ${c.comoFunciona ? `
            <p class="camada-texto">
              <span class="camada-label camada-label--amber">Como funciona</span>
              ${c.comoFunciona}
            </p>
          ` : ''}

          ${c.utilidadeOsint ? `
            <p class="camada-texto camada-texto--mb-lg">
              <span class="camada-label camada-label--green">Utilidade OSINT</span>
              ${c.utilidadeOsint}
            </p>
          ` : ''}

          ${c.ferramentas ? `
            <div class="camada-tools-title">// FERRAMENTAS INDICADAS:</div>
            ${renderFerramentas(c.ferramentas)}
          ` : ''}
        </div>
      </details>
    `;
  }).join('');
}

function renderTrail(trailId) {
  const container = document.getElementById('trail-main-container');
  const trail = TRILHAS.find(t => t.id === trailId);

  if (!trail) {
    container.innerHTML = `
      <div class="empty">
        <div class="icon">⊘</div>
        <p>TRILHA NÃO ENCONTRADA</p>
      </div>`;
    return;
  }

  // 1. Cabeçalho
  let html = `
    <div class="trail-header">
      <h1>${trail.icone} ${trail.titulo}</h1>
      <p>${trail.subtitulo}</p>
    </div>
  `;

  // 2. Renderiza a Imagem (se existir) ou o texto ASCII (fallback)
  if (trail.imagem) {
    html += `
      <div class="trail-image-wrapper">
        <img src="${trail.imagem}" alt="${trail.titulo}" class="trail-image" />
      </div>
    `;
  } else if (trail.ascii) {
    html += `<pre class="ascii-tree">${trail.ascii}</pre>`;
  }

  // 3. Renderiza os Módulos Accordion
  html += `<div class="trail-accordion">`;

  trail.modulos.forEach((mod, index) => {
    const isOpen = index === 0;
    const opsecClass = mod.opsec === 'passivo' ? 'passivo' : 'semi-ativo';

    html += `
      <details class="trail-module" ${isOpen}>
        <summary class="module-summary">
          <div class="module-info">
            <span class="module-num">${mod.num}</span>
            <span class="module-name">${mod.nome}</span>
          </div>
          <span class="opsec-badge ${opsecClass}">${mod.opsecTexto}</span>
        </summary>

        <div class="module-body">
          <p class="module-desc">
            ${mod.objetivo}
          </p>
        
          <div class="pivot-vector">
            <strong>VETOR DE PIVOTAGEM:</strong> <code>${mod.vetor}</code>
          </div>
          
          ${mod.camadas ? renderCamadas(mod.camadas) : ''}

          ${mod.ferramentas ? `
            <div class="tools-title" style="margin-top: 14px;">// FERRAMENTAS RECOMENDADAS:</div>
            ${renderFerramentas(mod.ferramentas)}
          ` : ''}
        </div>
      </details>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('trail-main-container');
  const menuButtons = document.querySelectorAll('.trail-menu-btn');

  // 1. Renderiza o Estado Inicial / Placeholder
  container.innerHTML = `
    <div class="empty" style="padding: 100px 24px; text-align: center;">
      <div class="icon" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.6;">🎯</div>
      <p style="font-family: var(--mono); font-size: 1rem; color: var(--green); letter-spacing: 0.08em; margin-bottom: 8px;">
        ESCOLHA UMA TRILHA DE INVESTIGAÇÃO
      </p>
      <p style="font-family: var(--mono); font-size: 0.8rem; color: var(--text-dim);">
        Selecione uma categoria no menu lateral para visualizar os vetores de pivotagem, metodologia e ferramentas.
      </p>
    </div>
  `;

  // 2. Configura os cliques dos botões da barra lateral
  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      menuButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const trailId = btn.getAttribute('data-id');
      renderTrail(trailId);
    });
  });
});