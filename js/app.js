// js/app.js

// ══ STATE ══
let activeTags = new Map();
let searchTerm = '';
let viewMode = 'grid'; // grid | list

// ══ ELEMENTS ══
const searchInput   = document.getElementById('searchInput');
const searchClear   = document.getElementById('searchClear');
const searchCount   = document.getElementById('searchCount');
const cardsContainer= document.getElementById('cardsContainer');
const visibleCount  = document.getElementById('visibleCount');
const totalCountBar = document.getElementById('totalCountBar');
const totalCount    = document.getElementById('totalCount');
const clearFiltersBtn = document.getElementById('clearFilters');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose    = document.getElementById('modalClose');
const gridBtn       = document.getElementById('gridBtn');
const listBtn       = document.getElementById('listBtn');
const activeFiltersBadge = document.getElementById('activeFiltersBadge');

// ══ TAG COLOR CLASS ══
function tagClass(tag) {
  const prefix = tag.split('/')[0];
  return prefix;
}

// ══ RENDER CARDS ══
function render() {
  const filtered = TOOLS.filter(t => {
    const matchSearch = !searchTerm ||
      t.title.toLowerCase().includes(searchTerm) ||
      t.utilidade.toLowerCase().includes(searchTerm) ||
      t.url.toLowerCase().includes(searchTerm) ||
      t.tags.some(tag => tag.toLowerCase().includes(searchTerm));
    const matchTags = activeTags.size === 0 ||
      [...activeTags.entries()].every(([at, mode]) => {
        return mode === 'AND' ? t.tags.includes(at) : !t.tags.includes(at);
      });
    return matchSearch && matchTags;
  });

  // box de contagem nas badges dos filtros
  document.querySelectorAll('.tag-btn').forEach(btn => {
    const tag = btn.dataset.tag;
    const count = filtered.filter(t => t.tags.includes(tag)).length;
    const badge = btn.querySelector('.badge');
    
    if (badge) {
      badge.textContent = count;
    }

    if (count === 0 && !activeTags.has(tag)) {
      btn.style.opacity = '0.4';
      btn.style.pointerEvents = 'none';
    } else {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    }
  });

  cardsContainer.innerHTML = '';
  cardsContainer.className = 'cards' + (viewMode === 'list' ? ' list-view' : '');

  if (filtered.length === 0) {
    cardsContainer.innerHTML = `
      <div class="empty">
        <div class="icon">⊘</div>
        <p>NENHUMA FERRAMENTA ENCONTRADA</p>
        <p style="font-size:.65rem;opacity:.5">Tente outros termos ou limpe os filtros</p>
      </div>`;
  } else {
    filtered.forEach((t, i) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.animationDelay = `${i * 0.03}s`;
      
      const starIcon = t.testada ? '★' : '☆';
      const starClass = t.testada ? 'star-tested' : 'star-untested';
      const starTitle = t.testada ? 'Ferramenta testada' : 'Não testada';

      card.innerHTML = `
        <div class="card-header">
          <div class="card-title">${t.title}</div>
          <div class="${starClass}" title="${starTitle}">${starIcon}</div>
        </div>
        <div class="card-url">${t.url}</div>
        <div class="card-desc">${t.utilidade}</div>
        <div class="card-tags">
          ${t.tags.map(tag => `<span class="card-tag ${tagClass(tag)}">${tag}</span>`).join('')}
        </div>`;
        
      card.addEventListener('click', () => openModal(t));
      cardsContainer.appendChild(card);
    });
  }

  visibleCount.textContent = filtered.length;
  totalCountBar.textContent = TOOLS.length;
  totalCount.textContent = TOOLS.length;

  if (searchTerm && filtered.length > 0) {
    searchCount.textContent = `${filtered.length} resultado${filtered.length !== 1 ? 's' : ''} para "${searchTerm}"`;
  } else {
    searchCount.textContent = '';
  }

  if (activeTags.size > 0) {
    activeFiltersBadge.style.display = 'inline';
    activeFiltersBadge.textContent = `[${activeTags.size} filtro${activeTags.size !== 1 ? 's' : ''} ativo${activeTags.size !== 1 ? 's' : ''}]`;
  } else {
    activeFiltersBadge.style.display = 'none';
  }
}

