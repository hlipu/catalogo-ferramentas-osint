const fs = require('fs');

try {
  let ferramentas = [];

  // Tenta carregar o arquivo via require (caso seja CommonJS)
  try {
    ferramentas = require('./data.js');
    if (!Array.isArray(ferramentas) && ferramentas.default) {
      ferramentas = ferramentas.default;
    }
  } catch {
    // Se for um JS simples de navegador (ex: const data = [...]), lê como texto e extrai a lista
    const conteudo = fs.readFileSync('./data.js', 'utf8');
    const match = conteudo.match(/\[\s*\{[\s\S]*\}\s*\]/);
    if (match) {
      ferramentas = JSON.parse(match[0]);
    }
  }

  // Realiza o filtro pela tag "alvo/usuario-email"
  const filtrados = ferramentas.filter(item => 
    item.tags && Array.isArray(item.tags) && item.tags.includes("alvo/usuario-email")
  );

  // Salva o resultado em um novo arquivo resultado.json
  fs.writeFileSync('./resultado.json', JSON.stringify(filtrados, null, 2), 'utf8');

  console.log(`\n Filtro concluído! ${filtrados.length} ferramentas encontradas e salvas em 'resultado.json'.\n`);

} catch (erro) {
  console.error("Erro ao processar o arquivo:", erro.message);
}