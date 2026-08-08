// js/data-trilhas.js

const TRILHAS = [
  {
    id: "cnpj",
    categoria: "empresas",
    icone: "🏢",
    titulo: "Investigação Corporativa (CNPJ)",
    subtitulo: "// Roteiro metodológico para validação, mapeamento de contratos, compliance, infraestrutura e rastreio patrimonial.",

    imagem: "../img/trilha-cnpj.png",

    modulos: [
      {
        num: "01",
        nome: "Dados Cadastrais & QSA",
        opsec: "passivo",
        opsecTexto: "🟢 PASSIVO",
        vetor: "CNPJ ➔ Razão Social / Endereço / CNAE / Quadro de Sócios (QSA) / Capital Social",
        objetivo: "Confirmar a existência legal e o status operacional da empresa, mapeando o controle societário para descobrir vínculos iniciais com pessoas físicas ou outras entidades e revelar o seu endereço físico e escopo legal de atuação.",
        camadas: [
          {
            titulo: "Camada 1: Consulta Governamental e Bases Oficiais",
            conceito: "Busca direta nos bancos de dados oficiais do Estado para atestar a regularidade e extrair os dados constitutivos originais da empresa.",
            comoFunciona: "O investigador insere o CNPJ nos portais governamentais para emitir o comprovante de situação cadastral e visualizar o QSA, validando o endereço e o ramo de atuação declarado.",
            utilidadeOsint: "Serve como a validação inicial de toda a investigação corporativa ( _Due Diligence_ ). Permite confirmar endereços registrados para _footprinting_ físico e revelar quem são os verdadeiros donos por trás da entidade.",
            ferramentas: [
              {
                nome: "Consulta de CNPJ - Secretaria da Receita Federal do Brasil",
                url: "https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp",
                aplicacao: "Possibilita extrair a data de abertura, a natureza jurídica, o endereço físico declarado e a situação cadastral. Oferece acesso direto ao QSA, permitindo mapear o controle societário."
              },
              {
                nome: "Consulta de CCMEI - Receita Federal",
                url: "https://mei.receita.economia.gov.br/certificado/consulta",
                aplicacao: "Caso a empresa seja um MEI, o documento gerado possui valor de contrato social e revela o endereço residencial completo e o telefone pessoal do titular, que muitas vezes ficam ocultos na busca padrão."
              },
              {
                nome: "REDESIM (Rede Nacional para a Simplificação do Registro e da Legalização de Empresas e Negócios)",
                url: "https://www.gov.br/empresas-e-negocios/pt-br/redesim",
                aplicacao: "Unifica processos de abertura, alteração e legalização de empresas no Brasil, conectando Receita Federal, Juntas Comerciais e órgãos licenciadores."
              },
              {
                nome: "Dados Abertos da Receita Federal do Brasil",
                url: "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/dados-abertos",
                aplicacao: "Canal oficial para a extração massiva de dados cadastrais. Fornece as bases completas do CNPJ e do Quadro de Sócios e Administradores (QSA) em formato estruturado (arquivos `.zip` com texto plano), sendo a 'mina de ouro' para mapear o tecido empresarial e realizar auditorias de grandes grupos econômicos de forma local e offline."
              }
            ]
          },
          {
            titulo: "Camada 2: Agregação e Mapeamento de Vínculos",
            conceito: "Uso de APIs e plataformas que espelham dados públicos, estruturando-os graficamente (Grafos) ou em linguagem programática (JSON).",
            comoFunciona: "Em vez de resolver CAPTCHAs a cada busca, essas plataformas varrem suas próprias bases de dados pré-compiladas do governo para fornecer respostas estruturadas ou desenhar a teia societária.",
            utilidadeOsint: "Essencial para acelerar a análise de redes ( _Link Analysis_ ). Permite descobrir instantaneamente se o sócio 'A' do 'CNPJ 1' também possui participações ocultas no 'CNPJ 2' e 'CNPJ 3', caracterizando um grupo econômico.",
            ferramentas: [
              {
                nome: "Rede CNPJ",
                url: "https://www.redecnpj.com/r/",
                aplicacao: "Plataforma online focada na consulta, cruzamento e mapeamento de dados cadastrais, exibindo estruturas corporativas e ramificações societárias de forma estruturada. Permite rastrear rapidamente o Quadro de Sócios e Administradores (QSA) e identificar empresas coligadas por meio de sócios comuns."
              },
              {
                nome: "Minha Receita",
                url: "https://minhareceita.org/",
                aplicacao: "Solução web e API de código aberto (_open-source_) que consome, trata e indexa dados brutos disponibilizados pela Receita Federal, permitindo buscas rápidas de CNPJs e QSA sem a necessidade de preenchimento de captchas."
              },
              {
                nome: "ReceitaWS",
                url: "https://receitaws.com.br/",
                aplicacao: "Plataforma comercial com API que realiza a extração e estruturação das informações públicas, fornecendo dados detalhados (como razão social, QSA, capital social e situação cadastral) diretamente em formato JSON."
              },
              {
                nome: "Brasil.io",
                url: "https://brasil.io/",
                aplicacao: "Repositório de dados abertos que captura informações governamentais em formatos complexos e as converte em bancos de dados limpos, padronizados e acessíveis via API. Inclui o cadastro completo de CNPJs e mitiga a necessidade de baixar gigabytes de arquivos brutos, permitindo cruzar vínculos corporativos e histórico político de forma centralizada"
              },
              {
                nome: "CCFácil",
                url: "https://ccfacil.com.br/default.aspx",
                aplicacao: "Plataforma de inteligência societária e análise de risco que consolida registros de composição de sociedades empresariais. É extremamente útil para o mapeamento e cruzamento de vínculos societários, facilitando a descoberta de empresas de fachada ou grupos econômicos ocultos."
              }
            ]
          }
        ]
      },
      {
        num: "02",
        nome: "Contratos Públicos & Licitações",
        opsec: "passivo",
        opsecTexto: "🟢 PASSIVO",
        vetor: "CNPJ ➔ Repasses / Contratos Governamentais / Empenhos / Diários Oficiais",
        objetivo: "Rastrear o fluxo financeiro ('_Follow the money_') entre o ente privado e a administração pública, identificando dependência econômica do erário, superfaturamentos ou fraudes licitatórias.",
        camadas: [
          {
            titulo: "Camada 1: Rastreio de Fluxos Financeiros (Erário)",
            conceito: "Auditoria de portais de dados abertos que consolidam despesas, empenhos e ordens de pagamento governamentais vinculadas a fornecedores.",
            comoFunciona: "A partir do CNPJ, o sistema consolida o histórico de todas as licitações vencidas, convênios celebrados e quantias efetivamente transferidas pelas esferas do governo para as contas da pessoa jurídica.",
            utilidadeOsint: "Indispensável para auditar o fluxo financeiro público direcionado a empresas, identificar consórcios recorrentes e analisar esquemas de corrupção ou favorecimento ilícito.",
            "ferramentas": [
              {
                nome: "Portal da Transparência (Pessoa Jurídica)",
                url: "https://portaldatransparencia.gov.br/pessoa-juridica/",
                aplicacao: "É o canal oficial de busca unificada voltado ao levantamento de dados econômicos, contratuais e correcionais de empresas que interagem com a Administração Pública Federal. A ferramenta consolida o recebimento de recursos federais, contratos ativos ou encerrados, convênios celebrados e frequentemente aponta links para os editais de licitação originais no Comprasnet."
              },
              {
                nome: "Portal da Transparência (Download de Dados)",
                url: "https://portaldatransparencia.gov.br/download-de-dados",
                aplicacao: "Repositório para a extração massiva de bases de dados do Governo Federal. Em vez de realizar consultas individuais, o analista pode baixar bases consolidadas sobre execução de despesas, contratos e licitações para cruzar e identificar de forma massiva quais CNPJs receberam recursos públicos e seus fluxos orçamentários."
              },
              {
                nome: "Portais Transparências Municipais e Estaduais",
                url: "#",
                aplicacao: "É o canal oficial de busca unificada voltado ao levantamento de dados econômicos, contratuais e correcionais de empresas que interagem com a Administração Pública. "
              }
            ]
          },
          {
            titulo: "Camada 2: Inteligência em Diários Oficiais e Política",
            conceito: "Uso de raspagem automatizada ( Scraping ) e indexação por Inteligência Artificial em publicações de diários oficiais e do sistema eleitoral.",
            comoFunciona: "Plataformas transformam PDFs governamentais não estruturados em texto pesquisável ou disponibilizam declarações de campanha associando empresas aos seus favorecidos.",
            utilidadeOsint: "Rastreia a evolução temporal de um contrato, aditivos e descobre doações a Campanhas Eleitorais (Políticos/PEPs).",
            "ferramentas": [
              {
                nome: "Querido Diário",
                url: "https://queridodiario.ok.org.br/",
                aplicacao: "Projeto que utiliza inteligência artificial e raspagem para centralizar e indexar os Diários Oficiais dos municípios brasileiros. Permite buscas textuais por CNPJs para rastrear contratos públicos e licitações diretamente nas publicações oficiais, superando a barreira histórica da fragmentação dos portais de prefeituras locais."
              },
              {
                nome: "DivulgaCandContas (TSE)",
                url: "https://divulgacandcontas.tse.jus.br/",
                aplicacao: "Plataforma oficial do Tribunal Superior Eleitoral (TSE) que consolida dados e centraliza as prestações de contas de campanhas de candidatos a cargos públicos no país. Viabiliza a auditoria de fluxo financeiro eleitoral, permitindo cruzar o CNPJ ou CPF para identificar doadores de campanha, mapear empresas contratadas como fornecedoras e checar redes de influência econômica e política."
              },
              {
                nome: "Portal de Dados Abertos do TSE",
                url: "https://dadosabertos.tse.jus.br",
                aplicacao: "Repositório oficial que oferece acesso a arquivos brutos e processáveis (CSV) sobre resultados de votações, doadores, receitas e despesas de campanhas políticas. É essencial para o cruzamento massivo offline de fornecedores eleitorais, ajudando a expor possíveis esquemas de lavagem de dinheiro e empresas de fachada financiadas em pleitos."
              },
              {
                nome: "Escavador",
                url: "https://www.escavador.com/",
                aplicacao: "Plataforma brasileira especializada na centralização e indexação de dados provenientes de diários oficiais, tribunais de justiça e órgãos governamentais. Organiza perfis institucionais de pessoas jurídicas de forma automatizada, permitindo rastrear diários oficiais de maneira passiva e rápida para identificar licitações, citações de contratos ou litígios judiciais."
              },
              {
                nome: "Aleph - OCCRP",
                url: "https://aleph.occrp.org/",
                aplicacao: "Repositório global de investigação jornalística mantido pelo Organized Crime and Corruption Reporting Project que indexa milhões de registros públicos, relatórios governamentais e vazamentos de dados. O grande diferencial da ferramenta é o seu motor avançado de OCR, que permite buscar nomes de empresas e políticos diretamente dentro de documentos PDF e imagens digitalizadas antigas, sendo vital para investigar o fluxo financeiro de redes de corrupção."
              }
            ]
          }
        ]
      },
      {
        num: "03",
        nome: "Compliance, Sanções & Passivos",
        opsec: "passivo",
        opsecTexto: "🟢 PASSIVO",
        vetor: "CNPJ ➔ Dívida Ativa / Inidoneidade / Litígios Trabalhistas / Protestos",
        objetivo: "Avaliar a idoneidade corporativa, rastrear a insolvência e mapear litígios, dívidas ou sanções ativas que representem riscos institucionais.",
        camadas: [
          {
            titulo: "Camada 1: Dívida Ativa e Regularidade Jurídica",
            conceito: "Consulta de irregularidades perante as secretarias de fazenda e registro de impedimentos para licitar com a administração pública.",
            comoFunciona: "Sistemas governamentais buscam inscrições do CNPJ em dívida ativa e no banco de punições por improbidade ou infrações em processos licitatórios.",
            utilidadeOsint: "Permite constatar de forma célere se a organização possui má conduta administrativa grave, insolvência fiscal ou impedimentos legais vigentes.",
            ferramentas: [
              {
                nome: "REGULARIZE (Procuradoria-Geral da Fazenda Nacional - PGFN)",
                url: "https://www.regularize.pgfn.gov.br/",
                aplicacao: "Portal digital de serviços voltado para a consulta e acompanhamento de débitos tributários e não tributários inscritos na Dívida Ativa da União e do FGTS. É crucial para identificar histórico de inadimplência fiscal com o Estado e mensurar o passivo financeiro acumulado por empresas."
              },
              {
                nome: "Cadastro Nacional de Condenações Cíveis (CNCIAI - CNJ)",
                url: "https://www.cnj.jus.br/improbidade_adm/consultar_requerido.php",
                aplicacao: "Sistema oficial que centraliza dados de processos judiciais de todo o país relativos a condenações por improbidade administrativa. Permite constatar de forma rápida se a organização sofreu sanções de inelegibilidade, indisponibilidade de bens ou proibição de contratar com o Poder Público."
              },
              {
                nome: "Dados Abertos da Dívida Ativa da União (PGFN)",
                url: "https://www.gov.br/pgfn/pt-br/assuntos/divida-ativa-da-uniao/transparencia-fiscal-1/copy_of_dados-abertos",
                aplicacao: "Repositório que disponibiliza as bases de dados em massa dos devedores (pessoas físicas e jurídicas) inscritos na Dívida Ativa. Ideal para cruzamento estatístico e identificação passiva de altos devedores do erário de forma offline."
              },
              {
                nome: "SICAFI - Módulo Externo do IBAMA",
                url: "https://servicos.ibama.gov.br/sicafiext/",
                aplicacao: "Plataforma para consulta e emissão de Certidão Negativa de Débitos (CND) perante o IBAMA. Permite verificar a existência de multas ativas ou pendências de arrecadação por infrações ambientais, inferindo a conduta regulatória e a saúde institucional da empresa investigada."
              },
              {
                nome: "Certidão de Feitos Trabalhistas - TRT",
                url: "https://certidao.trt3.jus.br/certidao/feitosTrabalhistas/aba1.emissao.htm",
                aplicacao: "Portais regionais (como o do TRT-3 em Minas Gerais) que atestam processos trabalhistas em andamento em instâncias locais. Identificar volumes anormais de ações trabalhistas atua como um forte indicador de desconsideração da personalidade jurídica iminente ou fraudes contra credores."
              }
            ]
          },
          {
            titulo: "Camada 2: Inadimplência Notarial, Litígios e Reputação de Consumo",
            conceito: "Pesquisas em centrais notariais (cartórios de protesto), processos judiciais e agregadores de comportamento de consumo para auditar a reputação comercial e passivos ocultos.",
            comoFunciona: "A busca consolidada levanta títulos protestados nacionalmente, agrega reclamações não resolvidas, litígios cíveis/trabalhistas e métricas de insatisfação abertas na web.",
            utilidadeOsint: "Mapeia gargalos da operação real, identifica se a empresa acumula dívidas mercantis de curto prazo, confirma nomes fantasia ou diretores listados em respostas a clientes e expõe redes focadas em golpes de varejo.",
            ferramentas: [
              {
                nome: "Pesquisa Protesto (CENPROT)",
                url: "https://www.pesquisaprotesto.com.br/",
                aplicacao: "Retorna uma visão unificada sobre a inadimplência nacional do alvo pesquisado a partir de CPF ou CNPJ, informando o cartório de origem da dívida e corroborando situações de insolvência ou disputas financeiras."
              },
              {
                nome: "Reclame Aqui",
                url: "https://www.reclameaqui.com.br",
                aplicacao: "Possibilita mapear os principais gargalos operacionais da pessoa jurídica, rastreando o padrão de comportamento institucional e identificando indícios de fraudes em massa. É uma excelente ferramenta para identificar nomes fantasia e canais alternativos de atendimento que não constam nos registros governamentais formais (CNPJ)."
              },
              {
                nome: "Escavador",
                url: "https://www.escavador.com/",
                aplicacao: "Centraliza e indexa dados de tribunais de justiça, organizando perfis automatizados com o histórico jurídico e processos associados a pessoas jurídicas. Permite identificar de maneira rápida se a empresa possui litígios judiciais ativos nas esferas cíveis ou de consumo."
              },
              {
                nome: "CCFácil",
                url: "https://ccfacil.com.br/default.aspx",
                aplicacao: "Opera como distribuidora autorizada de bureaus de crédito, fornecendo relatórios detalhados que agrupam protestos, registros de inadimplência mercantis, dívidas vencidas, ações judiciais em andamento e score de crédito essenciais em background checks corporativos."
              }
            ]
          }
        ]
      },
      {
        num: "04",
        nome: "Infraestrutura Digital & Web",
        opsec: "passivo",
        opsecTexto: "🟢 PASSIVO",
        vetor: "CNPJ / Razão Social ➔ Domínios Registrados / ASN / E-mails Institucionais / Pilha Tecnológica",
        objetivo: "Desvendar a presença tecnológica e propriedades web da empresa, além de rastrear infraestruturas ocultas mantidas pelo grupo corporativo na internet.",
        camadas: [
          {
            titulo: "Camada 1: Resolução de Domínios e Propriedade de TI",
            conceito: "Consulta ao registro raiz de um domínio e análise de históricos de hospedagem, provedores de internet (ISP) e registros de titularidade reversos.",
            comoFunciona: "Extrai o responsável legal pelo domínio web corporativo, o servidor apontado e o histórico de alterações em Nameservers e IPs, provendo a arquitetura física da presença da marca na web e revelando propriedades ocultadas.",
            utilidadeOsint: "Permite correlacionar múltiplos sites a uma única holding, evidenciar a criação de domínios caça-cliques (Typosquatting) vinculados ao CNPJ do fraudador e rastrear a evolução da infraestrutura web ao longo do tempo.",
            ferramentas: [
              {
                nome: "Registro.br WHOIS",
                url: "https://registro.br/tecnologia/ferramentas/whois/",
                aplicacao: "Serviço oficial mantido pelo NIC.br para consulta de domínios .br. Permite identificar o CNPJ ou CPF do titular, a razão social da empresa, as datas de criação e expiração do site, além dos servidores de DNS apontados, servindo como ponto de partida crucial para técnicas de pivoting no Brasil."
              },
              {
                nome: "DomainTools WHOIS",
                url: "https://whois.domaintools.com/",
                aplicacao: "Plataforma avançada que coleta e analisa dados de WHOIS, informações de servidores de DNS e históricos de apontamentos e endereços IP. Possibilita desvendar redes de sites falsos e ligar múltiplos domínios web a uma mesma entidade."
              },
              {
                nome: "Netcraft Site Report",
                url: "https://sitereport.netcraft.com/",
                aplicacao: "Serviço que compila relatórios abrangentes sobre a rede de hospedagem (incluindo endereços IP, blocos CIDR e ASN), histórico de alterações de provedores, certificados SSL/TLS e tecnologias do servidor. É indispensável para reconstruir a linha do tempo de hospedagem de um alvo sem gerar interações com o servidor final."
              },
              {
                nome: "WhoisFreaks Reverse WHOIS Search",
                url: "https://whoisfreaks.com/tools/whois/reverse/search",
                aplicacao: "Ferramenta especializada que inverte a lógica de busca. Em vez de pesquisar um domínio, permite inserir o nome de uma empresa ou e-mail corporativo para descobrir todos os nomes de domínio atualmente ou anteriormente vinculados àquele identificador nos registros WHOIS, contornando mecanismos básicos de privacidade."
              },
              {
                nome: "Whoxy",
                url: "https://sitereport.netcraft.com/",
                aplicacao: "Fornece um banco de dados robusto contendo histórico WHOIS e buscas reversas. É extremamente valioso em casos onde o alvo utilizou proteção de privacidade recente, pois seu histórico pode revelar os dados reais (como o CNPJ e razão social) inseridos no momento do primeiro registro do domínio."
              }
            ]
          },
          {
            titulo: "Camada 2: Arquitetura, Certificados e Canais de Comunicação",
            conceito: "Enumeração dos e-mails oficiais de colaboradores, identificação de servidores, pilhas tecnológicas (stacks) e subdomínios expostos.",
            comoFunciona: "Scanners de internet agregam os registros corporativos que estão publicamente expostos em indexadores ou rastreadores.",
            utilidadeOsint: "Fornece insumos humanos e tecnológicos para a engenharia social reversa e mapeamento do perímetro digital e comunicações adotadas pela organização.",
            ferramentas: [
              {
                nome: "Hunter.io",
                url: "https://hunter.io/",
                aplicacao: "Plataforma web projetada para localizar, extrair e verificar endereços de correio eletrônico corporativos vinculados a domínios de organizações. Identifica os padrões de nomenclatura adotados pela empresa (ex: nome.sobrenome@empresa.com.br) e lista profissionais e diretores vinculados, validando a existência das caixas postais sem disparar alertas de leitura."
              },
              {
                nome: "Censys Search",
                url: "https://search.censys.io",
                aplicacao: "Motor de busca massivo de infraestrutura de rede que indexa registros detalhados de certificados criptográficos SSL/TLS globais. É fundamental para rastrear a superfície de ataque e descobrir servidores ocultos ao permitir correlacionar ativos através de impressões digitais de certificados compartilhados (como hashes SHA-256)."
              },
              {
                nome: "Phonebook.cz",
                url: "https://search.censys.io",
                aplicacao: "Ferramenta baseada nos bancos de dados massivos da Intelligence X que realiza pesquisas em larga escala para extrair e listar subdomínios, endereços de correio eletrônico institucionais e URLs correspondentes a um domínio corporativo de entrada, operando com total OPSEC (100% passiva)."
              },
              {
                nome: "Skymem",
                url: "https://www.skymem.info/",
                aplicacao: "Motor de busca focado na extração e localização de e-mails em fontes abertas. Varre a internet e conteúdos digitais públicos para ajudar a estruturar o banco de dados de contatos de uma organização, identificando padrões de nomenclatura institucionais e revelando novos leads humanos associados a um domínio web."
              },
              {
                nome: "RocketReach",
                url: "https://rocketreach.co",
                aplicacao: "Plataforma de inteligência de contatos comerciais B2B que indexa milhões de perfis profissionais. É uma adição ideal para correlacionar domínios corporativos a perfis no LinkedIn, mapeando diretamente a estrutura de tomadores de decisão da companhia e levantando números de telefone e e-mails corporativos de nível executivo."
              }
            ]
          }
        ]
      },
      {
        num: "05",
        nome: "Regulamentação, Patentes & Setores Específicos",
        opsec: "passivo",
        opsecTexto: "🟢 PASSIVO",
        vetor: "CNPJ ➔ Patentes / Autorizações (ANVISA/ANP/ANEEL) / Frotas de Veículos / Aeronaves",
        objetivo: "Levantar a capacidade intelectual (Patentes), concessões estatais, licenças de operação e ativos logísticos e de transporte associados à pessoa jurídica nos setores regulados.",
        camadas: [
          {
            titulo: "Camada 1: Propriedade Intelectual e Patentes",
            conceito: "Busca em acervos e diretórios globais ou governamentais por patentes e registros de marcas para avaliar o portfólio tecnológico da empresa.",
            comoFunciona: "Através do nome da empresa ou de seus inventores associados, os sistemas rastreiam tecnologias patenteadas ou em processo de registro, documentando os escopos técnicos.",
            utilidadeOsint: "Revela o foco tecnológico, inovações e eventuais subsidiárias por trás da propriedade de ativos intangíveis, além de mapear especialistas e engenheiros da corporação.",
            ferramentas: [
              {
                nome: "INPI - Busca Avançada de Patentes",
                url: "https://busca.inpi.gov.br/pePI/jsp/patentes/PatenteSearchAvancado.jsp",
                aplicacao: "Permite identificar projetos de Pesquisa e Desenvolvimento (P&D) conduzidos por empresas, rastrear tecnologias exclusivas e mapear a cadeia de colaboradores técnicos de uma organização. A análise revela dados estratégicos como parcerias comerciais ocultas, contratos de transferência de tecnologia e a movimentação de profissionais de alta relevância técnica entre concorrentes."
              },
              {
                nome: "Google Patents",
                url: "https://patents.google.com/",
                aplicacao: "Permite auditar o ecossistema tecnológico e de Pesquisa e Desenvolvimento (P&D) de uma empresa-alvo, rastrear subsidiárias por meio dos detentores dos direitos econômicos e identificar parcerias comerciais ocultas."
              }
            ]
          },
          {
            titulo: "Camada 2: Saúde, Energia e Operações Sensíveis",
            conceito: "Inspeção nos portais das agências de regulação para monitorar Licenças de Operação e Autos de Interdição do CNPJ.",
            comoFunciona: "O analista consulta a base da agência com a numeração fiscal para auditar se o agente comercial possui a estrutura validada pelo Estado e permissão para extrair recursos ou fornecer bens críticos.",
            utilidadeOsint: "Identifica empresas de fachada tentando firmar contratos na área de saúde ou energia sem Autorização de Funcionamento válida. É o filtro vital de idoneidade setorial.",
            ferramentas: [
              {
                nome: "Sistema de Consultas - ANVISA",
                url: "https://consultas.anvisa.gov.br",
                aplicacao: "Permite mapear passivamente a infraestrutura legal de fornecedores e parceiros de negócios, validando se operam com autorizações legítimas ou se possuem AFEs canceladas e resoluções de proibição vigentes."
              },
              {
                nome: "Portal de Dados Abertos da ANEEL",
                url: "https://dadosabertos.aneel.gov.br",
                aplicacao: "O analista consegue cruzar passivamente o nome de um grupo econômico com todos os seus empreendimentos energéticos homologados, identificando locais exatos de operação e contratos estatais firmados."
              },
              {
                nome: "Sistema de Consulta de Dados Públicos (CDP) - ANP",
                url: "https://cdp.anp.gov.br",
                aplicacao: "A consulta passiva permite validar se uma empresa investigada possui autorização ativa para operar, mapear instalações físicas declaradas e monitorizar interdições vigentes por adulteração de combustíveis ou fraudes volumétricas."
              }
            ]
          },
          {
            titulo: "Camada 3: Fiscalização Ambiental e Recursos Hídricos",
            conceito: "Cruzamento do CNPJ com as bases de dados de autarquias ambientais para mapear concessões de extração, passivos ecológicos e embargos físicos de áreas de operação.",
            comoFunciona: "O analista insere os identificadores da empresa nas bases de fiscalização federal para listar multas vigentes, certidões negativas de débito ambiental e a geolocalização de outorgas concedidas.",
            utilidadeOsint: "Revela plantas físicas e propriedades rurais vinculadas ao grupo econômico. O histórico de infrações atua como forte indicador em auditorias de compliance corporativo e na identificação de infraestruturas operando clandestinamente.",
            ferramentas: [
              {
                nome: "Painel de Consultas Públicas - IBAMA",
                url: "https://www.gov.br/ibama/pt-br/servicos/consultas",
                uso: "Consulta de infrações ambientais, áreas embargadas, licenciamentos e regularidade cadastral (CTF) de pessoas físicas e jurídicas no Brasil.",
                aplicacao: "Permite identificar passivos ambientais críticos e sanções administrativas associadas a um alvo, revelando se uma empresa ou indivíduo opera em áreas protegidas ou possui restrições de comercialização."
              },
              {
                nome: "ANA (Agência Nacional de Águas e Saneamento Básico)",
                url: "https://www.gov.br/ana/pt-br",
                uso: "Consulta de outorgas de direito de uso de recursos hídricos, segurança de barragens e dados geoespaciais de bacias hidrográficas.",
                aplicacao: "Permite mapear de forma precisa quais empresas possuem concessões vigentes para uso de água, identificando o local exato de captação por coordenadas geográficas, finalidade do uso e volumes autorizados."
              },
              {
                nome: "Seção de Acesso à Informação - ICMBio",
                url: "https://www.gov.br/icmbio/pt-br/acesso-a-informacao",
                uso: "Consulta de dados públicos institucionais, relatórios de fiscalização, histórico de multas/embargos ambientais e formulação de pedidos de informação via Fala.BR.",
                aplicacao: "Permite realizar o mapeamento passivo de passivos ambientais críticos, cruzando o CNPJ de um fornecedor com bancos de dados de desmatamento ilegal e sanções administrativas."
              }
            ]
          },
          {
            titulo: "Camada 4: Logística, Transportes e Frotas",
            conceito: "Levantamento das frotas ativas (terrestres e aquaviárias) e controle sobre malhas logísticas essenciais pertencentes ao alvo corporativo.",
            comoFunciona: "Os portais das agências de transporte (ANTT, ANTAQ, ANAC) são consultados para reverter o CNPJ de uma companhia, extraindo o inventário de veículos, aeronaves e embarcações autorizadas pelo governo federal.",
            utilidadeOsint: "Desnuda a capacidade logística real de grupos econômicos, viabilizando a identificação de frotas atreladas ao grupo e descobrindo ativos subdeclarados que compõem o patrimônio real.",
            ferramentas: [
              {
                nome: "Consulta Pública RNTRC - ANTT",
                url: "https://consultapublica.antt.gov.br/Site/ConsultaRNTRC.aspx",
                uso: "Consulta de regularidade, dados cadastrais e composição de frota de transportadores rodoviários de carga no Brasil.",
                aplicacao: "Viabiliza o mapeamento reverso de ativos, permitindo ao analista descobrir a frota total de veículos registrada sob o CNPJ de uma transportadora, além de validar se a infraestrutura declarada guarda proporção com sua realidade operacional."
              },
              {
                nome: "Consulta de Frota Geral - ANTAQ",
                url: "https://web3.antaq.gov.br/Portal/Frota/ConsultarFrotaGeral.aspx",
                uso: "Consulta e consolidação de frotas operacionais e embarcações vinculadas a Empresas Brasileiras de Navegação (EBN).",
                aplicacao: "Permite inspecionar toda a estrutura de frota declarada por uma determinada razão social, revelando a real capacidade operacional, ramificações logísticas e indícios de ocultação de bens ou subdeclaração de frotas através de subsidiárias."
              },
              {
                nome: "Pesquisar CNPA - ANAC",
                url: "https://sistemas.anac.gov.br/CNPA/PesquisarCnpa",
                uso: "Consulta e emissão de Certidão Negativa de Propriedade de Aeronaves (CNPA) para identificar se uma pessoa física ou jurídica possui aeronaves registradas no país.",
                aplicacao: "Atua como um indexador reverso de ativos de luxo e infraestrutura de alta relevância. Revela aviões ou helicópteros registrados em nome do investigado ou de suas empresas controladas, gerando insumos fundamentais para a quebra de blindagens patrimoniais."
              },
              {
                nome: "Concessões Ferroviárias - ANTT",
                url: "https://www.gov.br/antt/pt-br/assuntos/ferrovias/concessoes-ferroviarias",
                uso: "Levantamento de dados regulatórios, contratos de concessão e infraestrutura logística do setor ferroviário brasileiro.",
                aplicacao: "Permite ligar CNPJs de concessionárias a obrigações contratuais públicas, identificar o controle operacional de linhas logísticas estratégicas e levantar dados de ativos fixos e operacionais vinculados a essas empresas."
              }
            ]
          }
        ]
      },
      {
        num: "06",
        nome: "Patrimônio, Imóveis & Ambiental",
        opsec: "passivo",
        opsecTexto: "🟢 PASSIVO",
        vetor: "CNPJ ➔ Matrículas de Imóveis / Propriedades Rurais (INCRA) / Embargos e Multas Ambientais (IBAMA)",
        objetivo: "Correlacionar propriedades físicas imobiliárias e geográficas ao CNPJ, além de identificar passivos ambientais atrelados a esses polígonos territoriais.",
        camadas: [
          {
            titulo: "Camada 1: Auditoria Imobiliária e Gestão Fundiária",
            conceito: "Mapeamento centralizado de propriedades urbanas e rurais certificadas e vinculadas à pessoa jurídica em sistemas federais e de cartórios.",
            comoFunciona: "Os portais processam o CNPJ para buscar registros eletrônicos de matrículas de imóveis ou mapas poligonais georreferenciados cadastrados em autarquias como o INCRA.",
            utilidadeOsint: "Fornece subsídios cartográficos e judiciais que apontam a dimensão das propriedades imobiliárias do alvo e a eventual sobreposição em áreas ilegais (GEOINT).",
            ferramentas: [
              {
                nome: "Registradores - ONR (Operador Nacional do Registro Eletrônico de Imóveis)",
                url: "https://registradores.onr.org.br/",
                uso: "Centralização de consultas a matrículas, pesquisa de bens e certidões digitais de imóveis em cartórios de registro de imóveis do Brasil.",
                aplicacao: "A partir de um CPF ou CNPJ, o analista pode mapear propriedades imobiliárias registradas em nome do alvo, identificar transações de compra e venda na matrícula e rastrear garantias reais ou gravames (como penhoras judiciais)."
              },
              {
                nome: "Mapa do Registro de Imóveis do Brasil",
                url: "https://www.registrodeimoveis.org.br/mapa",
                uso: "Mapeamento georreferenciado, localização de perímetros e identificação de circunscrições imobiliárias em cartórios do Brasil.",
                aplicacao: "A partir de coordenadas geográficas, endereços ou delimitações visuais no mapa, o analista consegue identificar com precisão técnica qual circunscrição imobiliária (cartório específico) é competente por aquela coordenada ou polígono, facilitando a requisição posterior de matrículas."
              },
              {
                nome: "SIGEF - Consulta de Parcelas (INCRA)",
                url: "https://sigef.incra.gov.br/consultar/parcelas/",
                uso: "Consulta pública de parcelas de imóveis rurais certificados, dados de georreferenciamento e malha fundiária brasileira.",
                aplicacao: "Possibilita cruzar informações físicas da terra com dados cadastrais de proprietários. O analista pode extrair polígonos de demarcação, memoriais descritivos e a planta do imóvel rural, além de identificar sobreposições ilegais em terras indígenas, unidades de conservação ou áreas da União."
              },
              {
                nome: "SNCR - Sistema Nacional de Cadastro Rural (Consulta Pública)",
                url: "https://sncr.serpro.gov.br/sncr-web/consultaPublica.jsf",
                uso: "Consulta pública de dados cadastrais de imóveis rurais e validação do Certificado de Cadastro de Imóvel Rural (CCIR).",
                aplicacao: "Funciona como uma fonte primária para correlacionar propriedades rurais a pessoas físicas ou jurídicas. Permite confirmar a regularidade cadastral de glebas e fazendas, identificar a área total declarada e estabelecer vínculos territoriais cruciais para o mapeamento de ativos ocultos."
              }
            ]
          },
          {
            titulo: "Camada 2: Conformidade e Fiscalização Ambiental",
            conceito: "Investigação da governança e sustentabilidade (ESG) do alvo, visando multas, proibições de atuação e embargos territoriais promovidos por órgãos ambientais.",
            comoFunciona: "Consultas públicas contra os registros dos institutos de proteção emitem certidões de irregularidades e mapeiam sanções sobre as infraestruturas geridas pela empresa.",
            utilidadeOsint: "Revela severas restrições comerciais ou áreas do alvo proibidas de uso agropecuário devido a crimes de desmatamento.",
            ferramentas: [
              {
                nome: "Painel de Consultas Públicas - IBAMA",
                url: "https://www.gov.br/ibama/pt-br/servicos/consultas",
                uso: "Consulta de infrações ambientais, áreas embargadas, licenciamentos e regularidade cadastral (CTF) de pessoas físicas e jurídicas no Brasil.",
                aplicacao: "Permite identificar passivos ambientais críticos e sanções administrativas associadas a um alvo, revelando se uma empresa ou indivíduo opera em áreas protegidas ou possui restrições de comercialização de produtos."
              },
              {
                nome: "SICAFI - Módulo Externo (IBAMA)",
                url: "https://servicos.ibama.gov.br/sicafiext/",
                uso: "Consulta e emissão de Certidão Negativa de Débitos (CND), multas e regularidade fiscal/ambiental perante o IBAMA.",
                aplicacao: "A partir de um CPF ou CNPJ, é possível verificar a existência de multas ativas, processos de cobrança, pendências de arrecadação ou restrições que impeçam a emissão da Certidão Negativa de Débitos, permitindo inferir a conduta regulatória do alvo."
              },
              {
                nome: "Seção de Acesso à Informação - ICMBio",
                url: "https://www.gov.br/icmbio/pt-br/acesso-a-informacao",
                uso: "Consulta de dados públicos institucionais, relatórios de fiscalização, histórico de multas/embargos ambientais e formulação de pedidos de informação via Fala.BR.",
                aplicacao: "Permite realizar o mapeamento passivo de passivos ambientais críticos. O analista consegue cruzar o CNPJ de um fornecedor ou o CPF de um parceiro de negócios com bancos de dados de desmatamento ilegal e sanções administrativas."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "cpf",
    categoria: "pessoas",
    icone: "👤",
    titulo: "Investigação de Pessoas Físicas (CPF)",
    subtitulo: "// Roteiro metodológico para qualificação civil, levantamento patrimonial, histórico judicial e pegada digital.",

    imagem: "../img/trilha-cpf.png",

    modulos: [
      {
        "num": "01",
        "nome": "Validação Cadastral & Status Civil",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "CPF ➔ Nome Completo / Data de Nascimento / Filiação / Situação Fiscal / Óbito",
        "objetivo": "Confirmar a existência e a regularidade civil do indivíduo perante o Estado, validando dados biográficos primários e identificando indícios de óbito ou fraude de identidade.",
        "camadas": [
          {
            "titulo": "Camada 1: Certificação Oficial de Identidade",
            "conceito": "Cruzamento direto nas bases primárias do Estado para extrair dados biográficos absolutos.",
            "comoFunciona": "Injeta-se o CPF nos sistemas de validação. Caso a data de nascimento ou nome da mãe informados sejam incorretos, o sistema recusa a emissão de certidões, o que funciona indiretamente como um validador 'Verdadeiro/Falso' para os dados que o investigador tem em mãos.",
            "utilidadeOsint": "Mitiga riscos de homonímia e falsidade ideológica, confirmando que os dados investigados correspondem legalmente ao alvo.",
            "ferramentas": [
              {
                "nome": "Consulta de CPF - Secretaria da Receita Federal do Brasil",
                "url": "https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp",
                "uso": "Verificação de regularidade cadastral, confirmação de nome completo e validação da data de nascimento de pessoas físicas (CPF) na Receita Federal do Brasil.",
                "aplicacao": "A partir de um CPF e de uma data de nascimento presumida, a ferramenta retorna o nome completo do titular cadastrado na base do Estado e a sua situação cadastral exata, permitindo ao analista validar a integridade legal da identidade do investigado."
              },
              {
                "nome": "Certidão de Quitação Eleitoral (TSE)",
                "url": "https://www.tse.jus.br/servicos-eleitorais/certidoes/certidao-de-quitacao-eleitoral",
                "uso": "Emissão e validação de Certidão de Quitação Eleitoral para verificação de regularidade civil e direitos políticos de pessoas físicas.",
                "aplicacao": "Como a emissão do documento exige a concordância exata de múltiplos dados biográficos estruturados (Nome completo, CPF ou Título de Eleitor, Data de Nascimento, Nome da Mãe e Nome do Pai), ela atua como um motor de validação cruzada para confirmar se os dados de filiação e nascimento obtidos em fontes menos confiáveis são legítimos."
              },
              {
                "nome": "Consulta de Restituição IRPF - Receita Federal",
                "url": "https://www.restituicao.receita.fazenda.gov.br/#/",
                "uso": "Consulta da situação de restituição do Imposto de Renda de Pessoa Física (IRPF) e status de processamento da declaração anual.",
                "aplicacao": "A consulta permite inferir a saúde financeira e a regularidade do alvo perante o fisco, além de confirmar indiretamente o envio de declarações de bens e rendimentos em anos específicos. Caso conste 'Com pendências', o analista obtém um forte indicativo de que o alvo caiu na 'Malha Fina', o que sugere inconsistências patrimoniais ou documentais."
              },
              {
                "nome": "Situação Cadastral",
                "url": "https://www.situacao-cadastral.com/",
                "uso": "Consulta rápida da situação cadastral e dados cadastrais básicos de CPFs e CNPJs na base da Receita Federal.",
                "aplicacao": "A partir de um CPF, o analista consegue confirmar se o documento é existente e qual é seu status atual, servindo como ponto de partida ágil para a ramificação e pivoting da investigação sem a necessidade de navegar por sistemas governamentais mais complexos na fase preliminar."
              }
            ]
          },
          {
            "titulo": "Camada 2: Rastreio de Óbitos e Identidades \"Fantasmas\"",
            "conceito": "Busca em sistemas funerários, cartórios e bases da fazenda para desmascarar perfis falsos construídos com CPFs de pessoas já falecidas (fraude de 'laranjas mortos').",
            "comoFunciona": "Busca em sistemas funerários, cartórios e bases da fazenda para identificar perfis falsos baseados em documentos de cidadãos falecidos.",
            "utilidadeOsint": "Fundamental para validar o encerramento do ciclo vital de um alvo ou evidenciar problemas que sugiram ocultação de bens, insolvência ou esquemas de laranjas.",
            "ferramentas": [
              {
                "nome": "Falecidos no Brasil",
                "url": "https://www.falecidosnobrasil.org.br/",
                "uso": "Consulta e validação de registros de óbito, obituários e dados de sepultamento no Brasil para fins cadastrais e genealógicos.",
                "aplicacao": "As notas de falecimento e obituários indexados frequentemente listam nomes de parentes de primeiro e segundo grau (cônjuges, filhos, pais, irmãos), tornando a ferramenta altamente eficaz para a descoberta de vínculos familiares."
              }
            ]
          },
          {
            "titulo": "Camada 3: Evolução do Estado Civil e Vínculos Oficiais",
            "conceito": "Busca de atos de natureza civil e política para qualificar o estado civil histórico do alvo, mudanças de sobrenomes e vínculos formais com agremiações.",
            "comoFunciona": "O analista consulta repositórios notariais e da Justiça Eleitoral para identificar intenções de casamento, cônjuges e filiações ativas no histórico do investigado.",
            "utilidadeOsint": "Permite revelar sobrenomes de casados ou solteiros, potenciais endereços de residência e identificar vínculos políticos ou ideológicos.",
            "ferramentas": [
              {
                "nome": "Portal e-Proclamas",
                "url": "https://proclamas.org.br/",
                "uso": "Localização de editais de proclamas de casamento para fins de cruzamento de dados civis e qualificação de pessoas.",
                "aplicacao": "A plataforma é ideal para a fase de estruturação e triangulação de vínculos familiares, ajudando a revelar sobrenomes de casados ou de solteiros e potenciais endereços de residência associados aos nubentes informados nos editais cartorários."
              },
              {
                "nome": "Certidão de Filiação Partidária - TSE (Filia Consulta)",
                "url": "https://filia-consulta.tse.jus.br/#/principal/certidao-gerar",
                "uso": "Emissão e validação de Certidão de Filiação Partidária para identificação de vínculos políticos, partidários e ideológicos de pessoas físicas.",
                "aplicacao": "Como o sistema exige parâmetros estritos e exatos (geralmente o número do Título de Eleitor, Nome Completo e Data de Nascimento), a ferramenta atua como um excelente validador extra dos dados básicos do alvo, além de identificar vínculos políticos ou ideológicos."
              }
            ]
          }
        ]
      },
      {
        "num": "02",
        "nome": "Mapeamento Societário & Empresas",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "CPF ➔ CNPJs (Empresas em Nome) / Quadro de Sócios (QSA) / Endereços Residenciais Ocultos",
        "objetivo": "Descobrir os vínculos comerciais do indivíduo. É a etapa principal para encontrar empresas de fachada, grupos econômicos sob o comando do alvo e puxar o fio para possíveis cúmplices (outros sócios).",
        "camadas": [
          {
            "titulo": "Camada 1: O Fator \"Microempreendedor Individual (MEI)\"",
            "conceito": "Aproveitamento da regra jurídica brasileira que obriga a composição da Razão Social do MEI com o nome civil e CPF do indivíduo.",
            "comoFunciona": "Os sistemas emitem o certificado da condição de microempreendedor do alvo, consolidando em um único relatório dados do negócio e do seu titular único.",
            "utilidadeOsint": "O MEI atua como a ponte perfeita. Muitos alvos utilizam o próprio endereço residencial e o número de celular pessoal ao abrir o CNPJ, dados que não constam numa simples busca de CPF. A consulta permite descobrir de forma inequívoca o CNPJ vinculado a um alvo, ou extrair os dados civis e de localização de um indivíduo a partir do CNPJ da empresa.",
            "ferramentas": [
              {
                "nome": "Consulta de CCMEI - Receita Federal",
                "url": "https://mei.receita.economia.gov.br/certificado/consulta",
                "uso": "Emissão e validação do Certificado da Condição de Microempreendedor Individual (CCMEI) para verificação de dados cadastrais e vínculos societários.",
                "aplicacao": "O documento gerado (CCMEI) possui o mesmo valor de um contrato social, fornecendo dados frequentemente omitidos em consultas básicas de CNPJ, como o endereço residencial/comercial completo declarado e o telefone de contato registrado pelo empreendedor. É altamente eficaz para mapear o endereço físico real do alvo investigado."
              }
            ]
          },
          {
            "titulo": "Camada 2: Grafos, Teias de Participação e Buscas Avançadas",
            "conceito": "Uso de APIs e plataformas de inteligência corporativa para processar conexões entre o CPF do alvo e milhares de empresas ativas ou baixadas, estruturando a pesquisa de vínculos.",
            "comoFunciona": "A partir de uma entrada simples (como nome empresarial, CPF ou número de CNPJ), as plataformas exibem estruturas corporativas, histórico de QSA e ramificações societárias.",
            "utilidadeOsint": "Essencial para acelerar a análise de redes de vínculos (*Link Analysis*) e o *pivoting*. Permite rastrear o Quadro de Sócios e Administradores (QSA), identificar empresas coligadas por meio de sócios comuns, desvelar empresas de fachada e mapear conglomerados econômicos.",
            "ferramentas": [
              {
                "nome": "Rede CNPJ",
                "url": "https://www.redecnpj.com/r/",
                "uso": "Consulta e visualização de relações societárias, dados cadastrais de CNPJ e redes de vínculos de empresas brasileiras.",
                "aplicacao": "Permite rastrear o Quadro de Sócios e Administradores (QSA), identificar empresas coligadas por meio de sócios comuns, localizar filiais e analisar a evolução cadastral de alvos corporativos a partir de uma entrada simples."
              },
              {
                "nome": "Minha Receita",
                "url": "https://minhareceita.org/",
                "uso": "Consulta rápida, estruturada e automatizada de dados cadastrais de CNPJs e Quadros de Sócios e Administradores (QSA).",
                "aplicacao": "Consome, trata e indexa de forma eficiente os dados brutos disponibilizados periodicamente pela Receita Federal do Brasil. Permite identificar a cadeia de comando de uma organização e rastrear múltiplos CNPJs associados a um mesmo grupo econômico através do QSA."
              },
              {
                "nome": "ReceitaWS",
                "url": "https://receitaws.com.br/",
                "uso": "Consulta e extração de dados cadastrais e societários de pessoas jurídicas por meio do CNPJ.",
                "aplicacao": "Fornece dados detalhados como a razão social, nome fantasia, atividade econômica (CNAE), quadro de sócios e administradores (QSA), capital social, endereço e situação cadastral estruturados em JSON."
              },
              {
                "nome": "CCFácil",
                "url": "https://ccfacil.com.br/default.aspx",
                "uso": "Consulta consolidada de restrições financeiras, inteligência societária e composição de sociedades empresariais.",
                "aplicacao": "A plataforma é altamente eficaz para correlacionar CPFs de suspeitos a empresas ativas ou baixadas, ajudando a traçar fluxos de ocultação patrimonial ou lavagem de capitais."
              }
            ]
          },
          {
            "titulo": "Camada 3: Repositórios Massivos e Diários Oficiais",
            "conceito": "Indexação e extração massiva de dados abertos para o cruzamento de informações governamentais, registros corporativos históricos e processos judiciais.",
            "comoFunciona": "Essas plataformas capturam gigabytes de dados públicos fragmentados, incluindo o cadastro completo da Receita Federal e diários oficiais, e os convertem em bases de dados limpas, padronizadas e pesquisáveis.",
            "utilidadeOsint": "Viabiliza a auditoria massiva para inteligência societária. Permite rastrear litígios em andamento ou históricos em diários oficiais que liguem o indivíduo a pessoas jurídicas de forma passiva, além da importação de bases estruturadas de CNPJs para cruzamento local.",
            "ferramentas": [
              {
                "nome": "Brasil.io",
                "url": "https://brasil.io/",
                "uso": "Repositório de dados públicos brasileiros limpos e estruturados, voltado para transparência cívica e inteligência societária.",
                "aplicacao": "Seu catálogo inclui o cadastro completo de CNPJs da Receita Federal. Mitiga a necessidade de baixar e tratar gigabytes de arquivos governamentais brutos, permitindo a correlação rápida entre o histórico político de indivíduos e seus vínculos corporativos."
              },
              {
                "nome": "Querido Diário",
                "url": "https://queridodiario.ok.org.br/",
                "uso": "Centralização, indexação e busca avançada em Diários Oficiais de municípios brasileiros para investigações patrimoniais e de integridade pública.",
                "aplicacao": "Utiliza inteligência artificial e raspagem de dados para transformar arquivos PDF fechados e imagens escaneadas em texto estruturado e pesquisável. É excelente para localizar o nome completo ou CPF oculto do alvo, rastreando nomeações, contratos e sanções administrativas."
              }
            ]
          }
        ]
      },
      {
        "num": "03",
        "nome": "Registo Judicial, Criminal & Sanções",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "CPF/Nome ➔ Processos (Cíveis/Criminais/Trabalhistas) / Mandados de Prisão / Partes Envolvidas",
        "objetivo": "Fazer o \"Background Check\" completo do investigado. Mapear litígios, antecedentes criminais, condenações de improbidade ou se o mesmo figura como procurado da justiça.",
        "camadas": [
          {
            "titulo": "Camada 1: Agregadores de Diários e Litígios",
            "conceito": "Raspagem massiva (scraping) e indexação via Inteligência Artificial de intimações, diários da justiça e andamentos processuais de todo o país.",
            "comoFunciona": "Plataformas capturam gigabytes de dados públicos fragmentados em diários oficiais e bases de tribunais, consolidando-os em dossiês pesquisáveis pelo nome ou CPF do alvo.",
            "utilidadeOsint": "Viabiliza o mapeamento passivo e imediato do histórico de processos judiciais associados ao alvo (cíveis e criminais), além de identificar nomeações, exonerações ou citações em editais.",
            "ferramentas": [
              {
                "nome": "Escavador",
                "url": "https://www.escavador.com/",
                "uso": "Busca e agregação de registros públicos, diários oficiais e processos judiciais de pessoas e empresas no Brasil.",
                "aplicacao": "Compila informações fragmentadas e organiza perfis automatizados que reúnem o histórico jurídico, menções profissionais, nomeações públicas e trajetórias acadêmicas de pessoas físicas, permitindo identificar de maneira passiva e rápida se o alvo possui litígios judiciais ativos."
              }
            ]
          },
          {
            "titulo": "Camada 2: Mandados e Restrições Penais/Cíveis",
            "conceito": "Acesso a bancos estatais do Conselho Nacional de Justiça (CNJ).",
            "comoFunciona": "Os portais processam o nome ou CPF do indivíduo nas bases centrais do judiciário para retornar registros de sanções ativas e impedimentos de direitos.",
            "utilidadeOsint": "Fundamental para constatar de forma imediata o status legal do alvo, verificando se ele é foragido da justiça ou se possui condenações que impeçam operações comerciais e políticas.",
            "ferramentas": [
              {
                "nome": "Portal BNMP (Banco Nacional de Monitoramento de Prisões)",
                "url": "https://portalbnmp.cnj.jus.br/#/pesquisa-peca",
                "uso": "Consulta pública de mandados de prisão, ordens de captura e monitoramento de indivíduos no sistema penitenciário brasileiro.",
                "aplicacao": "A plataforma possibilita identificar se um indivíduo é considerado foragido da justiça ou possui pendências de captura ativas. As peças disponíveis para visualização frequentemente expõem dados de qualificação civil ricos, como número de CPF, RG, filiação e naturalidade."
              },
              {
                "nome": "Cadastro Nacional de Condenações Cíveis (CNCIAI) - CNJ",
                "url": "https://www.cnj.jus.br/improbidade_adm/consultar_requerido.php",
                "uso": "Consulta consolidada de condenações cíveis por atos de improbidade administrativa e sanções de inelegibilidade aplicadas no Brasil.",
                "aplicacao": "Permite constatar de forma rápida e centralizada se o alvo foi penalizado com a suspensão de direitos políticos, perda de cargo público ou proibição de contratar com o Poder Público. Atua como fonte primária para auditorias de background check e due diligence."
              }
            ]
          },
          {
            "titulo": "Camada 3: Emissão de Certidões e Regularidade Institucional",
            "conceito": "Consulta em sistemas regionais e de tribunais superiores para a verificação direta de regularidade judicial, trabalhista e eleitoral.",
            "comoFunciona": "Emissão de certidões eletrônicas ('Nada Consta') e verificação de vínculos partidários oficiais junto ao Tribunal Superior Eleitoral e instâncias da Justiça.",
            "utilidadeOsint": "A emissão de certidões atua como um validador de alta confiabilidade para o analista, confirmando a existência de passivos ocultos, execuções ativas ou indicando o alinhamento ideológico/político de agentes e empresários.",
            "ferramentas": [
              {
                "nome": "Certidão de Débitos Trabalhistas (TST - CNDT)",
                "url": "https://www.tst.jus.br/certidao1",
                "uso": "Emissão e validação de Certidão Negativa de Débitos Trabalhistas (CNDT) para verificação de inadimplência e execuções na Justiça do Trabalho.",
                "aplicacao": "A constatação de uma certidão positiva funciona como um indicador técnico de alta fidelidade sobre a existência de passivos jurídicos sufocantes, insolvência iminente e tentativas latentes de ocultação de patrimônio."
              },
              {
                "nome": "Certidão de Filiação Partidária - TSE (Filia Consulta)",
                "url": "https://filia-consulta.tse.jus.br/#/principal/certidao-gerar",
                "uso": "Emissão e validação de Certidão de Filiação Partidária para identificação de vínculos políticos, partidários e ideológicos de pessoas físicas.",
                "aplicacao": "A ferramenta permite mapear o posicionamento ideológico formal de um alvo, descobrir seu envolvimento com partidos políticos e identificar possíveis conflitos de interesse, sendo vital no levantamento de Pessoas Politicamente Expostas (PEPs)."
              }
            ]
          }
        ]
      },
      {
        "num": "04",
        "nome": "Inteligência Patrimonial & Bens",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "CPF ➔ Matrículas Rurais e Urbanas / Frota de Veículos / Aviões / Iates / Áreas Desmatadas",
        "objetivo": "Rastrear a evolução patrimonial e identificar a ocultação de riquezas e lavagem de dinheiro, focando em ativos móveis de luxo e registros fundiários.",
        "camadas": [
          {
            "titulo": "Camada 1: Ativos Logísticos e de Alto Valor (VATINT)",
            "conceito": "Acesso a agências reguladoras (ANAC, ANTAQ, DETRANs) para identificar a propriedade de veículos terrestres, aquaviários e aeroespaciais.",
            "comoFunciona": "Consultas em bases estatais ou integradores privados usando identificadores civis (CPF) para retornar matrículas de aviões, embarcações ou registros veiculares.",
            "utilidadeOsint": "Fundamental para auditar o perfil financeiro do alvo, identificar laranjas e comprovar a ocultação de ativos móveis de alto poder aquisitivo não declarados.",
            "ferramentas": [
              {
                "nome": "Pesquisar CNPA - ANAC",
                "url": "https://sistemas.anac.gov.br/CNPA/PesquisarCnpa",
                "uso": "Consulta e emissão de Certidão Negativa de Propriedade de Aeronaves (CNPA) para pessoas físicas e jurídicas.",
                "aplicacao": "Atua como um indexador reverso de ativos de luxo e infraestrutura de alta relevância. Revela aviões ou helicópteros registrados em nome do investigado ou de suas empresas controladas, gerando insumos essenciais (prefixos) para a quebra de blindagens patrimoniais."
              },
              {
                "nome": "Consulta de Embarcações - ANTAQ",
                "url": "https://web3.antaq.gov.br/SAMA/Embarcacao/Consultar.aspx",
                "uso": "Consulta e validação cadastral de embarcações, proprietários e operadores no setor aquaviário brasileiro.",
                "aplicacao": "Viabiliza o mapeamento de um ativo móvel (embarcação) para o seu operador ou armador legal. Permite identificar a ocultação de patrimônio de alto valor por meio de subsidiárias ou laranjas no setor de navegação."
              },
              {
                "nome": "Portal KePlaca",
                "url": "https://www.keplaca.com/",
                "uso": "Consulta de dados cadastrais, procedência geográfica e especificações técnicas de veículos nacionais através da placa.",
                "aplicacao": "Permite correlacionar de forma ágil uma placa avistada ou documentada em redes sociais à sua real especificação de fábrica, auxiliando na detecção de clonagens e no levantamento da base geográfica original do veículo."
              },
              {
                "nome": "Lupa Veicular",
                "url": "https://www.lupaveicular.com/",
                "uso": "Consulta e levantamento de histórico veicular, débitos, restrições e análise de tipo de propriedade por meio da placa ou chassi.",
                "aplicacao": "Viabiliza o rastreio da procedência de ativos, identificação de restrições judiciais ou gravames (como alienação fiduciária) e a diferenciação do perfil de propriedade, otimizando o cruzamento de vínculos patrimoniais."
              }
            ]
          },
          {
            "titulo": "Camada 2: Rastreamento e Telemetria de Ativos",
            "conceito": "Uso de plataformas de Inteligência Geoespacial (GEOINT) focadas no monitoramento global em tempo real e histórico de embarcações e aeronaves.",
            "comoFunciona": "A partir das matrículas (prefixos de aeronaves ou números IMO de navios) obtidas na subfase de registro, o investigador rastreia rotas de transporte via sinais AIS e ADS-B.",
            "utilidadeOsint": "Permite documentar deslocamentos de luxo, estabelecer linhas do tempo geográficas precisas e validar álibis, cruzando a propriedade do ativo com as viagens reais do investigado.",
            "ferramentas": [
              {
                "nome": "Flightradar24",
                "url": "https://www.flightradar24.com/",
                "uso": "Rastreamento global de voos em tempo real e telemetria de aeronaves (ADS-B).",
                "aplicacao": "Utilizado para monitorar o deslocamento de ativos físicos e frotas. O analista pode rastrear padrões de viagem de jatos executivos, identificar reuniões e documentar de forma crível a movimentação e localização associada a um alvo VIP."
              },
              {
                "nome": "MarineTraffic",
                "url": "https://www.marinetraffic.com/",
                "uso": "Plataforma de inteligência marítima que rastreia em tempo real o posicionamento e rotas de embarcações via sinais AIS.",
                "aplicacao": "Possibilita investigar a movimentação de iates de luxo ligados a alvos de colarinho branco, auditar o tráfego em zonas de interesse e estabelecer linhas do tempo geográficas a partir de atracamentos de embarcações suspeitas."
              }
            ]
          },
          {
            "titulo": "Camada 3: Cartografia e Matrículas de Imóveis",
            "conceito": "Busca consolidada em centrais notariais e repositórios federais para propriedades rurais e urbanas.",
            "comoFunciona": "Os portais processam o CPF para buscar registros eletrônicos de matrículas de imóveis ou mapas poligonais georreferenciados cadastrados em autarquias governamentais.",
            "utilidadeOsint": "Fornece subsídios cartográficos e judiciais que apontam a exata dimensão das propriedades imobiliárias do alvo e eventuais restrições sobre a terra (GEOINT).",
            "ferramentas": [
              {
                "nome": "Registradores - ONR",
                "url": "https://registradores.onr.org.br/",
                "uso": "Centralização de consultas a matrículas, pesquisa de bens e certidões digitais em cartórios de registro de imóveis do Brasil.",
                "aplicacao": "A partir de um CPF, o analista pode mapear propriedades imobiliárias registradas em nome do alvo, identificar transações na matrícula e rastrear gravames, como penhoras judiciais, caracterizando ocultação de bens urbanos."
              },
              {
                "nome": "Mapa do Registro de Imóveis do Brasil",
                "url": "https://www.registrodeimoveis.org.br/mapa",
                "uso": "Mapeamento georreferenciado, localização de perímetros e identificação de circunscrições imobiliárias no Brasil.",
                "aplicacao": "A partir de coordenadas geográficas ou endereços, o analista consegue identificar com precisão técnica qual cartório específico é competente por aquele polígono, facilitando a requisição posterior de matrículas da área investigada."
              },
              {
                "nome": "SIGEF - Consulta de Parcelas (INCRA)",
                "url": "https://sigef.incra.gov.br/consultar/parcelas/",
                "uso": "Consulta pública de parcelas de imóveis rurais certificados, dados de georreferenciamento e malha fundiária.",
                "aplicacao": "Possibilita cruzar informações físicas da terra com dados cadastrais de proprietários de agronegócios. O analista pode extrair polígonos de demarcação (arquivos KML) e identificar sobreposições ilegais em áreas protegidas ou da União."
              },
              {
                "nome": "SNCR - Sistema Nacional de Cadastro Rural (Consulta Pública)",
                "url": "https://sncr.serpro.gov.br/sncr-web/consultaPublica.jsf",
                "uso": "Consulta pública de dados cadastrais de imóveis rurais e validação do Certificado de Cadastro de Imóvel Rural (CCIR).",
                "aplicacao": "Funciona como uma fonte primária para correlacionar propriedades rurais a pessoas físicas, confirmar a regularidade cadastral de glebas e estabelecer vínculos territoriais cruciais para o mapeamento de ativos ocultos."
              }
            ]
          }
        ]
      },
      {
        "num": "05",
        "nome": "Histórico Financeiro, Dívidas & Fiscal",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "CPF ➔ Títulos Protestados / Dívida Ativa / Relacionamentos Bancários / Ações Trabalhistas",
        "objetivo": "Auditar a saúde financeira (Score), passivos sufocantes, calotes generalizados no mercado e descobrir se o indivíduo oculta contas bancárias de difícil rastreio.",
        "camadas": [
          {
            "titulo": "Camada 1: Inadimplência Notarial e Trabalhista",
            "conceito": "Sistemas unificados de proteção de crédito e devedores estatais para levantar litígios financeiros e trabalhistas.",
            "comoFunciona": "O analista interroga as centrais de cartórios e tribunais trabalhistas para listar títulos protestados e sentenças condenatórias não pagas.",
            "utilidadeOsint": "Revela dívidas julgadas e não pagas a ex-funcionários e credores, atuando como um alerta de insolvência severo.",
            "ferramentas": [
              {
                "nome": "Central Nacional de Serviços Compartilhados dos Protestos (Pesquisa Protesto)",
                "url": "https://www.pesquisaprotesto.com.br/",
                "uso": "Consulta nacionalizada de protestos em cartórios de títulos vinculada a CPFs ou CNPJs.",
                "aplicacao": "Levanta de forma gratuita em âmbito nacional se o alvo possui dívidas abertas protestadas. Permite corroborar situações de insolvência ou disputas financeiras de alvos sob análise."
              },
              {
                "nome": "Certidão de Débitos Trabalhistas (TST - CNDT)",
                "url": "https://www.tst.jus.br/certidao1",
                "uso": "Emissão e validação de Certidão Negativa de Débitos Trabalhistas (CNDT) para verificação de inadimplência e execuções na Justiça do Trabalho.",
                "aplicacao": "A constatação de uma certidão positiva ou a inserção do alvo no BNDT funciona como um indicador técnico de alta fidelidade sobre a existência de passivos jurídicos sufocantes e insolvência iminente."
              }
            ]
          },
          {
            "titulo": "Camada 2: Conformidade Fiscal e Dívida Ativa",
            "conceito": "Auditoria de regularidade perante a Receita Federal e a Procuradoria-Geral da Fazenda Nacional para mapear o passivo fiscal e calotes estatais.",
            "comoFunciona": "Consulta aos portais de regularização e repositórios de dados abertos do governo para emitir certidões de débitos e identificar inscrições em Dívida Ativa da União.",
            "utilidadeOsint": "Revela grandes calotes de impostos, execuções fiscais em andamento e permite inferir a saúde financeira e a regularidade do alvo perante o Estado.",
            "ferramentas": [
              {
                "nome": "REGULARIZE (Procuradoria-Geral da Fazenda Nacional - PGFN)",
                "url": "https://www.regularize.pgfn.gov.br/",
                "uso": "Consulta, negociação e acompanhamento de débitos inscritos em Dívida Ativa da União e do FGTS.",
                "aplicacao": "A identificação de inscrições em dívida ativa permite rastrear o histórico de inadimplência fiscal com o Estado e mensurar o passivo financeiro acumulado pelo alvo."
              },
              {
                "nome": "Consultas de Certidão PGFN/RFB (Pessoa Física)",
                "url": "https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/EmitirPGFN",
                "uso": "Emissão de Certidão Negativa de Débitos (CND) relativos a Créditos Tributários Federais e à Dívida Ativa da União.",
                "aplicacao": "A emissão bem-sucedida ou a rejeição da certidão serve como um indicativo técnico de alta confiabilidade sobre a existência de execuções fiscais, insolvência e litígios financeiros volumosos contra o Estado."
              },
              {
                "nome": "Dados Abertos da Dívida Ativa da União (PGFN)",
                "url": "https://www.gov.br/pgfn/pt-br/assuntos/divida-ativa-da-uniao/transparencia-fiscal-1/copy_of_dados-abertos",
                "uso": "Consulta e extração de dados abertos sobre devedores e débitos inscritos na Dívida Ativa da União e do FGTS.",
                "aplicacao": "Permite ao analista de inteligência identificar passivos financeiros massivos de forma passiva, baixar bases completas para rastrear situações de insolvência ou fraude fiscal e cruzar com outras ferramentas locais."
              },
              {
                "nome": "Consulta de Restituição IRPF - Receita Federal",
                "url": "https://www.restituicao.receita.fazenda.gov.br/#/",
                "uso": "Consulta da situação de restituição do Imposto de Renda de Pessoa Física (IRPF) e status de processamento da declaração anual.",
                "aplicacao": "Permite inferir a saúde financeira do alvo, confirmando indiretamente o envio de declarações de bens e identificando potenciais inconsistências se a declaração constar 'Com pendências' na Malha Fina."
              }
            ]
          },
          {
            "titulo": "Camada 3: Inteligência Financeira Direta (FININT)",
            "conceito": "Verificação em sistemas centrais do Banco Central do Brasil e bureaus de crédito para deduzir relações econômicas abertas.",
            "comoFunciona": "Cruza o CPF em interfaces de análise de crédito e portais do BACEN para identificar contas bancárias, chaves de transferência, fundos esquecidos e score mercantil.",
            "utilidadeOsint": "Excepcional para descobrir relacionamentos bancários inativos ou não declarados, rastrear a origem/destino de fundos e avaliar o risco financeiro imediato do alvo.",
            "ferramentas": [
              {
                "nome": "Sistema de Valores a Receber - SVR (Banco Central do Brasil)",
                "url": "https://valoresareceber.bcb.gov.br/publico",
                "uso": "Consulta pública da existência de fundos esquecidos ou saldos credores em instituições financeiras por CPFs ou CNPJs.",
                "aplicacao": "Com CPF e data de nascimento, permite testar de forma passiva se o alvo possui saldos remanescentes a serem resgatados, servindo como um indicador indireto de contas bancárias ativas ou históricas que podem não ter sido mapeadas."
              },
              {
                "nome": "Registrato (Banco Central do Brasil)",
                "url": "https://www.bcb.gov.br/meubc/registrato",
                "uso": "Consulta de relacionamentos financeiros, chaves PIX, empréstimos, financiamentos e operações de câmbio atreladas a um CPF ou CNPJ.",
                "aplicacao": "Embora exija acesso GOV.BR, o conhecimento dos dados unificados por ele é vital para a inteligência financeira rastrear onde um alvo possui contas ativas, dívidas registradas ou chaves de transferência financeira."
              },
              {
                "nome": "CCFácil",
                "url": "https://ccfacil.com.br/default.aspx",
                "uso": "Consulta consolidada de restrições financeiras, score de crédito, localização cadastral e inteligência societária.",
                "aplicacao": "Interface de bureau de crédito que revela o Score do CPF, dívidas vencidas e protestos. Aviso OPSEC: A realização de pesquisas deixa registros de consulta na base, o que pode alertar o alvo se ele utilizar ferramentas de monitoramento em tempo real."
              }
            ]
          }
        ]
      },
      {
        "num": "06",
        "nome": "Validação Passiva em Serviços & Telecom",
        "opsec": "ativo_indireto",
        "opsecTexto": "🟡 ATIVO INDIRETO / 🟢 PASSIVO",
        "vetor": "CPF ➔ Linhas Telefônicas / Operadoras Associadas / Logins em Plataformas de Consumo",
        "objetivo": "Realizar um mapeamento silencioso do consumo e das linhas móveis do indivíduo. Técnica vital para confirmar hábitos digitais sem alertar diretamente o alvo (OPSEC).",
        "camadas": [
          {
            "titulo": "Camada 1: Mapeamento de Infraestrutura de Telecomunicações",
            "conceito": "Uso de serviços unificados de agências reguladoras e de administradoras de portabilidade para localizar chips e contratos em nome do CPF.",
            "comoFunciona": "O analista pesquisa a base nacional de operadoras para descobrir as empresas prestadoras de serviço atreladas ao documento civil, validando a titularidade e a portabilidade das linhas móveis.",
            "utilidadeOsint": "Identifica o espectro de atuação do alvo no mercado de telecomunicações, expondo possíveis telefones 'frios' (pré-pagos) e preparando o terreno técnico e jurídico para futuras requisições de quebra de sigilo telemático.",
            "ferramentas": [
              {
                "nome": "CadastroPré",
                "url": "https://cadastropre.com.br/",
                "uso": "Consulta unificada da existência de linhas telefônicas móveis pré-pagas vinculadas a um CPF nas prestadoras de telecomunicação do Brasil.",
                "aplicacao": "Permite pesquisar em quais operadoras (Tim, Claro, Vivo, Algar, etc.) o CPF investigado possui linhas telefônicas pré-pagas ativas, descobrindo contas ocultas sob a titularidade do alvo."
              },
              {
                "nome": "Consulta Número - ABR Telecom",
                "url": "https://consultanumero.abrtelecom.com.br/",
                "uso": "Consulta de operadora de telefonia (fixa ou móvel) e verificação do histórico de portabilidade numérica no Brasil.",
                "aplicacao": "Identifica com precisão a qual operadora de telecomunicações o terminal pertence no momento da consulta, informando se o número passou por portabilidade recente, essencial para o direcionamento de ofícios judiciais."
              },
              {
                "nome": "Qual Operadora",
                "url": "https://www.qualoperadora.net/",
                "uso": "Consulta e identificação de operadora de telefonia e status de portabilidade para números fixos e móveis no Brasil.",
                "aplicacao": "Confirma a qual empresa pertence o número telefônico localizado e identifica o estado (UF) e a região geográfica associada ao código de área (DDD)."
              },
              {
                "nome": "ConsultaOperadora.com.br",
                "url": "http://consultaoperadora.com.br/",
                "uso": "Identificação da operadora de telefonia e verificação do status de portabilidade de terminais.",
                "aplicacao": "Recurso de triagem rápida com menos barreiras de segurança visual (CAPTCHAs complexos) que os portais institucionais, mapeando a infraestrutura primária de telecomunicações associada ao investigado."
              }
            ]
          },
          {
            "titulo": "Camada 2: Extração via Fluxos de Recuperação de Senhas (E-commerces e Telecom)",
            "conceito": "Tática onde o analista insere o CPF nas páginas de 'Esqueci minha senha' de grandes e-commerces e provedores, forçando o sistema a confirmar se o alvo é cliente e/ou mascarar trechos de e-mails e celulares na tela.",
            "comoFunciona": "O sistema processa o CPF antes de mandar qualquer alerta ao titular. Se a tela mudar de 'Usuário Inexistente' para 'Como você quer receber seu código?', prova-se que o CPF possui histórico ativo no varejo.",
            "utilidadeOsint": "Viabiliza a validação passiva de vínculos institucionais e a existência de contas ativas do alvo. Checa histórico de consumo de varejo massivo e expõe fragmentos do e-mail pessoal ou do final do telefone do investigado para cruzamento de dados.",
            "ferramentas": [
              {
                "nome": "Reclame Aqui (Recuperação de Senha)",
                "url": "https://www.reclameaqui.com.br/esqueci-minha-senha/",
                "uso": "Validação da existência e do status de contas associadas a CPFs via mecanismo de recuperação de credenciais.",
                "aplicacao": "Valida se o usuário é um consumidor ativo online. Ao inserir o CPF, a interface confirma a existência do cadastro, fornecendo indícios sobre seus hábitos digitais sem notificá-lo."
              },
              {
                "nome": "Recuperação de Senha - Casas Bahia",
                "url": "https://cliente.casasbahia.com.br/recuperacao/esqueci-senha",
                "uso": "Validação da existência de contas e vínculo de CPF a partir de fluxos de recuperação de senha.",
                "aplicacao": "Checa o histórico de consumo de varejo massivo. Permite verificar o vínculo comercial de um CPF sem gerar notificações por SMS ou e-mails de tentativa de invasão para o alvo."
              },
              {
                "nome": "Recuperação de Senha - Extra Hipermercados",
                "url": "https://cliente.extra.com.br/recuperacao/esqueci-senha",
                "uso": "Validação da existência de contas e vínculo de CPF a partir de fluxos de recuperação de senha.",
                "aplicacao": "Ideal para compor rotinas de pivoting e enriquecimento de perfis, validando passivamente que o investigado realiza compras online na rede do grupo empresarial."
              },
              {
                "nome": "Recuperação de Senha - Magazine Luiza",
                "url": "https://sacola.magazineluiza.com.br/n#/recuperar-senha",
                "uso": "Validação da existência de contas e vínculo de CPF a partir de fluxos de recuperação de senha da plataforma Magazine Luiza.",
                "aplicacao": "Opera com o mesmo mecanismo de validação passiva para certificar a presença digital e comercial do investigado sem levantar suspeitas."
              },
              {
                "nome": "Recuperação de Senha - Claro",
                "url": "https://cadastro.claro.com.br/recuperar-senha",
                "uso": "Validação da existência de contas e vínculo de CPF a partir de fluxos de recuperação de senha da operadora Claro.",
                "aplicacao": "Confirma de imediato o vínculo do CPF a serviços residenciais ou móveis de telecomunicação na Claro, auxiliando no direcionamento de investigações telefônicas."
              },
              {
                "nome": "Tela de Recuperação de Senha - Vivo (Meu Vivo)",
                "url": "https://mvfront.vivo.com.br/password-recovery#/welcome-vivo/recover-password",
                "uso": "Validação de existência de contas e cruzamento de identificadores (CPF, telefone ou e-mail) atrelados à operadora Vivo.",
                "aplicacao": "Permite determinar passivamente se o CPF está ativamente associado a um cliente da Vivo por meio da observação das mensagens de erro ou de redefinição da interface."
              }
            ]
          },
          {
            "titulo": "Camada 3: Validação em Plataformas Financeiras e Governamentais",
            "conceito": "Exploração dos fluxos de recuperação de senha em gateways de pagamento e portais municipais para inferir a atuação financeira e vínculos geográficos do alvo.",
            "comoFunciona": "Aplica-se a técnica de redefinição de acesso em sistemas de fintechs ou prefeituras. O avanço do formulário comprova que o indivíduo movimentou fundos na ferramenta ou é registrado administrativamente na região.",
            "utilidadeOsint": "Fundamental para investigações de fraudes e rastreio financeiro. Comprova o uso de carteiras digitais específicas ou aponta que o alvo possui operações formalizadas em determinado município.",
            "ferramentas": [
              {
                "nome": "PagSeguro (Tela de Acesso / Recuperação)",
                "url": "https://acesso.pagseguro.uol.com.br/",
                "uso": "Validação de identidades e CPFs através do mecanismo de recuperação de contas (pivoting) do PagBank.",
                "aplicacao": "Ao inserir um dado conhecido na área de recuperação de conta, o investigador pode constatar a existência da conta financeira ou obter fragmentos ofuscados do e-mail e telefone utilizados na carteira digital."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "dominio",
    "categoria": "infraestrutura",
    "icone": "🌐",
    "titulo": "Investigação de Domínios (CYBINT)",
    "subtitulo": "// Roteiro metodológico para mapeamento de infraestrutura, enumeração, análise de ameaças e preservação de registros web.",

    "imagem": "../img/trilha-dominio.png",

    "modulos": [
      {
        "num": "01",
        "nome": "Atribuição & Dados Cadastrais",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Domínio ➔ Titular (Proprietário) / CNPJ ou CPF / E-mail de Registro / Histórico de WHOIS",
        "objetivo": "Descobrir quem registrou o domínio, levantar dados de contato oficiais da entidade e revelar o histórico oculto do proprietário antes da aplicação de proteções de privacidade (como a LGPD e GDPR).",
        "camadas": [
          {
            "titulo": "Camada 1: Extração Direta de WHOIS",
            "conceito": "Consulta ao protocolo WHOIS para extrair a 'certidão de nascimento' do domínio, revelando datas de criação, validade, registradores e o contato técnico.",
            "comoFunciona": "A plataforma interroga as bases dos registradores para extrair de forma passiva os metadados de registro e a qualificação do proprietário do ativo digital.",
            "utilidadeOsint": "É o primeiro passo para a atribuição de autoria. Em domínios nacionais, frequentemente expõe o CNPJ ou CPF do titular, permitindo a transição imediata (pivoting) para investigações societárias e patrimoniais.",
            "ferramentas": [
              {
                "nome": "Registro.br WHOIS",
                "url": "https://registro.br/tecnologia/ferramentas/whois/",
                "uso": "Consulta oficial de dados de registro e propriedade de domínios com a extensão '.br'.",
                "aplicacao": "Atua como uma fonte de dados primária e oficial para o território brasileiro. Diferente de registradores internacionais, frequentemente exibe o CNPJ de empresas titulares e o nome completo do contato técnico/administrador, viabilizando o cruzamento direto de dados com a Receita Federal ou Juntas Comerciais."
              },
              {
                "nome": "DomainTools WHOIS",
                "url": "https://whois.domaintools.com/",
                "uso": "Investigação técnica, mapeamento e histórico de registros de nomes de domínio e propriedades IP.",
                "aplicacao": "Plataforma avançada que centraliza dados de WHOIS. Ela possibilita desvendar redes de sites falsos, identificar os responsáveis legais por infraestruturas maliciosas ou ligar múltiplos domínios web a uma mesma entidade através do pivoting técnico."
              }
            ]
          },
          {
            "titulo": "Camada 2: WHOIS Reverso e Histórico",
            "conceito": "Pesquisa invertida. Em vez de perguntar 'De quem é este site?', o analista insere um e-mail, nome de empresa ou proprietário e o sistema lista todos os domínios registrados por aquela entidade globalmente.",
            "comoFunciona": "Buscas em repositórios massivos que armazenam logs antigos de WHOIS e permitem indexação reversa por parâmetros textuais, revelando propriedades conectadas ao critério inserido.",
            "utilidadeOsint": "Viabiliza o mapeamento completo de infraestruturas associadas a um alvo, permitindo descobrir redes de sites de phishing geridas pelo mesmo ator, campanhas de desinformação ou portfólios ocultos de propriedades digitais.",
            "ferramentas": [
              {
                "nome": "WhoisFreaks Reverse WHOIS Search",
                "url": "https://whoisfreaks.com/tools/whois/reverse/search",
                "uso": "Pivoting técnico através de busca reversa de WHOIS por nome, e-mail ou empresa.",
                "aplicacao": "Permite que o investigador insira um termo conhecido (como o nome de um proprietário, um endereço de e-mail corporativo ou a razão social de uma empresa) para descobrir todos os nomes de domínio atualmente ou anteriormente vinculados àquele identificador."
              },
              {
                "nome": "Whoxy",
                "url": "https://www.whoxy.com/",
                "uso": "Consulta massiva de histórico WHOIS, buscas reversas de domínios e monitoramento de registros de propriedades digitais.",
                "aplicacao": "Fornece um banco de dados robusto de registros internacionais. É extremamente valioso em casos onde o alvo utilizou proteção de privacidade recente no WHOIS, já que o banco de dados histórico do Whoxy pode revelar os dados reais que foram inseridos no momento do primeiro registro do domínio."
              },
              {
                "nome": "Reverse WHOIS - WhoisXMLAPI",
                "url": "https://reverse-whois.whoisxmlapi.com",
                "uso": "Busca reversa de domínios na internet com base em termos textuais, nomes de proprietários, e-mails ou corporações contidos nos registros WHOIS.",
                "aplicacao": "Viabiliza a identificação de redes inteiras de sites fraudulentos operados pelo mesmo ator de ameaça, descobre propriedades digitais ocultas de uma empresa alvo ou correlaciona e-mails de contato a domínios registrados globalmente. Suporta modificadores de busca e operadores lógicos (AND, OR, NOT) para refinar os resultados e eliminar falsos positivos."
              }
            ]
          },
          {
            "titulo": "Camada 3: Infraestrutura Oculta e Domínios Onion",
            "conceito": "Pesquisa de histórico e titularidade de propriedades web alocadas fora da superfície da internet, operando em redes descentralizadas.",
            "comoFunciona": "O indexador analisa metadados estruturais, cabeçalhos técnicos e referências históricas de sites da Dark Web para gerar um banco de dados similar ao WHOIS convencional.",
            "utilidadeOsint": "Essencial para contornar a falta de um sistema unificado de registros na Dark Web, permitindo descobrir espelhamentos e conexões entre diferentes domínios anônimos de um mesmo agente.",
            "ferramentas": [
              {
                "nome": "TorWhois",
                "url": "https://torwhois.com/",
                "uso": "Mecanismo de busca e indexação de dados cadastrais WHOIS históricos e registros de domínios ocultos da rede Tor (.onion).",
                "aplicacao": "Permite realizar pesquisas reversas e cruzamento de dados de infraestrutura. A partir de um termo de interesse, nome de organização ou endereço .onion específico, a ferramenta auxilia na identificação de conexões ocultas e rastreamento de páginas espelho (mirrors) de mercados clandestinos e repositórios de vazamentos."
              }
            ]
          }
        ]
      },
      {
        "num": "02",
        "nome": "Mapeamento de Infraestrutura (DNS/IP)",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Domínio ➔ Registros DNS (A, MX, TXT) / Endereço IP / Provedor de Hospedagem / ASN",
        "objetivo": "Desvendar a arquitetura física e lógica que sustenta o site. O intuito é localizar onde os servidores estão hospedados, quais ferramentas corporativas são utilizadas e descobrir outros ativos na mesma sub-rede.",
        "camadas": [
          {
            "titulo": "Camada 1: Dissecação de Registros DNS",
            "conceito": "Consultas aos servidores de DNS para descobrir os apontamentos do domínio. O registro A aponta para o IP, o registro MX aponta para o servidor de e-mail e o registro TXT revela chaves de validação de serviços de terceiros.",
            "comoFunciona": "A plataforma interroga os servidores de nomes (Name Servers) públicos para extrair tabelas de roteamento lógico sem alertar o alvo investigado.",
            "utilidadeOsint": "Permite auditar se a empresa usa infraestruturas terceirizadas (como Google Workspace ou Microsoft 365 via MX), descobrir o verdadeiro IP do servidor e identificar chaves ocultas vinculadas ao domínio.",
            "ferramentas": [
              {
                "nome": "nslookup.io",
                "url": "https://www.nslookup.io/",
                "uso": "Consulta e mapeamento de registros de DNS, servidores de e-mail e propriedades de infraestrutura web.",
                "aplicacao": "Realiza a extração de registros (A, MX, TXT) com interface gráfica limpa. Por realizar as requisições a partir de seus próprios servidores na nuvem, o nslookup.io impede que o endereço IP real do analista seja registrado nos logs dos servidores do domínio sob investigação."
              },
              {
                "nome": "Google Public DNS",
                "url": "https://dns.google",
                "uso": "Consulta e resolução de registros DNS (A, AAAA, MX, TXT, PTR), mapeamento de apontamentos lógicos e auditoria de infraestrutura de rede.",
                "aplicacao": "As requisições aos servidores autoritativos do alvo são intermediadas pela infraestrutura da Google, mascarando a origem do investigador e revelando apontamentos DNS de maneira limpa."
              },
              {
                "nome": "ViewDNS.info",
                "url": "https://viewdns.info/",
                "uso": "Agrupamento de ferramentas de consulta de DNS, histórico de WHOIS e engenharia reversa de infraestrutura de rede.",
                "aplicacao": "Canivete suíço web que centraliza busca de histórico de IP e Reverse IP Lookup. É altamente eficaz para cenários onde um site de phishing ou fraude está hospedado em um servidor menor, ajudando a expor outras páginas possivelmente controladas pela mesma organização."
              },
              {
                "nome": "MXToolbox SuperTool",
                "url": "https://mxtoolbox.com/SuperTool.aspx",
                "uso": "Consulta e auditoria técnica de registros DNS, servidores de correio eletrônico e reputação de rede.",
                "aplicacao": "Permite mapear a arquitetura de servidores de e-mail de um alvo, identificar prestadores de serviços terceirizados (através de registros SPF/TXT) e auditar o histórico de reputação de IPs sem interagir diretamente com a infraestrutura do investigado."
              }
            ]
          },
          {
            "titulo": "Camada 2: Topologia, Hospedagem e BGP",
            "conceito": "Mapeamento de Sistemas Autônomos (ASN), roteamento e histórico de hospedagem (hosting).",
            "comoFunciona": "A partir do IP descoberto na fase DNS, o analista consulta indexadores de rede globais para mapear o ASN e o provedor físico que hospeda os dados.",
            "utilidadeOsint": "Fundamental para enviar ordens judiciais de quebra de sigilo aos provedores corretos, mapear sub-redes inteiras operadas por criminosos e rastrear históricos de migração de servidores.",
            "ferramentas": [
              {
                "nome": "Hurricane Electric BGP Toolkit",
                "url": "https://bgp.he.net",
                "uso": "Análise de roteamento BGP, identificação de Sistemas Autônomos (ASN), prefixos de IP e mapeamento técnico de infraestrutura de rede.",
                "aplicacao": "Excelente para descobrir a qual ASN o IP pertence, permitindo mapear todos os prefixos de IP do alvo e descobrir ativos ocultos na mesma sub-rede."
              },
              {
                "nome": "Netcraft Site Report",
                "url": "https://sitereport.netcraft.com/",
                "uso": "Coleta passiva de dados de infraestrutura, histórico de hospedagem, certificados SSL/TLS e tecnologias de servidores de domínios web.",
                "aplicacao": "Mapeia o histórico do provedor de hospedagem, revelando quem realmente hospeda a página física e quando o site migrou para serviços de proteção contra DDoS (como a Cloudflare)."
              },
              {
                "nome": "WhoIsHostingThis?",
                "url": "https://www.whoishostingthis.com/",
                "uso": "Identificação rápida do provedor de hospedagem e servidor web por trás de um nome de domínio.",
                "aplicacao": "Fornece os subsídios necessários para descobrir os canais adequados para denúncias de abuso (abuse desk) em casos de campanhas fraudulentas ou páginas clonadas."
              },
              {
                "nome": "ip-api",
                "url": "https://ip-api.com/",
                "uso": "Resolução técnica, enriquecimento de dados e geolocalização cadastral de endereços IPv4 e IPv6.",
                "aplicacao": "Fornece de forma imediata o ISP (provedor), o ASN e a geolocalização cadastral da infraestrutura, discernindo se um tráfego provém de um provedor residencial ou de um data center comercial."
              }
            ]
          },
          {
            "titulo": "Camada 3: Motores de Busca Cibernética e Dispositivos Conectados",
            "conceito": "Mapeamento ativo/passivo da superfície de ataque por meio de indexadores globais de dispositivos conectados à internet.",
            "comoFunciona": "Plataformas varrem o espaço IPv4/IPv6 lendo banners e portas abertas para catalogar dispositivos, servidores e vulnerabilidades publicamente acessíveis.",
            "utilidadeOsint": "Permite encontrar servidores de Comando e Controle (C2), painéis administrativos desprotegidos e propriedades correlatas ao domínio investigado através da impressão digital de certificados ou banners de rede.",
            "ferramentas": [
              {
                "nome": "Shodan",
                "url": "https://shodan.io",
                "uso": "Mapeamento de infraestrutura, descoberta de dispositivos conectados à internet, servidores, portas abertas e vulnerabilidades expostas.",
                "aplicacao": "A partir de um endereço IP ou bloco CIDR mapeado anteriormente, o analista descobre portas abertas e sistemas em execução no servidor do alvo sem interagir diretamente com ele, preservando a OPSEC."
              },
              {
                "nome": "Censys Search",
                "url": "https://search.censys.io",
                "uso": "Busca, indexação e mapeamento de hosts, certificados SSL/TLS e exposição de infraestrutura de rede global.",
                "aplicacao": "Fundamental para a Inteligência de Infraestrutura (CYBINT). Viabiliza a correlação de servidores ocultos através de impressões digitais de certificados SSL compartilhados, burlando proteções de proxy reverso."
              }
            ]
          }
        ]
      },
      {
        "num": "03",
        "nome": "Enumeração de Subdomínios & SSL",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Domínio ➔ Certificados SSL/TLS / Subdomínios Internos / Servidores de Homologação",
        "objetivo": "Mapear a superfície completa de ataque ou de atuação web da empresa, revelando aplicações corporativas ocultas (ex: intranet.alvo.com) ou painéis de administração não indexados pelo Google.",
        "camadas": [
          {
            "titulo": "Camada 1: Logs de Transparência de Certificados (CT Logs)",
            "conceito": "Sempre que um certificado HTTPS (SSL/TLS) é emitido, ele é publicamente registrado. A varredura desses logs revela os nomes de subdomínios exatos atrelados ao certificado criptográfico principal.",
            "comoFunciona": "O analista interroga bases de CT Logs que arquivam passivamente a emissão de certificados, retornando listas de subdomínios legítimos associados à organização investigada.",
            "utilidadeOsint": "Permite descobrir ambientes de desenvolvimento, servidores de homologação (staging) e painéis administrativos que utilizam criptografia legítima, mas que tentam permanecer ocultos dos motores de busca comuns.",
            "ferramentas": [
              {
                "nome": "crt.sh",
                "url": "https://crt.sh/",
                "uso": "Mapeamento passivo de subdomínios e consulta a registros de Transparência de Certificados (Certificate Transparency).",
                "aplicacao": "Motor de busca que indexa os logs de CT. Permite mapear extensivamente a superfície de subdomínios de um alvo extraindo imediatamente ambientes ocultos (como dev.alvo.com) sem 'tocar' de forma ativa nos servidores da organização, preservando a OPSEC."
              },
              {
                "nome": "Censys Search",
                "url": "https://search.censys.io",
                "uso": "Busca, indexação e mapeamento de hosts, certificados SSL/TLS e exposição de infraestrutura de rede global.",
                "aplicacao": "Base de inteligência de infraestrutura extremamente poderosa. Viabiliza a correlação de servidores e serviços ocultos pertencentes ao mesmo alvo através de impressões digitais de certificados SSL/TLS criptográficos, mapeando ativamente as portas de serviço atreladas a eles."
              }
            ]
          },
          {
            "titulo": "Camada 2: Scanners Massivos de Internet e Ativos",
            "conceito": "Motores de busca que varrem o espaço IPv4 e IPv6 global constantemente para indexar tudo que responde na web.",
            "comoFunciona": "Essas plataformas catalogam respostas de banners e resoluções DNS em massa, permitindo ao analista buscar por registros associados ao domínio sem tocar diretamente na infraestrutura viva.",
            "utilidadeOsint": "Fundamental para encontrar servidores mal configurados, painéis de login expostos e subdomínios esquecidos que compõem a superfície digital estendida da empresa.",
            "ferramentas": [
              {
                "nome": "Netlas.io",
                "url": "https://app.netlas.io",
                "uso": "Mapeamento de infraestrutura de rede, coleta de dados técnicos de domínios, IPs e certificados SSL/TLS.",
                "aplicacao": "Plataforma global que cataloga certificados SSL, registros DNS e respostas web. Viabiliza o cruzamento de metadados técnicos para listar os subdomínios esquecidos ou serviços vulneráveis vinculados à mesma entidade corporativa de forma passiva."
              },
              {
                "nome": "Phonebook.cz",
                "url": "https://phonebook.cz",
                "uso": "Enumeração e extração massiva de e-mails, subdomínios e URLs vinculados a domínios alvos.",
                "aplicacao": "Motor da Intelligence X que varre bilhões de registros arquivados para retornar e-mails, URLs e subdomínios pertencentes ao domínio-alvo. Excelente para rastrear ramificações legadas que foram indexadas no passado."
              },
              {
                "nome": "FOFA (fofa.info)",
                "url": "https://fofa.info",
                "uso": "Mapeamento de ativos de rede, enumeração de subdomínios, descoberta de certificados SSL/TLS e busca por dispositivos expostos.",
                "aplicacao": "Motor de busca de infraestrutura que indexa dispositivos conectados à internet. Possui uma base massiva de indexação asiática que frequentemente revela subdomínios, servidores clones e painéis administrativos que não constam em indexadores ocidentais."
              }
            ]
          },
          {
            "titulo": "Camada 3: Extração de Endpoints e URLs Históricas",
            "conceito": "Coleta massiva e automatizada de URLs históricas, links internos e arquivos hospedados sob o domínio principal e seus subdomínios.",
            "comoFunciona": "Ferramentas extraem hiperlinks do código-fonte renderizado ou consultam repositórios de arquivamento web (como Wayback Machine) para listar as rotas de navegação profundas da aplicação.",
            "utilidadeOsint": "Revela caminhos de API, diretórios legados, arquivos confidenciais expostos (como documentos PDF ou chaves) e a arquitetura lógica da aplicação web, complementando o mapeamento gerado pelos subdomínios.",
            "ferramentas": [
              {
                "nome": "gau (getallurls)",
                "url": "https://github.com/lc/gau",
                "uso": "Extração automatizada de URLs históricas e endpoints conhecidos de um domínio a partir de repositórios públicos.",
                "aplicacao": "Ferramenta de linha de comando (CLI) que realiza consultas em agregadores de dados da internet (Wayback Machine, OTX, URLScan) para descobrir a superfície de exposição digital. Ao usar a flag '--subs', levanta todas as URLs atreladas aos subdomínios do alvo de maneira furtiva."
              },
              {
                "nome": "HackerTarget - Extract Links",
                "url": "https://hackertarget.com/extract-links/",
                "uso": "Extração automatizada de links internos e externos de uma página web para mapeamento de superfícies.",
                "aplicacao": "Utilitário online que analisa o código-fonte de uma URL fornecida para extrair hiperlinks. Permite descobrir subdomínios ocultos linkados na própria página principal, localizar arquivos sensíveis e mapear o ecossistema de relacionamentos do site investigado utilizando a infraestrutura proxy da HackerTarget."
              }
            ]
          }
        ]
      },
      {
        "num": "04",
        "nome": "Inteligência de Ameaças & Reputação (CTI)",
        "opsec": "passivo_ativo_controlado",
        "opsecTexto": "🟢 PASSIVO / 🟡 ATIVO CONTROLADO",
        "vetor": "Domínio / URL ➔ Indicadores de Comprometimento (IoC) / Hashes de Malware / Blacklists",
        "objetivo": "Avaliar se o domínio investigado é legítimo ou se faz parte de uma campanha de fraude, Phishing ou se atua como servidor de Comando e Controle (C2) para a distribuição de Malwares.",
        "camadas": [
          {
            "titulo": "Camada 1: Triagem e Reputação de Segurança",
            "conceito": "Consulta a motores que consolidam relatórios de empresas de antivírus, pesquisadores de segurança e denúncias comunitárias de fraudes.",
            "comoFunciona": "O analista submete o domínio ou URL suspeita a indexadores de segurança e agregadores comunitários que comparam o endereço contra dezenas de listas de bloqueio e bases de inteligência cibernética.",
            "utilidadeOsint": "Permite a identificação imediata se a infraestrutura já foi previamente mapeada como nociva, retornando indicadores técnicos (IoCs) adicionais, como IPs, hashes e famílias de malwares associados.",
            "ferramentas": [
              {
                "nome": "VirusTotal",
                "url": "https://www.virustotal.com",
                "uso": "Análise técnica de ameaças, enriquecimento de infraestrutura e validação cibernética de artefatos.",
                "aplicacao": "Principal agregador de segurança. Analisa o domínio contra dezenas de engines de antivírus e ferramentas de metadados, permitindo rastrear relações históricas, subdomínios correlacionados e apontar se o domínio hospedou arquivos maliciosos ou ferramentas de ataque."
              },
              {
                "nome": "Domain Reputation Check - APIVoid",
                "url": "https://www.apivoid.com/tools/domain-reputation-check",
                "uso": "Verificação de reputação de domínios, detecção de ameaças cibernéticas (CYBINT) e cruzamento de listas de bloqueio (blacklists).",
                "aplicacao": "Cruza a URL contra dezenas de listas de restrição de spam, C2 e malware. A ferramenta destaca a idade do domínio (Domain Age) e seu 'score' de risco, indicativo crítico para desmascarar URLs fraudulentas recém-criadas para campanhas de personificação de marca (typosquatting)."
              },
              {
                "nome": "PhishTank",
                "url": "https://www.phishtank.com",
                "uso": "Identificação, denúncia, validação comunitária e consulta de URLs maliciosas envolvidas em campanhas de engenharia social.",
                "aplicacao": "Plataforma central focada em ataques de phishing. Permite que o investigador verifique instantaneamente se uma URL suspeita identificada em uma investigação já foi confirmada pela comunidade como fraude, garantindo uma validação passiva e segura."
              },
              {
                "nome": "URLhaus (abuse.ch)",
                "url": "https://urlhaus.abuse.ch",
                "uso": "Consulta, monitoramento e extração em lote de URLs e domínios ativos utilizados para a distribuição de malwares e payloads.",
                "aplicacao": "Foca no mapeamento de links que atuam como vetores de infecção. A ferramenta informa o status online/offline da URL suspeita e extrai os hashes dos arquivos contidos na página, vinculando a infraestrutura a famílias de malwares."
              },
              {
                "nome": "ThreatFox (abuse.ch)",
                "url": "https://threatfox.abuse.ch",
                "uso": "Consulta, compartilhamento e download automatizado de Indicadores de Comprometimento (IoCs) de malware.",
                "aplicacao": "Base de Indicadores de Comprometimento que permite ao analista cruzar se o domínio faz parte de redes cibercriminosas, atestando de forma passiva se ele atua como um servidor de Comando e Controle (C2) associado a uma ameaça específica."
              },
              {
                "nome": "AlienVault OTX (Open Threat Exchange)",
                "url": "https://otx.alienvault.com/",
                "uso": "Plataforma Colaborativa de Inteligência de Ameaças, focada na investigação de IoCs e correlação de campanhas.",
                "aplicacao": "Permite inserir o domínio suspeito para mapear retrospectivamente toda a infraestrutura associada através de 'pulses' (relatórios da comunidade), ajudando a correlacionar quais grupos de cibercriminosos (APTs) utilizaram aquele domínio."
              },
              {
                "nome": "Sputnik",
                "url": "https://github.com",
                "uso": "Consulta automatizada e simultânea de reputação de domínios, IPs e URLs em múltiplos motores de inteligência cibernética.",
                "aplicacao": "Utilitário de linha de comando que acelera drasticamente o enriquecimento técnico. Permite disparar consultas automáticas em lote para diversas APIs e motores de reputação (incluindo o VirusTotal e APIVoid), centralizando as respostas no terminal."
              }
            ]
          },
          {
            "titulo": "Camada 2: Análise Comportamental Dinâmica (Sandbox)",
            "conceito": "Abertura da URL maliciosa dentro de um ambiente seguro e virtualizado (na nuvem) que simula o navegador de uma vítima para auditar o que o site tenta fazer.",
            "comoFunciona": "A ferramenta acessa o link de destino de forma automatizada e isolada, gerando um relatório completo com capturas de tela, interceptação de tráfego de rede, conexões de terceiros e ações maliciosas disparadas pelo servidor hospedeiro.",
            "utilidadeOsint": "Excepcional para realizar a engenharia reversa de páginas de phishing ou extrair IPs reais de domínios maliciosos sem que a máquina do próprio investigador precise interagir com a ameaça, garantindo isolamento total do ambiente local.",
            "ferramentas": [
              {
                "nome": "URLScan.io",
                "url": "https://urlscan.io/",
                "uso": "Escaneamento, análise de requisições e detecção de comportamentos suspeitos em websites.",
                "aplicacao": "Funciona como uma sandbox para a web. O serviço visita a URL, tira uma foto da página, salva os IPs de conexão, registra scripts executados e redirecionamentos. Configurando a busca como 'Privada', protege-se a OPSEC para que o alvo não seja alertado da investigação."
              },
              {
                "nome": "Hatching Triage",
                "url": "https://tria.ge/",
                "uso": "Sandbox automatizada na nuvem para análise comportamental e estática de malwares e arquivos/URLs suspeitos.",
                "aplicacao": "Executa a URL em ambientes virtualizados isolados (Windows, Android, Linux), gerando telemetria avançada e monitorando conexões de rede em tempo real sobre tentativas de infecção originadas pelo domínio investigado."
              },
              {
                "nome": "ANY.RUN",
                "url": "https://app.any.run",
                "uso": "Sandbox de análise interativa de links maliciosos e inteligência de ameaças em ambiente isolado na nuvem.",
                "aplicacao": "A plataforma permite que o analista interaja visualmente de forma direta com o sistema operacional virtualizado onde a URL foi aberta, acompanhando ativamente o comportamento da página de fraude, extraindo o tráfego em PCAP e desvendando a real intenção de servidores maliciosos."
              }
            ]
          }
        ]
      },
      {
        "num": "05",
        "nome": "Pivoting Técnico por Rastreadores",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Domínio ➔ Códigos do AdSense / ID do Google Analytics / Hashes de Favicon",
        "objetivo": "Vincular domínios aparentemente desconectados que pertencem à mesma pessoa ou empresa. Muito útil para descobrir redes de sites falsos de um mesmo fraudador operando em massa.",
        "camadas": [
          {
            "titulo": "Camada 1: Scripts Analíticos e de Monetização",
            "conceito": "Quando um criminoso ou desenvolvedor clona um site dezenas de vezes, ele frequentemente esquece de remover ou reaproveita o mesmo código do Google Analytics (ex: UA-XXXXX) ou a mesma chave de monetização em todos eles.",
            "comoFunciona": "Os sistemas rastreiam o código-fonte da página web em busca de identificadores de terceiros, extraindo as strings numéricas usadas para telemetria ou anúncios para, em seguida, correlacioná-las a outros domínios na internet.",
            "utilidadeOsint": "Permite mapear a pegada digital e a infraestrutura associada de forma inequívoca, revelando propriedades digitais adicionais controladas pelo mesmo ator através da reutilização de IDs únicos.",
            "ferramentas": [
              {
                "nome": "BuiltWith",
                "url": "https://builtwith.com",
                "uso": "Identificação de pilhas tecnológicas web, mapeamento de infraestrutura de domínios e pivotagem de ativos digitais por meio de códigos de rastreamento compartilhados.",
                "aplicacao": "O perfilador de tecnologias web definitivo. Sua funcionalidade 'Relationship Profile' encontra todos os outros domínios da internet que utilizam os mesmos IDs de rastreamento do site investigado (como chaves do Google AdSense ou IDs de pixels do Facebook), revelando conexões ocultas de empresas de fachada."
              },
              {
                "nome": "URLScan.io",
                "url": "https://urlscan.io/",
                "uso": "Escaneamento, análise de requisições e detecção de comportamentos suspeitos em websites de forma passiva.",
                "aplicacao": "Funciona como um sandbox para a web que visita a URL, salva os IPs de conexão e registra os scripts JavaScript executados no site alvo, permitindo extrair IDs de rastreadores analíticos de forma totalmente isolada. Configurando a busca como 'Privada', protege-se a OPSEC para que o alvo não seja alertado da investigação."
              }
            ]
          },
          {
            "titulo": "Camada 2: Assinaturas Visuais (Favicon)",
            "conceito": "A extração do Favicon (o ícone que aparece na aba do navegador) para transformá-lo em uma impressão digital criptográfica (hash numérico).",
            "comoFunciona": "A plataforma realiza o download do ícone de um site alvo e calcula automaticamente a sua assinatura matemática, preparando o artefato para buscas em indexadores da internet.",
            "utilidadeOsint": "Ao transformar a identidade visual de um site em um hash, o analista ganha uma assinatura digital exclusiva que não depende de nomes de domínio, permitindo encontrar o mesmo servidor operando em IPs escondidos.",
            "ferramentas": [
              {
                "nome": "FaviHash",
                "url": "https://www.favihash.com/",
                "uso": "Extração e cálculo do hash de favicons (MurmurHash) para mapeamento de infraestrutura e pivoting em motores de busca cibernética.",
                "aplicacao": "Calcula instantaneamente os hashes de um ícone. Para preservar a OPSEC, o analista pode baixar o favicon passivamente e utilizar a função de upload de arquivo do site em vez de informar a URL, evitando requisições contra o servidor do alvo a partir da infraestrutura da ferramenta."
              },
              {
                "nome": "FaviHunter",
                "url": "https://github.com/eremit4/favihunter",
                "uso": "Extração automatizada e cálculo de múltiplos hashes de favicons (MMH3, SHA256, MD5) com geração de links de pivoting.",
                "aplicacao": "Utilitário de linha de comando (CLI) que extrai a imagem do alvo e automatiza o processo gerando links diretos de busca (strings de clique) para motores como Shodan, FOFA e Censys, otimizando drasticamente o tempo do analista."
              }
            ]
          },
          {
            "titulo": "Camada 3: Pivoting em Motores de Busca Cibernética",
            "conceito": "Injeção do hash numérico extraído do favicon em motores de varredura global (CYBINT) para encontrar correspondências de infraestrutura na internet.",
            "comoFunciona": "Com o hash em mãos, o analista utiliza sintaxes de busca especializadas nestes motores para localizar endereços de IP ou outros domínios que estejam renderizando exatamente o mesmo arquivo de imagem.",
            "utilidadeOsint": "Fundamental para localizar painéis administrativos, descobrir servidores clonados, portais de phishing ativos criados por agentes de ameaça ou revelar o IP real de servidores protegidos por proxies reversos como a Cloudflare.",
            "ferramentas": [
              {
                "nome": "Shodan",
                "url": "https://shodan.io",
                "uso": "Mapeamento de infraestrutura e descoberta de servidores e vulnerabilidades expostas na internet global.",
                "aplicacao": "O analista insere o valor hash matemático gerado com a dork 'http.favicon.hash:<valor>' para localizar painéis de Comando e Controle (C2) ou outros endereços de infraestrutura cibernética que espelhem a identidade do alvo."
              },
              {
                "nome": "FOFA (fofa.info)",
                "url": "https://fofa.info",
                "uso": "Mapeamento de ativos de rede, descoberta de certificados SSL/TLS e busca por dispositivos expostos com base na indexação asiática massiva.",
                "aplicacao": "Motor de busca de ativos de rede extremamente eficiente para a busca por assinaturas visuais. Utilizando o filtro 'icon_hash=\"<valor>\"', a plataforma localiza servidores clones e infraestruturas criminosas ativas com altíssima capilaridade."
              }
            ]
          }
        ]
      },
      {
        "num": "06",
        "nome": "Histórico & Preservação Web",
        "opsec": "passivo_ativo",
        "opsecTexto": "🟢 PASSIVO / 🔴 ATIVO",
        "vetor": "Domínio ➔ Versões Antigas do Site / Textos Apagados / Arquivos Forenses (WARC)",
        "objetivo": "Resgatar evidências materiais do passado (textos ou contatos deletados pelo proprietário para encobrir rastros) e congelar o site atual com validade técnica para que a prova não se perca durante litígios.",
        "camadas": [
          {
            "titulo": "Camada 1: Resgate Histórico de Caches",
            "conceito": "Bibliotecas digitais mundiais que varrem e armazenam constantemente 'fotografias' (snapshots) da internet ao longo do tempo.",
            "comoFunciona": "O investigador consulta repositórios massivos de arquivamento web em busca de versões indexadas no passado, recuperando o estado visual e textual da página web antes de ser apagada ou alterada pelo alvo.",
            "utilidadeOsint": "Permite resgatar e investigar versões antigas da página alvo, acessando PDFs apagados, relatórios removidos ou estruturas antigas do site, desfazendo tentativas de ocultação de rastros e conexões.",
            "ferramentas": [
              {
                "nome": "Wayback Machine (Internet Archive)",
                "url": "https://web.archive.org/",
                "uso": "Preservação de memória digital, recuperação de páginas removidas ou alteradas e análise histórica de conteúdos na web.",
                "aplicacao": "O maior arquivo histórico do mundo. Captura, armazena e disponibiliza réplicas históricas (snapshots) de bilhões de páginas públicas da internet ao longo do tempo, permitindo o acesso a conteúdos que já foram modificados, deletados ou que pertencem a domínios desativados."
              }
            ]
          },
          {
            "titulo": "Camada 2: Monitoramento Contínuo e Espelhamento",
            "conceito": "Técnicas focadas em rastrear alterações no momento exato em que ocorrem e clonar a estrutura completa do alvo para o disco do investigador.",
            "comoFunciona": "Sistemas automatizados vigiam URLs ativamente em busca de alterações de código/texto, enquanto softwares locais de crawling baixam recursivamente a estrutura de arquivos da página web inteira.",
            "utilidadeOsint": "Garante a detecção imediata de mudanças no alvo e viabiliza a extração de dados e análises estáticas de forma totalmente offline, mitigando os riscos de contramedidas e reduzindo a pegada técnica deixada pelo analista.",
            "ferramentas": [
              {
                "nome": "Follow That Page",
                "url": "https://www.followthatpage.com/",
                "uso": "Monitoramento automatizado de alterações em páginas web, acompanhamento de atualizações em sites de alvos e alertas por e-mail.",
                "aplicacao": "Sistema automatizado que monitora a URL informada e envia um alerta ao analista sempre que detectar modificações no código do site. É excelente para detectar imediatamente a alteração de comunicados, remoção de nomes de funcionários ou edições em listas de sócios por parte do alvo."
              },
              {
                "nome": "Cyotek WebCopy",
                "url": "https://www.cyotek.com/cyotek-webcopy",
                "uso": "Clonagem, espelhamento e raspagem automatizada de sites completos para análise offline.",
                "aplicacao": "Software utilitário que atua como um rastreador da web (web crawler). Clona e baixa recursivamente a estrutura de links, páginas HTML, imagens e documentos para o disco rígido, remapeando os caminhos para que apontem para os arquivos locais, viabilizando inspeções visuais e textuais profundas fora da internet."
              }
            ]
          },
          {
            "titulo": "Camada 3: Preservação Forense e Validade Jurídica",
            "conceito": "Documentar materialmente a prova digital congelando o estado atual de uma página web gerando arquivos encapsulados de alta fidelidade técnica com validade forense.",
            "comoFunciona": "Ferramentas avançadas gravam todo o tráfego de rede gerado no navegador enquanto a página é carregada (produzindo arquivos WARC/WACZ) ou utilizam serviços certificados que garantem a imutabilidade da coleta.",
            "utilidadeOsint": "Um padrão ouro para a preservação de dados web. Garante que redes sociais interativas, páginas de phishing dinâmicas ou sites corporativos sejam registrados seguindo padrões forenses rígidos, assegurando a aceitação do material probatório em juízo.",
            "ferramentas": [
              {
                "nome": "Webrecorder",
                "url": "https://webrecorder.net",
                "uso": "Captura interativa, dinâmica e automatizada de páginas web complexas para geração de arquivos WARC/WACZ com alta fidelidade.",
                "aplicacao": "Diferente de capturas estáticas, grava todo o tráfego de rede gerado no navegador enquanto a página é carregada e manipulada (execução de scripts, feeds infinitos). Permite ao investigador criar um espelho interativo que preserva cabeçalhos HTTP e mídias ocultas para auditorias forenses."
              },
              {
                "nome": "ReplayWeb.page",
                "url": "https://replayweb.page",
                "uso": "Reprodução offline e análise estática de páginas web guardadas em formatos WARC, WACZ e HAR sem fuga de dados.",
                "aplicacao": "Visualizador forense que opera inteiramente do lado do utilizador. Carrega os arquivos gerados pelo Webrecorder para reconstruir o comportamento interativo original das páginas capturadas, permitindo inspecionar o código-fonte de forma offline e garantindo OPSEC defensiva absoluta."
              },
              {
                "nome": "Verifact",
                "url": "https://www.verifact.com.br/",
                "uso": "Preservação, coleta auditável e registro de provas digitais com validade jurídica contra fraudes e adulterações.",
                "aplicacao": "Plataforma online especializada que congela a evidência digital pública localizada pelo analista, gerando um relatório técnico auditável com metadados detalhados, vídeos da navegação e hashes criptográficos, impedindo alegações de adulteração pela defesa do alvo em processos litigações."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "email",
    categoria: "pessoas",
    icone: "✉️",
    titulo: "Investigação por E-mail",
    subtitulo: "// Roteiro metodológico para validação, enumeração, pivoting e desanonimização de endereços eletrônicos.",

    imagem: "../img/trilha-email.png",

    modulos: [
      {
        "num": "01",
        "nome": "Validação & Status Técnico",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "E-mail ➔ Sintaxe / Registros MX / Existência da Caixa Postal",
        "objetivo": "Confirmar se o endereço de e-mail é sintaticamente correto, se o domínio possui infraestrutura para receber mensagens e se a caixa de entrada realmente existe e está ativa, preservando a OPSEC da investigação.",
        "camadas": [
          {
            "titulo": "Camada 1: Validação de Sintaxe (Syntax Check) e Processamento Local",
            "conceito": "Verificação estática que checa se a string obedece às normas internacionais de estruturação (RFC 5322), como a formatação usuario@dominio.tld.",
            "comoFunciona": "Ferramentas de análise processam os dados de forma estática e estritamente local no navegador (client-side), limpando e estruturando os registros sem transmitir informações sensíveis para servidores remotos.",
            "utilidadeOsint": "Atua na fase de higienização de dados, filtrando falsos positivos de listas massivas antes de submetê-las a varreduras de rede e decodificando e-mails ofuscados em vazamentos.",
            "ferramentas": [
              {
                "nome": "CyberChef",
                "url": "https://gchq.github.io/CyberChef/",
                "uso": "Processamento, conversão e decodificação estática de dados e artefatos.",
                "aplicacao": "O 'Canivete Suíço Cibernético'. Realiza o processamento estático local no navegador do analista (Client-side), limpando, estruturando e revelando e-mails extraídos de dumps de banco de dados, vazamentos ou artefatos ofuscados sem transmitir dados para servidores remotos."
              },
              {
                "nome": "Regex101",
                "url": "https://regex101.com",
                "uso": "Criação, teste, depuração e análise estática de expressões regulares (RegEx) aplicadas a padrões de texto.",
                "aplicacao": "Fundamental para a fase de triagem. Permite ao analista criar padrões precisos para extrair massivamente e-mails estruturados de arquivos locais, códigos-fonte ou dumps de dados. O painel explicativo e a função Code Generator facilitam a automação em scripts de raspagem local, mitigando erros e falsos positivos."
              },
              {
                "nome": "Planilhas (Excel / Google Sheets)",
                "url": "#",
                "uso": "Ferramenta subestimada, mas altamente prática. Utilizando fórmulas simples de validação de dados ou funções de busca (como validar a presença de @ e .).",
                "aplicacao": "Ótima para quando a extração de OSINT resulta em listas pequenas e o analista precisa higienizar e organizar os dados visualmente antes de importar para o Maltego ou Lampyre."
              }
            ]
          },
          {
            "titulo": "Camada 2: Consulta de Registros MX e Verificação SMTP",
            "conceito": "Consulta aos servidores DNS para encontrar os apontamentos MX (Mail Exchange) do domínio e posterior envio de comandos SMTP simulados para checar a resposta da caixa postal.",
            "comoFunciona": "A ferramenta interroga os servidores de nomes para mapear a infraestrutura de correio eletrônico e executa testes sequenciais de conexão com o servidor de destino, abortando a comunicação imediatamente antes da entrega real da mensagem.",
            "utilidadeOsint": "Revela se a empresa utiliza provedores em nuvem (como Google Workspace ou Microsoft 365) e confirma em tempo real se a conta está apta a receber mensagens, sem gerar alertas de leitura ou notificar o alvo do teste.",
            "ferramentas": [
              {
                "nome": "nslookup.io",
                "url": "https://www.nslookup.io/",
                "uso": "Consulta e mapeamento de registros de DNS, servidores de e-mail e propriedades de infraestrutura web.",
                "aplicacao": "Plataforma web projetada para realizar consultas de DNS de forma passiva. Mapeia a infraestrutura técnica associada ao domínio, identificando através dos registros MX quais servidores de e-mail a organização consome. Por realizar requisições a partir de seus servidores na nuvem, protege o IP real do analista."
              },
              {
                "nome": "MXToolbox SuperTool",
                "url": "https://mxtoolbox.com/SuperTool.aspx",
                "uso": "Consulta e auditoria técnica de registros DNS, servidores de correio eletrônico e reputação de rede.",
                "aplicacao": "Plataforma web centralizada que executa dezenas de testes automatizados para inspecionar registros de infraestrutura (MX, A, TXT) e políticas de segurança de e-mail (SPF, DKIM, DMARC). A auditoria é passiva e não interage diretamente com o sistema do investigado."
              },
              {
                "nome": "OSINT.SH",
                "url": "https://osint.sh",
                "uso": "Execução centralizada de consultas de infraestrutura de rede, validação de e-mails, análise de domínios, criptografia e extração de dados públicos.",
                "aplicacao": "Suíte digital que centraliza a checagem de registros de e-mail (MX/SPF). Como as requisições são processadas a partir da nuvem da própria plataforma, ela atua como um proxy protetor, ocultando o IP do investigador durante a triagem da infraestrutura de correio eletrônico do alvo."
              }
            ]
          }
        ]
      },
      {
        "num": "02",
        "nome": "Mapeamento de Contas (SOCMINT)",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "E-mail / Username / Telefone ➔ Redes Sociais / Plataformas / Serviços (SaaS)",
        "objetivo": "Descobrir a pegada digital (digital footprint) do alvo, mapeando em quais sites, aplicativos, redes sociais e serviços de terceiros o e-mail ou username investigado foi utilizado para registrar uma conta, sem alertar o investigado.",
        "camadas": [
          {
            "titulo": "Camada 1: Redes Sociais e Plataformas Globais (Varreduras Automatizadas)",
            "conceito": "Busca automatizada em larga escala para mapear a presença digital do alvo em centenas de sites e serviços online simultaneamente.",
            "comoFunciona": "A ferramenta interage com os fluxos de login, registro ou recuperação de senha das plataformas para confirmar a existência da conta associada àquele endereço.",
            "utilidadeOsint": "Essencial para o pivoting de identidade (SOCMINT), permitindo expandir a investigação revelando novos usernames, fotos de perfil e nomes reais de forma silenciosa.",
            "ferramentas": [
              {
                "nome": "Holehe",
                "url": "https://github.com/megadose/holehe",
                "uso": "Verificação e mapeamento de contas criadas a partir de um endereço de e-mail utilizando fluxos de recuperação de senha.",
                "aplicacao": "Automatiza requisições para os endpoints de login e recuperação de conta de mais de 120 serviços da web, analisando os códigos de resposta sem enviar notificações de alerta para o alvo sob investigação."
              },
              {
                "nome": "OSINT Industries",
                "url": "https://osint.industries/",
                "uso": "Identificação de contas digitais, perfis em redes sociais e pegada digital a partir de e-mails ou números de telefone.",
                "aplicacao": "Consulta em tempo real centenas de sites, aplicativos e redes sociais globais para mapear onde o seletor informado possui contas registradas, extraindo metadados públicos valiosos como fotos de perfil e nomes reais."
              },
              {
                "nome": "Identificator.space",
                "url": "https://identificator.space",
                "uso": "Identificação de contas digitais e mapeamento de pegada digital vinculada a e-mails.",
                "aplicacao": "Envia requisições técnicas de forma automatizada para endpoints de login, registro e mecanismos de recuperação de credenciais de centenas de sites, determinando em tempo real se o e-mail possui uma conta ativa."
              },
              {
                "nome": "WhatsMyName",
                "url": "https://whatsmyname.app",
                "uso": "Enumeração e rastreamento de usernames em centenas de plataformas web e redes sociais simultaneamente.",
                "aplicacao": "A partir de um único nome de usuário conhecido, realiza uma varredura em massa para validar em quais serviços o apelido possui uma conta ativa, permitindo descobrir portfólios, fóruns e sites de nicho utilizados pelo alvo."
              },
              {
                "nome": "InstantUsername",
                "url": "https://instantusername.com/",
                "uso": "Verificação simultânea de existência e disponibilidade de nomes de usuário (usernames) em múltiplas plataformas web.",
                "aplicacao": "Opera enviando requisições assíncronas para verificar a existência de perfis públicos correspondentes ao termo digitado, acelerando o processo de descoberta de novas contas e ramificações da presença online do investigado."
              }
            ]
          },
          {
            "titulo": "Camada 2: Telas de Recuperação de Senha (Validações Manuais / Regionais)",
            "conceito": "Verificação cirúrgica em plataformas locais, nacionais ou sistemas corporativos específicos não cobertos pelas varreduras globais.",
            "comoFunciona": "O analista insere ativamente o CPF, telefone ou e-mail nas páginas de \"Esqueci minha senha\" e observa as respostas do servidor (se o usuário não é encontrado ou se o sistema avança para envio de token).",
            "utilidadeOsint": "Identifica vínculos e hábitos do alvo com ecossistemas de compras, operadoras de telefonia e carteiras digitais, servindo como validador de identidade seguro.",
            "ferramentas": [
              {
                "nome": "PagSeguro (Recuperação de Acesso)",
                "url": "https://acesso.pagseguro.uol.com.br/",
                "uso": "Validação de e-mails, números de telefone e identidades através do mecanismo de recuperação de contas (pivoting).",
                "aplicacao": "Permite submeter dados cadastrais para verificar vínculos de contas e a existência de atividade financeira associada ao ecossistema do PagBank."
              },
              {
                "nome": "Reclame Aqui (Recuperação de Senha)",
                "url": "https://www.reclameaqui.com.br/esqueci-minha-senha/",
                "uso": "Validação da existência e do status de contas associadas a e-mails ou CPFs via mecanismo de recuperação de credenciais.",
                "aplicacao": "Ao inserir o CPF ou o e-mail de um alvo, permite confirmar se ele possui uma conta ativa na maior plataforma de consumo do Brasil, fornecendo indícios sobre seus hábitos digitais."
              },
              {
                "nome": "Vivo (Meu Vivo - Recuperação)",
                "url": "https://mvfront.vivo.com.br/password-recovery#/welcome-vivo/recover-password",
                "uso": "Validação de existência de contas e cruzamento de identificadores (CPF, telefone ou e-mail) atrelados à operadora Vivo.",
                "aplicacao": "Permite determinar se um identificador está ativamente associado a um cliente da operadora, auxiliando na redução do escopo de alvos e na confirmação de vínculos de telecomunicações."
              },
              {
                "nome": "Varejistas Diversos: Casas Bahia / Extra / Magalu",
                "url": "Múltiplas URLs",
                "uso": "Validação da existência de contas e vínculo de CPF a partir de fluxos de recuperação de senha de grandes e-commerces.",
                "aplicacao": "O uso de plataformas do varejo permite verificar a existência de vínculo comercial de um determinado CPF sem gerar alertas, notificações por SMS ou e-mails de tentativa de invasão para o dispositivo do alvo na fase inicial de inserção."
              },
              {
                "nome": "Claro (Recuperação de Senha)",
                "url": "https://cadastro.claro.com.br/recuperar-senha",
                "uso": "Validação da existência de contas e vínculo de CPF a partir de fluxos de recuperação de senha da operadora Claro.",
                "aplicacao": "Adição tática para realizar a validação passiva e constatar se o CPF investigado possui serviços de telecomunicação contratados junto à Claro, ajudando a direcionar ordens ou investigações telefônicas."
              }
            ]
          }
        ]
      },
      {
        "num": "03",
        "nome": "Vazamentos & Credenciais (Breach Intel)",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO / 🟡 CAUTELA (Dark Web)",
        "vetor": "Identificador (E-mail/Telefone/Username) ➔ Senhas / Megavazamentos / Fóruns Clandestinos",
        "objetivo": "Identificar se as credenciais, dados pessoais ou ativos corporativos do alvo foram expostos em violações de segurança e utilizar senhas vazadas para realizar pivoting de identidade.",
        "camadas": [
          {
            "titulo": "Camada 1: Senhas e Usernames em Plain Text",
            "conceito": "Busca direta em repositórios massivos e fóruns clandestinos que fornecem as senhas vazadas em texto claro (plain text) associadas ao e-mail ou nome de usuário do investigado.",
            "comoFunciona": "Os indexadores compilam dumps e bases de dados clandestinas, permitindo buscas reversas pela senha ou pelo e-mail exposto.",
            "utilidadeOsint": "Permite mapear os padrões de criação de credenciais do alvo e executar pivoting tático. Se o investigado utiliza uma mesma senha em várias plataformas, o analista pode encontrar e-mails ocultos que também foram expostos.",
            "ferramentas": [
              {
                "nome": "DeHashed",
                "url": "https://www.dehashed.com",
                "uso": "Rastreamento de vazamentos de dados, exposição de credenciais e inteligência cibernética.",
                "aplicacao": "Permite indexar e pesquisar bilhões de registros oriundos de vazamentos históricos de dados e violações de servidores, viabilizando a execução de técnicas de pivoting avançadas."
              },
              {
                "nome": "PwnDB",
                "url": "http://pwndb2am4tzkvold.onion",
                "uso": "Busca de credenciais vazadas (e-mails e senhas) na rede Tor para investigações de cibercrime.",
                "aplicacao": "Serviço acessível via rede Tor que funciona como indexador massivo contendo bilhões de registros, permitindo descobrir quais e-mails compartilham a mesma senha em diferentes plataformas da web."
              },
              {
                "nome": "OSINTLeak",
                "url": "https://osintleak.com/",
                "uso": "Pesquisa e monitoramento de credenciais expostas, vazamentos de dados (data breaches) e stealer logs.",
                "aplicacao": "Agrega e indexa bilhões de registros oriundos de vazamentos, violações de segurança corporativas e stealer logs em fóruns cibercriminosos, ideal para identificar reutilização de senhas por alvos."
              }
            ]
          },
          {
            "titulo": "Camada 2: Megavazamentos e Dumps (Motores Indexadores)",
            "conceito": "Verificação de comprometimento em incidentes massivos de segurança ou motores de busca voltados para rastrear dados hospedados de forma descentralizada e obscura.",
            "comoFunciona": "O sistema compara o identificador digital do alvo com bases indexadas de violações globais ou rastreia a Surface/Dark Web catalogando vazamentos.",
            "utilidadeOsint": "Revela plataformas nas quais a identidade possuiu cadastro, provendo leads sem alertar o investigado e mapeando a pegada digital exposta na Dark Web.",
            "ferramentas": [
              {
                "nome": "Have I Been Pwned",
                "url": "https://haveibeenpwned.com/",
                "uso": "Verificação de comprometimento de contas, e-mails e números de telefone em vazamentos de dados públicos e corporativos.",
                "aplicacao": "Mapeia em quais plataformas, fóruns ou serviços web aquela identidade possui ou possuiu cadastro garantindo OPSEC devido ao modelo de K-Anonymity que não gera alertas."
              },
              {
                "nome": "OnionLand Search Engine",
                "url": "https://onionlandsearchengine.net/",
                "uso": "Pesquisa, indexação e mapeamento de sites, fóruns, mercados e vazamentos hospedados na Dark Web (redes Tor e I2P) e na Clearnet.",
                "aplicacao": "Permite mapear menções a marcas, e-mails de alvos corporativos e credenciais vazadas em ecossistemas anônimos sem a necessidade de expor a infraestrutura do analista navegando ativamente na rede Tor."
              },
              {
                "nome": "Ahmia",
                "url": "https://ahmia.fi/",
                "uso": "Motor de busca e indexador de serviços ocultos na rede Tor (Dark Web) acessível via Clear Web.",
                "aplicacao": "Permite ao analista buscar por vazamentos de dados corporativos, credenciais expostas ou usernames de alvos em fóruns cibercriminosos, servindo como uma ponte de busca de extrema utilidade tática."
              }
            ]
          },
          {
            "titulo": "Camada 3: Plataformas DRP/CTI (Inteligência de Ameaças)",
            "conceito": "Monitoramento corporativo focado na proteção contra riscos digitais e exposição em ecossistemas de cibercrime e grupos maliciosos.",
            "comoFunciona": "Essas ferramentas monitoram continuamente canais do Telegram, shame sites de ransomware e fóruns de cibercrime para indexar a exposição de dados institucionais.",
            "utilidadeOsint": "Fundamental para diligências e CTI. Auxilia a visualizar rapidamente se a marca, os domínios corporativos ou a infraestrutura do alvo sofreram violações recentes ou extorsões.",
            "ferramentas": [
              {
                "nome": "Axur Watchdog",
                "url": "https://watchdog.axur.io",
                "uso": "Monitoramento de riscos digitais, detecção de credenciais vazadas e exposição de dados corporativos na surface e dark web.",
                "aplicacao": "Verificação automatizada de vazamentos que afetam o ecossistema de uma empresa, eliminando a necessidade do analista acessar diretamente ambientes hostis da dark web para consultas."
              },
              {
                "nome": "SynScan Breaches",
                "url": "https://synscan.net/breaches",
                "uso": "Consulta e identificação de credenciais vazadas e dados expostos em incidentes de segurança globais para inteligência de ameaças.",
                "aplicacao": "Permite buscas estruturadas por múltiplos campos em texto claro para verificar se um alvo teve informações sensíveis expostas, exigindo verificação de posse do e-mail na modalidade completa."
              },
              {
                "nome": "DarkWebInformer",
                "url": "https://darkwebinformer.com/",
                "uso": "Monitoramento de ameaças cibernéticas, rastreamento de ataques de ransomware e notificações de vazamentos de dados na Dark Web.",
                "aplicacao": "Funciona como um mecanismo de alerta precoce (early warning), permitindo ao analista identificar rapidamente se uma organização foi vítima de extorsão ou se teve seus dados expostos em shame sites e fóruns de agentes de ameaça."
              },
              {
                "nome": "ImmuniWeb Dark Web & Threat Exposure Test",
                "url": "https://www.immuniweb.com/darkweb/",
                "uso": "Auditoria de exposição de dados na Dark Web e detecção de ameaças cibernéticas contra domínios corporativos.",
                "aplicacao": "Realiza varreduras automatizadas em fóruns cibercriminosos, mercados clandestinos e pastebins para identificar vazamentos massivos de e-mails e credenciais comprometidas associadas a um domínio alvo de forma passiva."
              }
            ]
          }
        ]
      },
      {
        "num": "04",
        "nome": "Desanonimização & Perfilamento",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO / 🟡 CAUTELA (em ferramentas de IA e biometria comercial)",
        "vetor": "Identificador (E-mail / Telefone / Username / Foto) ➔ Identidade Real / Pegada Digital / Redes de Relacionamento",
        "objetivo": "Desanonimizar perfis ocultos, descobrir o nome real, rosto e hábitos do alvo, além de mapear e monitorar a sua presença digital de forma abrangente utilizando agregação de dados, buscas reversas e inteligência artificial.",
        "camadas": [
          {
            "titulo": "Camada 1: Nome Real, Foto e GAIA ID",
            "conceito": "Processo de extração de dados biográficos primários a partir de identificadores básicos de contato (e-mail ou telefone) consultando diretórios e APIs globais.",
            "comoFunciona": "A ferramenta interage passivamente com APIs de ecossistemas globais (como Google e Skype) ou bancos de dados colaborativos de chamadas para resolver o dado investigado e extrair metadados associados, como nomes reais, fotos de perfil ou históricos de localização.",
            "utilidadeOsint": "Permite realizar a quebra inicial do anonimato, transformando um e-mail ou número de telefone desconhecido em um rosto e um nome real, gerando identificadores exclusivos para aprofundar a investigação.",
            "ferramentas": [
              {
                "nome": "Epieos",
                "url": "https://epieos.com/",
                "uso": "Busca reversa de e-mails e números de telefone para pivoting e identificação de contas associadas.",
                "aplicacao": "Consulta de forma passiva diversas APIs de plataformas globais para extrair identificadores exclusivos (como o GAIA ID), nomes reais, fotos de perfil e avaliações no Google Maps vinculadas ao e-mail, sem alertar o alvo."
              },
              {
                "nome": "Truecaller (Sugestão Adicional)",
                "url": "https://www.truecaller.com/pt-br",
                "uso": "Identificação avançada de chamadas e engenharia reversa de números telefônicos.",
                "aplicacao": "A partir de um número de telefone suspeito, o analista pode descobrir o nome ou apelido associado ao proprietário da linha, a operadora e a localização cadastral, ajudando a desanonimizar o portador do contato."
              }
            ]
          },
          {
            "titulo": "Camada 2: Busca por IA e Agregadores",
            "conceito": "Automação da coleta e cruzamento massivo de pegadas digitais utilizando inteligência artificial e motores de busca simultâneos.",
            "comoFunciona": "Plataformas agregadoras recebem um dado inicial (username, e-mail, etc.) e disparam varreduras simultâneas em centenas de sites, fóruns e registros públicos, compilando as aparições do alvo em um relatório ou grafo unificado.",
            "utilidadeOsint": "Agiliza drasticamente o processo de reconhecimento, revelando a real extensão da presença online do investigado, descobrindo novos *aliases* (pseudônimos) e correlacionando contas isoladas.",
            "ferramentas": [
              {
                "nome": "Sherlockeye",
                "url": "https://sherlockeye.io/",
                "uso": "Plataforma multifuncional de inteligência de fontes abertas (OSINT) baseada em IA para pesquisa reversa.",
                "aplicacao": "Conecta e cruza informações em tempo real provenientes de mais de 800 fontes. A partir de um único dado de entrada, o analista obtém uma árvore de conexões e relatórios analíticos gerados por IA, centralizando a coleta."
              },
              {
                "nome": "WhatsMyName",
                "url": "https://whatsmyname.app",
                "uso": "Enumeração e rastreamento de usernames em centenas de plataformas web e redes sociais simultaneamente.",
                "aplicacao": "A partir de um único nome de usuário conhecido, realiza uma varredura em massa para validar em quais serviços o apelido possui uma conta ativa, permitindo descobrir portfólios, fóruns e sites de nicho utilizados pelo alvo."
              },
              {
                "nome": "Webmii",
                "url": "https://webmii.com/",
                "uso": "Busca agregada de pessoas, usernames e cruzamento de pegadas digitais em fontes abertas.",
                "aplicacao": "Varre múltiplos serviços digitais a partir de um nome ou sobrenome, correlacionando links, imagens e contas em uma única interface, sendo um excelente ponto de pivoting inicial para estruturar a presença online do alvo."
              }
            ]
          },
          {
            "titulo": "Camada 3: Reconhecimento Facial e Busca Visual",
            "conceito": "Busca reversa focada em biometria facial para localizar imagens do alvo espalhadas pela internet, independentemente do nome ou contexto em que foram publicadas.",
            "comoFunciona": "O analista envia uma fotografia de rosto do alvo para a plataforma, que utiliza redes neurais para mapear as características faciais e compará-las com bilhões de imagens indexadas na internet pública.",
            "utilidadeOsint": "Fundamental para desmascarar contas de fachada (Sock Puppets), localizar reportagens, identificar o alvo em eventos ou empresas terceiras e descobrir seu nome real caso a foto inicial seja anônima.",
            "ferramentas": [
              {
                "nome": "FaceCheck.id",
                "url": "https://facecheck.id/",
                "uso": "Reconhecimento facial e busca reversa de imagens para identificação de pessoas.",
                "aplicacao": "Localiza correspondências visuais em redes sociais, fóruns e registros públicos (como cadastros criminais ou de notícias), permitindo mapear apelidos e desmascarar campanhas baseadas em roubo de identidade digital (catfishing)."
              },
              {
                "nome": "PimEyes",
                "url": "https://pimeyes.com/",
                "uso": "Motor de busca de reconhecimento facial massivo na internet.",
                "aplicacao": "Foca unicamente na estrutura biométrica do rosto, encontrando o mesmo indivíduo em fotos com planos de fundo, idades e iluminações distintas, viabilizando conexões com empresas e perfis periféricos de altíssimo valor investigativo."
              }
            ]
          },
          {
            "titulo": "Camada 4: Monitoramento Web e Social",
            "conceito": "Acompanhamento ativo e histórico das menções, interações e sentimentos gerados pelo alvo ou sobre ele em toda a internet de superfície.",
            "comoFunciona": "Motores de busca sociais e rastreadores web filtram palavras-chave, usernames ou hashtags para indexar e monitorar conversas e publicações em tempo real.",
            "utilidadeOsint": "Permite realizar a escuta social passiva, avaliar danos à reputação, identificar redes de influência e acompanhar o surgimento de novas informações do alvo na internet sem a necessidade de intervenção diária manual.",
            "ferramentas": [
              {
                "nome": "Social Searcher",
                "url": "https://www.social-searcher.com",
                "uso": "Rastreamento passivo de termos, hashtags e nomes de usuário em múltiplas redes sociais simultaneamente em tempo real.",
                "aplicacao": "Consolida publicações de redes como X/Twitter, YouTube e Reddit sem a necessidade de login. Fornece estatísticas de engajamento e análise de sentimento automatizada, expondo postagens que passariam despercebidas em buscas nativas."
              },
              {
                "nome": "Google Alerts (Sugestão Adicional)",
                "url": "https://www.google.com.br/alerts",
                "uso": "Monitoramento contínuo e automatizado de termos de busca e palavras-chave na web.",
                "aplicacao": "Permite que o analista configure \"sentinelas\" para nomes raros, codinomes ou e-mails do alvo. Sempre que o alvo for citado em um vazamento, matéria ou documento novo indexado pelo Google, o investigador recebe um aviso imediato, acompanhando a evolução do caso."
              }
            ]
          }
        ]
      },
      {
        "num": "05",
        "nome": "Análise de Cabeçalhos (Forense)",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "E-mail Recebido ➔ IP de Origem / Servidores de Trânsito / Assinaturas Criptográficas (SPF/DKIM)",
        "objetivo": "Aplicar engenharia reversa sobre comunicações eletrônicas recebidas. O foco é atestar a autenticidade do emissor, combater falsidade ideológica (Spoofing) e mapear geograficamente o endereço de IP real de onde partiu o disparo.",
        "camadas": [
          {
            "titulo": "Camada 1: Dissecação do SMTP e Auditoria de Cabeçalhos",
            "conceito": "Processo de inspecionar as informações estruturais ocultas no cabeçalho (Header) da mensagem, desmembrando as linhas 'Received' e auditando as validações do remetente.",
            "comoFunciona": "As plataformas processam o código-fonte bruto do e-mail de forma estática, decodificando e organizando os metadados técnicos de roteamento em linhas cronológicas para atestar a validade dos registros de segurança sem disparar alertas.",
            "utilidadeOsint": "Revela o IP originário da máquina do remetente e expõe falhas nas chaves de segurança (SPF/DKIM/DMARC), sendo essencial para detectar técnicas de falsificação (email spoofing) em investigações de phishing, ameaças ou fraudes corporativas.",
            "ferramentas": [
              {
                "nome": "E-mail Header Analyzer (Gaijin.at)",
                "url": "https://gaijin.at/en/tools/e-mail-header-analyzer",
                "uso": "Análise estática de cabeçalhos de e-mail, rastreamento de rota de servidores e detecção de spoofing.",
                "aplicacao": "Utilidade web que decodifica, estrutura e analisa metadados técnicos ocultos em cabeçalhos brutos. Organiza o fluxo de entrega do e-mail explicitando carimbos de data/hora (timestamps), servidores de trânsito e validando os registros de segurança para detecção de falsidade do emissor."
              },
              {
                "nome": "Google Admin Toolbox - Messageheader",
                "url": "https://toolbox.googleapps.com/apps/messageheader/",
                "uso": "Análise estática, decodificação e parsing de cabeçalhos brutos de e-mail (SMTP) para rastreamento de rotas, verificação de saltos de rede e auditoria de chaves de autenticação.",
                "aplicacao": "Decodifica de forma estática as linhas textuais do cabeçalho, organizando os dados de roteamento em uma tabela cronológica linear. Evidencia atrasos (delays) exatos em segundos entre cada salto de servidor (hop) e apresenta testes vitais da autenticidade do domínio declarante."
              }
            ]
          },
          {
            "titulo": "Camada 2: Inteligência de IP e Reputação de Ameaças",
            "conceito": "Avaliação técnica, geográfica e comportamental do endereço IP de origem isolado no cabeçalho do e-mail recebido.",
            "comoFunciona": "Plataformas de inteligência de rede cruzam o IP extraído com bases de dados de geolocalização e registros colaborativos de atividades maliciosas para fornecer a origem cadastral e o score de ameaça da infraestrutura.",
            "utilidadeOsint": "Permite mapear geograficamente o endereço real de onde partiu o disparo do e-mail. Atesta se o IP pertence a provedores de anonimização (VPN/Tor) ou se está listado em campanhas de cibercrime ativas, viabilizando o perfilamento do adversário e a atribuição de autoria.",
            "ferramentas": [
              {
                "nome": "FindIP (api.findip.net)",
                "url": "https://api.findip.net",
                "uso": "Geolocalização de endereços IP, identificação de provedores (ASN/ISP) e detecção de proxies, VPNs, Tor e ameaças cibernéticas.",
                "aplicacao": "Após extrair o IP no cabeçalho, o analista utiliza o FindIP para obter dados de geolocalização cadastral estruturada (país, cidade, coordenadas aproximadas). O seu módulo avançado atua para detectar e identificar se o remetente tentou mascarar a sua conexão utilizando Proxies, VPNs ou nós de saída da rede Tor."
              },
              {
                "nome": "AbuseIPDB",
                "url": "https://www.abuseipdb.com/",
                "uso": "Análise de reputação, verificação de abuso e inteligência de ameaças para endereços IP (Threat Intelligence).",
                "aplicacao": "Banco de dados colaborativo focado na detecção de atividades maliciosas na internet. Permite que o analista verifique de forma ágil se o IP extraído do e-mail suspeito possui um longo histórico reportado de disseminação de spam, tentativas de invasão ou envolvimento em campanhas de fraude."
              }
            ]
          }
        ]
      },
      {
        "num": "06",
        "nome": "Mapeamento Corporativo",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Domínio / Empresa ➔ E-mails Corporativos / Organogramas / Infraestrutura",
        "objetivo": "Descobrir a estrutura de profissionais de uma empresa, identificar e-mails institucionais, mapear padrões de nomenclatura corporativa e rastrear domínios associados a uma mesma organização.",
        "camadas": [
          {
            "titulo": "Camada 1: Padrão de Nomenclatura e Colegas",
            "conceito": "Identificação de contatos profissionais e da hierarquia de colaboradores vinculados a um domínio institucional específico.",
            "comoFunciona": "A ferramenta varre bancos de dados públicos e redes sociais profissionais para indexar indivíduos associados à empresa investigada, deduzindo a fórmula matemática de criação de e-mails (ex: nome.sobrenome@empresa.com) adotada pela organização.",
            "utilidadeOsint": "Serve como um recurso estratégico para correlacionar domínios a indivíduos, descobrir canais de comunicação direta de tomadores de decisão e auxiliar na montagem de organogramas empresariais durante a fase de reconhecimento.",
            "ferramentas": [
              {
                "nome": "Hunter.io",
                "url": "https://hunter.io/",
                "uso": "Mapeamento, extração e verificação de endereços de e-mail corporativos e identificação de contatos profissionais associados a domínios.",
                "aplicacao": "Realiza varreduras em páginas públicas da internet para indexar e mapear a estrutura de e-mails de organizações, identificando os padrões de nomenclatura adotados por pessoas jurídicas e listando a hierarquia técnica vinculada ao domínio."
              },
              {
                "nome": "RocketReach",
                "url": "https://rocketreach.co",
                "uso": "Identificação de perfis profissionais, e-mails corporativos, números de telefone e links de redes sociais de tomadores de decisão globalmente.",
                "aplicacao": "Correlaciona dados públicos, perfis de redes sociais (como LinkedIn) e registros corporativos para encontrar e validar e-mails estruturados de profissionais, estimando a probabilidade de entrega e validade de cada e-mail exibido."
              }
            ]
          },
          {
            "titulo": "Subfase 2: Extração de E-mails por Domínio e Pivoting de Infraestrutura",
            "conceito": "Busca massiva e engenharia reversa focada na coleta de seletores de identidade (e-mails, subdomínios) e ativos digitais correlacionados à marca ou domínio principal do alvo.",
            "comoFunciona": "Motores de busca consultam bilhões de registros indexados para recuperar dados associados a um domínio de entrada, ou utilizam e-mails corporativos conhecidos para buscar reversamente quais outras propriedades web foram registradas por essa identidade.",
            "utilidadeOsint": "Permite o mapeamento de superfícies de ataque, a descoberta de leads humanos ocultos e a identificação de portfólios inteiros de propriedades digitais fraudulentas ou subsidiárias controladas pela mesma entidade organizacional.",
            "ferramentas": [
              {
                "nome": "Phonebook.cz",
                "url": "https://phonebook.cz",
                "uso": "Enumeração e extração massiva de e-mails, subdomínios e URLs vinculados a domínios alvos.",
                "aplicacao": "Realiza pesquisas em larga escala para listar subdomínios e e-mails correspondentes a um domínio de entrada, consultando bilhões de registros do arquivo da Intelligence X de forma totalmente passiva para mapeamento inicial da organização."
              },
              {
                "nome": "Skymem",
                "url": "https://www.skymem.info/",
                "uso": "Extração de e-mails, identificação de contatos de organizações e busca de e-mails associados a nomes ou domínios de internet.",
                "aplicacao": "Varre continuamente a internet para estruturar um banco de dados massivo vinculando e-mails a indivíduos e corporações, operando como um indexador altamente eficiente para realizar engenharia reversa de credenciais digitais e descobrir novos leads humanos associados a uma marca."
              },
              {
                "nome": "WhoisFreaks Reverse WHOIS Search",
                "url": "https://whoisfreaks.com/tools/whois/reverse/search",
                "uso": "Pivoting técnico através de busca reversa de WHOIS por nome, e-mail corporativo ou empresa.",
                "aplicacao": "Em vez de consultar dados de um domínio, a ferramenta permite inserir um endereço de e-mail corporativo ou razão social para descobrir todos os nomes de domínio atualmente ou anteriormente vinculados àquele identificador, desvendando redes de sites ou portfólios ocultos de uma empresa."
              },
              {
                "nome": "Whoxy",
                "url": "https://www.whoxy.com/",
                "uso": "Consulta massiva de histórico WHOIS, buscas reversas de domínios e monitoramento de propriedades.",
                "aplicacao": "Possibilita correlacionar múltiplos sites a uma mesma organização ou indivíduo a partir de dados registrais e históricos de e-mails, o que é extremamente valioso para contornar proteções de privacidade recentes e revelar os dados reais inseridos no momento do primeiro registro do domínio corporativo."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "financeiro",
    "categoria": "financeiro",
    "icone": "💰",
    "titulo": "Investigação Financeira & Patrimonial (FININT)",
    "subtitulo": "// Roteiro metodológico para o rastreamento de criptoativos, decodificação de meios de pagamento, auditoria de dívidas e financiamento político.",

    "imagem": "../img/trilha-financeiro.png",

    "modulos": [
      {
        "num": "01",
        "nome": "Rastreamento Blockchain & Criptoativos",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Endereço de Carteira / Hash de Transação ➔ Saldo / Fluxo de Fundos (Inputs/Outputs) / Outras Carteiras Atreladas / Corretoras de Destino (Exchanges)",
        "objetivo": "Rastrear o fluxo financeiro (\"Follow the Money\") de ativos virtuais descentralizados. O foco é mapear transferências ilícitas (como pagamentos de Sextortion ou Ransomware), observar técnicas de ofuscação (Mixers) e identificar o momento em que os recursos tocam o mundo real por meio de corretoras (Exchanges) para uma possível quebra de sigilo.",
        "camadas": [
          {
            "titulo": "Camada 1: Análise Primária de Blockchain (Exploradores de Blocos)",
            "conceito": "Acesso ao livro-razão público e descentralizado (Blockchain) para auditar os registros matemáticos de transações, que exibem as carteiras de origem (Inputs), as carteiras de destino (Outputs) e os endereços de troco (Change Addresses).",
            "comoFunciona": "A plataforma interroga diretamente os nós da rede para exibir o histórico imutável gravado nos blocos, estruturando saldos e fluxos em uma interface legível.",
            "utilidadeOsint": "Permite visualizar em tempo real os saldos das contas e desatar nós transacionais. Apesar das carteiras serem pseudônimas, a análise do fluxo contínuo de envio evidencia a rota do dinheiro até sua conversão em moeda fiduciária.",
            "ferramentas": [
              {
                "nome": "Blockchain.com Explorer",
                "url": "https://www.blockchain.com/explorer",
                "uso": "Rastreamento, auditoria e análise de transações e carteiras em redes blockchain.",
                "aplicacao": "Motor de busca e explorador de blocos massivo. Permite rastrear saldos, históricos de transferências e horários (timestamps) para redes como Bitcoin (BTC) e Ethereum (ETH). O analista consegue desatar nós transacionais, mapear a movimentação de fundos ilícitos e identificar os endereços de destino que interagem com o alvo."
              }
            ]
          },
          {
            "titulo": "Camada 2: Inteligência e Repositórios de Ativos Virtuais",
            "conceito": "Uso de diretórios táticos que catalogam exploradores e relatórios (Reportes) para otimizar a escolha da ferramenta de acordo com a rede blockchain sob investigação.",
            "comoFunciona": "Portais de referência centralizam a curadoria de dezenas de exploradores focados em ativos virtuais, orientando o investigador sobre qual ferramenta possui melhor suporte analítico para a moeda específica.",
            "utilidadeOsint": "Impede a dispersão técnica do analista em investigações financeiras de cibercrimes (FININT/CYBINT). A ferramenta ajuda a identificar os exploradores que entregam as melhores capacidades (como suporte a APIs ou gráficos de vínculos) e consolida inteligência focada em carteiras maliciosas.",
            "ferramentas": [
              {
                "nome": "BlockSherlock",
                "url": "https://www.blocksherlock.com/",
                "uso": "Curadoria, catalogação e centralização de ferramentas para investigação de criptoativos e fontes abertas (OSINT).",
                "aplicacao": "Portal nacional que funciona como um hub de conhecimento. Cataloga dezenas de blockchain explorers, listando heurísticas e capacidades de cada um. Elimina a dispersão na busca ao indexar de maneira estruturada quais ferramentas entregam os melhores resultados para o rastreamento da rede descentralizada do alvo sob análise."
              }
            ]
          },
          {
            "titulo": "Camada 3: Desanonimização e Inteligência de Ameaças em Web3",
            "conceito": "Busca de vínculos diretos entre carteiras de criptoativos e identidades do mundo real (Web2) ou registros de atividades fraudulentas e extorsões.",
            "comoFunciona": "A partir de um hash de carteira, o analista consulta indexadores de fraudes, ecossistemas de mensageria descentralizada e domínios Web3 para revelar nomes, e-mails ou usernames atrelados ao ativo financeiro.",
            "utilidadeOsint": "Fundamental para realizar a ponte de atribuição técnica (pivoting). Permite verificar se a carteira já foi reportada publicamente em esquemas criminosos ou localizar a identidade do operador rastreando os metadados cadastrados em contratos inteligentes.",
            "ferramentas": [
              {
                "nome": "ScamSearch.io",
                "url": "https://scamsearch.io",
                "uso": "Consulta e verificação de reputação, cruzamento de dados e identificação de registros de fraudes associados a carteiras de criptoativos.",
                "aplicacao": "O analista insere o endereço da carteira de criptoativos do alvo para verificar se aquele identificador específico já foi utilizado em campanhas de phishing, golpes financeiros ou ataques de extorsão/ransomware reportados globalmente, facilitando a atribuição de autoria."
              },
              {
                "nome": "Unstoppable Domains",
                "url": "https://unstoppabledomains.com",
                "uso": "Resolução de domínios descentralizados para extração de endereços de carteiras de criptomoedas e mapeamento de identidades na Web3.",
                "aplicacao": "Vetor crucial de pivoting tático. Ao analisar um domínio descentralizado associado a uma página de phishing ou perfil sob investigação, o analista consegue extrair passivamente os endereços exatos de carteiras vinculadas a ele, além de possíveis links para redes sociais e e-mails inseridos voluntariamente nos metadados do contrato inteligente."
              },
              {
                "nome": "Fragment",
                "url": "https://fragment.com/",
                "uso": "Consulta de propriedade, histórico de transações e vinculação cripto de usernames e números anônimos do Telegram.",
                "aplicacao": "Funciona como uma ponte de atribuição entre o ecossistema de redes sociais e o ambiente Web3. A ferramenta permite mapear e vincular um username público ou um número anônimo (+888) do Telegram diretamente a um endereço de carteira de criptoativos (TON Wallet), viabilizando o rastreamento financeiro de operadores anônimos."
              }
            ]
          }
        ]
      },
      {
        "num": "02",
        "nome": "Decodificação de Meios de Pagamento (PIX)",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "QR Code (Imagem) / Código Copia e Cola ➔ Identificador do Recebedor (Chave Pix) / Nome do Beneficiário / Cidade e Banco",
        "objetivo": "Desofuscar a infraestrutura de pagamentos utilizada por golpistas em campanhas de Phishing, falsas vendas ou extorsão. O intuito é extrair dados reais de beneficiários ou laranjas sem realizar transferências de teste no aplicativo do banco.",
        "camadas": [
          {
            "titulo": "Camada 1: Extração Passiva de Códigos Bidimensionais (QR Code)",
            "conceito": "Leitura e decodificação estática do payload embutido em arquivos de imagem (QR Codes) associados a fraudes e cobranças, isolando o texto bruto ou a URL antes de qualquer interação.",
            "comoFunciona": "A plataforma processa os pixels da imagem fornecida pelo analista (como um print de uma falsa venda) e extrai a string textual decodificada (Pix Copia e Cola) sem conectar-se ao destinatário.",
            "utilidadeOsint": "Permite isolar a string bruta do pagamento sem a necessidade de escanear o código com a câmera do dispositivo móvel pessoal do investigador, impedindo execuções acidentais de links maliciosos ou a exposição de dados do analista.",
            "ferramentas": [
              {
                "nome": "ZXing Decoder Online",
                "url": "https://zxing.org/w/decode.jspx",
                "uso": "Extração passiva de texto, URLs e dados brutos contidos em códigos bidimensionais ou lineares por meio de arquivos de imagem ou links.",
                "aplicacao": "Funciona como um isolador de payloads ocultos. Diante de um e-mail de phishing com um QR code ou de uma imagem coletada em fontes abertas, o analista utiliza o ZXing para revelar a string interna (a linha digitável do Pix) sem precisar ler o código com seu dispositivo móvel. Isso possibilita auditar a evidência em ambientes isolados antes do parsing estrutural."
              }
            ]
          },
          {
            "titulo": "Camada 2: Parsing de Estrutura BR Code (EMV Co)",
            "conceito": "O ecossistema Pix é regido por uma padronização de blocos de texto (BR Code). Ferramentas de decodificação dissecam a linha digitável, isolando matrizes específicas de dados (como as sub-tags sob o ID 26) que contêm as informações vitais da conta mercante.",
            "comoFunciona": "O utilitário processa a linha 'Pix Copia e Cola', destrincha as tags do padrão EMV e converte o bloco de texto ofuscado em um formato estruturado legível.",
            "utilidadeOsint": "Extrai imediatamente a chave Pix, o nome do recebedor (Razão Social ou Nome Físico) e a cidade bancária. Se a chave for 'Aleatória' (EVP), o sistema extrai o seu ID único (UUID), essencial para alimentar futuros pedidos judiciais de quebra de sigilo. Tudo é feito localmente, o que não dispara notificações para a conta do criminoso (garantia de OPSEC).",
            "ferramentas": [
              {
                "nome": "PIX QRCode Tool / Decodificador BR Code",
                "url": "https://github.com",
                "uso": "Decodificação passiva de strings e imagens de QR Codes do Pix para extração de chaves, nomes de beneficiários e dados transacionais.",
                "aplicacao": "Realiza o parsing de códigos baseados no padrão BR Code, isolando e exibindo de forma legível o nome do recebedor, a cidade da conta bancária, o valor estipulado e a chave Pix cadastrada. O uso deste utilitário confere uma OPSEC passiva excelente para o investigador, uma vez que a leitura estática das tags EMV garante que nenhuma transação real seja simulada ou agendada no aplicativo do banco do analista."
              }
            ]
          }
        ]
      },
      {
        "num": "03",
        "nome": "Relacionamentos Bancários & Saldos",
        "opsec": "passivo_ativo_restrito",
        "opsecTexto": "🟢 PASSIVO / 🔴 ATIVO RESTRITO",
        "vetor": "CPF / CNPJ ➔ Instituições Financeiras de Relacionamento / Saldos Esquecidos / Histórico de Crédito",
        "objetivo": "Localizar o capital institucionalizado de um alvo. Auxilia na identificação de contas ocultas que não são movimentadas corriqueiramente e prepara o terreno para as ordens oficiais de quebra de sigilo bancário.",
        "camadas": [
          {
            "titulo": "Camada 1: Triagem de Ativos Inativos e Contas",
            "conceito": "Uso do barramento de cidadania financeira do Estado para interrogar se um documento possui fundos residuais em bancos ou consórcios.",
            "comoFunciona": "A plataforma interroga de forma passiva as bases do Banco Central para verificar a existência de valores consolidados atrelados ao documento civil ou corporativo.",
            "utilidadeOsint": "Retorna uma resposta binária instantânea ('Possui' ou 'Não Possui'). Ao confirmar que há dinheiro esquecido, o investigador obtém a prova passiva incontestável de que o alvo (empresa de fachada ou pessoa física) possui laços formais com o sistema financeiro nacional.",
            "ferramentas": [
              {
                "nome": "Sistema de Valores a Receber - SVR (Banco Central do Brasil)",
                "url": "https://valoresareceber.bcb.gov.br/publico",
                "uso": "Consulta pública da existência de fundos esquecidos ou saldos credores (valores a receber) em instituições financeiras por CPFs ou CNPJs.",
                "aplicacao": "Permite, utilizando apenas CPF/CNPJ e data de nascimento/abertura, validar passivamente a existência de recursos parados sob a titularidade do alvo. A consulta pública inicial exibe apenas uma resposta binária informando se o CPF ou CNPJ pesquisado possui ou não valores a receber, servindo como um excelente indicador indireto de contas ativas ou históricas que podem não ter sido mapeadas na triagem inicial."
              }
            ]
          },
          {
            "titulo": "Camada 2: Inteligência Financeira Estruturada (Relacionamentos)",
            "conceito": "Acesso aos dossiês completos unificados pelo Bacen (Cadastro de Clientes do Sistema Financeiro Nacional – CCS e SCR).",
            "comoFunciona": "O sistema consolida dados enviados por todas as instituições financeiras do país, gerando extratos unificados sobre o relacionamento bancário do indivíduo ou empresa.",
            "utilidadeOsint": "Embora o acesso profundo exija login do titular (Gov.br) ou mandado judicial de quebra de sigilo, a base é a espinha dorsal de relatórios de FININT para elencar onde (quais bancos) estão registradas contas correntes, chaves Pix, dívidas em aberto e faturas de cartão de crédito de um suspeito.",
            "ferramentas": [
              {
                "nome": "Registrato (Banco Central do Brasil)",
                "url": "https://www.bcb.gov.br/meubc/registrato",
                "uso": "Consulta de relacionamentos financeiros, chaves PIX, empréstimos, financiamentos e operações de câmbio atreladas a um CPF ou CNPJ.",
                "aplicacao": "Atua como o painel central que documenta todo o engajamento econômico, empréstimos e financiamentos atrelados a qualquer pessoa jurídica ou civil no Brasil. Os relatórios gerados (como o CCS e o SCR) são comumente encontrados anexados a processos judiciais de quebra de sigilo bancário, tornando-se artefatos essenciais para análise forense local por parte do investigador quando o acesso legal é concedido aos autos."
              }
            ]
          },
          {
            "titulo": "Camada 3: Bureaus de Crédito e Restrições Financeiras",
            "conceito": "Consulta em sistemas unificados de proteção de crédito e distribuidores de informações comerciais para auditar o histórico de crédito mencionado no vetor de pivotagem.",
            "comoFunciona": "O analista interroga bureaus comerciais que agregam dados de inadimplência, protestos, score de crédito e localização cadastral para fechar o cerco sobre a saúde financeira do alvo.",
            "utilidadeOsint": "Complementa a análise de relacionamento bancário do Banco Central, revelando não apenas onde o alvo tem conta, mas como ele se comporta perante o mercado privado (inadimplência, calotes e restrições judiciais ativas).",
            "ferramentas": [
              {
                "nome": "CCFácil",
                "url": "https://ccfacil.com.br/default.aspx",
                "uso": "Consulta consolidada de restrições financeiras, score de crédito, localização cadastral e inteligência societária de pessoas físicas e jurídicas.",
                "aplicacao": "Permite auditar a capacidade financeira e o histórico de crédito do alvo (vetor de pivotagem), fornecendo dados sobre registros de inadimplência, dívidas vencidas e pontuação de score de forma estruturada. A ferramenta é altamente eficaz para ajudar a traçar fluxos de ocultação patrimonial ou insolvência forjada."
              }
            ]
          }
        ]
      },
      {
        "num": "04",
        "nome": "Transações Notariais & Atos Jurídicos",
        "opsec": "ativo_indireto_passivo_trilha",
        "opsecTexto": "🟡 ATIVO INDIRETO / 🔴 PASSIVO COM TRILHA",
        "vetor": "CPF / CNPJ ➔ Transferências de Patrimônio / Testamentárias / Procuradores Laranjas",
        "objetivo": "Rastrear alienações de bens antes que sejam publicizadas em matrículas imobiliárias, e descobrir a identidade de indivíduos ocultos que detêm procurações e plenos poderes para operar contas bancárias ou empresas em nome do alvo.",
        "camadas": [
          {
            "titulo": "Camada 1: Centralização de Serviços e Escrituras",
            "conceito": "Acesso ao indexador digital do Colégio Notarial que unifica os atos lavrados em todos os cartórios de notas do país (como a CESDI e a CEP).",
            "comoFunciona": "O sistema centraliza e indexa os dados de atos notariais lavrados em todos os cartórios de notas do território nacional, exigindo identificação do investigador para o acesso ao banco de dados.",
            "utilidadeOsint": "Evidencia táticas avançadas de blindagem patrimonial, como simulações de separação e divórcio, negócios de promessa de compra e venda engavetados e mapeamento da rede de testamentos, essencial para investigações de fraude contra credores.",
            "ferramentas": [
              {
                "nome": "CENSEC (Central Notarial de Serviços Eletrônicos Compartilhados)",
                "url": "https://www.censec.org.br/",
                "uso": "Centralização e consulta de atos notariais, testamentos, procurações públicas e escrituras lavradas em cartórios de notas do Brasil.",
                "aplicacao": "Serve como uma fonte de dados de alta integridade para rastrear a alienação de bens móveis e imóveis e identificar procuradores ocultos com plenos poderes de representação legal. A busca na CESDI e CEP é um recurso crítico para identificar negócios jurídicos que ainda não foram registrados na matrícula do imóvel. Aviso OPSEC: Exige identificação estrita e assinatura digital (e-Notariado/ICP-Brasil), as trilhas de auditoria da plataforma registram quem realizou a consulta."
              }
            ]
          },
          {
            "titulo": "Camada 2: Registros Imobiliários e Pesquisa de Bens",
            "conceito": "Consulta centralizada a centrais de registro de imóveis para localizar propriedades averbadas e comarcas competentes.",
            "comoFunciona": "Plataformas que unificam o acesso digital aos Cartórios de Registro de Imóveis, permitindo solicitar certidões e pesquisar a existência de bens a partir de um identificador civil ou de coordenadas geográficas.",
            "utilidadeOsint": "Complementa a busca notarial verificando se a escritura pública previamente identificada já foi averbada na matrícula do imóvel. Permite rastrear transações de compra e venda consolidadas e identificar gravames judiciais sobre o patrimônio.",
            "ferramentas": [
              {
                "nome": "Registradores - ONR (Operador Nacional do Registro Eletrônico de Imóveis)",
                "url": "https://registradores.onr.org.br/",
                "uso": "Centralização de consultas a matrículas, pesquisa de bens e certidões digitais de imóveis em cartórios de registro de imóveis do Brasil.",
                "aplicacao": "A partir de um CPF ou CNPJ na funcionalidade de 'Pesquisa de Bens', o analista pode mapear propriedades imobiliárias registradas em nome do alvo, identificar transações de compra e venda na matrícula e rastrear garantias reais ou gravames (como penhoras judiciais), sendo crítico para a localização de ativos imobiliários."
              },
              {
                "nome": "Mapa do Registro de Imóveis do Brasil",
                "url": "https://www.registrodeimoveis.org.br/mapa",
                "uso": "Mapeamento georreferenciado, localização de perímetros e identificação de circunscrições imobiliárias em cartórios do Brasil.",
                "aplicacao": "Atua como um elo entre o espaço físico e o registro legal. A partir de coordenadas geográficas, endereços ou delimitações visuais no mapa, o analista consegue identificar com precisão técnica qual circunscrição imobiliária (cartório específico) é competente por aquela coordenada, facilitando a requisição posterior de matrículas."
              }
            ]
          },
          {
            "titulo": "Camada 3: Publicidade de Atos Civis e Protestos Notariais",
            "conceito": "Pesquisa em centrais de registro civil e cartórios de protesto para identificar alterações no estado civil e certificar a inadimplência formal.",
            "comoFunciona": "Os sistemas indexam de forma pública os editais de casamentos (proclamas) e consolidam títulos protestados, permitindo buscas em âmbito nacional ou estadual a partir dos dados de qualificação do alvo.",
            "utilidadeOsint": "Auxilia na descoberta de cônjuges (que frequentemente atuam como laranjas familiares no recebimento de bens transferidos) e revela o estado de insolvência ou dívidas ativas formalizadas em cartório contra o investigado.",
            "ferramentas": [
              {
                "nome": "Portal e-Proclamas",
                "url": "https://proclamas.org.br/",
                "uso": "Localização de editais de proclamas de casamento para fins de cruzamento de dados civis e qualificação de pessoas.",
                "aplicacao": "Ideal para a fase de estruturação e triangulação de vínculos familiares, ajudando a confirmar o estado civil iminente ou consolidado, identificar nomes de cônjuges, testemunhas, e revelar sobrenomes de casados ou potenciais endereços de residência associados aos nubentes informados nos editais cartorários."
              },
              {
                "nome": "Central Nacional de Serviços Compartilhados dos Protestos (Pesquisa Protesto)",
                "url": "https://www.pesquisaprotesto.com.br/",
                "uso": "Consulta nacionalizada de protestos em cartórios de títulos vinculada a CPFs ou CNPJs.",
                "aplicacao": "Atua como uma ferramenta fundamental para analisar o histórico de inadimplência e a saúde financeira de indivíduos e organizações. A busca indicativa inicial retorna de forma gratuita a existência de protestos em âmbito nacional e o cartório de origem, fornecendo indicativos imediatos de insolvência."
              },
              {
                "nome": "Consulta de Protesto - CENPROT-SP",
                "url": "https://protestosp.com.br/consulta-de-protesto",
                "uso": "Consulta de existência de protestos de títulos em cartórios do Estado de São Paulo para verificação de inadimplência e passivos.",
                "aplicacao": "Permite verificar, de forma centralizada e em tempo real, se um determinado CPF ou CNPJ possui títulos inadimplentes protestados em qualquer um dos Cartórios de Protesto de Letras e Títulos do estado de São Paulo, o que serve como um forte indicador de litígios comerciais ou tentativas de ocultação de passivos."
              }
            ]
          }
        ]
      },
      {
        "num": "05",
        "nome": "Dívidas, Protestos & Execuções Fiscais",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "CPF / CNPJ ➔ Títulos em Cartório / Dívida Ativa da União / Processos Trabalhistas",
        "objetivo": "Fazer um Due Diligence e Background Check de passivos do alvo, avaliando seu score, idoneidade corporativa, grau de insolvência real ou o uso de empresas para acumular calotes milionários de má-fé.",
        "camadas": [
          {
            "titulo": "Camada 1: Mapeamento de Protestos e Títulos Notariais",
            "conceito": "Varredura nas centrais compartilhadas de tabelionatos de protesto para reportar pendências financeiras registradas contra o CPF ou CNPJ.",
            "comoFunciona": "A plataforma realiza uma consulta unificada em cartórios de protestos para checar a regularidade financeira e títulos pendentes em âmbito nacional e estadual.",
            "utilidadeOsint": "Sinalizador tático rápido: uma empresa atolada em protestos em dezenas de cartórios demonstra risco contumaz de mercado ou a iminência de um fechamento fraudulento.",
            "ferramentas": [
              {
                "nome": "Central Nacional de Serviços Compartilhados dos Protestos (Pesquisa Protesto)",
                "url": "https://www.pesquisaprotesto.com.br/",
                "uso": "Consulta nacionalizada de protestos em cartórios de títulos vinculada a CPFs ou CNPJs.",
                "aplicacao": "Atua como uma ferramenta fundamental para analisar o histórico de inadimplência e a saúde financeira de indivíduos e organizações. A busca indicativa inicial retorna de forma gratuita a existência de protestos em âmbito nacional e o cartório de origem, fornecendo indicativos imediatos de insolvência."
              },
              {
                "nome": "Consulta de Protesto - CENPROT-SP",
                "url": "https://protestosp.com.br/consulta-de-protesto",
                "uso": "Consulta de existência de protestos de títulos em cartórios do Estado de São Paulo para verificação de inadimplência e passivos.",
                "aplicacao": "Permite verificar, de forma centralizada e em tempo real, se um determinado CPF ou CNPJ possui títulos inadimplentes protestados em qualquer um dos Cartórios de Protesto de Letras e Títulos do estado de São Paulo, o que serve como um forte indicador de litígios comerciais ou tentativas de ocultação de passivos."
              }
            ]
          },
          {
            "titulo": "Camada 2: Execuções e Regularidade Governamental",
            "conceito": "Sistemas que consolidam os processos de cobrança onde o próprio Estado figura como cobrador do investigado (Dívidas Fiscais, Multas e FGTS).",
            "comoFunciona": "O investigador realiza consultas e extrações em portais de devedores da União para identificar a existência e o montante de tributos sonegados ou não pagos.",
            "utilidadeOsint": "Uma certidão positiva (ou negada) denuncia passivos estruturais gigantescos contra a União, servindo como forte indício ou prova material em crimes de sonegação, fraude fiscal e lavagem de dinheiro.",
            "ferramentas": [
              {
                "nome": "REGULARIZE (Procuradoria-Geral da Fazenda Nacional - PGFN)",
                "url": "https://www.regularize.pgfn.gov.br/",
                "uso": "Consulta, negociação e acompanhamento de débitos inscritos em Dívida Ativa da União e do FGTS.",
                "aplicacao": "A identificação de inscrições em dívida ativa permite rastrear o histórico de inadimplência fiscal com o Estado, mensurar o passivo financeiro acumulado por empresas ou indivíduos e identificar processos de execução fiscal em andamento."
              },
              {
                "nome": "Consultas de Certidão PGFN/RFB (Pessoa Física)",
                "url": "https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/EmitirPGFN",
                "uso": "Emissão de Certidão Negativa de Débitos (CND) relativos a Créditos Tributários Federais e à Dívida Ativa da União para Pessoas Físicas.",
                "aplicacao": "A emissão bem-sucedida ou a rejeição da certidão serve como um indicativo técnico de alta confiabilidade sobre a existência de execuções fiscais, insolvência e litígios financeiros volumosos contra o Estado."
              },
              {
                "nome": "Dados Abertos da Dívida Ativa da União (PGFN)",
                "url": "https://www.gov.br/pgfn/pt-br/assuntos/divida-ativa-da-uniao/transparencia-fiscal-1/copy_of_dados-abertos",
                "uso": "Consulta e extração de dados abertos sobre devedores e débitos inscritos na Dívida Ativa da União e do FGTS.",
                "aplicacao": "Permite ao analista de inteligência baixar massivamente as planilhas de devedores para identificar passivos financeiros maciços de forma passiva, rastrear situações de insolvência ou fraude fiscal, e cruzar os dados extraídos localmente com outras bases societárias no computador da investigação."
              }
            ]
          },
          {
            "titulo": "Camada 3: Passivos Trabalhistas e Certidões do Judiciário",
            "conceito": "Verificação de litígios, processos e execuções na Justiça do Trabalho vinculados ao CPF ou CNPJ do investigado.",
            "comoFunciona": "A plataforma interroga os bancos nacionais e regionais de devedores trabalhistas para atestar a existência de sentenças condenatórias não pagas ou acordos judiciais descumpridos.",
            "utilidadeOsint": "Identifica de imediato se o alvo corporativo negligencia deveres fundamentais de mercado (indicativo primário de quebra fraudulenta) ou evidencia que um indivíduo acumula dívidas trabalhistas graves passíveis de execução forçada.",
            "ferramentas": [
              {
                "nome": "Certidão de Débitos Trabalhistas (TST - CNDT)",
                "url": "https://www.tst.jus.br/certidao1",
                "uso": "Emissão e validação de Certidão Negativa de Débitos Trabalhistas (CNDT) para verificação de inadimplência e execuções na Justiça do Trabalho.",
                "aplicacao": "A constatação de uma certidão positiva ou a inserção do alvo no BNDT funciona como um indicador técnico de alta fidelidade sobre a existência de passivos jurídicos sufocantes, insolvência iminente e tentativas latentes de ocultação ou dilapidação de patrimônio para evasão de obrigações legais."
              },
              {
                "nome": "Certidão de Feitos Trabalhistas (TRT-3)",
                "url": "https://certidao.trt3.jus.br/certidao/feitosTrabalhistas/aba1.emissao.htm",
                "uso": "Emissão de Certidão de Feitos Trabalhistas para verificação de processos, reclamações e passivos trabalhistas na jurisdição do TRT.",
                "aplicacao": "A identificação de processos trabalhistas volumosos atua como um forte indicador de risco operacional, insolvência oculta, desconsideração da personalidade jurídica iminente ou potenciais fraudes contra credores."
              }
            ]
          }
        ]
      },
      {
        "num": "06",
        "nome": "Financiamento Político & Dados Abertos",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "CNPJ / CPF ➔ Doações Eleitorais / Repasses Governamentais / Candidatos Favorecidos",
        "objetivo": "Rastrear a conexão entre o capital privado (do alvo investigado) e a administração pública (Pessoas Politicamente Expostas - PEPs). Útil para mapear pagamentos por \"favores\", corrupção sistêmica e identificar quem se beneficiou de fraudes licitatórias.",
        "camadas": [
          {
            "titulo": "Camada 1: Transparência e Empenhos Governamentais",
            "conceito": "Agregadores orçamentários da Controladoria-Geral da União e tribunais de contas que disponibilizam, no detalhe, cada nota emitida pelo governo pagando por serviços.",
            "comoFunciona": "O investigador realiza consultas diretas em portais de transparência ativos informando o CPF ou CNPJ do alvo para levantar histórico de contratos, salários ou auxílios recebidos do erário.",
            "utilidadeOsint": "Permite ver o fluxo real do dinheiro saindo dos cofres públicos para a empresa (Pessoa Jurídica) ou os vínculos de benefícios e remuneração de um indivíduo (Pessoa Física), validando a dependência do alvo perante o erário.",
            "ferramentas": [
              {
                "nome": "Portal da Transparência (Pessoa Jurídica)",
                "url": "https://portaldatransparencia.gov.br/pessoa-juridica/",
                "uso": "Consulta e auditoria de contratos, convênios, repasses financeiros e sanções aplicadas a empresas pelo Governo Federal.",
                "aplicacao": "Consolida em um único perfil o recebimento de recursos federais, contratos ativos ou encerrados firmados com ministérios e autarquias, além de registros de penalidades vigentes (como impedimentos de licitar ou declarações de inidoneidade)."
              },
              {
                "nome": "Portal da Transparência (Pessoa Física)",
                "url": "https://portaldatransparencia.gov.br/pessoa-fisica/busca/",
                "uso": "Consulta e auditoria de vínculos institucionais, remunerações de servidores e recebimento de auxílios governamentais por pessoas físicas.",
                "aplicacao": "Permite mapear de forma imediata o vínculo empregatício de um alvo com a administração pública (identificando se é servidor civil ou militar), descobrir a remuneração detalhada recebida e listar o recebimento de benefícios sociais."
              }
            ]
          },
          {
            "titulo": "Camada 2: Raspagem Massiva e Dados Abertos (Big Data OSINT)",
            "conceito": "Extração massiva e download de bases de dados abertas governamentais para cruzamentos locais e mineração offline.",
            "comoFunciona": "Em vez de realizar consultas individuais em interfaces web, o analista faz o download de arquivos consolidados (CSV, JSON, XML) contendo tabelas massivas de orçamento público, saúde e transportes.",
            "utilidadeOsint": "Viabiliza a criação de ecossistemas locais de investigação. A base tratada no computador do investigador permite a auditoria passiva em milhões de linhas simultaneamente, expondo consórcios recorrentes, dependências econômicas e redes de fraudes sem gerar logs nos servidores do Estado.",
            "ferramentas": [
              {
                "nome": "Portal da Transparência (Download de Dados)",
                "url": "https://portaldatransparencia.gov.br/download-de-dados",
                "uso": "Extração massiva de bases de dados abertas governamentais sobre gastos públicos, contratos, convênios, servidores e benefícios sociais.",
                "aplicacao": "Permite baixar bases completas de empresas sancionadas (CEIS/CNEP), rastrear de forma massiva quais CPFs ou CNPJs receberam recursos federais e identificar as empresas contratadas por órgãos públicos e seus respectivos fluxos orçamentários."
              },
              {
                "nome": "Portal de Dados Abertos do Governo Digital (Gov.br)",
                "url": "https://dados.gov.br",
                "uso": "Centralização, busca global e download massivo de bases de dados estruturadas de órgãos públicos e instituições federais brasileiras.",
                "aplicacao": "A 'mina de ouro' para a criação de bases de dados locais de pivoting. Permite baixar dumps de registros da Receita Federal (CNPJ/QSA) e listas estruturadas de outros ministérios para correlacionar grandes redes de inteligência corporativa offline."
              },
              {
                "nome": "Conjunto de Dados Abertos (TCE-SP)",
                "url": "https://transparencia.tce.sp.gov.br/conjunto-de-dados",
                "uso": "Extração massiva e download de bases de dados abertas sobre fiscalização financeira, licitações e contratos municipais de São Paulo.",
                "aplicacao": "Disponibiliza para download integral arquivos estruturados contendo históricos completos de despesas, licitações, aditivos e repasses ao terceiro setor de 644 municípios paulistas, essenciais para mapear padrões de contratação."
              }
            ]
          },
          {
            "titulo": "Camada 3: Inteligência Eleitoral e Caixa de Campanha",
            "conceito": "Plataformas da Justiça Eleitoral que tornam obrigatória e transparente a prestação de contas de todos que pleiteiam cargos no Estado.",
            "comoFunciona": "Os portais processam dados inseridos por comitês de campanha e partidos, exibindo aos cidadãos as receitas, despesas, listagens de fornecedores de materiais gráficos, doadores físicos e declarações de bens.",
            "utilidadeOsint": "Viabiliza a criação de séries históricas de evolução patrimonial declarada por candidatos, o mapeamento de Pessoas Politicamente Expostas (PEPs) e a visualização da \"teia\" financeira e partidária que sinaliza esquemas ou empresas fantasmas no pleito.",
            "ferramentas": [
              {
                "nome": "DivulgaCandContas (TSE)",
                "url": "https://divulgacandcontas.tse.jus.br/",
                "uso": "Levantamento de dados biográficos, consultas patrimoniais e auditoria de fluxo financeiro de agentes políticos e candidatos no Brasil.",
                "aplicacao": "Visualização individual para investigar os bens de candidatos. Permite identificar vínculos familiares, evolução patrimonial histórica e redes de influência por meio do cruzamento de doadores e fornecedores de campanha de forma retroativa."
              },
              {
                "nome": "Portal de Dados Abertos do TSE",
                "url": "https://dadosabertos.tse.jus.br",
                "uso": "Consulta e download massivo de dados sobre candidaturas, prestação de contas eleitorais, bens declarados, doadores e resultados de votações.",
                "aplicacao": "Extração dos datasets totais para construir cruzamentos e grafos relacionais (em SQL/Python) offline. Ajuda a expor possíveis esquemas de lavagem de dinheiro ao correlacionar empresas prestadoras de serviços (CNPJs) com repasses de campanha."
              },
              {
                "nome": "Certidão de Filiação Partidária - TSE (Filia Consulta)",
                "url": "https://filia-consulta.tse.jus.br/#/principal/certidao-gerar",
                "uso": "Emissão e validação de Certidão de Filiação Partidária para identificação de vínculos políticos, partidários e ideológicos de pessoas físicas.",
                "aplicacao": "Permite mapear o posicionamento ideológico formal de um alvo e descobrir seu envolvimento com partidos políticos. Vital no levantamento de Pessoas Politicamente Expostas (PEPs) para identificar possíveis conflitos de interesse em licitações e contratações públicas."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "imagem",
    "categoria": "midia",
    "icone": "📷",
    "titulo": "Imagens & Mídias Visuais (IMINT / Forense Visual)",
    "subtitulo": "// Roteiro metodológico para extração de metadados, biometria facial, cronolocalização, visão computacional e preservação de evidências visuais.",

    "imagem": "../img/trilha-imagem.png",

    "modulos": [
      {
        "num": "01",
        "nome": "Extração de Metadados & EXIF",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Arquivo de Imagem ➔ Coordenadas GPS / Data e Hora Originais / Marca e Modelo do Dispositivo / Número de Série",
        "objetivo": "Extrair as informações técnicas (EXIF, IPTC, XMP) gravadas pelo hardware no momento do clique. Esse bloco de dados permite geolocalizar o momento exato em que a fotografia foi tirada e identificar o dispositivo utilizado antes de realizar análises visuais mais profundas.",
        "camadas": [
          {
            "titulo": "Camada 1: Visualização Rápida e Higienização (OPSEC)",
            "conceito": "Leitura dos blocos de metadados diretamente na web ou por meio de extensões de navegador para validar parâmetros técnicos de captura.",
            "comoFunciona": "Plataformas e extensões inspecionam os parâmetros técnicos ocultos da mídia diretamente da página web ou de arquivos locais submetidos, revelando e permitindo o expurgo de dados como coordenadas e datas.",
            "utilidadeOsint": "Serve tanto para a coleta rápida de evidências quanto para a proteção do investigador, permitindo a limpeza (expurgo) dos metadados de fotos geradas pela própria equipe de investigação antes de publicá-las em contas de cobertura (sock puppets).",
            "ferramentas": [
              {
                "nome": "Exif Viewer",
                "url": "https://addons.mozilla.org/pt-BR/firefox/addon/exif-viewer/",
                "uso": "Extração e análise de metadados EXIF/IPTC/XMP de imagens diretamente no navegador para análise forense e geolocalização.",
                "aplicacao": "Extensão de navegador que permite auditar de forma passiva e instantânea os metadados de imagens diretamente da página web, revelando coordenadas GPS e carimbos de data/hora sem a necessidade de baixar o arquivo e submetê-lo a softwares externos pesados."
              },
              {
                "nome": "VerExif",
                "url": "https://www.verexif.com/",
                "uso": "Extração, leitura e remoção de metadados EXIF de imagens para validação de veracidade e OPSEC.",
                "aplicacao": "Plataforma online web rápida para visualizar metadados ocultos de uma fotografia, oferecendo uma função direta para remover todas as propriedades identificáveis do arquivo original. É essencial para limpar fotos capturadas pelo analista antes de publicações operacionais."
              },
              {
                "nome": "Jimpl",
                "url": "https://jimpl.com/",
                "uso": "Visualização e remoção de metadados EXIF de imagens para análise e OPSEC.",
                "aplicacao": "Plataforma web rápida projetada para inspecionar e remover metadados ocultos de imagens. Fornece a opção direta para expurgar esses registros extraídos, como coordenadas e softwares de edição, reduzindo a pegada digital do arquivo final."
              },
              {
                "nome": "Pic2Map",
                "url": "https://www.pic2map.com",
                "uso": "Extração automatizada de metadados EXIF de arquivos de imagem e plotagem de coordenadas GPS em mapas digitais para verificação de veracidade.",
                "aplicacao": "Realiza a leitura da estrutura binária de imagens, extraindo dados do padrão EXIF e renderizando os pontos geográficos diretamente em um mapa interativo. Permite confrontar a integridade da evidência visual com o álibi do investigado estabelecendo uma linha do tempo geográfica."
              }
            ]
          },
          {
            "titulo": "Camada 2: Extração Forense Local e Processamento em Lote",
            "conceito": "Leitura e decodificação offline das tags de fabricantes de hardware usando ferramentas de linha de comando.",
            "comoFunciona": "Utilitários multiplataforma processam arquivos localmente em terminais para extrair, editar e escrever blocos de informações gravados em imagens e vídeos.",
            "utilidadeOsint": "Garante 100% de segurança operacional (OPSEC) ao processar os dados localmente de forma offline, preservando que a análise não gere tráfego de rede. É ideal para automatizar a extração de metadados em lote de centenas de imagens simultaneamente.",
            "ferramentas": [
              {
                "nome": "ExifTool",
                "url": "https://exiftool.org/",
                "uso": "Leitura, escrita e modificação de metadados (EXIF, IPTC, XMP) de múltiplos formatos de arquivos para análise forense e higienização de mídias.",
                "aplicacao": "A ferramenta forense definitiva baseada em linha de comando. Capaz de decodificar tags complexas e processar de forma passiva arquivos obtidos durante a investigação para extrair carimbos de data/hora. Permite também remover metadados de arquivos gerados pelo analista antes do compartilhamento."
              }
            ]
          },
          {
            "titulo": "Camada 3: Rastreio por Assinatura de Hardware",
            "conceito": "Pivotagem baseada no número de série único do sensor da câmera gravado no arquivo EXIF.",
            "comoFunciona": "A plataforma isola o serial de hardware do sensor na foto fornecida e varre o banco de dados indexado da internet para localizar outras imagens capturadas por esse exato equipamento.",
            "utilidadeOsint": "Permite descobrir se o mesmo equipamento fotográfico foi utilizado para publicar imagens em outras contas ou plataformas, quebrando pseudônimos para vincular perfis anônimos ao mesmo alvo de interesse ou rastrear ativos furtados.",
            "ferramentas": [
              {
                "nome": "Stolen Camera Finder",
                "url": "https://www.stolencamerafinder.com",
                "uso": "Rastreamento de dispositivos fotográficos e identificação de autoria de mídias através do mapeamento de números de série em metadados EXIF.",
                "aplicacao": "Raspa e indexa imagens públicas com base no número de série interno da câmera. Auxilia a conectar contas aparentemente anônimas ao mesmo indivíduo identificando se aquele mesmo equipamento publicou fotos no Flickr ou em outros repositórios."
              }
            ]
          }
        ]
      },
      {
        "num": "02",
        "nome": "Pesquisa Reversa & Biometria Facial",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Rosto / Ponto de Referência (Landmark) ➔ Perfis em Redes Sociais / Nomes / Locais",
        "objetivo": "Descobrir onde uma imagem específica (ou o rosto nela contido) foi publicada na internet, desmascarando contas falsas, encontrando o verdadeiro nome de um suspeito ou localizando a origem primária de uma fotografia.",
        "camadas": [
          {
            "titulo": "Camada 1: Reconhecimento Facial Massivo (Web)",
            "conceito": "Mapeamento de vetores biométricos do rosto e busca em bilhões de imagens indexadas (fóruns, notícias, sites governamentais).",
            "comoFunciona": "A plataforma extrai a geometria facial da foto fornecida e varre o ciberespaço em busca de correspondências estruturais idênticas em indexadores públicos.",
            "utilidadeOsint": "Transforma uma imagem solta no verdadeiro nome do alvo, localizando redes sociais ocultas e reportagens passadas associadas àquela face, independentemente da idade ou do cenário da foto.",
            "ferramentas": [
              {
                "nome": "PimEyes",
                "url": "https://pimeyes.com/",
                "uso": "Busca reversa de faces e reconhecimento facial massivo na internet para localização de perfis e imagens de alvos.",
                "aplicacao": "Motor avançado baseado em IA que localiza rostos pela web, excelente para encontrar sites periféricos ou notícias antigas de um indivíduo. Diferente da busca tradicional, foca unicamente na estrutura biométrica do rosto, encontrando a pessoa em ângulos e cenários completamente distintos."
              },
              {
                "nome": "FaceCheck.id",
                "url": "https://facecheck.id/",
                "uso": "Reconhecimento facial e busca reversa de imagens para identificação de pessoas e perfis na internet.",
                "aplicacao": "Motor focado em localizar correspondências visuais em redes sociais, fóruns e registros criminais ou públicos. Ideal para expor golpistas em redes sociais e desmascarar contas falsas (sock puppets), gerando um 'score' de confiança para o rosto submetido."
              }
            ]
          },
          {
            "titulo": "Camada 2: Comparação Biométrica 1:1 e Extração de Atributos",
            "conceito": "Cálculo geométrico da similaridade entre dois arquivos distintos para validar identidades e extração de metadados fisionômicos.",
            "comoFunciona": "Ferramentas recebem duas ou mais fotografias e comparam matematicamente os pontos nodais da face, emitindo laudos percentuais de correspondência.",
            "utilidadeOsint": "Permite ao investigador testar matematicamente se a foto de um perfil suspeito pertence à mesma pessoa de um documento oficial (CNH/RG) ou identificar microexpressões e dados demográficos do suspeito.",
            "ferramentas": [
              {
                "nome": "MxFace - Face Comparing",
                "url": "https://mxface.ai/",
                "uso": "Comparação, verificação e indexação biométrica de faces em imagens para checagem de identidade.",
                "aplicacao": "Ferramenta focada em comparação facial 1:1 via IA e Deep Learning. Permite automatizar a verificação se fotos coletadas de plataformas diferentes pertencem ao mesmo indivíduo, devolvendo percentuais exatos de similaridade."
              },
              {
                "nome": "Betaface (Old Demo)",
                "url": "https://betaface.com/demo_old.html",
                "uso": "Reconhecimento facial, extração de características biométricas e análise comparativa de faces por inteligência artificial.",
                "aplicacao": "Além de testar similaridade, enriquece o perfil de alvos extraindo automatizadamente características demográficas, como estimativa de idade, gênero, cor de cabelo, formato do rosto e uso de óculos."
              },
              {
                "nome": "Amazon Rekognition",
                "url": "https://aws.amazon.com/pt/rekognition/",
                "uso": "Reconhecimento, análise automatizada e extração de metadados em imagens e vídeos usando Visão Computacional e IA na nuvem.",
                "aplicacao": "Serviço altamente escalável para cruzar rostos de suspeitos com grandes bancos de dados. Realiza a detecção de emoções, OCR em planos de fundo de fotos e validação facial de alta precisão entre redes sociais e documentos de identidade."
              },
              {
                "nome": "OpenFace",
                "url": "https://github.com/TadasBaltrusaitis/OpenFace",
                "uso": "Mapeamento de marcos faciais, rastreamento de olhar, estimativa de pose de cabeça e análise de expressões de código aberto.",
                "aplicacao": "Essencial para casos que demandam sigilo total (OPSEC). Por rodar 100% offline, permite ao analista extrair atributos biométricos e auditar falhas estruturais em vídeos suspeitos de deepfakes sem vazar os arquivos para a nuvem."
              }
            ]
          },
          {
            "titulo": "Camada 3: Busca Ampla, Reconhecimento de Objetos e Cenários (Landmarks)",
            "conceito": "Identificação de similaridades geométricas de objetos, monumentos, logotipos e cenários gerais em imagens de fontes abertas.",
            "comoFunciona": "Mecanismos de busca visuais indexam a imagem e encontram a sua origem original na rede ou elementos com características arquitetônicas/naturais visualmente equivalentes.",
            "utilidadeOsint": "Viabiliza o rastreamento da origem cronológica da foto para identificar manipulações de contexto e descobrir coordenadas geográficas exatas através do reconhecimento automatizado de pontos de interesse.",
            "ferramentas": [
              {
                "nome": "Google Lens",
                "url": "https://lens.google/",
                "uso": "Reconhecimento visual baseado em inteligência artificial, extração de texto (OCR) e identificação de objetos e marcos geográficos.",
                "aplicacao": "Permite focar e recortar (crop) detalhes específicos da foto, reconhecendo instantaneamente marcos geográficos (landmarks), logotipos corporativos, placas ou produtos, extraindo também o texto da imagem de maneira altamente resiliente."
              },
              {
                "nome": "Google Images",
                "url": "https://images.google.com",
                "uso": "Pesquisa inversa de imagens, localização de fontes originais de arquivos visuais e correspondência gráfica.",
                "aplicacao": "Indexador clássico e primário para descobrir a origem de imagens indexadas, ideal para atestar se a imagem submetida foi clonada de outro local da web, identificando o uso indevido de fotos alheias em avatares."
              },
              {
                "nome": "Yandex Images",
                "url": "https://yandex.com/images",
                "uso": "Busca reversa de imagens, reconhecimento facial e identificação de padrões visuais em fontes abertas.",
                "aplicacao": "Motor altamente sofisticado e agressivo de IA. Frequentemente superior a motores ocidentais na identificação de traços geográficos, placas e infraestruturas do Leste Europeu e Ásia, além de ser excelente na correspondência solta de feições sob baixa luminosidade."
              }
            ]
          }
        ]
      },
      {
        "num": "03",
        "nome": "Análise de Integridade & Deteção de IA",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Imagem Suspeita ➔ Assinaturas de Renderização / Nível de Erro / Provas de Manipulação",
        "objetivo": "Auditar se a mídia visual é autêntica, se foi alterada em softwares de edição ou se trata-se de um conteúdo totalmente fabricado por Inteligência Artificial ou Deepfakes.",
        "camadas": [
          {
            "titulo": "Camada 1: Forense Visual e Manipulação de Pixels",
            "conceito": "Identificação de divergências nas taxas de compressão (ELA) ou clonagem de pixels dentro de um arquivo.",
            "comoFunciona": "A plataforma atua como um laboratório de análise estática, aplicando múltiplos algoritmos matemáticos na matriz de pixels da imagem para destacar inserções, exclusões e assimetrias que não são visíveis a olho nu.",
            "utilidadeOsint": "Demonstra digitalmente se um documento, placa de carro ou objeto foi inserido posteriormente na cena, garantindo que fotografias ou capturas de tela coletadas não tenham sofrido manipulações deliberadas para forjar provas.",
            "ferramentas": [
              {
                "nome": "FotoForensics",
                "url": "https://fotoforensics.com/",
                "uso": "Análise forense digital de mídias, extração de metadados e detecção de manipulações e edições em imagens.",
                "aplicacao": "Aplica a técnica de Error Level Analysis (ELA) para identificar a taxa de compressão diferencial em componentes da imagem, revelando edições como adições ou exclusões no plano da fotografia. Excelente para garantir que documentos digitalizados ou fotos em redes sociais não foram adulterados para desinformar."
              },
              {
                "nome": "Photopea",
                "url": "https://www.photopea.com/",
                "uso": "Edição avançada de imagens, análise vetorial, tratamento de capturas de tela e extração básica de metadados visuais.",
                "aplicacao": "Editor de gráficos avançado baseado em web. Permite ao analista separar camadas de arquivos de design para identificar modificações manuais, inspecionar propriedades visuais para triagem e aumentar o contraste de documentos digitalizados para expor adulterações estruturais."
              }
            ]
          },
          {
            "titulo": "Camada 2: Detecção e Proteção contra Mídia Sintética",
            "conceito": "Análise de anomalias estruturais de renderização ou identificação de assinaturas digitais (Marcas d'água) injetadas no arquivo.",
            "comoFunciona": "Sistemas validam o conteúdo visual contra modelos adversariais para determinar se a imagem foi criada por algoritmos generativos de difusão (GANs), identificando ruídos estatísticos e imperfeições clássicas de IA.",
            "utilidadeOsint": "Valida se a foto de perfil de um possível Sock Puppet (conta falsa) ou o áudio de um alvo foi gerado por IA (ex: Midjourney, Stable Diffusion ou clones de voz), confirmando a existência de campanhas de desinformação.",
            "ferramentas": [
              {
                "nome": "AI or Not",
                "url": "https://www.aiornot.com/",
                "uso": "Detecção de conteúdo gerado por inteligência artificial (imagens, áudio, vídeo e texto) e verificação de deepfakes.",
                "aplicacao": "Audita se a imagem, arquivo de áudio ou vídeo é de autoria humana ou se foi gerada por modelos difusos de IA. A plataforma mapeia anomalias estruturais, consistência de quadros e assinaturas térmicas de renderização de pixels para atestar a autenticidade de um arquivo de mídia."
              },
              {
                "nome": "SynthID",
                "url": "https://deepmind.com/synthid",
                "uso": "Identificação e inserção de marcas d'água digitais imperceptíveis em conteúdos gerados por inteligência artificial.",
                "aplicacao": "Tecnologia da Google DeepMind que atua de forma nativa nas estruturas internas dos arquivos. Identifica marcas d'água invisíveis embutidas diretamente na distribuição de pixels da imagem ou nos espectrogramas de áudio da mídia gerada artificialmente, resistindo a compressões e edições."
              },
              {
                "nome": "AmIReal",
                "url": "https://seintpl.github.io/AmIReal/",
                "uso": "Verificação de avatares e identidades sintéticas (Sock Puppets / IA).",
                "aplicacao": "Guia analítico metodológico focado na avaliação técnica de assimetrias visuais. Auxilia o analista a inspecionar imperfeições clássicas de renderização sintética de rostos criados por IA (como dentes desalinhados, fundos duplicados, brincos assimétricos e posicionamento pupilar fixo) para detectar falsos perfis de inteligência."
              }
            ]
          },
          {
            "titulo": "Camada 3: Forense Audiovisual e Estrutural",
            "conceito": "Análise estática e dinâmica focada em validar a autenticidade de arquivos de áudio (clones de voz) e vídeos (deepfakes) através de espectrografia e mapeamento biométrico.",
            "comoFunciona": "As ferramentas extraem frequências de som para formar espectrogramas analíticos ou rastreiam os marcos faciais quadro a quadro em vídeos para detectar anomalias biológicas em seres humanos.",
            "utilidadeOsint": "Essencial para auditar mídias complexas em que a IA foi usada para mimetizar um alvo, detectando microexpressões sintéticas em vídeos adulterados ou quebras abruptas de ruído de fundo que denunciam edições em gravações de voz.",
            "ferramentas": [
              {
                "nome": "Sonic Visualiser",
                "url": "https://www.sonicvisualiser.org",
                "uso": "Visualização de formas de onda, análise profunda de espectrogramas e verificação de integridade/edição em arquivos de áudio locais.",
                "aplicacao": "Permite ao analista inspecionar passivamente o espectrograma de uma gravação de voz suspeita para detectar cortes abruptos, edições ocultas ou assinaturas de compressão sintética (típicas de clones de voz), auxiliando na atribuição e validação de autenticidade da mídia coletada."
              },
              {
                "nome": "OpenFace",
                "url": "https://github.com/TadasBaltrusaitis/OpenFace",
                "uso": "Mapeamento de marcos faciais, rastreamento de olhar, estimativa de pose de cabeça e análise de expressões em vídeos e imagens.",
                "aplicacao": "Foca na microestrutura do movimento facial, permitindo extrair atributos biométricos locais e auditar falhas em vídeos suspeitos de deepfakes. A ferramenta identifica se uma expressão facial ou um padrão de piscada em um vídeo manipulado apresenta anomalias matemáticas em relação ao comportamento humano natural."
              }
            ]
          }
        ]
      },
      {
        "num": "04",
        "nome": "Cronolocalização & Azimute Solar",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Iluminação / Sombras / Clima ➔ Data / Horário Aproximado / Estação do Ano",
        "objetivo": "Determinar quando uma foto ou vídeo foi gravado. Através do estudo das sombras, comprimento da luz solar e dados ambientais, o investigador destrói falsas narrativas e comprova a cronologia física da mídia.",
        "camadas": [
          {
            "titulo": "Camada 1: Simulação 3D, Sombras e Cálculo Solar",
            "conceito": "Reprodução do ângulo da luz solar sobre a topografia do planeta em datas e horas específicas e cálculo matemático da projeção de sombras.",
            "comoFunciona": "Ferramentas interativas e matemáticas utilizam equações astronômicas e dados cartográficos para simular o comportamento da luz solar, calculando e projetando o tamanho de sombras exatas em objetos fixos e relevos.",
            "utilidadeOsint": "Permite que o analista altere o controle de tempo (horas e estações do ano) para verificar em qual momento do dia a projeção da luz na imagem corresponderia à realidade, refutando álibis e confirmando a hora exata da captura de forma incontestável.",
            "ferramentas": [
              {
                "nome": "Shadowmap",
                "url": "https://shadowmap.org/",
                "uso": "Visualização e modelagem em tempo real de luz solar, trajetórias do sol e projeção de sombras em edifícios, vegetações e relevos 3D.",
                "aplicacao": "Permite que o analista altere o controle de tempo (horas e estações do ano) para verificar em qual momento do dia a projeção da luz nos prédios da imagem corresponderia à realidade, utilizando modelos 3D arquitetônicos altamente fiéis a metrópoles para reduzir a taxa de erro geográfico."
              },
              {
                "nome": "SunCalc",
                "url": "https://www.suncalc.org",
                "uso": "Cálculo matemático da posição do sol, ângulos de iluminação e projeção de comprimentos de sombra para qualquer coordenada e data na Terra.",
                "aplicacao": "A ferramenta definitiva para realizar a cronolocalização matemática. A partir de uma fotografia cujo local já foi identificado, o analista mede o ângulo e a proporção da sombra de pontos fixos. Ao inserir a coordenada e o dia no SunCalc, o sistema calcula a hora exata em que a imagem foi registrada."
              },
              {
                "nome": "SunEarthTools",
                "url": "https://www.sunearthtools.com",
                "uso": "Cálculo da trajetória do sol, medição de ângulos de sombreamento e conversão multidimensional de coordenadas geográficas.",
                "aplicacao": "Atua como um complemento robusto ao SunCalc. Gera tabelas de dados brutos exportáveis com valores de azimute e zênite minuto a minuto, conferindo maior precisão matemática e rigor pericial para investigações que exigem relatórios formais sobre os ângulos de incidência da luz."
              }
            ]
          },
          {
            "titulo": "Camada 2: Validação Climática, Ambiental e Orbital",
            "conceito": "Cruzamento das condições visuais (nuvens, chuva, etc.) e astronômicas de uma evidência com os registros históricos meteorológicos e posições de satélites daquele momento.",
            "comoFunciona": "Os sistemas indexam telemetria orbital, dados de estações meteorológicas e registros atmosféricos retroativos para reconstruir as condições ambientais passadas de qualquer local do mundo.",
            "utilidadeOsint": "Fornece o histórico exato de uma região, permitindo cruzar o clima ou o posicionamento de astros vistos na foto com a data alegada, além de validar se determinado objeto capturado no céu poderia tratar-se da passagem de um satélite conhecido.",
            "ferramentas": [
              {
                "nome": "INMET Satélite",
                "url": "https://satelite.inmet.gov.br/",
                "uso": "Visualização e monitoramento de imagens de satélite meteorológico em tempo real e histórico recente.",
                "aplicacao": "Fornece o acesso a dados históricos de sensoriamento remoto, permitindo ao analista mapear as condições meteorológicas exatas de uma determinada região no Brasil para confrontar e validar o contexto ambiental em que um registro visual alega ter sido capturado."
              },
              {
                "nome": "WolframAlpha",
                "url": "https://www.wolframalpha.com",
                "uso": "Resolução de consultas factuais, cálculos matemáticos complexos, verificação histórica de clima/astronomia e conversão de metadados temporais.",
                "aplicacao": "Um validador contextual indispensável. O analista consegue extrair dados meteorológicos históricos exatos (como temperatura, visibilidade, velocidade do vento e nebulosidade) para uma coordenada específica e data retroativa, comprovando se as condições visuais da foto batem com a realidade climática daquele dia."
              },
              {
                "nome": "In-The-Sky.org (Live Satellite World Map)",
                "url": "https://in-the-sky.org/satmap_worldmap.php",
                "uso": "Rastreamento em tempo real e projeção cartográfica de satélites artificiais para suporte a investigações de GEOINT.",
                "aplicacao": "Permite confirmar se determinado satélite (meteorológico, comercial ou de telecomunicações) possuía janela de observação sobre a região no horário da gravação. Ideal para correlacionar dados de observação da Terra ou justificar a visibilidade de reflexos no céu durante capturas noturnas."
              }
            ]
          }
        ]
      },
      {
        "num": "05",
        "nome": "Tratamento, Visão Computacional & OCR",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Imagem Ilegível / Complexa ➔ Textos Transcritos / Identificação de Rótulos / Resolução Aprimorada",
        "objetivo": "Lidar com mídias degradadas e extrair dados operacionais automatizados. Utiliza-se IA para aumentar a nitidez de placas de veículos e logotipos, remover obstáculos visuais ou classificar em massa elementos visíveis (OCR).",
        "camadas": [
          {
            "titulo": "Camada 1: Limpeza, Recorte e Upscaling",
            "conceito": "Aumento de resolução (Upscaling) sem distorção, eliminação de artefatos de compressão e isolamento do elemento principal da imagem.",
            "comoFunciona": "Modelos de inteligência artificial analisam a matriz de pixels degradados e reconstroem a mídia baseando-se em aprendizado profundo, ajustando nitidez e removendo fundos indesejados automaticamente.",
            "utilidadeOsint": "Melhora capturas de tela antigas, embaçadas ou severamente pixeladas, facilitando a identificação forense de logotipos, placas e textos ocultos. Permite também recortar alvos específicos em multidões e remover fundos poluídos para pesquisas de rosto ou confecção de personas.",
            "ferramentas": [
              {
                "nome": "PicWish",
                "url": "https://picwish.com/pt/",
                "uso": "Remoção automatizada de fundos, restauração de mídias e melhoria de nitidez em evidências visuais.",
                "aplicacao": "Usa IA para remover fundos indesejados e desborrar fotos. Permite que o analista limpe ruídos visuais ao redor de um alvo e amplie capturas de tela desfocadas ou de baixa resolução obtidas em redes sociais para facilitar a leitura de caracteres ocultos."
              },
              {
                "nome": "Plataforma Let's Enhance",
                "url": "https://letsenhance.io/",
                "uso": "Aprimoramento, upscaling e correção de artefatos em imagens e evidências visuais utilizando modelos de inteligência artificial.",
                "aplicacao": "Especializada em aumentar a resolução de arquivos visuais em até 16 vezes sem perda de definição e remover artefatos de compressão JPEG. Auxilia o investigador a tornar legíveis elementos contextuais incompreensíveis, como placas de sinalização e textos em segundo plano."
              },
              {
                "nome": "Plataforma Krea.ai",
                "url": "https://www.krea.ai/",
                "uso": "Geração, aprimoramento e upscaling de imagens e mídias visuais utilizando inteligência artificial para apoio em OPSEC e tratamento de evidências gráficas.",
                "aplicacao": "Seu motor de upscaling atua na redução de ruídos e na melhoria de resolução de mídias degradadas, facilitando a identificação forense de elementos visuais menores na cena."
              },
              {
                "nome": "Remove.bg",
                "url": "https://www.remove.bg/pt-br/",
                "uso": "Remoção automatizada de fundos de imagens utilizando algoritmos de inteligência artificial.",
                "aplicacao": "Utilizado de forma tática para isolar o rosto ou corpo de um perfil sintético e recortar alvos específicos, auxiliando na limpeza visual de mídias e facilitando pesquisas biométricas limpas."
              }
            ]
          },
          {
            "titulo": "Camada 2: OCR Visual e Extração Massiva por IA",
            "conceito": "Motores de detecção e classificação (Auto-tagging) que leem textos complexos na imagem ou categorizam itens e cenas.",
            "comoFunciona": "Algoritmos avançados de visão computacional varrem a fotografia identificando padrões estruturais para atribuir rótulos (tags) automáticos ou transcrever trechos de caracteres gráficos em texto editável (OCR).",
            "utilidadeOsint": "Permite classificar em massa milhares de mídias, auditar a presença de logotipos, veículos ou armas, e extrair passivamente strings textuais com altíssima precisão a partir de pichações, cartazes ou letreiros no fundo de fotografias.",
            "ferramentas": [
              {
                "nome": "Amazon Rekognition",
                "url": "https://aws.amazon.com/pt/rekognition/",
                "uso": "Reconhecimento, análise automatizada e extração de metadados em imagens e vídeos usando Visão Computacional e IA na nuvem.",
                "aplicacao": "IA robusta que realiza extração avançada de textos distorcidos, classifica rótulos automáticos e audita mídias. O recurso de detecção de texto (OCR) é altamente resiliente a sombras e inclinações de câmera, sendo excelente para decifrar placas de trânsito ou documentos no fundo de fotos."
              },
              {
                "nome": "Imagga",
                "url": "https://imagga.com/",
                "uso": "Reconhecimento, etiquetagem automática e moderação de conteúdo em imagens utilizando Inteligência Artificial e Visão Computacional.",
                "aplicacao": "Ferramenta que recebe fotos e gera rótulos automáticos (ex: 'Logística', 'Prédio'). Viabiliza categorizar automaticamente milhares de imagens coletadas durante uma operação, filtrando rapidamente a presença de marcas corporativas ou modelos de veículos."
              },
              {
                "nome": "ImageIdentify",
                "url": "https://imageidentify.com/",
                "uso": "Reconhecimento de objetos, cenas e elementos em imagens utilizando Inteligência Artificial e Visão Computacional.",
                "aplicacao": "Auxilia o analista a extrair pistas contextuais de fotografias sem metadados, identificando de forma automatizada modelos de veículos, arquiteturas específicas ou acidentes geográficos baseados em sua árvore de conhecimento nativa."
              }
            ]
          },
          {
            "titulo": "Camada 3: OCR Forense em Acervos Documentais",
            "conceito": "Extração automatizada de entidades, OCR avançado e transcrição de textos analíticos dentro de grandes volumes de documentos estáticos não estruturados.",
            "comoFunciona": "A plataforma processa repósitorios massivos contendo milhares de imagens digitalizadas e PDFs e converte o texto incrustado nas páginas gráficas em cadeias de texto indexadas e pesquisáveis.",
            "utilidadeOsint": "Fundamental para lidar com mídias e documentos degradados de vazamentos (leaks) e processos judiciais escaneados onde a informação de interesse (como nomes ou empresas) se encontra bloqueada no formato de imagem.",
            "ferramentas": [
              {
                "nome": "Google Pinpoint",
                "url": "https://journaliststudio.google.com/pinpoint/about",
                "uso": "Extração automatizada de entidades, OCR avançado, transcrição de áudios e busca analítica em massa dentro de grandes volumes de documentos não estruturados.",
                "aplicacao": "A tecnologia de OCR integrada é altamente eficaz na extração de conteúdos textuais em arquivos PDF mal digitalizados, fotografias de documentos oficiais e manuscritos, tornando gigabytes de evidências degradadas plenamente pesquisáveis pela plataforma."
              }
            ]
          }
        ]
      },
      {
        "num": "06",
        "nome": "Preservação Digital & Cadeia de Custódia",
        "opsec": "ativo_passivo_controlado",
        "opsecTexto": "🔴 ATIVO / 🟡 PASSIVO CONTROLADO",
        "vetor": "Evidência Digital Volátil ➔ Material Juridicamente Válido / Relatórios Auditáveis",
        "objetivo": "Congelar a evidência para que ela possua valor jurídico. Evitar a quebra da cadeia de custódia caso o criminoso apague a fotografia, o post na rede social ou altere o conteúdo original.",
        "camadas": [
          {
            "titulo": "Camada 1: Validação Jurídica e Fixação de Hashes",
            "conceito": "Geração de identificadores criptográficos matemáticos únicos (MD5, SHA-256) que atestam que aquele arquivo nunca foi alterado desde a coleta, e materialização visual primária.",
            "comoFunciona": "O analista utiliza plataformas certificadas e extensões isoladas para congelar o estado atual da página, capturar a evidência estática e aplicar selos criptográficos antes que qualquer conteúdo seja removido pelo alvo.",
            "utilidadeOsint": "Essencial para formalizar materialmente a prova digital, garantindo sua aceitação em juízo e prevenindo contestações técnicas de manipulação ou adulteração por parte da defesa do alvo.",
            "ferramentas": [
              {
                "nome": "Verifact",
                "url": "https://www.verifact.com.br/",
                "uso": "Preservação, coleta auditável e registro de provas digitais com validade jurídica contra fraudes e adulterações.",
                "aplicacao": "Garante que uma evidência pública localizada (como uma postagem difamatória ou fraude) seja registrada seguindo padrões forenses rígidos. Gera um relatório técnico auditável com metadados detalhados, vídeos da navegação e chaves criptográficas (hashes) que atestam a imutabilidade e a anterioridade dos dados coletados."
              },
              {
                "nome": "GoFullPage - Full Page Screen Capture",
                "url": "https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl",
                "uso": "Captura integral de páginas web e preservação visual de conteúdo dinâmico em artefatos estáticos (PNG/PDF) para documentação de evidências.",
                "aplicacao": "Empregado para congelar visualmente o estado de perfis em redes sociais ou páginas antes de registros cartorários. Rola a página de forma automatizada e costura os fragmentos visuais, gerando um registro linear e fidedigno do alvo que pode ser arquivado localmente para auditorias seguras."
              }
            ]
          },
          {
            "titulo": "Camada 2: Espelhamento Web e Arquivamento Forense",
            "conceito": "Fazer o snapshot ou baixar a estrutura técnica do site onde a mídia estava hospedada, em formatos forenses (como o formato WARC) e resgatar armazenamentos legados.",
            "comoFunciona": "Ferramentas gravam o tráfego de rede interativo enquanto a página carrega, clonam a estrutura completa do site para o disco rígido ou acessam índices globais para recuperar versões removidas.",
            "utilidadeOsint": "Resgata conteúdos passados ocultados pelo investigado, além de permitir o espelhamento interativo e offline de páginas complexas para auditorias periciais sem gerar tráfego constante ao servidor alvo.",
            "ferramentas": [
              {
                "nome": "Webrecorder",
                "url": "https://webrecorder.net",
                "uso": "Captura interativa, dinâmica e automatizada de páginas web complexas para geração de arquivos WARC/WACZ com alta fidelidade.",
                "aplicacao": "Grava todo o tráfego de rede gerado no navegador enquanto a página é carregada e manipulada (execução de scripts, mídias). Permite criar um espelho interativo do site do alvo que preserva o comportamento original e os cabeçalhos HTTP, gerando pacotes de arquivo padronizados para a preservação forense."
              },
              {
                "nome": "ReplayWeb.page",
                "url": "https://replayweb.page",
                "uso": "Reprodução offline e análise estática de páginas web guardadas em formatos WARC, WACZ e HAR sem fuga de dados.",
                "aplicacao": "Um visualizador offline e serverless que permite carregar ficheiros brutos gerados pelo Webrecorder (WARC/WACZ). Permite auditar minuciosamente o conteúdo histórico de um site clonado de forma estática, provando como a página e as mídias apareciam no momento exato da coleta sem interagir com a internet viva."
              },
              {
                "nome": "Cyotek WebCopy",
                "url": "https://www.cyotek.com/cyotek-webcopy",
                "uso": "Clonagem, espelhamento e raspagem automatizada de sites completos para análise offline.",
                "aplicacao": "Funciona como um rastreador da web (crawler) que clona a estrutura completa de um portal de interesse para o disco rígido do investigador. Permite mapear dependências e inspecionar códigos de forma offline, mitigando riscos de contramedidas e reduzindo a pegada técnica."
              },
              {
                "nome": "Wayback Machine (Internet Archive)",
                "url": "https://web.archive.org/",
                "uso": "Preservação de memória digital, recuperação de páginas removidas ou alteradas e análise histórica de conteúdos na web.",
                "aplicacao": "Repositório público crucial em investigações. Captura, armazena e disponibiliza réplicas históricas (snapshots) de bilhões de páginas, permitindo rastrear o histórico de alteração de narrativas e buscar versões passadas de postagens ou páginas institucionais onde imagens/dados já foram removidos pelo alvo."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "redes-sociais",
    "categoria": "sociais",
    "icone": "📱",
    "titulo": "Inteligência em Redes Sociais (SOCMINT)",
    "subtitulo": "// Roteiro metodológico para mapeamento de perfis, análise de grafos (SNA), forense de mídias sociais e operação segura de personas.",

    "imagem": "../img/trilha-redes-sociais.png",

    "modulos": [
      {
        "num": "01",
        "nome": "Identificação de Perfis & Metadados",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Perfil / Username ➔ Identificadores Únicos (UIDs) / Contas Vinculadas / Identidade Civil / Propriedade Corporativa",
        "objetivo": "Localizar a presença online do alvo, mapear perfis escondidos e extrair IDs numéricos imutáveis que garantem o rastreio mesmo que o alvo altere o seu nome de usuário (handle).",
        "camadas": [
          {
            "titulo": "Camada 1: Enumeração e Expansão de Usernames",
            "conceito": "Indivíduos frequentemente reutilizam o mesmo nome de usuário (ou pequenas variações lógicas) em múltiplas plataformas. As ferramentas automatizam a verificação desse handle contra centenas de serviços.",
            "comoFunciona": "As plataformas realizam requisições assíncronas baseadas em dicionários e assinaturas predefinidas para validar em quais serviços de internet, fóruns e redes sociais um determinado apelido possui uma conta ativa.",
            "utilidadeOsint": "Acelera exponencialmente a descoberta de contas de um mesmo alvo, ramificando a investigação para fóruns obscuros ou redes de nicho e consolidando a pegada digital do investigado de forma abrangente.",
            "ferramentas": [
              {
                "nome": "WhatsMyName",
                "url": "https://whatsmyname.app",
                "uso": "Enumeração e rastreamento de usernames em centenas de plataformas web e redes sociais simultaneamente.",
                "aplicacao": "A partir de um único nome de usuário conhecido, realiza uma varredura em massa automatizada para revelar a pegada digital do investigado em centenas de outros serviços, auxiliando na correlação de dados e na construção do perfil comportamental sem alertar o alvo."
              },
              {
                "nome": "InstantUsername",
                "url": "https://instantusername.com/",
                "uso": "Verificação simultânea de existência e disponibilidade de nomes de usuário (usernames) em múltiplas plataformas web para mapeamento de pegada digital.",
                "aplicacao": "Opera enviando requisições imediatas e assíncronas para verificar a existência de perfis públicos correspondentes ao termo digitado. Acelera de forma visual a descoberta de novas contas e ramificações da presença online do investigado em serviços periféricos."
              },
              {
                "nome": "Who Posted What?",
                "url": "https://whopostedwhat.com",
                "uso": "Geração de sintaxes de busca e extração de IDs numéricos para localizar postagens no Facebook por palavra-chave, data exata, intervalo de tempo ou localização.",
                "aplicacao": "Essencial para investigações na rede Meta (Facebook). Contorna as restrições da pesquisa nativa e conta com um extrator integrado de IDs numéricos de perfis (UID). O UID fornece a base imutável do perfil que permite rastrear o alvo mesmo que ele altere a URL ou o nome da conta futuramente."
              }
            ]
          },
          {
            "titulo": "Camada 2: Rastreio Corporativo e Patrocínios",
            "conceito": "Identificação de infraestrutura de anúncios e páginas institucionais associadas ao perfil/página do alvo.",
            "comoFunciona": "A plataforma indexa e permite a busca de peças publicitárias e históricos de financiamento vinculados a páginas corporativas, de figuras públicas ou políticas nas redes sociais.",
            "utilidadeOsint": "Audita campanhas de desinformação, rastreia ligações financeiras, e expõe sites de phishing, golpes impulsionados nas redes ou a real infraestrutura de domínios patrocinados pela entidade investigada.",
            "ferramentas": [
              {
                "nome": "Biblioteca de Anúncios do Facebook (Meta Ad Library)",
                "url": "https://www.facebook.com/ads/library/",
                "uso": "Pesquisa de anúncios ativos e inativos veiculados nas plataformas da Meta para investigação de campanhas, empresas e pegada digital de entidades.",
                "aplicacao": "Indexa campanhas publicitárias ativas e mantém arquivo de inativas (focadas em temas sociais/políticos) veiculadas pela Meta. Permite rastrear quem são os responsáveis financeiros pelos anúncios e extrair domínios externos e sites de destino conectados ao perfil investigado."
              }
            ]
          },
          {
            "titulo": "Camada 3: Monitoramento Global e Agregação de Menções",
            "conceito": "Rastreamento passivo de termos, hashtags e nomes de usuário em múltiplas redes sociais e páginas públicas da web de forma simultânea.",
            "comoFunciona": "Motores de busca especializados rastreiam menções públicas na internet superficial, consolidando resultados dispersos, gerando índices de visibilidade e correlacionando contas associadas ao nome de usuário.",
            "utilidadeOsint": "Facilita o cruzamento de pegadas digitais, identificando comentários periféricos, fóruns públicos e o sentimento associado ao username investigado, sem que o analista precise interagir diretamente com as plataformas de origem.",
            "ferramentas": [
              {
                "nome": "Social Searcher",
                "url": "https://www.social-searcher.com",
                "uso": "Rastreamento passivo de termos, hashtags e nomes de usuário em múltiplas redes sociais simultaneamente em tempo real.",
                "aplicacao": "Permite ao analista mapear passivamente a repercussão e a presença digital de um username na web aberta. Consolida resultados do X/Twitter, YouTube, Reddit e blogs, expondo postagens isoladas e fóruns públicos que poderiam passar despercebidos na investigação."
              },
              {
                "nome": "Webmii",
                "url": "https://webmii.com/",
                "uso": "Busca agregada de pessoas, usernames e cruzamento de pegadas digitais em fontes abertas.",
                "aplicacao": "Excelente para o pivoting inicial. Ao buscar o nome ou o username do alvo, gera um índice de visibilidade pública e correlaciona links, imagens e possíveis perfis associados em uma única interface, acelerando o mapeamento da identidade digital."
              }
            ]
          }
        ]
      },
      {
        "num": "02",
        "nome": "Mapeamento de Redes & Grafos (SNA)",
        "opsec": "passivo_ativo_indireto",
        "opsecTexto": "🟢 PASSIVO / 🟡 ATIVO INDIRETO",
        "vetor": "Lista de Amigos/Seguidores ➔ Comunidades Frequentes / Vínculos de Confiança / Hierarquias Ocultas",
        "objetivo": "Realizar a Análise de Redes Sociais (Social Network Analysis - SNA). O foco é entender o ecossistema do alvo mapeando conexões recorrentes, grupos criminosos (como canais de pirataria) e identificando as arestas de relacionamento entre os indivíduos.",
        "camadas": [
          {
            "titulo": "Camada 1: Localização de Comunidades e Mensageria",
            "conceito": "Uso de indexadores que realizam a raspagem de links de convite públicos espalhados na internet.",
            "comoFunciona": "Motores de busca especializados e diretórios centralizados varrem repositórios abertos e metadados de chats para catalogar comunidades ativas em plataformas de mensagens.",
            "utilidadeOsint": "Permite encontrar o ponto de encontro de grupos investigados no Telegram ou WhatsApp, viabilizando o ingresso silencioso para coleta de inteligência e mapeamento de comunidades.",
            "ferramentas": [
              {
                "nome": "TLG.pm Search",
                "url": "https://tlg.pm/search",
                "uso": "Mecanismo de busca e indexação de canais, grupos, bots e mensagens públicas na plataforma Telegram.",
                "aplicacao": "Motor de busca de terceiros projetado especificamente para indexar e rastrear o ecossistema público do Telegram, rastreando canais, bots e postagens por palavra-chave. Permite ao analista descobrir comunidades fechadas ou novos leads sem depender exclusivamente do mecanismo nativo do aplicativo."
              },
              {
                "nome": "GruposWhats.app",
                "url": "https://gruposwhats.app",
                "uso": "Localização, monitoramento e extração de links de grupos públicos do WhatsApp para investigações de SOCMINT e mapeamento de comunidades.",
                "aplicacao": "Diretório centralizado que organiza e categoriza as comunidades por tópicos, permitindo a descoberta e o acesso a salas de conversa ativas no WhatsApp de forma direta para posterior coleta de dados cadastrais dos membros."
              }
            ]
          },
          {
            "titulo": "Camada 2: Visualização de Vínculos e Estatística de Rede (Link Analysis)",
            "conceito": "Ingestão de planilhas de seguidores e interações para a renderização gráfica de nós e arestas.",
            "comoFunciona": "As plataformas processam grandes volumes de dados tabulares estruturados em vértices (nós) e arestas (conexões), aplicando algoritmos matemáticos e de layout em tempo real.",
            "utilidadeOsint": "Identifica os associados mais próximos do alvo e testa a força desses vínculos a partir do número de interações recorrentes, permitindo medir métricas de centralidade, modularidade, densidade e localizar intermediários de conexão (bridges).",
            "ferramentas": [
              {
                "nome": "Gephi",
                "url": "https://gephi.org/",
                "uso": "Análise estatística e visualização gráfica de redes complexas, grafos e vínculos relacionais de dados estruturados.",
                "aplicacao": "Software de código aberto que viabiliza a Análise de Redes Sociais (SNA) para mapear interações e comunidades. Processa grandes volumes de dados tabulares, permitindo ao analista calcular estatísticas exatas de centralidade e densidade de forma totalmente offline e segura."
              },
              {
                "nome": "Onodo",
                "url": "https://onodo.org/",
                "uso": "Mapeamento de relacionamentos, análise de vínculos e visualização gráfica de redes de entidades (SNA).",
                "aplicacao": "Plataforma web projetada para a criação, análise e visualização de redes complexas. Permite organizar e estruturar os dados previamente coletados, transformando informações dispersas em diagramas de inteligência visual dinâmicos e interativos."
              }
            ]
          },
          {
            "titulo": "Camada 3: Inteligência de Vínculos e Grafos Avançados",
            "conceito": "Correlação de entidades e modelagem complexa de dados estruturados e não estruturados por meio de grafos interativos de investigação.",
            "comoFunciona": "Aplicações avançadas consolidam dados brutos (como históricos de chamadas e transações) ou executam scripts automatizados contra APIs para mapear relacionamentos.",
            "utilidadeOsint": "Essencial para conectar de forma encadeada infraestruturas de rede, identidades digitais, pegadas na internet e estruturas corporativas em um único mapa mental técnico, revelando fluxos operacionais e redes criminosas complexas.",
            "ferramentas": [
              {
                "nome": "Maltego",
                "url": "https://www.maltego.com/downloads/",
                "uso": "Mineração de dados, correlação de entidades e inteligência de vínculos por meio de grafos interativos.",
                "aplicacao": "Funciona como o núcleo de centralização de dados. O software permite ao analista realizar o processo de pivoting (avançar na investigação a partir de um dado conhecido) de forma visual e encadeada, transformando pedaços isolados de informação em nós gráficos interconectados em tempo real."
              },
              {
                "nome": "i2 Analyst's Notebook",
                "url": "https://i2group.com/i2-analysts-notebook",
                "uso": "Análise visual de vínculos, modelagem de dados complexos e identificação de padrões de redes para investigações.",
                "aplicacao": "Aplicação desktop avançada de inteligência visual. Através de uma abordagem baseada em entidades, vínculos e propriedades (ELP), transforma registros complexos (como transações bancárias e logs) em redes relacionais interativas para expor fluxos operacionais e hierarquias."
              },
              {
                "nome": "Arrows.app",
                "url": "https://arrows.app/",
                "uso": "Modelagem visual de grafos, diagramação de vínculos e análise de conexões relacionais para investigações.",
                "aplicacao": "Ferramenta web que permite criar nós, estabelecer relacionamentos direcionados e customizar propriedades detalhadas em uma interface puramente visual e interativa. Excelente para centralizar e conectar logicamente as evidências coletadas em fontes distintas antes de importações massivas."
              }
            ]
          }
        ]
      },
      {
        "num": "03",
        "nome": "Forense de Mídia & Análise de Mídia",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Foto ou Vídeo Publicado ➔ Rosto Desanonimizado / Metadados Originais / Histórico Biométrico",
        "objetivo": "Auditar tudo o que o alvo publica, realizando inteligência de imagens (IMINT) para identificar rostos, extrair dados ocultos dos arquivos ou atestar a manipulação por inteligência artificial.",
        "camadas": [
          {
            "titulo": "Camada 1: Biometria Facial e Busca Reversa",
            "conceito": "Mapeamento de vetores faciais ou de características de imagem aplicados contra bilhões de fotos publicadas publicamente.",
            "comoFunciona": "Os motores de busca extraem assinaturas visuais e geométricas da face do alvo e varrem indexadores globais na internet de superfície e em redes sociais para localizar a mesma pessoa em outros contextos.",
            "utilidadeOsint": "Quebra o pseudonimato de uma conta, ligando uma 'selfie' anônima ao nome real da pessoa que apareceu em uma notícia ou banco de dados público, mapeando sua presença online.",
            "ferramentas": [
              {
                "nome": "PimEyes",
                "url": "https://pimeyes.com/",
                "uso": "Busca reversa de faces e reconhecimento facial massivo na internet para localização de perfis e imagens de alvos.",
                "aplicacao": "Motor robusto baseado em IA focado em desmascarar contas falsas e rastrear o histórico do indivíduo. Foca unicamente na estrutura biométrica do rosto, sendo capaz de encontrar o mesmo indivíduo em fotos com planos de fundo e idades completamente distintos."
              },
              {
                "nome": "FaceCheck.id",
                "url": "https://facecheck.id/",
                "uso": "Reconhecimento facial e busca reversa de imagens para identificação de pessoas e perfis na internet.",
                "aplicacao": "Motor focado em localizar correspondências visuais em redes sociais, fóruns e registros criminais. Ideal para expor golpistas em redes sociais (catfishing) e desmascarar contas falsas (sock puppets), gerando um 'score' de confiança para o rosto submetido."
              },
              {
                "nome": "Yandex Images",
                "url": "https://yandex.com/images",
                "uso": "Busca reversa de imagens, reconhecimento facial e identificação de padrões visuais em fontes abertas.",
                "aplicacao": "Excepcional no reconhecimento e isolamento de características faciais, além de ser altamente preciso na identificação visual global de objetos e paisagens urbanas para GEOINT complementar."
              }
            ]
          },
          {
            "titulo": "Camada 2: Extração de Metadados e Forense Visual",
            "conceito": "Inspeção da estrutura digital de arquivos postados na rede para identificação de assinaturas de hardware, geolocalização e edições de matriz de pixels.",
            "comoFunciona": "As plataformas lêem as tags ocultas (EXIF/XMP) gravadas pelo dispositivo captor no momento da foto e aplicam algoritmos de compressão diferencial (ELA) para detectar manipulações.",
            "utilidadeOsint": "Permite verificar passivamente se há tags residuais de geolocalização e de modelo de smartphone nas mídias obtidas, além de evidenciar forensicamente se um documento ou objeto foi inserido na foto posteriormente.",
            "ferramentas": [
              {
                "nome": "ExifTool",
                "url": "https://exiftool.org/",
                "uso": "Leitura, escrita e modificação de metadados (EXIF, IPTC, XMP) de múltiplos formatos de arquivos para análise forense.",
                "aplicacao": "A ferramenta forense definitiva para extração de metadados em terminais. Permite verificar passivamente carimbos de data/hora e coordenadas embutidas, operando localmente e garantindo 100% de OPSEC ao processar os arquivos do alvo."
              },
              {
                "nome": "VerExif",
                "url": "https://www.verexif.com/",
                "uso": "Extração, leitura e remoção de metadados EXIF de imagens para validação de veracidade e OPSEC.",
                "aplicacao": "Plataforma rápida para visualizar metadados ocultos de uma fotografia e constatar o modelo do dispositivo utilizado, oferecendo também funções defensivas de limpeza antes de interações com o alvo."
              },
              {
                "nome": "Jimpl",
                "url": "https://jimpl.com/",
                "uso": "Visualização e remoção de metadados EXIF de imagens para análise e OPSEC.",
                "aplicacao": "Inspeciona parâmetros técnicos de captura, como a data e configurações de lente, extraindo informações técnicas residuais de imagens suspeitas de forma simplificada no navegador."
              },
              {
                "nome": "FotoForensics",
                "url": "https://fotoforensics.com/",
                "uso": "Análise forense digital de mídias, extração de metadados e detecção de manipulações e edições em imagens.",
                "aplicacao": "Aplica a técnica de Error Level Analysis (ELA) para identificar a taxa de compressão diferencial em componentes da imagem, revelando clonagem de pixels, edições dissimuladas ou inserções no plano da fotografia sem depender exclusivamente de dados EXIF."
              }
            ]
          },
          {
            "titulo": "Camada 3: Autenticidade e Detecção de Mídia Sintética (IA)",
            "conceito": "Análise de anomalias estruturais de renderização ou identificação de assinaturas digitais (Marcas d'água) injetadas no arquivo sintético.",
            "comoFunciona": "Os sistemas validam o conteúdo visual e sonoro contra modelos adversariais para determinar se o artefato foi criado por algoritmos generativos e redes neurais (GANs).",
            "utilidadeOsint": "Atesta a manipulação por inteligência artificial, identificando se os avatares (sock puppets) do alvo são fabricados ou se áudios/imagens foram gerados para campanhas de desinformação (deepfakes).",
            "ferramentas": [
              {
                "nome": "AmIReal",
                "url": "https://seintpl.github.io/AmIReal/",
                "uso": "Verificação de avatares e identidades sintéticas (Sock Puppets / IA).",
                "aplicacao": "Guia analítico focado na identificação técnica de avatares sintéticos. Orienta a inspeção de imperfeições clássicas de renderização sintética (dentes desalinhados, assimetrias visuais e pupilas) para validar a credibilidade de um perfil na rede."
              },
              {
                "nome": "SynthID",
                "url": "https://deepmind.com/synthid",
                "uso": "Identificação e inserção de marcas d'água digitais imperceptíveis em conteúdos gerados por inteligência artificial.",
                "aplicacao": "Ferramenta da Google DeepMind que atua na estrutura interna dos arquivos. Identifica marcas d'água de IA invisíveis embutidas diretamente na distribuição de pixels da imagem ou em espectrogramas de áudio, resistindo a compressões e cortes."
              },
              {
                "nome": "AI or Not",
                "url": "https://www.aiornot.com/",
                "uso": "Detecção de conteúdo gerado por inteligência artificial (imagens, áudio, vídeo e texto) e verificação de deepfakes.",
                "aplicacao": "Audita se a imagem, o arquivo de áudio ou vídeo (clones de voz) é de autoria humana ou se foi forjado por modelos difusos de IA, mapeando anomalias estruturais em renderizações avançadas."
              }
            ]
          },
          {
            "titulo": "Camada 4: Fonética Forense e Análise de Áudio",
            "conceito": "Engenharia reversa, análise espectral e processamento estático de sinais acústicos e vozes em arquivos multimídia.",
            "comoFunciona": "Softwares instaláveis processam frequências sonoras gerando visualizações gráficas de ondas e espectrogramas de alta precisão.",
            "utilidadeOsint": "Essenciais para a fonética forense de áudios e vídeos interceptados. Permite realizar perfilamento de locutores, identificar micro-edições de ruído de fundo e purificar gravações, operando localmente e de forma segura no dispositivo do investigador.",
            "ferramentas": [
              {
                "nome": "Praat",
                "url": "https://www.fon.hum.uva.nl/praat/",
                "uso": "Análise, síntese e manipulação de sinais de voz e fala aplicadas à fonética forense e perfilamento de fontes humanas.",
                "aplicacao": "Software científico que viabiliza o perfilamento linguístico e a comparação de locutores. Extrai características como o pitch e formantes, auxiliando na identificação de traços biográficos de um indivíduo e autenticidade da voz operando localmente no dispositivo."
              },
              {
                "nome": "Audacity",
                "url": "https://www.audacityteam.org/",
                "uso": "Análise, edição, verificação de integridade e processamento forense de arquivos de áudio, incluindo isolamento de frequências.",
                "aplicacao": "Permite purificar gravações de voz, isolar frequências de ruídos ambientais ou auditar o espectrograma para verificar quebras abruptas de ruído de fundo que denunciam edições ou montagens na gravação."
              },
              {
                "nome": "Sonic Visualiser",
                "url": "https://www.sonicvisualiser.org",
                "uso": "Visualização de formas de onda, análise profunda de espectrogramas e verificação de integridade/edição em arquivos de áudio locais.",
                "aplicacao": "Padrão ouro em exames acústicos visuais. Permite ao investigador inspecionar passivamente o espectrograma de áudios e vídeos interceptados em altíssima resolução para evidenciar assinaturas de compressão sintética ou cortes maliciosos na prova digital."
              }
            ]
          }
        ]
      },
      {
        "num": "04",
        "nome": "Geolocalização & Cronolocalização",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Publicação ➔ Coordenadas / Check-ins / Clima da Foto / Posição Solar",
        "objetivo": "Determinar a posição física do alvo e validar se os eventos relatados na rede social (álibis) coincidem temporalmente com a realidade ambiental, extraindo inteligência geográfica (GEOINT) da mídia.",
        "camadas": [
          {
            "titulo": "Camada 1: Mapeamento em Redes Sociais e Sensores",
            "conceito": "Utilização do sinal de GPS declarado na postagem ou de varredura por geofencing na infraestrutura pública da plataforma.",
            "comoFunciona": "Ferramentas interrogam as APIs das redes sociais buscando por coordenadas de latitude/longitude embutidas em metadados de publicações ou IDs de localização (Location IDs) associados a postagens.",
            "utilidadeOsint": "Confirma geograficamente os locais frequentados (check-ins) pelo alvo, documenta a presença do indivíduo em coordenadas específicas e permite o rastreio de eventos em tempo real a partir de uma zona física delimitada no mapa.",
            "ferramentas": [
              {
                "nome": "One Million Tweet Map",
                "url": "https://onemilliontweetmap.com",
                "uso": "Geolocalização de postagens e monitoramento em tempo real de palavras-chave, hashtags e tendências geográficas no Twitter/X.",
                "aplicacao": "Renderiza um heatmap (mapa de calor) e as coordenadas geográficas exatas de postagens da rede X/Twitter em tempo real. Permite que o analista filtre mensagens por palavras-chave e delimite uma janela temporal de busca, facilitando a identificação exata do local de onde uma informação crítica emergiu."
              },
              {
                "nome": "Who Posted What?",
                "url": "https://whopostedwhat.com",
                "uso": "Geração de sintaxes de busca e extração de IDs numéricos para localizar postagens no Facebook por palavra-chave, data exata, intervalo de tempo ou localização.",
                "aplicacao": "Permite usar os Location IDs geográficos do Facebook para filtrar publicações feitas estritamente a partir de um bairro, evento ou coordenada específica. Supera os filtros opacos da rede social, rastreando testemunhas oculares de um incidente em uma localidade exata."
              }
            ]
          },
          {
            "titulo": "Camada 2: Triangulação de Sinais e Infraestrutura Wi-Fi",
            "conceito": "Pivotagem baseada na infraestrutura técnica e eletromagnética visível nas evidências (SSID/BSSID), cruzada com bancos de dados globais de roteadores.",
            "comoFunciona": "A plataforma cruza nomes de redes (SSID) ou endereços MAC de hardware (BSSID) capturados em prints, vídeos ou logs de conexão contra bilhões de observações colaborativas, convertendo o sinal em um ponto georreferenciado.",
            "utilidadeOsint": "Possui um poder de desanonimização avassalador. Caso um print ou vídeo na rede social mostre as redes Wi-Fi locais, essas ferramentas rastreiam e informam a coordenada geográfica exata do estabelecimento, residência ou escritório frequentado pelo alvo sem depender de dados de GPS.",
            "ferramentas": [
              {
                "nome": "WiGLE (Wireless Geographic Logging Engine)",
                "url": "https://wigle.net",
                "uso": "Mapeamento passivo, rastreio e triangulação de coordenadas físicas de redes Wi-Fi, dispositivos Bluetooth e torres de comunicação celular através de SSIDs e BSSIDs.",
                "aplicacao": "A maior plataforma crowdsourced de sinais do mundo. Se o analista isolar o BSSID contido em uma captura de tela do alvo, a busca reversa no WiGLE localiza a coordenada exata de residências ou locais frequentados, permitindo também mapear a extensão de empresas introduzindo os padrões dos seus SSIDs corporativos."
              },
              {
                "nome": "WiFi Map",
                "url": "https://www.wifimap.io",
                "uso": "Mapeamento passivo de coordenadas de hotspots Wi-Fi, identificação de SSIDs e recuperação de senhas públicas de acesso.",
                "aplicacao": "Correlaciona a geolocalização física de hotéis e espaços públicos com os metadados técnicos das suas redes sem fios. Permite ao analista auditar a infraestrutura de comunicações no perímetro de um alvo e estimar o nível de segurança digital do local mapeando credenciais de rede expostas."
              }
            ]
          },
          {
            "titulo": "Camada 3: Inteligência Cartográfica e Observação da Terra",
            "conceito": "Exploração topográfica, análise retroativa de imagens de satélite e modelagem visual de vínculos espaciais de um alvo ao longo do tempo.",
            "comoFunciona": "Softwares de mapeamento vetorial e imagens orbitais fornecem representações detalhadas do terreno, permitindo a inserção e gestão de marcadores personalizados por parte do investigador.",
            "utilidadeOsint": "Viabiliza a criação de mapas customizados da investigação, o cálculo de linhas de visão para refutar testemunhos, e a checagem do histórico de imagens de satélite para documentar a presença de ativos em dadas coordenadas de forma retroativa.",
            "ferramentas": [
              {
                "nome": "OpenStreetMap (OSM)",
                "url": "https://www.openstreetmap.org",
                "uso": "Mapeamento colaborativo global, análise geoespacial e inteligência geográfica de código aberto (GEOINT).",
                "aplicacao": "Fornece detalhes minuciosos sobre ruas, construções, hidrografia e linhas de transporte. Frequentemente exibe infraestruturas cruciais de bairros e regiões rurais que não constam em mapas comerciais tradicionais, otimizando o cruzamento de referências visuais obtidas em redes sociais com o mapa real."
              },
              {
                "nome": "Google Earth",
                "url": "https://earth.google.com",
                "uso": "Observação e análise de imagens de satélite de alta resolução, mapeamento tridimensional e reconstituição de cenários geográficos.",
                "aplicacao": "Permite ao analista examinar as características 3D de um terreno investigado, calcular linhas de visão e estimar distâncias físicas para correlacionar e validar informações de inteligência visual capturadas pelo alvo."
              },
              {
                "nome": "World Imagery Wayback (Esri)",
                "url": "https://livingatlas.arcgis.com/wayback/",
                "uso": "Análise retroativa de dados geoespaciais e comparação de imagens de satélite históricas mundiais.",
                "aplicacao": "Funciona como uma 'máquina do tempo' geoespacial. Permite ao analista monitorar o desenvolvimento de propriedades rurais/urbanas e verificar a presença histórica de veículos ou aeronaves em datas retroativas, validando álibis por meio da alteração da paisagem."
              },
              {
                "nome": "Google My Maps",
                "url": "https://www.google.com/mymaps",
                "uso": "Criação de mapas customizados, plotagem de coordenadas geográficas e modelagem visual de vínculos espaciais entre entidades de uma investigação.",
                "aplicacao": "O ambiente onde o analista deve plotar o conjunto consolidado de hotspots (coordenadas, residências e locais de eventos) frequentados pelo alvo ao longo do tempo. Permite traçar linhas de trajetória e identificar os padrões de mobilidade e zonas de maior atividade da entidade investigada."
              }
            ]
          }
        ]
      },
      {
        "num": "05",
        "nome": "Arquivamento & Preservação Digital",
        "opsec": "passivo_ativo_intermediado",
        "opsecTexto": "🟢 PASSIVO / 🟡 ATIVO INTERMEDIADO",
        "vetor": "Evidência Digital (Post/Stories) ➔ Congelamento com Validade Jurídica / Recuperação Histórica",
        "objetivo": "Garantir a imutabilidade e a validade da prova. Evitar a quebra da cadeia de custódia frente ao alvo deletar publicações comprometedoras e resgatar perfis que já não estão mais ativos.",
        "camadas": [
          {
            "titulo": "Camada 1: Resgate Histórico e Espelhamento Forense",
            "conceito": "Uso de repositórios globais e formatos forenses encapsulados para recuperar perfis desativados e capturar a estrutura interativa das páginas.",
            "comoFunciona": "A plataforma captura, armazena e disponibiliza réplicas históricas da internet, ou grava o tráfego de rede localmente para encapsular scripts e interações em pacotes estáticos com alta fidelidade (WARC/WACZ).",
            "utilidadeOsint": "Essencial para recuperar publicações que o criminoso excluiu, rastrear a evolução narrativa de um perfil ao longo do tempo e reproduzir a página idêntica à do momento da coleta de forma totalmente offline.",
            "ferramentas": [
              {
                "nome": "Wayback Machine (Internet Archive)",
                "url": "https://web.archive.org/",
                "uso": "Preservação de memória digital, recuperação de páginas removidas ou alteradas e análise histórica de conteúdos na web.",
                "aplicacao": "Repositório público definitivo. Captura, armazena e disponibiliza réplicas históricas (snapshots) de bilhões de páginas. Permite buscar versões passadas e posts de perfis antes de o criminoso excluí-los, ou restaurar páginas inteiras cujos domínios foram desativados."
              },
              {
                "nome": "Webrecorder",
                "url": "https://webrecorder.net",
                "uso": "Captura interativa, dinâmica e automatizada de páginas web complexas para geração de arquivos WARC/WACZ com alta fidelidade.",
                "aplicacao": "Em vez de salvar apenas uma captura de tela estática, grava todo o tráfego de rede gerado no navegador enquanto a página do alvo é carregada e manipulada. Ele gera os pacotes padronizados (WARC/WACZ) fundamentais para a preservação forense e reprodução offline da página e suas mídias originais."
              },
              {
                "nome": "ReplayWeb.page",
                "url": "https://replayweb.page",
                "uso": "Reprodução offline e análise estática de páginas web guardadas em formatos WARC, WACZ e HAR sem fuga de dados.",
                "aplicacao": "Um visualizador forense que lê os arquivos gerados pelo Webrecorder (WARC/WACZ). Permite carregar o pacote estático offline e reconstruir passivamente o comportamento interativo original da página capturada (como feeds e scripts), provando como ela aparecia no exato momento da coleta."
              }
            ]
          },
          {
            "titulo": "Camada 2: Validação Jurídica e Fixação de Provas",
            "conceito": "Plataformas de certificação técnica e captura pericial de telas para conformidade em litígios processuais e penais.",
            "comoFunciona": "Sistemas auditáveis isolam o ambiente de captura do usuário, gravam metadados, tráfego de rede e geram carimbos de tempo e hashes criptográficos que atestam que a evidência não foi adulterada.",
            "utilidadeOsint": "Congelar materialmente e garantir a aceitação de provas extraídas da internet (como posts difamatórios ou comunicações de fraude) frente aos tribunais e cortes brasileiras.",
            "ferramentas": [
              {
                "nome": "Verifact",
                "url": "https://www.verifact.com.br/",
                "uso": "Preservação, coleta auditável e registro de provas digitais com validade jurídica contra fraudes e adulterações.",
                "aplicacao": "Plataforma projetada para atestar as evidências extraídas da tela com fé pública. Gera um relatório técnico auditável com metadados e chaves criptográficas (hashes) que comprovam que a publicação comprometedora é real e esteve online antes da sua deleção pelo investigado."
              },
              {
                "nome": "GoFullPage - Full Page Screen Capture",
                "url": "https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl",
                "uso": "Captura integral de páginas web e preservação visual de conteúdo dinâmico em artefatos estáticos (PNG/PDF).",
                "aplicacao": "Gera capturas de tela completas e ininterruptas que incluem áreas além do campo de visão imediato (como comentários longos em posts ou threads). É o utilitário rápido ideal para o pré-congelamento visual das provas documentais que acompanharão os laudos investigativos."
              }
            ]
          },
          {
            "titulo": "Camada 3: Intervenção Direta (Law Enforcement)",
            "conceito": "Procedimentos institucionais direcionados a órgãos judiciais e forças da lei para o congelamento e travamento de registros físicos no servidor das empresas de tecnologia.",
            "comoFunciona": "Investigadores utilizam vias e portais institucionais dedicados para submeter protocolos formais de preservação, obrigando a plataforma a manter os pacotes de dados intactos temporariamente.",
            "utilidadeOsint": "Congelar os IPs de acesso, DMs e interações antes do envio formal da ordem de quebra de sigilo por um juiz, garantindo que a base de dados não seja expurgada mesmo que o usuário apague sua própria conta no aplicativo.",
            "ferramentas": [
              {
                "nome": "Portais LERS (Law Enforcement Response Systems)",
                "url": "N/A",
                "uso": "Canais institucionais (/records) para comunicação e submissão de pedidos formais de preservação e quebra de sigilo telemático.",
                "aplicacao": "Endereços institucionais das redes (como o Meta LERS para Facebook, Instagram, WhatsApp) projetados para que investigadores e autoridades solicitem a preservação imediata dos dados de uma conta suspeita, assegurando a guarda das provas diretamente nas nuvens corporativas do provedor."
              }
            ]
          }
        ]
      },
      {
        "num": "06",
        "nome": "OPSEC & Operação de Personas",
        "opsec": "preparacao_defensiva",
        "opsecTexto": "🛡️ PREPARAÇÃO DEFENSIVA",
        "vetor": "Analista ➔ Perfil Fictício (Sock Puppet) ➔ Rede Isolada e Criptografada",
        "objetivo": "Como as redes modernas aplicam algoritmos rígidos, é mandatório construir a blindagem técnica da infraestrutura do investigador e maturar identidades falsas, conhecidas como AVIs (Assistentes Virtuais de Investigação) ou Sock Puppets, evitando o rastreio, banimentos e riscos institucionais.",
        "camadas": [
          {
            "titulo": "Camada 1: Isolamento de Rede e Emulação Mobile",
            "conceito": "Túneis de tráfego de rede, mascaramento de endereço IP e emuladores móveis em sistemas desktop.",
            "comoFunciona": "Softwares de rede cifram todo o tráfego da máquina do investigador e o roteiam através de servidores externos, enquanto emuladores simulam a arquitetura e os identificadores de um smartphone dentro do computador.",
            "utilidadeOsint": "Garante que o endereço IP real e o provedor do investigador não contaminem os logs do alvo. A virtualização Android (emuladores) permite contornar bloqueios de plataformas que restringem acessos forçados pelo navegador web desktop, separando totalmente o hardware do agente da rede investigada.",
            "ferramentas": [
              {
                "nome": "1.1.1.1 (Cloudflare WARP)",
                "url": "https://one.one.one.one/",
                "uso": "Resolução de DNS segura e criptografia de tráfego de rede para mitigação de monitoramento local.",
                "aplicacao": "Túnel de rede criptografado construído sobre o protocolo WireGuard que protege o tráfego da máquina do analista para evitar ataques de interceptação local e vazamentos de DNS (DNS leaks) na coleta."
              },
              {
                "nome": "ExpressVPN",
                "url": "https://www.expressvpn.com/",
                "uso": "Mascaramento de endereço IP e proteção de identidade técnica contra rastreamento de provedores.",
                "aplicacao": "Rede Virtual Privada comercial que estabelece um túnel criptografado, útil para ocultar a infraestrutura institucional do investigador frente a logs de acesso das redes sociais e contornar bloqueios geográficos."
              },
              {
                "nome": "Mullvad VPN",
                "url": "https://mullvad.net/",
                "uso": "Anonimização extrema de tráfego de rede, mascaramento de IP e criptografia de ponta a ponta.",
                "aplicacao": "Excelente solução de OPSEC por adotar modelo de contas sem e-mail e pagamentos anônimos, ideal para configuração direta em máquinas virtuais de investigação sem atrelar dados biográficos ao pagamento do software."
              },
              {
                "nome": "BlueStacks",
                "url": "https://www.bluestacks.com/",
                "uso": "Emulação de dispositivos móveis Android para execução isolada de aplicativos de SOCMINT.",
                "aplicacao": "Cria um ambiente virtualizado que simula um smartphone, essencial para acessar e monitorar de forma persistente aplicativos como Instagram, TikTok e WhatsApp sem expor o hardware físico real do investigador."
              },
              {
                "nome": "NoxPlayer (BigNox)",
                "url": "https://www.bignox.com",
                "uso": "Emulação Android para criação de instâncias móveis isoladas e manipulação de telemetria.",
                "aplicacao": "Permite a criação de múltiplas instâncias simultâneas de dispositivos móveis no computador, simulando diferentes coordenadas de GPS e versões de Android para o gerenciamento independente de várias contas de cobertura."
              },
              {
                "nome": "Genymotion",
                "url": "https://www.genymotion.com/download/",
                "uso": "Emulação avançada e criação de ambientes virtuais isolados para investigações mobile.",
                "aplicacao": "Emulador focado em desempenho e controle estrito. Ideal quando o analista precisa interceptar e auditar o tráfego gerado por um aplicativo móvel suspeito sem contaminar seu próprio smartphone."
              }
            ]
          },
          {
            "titulo": "Camada 2: Geração Sintética de Identidades (Biografias e Faces)",
            "conceito": "Forjamento algorítmico e visual do indivíduo (lenda biográfica) com base em parâmetros demográficos coerentes e redes gerativas adversariais (GANs).",
            "comoFunciona": "Sistemas randomizam dados estruturados para compor um perfil completo (nomes, datas, endereços simulados) e utilizam inteligência artificial para renderizar fotografias hiper-realistas de rostos inéditos.",
            "utilidadeOsint": "Assegura que os Avatares (Sock Puppets) possuam uma história de cobertura (lenda) lógica sem recorrer ao roubo de identidade real. As fotos sintéticas blindam o perfil contra buscas reversas (como PimEyes ou Google Images) executadas pela contra-inteligência do alvo.",
            "ferramentas": [
              {
                "nome": "Fake Name Generator",
                "url": "https://pt.fakenamegenerator.com",
                "uso": "Geração automatizada de identidades sintéticas e dados biográficos fictícios completos.",
                "aplicacao": "Fornece a carga estrutural do perfil, como nome, data de nascimento, endereço realista, traços de ocupação e altura. É o esqueleto biográfico da lenda utilizada no Assistente Virtual de Investigação (AVI)."
              },
              {
                "nome": "FauxID",
                "url": "https://fauxid.com/",
                "uso": "Geração algorítmica detalhada de dados pessoais sintéticos para perfis de cobertura.",
                "aplicacao": "Cria de forma instantânea perfis simulados para agilizar o preenchimento de cadastros obrigatórios em redes sociais ou fóruns investigados, criando IDs matematicamente válidos mas sem relação legal."
              },
              {
                "nome": "Artbreeder",
                "url": "https://www.artbreeder.com/",
                "uso": "Geração, hibridização e edição fina de faces sintéticas via redes GAN.",
                "aplicacao": "Diferente de geradores de face com clique único, permite usar seletores dinâmicos (sliders) para ajustar finamente idade, etnia, emoção ou ângulo do rosto do avatar gerado, construindo uma identidade crível ao longo do tempo."
              },
              {
                "nome": "FaceMorph.me",
                "url": "https://facemorph.me/",
                "uso": "Interpolação de rostos sintéticos baseados em Inteligência Artificial para customização profunda.",
                "aplicacao": "Permite criar variações exclusivas navegando por um espaço latente de características faciais. Excelente para criar múltiplas imagens do mesmo avatar em diferentes situações ou idades para compor o histórico falso do perfil."
              },
              {
                "nome": "BoredHumans",
                "url": "https://boredhumans.com/",
                "uso": "Geração de rostos hiper-realistas e algoritmos de linguagem natural para composição de persona.",
                "aplicacao": "Agrega recursos para gerar faces inexistentes e utilizar IA para automatizar ou resumir trechos textuais, ajudando o analista a simular diálogos e publicações comportamentais compatíveis com a lenda do Sock Puppet."
              }
            ]
          },
          {
            "titulo": "Camada 3: Telefonia Descartável e Gestão de Contas",
            "conceito": "Utilização de números de celular virtuais (VoIP) e gerenciadores locais criptografados para superar autenticações mandatórias (2FA) e isolar contas investigativas.",
            "comoFunciona": "Serviços em nuvem ativam números de telefonia global para receber SMS em tempo real, enquanto cofres de senha locais blindam os credenciais dos avatares criados contra quebras ou espionagem.",
            "utilidadeOsint": "Vital para o bypass da barreira de autenticação por telefone exigida hoje por quase todas as redes sociais (Telegram, X, Instagram) e para a segurança e persistência em longo prazo das lendas criadas.",
            "ferramentas": [
              {
                "nome": "Hushed",
                "url": "https://hushed.com",
                "uso": "Gerenciamento e locação de números de telefone virtuais (burner numbers) para SMS e Voz.",
                "aplicacao": "Viabiliza a criação de contas de mensageiros ou redes com forte dependência de número sem usar linhas rastreáveis ao investigador, suportando áreas dos Estados Unidos e Europa."
              },
              {
                "nome": "Zadarma",
                "url": "https://zadarma.com/",
                "uso": "Fornecimento de números virtuais (DID) internacionais baseados em VoIP para ativação de contas.",
                "aplicacao": "Útil para registrar perfis com necessidade de bypass de restrição geográfica (geoblocking) nas confirmações de registro por telefone."
              },
              {
                "nome": "OnlineSIM",
                "url": "https://onlinesim.io/",
                "uso": "Recepção automatizada de SMS descartáveis para bypass de verificação Phone Verification SMS (PVA).",
                "aplicacao": "Solução prática de locação de linhas para ativação imediata de cadastros em fóruns investigados, plataformas web e redes anônimas."
              },
              {
                "nome": "SMS24.me",
                "url": "https://sms24.me/",
                "uso": "Recebimento público de SMS online através de números temporários.",
                "aplicacao": "Uma alternativa pública e descartável para obter códigos de aprovação e bypass de 2FA em contas efêmeras que não requerem acesso ou recuperação prolongada."
              },
              {
                "nome": "Bitwarden",
                "url": "https://bitwarden.com/",
                "uso": "Armazenamento seguro, gestão de TOTP e cofre criptografado de identidades sintéticas.",
                "aplicacao": "Repositório centralizado vital para OPSEC. Guarda organizadamente as senhas complexas, e-mails descartáveis e backups de recuperação de múltiplos Sock Puppets (evitando o reuso de credenciais entre contas da mesma operação)."
              }
            ]
          },
          {
            "titulo": "Camada 4: Auditoria de Pegada Digital e OPSEC",
            "conceito": "Teste rigoroso de integridade, vazamento de DNS e singularidade das características de rede e software (Browser Fingerprinting) da máquina do analista.",
            "comoFunciona": "Plataformas avaliam como as bibliotecas, plugins, fontes, canvas e cabeçalhos do navegador do investigador aparecem para os sites alvo, mapeando o grau de singularidade técnica antes da infiltração.",
            "utilidadeOsint": "Funciona como um checklist de checagem pré-voo. Garante que os túneis de rede estejam funcionais (sem vazar o IP real) e que as configurações da persona permitam fundir o tráfego do analista com o da massa de usuários padrão, derrotando detecções.",
            "ferramentas": [
              {
                "nome": "AmIUnique",
                "url": "https://amiunique.org/fingerprint",
                "uso": "Análise técnica da pegada digital do navegador e cálculo estatístico de singularidade.",
                "aplicacao": "Permite auditar o ambiente de investigação (VMs e browsers dissimulados) para garantir que as configurações não gerem um footprint raro e facilmente rastreável de forma contínua pelo alvo."
              },
              {
                "nome": "BrowserLeaks",
                "url": "https://browserleaks.com/",
                "uso": "Auditoria ampla de vazamentos de WebRTC, DNS, Canvas, Fontes e falhas de OPSEC local.",
                "aplicacao": "Deve ser utilizado imediatamente após a ativação da VPN ou do emulador Android, confirmando definitivamente se nenhum tráfego lateral está expondo a geolocalização e o provedor real do analista."
              },
              {
                "nome": "Cover Your Tracks - EFF",
                "url": "https://coveryourtracks.eff.org/",
                "uso": "Teste de browser fingerprinting, diagnóstico de rastreamento web e validação de defesa técnica.",
                "aplicacao": "Testa de forma tática se os bloqueadores de tráfego, as táticas do navegador anti-detect ou extensões de falsificação (spoofing) estão de fato defendendo a identidade do investigador contra métricas invisíveis."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "telefone",
    "categoria": "telecomunicacoes",
    "icone": "📞",
    "titulo": "Investigação Telefônica (TELINT)",
    "subtitulo": "// Roteiro metodológico para validação técnica, engenharia reversa, análise de mensageria e identificação de hardware mobile.",

    "imagem": "../img/trilha-telefone.png",

    "modulos": [
      {
        "num": "01",
        "nome": "Validação Técnica & Operadora",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Número de Telefone ➔ Operadora de Origem / Operadora Atual (Portabilidade) / Tipo de Linha (Fixo/Móvel)",
        "objetivo": "Realizar a triagem inicial para descobrir a qual empresa de telecomunicação o terminal pertence. Isso é crucial para mitigar erros de atribuição, validar o tipo de linha e direcionar futuras ordens judiciais de quebra de sigilo telemático ou interceptação.",
        "camadas": [
          {
            "titulo": "Camada 1: Identificação de Infraestrutura e Portabilidade",
            "conceito": "Acesso ao barramento de administração de portabilidade numérica para atestar o roteamento real e o estado atual do número na rede.",
            "comoFunciona": "Sistemas de telecomunicação consultam bases de dados regulatórias oficiais para mapear o código de área (DDD) e apontar qual a operadora de origem e o destino atual do terminal telefônico.",
            "utilidadeOsint": "Permite mapear de qual DDD o alvo se origina, constatar se ele costuma trocar de operadora com frequência para evasão de rastreio e mitigar erros de atribuição técnica antes do envio de ofícios legais.",
            "ferramentas": [
              {
                "nome": "Consulta Número - ABR Telecom",
                "url": "https://consultanumero.abrtelecom.com.br/",
                "uso": "Consulta de operadora de telefonia (fixa ou móvel) e verificação do histórico de portabilidade numérica no Brasil.",
                "aplicacao": "Plataforma oficial da associação que administra a portabilidade no Brasil. Retorna a operadora exata (ex: Claro, Vivo) e o tipo de serviço (SMP para móvel, STFC para fixo). É a camada de validação primária mais confiável para iniciar o dossiê da linha."
              },
              {
                "nome": "ConsultaOperadora.com.br",
                "url": "http://consultaoperadora.com.br/",
                "uso": "Identificação da operadora de telefonia (móvel ou fixa) e verificação do status de portabilidade de terminais telefônicos no Brasil.",
                "aplicacao": "Plataforma web independente que processa consultas de portabilidade móvel e fixa de forma simplificada, apresentando uma interface ágil para checagens táticas pontuais sem a complexidade visual de portais institucionais."
              },
              {
                "nome": "Qual Operadora",
                "url": "https://www.qualoperadora.net/",
                "uso": "Consulta e identificação de operadora de telefonia e status de portabilidade para números fixos e móveis no Brasil.",
                "aplicacao": "Recurso ágil para verificar se o terminal está ativo na base de dados de alguma operadora, identificando o estado (UF) e a região geográfica associada ao código de área (DDD) como ponto de partida da investigação locacional."
              }
            ]
          },
          {
            "titulo": "Camada 2: Engenharia Reversa e Validação em Plataformas Digitais",
            "conceito": "Utilização do número telefônico tecnicamente validado para desanonimizar o alvo através de catálogos colaborativos e APIs de redes sociais.",
            "comoFunciona": "Ferramentas realizam o 'Reverse Phone Lookup' consultando listas de contatos crowdsourced ou submetem o número a endpoints de mensageria para confirmar atividade e extrair dados biográficos.",
            "utilidadeOsint": "Essencial para descobrir o nome civil ou apelido do proprietário da linha, confirmar seu uso em aplicativos como o WhatsApp e expandir o rastreio (pivoting) do alvo para outras redes na internet sem qualquer interação direta com ele.",
            "ferramentas": [
              {
                "nome": "IDT Express WhatsApp Checker",
                "url": "https://www.idtexpress.com/pt/whatsapp-checker/",
                "uso": "Verificação de atividade de números de telefone no WhatsApp e identificação de metadados de rede.",
                "aplicacao": "Permite confirmar de forma automatizada se a linha telefônica é utilizada ativamente no ecossistema do WhatsApp sem a necessidade de adicionar o contato a uma agenda. Opera analisando os prefixos e atestando a presença na plataforma de forma totalmente passiva."
              },
              {
                "nome": "Truecaller",
                "url": "https://www.truecaller.com/pt-br",
                "uso": "Identificação avançada de chamadas, engenharia reversa de números telefônicos e detecção de spam/fraudes.",
                "aplicacao": "A principal plataforma para engenharia reversa de dados telefônicos. O analista pode descobrir o nome ou apelido associado ao proprietário da linha com base em milhões de agendas colaborativas e verificar se o número possui histórico de denúncias ou golpes."
              },
              {
                "nome": "Epieos",
                "url": "https://epieos.com/",
                "uso": "Busca reversa de números de telefone para pivoting e identificação de contas web associadas.",
                "aplicacao": "Consulta de forma silenciada dezenas de APIs globais a partir do número de telefone. Auxilia na extração de contas do Skype, metadados de redes sociais e avaliações no Google Maps atreladas estritamente àquela linha específica, ramificando a investigação digital."
              }
            ]
          }
        ]
      },
      {
        "num": "02",
        "nome": "Mapeamento de Mensageria (SOCMINT)",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Número de Telefone ➔ WhatsApp / Telegram / Foto de Perfil / Status",
        "objetivo": "Confirmar se a linha é utilizada ativamente em plataformas de mensageria (como WhatsApp e Telegram). Isso serve como trampolim para baixar fotos de perfil e recados públicos, vitais para a identificação visual do indivíduo ou de empresas de fachada.",
        "camadas": [
          {
            "titulo": "Camada 1: Validação Silenciosa em Mensageiros (WhatsApp)",
            "conceito": "Envio de requisições web para os endpoints das plataformas de mensagens a fim de checar o status de registro da conta sem adicioná-la a uma agenda telefônica pessoal.",
            "comoFunciona": "As plataformas disparam chamadas de API simulando a tentativa de interação ou verificação de registro para atestar se o número possui uma conta ativa, extraindo metadados de operadora e presença sem que o aplicativo do alvo seja notificado.",
            "utilidadeOsint": "Otimiza o fluxo de investigação validando instantaneamente se o número serve como ponte para capturar imagens e metadados de contas comerciais ou pessoais, garantindo que o investigado não seja alertado da vigilância.",
            "ferramentas": [
              {
                "nome": "IDT Express WhatsApp Checker",
                "url": "https://www.idtexpress.com/pt/whatsapp-checker/",
                "uso": "Verificação de atividade de números de telefone no WhatsApp e identificação de metadados de rede (operadora e região).",
                "aplicacao": "Verifica em tempo real se o número, inserido em formato internacional, possui conta no WhatsApp. A validação abre caminho para etapas posteriores de SOCMINT, confirmando que o número é um ponto viável para buscas avançadas por fotos de perfil e recados da conta do investigado."
              },
              {
                "nome": "CheckLeaked WhatsApp",
                "url": "https://whatsapp.checkleaked.cc/pt",
                "uso": "Validação e engenharia reversa de dados telefônicos para verificar vínculo com o aplicativo WhatsApp.",
                "aplicacao": "Analisa o identificador numérico fornecido para determinar o status da conta, verificar se há registros associados e detectar potenciais exposições ou vinculações a vazamentos públicos, ajudando a identificar se a linha é comercial e se suas fotos e status estão expostos."
              }
            ]
          },
          {
            "titulo": "Camada 2: Expansão de Mensageria e Ecossistemas Secundários",
            "conceito": "Cruzamento passivo do número de telefone em plataformas de comunicação paralelas (como Skype e Google) e mapeamento de identificadores criptográficos (Telegram Web3).",
            "comoFunciona": "Sistemas especializados consultam APIs globais de múltiplos serviços e exploradores de blockchain (TON) para descobrir contas atreladas ao número telefônico fornecido.",
            "utilidadeOsint": "Amplia a malha de coleta visual. Permite encontrar fotos de perfil históricas usadas no Skype ou Google (muitas vezes esquecidas pelo alvo) e rastrear a autoria de números anônimos do Telegram utilizados para ocultar a real identidade do criminoso.",
            "ferramentas": [
              {
                "nome": "Epieos",
                "url": "https://epieos.com/",
                "uso": "Busca reversa de números de telefone para pivoting e identificação de contas associadas em múltiplos serviços.",
                "aplicacao": "Realiza varreduras passivas nas APIs do Google, Skype e redes sociais a partir do número de telefone. Auxilia o analista a descobrir fotos de perfil vinculadas ao Skype do alvo ou contas Google conectadas ao número, fornecendo novos vetores visuais sem interagir diretamente com o alvo."
              },
              {
                "nome": "Fragment",
                "url": "https://fragment.com/",
                "uso": "Consulta de propriedade, histórico de transações e vinculação cripto de usernames e números anônimos do Telegram.",
                "aplicacao": "Se o alvo utilizar a tática de ocultação com os números anônimos do Telegram (iniciados em +888), a plataforma permite rastrear o histórico de leilões do número. Viabiliza a engenharia reversa para vincular o número diretamente a um endereço de carteira de criptoativos (TON Wallet) associado ao investigado."
              }
            ]
          }
        ]
      },
      {
        "num": "03",
        "nome": "Identificação Civil & Listas Públicas",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Número de Telefone ➔ Nome Completo do Titular / Endereço / CPF Associado",
        "objetivo": "Realizar a identificação civil do alvo. Essa etapa busca descobrir o nome real, apelido ou empresa que assina o terminal telefônico, traduzindo um dado técnico em um identificador humano para ações de inteligência ou diligências de campo.",
        "camadas": [
          {
            "titulo": "Camada 1: Engenharia Reversa Telefônica (Crowdsourcing)",
            "conceito": "Uso de bases de dados construídas a partir de listas de contatos sincronizadas e diretórios públicos de assinantes de telefonia.",
            "comoFunciona": "Sistemas indexam listas telefônicas tradicionais ou agregam agendas de contatos colaborativas de milhões de usuários para realizar a busca reversa, associando um número de telefone à identidade de como aquele contato foi salvo.",
            "utilidadeOsint": "É um dos vetores mais ágeis para descobrir como o alvo é chamado por seus próprios contatos, muitas vezes revelando apelidos, ocupações e localizações aproximadas de assinantes fixos.",
            "ferramentas": [
              {
                "nome": "Truecaller",
                "url": "https://www.truecaller.com/pt-br",
                "uso": "Identificação avançada de chamadas, engenharia reversa de números telefônicos e detecção de spam/fraudes.",
                "aplicacao": "A principal plataforma para Reverse Phone Lookup. Revela a quem o número pertence baseado em milhões de agendas de terceiros. Aviso OPSEC: O analista nunca deve usar sua conta pessoal ou corporativa oficial para realizar o login, devendo usar um perfil de cobertura (Sock Puppet)."
              },
              {
                "nome": "Teletudo Busqueitor",
                "url": "https://teletudo.com/busqueitor",
                "uso": "Consulta de assinantes telefônicos, localização de endereços e identificação de titulares a partir de bases de listas telefônicas públicas e comerciais no Brasil.",
                "aplicacao": "Catálogo telefônico digital brasileiro que indexa assinantes e logradouros. Excelente para o cruzamento em telefonia fixa, descobrindo titulares e endereços físicos a partir do número discado."
              }
            ]
          },
          {
            "titulo": "Camada 2: Inteligência de Vazamentos e Identificação Civil",
            "conceito": "Busca de números de telefone em repositórios históricos de vazamentos de dados para extrair o cadastro civil completo (Breach Intelligence).",
            "comoFunciona": "Plataformas agregam bilhões de registros expostos em violações de segurança corporativa. Ao pesquisar o telefone, o analista recupera a linha original do banco de dados vazado, que frequentemente contém CPF, endereço de entrega e nome completo.",
            "utilidadeOsint": "Permite a transição direta do dado técnico (telefone) para o dado civil estruturado (CPF/RG), fornecendo a base material necessária para a quebra do anonimato do alvo investigado.",
            "ferramentas": [
              {
                "nome": "DeHashed",
                "url": "https://www.dehashed.com",
                "uso": "Rastreamento de vazamentos de dados, exposição de credenciais e inteligência cibernética (Threat Intelligence).",
                "aplicacao": "Permite inserir o número de telefone do alvo e varrer bilhões de registros vazados para descobrir o nome real, e-mails associados e eventuais documentos (CPFs) atrelados àquele número em bancos de dados comprometidos."
              },
              {
                "nome": "OSINTLeak",
                "url": "https://osintleak.com/",
                "uso": "Pesquisa e monitoramento de credenciais expostas, vazamentos de dados (data breaches) e stealer logs.",
                "aplicacao": "Agrega registros de violações e fóruns cibercriminosos. Através da busca reversa por telefone, o analista pode extrair a qualificação civil vazada juntamente com o número de contato de uso do investigado."
              },
              {
                "nome": "SynScan Breaches (Verified Search)",
                "url": "https://synscan.net/breaches",
                "uso": "Consulta e identificação de credenciais vazadas e dados expostos em incidentes de segurança globais para inteligência de ameaças e validação de alvos.",
                "aplicacao": "Fornece acesso a dados provenientes de data leaks, permitindo estruturar buscas pelo telefone para localizar informações civis e endereços de correspondência outrora cadastrados pelo alvo em lojas virtuais e serviços da web."
              }
            ]
          },
          {
            "titulo": "Camada 3: Mapeamento Avançado de Pegada Digital",
            "conceito": "Identificação de contas digitais, perfis profissionais e registros em redes sociais a partir do número de telefone.",
            "comoFunciona": "Sistemas consultam em tempo real as APIs de diversas redes sociais e serviços web para verificar vínculos telefônicos, extraindo nomes e perfis sem notificar o alvo da pesquisa.",
            "utilidadeOsint": "Revela nomes civis e fotos de perfil adotados pelo alvo em plataformas web e de comércio eletrônico que exigem verificação telefônica (SMS), ajudando a confirmar sua identidade visual de maneira silenciosa.",
            "ferramentas": [
              {
                "nome": "OSINT Industries",
                "url": "https://osint.industries/",
                "uso": "Identificação de contas digitais, perfis em redes sociais e pegada digital a partir de e-mails ou números de telefone.",
                "aplicacao": "Consulta em tempo real centenas de serviços globais para mapear contas registradas com o número de telefone fornecido, extraindo nomes reais, UIDs e fotos de perfil adotadas na internet."
              }
            ]
          }
        ]
      },
      {
        "num": "04",
        "nome": "Presença Digital & Redes Sociais",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Número de Telefone ➔ Google ID / Contas Vinculadas em Redes Sociais",
        "objetivo": "Desanonimizar o alvo rastreando em quais sites, redes sociais e fóruns da internet aquele número de telefone foi empregado como método de registro ou como chave de recuperação de conta (autenticação).",
        "camadas": [
          {
            "titulo": "Camada 1: Rastreio Passivo Multiplataforma",
            "conceito": "Automação de requisições de recuperação de senha ou sincronização de contatos em APIs abertas para confirmar a existência da conta do alvo.",
            "comoFunciona": "As plataformas enviam requisições de forma automatizada para os endpoints de dezenas de serviços da web, analisando os códigos de resposta dos servidores para confirmar a existência da conta associada ao telefone sem notificar o alvo.",
            "utilidadeOsint": "Transforma um simples número de telefone na 'pegada digital' inteira do indivíduo, expondo conexões no ecossistema Google, Skype, entre dezenas de outros.",
            "ferramentas": [
              {
                "nome": "Epieos",
                "url": "https://epieos.com/",
                "uso": "Busca reversa de e-mails e números de telefone para pivoting e identificação de contas associadas em múltiplos serviços.",
                "aplicacao": "Executa busca reversa do telefone de forma passiva, extraindo identificadores exclusivos (como o GAIA ID do Google), mapeando avaliações em locais físicos (Google Maps), fotos de perfil e calendários vinculados ao dado inicial."
              },
              {
                "nome": "OSINT Industries",
                "url": "https://osint.industries/",
                "uso": "Identificação de contas digitais, perfis em redes sociais e pegada digital a partir de e-mails ou números de telefone.",
                "aplicacao": "Plataforma especializada que automatiza a busca do telefone em centenas de serviços em tempo real, levantando avatares fotográficos, identificadores únicos (UIDs), perfis em mídias sociais e a última atividade sem alertar o titular da conta, otimizando drasticamente o tempo da investigação."
              }
            ]
          },
          {
            "titulo": "Camada 2: Validação em Ecossistemas Centrais",
            "conceito": "Utilização direta de páginas de autenticação oficiais para validação ativa e levantamento de metadados expostos pela plataforma.",
            "comoFunciona": "O sistema processa requisições em tempo real na interface pública para verificar a existência de credenciais atreladas ao telefone antes de prosseguir para a etapa de inserção de senha.",
            "utilidadeOsint": "A interface pode expor metadados valiosos em fontes abertas, como o nome real completo configurado na conta, fotos de perfil em alta resolução e confirmação de vínculos com domínios corporativos.",
            "ferramentas": [
              {
                "nome": "Google Account Sign-In",
                "url": "https://accounts.google.com/v3/signin",
                "uso": "Validação ativa de identificadores digitais (e-mails e telefones) e enumeração de contas no ecossistema Google.",
                "aplicacao": "Ao inserir um número de telefone na interface de login ou recuperação de conta do Google, o analista confirma se o identificador possui uma conta ativa. Serve como a etapa manual perfeita para confirmar os dados extraídos pelo Epieos."
              }
            ]
          },
          {
            "titulo": "Camada 3: Inteligência de Reputação e Fraudes",
            "conceito": "Consulta e verificação de reputação para identificar registros de fraudes ou golpes associados a identificadores digitais.",
            "comoFunciona": "O motor de busca rastreia e centraliza informações coletadas de centenas de bancos de dados públicos, listas de denúncias e fóruns de segurança.",
            "utilidadeOsint": "Identifica se a presença online atrelada àquele telefone já foi utilizada em campanhas de phishing, golpes financeiros ou se possui histórico de denúncias ativas pela comunidade de segurança.",
            "ferramentas": [
              {
                "nome": "ScamSearch.io",
                "url": "https://scamsearch.io",
                "uso": "Consulta e verificação de reputação, cruzamento de dados e identificação de registros de fraudes ou golpes associados a múltiplos identificadores digitais.",
                "aplicacao": "Funciona como um centralizador de inteligência. Ao inserir o número de telefone do alvo, o investigador rastreia instantaneamente se aquele terminal foi relatado por vítimas em atividades cibercriminosas na internet ou associado a falsos perfis sociais."
              }
            ]
          }
        ]
      },
      {
        "num": "05",
        "nome": "Vazamentos, Golpes & Reputação",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Número de Telefone ➔ Denúncias (Spam/Fraude) / Credenciais Vazadas (Breach Intel)",
        "objetivo": "Avaliar se o terminal está sendo operado por cibercriminosos ou se foi alvo de violações. Esse levantamento mapeia a confiabilidade da linha e identifica ocorrências de fraudes denunciadas pela comunidade.",
        "camadas": [
          {
            "titulo": "Camada 1: Agregadores de Fraude e Reputação Digital",
            "conceito": "Cruzamento do telefone com petabytes de logs de ataques e listas negras comunitárias (Blacklists) para identificar atividades maliciosas.",
            "comoFunciona": "Motores de busca rastreiam o telefone em fóruns de segurança e diretórios públicos colaborativos para consolidar o nível de risco e a reputação associada à linha.",
            "utilidadeOsint": "Se o telefone pertencer a um fraudador, ferramentas de reputação denunciam campanhas de phishing ou estelionato atreladas à linha, revelando imediatamente a sua utilização em golpes.",
            "ferramentas": [
              {
                "nome": "ScamSearch.io",
                "url": "https://scamsearch.io",
                "uso": "Consulta e verificação de reputação, cruzamento de dados e identificação de registros de fraudes ou golpes associados a múltiplos identificadores digitais.",
                "aplicacao": "Rastreia o telefone em listas de denúncias públicas e bases de cibercrime para identificar se o número foi empregado em golpes ou se possui histórico de denúncias ativas pela comunidade de segurança, facilitando o mapeamento de riscos."
              },
              {
                "nome": "Truecaller",
                "url": "https://www.truecaller.com/pt-br",
                "uso": "Identificação avançada de chamadas, engenharia reversa de números telefônicos e detecção de spam/fraudes.",
                "aplicacao": "O serviço indica 'scores' e categorias de risco, como 'Spam', que são fornecidos coletivamente por vítimas e usuários do sistema para desmascarar a utilização da linha em fraudes eletrônicas."
              }
            ]
          },
          {
            "titulo": "Camada 2: Inteligência de Vazamentos e Dumps (Breach Intel)",
            "conceito": "Busca reversa do telefone em arquivos provenientes de grandes vazamentos (Data Breaches) e exposições de fóruns cibercriminosos.",
            "comoFunciona": "As plataformas indexam bilhões de registros extraídos de violações de segurança, permitindo buscas reversas para confirmar o comprometimento de dados atrelados ao terminal.",
            "utilidadeOsint": "Se a linha pertencer a uma vítima (ou for um número antigo), a busca retornará nomes, senhas expostas, e-mails e endereços residenciais ligados a esse terminal em vazamentos do passado, enriquecendo o perfil do alvo.",
            "ferramentas": [
              {
                "nome": "DeHashed",
                "url": "https://www.dehashed.com",
                "uso": "Rastreamento de vazamentos de dados, exposição de credenciais e inteligência cibernética (Threat Intelligence).",
                "aplicacao": "Permite a busca do número telefônico dentro de bilhões de registros provenientes de fóruns e servidores vazados da Dark Web, revelando nomes reais, e-mails associados e outras credenciais em texto claro atreladas ao terminal."
              },
              {
                "nome": "Have I Been Pwned (HIBP)",
                "url": "https://haveibeenpwned.com/",
                "uso": "Verificação de comprometimento de contas, e-mails e números de telefone em vazamentos de dados públicos e corporativos.",
                "aplicacao": "Indispensável para o mapeamento da pegada digital (digital footprinting). Ao inserir o número de telefone, o analista verifica passivamente em quais plataformas, fóruns ou serviços web aquela identidade possuiu cadastro e teve dados expostos em megavazamentos."
              },
              {
                "nome": "OSINTLeak",
                "url": "https://osintleak.com/",
                "uso": "Pesquisa e monitoramento de credenciais expostas, vazamentos de dados (data breaches) e stealer logs.",
                "aplicacao": "O serviço agrega e indexa bilhões de registros oriundos de violações de segurança e stealer logs. É ideal para identificar rapidamente a reutilização de senhas por alvos e extrair a qualificação civil exposta juntamente com o número de contato do investigado."
              },
              {
                "nome": "SynScan Breaches (Verified Search)",
                "url": "https://synscan.net/breaches",
                "uso": "Consulta e identificação de credenciais vazadas e dados expostos em incidentes de segurança globais para inteligência de ameaças e validação de alvos.",
                "aplicacao": "Permite estruturar buscas avançadas pelo telefone para localizar endereços e informações civis outrora cadastradas pelo alvo em lojas virtuais e serviços da web, disponibilizando dados em texto claro mediante comprovação de escopo."
              }
            ]
          }
        ]
      },
      {
        "num": "06",
        "nome": "Hardware & Ativos Cripto (Web3)",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Número de Telefone / Número Anônimo (+888) / IMEI ➔ Endereço Criptográfico (TON Wallet) / Perfil de Hardware",
        "objetivo": "Identificar as configurações físicas do dispositivo utilizado pelo alvo (telefone celular base) e rastrear as novas metodologias de ocultação do cibercrime, como a compra de telefones virtuais anônimos com pagamentos descentralizados em criptomoedas.",
        "camadas": [
          {
            "titulo": "Camada 1: Desanonimização Web3 e Ativos do Telegram",
            "conceito": "Atualmente, alvos evitam comprar chips de operadoras convencionais e optam pela aquisição de números NFT anônimos do Telegram (+888) ou usernames diretamente pela blockchain.",
            "comoFunciona": "A plataforma consulta os contratos inteligentes da rede blockchain (como a TON) para mapear o histórico de lances e revelar o endereço público da carteira digital que detém a custódia do número.",
            "utilidadeOsint": "Transpõe a barreira da rede social para a inteligência financeira (FININT). Analisando esses números, o investigador quebra a camada de anonimato inicial e liga a identidade do usuário diretamente a uma carteira de criptomoedas, possibilitando seguir o rastro do dinheiro.",
            "ferramentas": [
              {
                "nome": "Fragment",
                "url": "https://fragment.com/",
                "uso": "Consulta de propriedade, histórico de transações e vinculação cripto de usernames e números anônimos do Telegram.",
                "aplicacao": "Plataforma oficial de contratos inteligentes no Telegram que opera sobre a blockchain TON. O analista pode pesquisar números virtuais anônimos para visualizar todo o histórico de lances, transferências de custódia e, principalmente, vincular o número anonimizado a uma carteira de criptoativos (TON Wallet) de forma estruturada."
              }
            ]
          },
          {
            "titulo": "Camada 2: Rastreamento de Fluxos Cripto e Inteligência Financeira",
            "conceito": "Mapeamento do fluxo de capital descentralizado a partir do endereço criptográfico (Wallet) descoberto na fase de desanonimização.",
            "comoFunciona": "Exploradores de blocos e ferramentas analíticas processam os livros-razão públicos (ledgers) das blockchains para auditar o histórico de transações, saldos e conexões transacionais do endereço investigado.",
            "utilidadeOsint": "Permite desatar nós transacionais, mapear a movimentação de fundos de origem ilícita e identificar os endereços de destino ou corretoras (exchanges) que interagem com a carteira do alvo, gerando vias para possíveis bloqueios ou quebras de sigilo.",
            "ferramentas": [
              {
                "nome": "Blockchain.com Explorer",
                "url": "https://www.blockchain.com/explorer",
                "uso": "Rastreamento, auditoria e análise de transações e carteiras em redes blockchain.",
                "aplicacao": "Funciona como um motor de busca e livro-razão público. Após identificar a carteira que comprou o ativo virtual no Fragment, o analista utiliza exploradores para rastrear de onde vieram os fundos originais e para onde estão indo, viabilizando o 'Follow the Money'."
              },
              {
                "nome": "BlockSherlock",
                "url": "https://www.blocksherlock.com/",
                "uso": "Curadoria, catalogação e centralização de ferramentas para investigação de criptoativos e fontes abertas (OSINT).",
                "aplicacao": "Diretório e hub tático para inteligência financeira. Lista exploradores focados em análise de heurísticas (como reutilização de endereços e clusters), servindo como guia orientativo para aprofundar o rastreamento técnico nas carteiras descobertas do alvo."
              }
            ]
          },
          {
            "titulo": "Camada 3: Inteligência de Equipamento Físico e Triagem de Hardware (IMEI)",
            "conceito": "Uso do International Mobile Equipment Identity (IMEI), caso tenha sido capturado através de engenharia social, metadados de imagens ou logs de provedores.",
            "comoFunciona": "Sistemas decodificam a estrutura numérica do IMEI e extraem especificações baseadas no Type Allocation Code (TAC), cruzando os identificadores simultaneamente com bancos de restrições de operadoras de telefonia.",
            "utilidadeOsint": "Revela exatamente as peças de hardware, marca, modelo, data de lançamento e capacidade do telefone celular real nas mãos do criminoso. Adicionalmente, verifica se o dispositivo está em listas negras (blacklist) por perda ou roubo, apoiando flagrantes em diligências de campo.",
            "ferramentas": [
              {
                "nome": "IMEI.info",
                "url": "https://www.imei.info/",
                "uso": "Identificação de especificações técnicas, fabricante, modelo e status de restrição de dispositivos móveis a partir do IMEI.",
                "aplicacao": "Decodifica a string numérica do IMEI para atestar o modelo comercial do dispositivo e o fabricante de maneira totalmente passiva em relação ao alvo. Fornece metadados cruciais de hardware para subsidiar laudos técnicos e análises que envolvem o vínculo entre o criminoso e o aparelho."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "username",
    "categoria": "identificadores",
    "icone": "🆔",
    "titulo": "Investigação de Nomes de Usuário (Username / Handle)",
    "subtitulo": "// Roteiro metodológico para enumeração em massa, rastreamento social, dorking, análise em vazamentos e desanonimização Web3.",

    "imagem": "../img/trilha-username.png",

    "modulos": [
      {
        "num": "01",
        "nome": "Enumeração & Presença em Plataformas",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Username ➔ Confirmação de Existência / URLs de Perfis / Fóruns de Nicho",
        "objetivo": "Realizar a varredura em larga escala na web para atestar em quais plataformas (das mais famosas às mais obscuras) aquele exato username já foi registrado.",
        "camadas": [
          {
            "titulo": "Camada 1: Validação de Existência em Larga Escala",
            "conceito": "Utilização de métodos automatizados de requisições web baseadas em dicionários para interrogar os códigos de resposta HTTP (endpoints) de centenas de sites, confirmando se a página de perfil (site.com/user/nome) existe.",
            "comoFunciona": "As plataformas realizam varreduras assíncronas enviando o handle para as URLs de centenas de plataformas conhecidas, avaliando o código de retorno do servidor para atestar a existência da conta.",
            "utilidadeOsint": "Acelera exponencialmente a fase de expansão. A partir de um único handle (ex: do Instagram ou Twitter), o analista descobre fóruns de tecnologia, portfólios, sites de relacionamento ou repositórios obscuros onde o alvo também atua.",
            "ferramentas": [
              {
                "nome": "WhatsMyName",
                "url": "https://whatsmyname.app",
                "uso": "Enumeração e rastreamento de usernames em centenas de plataformas web e redes sociais simultaneamente.",
                "aplicacao": "Realiza varredura em massa automatizada para revelar a pegada digital do investigado. Permite filtrar os resultados por categorias de sites (como gaming, dating, social), otimizando o tempo de processamento caso o analista queira focar em nichos específicos associados ao perfil do alvo."
              },
              {
                "nome": "InstantUsername",
                "url": "https://instantusername.com/",
                "uso": "Verificação simultânea de existência e disponibilidade de nomes de usuário (usernames) em múltiplas plataformas web para mapeamento de pegada digital.",
                "aplicacao": "Opera enviando requisições imediatas e assíncronas para verificar a existência de perfis públicos correspondentes ao termo digitado. É ideal para identificar rapidamente em quais outras plataformas digitais o alvo reservou ou ocupa o mesmo nome de usuário."
              }
            ]
          },
          {
            "titulo": "Camada 2: Monitoramento Global e Agregação de Menções",
            "conceito": "Rastreamento passivo de menções, hashtags e o uso do próprio username em redes sociais abertas e agregadores globais.",
            "comoFunciona": "Motores de busca agregam fluxos de dados públicos em tempo real e em índices históricos para localizar onde o username foi citado, gerando estatísticas e cruzamento de links associados à identidade.",
            "utilidadeOsint": "Facilita o mapeamento da repercussão do indivíduo e acelera a descoberta da pegada digital do alvo, identificando potenciais homônimos, postagens e interações em fóruns públicos que poderiam passar despercebidas.",
            "ferramentas": [
              {
                "nome": "Social Searcher",
                "url": "https://www.social-searcher.com",
                "uso": "Rastreamento passivo de termos, hashtags e nomes de usuário em múltiplas redes sociais simultaneamente em tempo real.",
                "aplicacao": "Consolida em um único painel os resultados de publicações oriundas de diversas redes (como X/Twitter, YouTube e Reddit) baseando-se no username pesquisado, expondo comentários e fóruns de forma passiva sem a necessidade de o analista logar em contas de cobertura."
              },
              {
                "nome": "Webmii",
                "url": "https://webmii.com/",
                "uso": "Busca agregada de pessoas, usernames e cruzamento de pegadas digitais em fontes abertas.",
                "aplicacao": "Ferramenta de pivoting que realiza uma varredura automatizada em múltiplos serviços digitais a partir de um nome ou username fornecido. Correlaciona links, palavras-chave e potenciais contas associadas, gerando um índice de visibilidade pública do alvo."
              }
            ]
          },
          {
            "titulo": "Camada 3: Inteligência Integrada e Pivoting Avançado",
            "conceito": "Plataformas multifuncionais que automatizam fluxos de investigação cruzando identificadores iniciais (usernames) com centenas de fontes de terceiros.",
            "comoFunciona": "O analista insere o nome de usuário como ponto de entrada em um hub de agregação, que dispara requisições para mapear conexões, extrair relatórios e descobrir ramificações ocultas da identidade.",
            "utilidadeOsint": "Reduz drasticamente o tempo de coleta manual e enriquece a árvore de conexões do alvo, permitindo o avanço rápido para a desanonimização completa de identidades dissimuladas.",
            "ferramentas": [
              {
                "nome": "Sherlockeye",
                "url": "https://sherlockeye.io/",
                "uso": "Plataforma multifuncional de inteligência de fontes abertas (OSINT) baseada em IA para pesquisa reversa de múltiplos identificadores.",
                "aplicacao": "Conecta e cruza informações em tempo real provenientes de mais de 800 fontes abertas globais. A partir de um único username, gera uma árvore completa de conexões, pegadas digitais e ramificações que ligam a identidade a telefones ou e-mails, com excelente proteção da OPSEC do analista."
              }
            ]
          }
        ]
      },
      {
        "num": "02",
        "nome": "Mapeamento de Redes Sociais (SOCMINT)",
        "opsec": "passivo_ativo_indireto",
        "opsecTexto": "🟢 PASSIVO / 🟡 ATIVO INDIRETO",
        "vetor": "Username Localizado ➔ Bio / Histórico de Atividade / Redes de Conexões / Identidade Civil",
        "objetivo": "Extrair a inteligência humana por trás do perfil (SOCMINT). O foco é analisar quem o alvo segue, com quem interage e o que ele publica, estruturando o ecossistema de relacionamentos do investigado.",
        "camadas": [
          {
            "titulo": "Camada 1: Desanonimização e Extração de Metadados",
            "conceito": "Raspagem de dados abertos do perfil, como biografias, fotografias e a correlação do username com outras plataformas para desmascarar a identidade real.",
            "comoFunciona": "Plataformas automatizadas realizam buscas em tempo real em centenas de serviços da web para extrair identificadores exclusivos, fotos e nomes reais associados à conta investigada.",
            "utilidadeOsint": "Acelera a desanonimização do alvo. Permite pivotar rapidamente a partir de um username para dezenas de plataformas digitais, revelando a extensão real da presença online do investigado e extraindo metadados estruturados das contas localizadas.",
            "ferramentas": [
              {
                "nome": "OSINT Industries",
                "url": "https://osint.industries/",
                "uso": "Identificação de contas digitais, perfis em redes sociais e pegada digital a partir de e-mails, telefones ou usernames.",
                "aplicacao": "Excelente para pivoting rápido. Pesquisa o identificador em mais de 200 websites em tempo real e extrai metadados públicos valiosos, como fotos de perfil, identificadores únicos (UIDs) e a última atividade, sem alertar o titular da conta."
              },
              {
                "nome": "Sherlockeye",
                "url": "https://sherlockeye.io/",
                "uso": "Plataforma multifuncional de inteligência de fontes abertas (OSINT) baseada em IA para pesquisa reversa de múltiplos identificadores.",
                "aplicacao": "Plataforma avançada que gera uma árvore completa de conexões. Conecta o username às plataformas em que ele existe, facilitando a visualização dos vínculos e correlacionando o perfil a e-mails ou telefones ocultos."
              }
            ]
          },
          {
            "titulo": "Camada 2: Análise Massiva de Interações e Vínculos (Link Analysis)",
            "conceito": "Ingestão e raspagem da malha de conexões do perfil (amigos, curtidas, seguidores e grupos) para estruturação de grafos interativos.",
            "comoFunciona": "Softwares de inteligência centralizam os dados extraídos das redes e os transformam em diagramas de vínculos (nós e arestas), correlacionando as interações de forma automatizada.",
            "utilidadeOsint": "A rede de conexões define o ecossistema do alvo. Permite mapear cúmplices, associados-chave e hierarquias de organizações através de interações contínuas em redes como Twitter ou Instagram.",
            "ferramentas": [
              {
                "nome": "Plataforma Lampyre",
                "url": "https://lampyre.io",
                "uso": "Centralização de investigações digitais, cruzamento automatizado de dados lógicos e visualização de relacionamentos em grafos complexos (Link Analysis).",
                "aplicacao": "Software de análise massiva e inteligência cibernética. Uma vez identificado o handle do alvo, o Lampyre raspa e plota a rede inteira (seguidores, postagens e interações) em diagramas visuais, facilitando a montagem rápida de árvores de relacionamentos."
              },
              {
                "nome": "Maltego",
                "url": "https://www.maltego.com/downloads/",
                "uso": "Mineração de dados, correlação de entidades e inteligência de vínculos por meio de grafos interativos.",
                "aplicacao": "Atua como núcleo analítico visual para mapeamento de redes sociais. Permite a execução de scripts automatizados (transforms) para puxar conexões sociais e estruturar visualmente o ecossistema humano e de infraestrutura do investigado."
              }
            ]
          },
          {
            "titulo": "Camada 3: Rastreamento de Atividades e Menções",
            "conceito": "Monitoramento e análise da atividade pública do username, rastreamento de postagens históricas e mapeamento do engajamento de terceiros com o perfil do alvo.",
            "comoFunciona": "Mecanismos de busca especializados varrem as plataformas sociais superando as restrições algorítmicas nativas, consolidando publicações, menções, hashtags e interações associadas ao alvo.",
            "utilidadeOsint": "Viabiliza a descoberta de narrativas ou crimes através da análise do que o alvo publica e onde ele é citado. Auxilia na estruturação de linhas do tempo e na identificação de perfis periféricos que engajam constantemente com o investigado.",
            "ferramentas": [
              {
                "nome": "Social Searcher",
                "url": "https://www.social-searcher.com",
                "uso": "Rastreamento passivo de termos, hashtags e nomes de usuário em múltiplas redes sociais simultaneamente em tempo real.",
                "aplicacao": "Consolida em um único painel os resultados de publicações oriundas de diversas redes (como X/Twitter, Reddit e blogs). Permite monitorar passivamente o que o alvo está publicando e descobrir menções ao username do investigado feitas por associados."
              },
              {
                "nome": "Who Posted What?",
                "url": "https://whopostedwhat.com",
                "uso": "Geração de sintaxes de busca e extração de IDs numéricos para localizar postagens no Facebook por palavra-chave, data exata, intervalo de tempo ou localização.",
                "aplicacao": "Ferramenta tática que contorna as restrições de pesquisa nativa do Facebook. Permite isolar tudo o que um investigado publicou sobre um determinado tópico em um período crítico e extrair o identificador numérico (UID) estrutural do perfil."
              }
            ]
          }
        ]
      },
      {
        "num": "03",
        "nome": "Análise de Padrões & Dorking",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Username ➔ Variações Alfanuméricas / Chaves de API Vazadas / Menções em Textos e Blogs",
        "objetivo": "Localizar o alvo em locais que scanners automáticos não encontram. Indivíduos adicionam números ou caracteres a seus nomes quando a plataforma já tem aquele handle em uso. Esta fase prevê essas variações e busca o pseudônimo 'solto' no corpo de textos.",
        "camadas": [
          {
            "titulo": "Camada 1: Expansão Lexical e Variações por LLM",
            "conceito": "Identificação de variações previsíveis do username principal (adição de números, caracteres especiais, anos de nascimento) que possam ter sido adotadas pelo alvo.",
            "comoFunciona": "O analista instrui modelos de linguagem de grande porte (LLMs) a processar o username conhecido e gerar matrizes combinatórias e dicionários de permutações lógicas para futuras buscas.",
            "utilidadeOsint": "Supera a limitação de buscas exatas. Permite antecipar como o alvo se registraria em plataformas onde o seu pseudônimo principal já estava ocupado, criando uma lista de alvos textuais para varreduras manuais e automatizadas.",
            "ferramentas": [
              {
                "nome": "ChatGPT (OpenAI)",
                "url": "https://chat.openai.com/",
                "uso": "Processamento de linguagem natural, análise de contexto e estruturação de variações combinatórias.",
                "aplicacao": "O analista instrui a IA generativa a criar uma matriz de dezenas de possíveis variações a partir de um username conhecido (ex: gerar 'Alvo123', 'Alvo_Oficial'), criando um dicionário estruturado para testes posteriores. Aviso de OPSEC: Dados sensíveis ou sigilosos do caso nunca devem ser inseridos no prompt sem o desligamento do histórico."
              },
              {
                "nome": "Gemini",
                "url": "https://gemini.google.com/",
                "uso": "Processamento de linguagem natural, análise de contexto e auxílio na automação de inteligência.",
                "aplicacao": "Funciona como alternativa de alto desempenho no processamento de linguagem natural, permitindo estruturar padrões de nomes de usuário e sugerir variações linguísticas do pseudônimo focadas no idioma materno do investigado."
              }
            ]
          },
          {
            "titulo": "Camada 2: Dorking Avançado e Reconhecimento Passivo",
            "conceito": "Estruturação e automação de operadores lógicos de busca (Google Dorks) para varrer a internet superficial atrás de menções textuais isoladas do username.",
            "comoFunciona": "Plataformas web centralizam e automatizam a construção de sintaxes complexas (como intext:, filetype:, site:), convertendo os parâmetros do alvo em links diretos de pesquisa.",
            "utilidadeOsint": "Localiza registros em diretórios abertos, documentos em PDF vazados ou fóruns corporativos que mencionam o pseudônimo do alvo, indo muito além das URLs de perfil padrão.",
            "ferramentas": [
              {
                "nome": "Deep Dork Web",
                "url": "https://guilherme-moraiss.github.io/Deep-Dork-Web/",
                "uso": "Automação, filtragem e geração dinâmica de consultas avançadas de Google Dorks para investigações OSINT.",
                "aplicacao": "Automatiza a geração de Google Dorks cirúrgicas. O analista insere o username (ou as variações) do alvo, e a ferramenta gera links para varrer menções no Pastebin, Trello, e serviços de armazenamento em nuvem (como Dropbox e Google Drive) com um clique."
              },
              {
                "nome": "GoogleDorks (s1rn3tz)",
                "url": "https://dorks.s1rn3tz.ovh/googledorks",
                "uso": "Centralização e estruturação de consultas avançadas para otimização de buscas na superfície da web e identificação de dados expostos.",
                "aplicacao": "Repositório interativo que cataloga e estrutura strings de busca prontas para o Google. Permite localizar arquivos de log ou documentos com informações sensíveis em que o nome do alvo possa estar listado inadvertidamente."
              },
              {
                "nome": "Google Advanced Search",
                "url": "https://www.google.com/advanced_search",
                "uso": "Formulação assistida de consultas complexas e operadores booleanos por meio de interface gráfica.",
                "aplicacao": "Ferramenta oficial que traduz parâmetros inseridos em formulários para dorks avançadas de forma automatizada, mitigando o ruído informacional sem a necessidade de o analista memorizar sintaxes, ideal para encontrar PDFs específicos do investigado."
              }
            ]
          },
          {
            "titulo": "Camada 3: Inteligência de Código e Repositórios",
            "conceito": "Pesquisa do username e suas variações dentro de plataformas de versionamento e fóruns de desenvolvimento de software.",
            "comoFunciona": "Mecanismos de busca e coleções de dorks especializadas vasculham commits, wikis e linhas de código hospedados no GitHub, GitLab e plataformas similares.",
            "utilidadeOsint": "Caso o username pertença a um desenvolvedor ou técnico, viabiliza a descoberta de chaves privadas de criptografia ou senhas que o alvo deixou vazar acidentalmente no código-fonte, além de identificar e-mails institucionais escondidos nos logs de commit.",
            "ferramentas": [
              {
                "nome": "GitDorks",
                "url": "https://dorks.s1rn3tz.ovh/gitdorks",
                "uso": "Centralização e estruturação de consultas avançadas (Git Dorks) para a descoberta de credenciais expostas em repositórios de código.",
                "aplicacao": "Usa-se essa plataforma para injetar o username de um desenvolvedor alvo e vasculhar repositórios de código público (como o GitHub). Expõe vazamentos inadvertidos de configurações contendo senhas, chaves de API ou tokens corporativos pertencentes àquele usuário."
              }
            ]
          }
        ]
      },
      {
        "num": "04",
        "nome": "Vazamentos & Credenciais (Breach Intel)",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Username ➔ Senhas em Texto Claro (Plain text) / E-mails Ocultos Associados / Endereços de IP",
        "objetivo": "Cruzar o pseudônimo com o submundo digital. Se o alvo utilizou esse username em fóruns ou serviços que foram invadidos, os dados de cadastro da época revelarão e-mails privados e senhas.",
        "camadas": [
          {
            "titulo": "Camada 1: Bancos de Vazamentos e Credenciais em Texto Claro (Breach Intel)",
            "conceito": "Indexadores massivos de dumps (descargas) de banco de dados extraídos de violações de segurança e exposições ao longo de anos.",
            "comoFunciona": "As plataformas indexam bilhões de registros extraídos de vazamentos de dados, permitindo buscas reversas para confirmar o comprometimento de dados atrelados a um username ou e-mail.",
            "utilidadeOsint": "Transforma um simples nome de tela em dados vitais. Ao achar o username num vazamento, o investigador frequentemente descobre o e-mail real usado na criação da conta, endereços IPs de registro e a senha de preferência do indivíduo (que indica datas, times de futebol ou nomes de parentes).",
            "ferramentas": [
              {
                "nome": "DeHashed",
                "url": "https://www.dehashed.com",
                "uso": "Rastreamento de vazamentos de dados, exposição de credenciais e inteligência cibernética (Threat Intelligence).",
                "aplicacao": "Motor extremamente agressivo que permite a busca dentro de bilhões de registros provenientes de fóruns e servidores vazados da Dark Web. Inserir o username pode retornar nomes reais, e-mails associados e outras credenciais em texto claro atreladas ao alvo."
              },
              {
                "nome": "OSINTLeak",
                "url": "https://osintleak.com/",
                "uso": "Pesquisa e monitoramento de credenciais expostas, vazamentos de dados (data breaches) e stealer logs.",
                "aplicacao": "O serviço agrega e indexa bilhões de registros oriundos de violações de segurança corporativas, dumps clandestinos e stealer logs. Ideal para rastrear a exposição digital e mapear senhas reutilizadas associadas ao username."
              },
              {
                "nome": "SynScan Breaches (Verified Search)",
                "url": "https://synscan.net/breaches",
                "uso": "Consulta e identificação de credenciais vazadas e dados expostos em incidentes de segurança globais para inteligência de ameaças.",
                "aplicacao": "A ferramenta indexa e disponibiliza dados provenientes de incidentes de segurança, permitindo buscas estruturadas por múltiplos campos em texto claro mediante a comprovação de escopo de análise."
              }
            ]
          },
          {
            "titulo": "Camada 2: Inteligência na Dark Web e Redes Anônimas",
            "conceito": "Interrogação de diretórios e bases de dados clandestinas hospedadas em redes de roteamento cebola (Tor).",
            "comoFunciona": "O investigador acessa endereços ocultos (.onion) que funcionam como indexadores massivos de megavazamentos históricos não disponíveis livremente na internet de superfície.",
            "utilidadeOsint": "Ideal para cruzar o nome de usuário com stealer logs (logs de computadores infectados) que circulam em canais do Telegram e na rede Tor, identificando padrões de criação de senhas e contas correlacionadas.",
            "ferramentas": [
              {
                "nome": "PwnDB",
                "url": "http://pwndb2am4tzkvold.onion",
                "uso": "Busca de credenciais vazadas (e-mails e senhas) na rede Tor para investigações de cibercrime e inteligência de ameaças.",
                "aplicacao": "Acessível nativamente na rede Tor, funciona como um indexador massivo contendo bilhões de registros expostos em megavazamentos históricos (como o Collection #1 e o Anti Public). Permite realizar buscas reversas estruturadas, possibilitando encontrar senhas atreladas a contas de forma passiva."
              }
            ]
          },
          {
            "titulo": "Camada 3: Inteligência de Reputação e Histórico de Fraudes",
            "conceito": "Avaliação do envolvimento do username em atividades ilícitas e golpes reportados pela comunidade cibernética.",
            "comoFunciona": "O mecanismo rastreia e centraliza informações coletadas de centenas de bancos de dados públicos, listas de denúncias e fóruns de segurança.",
            "utilidadeOsint": "Evidencia imediatamente se o pseudônimo investigado é conhecido por atuar em fraudes ou golpes financeiros, facilitando a atribuição e o mapeamento de riscos criminais associados ao alvo.",
            "ferramentas": [
              {
                "nome": "ScamSearch.io",
                "url": "https://scamsearch.io",
                "uso": "Consulta e verificação de reputação, cruzamento de dados e identificação de registros de fraudes ou golpes associados a múltiplos identificadores digitais.",
                "aplicacao": "Rastreia o username em listas de denúncias públicas e bases de cibercrime. Permite identificar se o perfil online do alvo já foi utilizado em campanhas de phishing ou estelionato digital, consolidando os alertas da comunidade de segurança."
              }
            ]
          }
        ]
      },
      {
        "num": "05",
        "nome": "Análise Visual & Avatares (IMINT)",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Foto de Perfil (Avatar) ➔ Redes Sociais Alternativas / Nomes Reais / Biometria Oculta",
        "objetivo": "Os alvos que usam múltiplos usernames diferentes costumam cometer o erro de reutilizar a mesma fotografia (avatar) em diversas plataformas. A inteligência visual correlaciona essas contas fisicamente.",
        "camadas": [
          {
            "titulo": "Camada 1: Reconhecimento Facial Massivo e Busca Reversa",
            "conceito": "Mapeamento de vetores biométricos faciais e comparação geométrica contra bilhões de imagens indexadas globalmente na web.",
            "comoFunciona": "Os motores de busca extraem assinaturas visuais e geométricas da face do alvo em uma foto e varrem indexadores globais em redes sociais, fóruns e portais de notícias para localizar correspondências do mesmo indivíduo.",
            "utilidadeOsint": "Se a busca textual pelo username falhar ou atingir um beco sem saída, o investigador baixa a foto do perfil e faz a busca reversa. Isso quebra o pseudonimato, associando a 'selfie' anônima a um perfil profissional legítimo (ex: LinkedIn) do alvo que usa o nome real.",
            "ferramentas": [
              {
                "nome": "PimEyes",
                "url": "https://pimeyes.com/",
                "uso": "Busca reversa de faces e reconhecimento facial massivo na internet para localização de perfis e imagens de alvos.",
                "aplicacao": "Motor robusto baseado em IA que foca unicamente na estrutura biométrica do rosto. É capaz de encontrar o mesmo indivíduo em fotos com planos de fundo, iluminações, cortes de cabelo e idades completamente distintos, desmascarando a identidade por trás do avatar."
              },
              {
                "nome": "FaceCheck.id",
                "url": "https://facecheck.id/",
                "uso": "Reconhecimento facial e busca reversa de imagens para identificação de pessoas e perfis na internet.",
                "aplicacao": "Motor de busca facial focado em localizar correspondências visuais ativas em redes sociais, fóruns e registros públicos. Essencial para rastrear perfis de catfishing ou expor a real identidade de sock puppets baseando-se no avatar."
              }
            ]
          },
          {
            "titulo": "camada 2: Busca Reversa Ampla e Mídias Abstratas",
            "conceito": "Identificação de origens de arquivos e localização de mídias que não contêm rostos humanos através da correspondência de pixels e contexto visual.",
            "comoFunciona": "Os algoritmos de indexação analisam padrões de cores, texturas, cenários e objetos na imagem submetida para buscar réplicas exatas ou variações daquela foto em bilhões de páginas hospedadas na web de superfície.",
            "utilidadeOsint": "Ferramentas essenciais para busca reversa de imagens que não contêm rostos (como logotipos, ilustrações, fotos de carros ou avatares abstratos). Permite rastrear a origem cronológica do arquivo e identificar se a foto de perfil foi furtada de bancos de imagens públicos para compor um perfil falso.",
            "ferramentas": [
              {
                "nome": "Yandex Images",
                "url": "https://yandex.com/images",
                "uso": "Busca reversa de imagens, reconhecimento facial e identificação de padrões visuais em fontes abertas.",
                "aplicacao": "Possui algoritmos de visão computacional de alta precisão que frequentemente superam indexadores ocidentais. Excepcional para isolar características, identificar logotipos abstratos usados em avatares e rastrear mídias publicadas em fóruns asiáticos ou do leste europeu."
              },
              {
                "nome": "Google Images",
                "url": "https://images.google.com",
                "uso": "Pesquisa inversa de imagens, localização de fontes originais de arquivos visuais e identificação de correspondência gráfica.",
                "aplicacao": "Viabiliza o rastreio da origem da imagem de perfil para identificar manipulações de contexto (como avatares clonados de terceiros) e promove o reconhecimento automatizado de marcas e objetos visíveis na foto de capa ou no perfil do alvo."
              },
              {
                "nome": "Google Lens",
                "url": "https://lens.google/",
                "uso": "Reconhecimento visual baseado em inteligência artificial, extração de texto (OCR) e identificação de objetos em imagens.",
                "aplicacao": "Permite que o analista isole pequenos elementos de um avatar complexo utilizando a caixa de seleção dinâmica (bounding box). Útil para traduzir textos sobrepostos em fotos de perfil, identificar o modelo de roupas usadas pelo alvo ou reconhecer locais ao fundo da imagem."
              }
            ]
          },
          {
            "titulo": "Camada 3: Comparação Biométrica Forense",
            "conceito": "Extração de características fisionômicas e cálculo de similaridade biométrica matemática entre duas imagens distintas de rostos (Verificação 1:1).",
            "comoFunciona": "Plataformas de inteligência artificial mapeiam a geometria facial detalhada (distância entre os olhos, boca e nariz) e calculam a probabilidade técnica de as duas mídias submetidas pertencerem ao mesmo indivíduo biológico.",
            "utilidadeOsint": "Garante segurança técnica à investigação. Caso o analista encontre um novo perfil suspeito, ele pode comparar cientificamente o avatar recém-descoberto com as fotos já confirmadas do alvo, recebendo um laudo técnico de similaridade para atestar se as contas são controladas pela mesma pessoa.",
            "ferramentas": [
              {
                "nome": "MxFace - Face Comparing",
                "url": "https://mxface.ai/",
                "uso": "Comparação, verificação e indexação biométrica de faces em imagens para checagem de identidade.",
                "aplicacao": "Permite automatizar a verificação 1:1. O analista envia o avatar investigado e a foto de referência do alvo; o sistema analisa a geometria facial via Deep Learning e entrega um 'confidence score', confirmando se a foto pertence ao mesmo investigado, mitigando disfarces como barbas ou óculos."
              },
              {
                "nome": "Betaface (Old Demo)",
                "url": "https://betaface.com/demo_old.html",
                "uso": "Reconhecimento facial, extração de características biométricas e análise comparativa de faces por inteligência artificial.",
                "aplicacao": "Atua como um motor de processamento analítico local. A ferramenta determina se duas imagens distintas pertencem à mesma pessoa com base em métricas matemáticas, enriquecendo o relatório visual do alvo e calculando a estimativa de idade, gênero e fisionomia extraída do avatar."
              }
            ]
          }
        ]
      },
      {
        "num": "06",
        "nome": "Identificadores Web3 & Blockchain",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Username ➔ Carteiras de Criptomoedas (Crypto Wallets) / Canais no Telegram / NFT Domains",
        "objetivo": "Rastrear a evolução moderna dos cibercriminosos, que hoje monetizam suas identidades digitais vinculando usernames de aplicativos de comunicação a carteiras descentralizadas para ocultar fluxos de capital.",
        "camadas": [
          {
            "titulo": "Camada 1: Desanonimização Financeira Descentralizada",
            "conceito": "Varredura em plataformas de identidade Web3 (Smart Contracts) que conectam strings de nomes a hashes (endereços) de criptoativos.",
            "comoFunciona": "A plataforma interroga os contratos inteligentes de blockchains específicas para revelar qual endereço público de carteira digital detém a custódia e o controle de um determinado nome de usuário ou domínio descentralizado.",
            "utilidadeOsint": "A ponte definitiva entre o perfil comportamental e o fluxo de caixa (FININT). Permite saber qual carteira de criptomoedas recebe pagamentos ou administra a atividade financeira daquele pseudônimo de forma incontestável.",
            "ferramentas": [
              {
                "nome": "Fragment",
                "url": "https://fragment.com/",
                "uso": "Consulta de propriedade, histórico de transações e vinculação cripto de usernames e números anônimos do Telegram.",
                "aplicacao": "A plataforma chave para o Telegram. O analista digita o username comercial (ex: @hacker_group) e verifica o histórico de lances de compra. O sistema exibe o endereço da carteira TON Wallet de quem possui aquele username, atrelando a identidade digital ao fluxo financeiro."
              },
              {
                "nome": "Unstoppable Domains",
                "url": "https://unstoppabledomains.com",
                "uso": "Resolução de domínios descentralizados para extração de endereços de carteiras de criptomoedas e mapeamento de identidades na Web3.",
                "aplicacao": "Caso o username do alvo seja usado como um domínio web3 (ex: pseudonimo.crypto), essa ferramenta revela nativamente os endereços exatos das carteiras de Bitcoin, Ethereum ou Polygon registradas pelo titular."
              }
            ]
          },
          {
            "titulo": "Camada 2: Exploração e Resolução de Domínios Web3",
            "conceito": "Mapeamento e investigação de páginas ativas e ramificações de sites hospedados em ecossistemas de domínios descentralizados (Handshake e TLDs alternativos).",
            "comoFunciona": "Motores de busca especializados e gateways de rede resolvem endereços de blockchain (que não respondem aos servidores convencionais da ICANN) para que possam ser visualizados e auditados em navegadores da internet de superfície.",
            "utilidadeOsint": "Permite varrer e localizar a presença de alvos e infraestruturas clandestinas que foram espelhadas para domínios de nível superior alternativos baseados em blockchain, contornando as restrições e censuras do WHOIS tradicional.",
            "ferramentas": [
              {
                "nome": "HNSSearch",
                "url": "https://hnssearch.io/",
                "uso": "Pesquisa, indexação e exploração de conteúdo e páginas web hospedadas em domínios descentralizados do ecossistema Handshake (HNS).",
                "aplicacao": "Atua como o motor de busca passiva da Web3. O analista pesquisa o username ou codinome do alvo para localizar sites, fóruns e serviços hospedados sob domínios baseados em blockchain, mapeando conteúdos que fogem à indexação do Google."
              },
              {
                "nome": "hns.to",
                "url": "https://hns.to",
                "uso": "Resolução, mapeamento e investigação de nomes de domínio alternativos e descentralizados baseados no protocolo Handshake (HNS).",
                "aplicacao": "Atua como o gateway de acesso e resolução. Após localizar o domínio descentralizado do alvo, o investigador utiliza esta plataforma para abrir e visualizar a página Web3 diretamente no seu navegador web padrão de forma passiva."
              },
              {
                "nome": "HDNS (Handshake DNS)",
                "url": "https://www.hdns.io",
                "uso": "Resolução e validação de nomes de domínio alternativos no ecossistema Handshake (HNS) com foco em privacidade.",
                "aplicacao": "Servidor de resolução que permite auditar os apontamentos técnicos (como registros TXT e A) do domínio descentralizado do alvo, oferecendo a camada crítica de OPSEC ao truncar o IP do investigador durante as requisições de resolução de nomes."
              }
            ]
          },
          {
            "titulo": "Camada 3: Inteligência Financeira e Rastreamento Cripto (FININT)",
            "conceito": "Mapeamento do fluxo de capital descentralizado a partir do endereço criptográfico (Wallet) descoberto na fase de desanonimização do username.",
            "comoFunciona": "Exploradores de blocos processam os livros-razão públicos (ledgers) das blockchains para auditar o histórico de transações, saldos e conexões transacionais vinculados ao endereço investigado.",
            "utilidadeOsint": "Após quebrar o vínculo do username para a carteira, esta fase mapeia a movimentação de fundos de origem ilícita e identifica as corretoras (exchanges) ou carteiras de destino que interagem com o alvo, viabilizando o 'Follow the Money'.",
            "ferramentas": [
              {
                "nome": "Blockchain.com Explorer",
                "url": "https://www.blockchain.com/explorer",
                "uso": "Rastreamento, auditoria e análise de transações e carteiras em redes blockchain.",
                "aplicacao": "O livro-razão público indispensável. O analista insere o endereço da carteira criptográfica revelada no Fragment ou Unstoppable Domains para rastrear todas as movimentações financeiras recebidas e enviadas pelo pseudônimo."
              },
              {
                "nome": "BlockSherlock",
                "url": "https://www.blocksherlock.com/",
                "uso": "Curadoria, catalogação e centralização de ferramentas para investigação de criptoativos e fontes abertas (OSINT).",
                "aplicacao": "Diretório tático que guia o analista. Fornece recursos analíticos adicionais focados em heurística e agrupamento de entidades de blockchain para desvendar estruturas complexas de lavagem de capital ligadas ao alvo."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "veiculos",
    "categoria": "logistica",
    "icone": "🚗",
    "titulo": "Investigação de Veículos e Logística (VATINT)",
    "subtitulo": "// Roteiro metodológico para rastreamento de veículos terrestres, telemetria aérea, frotas marítimas e infraestrutura de transportes.",

    "imagem": "../img/trilha-veiculos.png",

    "modulos": [
      {
        "num": "01",
        "nome": "Veículos Terrestres & Frotas Rodoviárias",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Placa / Chassi / CNPJ ➔ Dados Cadastrais / Histórico de Sinistros / Restrições / Frota Comercial",
        "objetivo": "Realizar o levantamento patrimonial de ativos terrestres, identificando a procedência, o tipo de propriedade e o histórico de um veículo para detectar fraudes, clonagens ou o uso de transportadoras de fachada.",
        "camadas": [
          {
            "titulo": "Camada 1: Identificação Básica e Segurança Pública",
            "conceito": "Decodificação primária dos dados de fábrica e cruzamento com bases de segurança pública.",
            "comoFunciona": "Aplicativos e portais web interrogam bases de dados de trânsito em tempo real a partir da placa inserida, retornando a ficha técnica do veículo e processando simultaneamente o status criminal daquele ativo.",
            "utilidadeOsint": "Essencial para confirmar inconsistências físicas em campo. Permite detectar indícios de clonagem de veículos ao cruzar o modelo e cor observados com o registro oficial, além de checar pendências de roubo/furto de forma imediata.",
            "ferramentas": [
              {
                "nome": "SINESP Cidadão (App Store)",
                "url": "https://apps.apple.com/br/app/sinesp-cidad%C3%A3o/id768157962",
                "uso": "Consulta de situação de roubo ou furto de veículos, mandados de prisão aguardando cumprimento e pessoas desaparecidas.",
                "aplicacao": "Aplicativo oficial governamental. A partir da placa, informa a marca/modelo e verifica imediatamente se há registro ativo de roubo ou furto para o veículo nas bases nacionais, servindo como consulta primária e ágil em diligências de campo."
              },
              {
                "nome": "Busca Placas",
                "url": "https://buscaplacas.com.br/",
                "uso": "Consulta e levantamento de informações cadastrais básicas de veículos brasileiros a partir do número da placa.",
                "aplicacao": "Plataforma web que decodifica a placa e retorna a ficha técnica básica do veículo (como ano de fabricação, modelo, cor e cidade/estado de emplacamento), dados cruciais para confirmar inconsistências físicas sem demandar consultas onerosas."
              },
              {
                "nome": "Portal KePlaca",
                "url": "https://www.keplaca.com/",
                "uso": "Consulta de dados cadastrais, procedência geográfica e especificações técnicas de veículos nacionais através da placa.",
                "aplicacao": "Atua como indexador rápido para identificação e validação de ativos móveis. Permite correlacionar de forma ágil uma placa avistada à sua real especificação de fábrica, auxiliando no levantamento da base geográfica original do veículo investigado."
              }
            ]
          },
          {
            "titulo": "Camada 2: Histórico Profundo e Passivos (VATINT/FININT)",
            "conceito": "Acesso a agregadores que consolidam dados de Detrans, leilões e restrições financeiras (gravames).",
            "comoFunciona": "Bureaus de informação privada consolidam dados massivos provenientes de leiloeiros, seguradoras, cartórios e sistemas judiciais para montar uma linha do tempo integral sobre a propriedade do ativo.",
            "utilidadeOsint": "Diferencia a posse técnica da propriedade jurídica, sendo vital para mapear se os bens estão bloqueados (alienação fiduciária), se transitaram por leilões ou se acumulam sinistros, desvelando o verdadeiro passivo atrelado à frota.",
            "ferramentas": [
              {
                "nome": "Lupa Veicular",
                "url": "https://www.lupaveicular.com/",
                "uso": "Consulta e levantamento de histórico veicular, débitos, restrições e análise de tipo de propriedade por meio da placa ou chassi.",
                "aplicacao": "Fornece o histórico veicular e diferencia o tipo de propriedade (ex: pessoa física, pessoa jurídica ou alienação fiduciária). Identificar que o proprietário se enquadra como banco é essencial para mapear bens atrelados a financiamentos."
              },
              {
                "nome": "Carfacts",
                "url": "https://carfacts.com.br/",
                "uso": "Consulta e consolidação de dados cadastrais, restrições e histórico de veículos por placa e chassi.",
                "aplicacao": "Sistema que centraliza o histórico completo do chassi e do motor, revelando passagem documentada por leilões, indícios de sinistro, multas, quilometragem e restrições financeiras (gravames) ativas para uma auditoria patrimonial exaustiva."
              },
              {
                "nome": "Carpivara",
                "url": "https://consultasdeveiculos.com/",
                "uso": "Consulta consolidada de histórico veicular, multas, restrições e procedência de automóveis.",
                "aplicacao": "Plataforma de background check veicular que serve para auditar a situação legal de ativos rodoviários, complementando investigações de ocultação de patrimônio e verificando se os automóveis do alvo possuem impedimentos judiciais."
              }
            ]
          },
          {
            "titulo": "Camada 3: Frotas e Transporte de Carga",
            "conceito": "Mapeamento regulatório de transportadoras e motoristas autônomos por meio de bases governamentais cruzadas.",
            "comoFunciona": "A plataforma interroga as bases da agência reguladora de transportes para consolidar todos os ativos logísticos atrelados e legalmente associados à razão social ou CPF do transportador.",
            "utilidadeOsint": "Viabiliza o mapeamento reverso de frota. Fornece uma listagem completa das placas atreladas a uma empresa, cujas placas constituem excelentes entradas para inserção em câmeras OCR ou sistemas de pedágio em rodovias.",
            "ferramentas": [
              {
                "nome": "Consulta Pública RNTRC - ANTT",
                "url": "https://consultapublica.antt.gov.br/Site/ConsultaRNTRC.aspx",
                "uso": "Consulta de regularidade, dados cadastrais e composição de frota de transportadores rodoviários de carga (autônomos e empresas).",
                "aplicacao": "O analista insere o CNPJ de uma transportadora (ou CPF de um autônomo) e a ferramenta revela todas as placas de cavalos mecânicos e reboques registrados pela entidade. Permite auditar a real capacidade logística do alvo e constatar incompatibilidades entre as frotas declaradas e o patrimônio ostentado."
              }
            ]
          }
        ]
      },
      {
        "num": "02",
        "nome": "Aviação Civil & Propriedade (ANAC/FAB)",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Prefixo / CPF / CNPJ ➔ Proprietário Real / Operador / Situação de Voo / Deslocamentos de Autoridades",
        "objetivo": "Localizar ativos aéreos de alto valor, quebrando a blindagem patrimonial de indivíduos de alta renda (HNWIs) e corporações, e rastrear o uso institucional de aeronaves governamentais.",
        "camadas": [
          {
            "titulo": "Camada 1: Propriedade e Registro Civil",
            "conceito": "Consulta direta à 'certidão de nascimento' e registro de posse da aeronave na agência reguladora oficial.",
            "comoFunciona": "A plataforma interroga as bases oficiais de aviação civil para revelar se uma pessoa física ou jurídica possui aeronaves registradas no país, ou utiliza o prefixo para atestar as condições do certificado de voo.",
            "utilidadeOsint": "Permite realizar o mapeamento passivo de ativos de alto valor financeiro atrelados a indivíduos sob suspeita ou empresas de fachada, revelando a identidade de proprietários e a situação regular do bem móvel.",
            "ferramentas": [
              {
                "nome": "Pesquisar CNPA - ANAC (Agência Nacional de Aviação Civil)",
                "url": "https://sistemas.anac.gov.br/CNPA/PesquisarCnpa",
                "uso": "Consulta e emissão de Certidão Negativa de Propriedade de Aeronaves (CNPA) para identificar se uma pessoa física ou jurídica possui aeronaves registradas no país.",
                "aplicacao": "O analista insere o CPF ou CNPJ do alvo; caso não haja bens, é gerada a certidão negativa, mas caso existam, o sistema lista as marcas e matrículas das aeronaves, atuando como um indexador reverso de infraestrutura de alta relevância."
              },
              {
                "nome": "Consulta ao Registro Aeronáutico Brasileiro (RAB) - ANAC",
                "url": "https://sistemas.anac.gov.br/aeronaves/cons_rab.asp",
                "uso": "Consulta e verificação de informações registrais, propriedade, operação e situação de aeronaves civis brasileiras.",
                "aplicacao": "Aprofunda a investigação a partir do prefixo da aeronave (marca de matrícula), revelando quem opera a aeronave, o número de série, o status do Certificado de Aeronavegabilidade e a eventual existência de restrições ou gravames sobre o ativo."
              }
            ]
          },
          {
            "titulo": "Camada 2: Transparência e Voos Oficiais",
            "conceito": "Rastreamento institucional do uso de aeronaves governamentais para prestação de contas e cruzamento de agendas públicas.",
            "comoFunciona": "Plataformas de transparência ativa disponibilizam relatórios de missões de transporte, detalhando autoridades requisitantes, número de passageiros e trajetos executados.",
            "utilidadeOsint": "Permite cruzar agendas oficiais de Pessoas Politicamente Expostas (PEP) com deslocamentos reais executados em aeronaves militares, ajudando a identificar padrões de viagem e comitivas de caronas institucionais.",
            "ferramentas": [
              {
                "nome": "Registro de Voos - Força Aérea Brasileira (FAB)",
                "url": "https://www.fab.mil.br/voos",
                "uso": "Consulta de registros de voos de autoridades e painéis de transporte do Correio Aéreo Nacional (CAN) da Força Aérea Brasileira.",
                "aplicacao": "Disponibiliza os registros detalhados das viagens institucionais. Os prefixos identificados nestes relatórios servem como insumo para rastrear o histórico técnico de voos em plataformas abertas de telemetria ADSB."
              }
            ]
          },
          {
            "titulo": "Camada 3: Telemetria, Rastreamento e Histórico Aeronáutico",
            "conceito": "Rastreamento global em tempo real de voos (telemetria ADS-B), busca de mídias fotográficas históricas e verificação de sinistros aéreos.",
            "comoFunciona": "Sistemas agregam dados de receptores terrestres e de satélites do sistema ADS-B, registros globais de acidentes e redes colaborativas de imagens aeronáuticas para compilar a rotina operacional das frotas.",
            "utilidadeOsint": "Expande o levantamento estático para a vigilância de mobilidade. Viabiliza rastrear trajetos de jatos privados e voos comerciais do alvo, confirmar evidências visuais de presença em aeroportos e mapear o histórico de posse via acidentes registrados.",
            "ferramentas": [
              {
                "nome": "Flightradar24 (flightradar24.com)",
                "url": "https://www.flightradar24.com/",
                "uso": "Rastreamento global de voos em tempo real, telemetria de aeronaves (ADS-B) e monitoramento de tráfego aéreo histórico e atual.",
                "aplicacao": "Permite monitorar as rotas, velocidades e altitudes de jatos executivos associados ao alvo. O analista pode rastrear conexões corporativas analisando a presença simultânea de aeronaves investigadas em determinados aeroportos."
              },
              {
                "nome": "FlightStats (flightstats.com)",
                "url": "https://www.flightstats.com/",
                "uso": "Monitoramento de status de voos em tempo real, consulta de históricos de pontualidade aeroportuária e rastreamento de rotas aéreas comerciais.",
                "aplicacao": "Ideal para auditar o tráfego comercial, o analista pode cruzar números de voo conhecidos para validar álibis temporais e confirmar deslocamentos de alvos entre diferentes jurisdições de forma fidedigna."
              },
              {
                "nome": "FlightAware Photos (pt.flightaware.com/photos/)",
                "url": "https://pt.flightaware.com/photos/",
                "uso": "Repositório colaborativo de imagens de aeronaves para apoio a investigações de inteligência de aviação (GEOINT) e rastreamento visual de frotas.",
                "aplicacao": "A galeria funciona como uma base de evidências visuais para o levantamento patrimonial. A partir da matrícula (prefixo), é possível verificar as alterações na pintura corporativa e confirmar a presença da aeronave em locais específicos através do tempo."
              },
              {
                "nome": "Aviation Safety Network (ASN)",
                "url": "https://asn.flightsafety.org/",
                "uso": "Consulta a bancos de dados históricos de acidentes, incidentes e segurança da aviação global para rastreamento e inteligência de frotas aéreas.",
                "aplicacao": "Permite auditar o ciclo de vida e histórico de sinistros de aeronaves comerciais e jatos privados usando identificadores técnicos (como o MSN), rastreando frotas que mudaram frequentemente de prefixos para ocultar atividades ou proprietários sancionados."
              }
            ]
          }
        ]
      },
      {
        "num": "03",
        "nome": "Telemetria Aérea & Rastreamento de Voos",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Prefixo (Matrícula) ➔ Rotas Históricas / Posição em Tempo Real / Registro Fotográfico",
        "objetivo": "Monitorar ativamente os deslocamentos e as rotas logísticas aéreas do investigado para estabelecer cronogramas (linhas do tempo) e correlacionar viagens a reuniões de negócios, evasão ou movimentação de ativos.",
        "camadas": [
          {
            "titulo": "Camada 1: Telemetria e Tráfego em Tempo Real",
            "conceito": "Captura e renderização de sinais de rádio ADS-B emitidos por transponders de aeronaves para receptores globais.",
            "comoFunciona": "Plataformas agregam sinais de telemetria emitidos por transponders de aeronaves (ADS-B) e dados de controle de tráfego aéreo, processando altitude, velocidade e coordenadas em mapas interativos de forma contínua.",
            "utilidadeOsint": "Viabiliza o rastreamento ininterrupto de jatos executivos e voos comerciais do alvo. Permite validar álibis temporais e identificar conexões geográficas e corporativas a partir da presença simultânea de aeronaves em aeródromos específicos.",
            "ferramentas": [
              {
                "nome": "Flightradar24 (flightradar24.com)",
                "url": "https://www.flightradar24.com/",
                "uso": "Rastreamento global de voos em tempo real, telemetria de aeronaves (ADS-B) e monitoramento de tráfego aéreo histórico e atual.",
                "aplicacao": "Exibe em tempo real o posicionamento, histórico de rotas, velocidade e altitude de voos comerciais e jatos executivos. O analista pode monitorar padrões de viagem, rastrear frotas corporativas e programar alertas para movimentos táticos logísticos do investigado."
              },
              {
                "nome": "FlightStats (flightstats.com)",
                "url": "https://www.flightstats.com/",
                "uso": "Monitoramento de status de voos em tempo real, consulta de históricos de pontualidade aeroportuária e rastreamento de rotas aéreas comerciais.",
                "aplicacao": "Fornece dados operacionais exatos de voos comerciais, como horários de decolagem/pouso, fuso horário e portões de embarque. Essencial para validar o deslocamento de alvos utilizando aviação civil de linha e cruzar números de voos conhecidos para confirmar movimentações entre jurisdições."
              }
            ]
          },
          {
            "titulo": "Camada 2: Evidências Visuais e Reconhecimento Fotográfico (Spotting)",
            "conceito": "Busca em repositórios colaborativos por evidências fotográficas que atestem o aspecto físico e o paradeiro histórico do ativo aéreo.",
            "comoFunciona": "A plataforma agrega milhões de fotografias submetidas por entusiastas da aviação (spotters) de todo o mundo, indexando-as estritamente pela marca de matrícula (prefixo) da aeronave investigada.",
            "utilidadeOsint": "Permite que o investigador verifique a aparência física do avião (mudanças de pintura/logotipo) para documentar a tentativa de ocultação visual ou confirme fotograficamente sua presença física em um aeroporto numa data específica, estabelecendo álibis visuais inegáveis.",
            "ferramentas": [
              {
                "nome": "FlightAware Photos (pt.flightaware.com/photos/)",
                "url": "https://pt.flightaware.com/photos/",
                "uso": "Repositório colaborativo de imagens de aeronaves para apoio a investigações de inteligência de aviação (GEOINT) e rastreamento visual de frotas.",
                "aplicacao": "A galeria funciona como uma base de evidências visuais históricas. Permite verificar as alterações na pintura corporativa (livery) ao longo dos anos e comprovar a presença da aeronave em locais específicos por meio dos registros e metadados dos fotógrafos locais."
              }
            ]
          },
          {
            "titulo": "Camada 3: Histórico de Ocorrências e Inteligência de Acidentes",
            "conceito": "Monitoramento global de relatórios técnicos, incidentes de segurança, anomalias operacionais e acidentes atrelados a aeronaves ou frotas comerciais e executivas.",
            "comoFunciona": "Bancos de dados consolidam registros oficiais de órgãos reguladores de aviação civil, dados de telemetria e transcrições de relatórios de voo para documentar sinistros e o ciclo de vida das aeronaves.",
            "utilidadeOsint": "Vital para mapear o histórico de posse através de sinistros antigos. Auxilia ativamente a rastrear aeronaves que mudaram de dono ou de prefixo repetidas vezes, expondo fraudes e vinculando veículos de alto valor a corporações sancionadas ou investigadas.",
            "ferramentas": [
              {
                "nome": "The Aviation Herald (AvHerald)",
                "url": "https://avherald.com/",
                "uso": "Monitoramento global e histórico de incidentes, acidentes e ocorrências na aviação comercial.",
                "aplicacao": "Rastreia, documenta e publica relatórios detalhados sobre anomalias de voo. É extremamente útil para cruzar trajetórias suspeitas identificadas em plataformas de telemetria ADSB, ajudando a confirmar de forma documental se uma interrupção de rota ocorreu por falha técnica ou desvio intencional."
              },
              {
                "nome": "Aviation Safety Network (ASN)",
                "url": "https://asn.flightsafety.org/",
                "uso": "Consulta a bancos de dados históricos de acidentes, incidentes e segurança da aviação global para rastreamento e inteligência de frotas aéreas.",
                "aplicacao": "Fornece relatórios minuciosos sobre o ciclo de vida da frota. A busca pelo número de série exclusivo do fabricante (MSN) permite que o investigador encontre a verdadeira cadeia de propriedade de aeronaves que alteraram suas matrículas (tail numbers) para mascarar operações irregulares."
              }
            ]
          }
        ]
      },
      {
        "num": "04",
        "nome": "Embarcações & Inteligência Marítima",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Nome da Embarcação / IMO / CNPJ ➔ Armador / Bandeira / Frotas de Navegação / Sinal AIS",
        "objetivo": "Levantar o inventário naval e auditar o movimento de embarcações de carga, cabotagem ou iates de luxo vinculados a grupos econômicos ou alvos sob investigação de lavagem de dinheiro/ocultação.",
        "camadas": [
          {
            "titulo": "Camada 1: Propriedade e Regulamentação Nacional",
            "conceito": "Mapeamento regulatório e identificação de frotas navais através de registros oficiais nas agências governamentais de transportes aquaviários.",
            "comoFunciona": "A plataforma interroga as bases de dados oficiais da agência reguladora para revelar o inventário integral de embarcações associadas a uma empresa de navegação ou validar os dados de registro e operação de um ativo específico.",
            "utilidadeOsint": "Viabiliza o pivoting tático a partir de um ativo móvel (embarcação) para o seu operador ou armador legal. Isso permite mapear a capacidade logística real de um grupo econômico e identificar indícios de ocultação de patrimônio de alto valor por meio de subsidiárias ou empresas de fachada no setor de navegação.",
            "ferramentas": [
              {
                "nome": "Consulta de Frota Geral - ANTAQ",
                "url": "https://web3.antaq.gov.br/Portal/Frota/ConsultarFrotaGeral.aspx",
                "uso": "Consulta e consolidação de frotas operacionais e embarcações vinculadas a Empresas Brasileiras de Navegação (EBN) homologadas pela ANTAQ.",
                "aplicacao": "Inserindo o CNPJ de uma Empresa Brasileira de Navegação (EBN), lista-se todo o inventário de embarcações, revelando a real capacidade logística subjacente de grandes grupos econômicos e facilitando a auditoria em massa de ativos navais associados a um único CNPJ principal."
              },
              {
                "nome": "Consulta de Embarcações - ANTAQ",
                "url": "https://web3.antaq.gov.br/SAMA/Embarcacao/Consultar.aspx",
                "uso": "Consulta e validação cadastral de embarcações, frotas, proprietários e operadores regulados pela ANTAQ no setor de transporte aquaviário brasileiro.",
                "aplicacao": "Valida os dados operacionais, nome, operador e números de registro global (MMSI/IMO) de navios, barcaças e empurradores no país. Os dados obtidos servem como entrada ideal para integração com ferramentas de GEOINT marítimo e rastreamento de sinais AIS em tempo real."
              }
            ]
          },
          {
            "titulo": "Camada 2: Rastreamento Global por AIS e Telemetria Marítima",
            "conceito": "Uso de telemetria do Sistema de Identificação Automática (AIS) para localizar a coordenada náutica exata, histórico de portos e comportamento de um navio no mapa mundi.",
            "comoFunciona": "Plataformas agregam a coleta massiva de dados provenientes de redes de receptores terrestres e de satélites do sistema AIS, convertendo os sinais de rádio em dados de posicionamento, velocidade, rotas e destinos em interfaces cartográficas.",
            "utilidadeOsint": "Permite rastrear o deslocamento e a movimentação de mercadorias, auditar o tráfego portuário e estabelecer linhas do tempo geográficas a partir do histórico de ancoragem de embarcações de interesse, validando rotas logísticas e conexões de alvos de colarinho branco.",
            "ferramentas": [
              {
                "nome": "MarineTraffic",
                "url": "https://www.marinetraffic.com/",
                "uso": "Rastreamento em tempo real, monitoramento histórico e inteligência de frotas de embarcações globais.",
                "aplicacao": "Permite o rastreamento histórico e em tempo real de posições, rotas marítimas, destinos declarados e auditoria de tráfego portuário. É essencial para verificar anomalias e tentativas de evasão, como quando embarcações desligam seus sinais em rotas suspeitas (dark vessels)."
              },
              {
                "nome": "VesselFinder",
                "url": "https://www.vesselfinder.com/",
                "uso": "Rastreamento global de embarcações, telemetria marítima em tempo real e monitoramento de tráfego naval.",
                "aplicacao": "Plataforma avançada de monitoramento AIS global que fornece dados técnicos detalhados complementares sobre frotas marítimas, históricos de porto e trajetórias comerciais, ajudando a validar de forma independente alegações geográficas ou cronológicas da embarcação do alvo."
              }
            ]
          }
        ]
      },
      {
        "num": "05",
        "nome": "Histórico de Sinistros & Incidentes",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Aeronave / Operador / Data ➔ Laudos Técnicos / Cronologia de Quedas e Incidentes",
        "objetivo": "Pesquisar o histórico pregressos de acidentes, manutenções mal-sucedidas ou problemas operacionais de uma frota aérea para atestar negligência, confirmar interrupções de rota ou investigar a baixa de ativos.",
        "camadas": [
          {
            "titulo": "Camada 1: Bancos de Segurança e Inteligência de Acidentes",
            "conceito": "Consulta a bases de dados dedicadas à catalogação detalhada de acidentes, incidentes e anomalias operacionais na aviação civil, comercial e militar.",
            "comoFunciona": "Plataformas consolidam dados técnicos provenientes de relatórios oficiais de órgãos reguladores de aviação civil, registros de telemetria, relatórios de tripulação e notas da imprensa para construir a cronologia de sinistros de aeronaves específicas.",
            "utilidadeOsint": "Permite rastrear o ciclo de vida operacional de uma frota, auditar sinistros para investigar interrupções de rota (confirmando se ocorreram por falhas técnicas ou desvios intencionais) e desmascarar a real cadeia de custódia de aeronaves que utilizam a troca de prefixos para ocultar atividades.",
            "ferramentas": [
              {
                "nome": "Aviation Safety Network (ASN)",
                "url": "https://asn.flightsafety.org/",
                "uso": "Consulta a bancos de dados históricos de acidentes, incidentes e segurança da aviação global para rastreamento e inteligência de frotas aéreas.",
                "aplicacao": "Atua como uma plataforma de inteligência logística e rastreamento de ativos. A busca estruturada pelo número de série exclusivo do fabricante (MSN) permite que o investigador encontre a verdadeira cadeia de propriedade de aeronaves que alteraram suas matrículas (tail numbers) para mascarar operações irregulares ao longo da vida útil."
              },
              {
                "nome": "The Aviation Herald (AvHerald)",
                "url": "https://avherald.com/",
                "uso": "Monitoramento global e histórico de incidentes, acidentes e ocorrências na aviação comercial.",
                "aplicacao": "Rastreia, documenta e publica relatórios detalhados sobre anomalias de voo. É extremamente útil para cruzar trajetórias suspeitas identificadas em plataformas de telemetria ADSB, fornecendo relatórios minuciosos que frequentemente incluem fotografias dos danos estruturais e dados meteorológicos (METAR/TAF) da hora do incidente."
              }
            ]
          }
        ]
      },
      {
        "num": "06",
        "nome": "Reconhecimento de Vias & Ferrovias (GEOINT)",
        "opsec": "passivo",
        "opsecTexto": "🟢 PASSIVO",
        "vetor": "Município / Empresa / Malha Viária ➔ Condições Geográficas / Infraestrutura Crítica Atribuída",
        "objetivo": "Realizar o reconhecimento virtual do terreno e mapear quem controla as artérias logísticas de transporte pesado, além de observar ativamente rotas de fuga ou de trânsito em grandes capitais.",
        "camadas": [
          {
            "titulo": "Camada 1: Videomonitoramento Urbano e Consciência Situacional",
            "conceito": "Estabelecimento de consciência situacional instantânea e reconhecimento remoto de infraestruturas físicas através do acesso a câmeras de segurança e tráfego.",
            "comoFunciona": "Plataformas públicas e diretórios globais indexam e disponibilizam transmissões de vídeo em tempo real (streams) provenientes de câmeras de monitoramento viário e de CFTVs desprotegidos em áreas urbanas.",
            "utilidadeOsint": "Permite a verificação passiva de condições de tráfego, análise de rotas de fuga, validação de dados meteorológicos locais em datas específicas e o monitoramento indireto de infraestruturas físicas sem a necessidade de deslocamento a campo da equipe de investigação.",
            "ferramentas": [
              {
                "nome": "Câmeras CET-SP",
                "url": "https://cameras.cetsp.com.br/View/Cam.aspx",
                "uso": "Monitoramento em tempo real e visualização de condições viárias por meio de câmeras públicas de tráfego na cidade de São Paulo.",
                "aplicacao": "Plataforma governamental que fornece acesso a dezenas de imagens capturadas por câmeras de monitoramento viário distribuídas ao longo das principais avenidas e rodovias urbanas da capital paulista. Ideal para o estabelecimento de consciência situacional em diligências físicas locais ou linhas do tempo investigativas."
              },
              {
                "nome": "Insecam",
                "url": "http://www.insecam.org/",
                "uso": "Monitoramento e visualização de transmissões de vídeo em tempo real de câmeras IP desprotegidas para inteligência geoespacial (GEOINT).",
                "aplicacao": "Maior diretório online do mundo dedicado à indexação de feeds de CFTVs e câmeras de segurança desprotegidas. Expande a capacidade de videomonitoramento urbano do investigador para nível global/nacional, permitindo a observação passiva de ruas, postos de combustíveis e vias comerciais fora do eixo paulista sem interagir com a rede do local investigado."
              }
            ]
          },
          {
            "titulo": "Camada 2: Inteligência Logística de Ferrovias e Concessões",
            "conceito": "Mapeamento regulatório e análise de contratos governamentais para identificar os operadores e controladores de infraestruturas logísticas críticas.",
            "comoFunciona": "Portais oficiais de agências reguladoras disponibilizam bases de dados abertas contendo termos aditivos, outorgas, obrigações contratuais e a delimitação geográfica das malhas sob controle privado.",
            "utilidadeOsint": "Utilizado em Supply Chain Intelligence para rastrear e auditar quem domina o escoamento de commodities em regiões-chave. Permite ligar CNPJs de concessionárias a obrigações públicas e levantar dados de ativos operacionais vinculados a essas empresas logísticas.",
            "ferramentas": [
              {
                "nome": "Concessões Ferroviárias - ANTT",
                "url": "https://www.gov.br/antt/pt-br/assuntos/ferrovias/concessoes-ferroviarias",
                "uso": "Levantamento de dados regulatórios, contratos de concessão e infraestrutura logística do setor ferroviário brasileiro.",
                "aplicacao": "Portal oficial que disponibiliza os contratos de concessão vigentes e a delimitação geográfica das malhas ferroviárias federais outorgadas à iniciativa privada. O analista identifica as rotas de escoamento e mapeia o controle operacional exercido por gigantes do setor logístico, extraindo até mesmo assinaturas e nomes de representantes corporativos envolvidos nos aditivos."
              }
            ]
          }
        ]
      }
    ]
  }
];