// ══ SEARCH ══
searchInput.addEventListener('input', e => {
  searchTerm = e.target.value.toLowerCase().trim();
  searchClear.classList.toggle('visible', searchTerm.length > 0);
  render();
});
searchClear.addEventListener('click', () => {
  searchInput.value = '';
  searchTerm = '';
  searchClear.classList.remove('visible');
  render();
});

// ══ TAG FILTERS ══
document.querySelectorAll('.tag-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = btn.dataset.tag;
    
    if (!activeTags.has(tag)) {
      activeTags.set(tag, 'AND');
      btn.classList.add('active-and');
    } else if (activeTags.get(tag) === 'AND') {
      activeTags.set(tag, 'NOT');
      btn.classList.remove('active-and');
      btn.classList.add('active-not');
    } else {
      activeTags.delete(tag);
      btn.classList.remove('active-not');
    }
    
    render();
  });
});

clearFiltersBtn.addEventListener('click', () => {
  activeTags.clear();
  document.querySelectorAll('.tag-btn').forEach(b => {
    b.classList.remove('active-and', 'active-not');
  });
  render();
});

// ══ VIEW MODE ══
gridBtn.addEventListener('click', () => {
  viewMode = 'grid';
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');
  render();
});
listBtn.addEventListener('click', () => {
  viewMode = 'list';
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');
  render();
});

// ══ MODAL TABS ══
document.querySelectorAll('.modal-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.modal-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
  });
});

// ══ MODAL OPEN ══
function openModal(t) {
  // reset para primeira aba
  document.querySelectorAll('.modal-tab').forEach((tab,i) => tab.classList.toggle('active', i===0));
  document.querySelectorAll('.modal-panel').forEach((p,i) => p.classList.toggle('active', i===0));

  document.getElementById('modalTitle').textContent = t.title;
  const urlEl = document.getElementById('modalUrl');
  urlEl.textContent = t.url; urlEl.href = t.url;

  // Visão geral - Carregando agora o campo estrito "descricao"
  document.getElementById('modalDesc').textContent = t.descricao || '— Sem descrição cadastrada.';
  document.getElementById('modalTags').innerHTML =
    t.tags.map(tag => `<span class="card-tag ${tagClass(tag)}">${tag}</span>`).join('');

  // Utilidade OSINT - Substituindo a aba de justificativas pelo campo "utilidade_Osint"
  const reasonsEl = document.getElementById('modalTagReasons');
  const targetUtilidade = t.utilidade_Osint || t.utilidade_osint;
  
  if (targetUtilidade) {
    // Preserva quebras de linha e formata negritos/itálicos vindos do markdown
    reasonsEl.innerHTML = `
      <div class="modal-desc" style="line-height: 1.65; color: var(--text);">
        ${targetUtilidade
          .replace(/\n/g, '<br>')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')}
      </div>`;
  } else {
    reasonsEl.innerHTML = `<p style="color:var(--text-dim);font-family:var(--mono);font-size:.75rem;">Nenhum detalhe de utilidade operacional indexado.</p>`;
  }

  // Notas (preserva quebras de linha e formata negrito)
  const notesEl = document.getElementById('modalNotes');
  notesEl.innerHTML = t.notes
    ? t.notes.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    : '— Sem notas adicionais.';

  modalBackdrop.classList.add('open');
}

modalClose.addEventListener('click', () => modalBackdrop.classList.remove('open'));
modalBackdrop.addEventListener('click', e => {
  if (e.target === modalBackdrop) modalBackdrop.classList.remove('open');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') modalBackdrop.classList.remove('open');
});

// ══ INIT ══
render();