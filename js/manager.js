// js/manager.js

// Copia o array TOOLS original do data.js para podermos manipular na memória
let managedTools = typeof TOOLS !== 'undefined' ? [...TOOLS] : [];

const toolListEl = document.getElementById('toolList');
const countToolsEl = document.getElementById('countTools');
const mdInput = document.getElementById('mdInput');
const btnProcessar = document.getElementById('btnProcessar');
const btnExportar = document.getElementById('btnExportar');
const managerSearch = document.getElementById('managerSearch'); // Campo de busca
const inputTestada = document.getElementById('inputTestada'); // Referência ao Checkbox

// Ordena o array principal em ordem alfabética pelo campo title
function sortTools() {
  managedTools.sort((a, b) => {
    const titleA = a.title || '';
    const titleB = b.title || '';
    return titleA.localeCompare(titleB);
  });
}

// Renderiza a lista na tela com suporte ao filtro de busca
function renderManagedTools(searchTerm = '') {
  toolListEl.innerHTML = '';
  const term = searchTerm.toLowerCase().trim();
  
  // Filtra as ferramentas pelo Título ou Tags
  const filteredTools = managedTools.filter(t => 
    (t.title && t.title.toLowerCase().includes(term)) || 
    (t.tags && t.tags.some(tag => tag.toLowerCase().includes(term)))
  );

  filteredTools.forEach(tool => {
    // Adiciona uma estrelinha ao lado do título na lista se for testada
    const starIcon = tool.testada ? ' <span style="color:var(--amber);">★</span>' : '';

    const item = document.createElement('div');
    item.className = 'tool-item';
    item.innerHTML = `
      <div class="tool-item-info">
        <strong style="font-family:var(--mono); color:var(--green);">${tool.title}${starIcon}</strong><br>
        <span style="font-size:0.7rem; color:var(--text-dim);">${tool.tags ? tool.tags.length : 0} tags cadastradas</span>
      </div>
      <div class="tool-item-actions">
        <button class="btn" style="padding: 4px 8px; font-size: 0.7rem; margin-right: 5px;" onclick="editTool('${tool.id}')">✏️ EDITAR</button>
        <button class="btn btn-danger" style="padding: 4px 8px; font-size: 0.7rem;" onclick="deleteTool('${tool.id}')">X EXCLUIR</button>
      </div>
    `;
    toolListEl.appendChild(item);
  });
  
  // Atualiza a contagem: mostra os filtrados e o total
  if (term) {
    countToolsEl.textContent = `${filteredTools.length} / ${managedTools.length}`;
  } else {
    countToolsEl.textContent = managedTools.length;
  }
}

// Função para recarregar uma ferramenta salva remontando o Markdown limpo
window.editTool = function(id) {
  const tool = managedTools.find(t => t.id === id);
  if (!tool) return;

  // Reconstrói a estrutura exata do Front Matter (YAML) e cabeçalhos do Obsidian
  let md = `---\n`;
  md += `url: ${tool.url || ''}\n`;
  md += `utilidade: ${tool.utilidade || ''}\n`;
  md += `tipo: ${tool.tipo || 'Ferramenta-OSINT'}\n`;
  md += `tags:\n`;
  if (tool.tags) {
    tool.tags.forEach(t => { md += `  - ${t}\n`; });
  }
  md += `testado: ${tool.testada || false}\n`;
  md += `---\n\n`;
  md += `# ${tool.title || ''}\n\n`;
  
  md += `## Descrição\n${tool.descricao || ''}\n\n`;
  md += `## Utilidade em OSINT\n${tool.utilidade_Osint || ''}\n\n`;
  md += `## Notas de Uso\n${tool.notes || ''}`;

  mdInput.value = md;
  
  // Seta o checkbox baseado no status real da ferramenta
  inputTestada.checked = tool.testada || false;
  
  // Rola a página para o topo de forma suave para facilitar a edição
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Exclui a ferramenta baseada no ID único
window.deleteTool = function(id) {
  const index = managedTools.findIndex(t => t.id === id);
  if (index > -1) {
    if (confirm(`Tem certeza que deseja excluir "${managedTools[index].title}"?`)) {
      managedTools.splice(index, 1);
      renderManagedTools(managerSearch.value); 
    }
  }
};

// Escuta a digitação no campo de busca para filtrar instantaneamente
managerSearch.addEventListener('input', (e) => {
  renderManagedTools(e.target.value);
});

// O Parser calibrado: extrai o texto plano sem injetar tags HTML no JSON objeto
function parseObsidianMD(md) {
  try {
    const tool = { 
      id: '', 
      title: '', 
      url: '', 
      tipo: '', 
      utilidade: '', 
      descricao: '', 
      testada: false, 
      tags: [], 
      utilidade_Osint: '', 
      notes: '' 
    };

    // Extrair Metadados do Bloco YAML
    const yamlMatch = md.match(/---\n([\s\S]*?)\n---/);
    if (yamlMatch) {
      const yaml = yamlMatch[1];
      
      const urlMatch = yaml.match(/url:\s*(.+)/i);
      if (urlMatch) tool.url = urlMatch[1].trim();

      const utilMatch = yaml.match(/utilidade:\s*(.+)/i);
      if (utilMatch) tool.utilidade = utilMatch[1].trim();

      const tipoMatch = yaml.match(/tipo:\s*(.+)/i);
      if (tipoMatch) tool.tipo = tipoMatch[1].trim();

      const testadoMatch = yaml.match(/testado:\s*(.+)/i);
      if (testadoMatch) tool.testada = testadoMatch[1].trim() === 'true';

      const tagsBlockMatch = yaml.match(/tags:\n([\s\S]*?)(?:\n[a-zA-Z]|$)/);
      if (tagsBlockMatch) {
        tool.tags = tagsBlockMatch[1]
          .split('\n')
          .map(t => t.replace(/-\s*/, '').trim())
          .filter(t => t.length > 0);
      }
    }

    // Extrair o Título Principal (# Título)
    const titleMatch = md.match(/^#\s+(.+)$/m);
    if (titleMatch) {
      tool.title = titleMatch[1].trim();
      tool.id = tool.title; // Define o ID mantendo o nome limpo como requisitado (Ex: "Epieos")
    }

    if (!tool.title || !tool.url) {
      throw new Error("Não foi possível encontrar o Título (# Título) ou os metadados de URL no YAML.");
    }

    // Isola e extrai as secções de texto plano preservando o conteúdo original do Obsidian
    const descIndex = md.indexOf("## Descrição");
    const utilIndex = md.indexOf("## Utilidade em OSINT");
    const reasonsIndex = md.indexOf("### Justificativa das Tags:");
    const notasIndex = md.indexOf("## Notas de Uso");

    if (descIndex !== -1) {
      let end = utilIndex !== -1 ? utilIndex : (reasonsIndex !== -1 ? reasonsIndex : (notasIndex !== -1 ? notasIndex : md.length));
      tool.descricao = md.substring(descIndex + 12, end).trim();
    }

    if (utilIndex !== -1) {
      let end = reasonsIndex !== -1 ? reasonsIndex : (notasIndex !== -1 ? notasIndex : md.length);
      tool.utilidade_Osint = md.substring(utilIndex + 21, end).trim();
    }

    if (notasIndex !== -1) {
      tool.notes = md.substring(notasIndex + 15).trim();
    }

    return tool;
  } catch (error) {
    alert("Erro ao processar o formato do Markdown:\n" + error.message);
    return null;
  }
}

// Botão de Processar Nota
btnProcessar.addEventListener('click', () => {
  const mdText = mdInput.value;
  if (!mdText.trim()) return alert("Cole o markdown primeiro!");

  const newTool = parseObsidianMD(mdText);
  if (newTool) {
    // Sincroniza o checkbox lateral com a chave booleana de teste
    newTool.testada = inputTestada.checked;

    const existingIndex = managedTools.findIndex(t => t.id === newTool.id);
    if (existingIndex >= 0) {
      if(confirm(`A ferramenta "${newTool.title}" já existe. Deseja sobrescrevê-la?`)) {
        managedTools[existingIndex] = newTool;
      } else return;
    } else {
      managedTools.push(newTool);
    }
    
    sortTools();
    managerSearch.value = '';
    renderManagedTools();
    
    // Limpa os buffers
    mdInput.value = ''; 
    inputTestada.checked = false; 

    alert("Ferramenta processada com sucesso! Copie o novo buffer de dados clicando no botão inferior.");
  }
});

// Botão de Exportação Direta para o Clipboard
btnExportar.addEventListener('click', () => {
  sortTools();
  const fileContent = `// js/data.js\n\nconst TOOLS = ${JSON.stringify(managedTools, null, 2)};\n`;
  
  navigator.clipboard.writeText(fileContent).then(() => {
    alert("✅ CÓDIGO COPIADO COM SUCESSO!\n\n1. Abra o seu arquivo 'js/data.js' no editor de código.\n2. Selecione tudo e apague.\n3. Cole (Ctrl+V ou Cmd+V) este novo conteúdo limpo e salve.");
  }).catch(err => {
    alert("Erro de permissão ao acessar a área de transferência: " + err);
  });
});

// Inicialização estável da rotina
sortTools();
renderManagedTools();