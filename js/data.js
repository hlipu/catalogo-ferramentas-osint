// js/data.js

const TOOLS = [
  {
    "id": "1.1.1.1 (Cloudflare WARP)",
    "title": "1.1.1.1 (Cloudflare WARP)",
    "url": "https://one.one.one.one/",
    "tipo": "Ferramenta de Segurança e Anonimização de Rede",
    "utilidade": "Resolução de DNS segura (DoH/DoT) e criptografia de tráfego de rede (WARP) para OPSEC",
    "descricao": "O 1.1.1.1 é um resolvedor de DNS público e gratuito operado pela Cloudflare que prioriza a privacidade e a velocidade dos usuários na internet. Além da resolução de DNS padrão com suporte a protocolos criptografados como DNS-over-HTTPS (DoH) e DNS-over-TLS (DoT), a plataforma oferece o serviço WARP. O WARP funciona como um túnel de rede criptografado construído sobre o protocolo WireGuard, protegendo todo o tráfego de internet do dispositivo e encaminhando-o através da rede global da Cloudflare para mitigar o monitoramento local e ocultar o tráfego do provedor de internet.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "plataforma/desktop",
      "plataforma/mobile",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Nas investigações de fontes abertas, a ferramenta desempenha um papel defensivo crítico na fase de preparação e manutenção da OPSEC (Segurança das Operações). Ao criptografar o tráfego de rede e mascarar as requisições de DNS, ela impede que o provedor de serviços de internet (ISP) do investigador ou potenciais adversários em redes locais interceptem, registrem ou monitorem quais domínios, servidores ou infraestruturas estão sendo consultados durante a coleta de dados. Isso ajuda a mitigar o risco de vazamentos de DNS (*DNS leaks*) e protege o analista ao atuar em redes não confiáveis.",
    "notes": "* Embora o WARP mascare o endereço IP real por meio do roteamento da rede Cloudflare, ele foi projetado com foco em segurança e criptografia de tráfego, não funcionando como uma ferramenta de anonimato total multilink com alteração geográfica precisa de IP (como a rede Tor).\n- Recomenda-se ativar o recurso sempre que o analista precisar realizar pesquisas a partir de conexões de internet compartilhadas ou públicas (como aeroportos, cafés ou hotéis) para evitar ataques de interceptação (*Man-in-the-Middle*).\n- A integração da ferramenta com navegadores blindados e técnicas de mitigação de *fingerprinting* maximiza a segurança global da máquina virtual ou ambiente de investigação."
  },
  {
    "id": "360Cities",
    "title": "360Cities",
    "url": "https://www.360cities.net/",
    "tipo": "Repositório Global de Imagens Panorâmicas e Inteligência Geoespacial (GEOINT)",
    "utilidade": "Exploração visual imersiva, validação de terreno e inteligência geoespacial por meio de imagens panorâmicas de 360° e gigapixels geolocalizados",
    "descricao": "O 360Cities é uma das maiores plataformas colaborativas do mundo dedicadas à publicação, catalogação e visualização de fotografias panorâmicas em 360 graus, vídeos imersivos e imagens gigapixel em altíssima resolução. O serviço organiza o conteúdo visual em um mapa global interativo, permitindo navegar virtualmente por locais urbanos, rurais, marcos arquitetônicos e pontos remotos em diversas partes do planeta.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, especialmente sob a disciplina de GEOINT (Geointeligência) e IMINT (Inteligência de Imagens), o 360Cities atua como uma camada complementar crítica aos serviços convencionais de Street View e satélite. A plataforma possibilita a verificação visual de fachadas, análise de linha de visada (Line of Sight), triangulação de pontos de referência e validação de terrenos em áreas com cobertura desatualizada ou restrita no Google Street View ou no Apple Maps.",
    "notes": "* As imagens costumam conter registros temporais específicos e créditos dos fotógrafos, o que auxilia na determinação da época em que a estrutura visual do local foi documentada.\n* As fotografias no formato Gigapixel oferecem nível extremo de detalhe através de zoom profundo, sendo úteis para ler placas, inscrições distantes e detalhes de engenharia/arquitetura em investigações de reconhecimento de terreno."
  },
  {
    "id": "4Devs",
    "title": "4Devs",
    "url": "https://www.4devs.com.br/",
    "tipo": "Ferramenta de Geração e Validação de Dados Cadastrais",
    "utilidade": "Geração de dados sintéticos para criação de personas (Sock Puppets) e validação algorítmica de documentos brasileiros em investigações OSINT",
    "descricao": "O 4Devs é uma plataforma web que reúne um conjunto diversificado de geradores e validadores de dados estruturados focados no padrão brasileiro. A ferramenta permite criar e testar a consistência matemática de dados civis e cadastrais — tais como CPF, CNPJ, RG, CNH, nomes de pessoas completas, endereços fictícios e contas bancárias — operando de forma puramente algorítmica e sem a necessidade de consultas diretas a bancos de dados governamentais reais.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações de fontes abertas, o 4Devs atua como um utilitário de suporte técnico nas fases de preparação de OPSEC e análise de integridade de dados. Ela viabiliza a criação rápida de perfis sintéticos realistas (*sock puppets*) necessários para infiltração em fóruns, redes sociais ou sites que demandem cadastros nacionais válidos. Adicionalmente, permite ao analista auditar a legitimidade matemática de registros de identidade encontrados em vazamentos de dados ou outras fontes expostas.",
    "notes": " - **Ponto de Atenção:** Os documentos gerados pela plataforma (como CPF e CNPJ) utilizam apenas a validação algorítmica dos dígitos verificadores. Eles não realizam consultas a bancos de dados oficiais do governo (como a Receita Federal) e não garantem a existência real do registro em bases estatais.\n- **Vantagem:** Apresenta utilitários adicionais úteis para triagem técnica rápida, como conversores de texto, geradores de senhas fortes e ferramentas de rede básicas (como testadores de portas e localizadores de IP).  "
  },
  {
    "id": "5Sim",
    "title": "5Sim",
    "url": "https://5sim.net/",
    "tipo": "Plataforma Web de Telefonia Virtual (SMS Activation Service)",
    "utilidade": "Recebimento de SMS online utilizando números de telefone virtuais temporários para ativação de contas e bypass de autenticação de dois fatores (2FA).",
    "descricao": "O 5Sim é um serviço online de ativação de SMS que disponibiliza números de telefone virtuais temporários de diversos países e operadoras de telefonia ao redor do mundo. A plataforma permite contornar a necessidade de utilização de um chip SIM físico pessoal para realizar a validação e verificação de contas em plataformas de redes sociais, e-mails, aplicativos de mensageria corporativa e outros serviços web que exigem um número telefônico ativo no momento do cadastro ou login.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/pago",
      "opsec/personas"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas, a plataforma é utilizada como uma ferramenta de apoio à segurança de operações (OPSEC) e para a estruturação de Assistentes Virtuais de Investigação (AVIs) ou Sock Puppets.",
    "notes": "- **Ponto de Atenção:** Os números são temporários e, após o tempo de locação, podem ser reciclados pelo sistema. Não utilize para contas que precisem de acesso de longo prazo sem configurar métodos de recuperação alternativos.\n- **Custo-Benefício:** Permite selecionar o país do número e a operadora, o que ajuda a contornar bloqueios geográficos de determinados aplicativos."
  },
  {
    "id": "AbuseIPDB",
    "title": "AbuseIPDB",
    "url": "https://www.abuseipdb.com/",
    "tipo": "Banco de Dados de Ameaças Cibernéticas e Reputação de IP",
    "utilidade": "Análise de reputação, verificação de abuso e inteligência de ameaças para endereços IP (Threat Intelligence)",
    "descricao": "O AbuseIPDB é uma plataforma online e um banco de dados colaborativo focado na detecção, reporte e análise de endereços IP associados a atividades maliciosas e comportamentos abusivos na internet. A ferramenta reúne relatórios de segurança de uma comunidade global de administradores de sistemas, webmasters e softwares automatizados de defesa (como o Fail2Ban) para mapear ameaças virtuais, gerando um histórico de reputação e calculando uma pontuação de probabilidade de abuso para cada IP consultado.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações de inteligência cibernética (CYBINT) e fontes abertas (OSINT), a ferramenta é crucial para a triagem e o enriquecimento de indicadores de comprometimento (IOCs). Ela permite que o analista audite endereços IP envolvidos em acessos suspeitos, identifique seu provedor de serviços de internet (ISP), país de origem, número de sistema autônomo (ASN) e histórico de atividades nocivas anteriores (como tentativas de invasão, spam ou ataques DDoS), ajudando a discernir conexões automatizadas e maliciosas de tráfego de usuários legítimos.",
    "notes": "* A pontuação de \"Confidence of Abuse Score\" (0% a 100%) reflete a confiabilidade das denúncias e a frequência com que o IP foi marcado como abusivo recentemente, devendo ser interpretada com atenção a possíveis IPs dinâmicos reatribuídos por provedores, que podem herdar históricos ruins de usuários antigos.\n* Para investigações e análises em larga escala, o analista pode integrar a chave de API gratuita do AbuseIPDB diretamente em plataformas de segurança e scripts personalizados de OSINT para automatizar a verificação e enriquecimento de dados.\n* É altamente recomendável cruzar as informações obtidas com outros serviços de reputação de IP e bancos de dados de geolocalização para mitigar a ocorrência de falsos positivos gerados por relatórios maliciosos direcionados."
  },
  {
    "id": "Ahmia",
    "title": "Ahmia",
    "url": "https://ahmia.fi/",
    "tipo": "Motor de Busca da Dark Web (Clear Web Gateway)",
    "utilidade": "Motor de busca e indexador de serviços ocultos na rede Tor (Dark Web) para investigações cibernéticas e inteligência de ameaças",
    "descricao": "O Ahmia é um motor de busca de código aberto projetado especificamente para indexar, catalogar e permitir a pesquisa de conteúdos dentro da rede de anonimato Tor (serviços ocultos com sufixo `.onion`). Diferente de outros indexadores da Dark Web, o Ahmia pode ser acessado diretamente da \"Clear Web\" (internet comum), servindo como uma ponte de busca que mapeia milhares de páginas ativas, fóruns clandestinos, repositórios de dados e portais de vazamento, ao mesmo tempo em que aplica políticas de filtragem estritas para remover conteúdos de abuso infantil e exploração humana de seus resultados.",
    "testada": false,
    "tags": [
      "fonte/vazamentos-darkweb",
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de inteligência cibernética (CYBINT) e inteligência de ameaças (Threat Intelligence), o Ahmia é uma ferramenta indispensável para a fase de coleta de dados sobre alvos na Dark Web. Ele permite ao analista buscar por vazamentos de dados corporativos, menções a marcas ou credenciais de funcionários, credenciais expostas, usernames de alvos em fóruns cibercriminosos ou acompanhar campanhas de ransomware sem a necessidade de navegar de forma cega ou manual pelos diretórios da rede Tor.",
    "notes": "* Embora o Ahmia possa ser acessado pela internet de superfície (Clear Web), os links de resultados direcionam para endereços `.onion`. Para abrir esses links e interagir com as páginas, o analista precisará utilizar o Tor Browser ou um gateway de rede adequado para garantir o isolamento e a segurança técnica da investigação.\n* Para fins de OPSEC avançada, recomenda-se que o próprio Ahmia seja acessado de dentro da rede Tor, utilizando o seu endereço oficial de serviço oculto (`.onion`) fornecido na própria página inicial do projeto, em vez do domínio público de superfície.\n* O motor de busca fornece metadados úteis sobre os resultados indexados, como a última data em que o site foi visto online pelo crawler da plataforma. Isso economiza tempo do investigador ao evitar o acesso a domínios que já estejam inativos ou fora do ar."
  },
  {
    "id": "AI or Not",
    "title": "AI or Not",
    "url": "https://www.aiornot.com/",
    "tipo": "Plataforma de Verificação e Análise Forense de Mídia Sintética",
    "utilidade": "Detecção de conteúdo gerado por inteligência artificial (imagens, áudio, vídeo e texto) e verificação de deepfakes",
    "descricao": "O AI or Not é uma plataforma voltada para a identificação e verificação de conteúdos gerados por algoritmos de Inteligência Artificial. A ferramenta analisa imagens, arquivos de áudio (incluindo clones de voz e faixas musicais), vídeos e blocos de texto para determinar se a autoria é humana ou sintética. Ela é capaz de identificar criações de geradores populares como Midjourney, Stable Diffusion, DALL-E 3, Flux, ChatGPT, Claude, Suno, Udio e Sora, mapeando anomalias estruturais, consistência de quadros e assinaturas térmicas de renderização de pixels.",
    "testada": false,
    "tags": [
      "func/analise-media-integridade",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, a validação da integridade de evidências digitais e mídias sociais é um passo crítico para evitar o direcionamento por campanhas de desinformação. O AI or Not atua como um recurso de análise forense rápida, permitindo ao investigador verificar se a foto de perfil de um alvo (possível *sock puppet*) foi gerada sinteticamente, avaliar se uma gravação de áudio atribuída a uma pessoa de interesse é um clone de voz (deepfake de áudio) ou auditar a legitimidade de vídeos de interesse jornalístico e investigativo.",
    "notes": "* A ferramenta gera um relatório probabilístico (porcentagem de certeza). Compressões severas de arquivos em plataformas como WhatsApp, Telegram ou redes sociais podem mascarar artefatos de IA nos pixels ou no áudio, o que exige cautela e análise complementar por parte do investigador em casos limítrofes.\n* O sistema possui módulos específicos para a detecção de *face swaps* (troca de rostos em imagens), sendo muito útil para auditoria e verificação de fraudes de identidade em documentos digitalizados (processos de KYC).\n* É recomendado integrar os resultados da análise estática do AI or Not com técnicas de busca reversa e verificação de metadados da imagem analisada para corroborar os achados técnicos."
  },
  {
    "id": "Aleph (OCCRP)",
    "title": "Aleph (OCCRP)",
    "url": "https://aleph.occrp.org/",
    "tipo": "Plataforma e Repositório de Investigação Jornalística e OSINT",
    "utilidade": "Investigação de redes de corrupção, crime organizado, vazamentos de dados globais e rastreamento de ativos corporativos e financeiros",
    "descricao": "O Aleph é uma plataforma de dados e repositório global mantido pelo Organized Crime and Corruption Reporting Project (OCCRP). A ferramenta centraliza, indexa e torna pesquisáveis centenas de milhões de registros públicos, vazamentos de dados (*leaks*), relatórios governamentais, processos judiciais, bancos de dados corporativos e cadastros de propriedade de terras de diversos países do mundo, facilitando o rastreamento de redes criminosas, fluxos de corrupção e ocultação de patrimônio.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/financeiro-crypto",
      "fonte/registros-publicos-gov",
      "fonte/arquivos-noticias",
      "func/agregador",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações transnacionais, inteligência financeira e mapeamento societário complexo, o Aleph atua como uma das maiores fontes centralizadas de dados brutos e estruturados do mundo. Ele permite conectar indivíduos a empresas *offshore*, identificar beneficiários finais de corporações e cruzar dados de registros comerciais com investigações jornalísticas prévias e vazamentos massivos de dados.",
    "notes": "* A plataforma utiliza engenhos avançados de OCR (Reconhecimento Óptico de Caracteres), o que significa que termos de pesquisa e nomes de alvos são buscados inclusive dentro de documentos digitalizados em PDF, imagens e relatórios digitalizados antigos.\n* Investigadores podem criar alertas para receber notificações sempre que novos documentos contendo o nome do alvo forem adicionados ao repositório."
  },
  {
    "id": "AlienVault OTX (Open Threat Exchange)",
    "title": "AlienVault OTX (Open Threat Exchange)",
    "url": "https://otx.alienvault.com/",
    "tipo": "Plataforma Colaborativa de Inteligência de Ameaças (Threat Intelligence)",
    "utilidade": "Análise de reputação de ameaças, inteligência de ameaças cibernéticas (CTI) e investigação de IoCs (Indicadores de Comprometimento)",
    "descricao": "O AlienVault Open Threat Exchange (OTX) é uma das maiores comunidades colaborativas de inteligência de ameaças (Threat Intelligence) do mundo. A plataforma permite que pesquisadores de segurança, analistas de SOC e investigadores de ameaças compartilhem e analisem em tempo real os chamados \"pulses\" (pulsos), que são coleções estruturadas de Indicadores de Comprometimento (IoCs) — tais como endereços IP maliciosos, domínios suspeitos, hashes de arquivos de malware, URIs e chaves de registro associadas a campanhas ativas de cibercrime e espionagem estatal.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "func/agregador",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações de Cyber OSINT (CYBINT) e inteligência de ameaças, o AlienVault OTX é uma ferramenta de pesquisa fundamental na fase de análise e pivoting. O analista pode inserir um indicador inicial (como um IP ou domínio suspeito identificado em logs ou em engenharia social) para mapear de forma retrospectiva e prospectiva toda a infraestrutura associada ao ataque. A ferramenta ajuda a correlacionar quais famílias de malware ou atores de ameaças (APTs) utilizaram esses recursos de rede, fornecendo o contexto histórico e técnico necessário para compreender a origem e a magnitude de uma campanha digital.",
    "notes": "* Os \"pulses\" criados pela comunidade no OTX fornecem um excelente ponto de partida para compreender o contexto tático de uma ameaça. O analista pode seguir determinados \"pulses\" de interesse e receber atualizações em tempo real sempre que novos indicadores correlacionados forem adicionados.\n* A API gratuita do OTX é extremamente robusta e amplamente suportada por frameworks de automação de OSINT e ferramentas de SOC (como o Splunk, Maltego ou scripts próprios de Python), permitindo a automatização de consultas em lote (bulk queries).\n* Por ser um repositório comunitário (crowdsourced), o analista deve estar ciente de que podem existir falsos positivos ou dados desatualizados. É prudente cruzar as informações do OTX com outros agregadores de CTI (como VirusTotal ou abuse.ch) para validar a persistência da ameaça analisada."
  },
  {
    "id": "Amazon Rekognition",
    "title": "Amazon Rekognition",
    "url": "https://aws.amazon.com/pt/rekognition/",
    "tipo": "Serviço de Análise e Processamento de Mídia Baseado em Inteligência Artificial",
    "utilidade": "Reconhecimento, análise automatizada e extração de metadados em imagens e vídeos usando Visão Computacional e IA",
    "descricao": "O Amazon Rekognition é um serviço de visão computacional baseado em nuvem que utiliza modelos de aprendizado profundo (deep learning) altamente escaláveis para analisar mídias visuais. A ferramenta automatiza a extração de informações de imagens e vídeos, sendo capaz de identificar objetos, pessoas, textos manuscritos e digitais (OCR), cenas, atividades, além de realizar detecção de conteúdo inadequado e análise/comparação facial de alta precisão.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/analise-processamento-ia",
      "plataforma/web",
      "plataforma/terminal",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, o Amazon Rekognition atua como um poderoso motor de processamento e enriquecimento de evidências visuais previamente coletadas. O analista pode utilizá-lo para realizar triagem em massa de repositórios de fotos, extrair placas de veículos e placas de rua (auxiliando em tarefas de GEOINT), identificar termos textuais específicos em capturas de tela e realizar comparação facial (verificando se o rosto de um suspeito em uma foto de rede social corresponde ao de um documento oficial). Ele permite automatizar análises que seriam humanamente inviáveis em investigações com volumes massivos de mídias.",
    "notes": "* **OPSEC e Custódia de Dados**: Como o processamento ocorre nos servidores de nuvem da Amazon (AWS), o analista de OSINT deve ter extrema cautela ao enviar imagens que contenham dados pessoais sensíveis, rostos de alvos protegidos ou evidências sob sigilo judicial, avaliando as políticas de retenção de dados da plataforma.\n* **Detecção de Texto (OCR)**: O recurso de detecção de texto é altamente resiliente a distorções, sombras e inclinações de câmera, tornando-o excelente para decifrar cartazes, pichações, placas de trânsito ou documentos de identificação presentes no plano de fundo de fotos de redes sociais.\n* **Análise de Metadados de Saída**: O serviço retorna os dados estruturados em formato JSON. Recomenda-se o uso de scripts de pós-processamento para filtrar as respostas de confiança (Confidence Scores) acima de 80% para evitar falsos positivos na classificação automatizada de objetos e rostos."
  },
  {
    "id": "AmIReal",
    "title": "AmIReal",
    "url": "https://seintpl.github.io/AmIReal/",
    "tipo": "Guia Analítico / Framework de Validação",
    "utilidade": "Verificação de avatares e identidades sintéticas (Sock Puppets / IA)",
    "descricao": "O AmIReal é uma aplicação interativa baseada em web que serve como um guia metodológico passo a passo para auxiliar analistas a determinarem a autenticidade de um perfil digital. A ferramenta foca na identificação de contas falsas (*sock puppets*) e rostos gerados artificialmente por algoritmos de Inteligência Artificial (como redes GAN).",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/personas"
    ],
    "utilidade_Osint": "No ciclo de inteligência, a ferramenta atua diretamente na fase de validação da informação e avaliação de fontes, ajudando o investigador a não ser induzido ao erro por perfis desinformativos ou identidades fabricadas.",
    "notes": "* Concentra-se na avaliação técnica de assimetrias visuais e imperfeições clássicas de renderização sintética (como dentes desalinhados, fundos duplicados, brincos assimétricos e posicionamento pupilar fixo).\n* Serve como uma excelente base de conhecimento para padronizar relatórios de verificação de identidade em investigações cibernéticas."
  },
  {
    "id": "AmIUnique",
    "title": "AmIUnique",
    "url": "https://amiunique.org/fingerprint",
    "tipo": "Ferramenta de Teste e Validação de Privacidade",
    "utilidade": "Análise e auditoria de pegada digital do navegador (Browser Fingerprinting) para OPSEC",
    "descricao": "O AmIUnique é uma plataforma online voltada para a análise técnica detalhada da pegada digital de um navegador (*browser fingerprinting*). A ferramenta mapeia e analisa dezenas de identificadores transmitidos pelo sistema (como cabeçalhos HTTP, fontes do sistema, plugins, dados de Canvas, WebGL, fuso horário e configurações de hardware) para calcular o nível de exclusividade daquele perfil na internet.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, a ferramenta desempenha um papel crítico na fase de preparação e manutenção da OPSEC (Segurança das Operações). Ela permite ao analista auditar o seu próprio ambiente de trabalho (ou suas máquinas virtuais de investigação) para garantir que as configurações do seu navegador não sejam excessivamente únicas, o que permitiria a alvos monitorarem ou rastrearem o investigador de forma persistente sem a necessidade de cookies.",
    "notes": "* O objetivo central do analista ao usar esta ferramenta deve ser obter um perfil que seja \"o mais comum possível\" (baixa taxa de *uniqueness*), permitindo que seu tráfego se misture à massa de usuários comuns da internet.\n* É recomendável executar o teste toda vez que uma nova extensão de privacidade for instalada ou quando houver atualizações estruturais no navegador da máquina de investigação."
  },
  {
    "id": "ANA (Agência Nacional de Águas e Saneamento Básico)",
    "title": "ANA (Agência Nacional de Águas e Saneamento Básico)",
    "url": "https://www.gov.br/ana/pt-br",
    "tipo": "Portal Governamental e Repositório de Dados de Recursos Hídricos",
    "utilidade": "Consulta de outorgas de direito de uso de recursos hídricos, segurança de barragens e dados geoespaciais de bacias hidrográficas",
    "descricao": "O portal da Agência Nacional de Águas e Saneamento Básico (ANA) é a plataforma oficial do órgão regulador responsável pela gestão dos recursos hídricos e pela regulação do saneamento básico no Brasil. Por meio de seus subsistemas de informação, notadamente o Sistema Nacional de Informações sobre Recursos Hídricos (SNIRH) e a Plataforma Águas Brasil, a agência centraliza dados cadastrais de outorgas (autorizações de captação e uso de água), cadastros de usuários de recursos hídricos, monitoramento telemétrico e o Sistema Nacional de Informações sobre Segurança de Barragens (SNISB).",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "fonte/geoespacial",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, especialmente na vertente de inteligência geográfica (GEOINT) e de inteligência corporativa/patrimonial, o portal da ANA atua como uma rica fonte de dados de registros públicos. Através da consulta de atos de outorga, o analista consegue mapear de forma precisa quais empresas (CNPJs) ou pessoas físicas (CPFs) possuem concessões vigentes para uso de água, identificando o local exato de captação (coordenadas geográficas), finalidade do uso (indústria, mineração, irrigação) e volumes autorizados. Isso possibilita o cruzamento de dados patrimoniais e societários, a identificação de infraestruturas críticas e a validação de atividades econômicas ativas no terreno de interesse.",
    "notes": "* Para buscas georreferenciadas de outorgas e barragens, recomenda-se acessar a seção de mapas interativos do SNIRH (Sistema Nacional de Informações sobre Recursos Hídricos), que permite visualizar espacialmente as concessões emitidas tanto pela ANA (em rios federais) quanto pelos órgãos estaduais integrados.\n* A Plataforma Águas Brasil centraliza a consulta de atos administrativos de outorgas de direito de uso de recursos hídricos emitidos pela agência, servindo como ponto de partida ideal para buscar CPFs ou CNPJs específicos.\n* Em investigações complexas envolvendo disputas de terra, crimes ambientais ou ocultação patrimonial envolvendo propriedades rurais, o cruzamento de dados de outorgas da ANA com o Cadastro Ambiental Rural (CAR) e o SIGEF/INCRA fornece um mapeamento de inteligência robusto e de alta precisão."
  },
  {
    "id": "Android Studio",
    "title": "Android Studio",
    "url": "https://developer.android.com/studio",
    "tipo": "Ambiente de Desenvolvimento Integrado (IDE) / Ferramenta de Emulação e Forense",
    "utilidade": "Emulação de dispositivos móveis e engenharia reversa de aplicativos Android (APKs)",
    "descricao": "O Android Studio é o Ambiente de Desenvolvimento Integrado (IDE) oficial para a plataforma Android. Para fins de investigação e segurança, a ferramenta destaca-se por incluir o gerenciador de emuladores (Android Virtual Device - AVD) e um conjunto avançado de utilitários de depuração, análise de pacotes de aplicativos (APKs) e inspeção de código.",
    "testada": false,
    "tags": [
      "plataforma/desktop",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas e inteligência cibernética, o Android Studio é utilizado para analisar a estrutura interna de aplicativos móveis e para configurar ambientes virtuais de testes onde contas de cobertura (*sock puppets*) e ferramentas de coleta mobile podem ser executadas de forma isolada e segura.",
    "notes": "* Excelente para interceptar e analisar o tráfego de dados de aplicativos de mensageria ou redes sociais em ambiente controlado, quando combinado com ferramentas de proxy (como Burp Suite ou OWASP ZAP).\n* Permite simular diferentes coordenadas de GPS, operadoras de telefonia e níveis de bateria diretamente no emulador, o que é ideal para contornar defesas baseadas em telemetria de aplicativos sob investigação."
  },
  {
    "id": "ANY.RUN",
    "title": "ANY.RUN",
    "url": "https://app.any.run",
    "tipo": "Sandbox de Análise Interativa de Malware e Links Suspeitos",
    "utilidade": "Análise interativa de malware, engenharia reversa assistida e investigação de ameaças cibernéticas (Threat Intelligence) em ambiente isolado",
    "descricao": "O ANY.RUN é uma plataforma de sandbox interativa baseada na nuvem projetada para a execução, monitoramento e análise em tempo real de arquivos e URLs suspeitas. A ferramenta permite que o analista interaja diretamente com o sistema operacional virtualizado (como se estivesse em sua própria máquina) enquanto acompanha de forma dinâmica o comportamento do ecossistema: processos gerados, modificações em arquivos de sistema, chaves de registro e conexões de rede.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações digitais, Cyber Threat Intelligence (CTI) e contramedidas cibernéticas, a plataforma serve como uma camada essencial para analisar artefatos e links sem expor a infraestrutura do investigador. Ela permite desvendar a real intenção de páginas de phishing, identificar vetores de ataque contidos em anexos de e-mail e rastrear a infraestrutura externa de servidores de Comando e Controle (C2) associada a campanhas maliciosas.",
    "notes": "* Na versão gratuita (Community), todas as submissões de arquivos, URLs e os respectivos relatórios gerados tornam-se públicos para consulta de qualquer usuário da internet. Evite submeter documentos que contenham dados pessoais, credenciais reais ou segredos comerciais da investigação nessa modalidade.\n* A plataforma viabiliza a extração e o download de arquivos PCAP (captura de pacotes de rede) gerados durante a detonação, permitindo que o investigador realize análises de tráfego ainda mais aprofundadas em ferramentas locais como o Wireshark."
  },
  {
    "id": "Archive.today (archive.ph)",
    "title": "Archive.today (archive.ph)",
    "url": "https://archive.ph/",
    "tipo": "Serviço de Arquivamento Digital e Preservação Web",
    "utilidade": "Preservação de páginas web em tempo real, arquivamento forense passivo e recuperação de conteúdos históricos ou restritos por paywall",
    "descricao": "O Archive.today (acessível via domínios como archive.ph, archive.is, archive.today) é uma plataforma online de arquivamento e preservação digital de páginas da World Wide Web. O serviço cria capturas sob demanda (*snapshots*) de URLs submetidas por usuários, gerando duas réplicas distintas do conteúdo: uma versão em texto estruturado e uma cópia visual estática de alta fidelidade baseada em imagem/rasterização, desprovida de scripts executáveis e elementos dinâmicos maliciosos.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "fonte/arquivos-noticias",
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas (OSINT), a ferramenta desempenha um papel duplo essencial: preservação de evidências digitais e coleta passiva de dados. Ela permite fixar páginas investigadas no momento exato da consulta, garantindo a integridade temporal de provas antes que sejam alteradas, deletadas ou removidas do ar. Além disso, por indexar e servir cópias em texto puro de matérias jornalísticas e posts, auxilia na recuperação de dados públicos bloqueados por barreiras comerciais (paywalls e captchas invasivos) e no resgate de versões históricas de sites vinculados a um domínio-alvo.",
    "notes": "* As capturas efetuadas pelo Archive.today são desprovidas de elementos JavaScript ativos e executáveis, tornando a navegação pela réplica segura contra potenciais scripts rastreadores ou malwares inseridos na página original.\n* A submissão de uma página ao serviço é pública; portanto, se a URL contiver parâmetros sensíveis ou tokens de autenticação privados, tais dados ficarão expostos publicamente na base do arquivo.\n* A plataforma gera URLs fixas e curtas para cada snapshot, facilitando o encadeamento de fontes em relatórios periciais e notas de investigação."
  },
  {
    "id": "Arrows.app",
    "title": "Arrows.app",
    "url": "https://arrows.app/",
    "tipo": "Ferramenta Web de Modelagem e Visualização de Grafos (Link Analysis)",
    "utilidade": "Modelagem visual de grafos, diagramação de vínculos e análise de conexões relacionais para investigações",
    "descricao": "O Arrows.app é uma ferramenta baseada em web voltada para o desenho e a modelagem ágil de grafos de propriedades. Desenvolvido primariamente para apoiar o design de estruturas de bancos de dados orientados a grafos (como o Neo4j), o aplicativo permite criar nós, estabelecer relacionamentos direcionados (arestas) e customizar propriedades detalhadas (como pares de chave-valor) para cada elemento em uma interface puramente visual e interativa.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Na fase de análise e produção de conhecimento de uma investigação, a plataforma funciona como um ambiente de análise de vínculos (Link Analysis) altamente eficiente. O analista pode utilizá-la para centralizar e conectar logicamente as evidências coletadas em fontes distintas — relacionando, por exemplo, um indivíduo a múltiplos CNPJs, endereços de criptoativos, números de telefone e contas de redes sociais —, o que facilita a visualização de estruturas complexas, redes de testas de ferro ou fluxos de capitais ocultos.",
    "notes": "* Devido à sua arquitetura client-side, os dados inseridos e manipulados no diagrama permanecem armazenados localmente na memória do navegador do analista, minimizando riscos de OPSEC relacionados ao vazamento de dados sensíveis da investigação para servidores externos.\n* O Arrows.app permite exportar o grafo construído em formatos de imagem (PNG e SVG), ideais para a instrução de relatórios analíticos, bem como em formatos estruturados (JSON e consultas em linguagem Cypher), viabilizando a importação direta do modelo para instâncias robustas do Neo4j para análises massivas."
  },
  {
    "id": "Artbreeder",
    "title": "Artbreeder",
    "url": "https://www.artbreeder.com/",
    "tipo": "Ferramenta de Geração e Edição de Imagens Baseada em IA (GANs e Difusão)",
    "utilidade": "Geração, hibridização e edição de faces sintéticas por inteligência artificial para a criação de avatares e identidades dissimuladas",
    "descricao": "O Artbreeder é uma plataforma online que utiliza modelos avançados de inteligência artificial (como Redes Adversárias Generativas - GANs e modelos de difusão) para criar e modificar imagens de forma altamente customizável. A ferramenta permite \"cruzar\" diferentes imagens e manipular \"genes\" visuais através de seletores (sliders), possibilitando alterações precisas em características faciais, expressões, idade, etnia e iluminação.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No planejamento operacional e na preparação de ações de inteligência (como HUMINT digital ou infiltração virtual), a plataforma é utilizada para a construção de avatares altamente realistas para *Sock Puppets* (perfis falsos de investigação). Diferente de repositórios estáticos de rostos gerados por IA, o Artbreeder permite ajustar finamente os atributos da face gerada e criar variações da mesma identidade sob diferentes ângulos ou expressões, reduzindo as chances de detecção do perfil por análise visual básica.",
    "notes": "* Como as imagens são geradas por inteligência artificial, elas não possuem correspondentes no mundo real, impossibilitando que ferramentas tradicionais de busca reversa (como Google Lens ou Yandex) associem o avatar a um indivíduo existente.\n* Recomenda-se atenção aos artefatos visuais típicos de imagens geradas por IA (como brincos assimétricos, fundos distorcidos ou falhas na transição do cabelo), utilizando os seletores da ferramenta para suavizar imperfeições que possam denunciar a natureza sintética do perfil em análises forenses."
  },
  {
    "id": "ascii2d",
    "title": "ascii2d",
    "url": "https://ascii2d.net/",
    "tipo": "Motor de Busca Reversa de Imagens / IMINT",
    "utilidade": "Busca reversa especializada de ilustrações, arte digital e mídias visuais da web asiática por correspondência de cor e detalhes",
    "descricao": "O ascii2d é um motor de busca reversa de imagens japonês projetado especificamente para rastrear e identificar ilustrações, arte digital, mangás e mídias visuais compartilhadas em plataformas e comunidades asiáticas (como Pixiv, X/Twitter e Nijie). O sistema oferece dois modos principais de correspondência: busca por detalhes/formas (*Feature Search*) e busca por paleta/distribuição de cores (*Color Search*).",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de fontes abertas, inteligência de imagens (IMINT) e checagem de fatos, o ascii2d é uma ferramenta de referência para contornar pontos cegos de motores de busca ocidentais ao lidar com ilustrações, peças gráficas, avatares estilizados e mídias visuais. Ele viabiliza a localização do artista original, a data da primeira postagem e o contexto primário de imagens que sofreram cortes, edições ou variações de cor.",
    "notes": "* A alternância entre a busca por \"Cor\" e a busca por \"Detalhes\" é útil para localizar artes que passaram por filtros cromáticos ou alterações estruturais parciais.\n* Apresenta taxa de assertividade expressiva para mídias hospedadas em redes japonesas e perfis de ilustradores no X (Twitter) e Pixiv."
  },
  {
    "id": "Audacity",
    "title": "Audacity",
    "url": "https://www.audacityteam.org/",
    "tipo": "Software de Edição e Análise de Áudio de Código Aberto",
    "utilidade": "Análise, edição, verificação de integridade e processamento forense de arquivos de áudio, incluindo isolamento de frequências e detecção de manipulações.",
    "descricao": "O Audacity é um editor e gravador de áudio digital multi-faixa de código aberto e multiplataforma. A ferramenta permite realizar capturas de áudio ao vivo, manipular arquivos em diversos formatos estruturados (como WAV, MP3, FLAC, OGG) e aplicar filtros de engenharia de som para tratamento de sinais, remoção de ruídos e análise profunda de frequências sonoras.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "func/analise-midia-integridade",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de inteligência e investigações baseadas em fontes abertas, o Audacity atua diretamente na análise, processamento e verificação de mídias obtidas durante a coleta de dados. Ele é utilizado para examinar arquivos sonoros em busca de informações dissimuladas (esteganografia), purificar gravações de voz para apoiar a identificação de interlocutores, isolar ruídos ambientais de fundo e atestar a autenticidade do material digital coletado.",
    "notes": "* A transição do modo de visualização padrão de \"Forma de Onda\" para \"Espectrograma\" é o procedimento padrão para inspecionar a integridade da mídia, permitindo identificar quebras abruptas de ruído de fundo que denunciam edições, montagens ou inserções de áudio maliciosas.\n* A combinação dos recursos de equalização de espectro e redução de ruído adaptativa viabiliza o isolamento de frequências específicas de fundo (como motores, sirenes ou características acústicas locais), servindo como suporte analítico para investigações de geolocalização e contextualização por áudio."
  },
  {
    "id": "Aviation Safety Network (ASN)",
    "title": "Aviation Safety Network (ASN)",
    "url": "https://asn.flightsafety.org/",
    "tipo": "Base de Dados e Repositório de Segurança Aeronáutica",
    "utilidade": "Consulta a bancos de dados históricos de acidentes, incidentes e segurança da aviação global para rastreamento e inteligência de frotas aéreas.",
    "descricao": "O Aviation Safety Network (ASN) é um serviço especializado da Flight Safety Foundation que disponibiliza uma base de dados detalhada sobre acidentes, incidentes e falhas de segurança envolvendo aeronaves comerciais, jatos executivos e voos militares globalmente. A plataforma cataloga registros estruturados que incluem prefixos de matrícula (*tail numbers*), número de série de fabricação (MSN), histórico de operadores, cronologia de eventos e transcrições de relatórios de órgãos de aviação.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "fonte/arquivos-noticias",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações em fontes abertas, o ASN atua como uma plataforma de inteligência logística e rastreamento de ativos. A ferramenta permite auditar o ciclo de vida e o histórico operacional de aeronaves específicas a partir de identificadores exclusivos, sendo uma fonte primária para identificar vínculos societários ocultos através de operadoras de voo, documentar sinistros corporativos e cruzar dados de eventos históricos com telemetrias aéreas obtidas via ADSB.",
    "notes": "* A busca estruturada pelo número de série do fabricante (MSN) é altamente eficaz para rastrear aeronaves que mudaram frequentemente de prefixo ou de país de registro, permitindo mapear a real cadeia de custódia e uso do veículo por entidades sancionadas ou empresas de fachada.\n* Os relatórios de incidentes fornecem coordenadas geográficas aproximadas, dados meteorológicos e detalhamento de carga, elementos que servem de base para investigações complementares de geolocalização (GEOINT) e análise de conformidade corporativa."
  },
  {
    "id": "Awesome OSINT",
    "title": "Awesome OSINT",
    "url": "https://github.com/jivoi/awesome-osint",
    "tipo": "Repositório de Recursos e Ferramentas OSINT",
    "utilidade": "Catálogo centralizado e curadoria de ferramentas, frameworks e recursos para Inteligência de Fontes Abertas (OSINT)",
    "descricao": "O Awesome OSINT é uma lista colaborativa com curadoria especializada hospedada no GitHub, reunindo uma vasta coleção de ferramentas, sites, frameworks e recursos técnicos voltados para a Inteligência de Fontes Abertas (OSINT). O repositório é estruturado por categorias operacionais bem definidas, servindo como um índice global para triagem e seleção de softwares de coleta, verificação e análise de dados públicos.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ciclo de inteligência, a plataforma atua como uma infraestrutura de suporte e consulta metodológica na fase de planejamento de ferramentas. Ela agiliza o processo de descoberta de soluções técnicas de nicho, permitindo ao analista encontrar alternativas de coleta para diferentes vetores de investigação (como e-mails, redes sociais, geointeligência e dados corporativos) consolidadas em um único ecossistema informacional.",
    "notes": "* Ideal para ser utilizado como base de conhecimento estática para a construção de dashboards pessoais de investigação (como no start.me) ou para a descoberta de scripts alternativos quando ferramentas automatizadas comerciais sofrem quebras de API.\n* Por se tratar de uma lista de links de terceiros, o analista deve validar de forma independente a manutenção, a segurança do código-fonte e o status de atualização de cada ferramenta indexada antes de sua implementação em ambientes de produção ou máquinas de investigação."
  },
  {
    "id": "AxCrypt",
    "title": "AxCrypt",
    "url": "https://axcrypt.net",
    "tipo": "Software de Criptografia de Arquivos (File Encryption)",
    "utilidade": "Criptografia de arquivos e proteção de dados armazenados para salvaguarda de evidências, artefatos e relatórios de inteligência",
    "descricao": "O AxCrypt é um software de criptografia de arquivos focado em garantir a confidencialidade de dados armazenados localmente ou compartilhados via serviços de nuvem. Utilizando algoritmos de criptografia simétrica (como AES-128 e AES-256), a ferramenta permite proteger arquivos individuais ou diretórios por meio de senhas fortes, além de oferecer suporte a funções de compartilhamento seguro baseado em chaves públicas.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "plataforma/desktop",
      "plataforma/mobile",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo das investigações em fontes abertas, o AxCrypt atua diretamente na manutenção da OPSEC (Segurança das Operações) na fase pós-coleta. A ferramenta é utilizada para blindar o repositório local de armazenamento do analista, protegendo relatórios preliminares, bancos de dados vazados baixados, capturas de tela de alvos e registros de auditoria contra acessos não autorizados, garantindo o sigilo absoluto dos dados da investigação e a preservação da integridade dos artefatos.",
    "notes": "* É altamente recomendado para cifrar dados sensíveis antes de realizar o upload para provedores de nuvem comerciais (como Google Drive, OneDrive ou Dropbox), garantindo uma arquitetura de conhecimento zero (*zero-knowledge*) onde o provedor não possui acesso ao conteúdo legível.\n* Como o AxCrypt não armazena cópias das chaves mestras em servidores para recuperação de arquivos locais, o analista deve gerenciar e armazenar a senha de cifragem em um cofre de senhas seguro e offline (como o KeePassXC) para evitar a perda permanente do acesso às evidências coletadas."
  },
  {
    "id": "Axur Watchdog",
    "title": "Axur Watchdog",
    "url": "https://watchdog.axur.io",
    "tipo": "Plataforma de Proteção de Risco Digital (DRP) / Monitoramento de Vazamentos",
    "utilidade": "Monitoramento de riscos digitais, detecção de credenciais vazadas e exposição de dados corporativos na surface e dark web",
    "descricao": "O Axur Watchdog é uma plataforma em nuvem voltada para a identificação e o monitoramento de riscos digitais e ameaças cibernéticas focadas em marcas, domínios corporativos e identidades digitais. A ferramenta atua varrendo a internet pública, fóruns clandestinos e redes de compartilhamento para catalogar vazamentos de dados, exposição de credenciais e uso indevido de propriedades intelectuais.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/empresa",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações corporativas, inteligência contra ameaças (Threat Intelligence) e auditorias de segurança, o Axur Watchdog serve como uma ferramenta de diagnóstico e monitoramento defensivo. Ele permite que o analista identifique se contas, e-mails organizacionais ou dados estruturados de uma determinada instituição foram expostos em incidentes de segurança de terceiros ou estão sendo negociados em mercados ilegais, acelerando o processo de triagem de incidentes.",
    "notes": "* É uma solução altamente eficaz para a verificação automatizada de vazamentos que afetam o ecossistema de uma empresa, eliminando a necessidade de o analista acessar diretamente ambientes hostis da dark web para realizar consultas manuais de credenciais da própria organização.\n* Por se tratar de um indexador de vazamentos históricos e consolidados, deve ser utilizado em conjunto com ferramentas de validação técnica ativa para confirmar se as credenciais expostas detectadas na plataforma ainda permanecem ativas e funcionais nos sistemas internos do alvo."
  },
  {
    "id": "Baidu",
    "title": "Baidu",
    "url": "https://www.baidu.com/",
    "tipo": "Mecanismo de Busca Web e Indexador Global",
    "utilidade": "Indexação, rastreamento e busca de páginas públicas, documentos, imagens e entidades no ecossistema web e digital chinês",
    "descricao": "O Baidu é o principal mecanismo de busca e portal de serviços web da China, funcionando como o maior indexador de páginas e documentos digitais em língua chinesa no mundo. A ferramenta rastreia, cataloga e classifica conteúdos distribuídos na internet global com forte ênfase na web chinesa e no espaço regional da Ásia-Pacífico, disponibilizando módulos de pesquisa textual, busca por imagens, notícias, mapas e repositórios enciclopédicos (Baidu Baike).",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas, o Baidu é indispensável para a coleta primária de informações, reconhecimento e enumeração de alvos vinculados à China ou operando na infraestrutura asiática. Devido a diferenças algorítmicas e ao alcance de rastreamento em relação a motores ocidentais (como Google e Bing), o Baidu indexa portais institucionais, empresas locais, fóruns comunitários e registros digitais que não aparecem com facilidade em outros buscadores, ampliando a cobertura de coleta e mitigando pontos cegos regionais.",
    "notes": "* Operadores avançados de pesquisa (como `site:`, `filetype:`, `intitle:` e uso de aspas para correspondência exata) funcionam na sintaxe de busca do Baidu e auxiliam no refino de dorks investigativas.\n* Para investigações aprofundadas sobre alvos locais, recomenda-se realizar buscas utilizando termos e palavras-chave grafadas em caracteres chineses simplificados (Hanzi), além de combinar a ferramenta com tradutores e serviços de análise de contexto linguístico."
  },
  {
    "id": "Betaface (Old Demo)",
    "title": "Betaface (Old Demo)",
    "url": "https://betaface.com/demo_old.html",
    "tipo": "Ferramenta de Visão Computacional e Análise Biométrica",
    "utilidade": "Reconhecimento facial, extração de características biométricas e análise comparativa de faces por inteligência artificial",
    "descricao": "O Betaface é uma plataforma avançada de visão computacional especializada em detecção e reconhecimento facial automatizado. A sua interface de demonstração clássica permite o upload de arquivos de imagem para realizar a extração detalhada de pontos biométricos (geometria facial), classificação de atributos físicos (como estimativa de idade, gênero, cor de cabelo, presença de barba ou óculos) e a verificação de similaridade contra bancos de dados de figuras públicas.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/analise-processamento-ia",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas envolvendo verificação de identidade, o Betaface atua como um motor de processamento analítico para mídias fotográficas. A ferramenta permite ao analista determinar tecnicamente se duas imagens distintas pertencem à mesma pessoa com base em métricas matemáticas de espaçamento facial, além de enriquecer o perfil de alvos desconhecidos por meio da extração automatizada de características fenotípicas estruturadas.",
    "notes": "* A ferramenta diferencia-se dos motores tradicionais de busca reversa (como Google Imagens ou Yandex) por não buscar réplicas exatas do arquivo na web, mas sim calcular a correlação geométrica real entre os traços dos rostos submetidos.\n* Por se tratar de uma plataforma proprietária externa, o envio de imagens de alvos exige cautela sob a perspectiva de OPSEC, dado que os arquivos trafegam e são processados em servidores de terceiros.\n* Os resultados analíticos gerados (coordenadas dos olhos, boca, nariz e porcentagens de similaridade) podem ser exportados para subsidiar laudos técnicos e relatórios de inteligência visual com embasamento estatístico."
  },
  {
    "id": "Biblioteca de Anúncios do Facebook (Meta Ad Library)",
    "title": "Biblioteca de Anúncios do Facebook (Meta Ad Library)",
    "url": "https://www.facebook.com/ads/library/",
    "tipo": "Mecanismo de Busca de Anúncios e Transparência (SOCMINT)",
    "utilidade": "Pesquisa de anúncios ativos e inativos veiculados nas plataformas da Meta para investigação de campanhas, empresas e pegada digital de entidades",
    "descricao": "A Biblioteca de Anúncios do Facebook é uma plataforma pública e oficial criada pela Meta para fornecer transparência sobre as campanhas publicitárias veiculadas no Facebook, Instagram, Messenger e Audience Network. O repositório armazena e permite a busca de todas as peças publicitárias ativas na plataforma, além de manter um arquivo histórico de até sete anos para anúncios relacionados a temas sociais, eleições ou política, detalhando gastos estimados, alcance e dados demográficos do público atingido.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "fonte/redes-sociais",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações em fontes abertas focadas em redes sociais (SOCMINT) e inteligência de negócios, a ferramenta funciona como um indexador crítico para auditar a atividade de alvos corporativos ou institucionais. Ela permite identificar campanhas de desinformação coordenadas, rastrear anúncios fraudulentos ou páginas de cobertura (*phishing* de anúncios), descobrir sites externos e domínios conectados às campanhas e levantar dados cadastrais expostos nos termos de responsabilidade financeira de anúncios políticos.",
    "notes": "* Anúncios de natureza puramente comercial comum ficam visíveis na plataforma apenas enquanto estiverem ativos e recebendo orçamento. Assim que a campanha é finalizada ou pausada pelo anunciante, ela é removida da listagem pública de buscas.\n* Para investigações automatizadas ou monitoramento contínuo de marcas, a Meta disponibiliza uma API dedicada para a Biblioteca de Anúncios, contudo, o acesso a essa chave exige a validação formal da identidade do desenvolvedor e vinculação de uma conta real confirmada."
  },
  {
    "id": "Bing",
    "title": "Bing",
    "url": "https://www.bing.com/",
    "tipo": "Motor de Busca Global e Indexador de Conteúdo",
    "utilidade": "Busca global de informações, indexação de páginas web, documentos, imagens e aplicação de operadores avançados de pesquisa (Dorks).",
    "descricao": "O Bing é um motor de busca global desenvolvido e mantido pela Microsoft. A plataforma atua como um indexador massivo da internet superficial (Surface Web), mapeando, catalogando e classificando continuamente bilhões de páginas web, imagens, vídeos, produtos e notícias em escala global, integrando também capacidades de busca semântica.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "func/busca-dorks",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo da investigação em fontes abertas, o Bing é uma ferramenta fundamental para as fases iniciais de reconhecimento, coleta e expansão de leads. Ele permite localizar menções textuais a indivíduos ou empresas, identificar documentos esquecidos em servidores públicos e realizar buscas cruzadas. Devido às diferenças em algoritmos de rastreamento (crawling) e políticas de remoção de conteúdo em relação a outros buscadores, o Bing frequentemente revela pegadas digitais que não constam nos resultados de concorrentes.",
    "notes": "* O operador `ip:[endereço_IP]` disponível no Bing é um recurso técnico altamente valioso para investigações de infraestrutura (CYBINT), permitindo identificar passivamente múltiplos domínios e sites hospedados sob um mesmo endereço IP público.\n* É recomendável utilizar o Bing em conjunto com técnicas de raspagem automatizada (scrapers) ou em rotinas de verificação cruzada para mitigar os pontos cegos e os vieses de indexação comuns a outros motores de busca comerciais."
  },
  {
    "id": "BitLocker Drive Encryption",
    "title": "BitLocker Drive Encryption",
    "url": "https://learn.microsoft.com/pt-br/windows/security/operating-system-security/data-protection/bitlocker/",
    "tipo": "Recurso de Segurança de Dados e Proteção de Infraestrutura (OPSEC)",
    "utilidade": "Proteção de dados em repouso através de criptografia de disco completo no sistema operacional Windows.",
    "descricao": "O BitLocker é um recurso nativo de segurança de dados integrado às versões Pro, Enterprise e Education do sistema operacional Microsoft Windows. Ele fornece criptografia de disco completo (Full Disk Encryption - FDE), protegendo o volume do sistema operacional, volumes de dados fixos e unidades de dados removíveis (BitLocker To Go) contra o acesso não autorizado a dados em dispositivos perdidos, roubados ou indevidamente descartados.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações baseadas em fontes abertas, o BitLocker desempenha um papel fundamental na Segurança das Operações (OPSEC) e na defesa tática do analista. Ele assegura a confidencialidade de todas as informações armazenadas localmente na estação de trabalho de investigação — como relatórios de inteligência, históricos de navegação, capturas de tela, bancos de dados temporários e credenciais de contas de cobertura (*sock puppets*). Caso o hardware físico do investigador seja furtado, apreendido ou inspecionado por terceiros, a criptografia impede a extração direta dos arquivos e a quebra do sigilo da operação.",
    "notes": "* Para uma OPSEC avançada, recomenda-se configurar o BitLocker para exigir um PIN de autenticação pré-boot ou uma chave externa em um dispositivo USB, impedindo que o sistema descriptografe o disco automaticamente apenas contando com o chip TPM (Trusted Platform Module) caso a máquina seja ligada por terceiros.\n* Ao gerenciar máquinas virtuais (VMs) dedicadas para coleta de dados no Obsidian ou hipervisores, a ativação do BitLocker na unidade hospedeira (Host) garante que os arquivos de disco virtual (.vmdk, .vhdx), logs e snapshots das VMs também permaneçam totalmente criptografados em repouso."
  },
  {
    "id": "Bitmask",
    "title": "Bitmask",
    "url": "https://bitmask.net/",
    "tipo": "Ferramenta de Segurança das Operações (OPSEC) e Criptografia de Tráfego",
    "utilidade": "Cliente de criptografia para acesso seguro e anonimização de tráfego de rede através de VPN automatizada e e-mail seguro utilizando o protocolo LEAP.",
    "descricao": "O Bitmask é um aplicativo cliente de código aberto projetado para fornecer comunicações seguras e criptografadas de forma simplificada. Ele gerencia de maneira automatizada configurações complexas de rede para se conectar a provedores de serviços que utilizam a arquitetura LEAP (como Riseup e Calyx), entregando tunelamento de tráfego via VPN (Virtual Private Network) com forte foco em privacidade, além de suporte para criptografia de e-mails de ponta a ponta.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "plataforma/desktop",
      "plataforma/mobile",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito das investigações em fontes abertas, o Bitmask atua estritamente na camada defensiva e de Segurança das Operações (OPSEC). A ferramenta é empregada para proteger a identidade técnica do analista durante o processo de coleta de dados na internet, mascarando o endereço IP real da estação de trabalho e cifrando todo o tráfego gerado. Isso impede que administradores de sites, fóruns ou plataformas sob investigação rastreiem a origem geográfica ou o provedor real do investigador, mitigando riscos de contra-inteligência ou quebra de sigilo da operação.",
    "notes": "* Por depender da infraestrutura de provedores compatíveis (como Riseup), o analista deve garantir o uso de credenciais ou conexões associadas a entidades que adotem políticas estritas de não retenção de logs (*no-logs policy*) para manter a eficácia da OPSEC.\n* É altamente recomendado para a composição de ambientes virtuais (VMs) de investigação dedicados, assegurando que todo o tráfego de dados gerado por ferramentas automatizadas de scraping ou navegação manual passe obrigatoriamente pelo túnel criptografado do cliente."
  },
  {
    "id": "Bitwarden",
    "title": "Bitwarden",
    "url": "https://bitwarden.com/",
    "tipo": "Gerenciador de Senhas e Cofre Criptografado",
    "utilidade": "Armazenamento seguro e cofre criptografado para gerenciamento de credenciais e dados de personas.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "opsec/personas",
      "plataforma/web",
      "plataforma/desktop",
      "plataforma/mobile",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Essencial para mitigar riscos de segurança e vazamento de dados do analista, pois protege credenciais operacionais sensíveis e chaves de acesso em um ambiente blindado por criptografia robusta. Funciona como repositório centralizado para a gestão de contas de cobertura (Sock Puppets), permitindo catalogar de forma segura toda a pegada de dados gerada na criação de personas (nomes fictícios, e-mails descartáveis, perguntas de segurança e históricos simulados).",
    "notes": "* Suporta a geração de códigos de autenticação de dois fatores (TOTP/2FA) integrados diretamente aos registros de login, servindo como alternativa para manter contas ativas caso números de telefone descartáveis expirem.\n* Dispõe de um gerador avançado de senhas aleatórias e frases ocultas configuráveis, o que evita o uso de padrões de texto previsíveis que possam comprometer ou ligar múltiplos perfis de investigação.\n* Permite a exportação de backups criptografados em formatos padronizados (JSON) para custódia física local dos dados de inteligência operacional."
  },
  {
    "id": "Blockchain.com Explorer",
    "title": "Blockchain.com Explorer",
    "url": "https://www.blockchain.com/explorer",
    "tipo": "Ferramenta de Análise de Criptoativos e Investigação Financeira",
    "utilidade": "Rastreamento, auditoria e análise de transações e carteiras em redes blockchain",
    "descricao": "O Blockchain.com Explorer é uma plataforma online que funciona como um motor de busca e livro-razão público para registros de redes blockchain, oferecendo suporte a criptoativos como Bitcoin (BTC), Ethereum (ETH) e Bitcoin Cash (BCH). A ferramenta permite inspecionar em tempo real o conteúdo de blocos minerados, o histórico completo de transações, os saldos de endereços públicos, taxas de mineração e a execução de contratos inteligentes.",
    "testada": false,
    "tags": [
      "alvo/financeiro-crypto",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas voltadas para inteligência financeira, rastreamento de ativos e combate à lavagem de dinheiro, a ferramenta é indispensável para a análise de fluxos de capitais descentralizados. Ela permite ao analista desatar nós transacionais, mapear a movimentação de fundos de origem ilícita (como pagamentos de ransomware ou fraudes) e identificar os endereços de destino que interagem com o alvo.",
    "notes": "* As informações extraídas do explorer revelam a movimentação técnica dos ativos, mas a identidade do proprietário da carteira permanece pseudônima. Para avançar na autoria, o analista deve cruzar os endereços com vazamentos de dados, fóruns, redes sociais ou ferramentas de inteligência que identifiquem carteiras pertencentes a corretoras (*exchanges*).\n* É útil monitorar o comportamento de taxas e horários das transações para tentar inferir o fuso horário ou padrões de atividade do operador da carteira investigada."
  },
  {
    "id": "BlockSherlock",
    "title": "BlockSherlock",
    "url": "https://www.blocksherlock.com/",
    "tipo": "Diretório e Repositório de Ferramentas de Inteligência Financeira",
    "utilidade": "Curadoria, catalogação e centralização de ferramentas para investigação de criptoativos e fontes abertas (OSINT)",
    "descricao": "O BlockSherlock é uma plataforma nacional desenvolvida por especialistas da segurança pública e da persecução penal voltada para apoiar investigações de crimes de qualquer natureza que envolvam ativos virtuais. O portal funciona como um diretório especializado e hub de conhecimento, catalogando dezenas de exploradores de blockchain (*blockchain explorers*), listando as características e heurísticas de cada um, e fornecendo uma seção exclusiva de ferramentas úteis de inteligência para a busca de dados em fontes abertas.",
    "testada": false,
    "tags": [
      "alvo/financeiro-crypto",
      "fonte/repositorio",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas direcionadas ao combate de crimes financeiros, fraudes cibernéticas e lavagem de dinheiro, o BlockSherlock serve como uma infraestrutura centralizada de referência tática. Ele elimina a dispersão na busca de recursos operacionais ao indexar de maneira estruturada quais ferramentas e exploradores públicos entregam as melhores capacidades (como suporte a APIs, análise de *inputs/outputs* ou rastreamento de reutilização de endereços) para a rede descentralizada do alvo sob análise.",
    "notes": "* Como a plataforma se comporta primordialmente como um ecossistema orientativo e um repositório conceitual, ela não realiza buscas diretas nas redes blockchain de forma nativa; o analista deve usá-la para selecionar de modo estratégico o *explorer* ou a ferramenta OSINT mais aderente à sua necessidade operacional.\n* A plataforma oferece abas e guias auxiliares voltados para a privacidade e segurança digital do investigador, servindo como reforço doutrinário de OPSEC antes que consultas externas sejam disparadas."
  },
  {
    "id": "Bluegrass AI",
    "title": "Bluegrass AI",
    "url": "https://www.bluegrass.ai/",
    "tipo": "Plataforma de Dados Sintéticos e Treinamento de Inteligência Artificial",
    "utilidade": "Geração, enriquecimento e gerenciamento de dados sintéticos estruturados e visão computacional por meio de inteligência artificial",
    "descricao": "A Bluegrass AI é uma plataforma corporativa especializada no desenvolvimento e na geração de dados sintéticos de alta fidelidade e modelos de visão computacional. Utilizando algoritmos generativos avançados, o sistema cria conjuntos de dados simulados (estruturados, visuais e tabulares) para treinar, validar e testar modelos de inteligência artificial e aprendizado de máquina (*machine learning*) sem comprometer dados sensíveis do mundo real.",
    "testada": false,
    "tags": [
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No ecossistema de inteligência de fontes abertas e análise de dados, a Bluegrass AI enquadra-se na fase de processamento analítico e inteligência assistida por máquina. A ferramenta apoia analistas e equipes técnicas na modelagem de cenários preditivos, na geração de dados para testes de segurança/OPSEC e na otimização de modelos de visão computacional utilizados para categorização e reconhecimento automatizado de grandes volumes de informações e mídias brutas previamente coletadas.",
    "notes": "* Os dados sintéticos gerados podem ser aproveitados para calibrar ferramentas de triagem automatizada e modelos de reconhecimento de entidades (NER) antes de sua aplicação em dados reais de investigação.\n* Por operar sob processamento em nuvem proprietária de terceiros, deve-se observar a conformidade de OPSEC e proteção de dados ao parametrizar regras de negócios e fluxos de trabalho analíticos."
  },
  {
    "id": "BlueStacks",
    "title": "BlueStacks",
    "url": "https://www.bluestacks.com/",
    "tipo": "Plataforma de Emulação de Dispositivos Móveis",
    "utilidade": "Emulação de dispositivos móveis Android para execução isolada de aplicativos móveis e gestão de identidades sintéticas",
    "descricao": "O BlueStacks é um software de emulação de Android projetado para ser executado em sistemas operacionais de desktop. A ferramenta cria um ambiente virtualizado que simula a arquitetura de um dispositivo móvel (smartphone ou tablet), permitindo o download, a instalação e a execução de qualquer aplicativo disponível para o ecossistema Android diretamente no computador.",
    "testada": false,
    "tags": [
      "plataforma/desktop",
      "acesso/gratuito",
      "opsec/ambiente-seguro",
      "opsec/personas"
    ],
    "utilidade_Osint": "No escopo de investigações digitais em fontes abertas, o BlueStacks funciona como uma camada essencial de infraestrutura para ações de inteligência baseada em mídias sociais (SOCMINT). Ele viabiliza a interação com plataformas e redes sociais cujo acesso ou cujos recursos são restritos ou otimizados exclusivamente para dispositivos móveis, eliminando a necessidade de expor o hardware físico real do investigador.",
    "notes": "* É uma solução altamente eficaz para acessar e monitorar de forma persistente aplicativos como Instagram, TikTok, WhatsApp e Telegram, cujos algoritmos de telemetria e segurança costumam aplicar restrições severas a acessos via web ou redes de data centers.\n* Para otimização de OPSEC, o tráfego do emulador pode ser tunelado através de proxies de interceptação ou redes VPN ativadas diretamente no sistema hospedeiro (desktop) ou por meio de clientes instalados internamente na própria interface do Android emulado."
  },
  {
    "id": "BoredHumans",
    "title": "BoredHumans",
    "url": "https://boredhumans.com/",
    "tipo": "Plataforma Web de Utilidades e Geradores Baseados em Inteligência Artificial",
    "utilidade": "Geração de elementos para identidades digitais sintéticas e processamento linguístico estruturado por meio de algoritmos de inteligência artificial.",
    "descricao": "O BoredHumans é um portal web que agrupa um ecossistema com mais de 100 ferramentas gratuitas fundamentadas em modelos de inteligência artificial e aprendizado de máquina. A plataforma engloba utilitários que utilizam redes neurais generativas para a criação de imagens e rostos realistas, simuladores de conversação com personas artificiais, algoritmos para redação automatizada e ferramentas voltadas à reestruturação, resumo e tratamento de dados textuais.",
    "testada": false,
    "tags": [
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/personas"
    ],
    "utilidade_Osint": "No escopo das investigações em fontes abertas, o portal atua como uma solução de apoio técnico para o desenvolvimento de táticas de engenharia social e manutenção da segurança operacional. A plataforma fornece insumos automatizados para a montagem de contas dissimuladas na internet e disponibiliza utilitários estáticos baseados em modelos de linguagem para manipulação, processamento e sumarização de dados documentais textuais.",
    "notes": "* As imagens de rostos artificiais fornecidas pelo ecossistema são geradas do zero por algoritmos generativos e não possuem correspondência com indivíduos reais no mundo físico, o que impede o rastreamento ou a associação com pessoas verdadeiras através de mecanismos de busca reversa de imagens.\n* Por se tratar de um serviço público hospedado em servidores de terceiros, o investigador deve restringir a inserção de dados sensíveis, credenciais ou identificadores reais do alvo de investigação nos prompts e campos de processamento de IA, garantindo o sigilo e a integridade da operação."
  },
  {
    "id": "Brasil.io",
    "title": "Brasil.io",
    "url": "https://brasil.io/",
    "tipo": "Plataforma de Dados Abertos e Repositório Cívico",
    "utilidade": "Repositório de dados públicos brasileiros limpos e estruturados, voltado para transparência cívica, inteligência societária e cruzamento de dados governamentais.",
    "descricao": "O Brasil.io é uma plataforma colaborativa que atua na libertação e estruturação de dados públicos brasileiros. O projeto captura dados originalmente disponibilizados por órgãos governamentais em formatos complexos, fechados ou de difícil manipulação (como PDFs restritivos ou planilhas massivas desorganizadas) e os converte em bancos de dados limpos, padronizados e acessíveis via interface web e API. Seu catálogo inclui o cadastro completo de CNPJs da Receita Federal, históricos de candidaturas e declarações de bens do TSE, salários do judiciário e dados epidemiológicos.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito de investigações patrimoniais, inteligência societária e cruzamento de vínculos, o Brasil.io serve como um indexador centralizado de alta eficiência. Ele mitiga a necessidade de o investigador baixar e tratar gigabytes de arquivos governamentais brutos, permitindo a correlação rápida entre o histórico político de indivíduos, seus vínculos corporativos e eventuais contratos ou vantagens institucionais mapeadas em território nacional.",
    "notes": "* Devido à higienização prévia das tabelas, os arquivos disponíveis em formato CSV e JSON são ideais para importação direta em ferramentas de análise de vínculos locais e bancos de dados relacionais.\n* Para automações e extrações automatizadas de larga escala, o uso de credenciais de API registradas é mandatório, e requisições excessivas sem autenticação são bloqueadas por mecanismos internos de proteção de infraestrutura."
  },
  {
    "id": "BreachBase",
    "title": "BreachBase",
    "url": "https://breachbase.com/",
    "tipo": "Motor de Busca de Vazamentos de Dados (Data Breach Search Engine)",
    "utilidade": "Mecanismo de busca e inteligência sobre credenciais vazadas, e-mails, nomes de usuário e histórico de exposição em incidentes de segurança",
    "descricao": "O BreachBase é um serviço online voltado para a consulta e agregação de dados expostos em incidentes de segurança cibernética e megavazamentos (*data breaches*). A plataforma indexa bilhões de registros públicos e semi-públicos contendo e-mails, *usernames*, senhas em texto claro ou *hashes*, endereços IP e identificadores digitais obtidos a partir de compilações de violações de dados, fóruns e repositórios clandestinos.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/pessoa-identidade",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas e inteligência de ameaças cibernéticas (CYBINT/DARKINT), a ferramenta atua como um mecanismo de reconhecimento passivo e *pivoting*. Ela viabiliza o mapeamento da pegada digital de indivíduos ou colaboradores corporativos, permitindo correlacionar nomes de usuário e endereços de e-mail a credenciais antigas ou senhas reutilizadas, o que auxilia na verificação de vínculos entre diferentes identidades online e na mensuração do nível de exposição de um alvo.",
    "notes": "* A busca por senhas ou *hashes* conhecidos permite identificar outros e-mails ou nomes de usuário que utilizam a mesma combinação, sendo uma técnica para mapear contas alternativas (*sock puppets*) operadas pela mesma pessoa.\n* Por operar em infraestrutura de terceiros, recomenda-se cautela em termos de OPSEC ao pesquisar seletores específicos, evitando expor o foco investigativo a partir de endereços IP desprotegidos."
  },
  {
    "id": "BrowserLeaks",
    "title": "BrowserLeaks",
    "url": "https://browserleaks.com/",
    "tipo": "Plataforma Web de Testes de Segurança e Anonimato",
    "utilidade": "Auditoria de vazamentos de privacidade, validação de OPSEC e análise técnica de pegada digital de navegadores (IP, WebRTC, DNS, Fingerprinting).",
    "descricao": "O BrowserLeaks é uma suíte de ferramentas web focada na auditoria de segurança, privacidade e anonimato de navegadores de internet. A plataforma realiza testes dinâmicos e profundos para identificar quais dados e metadados técnicos o dispositivo de um usuário expõe ao visitar uma página web, revelando potenciais vulnerabilidades como vazamentos de IP real via WebRTC, servidores de DNS configurados, assinaturas TLS (JA3/JA4), geolocalização da API do navegador, e técnicas complexas de rastreamento como Canvas, WebGL e Font Fingerprinting.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "opsec/ambiente-seguro",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações digitais, o BrowserLeaks é um recurso crítico voltado para a Segurança Operacional (OPSEC) e a proteção do analista. Antes de iniciar qualquer coleta ativa ou interagir com infraestruturas controladas pelo alvo, o investigador utiliza a plataforma para validar se suas ferramentas de anonimização (VPNs, Proxies, rede Tor ou navegadores blindados) estão operando corretamente e sem vazamentos de tráfego que possam comprometer sua identidade real ou revelar a origem da investigação.",
    "notes": "* É altamente recomendado incluir o BrowserLeaks no checklist de pré-investigação sempre que um novo perfil técnico ou ambiente virtual de navegação for inicializado.\n* A análise do módulo \"Canvas Fingerprint\" e \"TLS Client Fingerprint\" deve ser observada com atenção: se o navegador do analista apresentar uma assinatura digital extremamente rara ou única no ecossistema global da ferramenta, ele poderá ser facilmente rastreado pelo alvo, sendo necessária a alteração de parâmetros do agente de usuário (User-Agent) ou o uso de extensões de ruído (noise insertion)."
  },
  {
    "id": "Browsertrix Crawler",
    "title": "Browsertrix Crawler",
    "url": "https://crawler.docs.browsertrix.com/",
    "tipo": "Ferramenta de Web Crawling e Preservação Digital Baseada em Navegador",
    "utilidade": "Rastreamento web automatizado de alta fidelidade baseado em navegador para preservação digital e arquivamento em formatos WACZ e WARC",
    "descricao": "O Browsertrix Crawler é um rastreador web (*web crawler*) de alta fidelidade desenvolvido pelo projeto Webrecorder. Projetado para superar as limitações de rastreadores tradicionais frente à web moderna, ele utiliza navegadores reais controlados via automação (Chromium) para renderizar JavaScript complexo, carregar conteúdos dinâmicos (*Single Page Applications*), reproduzir mídias e rolar páginas automaticamente. A ferramenta empacota todo o tráfego HTTP, mídias e metadados coletados diretamente nos formatos padronizados de preservação digital WACZ e WARC.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "fonte/arquivos-noticias",
      "func/scrapers-automacao",
      "plataforma/terminal",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas e procedimentos de preservação probatória, o Browsertrix Crawler permite a coleta automatizada, profunda e estruturada de portais, fóruns e perfis em redes sociais antes que sejam apagados ou modificados. Por executar um motor de renderização completo de navegador, ele garante a captura fidedigna de elementos dinâmicos e mídias ricas que coletores puramente baseados em requisições HTTP costumam ignorar, viabilizando auditorias forenses e reproduções *offline* autênticas das páginas arquivadas.",
    "notes": "* A forma mais direta e recomendada de execução é por meio de contêineres Docker, onde o comando recebe os parâmetros de semente (*seed URL*), limites de profundidade (*crawl depth*) e gera os arquivos `.wacz` no volume mapeado.\n* Os arquivos gerados podem ser validados e navegados de forma interativa e *offline* utilizando o visualizador ReplayWeb.page.\n* Permite a injeção de perfis de autenticação e *cookies* prévios para possibilitar a coleta dentro de áreas restritas ou contas de redes sociais previamente logadas."
  },
  {
    "id": "BuiltWith",
    "title": "BuiltWith",
    "url": "https://builtwith.com",
    "tipo": "Plataforma de Profiling de Sites e Inteligência Tecnológica",
    "utilidade": "Identificação de pilhas tecnológicas web, mapeamento de infraestrutura de domínios e pivotagem de ativos digitais por meio de códigos de rastreamento compartilhados.",
    "descricao": "O BuiltWith é uma ferramenta de perfilamento de sites (website profiler) e inteligência de mercado que realiza varreduras contínuas na internet para indexar as tecnologias adotadas por milhões de páginas web. A plataforma armazena e organiza dados estruturados sobre sistemas de gerenciamento de conteúdo (CMS), servidores, provedores de hospedagem, CDN, certificados SSL/TLS, além de scripts analíticos e pixels de rastreamento publicitário.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/empresa",
      "func/infraestrutura-cybint",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo da inteligência de ameaças cibernéticas (CYBINT) e investigações corporativas, o BuiltWith é um recurso de alto valor para o mapeamento de pegada digital e engenharia reversa de infraestruturas. Sua principal aplicação em investigações reside na funcionalidade de \"Perfil de Relacionamento\" (Relationship Profile), que permite correlacionar diferentes domínios que compartilham identificadores exclusivos idênticos — como IDs do Google Analytics, chaves do Google AdSense ou IDs de pixels do Facebook — revelando conexões ocultas ou propriedades digitais adicionais controladas pelo mesmo ator ou organização.",
    "notes": "* A funcionalidade de rastreamento por IDs de ferramentas analíticas é crucial para desarticular campanhas de desinformação, redes de *phishing* e portfólios ocultos de empresas de fachada.\n* Consultas sucessivas no modo gratuito a partir do mesmo endereço IP podem disparar bloqueios temporários ou desafios de CAPTCHA, tornando recomendável o gerenciamento adequado de proxies ou VPNs para a preservação da OPSEC em investigações de larga escala."
  },
  {
    "id": "Busca Médicos - CFM",
    "title": "Busca Médicos - CFM",
    "url": "https://portal.cfm.org.br/busca-medicos/",
    "tipo": "Portal de Registro Profissional e Consulta Pública",
    "utilidade": "Consulta e validação cadastral de profissionais da medicina registrados no Brasil, incluindo situação do registro e especialidades médicas certificadas.",
    "descricao": "O portal Busca Médicos é a plataforma oficial e centralizada mantida pelo Conselho Federal de Medicina (CFM) para a verificação pública da situação cadastral de profissionais de medicina em todo o território brasileiro. A ferramenta permite a realização de consultas estruturadas por nome, número de inscrição no Conselho Regional de Medicina (CRM), estado (UF), tipo de inscrição, situação do registro (como ativo, inativo, cancelado ou cassado) e especialidades ou áreas de atuação devidamente registradas (RQE - Registro de Qualificação de Especialidade).",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de pessoas (People Intel), processos de *due diligence*, engenharia social defensiva e repressão a fraudes corporativas, a plataforma atua como uma fonte primária indispensável. Ela viabiliza a validação da identidade profissional de um alvo, confirma seu escopo legal de atuação e mitiga riscos associados ao exercício ilegal da profissão ou falsidade ideológica, permitindo correlacionar dados informados em redes sociais corporativas com os registros oficiais do Estado.",
    "notes": "* O portal conta com mecanismos de proteção perimetral (como CAPTCHAs dinâmicos e bloqueios por taxa de requisição), o que exige a intervenção manual do analista ou o uso de técnicas avançadas de emulação de navegador para automatizações pontuais.\n* A validação do número de RQE (Registro de Qualificação de Especialidade) é fundamental para investigações de fraude, visto que um profissional pode possuir o CRM ativo, mas não estar legalmente autorizado a anunciar-se como especialista em ramos específicos da medicina."
  },
  {
    "id": "Busca Placas",
    "title": "Busca Placas",
    "url": "https://buscaplacas.com.br/",
    "tipo": "Motor de Busca e Identificação Veicular",
    "utilidade": "Consulta e levantamento de informações cadastrais básicas de veículos brasileiros a partir do número da placa.",
    "descricao": "O Busca Placas é uma ferramenta baseada na web estruturada para a identificação e decodificação de dados automotores no Brasil. A plataforma permite que usuários insiram a placa de um veículo (no padrão antigo ou no formato Mercosul) para obter de forma automatizada informações consolidadas sobre o ativo, como marca, modelo, ano de fabricação, ano do modelo, cor, além da cidade e estado de emplacamento.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações de campo, inteligência patrimonial, auditoria de frotas e combate a fraudes, o portal serve como um vetor de busca direta (*pivoting*). A partir de um único fragmento de informação coletado em uma evidência fotográfica ou vigilância física (a placa), o analista consegue obter a ficha técnica do veículo, cruzando esses dados com declarações de alvos, perfis em redes sociais ou registros societários para confirmar a propriedade de bens de forma indireta.",
    "notes": "* A plataforma é ideal para checagens rápidas de consistência, permitindo ao investigador identificar rapidamente indícios de clonagem de veículos (quando as características físicas observadas não batem com o ano/modelo retornado pela base).\n* Consultas em larga escala ou consultas automatizadas via ferramentas de raspagem podem encontrar barreiras de segurança perimetral (WAF) ou desafios de CAPTCHA instalados para mitigar abusos na infraestrutura do site."
  },
  {
    "id": "Busca Textual CNPq (Plataforma Lattes)",
    "title": "Busca Textual CNPq (Plataforma Lattes)",
    "url": "https://buscatextual.cnpq.br/buscatextual/busca.do?metodo=apresentar",
    "tipo": "Repositório de Registros Públicos e Dados Biográficos",
    "utilidade": "Levantamento de dados biográficos, acadêmicos, histórico profissional e vínculos institucionais de indivíduos no Brasil (Plataforma Lattes)",
    "descricao": "A Busca Textual do CNPq é a interface pública de consulta da Plataforma Lattes, o ecossistema oficial do Ministério da Ciência, Tecnologia e Inovação (MCTI) que centraliza os currículos de pesquisadores, estudantes, docentes e profissionais técnicos atuantes no Brasil. A base de dados agrega registros históricos detalhados sobre a trajetória acadêmica e profissional dos indivíduos cadastrados.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações de fontes abertas, especialmente no rastreamento de pessoas físicas (Background Check e Due Diligence), a ferramenta é um dos repositórios biográficos mais valiosos do cenário nacional. Ela permite mapear a qualificação civil de um alvo, seu histórico de emprego e ocupação atual, vínculos com órgãos governamentais ou empresas privadas, projetos de financiamento público recebidos, áreas de especialidade técnica e sua rede de colaboradores e coautores.",
    "notes": ""
  },
  {
    "id": "Cadastro da Nota Fiscal Paulista (Consulta/Solicitação CPF)",
    "title": "Cadastro da Nota Fiscal Paulista (Consulta/Solicitação CPF)",
    "url": "https://www.nfp.fazenda.sp.gov.br/cadastroCAT/SolicitacaoCadastroCPF.aspx",
    "tipo": "Portal de Cadastro Governamental / Validação Institucional",
    "utilidade": "Validação cadastral de CPFs, identificação de situação civil e indícios de óbito ou inconsistências de dados.",
    "descricao": "A URL apontada corresponde à página oficial de solicitação de cadastro para pessoas físicas no sistema da Nota Fiscal Paulista, mantido pela Secretaria da Fazenda e Planejamento do Estado de São Paulo (SEFAZ-SP). O formulário realiza uma consulta síncrona automatizada com as bases integradas da Receita Federal do Brasil para checar se o CPF inserido é válido, se a data de nascimento informada coincide com o registro civil e qual a situação cadastral do documento.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas e inteligência civil, esta ferramenta governamental serve para realizar a validação ativa (*pivoting*) de um dado conhecido sem a necessidade de interagir com o alvo. Ao inserir o número do CPF e a data de nascimento, o sistema retorna respostas de erro específicas (como \"CPF inválido\", \"Data de nascimento divergente\", \"CPF com indício de óbito\" ou \"Contribuinte já cadastrado\"). Essas respostas permitem confirmar de forma inequívoca a existência e a regularidade legal da pessoa física sob investigação, servindo como técnica de validação de dados biográficos coletados em vazamentos ou fontes alternativas.",
    "notes": "* Devido à restrição de acesso que impede ferramentas externas de realizarem buscas ativas irrestritas sem mecanismos de proteção, o portal utiliza sistemas de proteção de integridade visual (como CAPTCHA/reCAPTCHA) para evitar varreduras massivas por meio de scripts automatizados de extração (*scrapers*).\n* É recomendado o seu uso de forma manual para a qualificação de relatórios de inteligência, assegurando que o nome ou o CPF obtidos em fases prévias da investigação correspondem exatamente aos dados espelhados na base governamental brasileira."
  },
  {
    "id": "Cadastro Nacional de Condenações Cíveis por Ato de Improbidade Administrativa e Inelegibilidade (CNCIAI) - CNJ",
    "title": "Cadastro Nacional de Condenações Cíveis por Ato de Improbidade Administrativa e Inelegibilidade (CNCIAI) - CNJ",
    "url": "https://www.cnj.jus.br/improbidade_adm/consultar_requerido.php",
    "tipo": "Cadastro Nacional de Sanções e Condenações Judiciais",
    "utilidade": "Consulta consolidada de condenações cíveis por atos de improbidade administrativa e sanções de inelegibilidade aplicadas a pessoas físicas e jurídicas no Brasil.",
    "descricao": "O Cadastro Nacional de Condenações Cíveis por Ato de Improbidade Administrativa e Inelegibilidade (CNCIAI), mantido pelo Conselho Nacional de Justiça (CNJ), é o sistema oficial que centraliza e unifica os dados de processos judiciais de todo o país relativos a condenações por improbidade e restrições de direitos políticos. A plataforma permite pesquisar se cidadãos ou empresas foram penalizados com a suspensão de direitos políticos, perda de cargo público, indisponibilidade de bens, inelegibilidade eleitoral ou proibição de contratar com o Poder Público.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No desenvolvimento de checagens de antecedentes (*Background Checks*), auditorias de conformidade (*Compliance*), análise de risco político e investigações corporativas complexas (*Due Diligence*), este portal é uma fonte primária de alto valor tático. Ele permite constatar de forma rápida e centralizada se o alvo (um potencial sócio, fornecedor ou agente público) possui má conduta administrativa grave ou impedimentos legais vigentes, evitando que organizações estabeleçam vínculos comerciais com entidades proibidas de licitar.",
    "notes": "* Embora seja centralizado pelo CNJ, a alimentação do sistema depende do envio de dados pelos tribunais de origem. Em investigações críticas, a ausência de registros neste cadastro deve ser cruzada e confirmada por meio de buscas específicas nos portais de certidões dos Tribunais de Justiça (TJs) e Tribunais Regionais Federais (TRFs) onde o alvo reside ou opera.\n* A plataforma dispõe de filtros que permitem segmentar a busca por esfera judicial e localização geográfica, o que auxilia o analista a refinar os resultados e mitigar falsos positivos gerados por casos severos de homonímia."
  },
  {
    "id": "Cadastro Nacional dos Advogados (CNA) - OAB",
    "title": "Cadastro Nacional dos Advogados (CNA) - OAB",
    "url": "https://cna.oab.org.br/",
    "tipo": "Cadastro Nacional de Registro Profissional",
    "utilidade": "Consulta e validação cadastral de advogados, estagiários e consultores jurídicos registrados na Ordem dos Advogados do Brasil (OAB).",
    "descricao": "O Cadastro Nacional dos Advogados (CNA) é a plataforma oficial centralizada mantida pelo Conselho Federal da Ordem dos Advogados do Brasil (OAB). O sistema unifica os dados de todas as seccionais estaduais do país, permitindo a pesquisa em tempo real de profissionais do direito. As consultas podem ser parametrizadas por nome completo, número da inscrição, seccional (estado) e tipo de inscrição (advogado, estagiário ou consultor em direito estrangeiro), retornando a situação do registro (regular, suspenso, cancelado, licenciado ou excluído), a foto cadastrada (quando disponível) e a subseção de atuação.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No desenvolvimento de investigações sobre pessoas (People Intel), checagem de antecedentes (*Background Checks*), verificação de credenciais corporativas e mitigação de riscos contra engenharia social, o CNA atua como uma fonte primária de altíssima confiabilidade. A plataforma permite desmascarar falsas identidades profissionais (indivíduos que se passam por advogados para aplicar golpes ou obter acesso a informações sigilosas) e correlacionar a atuação geográfica de um alvo com seus registros formais de operação legal.",
    "notes": "* O CNA implementa soluções de segurança perimetral, incluindo desafios de CAPTCHA dinâmicos para mitigar requisições massivas automatizadas por ferramentas de raspagem de dados (*scrapers*).\n* Em casos de homonímia severa, o analista deve refinar a busca cruzando dados secundários (como o estado de atuação ou a subseção) para isolar o alvo correto. A presença de foto oficial no cadastro do profissional funciona como um excelente vetor de verificação visual cruzada com perfis de redes sociais (como o LinkedIn)."
  },
  {
    "id": "CadastroPré",
    "title": "CadastroPré",
    "url": "https://cadastropre.com.br/",
    "tipo": "Portal de Consulta Cadastral e Proteção de Identidade",
    "utilidade": "Consulta unificada da existência de linhas telefônicas móveis pré-pagas vinculadas a um CPF nas prestadoras de telecomunicação do Brasil.",
    "descricao": "O CadastroPré é uma plataforma unificada criada pelas principais prestadoras de telecomunicação do Brasil (Algar, Claro, Sercomtel, TIM e Vivo) sob a coordenação da Conexis Brasil Digital e em estrita conformidade com as diretrizes regulatórias da ANATEL (Agência Nacional de Telecomunicações). O portal centraliza as consultas cadastrais permitindo verificar, por meio da inserção de um número de CPF, se existem linhas de telefonia móvel na modalidade pré-paga ativas vinculadas àquele documento em cada operadora.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/telefone",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações de pessoas (People Intel), segurança da informação e auditoria contra fraudes de personificação, o CadastroPré funciona como um excelente vetor de validação e contra-inteligência. A ferramenta permite que o analista identifique o espectro de atuação do alvo no mercado de telecomunicações, descobrindo quais operadoras detêm contas ativas sob sua titularidade, além de ser um recurso crítico para detectar se o CPF de uma vítima está sendo utilizado indevidamente por criminosos para ativar linhas telefônicas anônimas.",
    "notes": ""
  },
  {
    "id": "Caipora Pro",
    "title": "Caipora Pro",
    "url": "https://caipora.pro/",
    "tipo": "Diretório Centralizado de Links e Framework de Recursos OSINT",
    "utilidade": "Catálogo curado e repositório centralizado de ferramentas, serviços e fontes de dados para OSINT e investigação digital com foco no cenário brasileiro",
    "descricao": "O Caipora Pro é uma plataforma web que atua como um repositório centralizado e curadoria estruturada de recursos, ferramentas e fontes abertas voltadas para Inteligência de Fontes Abertas (OSINT) e investigação digital. Organizado em dezenas de categorias temáticas — incluindo buscadores, análise de metadados, pessoas, empresas, consultas processuais, cartórios, portais da transparência, GEOINT, redes sociais e vazamentos —, o projeto foca especialmente no ecossistema e nas particularidades das bases de dados e registros públicos do Brasil.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No planejamento e condução de investigações cibernéticas e corporativas, o Caipora Pro funciona como um mapa de navegação e ponto de partida de inteligência (*OSINT Toolkit*). Ele reúne em uma interface única e categorizada links para bases institucionais, ferramentas analíticas e endpoints de consulta que seriam de difícil localização isolada, agilizando o processo de coleta e expansão de *leads* em operações voltadas a alvos brasileiros e globais.",
    "notes": "* É uma excelente ferramenta de apoio para a fase inicial de reconhecimento e seleção de vetores de busca (*footprinting*), especialmente para investigações que demandam o cruzamento de bases locais brasileiras (Receita Federal, Tribunais, Diários Oficiais e órgãos reguladores).\n* Os links indexados redirecionam para serviços de terceiros; a disponibilidade, integridade e as políticas de acesso de cada ferramenta individual devem ser validadas durante a operação."
  },
  {
    "id": "Câmeras CET-SP",
    "title": "Câmeras CET-SP",
    "url": "https://cameras.cetsp.com.br/View/Cam.aspx",
    "tipo": "Portal de Monitoramento de Câmeras de Trânsito (GEOINT)",
    "utilidade": "Monitoramento em tempo real e visualização de condições viárias por meio de câmeras públicas de tráfego na cidade de São Paulo",
    "descricao": "O portal de câmeras da CET-SP (Companhia de Engenharia de Tráfego de São Paulo) é uma plataforma governamental que disponibiliza aos cidadãos o acesso a imagens capturadas por centenas de câmeras de monitoramento viário distribuídas ao longo das principais avenidas, rodovias urbanas, marginais e cruzamentos da capital paulista.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "fonte/registros-publicos-gov",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo da Inteligência Geoespacial (GEOINT) e de cronoanálises investigativas, a ferramenta permite realizar o reconhecimento remoto de pontos críticos de circulação e analisar as condições situacionais de uma determinada localidade. É útil para a verificação passiva de rotas de fuga, validação de condições climáticas ou de tráfego em datas/horários específicos e apoio ao estabelecimento de linhas do tempo comportamentais em investigações que envolvam deslocamentos no município de São Paulo.",
    "notes": "* A taxa de atualização das imagens pode variar entre transmissões de vídeo contínuas e capturas estáticas atualizadas a cada poucos minutos, dependendo da disponibilidade técnica da câmera escolhida. O analista deve atentar-se ao *timestamp* gerado na própria imagem para garantir a integridade temporal da evidência.\n* Por se tratar de um site institucional governamental que monitora o tráfego rodoviário local, o acesso direto do investigador registra metadados de conexão (como o endereço IP de origem) nos servidores da CET-SP. Recomenda-se o uso de VPN ou infraestrutura de anonimização para manter a OPSEC defensiva durante o monitoramento de locais de interesse."
  },
  {
    "id": "Canal de Verificação de Canais Oficiais - Porto Seguro",
    "title": "Canal de Verificação de Canais Oficiais - Porto Seguro",
    "url": "https://www.portoseguro.com.br/pdc/recuperacao/canais",
    "tipo": "Canal de Verificação Institucional",
    "utilidade": "Validação e identificação de domínios corporativos e detecção de canais de atendimento oficiais para mitigação de fraudes",
    "descricao": "A página de validação de canais da Porto Seguro é uma ferramenta institucional pública desenvolvida para permitir que clientes e investigadores verifiquem se um determinado número de telefone, link, e-mail ou domínio que se apresenta em nome da empresa é de fato um canal de atendimento oficial e autorizado ou se trata de uma tentativa de fraude (phishing, spoofing ou engenharia social).",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/dominio",
      "fonte/registros-publicos-gov",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de fraudes digitais, engenharia social e análise de ameaças cibernéticas (Cyber Threat Intelligence), esta ferramenta atua como um valioso validador de infraestrutura e identidade corporativa. Ela permite ao analista confirmar a autenticidade de elementos de contato atribuídos à Porto Seguro, auxiliando no descarte ou confirmação de vetores de ataque que simulam a identidade da marca.",
    "notes": "* Útil para rotinas de resposta a incidentes e inteligência de ameaças, agilizando a triagem de denúncias de páginas falsas.\n* Sendo uma ferramenta de consulta pontual e reativa baseada em interface web, sua automação massiva via scripts depende de requisições diretas aos endpoints de validação da página."
  },
  {
    "id": "Canarytokens",
    "title": "Canarytokens",
    "url": "https://canarytokens.org/",
    "tipo": "Ferramenta de Alerta e Defesa de OPSEC",
    "utilidade": "Geração de armadilhas digitais (tripwires) para detecção de vazamentos e alertas de OPSEC",
    "descricao": "O Canarytokens é uma plataforma online voltada para a criação simplificada de \"tokens de canário\", que atuam como armadilhas digitais (*tripwires* ou *honeypots*). A ferramenta permite gerar diversos tipos de identificadores camuflados — como links exclusivos, documentos do Word ou PDF, imagens, registros de DNS e chaves de API fictícias. Quando um terceiro ou invasor interage com esse arquivo ou link, o sistema dispara imediatamente um alerta por e-mail ou webhook contendo detalhes técnicos de quem o acessou.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, a ferramenta desempenha um papel eminentemente defensivo e de contra-inteligência para a manutenção da OPSEC (Segurança das Operações). Ela permite que o analista monitore a integridade de seus próprios relatórios, bases de dados compartilhadas ou arquivos de evidências. Ao inserir um token camuflado em seus ativos informacionais, o investigador recebe um alerta imediato caso o alvo, um terceiro ou um ator de ameaça consiga acessar esses dados indevidamente, revelando a infraestrutura técnica de quem violou o arquivo.",
    "notes": "* É recomendável utilizar contas de e-mail dedicadas e anônimas para receber os alertas dos tokens, evitando que a notificação de disparo revele a identidade real do investigador.\n* Os tokens inseridos em documentos (como PDFs ou planilhas) dependem de conexões HTTP/DNS externas para funcionar; portanto, o disparo só ocorrerá se o ambiente que abriu o arquivo estiver conectado à internet.\n* O tráfego gerado em direção aos servidores da ferramenta pode ser rotineiramente identificado ou bloqueado por soluções de segurança corporativa robustas (como firewalls e EDRs)."
  },
  {
    "id": "Carfacts",
    "title": "Carfacts",
    "url": "https://carfacts.com.br/",
    "tipo": "Plataforma de Consulta e Validação de Dados Veiculares",
    "utilidade": "Consulta e consolidação de dados cadastrais, restrições e histórico de veículos por placa e chassi",
    "descricao": "O Carfacts é uma plataforma web voltada para a centralização, consulta e emissão de históricos veiculares no território brasileiro. A ferramenta realiza buscas integradas em múltiplos bancos de dados e órgãos reguladores para fornecer relatórios detalhados contendo dados de fabricação, numeração de chassi/motor, histórico de quilometragem, restrições financeiras ou administrativas ativas (DETRAN), passagem por leilões, indícios de sinistro, multas e débitos pendentes.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, o Carfacts desempenha um papel importante na fase de levantamento patrimonial e análise de vínculos logísticos. A ferramenta permite realizar o *pivoting* a partir de um dado conhecido (como uma placa fotografada em campo ou um número de chassi localizado em documentos públicos) para extrair toda a cadeia de eventos comerciais e técnicos do automóvel. Isso auxilia na comprovação de ocultação de bens, na identificação de fraudes (como adulteração de odômetro) e na validação da procedência de frotas associadas a alvos ou organizações.",
    "notes": "* A ferramenta atende apenas a veículos registrados no Brasil, sendo necessária a digitação correta da placa (padrão antigo ou Mercosul) e/ou chassi combinados à Unidade Federativa (UF) de registro para a localização dos dados.\n* Em cumprimento às resoluções vigentes do CONTRAN e legislações de privacidade de dados, a plataforma não comercializa e nem exibe dados de identificação civil (como nome completo ou CPF) dos proprietários atuais ou anteriores do veículo.\n* É recomendável cruzar as informações de sinistro e leilão com buscas reversas de imagens na internet para localizar registros fotográficos do estado físico real em que o veículo se encontrava na data do evento informado."
  },
  {
    "id": "Carpivara",
    "title": "Carpivara",
    "url": "https://consultasdeveiculos.com/",
    "tipo": "Plataforma de Background Check e Inteligência Veicular",
    "utilidade": "Consulta consolidada de histórico veicular, multas, restrições e procedência de automóveis",
    "descricao": "O Carpivara é uma plataforma online voltada para a consulta e consolidação do histórico de veículos no território brasileiro. O sistema centraliza dados sobre a procedência de automóveis, permitindo verificar a existência de multas, autuações, gravames, restrições judiciais ou administrativas, além de informações sobre leilões e sinistros a partir de identificadores básicos como a placa ou o chassi do veículo.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/pago"
    ],
    "utilidade_Osint": "No escopo de background checks, investigações patrimoniais e atividades de VATINT (Vehicle and Travel Intelligence), a ferramenta serve para auditar a situação legal de ativos rodoviários e apoiar o rastreamento de frotas ou bens vinculados a organizações e indivíduos sob análise técnica.",
    "notes": "* É uma fonte valiosa para complementar investigações de ocultação de patrimônio e fraudes comerciais, mapeando se veículos sob posse do alvo possuem impedimentos ou restrições de transferência.\n* A plataforma opera sob conformidade com a LGPD e a LAI, focando na telemetria técnica e no histórico administrativo do veículo sem expor dados estritamente privados de proprietários de forma direta."
  },
  {
    "id": "Carrot2",
    "title": "Carrot2",
    "url": "https://search.carrot2.org/#/search/web",
    "tipo": "Mecanismo de Agrupamento e Visualização Semântica de Resultados Web",
    "utilidade": "Agrupamento temático automático e visualização de tópicos de resultados de motores de busca em clusters",
    "descricao": "O Carrot2 é um mecanismo de busca e framework de clustering de código aberto voltado para a organização dinâmica de informações da web. Em vez de entregar os resultados exclusivamente em uma lista linear convencional, a ferramenta processa os snippets e resumos de buscas na rede e os organiza automaticamente em tópicos temáticos (clusters). A plataforma disponibiliza interfaces gráficas com visualizações interativas em formato de mapas em árvore (*treemap*) e círculos concêntricos (*pie-chart / foamtree*).",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No fluxo de inteligência de fontes abertas, o Carrot2 atua na fase de reconhecimento e análise preliminar de grandes volumes de resultados. Ao categorizar termos e links correlacionados em grupos conceituais semânticos, ele permite ao analista identificar subtemas, entidades ligadas a um alvo ou contextos emergentes que passariam despercebidos em uma paginação tradicional de buscadores, agilizando o direcionamento da investigação.",
    "notes": "* Os clusters gerados facilitam a exclusão de ambiguidades (por exemplo, diferenciar homônimos ao agrupar resultados de pessoas por profissões ou localizações distintas).\n* O projeto também possui componentes de código aberto em Java que podem ser integrados localmente a pipelines de processamento de texto e dados não estruturados."
  },
  {
    "id": "CCFácil",
    "title": "CCFácil",
    "url": "https://ccfacil.com.br/default.aspx",
    "tipo": "Plataforma de Background Check e Análise de Crédito",
    "utilidade": "Consulta consolidada de restrições financeiras, score de crédito, localização cadastral e inteligência societária de pessoas físicas e jurídicas",
    "descricao": "O CCFácil é uma plataforma online que opera como distribuidora autorizada de bureaus de crédito (como a Serasa Experian), centralizando serviços de consultas cadastrais, análise patrimonial e de risco no território brasileiro. O sistema permite a emissão de relatórios consolidados sobre CPFs e CNPJs, fornecendo dados sobre protestos, registros de inadimplência, dívidas vencidas, pontuação de score, ações judiciais em andamento, além de históricos de localização e composição de sociedades empresariais.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/pago"
    ],
    "utilidade_Osint": "No contexto de investigações financeiras (FININT), devido processo de due diligence e background checks corporativos ou civis, a ferramenta é utilizada para mapear o passivo econômico e jurídico de um alvo, rastrear redes de vínculos societários, descobrir empresas de fachada ou grupos econômicos ocultos, além de levantar dados de contato válidos para posterior cruzamento e qualificação.",
    "notes": "* A plataforma é altamente eficaz para correlacionar CPFs de suspeitos a empresas ativas ou baixadas, ajudando a traçar fluxos de ocultação patrimonial ou lavagem de capitais.\n* Por se tratar de um distribuidor de bureaus de crédito centralizados, a realização de pesquisas deixa registros de consulta na base (\"consultas anteriores\"), o que pode alertar o alvo caso ele utilize ferramentas de monitoramento em tempo real do próprio documento (como o Serasa Premium). O analista deve mensurar esse impacto na OPSEC antes de realizar a busca direta."
  },
  {
    "id": "CCleaner",
    "title": "CCleaner",
    "url": "https://www.ccleaner.com/",
    "tipo": "Utilitário de Limpeza de Sistema e Mitigação de Pegada Local (Anti-Forense)",
    "utilidade": "Sanitização de ambiente local, remoção de rastros digitais residuais (cookies, cache, histórico) e manutenção da higienização de sistemas para OPSEC",
    "descricao": "O CCleaner é um utilitário de otimização e privacidade projetado para sistemas operacionais desktop. A ferramenta realiza a varredura e a eliminação sistemática de arquivos temporários, logs de aplicativos, caches de navegadores, históricos de navegação, cookies e entradas inválidas ou obsoletas no Registro do Windows. Seu objetivo principal é liberar espaço em disco e mitigar a retenção de dados persistentes no sistema local.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/desktop",
      "acesso/limitado",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No contexto de Segurança das Operações (OPSEC), o CCleaner é empregado na fase pós-investigação ou na transição entre diferentes casos para garantir a higienização do ambiente de trabalho do analista. Ao destruir rastros locais de navegação e arquivos temporários gerados durante as sessões de coleta de dados, a ferramenta impede a contaminação cruzada de dados entre alvos distintos e protege o investigador contra auditorias forenses locais ou vazamentos acidentais de telemetria.",
    "notes": "* Deve ser utilizado preferencialmente ao final de cada ciclo investigativo para garantir que o navegador de internet e os diretórios temporários do sistema operacional sejam limpos, reduzindo a pegada digital (*footprint*) da máquina de investigação.\n* O analista deve configurar regras estritas de exclusão caso utilize ferramentas de automação que dependam de sessões salvas locais, evitando que dados legítimos de personas (*sock puppets*) sejam deletados acidentalmente durante a rotina de sanitização."
  },
  {
    "id": "CENSEC (Central Notarial de Serviços Eletrônicos Compartilhados)",
    "title": "CENSEC (Central Notarial de Serviços Eletrônicos Compartilhados)",
    "url": "https://www.censec.org.br/",
    "tipo": "Base de Dados Centralizada de Registros Notariais",
    "utilidade": "Centralização e consulta de atos notariais, testamentos, procurações públicas e escrituras lavradas em cartórios de notas do Brasil",
    "descricao": "A CENSEC é uma plataforma operacional gerida pelo Colégio Notarial do Brasil (CNB-CF) sob regulamentação do Conselho Nacional de Justiça (CNJ). O sistema centraliza e indexa os dados de atos notariais lavrados em todos os cartórios de notas do território nacional, englobando o Registro Central de Testamentos (RCTO), a Central de Escrituras e Procurações (CESDI) e a Central de Escrituras Públicas de Separações, Divórcios e Inventários (CEP).",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito de investigações patrimoniais, inteligência societária e auditorias de antecedentes (background checks), a CENSEC serve como uma fonte de dados de alta integridade para rastrear a alienação de bens móveis e imóveis, identificar procuradores ocultos com plenos poderes de representação legal e mapear modificações na estrutura familiar ou sucessória de um alvo (como divórcios e inventários) antes que essas informações sejam averbadas em registros de imóveis ou juntas comerciais.",
    "notes": "* A busca na base da CESDI e CEP é um recurso crítico para identificar negócios jurídicos (como promessas de compra e venda) que ainda não foram registrados na matrícula do imóvel, revelando patrimônio ocultado temporariamente.\n* Por exigir identificação estrita e assinatura digital (e-Notariado/ICP-Brasil) para as requisições efetuadas por cidadãos, as trilhas de auditoria da plataforma registram quem realizou a consulta. O analista deve considerar as implicações de OPSEC caso não possua mandado judicial ou prerrogativa legal de anonimato institucional."
  },
  {
    "id": "Censys Search",
    "title": "Censys Search",
    "url": "https://search.censys.io",
    "tipo": "Motor de Busca de Dispositivos e Inteligência de Infraestrutura (CYBINT)",
    "utilidade": "Busca, indexação e mapeamento de hosts, certificados SSL/TLS e exposição de infraestrutura de rede global",
    "descricao": "O Censys Search é um motor de busca especializado na indexação de dispositivos conectados à internet e na análise da superfície de ataque global. A plataforma realiza varreduras contínuas no espaço de endereçamento IPv4 e IPv6, coletando dados estruturados sobre portas abertas, serviços ativos, banners de software, configurações de rede e registros detalhados de certificados criptográficos SSL/TLS por meio de logs de Transparência de Certificados (CT Logs).",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito da Inteligência de Ameaças Cibernéticas (CTI) e da Inteligência de Infraestrutura (CYBINT), o Censys atua como uma ferramenta crítica para mapear a pegada digital de uma organização. Ele viabiliza a correlação de servidores e serviços ocultos pertencentes ao mesmo agente ou alvo através de impressões digitais de certificados (como hashes SHA-256), além de identificar vulnerabilidades e configurações expostas publicamente em ativos de rede.",
    "notes": "* A busca por impressões digitais de certificados públicos é um dos métodos mais robustos no Censys para rastrear servidores de Comando e Controle (C2) ou servidores espelhados que tentam ocultar seus nomes de domínio tradicionais por trás de IPs rotativos.\n* Devido ao fato de o Censys consolidar as informações a partir de seus próprios scanners automatizados globais, as consultas realizadas pelo analista não geram tráfego contra a infraestrutura do alvo, garantindo a preservação da OPSEC passiva durante o levantamento técnico."
  },
  {
    "id": "Central de Certidões Nada Consta (CNC) - TJDFT",
    "title": "Central de Certidões Nada Consta (CNC) - TJDFT",
    "url": "https://cnc.tjdft.jus.br/solicitacao-externa",
    "tipo": "Portal do Poder Judiciário / Sistema de Certidões",
    "utilidade": "Emissão e validação de Certidões Nada Consta (antecedentes criminais, cíveis, falências e execuções fiscais) no âmbito do Distrito Federal e Territórios.",
    "descricao": "A Central de Certidões Nada Consta (CNC) do Tribunal de Justiça do Distrito Federal e dos Territórios (TJDFT) é a plataforma oficial destinada à solicitação e emissão de certidões de distribuição judicial. O sistema permite a qualquer cidadão requerer certidões cíveis, criminais, de falência, concordata e recuperação judicial, além de execuções fiscais, consolidadas sob a jurisdição do Distrito Federal.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de antecedentes, *due diligence* corporativa, análise de risco e qualificação de alvos (Background Check), o portal funciona como uma fonte primária de alta confiabilidade. A emissão de uma certidão positiva ou negativa permite ao analista identificar se um indivíduo ou empresa possui litígios judiciais em andamento, processos criminais ou insolvência financeira na região da capital federal, fornecendo subsídios fundamentais para mapear o histórico de conduta e a idoneidade do alvo.",
    "notes": "* A abrangência territorial desta ferramenta é restrita ao Distrito Federal e Territórios. Para uma investigação completa em âmbito nacional, este repositório deve ser complementado com os portais de certidões de outros estados (Tribunais de Justiça estaduais e Tribunais Regionais Federais).\n* O sistema exige o preenchimento correto dos dados qualificadores (nome completo e CPF/CNPJ) e adota mecanismos de verificação (como CAPTCHAs) para impedir consultas automatizadas massivas abusivas.\n* Certidões que resultem em \"Nada Consta\" (negativas) costumam ser emitidas instantaneamente, enquanto resultados \"Positivos\" ou homônimos podem exigir análise manual do tribunal e prazo adicional de liberação."
  },
  {
    "id": "Central Nacional de Serviços Compartilhados dos Protestos (Pesquisa Protesto)",
    "title": "Central Nacional de Serviços Compartilhados dos Protestos (Pesquisa Protesto)",
    "url": "https://www.pesquisaprotesto.com.br/",
    "tipo": "Portal Unificado de Serviços Notariais e Registrais",
    "utilidade": "Consulta nacionalizada de protestos em cartórios de títulos vinculada a CPFs ou CNPJs",
    "descricao": "A Pesquisa Protesto é o portal oficial da Central Nacional de Serviços Compartilhados dos Protestos (CENPROT), que permite a consulta gratuita e unificada sobre a existência de protestos em cartórios de todo o território nacional. A busca é efetuada a partir da inserção de um número de CPF (pessoa física) ou de CNPJ (pessoa jurídica), retornando informações sobre a regularidade financeira e inadimplência do alvo pesquisado.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações patrimoniais, auditoria de riscos corporativos e due diligence, esta plataforma atua como uma ferramenta fundamental para analisar o histórico de inadimplência e a saúde financeira de indivíduos e organizações. Ao fornecer indicativos de títulos protestados, ela permite corroborar situações de insolvência ou disputas financeiras de alvos sob análise.",
    "notes": "* A busca indicativa inicial retorna apenas a existência de protestos em âmbito nacional e o cartório de origem, funcionando como um excelente ponto de partida antes do requerimento de certidões detalhadas.\n* Para otimizar a OPSEC do investigador, recomenda-se cautela no uso de cadastros pessoais ao solicitar serviços avançados ou certidões de inteiro teor na plataforma."
  },
  {
    "id": "Certidão de Débitos Trabalhistas (TST - CNDT)",
    "title": "Certidão de Débitos Trabalhistas (TST - CNDT)",
    "url": "https://www.tst.jus.br/certidao1",
    "tipo": "Portal Governamental de Consulta de Regularidade Trabalhista",
    "utilidade": "Emissão e validação de Certidão Negativa de Débitos Trabalhistas (CNDT) para verificação de inadimplência e execuções na Justiça do Trabalho",
    "descricao": "O portal de Certidão de Débitos Trabalhistas do Tribunal Superior do Trabalho (TST) é o sistema oficial centralizado para a emissão e validação da Certidão Negativa de Débitos Trabalhistas (CNDT). A plataforma realiza uma varredura em tempo real no Banco Nacional de Devedores Trabalhistas (BNDT) para identificar se uma pessoa física ou jurídica possui obrigações processuais inadimplidas, decorrentes de sentenças condenatórias transitadas em julgado, acordos judiciais descumpridos ou execuções de acordos firmados perante o Ministério Público do Trabalho.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações patrimoniais, análise de conformidade (*due diligence*) corporativa e auditoria de antecedentes (*background checks*) civis, a consulta à CNDT constitui uma etapa essencial de verificação de integridade econômica. A constatação de uma certidão positiva ou a inserção do alvo no BNDT funciona como um indicador técnico de alta fidelidade sobre a existência de passivos jurídicos sufocantes, insolvência iminente e tentativas latentes de ocultação ou dilapidação de patrimônio para evasão de obrigações legais.",
    "notes": "* A certidão pode ser emitida como \"Negativa\" (sem débitos), \"Positiva\" (com inadimplências registradas) ou \"Positiva com efeitos de Negativa\" (quando os débitos estão garantidos por penhora ou com exigibilidade suspensa). Essa distinção tripla oferece nuances analíticas importantes sobre a postura processual do alvo.\n* O processo de busca é passivo em relação ao investigado (ele não é notificado da emissão da certidão por terceiros). Contudo, por se tratar de um portal oficial do Poder Judiciário, recomenda-se a proteção da OPSEC do analista por meio do mascaramento do endereço IP de origem para evitar o registro de telemetria de órgãos oficiais."
  },
  {
    "id": "Certidão de Feitos Trabalhistas (TRT-3)",
    "title": "Certidão de Feitos Trabalhistas (TRT-3)",
    "url": "https://certidao.trt3.jus.br/certidao/feitosTrabalhistas/aba1.emissao.htm",
    "tipo": "Portal Governamental de Consulta Processual e Regularidade Trabalhista",
    "utilidade": "Emissão de Certidão de Feitos Trabalhistas para verificação de processos, reclamações e passivos trabalhistas na jurisdição do TRT-3 (Minas Gerais)",
    "descricao": "O portal de Certidão de Feitos Trabalhistas do Tribunal Regional do Trabalho da 3ª Região (TRT-3) é o canal oficializado para a emissão de certidões eletrônicas que atestam a existência ou inexistência de processos e reclamações trabalhistas em nome de pessoas físicas ou jurídicas. A consulta varre os sistemas processuais da Justiça do Trabalho no âmbito do estado de Minas Gerais, cobrindo ações em andamento nas Varas do Trabalho e no Tribunal.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de due diligence corporativa, investigações patrimoniais e análise de antecedentes (*background checks*), a consulta ao TRT regional permite mapear contingências jurídicas e passivos financeiros ocultos em nome do alvo. A identificação de processos trabalhistas volumosos atua como um forte indicador de risco operacional, insolvência oculta, desconsideração da personalidade jurídica iminente ou potenciais fraudes contra credores.",
    "notes": "* Por se tratar de um órgão de jurisdição estadual/regional (TRT da 3ª Região - Minas Gerais), a certidão negativa emitida por este portal restringe-se estritamente ao território mineiro. Para uma investigação exaustiva de âmbito nacional, o analista deve replicar a consulta nos demais portais regionais (TRTs) ou recorrer de forma complementar à CNDT unificada no portal do TST.\n* O processo de busca é passivo em relação ao investigado (ele não é notificado da emissão da certidão por terceiros). A emissão do documento exige a inserção correta do CPF/CNPJ e a resolução de um desafio visual (*CAPTCHA*), o que mitiga requisições automatizadas diretas em larga escala sem tratamento prévio de sessões."
  },
  {
    "id": "Certidão de Filiação Partidária - TSE (Filia Consulta)",
    "title": "Certidão de Filiação Partidária - TSE (Filia Consulta)",
    "url": "https://filia-consulta.tse.jus.br/#/principal/certidao-gerar",
    "tipo": "Portal de Consulta Pública Governamental",
    "utilidade": "Emissão e validação de Certidão de Filiação Partidária para identificação de vínculos políticos, partidários e ideológicos de pessoas físicas.",
    "descricao": "O sistema Filia Consulta é uma plataforma oficial mantida pelo Tribunal Superior Eleitoral (TSE) da Justiça Eleitoral brasileira. O portal permite a qualquer cidadão consultar, gerar e validar a Certidão de Filiação Partidária, um documento oficial que atesta o histórico ou a ausência de vínculo formal de um indivíduo com agremiações políticas registradas no país.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações sobre Pessoas Politicamente Expostas (PEP), Background Check corporativo, due diligence de integridade e análise de redes de influência, esta ferramenta atua como uma fonte primária de alta confiabilidade. Ela permite mapear o posicionamento ideológico formal de um alvo, identificar possíveis conflitos de interesse em contratações públicas e levantar o histórico de trânsito político do indivíduo ao longo do tempo (incluindo datas de filiação, desfiliação ou cancelamento).",
    "notes": "* Para a emissão da certidão, o sistema exige parâmetros estritos e exatos (geralmente o número do Título de Eleitor, Nome Completo e Data de Nascimento), tornando obrigatória uma coleta prévia de dados básicos do alvo (*footprinting*).\n* O documento gerado em formato PDF acompanha uma chave de autenticidade e uma assinatura digital da Justiça Eleitoral, permitindo a preservação rigorosa da cadeia de custódia da evidência para relatórios forenses.\n* A plataforma emprega mecanismos de proteção contra automações espúrias (como reCAPTCHA), o que restringe consultas massivas sequenciais e exige interações manuais ou assistidas por ferramentas de automação web configuradas para resolução de desafios visuais."
  },
  {
    "id": "Certidão de Quitação Eleitoral (TSE)",
    "title": "Certidão de Quitação Eleitoral (TSE)",
    "url": "https://www.tse.jus.br/servicos-eleitorais/certidoes/certidao-de-quitacao-eleitoral",
    "tipo": "Portal Governamental de Consulta e Validação Cadastral",
    "utilidade": "Emissão e validação de Certidão de Quitação Eleitoral para verificação de regularidade civil e direitos políticos de pessoas físicas",
    "descricao": "O portal de Certidão de Quitação Eleitoral do Tribunal Superior Eleitoral (TSE) é um serviço público unificado que permite a emissão e validação de documentos que atestam a regularidade do cidadão perante a Justiça Eleitoral brasileira. O sistema realiza uma varredura em tempo real nas bases de dados consolidadas para verificar se o indivíduo está em pleno gozo dos seus direitos políticos, se votou ou justificou a ausência nos pleitos passados, se atendeu a convocações para o serviço de mesário e se possui multas eleitorais ativas pendentes.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de integridade (*due diligence*), análise de antecedentes (*background checks*) civis e processos de qualificação de alvos, a ferramenta desempenha um papel crítico na validação inequívoca de identidades. Como a emissão do documento exige a concordância exata de múltiplos dados biográficos estruturados (Nome completo, CPF ou Título de Eleitor, Data de Nascimento, Nome da Mãe e Nome do Pai), ela atua como um motor de validação cruzada para confirmar se os dados de filiação e nascimento obtidos em fontes menos confiáveis são legítimos.",
    "notes": "* Se o analista inserir dados com qualquer erro de grafia, abreviação ou troca de caracteres na filiação ou data de nascimento, o sistema negará a certidão por inconsistência de dados. Esse comportamento é uma resposta analítica útil, confirmando de forma passiva que um ou mais dados coletados anteriormente estão incorretos.\n* A emissão bem-sucedida gera um código hash de validação eletrônica. Este código pode ser anexado a relatórios de inteligência para fins de preservação e auditoria da informação coletada. O procedimento de consulta é estritamente passivo em relação ao alvo (o eleitor pesquisado não recebe notificações), preservando a OPSEC do analista."
  },
  {
    "id": "ChatGPT (OpenAI)",
    "title": "ChatGPT (OpenAI)",
    "url": "https://chat.openai.com/",
    "tipo": "Modelo de Linguagem de Larga Escala (LLM) / Plataforma de Inteligência Artificial",
    "utilidade": "Processamento de linguagem natural, análise de contexto, extração de entidades (NER), sumarização de documentos e auxílio na automação de inteligência",
    "descricao": "O ChatGPT é um assistente conversacional baseado em modelos de linguagem de larga escala (LLM) desenvolvido pela OpenAI. A plataforma processa, gera e analisa grandes volumes de texto estruturado e não estruturado, permitindo a execução de tarefas complexas que envolvem tradução, programação, reconfiguração de formatos de dados e interpretação contextual de informações textuais fornecidas pelo usuário.",
    "testada": false,
    "tags": [
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Na fase de análise e processamento de dados (Inteligência), o ChatGPT atua como uma ferramenta analítica estática de suporte cognitivo. O analista pode utilizá-lo para resumir relatórios extensos de inteligência, extrair entidades-chave (como nomes, CPFs, e-mails e empresas mencionados em notícias ou vazamentos), converter logs desorganizados em tabelas estruturadas (CSV/JSON) e desenvolver scripts automatizados (Python, Bash) para otimizar a coleta de dados na rede.",
    "notes": "* Por se tratar de uma ferramenta que não realiza busca ativa na rede por padrão na consulta analítica de arquivos carregados, ela enquadra-se estritamente na fase de processamento local e inteligência.\n* **Aviso Crítico de OPSEC**: Dados confidenciais, documentos internos não públicos, nomes de alvos sigilosos ou evidências sensíveis nunca devem ser inseridos diretamente no prompt da ferramenta sem o desligamento prévio do histórico de conversas e do treinamento de dados nas configurações da conta. O envio de informações alimenta a base de dados da OpenAI e pode resultar em vazamento de escopo investigativo (*data leakage*) e quebra de sigilo das operações."
  },
  {
    "id": "Chatmind",
    "title": "Chatmind",
    "url": "https://chatmind.tech/pt",
    "tipo": "Ferramenta de Análise Visual e Processamento de Dados Baseada em IA",
    "utilidade": "Geração automatizada de mapas mentais, grafos e fluxogramas estruturados por Inteligência Artificial a partir de insumos textuais",
    "descricao": "O Chatmind é uma plataforma online baseada em inteligência artificial projetada para a criação e estruturação automatizada de mapas mentais, diagramas conceituais e fluxogramas a partir de comandos textuais ou documentos fornecidos pelo usuário. O sistema utiliza processamento de linguagem natural (PLN) para interpretar textos desorganizados ou instruções diretas, convertendo-os em estruturas visuais hierárquicas e ramificadas.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Na fase de análise e processamento de dados (Inteligência), o Chatmind serve como um utilitário cognitivo para a modelagem visual do caso. O analista pode utilizá-lo para resumir linhas do tempo complexas, estruturar a árvore de conexões de um grupo econômico a partir de um relatório de texto, ou organizar o fluxo lógico de uma investigação em um formato gráfico. Por ser um processador estático de dados fornecidos, ele agiliza a tradução de inteligência bruta em diagramas scaneáveis para posterior incorporação em relatórios ou no próprio Obsidian.",
    "notes": "* Os mapas gerados podem ser exportados em formatos de imagem ou texto estruturado, permitindo uma integração fluida com ferramentas de organização de conhecimento pessoal, como o Obsidian Canvas ou notas nativas em Markdown.\n* **Aviso Crítico de OPSEC**: Por enviar os dados fornecidos pelo usuário diretamente para processamento nos servidores proprietários da inteligência artificial, o investigador **nunca** deve inserir dados reais sensíveis de alvos (como nomes completos sob sigilo, CPFs, chaves PIX ou e-mails privados). O fornecimento dessas informações pode gerar vazamento de escopo investigativo (*data leakage*). Recomenda-se higienizar os insumos usando termos genéricos ou codinomes (ex: substituir o nome do alvo por \"Alvo 01\", \"Empresa X\") antes de submeter o prompt à IA."
  },
  {
    "id": "CheckLeaked WhatsApp",
    "title": "CheckLeaked WhatsApp",
    "url": "https://whatsapp.checkleaked.cc/pt",
    "tipo": "Ferramenta de Validação de Identificadores Digitais e Mensageria",
    "utilidade": "Validação e engenharia reversa de dados telefônicos para verificar vínculo com o aplicativo WhatsApp.",
    "descricao": "O CheckLeaked WhatsApp é uma plataforma web especializada na consulta e validação de números de telefone com foco no ecossistema do aplicativo de mensageria WhatsApp. A ferramenta analisa o identificador numérico fornecido para determinar o status da conta, verificar se há registros associados e detectar potenciais exposições ou vinculações a vazamentos públicos.",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "fonte/vazamentos-darkweb",
      "func/validacao-status",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito das investigações de fontes abertas, a ferramenta funciona como um validador tático de alvos telefônicos. Ela permite confirmar se um número de telefone está ativo na rede do WhatsApp, descobrir metadados públicos vinculados ao identificador (como a presença de contas comerciais ou fotos de perfil expostas) e mapear se aquele identificador digital consta em compilações de dados ou dumps históricos originados de vazamentos de dados na internet.",
    "notes": "* É recomendável inserir o número com o código internacional de discagem (DDI) e o código de área (DDD) correspondentes (ex: 55 para o Brasil) para garantir a correta indexação e busca no sistema.\n* Os resultados obtidos devem ser cruzados com consultas adicionais em fontes oficiais e ferramentas de sincronização de contatos para mitigar a ocorrência de falsos positivos gerados por reuso ou reciclagem de linhas telefônicas."
  },
  {
    "id": "Cobertura Celular",
    "title": "Cobertura Celular",
    "url": "http://www.coberturacelular.com.br/",
    "tipo": "Portal Web de Consulta Geoespacial e Infraestrutura de Telecomunicações",
    "utilidade": "Mapeamento geoespacial de Estações Rádio Base (ERBs), localização de torres de telefonia móvel e verificação de cobertura por operadora e tecnologia",
    "descricao": "O Cobertura Celular é uma plataforma web voltada ao mapeamento e localização de infraestruturas de telecomunicações no território brasileiro. Desenvolvido com base em dados técnicos e regulatórios públicos da Agência Nacional de Telecomunicações (Anatel), o portal permite consultar a localização exata de Estações Rádio Base (ERBs/torres celulares), identificar a proximidade de antenas por operadora (Claro, TIM, Vivo, entre outras) e verificar a disponibilidade das tecnologias suportadas (2G, 3G, 4G e 5G) a partir de endereços, bairros ou coordenadas geográficas.",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "fonte/geoespacial",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações com componentes de geolocalização (GEOINT), análise de inteligência em telecomunicações e reconstrução de eventos temporais/espaciais, a plataforma serve como ferramenta de correlação de sinal e infraestrutura. O analista pode cruzar dados de ERBs para contextualizar registros de bilhetagem/chamadas (CDR), validar se um determinado local geográfico possui cobertura real de uma operadora específica, estimar a torre mais próxima conectada a um dispositivo alvo e apoiar a análise de pontos cegos ou áreas de sombra de conectividade celular.",
    "notes": "* A busca pode ser refinada inserindo diretamente as coordenadas geográficas (latitude e longitude) para obter a distância exata em metros até a ERB mais próxima do ponto de interesse.\n* Útil para confrontar alegações de álibi ou presença em determinados locais, verificando se a região apresentava viabilidade técnica de sinal para a operadora utilizada pelo alvo no momento do fato.\n* Deve ser utilizado de forma complementar aos painéis oficiais da Anatel (Mosaico/Painéis de Dados) e ferramentas como OpenCelliD e WiGLE para triangulação de sinais sem fio."
  },
  {
    "id": "Comment Picker - Find Instagram Username by User ID",
    "title": "Comment Picker - Find Instagram Username by User ID",
    "url": "https://commentpicker.com/instagram-username.php",
    "tipo": "Ferramenta Web de Consulta e Resolução de Identificadores",
    "utilidade": "Resolução reversa de ID numérico do Instagram (UID) para obtenção do nome de usuário atualizado (username/handle)",
    "descricao": "O utilitário \"Find Instagram Username\" do Comment Picker é uma ferramenta online desenvolvida para resolver identificadores numéricos exclusivos do Instagram (User ID / UID) em seus respectivos nomes de usuário (@username). O serviço realiza consultas diretas às APIs públicas e pontos de extremidade da plataforma para retornar o *handle* atual associado a uma conta, permitindo contornar alterações frequentes de nome feitas por usuários.",
    "testada": false,
    "tags": [
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações em mídias sociais (SOCMINT), o identificador numérico (UID) de um perfil permanece imutável, mesmo quando o alvo troca reiteradamente seu nome de exibição, biografia ou @handle para despistar monitoramentos. Esta ferramenta opera como um mecanismo essencial de busca reversa (*pivoting*), permitindo que o analista localize o perfil atualizado de um investigado a partir de um ID previamente catalogado em logs, capturas de tráfego, metadados ou extrações passadas.",
    "notes": "* Útil para reestabelecer o monitoramento de alvos que alteram o @username para quebrar cadeias de custódia e vínculos com materiais de investigação antigos.\n* Pode ser complementado com a ferramenta inversa da mesma plataforma (busca de ID a partir do nome de usuário), permitindo fixar o UID estático do alvo desde o início da coleta.\n* Para contas banidas, desativadas ou configuradas com níveis extremos de restrição de privacidade, a API pode não conseguir resolver o nome, sendo necessária a validação secundária via scrapers diretos ou consultas a endpoints do GraphQL."
  },
  {
    "id": "Concessões Ferroviárias - ANTT",
    "title": "Concessões Ferroviárias - ANTT",
    "url": "https://www.gov.br/antt/pt-br/assuntos/ferrovias/concessoes-ferroviarias",
    "tipo": "Portal de Informações e Registros Públicos Governamentais",
    "utilidade": "Levantamento de dados regulatórios, contratos de concessão e infraestrutura logística do setor ferroviário brasileiro",
    "descricao": "O portal de Concessões Ferroviárias da ANTT (Agência Nacional de Transportes Terrestres) é o espaço oficial que reúne dados e documentos sobre a malha ferroviária federal outorgada à iniciativa privada. A página centraliza informações sobre os contratos de concessão vigentes, termos aditivos, prorrogações contratuais, investimentos previstos e a delimitação geográfica das malhas sob controle empresarial.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "fonte/geoespacial",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações corporativas, análise de infraestrutura crítica e inteligência patrimonial, a plataforma funciona como uma fonte primária para mapear a atuação de grandes grupos econômicos e holdings no setor de transportes. Permite ligar CNPJs de concessionárias a obrigações contratuais públicas, identificar o controle operacional de linhas logísticas estratégicas e levantar dados de ativos fixos e operacionais vinculados a essas empresas.",
    "notes": "* A plataforma oferece acesso a cópias digitalizadas na íntegra de contratos históricos e termos aditivos, o que permite extrair assinaturas, nomes de representantes legais e testemunhas corporativas da época de firmamento dos atos.\n* É ideal para complementar análises de redes de suprimentos (Supply Chain Intelligence) e cruzamento de dados patrimoniais complexos, ajudando a identificar quais corporações detêm o controle de rotas de escoamento de commodities no território nacional."
  },
  {
    "id": "Conjunto de Dados Abertos (TCE-SP)",
    "title": "Conjunto de Dados Abertos (TCE-SP)",
    "url": "https://transparencia.tce.sp.gov.br/conjunto-de-dados",
    "tipo": "Repositório de Registros Públicos e Dados Massivos Governamentais",
    "utilidade": "Extração massiva e download de bases de dados abertas sobre fiscalização financeira, licitações e contratos municipais de São Paulo",
    "descricao": "A página de \"Conjunto de Dados\" é o repositório centralizado de dados abertos do Tribunal de Contas do Estado de São Paulo (TCE-SP). Este canal disponibiliza para download integral arquivos estruturados (em formatos como CSV e XML) contendo históricos completos de despesas, receitas, licitações, contratos, aditivos, repasses ao terceiro setor e o quadro de pessoal dos órgãos e municípios sob a jurisdição fiscalizatória do tribunal.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações complexas de fontes abertas, inteligência patrimonial, Due Diligence e análise de fraudes, esta URL permite o avanço do analista para a fase de mineração massiva de dados. Em vez de realizar buscas pontuais e manuais por fornecedor ou prefeitura, o investigador pode baixar bases de dados completas de anos fiscais inteiros. Isso viabiliza o cruzamento de grandes volumes de informações em ferramentas próprias para rastrear padrões de contratação, consórcios recorrentes e dependências econômicas de empresas frente ao erário de 644 municípios paulistas.",
    "notes": "* Os arquivos baixados contêm registros massivos (muitas vezes na escala de milhões de linhas). Devido ao volume, o analista deve evitar o uso de editores de planilhas convencionais como o Microsoft Excel para abrir os arquivos brutos, priorizando linguagens de programação (como Python com Pandas) ou sistemas de gerenciamento de banco de dados (como SQLite ou PostgreSQL) para realizar consultas de auditoria estática locais (`func/forense-local`).\n* Esta base permite ao investigador construir grafos de conexões offline em seu próprio computador, o que garante uma excelente OPSEC, pois elimina a necessidade de fazer requisições de rede contínuas para servidores externos monitorados durante a fase de análise."
  },
  {
    "id": "Consulta ao Registro Aeronáutico Brasileiro (RAB) - ANAC",
    "title": "Consulta ao Registro Aeronáutico Brasileiro (RAB) - ANAC",
    "url": "https://sistemas.anac.gov.br/aeronaves/cons_rab.asp",
    "tipo": "Portal de Consulta em Base de Dados Pública Governamental",
    "utilidade": "Consulta e verificação de informações registrais, propriedade, operação e situação de aeronaves civis brasileiras.",
    "descricao": "O sistema de consulta ao Registro Aeronáutico Brasileiro (RAB), mantido pela Agência Nacional de Aviação Civil (ANAC), é uma plataforma pública oficial que centraliza os dados cadastrais, técnicos e jurídicos de todas as aeronaves civis registradas no território nacional. O portal disponibiliza informações que abrangem desde as marcas de matrícula (prefixo), fabricante, modelo, ano de fabricação e número de série, até a situação de aeronavegabilidade e o histórico de gravames associados ao ativo.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações financeiras (FinINT), rastreamento patrimonial, auditorias de conformidade corporativa e identificação de redes de influência, o portal do RAB serve como uma fonte primária de alta fidelidade. Ele permite ao analista identificar ativos de alto valor vinculados diretamente a pessoas físicas ou jurídicas, revelando a identidade de proprietários e operadores. Essa capacidade viabiliza o mapeamento de conexões operacionais e societárias que frequentemente não constam em registros comerciais tradicionais, além de evidenciar restrições judiciais ou ônus sobre os bens móveis.",
    "notes": "* O ponto de entrada padrão da pesquisa baseia-se na marca de matrícula da aeronave (prefixo), contudo, os dados obtidos (como CPF/CNPJ de proprietários e operadores) permitem realizar o *pivoting* para outras bases governamentais e comerciais.\n* A consulta apresenta o status do Certificado de Aeronavegabilidade (CA) e do Certificado de Verificação de Aeronavegabilidade (CVA), informações fundamentais para que o analista verifique se o ativo está operando de maneira regular ou se há indícios de inatividade ou irregularidade técnica."
  },
  {
    "id": "Consulta de CCMEI - Receita Federal",
    "title": "Consulta de CCMEI - Receita Federal",
    "url": "https://mei.receita.economia.gov.br/certificado/consulta",
    "tipo": "Portal de Consulta Pública Governamental",
    "utilidade": "Emissão e validação do Certificado da Condição de Microempreendedor Individual (CCMEI) para verificação de dados cadastrais e vínculos societários.",
    "descricao": "O sistema de Emissão de Certificado do MEI (CCMEI) é uma plataforma oficial do governo federal brasileiro, gerida pela Secretaria da Receita Federal. O portal permite a consulta, geração e validação do documento que comprova a existência jurídica do Microempreendedor Individual, consolidando em um único relatório dados do negócio e do seu titular único.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações corporativas, inteligência patrimonial e localização de alvos, esta ferramenta é um recurso valioso para realizar o *pivoting* (cruzamento de dados) entre pessoas físicas e jurídicas. Como a Razão Social do MEI é composta obrigatoriamente pelo nome completo e CPF do titular, a consulta permite descobrir de forma inequívoca o CNPJ vinculado a um alvo, ou extrair os dados civis e de localização de um indivíduo a partir do CNPJ da empresa.",
    "notes": "* O documento gerado (CCMEI) possui o mesmo valor de um contrato social, fornecendo dados frequentemente omitidos em consultas básicas de CNPJ, como o endereço residencial/comercial completo declarado e o telefone de contato registrado pelo empreendedor.\n* Devido ao fato de muitos microempreendedores utilizarem suas próprias residências como sede fiscal, a ferramenta é altamente eficaz para mapear o endereço físico real do alvo investigado.\n* A plataforma pode apresentar mecanismos de validação automatizada (CAPTCHA), o que requer atenção em fluxos que necessitem de automação ou raspagem de dados em larga escala."
  },
  {
    "id": "Consulta de CNPJ - Secretaria da Receita Federal do Brasil",
    "title": "Consulta de CNPJ - Secretaria da Receita Federal do Brasil",
    "url": "https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp",
    "tipo": "Portal de Consulta em Base de Dados Pública Governamental",
    "utilidade": "Consulta cadastral, situação jurídica e Quadro de Sócios e Administradores (QSA) de pessoas jurídicas (CNPJ) na Receita Federal do Brasil.",
    "descricao": "O serviço de Emissão de Comprovante de Inscrição e de Situação Cadastral é a plataforma pública e oficial mantida pela Secretaria da Receita Federal do Brasil (RFB) para a verificação de dados de pessoas jurídicas. O sistema centraliza e disponibiliza em tempo real as informações cadastrais de qualquer entidade registrada sob o Cadastro Nacional da Pessoa Jurídica (CNPJ), incluindo matrizes, filiais, órgãos públicos e entidades filantrópicas.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito da inteligência corporativa, inteligência financeira (FinINT), due diligence e análise de risco, este portal constitui a principal fonte primária para a validação da existência legal e do status operacional de empresas no Brasil. A ferramenta possibilita ao analista extrair a data de abertura, a natureza jurídica, o endereço físico declarado, os códigos de atividade econômica principal e secundária (CNAE) e a situação cadastral (ativa, inapta, suspensa ou baixada). Além disso, oferece acesso direto ao Quadro de Sócios e Administradores (QSA), permitindo mapear o controle societário, identificar beneficiários finais e descobrir vínculos entre diferentes empresas por meio do cruzamento de nomes de sócios.",
    "notes": "* O parâmetro de entrada exigido para a pesquisa é o número do CNPJ (14 dígitos). O portal adota mecanismos de proteção periférica (como CAPTCHA/hCaptcha) para mitigar a raspagem massiva automatizada direta, demandando resolução manual ou o uso de solucionadores de CAPTCHA em automações avançadas.\n* Após a emissão do comprovante principal, é indispensável clicar no botão \"Consultar QSA\" posicionado na base da página para visualizar a composição societária e a qualificação dos administradores, cujos nomes e CPFs parciais servem como pontos de partida (*pivoting*) para investigações focadas em pessoas físicas."
  },
  {
    "id": "Consulta de CPF - Secretaria da Receita Federal do Brasil",
    "title": "Consulta de CPF - Secretaria da Receita Federal do Brasil",
    "url": "https://servicos.receita.fazenda.gov.br/servicos/cpf/consultasituacao/consultapublica.asp",
    "tipo": "Portal de Consulta em Base de Dados Pública Governamental",
    "utilidade": "Verificação de regularidade cadastral, confirmação de nome completo e validação da data de nascimento de pessoas físicas (CPF) na Receita Federal do Brasil.",
    "descricao": "O serviço de Consulta Pública de Situação Cadastral no CPF é a plataforma oficial gerida pela Secretaria da Receita Federal do Brasil (RFB). O sistema permite a emissão do comprovante que atesta a situação de inscrição de uma pessoa física no Cadastro de Pessoas Físicas (CPF), refletindo em tempo real os assentamentos administrativos do órgão federal.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de fraudes, checagem de antecedentes (*background check*), processos de *due diligence* de pessoas físicas e qualificação de alvos, este portal é uma fonte primária fundamental para mitigar riscos de homonímia e falsidade ideológica. A partir de um CPF e de uma data de nascimento presumida, a ferramenta retorna o nome completo do titular cadastrado na base do Estado e a sua situação cadastral exata (Regular, Suspensa, Cancelada, Pendente de Regularização, Titular Falecido ou Nula), permitindo ao analista validar a integridade legal da identidade do investigado.",
    "notes": "* A execução da consulta exige obrigatoriamente a inserção combinada do número do CPF (11 dígitos) e da data de nascimento correta do alvo. Divergências na data de nascimento impedem o retorno dos dados, servindo como um mecanismo implícito de validação de dados prévios.\n* O site emprega proteções automatizadas contra raspagem em massa (mecanismos de CAPTCHA). Para investigações pontuais, a resolução é manual; para coletas massivas estruturadas via scripts de terminal, faz-se necessária a integração de APIs de terceiros especializadas na quebra desses desafios visuais."
  },
  {
    "id": "Consulta de Embarcações - ANTAQ",
    "title": "Consulta de Embarcações - ANTAQ",
    "url": "https://web3.antaq.gov.br/SAMA/Embarcacao/Consultar.aspx",
    "tipo": "Portal de Consulta Pública Governamental",
    "utilidade": "Consulta e validação cadastral de embarcações, frotas, proprietários e operadores regulados pela ANTAQ no setor de transporte aquaviário brasileiro.",
    "descricao": "O sistema de Consulta de Embarcações faz parte do ecossistema SAMA da ANTAQ (Agência Nacional de Transportes Aquaviários). A plataforma disponibiliza dados técnicos, operacionais e de propriedade de navios, barcaças, empurradores e demais embarcações autorizadas a operar em águas jurisdicionais brasileiras, englobando a navegação de apoio portuário, apoio marítimo, cabotagem, interior e longo curso.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de inteligência patrimonial, rastreamento de frotas comerciais e auditoria de empresas de logística ou mineração, este portal serve como uma fonte primária indispensável. Ele viabiliza o *pivoting* de um ativo móvel (embarcação) para o seu operador ou armador legal, permitindo mapear a capacidade logística real de um grupo econômico e identificar a ocultação de patrimônio de alto valor por meio de subsidiárias ou empresas de fachada no setor de navegação.",
    "notes": "* A ferramenta permite buscas flexíveis por múltiplos parâmetros, como o nome parcial da embarcação, tipo de navegação autorizada ou nome da empresa proprietária, o que otimiza a triagem quando não se tem dados exatos do alvo.\n* Os dados obtidos nesta base (como o Nome da Embarcação e o número IMO/MMSI, quando disponível) servem como dados de entrada ideais para integração com ferramentas de GEOINT marítimo e rastreamento de sinais AIS em tempo real (ex: MarineTraffic, VesselFinder).\n* Devido à infraestrutura legada da página web, automações de raspagem massiva podem enfrentar instabilidades de sessão ou exigir o tratamento de paginações e formulários dinâmicos."
  },
  {
    "id": "Consulta de Frota Geral - ANTAQ",
    "title": "Consulta de Frota Geral - ANTAQ",
    "url": "https://web3.antaq.gov.br/Portal/Frota/ConsultarFrotaGeral.aspx",
    "tipo": "Portal de Consulta Pública Governamental",
    "utilidade": "Consulta e consolidação de frotas operacionais e embarcações vinculadas a Empresas Brasileiras de Navegação (EBN) homologadas pela ANTAQ.",
    "descricao": "O sistema de Consulta de Frota Geral é uma ferramenta pública mantida pela ANTAQ (Agência Nacional de Transportes Aquaviários) que permite visualizar o inventário completo de embarcações associadas às empresas autorizadas a operar no transporte aquaviário brasileiro. A plataforma consolida dados de frotas ativas distribuídas por modalidades de navegação, como apoio marítimo, apoio portuário, cabotagem e interior.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Para investigações de inteligência corporativa, análise de concorrência e rastreamento patrimonial de grandes grupos econômicos, esta plataforma atua como um indexador reverso de ativos móveis. Em vez de buscar uma embarcação isolada, o analista pode inspecionar toda a estrutura de frota declarada por uma determinada razão social (EBN), revelando a real capacidade operacional, ramificações logísticas e indícios de ocultação de bens ou subdeclaração de frotas através de subsidiárias.",
    "notes": "* A consulta gera listagens completas que facilitam a auditoria em massa de ativos navais associados a um único CNPJ principal ou grupo econômico.\n* Os identificadores obtidos nesta plataforma podem ser cruzados com sistemas globais de telemetria marítima (como MarineTraffic ou VesselFinder) para geolocalizar a posição física em tempo real das embarcações mapeadas na investigação.\n* Por ser um sistema hospedado em infraestrutura governamental legada, requisições automatizadas muito agressivas (scripts de raspagem massiva) podem causar quedas de conexão ou acionar proteções perimetrais básicas do servidor da agência."
  },
  {
    "id": "Consulta de Inscritos - CFO (Conselho Federal de Odontologia)",
    "title": "Consulta de Inscritos - CFO (Conselho Federal de Odontologia)",
    "url": "https://website.cfo.org.br/consulta-inscritos",
    "tipo": "Portal de Consulta Pública de Conselho Profissional",
    "utilidade": "Consulta, validação cadastral e verificação de regularidade de profissionais e entidades da área de odontologia no Brasil.",
    "descricao": "O sistema de Consulta de Inscritos é a plataforma oficial unificada do Conselho Federal de Odontologia (CFO). O portal permite a pesquisa de profissionais (cirurgiões-dentistas, técnicos e auxiliares) e de pessoas jurídicas (clínicas e consultórios registrados) em situação ativa ou inativa perante os Conselhos Regionais de Odontologia (CRO) de todos os estados do território nacional.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de Background Checks, investigações de fraudes na área da saúde, due diligence corporativa e localização de alvos, esta ferramenta atua como um indexador de credenciais profissionais. Ela permite validar a real identidade e a legitimidade de indivíduos que se autodeclaram profissionais da saúde, rastrear o estado (UF) de atuação principal de um alvo e identificar vínculos societários ou responsabilidade técnica de pessoas físicas em empresas do setor odontológico.",
    "notes": "* A busca permite a utilização de filtros fonéticos ou parciais para nomes, o que facilita a identificação do alvo mesmo quando não se dispõe da grafia exata ou do número do documento de identidade.\n* Os resultados costumam indicar a especialidade do profissional (ex: Ortodontia, Implantodontia), o que enriquece o perfilamento comportamental e comercial do investigado.\n* Por implementar rotinas de proteção contra consultas massivas automatizadas (como desafios de CAPTCHA), a extração de dados em larga escala exige técnicas avançadas de bypass ou emulação humana, sendo ideal para consultas pontuais e cirúrgicas."
  },
  {
    "id": "Consulta de Médicos (RMS) - Programa Mais Médicos",
    "title": "Consulta de Médicos (RMS) - Programa Mais Médicos",
    "url": "https://maismedicos.saude.gov.br/new/web/app.php/maismedicos/rms",
    "tipo": "Portal de Consulta Pública Governamental",
    "utilidade": "Consulta de registro, verificação cadastral e validação de médicos vinculados ao Programa Mais Médicos, especificamente portadores de Registro do Ministério da Saúde (RMS).",
    "descricao": "O sistema de busca de Registro do Ministério da Saúde (RMS) é uma aplicação web integrada ao SGP (Sistema de Gestão de Programas) do Programa Mais Médicos para o Brasil. A plataforma destina-se a fornecer de maneira pública e unificada o status de regularidade e a habilitação legal de profissionais (notadamente médicos intercambistas, brasileiros formados no exterior ou estrangeiros) autorizados a exercer a medicina de forma restrita e direcionada dentro do escopo do programa federal.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de fraudes no setor de saúde, *background check* profissional, auditorias de conformidade em municípios e validação de documentos, esta ferramenta atua como um validador de credenciais essenciais. Como muitos médicos participantes do programa não possuem registro ativo nos conselhos regionais de medicina tradicionais (CRM) por força das regras de intercâmbio, esta base cobre um ponto cego crítico, permitindo ao analista confirmar se um indivíduo possui de fato autorização legal para realizar prescrições, assinar laudos e atuar em unidades do SUS.",
    "notes": "* O sistema possibilita buscas parciais por nome, o que otimiza a triagem quando não se possui a grafia precisa ou o número identificador do RMS do alvo.\n* Os dados obtidos (como nome completo do médico e número do RMS) servem de insumo ideal para a realização de cruzamentos avançados de dados com o Cadastro Nacional de Estabelecimentos de Saúde (CNES) e publicações no Diário Oficial da União (DOU), viabilizando o mapeamento preciso da cidade e da unidade básica de saúde (UBS) de atuação do alvo.\n* Por estar hospedado na infraestrutura do Ministério da Saúde, o servidor pode acionar proteções perimetrais básicas em caso de requisições de raspagem (Scraping) automatizadas muito intensas, recomendando-se consultas pontuais e cirúrgicas."
  },
  {
    "id": "Consulta de Profissionais - CNES/DATASUS",
    "title": "Consulta de Profissionais - CNES/DATASUS",
    "url": "https://cnes.datasus.gov.br/pages/profissionais/consulta.jsp",
    "tipo": "Portal de Consulta em Base de Dados Pública Governamental",
    "utilidade": "Validação de identidade, especialidades e mapeamento de vínculos institucionais de profissionais de saúde no Brasil.",
    "descricao": "O sistema de Consulta de Profissionais do CNES (Cadastro Nacional de Estabelecimentos de Saúde), gerenciado pelo DATASUS (Departamento de Informática do Sistema Único de Saúde), é uma plataforma pública oficial instituída pelo Ministério da Saúde do Brasil. O portal centraliza e disponibiliza informações cadastrais detalhadas sobre todos os indivíduos que atuam formalmente no setor de saúde nacional, abrangendo registros de médicos, enfermeiros, psicólogos, fisioterapeutas, técnicos e demais colaboradores vinculados a instituições públicas, filantrópicas ou privadas.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações corporativas, análise de vínculos, auditoria patrimonial e checagem de antecedentes (*background check*), o portal atua como uma fonte primária de altíssima confiabilidade técnica e jurídica. Ele permite ao analista confirmar a existência civil de um indivíduo, rastrear sua alocação geográfica institucional, identificar redes de prestação de serviços, mensurar cargas horárias e constatar a regularidade cadastral junto a conselhos profissionais de classe. É um recurso essencial para a triangulação de dados biográficos de pessoas físicas e para a reconstrução de históricos funcionais.",
    "notes": "* As pesquisas podem ser iniciadas a partir de múltiplos parâmetros isolados ou combinados, incluindo o nome completo do profissional, CPF, número do Cartão Nacional de Saúde (CNS) ou número do registro no conselho regional, viabilizando processos eficientes de *pivoting*.\n* Devido ao fato de as atualizações na base do CNES dependerem do envio constante de relatórios por parte dos estabelecimentos empregadores, a ferramenta é ideal para estruturar linhas do tempo profissionais históricas e mapear o histórico de vínculos empregatícios do alvo investigado."
  },
  {
    "id": "Consulta de Profissionais - CONFEA",
    "title": "Consulta de Profissionais - CONFEA",
    "url": "https://consultaprofissional.confea.org.br/",
    "tipo": "Portal de Consulta Pública de Conselho Profissional",
    "utilidade": "Consulta unificada de regularidade, títulos profissionais e registros de engenheiros, agrônomos, geólogos e geógrafos no Brasil.",
    "descricao": "O portal de Consulta Profissional do CONFEA (Conselho Federal de Engenharia e Agronomia) é a plataforma centralizada que integra as bases de dados de todos os Conselhos Regionais (CREA) do território nacional. O sistema permite pesquisar e validar publicamente o registro de profissionais das áreas de engenharia, agronomia, geologia, geografia e meteorologia, além de tecnólogos e técnicos vinculados.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações patrimoniais, auditorias de obras públicas, repressão a crimes ambientais ou corporativos e *background check* de especialistas, este portal funciona como um validador de identidade técnica. A consulta permite confirmar se um indivíduo possui habilitação legal para assinar laudos, coordenar projetos de infraestrutura ou atuar como Responsável Técnico (RT). Além disso, ajuda a rastrear a dispersão geográfica de um alvo através do CREA de origem e de vistos regionais secundários.",
    "notes": "* O sistema possibilita buscas parciais por nome, o que facilita o cruzamento de dados quando não se tem a grafia exata ou o documento de identidade (CPF) do investigado.\n* Ao identificar o número do CREA e o estado (UF) de origem do profissional na busca centralizada do CONFEA, o analista pode realizar um desdobramento (*pivoting*) avançado acessando diretamente o site do CREA regional específico (ex: CREA-SP, CREA-RJ). Os portais regionais frequentemente expõem dados adicionais, como o histórico de ARTs (Anotações de Responsabilidade Técnica), vinculando diretamente o profissional a obras, contratos públicos e empresas específicas.\n* A plataforma possui defesas perimetrais para mitigar abusos e extrações massivas automatizadas, comumente adotando desafios de CAPTCHA, sendo recomendada para consultas pontuais dentro do fluxo de análise."
  },
  {
    "id": "Consulta de Protesto - CENPROT-SP",
    "title": "Consulta de Protesto - CENPROT-SP",
    "url": "https://protestosp.com.br/consulta-de-protesto",
    "tipo": "Portal de Consulta Pública e Registros Notariais",
    "utilidade": "Consulta de existência de protestos de títulos em cartórios do Estado de São Paulo para verificação de inadimplência, passivos e saúde financeira de pessoas físicas e jurídicas.",
    "descricao": "A Consulta de Protesto é uma ferramenta oficial disponibilizada pela Central de Serviços Eletrônicos Compartilhados dos Cartórios de Protesto do Estado de São Paulo (CENPROT-SP). A plataforma permite verificar, de forma centralizada e em tempo real, se um determinado CPF ou CNPJ possui títulos inadimplentes protestados em qualquer um dos Cartórios de Protesto de Letras e Títulos do estado.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações financeiras, inteligência patrimonial, *due diligence* corporativa e *background check*, esta ferramenta é fundamental para avaliar a idoneidade, o risco de crédito e a saúde financeira de um alvo. A consulta permite identificar se o investigado possui dívidas ativas formalizadas em cartório, o que serve como um forte indicador de insolvência, litígios comerciais ou tentativas de ocultação de passivos antes da execução de atos jurídicos.",
    "notes": ""
  },
  {
    "id": "Consulta de Restituição IRPF - Receita Federal",
    "title": "Consulta de Restituição IRPF - Receita Federal",
    "url": "https://www.restituicao.receita.fazenda.gov.br/#/",
    "tipo": "Portal de Consulta Pública Governamental",
    "utilidade": "Consulta da situação de restituição do Imposto de Renda de Pessoa Física (IRPF) e status de processamento da declaração anual.",
    "descricao": "O sistema de Consulta à Restituição é uma plataforma oficial disponibilizada pela Secretaria da Receita Federal do Brasil. O portal permite a qualquer cidadão verificar o status de processamento da Declaração do Imposto de Renda da Pessoa Física (DIRPF) de um determinado ano-calendário, informando se a restituição já foi paga, se está na fila de espera, se foi enviada para o banco ou se apresenta pendências (malha fiscal).",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de fraudes, inteligência financeira, *due diligence* e *background check* de pessoas físicas, esta ferramenta atua como um validador de conformidade fiscal e atividade civil. A consulta permite inferir a saúde financeira e a regularidade do alvo perante o fisco, confirmar indiretamente o envio de declarações de bens e rendimentos em anos específicos e identificar se o indivíduo possui créditos a receber da União, gerando insumos sobre fluxos financeiros legítimos.",
    "notes": "* A execução da consulta exige três parâmetros obrigatórios e exatos: o número do CPF, a Data de Nascimento e o Ano de Exercício da declaração desejada. Isso requer uma etapa prévia de coleta de dados biográficos básicos (*footprinting*).\n* O resultado da consulta fornece informações específicas como o status (\"Paga\", \"Em fila de restituição\", \"Enviada para o banco\" ou \"Com pendências\"). Caso conste \"Com pendências\", o analista obtém um forte indicativo de que o alvo caiu na \"Malha Fina\", o que sugere inconsistências patrimoniais ou documentais que podem ser exploradas na investigação.\n* O sistema conta com desafios visuais de segurança (como o reCAPTCHA) para coibir o abuso de requisições, o que restringe consultas automatizadas sequenciais em larga escala e torna a plataforma ideal para análises pontuais e cirúrgicas."
  },
  {
    "id": "Consulta Número - ABR Telecom",
    "title": "Consulta Número - ABR Telecom",
    "url": "https://consultanumero.abrtelecom.com.br/",
    "tipo": "Portal de Consulta Pública / Registro de Telecomunicações",
    "utilidade": "Consulta de operadora de telefonia (fixa ou móvel) e verificação do histórico de portabilidade numérica no Brasil.",
    "descricao": "O portal Consulta Número é uma plataforma oficial mantida pela ABR Telecom (Associação Brasileira de Recursos em Telecomunicações). A entidade é a administradora judicialmente responsável pela portabilidade numérica no Brasil. O site permite que qualquer usuário insira um número de telefone (com DDD) para identificar a qual operadora de telecomunicações aquele terminal pertence no momento exato da consulta, além de informar se o número passou por portabilidade recente.",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações digitais, cibercrime e inteligência de alvos, a identificação precisa da operadora de telefonia é um passo crucial de *footprinting* e preparação. A ferramenta mitiga erros de atribuição técnica, permitindo ao analista discernir se o número investigado é um terminal fixo ou móvel, determinar a operadora de origem e a operadora atual (útil para direcionar ordens judiciais de quebra de sigilo ou pedidos de dados cadastrais) e monitorar se o alvo trocou de rede prestadora de serviço, o que pode indicar tentativas de evasão ou descarte de linhas.",
    "notes": "* A consulta exige a digitação do número com o código de área (DDD) sem formatação complexa (apenas números) e exige a resolução manual de um mecanismo de segurança visual (CAPTCHA / reCAPTCHA) para exibir o resultado.\n* A resposta fornecida traz dados limpos: a Razão Social ou Nome Fantasia da Operadora (ex: Telefônica Brasil/Vivo, Claro, TIM) e o tipo de serviço (SMP para móvel, STFC para fixo), servindo como uma excelente camada de validação antes da execução de requisições HLR (Home Location Register) ativas.\n* Devido à barreira do CAPTCHA, a automação para raspagem massiva de dados (Scraping) exige o emprego de resolvedores de imagem automatizados (solvers), sendo mais indicada para validações cirúrgicas ao longo do ciclo de inteligência."
  },
  {
    "id": "Consulta Pública RNTRC - ANTT",
    "title": "Consulta Pública RNTRC - ANTT",
    "url": "https://consultapublica.antt.gov.br/Site/ConsultaRNTRC.aspx",
    "tipo": "Portal de Consulta Pública Governamental",
    "utilidade": "Consulta de regularidade, dados cadastrais e composição de frota de transportadores rodoviários de carga (autônomos, empresas e cooperativas) no Brasil.",
    "descricao": "O sistema de Consulta Pública do RNTRC (Registro Nacional de Transportadores Rodoviários de Cargas) é uma plataforma oficial mantida pela ANTT (Agência Nacional de Transportes Terrestres). O portal permite verificar a regularidade jurídica e operacional de Transportadores Autônomos de Cargas (TAC), Empresas de Transporte Rodoviário de Cargas (ETC) e Cooperativas (CTC) que operam no território nacional.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "alvo/veiculo",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações de fraudes logísticas, rastreamento patrimonial, auditorias de cadeia de suprimentos (*supply chain due diligence*) e repressão ao roubo de cargas, este portal é uma fonte analítica de extrema relevância. A ferramenta viabiliza o mapeamento reverso de ativos, permitindo ao analista descobrir a frota total de veículos (com suas respectivas placas) registrada sob o CNPJ de uma transportadora ou o CPF de um motorista autônomo, além de validar se a infraestrutura declarada por uma empresa guarda proporção com sua realidade operacional.",
    "notes": "* A plataforma oferece três modalidades distintas de consulta na mesma interface: \"Por Transportador\" (CPF/CNPJ ou número do RNTRC), \"Por Localidade\" (mapeamento geográfico de transportadores por Estado e Município) e \"Por Veículo\" (busca direta pela placa).\n* As listagens de frota obtidas no portal fornecem as placas de todos os cavalos mecânicos e reboques atrelados ao alvo. Essas placas constituem excelentes dados de entrada (*inputs*) para cruzamento com sistemas de multas estaduais, registros de gravames ou para alimentação de ferramentas de monitoramento baseadas em câmeras de leitura de caracteres (LPR/OCR).\n* Devido ao uso de formulários dinâmicos e sessões estruturadas, scripts de raspagem massiva automatizada (Scraping) podem necessitar do tratamento de *ViewStates* e da resolução de mecanismos visuais de segurança (CAPTCHA) frequentemente implementados pela agência para mitigar abusos de tráfego."
  },
  {
    "id": "ConsultaOperadora.com.br",
    "title": "ConsultaOperadora.com.br",
    "url": "http://consultaoperadora.com.br/",
    "tipo": "Portal Web de Utilidade Pública / Consulta Telefônica",
    "utilidade": "Identificação da operadora de telefonia (móvel ou fixa) e verificação do status de portabilidade de terminais telefônicos no Brasil.",
    "descricao": "O ConsultaOperadora.com.br é um serviço web independente estruturado para identificar de forma rápida a operadora prestadora de serviços de telecomunicação vinculada a qualquer número de telefone brasileiro. A ferramenta processa consultas de telefonia fixa e móvel, levando em consideração as atualizações constantes decorrentes da portabilidade numérica no país.",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações digitais, análise de vínculos e *footprinting* inicial de alvos, esta plataforma atua como um recurso de triagem técnica. Ao mapear a operadora real por trás de um terminal telefônico, o analista consegue identificar a infraestrutura de telecomunicações associada ao investigado, o que é de suma importância para subsidiar futuras representações de quebra de sigilo de dados ou para direcionar ações de validação ativa (como consultas HLR).",
    "notes": "* O portal apresenta uma interface simplificada que frequentemente exige menos desafios automatizados de segurança (como CAPTCHAs complexos) do que os portais institucionais regulatórios, o que torna as consultas manuais pontuais mais céleres.\n* Pelo fato de ser uma plataforma gerida de forma independente, recomenda-se que dados sensíveis que exijam valor probatório estrito sejam posteriormente confirmados na base oficial da ABR Telecom para mitigar eventuais delays sazonais de sincronização de rede.\n* Os resultados obtidos (Operadora e Tipo de Linha) servem de insumo para otimizar o uso de outras ferramentas de inteligência, evitando disparos desnecessários de scripts de rastreamento em operadoras incorretas."
  },
  {
    "id": "Consultas de Certidão PGFN/RFB (Pessoa Física)",
    "title": "Consultas de Certidão PGFN/RFB (Pessoa Física)",
    "url": "https://solucoes.receita.fazenda.gov.br/Servicos/certidaointernet/PF/EmitirPGFN",
    "tipo": "Portal Governamental de Consulta de Regularidade Fiscal",
    "utilidade": "Emissão de Certidão Negativa de Débitos (CND) relativos a Créditos Tributários Federais e à Dívida Ativa da União para Pessoas Físicas",
    "descricao": "Este sistema oficial da Secretaria da Receita Federal do Brasil (RFB) em conjunto com a Procuradoria-Geral da Fazenda Nacional (PGFN) permite a emissão da certidão conjunta de débitos federais para pessoas físicas. O serviço realiza uma varredura em tempo real nas bases de dados da União para verificar a existência de pendências de tributos administrados pela RFB e de débitos inscritos em Dívida Ativa da União sob a gestão da PGFN.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações patrimoniais, análise de antecedentes (*background checks*) e processos de *due diligence* de pessoas físicas, a ferramenta permite atestar a saúde financeira e a regularidade fiscal do indivíduo. A emissão bem-sucedida ou a rejeição da certidão serve como um indicativo técnico de alta confiabilidade sobre a existência de execuções fiscais, insolvência e litígios financeiros volumosos contra o Estado.",
    "notes": "* Quando o alvo possui pendências financeiras ou cadastrais ativas na União, o sistema bloqueia a emissão da Certidão Negativa (CND) e emite um aviso informando que existem divergências consultáveis no portal e-CAC. Esse comportamento atua como um forte sinalizador analítico de passivo fiscal.\n* A consulta exige apenas a inserção do número de CPF válido e a resolução de um desafio visual (*CAPTCHA*). Por se tratar de uma consulta em banco de dados público indexado, o alvo não recebe notificações sobre a pesquisa, o que preserva a OPSEC do investigador em relação ao investigado. No entanto, por se tratar de um site governamental estruturado, o endereço IP do analista é registrado nos logs de tráfego do servidor da Receita Federal, recomendando-se o uso de VPN ou infraestrutura anonimizada."
  },
  {
    "id": "Cover Your Tracks - EFF",
    "title": "Cover Your Tracks - EFF",
    "url": "https://coveryourtracks.eff.org/",
    "tipo": "Plataforma Web de Diagnóstico de Privacidade e OPSEC",
    "utilidade": "Teste de browser fingerprinting e diagnóstico de rastreamento web para validação da segurança e anonimato do navegador do investigador.",
    "descricao": "O Cover Your Tracks (anteriormente conhecido como Panopticlick) é uma ferramenta de segurança e privacidade digital desenvolvida e mantida pela Electronic Frontier Foundation (EFF). A plataforma realiza uma simulação de rastreamento em tempo real para analisar a fundo a configuração do navegador do usuário, medindo o nível de proteção contra rastreadores invisíveis, anúncios invasivos e, principalmente, quantificando a singularidade da impressão digital do navegador (*browser fingerprinting*).",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de inteligência de fontes abertas, a ferramenta é indispensável para a fase de preparação técnica e mitigação de riscos (OPSEC). Antes de iniciar uma investigação ativa ou interagir com infraestruturas controladas por alvos, o analista deve garantir que seu ambiente de navegação não vaze dados comportamentais ou de hardware que permitam sua identificação unívoca. O Cover Your Tracks valida se mecanismos de mascaramento (como extensões de privacidade, VPNs e navegadores especializados) estão efetivamente ocultando traços de navegação ou se a combinação de cabeçalhos HTTP, resoluções de tela e fontes do sistema criam uma assinatura digital excessivamente única e identificável.",
    "notes": "* Ao rodar o teste, o sistema classifica o navegador em três métricas cruciais: bloqueio de anúncios rastreadores, bloqueio de rastreadores invisíveis (*trackers*) e proteção contra *fingerprinting*. O analista deve buscar o status de proteção máxima e um índice baixo de singularidade de bits.\n* Se o resultado indicar que o navegador possui uma assinatura \"única entre centenas de milhares\", o analista deve ajustar sua OPSEC, preferencialmente utilizando navegadores focados em resistência nativa a técnicas de fingerprinting (como Mullvad Browser ou Brave), que padronizam essas respostas para fundir o tráfego do analista com o de uma grande massa de usuários.\n* A ferramenta deve ser integrada como um checklist dinâmico padrão antes do início de qualquer operação de infiltração digital (*sock puppets*), varreduras em fóruns ou navegação em ambientes hostis na web."
  },
  {
    "id": "Craiyon",
    "title": "Craiyon",
    "url": "https://www.craiyon.com/",
    "tipo": "Gerador de Imagens Baseado em Inteligência Artificial (Text-to-Image)",
    "utilidade": "Geração de imagens sintéticas por inteligência artificial para apoio na criação de elementos visuais de personas (sock puppets) e cenários operacionais.",
    "descricao": "O Craiyon (anteriormente conhecido como DALL-E Mini) é um modelo de inteligência artificial generativa focado na conversão de texto em imagem (text-to-image). A plataforma processa comandos textuais descritivos (prompts) inseridos pelo usuário para renderizar e fornecer conjuntos de imagens inéditas e sintéticas em diversos estilos visuais, como fotografias, ilustrações e arte digital.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de operações de inteligência cibernética e ações baseadas em HUMINT (Human Intelligence) digital, esta ferramenta atua como um recurso estratégico de suporte à OPSEC na fase de preparação do ambiente de investigação. O portal permite gerar avatares conceituais, logotipos, fotografias de objetos específicos ou imagens de fundo contextualizadas para preencher perfis dissimulados (*sock puppets*). Como o conteúdo gerado pela IA é inteiramente inédito, as imagens criadas não possuem correspondência prévia na internet, impedindo que analistas rivais ou alvos utilizem técnicas de busca reversa de imagem (como Google Lens, Yandex ou TinEye) para desmascarar a identidade falsa do investigador.",
    "notes": "* Devido às características do modelo de difusão de IA utilizado na plataforma, a geração gratuita pode apresentar artefatos visuais ou distorções em detalhes complexos (como olhos, dentes e anatomia de mãos humanas). Para contornar essa limitação na criação de personas, recomenda-se focar a geração em objetos, animais, logotipos institucionais ou planos de fundo realistas.\n* Qualquer imagem gerada e baixada deve passar por uma inspeção prévia de metadados antes de ser publicada na internet. Embora o Craiyon não insira dados de geolocalização (EXIF) nativos, é uma boa prática forense garantir a limpeza completa de *strings* ocultas que possam apontar para a origem do arquivo.\n* O analista de inteligência deve evitar incluir dados reais sensíveis do caso investigado (como nomes de alvos, locais restritos ou termos confidenciais) dentro do campo de prompts, visto que as consultas textuais são armazenadas por terceiros e integradas ao histórico de aprendizado da IA da plataforma."
  },
  {
    "id": "Credilink",
    "title": "Credilink",
    "url": "https://www.credilink.com.br/",
    "tipo": "Plataforma de Consultas Cadastrais e Inteligência de Dados",
    "utilidade": "Consulta cadastral, localização de pessoas e empresas, e análise de risco para background check",
    "descricao": "A Credilink é uma plataforma privada voltada para a centralização de informações cadastrais, localização de indivíduos e empresas, análise de crédito e prevenção a fraudes no cenário brasileiro. O sistema consolida extensas bases de dados para fornecer relatórios detalhados contendo dados de contato, históricos de endereços, capacidade financeira e estruturas societárias.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/pago"
    ],
    "utilidade_Osint": "Em investigações voltadas para inteligência corporativa, localização de ativos ou checagem de antecedentes (*background check*), a ferramenta otimiza o processo de *pivoting*. A partir de um único indicador (como um nome parcial, CPF ou CNPJ), o analista consegue correlacionar e extrair múltiplos dados secundários valiosos, mapeando redes de relacionamento, blindagem patrimonial e vínculos societários ocultos.",
    "notes": "* Por centralizar dados protegidos, o uso desta plataforma deve estar rigidamente alinhado às bases legais aplicáveis (como a LGPD) e às políticas institucionais da investigação.\n* É ideal para consolidar a fase de qualificação de alvos no Brasil, reduzindo o tempo de coleta manual em múltiplos diários e portais públicos esparsos."
  },
  {
    "id": "Criminal IP",
    "title": "Criminal IP",
    "url": "https://www.criminalip.io/",
    "tipo": "Motor de Busca de Inteligência de Ameaças (CTI)",
    "utilidade": "Busca de inteligência de ameaças cibernéticas (CTI), auditoria de ativos expostos e análise técnica de infraestrutura externa",
    "descricao": "O Criminal IP é uma plataforma de inteligência de ameaças cibernéticas (CTI) e um motor de busca especializado no mapeamento e monitoramento de ativos conectados à internet. A ferramenta realiza varreduras globais contínuas para coletar e indexar dados sobre endereços IP, portas abertas, serviços ativos, vulnerabilidades (CVEs), certificados SSL/TLS e reputação de domínios, gerando pontuações de risco em tempo real.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "func/busca-ampla",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas com foco em infraestrutura digital (Cyber OSINT / CYBINT) e inteligência de ameaças, a ferramenta permite realizar o reconhecimento passivo de alvos. O analista pode mapear a superfície de ataque ou a pegada digital de uma organização sem interagir diretamente com os servidores do alvo, identificando servidores mal configurados, subdomínios esquecidos, serviços expostos e conexões técnicas entre diferentes ativos.",
    "notes": "* Por se basear em um repositório centralizado de varreduras prévias, o Criminal IP mitiga o risco de quebra de OPSEC, permitindo auditar a infraestrutura do alvo de forma totalmente passiva.\n* A plataforma disponibiliza integrações via API, o que possibilita automatizar consultas e cruzar dados de inteligência diretamente com ferramentas de gestão de conhecimento ou scripts customizados de investigação."
  },
  {
    "id": "crt.sh",
    "title": "crt.sh",
    "url": "https://crt.sh/",
    "tipo": "Motor de Busca de Certificados SSL/TLS",
    "utilidade": "Mapeamento passivo de subdomínios e consulta a registros de Transparência de Certificados (Certificate Transparency)",
    "descricao": "O crt.sh é um motor de busca público projetado para consultar logs de Transparência de Certificados (Certificate Transparency - CT). A ferramenta indexa continuamente todos os certificados digitais SSL/TLS emitidos por Autoridades Certificadoras (CAs) globais, permitindo auditar o histórico de emissões e a estrutura criptográfica de qualquer organização na internet.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações focadas em infraestrutura digital (Cyber OSINT / CYBINT), o crt.sh desempenha um papel crucial na fase de reconhecimento passivo. Como os logs de CT são públicos e alimentados de forma automatizada pelas CAs, o analista pode mapear extensivamente a superfície de subdomínios de um alvo sem interagir diretamente com os servidores da organização investigada, garantindo total anonimato e preservação da OPSEC.",
    "notes": "* A ferramenta é altamente eficaz para descobrir ambientes de desenvolvimento, servidores de homologação (*staging*) ou subdomínios temporários que, embora ocultos de motores de busca tradicionais como o Google, tiveram certificados SSL gerados.\n* Devido ao volume massivo de requisições globais que o serviço recebe, a interface web pode apresentar instabilidades temporárias (timeouts). Para investigações em larga escala, recomenda-se realizar consultas diretas ao banco de dados PostgreSQL público da plataforma via terminal ou scripts automatizados."
  },
  {
    "id": "Crunchbase",
    "title": "Crunchbase",
    "url": "https://www.crunchbase.com/",
    "tipo": "Plataforma de Inteligência Corporativa e Banco de Dados de Mercado (Business Intelligence)",
    "utilidade": "Inteligência corporativa, mapeamento de investimentos, captações financeiras e identificação de fundadores e executivos",
    "descricao": "O Crunchbase é uma plataforma global de inteligência corporativa e dados de negócios focada no ecossistema de startups, empresas de tecnologia e fundos de investimento. O serviço cataloga e estrutura informações sobre rodadas de financiamento, investidores, aquisições, quadro de liderança, fundadores, estimativas de receita e tecnologias utilizadas por organizações empresariais no mundo todo.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações corporativas, diligência prévia (*due diligence*) e rastreamento de vínculos societários, o Crunchbase serve como uma fonte centralizadora para mapear a estrutura financeira e operacional de empresas e startups. A plataforma viabiliza o *pivoting* a partir do nome de uma organização para descobrir fundadores, executivos-chave, investidores institucionais e histórico de aportes de capital, auxiliando no mapeamento de redes de negócios e conexões societárias internacionais.",
    "notes": "* A seção de \"Funding Rounds\" detalha as datas e valores de investimentos recebidos, sendo útil para auditar o fluxo de capital e a capacidade financeira de empresas investigadas.\n* Os dados combinam informações fornecidas pela própria comunidade/empresas, notícias de imprensa e parcerias com fundos de capital de risco; portanto, dados críticos de governança devem ser cruzados com registros oficiais em juntas comerciais e órgãos reguladores."
  },
  {
    "id": "CTI Dashboard (Start.me)",
    "title": "CTI Dashboard (Start.me)",
    "url": "https://start.me/p/X2J5Gy/cti",
    "tipo": "Repositório de Links / Dashboard de Recursos OSINT",
    "utilidade": "Repositório centralizado e curadoria de links, frameworks e ferramentas voltadas para Inteligência de Ameaças Cibernéticas (CTI).",
    "descricao": "A página hospedada no Start.me é um painel (dashboard) customizado e centralizado que reúne uma vasta coleção de marcadores, links e ferramentas essenciais para analistas de Cyber Threat Intelligence (CTI). O repositório agrupa de forma categorizada diversos recursos web para análise de indicadores de comprometimento (IoCs), mapeamento de infraestruturas cibernéticas maliciosas, fontes de dados de phishing, análise de malware e monitoramento de atores de ameaças (APT).",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "fonte/repositorio",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ecossistema de inteligência em fontes abertas e CYBINT, a página atua como um ponto de partida central e catálogo de referência tática. Em vez de o investigador memorizar ou buscar individualmente dezenas de sites especializados, o painel organiza e disponibiliza as ferramentas de forma categorizada, otimizando a fase de planejamento e coleta em investigações corporativas e cibernéticas.",
    "notes": "* É uma excelente página inicial (homepage) para navegadores dedicados a investigações cibernéticas, servindo como guia de consulta rápido durante o processo de triagem de incidentes.\n* Como o painel depende de links externos mantidos por terceiros, é recomendável validar a disponibilidade de cada ferramenta individual ou buscar links espelhos caso algum serviço indexado fique offline."
  },
  {
    "id": "CyberChef",
    "title": "CyberChef",
    "url": "https://gchq.github.io/CyberChef/",
    "tipo": "Ferramenta de Análise e Forense de Dados",
    "utilidade": "Processamento, conversão e decodificação estática de dados e artefatos",
    "descricao": "O CyberChef é uma aplicação web de código aberto desenvolvida pelo GCHQ (Government Communications Headquarters), conhecida como o \"Canivete Suíço Cibernético\". Ela permite realizar operações complexas de manipulação e transformação de dados, como codificação, decodificação, formatação, criptografia, descompressão e extração de propriedades, tudo por meio de uma interface visual intuitiva baseada em encadeamento de blocos (construção de \"receitas\").",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No fluxo de uma investigação estruturada, o CyberChef atua na fase de análise e processamento de informações já obtidas. Ele é empregado para \"limpar\", estruturar ou revelar o conteúdo de artefatos ofuscados encontrados em vazamentos de dados, códigos-fonte (HTML/JS) ou tráfego de rede capturado.",
    "notes": "* É extremamente útil para decodificar rapidamente credenciais ofuscadas (como em formato Base64 ou Hexadecimal) localizadas em *dumps* de banco de dados ou logs de servidores.\n* Toda a computação e processamento do CyberChef ocorrem do lado do cliente (Client-side) dentro do navegador. Isso significa que, mesmo sendo acessado via web, os dados sensíveis inseridos na ferramenta não são transmitidos para servidores remotos, garantindo proteção à evidência sob análise."
  },
  {
    "id": "Cyotek WebCopy",
    "title": "Cyotek WebCopy",
    "url": "https://www.cyotek.com/cyotek-webcopy",
    "tipo": "Ferramenta de Web Crawling e Scraping Desktop",
    "utilidade": "Clonagem, espelhamento e raspagem automatizada de sites completos para análise offline",
    "descricao": "O Cyotek WebCopy é um software utilitário desenvolvido para o sistema operacional Windows com o objetivo de baixar sites inteiros ou parciais localmente em um disco rígido para posterior visualização offline. Funcionando como um rastreador da web (*web crawler*), a ferramenta analisa recursivamente a estrutura de links de um endereço fornecido e realiza o download automático de todos os recursos disponíveis (páginas HTML, folhas de estilo CSS, scripts, imagens e documentos), remapeando os caminhos das URLs para que apontem para os arquivos locais.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/scrapers-automacao",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações digitais e inteligência de fontes abertas, o Cyotek WebCopy desempenha um papel fundamental na preservação de evidências e na análise estática de alvos na web. Ao clonar a estrutura de um portal de interesse, o investigador pode mapear dependências, extrair mídias em massa e inspecionar códigos estruturais de forma totalmente offline. Esse método elimina a necessidade de interagir repetidamente com o servidor do alvo, mitigando os riscos de contramedidas e reduzindo consideravelmente a pegada técnica (*footprint*) deixada pelo analista durante a investigação.",
    "notes": "* Permite a aplicação de regras avançadas e expressões regulares (Regex) para filtrar o conteúdo capturado, dando ao investigador o controle para focar o download apenas em extensões de interesse (como documentos .PDF ou imagens) ou ignorar diretórios específicos.\n* Suporta a submissão prévia de formulários e tratamento de credenciais (autenticação HTTP tradicional ou baseada em login)."
  },
  {
    "id": "d4shboard (Start.me)",
    "title": "d4shboard (Start.me)",
    "url": "https://start.me/p/vjlrM1/d4shboard",
    "tipo": "Repositório de Links / Dashboard de Recursos OSINT",
    "utilidade": "Centralização de ferramentas, indexadores e bases de dados para investigações OSINT de amplo escopo.",
    "descricao": "A página d4shboard hospedada na plataforma Start.me é um painel visual personalizado que funciona como um indexador central de links e ferramentas para inteligência em fontes abertas (OSINT). O painel organiza de maneira categorizada diversos recursos de terceiros voltados para a busca e validação de identidades, usernames, números de telefone, dados de redes sociais, infraestruturas de rede e vazamentos de dados.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No fluxo de trabalho do analista de inteligência, este dashboard atua como um catálogo de referência tática durante as fases de planejamento e coleta. Ele agrupa utilitários fragmentados da internet em uma única interface gráfica estruturada, permitindo que o investigador alterne rapidamente entre diferentes motores de busca e ferramentas especializadas de acordo com o tipo de dado de entrada do alvo.",
    "notes": "* Ideal para ser mantido como marcador ou página inicial no navegador da máquina de investigação, agilizando o acesso a ferramentas de pivoting.\n* Por se tratar de uma curadoria de links de terceiros, o analista deve estar ciente de que ferramentas listadas no painel podem mudar de URL ou ficar indisponíveis ao longo do tempo, necessitando de validações periódicas de funcionamento."
  },
  {
    "id": "Dados Abertos da Dívida Ativa da União (PGFN)",
    "title": "Dados Abertos da Dívida Ativa da União (PGFN)",
    "url": "https://www.gov.br/pgfn/pt-br/assuntos/divida-ativa-da-uniao/transparencia-fiscal-1/copy_of_dados-abertos",
    "tipo": "Repositório de Dados Públicos Governamentais",
    "utilidade": "Consulta e extração de dados abertos sobre devedores e débitos inscritos na Dívida Ativa da União e do FGTS",
    "descricao": "Este portal, mantido pela Procuradoria-Geral da Fazenda Nacional (PGFN), disponibiliza de forma pública e estruturada as bases de dados de devedores que possuem débitos inscritos em Dívida Ativa da União e do Fundo de Garantia do Tempo de Serviço (FGTS). O repositório abrange registros detalhados contendo a identificação dos devedores (pessoas físicas e jurídicas), os valores consolidados das pendências financeiras, a natureza das dívidas (tributária, não tributária ou previdenciária) e a respectiva unidade da federação responsável pela cobrança.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações corporativas, análise patrimonial, auditorias de riscos e devido zelo (*due diligence*), este repositório atua como fonte essencial de informação oficial. Ele permite ao analista de inteligência identificar passivos financeiros massivos, rastrear situações de insolvência ou fraude fiscal, e cruzar os dados extraídos com outras bases societárias para mapear riscos associados a pessoas físicas e jurídicas sob investigação.",
    "notes": "* Os dados são comumente disponibilizados em formatos brutos ou compactados (como CSV ou ZIP), o que possibilita a sua importação local para bancos de dados relacionais (SQL) ou ferramentas de análise de dados (Python, Pandas) para buscas em massa.\n* Devido à atualização periódica das listas, é recomendável verificar a data de modificação ou geração dos arquivos baixados para assegurar a contemporaneidade das informações integradas ao relatório de inteligência."
  },
  {
    "id": "Dados Abertos da Receita Federal do Brasil",
    "title": "Dados Abertos da Receita Federal do Brasil",
    "url": "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/dados-abertos",
    "tipo": "Repositório de Dados Abertos Governamentais",
    "utilidade": "Extração massiva de dados cadastrais de empresas (CNPJ), mapeamento de vínculos societários (QSA) e dados econômico-fiscais regulatórios",
    "descricao": "A página de Dados Abertos da Receita Federal do Brasil (RFB) é o canal oficial de disponibilização de bases de dados estruturadas sobre a atividade cadastral e fiscal de pessoas jurídicas no país. O repositório centraliza e distribui os arquivos mensais da base pública do CNPJ, além de dados sobre comércio exterior, registros aduaneiros, estatísticas de arrecadação e cadastros de regimes tributários (como o Simples Nacional).",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de Background Check, Due Diligence, investigações de fraudes financeiras e inteligência corporativa, esta é uma das fontes primárias mais valiosas do ecossistema brasileiro. O acesso aos dados brutos permite o mapeamento completo do tecido empresarial do país, viabilizando a descoberta de conexões patrimoniais e a identificação de holdings, subsidiárias ou empresas de fachada.",
    "notes": "* Os dados do CNPJ são divididos em múltiplos arquivos compactados (`.zip`) de grande porte, estruturados em formato de texto plano com delimitadores de layout próprios da Receita Federal. \n* Para fins práticos de investigação e consultas rápidas, os arquivos exigem um processo prévio de ETL (Extração, Transformação e Carga) via scripts (Python, Go) para popularem bancos de dados locais (como PostgreSQL, MySQL ou SQLite).\n* A base tratada é ideal para alimentar ferramentas de análise de vínculos e grafos, permitindo que o analista de inteligência plote visualmente redes de participação societária cruzada entre alvos de interesse."
  },
  {
    "id": "DarkWebInformer",
    "title": "DarkWebInformer",
    "url": "https://darkwebinformer.com/",
    "tipo": "Plataforma de Inteligência de Ameaças (Cyber Threat Intelligence - CTI) e Notícias",
    "utilidade": "Monitoramento de ameaças cibernéticas, rastreamento de ataques de ransomware e notificações de vazamentos de dados na Dark Web",
    "descricao": "O DarkWebInformer é uma plataforma especializada em Cyber Threat Intelligence (CTI) focada no monitoramento, agregação e reporte de atividades cibercriminosas em tempo real. O serviço rastreia ativamente publicações de grupos de ransomware (shame sites), anúncios de venda de bancos de dados exfiltrados, vazamentos de credenciais e discussões de agentes de ameaça em fóruns clandestinos e canais restritos.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações corporativas, análise de risco digital, Due Diligence e gerenciamento de incidentes cibernéticos, a plataforma funciona como um mecanismo de alerta precoce (early warning). Ela permite que o analista identifique rapidamente se uma organização específica foi vítima de extorsão ou violação de dados, mapeando quais grupos reivindicaram a autoria do ataque e a natureza dos dados expostos, sem a necessidade de interagir diretamente com a infraestrutura cibercriminosa.",
    "notes": "* Atua como um intermediário de segurança operacional (OPSEC), permitindo que o investigador obtenha inteligência acionável sobre atividades da Dark Web mitigando os riscos de infecção por malware ou rastreamento associados à navegação direta em fóruns maliciosos.\n* As postagens fornecem metadados valiosos sobre os ataques, como nomes dos grupos de ransomware envolvidos, links originais das postagens na rede Tor (útil para auditorias posteriores) e amostras visuais das estruturas de arquivos capturadas.\n* Os dados obtidos devem ser tratados como inteligência descritiva primária, servindo como ponto de partida para que o analista correlacione os incidentes reportados com buscas focadas em repositórios de vazamentos ou logs de credenciais."
  },
  {
    "id": "Data Fake Generator",
    "title": "Data Fake Generator",
    "url": "https://datafakegenerator.com/generador.php",
    "tipo": "Gerador de Dados Sintéticos / Ferramenta de OPSEC",
    "utilidade": "Geração de dados fictícios e identidades sintéticas para a criação de perfis de cobertura (Sock Puppets)",
    "descricao": "O Data Fake Generator é uma plataforma online voltada para a geração automatizada de dados biográficos, civis e financeiros fictícios. A ferramenta simula perfis completos com nomes aleatórios, números de identificação (como CPFs ou equivalentes internacionais), endereços, e-mails, números de telefone e dados de cartões de teste de forma imediata e estruturada.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/gratuito",
      "opsec/personas"
    ],
    "utilidade_Osint": "No âmbito das investigações em fontes abertas, a plataforma atua diretamente na fase de preparação operacional e manutenção da OPSEC (Segurança das Operações). Ela fornece os subsídios necessários para a montagem de identidades sintéticas coerentes, permitindo que o analista estruture cadastros e contas de cobertura sem a necessidade de expor informações reais ou comprometer a integridade da investigação.",
    "notes": "* Ideal para contornar telas de captura de dados ou validações iniciais de formato de formulários em plataformas onde o analista precisa navegar anonimamente.\n* Para a construção de uma persona digital robusta, os dados textuais gerados por esta ferramenta devem ser combinados com ferramentas de e-mail temporário e geradores de rostos por inteligência artificial (IA)."
  },
  {
    "id": "Deep Dork Web",
    "title": "Deep Dork Web",
    "url": "https://guilherme-moraiss.github.io/Deep-Dork-Web/",
    "tipo": "Gerador e Automatizador de Google Dorks (Client-Side)",
    "utilidade": "Automação, filtragem e geração dinâmica de consultas avançadas de Google Dorks para investigações OSINT e auditoria de segurança.",
    "descricao": "O Deep Dork Web é uma ferramenta baseada no navegador projetada para simplificar, organizar e automatizar a criação e execução de buscas avançadas utilizando operadores do Google (Google Dorks). A plataforma oferece uma interface gráfica que categoriza dorks predefinidas (como dados sensíveis, vulnerabilidades e falhas de configuração), permitindo a filtragem em tempo real e a substituição dinâmica de marcadores de posição (*placeholders*) pelos termos de interesse do investigador, gerando os links diretos para os mecanismos de busca.",
    "testada": false,
    "tags": [
      "fonte/vazamentos-darkweb",
      "func/busca-dorks",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, a ferramenta otimiza o fluxo de reconhecimento e coleta de informações indexadas na Web de Superfície. Ela permite estruturar buscas cirúrgicas sem que o analista precise memorizar a sintaxe complexa de múltiplos operadores avançados (como `filetype:`, `intitle:`, `inurl:` e `intext:`), acelerando a descoberta de vazamentos de credenciais, documentos confidenciais expostos, painéis administrativos desprotegidos e infraestruturas indexadas na rede.",
    "notes": "* A ferramenta é ideal para a automação rápida do fluxo de trabalho inicial de \"Google Hacking\", permitindo customizar e abrir consultas estruturadas de forma ágil em abas separadas.\n* Recomenda-se cautela no volume de consultas consecutivas geradas para o Google, visto que a execução massiva e rápida de dorks complexas a partir do mesmo IP tende a acionar mecanismos de defesa automatizados (como CAPTCHAs e bloqueios temporários). O uso de VPNs ou proxies na máquina de busca ajuda a mitigar essa restrição de tráfego."
  },
  {
    "id": "deepdarkCTI",
    "title": "deepdarkCTI",
    "url": "https://github.com/fastfire/deepdarkCTI",
    "tipo": "Diretório / Repositório de Fontes de Inteligência",
    "utilidade": "Repositório curado de fontes de inteligência sobre ameaças cibernéticas (CTI) focadas na Deep e Dark Web.",
    "descricao": "O deepdarkCTI é um projeto hospedado no GitHub que funciona como uma coleção centralizada e colaborativa de fontes de Inteligência de Ameaças Cibernéticas (Cyber Threat Intelligence - CTI) focada estritamente nos domínios da Deep e Dark Web. O repositório agrupa listas estruturadas contendo endereços de páginas de gangues de ransomware (RaaS), fóruns de cibercrime, mercados negros (darknets), canais e grupos de Telegram/Discord focados em vazamentos de dados, bancos de dados de exploits e perfis de agentes de ameaça no X (Twitter). Além dos índices, o projeto documenta técnicas de busca e monitoramento voltadas a essas plataformas de segurança mitigada.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "fonte/vazamentos-darkweb",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações baseadas em fontes abertas e inteligência cibernética (CYBINT/DARKINT), este repositório atua como um índice de referência fundamental para mapear a presença e a atividade de atores maliciosos. Ele otimiza significativamente a fase de reconhecimento e coleta de dados, reduzindo o tempo necessário para localizar novas plataformas de vazamento (leaks), repositórios de credenciais expostas ou fóruns de discussão clandestinos na rede Tor e redes correlatas.",
    "notes": "* Os arquivos de dados (como arquivos `.md` individuais para ransomware ou mercados) podem ser consumidos por scripts locais de automação e ferramentas de raspagem (scrapers) para alimentar sistemas de monitoramento preventivo de marcas e credenciais.\n* Como o repositório indexa infraestruturas reais e ativas de cibercriminosos, o analista deve aplicar rigorosas medidas de segurança de operações (OPSEC), utilizando roteamento Tor, VPNs e máquinas virtuais forenses isoladas antes de interagir com qualquer link listado."
  },
  {
    "id": "DeHashed",
    "title": "DeHashed",
    "url": "https://www.dehashed.com",
    "tipo": "Mecanismo de Busca de Bancos de Dados Vazados (Data Breach Search Engine)",
    "utilidade": "Rastreamento de vazamentos de dados, exposição de credenciais e inteligência cibernética (Threat Intelligence)",
    "descricao": "O DeHashed é um mecanismo de busca voltado à segurança cibernética e um agregador massivo de dados expostos. A ferramenta é projetada para analistas de segurança, investigadores e profissionais de inteligência, permitindo indexar e pesquisar bilhões de registros oriundos de vazamentos históricos de dados, violações de servidores, dumps de credenciais e exposições de dados ocorridas em fóruns cibercriminosos ou na Dark Web.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/usuario-email",
      "alvo/telefone",
      "alvo/ip",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações baseadas em fontes abertas, inteligência corporativa e investigação cibernética, o DeHashed atua como um repositório centralizado para o mapeamento da pegada digital de alvos. Ele viabiliza a execução de técnicas de *pivoting* avançadas, permitindo correlacionar diferentes identificadores técnicos e civis que pertencem ao mesmo indivíduo ou grupo através de dados preexistentes em bases vazadas.",
    "notes": "* A ferramenta é ideal para analisar e auditar os hábitos de criação de credenciais de um alvo (por exemplo, reutilização de senhas antigas), servindo como base valiosa para engenharia social ou avaliação de riscos corporativos.\n* Devido à plataforma não realizar varreduras ativas sob demanda na rede (consultando apenas o seu próprio índice já compilado), o analista deve manter atenção em relação à OPSEC na barra de pesquisa web. Para consultas em larga escala, recomenda-se a integração via API disponibilizada pela própria plataforma."
  },
  {
    "id": "Depositphotos Search by Image",
    "title": "Depositphotos Search by Image",
    "url": "https://depositphotos.com/search-by-image.html",
    "tipo": "Motor de Busca Reversa de Imagens / Catálogo Comercial",
    "utilidade": "Busca reversa de imagens para identificação de fotos de banco de imagens (stock photos), elementos gráficos similares e verificação de autenticidade",
    "descricao": "O Depositphotos Search by Image é um recurso de busca reversa baseado em inteligência visual integrado à plataforma de banco de imagens Depositphotos. A ferramenta permite o upload de fotografias ou ilustrações para rastrear ativos visuais correspondentes, variações idênticas ou elementos estéticos semelhantes dentro de um catálogo com centenas de milhões de fotos de estoque, vetores e ilustrações comerciais.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/busca-identificacao",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, análise de mídias (IMINT) e desarticulação de perfis falsos (*sock puppets* ou fraudes), a ferramenta é aplicada na identificação rápida de fotografias de bancos de imagens utilizadas de forma enganosa como fotos de perfil, provas sociais ou identidades sintéticas. Ela possibilita validar se o retrato atribuído a um indivíduo em um site institucional, rede social ou documento é, na realidade, um modelo de estoque comercial, revelando a proveniência do ativo e a ausência de autenticidade da entidade investigada.",
    "notes": "* Útil para localizar sessões de fotos inteiras do mesmo modelo, permitindo ao investigador encontrar outras poses ou ângulos frequentemente utilizados pelos mesmos criadores de perfis falsos.\n* Pode ser combinada com outros motores de busca reversa generalistas (Google Lens, Yandex, Bing) para isolar especificamente quando uma imagem de interesse provém de um acervo comercial de fotografia de estoque."
  },
  {
    "id": "Despesas por Fornecedor (TCE-SP)",
    "title": "Despesas por Fornecedor (TCE-SP)",
    "url": "https://transparencia.tce.sp.gov.br/despesas-fornecedor",
    "tipo": "Repositório de Registros Públicos e Fiscalização Orçamentária",
    "utilidade": "Consulta e auditoria concentrada de pagamentos, empenhos e liquidações orçamentárias recebidas por fornecedores específicos do estado de São Paulo",
    "descricao": "A seção \"Despesas por Fornecedor\" do Portal da Transparência do Tribunal de Contas do Estado de São Paulo (TCE-SP) é uma interface pública especializada de consulta que consolida todas as saídas orçamentárias e fluxos financeiros públicos direcionados a um contratado específico. Informando o identificador da entidade, o portal agrupa de forma cronológica os empenhos, liquidações e pagamentos executados pelos órgãos governamentais estaduais e municipais sob a jurisdição do tribunal.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações corporativas, Due Diligence, compliance e inteligência patrimonial, esta URL permite auditar de maneira cirúrgica a dependência econômica ou o volume de capital injetado pelo setor público em um alvo específico. O analista pode rastrear o fluxo real de caixa recebido por empresas sob suspeita de fraudes, identificar quais prefeituras ou secretarias são os principais clientes de uma pessoa jurídica e obter números de empenhos que servem como vetores para requisitar os processos licitatórios e contratos originais na íntegra.",
    "notes": "* A busca por fornecedor nesta página é ideal para rastrear o destino final do dinheiro público (quem recebeu o pagamento), complementando buscas mais amplas de licitações nas quais a empresa pode ter participado apenas como concorrente.\n* Assim como o portal principal do TCE-SP, os dados de pagamentos realizados pelo município de São Paulo (Capital) não estão integrados a esta base de despesas, exigindo que investigações voltadas à capital paulista utilizem de forma complementar as ferramentas do Tribunal de Contas do Município (TCM-SP) ou o Portal da Transparência da própria prefeitura de São Paulo."
  },
  {
    "id": "DeviceInfo.me",
    "title": "DeviceInfo.me",
    "url": "https://www.deviceinfo.me/",
    "tipo": "Plataforma de Diagnóstico de Privacidade e Identidade Técnica",
    "utilidade": "Auditoria avançada de pegada digital (browser fingerprinting), vazamentos de rede e validação de OPSEC para o investigador.",
    "descricao": "O DeviceInfo.me é uma plataforma web abrangente projetada para analisar, diagnosticar e exibir em tempo real todas as informações e metadados que um navegador de internet vaza ou expõe para os servidores web durante a navegação. A ferramenta destrincha parâmetros profundos de hardware (arquitetura da CPU, núcleos, nível de bateria, GPU), software (sistema operacional, agentes de usuário, plugins), rede (endereços IPv4/IPv6, provedor, ASN) e técnicas complexas de rastreamento adaptativo, como impressões digitais de Canvas, WebGL e AudioContext.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, o DeviceInfo.me atua na fase crítica de preparação e garantia de OPSEC (Segurança das Operações). Ele serve como um ambiente de teste para validar se a infraestrutura de anonimização do analista (máquinas virtuais forenses, redes VPN, encadeamento de proxies, navegadores blindados e extensões de privacidade) está configurada corretamente e operando sem vazamentos antes de qualquer interação direta ou indireta com os ambientes controlados pelo alvo.",
    "notes": "* Recomenda-se o uso da ferramenta como um checklist técnico mandatório antes do início de qualquer investigação em campo digital, assegurando que o perfil do navegador esteja devidamente higienizado.\n* Atenção especial deve ser dedicada aos módulos de \"WebRTC Leak\" e \"DNS Leak\" contidos na interface da ferramenta: se o endereço IP real do provedor de internet do investigador aparecer listado nessas seções (mesmo com a VPN ativada), a OPSEC está severamente comprometida por falha de configuração de rede."
  },
  {
    "id": "Disconnect Search",
    "title": "Disconnect Search",
    "url": "https://search.disconnect.me/",
    "tipo": "Metabuscador Privativo e Ferramenta de Anonimização de Consultas",
    "utilidade": "Mecanismo de metabusca privativo para consultas anônimas em múltiplos motores de busca sem rastreamento de IP ou criação de perfis",
    "descricao": "O Disconnect Search é um metabuscador focado em privacidade que atua como um intermediário seguro entre o usuário e os principais mecanismos de busca da internet (como Google e Bing). O serviço encaminha as consultas de pesquisa de forma criptografada e anônima através dos servidores do Disconnect, impedindo que os provedores de busca capturem o endereço IP real, associem termos pesquisados a contas pessoais ou instalem cookies e rastreadores persistentes no navegador do usuário.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "Durante a fase inicial de reconhecimento e coleta de inteligência em fontes abertas, o Disconnect Search permite realizar buscas amplas e varreduras de superfície preservando a segurança operacional (OPSEC) do analista. A ferramenta evita o vazamento do IP real e impede a contaminação dos resultados pela chamada \"bolha de filtros\" (*filter bubble*), garantindo que as consultas investigativas não sejam vinculadas ao perfil comercial ou de navegação do pesquisador.",
    "notes": "* As buscas realizadas pelo Disconnect Search retornam os resultados de motores comerciais sem a personalização baseada em localização real ou histórico prévio, viabilizando resultados mais neutros e reprodutíveis.\n* Pode ser configurado como motor de busca padrão em navegadores voltados para investigação forense e privacidade para padronizar pesquisas de rotina com baixa pegada digital."
  },
  {
    "id": "DivulgaCandContas",
    "title": "DivulgaCandContas",
    "url": "https://divulgacandcontas.tse.jus.br/",
    "tipo": "Base de Dados Pública Governamental / Portal Eleitoral",
    "utilidade": "Levantamento de dados biográficos, consultas patrimoniais e auditoria de fluxo financeiro de agentes políticos e candidatos no Brasil.",
    "descricao": "O DivulgaCandContas (Sistema de Divulgação de Candidaturas e Contas Eleitorais) é uma plataforma oficial mantida pelo Tribunal Superior Eleitoral (TSE) do Brasil. O sistema consolida e disponibiliza dados detalhados sobre todos os candidatos que solicitaram registro para concorrer a cargos públicos em eleições municipais, estaduais e federais no país, além de centralizar as respectivas prestações de contas de campanha.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/financeiro-crypto",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Para fins de investigação e análise de inteligência, o DivulgaCandContas é uma ferramenta indispensável no levantamento de antecedentes e checagem de perfil (Background Check) de Pessoas Politicamente Expostas (PEPs) ou indivíduos correlacionados. A plataforma viabiliza a identificação de vínculos familiares, evolução patrimonial histórica e redes de influência política e econômica por meio do cruzamento de doadores e fornecedores de campanha.",
    "notes": "* Os dados podem ser pesquisados de forma retroativa, permitindo ao investigador analisar o histórico de patrimônio e a alteração de dados civis do alvo ao longo de diferentes pleitos eleitorais (mecanismo útil para identificar ocultação ou evolução incompatível de bens).\n* A plataforma disponibiliza anexos em formato PDF contendo documentos digitalizados submetidos pelos próprios candidatos, como certidões criminais da Justiça Federal e Estadual, propostas de governo e comprovantes de escolaridade, os quais podem fornecer valiosos leads adicionais para a investigação."
  },
  {
    "id": "DMI Tool Database",
    "title": "DMI Tool Database",
    "url": "https://wiki.digitalmethods.net/Dmi/ToolDatabase",
    "tipo": "Diretório e Catálogo de Ferramentas (Tool Repository)",
    "utilidade": "Repositório curado de ferramentas para raspagem de dados, análise de mídias digitais e pesquisa na internet.",
    "descricao": "O DMI Tool Database (Digital Methods Initiative Tool Database), mantido pela Universidade de Amsterdã, é um diretório centralizado e uma enciclopédia wiki que cataloga ferramentas de software projetadas para a pesquisa de mídia digital, raspagem de dados públicos (*scraping*), mapeamento de redes e análise do comportamento de plataformas online. O repositório agrupa utilitários desenvolvidos tanto por acadêmicos quanto por comunidades de código aberto para interagir com APIs e interfaces web de grandes redes sociais, motores de busca e ecossistemas digitais.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo da inteligência de fontes abertas, o DMI Tool Database atua como uma base de conhecimento estratégica e referencial na fase de planejamento de uma investigação. Ele fornece ao analista um portfólio documentado de ferramentas especializadas para coleta massiva de dados, permitindo descobrir novos scripts e softwares capazes de extrair informações estruturadas de plataformas específicas, contornar limitações de busca ou analisar dinâmicas de mídia digital.",
    "notes": "* A plataforma é estritamente documental e informativa, servindo para orientar o investigador sobre a existência e o funcionamento de softwares de terceiros, sem executar ações ou buscas ativas diretamente em sua interface.\n* Por documentar ferramentas voltadas para a pesquisa em plataformas dinâmicas, cabe ao analista verificar se os utilitários listados no repositório ainda estão ativos e atualizados, uma vez que mudanças frequentes nas APIs de redes sociais podem quebrar o funcionamento de scripts de raspagem legados."
  },
  {
    "id": "DNSdumpster",
    "title": "DNSdumpster",
    "url": "https://dnsdumpster.com/",
    "tipo": "Ferramenta de Reconhecimento DNS e Mapeamento de Infraestrutura",
    "utilidade": "Reconhecimento e enumeração de registros DNS, descoberta de subdomínios e mapeamento visual de infraestrutura de rede",
    "descricao": "O DNSdumpster é uma ferramenta online de inteligência e reconhecimento passivo mantida pelo projeto HackerTarget. Projetada para pesquisa técnica de superfície de ataque, a plataforma realiza consultas abrangentes em tabelas de registros DNS públicos, identificando servidores de nomes (NS), servidores de e-mail (MX), apontamentos de hosts (A e AAAA), registros de texto e validação (TXT) e subdomínios associados a um domínio-alvo. Além da listagem estruturada com respectivos endereços IP, ASN, provedor e geolocalização cadastral, a ferramenta gera mapas visuais e grafos interativos da arquitetura de rede mapeada.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ecossistema de inteligência cibernética (CYBINT) e reconhecimento técnico (*footprinting*), o DNSdumpster atua como uma ferramenta indispensável para mapear o perímetro digital completo de uma organização ou alvo investigado. Ela viabiliza a descoberta de subdomínios ocultos, servidores de desenvolvimento e portais internos expostos, além de correlacionar múltiplos apontamentos aos seus respectivos blocos de IP e sistemas autônomos (ASN), auxiliando na identificação de infraestruturas compartilhadas e pontos únicos de falha.",
    "notes": "* Por realizar as buscas consultando bases de dados passivas e servidores DNS públicos, a ferramenta não envia tráfego de varredura ativa diretamente contra o servidor web do alvo, preservando a OPSEC do investigador.\n* A plataforma permite a exportação dos dados tabulados em formato Excel/XLS e o download do diagrama da rede em formato PNG ou PDF, o que agiliza a documentação em relatórios técnicos de investigação.\n* É recomendável cruzar a listagem de subdomínios obtida com registros de certificados SSL/TLS (Certificate Transparency Logs) para assegurar uma cobertura completa do perímetro do alvo."
  },
  {
    "id": "dnstwist",
    "title": "dnstwist",
    "url": "https://dnstwist.it/",
    "tipo": "Motor de Permutação de Domínios e Análise de Ameaças Cibernéticas",
    "utilidade": "Detecção de typosquatting, engenharia reversa de domínios fraudulentos e mapeamento de infraestrutura de phishing.",
    "descricao": "O dnstwist é uma ferramenta especializada no processamento e geração de permutações de nomes de domínio para identificar possíveis ameaças cibernéticas. A partir de um domínio inserido, a plataforma utiliza algoritmos avançados de substituição (bitsquatting, homóglifos, omissão, transposição e inserção de caracteres) para conceber variações textuais idênticas ou semelhantes ao domínio original. Em seguida, ela faz varreduras ativas para checar quais dessas variantes estão registradas na internet e operando serviços de rede.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito da inteligência cibernética (CYBINT) e investigação em fontes abertas, o dnstwist é empregado para descobrir campanhas ativas de engenharia social e páginas clonadas (phishing) estruturadas para personificar instituições, marcas ou alvos legítimos. A ferramenta permite antecipar fraudes e rastrear servidores maliciosos que compartilham a mesma infraestrutura ou lógica de registro de domínios.",
    "notes": "* A interface web fornece de maneira automatizada um indicador visual sobre a semelhança das páginas (através de algoritmos de hash difuso como SSDEEP), sinalizando ao investigador quais permutações possuem sites com conteúdos visualmente idênticos ao alvo original.\n* A identificação de registros MX ativos nas permutações geradas pelo dnstwist serve como um forte indicativo de que o domínio fraudulento está pronto ou sendo utilizado para disparar campanhas de e-mails falsificados (BEC ou phishing direcionado), um lead crítico em investigações corporativas."
  },
  {
    "id": "Domain Hunter Gatherer",
    "title": "Domain Hunter Gatherer",
    "url": "https://domainhuntergatherer.com/",
    "tipo": "Software de Mineração e Varredura de Domínios Expirados (Expired Domain Hunting Tool)",
    "utilidade": "Identificação de domínios expirados, mapeamento de antigas propriedades web e engenharia reversa de infraestrutura de links.",
    "descricao": "O Domain Hunter Gatherer é uma ferramenta instalável projetada para localizar, minerar e analisar domínios expirados ou abandonados que ainda possuem relevância técnica na internet. O software automatiza a varredura de motores de busca por palavras-chave, realiza a raspagem crawling de sites de alta autoridade à procura de links quebrados e monitora plataformas de leilão de domínios, agregando métricas de SEO e históricos de funcionamento de forma centralizada.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/desktop",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações cibernéticas (CYBINT) e inteligência de fontes abertas, a ferramenta desempenha um papel tático no mapeamento de infraestruturas históricas e ativos digitais negligenciados por um alvo. Ela permite descobrir domínios anteriormente operados por uma organização ou indivíduo que foram deixados expirar, abrindo vetores para a análise de campanhas passadas de desinformação, rastreamento de redes de sites dissimulados (PBNs) ou identificação de conexões institucionais antigas que foram apagadas da Surface Web.",
    "notes": "* A ferramenta permite a integração com o Internet Archive (Wayback Machine), viabilizando que o investigador visualize de maneira automatizada capturas históricas do conteúdo que costumava ser hospedado no domínio minerado antes de seu abandono.\n* Sob a ótica de segurança defensiva e inteligência corporativa, o software pode ser utilizado para identificar se domínios intimamente ligados à marca de um cliente expiraram e estão vulneráveis a táticas de sequestro de reputação ou campanhas de engenharia social reversa."
  },
  {
    "id": "Domain Reputation Check - APIVoid",
    "title": "Domain Reputation Check - APIVoid",
    "url": "https://www.apivoid.com/tools/domain-reputation-check",
    "tipo": "Ferramenta de Análise de Reputação e Inteligência de Ameaças",
    "utilidade": "Verificação de reputação de domínios, detecção de ameaças cibernéticas (CYBINT) e cruzamento de listas de bloqueio (blacklists)",
    "descricao": "O APIVoid Domain Reputation Check é uma ferramenta baseada na web projetada para analisar a confiabilidade e a segurança de um nome de domínio. Ela cruza o alvo contra dezenas de mecanismos de reputação cibernética, listas de bloqueio de spam, servidores de comando e controle (C2), e bases de dados de phishing e malware, fornecendo um score de risco consolidado, além de informações básicas sobre o IP e o servidor de hospedagem.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações de fraudes digitais, engenharia social e inteligência de ameaças (Threat Intelligence), a plataforma serve para auditar a legitimidade de ativos digitais. Ela permite que o investigador identifique se um domínio corporativo de um alvo foi comprometido e inserido em listas de restrição, ou se um domínio suspeito foi recém-criado especificamente para campanhas de personificação de marca (typosquatting) e golpes de phishing.",
    "notes": "* A ferramenta exibe a idade do domínio (Domain Age) de forma destacada, um indicador crítico em investigações OSINT, visto que domínios maliciosos ou voltados a fraudes financeiras costumam ter um tempo de vida muito curto no momento da análise.\n* Como o serviço consulta bases externas centralizadas, ele serve como um excelente ponto de triagem inicial rápida antes do aprofundamento em ferramentas de análise forense ou de tráfego de rede mais complexas."
  },
  {
    "id": "DomainTools WHOIS",
    "title": "DomainTools WHOIS",
    "url": "https://whois.domaintools.com/",
    "tipo": "Ferramenta de Busca e Validação Técnica (CYBINT)",
    "utilidade": "Investigação técnica, mapeamento e histórico de registros de nomes de domínio e propriedades IP",
    "descricao": "O DomainTools WHOIS é uma plataforma avançada de inteligência cibernética focada no mapeamento de infraestrutura de rede e propriedades digitais. A ferramenta coleta, centraliza e analisa dados de registros de nomes de domínio (WHOIS), informações de servidores de DNS, históricos de apontamentos e dados de endereços IP. Ela permite identificar os proprietários legais, organizações associadas, localizações cadastrais e datas de criação de ativos na internet.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações digitais e inteligência de ameaças cibernéticas (CYBINT), a plataforma atua como uma ferramenta fundamental para realizar o *pivoting* técnico. Ela possibilita desvendar redes de sites falsos, identificar os responsáveis por infraestruturas maliciosas ou ligar múltiplos domínios web a uma mesma entidade ou indivíduo.",
    "notes": "* É altamente recomendada para as fases iniciais de reconhecimento técnico em investigações corporativas ou cibernéticas, servindo de ponto de partida para a descoberta de novas conexões de infraestrutura.\n* Em virtude de leis de privacidade (como a LGPD e o GDPR), dados pessoais de contato no WHOIS atual costumam aparecer protegidos; o recurso de histórico da plataforma (disponível na versão paga) torna-se crucial para identificar dados expostos antes da aplicação dessas regras."
  },
  {
    "id": "Dominico",
    "title": "Dominico",
    "url": "https://www.dominico.io/",
    "tipo": "Plataforma de Reconhecimento e Inteligência de Domínios",
    "utilidade": "Inteligência de ameaças cibernéticas (CYBINT) focada no mapeamento passivo, histórico e técnico de nomes de domínio e infraestruturas associadas",
    "descricao": "O Dominico é uma ferramenta online projetada para a consolidação, auditoria e análise de superfícies de ataque com base em nomes de domínio de internet. A plataforma atua agregando de maneira automatizada registros de zonas DNS (incluindo apontamentos A, AAAA, MX, NS e TXT), dados cadastrais de WHOIS, enumeração de subdomínios e o mapeamento de servidores de hospedagem correlacionados.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações cibernéticas (CYBINT) e inteligência de alvos, o Dominico desempenha papel fundamental na fase de *footprinting* e reconhecimento de infraestruturas técnicas. A ferramenta permite rastrear conexões ocultas entre múltiplos domínios ao cruzar metadados de rede, como servidores de e-mail (MX) compartilhados, blocos de endereços IP comuns ou o mesmo número de sistema autônomo (ASN), o que viabiliza a identificação do real perímetro digital de organizações investigadas ou campanhas de fraude estruturadas na web.",
    "notes": "* A ferramenta consolida dados de maneira passiva em sua interface gráfica, o que ajuda a otimizar a OPSEC do investigador ao evitar a necessidade de interações ativas diretas (como requisições `dig` ou `nslookup`) a partir da máquina local contra os servidores do alvo.\n* É ideal para mapear rapidamente a arquitetura de rede associada a sites suspeitos ou páginas de phishing antes de proceder com análises forenses mais aprofundadas."
  },
  {
    "id": "DotDB",
    "title": "DotDB",
    "url": "https://dotdb.com/",
    "tipo": "Motor de Busca e Banco de Dados de Nomes de Domínio (Domain Name Search Engine)",
    "utilidade": "Busca reversa de domínios por palavra-chave, monitoramento de marcas e mapeamento de infraestrutura digital correlacionada.",
    "descricao": "O DotDB é um motor de busca especializado em nomes de domínio que gerencia um banco de dados massivo contendo informações sobre centenas de milhões de registros distribuídos em praticamente todas as extensões disponíveis (TLDs e ccTLDs). A plataforma permite a execução de consultas textuais para identificar qualquer domínio registrado na internet que contenha uma palavra-chave, substring ou padrão específico em seu nome.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito da inteligência cibernética (CYBINT) e investigações em fontes abertas, o DotDB desempenha um papel fundamental no mapeamento de ativos digitais e na descoberta de infraestruturas correlacionadas. A partir de um único indicador (como o nome de uma marca ou um termo peculiar), o analista consegue rastrear redes dissimuladas de sites, portais fraudulentos criados para campanhas de phishing ou typosquatting, além de identificar a amplitude da presença digital de uma determinada organização ou ator de ameaça na Surface Web.",
    "notes": "* Devido ao fato de o DotDB consultar um índice próprio preexistente (pesquisa passiva), a execução de buscas na plataforma não gera tráfego de rede direcionado ou alertas nos servidores do alvo, garantindo a integridade da OPSEC do investigador.\n* Recomenda-se que o analista utilize os resultados obtidos no DotDB como leads iniciais, cruzando posteriormente os nomes de domínio encontrados com ferramentas de resolução de DNS e análise de certificados SSL/TLS para constatar se compartilham da mesma infraestrutura técnica ativa (como o mesmo endereço IP ou ASN)."
  },
  {
    "id": "DuckDuckGo",
    "title": "DuckDuckGo",
    "url": "https://duckduckgo.com/",
    "tipo": "Motor de Busca Web Privativo e Indexador Global",
    "utilidade": "Mecanismo de busca privativo na web para indexação abrangente, consultas neutras e execução de dorks sem rastreamento de dados pessoais",
    "descricao": "O DuckDuckGo é um mecanismo de busca na web voltado para a preservação da privacidade e confidencialidade das consultas dos usuários. A plataforma indexa a rede mundial de computadores por meio de seu próprio rastreador (*DuckDuckBot*) e da agregação de centenas de fontes externas (como Bing, Wikipedia e parceiros próprios). Diferente dos mecanismos comerciais tradicionais, o DuckDuckGo não rastreia o histórico de navegação, não associa consultas a perfis de usuários, não armazena endereços IP em logs persistentes e não constrói perfis comportamentais para direcionamento de anúncios.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "func/busca-dorks",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No ciclo de inteligência de fontes abertas, o DuckDuckGo serve como um dos principais vetores na fase de reconhecimento e coleta de inteligência de superfície. A plataforma permite a condução de varreduras amplas sem que as consultas sejam contaminadas pela \"bolha de filtros\" (*filter bubble*), garantindo resultados neutros e reprodutíveis. Além disso, a intermediate de requisições fortalece a segurança operacional (OPSEC) do analista ao evitar que termos de pesquisa investigativos ou sensíveis fiquem associados à identidade e aos metadados de telemetria do pesquisador.",
    "notes": "* A plataforma dispõe do recurso de atalhos rápidos de redirecionamento (comandos `!bangs`, como `!w` para Wikipedia ou `!g` para Google criptografado), agilizando pesquisas direcionadas a repositórios e serviços específicos.\n* Para automatizar pesquisas ou integrar consultas em rotinas e scripts de investigação via linha de comando, é possível utilizar ferramentas de console compatíveis, como a CLI `ddgr`."
  },
  {
    "id": "E-mail Header Analyzer (Gaijin.at)",
    "title": "E-mail Header Analyzer (Gaijin.at)",
    "url": "https://gaijin.at/en/tools/e-mail-header-analyzer",
    "tipo": "Analisador de Cabeçalho de E-mail (E-mail Header Analyzer)",
    "utilidade": "Análise estática de cabeçalhos de e-mail, rastreamento de rota de servidores e detecção de spoofing.",
    "descricao": "O Gaijin.at E-mail Header Analyzer é uma utilidade web desenvolvida para decodificar, estruturar e analisar metadados técnicos ocultos contidos em cabeçalhos brutos de mensagens eletrônicas (e-mails). A ferramenta processa as linhas de texto inseridas pelo usuário e organiza de forma legível o fluxo de entrega da mensagem, explicitando carimbos de data/hora (timestamps), clientes de e-mail utilizados, servidores de trânsito, registros de segurança (como SPF, DKIM e DMARC) e os saltos (hops) efetuados pela mensagem desde a origem até o destino.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações baseadas em fontes abertas e cibercrimanalidade, a análise de cabeçalhos é fundamental para auditar a autenticidade de comunicações eletrônicas. A ferramenta permite realizar a engenharia reversa de e-mails suspeitos (phishing, ameaças ou fraudes corporativas), ajudando o analista a identificar o verdadeiro servidor de origem, detectar técnicas de falsificação de remetente (email spoofing) e extrair os primeiros indícios de autoria.",
    "notes": "* Para extrair as informações corretas, o analista deve obter o código-fonte completo da mensagem (\"exibir original\", \"ver cabeçalho completo\" ou \"ver código-fonte\" dependendo do provedor como Gmail ou Outlook) e copiar o bloco inteiro de texto para a caixa de análise da plataforma.\n* Como a plataforma não realiza consultas ativas de rede (como Whois ou geolocalização dos IPs encontrados), o investigador deve utilizar os endereços IP extraídos pelo Gaijin.at como novos alvos (*pivoting*) em ferramentas externas especializadas em infraestrutura para complementar o mapa da investigação."
  },
  {
    "id": "e-Simples Auditoria - Consulta CNPJ",
    "title": "e-Simples Auditoria - Consulta CNPJ",
    "url": "https://www.esimplesauditoria.com/consulta-cnpj",
    "tipo": "Portal Web de Consulta Cadastral e Inteligência Corporativa",
    "utilidade": "Consulta e extração de dados cadastrais, situação fiscal e quadro societário (QSA) de pessoas jurídicas brasileiras",
    "descricao": "A ferramenta de Consulta CNPJ da e-Simples Auditoria é uma interface web voltada para a busca e consolidação de informações cadastrais de empresas registradas no Brasil. A plataforma consome e organiza dados públicos da Receita Federal e de órgãos fazendários, disponibilizando de forma estruturada a Razão Social, Nome Fantasia, situação cadastral, data de abertura, Classificação Nacional de Atividades Econômicas (CNAE principal e secundários), endereço físico completo, regime de tributação (como opção pelo Simples Nacional/MEI) e a composição do Quadro de Sócios e Administradores (QSA).",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações corporativas, Due Diligence, recuperação de ativos e inteligência financeira (FinINT), a ferramenta atua como um facilitador ágil para triagem e levantamento societário. Ela permite ao analista identificar rapidamente a composição societária de uma empresa alvo, mapear administradores para realização de *pivoting* em pessoas físicas, verificar o histórico/status de atividade fiscal e validar endereços declarados para cruzamento com dados geoespaciais (GEOINT).",
    "notes": "* A busca exige a inserção do número de CNPJ (14 dígitos) para retornar o relatório consolidado da entidade.\n* Por se tratar de um indexador intermediário de dados abertos, recomenda-se que dados críticos em auditorias formais ou relatórios periciais sejam contravalidados na base oficial da Receita Federal (Emissão de Comprovante de Inscrição e Situação Cadastral).\n* Excelente alternativa para triagem inicial rápida quando bases governamentais diretas apresentam instabilidade ou sobrecarga de CAPTCHA."
  },
  {
    "id": "Emkei.cz",
    "title": "Emkei.cz",
    "url": "https://emkei.cz/",
    "tipo": "Serviço Web de Envio de E-mail (Fake Mailer)",
    "utilidade": "Envio de e-mails customizados e simulados (email spoofing) para testes de engenharia social e auditoria de segurança",
    "descricao": "O Emkei.cz é uma plataforma online de \"fake mailer\" estruturada para permitir o envio de e-mails com cabeçalhos SMTP totalmente customizáveis. A ferramenta possibilita a alteração arbitrária de campos críticos como o remetente (From), destinatário (To), assunto, conteúdo da mensagem (em formato de texto simples ou código HTML estruturado), além de permitir a inclusão de arquivos anexos e a parametrização de cabeçalhos avançados, como *Reply-To*, *Errors-To* e variáveis personalizadas do protocolo de correio eletrônico.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações baseadas em fontes abertas e operações de inteligência, a ferramenta atua como um recurso de suporte tático para a validação de defesas tecnológicas e para a execução de engajamentos controlados. Ela permite simular o vetor de comunicação por e-mail, auxiliando analistas a testar a credulidade de alvos em cenários de engenharia social estruturada ou a avaliar a capacidade de resposta e conformidade de segurança de uma organização sob análise.",
    "notes": "- É uma ferramenta ideal para auditar a eficácia de mecanismos de filtragem de spam e a correta implementação de políticas de segurança de e-mail."
  },
  {
    "id": "Epieos",
    "title": "Epieos",
    "url": "https://epieos.com/",
    "tipo": "Ferramenta de Busca e Identificação (Pivoting)",
    "utilidade": "Busca reversa de e-mails e números de telefone para pivoting e identificação de contas associadas",
    "descricao": "O Epieos é uma plataforma modular de inteligência de fontes abertas (OSINT) especializada na realização de buscas reversas automatizadas a partir de e-mails ou números de telefone. A ferramenta consulta de forma passiva diversas APIs de plataformas globais (com forte ênfase no ecossistema Google, Skype e redes sociais) para extrair identificadores exclusivos (como o GAIA ID), nomes reais, fotos de perfil, avaliações no Google Maps e calendários públicos vinculados ao dado inicial.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/telefone",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No ciclo de inteligência, o Epieos atua como uma ferramenta fundamental na fase de coleta e expansão de dados (*pivoting*). A partir de um único indicador de comprometimento (IoC) ou dado isolado do alvo (um e-mail ou telefone), o analista consegue mapear de forma imediata a presença digital da entidade em múltiplos serviços de terceiros, validar a autenticidade da conta e obter novos elementos de identificação biográfica sem interagir diretamente com o alvo.",
    "notes": "* A principal vantagem técnica da ferramenta é o seu caráter passivo: as consultas às APIs não geram notificações, alertas de segurança ou e-mails de \"tentativa de login\" para a conta do alvo investigado.\n* O ID gerado em buscas do Google (GAIA ID) pode ser utilizado posteriormente em outras ferramentas complementares para rastrear de forma retroativa álbuns de fotos e históricos de avaliações físicas deixadas pelo alvo no Google Maps."
  },
  {
    "id": "Escavador",
    "title": "Escavador",
    "url": "https://www.escavador.com/",
    "tipo": "Plataforma de Consulta e Inteligência em Fontes Públicas",
    "utilidade": "Busca e agregação de registros públicos, diários oficiais e processos judiciais de pessoas e empresas no Brasil",
    "descricao": "O Escavador é uma plataforma brasileira especializada na centralização, estruturação e indexação de dados públicos provenientes de diários oficiais, tribunais de justiça e órgãos governamentais. A ferramenta compila essas informações fragmentadas e organiza perfis automatizados que reúnem o histórico jurídico, menções profissionais, nomeações públicas e trajetórias acadêmicas de pessoas físicas, além de dados institucionais e processos associados a pessoas jurídicas.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações focadas no território brasileiro, a ferramenta desempenha um papel fundamental nas fases de inteligência societária, levantamento patrimonial e análise de antecedentes. Ela permite ao analista identificar de maneira passiva e rápida se um indivíduo ou empresa possui litígios judiciais ativos, rastrear diários oficiais em busca de vínculos empregatícios com o setor público e validar informações biográficas por meio do cruzamento automatizado com outras fontes indexadas.",
    "notes": "* Devido à alta incidência de homônimos em registros públicos e processos judiciais no Brasil, o analista deve cruzar as informações obtidas (como localização, profissão ou área de atuação) para validar se os registros pertencem de fato ao alvo investigado.\n* Os dados exibidos na plataforma são baseados em indexações periódicas; portanto, para fins de comprovação legal ou em situações críticas, o analista deve extrair o número do processo ou da publicação localizado e consultá-lo diretamente na fonte primária do tribunal de origem."
  },
  {
    "id": "eTools.ch",
    "title": "eTools.ch",
    "url": "https://www.etools.ch/",
    "tipo": "Metabuscador Web Privativo",
    "utilidade": "Mecanismo de metabusca federada para consultas simultâneas e anônimas em múltiplos motores de busca da web",
    "descricao": "O eTools.ch é um serviço de metabusca transparente e privativo sediado na Suíça. A ferramenta atua como um agregador federado de motores de pesquisa, realizando consultas simultâneas em diversos buscadores comerciais e independentes de relevância global (como Google, Bing, Brave, Yahoo, Wikipedia, Exalead, Mojeek, entre outros). A plataforma normaliza, desduplica e reordena os resultados em uma interface centralizada e rápida, sem armazenar dados de identificação pessoal, sem registrar endereços IP ou histórico de pesquisas e sem injetar cookies persistentes de rastreamento comercial.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No ciclo de inteligência de fontes abertas, o eTools.ch serve como um vetor primário eficiente na fase de reconhecimento e coleta de dados de superfície. Ao federar consultas em múltiplos indexadores em uma única busca, o analista ganha amplitude investigativa e contorna o efeito da \"bolha de filtros\" (*filter bubble*). Além disso, sua arquitetura atua como uma barreira técnica de proteção operacional (OPSEC), intermediando a busca de modo a não vincular termos sensíveis de investigação ao endereço IP ou ao perfil digital do investigador.",
    "notes": "* A plataforma oferece opções de configuração avançada de pesquisa, permitindo que o investigador selecione manualmente quais motores de busca parceiros devem ser incluídos ou excluídos na composição dos resultados.\n* Permite a aplicação de filtros linguísticos e contextuais (como seleção de idioma, país de preferência e restrição estrita de termos entre aspas) para otimizar a precisão da varredura na web de superfície."
  },
  {
    "id": "Everypixel",
    "title": "Everypixel",
    "url": "https://www.everypixel.com/",
    "tipo": "Metabuscador de Imagens / Ferramenta de Análise Visual e IMINT",
    "utilidade": "Mecanismo de busca e indexação visual reversa de banco de imagens e análise de mídias por Inteligência Artificial",
    "descricao": "O Everypixel é um mecanismo de busca avançado e metabuscador visual alimentado por inteligência artificial, especializado em indexar, filtrar e agregar milhões de fotografias de bancos de imagens gratuitos e pagos de todo o mundo. A plataforma conta com recursos de busca reversa de imagens, classificação estética por aprendizado de máquina, detecção de padrões visuais, reconhecimento de componentes por visão computacional e identificação de imagens geradas por IA.",
    "testada": false,
    "tags": [
      "func/busca-identificacao",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, inteligência visual (IMINT) e verificação de mídias, o Everypixel desempenha um papel essencial no rastreamento de procedência de conteúdos gráficos. Ele permite que o analista identifique se uma imagem utilizada por um perfil sob investigação é, na realidade, uma foto de estoque comercial, uma mídia copiada de catálogos públicos ou um conteúdo gerado sinteticamente por IA, auxiliando diretamente na desarticulação de perfis falsos (*sock puppets*) e campanhas de desinformação.",
    "notes": "* É uma ferramenta altamente recomendada para a etapa de triagem de avatares e fotos de perfil de alvos investigados, validando rapidamente se a imagem pertence a um modelo de banco de imagens antes de prosseguir com buscas biométricas mais profundas.\n* O sistema de filtros permite segmentar buscas por cor predominante, orientação e isolamento de fundo, o que agiliza o rastreamento de elementos visuais parciais em investigações de IMINT."
  },
  {
    "id": "Exa (antigo Metaphor)",
    "title": "Exa (antigo Metaphor)",
    "url": "https://exa.ai/",
    "tipo": "Motor de Busca Neural e Semântico Baseado em IA",
    "utilidade": "Mecanismo de busca semântica e API projetada para recuperação de informações na web através de embeddings neurais e Large Language Models (LLMs)",
    "descricao": "O Exa é um mecanismo de busca e API construído especificamente para modelos de inteligência artificial e analistas de dados. Diferente dos indexadores convencionais baseados em correspondência exata de palavras-chave, o Exa utiliza representações vetoriais (*embeddings*) e modelos de linguagem para processar consultas em linguagem natural ou por similaridade semântica. O sistema prevê URLs e recupera páginas web com base no significado contextual do texto, possibilitando buscas por intenção, conceito, estrutura textual ou links análogos.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas, o Exa é aplicado na fase de reconhecimento e coleta de inteligência em larga escala. Por operar por similaridade semântica em vez de correspondência estrita de termos, ele viabiliza a descoberta de fontes, relatórios técnicos, artigos institucionais e conteúdos correlacionados que não seriam capturados por dorks tradicionais ou buscas por palavras-chave em buscadores comerciais, refinando a identificação de alvos temáticos e conexões indiretas.",
    "notes": "* A busca semântica funciona melhor quando alimentada com frases completas, afirmações ou descrições textuais que se assemelhem ao conteúdo da página desejada, em vez de listas isoladas de palavras-chave.\n* A plataforma oferece suporte a filtros avançados de domínio, datas de publicação e pesquisa por similaridade de URL (*similar links*), o que facilita a expansão de dados a partir de uma fonte de referência conhecida."
  },
  {
    "id": "Exif Viewer",
    "title": "Exif Viewer",
    "url": "https://addons.mozilla.org/pt-BR/firefox/addon/exif-viewer/",
    "tipo": "Extensão de Navegador / Ferramenta de Análise de Metadados",
    "utilidade": "Extração e análise de metadados EXIF/IPTC/XMP de imagens diretamente no navegador para análise forense e geolocalização",
    "descricao": "O Exif Viewer é uma extensão para o navegador Mozilla Firefox projetada para ler e exibir metadados estruturados (como EXIF, IPTC e XMP) embutidos em arquivos de imagem. A ferramenta inspeciona os parâmetros técnicos ocultos da mídia diretamente da página web ou de arquivos locais, revelando dados como o modelo da câmera/smartphone, configurações de captura (abertura, ISO, velocidade), data e hora exatas da criação do arquivo, software de edição utilizado e, quando disponíveis, as coordenadas geográficas precisas (GPS) de onde a foto foi tirada.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "func/forense-local",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações digitais, esta extensão é amplamente utilizada nas fases de verificação de mídias, forense digital e inteligência geoespacial (GEOINT). Ela permite ao analista auditar de forma passiva e instantânea a integridade de uma evidência visual sem a necessidade de baixar o arquivo e submetê-lo a softwares externos pesados. A identificação de coordenadas GPS embutidas possibilita a plotagem imediata do local do registro em mapas, enquanto os carimbos de data/hora e dados do dispositivo auxiliam na cronolocalização e na detecção de possíveis manipulações ou fraudes em imagens de interesse.",
    "notes": "* O analista deve estar ciente de que a maioria das grandes plataformas de redes sociais (como Instagram, Facebook e X) remove automaticamente todos os metadados EXIF das imagens no momento do upload por motivos de privacidade dos usuários. Portanto, a ferramenta possui maior eficácia quando aplicada a imagens hospedadas em blogs pessoais, sites de notícias, portais governamentais ou arquivos originais obtidos diretamente de alvos.\n* A ausência de dados EXIF não significa necessariamente que a foto não possui histórico; ela pode ter sido limpa propositalmente pelo autor ou processada por um servidor web. Sempre combine a análise técnica com técnicas de busca reversa de imagens e análise contextual visual."
  },
  {
    "id": "ExifData.com",
    "title": "ExifData.com",
    "url": "https://www.exifdata.com/",
    "tipo": "Ferramenta Web de Forense Digital e Análise de Metadados",
    "utilidade": "Extração, leitura e análise de metadados ocultos (EXIF, IPTC, XMP) embutidos em arquivos de imagem",
    "descricao": "O ExifData.com é uma aplicação web voltada para a inspeção e extração de metadados técnicos incorporados em arquivos de imagem digital (como JPEG, TIFF, PNG e RAW). A ferramenta processa o arquivo submetido pelo usuário e decodifica as estruturas de dados dos padrões EXIF, IPTC e XMP, revelando parâmetros de captura da câmera/smartphone (marca, modelo, abertura, velocidade do obturador, ISO, distância focal), data e hora de criação/modificação, dados de software de edição e coordenadas geográficas de GPS (latitude, longitude e altitude).",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações em fontes abertas, verificação de mídias e inteligência geoespacial (GEOINT), o ExifData.com atua como uma ferramenta prática para validação da autenticidade e contextualização de evidências visuais. A extração de dados técnicos permite ao analista realizar a cronolocalização da mídia por meio de carimbos de data/hora originais, identificar o equipamento utilizado pelo autor da foto e mapear o local exato onde o registro foi capturado a partir de coordenadas GPS embutidas, auxiliando na verificação de álibis e atribuição de conteúdo.",
    "notes": "* A maioria das redes sociais de grande alcance (como X/Twitter, Instagram, Facebook e WhatsApp) elimina os metadados EXIF no momento do upload ou envio; a ferramenta tem eficácia máxima quando aplicada a mídias originais obtidas de blogs pessoais, fóruns, sites governamentais, repositórios em nuvem ou arquivos brutos enviados diretamente.\n* Sob a perspectiva de OPSEC, o upload de arquivos contendo informações confidenciais ou sensíveis em plataformas web de terceiros deve ser evitado; para mídias críticas, recomenda-se a extração local por meio de ferramentas de linha de comando como o ExifTool."
  },
  {
    "id": "ExifTool",
    "title": "ExifTool",
    "url": "https://exiftool.org/",
    "tipo": "Utilitário de Linha de Comando para Análise de Metadados",
    "utilidade": "Leitura, escrita e modificação de metadados (EXIF, IPTC, XMP) de múltiplos formatos de arquivos para análise forense e higienização de mídias",
    "descricao": "O ExifTool é um aplicativo multiplataforma de linha de comando e uma biblioteca Perl dedicada à leitura, escrita e edição de metadados estruturados contidos em uma ampla variedade de arquivos (como imagens, vídeos, áudios, PDFs e documentos de texto). A ferramenta é considerada a referência global para extração de dados ocultos, decodificando tags complexas de fabricantes de câmeras, informações de direitos autorais, históricos de modificação de software, parâmetros técnicos de captura e coordenadas geográficas de satélite.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "func/forense-local",
      "plataforma/desktop",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações digitais baseadas em fontes abertas, o ExifTool desempenha um papel indispensável nas fases de análise forense e inteligência geoespacial (GEOINT). Ele permite ao analista processar de forma passiva arquivos obtidos durante a investigação para extrair carimbos de data/hora (*timestamps*) originais da criação da mídia e coordenadas de GPS. Esses dados são fundamentais para os processos de cronolocalização e geolocalização. Adicionalmente, possui grande relevância na vertente defensiva da OPSEC, pois permite remover completamente todos os metadados de arquivos gerados pelo próprio investigador antes de enviá-los ou compartilhá-los na internet, mitigando o vazamento de dados operacionais sensíveis.",
    "notes": "* Por funcionar de maneira 100% offline, a execução do ExifTool preserva a segurança de operações (OPSEC) do analista, garantindo que o exame dos arquivos coletados não gere tráfego na rede ou envie alertas para o criador do arquivo.\n* A ferramenta possui excelente capacidade de automação em lote (*batch processing*), permitindo varrer diretórios inteiros com um único comando no terminal e exportar os metadados consolidados de centenas de mídias simultaneamente em formatos estruturados como JSON, CSV ou XML para posterior análise de conexões."
  },
  {
    "id": "ExpandURL",
    "title": "ExpandURL",
    "url": "https://www.expandurl.net/",
    "tipo": "Ferramenta de Análise e Desmascaramento de Links",
    "utilidade": "Expansão e análise de URLs encurtadas para identificação do destino final e preservação de OPSEC",
    "descricao": "O ExpandURL é uma plataforma online desenvolvida para expandir e revelar o endereço de destino real oculto por trás de URLs encurtadas (como as geradas por serviços como bit.ly, tinyurl, t.co, entre outros). A ferramenta processa a cadeia de redirecionamentos HTTP, inspeciona os cabeçalhos de resposta dos servidores envolvidos e fornece um detalhamento técnico do link final sem exigir que o usuário acesse diretamente o endereço.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Nas investigações em fontes abertas, o ExpandURL desempenha um papel crítico em inteligência de infraestrutura e na segurança das operações (OPSEC). Ele permite ao analista desmascarar links curtos coletados em perfis de alvos, e-mails ou fóruns, mapeando os domínios reais de destino e identificando possíveis vetores de phishing, malware ou links parametrizados para rastreamento. Ao fazer isso de forma intermediada, a ferramenta evita que a máquina do investigador interaja diretamente com o servidor final, mitigando o risco de detecção por contra-inteligência ou acionamento de armadilhas digitais (*honeytokens*).",
    "notes": "* Ao utilizar a ferramenta, o endereço IP registrado nos logs do serviço de encurtamento será o dos servidores do ExpandURL, mantendo a identidade técnica do analista preservada durante o processo de expansão.\n* Recomenda-se analisar cuidadosamente a URL final expandida em busca de parâmetros de rastreamento (como variáveis de UTM ou IDs de token), pois estes elementos podem revelar conexões com outras campanhas digitais ou contas específicas associadas ao criador do link."
  },
  {
    "id": "Export Comments",
    "title": "Export Comments",
    "url": "https://exportcomments.com/",
    "tipo": "Ferramenta Web de Extração e Raspagem de Dados (Scraper SaaS)",
    "utilidade": "Extração automatizada e exportação estruturada de comentários, respostas e dados de engajamento de múltiplas plataformas de redes sociais",
    "descricao": "O Export Comments é um serviço baseado na web projetado para coletar, extrair e exportar comentários, respostas e metadados de engajamento de postagens em diversas redes sociais (incluindo Instagram, YouTube, TikTok, Facebook, Twitter/X e Reddit). A ferramenta processa a URL fornecida e compila as interações da postagem em planilhas estruturadas (Excel/CSV), contendo nomes de perfil, identificadores de usuário (@handles), carimbos de data/hora (timestamps), textos dos comentários e contagens de reações/curtidas.",
    "testada": false,
    "tags": [
      "fonte/redes-sociais",
      "func/scrapers-automacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações em mídias sociais (SOCMINT), análise de redes de influência, rastreamento de campanhas de desinformação e levantamento de vínculos humanos, o Export Comments automatiza o processo de coleta massiva de interações públicas. Em vez de registrar manualmente centenas ou milhares de comentários em publicações de interesse, o analista obtém uma base estruturada que viabiliza a análise de sentimento, a identificação de redes de apoio/ataque (*botnets* ou *troll farms*) e o mapeamento de perfis que interagem sistematicamente com o alvo investigado.",
    "notes": "* Os relatórios exportados em CSV ou XLSX podem ser importados diretamente em softwares de análise de grafos e redes (como Gephi ou Maltego) para mapear nós de interação e perfis centrais em discussões online.\n* Por se tratar de um scraper centralizado em nuvem, minimiza a exposição do IP real do analista nas plataformas de mídia social consultadas durante a raspagem dos dados.\n* Em publicações de grande engajamento com dezenas de milhares de comentários, a limitação da versão gratuita pode exigir o uso de scripts locais ou a contratação de planos avulsos."
  },
  {
    "id": "ExpressVPN",
    "title": "ExpressVPN",
    "url": "https://www.expressvpn.com/",
    "tipo": "Ferramenta de Segurança e Anonimização de Rede (VPN)",
    "utilidade": "Criptografia de tráfego de rede, mascaramento de endereço IP e proteção de identidade técnica para mitigação de rastreamento",
    "descricao": "O ExpressVPN é um serviço comercial de Rede Virtual Privada (VPN) projetado para tunelar e criptografar o tráfego de internet do usuário, mascarando o seu endereço IP real. A ferramenta opera através de uma infraestrutura global de servidores de alta velocidade distribuídos em múltiplos países, utilizando protocolos de segurança avançados (como o Lightway) para impedir a interceptação de dados transitados e mitigar o rastreamento geográfico ou técnico por parte de terceiros.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "plataforma/desktop",
      "plataforma/mobile",
      "acesso/pago"
    ],
    "utilidade_Osint": "Em investigações de fontes abertas, a plataforma atua estritamente na camada de Segurança das Operações (OPSEC) e defesa do analista. Ao intermediar a comunicação entre a máquina de investigação e os servidores de destino, ela impede que administradores de sites visados ou sistemas de contra-inteligência registrem o IP real, o provedor de internet (ISP) ou a localização geográfica verdadeira do investigador. Além disso, a ferramenta permite contornar bloqueios geográficos (geoblocking), viabilizando o acesso passivo a conteúdos e plataformas que restringem o tráfego vindo de determinadas regiões ou países.",
    "notes": "* Para a manutenção rigorosa da OPSEC, é fundamental que o analista mantenha o recurso de *Kill Switch* (Network Lock) ativado. Esse mecanismo interrompe imediatamente todo o fluxo de internet caso a conexão com a VPN caia, impedindo o vazamento acidental do endereço IP real do investigador para o servidor do alvo.\n* É importante ressaltar que o uso isolado de uma VPN altera apenas a camada de rede (endereçamento IP), não protegendo o analista contra o rastreamento baseado em características do navegador (*browser fingerprinting*). Para uma blindagem eficiente, o ExpressVPN deve ser operado em conjunto com máquinas virtuais dedicadas e navegadores focados em estrita privacidade."
  },
  {
    "id": "Extrator CPF/CNPJ Console",
    "title": "Extrator CPF/CNPJ Console",
    "url": "https://github.com/willianwistuba/ExtratorCPFCNPJ_Console/blob/main/extratorCPFCNPJ.js",
    "tipo": "Script de Processamento e Análise de Dados Local",
    "utilidade": "Extração e triagem automatizada de CPFs e CNPJs em massas de dados de texto locais via expressões regulares",
    "descricao": "O Extrator CPF/CNPJ Console é um script em JavaScript desenvolvido para automatizar a varredura, identificação e extração de números de Cadastro de Pessoas Físicas (CPF) e Cadastro Nacional da Pessoa Jurídica (CNPJ). Operando diretamente na linha de comando, a ferramenta processa cadeias de caracteres (*strings*) ou arquivos de texto estruturados e desestruturados, aplicando expressões regulares (RegEx) para isolar esses identificadores fiscais brasileiros de forma célere.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "func/busca-identificacao",
      "func/forense-local",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, a ferramenta desempenha um papel importante na fase de processamento e análise de grandes volumes de dados textuais obtidos localmente (como vazamentos de bancos de dados, dumps de fóruns, logs de servidores ou relatórios desestruturados). O script permite ao analista filtrar e extrair em lote os registros de indivíduos e empresas de interesse, acelerando a triagem de alvos em potenciais repositórios de informações sem depender de conexões externas.",
    "notes": "* Por funcionar de maneira puramente offline, o script garante total segurança das operações (OPSEC), uma vez que os dados textuais (frequentemente confidenciais ou sensíveis) analisados pelo investigador não são compartilhados com serviços ou APIs de terceiros na nuvem.\n* É recomendável que o analista inspecione o código para verificar se o script executa o algoritmo de validação matemática dos dígitos verificadores ou se apenas realiza a captura do formato numérico via RegEx, minimizando assim a ocorrência de falsos positivos gerados por outras sequências numéricas longas presentes no texto."
  },
  {
    "id": "Extrator de Links (Inspetor de Elementos)",
    "title": "Extrator de Links (Inspetor de Elementos)",
    "url": "https://github.com/willianwistuba/extracao_URLs_Inspetor_Elementos/blob/main/extractorLinks.js",
    "tipo": "Script de Extração de Dados Local (Browser Console)",
    "utilidade": "Extração automatizada de hiperlinks e URLs contidos no DOM de uma página web por meio do console de desenvolvedor",
    "descricao": "O Extrator de Links é um script em JavaScript projetado para ser executado diretamente no Console do Desenvolvedor (DevTools) de qualquer navegador de internet. A ferramenta realiza uma varredura automatizada no Modelo de Objeto do Documento (DOM) da página web que está atualmente aberta, localizando, isolando e listando de forma estruturada todos os hiperlinks (`href`) e URLs presentes nas tags HTML.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/busca-identificacao",
      "func/forense-local",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações de fontes abertas, este utilitário é empregado na fase de triagem, coleta passiva e mapeamento de infraestrutura digital. Ele permite ao analista extrair em lote centenas de links contidos em páginas complexas (como listas de resultados de motores de busca, diretórios, perfis ou fóruns) sem a necessidade de capturá-los manualmente. Como o script atua estritamente sobre o código que já foi renderizado pelo navegador, o processo não gera novas requisições de rede ou tráfego adicional direcionado ao servidor do alvo, mitigando riscos de detecção.",
    "notes": "* Por operar localmente no ambiente do cliente (Client-Side), a extração preserva a segurança das operações (OPSEC), pois os administradores do site alvo não possuem meios técnicos para diferenciar se o investigador apenas visualizou a página ou se executou o comando para extrair os links em lote.\n* O script demonstra grande eficácia em portais que utilizam rolagem infinita (*infinite scroll*) ou carregamento dinâmico por chamadas AJAX; o analista pode navegar pela página até que todo o conteúdo desejado seja carregado na tela e, em seguida, rodar o script para consolidar todos os links gerados em uma única saída limpa."
  },
  {
    "id": "FAA Aircraft Registry - Name Inquiry",
    "title": "FAA Aircraft Registry - Name Inquiry",
    "url": "https://registry.faa.gov/aircraftinquiry/Search/NameInquiry",
    "tipo": "Portal de Consulta em Base de Dados Pública Governamental",
    "utilidade": "Consulta e identificação de registros de propriedade de aeronaves civis nos Estados Unidos por nome de pessoa física ou razão social",
    "descricao": "O *Name Inquiry* do Registro de Aeronaves da Federal Aviation Administration (FAA) é o mecanismo de consulta pública oficial do governo dos Estados Unidos para verificar a titularidade e o registro de aeronaves civis norte-americanas (prefixo N-Number). O sistema permite realizar pesquisas estruturadas a partir do nome de indivíduos ou da razão social de empresas, retornando uma listagem completa das aeronaves registradas sob aquela titularidade, com detalhes técnicos de fabricante, modelo, número de série, ano de fabricação, tipo de motor, status do certificado de aeronavegabilidade e endereço cadastral declarado.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "alvo/veiculo",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações patrimoniais transnacionais, auditorias de *compliance*, Due Diligence corporativa e rastreamento de ativos de alto valor (*Asset Recovery*), o serviço de busca por nome da FAA funciona como um poderoso indexador reverso. Ele permite descobrir aeronaves executivas, comerciais ou de aviação geral de propriedade direta ou indireta de alvos de interesse (indivíduos de alto patrimônio, empresas ou *trusts* fiduciários). Os números de cauda (*N-Numbers*) e números de série (MSN) obtidos operam como chaves primárias de pivotagem para sistemas de telemetria ADS-B, mapeamento de viagens executivas e cruzamento em bases societárias globais.",
    "notes": "* É muito comum que aeronaves registradas nos EUA pertençam a bancos fiduciários ou entidades de custódia (*Trustees*, como *Wells Fargo Bank Northwest NA Trustee* ou *Bank of Utah Trustee*) para preservar o sigilo do proprietário real. Nesses casos, o registro da FAA indicará a entidade fiduciária, exigindo cruzamento secundário com contratos de operação, licenças e logs de planos de voo para identificar o operador de fato.\n* Os prefixos *N-Number* obtidos na consulta podem ser inseridos imediatamente em plataformas de rastreamento de voos (como FlightAware, ADS-B Exchange e RadarBox) para auditar o histórico de rotas, movimentação transfronteiriça e aeródromos frequentados pelo alvo.\n* Para otimizar os resultados com nomes comuns, a plataforma permite filtros complementares por estado ou cidade dos EUA, o que ajuda a refinar a busca quando o analista dispõe de dados geográficos preliminares do investigado."
  },
  {
    "id": "FaceCheck.id",
    "title": "FaceCheck.id",
    "url": "https://facecheck.id/",
    "tipo": "Motor de Busca Biométrica / Investigação de Identidade",
    "utilidade": "Reconhecimento facial e busca reversa de imagens para identificação de pessoas e perfis na internet",
    "descricao": "O FaceCheck.id é um motor de busca especializado em reconhecimento facial baseado em inteligência artificial. A plataforma permite que o usuário envie a imagem do rosto de um indivíduo e, por meio do mapeamento de vetores biométricos, realize uma varredura em uma ampla base de dados indexada da internet. O sistema localiza correspondências visuais em redes sociais, fóruns, blogs, portais de notícias, sites institucionais e registros públicos (como arquivos de canais de denúncia ou cadastros criminais), apontando os links de onde as imagens semelhantes foram extraídas.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/busca-identificacao",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Nas investigações em fontes abertas, esta ferramenta é amplamente utilizada para a identificação de alvos e a verificação de mídias. A partir de uma fotografia isolada de um indivíduo, o analista pode realizar o *pivoting* para descobrir perfis em redes sociais que não utilizam o nome real do investigado, mapear apelidos, rastrear aparições na imprensa e desmascarar contas falsas (*sock puppets*) ou campanhas de desinformação baseadas em roubo de identidade digital (*catfishing*).",
    "notes": "* Sob a ótica da OPSEC defensiva, o analista deve avaliar os riscos de vazamento de dados ao fazer o upload da foto de um alvo em plataformas de terceiros na nuvem, uma vez que a imagem trafega por servidores externos e pode ficar retida no histórico ou nos logs de aprimoramento do algoritmo.\n* Os resultados são ordenados por uma pontuação de confiança (*confidence score*). O analista deve examinar manualmente as correspondências sugeridas para descartar falsos positivos gerados por sósias, variações extremas de iluminação, qualidade da foto ou manipulações digitais."
  },
  {
    "id": "FaceMorph.me",
    "title": "FaceMorph.me",
    "url": "https://facemorph.me/",
    "tipo": "Ferramenta de Geração de Imagens Sintéticas / Utilitário de OPSEC",
    "utilidade": "Geração e interpolação de rostos sintéticos baseados em Inteligência Artificial para a criação de personas e mitigação de buscas reversas.",
    "descricao": "O FaceMorph.me é uma plataforma web baseada em algoritmos de Inteligência Artificial Generativa (como redes adversárias generativas - GANs) que permite a criação, modificação e transição suave (interpolação) entre rostos humanos gerados sinteticamente. O utilizador pode navegar por um espaço latente de características faciais para customizar traços e gerar faces exclusivas de pessoas que não existem no mundo real.",
    "testada": false,
    "tags": [
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/personas"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, a ferramenta desempenha um papel crítico na vertente defensiva e na preparação operacional. A geração de rostos humanos hiper-realistas é fundamental para a estruturação de *Sock Puppets* (contas de cobertura), garantindo que as imagens de perfil utilizadas não pertençam a pessoas reais (evitando implicações éticas e legais) e impossibilitando o desmascaramento da identidade por meio de motores de busca reversa biométrica.",
    "notes": "* Por se tratar de uma imagem inteiramente gerada por IA, o ficheiro resultante não possui correspondência ou histórico prévio indexado na internet, o que neutraliza ferramentas de busca reversa de imagens operadas pelo alvo.\n* É recomendável que o analista inspecione visualmente o resultado para detetar eventuais artefactos comuns de IA (como fundos com distorções estranhas, assimetrias em acessórios ou deformações nas orelhas) antes de aplicar a imagem num perfil ativo, garantindo a verosimilhança da persona."
  },
  {
    "id": "FaceReader (Noldus)",
    "title": "FaceReader (Noldus)",
    "url": "https://www.noldus.com/facereader",
    "tipo": "Software de Análise Comportamental e Visão Computacional (IA)",
    "utilidade": "Análise automatizada de expressões faciais, emoções e características biométricas em arquivos de vídeo e imagem locais.",
    "descricao": "O FaceReader é um software de nível científico desenvolvido pela Noldus Information Technology para a análise automática de expressões faciais. A ferramenta utiliza modelos avançados de visão computacional e inteligência artificial para codificar e classificar instantaneamente as expressões faciais humanas em emoções básicas (alegria, tristeza, raiva, surpresa, medo, nojo e neutralidade), além de estimar métricas como idade, género, etnia, direção do olhar e orientação da cabeça.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/busca-identificacao",
      "func/analise-midia-integridade",
      "plataforma/desktop",
      "acesso/pago"
    ],
    "utilidade_Osint": "No âmbito da inteligência de imagens (IMINT) e análise de mídias recolhidas, o FaceReader é aplicado no processamento analítico pós-coleta de vídeos, depoimentos, transmissões e entrevistas associadas a um alvo ou organização. A ferramenta permite extrair dados comportamentais objetivos, identificar microexpressões impercetíveis ao olho humano, mapear picos de stress cognitivo e validar a autenticidade de reações emocionais em materiais audiovisuais gravados.",
    "notes": "* Por operar de forma totalmente local para o processamento de mídias pré-gravadas, a ferramenta garante total OPSEC técnica durante a análise, já que nenhum dado sensível ou arquivo do alvo é transmitido para servidores de terceiros.\n* É ideal para complementar relatórios de inteligência humana (HUMINT) e análise comportamental, permitindo exportar gráficos de linha temporal e tabelas numéricas de dados que correlacionam frames específicos de um vídeo a reações de simulação ou incongruência verbal."
  },
  {
    "id": "FaceSwapper.ai",
    "title": "FaceSwapper.ai",
    "url": "https://faceswapper.ai/",
    "tipo": "Ferramenta de Manipulação de Imagem por IA / Utilitário de OPSEC",
    "utilidade": "Substituição automatizada de rostos em mídias digitais utilizando Inteligência Artificial para a customização e manutenção de personas de investigação.",
    "descricao": "O FaceSwapper.ai é uma plataforma online baseada em modelos de inteligência artificial generativa que executa a troca automatizada de rostos (*face swap*) em arquivos de imagem e vídeo. A ferramenta identifica os pontos biométricos de uma face em uma foto de origem e os projeta de forma fluida sobre o corpo e cenário de uma imagem de destino, preservando as expressões, iluminação e angulação do arquivo original.",
    "testada": false,
    "tags": [
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado",
      "opsec/personas"
    ],
    "utilidade_Osint": "No planejamento operacional e no desenvolvimento de inteligência humana digital (HUMINT), a ferramenta desempenha um papel tático para a segurança do investigador (OPSEC). Ela permite a criação e o enriquecimento de *Sock Puppets* (perfis falsos de cobertura) complexos, viabilizando que o analista insira o rosto gerado de uma persona sintética em diferentes contextos cotidianos, vestimentas e ambientes reais. Isso gera um histórico crível e uma linha do tempo realista para o perfil de investigação, mitigando suspeitas de contra-inteligência sem expor pessoas reais.",
    "notes": "* A ferramenta é ideal para superar a limitação de geradores estáticos (como o *This Person Does Not Exist*), que fornecem apenas fotos de rosto no estilo documento. Com o FaceSwapper, o analista pode colocar a face da persona em fotos de viagens, reuniões de trabalho ou eventos fictícios.\n* Recomenda-se realizar uma auditoria visual rigorosa na imagem final para identificar borrões na transição do cabelo, orelhas ou pescoço, além de passar o arquivo final por ferramentas de metadados para expurgar rastros digitais (*tags* EXIF) criados pela plataforma de IA antes de publicar a mídia na internet."
  },
  {
    "id": "Fake Name Generator",
    "title": "Fake Name Generator",
    "url": "https://pt.fakenamegenerator.com",
    "tipo": "Ferramenta de Suporte à OPSEC",
    "utilidade": "Geração de identidades sintéticas e dados fictícios para criação de personas (Sock Puppets)",
    "descricao": "O Fake Name Generator é uma plataforma online projetada para a criação automatizada de identidades fictícias completas e realistas. A ferramenta gera instantaneamente um perfil civil simulado, incluindo nome, endereço, número de telefone, data de nascimento, dados de emprego, características físicas e até mesmo dados financeiros temporários (como números de cartão de crédito válidos apenas em estruturas de testes algorítmicos), alinhados às características demográficas e geográficas do país escolhido pelo usuário.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, a ferramenta é amplamente utilizada na fase de preparação operacional, especificamente na construção de *Sock Puppets* (perfis de cobertura). Ela fornece uma base de dados biográficos coerente e padronizada para o preenchimento de cadastros e criação de contas em plataformas que exigem validações de dados pessoais, permitindo que o analista interaja com ambientes digitais hostis ou restritos sem expor seus dados reais ou comprometer a segurança da operação.",
    "notes": "* Embora a ferramenta gere números de telefone e e-mails fictícios para compor a identidade visual do perfil, esses dados específicos não são funcionais (não recebem SMS ou mensagens de ativação). O analista deve integrar esses dados a serviços reais de telefonia temporária (VoIP) e e-mails descartáveis caso necessite validar a conta criada.\n* Os algoritmos da plataforma geram CPFs ou SSNs que respeitam as regras matemáticas de validação locais, permitindo ultrapassar formulários básicos de cadastro automatizado, porém sem qualquer vínculo com bases governamentais reais."
  },
  {
    "id": "Fake Person Generator",
    "title": "Fake Person Generator",
    "url": "https://www.fakepersongenerator.com/",
    "tipo": "Ferramenta de Suporte à OPSEC / Gerador de Personas",
    "utilidade": "Geração assistida de identidades sintéticas para a criação de perfis dissimulados (Sock Puppets)",
    "descricao": "O Fake Person Generator é uma plataforma online projetada para a geração automatizada de perfis biográficos e cadastrais completamente fictícios. A ferramenta utiliza algoritmos de randomização associados a bancos de dados padronizados para fornecer dados verossímeis em tempo real, incluindo nomes complexos, endereços estruturados, números de telefone simulados, datas de nascimento, ocupações profissionais, características físicas e dados simulados de identificação civil (como o SSN norte-americano).",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/gratuito",
      "opsec/personas"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, a plataforma desempenha um papel fundamental na fase de preparação operacional, especificamente na estruturação da segurança defensiva e inteligência humana cibernética (HUMINT). Ela permite ao analista mitigar o risco de atribuição reversa (ligação da investigação à sua identidade real) ao fornecer insumos coerentes para preenchimento de cadastros e interações controladas em ambientes digitais.",
    "notes": "* Embora os dados gerados (como e-mails e números de telefone fictícios) sejam estruturalmente válidos para passar por máscaras de preenchimento de formulários, o analista deve acoplá-los a serviços reais de e-mails descartáveis e SMS temporários caso a plataforma de destino exija uma ativação de conta por token (OTP).\n* Recomenda-se registrar os dados biográficos gerados (hobbies, altura, profissão) no gerenciador de conhecimento da investigação (como o Obsidian) para manter a consistência da narrativa de cobertura da persona ao longo de missões de longo prazo, evitando contradições técnicas que possam alertar contra-inteligência do alvo."
  },
  {
    "id": "Falecidos no Brasil",
    "title": "Falecidos no Brasil",
    "url": "https://www.falecidosnobrasil.org.br/",
    "tipo": "Plataforma de Pesquisa de Registros Civis e Biográficos",
    "utilidade": "Consulta e validação de registros de óbito, obituários e dados de sepultamento no Brasil para fins cadastrais e genealógicos",
    "descricao": "O Falecidos no Brasil é um portal indexador e motor de busca centralizado projetado para a localização de registros de óbito, notas de falecimento, obituários e informações de sepultamento ocorridos em território nacional. A ferramenta agrega dados provenientes de fontes institucionais, administrações de cemitérios, funerárias e atos oficiais, permitindo a pesquisa estruturada por meio do nome completo do indivíduo, estado, município e período estimado do falecimento.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, a plataforma desempenha um papel importante na fase de validação do status vital de um alvo e no mapeamento de redes de relacionamentos familiares (genealogia investigativa). Ela permite confirmar o falecimento de indivíduos, obter datas exatas de óbito e locais de sepultamento, servindo como ponto de partida para a requisição de certidões oficiais ou para encerrar linhas de investigação sobre alvos presumidamente ativos.",
    "notes": "* Devido à descentralização histórica dos registros funerários e de cartórios no Brasil, a ferramenta pode não conter a totalidade dos óbitos do país. Caso o alvo não seja localizado de imediato, recomenda-se cruzar os dados com o Portal de Transparência do Registro Civil ou Diários Oficiais locais.\n* As notas de falecimento e obituários indexados frequentemente listam nomes de parentes de primeiro e segundo grau (cônjuges, filhos, pais, irmãos). Isso torna a ferramenta altamente eficaz para a descoberta de vínculos familiares e para a montagem de árvores genealógicas do alvo investigado."
  },
  {
    "id": "FauxID",
    "title": "FauxID",
    "url": "https://fauxid.com/",
    "tipo": "Gerador de Identidades Fictícias / Utilitário de OPSEC",
    "utilidade": "Geração de identidades sintéticas e dados pessoais fictícios para a criação e calibração de personas (Sock Puppets)",
    "descricao": "O FauxID é uma plataforma online desenvolvida para a geração automatizada e algorítmica de identidades fictícias e dados pessoais sintéticos detalhados. A ferramenta cria perfis biográficos completos sob demanda, incluindo nomes realistas, endereços postais simulados, números de telefone fictícios, credenciais de segurança e identificadores documentais (como SSN e cartões de crédito gerados por algoritmos de verificação como o de Luhn), além de traços de perfil como ocupação, preferências e dados de hardware simulados.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/gratuito",
      "opsec/personas"
    ],
    "utilidade_Osint": "No escopo das investigações em fontes abertas e inteligência cibernética, o FauxID atua como um recurso de apoio crítico na fase de preparação operacional e infiltração virtual. A ferramenta fornece a carga de dados estruturados necessária para preencher formulários de registro e criar perfis com alta verossimilhança, mitigando o risco de rastreamento ou exposição de dados reais do analista durante a coleta de dados que exige interação.",
    "notes": "* Os dados gerados pela plataforma (como cartões de crédito e números de documentos) são baseados estritamente em validações matemáticas locais (checksums) e não possuem qualquer correspondência legal, cadastral ou financeira real no mundo físico.\n* É ideal para agilizar o preenchimento de cadastros em fóruns fechados ou plataformas que bloqueiam a navegação de usuários não autenticados, permitindo que o investigador avance na coleta sem comprometer sua OPSEC."
  },
  {
    "id": "FaviHash",
    "title": "FaviHash",
    "url": "https://www.favihash.com/",
    "tipo": "Utilitário de Inteligência de Infraestrutura / Gerador de Hashes",
    "utilidade": "Extração e cálculo do hash de favicons (MurmurHash) para mapeamento de infraestrutura e pivoting em motores de busca cibernética",
    "descricao": "O FaviHash é uma ferramenta web especializada na extração e no cálculo do valor hash (utilizando predominantemente o algoritmo MurmurHash3) do favicon (ícone de identificação visual) de aplicações e servidores web. A plataforma permite que o usuário informe diretamente a URL de um site para que o sistema capture o ícone de forma automatizada, ou realize o upload manual de um arquivo de imagem correspondente ao favicon.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ecossistema de CYBINT (Cyber Intelligence) e reconhecimento técnico de alvos, o FaviHash desempenha um papel fundamental no mapeamento e na expansão da infraestrutura digital de uma organização ou adversário. O hash gerado atua como uma assinatura digital exclusiva de um serviço, permitindo realizar técnicas de *pivoting* em motores de busca de dispositivos conectados (como Shodan, Censys e ZoomEye) para descobrir servidores ocultos, subdomínios não indexados ou identificar o endereço IP real de servidores protegidos por proxies reversos e serviços de mitigação de DDoS (como Cloudflare).",
    "notes": "* Para preservar a OPSEC e evitar interações diretas (busca ativa) contra o servidor do alvo a partir da infraestrutura da ferramenta, o analista pode baixar o favicon de forma passiva e utilizar a função de upload de arquivo (`Choose File`) do FaviHash.\n* O valor inteiro gerado (seja positivo ou negativo) deve ser inserido nas strings de busca de scanners de rede utilizando sintaxes específicas, como `http.favicon.hash:<valor>` no Shodan ou `services.http.response.favicon.hash:<valor>` no Censys."
  },
  {
    "id": "FaviHunter",
    "title": "FaviHunter",
    "url": "https://github.com/eremit4/favihunter",
    "tipo": "Ferramenta de Linha de Comando (CLI) / Reconhecimento de Infraestrutura",
    "utilidade": "Extração automatizada e cálculo de múltiplos hashes de favicons (MMH3, SHA256, MD5) com geração de links de pivoting para motores de busca cibernética",
    "descricao": "O FaviHunter é uma ferramenta de linha de comando (CLI) desenvolvida em Python que automatiza o processo de extração, análise e geração de assinaturas digitais de favicons (*ícones de aplicações web*). A partir de uma URL ou de um arquivo de imagem local, o script realiza o download do artefato, calcula seus hashes de forma automatizada em múltiplos algoritmos compatíveis com indexadores de rede (como MurmurHash3, MD5 e SHA256) e compõe links diretos para a execução de consultas e buscas correlacionadas em plataformas de inteligência de ameaças.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/busca-identificacao",
      "func/infraestrutura-cybint",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações cibernéticas (CYBINT) e reconhecimento técnico de alvos, o FaviHunter otimiza o mapeamento de infraestruturas conectadas à internet. Ao extrair e converter a identidade visual de um site em hashes matemáticos, a ferramenta permite realizar técnicas de *pivoting* para localizar servidores secundários ocultos pertencentes à mesma organização, rastrear a expansão de infraestruturas de Comando e Controle (C2) de agentes maliciosos ou identificar páginas de phishing clonadas que mimetizam a identidade visual de instituições legítimas.",
    "notes": "* A ferramenta gera automaticamente strings de busca prontas para clique voltadas para motores de busca cibernética como Shodan, FOFA, Censys, Silent Push, Validin e consultas de relacionamento de ativos no VirusTotal.\n* Para preservar a OPSEC e evitar interações ativas diretas contra o servidor do alvo de dentro da máquina de investigação, o analista pode capturar o favicon de forma externa e isolada e submetê-lo localmente ao script através do parâmetro `--favicon <caminho_do_arquivo>`."
  },
  {
    "id": "FFmpeg",
    "title": "FFmpeg",
    "url": "https://www.ffmpeg.org/",
    "tipo": "Framework de Processamento de Mídia em Linha de Comando (CLI)",
    "utilidade": "Processamento avançado de arquivos multimídia, extração de metadados estruturais e fragmentação de vídeo em frames para análise forense local",
    "descricao": "O FFmpeg é uma solução multiplataforma de código aberto voltada para o processamento, conversão, gravação e decodificação de fluxos de áudio e vídeo. Operando de forma estrita via interface de linha de comando (CLI), a ferramenta baseia-se em um conjunto massivo de bibliotecas compartilhadas (como libavcodec e libavformat) que fornecem suporte a virtualmente qualquer codec, formato de contêiner ou especificação técnica de arquivo de mídia existente.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações digitais e verificação de mídias (IMINT/VMT), o FFmpeg atua como um recurso essencial na fase de tratamento e análise forense local de evidências audiovisuais coletadas na internet. A ferramenta permite ao analista inspecionar a integridade de arquivos de vídeo, isolar e amplificar canais específicos de áudio e converter arquivos proprietários para formatos padronizados sem recompressão destrutiva. Adicionalmente, sua capacidade de fragmentar vídeos e extrair quadros em alta fidelidade cronológica (frames individuais) subsidia diretamente processos de geolocalização e identificação de alvos, permitindo submeter capturas específicas a motores de busca reversa de imagens de forma isolada.",
    "notes": "* Para extrair frames de um vídeo de forma sequencial com fins de busca reversa de imagens, preservando a integridade dos pixels, utiliza-se a estrutura de comando básica: `ffmpeg -i video_alvo.mp4 -vf \"fps=1\" frame_%04d.png` (extrai um frame por segundo).\n* O utilitário permite inspecionar fluxos e metadados estruturais internos ocultos em arquivos de contêiner multimídia por meio do comando complementar `ffprobe`, permitindo verificar codecs utilizados, taxa de quadros e parâmetros de compressão originais da mídia sob análise sem violar o arquivo."
  },
  {
    "id": "FindIP (api.findip.net)",
    "title": "FindIP (api.findip.net)",
    "url": "https://api.findip.net",
    "tipo": "API de Inteligência de IP e Geolocalização",
    "utilidade": "Geolocalização de endereços IP, identificação de provedores (ASN/ISP) e detecção de proxies, VPNs, Tor e ameaças cibernéticas",
    "descricao": "O FindIP é uma plataforma e API de inteligência cibernética focada na análise detalhada e enriquecimento de dados associados a endereços IP (IPv4 e IPv6). A ferramenta fornece informações técnicas em tempo real estruturadas em formato JSON, abrangendo dados de geolocalização cadastral (país, região, cidade, coordenadas de latitude/longitude, fuso horário e código postal), informações de atribuição de infraestrutura (provedor de internet/ISP, organização detentora do bloco e Autonomous System Number - ASN), além de um módulo avançado de detecção de tráfego anônimo e mitigação de fraudes (identificação de conexões via Proxies HTTP/SOCKS, VPNs comerciais ou privadas, nós de saída da rede Tor, Apple iCloud Private Relay e cálculo de score de risco reputacional).",
    "testada": false,
    "tags": [
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações baseadas em fontes abertas e inteligência de ameaças (Cyber Threat Intelligence), o FindIP atua de forma crucial na fase de triagem técnica e pivoting de infraestrutura de rede. A ferramenta viabiliza a auditoria de IPs extraídos de logs de servidores, cabeçalhos de e-mails suspeitos ou rastros de conexões em plataformas web, permitindo determinar a legitimidade da origem de um tráfego e desmascarar tentativas de ocultação técnica de identidade por parte de um alvo.",
    "notes": "* É uma ferramenta altamente recomendada para integração com scripts automatizados de coleta massiva (em linguagens como Python ou Bash), permitindo o enriquecimento dinâmico de grandes volumes de indicadores de comprometimento (IoCs) ou logs de auditoria.\n* A identificação precisa de nós de saída Tor e servidores de VPN comerciais apoia o analista no processo de valoração da evidência digital, permitindo segregar acessos legítimos de tentativas deliberadas de evasão de monitoramento por contra-inteligência."
  },
  {
    "id": "Fingerprint Demo (fingerprint.com/demo)",
    "title": "Fingerprint Demo (fingerprint.com/demo)",
    "url": "https://fingerprint.com/demo/",
    "tipo": "Plataforma de Teste de Identificação Técnica e Privacidade",
    "utilidade": "Auditoria de pegada digital (browser fingerprinting), detecção de técnicas de ocultação, identificação persistente de dispositivos e validação de OPSEC",
    "descricao": "O Fingerprint Demo é uma página de demonstração técnica da plataforma comercial Fingerprint. A ferramenta expõe a capacidade de identificação persistente de dispositivos e navegadores através de técnicas avançadas de *browser fingerprinting*. Ela analisa e cruza múltiplos vetores de hardware, software e rede (incluindo atributos de Canvas, WebGL, APIs de áudio, fontes instaladas, componentes de hardware, arquitetura do navegador e telemetria do sistema) para gerar um identificador exclusivo e estável (Visitor ID), capaz de rastrear um dispositivo mesmo que o usuário limpe os cookies, utilize o modo incógnito ou altere o seu endereço IP.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No escopo de investigações digitais e Cyber Intelligence, a página de demonstração serve estritamente para a auditoria de OPSEC (Segurança das Operações) do próprio investigador. Antes de iniciar navegações, coletas ou infiltrações em alvos que possuem defesas corporativas ou mecanismos de contra-inteligência, o analista utiliza esta ferramenta para testar a robustez do seu ambiente de trabalho (máquinas virtuais, navegadores blindados como Tor/Mullvad Browser e extensões de privacidade). O teste revela se os mecanismos de dissimulação de hardware estão operando corretamente ou se a identidade técnica real do investigador está vazando através de identificadores persistentes.",
    "notes": "* Durante a auditoria de OPSEC, o analista deve verificar se o *Visitor ID* gerado se altera após reiniciar o navegador, mudar o perfil de navegação ou ativar uma VPN. Se o ID permanecer estático, significa que o ambiente de investigação está vulnerável ao rastreamento persistente por parte do alvo.\n* A plataforma também possui módulos específicos para acusar a presença de emuladores, ferramentas de automação (como Puppeteer ou Selenium) e o uso de abas anônimas, servindo como um excelente termômetro para testar a credibilidade técnica de contas de cobertura (*sock puppets*) ou de *scrapers* personalizados."
  },
  {
    "id": "Flickr Map",
    "title": "Flickr Map",
    "url": "https://www.flickr.com/map/",
    "tipo": "Plataforma Web de Mapeamento e Inteligência Geoespacial (GEOINT / SOCMINT)",
    "utilidade": "Exploração geoespacial e busca visual de fotografias geolocalizadas em escala global",
    "descricao": "O Flickr Map é a interface cartográfica interativa da plataforma de compartilhamento de fotos Flickr. O recurso permite visualizar, explorar e pesquisar milhões de imagens e vídeos enviados por usuários que contêm dados de geolocalização (*geotags*) ou coordenadas GPS vinculadas, plotando as mídias diretamente sobre um mapa global navegável.",
    "testada": false,
    "tags": [
      "fonte/redes-sociais",
      "fonte/geoespacial",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, inteligência geoespacial (GEOINT) e monitoramento de mídias sociais (SOCMINT), o Flickr Map atua como uma rica fonte primária para reconhecimento de locais, identificação de rotinas e levantamento de evidências visuais em pontos geográficos específicos. A ferramenta permite que analistas realizem buscas refinadas por palavras-chave, datas ou categorias dentro de um determinado raio territorial, viabilizando a obtenção de perspectivas visuais em nível de solo de instalações, pontos de interesse e eventos públicos que muitas vezes não estão disponíveis em serviços convencionais de imagens de satélite.",
    "notes": "* Excelente para complementar investigações de verificação de marcos visuais (*landmarks*), arquitetura e condições climáticas em datas específicas, auxiliando na corroboração de álibis e cronologias.\n* A plataforma do Flickr costuma preservar metadados técnicos adicionais nas páginas originais das fotografias (como modelo de câmera, abertura, distância focal e horário exato), fornecendo subsídios adicionais para análise de metadados quando o usuário clica na mídia indexada no mapa."
  },
  {
    "id": "Flickr The Commons",
    "title": "Flickr The Commons",
    "url": "https://www.flickr.com/commons/",
    "tipo": "Arquivo Digital de Mídia Histórica / Repositório Visual",
    "utilidade": "Pesquisa, recuperação e análise de acervos fotográficos históricos públicos e imagens de domínio público sem restrições de direitos autorais conhecidas",
    "descricao": "O Flickr The Commons é um projeto e repositório público criado para compartilhar acervos fotográficos e documentos visuais históricos provenientes de arquivos, bibliotecas, hemerotecas e museus de diversas partes do mundo. Lançado inicialmente em parceria com a Biblioteca do Congresso dos Estados Unidos, o portal reúne centenas de milhares de imagens que não possuem restrições conhecidas de direitos autorais, permitindo acesso aberto, pesquisa textual e catalogação colaborativa de mídias históricas.",
    "testada": false,
    "tags": [
      "fonte/arquivos-noticias",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de fontes abertas, inteligência de imagens (IMINT) e checagem de fatos (*fact-checking*), o Flickr The Commons atua como fonte primária confiável de verificação histórica e proveniência visual. A ferramenta permite correlacionar fotos antigas reaproveitadas em campanhas de desinformação com seus registros institucionais originais, identificar locais e patrimônios arquitetônicos por meio de comparações temporais de terreno e rastrear metadados históricos catalogados por instituições oficiais de memória.",
    "notes": "* Grande parte das imagens disponibilizadas pelas instituições parceiras possui metadados detalhados de época, incluindo datas estimadas, locais de registro e anotações originais de catálogo, facilitando o cruzamento com outros registros históricos.\n* A plataforma conta com anotações e tags colaborativas da comunidade, o que auxilia na identificação de pessoas, uniformes, embarcações, veículos e localidades específicas que não constavam nos registros primários das instituições."
  },
  {
    "id": "FlightAware Photos (pt.flightaware.com/photos/)",
    "title": "FlightAware Photos (pt.flightaware.com/photos/)",
    "url": "https://pt.flightaware.com/photos/",
    "tipo": "Galeria Pública e Banco de Dados de Imagens de Aviação",
    "utilidade": "Repositório colaborativo de imagens de aeronaves para apoio a investigações de inteligência de aviação (GEOINT) e rastreamento visual de frotas",
    "descricao": "O FlightAware Photos é um repositório e galeria pública colaborativa integrada à plataforma FlightAware. Alimentada por uma rede global de entusiastas e observadores de aeronaves (*spotters*), a ferramenta centraliza milhões de fotografias de aviões comerciais, jatos executivos, helicópteros, aeronaves militares e infraestruturas aeroportuárias. O banco de dados permite indexar e buscar imagens com base em critérios técnicos estritos, como o prefixo ou matrícula da aeronave (Tail Number), o modelo do fabricante, o aeroporto de registro da foto ou a companhia aérea operadora.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "fonte/geoespacial",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas voltadas para Inteligência Geoespacial (GEOINT) e inteligência de transporte, a galeria do FlightAware funciona como uma rica base de evidências visuais históricas. Ela permite ao analista realizar o levantamento patrimonial de frotas aéreas privadas de alvos sob investigação, monitorar alterações de identidade visual (pintura/*livery*), identificar modificações estruturais e confirmar visualmente a presença física de um determinado prefixo em aeroportos específicos em datas retroativas, servindo como ferramenta de validação de álibis ou de rotas suspeitas.",
    "notes": "* Embora a plataforma possa remover ou mitigar metadados originais (EXIF) das fotos enviadas para proteção dos usuários, a análise forense visual do plano de fundo das imagens (relevo terrestre, edificações, torres de controle, sinalizações de pista) frequentemente auxilia na geolocalização exata do registro.\n* É recomendável cruzar as imagens históricas obtidas na galeria com dados de telemetria ADSB (como os da própria plataforma do FlightAware ou ADS-B Exchange) para correlacionar se a pintura da aeronave ou os operadores logísticos identificados visualmente batem com o histórico de rotas e proprietários no período investigado."
  },
  {
    "id": "Flightradar24 (flightradar24.com)",
    "title": "Flightradar24 (flightradar24.com)",
    "url": "https://www.flightradar24.com/",
    "tipo": "Plataforma de Inteligência de Tráfego Aéreo e Monitoramento de Frota",
    "utilidade": "Rastreamento global de voos em tempo real, telemetria de aeronaves (ADS-B) e monitoramento de tráfego aéreo histórico e atual",
    "descricao": "O Flightradar24 é uma plataforma global de rastreamento de voos que exibe informações em tempo real sobre o tráfego aéreo mundial. Alimentada por uma vasta rede de receptores ADS-B (Automatic Dependent Surveillance-Broadcast) baseados em terra e via satélite, a ferramenta agrega e renderiza dados detalhados de aeronaves comerciais, jatos executivos e certas categorias de transporte logístico ou governamental. Ela exibe a posição geoespacial exata, histórico de rotas, velocidade, altitude, modelo do fabricante, companhia operadora e número de matrícula (Tail Number).",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "fonte/geoespacial",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações de Inteligência Geoespacial (GEOINT) e de rastreamento de veículos (VATINT), a plataforma é utilizada para monitorar o deslocamento de ativos físicos e frotas móveis pertencentes a corporações, governos ou indivíduos sob investigação. O analista pode rastrear padrões de viagem, identificar reuniões e conexões corporativas com base na presença simultânea de aeronaves executivas em determinados aeroportos e documentar de forma crível a movimentação logística associada a um alvo.",
    "notes": "* Alvos que operam jatos executivos privados de alta relevância política ou corporativa frequentemente solicitam o bloqueio de exibição de suas matrículas nas plataformas comerciais. Nesses cenários de contra-inteligência, o analista deve cruzar as informações ou focar a busca em redes descentralizadas e não filtradas, como a ADS-B Exchange.\n* A plataforma permite a criação de alertas customizados por prefixo ou região geográfica, o que possibilita ao analista estabelecer um fluxo automatizado de monitoramento passivo sobre os deslocamentos de um alvo em tempo real."
  },
  {
    "id": "FlightStats (flightstats.com)",
    "title": "FlightStats (flightstats.com)",
    "url": "https://www.flightstats.com/",
    "tipo": "Plataforma de Informações de Voos e Inteligência Aeroportuária",
    "utilidade": "Monitoramento de status de voos em tempo real, consulta de históricos de pontualidade aeroportuária e rastreamento de rotas aéreas comerciais",
    "descricao": "O FlightStats é uma plataforma global de dados de aviação civil que fornece informações detalhadas e em tempo real sobre voos comerciais ao redor do mundo. Gerida pela Cirium, a ferramenta compila dados globais de companhias aéreas, terminais aeroportuários e sistemas de controle de tráfego aéreo para disponibilizar o status exato de voos (incluindo partidas, chegadas, atrasos e cancelamentos), portões de embarque, fuso horário, especificações técnicas da aeronave que opera o trecho e condições meteorológicas locais.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "fonte/geoespacial",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações baseadas em fontes abertas voltadas para a inteligência de transportes, logística corporativa e estabelecimento de linhas do tempo, o FlightStats funciona como uma base de dados oficial para auditar o tráfego aéreo comercial e rastrear deslocamentos de interesse. O analista pode cruzar números de voos comerciais conhecidos para confirmar a movimentação de alvos entre diferentes jurisdições, identificar conexões operacionais, mapear redes logísticas de empresas e validar cronogramas temporais de eventos investigados.",
    "notes": "* Diferente de ferramentas focadas estritamente na captação de telemetria ADS-B bruta de sensores terrestres, o FlightStats consolida dados oficiais de companhias e aeroportos, o que a torna altamente confiável para confirmar portões de desembarque e horários regulamentados de pouso ou decolagem.\n* A plataforma permite a pesquisa combinada por número de voo ou por rota (aeroporto de origem e destino), o que viabiliza a recomposição de cenários de viagem mesmo quando o investigador possui apenas os locais de trânsito aproximados do alvo."
  },
  {
    "id": "FOFA (fofa.info)",
    "title": "FOFA (fofa.info)",
    "url": "https://fofa.info",
    "tipo": "Mecanismo de Busca de Infraestrutura e Ativos de Rede",
    "utilidade": "Mapeamento de ativos de rede, enumeração de subdomínios, descoberta de certificados SSL/TLS e busca por dispositivos expostos no ciberespaço",
    "descricao": "O FOFA é um mecanismo de busca voltado para o mapeamento do ciberespaço, operando de forma análoga a plataformas como Shodan e Censys. A ferramenta realiza varreduras contínuas e massivas na infraestrutura global da internet para indexar e catalogar dispositivos conectados, servidores, roteadores, sistemas industriais e bancos de dados expostos. O FOFA estrutura informações detalhadas sobre portas de comunicação abertas, protocolos de rede, cabeçalhos de resposta (banners HTTP), certificados criptográficos SSL/TLS e assinaturas visuais (hashes de favicons), tornando esse inventário pesquisável por meio de uma sintaxe avançada de filtros.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo da Inteligência de Ameaças (Cyber Threat Intelligence) e investigações de infraestrutura digital (CYBINT), o FOFA funciona como uma base de dados essencial para o levantamento passivo de informações. Ele permite traçar a pegada digital de uma organização sem interagir diretamente com seus servidores, evitando disparar alertas em sistemas de monitoramento defensivos. O analista pode correlacionar propriedades digitais de um alvo, localizar servidores de comando e controle (C2) ocultos, identificar painéis de login administrativos expostos e mapear subdomínios associados a certificados digitais compartilhados.",
    "notes": "* O recurso de busca por hash de favicon (`icon_hash`) é altamente eficaz para descobrir servidores clonados, portais de *phishing* ativos criados por agentes de ameaça ou servidores espelhos ocultos que utilizam o mesmo logotipo visual do alvo original em redes isoladas.\n* Devido à sua ampla base de indexadores concentrada na região asiática, o FOFA frequentemente localiza ativos e servidores expostos que não foram catalogados por ferramentas de buscas cibernéticas ocidentais, sendo um excelente recurso de redundância de dados para investigações de infraestrutura global."
  },
  {
    "id": "Follow That Page (followthatpage.com)",
    "title": "Follow That Page (followthatpage.com)",
    "url": "https://www.followthatpage.com/",
    "tipo": "Serviço de Detecção de Mudanças e Monitoramento Web (SaaS)",
    "utilidade": "Monitoramento automatizado de alterações em páginas web, acompanhamento de atualizações em sites de alvos e alertas por e-mail",
    "descricao": "O Follow That Page é um serviço online de monitoramento de alterações e inteligência passiva que rastreia modificações no conteúdo de páginas web especificadas pelo usuário. A ferramenta realiza varreduras periódicas programadas (diárias, horárias ou em intervalos customizados) nas URLs cadastradas, extrai o conteúdo textual e compara o resultado atual com o histórico arquivado. Caso qualquer modificação seja detectada (inclusão, exclusão ou alteração de termos e blocos de código), a plataforma gera um relatório diferencial (*diff*) detalhando as mudanças e envia um alerta automatizado diretamente para o e-mail do investigador.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/scrapers-automacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações de fontes abertas e monitoramento tático, o Follow That Page atua como uma solução de automação para a preservação de alvos e linhas do tempo. O analista pode utilizar a ferramenta para acompanhar passivamente portais de notícias locais, páginas institucionais de empresas investigadas, diários oficiais, fóruns específicos ou perfis públicos em redes sociais. Isso permite detectar imediatamente a alteração de comunicados, remoção de nomes de funcionários, edições em listas de sócios ou a exclusão de evidências textuais por parte do alvo, garantindo que o investigador capture a mudança no momento em que ela ocorre.",
    "notes": "* Como as requisições de raspagem partem dos servidores centrais do Follow That Page, a identidade técnica e o endereço IP do investigador permanecem totalmente preservados contra mecanismos de log do servidor do alvo (proteção passiva de OPSEC).\n* É importante notar que sites que utilizam defesas agressivas contra bots (como Cloudflare, Captchas ou carregamento dinâmico complexo via JavaScript/React) podem bloquear o indexador da ferramenta ou retornar páginas em branco, exigindo que o analista valide a compatibilidade da URL antes de homologar o monitoramento de longo prazo."
  },
  {
    "id": "FotoForensics (fotoforensics.com)",
    "title": "FotoForensics (fotoforensics.com)",
    "url": "https://fotoforensics.com/",
    "tipo": "Plataforma Web de Análise Estática e Forense de Imagens",
    "utilidade": "Análise forense digital de mídias, extração de metadados e detecção de manipulações e edições em imagens",
    "descricao": "O FotoForensics é uma plataforma web voltada para a aplicação de técnicas de forense digital e controle de integridade em arquivos de imagem (como JPEG, PNG e WebP). A ferramenta funciona como um laboratório de análise estática, fornecendo múltiplos algoritmos para avaliar se uma imagem foi modificada digitalmente, editada ou gerada artificialmente. Seus recursos centrais incluem a Análise de Nível de Erro (ELA - Error Level Analysis), que identifica a taxa de compressão diferencial em componentes da imagem para destacar edições e inserções secundárias, além de ferramentas de extração completa de metadados estruturados (EXIF, XMP, IPTC), análise de matriz de cores, estimativa de qualidade de compressão JPEG e cálculo de assinaturas de hash (MD5, SHA-1, SHA-256).",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito da Inteligência de Imagens (IMINT) e da validação de evidências digitais em investigações de fontes abertas, o FotoForensics desempenha um papel crítico na fase de verificação de autenticidade. O analista utiliza a plataforma para garantir que fotografias, capturas de tela ou documentos digitalizados coletados na internet não tenham sofrido manipulações deliberadas destinadas a forjar provas ou desinformar. Adicionalmente, a extração detalhada de metadados ocultos permite recuperar dados históricos valiosos sobre o artefato, como a data e hora originais da captura da mídia e o modelo exato do dispositivo de hardware que gerou o arquivo.",
    "notes": "* A leitura dos resultados de ELA requer calibração técnica por parte do analista: superfícies com texturas complexas e bordas de alto contraste naturalmente exibem brilho elevado no mapa de erro, devendo o investigador focar em assimetrias visuais inexplicáveis ou blocos de pixels com comportamento de compressão desalinhado do restante do plano.\n* Grande parte das mídias coletadas diretamente de grandes plataformas de redes sociais (como Facebook, Instagram e X) passa por processos automáticos de higienização e compressão agressiva no servidor do alvo, o que costuma obliterar os metadados EXIF originais e comprometer a eficácia do algoritmo ELA, tornando a ferramenta mais indicada para imagens obtidas de repositórios, e-mails, blogs ou links diretos de armazenamento."
  },
  {
    "id": "Fragment",
    "title": "Fragment",
    "url": "https://fragment.com/",
    "tipo": "Ferramenta de Busca e Validação de Identidades Virtuais",
    "utilidade": "Consulta de propriedade, histórico de transações e vinculação cripto de usernames e números anônimos do Telegram.",
    "descricao": "O Fragment é uma plataforma descentralizada oficial que facilita o leilão e a negociação direta de colecionáveis digitais do ecossistema Telegram, incluindo nomes de usuário (*usernames*), canais e números de telefone anônimos (com o prefixo +888). A infraestrutura opera sobre a blockchain TON (The Open Network), registrando publicamente todas as transações, lances e trocas de custódia desses identificadores por meio de contratos inteligentes.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/telefone",
      "alvo/financeiro-crypto",
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Para investigadores de fontes abertas, o Fragment funciona como uma ponte crucial de atribuição entre o ecossistema de redes sociais e o ambiente Web3. A ferramenta permite realizar engenharia reversa em identidades do Telegram, mapeando e vinculando um *username* público ou um número anônimo diretamente a um endereço de carteira de criptoativos (TON Wallet). Isso possibilita expandir a investigação para análises de fluxo financeiro e mapeamento de redes de ativos pertencentes ao mesmo alvo.",
    "notes": ""
  },
  {
    "id": "Frinkiac",
    "title": "Frinkiac",
    "url": "https://frinkiac.com/",
    "tipo": "Motor de Busca de Mídia / Acervo Digital de Transcrições e Imagens",
    "utilidade": "Indexação, transcrição e busca de fotogramas (frames) e citações de episódios da animação The Simpsons",
    "descricao": "O Frinkiac é uma plataforma de busca e indexação visual dedicada a mapear e correlacionar legendas, citações textuais e fotogramas (*screencaps*) de quase duas décadas de episódios da animação *The Simpsons*. A plataforma analisa o roteiro e as legendas temporais para permitir que usuários encontrem o momento exato em que uma frase ou diálogo ocorre, gerando imagens estáticas e GIFs com legendas embutidas.",
    "testada": false,
    "tags": [
      "fonte/arquivos-noticias",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas e análise de desinformação/IMINT, o Frinkiac serve como base de referência cultural e verificação de mídias virais. A ferramenta permite identificar a origem exata de memes, capturas de tela e citações atribuídas à série que frequentemente circulam em campanhas de desinformação, teorias conspiratórias (\"previsões dos Simpsons\") ou discussões em fóruns e redes sociais, viabilizando a validação rápida de sua autenticidade e contexto original.",
    "notes": "* Útil para checagem de fatos (*fact-checking*) ao desmentir imagens adulteradas ou montagens associadas à série em redes sociais.\n* A plataforma fornece os códigos de episódio e timestamps precisos, permitindo cruzar a informação com registros oficiais de exibição e roteiros originais."
  },
  {
    "id": "gau (getallurls)",
    "title": "gau (getallurls)",
    "url": "https://github.com/lc/gau",
    "tipo": "Ferramenta de Linha de Comando (CLI) para Reconhecimento Passivo e Coleta de Endpoints",
    "utilidade": "Extração automatizada de URLs históricas e endpoints conhecidos de um domínio a partir de repositórios públicos e arquivos web",
    "descricao": "O `gau` (getallurls) é uma ferramenta desenvolvida em Go voltada para a coleta massiva e passiva de URLs históricas conhecidas associadas a um determinado domínio. Ele realiza consultas automatizadas em múltiplos provedores públicos e agregadores de dados da internet, como a Wayback Machine (Archive.org), AlienVault Open Threat Exchange (OTX), Common Crawl e URLScan, consolidando os resultados encontrados de forma ágil em uma saída de texto unificada.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "fonte/arquivos-noticias",
      "func/scrapers-automacao",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações em fontes abertas, inteligência cibernética e reconhecimento técnico, o `gau` atua como uma solução eficiente para descobrir superfícies de exposição digital, endpoints legados, caminhos de API e arquivos indexados no passado (como PDFs, planilhas, arquivos de configuração ou backups). Como interage estritamente com repositórios e caches de terceiros, a ferramenta viabiliza o mapeamento lógico e estrutural de um site de maneira totalmente passiva e furtiva, sem gerar tráfego direto ou registros de conexões nos logs do servidor do alvo.",
    "notes": "* O comando básico `gau exemplo.com` extrai as URLs associadas ao domínio exato. Para expandir o escopo da investigação e incluir subdomínios mapeados nos repositórios, deve-se adicionar a flag `--subs` (ex: `gau --subs exemplo.com`).\n* Para otimizar a triagem de dados, a saída massiva do comando pode ser filtrada localmente com utilitários de texto para isolar arquivos sensíveis ou extensões críticas (ex: `gau exemplo.com | grep -E \"\\.env|\\.git|\\.conf|\\.db\"`).\n* Como os dados extraídos refletem registros históricos acumulados ao longo dos anos, muitas das URLs fornecidas podem não estar mais ativas nos servidores do alvo. Para validar o status atualizado de cada link em tempo real, recomenda-se direcionar a lista gerada para ferramentas de validação de requisições HTTP."
  },
  {
    "id": "Gemini",
    "title": "Gemini",
    "url": "https://gemini.google.com/",
    "tipo": "Modelo de Linguagem de Grande Porte (LLM) / Assistente de Inteligência Artificial",
    "utilidade": "Processamento de linguagem natural, análise de contexto, extração de entidades, estruturação de dados brutos e auxílio na confecção de relatórios de inteligência.",
    "descricao": "O Gemini é uma plataforma de inteligência artificial conversacional desenvolvida pela Google, baseada em seus modelos de linguagem de grande porte (LLM). A ferramenta é projetada para compreender, processar e gerar textos, códigos e análises complexas a partir de comandos em linguagem natural, operando de forma integrada ao ecossistema de serviços da Google.",
    "testada": false,
    "tags": [
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No ciclo de produção de inteligência, o Gemini atua principalmente na fase de processamento e análise de dados coletados. O analista pode utilizá-lo para resumir grandes volumes de relatórios, extrair entidades e conexões de documentos não estruturados, traduzir conteúdos em idiomas estrangeiros, converter formatos de arquivos textuais e auxiliar na redação e refinamento de relatórios finais de investigação.",
    "notes": "* Em conformidade com as diretrizes de OPSEC e segurança de dados, o investigador jamais deve inserir dados sensíveis, credenciais, informações reais de alvos ou documentos sigilosos nos prompts da ferramenta, uma vez que as interações podem ser utilizadas para o treinamento e refinamento contínuo do modelo pela plataforma.\n* Embora a ferramenta possua capacidade de realizar buscas complementares na web em tempo real, os resultados gerados por IA estão sujeitos a alucinações, tornando obrigatória a validação manual de todas as fontes e fatos apontados pelo assistente antes de sua inclusão em um relatório final."
  },
  {
    "id": "Generated Photos",
    "title": "Generated Photos",
    "url": "https://generated.photos/",
    "tipo": "Plataforma Web de Geração de Mídia Sintética (IA / GAN)",
    "utilidade": "Geração e obtenção de imagens de rostos humanos realistas criados por Inteligência Artificial para a composição de personas e contas de cobertura (sock puppets)",
    "descricao": "O Generated Photos é uma plataforma baseada em Inteligência Artificial que utiliza Redes Geradoras Adversariais (GANs) para criar fotos de rostos humanos hiper-realistas do zero. O sistema oferece um banco de dados com milhares de imagens isentas de direitos autorais e uma ferramenta de customização (\"Face Generator\") que permite ajustar parâmetros específicos como idade, gênero, etnia, expressão facial, cor dos olhos, comprimento do cabelo e emoções.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito das investigações de fontes abertas, a plataforma atua como um recurso crítico para a fase de preparação de inteligência humana cibernética (CYBINT/HUMINT) e engenharia social. Ela viabiliza o desenvolvimento de identidades dissimuladas (*sock puppets*) com alta credibilidade. Como as imagens são sintéticas e não correspondem a indivíduos reais, o uso dessas fotos elimina o risco de implicações legais por roubo de identidade e impede que mecanismos de contra-inteligência descubram a farsa por meio de ferramentas de busca reversa de imagens (visto que o rosto não existirá em nenhuma outra base de dados da internet).",
    "notes": "* Rostos gerados por IA costumam centralizar os olhos exatamente na mesma posição geométrica da imagem. Se um investigador sobrepuser várias fotos geradas pela plataforma, a linha dos olhos coincidirá perfeitamente, um padrão que pode ser explorado por sistemas automatizados de detecção de bots.\n* Apesar do alto realismo, é indispensável realizar uma análise visual minuciosa (forense estática) na imagem selecionada antes de utilizá-la. Modelos GAN frequentemente geram pequenas anomalias estruturais, tais como brincos assimétricos, deformações sutis no fundo da foto, óculos desalinhados ou dentes com formatos incomuns.\n* Para garantir a eficiência da OPSEC, a foto obtida na plataforma deve ser integrada a um ecossistema completo de persona, combinando-a com metadados limpos, nomes fictícios consistentes, e-mails descartáveis e números de telefone temporários para validação de contas."
  },
  {
    "id": "Genymotion",
    "title": "Genymotion",
    "url": "https://www.genymotion.com/download/",
    "tipo": "Emulador Android / Plataforma de Virtualização",
    "utilidade": "Emulação de dispositivos móveis Android e criação de ambientes virtuais isolados para investigações mobile",
    "descricao": "O Genymotion é um emulador Android de alto desempenho baseado em arquitetura de virtualização. Ele permite simular uma ampla variedade de dispositivos móveis com diferentes versões do sistema operacional Android, configurações de hardware e resoluções de tela diretamente em um computador convencional.",
    "testada": false,
    "tags": [
      "plataforma/desktop",
      "acesso/limitado",
      "opsec/ambiente-seguro",
      "opsec/personas"
    ],
    "utilidade_Osint": "No escopo de investigações cibernéticas e em fontes abertas, o Genymotion funciona como uma estação de trabalho controlada e segura para interagir com aplicativos móveis (redes sociais, mensageiros e ferramentas de geolocalização), permitindo a coleta técnica de dados sem expor a infraestrutura física do analista.",
    "notes": "* É altamente eficaz quando integrado a ambientes de análise de malware ou ferramentas de proxy de interceptação de tráfego (como REMnux, Burp Suite ou OWASP ZAP) para inspecionar requisições e conexões estabelecidas por aplicativos Android.\n* A execução estável do Genymotion Desktop geralmente requer o suporte e a instalação prévia de um hipervisor local, como o Oracle VM VirtualBox, para gerenciar os recursos de virtualização da máquina."
  },
  {
    "id": "GeoNode",
    "title": "GeoNode",
    "url": "https://geonode.com/",
    "tipo": "Serviço de Proxy e Infraestrutura de Anonimização",
    "utilidade": "Provedor de infraestrutura de rede para mascaramento de tráfego, alteração de localização virtual e rotação de endereços IP.",
    "descricao": "O GeoNode é uma plataforma especializada no fornecimento de infraestrutura de redes e servidores proxy, abrangendo conexões residenciais, móveis (4G/5G) e de centros de dados (datacenters). Além dos planos comerciais, o serviço mantém uma listagem pública, atualizada e estruturada de proxies abertos globais, permitindo o redirecionamento escalonável do tráfego HTTP, HTTPS e SOCKS.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito das investigações de fontes abertas, o GeoNode funciona como uma camada crítica de suporte à Segurança Operacional (OPSEC). A ferramenta viabiliza a ocultação da identidade técnica do analista durante a navegação, coleta massiva ou interação passiva com alvos e plataformas digitais, prevenindo o rastreamento, contramedidas de contra-inteligência e bloqueios automáticos baseados em reputação de IP ou restrições geográficas.",
    "notes": "* Os endpoints gerados pela plataforma podem ser integrados diretamente a scripts de terminal, ferramentas de raspagem massiva (*scrapers*), navegadores dedicados à privacidade ou ferramentas de gerenciamento de múltiplas identidades (*anti-detect browsers*).\n* Ao empregar a listagem de proxies gratuitos disponibilizada pela ferramenta, o analista deve auditar e testar rigorosamente a conexão contra vazamentos de dados técnicos (como *DNS leaks* ou *WebRTC leaks*) antes de conduzir coletas em ambientes sensíveis."
  },
  {
    "id": "Gephi",
    "title": "Gephi",
    "url": "https://gephi.org/",
    "tipo": "Software de Análise de Links e Visualização de Redes",
    "utilidade": "Análise estatística e visualização gráfica de redes complexas, grafos e vínculos relacionais de dados estruturados.",
    "descricao": "O Gephi é um software de código aberto voltado para a exploração, visualização e análise de redes complexas, grafos direcionados e não-direcionados. Utilizando algoritmos de layout em tempo real (como ForceAtlas2, Fruchterman-Reingold e OpenOrd) e ferramentas de cálculo estatístico, a plataforma processa grandes volumes de dados tabulares estruturados em vértices (nós) e arestas (conexões), permitindo medir métricas de centralidade, modularidade, densidade e proximidade.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No fluxo de inteligência, o Gephi atua diretamente na fase de análise e processamento de informações massivas previamente extraídas de alvos ou ambientes digitais. A ferramenta viabiliza a Análise de Redes Sociais (SNA) para mapear interações e comunidades em plataformas digitais, o cruzamento de inteligência societária e patrimonial (vínculos cruzados de QSA), o rastreamento de fluxos de transações financeiras ou de criptoativos e a identificação de entidades centrais ou intermediárias (*bridges*) em estruturas sob investigação.",
    "notes": "* Os dados a serem analisados devem ser previamente organizados em formato de planilhas ou tabelas separadas por Nós (*Nodes*, contendo os alvos/entidades) e Arestas (*Edges*, contendo a relação e o peso das interações), para posterior importação em formatos como CSV, GEXF, GraphML ou GDF.\n* Por operar em ambiente local de forma estática e offline, a ferramenta oferece excelente nível de segurança operacional (OPSEC), uma vez que dados sensíveis de investigações em andamento não são transmitidos para nuvens ou servidores de terceiros durante o processamento."
  },
  {
    "id": "Gerador de CPF Válido (geradortxt)",
    "title": "Gerador de CPF Válido (geradortxt)",
    "url": "https://github.com/willianwistuba/geradorcpfvalido/blob/main/geradortxt",
    "tipo": "Utilitário de Suporte a OPSEC e Criação de Personas",
    "utilidade": "Geração de números de CPF matematicamente válidos para estruturação de identidades sintéticas (Sock Puppets).",
    "descricao": "O `geradorcpfvalido` (especificamente o módulo focado em geração textual em lote) é um script utilitário de código aberto projetado para calcular e emitir números de Cadastro de Pessoas Físicas (CPF) matematicamente válidos. A ferramenta aplica o algoritmo oficial de validação de dígitos verificadores (módulo 11) para construir sequências numéricas estruturadas que simulam o formato de um documento civil real, permitindo a exportação direta dos dados em lote.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações em fontes abertas, a ferramenta desempenha um papel de suporte técnico na fase de preparação de OPSEC e gerenciamento de *Sock Puppets* (perfis dissimulados). Durante a criação de identidades sintéticas necessárias para navegar em plataformas que exigem validação cadastral de formulários, o analista pode empregar o gerador para obter dados numéricos estruturados e válidos sob a perspectiva algorítmica. Isso evita a exposição de documentos reais do investigador ou a utilização de dados de terceiros, mitigando riscos de contra-inteligência e mantendo o isolamento do ambiente de investigação.",
    "notes": "* Os registros gerados são válidos estritamente do ponto de vista matemático e algorítmico, não possuindo vinculação factual com cadastros ativos na base da Receita Federal.\n* A ferramenta deve ser integrada ao ecossistema Obsidian para catalogar insumos de apoio ao desenvolvimento de testes de validação cadastral e auditoria de formulários em ambientes controlados."
  },
  {
    "id": "Getúlio AI",
    "title": "Getúlio AI",
    "url": "https://getulio.ai/",
    "tipo": "Plataforma Web de Consulta Jurídica e Assistente Baseado em Inteligência Artificial",
    "utilidade": "Consulta e interpretação de processos trabalhistas, histórico litigioso de CNPJs e extração de dados jurídicos assistida por Inteligência Artificial",
    "descricao": "O Getúlio AI é uma plataforma web orientada por inteligência artificial e processamento de linguagem natural (PLN) voltada para o ecossistema jurídico-trabalhista brasileiro. A ferramenta atua na consulta e interpretação de ações e litígios trabalhistas a partir do número do processo judicial, CPF ou CNPJ. Ela consome dados de sistemas processuais públicos (como tribunais do trabalho - TRTs e TST), estruturando informações como fase processual atual, valor da causa, histórico de movimentações, identificação de partes e advogados envolvidos, além de consolidar métricas de contencioso corporativo (volume total de processos por empresa e valores médios de acordos).",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações corporativas, Due Diligence, análise patrimonial e levantamento de passivos trabalhistas, o Getúlio AI serve como um vetor ágil de busca e sumarização de inteligência jurídica. O analista pode utilizar a ferramenta para mapear o passivo litigioso de uma empresa-alvo (via CNPJ), identificar partes correlacionadas a indivíduos sob investigação (via CPF ou numeração da ação) e converter termos processuais herméticos em resumos estruturados e de fácil assimilação para a elaboração de relatórios.",
    "notes": "* A busca por CNPJ é particularmente útil em investigações patrimoniais para quantificar o risco financeiro e o histórico de cumprimento de obrigações legais por parte de uma organização sob análise.\n* Por se tratar de um processador assistido por inteligência artificial intermediário, recomenda-se contravalidar dados processuais críticos ou sentenças definitivas diretamente nos portais do Processo Judicial Eletrônico (PJe) dos tribunais competentes antes de incluí-los em relatórios formais.\n* O analista deve ter cautela ao submeter dados altamente sigilosos em plataformas de terceiros baseadas em nuvem, garantindo que identificadores sensíveis não infrinjam as diretrizes de privacidade da operação."
  },
  {
    "id": "Gibiru",
    "title": "Gibiru",
    "url": "https://gibiru.com/",
    "tipo": "Mecanismo de Busca Privado e Indexador Web",
    "utilidade": "Motor de busca privado voltado para recuperação de resultados da web não filtrados, sem rastreamento de usuário ou registro de logs",
    "descricao": "O Gibiru é um mecanismo de busca na web focado em privacidade e anonimato, em operação desde 2009. A plataforma atua como um intermediário de consultas, consultando algoritmos de busca convencionais e bases de dados abertas sem registrar o endereço IP do usuário, sem armazenar consultas em histórico de servidores e sem injetar cookies de rastreamento ou identificadores de perfil comercial. O serviço também indexa páginas e conteúdos que podem sofrer despriorização ou censura algorítmica em buscadores comerciais comuns.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No ciclo de inteligência de fontes abertas, o Gibiru é utilizado como uma camada primária de coleta passiva e pesquisa de superfície. Ele viabiliza buscas amplas e neutras na internet sem que as consultas fiquem atreladas à identidade real do investigador ou influenciadas por histórico de navegação anterior (*bolha de filtros*). Além disso, fortalece a segurança operacional (OPSEC) ao evitar que termos de busca sensíveis ou investigativos sejam associados ao perfil do analista por grandes plataformas de publicidade digital.",
    "notes": "* Por não personalizar os resultados com base em localização ou histórico, o Gibiru oferece respostas neutras e objetivas para pesquisas globais, sendo útil para confrontar variações de resultados encontradas no Google ou Bing.\n* Pode ser integrado diretamente à barra de pesquisas de navegadores focados em privacidade (como LibreWolf, Brave ou Firefox configurado) para padronizar pesquisas de rotina com menor exposição de metadados."
  },
  {
    "id": "GifCities",
    "title": "GifCities",
    "url": "https://gifcities.org/",
    "tipo": "Arquivo Digital e Motor de Busca de Mídia Histórica",
    "utilidade": "Preservação histórica, busca reversa e recuperação de GIFs animados e elementos gráficos da era inicial da web (GeoCities)",
    "descricao": "O GifCities é um projeto de preservação digital e mecanismo de busca desenvolvido pelo Internet Archive, criado para indexar e resgatar o acervo visual de páginas do extinto serviço de hospedagem Yahoo! GeoCities. A plataforma extrai e cataloga milhões de GIFs animados, gráficos e elementos visuais da era inicial da internet (décadas de 1990 e 2000), vinculando cada artefato às URLs e páginas originais preservadas no acervo do Wayback Machine.",
    "testada": false,
    "tags": [
      "fonte/arquivos-noticias",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, preservação de memória digital e análise de mídias (IMINT), o GifCities funciona como um repositório arqueológico da web. A ferramenta viabiliza o rastreamento da proveniência histórica de gráficos antigos, logotipos primitivos, banners e ilustrações reutilizadas fora de contexto em campanhas de desinformação ou sites legados, permitindo aos analistas correlacionar elementos visuais a páginas originais e identificar metadados de domínio e contexto histórico de hospedagem.",
    "notes": "* Cada imagem indexada inclui um link direto para a página preservada correspondente no Wayback Machine, viabilizando o *pivoting* para investigar o código-fonte HTML, e-mails de contato antigos, nomes de usuários e conteúdos contextuais da página do autor original.\n* A plataforma é útil para desmistificar mídias visuais e rastrear o surgimento de memes e elementos estéticos clássicos que voltam a circular na internet atual."
  },
  {
    "id": "GitDorks",
    "title": "GitDorks",
    "url": "https://dorks.s1rn3tz.ovh/gitdorks",
    "tipo": "Ferramenta de Busca e Enumeração (Dorking)",
    "utilidade": "Centralização e estruturação de consultas avançadas (Git Dorks) para a descoberta de credenciais, chaves de API e dados sensíveis expostos em repositórios de código.",
    "descricao": "O GitDorks é uma plataforma baseada na web que funciona como um indexador e facilitador de consultas avançadas voltadas para repositórios de código público (especialmente o GitHub). A ferramenta agrupa strings de busca específicas e operadores lógicos projetados para expor vazamentos inadvertidos de informações críticas, tais como arquivos de configuração contendo senhas, chaves privadas de criptografia, tokens de APIs e documentações internas de sistemas.",
    "testada": false,
    "tags": [
      "func/busca-dorks",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, a plataforma é um recurso estratégico para a fase de coleta de informações e mapeamento de exposição digital (reconhecimento passivo). Ao permitir que o analista aplique padrões de busca refinados contra o nome de uma empresa, domínio ou usuário específico, a ferramenta viabiliza a identificação de vulnerabilidades e credenciais ativas associadas ao alvo que foram expostas por equipes de desenvolvimento em repositórios públicos, servindo como uma rica fonte de inteligência técnica.",
    "notes": "* Para otimizar os resultados, o analista deve injetar variáveis específicas do alvo (como o nome de um subdomínio ou o username de um funcionário do setor de TI) junto às dorks fornecidas pela plataforma.\n* As consultas podem exigir que o investigador esteja autenticado na plataforma de destino (como o GitHub) para contornar limitações de visualização de código de ferramentas de busca globais."
  },
  {
    "id": "GNU Awk (gawk)",
    "title": "GNU Awk (gawk)",
    "url": "https://www.gnu.org/software/gawk/",
    "tipo": "Utilitário de Processamento de Dados e Análise Estática",
    "utilidade": "Processamento, filtragem e extração de padrões textuais em grandes volumes de dados locais (data dumps, logs, vazamentos).",
    "descricao": "O GNU Awk (gawk) é uma linguagem de programação interpretada e uma ferramenta de linha de comando voltada para o processamento, manipulação e extração de dados estruturados e textuais. Ele opera realizando varreduras sequenciais em arquivos de texto linha por linha, aplicando expressões regulares (Regex) para identificar padrões específicos e executando ações predefinidas sobre os campos de dados correspondentes.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, o `gawk` desempenha um papel fundamental na fase posterior à coleta, atuando no tratamento e na higienização de grandes volumes de dados brutos desestruturados. Ele permite ao analista auditar e filtrar de forma estática arquivos massivos (como *data dumps* de vazamentos, logs de servidores, bases de dados convertidas em texto ou saídas brutas de *scrapers*) para extrair artefatos de interesse como e-mails, hashes, IPs, números de telefone ou usernames vinculados ao alvo, sem a necessidade de carregar esses arquivos em editores de texto convencionais ou bancos de dados complexos.",
    "notes": "* A combinação do `gawk` com expressões regulares avançadas permite converter dumps caóticos em arquivos `.csv` estruturados, facilitando a posterior importação para ferramentas de grafos ou tabelas de cruzamento no Obsidian.\n* Devido à sua alta eficiência em gerenciamento de memória, ele é recomendado para lidar com arquivos em escala de gigabytes, mantendo a performance onde ferramentas com interface gráfica costumam falhar."
  },
  {
    "id": "GNU grep",
    "title": "GNU grep",
    "url": "https://www.gnu.org/software/grep",
    "tipo": "Utilitário de Linha de Comando (CLI) para Processamento de Texto",
    "utilidade": "Extração, filtragem e análise de padrões de texto via Expressões Regulares (RegEx) em grandes volumes de dados locais e dumps de vazamentos",
    "descricao": "O GNU grep é um utilitário de linha de comando clássico, nativo em sistemas Unix/Linux, projetado para realizar buscas rápidas em arquivos de texto locais com base em padrões definidos pelo usuário ou Expressões Regulares (RegEx). A ferramenta se destaca por sua alta performance e eficiência no processamento de arquivos massivos, sendo capaz de varrer gigabytes de dados sem saturar a memória RAM do sistema.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações digitais, inteligência cibernética (CYBINT) e análise de ameaças, o `grep` é uma ferramenta indispensável para a triagem e o pós-processamento de dados coletados. Ele permite que o analista filtre massivamente bancos de dados vazados (*data leaks*), isole credenciais expostas, extraia indicadores de comprometimento (IoCs) de arquivos de log brutos e higienize grandes volumes de texto não estruturado antes de sua indexação.",
    "notes": "* A combinação de parâmetros específicos maximiza sua eficiência em OSINT: a flag `-E` ativa expressões regulares estendidas; a flag `-o` instrui o comando a retornar apenas a string exata que corresponde ao padrão (ideal para extrair dados limpos); e a flag `-r` executa buscas recursivas em diretórios inteiros.\n* Pode ser encadeado com outros comandos de terminal (como `sort`, `uniq` e `awk`) por meio de *pipes* (`|`), viabilizando a criação de pipelines automatizados para limpar, ordenar e remover duplicatas de dados extraídos de alvos sob investigação."
  },
  {
    "id": "GNU sed (Stream Editor)",
    "title": "GNU sed (Stream Editor)",
    "url": "https://www.gnu.org/software/sed/",
    "tipo": "Utilitário de Processamento Textual e Análise Estática",
    "utilidade": "Edição, filtragem e transformação automatizada de fluxos de texto em lote para normalização de dados.",
    "descricao": "O GNU sed é um editor de fluxo de texto (*stream editor*) nativo de sistemas operacionais Unix-like. Ao contrário de editores de texto interativos tradicionais, o `sed` processa os dados de entrada (arquivos ou pipes de comandos) de forma linear e automatizada, aplicando operações predefinidas — como substituições baseadas em expressões regulares (Regex), remoções de linhas, inserções e filtragens estruturadas — diretamente no fluxo de texto.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ecossistema de inteligência em fontes abertas, o `sed` atua como um motor de higienização e padronização de dados brutos na fase pós-coleta. É frequentemente empregado para manipular arquivos massivos que excedem a capacidade de editores visuais, permitindo ao analista limpar *data dumps* de vazamentos, isolar strings de interesse (como hashes de senhas, e-mails ou números de telefone), remover caracteres especiais redundantes e formatar saídas brutas em listas limpas prontas para importação e cruzamento no Obsidian. Por operar de maneira 100% offline, garante a integridade da OPSEC do investigador ao não expor os dados a serviços terceiros em nuvem.",
    "notes": "* Sua capacidade de substituição *in-place* (utilizando a flag `-i`) permite modificar arquivos gigantescos diretamente no disco, economizando memória RAM e agilizando a formatação de tabelas estruturadas para relatórios.\n* Pode ser encadeado com outras ferramentas de terminal para automatizar a conversão de relatórios de texto em blocos de notas limpos com sintaxe Markdown compatível com o Obsidian."
  },
  {
    "id": "GNU Wget",
    "title": "GNU Wget",
    "url": "https://www.gnu.org/software/wget/",
    "tipo": "Utilitário de Linha de Comando para Download e Web Crawling",
    "utilidade": "Download não interativo de arquivos e páginas web via HTTP/HTTPS/FTP, coleta massiva de recursos e espelhamento recursivo de websites",
    "descricao": "O GNU Wget é uma ferramenta de linha de comando desenvolvida pelo Projeto GNU para o download não interativo de arquivos através dos protocolos HTTP, HTTPS e FTP. O utilitário foi projetado para operar com alta resiliência em conexões instáveis, suportando retomada de transferências interrompidas, limitação de taxa de download, configuração de cabeçalhos/cookies personalizados e navegação recursiva em estruturas de diretórios web e FTP.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/scrapers-automacao",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas e coleta técnica de dados, o Wget atua na fase de aquisição passiva e automação de extração em larga escala. Ele possibilita a clonagem ou espelhamento completo de páginas web e portais públicos para análise offline posterior, o download recursivo de arquivos e documentos (como PDFs, planilhas e imagens) indexados em diretórios expostos, e a preservação forense de evidências digitais diretamente no terminal.",
    "notes": "* É fundamental definir parâmetros de profundidade (`-l`) e flags de não propagação a diretórios superiores (`-np`) durante downloads recursivos (`-r`) para evitar loops infinitos ou downloads não intencionais fora do domínio de escopo.\n* Permite alterar o cabeçalho *User-Agent* (`--user-agent`) e utilizar servidores de proxy (`-e use_proxy=yes -e http_proxy=...`), o que auxilia na conformidade das regras de OPSEC e na simulação de tráfego de navegadores comuns.\n* A combinação do Wget com comandos utilitários locais (como `grep`, `sed` e `awk`) viabiliza a criação de *pipelines* eficientes para extração e filtragem imediata de informações estruturadas."
  },
  {
    "id": "GoFullPage - Full Page Screen Capture",
    "title": "GoFullPage - Full Page Screen Capture",
    "url": "https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl",
    "tipo": "Extensão de Navegador para Preservação e Materialização de Evidências",
    "utilidade": "Captura integral de páginas web e preservação visual de conteúdo dinâmico em artefatos estáticos (PNG/PDF) para documentação de evidências.",
    "descricao": "O GoFullPage é uma extensão de navegador desenvolvida para capturar capturas de tela (*screenshots*) completas e contínuas de páginas da internet. A ferramenta rola a página renderizada de forma automatizada e programática, costurando os fragmentos visuais para gerar um único arquivo de imagem de alta resolução (PNG ou JPG) ou um documento PDF, capturando com precisão elementos ocultos além da área visível inicial (*viewport*), como rodapés e comentários longos.",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No ciclo de inteligência em fontes abertas, a materialização e a preservação da prova digital são etapas críticas para garantir a integridade da investigação. O GoFullPage é empregado pelo analista para congelar visualmente o estado de perfis em redes sociais, postagens de blogs, fóruns ou páginas institucionais vinculadas ao alvo antes que o conteúdo seja editado, removido ou restrito. Isso gera um registro linear e fidedigno do alvo que pode ser arquivado localmente, permitindo auditorias e revisões seguras e totalmente offline, sem a necessidade de novos acessos à rede que possam alertar o investigado.",
    "notes": "* A ferramenta é ideal para compor anexos visuais em relatórios de inteligência dentro do Obsidian, pois permite que páginas web inteiras sejam visualizadas de forma contínua em notas locais sem quebras de layout.\n* Recomenda-se configurar a extensão para salvar as capturas diretamente no formato PDF quando o objetivo for a preservação de textos longos para posterior extração de caracteres (OCR) ou indexação textual local."
  },
  {
    "id": "Google Account Sign-In",
    "title": "Google Account Sign-In",
    "url": "https://accounts.google.com/v3/signin",
    "tipo": "Plataforma de Validação e Verificação de Identidades",
    "utilidade": "Validação ativa de identificadores digitais (e-mails e telefones) e enumeração de contas no ecossistema Google.",
    "descricao": "O Google Account Sign-In é o portal oficial e centralizado de autenticação para todos os serviços do ecossistema Google (como Gmail, YouTube, Google Drive e Google Workspace). Sob a perspectiva técnica de segurança e análise de dados, a interface processa requisições em tempo real para verificar a existência de credenciais de usuários em sua base de dados antes de prosseguir para a etapa de inserção de senha.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/telefone",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações de fontes abertas, a página de login do Google é amplamente explorada como uma ferramenta de pivotagem e validação passiva/ativa de alvos. Ao inserir um e-mail suspeito ou um número de telefone na interface de login (ou no fluxo de recuperação de conta), o analista pode confirmar se o identificador possui uma conta Google ativa. Além disso, a depender das configurações de privacidade do alvo e do fluxo utilizado, a interface pode expor metadados valiosos em fontes abertas, como o nome real completo configurado na conta, fotos de perfil (avatares) e a confirmação de vínculos com domínios corporativos personalizados (Google Workspace).",
    "notes": "* O uso repetitivo ou automatizado a partir de um mesmo endereço IP pode acionar mecanismos de defesa da Google, resultando em desafios de CAPTCHA ou bloqueios temporários de requisições. \n* Recomenda-se realizar este procedimento a partir de um ambiente seguro (máquina virtual) e utilizando conexões isoladas para evitar o cruzamento de telemetria ou a associação do IP do investigador à conta do alvo."
  },
  {
    "id": "Google Admin Toolbox - Messageheader",
    "title": "Google Admin Toolbox - Messageheader",
    "url": "https://toolbox.googleapps.com/apps/messageheader/",
    "tipo": "Analisador de Cabeçalhos de E-mail / Utilitário de Análise Estática",
    "utilidade": "Análise estática, decodificação e parsing de cabeçalhos brutos de e-mail (SMTP) para rastreamento de rotas, verificação de saltos de rede e auditoria de chaves de autenticação.",
    "descricao": "O Messageheader é um utilitário oficial integrado ao ecossistema de ferramentas de diagnóstico da Google (Google Admin Toolbox). A plataforma foi desenvolvida para decodificar e analisar de forma estática as linhas textuais que compõem o cabeçalho bruto (*headers*) de uma mensagem de e-mail, organizando os dados técnicos de roteamento em uma tabela cronológica linear que evidencia os tempos de transferência e o status de segurança de protocolos de validação de remetentes.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "func/forense-local",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações cibernéticas e engenharia reversa de e-mails (análise de campanhas de phishing ou rastreamento de atores de ameaça), o Messageheader atua como uma ferramenta analítica de triagem passiva. O analista pode extrair dados cruciais contidos nas linhas ocultas de uma mensagem sem realizar qualquer interação ou varredura ativa contra a infraestrutura do remetente. A ferramenta permite identificar se houve falsificação de identidade (*email spoofing*), mapear a cadeia de custódia da mensagem e expor metadados estruturais sobre o cliente de e-mail original.",
    "notes": "* Para utilizar o recurso, o analista deve extrair o código-fonte completo do e-mail (opções como \"Ver original\", \"Exibir cabeçalho completo\" ou \"Exportar como .eml/.msg\" em clientes de e-mail) e colar a totalidade do bloco textual na janela de entrada da plataforma.\n* A interface calcula os segundos exatos decorridos entre cada salto de servidor (*hop*), um detalhe técnico valioso para identificar anomalias no trajeto ou desvios propositais de tráfego de e-mail.\n* O sistema realiza a validação gráfica dos registros SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail) e DMARC (Domain-based Message Authentication, Reporting, and Conformance), indicando de forma imediata se a mensagem foi modificada ou se falhou nos testes básicos de autenticidade do domínio declarante."
  },
  {
    "id": "Google Advanced Search",
    "title": "Google Advanced Search",
    "url": "https://www.google.com/advanced_search",
    "tipo": "Mecanismo de Busca Avançada e Otimização de Consultas (Dorking)",
    "utilidade": "Formulação assistida de consultas complexas e operadores booleanos (Google Dorks) por meio de interface gráfica para refinamento de buscas na web.",
    "descricao": "O Google Advanced Search é uma interface gráfica oficial que simplifica a criação de consultas de pesquisa complexas e altamente filtradas. A plataforma traduz parâmetros inseridos em campos estruturados (como correspondências exatas, exclusão de palavras, intervalos numéricos, idiomas, regiões, sites/domínios específicos e formatos de arquivos) em operadores de busca avançados (Google Dorks) de forma totalmente automatizada.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "func/busca-dorks",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito do ciclo de inteligência em fontes abertas, a ferramenta é um recurso fundamental para a fase de coleta e reconhecimento passivo. Ela mitiga o ruído informacional e a sobrecarga de dados ao permitir que o analista construa dorks cirúrgicas sem a necessidade de memorizar toda a sintaxe de operadores lógicos. Com isso, torna-se viável rastrear documentos expostos (como arquivos PDF ou XLSX contendo dados de um alvo), isolar menções a uma entidade em domínios específicos (ex: portais governamentais ou institucionais) e mapear vazamentos de dados indexados na superfície da web de maneira rápida e estruturada.",
    "notes": "* A interface é um excelente recurso para analistas compreenderem a lógica e a estrutura de construção das Google Dorks antes de digitá-las diretamente na barra de pesquisa convencional.\n* As strings de busca resultantes geradas pela plataforma podem ser salvas em notas de referência no Obsidian para automatizar e padronizar consultas recorrentes durante o monitoramento de alvos ou auditorias de pegada digital."
  },
  {
    "id": "Google Alerts",
    "title": "Google Alerts",
    "url": "https://www.google.com.br/alerts",
    "tipo": "Sistema de Monitoramento e Alertas de Conteúdo",
    "utilidade": "Monitoramento contínuo e automatizado de termos de busca, palavras-chave ou dorks para detecção de novas menções indexadas na internet.",
    "descricao": "O Google Alerts (Google Alertas) é um serviço de monitoramento de conteúdo baseado na nuvem fornecido pela Google. A ferramenta automatiza a execução de consultas de pesquisa na web, rastreando constantemente o surgimento de novas páginas indexadas, artigos de notícias, postagens em blogs ou menções textuais que correspondam aos termos e critérios predefinidos pelo usuário, enviando notificações consolidadas diretamente por e-mail ou via feed RSS.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "func/busca-dorks",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações em fontes abertas, o Google Alerts desempenha um papel fundamental na fase de monitoramento persistente e inteligência de longo prazo. Ele elimina a necessidade de buscas manuais repetitivas, permitindo que o analista configure \"sentinelas\" para termos críticos vinculados ao alvo — como nomes raros, CPFs, e-mails, números de telefone, codinomes em fóruns ou nomes de domínios sob investigação. Caso o alvo seja citado em um novo vazamento de dados, matéria jornalística ou publicação institucional indexada pelo motor de busca, o investigador recebe um aviso imediato, viabilizando o acompanhamento dinâmico do ciclo de inteligência.",
    "notes": "* Por questões estritas de OPSEC (Segurança das Operações), o analista nunca deve configurar alertas sobre seus alvos utilizando sua conta Google pessoal ou institucional principal. Recomenda-se o uso de contas anônimas e dedicadas (*sock puppets*) exclusivas para a coleta de inteligência.\n* A conversão dos alertas em feeds RSS (em vez de notificações por e-mail) permite que o fluxo de dados seja integrado diretamente a leitores de feed centralizados ou automatizado em painéis de acompanhamento dentro do Obsidian."
  },
  {
    "id": "Google Colaboratory (Colab)",
    "title": "Google Colaboratory (Colab)",
    "url": "https://colab.research.google.com/",
    "tipo": "Ambiente de Computação em Nuvem e Processamento de Dados",
    "utilidade": "Execução em nuvem de scripts, automações e processamento de grandes volumes de dados para investigações OSINT sem consumo de recursos locais.",
    "descricao": "O Google Colaboratory (Colab) é um ambiente baseado em nuvem que permite a criação, execução e compartilhamento de cadernos interativos (*Jupyter Notebooks*). Ele fornece uma interface integrada para a escrita e execução de códigos em linguagens de programação (primariamente Python), concedendo acesso direto e sob demanda a recursos de hardware hospedados nos servidores da Google, como memória RAM e processadores gráficos de alto desempenho (GPUs).",
    "testada": false,
    "tags": [
      "func/scrapers-automacao",
      "opsec/ambiente-seguro",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No ecossistema de inteligência em fontes abertas, o Google Colab serve como uma poderosa central de processamento de dados e automação baseada na nuvem. O analista pode utilizar a plataforma para rodar scripts customizados de coleta de dados (*scrapers*), análise de redes, manipulação de arquivos massivos e mineração de logs. Do ponto de vista defensivo, o Colab atua como uma barreira de OPSEC: qualquer script de coleta executado dentro de suas células realiza requisições utilizando a infraestrutura e os endereços IP da Google Cloud, ocultando o link de internet, a geolocalização e as pegadas técnicas reais do investigador perante os sistemas de contra-inteligência do alvo.",
    "notes": "* Devido à natureza volátil das instâncias gratuitas do Colab, todos os arquivos e relatórios gerados durante a execução do código devem ser baixados ou exportados para serviços de armazenamento persistente antes do encerramento da sessão, evitando a perda de evidências.\n* Os scripts e os fluxos de automação validados no Colab podem ter suas saídas textuais convertidas diretamente para a sintaxe Markdown para fins de documentação técnica e arquivamento em notas estruturadas no Obsidian."
  },
  {
    "id": "Google Dorks for Bug Bounty",
    "title": "Google Dorks for Bug Bounty",
    "url": "https://github.com/TakSec/google-dorks-bug-bounty",
    "tipo": "Repositório de Recursos e Listas de Dorks",
    "utilidade": "Biblioteca curada de operadores avançados de busca (Google Dorks) voltada à descoberta de vulnerabilidades, diretórios expostos e vazamento de informações sensíveis.",
    "descricao": "O repositório \"Google Dorks for Bug Bounty\", mantido por TakSec no GitHub, é um guia de referência técnica que reúne uma ampla coleção de strings de pesquisa e operadores avançados de busca (Google Dorks). O projeto é estruturado para auxiliar profissionais de segurança da informação, caçadores de falhas (bug bounty hunters) e analistas de inteligência a localizarem endpoints de APIs expostos, arquivos de configuração confidenciais, logs de sistema, diretórios abertos e parâmetros suscetíveis a vulnerabilidades web (como SQL Injection, Cross-Site Scripting, SSRF e LFI) indexados publicamente pelo Google.",
    "testada": false,
    "tags": [
      "func/busca-dorks",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo do Open Source Intelligence (OSINT), o repositório funciona como uma base de conhecimento essencial para a fase de reconhecimento passivo (*footprinting*). Ele fornece os moldes de busca técnica necessários para auditar a presença digital de uma organização e detectar de maneira ágil vazamentos de dados ou ativos críticos expostos de forma inadvertida na internet indexável, sem que o investigador precise interagir ou gerar tráfego direto contra os servidores do alvo.",
    "notes": "* Os comandos estruturados servem como matrizes lógicas e exigem que o analista substitua os termos genéricos (como `example.com`) pelos alvos ou domínios específicos sob investigação.\n* A execução sequencial ou automatizada dessas strings diretamente no motor de busca do Google costuma disparar defesas anti-bot da plataforma, resultando no bloqueio temporário do endereço IP do investigador ou na exigência constante de resolução de CAPTCHAs, recomendando-se cautela ou o uso de proxies de requisição."
  },
  {
    "id": "Google Earth",
    "title": "Google Earth",
    "url": "https://earth.google.com",
    "tipo": "Plataforma de Inteligência Geoespacial (GEOINT)",
    "utilidade": "Observação e análise de imagens de satélite de alta resolução, mapeamento tridimensional e reconstituição de cenários geográficos.",
    "descricao": "O Google Earth é uma plataforma de mapeamento global que renderiza uma representação tridimensional detalhada da Terra baseada primordialmente em imagens de satélite e fotografias aéreas. A sua versão web permite a exploração de continentes, análise de topografias complexas, visualização de estruturas urbanas em 3D e manipulação de dados geográficos diretamente no navegador de internet.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito da Inteligência de Fontes Abertas, especificamente na subdisciplina de GEOINT (Geospatial Intelligence), o Google Earth atua como uma ferramenta fundamental para processos de geolocalização e verificação de mídias (fotos e vídeos). O analista pode examinar as características do terreno de um cenário investigado, identificar infraestruturas, calcular linhas de visão, estimar distâncias físicas e obter coordenadas geográficas exatas para correlacionar e validar informações de inteligência com outras fontes textuais ou visuais.",
    "notes": "* A plataforma suporta a importação e criação de projetos baseados em arquivos KML e KMZ, permitindo ao investigador sobrepor camadas de dados estruturados (como rotas, pontos de interesse e perímetros) geradas por outras ferramentas de coleta.\n* A ferramenta de régua integrada viabiliza a medição técnica de distâncias em linha reta ou caminhos poligonais, além do cálculo de áreas superficiais com precisão.\n* Embora a versão web forneça recursos avançados de renderização e ferramentas de visualização urbana (como o Street View integrado), investigações que exijam uma linha do tempo histórica profunda e retroativa de imagens de satélite demandam a utilização do software complementar para desktop (Google Earth Pro)."
  },
  {
    "id": "Google Hacking Tests (Tutorialspoint)",
    "title": "Google Hacking Tests (Tutorialspoint)",
    "url": "https://www.tutorialspoint.com/google_hacking_tests.htm",
    "tipo": "Guia Técnico e Lista de Referência de Dorks",
    "utilidade": "Guia de referência educacional e testes práticos de Google Hacking (Google Dorks) para identificação de falhas de segurança, diretórios expostos e vazamento de informações.",
    "descricao": "A seção \"Google Hacking Tests\" do portal educacional Tutorialspoint é uma documentação técnica focada na técnica de Google Hacking (também denominada Google Dorking). O recurso detalha a sintaxe e o comportamento dos operadores lógicos e de pesquisa avançados do motor de busca (tais como `intitle:`, `inurl:`, `filetype:`, `site:` e `cache:`), fornecendo exemplos estruturados de strings de consulta utilizadas por auditores e analistas para mapear vulnerabilidades web, localizar arquivos confidenciais esquecidos em servidores e identificar painéis de administração expostos à indexação pública.",
    "testada": false,
    "tags": [
      "func/busca-dorks",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito do Open Source Intelligence (OSINT), este guia atua como um manual prático para a fase de reconhecimento passivo (*passive footprinting*). Ele ensina o analista a estruturar comandos de busca de alta precisão para auditar o perímetro digital de uma organização e identificar potenciais vazamentos de dados ou brechas de segurança cibernética sem disparar alertas nos sistemas de detecção do alvo, visto que toda a interação ocorre de forma intermediada contra os servidores de indexação do próprio Google.",
    "notes": "* As strings de dorks apresentadas são conceituais e devem ser customizadas pelo investigador por meio da adição de operadores restritivos (como `site:dominio-alvo.com`) para delimitar a busca estritamente ao escopo da investigação em andamento.\n* A inserção consecutiva e automatizada de strings complexas com operadores avançados na interface do Google gera anomalias de tráfego que frequentemente resultam na exigência de CAPTCHAs ou no bloqueio temporário do endereço IP utilizado, recomendando-se moderação ou o emprego de técnicas de anonimização de tráfego de rede para preservar a fluidez e a OPSEC do analista."
  },
  {
    "id": "Google Images",
    "title": "Google Images",
    "url": "https://images.google.com",
    "tipo": "Motor de Busca Reversa e Indexador Visual",
    "utilidade": "Pesquisa inversa de imagens, localização de fontes originais de arquivos visuais e identificação de entidades ou locais por correspondência gráfica.",
    "descricao": "O Google Images é o serviço especializado da Google projetado para a indexação, catalogação e varredura de arquivos de imagem em toda a internet. A plataforma integra os algoritmos de reconhecimento visual do Google Lens, permitindo que usuários realizem consultas textuais ou utilizem um arquivo de imagem como entrada (pesquisa reversa) para localizar correspondências exatas, variações de resolução ou elementos visualmente semelhantes indexados na web.",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ecossistema de inteligência em fontes abertas, o Google Images é um recurso fundamental para as etapas de verificação de mídias, análise de integridade e inteligência visual (IMINT). A plataforma viabiliza o rastreio da origem cronológica de uma imagem para identificar manipulações de contexto (como fotos antigas associadas a eventos recentes), a detecção de perfis dissimulados (*sock puppets*) criados com fotografias clonadas de terceiros e o reconhecimento automatizado de pontos turísticos, produtos, logotipos e marcas presentes em um cenário sob investigação.",
    "notes": "* Durante o processo de busca reversa, o investigador pode utilizar recursos de recorte (*cropping*) oferecidos pela interface do Google Lens para isolar objetos, textos ocultos ou rostos específicos dentro de uma imagem complexa, refinando a precisão dos resultados do motor de busca.\n* Embora o índice do Google seja massivo, o algoritmo prioriza relevância comercial e páginas populares. Para investigações que demandem a identificação de correspondências faciais estritas ou rastreamento em regiões geopolíticas específicas, torna-se necessário cruzar os resultados obtidos com outros motores de busca reversa alternativos (como Yandex, Bing Visual Search e TinEye)."
  },
  {
    "id": "Google Keep",
    "title": "Google Keep",
    "url": "https://keep.google.com/",
    "tipo": "Aplicativo de Notas e Organização Baseado em Nuvem",
    "utilidade": "Captura rápida de notas, listas de verificação e armazenamento temporário de insumos textuais e visuais obtidos durante investigações.",
    "descricao": "O Google Keep é um serviço de gerenciamento de notas baseado em nuvem desenvolvido pela Google. A plataforma permite a criação ágil de notas textuais, listas de tarefas com caixas de seleção, anexação de imagens, captação de áudios e desenhos livres, sincronizando todo o conteúdo em tempo real entre diferentes dispositivos associados a uma mesma conta de usuário.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "plataforma/mobile",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No fluxo de trabalho de inteligência e gerenciamento de conhecimento pessoal (PKM), o Google Keep atua como uma ferramenta de captura rápida (*scratchpad* ou caixa de entrada temporária). Ele auxilia o analista a registrar de forma provisória pistas repentinas, listas de verificação de procedimentos lógicos, ou pequenos fragmentos de texto e imagens coletados durante uma triagem inicial, facilitando a posterior organização, filtragem e transposição desses insumos para um repositório centralizado e permanente de conhecimento, como o Obsidian.",
    "notes": "* A plataforma suporta a atribuição de marcadores coloridos e etiquetas personalizadas, facilitando a separação visual de lembretes operacionais ou tarefas pendentes de diferentes casos investigativos.\n* Possui uma funcionalidade integrada de Reconhecimento Óptico de Caracteres (OCR), permitindo extrair textos de capturas de tela ou imagens anexadas às notas com poucos cliques diretamente na interface.\n* Por constituir um serviço em nuvem comercial da Google, diretrizes estritas de OPSEC devem ser mantidas: o investigador deve evitar o armazenamento de dados civis reais de alvos, credenciais sigilosas ou relatórios de casos confidenciais sem criptografia prévia na plataforma, de modo a prevenir o comprometimento da investigação em cenários de quebra de sigilo ou invasão de conta."
  },
  {
    "id": "Google Lens",
    "title": "Google Lens",
    "url": "https://lens.google/",
    "tipo": "Ferramenta de Análise Visual e Reconhecimento de Entidades por IA",
    "utilidade": "Reconhecimento visual baseado em inteligência artificial, extração de texto (OCR), tradução instantânea e identificação de objetos, marcos geográficos e produtos a partir de imagens.",
    "descricao": "O Google Lens é uma ferramenta de computação visual e reconhecimento de imagens baseada em inteligência artificial e redes neurais profundas. A plataforma analisa dados visuais para identificar objetos, roupas, produtos, espécies biológicas, pontos de referência geográficos, além de realizar a leitura, extração (OCR) e tradução automatizada de textos capturados em fotografias ou capturas de tela.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "func/analise-midia-integridade",
      "plataforma/web",
      "plataforma/mobile",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito do Open Source Intelligence, com ênfase em Inteligência de Imagens (IMINT) e Inteligência Geoespacial (GEOINT), o Google Lens serve como um poderoso motor de processamento para dados visuais previamente coletados. O analista pode utilizá-lo para isolar elementos específicos em um cenário sob investigação, como logotipos corporativos, modelos de equipamentos eletrônicos, marcas de vestuário ou padrões arquitetônicos, permitindo identificar o contexto socioeconômico do alvo ou determinar a localização exata de uma imagem com base em acidentes geográficos e monumentos indexados.",
    "notes": "* A interface do usuário permite o ajuste dinâmico da caixa de seleção (*bounding box*), viabilizando o isolamento de pequenos detalhes contidos em uma imagem complexa (como um relógio de pulso ou uma etiqueta de numeração) para forçar o algoritmo a refinar o padrão de busca.\n* A função de extração de texto (OCR) é altamente resiliente a distorções de perspectiva e variações de luminosidade, sendo ideal para transcrever rapidamente placas de trânsito, documentos fotografados de forma oblíqua ou pichações contendo simbologias de interesse.\n* Sob a ótica de OPSEC, o envio de arquivos para os servidores do Google Lens submete a mídia à telemetria da plataforma. Imagens contendo metadados sensíveis, rostos de investigadores ou informações críticas não públicas devem ser tratadas de forma local e sanitizadas antes de qualquer upload para evitar o vazamento involuntário de dados operacionais."
  },
  {
    "id": "Google Maps / User Content URL Resolver",
    "title": "Google Maps / User Content URL Resolver",
    "url": "http://maps.google.com/",
    "tipo": "Validação e Resolução de Infraestrutura Web",
    "utilidade": "Resolução, análise técnica e auditoria de URLs/links encurtados ou redirecionamentos pertencentes à infraestrutura geográfica do Google Maps.",
    "descricao": "O domínio e os subdomínios vinculados ao `googleusercontent.com` servem como infraestrutura de rede da Google para hospedar e entregar conteúdos gerados por utilizadores, imagens estáticas, caches e dados de geolocalização processados. Links formatados sob essa infraestrutura — especificamente quando associados a rotas ou mapeamentos do Google Maps — atuam como intermediadores técnicos para redirecionar requisições para a aplicação geográfica principal ou para renderizar metadados e fotos inseridos em pontos de interesse.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "fonte/geoespacial",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito do Open Source Intelligence, com foco em Inteligência Cibernética (CYBINT) e verificação técnica, este recurso de infraestrutura é utilizado para validar a legitimidade de links geográficos que aparecem em relatórios, publicações ou códigos-fonte de páginas web sob análise. O investigador pode dissecar e resolver este tipo de URL para extrair o destino real do mapeamento, identificar se o link aponta para uma infraestrutura fidedigna do Google ou detetar tentativas de personificação e redirecionamentos maliciosos (open redirect) mascarados por domínios legítimos.",
    "notes": "* URLs que utilizam o ecossistema `googleusercontent.com` devem ser tratadas com precaução analítica, uma vez que, por alojarem conteúdos criados por terceiros, podem ser utilizadas por agentes de ameaças para alojar scripts ou ocultar o destino final de links geográficos durante ataques de engenharia social.\n* Para fins de preservação de evidências digitais (Cadeia de Custódia), o analista deve documentar o redirecionamento completo gerado a partir desta URL inicial, utilizando ferramentas de cabeçalho HTTP (como comandos `curl -I`) para registar formalmente os códigos de status de rede (como 301 ou 302 Moving Temporarily) até o destino final no Google Maps."
  },
  {
    "id": "Google My Maps",
    "title": "Google My Maps",
    "url": "https://www.google.com/mymaps",
    "tipo": "Plataforma de Customização Cartográfica e Visualização de Dados (GEOINT)",
    "utilidade": "Criação de mapas customizados, plotagem de coordenadas geográficas e modelagem visual de vínculos espaciais entre entidades de uma investigação.",
    "descricao": "O Google My Maps é uma extensão do ecossistema Google Maps que permite aos utilizadores criar, personalizar e partilhar mapas geográficos próprios. A ferramenta viabiliza a inserção manual de marcadores analíticos, desenho de linhas de trajetória, delimitação de perímetros poligonais e a importação de conjuntos de dados estruturados para exibição sobreposta às camadas de mapas vetoriais e imagens de satélite da Google.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "fonte/geoespacial",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito do Open Source Intelligence, com foco em Inteligência Geoespacial (GEOINT) e análise de vínculos, o Google My Maps funciona como uma plataforma de centralização visual para correlacionar dados geográficos obtidos durante a fase de recolha. O analista pode plotar múltiplos pontos de interesse associados a um caso — como endereços residenciais e corporativos de alvos, locais de ocorrência de incidentes, registros de veículos ou coordenadas extraídas de metadados de fotografias — para identificar de forma clara os padrões de mobilidade, zonas de maior atividade (*hotspots*) e estabelecer conexões espaciais entre diferentes entidades investigadas.",
    "notes": "* A plataforma suporta a importação em massa de ficheiros estruturados (como CSV, XLSX, KML e GPX), permitindo ao investigador automatizar a plotagem de centenas de coordenadas geográficas extraídas previamente de relatórios ou de extrações forenses.\n* O sistema permite a organização dos dados em camadas independentes (*layers*), facilitando a segmentação visual da investigação por categorias (ex: uma camada para empresas do alvo, outra para os vínculos familiares e uma terceira para o rastreio de bens patrimoniais).\n* Os mapas gerados podem ser exportados nos formatos KML ou KMZ, viabilizando a transferência dos dados para softwares analíticos locais mais robustos, como o Google Earth Pro ou QGIS.\n* Sob a ótica de OPSEC, é fundamental que o investigador certifique que as definições de privacidade e partilha do mapa estejam configuradas estritamente como \"Privado\", impedindo que os dados sigilosos do caso sejam indexados publicamente pelos motores de busca ou acedidos por terceiros."
  },
  {
    "id": "Google Patents",
    "title": "Google Patents",
    "url": "https://patents.google.com/",
    "tipo": "Mecanismo de Busca e Indexador de Propriedade Intelectual",
    "utilidade": "Pesquisa, indexação e análise de patentes, modelos de utilidade e documentos de propriedade intelectual emitidos por escritórios globais.",
    "descricao": "O Google Patents é um motor de busca especializado desenvolvido pela Google que indexa e organiza mais de 120 milhões de patentes, pedidos de patentes e documentos técnicos provenientes de mais de 100 escritórios de propriedade intelectual de todo o mundo (incluindo USPTO, EPO, WIPO, e o INPI brasileiro). A plataforma padroniza e traduz automaticamente os resumos e descrições técnicas, vinculando de forma estruturada as famílias de patentes, inventores, empresas requerentes, citações e litígios legais associados.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de Inteligência de Fontes Abertas, o Google Patents atua como uma rica base de dados para Inteligência Corporativa (Business Intelligence / Corporate Intelligence) e levantamento de vínculos de indivíduos. A plataforma permite auditar o ecossistema tecnológico e de Pesquisa e Desenvolvimento (P&D) de uma empresa-alvo, rastrear subsidiárias (por meio dos detentores dos direitos econômicos), antecipar lançamentos de produtos e identificar parcerias comerciais ocultas. Para a investigação de pessoas físicas, viabiliza o mapeamento de sua produção intelectual histórica, antigos e atuais empregadores e áreas de especialidade técnica.",
    "notes": "* A plataforma oferece suporte a operadores booleanos e campos específicos de filtragem em sua interface de busca avançada, permitindo restringir consultas por inventor (`inventor:\"Nome\"`), empresa atual detentora (`assignee:\"Empresa\"`), datas de prioridade e país de origem do registro.\n* O sistema mapeia graficamente a árvore de citações (*citations*) de uma patente, recurso técnico útil para o investigador identificar quais outras empresas ou indivíduos estão a utilizar aquela tecnologia como base, evidenciando conexões de mercado ou potenciais litígios por quebra de patente.\n* Cada documento analisado fornece links diretos para o download do arquivo em formato PDF original emitido pelo órgão governamental, assegurando a obtenção de provas com integridade e valor documental para relatórios formais."
  },
  {
    "id": "Google Pinpoint",
    "title": "Google Pinpoint",
    "url": "https://journaliststudio.google.com/pinpoint/about",
    "tipo": "Plataforma de Processamento de Dados, OCR e Extração de Entidades por IA",
    "utilidade": "Extração automatizada de entidades, OCR avançado, transcrição de áudios e busca analítica em massa dentro de grandes volumes de documentos não estruturados.",
    "descricao": "O Google Pinpoint é uma plataforma especializada desenvolvida sob a iniciativa do Google News Initiative (Journalist Studio). O sistema foi projetado para auxiliar pesquisadores e analistas a processar, organizar e explorar grandes e complexas coleções de arquivos (como repositórios com milhares de páginas de PDFs, imagens digitalizadas, planilhas, e-mails brutos e arquivos de áudio). A ferramenta utiliza tecnologias avançadas de Reconhecimento Óptico de Caracteres (OCR) e algoritmos de processamento de linguagem natural da Google para indexar o conteúdo integral dos arquivos e extrair automaticamente as entidades citadas.",
    "testada": false,
    "tags": [
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ciclo de inteligência, o Google Pinpoint atua como uma solução centralizada para a fase de processamento e análise de grandes volumes de dados textuais e midiáticos, sendo amplamente explorado no exame de vazamentos de dados (*leaks*), documentos governamentais desclassificados ou acervos institucionais densos obtidos previamente. A plataforma otimiza o tempo da investigação ao realizar a triagem passiva do material, permitindo realizar buscas por termos exatos ou sinônimos em múltiplos formatos e isolar conexões chave de forma automatizada.",
    "notes": "* A plataforma suporta o upload nativo de arquivos de áudio e vídeo em múltiplos formatos, gerando de forma automática uma transcrição de texto completa e indexada cronologicamente, permitindo clicar em uma palavra do texto para saltar exatamente para o trecho correspondente no arquivo multimídia.\n* A tecnologia de OCR integrada é altamente eficaz na extração de conteúdos textuais em arquivos PDF mal digitalizados, fotografias de documentos oficiais e manuscritos, tornando os dados pesquisáveis através da barra de busca interna da plataforma.\n* Em termos de OPSEC, por se tratar de um ambiente hospedado nos servidores de nuvem da Google, o investigador deve exercer rígido controle e avaliação de risco antes de realizar o upload de documentos que contenham segredos de estado, dados civis estritamente sigilosos ou informações confidenciais não criptografadas, mitigando riscos associados à custódia de dados em terceiros."
  },
  {
    "id": "Google Programmable Search Engine",
    "title": "Google Programmable Search Engine",
    "url": "https://programmablesearchengine.google.com/",
    "tipo": "Plataforma de Customização e Agregação de Motores de Busca",
    "utilidade": "Criação, configuração e gerenciamento de motores de busca personalizados (Custom Search Engines) para filtragem e centralização de pesquisas em domínios específicos da web.",
    "descricao": "O Google Programmable Search Engine (anteriormente denominado Google Custom Search Engine ou CSE) é um serviço disponibilizado pela Google que permite a criação de mecanismos de busca customizados baseados no seu algoritmo de indexação global. A ferramenta possibilita ao utilizador delimitar o escopo das pesquisas a um conjunto estrito de websites, subdomínios ou URLs específicas, além de permitir a customização de filtros, priorização de páginas e refinamentos temáticos estruturados.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ecossistema de Inteligência de Fontes Abertas, a plataforma atua como um otimizador estratégico para a fase de coleta e triagem massiva de dados. Diante do ruído informacional presente em buscas globais tradicionais, o analista pode empregar o Programmable Search Engine para construir repositórios de busca nichados e focados. É amplamente utilizado para criar indexadores dedicados que varrem simultaneamente apenas portais de transparência de uma região, fóruns específicos de discussões cibernéticas, repositórios de códigos ou portais de notícias locais, permitindo obter leads altamente relevantes sem contaminação por técnicas agressivas de SEO comercial de páginas externas.",
    "notes": "* A plataforma suporta o emprego de caracteres curinga (como `*.gov.br/*` ou `*/pessoal/*`) nas suas regras de inclusão e exclusão, conferindo alta flexibilidade para mapear ramificações complexas de domínios institucionais.\n* Os motores de busca customizados gerados fornecem uma URL pública de uso direto, viabilizando o compartilhamento da ferramenta otimizada entre membros de uma mesma equipe de investigação para padronização de procedimentos.\n* É possível integrar dorks e operadores de busca nativos diretamente nas diretivas internas do motor, de modo que qualquer palavra-chave inserida pelo analista na barra de buscas já execute automaticamente critérios avançados de filtragem (como extensões de arquivos ou termos de exclusão pré-definidos)."
  },
  {
    "id": "Google Public DNS",
    "title": "Google Public DNS",
    "url": "https://dns.google",
    "tipo": "Utilitário de Resolução de DNS e Verificação Cibernética",
    "utilidade": "Consulta e resolução de registros DNS (A, AAAA, MX, TXT, PTR), mapeamento de apontamentos lógicos e auditoria de infraestrutura de rede.",
    "descricao": "O `dns.google` é a interface web oficial e o endpoint de API do serviço global de resolução de nomes de internet da Google (Google Public DNS). A plataforma permite a execução de consultas diretas a servidores de nomes para inspecionar registros DNS de qualquer domínio público, oferecendo suporte tanto para visualização em formato de texto estruturado na página quanto para requisições programáticas via protocolos DNS-over-HTTPS (DoH).",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de Inteligência Cibernética (CYBINT) e reconhecimento de infraestrutura, o serviço serve como um validador técnico passivo de ativos digitais. Ao consultar registros como MX (servidores de e-mail) ou TXT (registros de SPF, DKIM e chaves de validação de propriedade de terceiros), o analista consegue mapear quais provedores corporativos (ex: Microsoft 365, Google Workspace, ferramentas de marketing) o alvo consome. Além disso, melhora a OPSEC do investigador: as requisições aos servidores autoritativos do alvo são intermediadas pela infraestrutura da Google, impedindo que o endereço IP do analista ou do seu provedor local apareça nos logs de quem administra o domínio investigado.",
    "notes": "* A plataforma permite automatizar a coleta técnica em massa por meio de scripts simples em terminal (utilizando ferramentas como `curl`), bastando apontar as requisições para a URL da API estruturada do serviço (ex: `https://dns.google/resolve?name=alvo.com&type=TXT`).\n* É ideal para contornar problemas de envenenamento de cache (*DNS poisoning*) ou configurações de *Split-Horizon* presentes em redes locais de investigação, garantindo que o analista enxergue a resolução de nomes idêntica à propagada na malha global da internet."
  },
  {
    "id": "GoogleDorks (s1rn3tz)",
    "title": "GoogleDorks (s1rn3tz)",
    "url": "https://dorks.s1rn3tz.ovh/googledorks",
    "tipo": "Ferramenta de Busca e Enumeração (Dorking)",
    "utilidade": "Centralização e estruturação de consultas avançadas (Google Dorks) para otimização de buscas na superfície da web e identificação de dados expostos.",
    "descricao": "O GoogleDorks é uma plataforma baseada na web que atua como um repositório interativo e centralizado de consultas de pesquisa avançada (Google Dorks). A ferramenta cataloga, estrutura e disponibiliza strings de busca prontas contendo operadores lógicos e comandos específicos projetados para interagir com o indexador global da Google, permitindo localizar de forma cirúrgica painéis de login expostos, arquivos de log, diretórios abertos, vulnerabilidades em aplicações web e documentos com informações sensíveis.",
    "testada": false,
    "tags": [
      "func/busca-dorks",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ciclo de inteligência em fontes abertas, a plataforma serve como um recurso de aceleração na fase de coleta de dados e reconhecimento passivo. Em vez de formular strings complexas manualmente, o analista de OSINT pode utilizar o catálogo estruturado para selecionar padrões de busca altamente eficazes e adaptá-los ao escopo do seu alvo (como um domínio corporativo ou nome de uma entidade). Isso viabiliza a descoberta rápida de vazamentos e falhas de segurança indexadas na internet de superfície, otimizando o tempo de varredura e mitigando o ruído nos resultados do motor de busca.",
    "notes": "* Para obter sucesso na investigação, o analista deve acoplar os parâmetros do alvo (como o domínio da empresa ou usernames conhecidos) às dorks genéricas fornecidas pela plataforma antes de submetê-las ao buscador.\n* É altamente recomendável documentar e categorizar as strings de maior sucesso em uma nota centralizada no Obsidian, criando um manual prático de dorking personalizado para auditorias frequentes de pegada digital."
  },
  {
    "id": "GoOSINT",
    "title": "GoOSINT",
    "url": "https://goosint.com/",
    "tipo": "Repositório de Recursos e Links de Inteligência",
    "utilidade": "Diretório e glossário curado de recursos, focado na catalogação e centralização de ferramentas gratuitas de OSINT e segurança da informação.",
    "descricao": "O GoOSINT era originalmente um portal web especializado (posteriormente consolidado em repositório colaborativo) que atua como um glossário estruturado de fontes e ferramentas focadas em Inteligência de Fontes Abertas (OSINT) e Cibersegurança. A plataforma organiza de maneira categórica mais de 300 recursos digitais e utilitários baseados na web, cobrindo vertentes como scanners de segurança, repositórios de inteligência de ameaças (Cyber Threat Intelligence), ambientes de sandbox online e ferramentas complementares para a gestão de investigações.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No fluxo de trabalho de inteligência, o GoOSINT serve como um catálogo de referência e apoio à tomada de decisão na fase de planejamento da coleta de dados. Em vez de realizar buscas difusas na internet por ferramentas operacionais, o analista utiliza este indexador centralizado para mapear e selecionar os recursos técnicos mais adequados para a extração ou verificação de dados de um determinado alvo, otimizando o tempo de triagem logística e enriquecendo a base de conhecimento do investigador.",
    "notes": "* Por ser um agregador estático de links e referências, a plataforma não processa dados diretos de alvos ou inputs de investigação, funcionando exclusivamente como um guia de encaminhamento para ferramentas de terceiros.\n* Os links indexados são revisados periodicamente pela comunidade, porém, por apontarem para serviços externos e independentes, cabe ao analista validar a OPSEC e os termos de privacidade de cada site de destino antes de submeter dados sensíveis de uma investigação real a eles."
  },
  {
    "id": "Gosur - Mapa de Satélite",
    "title": "Gosur - Mapa de Satélite",
    "url": "https://satellite-map.gosur.com/pt/",
    "tipo": "Plataforma Web de Consulta Geoespacial / Visualizador de Mapas",
    "utilidade": "Visualização de mapas interativos, imagens de satélite globais e mapeamento urbano ou rural.",
    "descricao": "O Gosur Satellite Map é uma plataforma baseada na web que agrega dados cartográficos e imagens de satélite de alta resolução provenientes de múltiplos provedores globais. A ferramenta oferece recursos de zoom estruturado, visualização de relevo, nomes de ruas e busca de localidades em tempo real.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo da inteligência geoespacial (GEOINT) e do reconhecimento de alvos, a plataforma serve como uma ferramenta de busca ampla para exploração tática de terrenos, análise de pontos de interesse (POI) e verificação de layouts arquitetônicos de instalações ou propriedades físicas. Por centralizar e indexar imagens de satélite acessíveis de forma direta, ela facilita a triagem visual inicial sem a necessidade de instalar softwares pesados de SIG (Sistemas de Informação Geográfica).",
    "notes": "* A ferramenta é útil para complementar análises onde o Google Maps ou outros visualizadores convencionais apresentem restrições de API ou carregamento de imagens em navegadores sem recursos de hardware avançados.\n* Como a plataforma agrega dados de terceiros, o investigador deve estar ciente de que as imagens podem ter datas de captura variadas, sendo recomendável cruzar as mídias obtidas com outras fontes de GEOINT para confirmar a cronologia da infraestrutura analisada."
  },
  {
    "id": "Grabify",
    "title": "Grabify",
    "url": "https://grabify.link/",
    "tipo": "Ferramenta de Captura e Rastreamento de IP",
    "utilidade": "Criação de links de rastreamento para captura de endereços IP e metadados técnicos de conexão",
    "descricao": "O Grabify (Grabify IP Logger) é uma ferramenta baseada na web que funciona como um encurtador de URLs avançado, projetado para rastrear e registrar informações detalhadas de qualquer usuário que clique no link gerado. A plataforma captura dados cruciais como o endereço IP, geolocalização estimada, provedor de internet (ISP), sistema operacional, navegador, agentes de usuário (User-Agent) e outras especificações técnicas do dispositivo conectado.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/personas"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, o Grabify é utilizado em auditorias ativas ou em táticas de engenharia social autorizadas para identificar a real localização física, o endereço IP e a infraestrutura técnica de um alvo de interesse. Ao induzir o alvo a interagir com um link customizado, o analista consegue obter vetores técnicos fundamentais para desmascarar perfis falsos ou validar pontos de acesso de rede sem depender de informações declaradas de forma fraudulenta.",
    "notes": "* A ferramenta atua na fase de coleta ativa de dados, o que exige alinhamento estrito com os parâmetros legais e operacionais da investigação, dado que envolve a captura de metadados técnicos de terceiros.\n* Para otimizar o sucesso da coleta e manter a discrição, a ferramenta oferece recursos de mascaramento de domínios, permitindo alterar o link padrão do Grabify por domínios de aparência legítima que não levantem suspeitas no alvo.\n* É possível ativar notificações na plataforma para alertar o investigador em tempo real no exato momento em que o link for acessado pelo alvo."
  },
  {
    "id": "Grayhat Warfare",
    "title": "Grayhat Warfare",
    "url": "https://grayhatwarfare.com/",
    "tipo": "Motor de Busca de Dados Expostos e Ativos em Nuvem",
    "utilidade": "Busca e indexação de repositórios de armazenamento em nuvem expostos (Buckets S3, Azure Blobs e DigitalOcean Spaces)",
    "descricao": "O Grayhat Warfare é uma plataforma online e motor de busca especializado na localização, indexação e listagem de repositórios de armazenamento em nuvem publicamente expostos. O sistema realiza varreduras automáticas para catalogar Amazon S3 Buckets, Azure Blobs e DigitalOcean Spaces mal configurados, disponibilizando bilhões de arquivos indexados para consultas textuais por palavras-chave, extensões ou caminhos de diretório.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/dominio",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito de investigações de segurança cibernética (CYBINT), inteligência corporativa e avaliação de superfícies de ataque, a ferramenta serve como fonte primária para rastrear vazamentos de dados institucionais, credenciais expostas, backups desprotegidos e propriedade intelectual de organizações alvo, permitindo correlacionar termos e domínios corporativos diretamente a ativos de nuvem vulneráveis.",
    "notes": "* A interface separa as buscas entre arquivos e buckets, exigindo cadastro gratuito para consultas avançadas de buckets por palavras-chave.\n* É ideal para complementar processos de inteligência de ameaças, permitindo rastrear o escopo de incidentes de segurança cibernética e a exposição de dados antes que sejam explorados por agentes maliciosos.\n* Suporta operadores lógicos básicos em suas pesquisas (como o sinal de menos `-` para exclusão de termos indesejados nos resultados)."
  },
  {
    "id": "GreyNoise Visualizer",
    "title": "GreyNoise Visualizer",
    "url": "https://viz.greynoise.io",
    "tipo": "Plataforma de Inteligência de Ameaças e Visualização de Ruído de Rede",
    "utilidade": "Análise de tráfego de redes, identificação de escaneamentos em massa e inteligência de ameaças cibernéticas direcionada a endereços IP (CYBINT)",
    "descricao": "O GreyNoise Visualizer é uma plataforma online que permite a consulta e a análise do \"ruído de fundo\" da internet. A ferramenta coleta, analisa e rotula dados de tráfego gerados por scanners de massa, bots, ferramentas de inventário (como Shodan e Censys), mecanismos de busca e atores maliciosos que realizam varreduras indiscriminadas no espaço de endereçamento IPv4 global.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo da inteligência cibernética (CYBINT) e da investigação de infraestrutura, o GreyNoise serve como uma camada essencial de validação para analistas. Ele permite contextualizar o comportamento de um endereço IP suspeito, determinando se a atividade detectada faz parte de uma campanha de varredura em massa oportunista (ruído genérico) ou se trata de um comportamento direcionado e isolado, otimizando o processo de triagem e atribuição de ameaças.",
    "notes": "* A plataforma utiliza uma linguagem de consulta própria chamada GNQL (GreyNoise Query Language), que viabiliza a construção de filtros avançados combinando parâmetros como organização (org), país (country), portas (port) e tags de intenção (como `malicious` ou `benign`).\n* É uma ferramenta ideal para ser utilizada na fase de triagem de incidentes, ajudando o investigador a desconsiderar falsos positivos causados por tráfego automatizado e legítimo de empresas de segurança que escaneiam a internet rotineiramente."
  },
  {
    "id": "GruposWhats.app",
    "title": "GruposWhats.app",
    "url": "https://gruposwhats.app",
    "tipo": "Indexador e Motor de Busca de Grupos de Mensageria",
    "utilidade": "Localização, monitoramento e extração de links de grupos públicos do WhatsApp para investigações de SOCMINT e mapeamento de comunidades.",
    "descricao": "O GruposWhats.app é uma plataforma web que funciona como um diretório centralizado e indexador público de links de convite para grupos do WhatsApp. O site organiza e categoriza as comunidades por tópicos, palavras-chave e interesses, permitindo a descoberta e o acesso a salas de conversa ativas no aplicativo de mensageria de forma direta.",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "fonte/redes-sociais",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações em fontes abertas e inteligência em mídias sociais (SOCMINT), a plataforma serve como uma base de dados passiva para identificar ecossistemas digitais, grupos de interesse e redes de relacionamento associados a alvos ou atividades sob análise. A partir do mapeamento dessas comunidades, torna-se possível obter o link de acesso para posterior coleta de dados cadastrais, mensagens e identificadores técnicos dos membros participantes.",
    "notes": "* Por se tratar de um repositório alimentado por inserções voluntárias e varreduras automatizadas de links públicos, é recomendável realizar a validação prévia do status de atividade do grupo e a veracidade de seu conteúdo antes de integrá-lo formalmente a um relatório técnico.\n* O ingresso nas comunidades obtidas por meio desta plataforma exige do analista a aplicação rigorosa de OPSEC, incluindo o uso exclusivo de contas de cobertura (*sock puppets*) em ambientes virtuais isolados, a fim de evitar a exposição de dados reais de investigação ou o rastreamento por contra-inteligência."
  },
  {
    "id": "HackerTarget - Extract Links",
    "title": "HackerTarget - Extract Links",
    "url": "https://hackertarget.com/extract-links/",
    "tipo": "Ferramenta de Web Scraping e Reconhecimento Técnico",
    "utilidade": "Extração automatizada de links internos e externos de uma página web para mapeamento de superfícies e enumeração de ativos digitais",
    "descricao": "O HackerTarget Extract Links é um utilitário online desenvolvido para analisar o código-fonte de uma URL fornecida e extrair, de forma automatizada, todos os hiperlinks (links internos, links externos, imagens, scripts e arquivos) contidos na página. A ferramenta realiza a requisição HTTP a partir de seus próprios servidores e devolve os dados estruturados em uma lista limpa para análise imediata.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/scrapers-automacao",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo do reconhecimento técnico e inteligência cibernética (CYBINT), a ferramenta atua de forma ágil no mapeamento preliminar da pegada digital de uma organização na web. Ela permite ao investigador descobrir subdomínios legados ou ocultos, identificar conexões com serviços de terceiros, localizar arquivos sensíveis expostos na árvore de diretórios (como PDFs, DOCX ou chaves públicas) e rastrear links de redes sociais vinculados ao alvo, revelando a infraestrutura lógica e o ecossistema de relacionamentos do site investigado.",
    "notes": "* Devido ao fato de a consulta ser disparada diretamente pela infraestrutura da HackerTarget, o uso da ferramenta provê uma camada tática de OPSEC passiva, uma vez que os logs do servidor do site-alvo registrarão o IP do serviço indexador e não o endereço IP real do analista.\n* A ferramenta captura estritamente os links contidos no código HTML estático entregue na requisição inicial; hiperlinks gerados via renderização dinâmica por JavaScript complexo (Client-Side Rendering) podem não ser indexados, recomendando-se o uso complementar de ferramentas de navegação inspecionada para alvos que utilizam frameworks modernos de aplicação dinâmica."
  },
  {
    "id": "Hatching Triage",
    "title": "Hatching Triage",
    "url": "https://tria.ge/",
    "tipo": "Plataforma de Análise de Malware (Malware Analysis Sandbox)",
    "utilidade": "Sandbox automatizada na nuvem para análise comportamental e estática de malwares e arquivos suspeitos",
    "descricao": "O Hatching Triage (tria.ge) é uma plataforma de sandbox automatizada baseada na nuvem, projetada para a execução, análise e triagem de amostras de malwares, documentos maliciosos e URLs suspeitas. A ferramenta executa os arquivos enviados em ambientes virtualizados isolados (Windows, Android, Linux), monitorando em tempo real o comportamento do artefato, alterações no sistema de arquivos, chamadas de API e, principalmente, a atividade de rede gerada.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo da inteligência cibernética (CYBINT) e da investigação de infraestrutura de ameaças, o Triage permite ao analista submeter arquivos suspeitos ou URLs associadas a campanhas de phishing e engenharia social direcionadas ao alvo. A sandbox interage de forma segura com o elemento, extraindo indicadores técnicos valiosos sem que o investigador precise interagir diretamente com o servidor malicioso a partir de sua própria máquina.",
    "notes": "* Os relatórios públicos gerados por outros pesquisadores na plataforma servem como uma rica base de conhecimento OSINT, permitindo buscar por hashes de arquivos, nomes de domínios ou tags específicas de malwares para identificar campanhas correlacionadas.\n* Por questões estritas de OPSEC e sigilo da investigação, o analista deve estar ciente de que, ao utilizar a camada gratuita, qualquer arquivo ou documento enviado (que possa conter dados sensíveis ou nomes de pessoas reais) se tornará público e indexável por terceiros na internet."
  },
  {
    "id": "Have I Been Pwned (HIBP)",
    "title": "Have I Been Pwned (HIBP)",
    "url": "https://haveibeenpwned.com/",
    "tipo": "Plataforma de Consulta de Vazamentos de Dados e Credenciais Expostas",
    "utilidade": "Verificação de comprometimento de contas, e-mails e números de telefone em vazamentos de dados públicos e corporativos.",
    "descricao": "A Have I Been Pwned é uma plataforma de referência global voltada à auditoria de segurança e inteligência de ameaças. O serviço consolida e indexa registros de megavazamentos de dados (data breaches) ocorridos em milhares de serviços web, permitindo que analistas verifiquem se um identificador digital específico foi exposto publicamente.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/telefone",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Indispensável para a fase de reconhecimento passivo e mapeamento da pegada digital (digital footprinting). Ao inserir um e-mail ou número de telefone do alvo, o analista mapeia em quais plataformas, fóruns ou serviços web aquela identidade possui ou possuiu cadastro, fornecendo novos leads de redes sociais e nichos digitais sem alertar o investigado.",
    "notes": "* **Segurança e OPSEC**: O site utiliza o modelo de *K-Anonymity* para consultas de senhas (pwned passwords) e não armazena logs das pesquisas de e-mail, garantindo que a consulta efetuada pelo investigador não gere novos vazamentos ou alerte o alvo.\n* **Limitações de Automação**: Embora a pesquisa manual na página web seja gratuita, requisições automatizadas em larga escala por meio de scripts ou ferramentas integradas de terceiros requerem o uso de uma chave de API comercial paga."
  },
  {
    "id": "HDNS (Handshake DNS)",
    "title": "HDNS (Handshake DNS)",
    "url": "https://www.hdns.io",
    "tipo": "Servidor de Resolução DNS Descentralizado e Focado em Privacidade",
    "utilidade": "Resolução e validação de nomes de domínio alternativos no ecossistema Handshake (HNS) com foco em privacidade.",
    "descricao": "O HDNS é um serviço público de resolução de DNS projetado para integrar a internet convencional ao sistema de nomes descentralizado Handshake (HNS). Ele permite traduzir e estender as requisições de domínios Web3 de nível superior (TLDs alternativas) que operam fora do escopo centralizado da ICANN. O diferencial do serviço é a sua política estrita de privacidade, que mascara a identidade de rede do usuário descartando o último byte do endereço IP no momento da requisição para mitigar vazamentos e rastreamentos.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "plataforma/terminal",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "Essencial para o mapeamento e investigação de alvos que utilizam infraestruturas descentralizadas ou alternativas da Web3. A ferramenta permite interrogar tabelas de DNS alternativas para extrair apontamentos (como registros A, CNAME e TXT) que não respondem nos servidores raiz convencionais, oferecendo uma camada crítica de OPSEC ao truncar o último octeto do endereço IP do investigador durante as consultas.",
    "notes": "* Para realizar pesquisas pontuais a partir do terminal sem alterar o DNS de toda a sua máquina de análise, utilize a sintaxe de consulta direta especificando o servidor do HDNS, como no exemplo: `dig @103.196.38.38 termo_alvo.thief`.\n* Embora o serviço trunque o IP para salvaguardar a privacidade do investigador, requisições HTTP subsequentes feitas diretamente aos servidores web hospedados nesses domínios alternativos ainda estarão sujeitas à exposição padrão de IP, necessitando do uso combinado de redes de anonimato (VPN/Tor)."
  },
  {
    "id": "HEDnsExtractor",
    "title": "HEDnsExtractor",
    "url": "https://github.com/HuntDownProject/HEDnsExtractor",
    "tipo": "Ferramenta de Linha de Comando (CLI) para Mapeamento de Infraestrutura e Pivoting de Redes",
    "utilidade": "Extração e correlação de nomes de domínio vinculados a endereços IP, sub-redes ou ASNs por meio do portal Hurricane Electric.",
    "descricao": "O HEDnsExtractor é um utilitário de código aberto desenvolvido em Go projetado para automatizar a coleta e identificação de domínios hospedados sob uma determinada infraestrutura de rede. Ao interrogar de forma automatizada o portal de ferramentas de internet da Hurricane Electric (bgp.he.net), a ferramenta extrai os registros históricos e atuais de resolução DNS de IPs, blocos CIDR ou Sistemas Autônomos (ASN). É amplamente empregada em rotinas de inteligência de ameaças (CTI), rastreamento de servidores de Comando e Controle (C2) e identificação de campanhas de phishing.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "func/busca-identificacao",
      "func/infraestrutura-cybint",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Funciona como um mecanismo avançado de pivoting técnico em CYBINT. A partir de um indicador inicial de rede (IP, sub-rede ou ASN), a ferramenta levanta passivamente todos os domínios e subdomínios que compartilham o mesmo espaço de hospedagem, expandindo a superfície de análise sem interagir diretamente com o servidor final do alvo.",
    "notes": "* Por depender de técnicas de raspagem (web scraping) na interface pública de serviços de terceiros (Hurricane Electric), a ferramenta está sujeita a sofrer bloqueios temporários de requisições (rate limiting) por parte do portal consultado se for executada de forma massiva sem intervalos ou sem o suporte de proxies.\n* O HEDnsExtractor oferece suporte nativo e opcional para enriquecimento de dados por meio da API do VirusTotal (através das flags `-vt` e `-vt-api-key`), permitindo que a lista de domínios extraídos seja automaticamente confrontada com pontuações de reputação e detecção de malwares."
  },
  {
    "id": "Heritrix",
    "title": "Heritrix",
    "url": "https://github.com/internetarchive/heritrix3",
    "tipo": "Ferramenta de Web Crawling e Indexação Massiva",
    "utilidade": "Coleta automatizada em larga escala e arquivamento web massivo de páginas e domínios da internet",
    "descricao": "O Heritrix é o rastreador web (web crawler) de código aberto em escala de produção desenvolvido e utilizado pelo Internet Archive. Projetado para coletar e arquivar páginas e recursos da World Wide Web, o software opera de forma estruturada para seguir links recursivamente a partir de sementes iniciais (*seed URLs*), gerando arquivos padronizados de preservação digital, como os formatos WARC e ARC, que registram o tráfego HTTP bruto e o código-fonte integral das páginas visitadas.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "fonte/arquivos-noticias",
      "func/scrapers-automacao",
      "plataforma/desktop",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de fontes abertas e fixação probatória, o Heritrix é empregado em cenários que demandam o monitoramento e espelhamento integral de grandes conjuntos de domínios ou portais governamentais e corporativos (alvo/dominio). Ele permite a captura automatizada de conteúdos históricos e estruturas de sites antes que sejam alterados ou removidos da rede, servindo como base técnica para análises retrospectivas em investigações complexas.",
    "notes": "* O Heritrix utiliza uma interface de gerenciamento baseada em navegador web para configurar e monitorar o progresso dos rastreamentos em tempo real, permitindo pausar, ajustar ou auditar os arquivos coletados.\n* Para evitar bloqueios por parte dos servidores de destino ou o esgotamento dos recursos locais, é fundamental configurar adequadamente as políticas de exclusão de robôs (robots.txt) e definir limites de taxa de requisição (*crawl rate*)."
  },
  {
    "id": "Historypin",
    "title": "Historypin",
    "url": "https://www.historypin.org/",
    "tipo": "Repositório Colaborativo e Plataforma de Inteligência Geoespacial Histórica (GEOINT/IMINT)",
    "utilidade": "Geolocalização de fotos, vídeos e áudios históricos mapeados sobre coordenadas geográficas e linhas do tempo interativas",
    "descricao": "O Historypin é uma plataforma colaborativa e arquivo digital aberto que mapeia documentos históricos, fotografias antigas, gravações de áudio e relatos em camadas cartográficas e cronológicas interativas. Desenvolvido em parceria com arquivos públicos, bibliotecas, museus e usuários do mundo inteiro, o serviço projeta conteúdos visuais e históricos diretamente sobre mapas digitais e interfaces de Street View, permitindo a comparação espacial e temporal da evolução urbana e rural ao longo dos anos.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "fonte/arquivos-noticias",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de fontes abertas, com ênfase em Geointeligência (GEOINT) e Inteligência de Imagens (IMINT), o Historypin atua como uma ferramenta analítica de verificação de terreno e reconstituição histórica de cenários. Ele possibilita a checagem temporal de fachadas, ruas, marcos arquitetônicos e pontos de referência geográficos, auxiliando na verificação da autenticidade de fotos antigas, na datação de eventos e no desmentido de mídias descontextualizadas ou manipuladas.",
    "notes": "* A ferramenta conta com um recurso de controle de transparência (*slider*) que permite sobrepor uma foto histórica à visualização atual do Street View, facilitando a identificação de mudanças estruturais em edificações e relevos.\n* Como parte dos dados é inserida de forma comunitária (*crowdsourcing*), é fundamental validar a precisão da localização e das datas atribuídas através de fontes primárias e registros oficiais de arquivos públicos."
  },
  {
    "id": "hns.to",
    "title": "hns.to",
    "url": "https://hns.to",
    "tipo": "Gateway de Consulta e Resolução de Infraestrutura Web3",
    "utilidade": "Resolução, mapeamento e investigação de nomes de domínio alternativos e descentralizados baseados no protocolo Handshake (HNS).",
    "descricao": "O hns.to funciona como um gateway e sistema de resolução web para o protocolo Handshake (HNS). A plataforma permite que investigadores e usuários acessem e analisem domínios descentralizados registrados em uma rede blockchain, contornando a zona de raiz convencional coordenada pela ICANN.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Atua de forma estratégica na fase de reconhecimento técnico e inteligência de infraestrutura em ambientes Web3. O gateway permite mapear de forma passiva e direta no navegador a presença de um alvo em ecossistemas de domínios descentralizados (TLDs alternativas), viabilizando a validação técnica de apontamentos DNS criptográficos que não respondem aos servidores raiz convencionais da ICANN.",
    "notes": "* A resolução de domínios por meio de gateways públicos pode deixar rastros de navegação ou expor consultas textuais a intermediários. Para ações de alta necessidade de privacidade tática, recomenda-se cautela, uma vez que esse método de visualização web pode não ocultar a origem das requisições do analista de forma blindada."
  },
  {
    "id": "HNSSearch",
    "title": "HNSSearch",
    "url": "https://hnssearch.io/",
    "tipo": "Motor de Busca e Indexador de Conteúdo para a Web Descentralizada (Web3)",
    "utilidade": "Pesquisa, indexação e exploração de conteúdo e páginas web hospedadas em domínios descentralizados do ecossistema Handshake (HNS).",
    "descricao": "O HNSSearch é um motor de busca especializado para a rede Handshake (HNS). Ele funciona de maneira análoga aos buscadores tradicionais da internet convencional, mas foca exclusivamente no rastreio e na indexação de sites, fóruns, blogs e serviços publicados sob domínios descentralizados baseados em blockchain, permitindo a descoberta de conteúdos que não são mapeados por motores de busca comuns.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Atua de forma passiva no mapeamento e na descoberta de pegadas digitais na Web3. O motor permite varrer e localizar a presença de alvos, páginas ativas e ramificações de sites que foram transferidos ou espelhados para domínios de nível superior (TLDs) alternativos baseados em blockchain, sem a necessidade de interagir com o servidor final.",
    "notes": "* **Vantagem de OPSEC**: Por se tratar de uma consulta a um índice pré-compilado, a realização de pesquisas no HNSSearch não interage diretamente com o servidor final do alvo, fornecendo uma camada segura de busca passiva na fase de reconhecimento.\n* **Acesso aos Resultados**: Os links fornecidos pelo buscador utilizam a estrutura de sufixos descentralizados do Handshake (como `.thief`). Para que o analista consiga abrir e navegar nas páginas encontradas, é necessário utilizar em conjunto um gateway de resolução web (como o `hns.to`) ou configurar um servidor DNS compatível (como o `HDNS`) no ambiente de análise."
  },
  {
    "id": "Holehe",
    "title": "Holehe",
    "url": "https://github.com/megadose/holehe",
    "tipo": "Ferramenta de Linha de Comando (CLI) para Validação de Contas e Mapeamento de Pegada Digital",
    "utilidade": "Verificação e mapeamento de contas criadas a partir de um endereço de e-mail utilizando fluxos de recuperação de senha.",
    "descricao": "O Holehe é uma ferramenta modular de código aberto desenvolvida em Python que permite aos investigadores descobrir em quais sites, fóruns e plataformas online um determinado e-mail está cadastrado. A ferramenta automatiza requisições para os endpoints de login e recuperação de conta de mais de 120 serviços da web, analisando os códigos de resposta dos servidores para confirmar a existência da conta sem enviar e-mails de alerta ou notificações para o alvo sob investigação.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "fonte/redes-sociais",
      "func/validacao-status",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Crucial para a fase de validação ativa e mapeamento de pegada digital. A ferramenta permite determinar com precisão em quais plataformas e redes sociais um endereço de e-mail específico possui cadastro ativo, utilizando endpoints de autenticação de forma silenciosa e passiva para o alvo, gerando novos caminhos de investigação (pivoting).",
    "notes": "* Devido à natureza das consultas, que envolvem o envio rápido de requisições sequenciais para múltiplos servidores web externos, o uso do Holehe a partir de um único IP de origem pode resultar em bloqueios temporários (rate limiting) ou no acionamento de mecanismos anti-bot (CAPTCHAs). O emprego de proxies ou VPNs rotativas é frequentemente adotado para contornar essa limitação técnica.\n* Como os sites alteram periodicamente a lógica de suas páginas de login e recuperação de senha, módulos individuais da ferramenta podem parar de funcionar temporariamente até que novas atualizações de código sejam lançadas no repositório oficial."
  },
  {
    "id": "Hootsuite",
    "title": "Hootsuite",
    "url": "https://www.hootsuite.com/",
    "tipo": "Painel de Monitoramento e Inteligência em Mídias Sociais (SOCMINT Dashboard)",
    "utilidade": "Monitoramento de redes sociais, escuta ativa (social listening), agendamento e análise de métricas em múltiplas plataformas",
    "descricao": "O Hootsuite é uma plataforma de gerenciamento, escuta ativa (*social listening*) e monitoramento integrado de redes sociais. A ferramenta permite conectar múltiplos perfis e redes (como X/Twitter, Facebook, Instagram, LinkedIn, YouTube e TikTok) em um painel centralizado e modular, viabilizando o acompanhamento simultâneo de feeds, palavras-chave, hashtags, menções a marcas ou indivíduos e interações em tempo real.",
    "testada": false,
    "tags": [
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/pago"
    ],
    "utilidade_Osint": "No âmbito de investigações de fontes abertas voltadas para mídias sociais (SOCMINT), o Hootsuite funciona como um centro de escuta ativa e coleta estruturada de dados. Ele permite aos analistas rastrear a disseminação de narrativas, monitorar simultaneamente postagens e reações associadas a alvos ou eventos críticos, identificar padrões de engajamento e auditar menções públicas a entidades corporativas ou pessoas físicas em diversas plataformas sociais a partir de um único ambiente unificado.",
    "notes": "* A criação de colunas de monitoramento (*streams*) com operadores de busca e termos booleanos facilita a filtragem de ruído em eventos com alto volume de publicações.\n* A utilização de contas corporativas de cobertura (*sock puppets*) conectadas à plataforma deve respeitar as diretrizes de OPSEC para evitar o cruzamento inadvertido de credenciais ou dados do investigador com os perfis monitorados."
  },
  {
    "id": "Hostinger WHOIS Lookup",
    "title": "Hostinger WHOIS Lookup",
    "url": "https://www.hostinger.com/br/whois",
    "tipo": "Ferramenta Web de Consulta WHOIS e Infraestrutura de Domínios",
    "utilidade": "Consulta e verificação de dados cadastrais, técnicos e disponibilidade de nomes de domínio via protocolo WHOIS",
    "descricao": "A ferramenta WHOIS da Hostinger é uma interface web pública projetada para a consulta de registros do protocolo WHOIS em diversas extensões de domínios genéricos (gTLDs) e de código de país (ccTLDs). O serviço consulta os servidores de registro autoritativos para recuperar informações técnicas e cadastrais atreladas a um domínio, tais como servidor de registro (*registrar*), servidores de nomes de domínio (DNS/Name Servers), status de proteção, datas de criação, atualização e expiração, além de eventuais contatos públicos do titular.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações cibernéticas (CYBINT), reconhecimento de infraestrutura de rede e combate a fraudes digitais, o buscador WHOIS da Hostinger serve como uma fonte direta para triagem técnica preliminar. Ele possibilita a validação de atividade de endereços web suspeitos, identificação de servidores de hospedagem e DNS associados, e determinação da janela temporal de registro do ativo, auxiliando na correlação de campanhas de phishing ou páginas recém-criadas.",
    "notes": "* Devido à conformidade com regulações globais de privacidade (como GDPR) e serviços comuns de *WHOIS Privacy/Proxy*, dados pessoais (nomes, e-mails e telefones do registrante) frequentemente aparecem mascarados ou ocultados.\n* A ferramenta é ideal para consultas rápidas durante a fase inicial de reconhecimento (*footprinting*), servindo de ponte para consultas DNS mais detalhadas (como mapeamento de registros A, MX e TXT)."
  },
  {
    "id": "Hugging Face",
    "title": "Hugging Face",
    "url": "https://huggingface.co/",
    "tipo": "Plataforma e Repositório de Modelos de Inteligência Artificial e Aprendizado de Máquina",
    "utilidade": "Repositório centralizado de modelos de inteligência artificial, datasets e aplicações (Spaces) aplicados ao processamento, transcrição e análise contextual de dados.",
    "descricao": "O Hugging Face é o principal ecossistema colaborativo e plataforma de hospedagem voltada para a inteligência artificial e o aprendizado de máquina de código aberto. O portal centraliza e indexa milhares de modelos pré-treinados, conjuntos de dados (datasets) e aplicações web interativas (Spaces), servindo como uma infraestrutura fundamental para a execução e compartilhamento de tecnologias de processamento de linguagem natural (NLP), visão computacional, reconhecimento de áudio e análise multimodal.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Funciona como um hub centralizado de modelos e aplicações de IA aplicados à fase de processamento e análise estática de dados coletados. Permite ao analista utilizar ferramentas modulares (Spaces) e LLMs abertos para automatizar a transcrição de áudios em massa, extrair entidades de grandes volumes de documentos textuais e analisar o contexto de mídias obtidas sem a necessidade de buscar novas fontes na rede.",
    "notes": "* **OPSEC e Proteção de Dados**: Ao interagir com \"Spaces\" públicos ou utilizar a API de inferência nativa da plataforma para processar textos, imagens ou documentos sensíveis de uma investigação, os dados brutos são enviados para servidores de terceiros. Para salvaguardar a confidencialidade do caso e manter um ambiente seguro, recomenda-se clonar os repositórios e executar os modelos críticos localmente em uma máquina virtual isolada."
  },
  {
    "id": "Hunter.io",
    "title": "Hunter.io",
    "url": "https://hunter.io/",
    "tipo": "Plataforma de Inteligência de E-mails e Reconhecimento Corporativo",
    "utilidade": "Mapeamento, extração e verificação de endereços de e-mail corporativos e identificação de contatos profissionais associados a domínios",
    "descricao": "O Hunter.io é uma plataforma web projetada para localizar, extrair e verificar endereços de correio eletrônico corporativos. A ferramenta realiza varreduras em páginas públicas da internet para indexar e mapear a estrutura de e-mails de organizações, identificar os padrões de nomenclatura adotados por pessoas jurídicas, listar profissionais vinculados a esses domínios e auditar a validade técnica de caixas postais.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/empresa",
      "alvo/dominio",
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "func/validacao-status",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações baseadas em fontes abertas, inteligência corporativa e engenharia social (reconhecimento), o Hunter.io serve como um recurso estratégico para correlacionar domínios institucionais a indivíduos, descobrir canais de comunicação direta de tomadores de decisão e validar identidades digitais antes de abordagens táticas.",
    "notes": "* É altamente eficaz para a montagem de organogramas empresariais durante a fase de reconhecimento, permitindo identificar a hierarquia técnica de uma empresa antes de auditorias de segurança.\n* O validador de e-mails executa testes em três etapas (sintaxe, registros MX e conexões de servidor), o que permite confirmar a existência de um alvo sem gerar alertas ou disparar notificações de leitura na conta de destino."
  },
  {
    "id": "Hurricane Electric BGP Toolkit",
    "title": "Hurricane Electric BGP Toolkit",
    "url": "https://bgp.he.net",
    "tipo": "Ferramenta de Análise de Infraestrutura e Inteligência de Redes (CYBINT)",
    "utilidade": "Análise de roteamento BGP, identificação de Sistemas Autônomos (ASN), prefixos de IP e mapeamento técnico de infraestrutura de rede.",
    "descricao": "O Hurricane Electric BGP Toolkit é uma plataforma online desenvolvida para a análise, monitoramento e investigação técnica de dados de roteamento e conectividade da internet. Focada primordialmente no protocolo BGP (Border Gateway Protocol), a ferramenta consolida informações globais sobre Sistemas Autônomos (ASNs), prefixos e alocações de endereços IP (IPv4 e IPv6), relações de pareamento (peering), além de integrar dados de registros WHOIS e resoluções de DNS.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo da inteligência cibernética (CYBINT) e do mapeamento de pegada digital (footprinting), a plataforma atua como uma fonte passiva fundamental para desvendar a infraestrutura de rede de uma organização. Ela viabiliza a correlação entre domínios e servidores, permitindo rastrear os provedores de conectividade de um alvo e descobrir ativos ocultos na mesma sub-rede sem interagir diretamente com a infraestrutura investigada.",
    "notes": "* É ideal para a realização de técnicas de *pivoting*, onde o investigador utiliza um ASN descoberto para listar todos os outros blocos de IP e domínios associados à mesma empresa ou provedor sob investigação.\n* A visualização gráfica de conexões de ASNs disponível na plataforma auxilia na compreensão do fluxo de tráfego de um alvo, sendo útil para mapear dependências tecnológicas de corporações ou rastrear a infraestrutura de provedores de serviços maliciosos."
  },
  {
    "id": "Hushed",
    "title": "Hushed",
    "url": "https://hushed.com",
    "tipo": "Ferramenta de Comunicação Segura e Anonimato Telefônico",
    "utilidade": "Geração e gerenciamento de números de telefone temporários (burner numbers) para a criação de personas e proteção de identidade (OPSEC)",
    "descricao": "O Hushed é uma plataforma comercial voltada para a geração e gerenciamento de números de telefone temporários e secundários (comumente referidos como *burner numbers*). Operando por meio de tecnologia VoIP (Voice over Internet Protocol), o serviço permite que usuários realizem chamadas de voz e enviem mensagens de texto (SMS/MMS) de forma isolada, ocultando por completo o número de celular real atrelado ao chip SIM físico do dispositivo. A plataforma oferece suporte a linhas de múltiplos países, incluindo códigos de área dos Estados Unidos, Canadá e Reino Unido.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações cibernéticas em fontes abertas, especialmente em vertentes como SOCMINT (Inteligência em Redes Sociais) e HUMINT (Inteligência baseada em Fontes Humanas), o Hushed atua de maneira estratégica na fase de preparação e proteção operacional (OPSEC). A ferramenta resolve o desafio recorrente de contornar a exigência de verificação em duas etapas (2FA) e autenticação obrigatória via SMS por parte de grandes plataformas digitais, permitindo ao analista estruturar e maturar *Sock Puppets* (personas de investigação) de forma segura, sem comprometer dados telefônicos institucionais ou pessoais.",
    "notes": ""
  },
  {
    "id": "I Search From",
    "title": "I Search From",
    "url": "https://isearchfrom.com/pt-BR",
    "tipo": "Ferramenta Web de Simulação e Parametrização de Buscas Regionais",
    "utilidade": "Simulação de resultados de pesquisas no Google a partir de diferentes localizações geográficas, idiomas e dispositivos sem personalização local",
    "descricao": "O I Search From é uma ferramenta web projetada para permitir que usuários e analistas simulem buscas no mecanismo de pesquisa do Google a partir de localizações geográficas específicas (país, estado ou cidade), idiomas definidos e diferentes tipos de dispositivos (desktop, mobile ou tablet). A plataforma injeta parâmetros precisos de geolocalização (*UULE*, *gl*, *hl* e *near*) nas requisições do Google, exibindo a página exata de resultados (SERP) que um usuário situado naquela localidade veria.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "Em investigações em fontes abertas, o I Search From é essencial para contornar a \"bolha de filtros\" (*filter bubble*) e os vieses algorítmicos decorrentes do endereço IP ou histórico de navegação do investigador. Ele possibilita a coleta de dados de inteligência regionalizada, como notícias locais, anúncios segmentados, empresas de fachada e resultados restritos a determinadas jurisdições, sem a necessidade imediata de configurar túneis VPN para cada localidade geográfica que se deseja simular.",
    "notes": "* A ferramenta é ideal para verificar o posicionamento regional de sites, portais de notícias locais ou perfis de empresas sob investigação em cidades ou países específicos.\n* Recomenda-se utilizar os operadores avançados do Google (*Google Dorks*) diretamente no campo de pesquisa para refinar e potencializar a extração de documentos e páginas segmentadas."
  },
  {
    "id": "i2 Analyst's Notebook",
    "title": "i2 Analyst's Notebook",
    "url": "https://i2group.com/i2-analysts-notebook",
    "tipo": "Software de Análise Visual e Inteligência de Vínculos (Link Analysis)",
    "utilidade": "Análise visual de vínculos, modelagem de dados complexos e identificação de padrões de redes para investigações",
    "descricao": "O i2 Analyst's Notebook é uma aplicação desktop avançada de inteligência visual desenvolvida para consolidar, modelar e analisar volumes massivos de dados estruturados e não estruturados. Através de uma abordagem baseada em entidades, vínculos e propriedades (ELP), a plataforma transforma registros complexos (como históricos de chamadas telefônicas, transações bancárias e logs de tráfego) em gráficos e redes relacionais interativas, auxiliando na identificação rápida de padrões ocultos e fluxos operacionais.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "plataforma/desktop",
      "acesso/pago"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas e inteligência cibernética, a ferramenta atua na fase final de processamento e análise de inteligência. Após extrair informações pulverizadas de alvos em redes sociais, bases governamentais ou vazamentos, o analista importa esses conjuntos de dados para o i2 Analyst's Notebook para construir diagramas de vínculos (grafos de conexões) e linhas do tempo. Isso permite mapear redes criminosas, fraudes corporativas, relações societárias ocultas e fluxos de capitais de forma clara e visual.",
    "notes": "* O analista deve aplicar uma etapa rigorosa de ETL (Extração, Transformação e Carregamento) nos dados obtidos via OSINT antes de importá-los, garantindo a consistência das entidades para evitar gráficos corrompidos ou falsas duplicações.\n* Devido à execução offline e local do software, a plataforma oferece excelente OPSEC (Segurança das Operações), mitigando riscos de vazamento de dados confidenciais ou consultas de alvos sensíveis para a rede externa durante o processo analítico."
  },
  {
    "id": "I2P Hides",
    "title": "I2P Hides",
    "url": "https://i2phides.me",
    "tipo": "Gateway / Proxy Web (Clearweb para Darknet)",
    "utilidade": "Gateway proxy web para acesso e navegação na rede oculta I2P a partir da Surface Web.",
    "descricao": "O I2P Hides é um serviço de gateway e proxy baseado na web que atua como uma ponte de comunicação entre a Surface Web e a rede anônima I2P (Darknet). Ele permite que investigadores acessem, visualizem e naveguem em páginas e serviços ocultos nativos da rede I2P (conhecidos como *eepsites* com sufixo `.i2p`) diretamente a partir de um navegador convencional, eliminando a obrigatoriedade de instalar ou configurar o software cliente e o roteador oficial do ecossistema I2P localmente. A plataforma também fornece estatísticas, gráficos de estabilidade e índices de hosts ativos na rede oculta.",
    "testada": false,
    "tags": [
      "fonte/vazamentos-darkweb",
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "- **fonte/vazamentos-darkweb**: Viabiliza a exploração tática e o monitoramento de inteligência em ambientes restritos da Darknet I2P, permitindo o mapeamento de fóruns, repositórios clandestinos e bases de dados expostas sem a necessidade de manter uma presença persistente na rede nativa.\n- **func/busca-ampla**: Funciona como um indexador massivo e exibidor de conteúdo de páginas ocultas da rede I2P, auxiliando o analista a realizar varreduras abrangentes de servidores ativos e novos alvos sem delimitação estrita de nicho inicial.\n- **plataforma/web**: Centraliza o acesso e a execução das consultas diretamente no navegador web do analista, simplificando a coleta de dados e dispensando configurações complexas em nível de sistema operacional.\n- **acesso/gratuito**: Oferece livre acesso público às tabelas de indexação de hosts e à sua infraestrutura de proxy sem impor barreiras de pagamento ou subscrições financeiras corporativas.",
    "notes": "- **Considerações de OPSEC**: O uso de proxies baseados na clearweb transfere a requisição para um servidor de terceiros. Embora mascare o IP do analista frente ao destino final na Darknet, o provedor do gateway tem visibilidade do tráfego gerado. Deve ser utilizado prioritariamente para triagens rápidas e em associação com ferramentas complementares de anonimização (como VPNs e máquinas virtuais dedicadas).\n- **Mecanismo de Resolução**: A navegação ocorre por meio da reestruturação da URL alvo. Um endereço oculto nativo da rede I2P é acessado na Surface Web convertendo o seu sufixo original para a estrutura de subdomínio do gateway (ex: o domínio fictício `exemplo.i2p` é carregado no navegador como `exemplo.i2phides.me`)."
  },
  {
    "id": "I2P Search",
    "title": "I2P Search",
    "url": "https://i2psearch.com",
    "tipo": "Mecanismo de Busca / Indexador de Darknet",
    "utilidade": "Busca, indexação e descoberta de conteúdos e \"eepsites\" dentro da rede descentralizada I2P (Invisible Internet Project)",
    "descricao": "O I2P Search (i2psearch.com) é um indexador e mecanismo de busca especializado que opera a partir da web de superfície (surface web), projetado para mapear, catalogar e rastrear páginas ocultas conhecidas como \"eepsites\" na rede I2P (Invisible Internet Project). A plataforma atua varrendo e expondo índices textuais, fóruns criptografados e diretórios descentralizados hospedados sob o sufixo de domínio `.i2p`, tornando visível ao investigador dados e infraestruturas que normalmente não seriam capturados por motores de busca convencionais.",
    "testada": false,
    "tags": [
      "fonte/vazamentos-darkweb",
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas e inteligência de ameaças cibernéticas (Cyber Threat Intelligence), o I2P Search fornece um ponto de partida ágil para identificar a presença de comunidades clandestinas, fóruns de discussão ou repositórios contendo vazamentos corporativos que utilizam a infraestrutura distribuída e criptografada do ecossistema I2P. Ele mitiga a necessidade de inicializar e sincronizar um roteador local nativo na fase exploratória da coleta de dados, otimizando o levantamento inicial de ativos e inteligência de alvos.",
    "notes": "* Embora as pesquisas de palavras-chave e a leitura dos metadados HTML indexados ocorram diretamente na surface web, a tentativa de acessar os hiperlinks diretos (.i2p) listados nos resultados exigirá que o analista tenha um proxy ou o roteador oficial I2P ativado e configurado em sua máquina de investigação.\n* É recomendável correlacionar termos de busca específicos (como codinomes de alvos, e-mails ou hashes) com consultas no diretório para identificar possíveis espelhamentos ou menções em redes de comunicação anti-censura."
  },
  {
    "id": "IAGRO - Consulta de Ficha Sanitária Animal",
    "title": "IAGRO - Consulta de Ficha Sanitária Animal",
    "url": "https://www.servicos.iagro.ms.gov.br/ficha",
    "tipo": "Portal Governamental de Defesa Sanitária Agropecuária e Controle Cadastral",
    "utilidade": "Consulta e emissão de Ficha Sanitária Animal e extrato de movimentação de rebanhos em propriedades rurais no estado de Mato Grosso do Sul",
    "descricao": "O portal de serviços da Agência Estadual de Defesa Sanitária Animal e Vegetal do Estado de Mato Grosso do Sul (IAGRO) disponibiliza a consulta pública e emissão da Ficha Sanitária Animal. A ferramenta oficial permite verificar a regularidade sanitária, a evolução e o saldo de rebanhos (bovinos, bubalinos, equinos, entre outros) associados a propriedades rurais e produtores cadastrados no estado. O sistema consolida dados sobre vacinações obrigatórias (como febre aftosa e brucelose), saldo por espécie/categoria e histórico de trânsito agropecuário.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações patrimoniais, rastreamento de ativos agropecuários, due diligence do agronegócio e combate à lavagem de dinheiro no setor rural, a ferramenta serve como vetor de inteligência de alta fidelidade. Ela permite quantificar o rebanho ativo de um alvo (pessoa física ou jurídica), identificar propriedades rurais correlacionadas no estado do Mato Grosso do Sul e estimar a capacidade econômica e patrimonial real de produtores agrícolas a partir do estoque de semoventes declarado ao órgão estadual.",
    "notes": "* Parâmetros de rastreamento de marketing (como `?utm_source=chatgpt.com`) presentes na URL de origem devem ser removidos para preservar a limpeza do link e evitar o envio desnecessário de telemetria analítica aos servidores de destino.\n* A consulta exige parâmetros específicos de entrada, tais como o número da inscrição do produtor, código do estabelecimento rural ou identificador fiscal (CPF/CNPJ), combinados com validações de segurança da sessão.\n* Recomenda-se o cruzamento dos dados sanitários obtidos com bases fundiárias e ambientais (como SNCR, SIGEF e CAR) para consolidar a extensão territorial da propriedade com o volume de cabeças de gado sustentadas na área."
  },
  {
    "id": "ICIJ Offshore Leaks Database",
    "title": "ICIJ Offshore Leaks Database",
    "url": "https://offshoreleaks.icij.org/search",
    "tipo": "Banco de Dados Aberto e Plataforma de Jornalismo Investigativo / Análise de Vínculos",
    "utilidade": "Pesquisa, correlação e visualização em grafos de empresas offshore, trustes, intermediários e beneficiários finais a partir de megavazamentos financeiros internacionais",
    "descricao": "O Offshore Leaks Database é uma plataforma de busca e análise de inteligência financeira mantida pelo International Consortium of Investigative Journalists (ICIJ). O portal disponibiliza dados públicos e desidentificados extraídos de grandes vazamentos de paraísos fiscais — incluindo investigações históricas como Panama Papers, Pandora Papers, Paradise Papers, Bahamas Leaks e FinCEN Files. A base consolida registros estruturados sobre centenas de milhares de entidades offshore, intermediários legais, diretores nomeados e beneficiários finais, oferecendo tanto um motor de busca textual quanto uma ferramenta interativa de visualização em grafos de rede.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "alvo/financeiro-crypto",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ecossistema de inteligência financeira (FinINT), combate à lavagem de dinheiro (AML), Due Diligence e investigações patrimoniais transnacionais, a base do ICIJ atua como ferramenta primária de *pivoting* para mapear estruturas societárias ocultas. Ela viabiliza a identificação de empresas de fachada criadas para ocultar patrimônio, conecta figuras públicas (políticos, empresários e indivíduos sancionados) a prestadores de serviços fiduciários internacionais e permite rastrear o fluxo patrimonial direcionado a jurisdições de sigilo.",
    "notes": "* A existência de uma pessoa ou empresa na base não implica automaticamente a prática de atos ilícitos, visto que a abertura e posse de companhias offshore podem ser legais dependendo do regime tributário e da devida declaração às autoridades fiscais competentes.\n* O portal disponibiliza a opção de baixar os bancos de dados brutos consolidados (em formato CSV) para ingestão local e análise aprofundada em sistemas relacionais ou softwares de grafo como Neo4j.\n* Os relatórios e visualizações de rede são excelentes para compor dossiês investigativos de inteligência patrimonial e subsidiar pedidos formais de cooperação jurídica internacional."
  },
  {
    "id": "Identificator.space",
    "title": "Identificator.space",
    "url": "https://identificator.space",
    "tipo": "Ferramenta de Varredura e Validação de E-mail / Investigação de Identidade",
    "utilidade": "Identificação de contas digitais e mapeamento de pegada digital vinculada a e-mails",
    "descricao": "O Identificator.space é uma plataforma online especializada no rastreamento e identificação de contas digitais associadas a um endereço de e-mail específico. A ferramenta funciona enviando requisições técnicas de forma automatizada para endpoints de login, registro e mecanismos de recuperação de credenciais de centenas de sites e serviços da web, determinando em tempo real se o e-mail em análise possui uma conta ativa nessas plataformas, operando sob uma lógica similar à do utilitário de terminal *holehe*.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "fonte/redes-sociais",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito da inteligência de fontes abertas, o Identificator.space serve como um recurso ágil para a condução de técnicas de *pivoting* de identidade e enriquecimento de alvos. A partir de um e-mail inicial, o investigador consegue traçar a pegada digital completa do alvo, descobrindo sua presença em redes sociais, fóruns e outros ecossistemas digitais. Isso permite correlacionar diferentes identidades virtuais e direcionar investigações mais profundas para as plataformas específicas onde o alvo foi localizado.",
    "notes": "* A varredura ocorre de maneira passiva em relação ao alvo (sem alertar ou notificar a caixa de entrada investigada), permitindo que o levantamento preserve o anonimato da investigação técnica.\n* Para garantir uma coleta exaustiva e reduzir potenciais taxas de falsos negativos ou respostas desatualizadas, é recomendável complementar e validar os achados gerados pela plataforma com ferramentas similares locais (como o script *holehe*) ou plataformas pagas especializadas."
  },
  {
    "id": "IDT Express WhatsApp Checker",
    "title": "IDT Express WhatsApp Checker",
    "url": "https://www.idtexpress.com/pt/whatsapp-checker/",
    "tipo": "Ferramenta Online de Validação de Telefone e Mensageria",
    "utilidade": "Verificação de atividade de números de telefone no WhatsApp e identificação de metadados de rede (operadora e região)",
    "descricao": "O IDT Express WhatsApp Checker é um utilitário baseado na web desenvolvido pela provedora global de comunicações IDT Express. A ferramenta permite que usuários insiram um número de telefone em formato internacional para verificar em tempo real se ele possui uma conta cadastrada e ativa no WhatsApp. Além de checar a existência da conta na plataforma de mensageria, o sistema analisa os prefixos do número para reportar metadados como a operadora de telefonia originária, a validade da estrutura do identificador e a região geográfica correspondente.",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "fonte/redes-sociais",
      "func/validacao-status",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações que envolvem vetores telefônicos, a validação de dados é fundamental para a expansão de vínculos (*pivoting*) e o enriquecimento do perfil do alvo. O IDT Express WhatsApp Checker possibilita confirmar de forma automatizada se uma linha telefônica é utilizada ativamente no ecossistema do WhatsApp sem a necessidade de adicionar o contato a uma agenda telefônica física ou expor o analista. A validação abre caminho para etapas posteriores de SOCMINT (Inteligência de Mídias Sociais), indicando que o número é um ponto viável para buscas avançadas por fotos de perfil, recados e status públicos associados à conta do investigado.",
    "notes": "* O processo de verificação é executado de maneira passiva em relação ao alvo, significando que o portador do número de telefone testado não recebe notificações, convites ou alertas de que sua conta foi consultada.\n* Para auditorias forenses que exijam o processamento de listas massivas de telefones, a interface de usuário baseada na web torna-se ineficiente, sendo mais indicado recorrer a soluções programáticas pagas fornecidas pela própria API corporativa da IDT."
  },
  {
    "id": "IKnowWhatYouDownload",
    "title": "IKnowWhatYouDownload",
    "url": "https://iknowwhatyoudownload.com/",
    "tipo": "Ferramenta de Análise de IP e Inteligência Cibernética",
    "utilidade": "Monitoramento e rastreamento de histórico de downloads P2P (Torrent) associados a endereços IP",
    "descricao": "O IKnowWhatYouDownload é uma plataforma online voltada para a auditoria e rastreamento de atividades de compartilhamento de arquivos em redes P2P (*Peer-to-Peer*). A ferramenta monitora de forma contínua a rede DHT (*Distributed Hash Table*) e trackers públicos do protocolo BitTorrent para indexar os conteúdos (como mídias, softwares e documentos) baixados ou transmitidos por endereços IP públicos, consolidando um histórico cronológico de tráfego associado àquela numeração de rede.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, a plataforma desempenha um papel relevante no mapeamento comportamental e na inteligência de infraestrutura (CYBINT). A partir de um endereço IP obtido, o analista pode validar os hábitos do alvo, estimar possíveis sistemas ou programas instalados e identificar perfis de interesse, servindo também como insumo para auditar a própria OPSEC do investigador ao validar o vazamento de tráfego de sua rede de origem.",
    "notes": "* Em conexões baseadas em IP dinâmico ou sob infraestruturas de CGNAT (onde múltiplos assinantes compartilham o mesmo endereço IPv4 público simultaneamente), o histórico exibido pode misturar downloads efetuados por diferentes usuários da mesma operadora.\n* Caso o alvo (ou o próprio analista) utilize serviços de VPN comercial compartilhada, a busca no site revelará as atividades cumulativas de todas as pessoas conectadas àquele mesmo servidor, inviabilizando a atribuição individualizada direta."
  },
  {
    "id": "ImageIdentify",
    "title": "ImageIdentify",
    "url": "https://imageidentify.com/",
    "tipo": "Ferramenta Online de Análise e Classificação de Imagens",
    "utilidade": "Reconhecimento de objetos, cenas e elementos em imagens utilizando Inteligência Artificial e Visão Computacional",
    "descricao": "O ImageIdentify é uma plataforma de demonstração baseada na web (vinculada ao ecossistema Wolfram Language) que utiliza redes neurais profundas e algoritmos avançados de visão computacional para analisar o conteúdo de arquivos de imagem. Ao receber um arquivo local ou uma URL de imagem, o sistema processa estaticamente os dados de matrizes de pixels para identificar, categorizar e rotular de forma automática o objeto principal, ser vivo, veículo ou tipo de cenário presente na fotografia, gerando respostas baseadas em sua árvore de conhecimento nativa.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo das investigações em fontes abertas, a ferramenta atua como um assistente analítico para a triagem e o processamento de mídias e inteligência geoespacial (GEOINT). O ImageIdentify auxilia o analista a extrair pistas contextuais de fotografias sem metadados, identificando de forma automatizada modelos de veículos, marcas comerciais, arquiteturas específicas, tipos de vegetação ou acidentes geográficos. Essas informações fornecem insumos técnicos fundamentais para refinar estratégias de busca e direcionar esforços de geolocalização e verificação de cenários.",
    "notes": "* É fundamental compreender que a ferramenta realiza a identificação taxonômica do objeto (*o que está na foto*) e não uma busca reversa de imagens na internet (*onde esta foto já foi publicada*). Portanto, ela preserva a segurança da informação por não indexar a imagem ativamente na rede pública durante a checagem.\n* A acurácia do reconhecimento automatizado é diretamente proporcional à nitidez, iluminação e isolamento do objeto em análise. Em imagens complexas ou poluídas visualmente, recomenda-se realizar um recorte prévio (*crop*) focado estritamente no elemento que se deseja analisar antes de submetê-lo à plataforma."
  },
  {
    "id": "Imagga",
    "title": "Imagga",
    "url": "https://imagga.com/",
    "tipo": "Plataforma de Visão Computacional e Processamento de Imagens por IA",
    "utilidade": "Reconhecimento, etiquetagem automática e moderação de conteúdo em imagens utilizando Inteligência Artificial e Visão Computacional via API ou interface web",
    "descricao": "O Imagga é uma plataforma de computação em nuvem que fornece soluções avançadas de visão computacional baseadas em inteligência artificial e redes neurais profundas. A ferramenta é amplamente conhecida por suas APIs de processamento de imagem, que realizam a etiquetagem automática de objetos (*auto-tagging*), categorização visual, extração e análise de paletas de cores, corte inteligente e detecção/reconhecimento facial. O processamento das mídias ocorre de maneira estática a partir do upload de arquivos locais ou do fornecimento de URLs diretas de imagens.",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de inteligência de imagens (IMINT), o Imagga atua como um assistente técnico especializado no processamento massivo e na automação de triagem de evidências visuais. Investigadores podem utilizar a API da plataforma para categorizar automaticamente milhares de imagens coletadas durante uma operação, identificando de forma rápida a presença de elementos específicos — como marcas corporativas, modelos de veículos, tipos de vestimentas, armas, vegetações ou rostos humanos. Essa filtragem automatizada acelera o ciclo de inteligência, permitindo que o analista concentre seus esforços humanos apenas nas mídias que apresentam relevância tática para a investigação.",
    "notes": "* Por se tratar de uma ferramenta de processamento local/estático baseado em IA, o envio de imagens para a plataforma não dispara alertas na rede e preserva o anonimato em relação ao alvo. Contudo, devido às políticas de privacidade de serviços SaaS comerciais, dados extremamente sensíveis de investigações sigilosas devem ser avaliados com cautela antes de serem enviados para servidores de terceiros.\n* A plataforma dispõe de um módulo especializado em moderação de conteúdo, o qual é altamente eficaz para triagem forense inicial, sendo capaz de identificar e separar automaticamente materiais contendo nudez, violência gráfica ou conteúdos potencialmente ilícitos."
  },
  {
    "id": "IMEI.info",
    "title": "IMEI.info",
    "url": "https://www.imei.info/",
    "tipo": "Ferramenta Online de Consulta e Análise de Hardware Móvel",
    "utilidade": "Identificação de especificações técnicas, fabricante, modelo e status de restrição de dispositivos móveis a partir do IMEI",
    "descricao": "O IMEI.info é uma plataforma baseada na web projetada para a decodificação, análise e verificação de números IMEI (International Mobile Equipment Identity), o identificador exclusivo global de dispositivos celulares. A ferramenta processa o código numérico inserido para extrair as especificações de hardware vinculadas ao TAC (Type Allocation Code), identificando o fabricante, modelo comercial exato, data de lançamento e componentes físicos do aparelho. Adicionalmente, ela realiza cruzamentos com registros globais para verificar o status de bloqueio ou inclusão do dispositivo em listas negras (blacklist) por perda, roubo ou fraude.",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações que envolvem vetores de telefonia móvel ou apreensão de dispositivos, a análise do IMEI é uma etapa fundamental para a atribuição técnica e o enriquecimento de inteligência. A partir do número de IMEI do alvo, obtido por meio de metadados, engenharia reversa ou documentação, o investigador consegue mapear o perfil exato do hardware utilizado pelo investigado. Isso viabiliza a identificação da operadora de origem, a verificação de impedimentos legais no aparelho e o fornecimento de subsídios técnicos para correlacionar o dispositivo a determinados padrões de uso ou redes de comunicação.",
    "notes": "* A consulta simples do IMEI na plataforma é passiva em relação ao portador do dispositivo, garantindo que o usuário do telefone não seja notificado ou alertado de que o hardware está sendo analisado.\n* Como a acurácia de bancos de dados comerciais pode variar dependendo da região e da atualização das listas de operadoras locais, recomenda-se realizar o duplo teste (*double check*) cruzando os resultados com bases oficiais da agência reguladora de telecomunicações do país de interesse sempre que possível."
  },
  {
    "id": "img-encode",
    "title": "img-encode",
    "url": "https://alexadam.github.io/demos/img-encode/index.html",
    "tipo": "Ferramenta de Processamento de Mídia e Esteganografia Baseada em Web",
    "utilidade": "Conversão de imagens em espectros de áudio para fins de esteganografia e análise espectral",
    "descricao": "O img-encode é um utilitário experimental baseado em ambiente web que converte dados matriciais de imagens em um espectro de som, sintetizando as informações visuais em um arquivo de áudio digital no formato `.WAV`. O arquivo sonoro gerado, ao ser submetido a um software de análise espectral de frequências (como Sonic Visualiser ou Spek), renderiza e reconstrói a imagem original diretamente no espectrograma de áudio. O algoritmo processa os pixels do arquivo fornecido de maneira estática e local (client-side).",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações digitais e análise de mídias cibernéticas, a identificação e a engenharia reversa de esteganografia constituem habilidades essenciais para o exame de artefatos. O img-encode permite ao analista processar, simular e compreender técnicas de ocultação de dados estruturados dentro de faixas sonoras (*audio spectrogram steganography*). Esse método de ocultação é historicamente documentado em desafios de contra-inteligência e operações cibernéticas, onde atores de ameaças ou comunidades em fóruns clandestinos incorporam códigos QR, coordenadas geográficas, textos cifrados ou links em arquivos de áudio triviais. A ferramenta auxilia no entendimento técnico de como essas mídias são geradas de forma a facilitar sua posterior identificação forense estática.",
    "notes": "* Devido à execução do algoritmo ocorrer de forma totalmente local no navegador do usuário, a privacidade do arquivo de entrada é preservada, garantindo que mídias de investigações em andamento não sejam enviadas ou indexadas em servidores de terceiros.\n* Para fins práticos de extração de inteligência de um áudio suspeito gerado por esse método, o analista deve recorrer a softwares terceiros de espectrografia e ajustar as escalas lineares ou logarítmicas de frequências e ganho (dB) até obter a nitidez visual ideal da imagem oculta."
  },
  {
    "id": "ImmuniWeb Dark Web & Threat Exposure Test",
    "title": "ImmuniWeb Dark Web & Threat Exposure Test",
    "url": "https://www.immuniweb.com/darkweb/",
    "tipo": "Plataforma de Inteligência de Ameaças (Threat Intelligence) e Gestão de Superfície de Ataque",
    "utilidade": "Auditoria de exposição de dados na Dark Web e detecção de ameaças cibernéticas contra domínios corporativos.",
    "descricao": "O ImmuniWeb Dark Web & Threat Exposure Test é uma solução online voltada para a avaliação da superfície de ataque e monitoramento de riscos digitais associados a uma organização. A partir da inserção de um nome de domínio, a plataforma realiza varreduras automatizadas em fóruns cibercriminosos, mercados clandestinos, canais de mensageria (como Telegram), pastebins e repositórios públicos e privados de dados vazados. A ferramenta consolida indicadores sobre credenciais corporativas comprometidas, instâncias de armazenamento em nuvem expostas (AWS, Azure e GCP), domínios falsos de phishing ou typosquatting e perfis fraudulentos em redes sociais.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/empresa",
      "alvo/usuario-email",
      "fonte/vazamentos-darkweb",
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações corporativas (Corporate OSINT) e de inteligência de ameaças cibernéticas (Cyber Threat Intelligence), a ferramenta atua na descoberta passiva de vulnerabilidades informacionais de um alvo institucional. Ela permite ao analista identificar vazamentos massivos de e-mails corporativos, mapear a infraestrutura externa maliciosa ativa criada para personificar a marca investigada e levantar fragilidades em ativos de nuvem configurados incorretamente, tudo isso sem interagir diretamente com os servidores do alvo.",
    "notes": "* A plataforma permite a exportação dos resultados gerados em relatórios estruturados no formato PDF, otimizando a documentação e a preservação de evidências.\n* O teste é considerado passivo em relação ao alvo primário, pois as consultas e correlações são feitas nos indexadores e bancos de dados proprietários da ImmuniWeb.\n* Para análises em larga escala, monitoramento recorrente automatizado ou integrações com sistemas externos, é necessária a obtenção de chaves de API por meio dos planos corporativos da plataforma."
  },
  {
    "id": "In-The-Sky.org (Live Satellite World Map)",
    "title": "In-The-Sky.org (Live Satellite World Map)",
    "url": "https://in-the-sky.org/satmap_worldmap.php",
    "tipo": "Ferramenta de Rastreamento Orbital e Visualização Geoespacial",
    "utilidade": "Rastreamento em tempo real e projeção cartográfica de satélites artificiais para suporte a investigações de GEOINT.",
    "descricao": "O Live Satellite World Map do portal In-The-Sky.org é uma aplicação web interativa que plota, em tempo real, a posição geográfica e a trajetória orbital de milhares de satélites artificiais sobre um mapa global bidimensional ou globo 3D. A plataforma processa dados de elementos orbitais (TLE - Two-Line Elements) fornecidos por fontes de rastreamento aeroespacial como o NORAD e o Celestrak, calculando automaticamente variáveis como magnitude visual (brilho estimado), altitude, azimute e as condições de iluminação solar de cada espaçonave em relação a coordenadas terrestres.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo das investigações baseadas em fontes abertas — especificamente em inteligência geoespacial (GEOINT) —, o monitoramento de ativos orbitais é um recurso valioso para a verificação cronológica de captação de imagens e auditoria de sensores de sensoriamento remoto. Ao determinar quais satélites de imageamento (comerciais ou governamentais) ou de telecomunicações (como as constelações Starlink) cruzaram uma determinada coordenada em um horário específico, o analista pode correlacionar dados de observação da Terra, validar a consistência temporal de mídias sob análise e estimar janelas de visibilidade de sensores ópticos e de radar.",
    "notes": "* A ferramenta disponibiliza filtros dinâmicos que permitem segmentar as espaçonaves por finalidades operacionais, incluindo constelações de satélites meteorológicos (NOAA, GOES), frotas de comunicação (Iridium, Orbcomm) e plataformas de recursos terrestres (Planet, Spire).\n* Como o cálculo da posição dos satélites baseia-se na importação periódica de conjuntos de dados TLE, o analista deve atentar-se à data de atualização da carga de dados indicada no sistema para garantir a precisão posicional de objetos em órbita terrestre baixa (LEO), cujo decaimento ou perturbação orbital ocorre mais rapidamente."
  },
  {
    "id": "INMET Satélite",
    "title": "INMET Satélite",
    "url": "https://satelite.inmet.gov.br/",
    "tipo": "Portal Meteorológico Governamental e de Sensoriamento Remoto",
    "utilidade": "Visualização e monitoramento de imagens de satélite meteorológico em tempo real e histórico recente.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "A ferramenta é utilizada em análises de Inteligência Geoespacial (GEOINT) e de imagens para dar suporte a processos de verificação de mídias e cronolocalização (chronolocation). O acesso a dados históricos de sensoriamento remoto permite ao analista mapear as condições meteorológicas exatas de uma determinada região para confrontar, validar ou refutar o contexto ambiental em que um registro visual alega ter sido capturado.",
    "notes": "* Para fins periciais e de investigação de paternidade de mídias, as imagens podem ser exportadas em sequência para demonstrar a evolução de fenômenos climáticos.\n* Permite correlacionar dados ambientais com sombras, iluminação natural e eventos relatados em redes sociais ou canais de notícias na data exata do fato investigado."
  },
  {
    "id": "INPI - Busca Avançada de Patentes",
    "title": "INPI - Busca Avançada de Patentes",
    "url": "https://busca.inpi.gov.br/pePI/jsp/patentes/PatenteSearchAvancado.jsp",
    "tipo": "Base de Dados Pública / Registro Governamental",
    "utilidade": "Consulta e mapeamento de propriedade industrial, patentes e inventores registrados no Brasil.",
    "descricao": "O sistema de Busca Avançada de Patentes do Instituto Nacional da Propriedade Industrial (INPI) é a plataforma oficial do governo brasileiro destinada à pesquisa, consulta e acompanhamento de pedidos de patentes, modelos de utilidade e certificados de adição de invenção depositados no país. A interface permite realizar cruzamentos complexos de dados utilizando múltiplos critérios de indexação, tais como o título da invenção, resumo descritivo, número do pedido, Classificação Internacional de Patentes (CIP), além dos nomes de depositantes, inventores e procuradores.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas voltadas ao cenário corporativo (Corporate OSINT), inteligência competitiva ou levantamento patrimonial, a ferramenta é indispensável para auditar os ativos intangíveis e a capacidade tecnológica de um alvo. Ela permite identificar projetos de Pesquisa e Desenvolvimento (P&D) conduzidos por empresas, rastrear tecnologias exclusivas e mapear a cadeia de colaboradores técnicos de uma organização. A análise dos registros revela dados estratégicos como parcerias comerciais ocultas, contratos de transferência de tecnologia e a movimentação de profissionais de alta relevância técnica entre concorrentes.",
    "notes": "* Recomenda-se realizar buscas utilizando variações textuais e termos parciais (com o uso de caracteres curinga, se suportados pelo formulário), uma vez que a grafia do nome de empresas ou inventores pode apresentar divergências ou abreviações distintas entre diferentes processos de depósito.\n* A consulta aos documentos de patente permite o acesso à peça técnica na íntegra (relatório descritivo e reivindicações), fornecendo dados técnicos aprofundados sobre o objeto investigado e listando os procuradores legais ou escritórios de advocacia que representam o alvo perante o governo."
  },
  {
    "id": "Insecam",
    "title": "Insecam",
    "url": "http://www.insecam.org/",
    "tipo": "Diretório e Indexador de Feeds de Câmeras IP Públicas",
    "utilidade": "Monitoramento e visualização de transmissões de vídeo em tempo real de câmeras IP desprotegidas para inteligência geoespacial (GEOINT).",
    "descricao": "O Insecam é o maior diretório online do mundo dedicado à indexação e exibição de transmissões de vídeo ao vivo (*streams*) provenientes de câmeras de segurança IP desprotegidas. A plataforma realiza varreduras automatizadas na internet global para localizar sistemas de CFTV, câmeras residenciais, comerciais e industriais que não possuem senhas de autenticação configuradas ou que mantiveram as credenciais padrão de fábrica. Os feeds de vídeo são catalogados e organizados de forma sistemática por país, cidade, fuso horário, fabricante do hardware e categorias de ambiente (como ruas, escritórios, postos de combustíveis e residências).",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito das investigações de fontes abertas, a plataforma é utilizada principalmente como um recurso complementar para Inteligência Geoespacial (GEOINT) e reconhecimento passivo (*reconnaissance*). Ela permite que o analista obtenha consciência situacional e verificação visual em tempo real de determinadas coordenadas geográficas ou regiões urbanas. Isso auxilia na validação de condições meteorológicas locais, análise de fluxo de tráfego, padrões de movimentação de indivíduos e monitoramento indireto de infraestruturas físicas sem a necessidade de deslocamento em campo ou de interação ativa com a rede do local investigado.",
    "notes": "* A localização geográfica exibida na plataforma é baseada na geolocalização do endereço IP da câmera (fornecida por bancos de dados MaxMind ou similares), o que significa que as coordenadas indicam o nó da rede ou a cidade geral, e não a posição exata de latitude e longitude do equipamento físico.\n* A ferramenta atua de forma estritamente passiva sob a perspectiva do investigador, visto que os fluxos de vídeo já estão sendo coletados e retransmitidos pelos servidores próprios do Insecam, evitando que o endereço IP do analista toque diretamente o dispositivo alvo."
  },
  {
    "id": "Insta Stories Viewer",
    "title": "Insta Stories Viewer",
    "url": "https://insta-stories-viewer.com/en/",
    "tipo": "Visualizador Anônimo e Espelho de Rede Social (Instagram Viewer / SOCMINT)",
    "utilidade": "Visualização anônima, monitoramento passivo e download de publicações, Stories, Reels e Destaques públicos do Instagram",
    "descricao": "O Insta Stories Viewer é um serviço web projetado para visualizar e baixar anonimamente conteúdos de contas públicas do Instagram (Stories, publicações do feed, Reels, fotos de perfil em alta resolução e destaques). A plataforma atua como uma interface intermediária (proxy/espelho), permitindo acessar e capturar mídias de perfis sem a necessidade de realizar login na rede social ou deixar registros de visualização (*views*) nas publicações temporárias dos alvos.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas e inteligência em mídias sociais (SOCMINT), a ferramenta desempenha papel essencial na coleta passiva e na preservação de evidências digitais. Ela permite que analistas monitorem a atividade recente de contas públicas de interesse, baixem Stories antes de sua expiração natural (janela de 24 horas) e extraiam dados visuais sem interagir diretamente com a infraestrutura da rede ou alertar o alvo sobre a investigação em curso.",
    "notes": "* A ferramenta é restrita a contas com status de privacidade público, não sendo capaz de recuperar Stories ou publicações de perfis trancados/privados.\n* Útil para a rotina de coleta e preservação de mídias temporárias (Stories), viabilizando o download em formato original (.mp4/.jpg) para posterior análise de metadados ou arquivamento de custódia forense."
  },
  {
    "id": "Instant Data Scraper",
    "title": "Instant Data Scraper",
    "url": "https://chromewebstore.google.com/detail/instant-data-scraper/ofaokhiedipichpaobibbnahnkdoiiah",
    "tipo": "Extensão de Navegador / Ferramenta de Web Scraping",
    "utilidade": "Extração automatizada e estruturação de dados tabulares em páginas web diretamente pelo navegador",
    "descricao": "O Instant Data Scraper é uma extensão de navegador (disponível para navegadores baseados em Chromium) projetada para facilitar a raspagem de dados (*web scraping*) sem a necessidade de criação prévia de scripts ou código. A ferramenta utiliza algoritmos heurísticos para detectar automaticamente elementos tabulares ou listas de dados estruturados na página carregada, permitindo a navegação assistida por paginação ou rolagem contínua (*infinite scroll*) e a exportação direta dos dados em formatos estruturados como CSV e XLSX.",
    "testada": false,
    "tags": [
      "func/scrapers-automacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, o Instant Data Scraper agiliza a fase de coleta massiva de dados semiestruturados expostos na camada web superficial. A extensão permite ao analista extrair de forma rápida grandes volumes de postagens, comentários, membros de grupos, listas de seguidores/seguidos em redes sociais, catálogos de e-commerce e listagens em diretórios online ou motores de busca, acelerando a triagem de alvos e reduzindo o esforço manual de consolidação de evidências.",
    "notes": "* Altamente eficaz para a extração de dados em portais que usam carregamento dinâmico e rolagem infinita, permitindo ao investigador configurar o atraso de requisição (*delay*) para evitar bloqueios ou inconsistências no carregamento dos elementos.\n* A extração ocorre localmente no ambiente do cliente (*Client-Side*), processando o DOM que já foi renderizado pelo navegador, o que preserva a OPSEC ao não direcionar requisições para servidores externos de processamento de terceiros."
  },
  {
    "id": "InstantUsername",
    "title": "InstantUsername",
    "url": "https://instantusername.com/",
    "tipo": "Ferramenta de Busca e Validação de Identificadores Digitais (Usernames)",
    "utilidade": "Verificação simultânea de existência e disponibilidade de nomes de usuário (usernames) em múltiplas plataformas web para mapeamento de pegada digital.",
    "descricao": "O InstantUsername é uma plataforma web desenvolvida para consultar, em tempo real, a disponibilidade ou ocupação de um determinado nome de usuário (*username* ou *handle*) em mais de uma centena de serviços digitais, fóruns e redes sociais de forma simultânea. A ferramenta opera enviando requisições assíncronas para verificar a existência de perfis públicos correspondentes ao termo digitado, exibindo os resultados de maneira imediata na interface do usuário.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas focadas em perfis de indivíduos e pegada digital, a ferramenta desempenha um papel fundamental na fase de expansão e correlação de dados (*pivoting*). Ao inserir um pseudônimo ou nome de usuário conhecido do alvo, o analista consegue identificar rapidamente em quais outras plataformas digitais aquela mesma identidade possui contas registradas. Isso acelera o processo de descoberta de novas contas e ramificações da presença online do investigado.",
    "notes": "* A ferramenta realiza as consultas diretamente a partir do navegador do usuário (*client-side*). Isso significa que as requisições de checagem partem do endereço IP do investigador, tornando indispensável o uso de VPN ou redes de anonimato para preservar a OPSEC e evitar o bloqueio por taxa de requisições (*rate limiting*).\n* Resultados falso-positivos ou falso-negativos podem ocorrer caso as plataformas consultadas alterem suas políticas de privacidade, modifiquem suas rotas de perfil ou implementem defesas anti-bot estritas que impeçam a validação automatizada."
  },
  {
    "id": "Intelligence X OSINT Tools Portal",
    "title": "Intelligence X OSINT Tools Portal",
    "url": "https://intelx.io/tools",
    "tipo": "Framework de Links e Hub de Agregação OSINT",
    "utilidade": "Diretório centralizado e framework interativo para automação de consultas e cruzamento de múltiplos identificadores técnicos em fontes abertas",
    "descricao": "O Intelligence X OSINT Tools Portal é um framework web estruturado que atua como um indexador e gerador de consultas automatizadas para investigações em fontes abertas. O painel é dividido em abas de especialidade técnica que cobrem categorias essenciais da OSINT, incluindo E-mail, Telefone, Domínio, Endereço IP, CIDR, URLs, Bitcoin/Criptoativos e buscas textuais de escopo geral. A plataforma permite que o analista insira um único dado de entrada (como um username ou um hash de carteira) e gere, instantaneamente, links parametrizados para dezenas de ferramentas externas especializadas e motores de busca de terceiros.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "func/agregador",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ciclo de inteligência, o portal funciona como um acelerador tático para as fases de reconhecimento, coleta de dados e *pivoting*. Em vez de o investigador preencher formulários individualmente em dezenas de sites para validar um alvo, a interface centralizada do IntelX Tools consolida o ecossistema investigativo em um único ponto. Isso viabiliza o mapeamento veloz da pegada digital de um alvo, permitindo saltar rapidamente entre dados cadastrais, reputação de rede, registros de infraestrutura cibernética e vazamentos históricos com esforço operacional minimizado.",
    "notes": "* **Comportamento do Navegador**: O uso de funções de abertura em lote (como abrir todos os links de uma categoria de uma só vez) exige alto consumo de hardware local e pode causar travamentos. É recomendado selecionar os alvos de busca de forma segmentada.\n* **Liberação de Pop-ups**: Para que os recursos de automação e abertura múltipla de abas funcionem corretamente, o investigador deve configurar o navegador para permitir pop-ups e redirecionamentos originados a partir deste domínio.\n* **OPSEC do Investigador**: A ferramenta gera links que efetuam consultas diretas partindo do navegador do analista para os serviços finais. Portanto, o endereço IP real da máquina de investigação estará exposto às plataformas de terceiros, tornando mandatória a utilização de VPNs ou redes de anonimização durante o tráfego.\n* **Contas em Serviços de Terceiros**: Embora o painel do IntelX Tools seja inteiramente gratuito, algumas das plataformas externas indexadas em suas abas específicas (como rastreadores de blockchain ou ferramentas corporativas) podem exigir contas pagas ou chaves de API próprias para exibir os dados finais após o redirecionamento."
  },
  {
    "id": "IntelTechniques",
    "title": "IntelTechniques",
    "url": "https://inteltechniques.com/",
    "tipo": "Framework e Agregador de Ferramentas OSINT",
    "utilidade": "Centralização de formulários de pesquisa e automação de consultas estruturadas para investigações OSINT e auditoria de privacidade.",
    "descricao": "O IntelTechniques é um ecossistema de referência global voltado para a Inteligência de Fontes Abertas (OSINT) e para a proteção da privacidade digital. Desenvolvida pelo especialista Michael Bazzell, a plataforma atua como um repositório centralizado de ferramentas e scripts baseados na web. Por meio de formulários interativos, o portal automatiza a criação de URLs e consultas de busca avançadas, permitindo realizar investigações estruturadas em múltiplos serviços, bancos de dados abertos e plataformas de terceiros sem a necessidade de digitação manual de comandos complexos.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "func/agregador",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações digitais, a ferramenta serve como um ponto de partida estratégico para as fases de reconhecimento e coleta de informações. Ela otimiza o fluxo de trabalho ao permitir a pivotagem rápida a partir de um único dado conhecido — como nome, e-mail, telefone ou domínio —, direcionando o investigador para repositórios públicos e especializados de maneira ágil, padronizada e eficiente.",
    "notes": "* Como a plataforma atua gerando links para sites de terceiros, a eficácia de cada consulta está diretamente vinculada à persistência de acesso e às mudanças de API nas plataformas finais.\n* É fundamental que o investigador utilize esses recursos a partir de uma infraestrutura segura (como VPNs ou redes de anonimato), evitando expor o seu endereço IP real ao acessar os links gerados."
  },
  {
    "id": "IP Location Finder",
    "title": "IP Location Finder",
    "url": "https://www.iplocation.net/",
    "tipo": "Agregador de Geolocalização IP e Ferramentas de Rede",
    "utilidade": "Geolocalização de endereços IP, inteligência de rede, agregação de bases de dados geográficas e auditoria de parâmetros de conexão",
    "descricao": "O IPLocation.net é um portal e agregador de inteligência de rede que centraliza múltiplos motores e bases de dados de geolocalização IP (como IP2Location, MaxMind, IPinfo, DB-IP, entre outros). A plataforma permite consultar endereços IPv4, IPv6 e nomes de domínio, correlacionando resultados para extrair localização geográfica aproximada (país, região, cidade, coordenadas estimadas), Provedor de Serviços de Internet (ISP), Sistema Autônomo (ASN), além de oferecer utilitários complementares de rede como WHOIS, DNS lookup, cálculo de CIDR e testes de velocidade/portas.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "func/busca-identificacao",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações digitais e inteligência de fontes abertas (OSINT/CYBINT), a ferramenta atua como um hub central para triagem e validação cruzada de indicadores técnicos de infraestrutura. Por consultar múltiplas bases de dados de geolocalização simultaneamente, permite ao investigador comparar divergências entre provedores de dados geográficos, identificar o bloco de rede/ASN responsável por um tráfego suspeito e mapear as propriedades associadas a servidores e domínios de forma passiva.",
    "notes": "* As coordenadas geográficas fornecidas representam estimativas baseadas no cadastro do provedor (nível de cidade ou nó regional de telecomunicação) e não correspondem à posição física em tempo real via GPS de um dispositivo individual.\n* As buscas realizadas na interface web consultam bancos de dados indexados por terceiros, garantindo que o alvo investigado não receba tráfego direto decorrente da pesquisa.\n* A comparação lado a lado de diferentes fornecedores de dados é especialmente útil para identificar inconsistências cadastrais ou verificar se determinado bloco IP foi recentemente reatribuído a outra região ou operadora."
  },
  {
    "id": "ip-api",
    "title": "ip-api",
    "url": "https://ip-api.com/",
    "tipo": "API e Portal de Consulta de Geolocalização de IP",
    "utilidade": "Resolução técnica, enriquecimento de dados e geolocalização cadastral de endereços IPv4 e IPv6",
    "descricao": "O ip-api é um serviço automatizado de geolocalização e análise técnica de endereços IP em tempo real. A plataforma processa requisições contendo endereços IPv4 ou IPv6 e retorna um conjunto estruturado de metadados associados à infraestrutura informada, incluindo o país, estado/região, cidade, código postal, coordenadas geográficas aproximadas (latitude e longitude), fuso horário, provedor de serviços de internet (ISP), organização proprietária e o número do Sistema Autônomo (ASN).",
    "testada": false,
    "tags": [
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito da inteligência cibernética (CYBINT) e da investigação de infraestrutura digital, a ferramenta atua como um recurso fundamental para o enriquecimento de indicadores de comprometimento (IoCs). Ela permite ao analista identificar de forma rápida a propriedade institucional de um endereço IP, mapear redes de servidores vinculadas a campanhas de fraude ou ataques, discernir se um tráfego provém de um provedor de internet residencial ou de um data center comercial, além de contextualizar a origem geográfica aproximada de conexões suspeitas.",
    "notes": "* **Natureza da Geolocalização**: É crítico que o investigador compreenda que a geolocalização baseada em IP fornecida pela plataforma é de caráter cadastral e estimativo. Ela reflete o local de registro ou ponto de agregação do provedor (frequentemente a nível de cidade), não devendo ser confundida com a localização exata baseada em GPS de um dispositivo físico.\n* **Gerenciamento de Taxa (Rate Limit)**: Ao automatizar coletas massivas em scripts locais utilizando o endpoint gratuito da API, deve-se implementar atrasos (*throttling*) para não ultrapassar 45 requisições por minuto. Caso o limite seja excedido, o IP da máquina de investigação receberá um bloqueio temporário (erro HTTP 429).\n* **Camada de Anonimização**: Consultar um IP na plataforma não alerta o proprietário do IP alvo, pois a busca é feita de forma passiva contra os bancos de dados do ip-api. Contudo, as requisições de consulta expõem o IP do próprio investigador ao servidor do ip-api, tornando recomendável o uso de VPN ou proxies durante a execução das buscas."
  },
  {
    "id": "IP2Location",
    "title": "IP2Location",
    "url": "https://www.ip2location.com/",
    "tipo": "Plataforma de Geolocalização por IP e Inteligência de Infraestrutura",
    "utilidade": "Geolocalização de endereços IP, inteligência de infraestrutura de rede e detecção de proxies/VPNs",
    "descricao": "O IP2Location é uma plataforma comercial e de inteligência cibernética projetada para consultar, correlacionar e fornecer dados contextuais detalhados a partir de endereços IPv4 e IPv6 e nomes de domínio. A ferramenta mapeia a geolocalização cadastral (país, região, cidade e coordenadas estimadas), Provedor de Serviços de Internet (ISP), Sistema Autônomo (ASN), velocidade de conexão, tipo de uso da rede, fuso horário e indicadores técnicos sobre o uso de proxies, VPNs, redes TOR e servidores de data centers.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "func/busca-identificacao",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No ecossistema de inteligência cibernética (CYBINT) e investigações digitais, a ferramenta serve como um componente essencial para enriquecimento e validação de indicadores técnicos de rede. Ela permite correlacionar conexões suspeitas a localizações geográficas aproximadas, identificar se o tráfego de um alvo provém de uma conexão residencial ou de infraestrutura em nuvem/proxy, e mapear os blocos de IP e ASNs sob controle de uma organização.",
    "notes": "* A geolocalização fornecida baseia-se em tabelas cadastrais e roteamento de operadoras (frequentemente a nível de cidade ou nó de distribuição regional), não devendo ser confundida com coordenadas GPS precisas de dispositivos físicos.\n* As buscas realizadas na plataforma web consultam as bases de dados mantidas pela própria IP2Location, permitindo a investigação passiva sem envio de tráfego direto ao IP investigado.\n* Para análises em lote ou integração com scripts investigativos, é necessário o uso de chaves de API respeitando os limites da camada gratuita ou o download das tabelas da versão LITE."
  },
  {
    "id": "Jimpl",
    "title": "Jimpl",
    "url": "https://jimpl.com/",
    "tipo": "Ferramenta de Análise e Higienização de Arquivos",
    "utilidade": "Visualização e remoção de metadados EXIF de imagens para análise e OPSEC",
    "descricao": "O Jimpl é uma plataforma online projetada para inspecionar e remover metadados ocultos (dados EXIF) incorporados em arquivos de imagem. Ao carregar um arquivo, o sistema extrai informações técnicas gravadas pelo dispositivo captor — como coordenadas geográficas exatas (GPS), data e hora do disparo, modelo do hardware, configurações de lente e softwares de edição utilizados —, fornecendo uma opção direta para expurgar esses registros e reduzir a pegada digital do arquivo.",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "Em investigações digitais, a ferramenta serve tanto para fins analíticos quanto defensivos. Do lado analítico, funciona como um utilitário de triagem rápida para extrair evidências geográficas e técnicas de mídias coletadas durante o levantamento de alvos. Do lado defensivo (OPSEC), atua na esterilização de imagens produzidas pelo próprio analista ou pela operação antes de sua publicação ou envio, mitigando o risco de rastreamento ou contra-inteligência por meio do vazamento inadvertido de dados sensíveis.",
    "notes": "* Embora seja excelente para triagens rápidas, o analista deve lembrar que grandes plataformas de redes sociais costumam limpar o EXIF automaticamente durante o upload do usuário, reduzindo a eficácia de análises em fotos extraídas diretamente de feeds públicos.\n* Para cenários que exijam processamento em lote (bulk) de centenas de mídias ou onde o sigilo estrito dos dados impeça o upload do arquivo para servidores de terceiros, recomenda-se a substituição pelo uso local do utilitário de linha de comando ExifTool."
  },
  {
    "id": "JSON Viewer Pro",
    "title": "JSON Viewer Pro",
    "url": "https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc",
    "tipo": "Utilitário de Extensão de Navegador e Análise de Dados",
    "utilidade": "Formatação, visualização estruturada e análise estática de dados JSON/API para investigações",
    "descricao": "O JSON Viewer Pro é uma extensão de navegador desenvolvida para otimizar a leitura, formatação e análise de dados estruturados nos formatos JSON, XML ou YAML. A ferramenta converte blocos de texto brutos, densos e minificados — comumente retornados por requisições de APIs ou carregados a partir de arquivos locais — em uma árvore hierárquica interativa e visualmente organizada, oferecendo recursos de realce de sintaxe (*syntax highlighting*), busca textual interna, filtragem de chaves e geração de gráficos estruturais.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, o analista frequentemente interage com tráfego de redes, plataformas web e respostas de endpoints de APIs que contêm grandes volumes de dados não estruturados visualmente. O JSON Viewer Pro desempenha um papel analítico tático no exame dessas informações, permitindo ao investigador destrinchar payloads complexos, localizar chaves ocultas, rastrear identificadores exclusivos (como *UIDs* de contas) e mapear relacionamentos aninhados de forma ágil, sem a necessidade de exportar os dados brutos para ferramentas online de terceiros que possam comprometer o sigilo e a integridade da operação.",
    "notes": "* Por realizar toda a sua lógica de processamento e renderização de dados de forma estritamente local (*client-side*), o uso desta extensão mitiga o risco de vazamento de informações sensíveis (como chaves de autenticação privadas ou dados pessoais do alvo) para servidores externos.\n* A extensão disponibiliza uma funcionalidade para copiar o caminho do nó de dados (*JSON Path*), o que facilita significativamente o trabalho do analista no desenho de arquiteturas de coleta e na configuração de seletores para *scrapers* automatizados em fases posteriores da investigação."
  },
  {
    "id": "JUCESP - Busca Avançada",
    "title": "JUCESP - Busca Avançada",
    "url": "https://jucesponline.sp.gov.br/BuscaAvancada.aspx",
    "tipo": "Base de Dados Governamental / Inteligência Corporativa",
    "utilidade": "Consulta avançada de registros societários, vínculos empresariais e quadros de sócios (QSA) no estado de São Paulo",
    "descricao": "O sistema de Busca Avançada da JUCESP (Junta Comercial do Estado de São Paulo) é o portal oficial de consulta pública voltado ao levantamento de atos constitutivos e cadastrais de pessoas jurídicas registradas no estado. A plataforma permite realizar pesquisas refinadas cruzando múltiplos critérios, tais como nome empresarial, Número de Identificação do Registro de Empresas (NIRE), CNPJ, nome de sócios ou administradores, objeto social, município e intervalo de data de constituição.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações de fontes abertas voltadas à inteligência corporativa, patrimonial e repressão a fraudes, esta ferramenta constitui uma fonte primária de alto valor probatório. Ela possibilita realizar o *pivoting* a partir do nome de um alvo para descobrir suas participações societárias ocultas, desvelar o Quadro de Sócios e Administradores (QSA) de empresas de fachada, mapear conglomerados econômicos e identificar vínculos institucionais e comerciais entre diferentes pessoas físicas e jurídicas.",
    "notes": "* A busca por nomes de sócios exige atenção do analista devido à ocorrência de homônimos; a confirmação do vínculo deve ser corroborada cruzando dados adicionais, como o endereço da sede da empresa ou qualificações complementares.\n* É recomendável utilizar termos parciais ou grafias aproximadas caso a busca exata por nome empresarial não retorne resultados imediatos, visto que variações de abreviações e acentuações podem afetar o indexador do sistema."
  },
  {
    "id": "Kali Linux",
    "title": "Kali Linux",
    "url": "https://www.kali.org/",
    "tipo": "Distribuição Linux / Ambiente de Execução de Ferramentas",
    "utilidade": "Sistema operacional especializado em testes de invasão, auditoria de segurança e computação forense para estruturação de laboratórios de investigação",
    "descricao": "O Kali Linux é uma distribuição avançada do sistema operacional Linux, baseada em Debian, desenvolvida especificamente para testes de penetração, auditoria de segurança, engenharia reversa e computação forense. Mantido pela Offensive Security, o sistema traz embarcado um ecossistema com centenas de ferramentas nativas focadas em análise de tráfego, coleta de informações, exploração de vulnerabilidades e preservação de evidências digitais.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/desktop",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No escopo de investigações em fontes abertas, o Kali Linux atua como a base de infraestrutura para o analista, fornecendo um ambiente centralizado, estável e otimizado para rodar frameworks complexos, ferramentas de linha de comando e scripts customizados (Python, Go, Bash) que exigiriam longos processos de configuração em sistemas operacionais convencionais. Adicionalmente, suas ferramentas nativas de tratamento de dados facilitam a triagem de vazamentos e análise de arquivos coletados sem expor a máquina real do investigador.",
    "notes": "* Para garantir a integridade da OPSEC, a melhor prática determina rodar o Kali Linux dentro de um hipervisor (como VirtualBox ou VMware) utilizando ferramentas de *snapshot*. Isso permite congelar um estado limpo do sistema e restaurá-lo instantaneamente após o encerramento de uma investigação.\n* O analista de OSINT pode customizar o sistema instalando metapacotes específicos voltados para a coleta de fontes abertas, evitando o carregamento de ferramentas voltadas estritamente a ataques de rede (*red teaming*) que não possuem aplicação na atividade de inteligência."
  },
  {
    "id": "KeePassXC",
    "title": "KeePassXC",
    "url": "https://keepassxc.org/",
    "tipo": "Gerenciador de Senhas e Utilitário de Proteção de Dados",
    "utilidade": "Armazenamento seguro, offline e local de credenciais, chaves de API e identidades de investigação (Sock Puppets)",
    "descricao": "O KeePassXC é um gerenciador de senhas multiplataforma, de código aberto e de execução estritamente local. Ele permite armazenar e organizar credenciais de acesso, chaves de criptografia, anotações confidenciais e tokens de autenticação de dois fatores (TOTP) dentro de um banco de dados fortemente criptografado (formato .kdbx) protegido por uma senha mestra ou chave física, operando sem qualquer dependência de serviços em nuvem.",
    "testada": false,
    "tags": [
      "plataforma/desktop",
      "acesso/gratuito",
      "opsec/personas",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No ciclo de inteligência de fontes abertas, a proteção das credenciais e o isolamento de dados são fundamentais para mitigar riscos de contra-inteligência. O KeePassXC funciona como o repositório central de segurança do analista, permitindo gerenciar as credenciais de ferramentas de coleta, chaves de API e contas de investigação sem expor esses dados a provedores de nuvem comerciais, o que reduz drasticamente a superfície de ataque e possíveis vazamentos que possam comprometer a identidade do investigador.",
    "notes": "* É altamente recomendável combinar o uso da senha mestra com um arquivo de chave (*key file*) armazenado em um dispositivo físico separado (como um pendrive) para adicionar uma camada extra de segurança ao banco de dados `."
  },
  {
    "id": "KeyCDN IP Location Finder",
    "title": "KeyCDN IP Location Finder",
    "url": "https://tools.keycdn.com/geo",
    "tipo": "Ferramenta Web de Geolocalização IP e Análise de Infraestrutura",
    "utilidade": "Geolocalização de endereços IP e domínios, mapeamento de infraestrutura e consulta de Provedor (ISP) e Sistema Autônomo (ASN)",
    "descricao": "O KeyCDN IP Location Finder é uma ferramenta web disponibilizada pela rede de distribuição de conteúdo KeyCDN para realizar consultas e análises contextuais de endereços IPv4, IPv6 e nomes de host/domínio. A aplicação processa a entrada fornecida e retorna dados detalhados de geolocalização cadastral aproximada (país, código ISO, região, cidade, código postal e coordenadas estimadas de latitude e longitude), além de metadados técnicos de infraestrutura de rede, tais como Provedor de Serviços de Internet (ISP), Sistema Autônomo (ASN) e fuso horário.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "func/busca-identificacao",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações cibernéticas (CYBINT) e inteligência de fontes abertas, a ferramenta atua como um recurso ágil na fase de reconhecimento passivo e enriquecimento de indicadores técnicos. Ela viabiliza a determinação da origem geográfica cadastral de conexões suspeitas, auxilia na verificação de servidores de hospedagem vinculados a domínios de interesse e permite auditar se determinado tráfego parte de data centers corporativos ou de faixas de IP residenciais.",
    "notes": "* Os dados de coordenadas geográficas baseiam-se em registros cadastrais e tabelas de roteamento de telecomunicações (nível de cidade ou ponto de presença de rede), não devendo ser interpretados como rastreamento GPS físico em tempo real.\n* As buscas realizadas na plataforma consultam a base de dados mantida pela KeyCDN, realizando a investigação de forma passiva sem enviar tráfego direto ou interagir ativamente com o servidor/dispositivo do endereço investigado.\n* É recomendável cruzar as informações obtidas com outras bases de geolocalização IP para atestar a consistência dos dados cadastrais do ASN e do ISP."
  },
  {
    "id": "Lenso.ai",
    "title": "Lenso.ai",
    "url": "https://lenso.ai/en",
    "tipo": "Motor de Busca Reversa de Imagens e Reconhecimento Facial / IMINT",
    "utilidade": "Busca reversa visual com inteligência artificial para reconhecimento facial, detecção de duplicatas, locais e objetos",
    "descricao": "O Lenso.ai é um motor de busca reversa visual impulsionado por inteligência artificial e visão computacional. A plataforma permite o envio de fotografias ou links para rastrear correspondências na internet por meio de filtros específicos de categorização, incluindo reconhecimento e correspondência facial (People), identificação de lugares e marcos arquitetônicos (Places), detecção de objetos/produtos (Objects) e busca de duplicatas idênticas ou similares (Duplicates).",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/busca-identificacao",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, especialmente em Inteligência de Imagens (IMINT) e verificação de identidades, o Lenso.ai atua como um vetor avançado de busca e correlação de pessoas e cenários. A ferramenta possibilita rastrear a pegada visual de um alvo humano através do reconhecimento facial em múltiplas fontes públicas da web, identificar se uma foto de perfil é autêntica ou reaproveitada de outros contextos e localizar o ponto geográfico de imagens por meio da correspondência de elementos arquitetônicos e paisagísticos.",
    "notes": "* A categorização por abas (Pessoas, Lugares, Objetos e Duplicatas) permite isolar a intenção da busca, reduzindo ruídos e falsos positivos na investigação.\n* Por se tratar de um serviço baseado em nuvem de terceiros, o envio de fotografias confidenciais ou sensíveis de operações deve ser avaliado sob a ótica de OPSEC e custódia da informação."
  },
  {
    "id": "Lupa Veicular",
    "title": "Lupa Veicular",
    "url": "https://www.lupaveicular.com/",
    "tipo": "Plataforma de Inteligência e Consulta Veicular",
    "utilidade": "Consulta e levantamento de histórico veicular, débitos, restrições e análise de tipo de propriedade por meio da placa ou chassi.",
    "descricao": "O Lupa Veicular é uma plataforma web voltada para a consulta consolidada e emissão de relatórios históricos de automóveis em circulação no território brasileiro. A partir da inserção de um identificador como a placa (nos padrões Mercosul ou retroativos) ou o número de chassi, o sistema realiza buscas em bases de dados integradas para compilar informações técnicas, pendências financeiras, restrições administrativas e registros comerciais do veículo.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações patrimoniais, auditorias corporativas e análise de movimentações logísticas (VATINT), a ferramenta atua como um indexador técnico de dados veiculares. Ela viabiliza o rastreio da procedência de ativos, identificação de restrições judiciais ou gravames (como alienação fiduciária), verificação de passagens por leilões ou ocorrências de sinistros, e diferenciação do perfil de propriedade (se o bem pertence a uma pessoa física ou jurídica), otimizando a fase de cruzamento e expansão de vínculos.",
    "notes": "* A plataforma exibe uma verificação visual instantânea dos dados básicos de fábrica assim que a placa é digitada, permitindo que o analista certifique a exatidão do alvo e evite custos desnecessários antes de solicitar o relatório completo.\n* Identificar no laudo prévio que o proprietário se enquadra como banco ou seguradora constitui um forte indicador técnico de alienação fiduciária ou de um sinistro anterior de grande monta que pode ainda não estar totalmente detalhado em indexadores públicos."
  },
  {
    "id": "Magnific Icons",
    "title": "Magnific Icons",
    "url": "https://www.magnific.com/icons",
    "tipo": "Catálogo / Banco de Recursos Gráficos e Vetoriais",
    "utilidade": "Repositório e banco de recursos visuais vetoriais para elaboração de relatórios, mapeamento de grafos e apoio à criação de personas (OPSEC)",
    "descricao": "O Magnific Icons (seção da plataforma Magnific, anteriormente vinculada ao ecossistema Freepik/Iconfinder) é um catálogo online massivo de recursos visuais que reúne milhões de ícones e pictogramas nos formatos vetoriais e rasterizados (PNG e SVG). A plataforma dispõe de mecanismos de busca por estilo, filtros por categorias temáticas e ferramentas de customização gráfica para desenvolvimento de interfaces, apresentações e fluxogramas analíticos.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/limitado",
      "opsec/personas"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas e segurança operacional, o repositório atua como recurso auxiliar em duas frentes fundamentais: na padronização visual de relatórios de inteligência/diagramas de vínculos e na composição de identidades sintéticas (*sock puppets* / OPSEC). A ferramenta permite extrair e customizar elementos visuais específicos para ilustrar nós em árvores de evidências e grafos relacionais, bem como criar interfaces, logotipos falsos e identidades visuais de cobertura verossímeis utilizadas para operacionalizar perfis de infiltração formal ou engajamento em ambientes monitorados.",
    "notes": "* Os vetores em formato SVG podem ser importados diretamente em softwares de análise de grafos e diagramação (como Obsidian Canvas, Maltego, draw.io ou XMind) para personalizar ícones de entidades (ex: bancos, órgãos públicos, tipos de servidores, veículos).\n* Na criação de personas institucionais (*sock puppets* corporativos), a busca por coleções de estilo uniforme permite criar páginas de apresentação e materiais gráficos coesos para reforçar a credibilidade do disfarce operacional."
  },
  {
    "id": "Mailbox.org",
    "title": "Mailbox.org",
    "url": "https://mailbox.org/",
    "tipo": "Provedor de E-mail Seguro / Ferramenta de OPSEC e Privacidade",
    "utilidade": "Criação de e-mails seguros e privados para comunicações operacionais e estruturação de contas de cobertura",
    "descricao": "O Mailbox.org é um provedor de e-mail focado em privacidade, segurança e anonimato, operando a partir de servidores seguros localizados na Alemanha. A plataforma oferece serviços de correio eletrônico, nuvem e produtividade com forte proteção de dados, destacando-se por não rastrear ou registrar os endereços IP de conexão de seus usuários, omitir metadados técnicos nos cabeçalhos das mensagens e disponibilizar criptografia de dados de forma simplificada.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/pago",
      "opsec/ambiente-seguro",
      "opsec/personas"
    ],
    "utilidade_Osint": "No escopo de investigações e inteligência cibernética, a plataforma funciona como um recurso essencial de infraestrutura e proteção. Ela permite que o investigador estabeleça canais de comunicação protegidos ou configure contas estruturais sem expor rastros digitais que possam ligar a atividade investigativa à sua identidade real ou à sua instituição.",
    "notes": "* Devido às políticas rigorosas de privacidade e ao foco em anonimato do domínio, algumas redes sociais comerciais ou plataformas de grande porte podem impor restrições, bloqueios automáticos ou etapas adicionais de verificação (como autenticação telefônica) caso o e-mail seja utilizado para abrir novas contas de cobertura.\n* É altamente recomendável ativar a função de criptografia total da caixa de entrada oferecida pelo serviço, garantindo que até mesmo mensagens recebidas sem criptografia sejam codificadas assim que entrarem no servidor."
  },
  {
    "id": "Maltego",
    "title": "Maltego",
    "url": "https://www.maltego.com/downloads/",
    "tipo": "Software de Análise de Links e Framework de Inteligência (OSINT/CYBINT)",
    "utilidade": "Mineração de dados, correlação de entidades e inteligência de vínculos por meio de grafos interativos",
    "descricao": "O Maltego é uma ferramenta avançada de mineração de dados e análise de vínculos projetada para correlacionar informações e mapear relacionamentos em investigações complexas. O software funciona por meio da execução de *transforms* (scripts automatizados) que consultam diversas bases de dados integradas e APIs na internet, transformando pedaços isolados de informação em nós gráficos (*entities*) interconectados em tempo real.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "alvo/usuario-email",
      "func/agregador",
      "func/analise-visualizacao",
      "plataforma/desktop",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No ambiente de inteligência e investigação em fontes abertas, o Maltego funciona como o núcleo de centralização de dados. Ele permite ao analista realizar o processo de *pivoting* (avançar na investigação a partir de um dado conhecido) de forma visual e encadeada, conectando infraestruturas de rede, identidades digitais, pegadas na internet e estruturas corporativas em um único mapa mental técnico.",
    "notes": "* Durante a execução de investigações sensíveis, o analista deve estar ciente de que as requisições padrão de *transforms* passam pelos servidores centrais do Maltego (*Maltego Servers*) antes de atingirem a API de destino. Isso atua como um proxy natural que mascara o IP real do investigador frente ao alvo final, mas compartilha a estrutura da dork com a infraestrutura do software.\n* É altamente recomendável customizar o ambiente instalando e configurando chaves de API próprias (*API Keys*) no painel de transformações para mitigar os limites de cota da versão comunitária e expandir a profundidade das buscas."
  },
  {
    "id": "Malwarebytes",
    "title": "Malwarebytes",
    "url": "https://www.malwarebytes.com/",
    "tipo": "Software de Segurança Cibernética e Antivírus / Ferramenta de OPSEC e Defesa",
    "utilidade": "Proteção de endpoint, detecção de ameaças e mitigação de riscos na estação de trabalho do investigador",
    "descricao": "O Malwarebytes é uma solução de segurança cibernética focada na detecção proativa, isolamento e remoção de códigos maliciosos, ransomware, spywares e outras ameaças digitais avançadas. A plataforma atua tanto na camada do sistema operacional, analisando a integridade de arquivos e processos locais, quanto na camada de navegação na internet através de extensões que bloqueiam anúncios agressivos, rastreadores e conexões com domínios suspeitos.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/desktop",
      "plataforma/web",
      "acesso/limitado",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No âmbito das investigações em fontes abertas, o analista interage frequentemente com ambientes hostis, realiza downloads de artefatos desconhecidos vindos do ecossistema do alvo (como PDFs, imagens e documentos estruturados) ou navega por infraestruturas controladas por criminosos. O Malwarebytes atua na preservação da segurança operacional do investigador, mitigando riscos de contaminação por técnicas de *drive-by download*, bloqueando scripts espiões e permitindo a auditoria estática rápida de arquivos coletados antes de sua abertura.",
    "notes": "* Em ambientes de investigação avançados, o Malwarebytes deve ser configurado dentro de Máquinas Virtuais (VMs) de análise para garantir que possíveis detecções fiquem isoladas do sistema hospedeiro real do analista.\n* A extensão *Browser Guard* deve ser utilizada com cautela ao auditar infraestruturas de phishing criadas pelo alvo, pois os bloqueios automáticos baseados em reputação de domínio podem impedir o analista de visualizar o conteúdo original da página falsa sob investigação, sendo recomendado desativá-la temporariamente apenas nesses cenários específicos."
  },
  {
    "id": "Mapa do Registro de Imóveis do Brasil",
    "title": "Mapa do Registro de Imóveis do Brasil",
    "url": "https://www.registrodeimoveis.org.br/mapa",
    "tipo": "Ferramenta Web de Consulta Geoespacial e Cadastral",
    "utilidade": "Mapeamento georreferenciado, localização de perímetros e identificação de circunscrições imobiliárias em cartórios do Brasil.",
    "descricao": "O Mapa do Registro de Imóveis do Brasil é uma ferramenta interativa desenvolvida pelo Registro de Imóveis do Brasil (RIB) em cooperação com o ONR. A plataforma integra dados cartográficos e limites territoriais das comarcas para georreferenciar imóveis, delimitar áreas de atuação de cada cartório de registro e mapear o território nacional de forma visual.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações patrimoniais, auditorias imobiliárias e inteligência de localização (GEOINT), esta ferramenta atua como um elo entre o espaço físico e o registro legal. A partir de coordenadas geográficas, endereços ou delimitações visuais no mapa, o analista consegue identificar com precisão técnica qual circunscrição imobiliária (cartório específico) é competente por aquela coordenada ou polígono, facilitando a requisição posterior de matrículas e buscas de bens.",
    "notes": "* A ferramenta é de extrema utilidade para investigações em áreas rurais ou imóveis sem endereço urbano convencional, permitindo a inserção de coordenadas geográficas exatas para delimitar a comarca responsável.\n* Funciona de maneira complementar ao portal unificado dos Registradores, servindo como a etapa prévia de inteligência geográfica antes do investimento financeiro na emissão de certidões pagas."
  },
  {
    "id": "Mapillary",
    "title": "Mapillary",
    "url": "https://www.mapillary.com/app/",
    "tipo": "Plataforma Web de Imagens de Nível de Solo e Inteligência Geoespacial (GEOINT / IMINT)",
    "utilidade": "Exploração, verificação e inteligência visual de imagens de nível de solo em escala global alimentadas por colaboração e visão computacional",
    "descricao": "O Mapillary é uma plataforma global de mapeamento visual e imagens de nível de solo (*street-level imagery*) desenvolvida de forma colaborativa e aprimorada por algoritmos de visão computacional. O serviço agrega e indexa milhões de sequências fotográficas e panorâmicas em 360 graus enviadas por usuários, conectando-as a coordenadas geográficas precisas e aplicando detecção automatizada de placas, faixas, objetos urbanos e pontos de interesse cartográfico.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ecossistema de inteligência geoespacial (GEOINT) e verificação visual (IMINT), o Mapillary atua como uma alternativa e complemento de fonte aberta a ferramentas proprietárias de visualização de ruas. A ferramenta é essencial para a corroboração de locais, análise temporal de mudanças na infraestrutura urbana, reconhecimento visual de rotas de deslocamento e verificação de fachadas ou sinalizações em regiões geográficas que não dispõem de cobertura atualizada por serviços tradicionais de satélite ou mapeamento comercial.",
    "notes": "* A plataforma oferece suporte a histórico temporal, permitindo alternar entre diferentes capturas de uma mesma rua ao longo dos anos para verificar reformas, mudanças de comércio ou reconstrução de cenários em datas específicas.\n* Por contar com detecção automática de feições urbanas por inteligência artificial, o sistema destaca nós como placas de sinalização viária, postes e faixas de pedestres, facilitando o cruzamento de referências cartográficas com bases do OpenStreetMap."
  },
  {
    "id": "MarineTraffic",
    "title": "MarineTraffic",
    "url": "https://www.marinetraffic.com/",
    "tipo": "Plataforma de Inteligência Geoespacial e Marítima (GEOINT)",
    "utilidade": "Rastreamento em tempo real, monitoramento histórico e inteligência de frotas de embarcações globais",
    "descricao": "O MarineTraffic é uma plataforma global de inteligência marítima que monitora e mapeia em tempo real o posicionamento, rotas, velocidades e dados operacionais de navios e embarcações em todo o mundo. O sistema baseia-se na coleta massiva de dados provenientes de redes de receptores terrestres e de satélites do Sistema de Identificação Automática (AIS - Automatic Identification System), além de integrar dados sobre portos, tráfego costeiro e detalhes estruturais de frotas comerciais e privadas.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "fonte/geoespacial",
      "func/busca-identificacao",
      "plataforma/web",
      "plataforma/mobile",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações geoespaciais (GEOINT) e inteligência tática, a ferramenta funciona como uma fonte essencial para rastrear o deslocamento de ativos físicos e logísticos. Ela possibilita mapear rotas de transporte de mercadorias, auditar o tráfego em zonas de interesse econômico ou de conflito, investigar a movimentação de iates de luxo ligados a alvos de colarinho branco e estabelecer linhas do tempo geográficas a partir do histórico de aportes e atracamentos de embarcações suspeitas.",
    "notes": "* Os investigadores devem considerar que embarcações envolvidas em atividades ilícitas, contrabando ou evasão de sanções frequentemente utilizam a técnica de \"spoofing\" de AIS ou simplesmente desligam seus transponders (criando as chamadas *dark vessels*). Nesses casos, o MarineTraffic indicará o último ponto conhecido da embarcação, exigindo cruzamento secundário com imagens de satélite abertas para validação de localização.\n* A plataforma permite a criação de alertas customizados por e-mail ou notificação push para portos específicos ou embarcações selecionadas, facilitando o monitoramento passivo de alvos ao longo de semanas de investigação."
  },
  {
    "id": "Marketing Tool - Face Generator",
    "title": "Marketing Tool - Face Generator",
    "url": "https://www.marketingtool.online/en/face-generator/",
    "tipo": "Gerador de Imagens por Inteligência Artificial / Ferramenta de OPSEC",
    "utilidade": "Geração de rostos humanos fictícios hiper-realistas para a criação de avatares e contas de cobertura (sock puppets)",
    "descricao": "O Face Generator da Marketing Tool é uma ferramenta baseada em inteligência artificial (modelos generativos) projetada para criar retratos realistas de rostos humanos de pessoas que não existem no mundo real. A plataforma permite personalizar características específicas, como a faixa etária e o gênero do perfil, gerando novas imagens exclusivas instantaneamente a cada requisição.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/gratuito",
      "opsec/personas"
    ],
    "utilidade_Osint": "No ecossistema de inteligência em fontes abertas, especialmente em operações que exigem infiltração digital passiva ou interações em redes sociais e fóruns (HUMINT), a manutenção do anonimato do investigador é crítica. Esta ferramenta viabiliza a criação de identidades dissimuladas (*sock puppets*) ao fornecer fotografias de perfil inéditas. Como os rostos são gerados sinteticamente, eles contornam ferramentas tradicionais de busca reversa de imagens (pivoting por imagem), impedindo que o alvo descubra a falsidade do perfil por meio de varreduras na web.",
    "notes": "* Embora as imagens geradas por redes neurais evitem a indexação em motores de busca reversa, o analista deve inspecionar visualmente o arquivo gerado antes de utilizá-lo profissionalmente. É comum que algoritmos gerativos apresentem pequenas distorções e artefatos técnicos, como assimetrias severas em acessórios (brincos, óculos), texturas borradas no fundo da imagem ou anomalias na fusão do cabelo com a pele.\n* Para garantir uma correta segurança operacional, a imagem obtida não deve ser associada a metadados originais do dispositivo do investigador; recomenda-se passar o arquivo por uma limpeza de metadados EXIF antes do upload na persona correspondente."
  },
  {
    "id": "Mermaid Live Editor",
    "title": "Mermaid Live Editor",
    "url": "https://mermaid.live/",
    "tipo": "Editor de Diagramas Baseado em Texto (Syntax-to-Diagram) / Ferramenta de Análise Visual",
    "utilidade": "Geração de fluxogramas, cronologias e diagramas de relacionamento baseados em texto para documentação de investigações",
    "descricao": "O Mermaid Live Editor é uma plataforma online que permite a criação, edição e renderização em tempo real de diagramas, fluxogramas, gráficos de sequência, cronologias e mapas relacionais a partir de uma sintaxe simples baseada em texto (Markdown-like). O código inserido é processado de forma dinâmica para gerar gráficos estruturados sem a necessidade de ferramentas de desenho manual.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ciclo de inteligência e na organização do conhecimento pessoal, a ferramenta é utilizada na fase de análise de dados e confecção de relatórios. Ela permite estruturar visualmente o fluxo de uma investigação, mapear a linha do tempo de eventos cibernéticos, esquematizar redes de relacionamentos e ilustrar o processo de *pivoting*. Devido à sua compatibilidade nativa com o Obsidian, que renderiza blocos de código Mermaid localmente, o editor serve como um ambiente de prototipagem rápida para o analista estruturar grafos complexos antes de incorporá-los definitivamente às suas notas integradas.",
    "notes": "* Por se tratar de uma plataforma que não realiza busca ativa de dados na rede e focar apenas no processamento do que é inserido pelo usuário, o analista deve atentar-se à OPSEC de dados ao utilizar a versão web pública. Se houver informações estritamente confidenciais (como nomes reais de alvos, CPFs ou IPs sob sigilo), recomenda-se não utilizar o ambiente online para evitar a exposição acidental de dados sensíveis na nuvem, priorizando a escrita e renderização do código Mermaid de forma local e isolada dentro do próprio Obsidian.\n* O editor disponibiliza recursos de exportação nos formatos PNG, SVG e cópia de código em formato Data URL, otimizando a transição dos diagramas diretamente para os relatórios formais de inteligência."
  },
  {
    "id": "MetaGer",
    "title": "MetaGer",
    "url": "https://metager.org/",
    "tipo": "Metabuscador Web Privativo e Proxy de Anonimização",
    "utilidade": "Mecanismo de metabusca privativo e de código aberto para pesquisas web anônimas com recurso de navegação via proxy integrado",
    "descricao": "O MetaGer é um mecanismo de metabusca de código aberto operado pela associação alemã sem fins lucrativos SUMA-EV em cooperação com a Universidade de Hannover. O serviço agrega e compila resultados de múltiplos motores de busca independentes e índices web, entregando respostas sem rastrear as consultas dos usuários, sem armazenar endereços IP e sem repassar dados telemétricos a corretores de dados. Além disso, disponibiliza a funcionalidade nativa \"Abrir anonimamente\" (*Open Anonymously*), que atua como um servidor proxy intermediário para acessar os links resultantes sem expor a identidade do pesquisador ao servidor de destino.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No ciclo de inteligência de fontes abertas, o MetaGer é empregado na fase inicial de reconhecimento passivo e coleta de superfície. Por realizar consultas federadas e despersonalizadas, a ferramenta permite contornar a \"bolha de filtros\" (*filter bubble*) e obter resultados neutros em escala internacional. Sua infraestrutura fortalece substancialmente a segurança operacional (OPSEC) do analista, viabilizando tanto a pesquisa de termos sensíveis sem indexação do perfil investigativo quanto a abertura de sites desconhecidos ou potencialmente hostis sem revelar a infraestrutura de rede e o endereço IP real do investigador.",
    "notes": "* A funcionalidade \"Abrir anonimamente\" presente ao lado de cada link nos resultados é ideal para inspecionar páginas suspeitas ou alvos de investigação em uma camada preliminar, impedindo que o servidor de destino capture o cabeçalho HTTP real ou o IP do investigador.\n* O motor permite refinar pesquisas selecionando idiomas, focando em fontes de domínios específicos e ativando filtros de busca estrita de termos entre aspas."
  },
  {
    "id": "Miami-Dade County Property Appraiser - Property Search",
    "title": "Miami-Dade County Property Appraiser - Property Search",
    "url": "https://apps.miamidadepa.gov/PropertySearch/#/",
    "tipo": "Portal Governamental de Registros Públicos Imobiliários e Sistema de Informações Geográficas (GIS)",
    "utilidade": "Consulta cadastral, avaliação fiscal, histórico de transações imobiliárias e mapeamento geoespacial de propriedades no Condado de Miami-Dade (Flórida/EUA)",
    "descricao": "O Property Search do Miami-Dade County Property Appraiser é o portal oficial de consulta imobiliária e cadastral do Condado de Miami-Dade, na Flórida (EUA). A plataforma indexa e disponibiliza dados públicos de todas as parcelas imobiliárias da região metropolitana de Miami, permitindo buscas por endereço, nome do proprietário, número de fólio (*Parcel ID*) ou subdivisão. O sistema consolida dados cadastrais detalhados, incluindo nome do titular, endereço de correspondência (*mailing address*), descrição legal do lote, histórico cronológico de escrituras e vendas (*sales history*), valor venal/avaliação fiscal de mercado (*assessed & market value*), especificações construtivas e zoneamento urbano, integrando camadas cartográficas de sensoriamento remoto e fotos aéreas anuais.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "fonte/geoespacial",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações patrimoniais transnacionais, combate à lavagem de dinheiro (AML), Due Diligence e rastreamento de ativos internacionais, o portal é uma das ferramentas primárias mais eficazes para localizar bens imóveis detidos por pessoas físicas e jurídicas no sul da Flórida. Ele possibilita realizar *pivoting* a partir do nome de um investigado ou de empresas offshore/LLCs para revelar aquisições imobiliárias, cruzar endereços de correspondência declarados com outras estruturas societárias nos Estados Unidos e verificar valores declarados em transações imobiliárias históricas.",
    "notes": "* Ao realizar pesquisas por nome de pessoas físicas, recomenda-se testar a estrutura `Sobrenome Nome` ou buscar apenas pelo sobrenome principal para cobrir possíveis divergências na padronização dos registros cartorários americanos.\n* O número de fólio (*Folio Number*) é o identificador único e invariável da propriedade, sendo a forma mais precisa de indexação e busca no sistema.\n* O relatório do imóvel frequentemente traz links e números de livro/página (*Book/Page* ou *Document Number*) que remetem diretamente às escrituras registradas no *Miami-Dade County Clerk of Courts*, possibilitando a emissão da íntegra dos contratos de compra e venda e das hipotecas associadas."
  },
  {
    "id": "MindMeister",
    "title": "MindMeister",
    "url": "https://www.mindmeister.com/pt",
    "tipo": "Software de Mapeamento Mental Baseado em Nuvem / Ferramenta de Análise Visual",
    "utilidade": "Construção de mapas mentais e diagramas hierárquicos para estruturação visual de cenários investigativos e organização de inteligência",
    "descricao": "O MindMeister é uma plataforma de mapeamento mental baseada na nuvem que permite aos usuários criar, estruturar e colaborar em diagramas visuais de forma hierárquica. A ferramenta possibilita organizar ideias, conectar conceitos por meio de linhas direcionais e ramificações, inserir ícones, notas contextuais e anexar arquivos em nós específicos dentro de uma interface gráfica dinâmica.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "plataforma/web",
      "plataforma/mobile",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No ciclo de inteligência, especialmente na fase de análise e processamento de dados (Inteligência de Vínculos), o MindMeister funciona como um ambiente de modelagem de cenários. Ele permite que o investigador organize de maneira lógica as informações estáticas coletadas na rede, esquematizando redes de relacionamentos, organogramas de empresas do alvo, hipóteses de autoria de crimes cibernéticos ou o sequenciamento cronológico de eventos antes da redação do relatório final de inteligência.",
    "notes": "* Devido à OPSEC e proteção de dados sigilosos da investigação, o analista deve considerar que o MindMeister é uma plataforma baseada em nuvem comercial de terceiros. Informações estritamente confidenciais (como identidades reais protegidas, IPs sob investigação sigilosa, CPFs ou evidências brutas sensíveis) não devem ser inseridas no sistema web para evitar riscos de vazamento de dados na nuvem, sendo aconselhável o uso de termos ofuscados, códigos ou pseudônimos.\n* O layout flexível do mapa mental estruturado na ferramenta pode ser exportado para posterior integração visual em relatórios técnicos, facilitando a compreensão de redes de relacionamentos complexas por parte dos tomadores de decisão."
  },
  {
    "id": "MindMup",
    "title": "MindMup",
    "url": "https://www.mindmup.com",
    "tipo": "Software de Mapeamento Mental Baseado em Nuvem / Ferramenta de Análise Visual",
    "utilidade": "Estruturação visual de cenários investigativos, diagramação e geração de mapas mentais para organização de inteligência",
    "descricao": "O MindMup é uma ferramenta de mapeamento mental baseada na nuvem projetada para criar, estruturar e compartilhar diagramas e mapas conceituais de forma ágil. Integrada de forma nativa ao ecossistema do Google Drive, a plataforma permite organizar ideias através de nós hierárquicos, adicionar notas textuais, links e anexos, além de suportar a exportação dos mapas estruturados para diversos formatos digitais (como imagens, PDFs e vetores).",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Na fase de análise e processamento do ciclo de inteligência (Inteligência de Vínculos), o MindMup serve como um ambiente de suporte cognitivo e modelagem estática. Ele auxilia o analista na estruturação lógica dos dados coletados na rede, permitindo conectar ramificações de uma investigação, correlacionar indícios patrimoniais ou corporativos, traçar organogramas e documentar hipóteses antes da formalização do relatório final de inteligência.",
    "notes": "* Sob a ótica da OPSEC, por se tratar de um serviço de terceiros baseado em nuvem pública na sua modalidade gratuita, dados estritamente sensíveis ou sigilosos (como nomes reais de alvos protegidos, CPFs ou IPs de servidores sob investigação judicial) não devem ser inseridos na plataforma de forma explícita. Recomenda-se o uso de codinomes, identificadores ofuscados ou pseudônimos para mitigar riscos de vazamento de dados.\n* A integração nativa com o Google Drive facilita o arquivamento seguro dos arquivos de mapa mental diretamente no repositório de armazenamento em nuvem dedicado da equipe de investigação, otimizando o compartilhamento e o controle de acesso de forma centralizada."
  },
  {
    "id": "Minha Receita",
    "title": "Minha Receita",
    "url": "https://minhareceita.org/",
    "tipo": "API e Interface Web de Consulta de Dados Públicos Empresariais",
    "utilidade": "Consulta rápida, estruturada e automatizada de dados cadastrais de CNPJs e Quadros de Sócios e Administradores (QSA)",
    "descricao": "O Minha Receita é uma solução web e uma API de código aberto (*open-source*) desenvolvida para facilitar a consulta de informações públicas de empresas brasileiras registradas no Cadastro Nacional da Pessoa Jurídica (CNPJ). A plataforma consome, trata e indexa de forma eficiente os dados brutos disponibilizados periodicamente pela Receita Federal do Brasil, permitindo buscas rápidas sem a necessidade de preenchimento de captchas ou navegação nos sistemas governamentais tradicionais.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações patrimoniais, inteligência societária e conformidade (*compliance*), a ferramenta funciona como um indexador ágil para levantamento de vínculos corporativos. Ela permite ao analista identificar a cadeia de comando de uma organização, rastrear múltiplos CNPJs associados a um mesmo grupo econômico através do Quadro de Sócios e Administradores (QSA) e obter dados de localização e atividades econômicas (CNAE) essenciais para o andamento de auditorias e investigações de fraudes.",
    "notes": "* Por se tratar de uma ferramenta que realiza a busca em uma base local pré-compilada a partir dos dumps governamentais, as informações podem apresentar um pequeno atraso temporal em relação à situação em tempo real da empresa na Receita Federal, dependendo da data da última atualização do banco de dados do projeto.\n* A existência da API pública torna esta ferramenta altamente recomendável para integração em scripts de automação ou ferramentas de coleta massiva de dados em lote (*bulk processing*), permitindo enriquecer planilhas de alvos de maneira automatizada através do terminal ou de ferramentas de processamento de dados locais."
  },
  {
    "id": "MIPMED - Team",
    "title": "MIPMED - Team",
    "url": "https://mipmed.eu/team",
    "tipo": "Diretório Institucional e Base de Dados de Contatos Acadêmicos/Profissionais",
    "utilidade": "Mapeamento de organograma institucional, identificação de colaboradores e coleta de e-mails de alvos profissionais",
    "descricao": "A URL `https://mipmed.eu/team` direciona para a seção oficial de membros do grupo de pesquisa *Molecular Imaging for Precision Medicine* (MIPMED). O site funciona como um repositório institucional público que detalha a equipe de pesquisadores, técnicos, estudantes de pós-graduação e gestores associados ao laboratório científico, apresentando suas atribuições profissionais, biografias resumidas e dados de contato.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/usuario-email",
      "alvo/empresa",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Atua como uma fonte passiva de dados organizacionais e biográficos em investigações corporativas ou acadêmicas. A página permite mapear o organograma de uma entidade, identificar a cadeia de comando de projetos e coletar e-mails institucionais legítimos que servem como insumos limpos para processos de pivoting e background check.",
    "notes": "* Em conformidade com as regras de restrição de acesso a ferramentas estáticas ou puramente informativas que não realizam varreduras ativas na rede, nenhuma tag da categoria `func/` foi atribuída, uma vez que a página atua estritamente como um repositório passivo de dados de alvos.\n* As identidades e e-mails coletados no diretório podem ser utilizados para alimentar ferramentas de automação e scrapers locais, permitindo estruturar listas de alvos para auditorias de segurança da informação e testes de conscientização contra engenharia social."
  },
  {
    "id": "Miro",
    "title": "Miro",
    "url": "https://miro.com/",
    "tipo": "Plataforma de Quadro Branco Digital Colaborativo",
    "utilidade": "Mapeamento de vínculos, centralização visual de evidências e diagramação de cenários investigativos complexos.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "plataforma/web",
      "plataforma/desktop",
      "plataforma/mobile",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Na fase de análise e processamento do ciclo de inteligência (foco em Inteligência de Vínculos), o Miro funciona como um repositório dinâmico para a construção de matrizes de associação e diagramas de casos (case charts). Ele permite ao analista coligir capturas de tela, mídias e dados brutos extraídos da internet em um único ecossistema visual, traçando linhas de conexão entre alvos, esquematizando redes de relacionamentos, fluxos financeiros e cronologias de eventos para expor padrões ocultos de proximidade.",
    "notes": "* Sob a perspectiva de OPSEC e proteção de dados sensíveis, o analista deve atentar-se ao fato de que o Miro é um serviço comercial baseado na nuvem de terceiros. Informações sensíveis devem ser ofuscadas através de codinomes.\n* A flexibilidade da tela infinita viabiliza a organização de dados em camadas, permitindo que o analista posicione evidências documentais diretamente ao lado dos nós hierárquicos do grafo."
  },
  {
    "id": "MISP (Open Source Threat Intelligence Platform)",
    "title": "MISP (Open Source Threat Intelligence Platform)",
    "url": "https://www.misp-project.org/",
    "tipo": "Plataforma de Inteligência de Ameaças Cibernéticas (Open Source TIP)",
    "utilidade": "Centralização, correlação estática e compartilhamento de Indicadores de Comprometimento (IoCs) e inteligência de ameaças cibernéticas",
    "descricao": "O MISP é uma plataforma de inteligência de ameaças de código aberto projetada para armazenar, correlacionar e compartilhar dados estruturados sobre incidentes de segurança cibernética, fraudes financeiras e vulnerabilidades. A ferramenta opera como um ecossistema de banco de dados onde Indicadores de Comprometimento (IoCs) — como hashes de arquivos, artefatos maliciosos e dados de rede — são ingeridos via feeds ou inserções manuais, gerando correlações automatizadas entre eventos distintos com base em atributos comuns.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "alvo/usuario-email",
      "func/agregador",
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Funciona como um repositório centralizador e correlacionador de dados em Cyber Threat Intelligence (CTI). A plataforma permite importar feeds públicos e relatórios de inteligência para cruzar indicadores (IPs, domínios e e-mails), ajudando o analista a verificar de forma passiva se um artefato técnico coletado já está associado a campanhas maliciosas globais ou atores de ameaças conhecidos.",
    "notes": "* Por se tratar de um sistema baseado em comunidades de compartilhamento, o analista deve atentar-se rigorosamente às configurações de OPSEC e às diretrizes do *Traffic Light Protocol* (TLP) antes de inserir dados de uma investigação real no ecossistema. Caso a instância esteja conectada e sincronizada com outras organizações externas, o upload inadequado de um IoC exclusivo pode alertar involuntariamente o alvo ou vazar detalhes de uma investigação sigilosa para terceiros.\n* É altamente recomendável automatizar a ingestão de feeds públicos de OSINT (como os fornecidos por entidades de cibersegurança internacionais) para garantir que a base de dados local permaneça atualizada e pronta para responder a consultas analíticas pontuais."
  },
  {
    "id": "MITRE ATT&CK",
    "title": "MITRE ATT&CK",
    "url": "https://attack.mitre.org/",
    "tipo": "Framework de Inteligência de Ameaças (Threat Intelligence) e Base de Conhecimento Cibernético",
    "utilidade": "Profiling de atores de ameaças, mapeamento de táticas, técnicas e procedimentos (TTPs) e suporte à inteligência cibernética (CYBINT)",
    "descricao": "O MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) é uma base de conhecimento globalmente acessível que cataloga as táticas, techniques, e procedimentos (TTPs) utilizados por adversários cibernéticos com base em observações do mundo real. O framework fornece uma matriz estruturada que divide o ciclo de vida de ataques a sistemas corporativos, móveis e industriais, documentando detalhadamente o comportamento de grupos cibercriminosos (APTs), campanhas ativas e o uso de softwares ou malwares específicos.",
    "testada": false,
    "tags": [
      "fonte/registros-publicos-gov",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Atua como uma base de conhecimento doutrinária e referencial indispensável para a inteligência cibernética (CYBINT). Permite ao analista cruzar comportamentos, logs e ferramentas estáticas mapeadas em uma investigação com o modus operandi de grupos de ameaças persistentes avançadas (APTs) conhecidos, servindo de guia estratégico para a atribuição tática e profiling de adversários.",
    "notes": "* O analista pode exportar as matrizes de técnicas geradas no ATT&CK Navigator no formato JSON para incorporá-las a ferramentas locais de análise ou utilizá-las para renderizar diagramas visuais em seus relatórios técnicos de inteligência.\n* Por se tratar de um repositório conceitual de comportamentos macro (TTPs), o MITRE ATT&CK não deve ser confundido com um banco de dados operacional de Indicadores de Comprometimento (IoCs) dinâmicos (como IPs e hashes mutáveis), servindo essencialmente como um guia estratégico para entender a lógica operacional do adversário e prever seus próximos passos técnicos."
  },
  {
    "id": "Mobilefish Steganography",
    "title": "Mobilefish Steganography",
    "url": "https://www.mobilefish.com/services/steganography/steganography.php",
    "tipo": "Ferramenta de Esteganografia e Análise Forense Digital (Web-based)",
    "utilidade": "Ocultação (criptografia) e extração (descriptografia) de mensagens ou arquivos ocultos dentro de imagens utilizando técnicas de esteganografia.",
    "descricao": "O Mobilefish Steganography é um serviço online especializado na aplicação e decodificação de esteganografia digital em arquivos de imagem. A ferramenta permite que usuários ocultem textos ou arquivos inteiros dentro de uma imagem portadora (cover image) gerando um arquivo modificado visualmente idêntico, além de realizar o processo inverso de extração e engenharia reversa de artefatos suspeitos por meio de senhas ou chaves de criptografia.",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Atua na fase de verificação de mídias e forense digital (IMINT). A plataforma permite realizar a engenharia reversa e a extração de payloads e mensagens ocultas dentro de arquivos de imagem obtidos em fontes abertas, auxiliando no desmascaramento de canais de comunicação dissimulados e na detecção de técnicas de esteganografia.",
    "notes": "* Ideal para decodificar pistas e arquivos ocultos em competições de CTF (Capture The Flag) ou auditorias rápidas de imagens suspeitas coletadas em fontes abertas.\n* Para preservar a OPSEC técnica, deve-se avaliar o nível de sensibilidade do artefato antes de enviá-lo para processamento em plataformas baseadas na web, priorizando ferramentas locais caso o arquivo contenha dados sigilosos ou protegidos."
  },
  {
    "id": "Mojeek",
    "title": "Mojeek",
    "url": "https://www.mojeek.com/",
    "tipo": "Motor de Busca Web Independente e Indexador Próprio",
    "utilidade": "Mecanismo de busca e indexador web independente para consultas de superfície neutras e sem rastreamento de usuários",
    "descricao": "O Mojeek é um mecanismo de busca na web com sede no Reino Unido que se destaca por construir seu próprio índice de páginas a partir de um rastreador autônomo (*web crawler*), sem depender de dados ou APIs de outros motores como Google ou Microsoft Bing. A plataforma é orientada à privacidade estrita, operando com uma política rigorosa de não rastreamento que assegura a não coleta de endereços IP, histórico de pesquisa ou perfis comportamentais de seus usuários.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "func/busca-dorks",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No fluxo de investigações em fontes abertas, o Mojeek é uma fonte alternativa de busca primária e reconhecimento de superfície. Devido ao seu índice próprio e independente, ele apresenta resultados e ordenações diferentes dos motores comerciais hegemônicos, possibilitando a descoberta de páginas, documentos esquecidos e ativos digitais que sofrem despriorização em outros buscadores. Além disso, fornece uma camada de proteção à segurança operacional (OPSEC) ao impedir o vínculo de termos investigativos sensíveis ao perfil ou IP do analista.",
    "notes": "* Por possuir um índice próprio em constante expansão, os resultados podem apresentar menor densidade em tópicos altamente regionalizados ou recentes em relação a indexadores de escala massiva comercial, sendo idealmente utilizado de forma complementar.\n* Oferece filtros avançados por tipo de emoção/tom do texto (*search by emotion*) e busca focada em websites independentes, o que pode auxiliar no rastreamento de discussões de nicho e fóruns de pequeno porte."
  },
  {
    "id": "Morbotron",
    "title": "Morbotron",
    "url": "https://morbotron.com/",
    "tipo": "Motor de Busca de Mídia / Acervo Digital de Transcrições e Imagens",
    "utilidade": "Indexação, transcrição e busca de fotogramas (frames) e citações de episódios e filmes da animação Futurama",
    "descricao": "O Morbotron é uma plataforma de busca e indexação visual desenvolvida pelos mesmos criadores do Frinkiac, voltada para o mapeamento de legendas, transcrições de diálogos e fotogramas (*screencaps*) de todas as temporadas e filmes da série de animação *Futurama*. O motor sincroniza as linhas de roteiro com os respectivos frames de vídeo, permitindo a localização exata de cenas por meio de termos textuais e a geração de capturas estáticas ou GIFs personalizados com legendas embutidas.",
    "testada": false,
    "tags": [
      "fonte/arquivos-noticias",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, especialmente na verificação de desinformação e análise de mídias (IMINT), o Morbotron funciona como repositório de referência para autenticação de mídias de cultura pop. Ele permite rastrear a proveniência exata de citações, memes e capturas de tela amplamente disseminados em redes sociais ou fóruns de discussão, possibilitando aos investigadores validar se uma frase ou imagem atribuída a determinado contexto é autêntica, alterada ou descontextualizada.",
    "notes": "* Útil para checagem de fatos (*fact-checking*) na identificação de legendas falsificadas inseridas sobre cenas da animação.\n* A plataforma fornece referências precisas de temporada e episódio (*Season/Episode code*), facilitando o cruzamento com bases de dados cinematográficas e registros históricos de transmissão."
  },
  {
    "id": "Mullvad VPN",
    "title": "Mullvad VPN",
    "url": "https://mullvad.net/",
    "tipo": "Serviço de Rede Privada Virtual (VPN)",
    "utilidade": "Anonimização de tráfego, mascaramento de endereço IP e criptografia de ponta a ponta para proteção técnica do investigador.",
    "testada": false,
    "tags": [
      "plataforma/desktop",
      "plataforma/mobile",
      "acesso/pago",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "Atua de forma estrita na camada de Segurança das Operações (OPSEC) para garantir o anonimato técnico do analista. A ferramenta mascara o endereço IP de origem e criptografa o tráfego de rede durante coletas ativas ou passivas, enquanto seu modelo de contas sem e-mail e pagamentos anônimos previne a quebra de identidade do investigador.",
    "notes": "* Ideal para ser configurado diretamente em máquinas virtuais de investigação (como Kali Linux ou CSI Linux) ou roteadores de laboratório para assegurar que nenhuma requisição vaze o IP original.\n* O uso combinado com navegadores voltados para privacidade (como o Mullvad Browser ou o Tor em modo Whonix) reduz drasticamente as chances de rastreamento por impressões digitais do navegador (*browser fingerprinting*)."
  },
  {
    "id": "MxFace - Face Comparing",
    "title": "MxFace - Face Comparing",
    "url": "https://mxface.ai/",
    "tipo": "Plataforma de Reconhecimento Facial e API de Comparação Biométrica",
    "utilidade": "Comparação, verificação e indexação biométrica de faces em imagens para checagem de identidade.",
    "descricao": "O MxFace é uma plataforma baseada em nuvem que fornece soluções avançadas de reconhecimento e comparação facial por meio de APIs e ferramentas web. Utilizando algoritmos de aprendizado profundo (Deep Learning), o sistema analisa imagens estáticas para mapear características faciais detalhadas, permitindo realizar a verificação de similaridade 1:1 entre dois rostos ou a busca de correspondências 1:N em bancos de dados de imagens preexistentes.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Aplicada na fase de validação de identidades e cruzamento de dados em fontes abertas (IMINT/SOCMINT). A ferramenta permite automatizar a verificação se fotos coletadas de diferentes plataformas web ou redes sociais pertencem ao mesmo indivíduo, auxiliando no desmascaramento de personas e na confirmação de perfis vinculados ao alvo.",
    "notes": "* **Orientação para API**: Por possuir uma arquitetura baseada em API robusta, a ferramenta é altamente recomendada para ser integrada a scripts de coleta customizados, permitindo a automação de análises biométricas em lotes de mídias coletadas.\n* **Variáveis de Ambiente**: Elementos como o envelhecimento natural do alvo, expressões faciais extremas, baixa resolução da imagem ou o uso de disfarces (óculos, barbas falsas ou maquiagem) podem interferir no score de confiança retornado pelos algoritmos.\n* **Salvaguarda de OPSEC**: As imagens enviadas passam por servidores comerciais de terceiros para processamento. Em cenários que envolvam dados sensíveis ou sigilo judicial, deve-se avaliar a conformidade de privacidade do serviço ou optar por modelos de visão computacional executados localmente."
  },
  {
    "id": "MXToolbox SuperTool",
    "title": "MXToolbox SuperTool",
    "url": "https://mxtoolbox.com/SuperTool.aspx",
    "tipo": "Plataforma de Diagnóstico de Redes e Análise de Infraestrutura DNS",
    "utilidade": "Consulta e auditoria técnica de registros DNS, servidores de correio eletrônico e reputação de rede.",
    "descricao": "O MXToolbox SuperTool é uma plataforma web centralizada projetada para realizar diagnósticos rápidos e auditorias de infraestrutura de rede. A ferramenta executa dezenas de testes automatizados a partir de um domínio ou endereço IP, permitindo inspecionar registros DNS (como MX, A, TXT, CNAME), validar políticas de segurança de e-mail (SPF, DKIM, DMARC), auditar a configuração de servidores SMTP e verificar a presença de IPs em mais de uma centena de listas negras (blacklists) globais.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Fundamental para o reconhecimento passivo de infraestruturas tecnológicas (CYBINT). A ferramenta permite mapear a arquitetura de servidores de e-mail de um alvo, identificar prestadores de serviços terceirizados (através de registros SPF/TXT) e auditar o histórico de reputação de IPs e domínios sem interagir diretamente com a infraestrutura do investigado.",
    "notes": "* **Vantagem de OPSEC**: As consultas realizadas no SuperTool são estritamente passivas em relação ao alvo primário. A plataforma interage apenas com servidores DNS públicos e indexadores de reputação, garantindo que a infraestrutura do alvo não registre telemetria ou alertas sobre a investigação.\n* **Pivoting via SPF/TXT**: O exame detalhado de registros SPF frequentemente revela endereços IP adicionais, blocos de sub-redes e serviços de terceiros (como plataformas de marketing ou CRMs) autorizados a enviar e-mails em nome do domínio, expandindo a superfície de análise da investigação.\n* **Limitações da Conta**: A interface web gratuita permite consultas manuais ilimitadas, mas a automação via API ou o monitoramento em tempo real de alterações em registros de rede exigem a contratação de planos comerciais."
  },
  {
    "id": "MyHeritage",
    "title": "MyHeritage",
    "url": "https://www.myheritage.com/",
    "tipo": "Plataforma de Genealogia e Pesquisa de Registros Históricos",
    "utilidade": "Mapeamento de vínculos familiares, árvores genealógicas e exploração de registros civis e biográficos.",
    "descricao": "O MyHeritage é um serviço voltado para a história familiar e pesquisa genealógica. A plataforma hospeda bilhões de registros históricos mundiais — incluindo censos populacionais, certidões de nascimento, casamento, óbito, registros de imigração e diretórios públicos —, além de permitir a construção de árvores genealógicas colaborativas e o cruzamento de dados para a identificação de parentescos e linhagens biológicas.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Utilizada na fase de profiling de indivíduos e inteligência baseada em fontes humanas/sociais (SOCMINT). A ferramenta viabiliza o mapeamento completo do círculo familiar de um alvo, ajudando a identificar nomes de parentes, cônjuges, antepassados e conexões biográficas valiosas para o desenvolvimento de linhas de investigação ou validação de identidades.",
    "notes": "* **Políticas de Privacidade**: Por padrão, informações sobre pessoas vivas cadastradas em árvores genealógicas públicas são ocultadas automaticamente pela plataforma para usuários externos. Contudo, dados de familiares falecidos e as conexões macro da estrutura da árvore permanecem visíveis e indexados.\n* **Barreira de Acesso (Paywall)**: Embora a criação inicial de árvores pequenas seja gratuita, o acesso detalhado a registros históricos digitalizados, jornais antigos e a funcionalidade avançada de correspondência automática (*Smart Matches*) exigem planos de assinatura comercial."
  },
  {
    "id": "MyHeritage Deep Nostalgia",
    "title": "MyHeritage Deep Nostalgia",
    "url": "https://www.myheritage.es/deep-nostalgia/",
    "tipo": "Ferramenta de Processamento de Imagem por IA (Deep Learning)",
    "utilidade": "Animação assistida por inteligência artificial de fotografias estáticas para análise de fisionomia e criação de identidades sintéticas.",
    "descricao": "O Deep Nostalgia é um recurso baseado em web e inteligência artificial desenvolvido pela MyHeritage, em parceria com a D-ID, que utiliza algoritmos de aprendizado profundo (*deep learning*) para animar rostos em fotografias estáticas. A ferramenta aplica mapeamentos de vídeo predefinidos (compostos por movimentos humanos reais de olhos, boca, sobrancelhas e cabeça) sobre uma imagem bidimensional, gerando um fragmento de vídeo realista com alta fidelidade de movimentos.",
    "testada": false,
    "tags": [
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado",
      "opsec/personas"
    ],
    "utilidade_Osint": "No âmbito acadêmico e investigativo de OSINT, a ferramenta possui aplicação em duas frentes distintas: no processamento passivo de evidências e na segurança operacional (OPSEC). Primeiramente, permite a análise tridimensional dinâmica e o estudo fisionômico de um alvo a partir de uma única imagem estática antiga ou de baixa qualidade, auxiliando na percepção de traços anatômicos que mudam sob diferentes ângulos de inclinação. Secundariamente, atua no desenvolvimento avançado de engenharia social tática.",
    "notes": "* Os vídeos resultantes são exportados no formato MP4 e contêm movimentos faciais suaves que podem ajudar analistas de inteligência a identificar deformidades, cicatrizes ou traços ósseos específicos que passariam despercebidos em uma imagem puramente estática.\n* Para fins de contra-inteligência e detecção de deepfakes, a análise dos metadados e dos artefatos visuais gerados pela ferramenta (pequenas distorções nas bordas do cabelo ou orelhas) serve como material de estudo para a validação da autenticidade de mídias digitais em exames forenses."
  },
  {
    "id": "NCSC - Operations Security (OPSEC)",
    "title": "NCSC - Operations Security (OPSEC)",
    "url": "https://www.dni.gov/index.php/ncsc-operations-security",
    "tipo": "Framework Metodológico, Diretrizes de Segurança e Base de Conhecimento Governamental",
    "utilidade": "Doutrinação, planejamento estratégico e implementação de contramedidas para a proteção de informações críticas e mitigação de riscos operacionais.",
    "descricao": "O NCSC (National Counterintelligence and Security Center) provê a infraestrutura doutrinária e o guia metodológico oficial para o Programa Nacional de OPSEC. O framework estabelece o processo analítico clássico de cinco etapas projetado para identificar e proteger informações não sigilosas, mas criticamente sensíveis, que poderiam ser exploradas por adversários para prever, comprometer ou anular atividades governamentais, corporativas ou investigativas.",
    "testada": false,
    "tags": [
      "fonte/registros-publicos-gov",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "Atua de forma estritamente defensiva na camada de Segurança das Operações (OPSEC) e gerenciamento de riscos. O framework fornece a base conceitual para que o analista desenhe protocolos de proteção de sua própria identidade, infraestrutura e objetivos de coleta, mitigando ameaças de contra-inteligência e detecção por parte do alvo.",
    "notes": "* **O Processo de 5 Etapas**: A metodologia orienta o investigador a seguir sequencialmente a identificação de informações críticas, análise de ameaças, análise de vulnerabilidades, avaliação de riscos e a aplicação de contramedidas eficazes antes de iniciar qualquer coleta ativa na internet.\n* **Aplicação em OSINT**: Serve como o padrão ouro conceitual para a criação de Manuais de Procedimentos Padrão (SOPs) em células de inteligência, ajudando a discernir quais indicadores técnicos (como IPs da infraestrutura, horários de pesquisa e perfis de inserção) podem denunciar o foco da investigação caso sejam correlacionados pelo alvo.\n* **Foco Preventivo**: Por ser uma diretriz puramente metodológica e conceitual baseada em documentos públicos, o recurso não realiza buscas automáticas na rede, funcionando como um guia de governança e blindagem operacional."
  },
  {
    "id": "Netcraft Site Report",
    "title": "Netcraft Site Report",
    "url": "https://sitereport.netcraft.com/",
    "tipo": "Plataforma de Auditoria de Infraestrutura Web e Análise de Reputação",
    "utilidade": "Coleta passiva de dados de infraestrutura, histórico de hospedagem, certificados SSL/TLS e tecnologias de servidores de domínios web.",
    "descricao": "O Netcraft Site Report é um serviço baseado na web que compila relatórios abrangentes sobre a infraestrutura técnica e o histórico de qualquer site da internet. A ferramenta reúne dados sobre a rede de hospedagem (incluindo endereços IP, blocos CIDR e Sistemas Autônomos - ASN), histórico detalhado de alterações de provedores, emissão de certificados SSL/TLS, além de identificar o servidor web subjacente, sistema operacional estimado e tecnologias ativas no site analisado.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Indispensável para o reconhecimento passivo de infraestruturas tecnológicas (CYBINT) e análise forense de domínios. A ferramenta permite reconstruir a linha do tempo de hospedagem de um alvo, mapear provedores e analisar certificados de segurança para correlacionar diferentes domínios à mesma infraestrutura organizacional sem gerar interações com o servidor final.",
    "notes": "* **Vantagem de OPSEC**: Como as consultas são feitas diretamente contra a base de dados histórica da própria Netcraft, o servidor do alvo investigado não registra nenhuma atividade ou telemetria, mantendo a busca 100% passiva.\n* **Pivoting por Certificados**: O histórico de certificados digitais (incluindo o campo *Subject Alternative Name* - SAN) frequentemente revela subdomínios internos ocultos ou outros domínios registrados pelo mesmo proprietário, expandindo o escopo do reconhecimento.\n* **Histórico de Redes**: A linha do tempo de delegação de blocos de IP e alteração de *hosting providers* ajuda a identificar quando um site mudou de administração ou migrou para serviços de proteção contra DDoS (como Cloudflare), permitindo descobrir a infraestrutura real e anterior do alvo."
  },
  {
    "id": "Netlas.io",
    "title": "Netlas.io",
    "url": "https://app.netlas.io",
    "tipo": "Plataforma de Inteligência de Internet e Reconhecimento Técnico (Cyber Intelligence)",
    "utilidade": "Mapeamento de infraestrutura de rede, coleta de dados técnicos de domínios, IPs e certificados SSL/TLS",
    "descricao": "O Netlas.io é uma plataforma global de inteligência de internet que realiza varreduras contínuas na rede para catalogar e indexar dispositivos conectados, sites, certificados SSL/TLS, registros de DNS e WHOIS. Funcionando de forma análoga a motores de busca como Shodan e Censys, ele permite pesquisar e analisar detalhadamente a infraestrutura técnica exposta publicamente na internet.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações técnicas e inteligência cibernética (CYBINT), o Netlas.io é uma ferramenta indispensável para mapear a superfície de ataque ou a presença digital de uma organização ou indivíduo. Ele viabiliza o cruzamento de metadados técnicos para descobrir servidores ocultos, subdomínios esquecidos, serviços vulneráveis e propriedades digitais correlacionadas por meio de certificados compartilhados.",
    "notes": "* Excelente para conduzir investigações passivas, permitindo analisar a infraestrutura técnica de um alvo sem gerar tráfego direto contra os servidores dele, mitigando o risco de detecção por contra-inteligência.\n* A plataforma dispõe de uma sintaxe de busca avançada baseada em campos técnicos específicos (como objetos de certificados ou strings em respostas HTTP), ideal para rastrear servidores de comando e controle (C2) ou identificar tecnologias específicas adotadas por uma empresa."
  },
  {
    "id": "NewOCR",
    "title": "NewOCR",
    "url": "https://www.newocr.com/",
    "tipo": "Serviço Online de Reconhecimento Óptico de Caracteres (OCR)",
    "utilidade": "Extração automatizada de texto e caracteres (OCR) a partir de imagens digitalizadas, fotos e documentos estáticos",
    "descricao": "O NewOCR é um serviço online gratuito de Reconhecimento Óptico de Caracteres (*Optical Character Recognition* - OCR) baseado no motor Tesseract OCR. A plataforma permite carregar arquivos de imagem em múltiplos formatos (JPEG, PNG, GIF, BMP, TIFF) e documentos (PDF, DjVu), processando e convertendo elementos visuais textuais em arquivos de texto editáveis (TXT, DOC, PDF), com suporte a mais de 120 idiomas e ferramentas de seleção de área e rotação de imagem.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de inteligência de fontes abertas, o NewOCR é empregado na fase de análise e processamento de evidências brutas previamente coletadas. O analista pode utilizá-lo para extrair dados estruturados ou semiestruturados — tais como nomes, CPFs, números de processos, placas de veículos, registros corporativos ou metadados textuais — contidos em capturas de tela, documentos digitalizados, relatórios em formato PDF e imagens de mídias sociais, viabilizando buscas posteriores por palavras-chave e operações de cruzamento de dados.",
    "notes": "* A ferramenta permite selecionar uma região específica da imagem (*crop tool*) antes do processamento, o que otimiza a precisão do OCR ao isolar apenas o bloco de texto relevante (ex: um cabeçalho ou tabela) e descartar ruídos de fundo.\n* Por operar em infraestrutura web de terceiros, o envio de documentos confidenciais ou imagens com dados pessoais sensíveis deve ser avaliado sob a ótica de OPSEC e custódia da informação."
  },
  {
    "id": "NirSoft",
    "title": "NirSoft",
    "url": "https://www.nirsoft.net/",
    "tipo": "utilitario-forense",
    "utilidade": "Recuperação de senhas locais, diagnóstico de rede e gerenciamento de sistemas.",
    "descricao": "A NirSoft é uma coleção de utilitários de sistema independentes, compactos e gratuitos desenvolvidos para sistemas operacionais Windows. O site fornece ferramentas voltadas para a recuperação de senhas armazenadas localmente em navegadores e clientes de e-mail, monitoramento de tráfego de rede e gerenciamento avançado de artefatos do sistema operacional.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "As ferramentas da NirSoft são essenciais na fase de forense digital e análise de artefatos locais durante uma investigação, permitindo extrair credenciais e dados históricos diretamente de dispositivos alvos ou de imagens de disco coletadas.\n\n* **`alvo/usuario-email`**: Os utilitários integrados permitem extrair e recuperar credenciais de login, senhas salvas em navegadores web e configurações de contas de e-mail armazenadas localmente no sistema, facilitando o mapeamento de perfis digitais e contas vinculadas ao investigado.\n* **`func/forense-local`**: Enquadra-se estritamente nesta categoria de análise estática, pois seus executáveis analisam arquivos brutos, chaves de registro, cache de navegadores e dados locais do próprio computador, operando de forma offline sem realizar buscas ativas ou indexações na internet.\n* **`plataforma/desktop`**: Consiste em uma suíte de softwares instaláveis ou executáveis portáveis projetados especificamente para rodar localmente no ambiente Windows.\n* **`acesso/gratuito`**: Todo o catálogo de ferramentas disponibilizado no site é inteiramente de código fechado, porém distribuído como *freeware*, de livre acesso público e sem restrições ou custos financeiros.",
    "notes": "* Devido à capacidade de extração de credenciais e senhas locais, muitos dos utilitários da NirSoft são frequentemente sinalizados por softwares antivírus e Windows Defender como falsos positivos (HackTools ou PUPs). É necessário configurar exclusões no antivírus do ambiente de análise para executá-los adequadamente."
  },
  {
    "id": "NordVPN",
    "title": "NordVPN",
    "url": "https://nordvpn.com/",
    "tipo": "Serviço de Rede Privada Virtual (VPN) / Ferramenta de Anonimização e OPSEC",
    "utilidade": "Mascaramento de endereço IP, criptografia de tráfego de rede e proteção da identidade técnica do investigador.",
    "descricao": "A NordVPN é um serviço comercial de Rede Privada Virtual (VPN) que estabelece um túnel criptografado seguro entre o dispositivo do usuário e a internet. Sediada no Panamá (fora da jurisdição das alianças de compartilhamento de inteligência de 5/9/14 Olhos), a plataforma oculta o endereço IP real do usuário, substitui-o por um IP de servidor compartilhado e criptografa todo o tráfego de rede com protocolos avançados como NordLynx (baseado em WireGuard) e OpenVPN.",
    "testada": false,
    "tags": [
      "plataforma/desktop",
      "plataforma/mobile",
      "acesso/pago",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, a NordVPN atua como uma camada crítica de defesa ativa e segurança operacional (OPSEC). Ela impede que administradores de sites-alvo, fóruns, ou plataformas monitoradas identifiquem a real localização geográfica ou a infraestrutura corporativa/institucional do investigador por meio de logs de conexão e rastreamento de endereço IP.",
    "notes": "* Oferece recursos avançados voltados para segurança, como o *Kill Switch* (que interrompe o tráfego de internet imediatamente se a conexão com a VPN falhar, evitando vazamentos do IP real) e servidores ofuscados (projetados para contornar bloqueios em redes restritivas).\n* Para uma OPSEC otimizada em investigações sensíveis, recomenda-se sua execução diretamente no roteador, no sistema hospedeiro da máquina de investigação, ou combinada com navegação em modo privado, mitigando pegadas digitais cruzadas."
  },
  {
    "id": "NoxPlayer (BigNox)",
    "title": "NoxPlayer (BigNox)",
    "url": "https://www.bignox.com",
    "tipo": "Software de Emulação de Dispositivos Móveis / Ferramenta de OPSEC e Coleta Mobile",
    "utilidade": "Emulação do sistema operacional Android para execução isolada de aplicativos mobile, investigação em redes sociais e gerenciamento de contas de cobertura.",
    "descricao": "O NoxPlayer, desenvolvido pela BigNox, é um software proprietário de emulação do sistema operacional Android projetado para execução em computadores desktop. Ele permite a criação de múltiplas instâncias simultâneas de dispositivos móveis virtuais em um único computador, oferecendo suporte a diferentes versões do Android, manipulação de coordenadas de localização e simulação de configurações de hardware específicas.",
    "testada": false,
    "tags": [
      "plataforma/desktop",
      "acesso/gratuito",
      "opsec/ambiente-seguro",
      "opsec/personas"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, o NoxPlayer é utilizado para estender o escopo da pesquisa para o ecossistema móvel (Mobile OSINT). Ele viabiliza a instalação, a execução e a análise de aplicativos de redes sociais, plataformas de mensageria privada (como WhatsApp e Telegram) e ferramentas baseadas em geolocalização. O emulador atua como um ambiente controlado, impedindo que os aplicativos tenham acesso aos dados e identificadores reais do dispositivo físico do analista.",
    "notes": "* Por não realizar busca ativa direta na rede de forma autônoma (sendo apenas a plataforma onde os aplicativos de terceiros rodam), a categoria `func/` foi omitida conforme as restrições de processamento local estabelecidas.\n* Recomenda-se desativar recursos de publicidade integrados ao emulador e configurar conexões de proxy ou ferramentas de VPN na máquina hospedeira para garantir que o tráfego gerado de dentro das instâncias do Android não exponha o IP de origem do analista."
  },
  {
    "id": "nslookup.io",
    "title": "nslookup.io",
    "url": "https://www.nslookup.io/",
    "tipo": "Plataforma Web de Inspeção de DNS e Infraestrutura",
    "utilidade": "Consulta e mapeamento de registros de DNS, servidores de e-mail e propriedades de infraestrutura web.",
    "descricao": "O nslookup.io é uma ferramenta baseada na web projetada para realizar consultas de DNS (Domain Name System) de forma limpa e detalhada. A plataforma atua enviando requisições a servidores de nomes para obter registros específicos associados a um determinado nome de domínio, como registros A, AAAA, MX, TXT, NS, CNAME e SOA, exibindo adicionalmente informações sobre os resolvedores e a geolocalização IP correspondente.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo do Cyber Intelligence (CYBINT) e da investigação de ativos digitais, o nslookup.io permite mapear a infraestrutura técnica de rede associada a um alvo ou organização. Por meio das consultas automatizadas de registros MX, é possível identificar os servidores de e-mail utilizados (revelando se usam soluções como Google Workspace ou Microsoft 365); através de registros TXT, é possível descobrir strings de verificação que vinculam o domínio a outras propriedades web; e a partir dos registros A/AAAA, mapeiam-se os endereços IP para posterior rastreamento de ASN e provedores de hospedagem.",
    "notes": "* A ferramenta oferece um recurso útil para investigações que é a possibilidade de escolher qual servidor de DNS público (Google, Cloudflare, OpenDNS) responderá à consulta, ajudando a identificar propagações de DNS específicas ou respostas regionalizadas.\n* Por realizar as requisições a partir de seus próprios servidores na nuvem, o nslookup.io impede que o endereço IP real do analista seja registrado nos logs dos servidores de nomes autoritativos do domínio sob investigação no momento da pesquisa."
  },
  {
    "id": "NumLookup Reverse Image Search",
    "title": "NumLookup Reverse Image Search",
    "url": "https://www.numlookup.com/reverse-image-search?utm_source=chatgpt.com",
    "tipo": "Motor de Busca Reversa de Imagens / IMINT",
    "utilidade": "Busca reversa de imagens, reconhecimento visual e identificação de pessoas ou objetos na web",
    "descricao": "O NumLookup Reverse Image Search é uma ferramenta online de busca reversa de imagens e inteligência visual (IMINT). Utilizando visão computacional e algoritmos de aprendizado profundo (*deep learning*), a plataforma analisa padrões visuais, faces, formas e texturas em arquivos enviados ou URLs, comparando-os com uma base massiva de bilhões de imagens indexadas na internet para encontrar correspondências idênticas, versões modificadas ou conteúdos contextualmente correlacionados.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/busca-identificacao",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, a ferramenta desempenha papel essencial na verificação da autenticidade e proveniência de mídias digitais. Ela possibilita identificar a primeira ocorrência pública de uma imagem, desarticular perfis falsos (*sock puppets* ou golpes de *catfishing*), rastrear a presença visual de alvos humanos em múltiplos serviços web e validar o contexto real de fotografias submetidas a análises de verificação de fatos.",
    "notes": "* Os algoritmos são capazes de reconhecer imagens mesmo após operações de redimensionamento, recorte ou alterações leves de saturação e contraste.\n* Recomendado como vetor de busca complementar a outros motores de indexação visual (como Google Lens, Yandex Visual Search e Bing Visual Search) para mitigar eventuais pontos cegos na coleta de dados."
  },
  {
    "id": "Nuwber",
    "title": "Nuwber",
    "url": "https://www.nuwber.com/",
    "tipo": "Motor de Busca de Pessoas / Agregador de Registros Públicos",
    "utilidade": "Consulta de registros públicos, dados biográficos e contato de indivíduos nos Estados Unidos (People Search)",
    "descricao": "O Nuwber é um serviço de busca de pessoas (*people search engine*) focado primordialmente em residentes nos Estados Unidos. A plataforma agrega, correlaciona e indexa dados de múltiplas fontes públicas e registros governamentais, permitindo consultas a partir do nome completo, número de telefone, endereço físico ou e-mail de um indivíduo para consolidar perfis com histórico de endereços, parentes, associados conhecidos e detalhes de contato.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/telefone",
      "alvo/usuario-email",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas e diligências de *profiling*, o Nuwber atua como um poderoso motor de *pivoting* e validação de identidade civil. Ele acelera a correlação de um identificador inicial (como um número de telefone ou nome comum) com endereços físicos, faixa etária, registros de propriedades e possíveis vínculos familiares de um alvo, fornecendo novos vetores de aprofundamento investigativo.",
    "notes": "* A base de dados é estritamente voltada a indivíduos com histórico de residência ou registros civis nos Estados Unidos.\n* Extremamente eficiente na identificação de \"Parentes Conhecidos\" (*Possible Relatives*) e \"Associados\", o que auxilia no mapeamento de redes relacionais e no contorno de alvos com nomes muito comuns (*homônimos*)."
  },
  {
    "id": "OffSec Tools - OSINT Tag",
    "title": "OffSec Tools - OSINT Tag",
    "url": "https://offsec.tools/tag/osint",
    "tipo": "Diretório e Repositório de Ferramentas",
    "utilidade": "Catálogo curado de ferramentas de segurança ofensiva e inteligência de fontes abertas (OSINT) para profissionais de cibersegurança e investigadores.",
    "descricao": "O OffSec Tools é um repositório e diretório colaborativo focado em catalogar ferramentas de segurança da informação, testes de intrusão e cibersegurança. A seção filtrada pela tag `osint` reúne uma coleção de softwares, scripts, frameworks e utilitários voltados especificamente para a coleta, processamento e análise de dados de fontes abertas na internet.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "func/agregador",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Para investigadores e analistas de inteligência, a plataforma funciona como um excelente ponto de partida para descoberta de novos utilitários técnicos. Ela poupa o tempo de busca manual por scripts em repositórios como o GitHub, centralizando ferramentas que realizam desde varreduras de infraestrutura e dorks até rastreamento de usuários e redes sociais.",
    "notes": "* A plataforma funciona como um indexador; ao escolher uma ferramenta, o usuário é geralmente redirecionado para o repositório original do desenvolvedor (na maioria das vezes hospedado no GitHub).\n* É uma fonte dinâmica que ajuda a manter o arsenal do investigador atualizado com scripts modernos que surgem na comunidade de segurança ofensiva."
  },
  {
    "id": "Oh Shint It's A Blog",
    "title": "Oh Shint It's A Blog",
    "url": "https://ohshint.gitbook.io/oh-shint-its-a-blog/",
    "tipo": "Wiki / Repositório de Conhecimento e Links Curados",
    "utilidade": "Guia de aprendizado, repositório de recursos, metodologias de investigação e links úteis para praticantes de OSINT.",
    "descricao": "O *Oh Shint It's A Blog* (hospedado no GitBook) é um repositório centralizado de conhecimento voltado para a comunidade de Inteligência de Fontes Abertas (OSINT). A plataforma funciona como uma enciclopédia prática e um guia de links curados, oferecendo listas estruturadas de ferramentas, metodologias passo a passo para investigações digitais, dicas de OPSEC (Segurança de Operações) e recursos para rastreamento de diversas entidades na internet.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "func/agregador",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Para investigadores, analistas de ameaças e estudantes de inteligência, o portal serve como um excelente agregador de ferramentas e um guia de referência rápida. Ele organiza centenas de recursos externos por categorias funcionais (como buscas por e-mail, nomes de usuário, redes sociais, geolocalização e imagens), auxiliando o profissional a estruturar seu fluxo de coleta e a descobrir novas técnicas de pivô (*pivoting*).",
    "notes": "* Por ser construído em formato de documentação wiki (GitBook), o site possui uma barra de pesquisa interna eficiente que permite localizar termos específicos ou categorias de ferramentas rapidamente.\n* Além de listar ferramentas, o espaço dedica seções importantes para a mentalidade investigativa e a preservação da segurança do próprio analista durante as operações de busca."
  },
  {
    "id": "One Million Tweet Map",
    "title": "One Million Tweet Map",
    "url": "https://onemilliontweetmap.com",
    "tipo": "Plataforma de Visualização e Inteligência Geoespacial em Redes Sociais",
    "utilidade": "Geolocalização de postagens e monitoramento em tempo real de palavras-chave, hashtags e tendências geográficas no Twitter/X.",
    "descricao": "O One Million Tweet Map é uma ferramenta de mapeamento geográfico que plota e renderiza, em tempo real, postagens geolocalizadas da plataforma Twitter/X. O mapa utiliza o motor Maptimize para processar grandes volumes de dados geográficos dinâmicos, exibindo aglomerados (*clusters*) ou mapas de calor (*heatmaps*) das mensagens geradas globalmente nas últimas 24 horas.",
    "testada": false,
    "tags": [
      "fonte/redes-sociais",
      "fonte/geoespacial",
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações em redes sociais (SOCMINT) e inteligência geoespacial (GEOINT), o mapa serve como uma ferramenta analítica fundamental para o monitoramento de situações de crise, cobertura de protestos, rastreamento de incidentes locais e consciência situacional. A plataforma permite filtrar os tweets por palavras-chave específicas e hashtags ao mesmo tempo que delimita a janela temporal de busca, facilitando a identificação exata do local e do contexto de onde uma informação crítica emergiu.",
    "notes": "* A ferramenta trabalha sob o limite do fluxo de transmissão geoespacial do próprio Twitter/X, adicionando novos posts enquanto expira os mais antigos para manter uma amostragem contínua e veloz de dados recentes.\n* Os analistas podem utilizar a barra de zoom para aproximar a visualização até o nível de bairros ou ruas e clicar em marcadores individuais para extrair o texto exato do tweet gerado naquela posição geográfica."
  },
  {
    "id": "OnionLand Search Engine",
    "title": "OnionLand Search Engine",
    "url": "https://onionlandsearchengine.net/",
    "tipo": "Motor de Busca da Dark Web / Rastreador de Serviços Ocultos",
    "utilidade": "Pesquisa, indexação e mapeamento de sites, fóruns, mercados e vazamentos hospedados na Dark Web (redes Tor e I2P) e na Clearnet.",
    "descricao": "O OnionLand Search Engine é um motor de busca especializado na varredura e indexação de conteúdos dentro da Dark Web, cobrindo de forma simultânea as redes ocultas Tor (`.onion`) e I2P, além de correlacionar resultados com a internet convencional (Clearnet). A plataforma atua de maneira semelhante aos buscadores convencionais, mas foca em extrair e catalogar dados textuais de fóruns anônimos, mercados clandestinos, diretórios e repositórios não indexados pelo Google.",
    "testada": false,
    "tags": [
      "fonte/vazamentos-darkweb",
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No universo de investigações digitais, Cyber Threat Intelligence (CTI) e análise de ameaças, o OnionLand funciona como uma ferramenta de busca ampla para descobrir a exposição de ativos fora da internet superficial. Ele permite mapear menções a marcas, e-mails de alvos corporativos, credenciais vazadas e discussões de agentes maliciosos em ecossistemas anônimos sem a necessidade de navegar ativamente ou expor a infraestrutura do analista diretamente na rede Tor.",
    "notes": "* Os resultados que pertencem à rede Tor (`.onion`) exigem que o analista utilize um navegador apropriado (como o Tor Browser) ou uma proxy/VPN configurada para conseguir abrir os links finais encontrados.\n* Devido à natureza volátil e à alta incidência de fraudes na Dark Web, os resultados devem ser analisados com ceticismo técnico, sendo recomendável verificar a reputação e a integridade dos endereços listados antes de qualquer interação direta."
  },
  {
    "id": "OnlineSIM",
    "title": "OnlineSIM",
    "url": "https://onlinesim.io/",
    "tipo": "Provedor de Serviços de Telecomunicação Virtual (VoIP / SMS Virtual)",
    "utilidade": "Fornecimento de números de telefone virtuais temporários e descartáveis para recebimento de SMS e autenticação de contas de cobertura.",
    "descricao": "O OnlineSIM é um serviço focado no fornecimento de números de telefone virtuais temporários (VoIP) e chips virtuais de diversos países. A ferramenta permite a recepção de mensagens de texto (SMS) de forma automatizada através de sua interface web ou API, servindo primordialmente para contornar mecanismos de autenticação de dois fatores (2FA) e validação de registros em serviços digitais.",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "opsec/personas",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, inteligência cibernética e operações de cobertura, o OnlineSIM é um recurso essencial para a preservação do anonimato do investigador e estruturação de insumos operacionais.",
    "notes": ""
  },
  {
    "id": "Onodo",
    "title": "Onodo",
    "url": "https://onodo.org/",
    "tipo": "Plataforma Web de Análise e Visualização de Redes",
    "utilidade": "Mapeamento de relacionamentos, análise de vínculos e visualização gráfica de redes de entidades (SNA)",
    "descricao": "O Onodo é uma ferramenta baseada na web projetada para a criação, análise e visualização de redes e grafos complexos (Social Network Analysis - SNA). A plataforma permite mapear interações, conexões e fluxos de informações entre nós (entidades) e arestas (vínculos), facilitando a compreensão de estruturas relacionais complexas por meio de representações dinâmicas e interativas.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, o Onodo serve como um ambiente centralizador para organizar e estruturar os dados previamente coletados, transformando informações dispersas em diagramas de inteligência visual para a identificação de padrões ocultos e redes de influência.",
    "notes": "* Ideal para a fase de análise do ciclo de inteligência, permitindo documentar o organograma de grupos investigados, fluxos financeiros e vínculos societários complexos de maneira intuitiva.\n* Por se tratar de uma plataforma web de terceiros, o analista deve ter cautela com a OPSEC e a confidencialidade dos dados inseridos, evitando incluir dados estritamente sensíveis ou identificáveis em projetos configurados como públicos."
  },
  {
    "id": "Open-i",
    "title": "Open-i",
    "url": "https://openi.nlm.nih.gov/",
    "tipo": "Motor de Busca e Repositório de Mídia Científica / Acervo Digital",
    "utilidade": "Pesquisa, recuperação e análise de imagens biomédicas, radiografias e ilustrações científicas indexadas em artigos acadêmicos abertos",
    "descricao": "O Open-i é um serviço de busca e recuperação de imagens biomédicas desenvolvido pela National Library of Medicine (NLM), vinculada ao National Institutes of Health (NIH) dos Estados Unidos. A ferramenta provê acesso indexado a milhões de imagens, ilustrações clínicas, fotografias médicas, gráficos e radiografias provenientes de artigos científicos de acesso aberto do PubMed Central (PMC), associando cada imagem ao seu resumo e contexto textual original.",
    "testada": false,
    "tags": [
      "fonte/arquivos-noticias",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, o Open-i serve como uma fonte qualificada para verificação de mídias científicas, checagem de fatos (*fact-checking*) e inteligência médica/biológica. A plataforma permite localizar a proveniência original de ilustrações e radiografias frequentemente reaproveitadas em campanhas de desinformação médica, alegações fraudulentas sobre tratamentos ou publicações descontextualizadas em redes sociais, possibilitando rastrear os autores, a data de publicação e o periódico científico primário.",
    "notes": "* A busca estruturada permite filtrar por tipo de imagem (fotografias clínicas, raios-X, tomografias, gráficos) e por termos MeSH (Medical Subject Headings), aumentando a precisão da pesquisa.\n* Todas as mídias recuperadas trazem o vínculo direto com a identificação do PMC/PubMed (PMID/PMCID), viabilizando o cruzamento imediato com o artigo completo e com o histórico dos autores envolvidos."
  },
  {
    "id": "OpenAI Labs (DALL-E)",
    "title": "OpenAI Labs (DALL-E)",
    "url": "https://labs.openai.com/",
    "tipo": "Plataforma Web de Processamento e Geração de Mídia Baseada em IA",
    "utilidade": "Geração, expansão e modificação de imagens por meio de inteligência artificial (DALL-E) para análise contextual e reconstituição visual",
    "descricao": "O OpenAI Labs é a interface de laboratório e plataforma web da OpenAI que hospeda os modelos DALL-E. A ferramenta é projetada para a criação e edição de imagens realistas ou artísticas a partir de descrições textuais em linguagem natural (prompts), oferecendo também recursos como *inpainting* (modificação de partes internas de uma imagem) e *outpainting* (expansão das bordas de uma imagem existente).",
    "testada": false,
    "tags": [
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações e inteligência baseada em fontes abertas, a plataforma é empregada em análises de contexto e reconstituição visual. Ela auxilia o analista no processamento de informações visuais fragmentadas, permitindo expandir cenários estáticos por IA para avaliar hipóteses geográficas, gerar representações realistas de locais de difícil acesso com base em relatos textuais, ou estruturar elementos visuais complexos que auxiliam na cognição e no entendimento de um caso.",
    "notes": "* Altamente eficaz para apoiar briefings de inteligência, ilustrando cenários operacionais complexos descritos apenas em relatórios textuais ou expandindo imagens cortadas para testes de perspectiva.\n* Pela perspectiva de contra-inteligência e OPSEC, o analista deve estar ciente de que quaisquer dados ou imagens inseridos no sistema são processados pelos servidores da OpenAI e podem ser utilizados para o treinamento de modelos, sendo contraindicado o envio de imagens reais com metadados sensíveis ou rostos de alvos e investigadores."
  },
  {
    "id": "OpenCorporates",
    "title": "OpenCorporates",
    "url": "https://opencorporates.com/",
    "tipo": "Base de Dados Aberta e Plataforma de Inteligência Corporativa Global",
    "utilidade": "Consulta global, levantamento de registros comerciais e mapeamento societário internacional de empresas e diretores",
    "descricao": "O OpenCorporates é a maior base de dados aberta sobre o ecossistema corporativo mundial, indexando e padronizando informações de centenas de milhões de empresas e administradores em mais de 140 jurisdições. A plataforma coleta dados diretamente dos registros públicos oficiais de governos (juntas comerciais, casas de registros e secretarias de estado), consolidando informações como identificadores corporativos, status operacional, data de incorporação, endereços de registro, estrutura societária e cargos diretivos (diretores, administradores e secretários corporativos).",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações transnacionais, combate à lavagem de dinheiro (AML), Due Diligence e inteligência financeira (FinINT), a ferramenta funciona como o principal motor de busca global de registros empresariais. Ela viabiliza a correlação de empresas de fachada offshore com entidades locais, permite rastrear redes societárias e participações cruzadas em diversas jurisdições a partir do nome de diretores ou executivos, e simplifica o processo de *pivoting* para identificar subsidiárias e controladoras sem a necessidade de navegar individualmente por múltiplos registros públicos internacionais.",
    "notes": "* Excelente ponto de partida para identificar estruturas em jurisdições de sigilo e paraísos fiscais que disponibilizam dados de diretoria de maneira pública (como Reino Unido, Delaware/EUA, Panamá, entre outros).\n* Ao realizar investigações baseadas em nomes de executivos, é recomendável cruzar as grafias e dados complementares (como endereços ou datas de nomeação) para evitar homônimos decorrentes do volume massivo da base global.\n* A plataforma preserva registros de empresas inativas ou dissolvidas, servindo como registro histórico para mapear o passado corporativo de alvos de interesse."
  },
  {
    "id": "OpenCTI (Open Cyber Threat Intelligence)",
    "title": "OpenCTI (Open Cyber Threat Intelligence)",
    "url": "https://www.filigran.io/en/products/opencti/",
    "tipo": "Plataforma de Inteligência de Ameaças Cibernéticas (Open Source Threat Intelligence Platform - TIP)",
    "utilidade": "Gestão, processamento, estruturação e compartilhamento de Cyber Threat Intelligence (CTI) e mapeamento de ameaças",
    "descricao": "O OpenCTI é uma plataforma de código aberto projetada para gerenciar, estruturar e operacionalizar o conhecimento de inteligência de ameaças cibernéticas (Cyber Threat Intelligence - CTI). Desenvolvida originalmente em colaboração com a CERT-EU, a ferramenta unifica dados técnicos (como indicadores de comprometimento - IoCs, IPs, hashes) e dados táticos/estratégicos (como perfis de grupos de ameaças (APTs), táticas, técnicas e procedimentos (TTPs) do framework MITRE ATT&CK, campanhas e malwares) em um modelo de dados unificado baseado no padrão STIX2.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "plataforma/web",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito da inteligência cibernética (CYBINT) e investigações de ameaças estruturadas, o OpenCTI serve como um ecossistema centralizado para processar e analisar dados brutos coletados de fontes abertas (feeds de segurança, relatórios públicos, fóruns e repositórios de malware). A ferramenta correlaciona esses dados para gerar visualizações complexas e grafos de relacionamento de infraestruturas criminosas, auxiliando o analista a compreender o contexto, a autoria e os alvos de campanhas maliciosas.",
    "notes": "* Altamente recomendado para a criação de uma base de conhecimento corporativa ou acadêmica de longo prazo sobre ameaças digitais, permitindo importar feeds automatizados de OSINT (como os fornecidos pelo MISP, AlienVault OTX ou dezenas de outros conectores).\n* Devido à capacidade de execução e armazenamento local (on-premises), oferece excelente OPSEC para o processamento de investigações confidenciais, já que nenhum dado ou consulta do analista é enviado para infraestruturas de nuvem de terceiros."
  },
  {
    "id": "OpenFace",
    "title": "OpenFace",
    "url": "https://github.com/TadasBaltrusaitis/OpenFace",
    "tipo": "Framework Open-Source de Visão Computacional e Análise Biométrica Facial",
    "utilidade": "Mapeamento de marcos faciais, rastreamento de olhar, estimativa de pose de cabeça e análise de expressões.",
    "descricao": "O OpenFace é uma ferramenta de código aberto de referência para análise de comportamento facial baseada em visão computacional e aprendizado profundo. O software é capaz de processar imagens estáticas ou fluxos de vídeo locais para realizar a detecção de marcos faciais (facial landmarks) em 2D e 3D, estimar a pose e inclinação da cabeça, rastrear a direção do olhar (*gaze tracking*) e reconhecer Unidades de Ação (Action Units) do Sistema de Codificação da Ação Facial (FACS).",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/analise-midia-integridade",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Aplicada na análise forense avançada de mídias (IMINT) e checagem de identidade. A ferramenta permite destrinchar características biométricas dinâmicas de um alvo em vídeos ou fotos, auxiliando na verificação de autenticidade de mídias (detecção de inconsistências de movimentação), profiling comportamental e validação de traços físicos.",
    "notes": "* **Vantagem Absoluta de OPSEC**: Por ser um software de código aberto executado estritamente de forma local (*on-premises*), o analista pode processar vídeos e fotos altamente confidenciais ou sensíveis de alvos sem o risco de vazar dados biométricos para servidores de terceiros na nuvem.\n* **Requisitos de Hardware**: A execução fluida do framework em lotes massivos de mídias ou em vídeos de alta definição exige uma capacidade computacional robusta, preferencialmente utilizando aceleração por hardware (GPUs dedicadas) e bibliotecas de deep learning configuradas.\n* **Diferencial Analítico**: Ao contrário de ferramentas básicas de comparação 1:1, o OpenFace foca na microestrutura do movimento facial (FACS), permitindo identificar se uma expressão facial ou padrão de piscada em um vídeo suspeito de deepfake apresenta anomalias matemáticas em relação ao comportamento humano natural."
  },
  {
    "id": "OpenStreetMap (OSM)",
    "title": "OpenStreetMap (OSM)",
    "url": "https://www.openstreetmap.org",
    "tipo": "Plataforma Web de Dados Cartográficos e Geoespaciais",
    "utilidade": "Mapeamento colaborativo global, análise geoespacial e inteligência geográfica de código aberto (GEOINT)",
    "descricao": "O OpenStreetMap é um projeto colaborativo global que visa criar e fornecer dados geográficos e cartográficos livres e editáveis para todo o mundo. Diferente de provedores de mapas proprietários, a plataforma funciona como uma base de dados geoespaciais construída por voluntários, fornecendo detalhes minuciosos sobre ruas, construções, pontos de interesse (POIs), hidrografia, linhas de transporte e rotas.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito da inteligência geoespacial (GEOINT), o OpenStreetMap é uma ferramenta fundamental para a geolocalização e verificação de cenários. Ele permite que o analista examine rotas locais, identifique com precisão estabelecimentos ou estruturas específicas em um terreno e realize o cruzamento de referências visuais obtidas em redes sociais com coordenadas geográficas exatas. Por conter dados alimentados pela comunidade, frequentemente exibe detalhes minuciosos de infraestrutura que não constam em mapas comerciais tradicionais.",
    "notes": "* Extremamente útil para investigações de geolocalização por permitir a busca avançada via Overpass API (ou ferramentas como o Overpass Turbo), possibilitando que o investigador filtre o mapa por tags específicas (ex: \"encontre todas as torres de telefonia ou hidrantes em um raio de 500 metros\").\n* Oferece um nível superior de OPSEC para visualização de mapas quando comparado a plataformas comerciais de grandes corporações de tecnologia, já que não exige login para consultas básicas e possui políticas de privacidade focadas na comunidade, além de permitir o download do banco de dados vetorial para uso 100% offline em softwares de GIS (como o QGIS)."
  },
  {
    "id": "OSINT Dashboard (Start.me)",
    "title": "OSINT Dashboard (Start.me)",
    "url": "https://start.me/p/MER7on/osint",
    "tipo": "Repositório de Links / Dashboard de Recursos OSINT",
    "utilidade": "Agrupamento massivo e curadoria de ferramentas, frameworks e links para investigações de inteligência em fontes abertas (OSINT).",
    "descricao": "A página hospedada na plataforma Start.me é um painel visual personalizado que atua como um indexador abrangente de links e ferramentas para inteligência em fontes abertas (OSINT). O painel é estruturado em blocos e categorias temáticas, reunindo recursos voltados para a investigação de pessoas, e-mails, números de telefone, redes sociais, imagens, dados geoespaciais, registros governamentais e infraestruturas digitais.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "func/agregador",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No fluxo de trabalho de um analista de inteligência, este dashboard funciona como uma central de referência tática essencial durante as fases de planejamento e coleta de dados. Em vez de gerenciar centenas de marcadores individuais no navegador, o investigador utiliza o painel centralizado para localizar e acessar rapidamente motores de busca e ferramentas de terceiros hiperespecializadas de acordo com o tipo de alvo investigado.",
    "notes": "* Ideal para ser configurado como página inicial em navegadores instalados dentro de máquinas virtuais (VMs) de investigação, acelerando a fase de coleta passiva.\n* Como o painel depende estritamente da manutenção de links de terceiros, o analista deve monitorar de forma contínua a disponibilidade dos serviços mapeados, uma vez que ferramentas gratuitas na internet mudam de URL ou saem do ar com frequência."
  },
  {
    "id": "OSINT Dojo Resources",
    "title": "OSINT Dojo Resources",
    "url": "https://www.osintdojo.com/resources/",
    "tipo": "Diretório de Recursos e Repositório Curado",
    "utilidade": "Centralização, indexação e curadoria de ferramentas, frameworks e materiais educativos de OSINT",
    "descricao": "A página de recursos do OSINT Dojo é um diretório digital estruturado que atua como uma central de curadoria para a comunidade de inteligência de fontes abertas. A plataforma reúne, categoriza e indexa uma ampla gama de links para ferramentas externas, frameworks especializados, guias práticos, mapas mentais, blogs de referência e materiais de treinamento voltados para capacitação acadêmica e profissional em OSINT.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "func/agregador",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto investigativo e acadêmico, o portal opera como um ponto de partida estratégico. Ele simplifica a fase de planejamento da coleta, permitindo que o analista localize rapidamente ferramentas e metodologias específicas para diferentes nichos de investigação (como geolocalização, mídias sociais, análise corporativa ou infraestrutura técnica), sem a necessidade de buscar por soluções dispersas na internet.",
    "notes": "* Excelente recurso para a criação de bases de conhecimento pessoais (como cofres no Obsidian), servindo como guia de atualização constante sobre quais ferramentas de coleta e análise continuam ativas e validadas no mercado.\n* Por se tratar de um indexador de links, o analista deve avaliar individualmente as ferramentas recomendadas pela plataforma antes de executá-las em um cenário real, garantindo a manutenção de sua própria OPSEC ao interagir com sites de terceiros."
  },
  {
    "id": "OSINT Framework",
    "title": "OSINT Framework",
    "url": "https://osintframework.com/",
    "tipo": "Diretório de Recursos e Árvore Interativa de Ferramentas OSINT",
    "utilidade": "Centralização, indexação e curadoria estruturada de ferramentas e fontes de dados para investigações em fontes abertas",
    "descricao": "O OSINT Framework é uma plataforma web baseada em uma estrutura de árvore interativa que visa facilitar a busca e o acesso a ferramentas e fontes de informações públicas na internet. O diretório organiza recursos por categorias focadas em tipos específicos de dados (como endereços de e-mail, nomes de usuário, redes sociais, IPs, registros públicos, geolocalização, entre outros), servindo como um guia tático de navegação para analistas de inteligência e segurança cibernética.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "func/agregador",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No planejamento e na execução de investigações, o OSINT Framework opera como o principal mapa referencial de links. Ele permite que o investigador identifique rapidamente quais sites, scripts ou repositórios externos são adequados para realizar o *pivoting* (expansão) a partir de um dado conhecido, estruturando o fluxo metodológico da coleta de informações sem que o analista precise depender puramente de buscas manuais por ferramentas.",
    "notes": "* Excelente ponto de partida acadêmico e prático para desenhar fluxogramas de investigação, auxiliando na escolha das ferramentas de coleta adequadas para cada tipo de metadado ou entidade (alvo).\n* Dado que a plataforma funciona como um indexador de links de terceiros, alguns serviços listados podem se tornar obsoletos ou sofrer alterações ao longo do tempo, cabendo ao analista validar a integridade de cada site externo e gerenciar sua OPSEC individual ao acessá-los."
  },
  {
    "id": "OSINT Industries",
    "title": "OSINT Industries",
    "url": "https://osint.industries/",
    "tipo": "Plataforma de Investigação de Identidades e Busca Reversa de Contas",
    "utilidade": "Identificação de contas digitais, perfis em redes sociais e pegada digital a partir de e-mails ou números de telefone.",
    "descricao": "O OSINT Industries é uma ferramenta corporativa baseada na web especializada em buscas reversas de e-mails e números de telefone. A plataforma consulta em tempo real centenas de sites, aplicativos e redes sociais globais para mapear onde o seletor informado possui contas registradas, extraindo metadados públicos valiosos como fotos de perfil, identificadores únicos (UIDs), nomes reais e última atividade sem alertar o titular da conta.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/pessoa-identidade",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Essencial para a fase de coleta e profiling de alvos em inteligência de redes sociais (SOCMINT). A ferramenta otimiza o fluxo de trabalho ao permitir pivotar rapidamente a partir de um e-mail ou telefone para dezenas de plataformas digitais, revelando a real extensão da presença online do investigado e descobrindo novos aliases.",
    "notes": "* **Validação em Tempo Real**: Diferente de ferramentas que dependem de bancos de dados de vazamentos antigos e estáticos, ela realiza requisições dinâmicas nos endpoints de checagem públicos das próprias plataformas, garantindo que o vínculo retornado ainda esteja ativo.\n* **Salvaguarda de OPSEC**: As consultas não geram alertas de segurança ou notificações de tentativa de login na conta do alvo, pois o sistema interage de forma passiva frente ao investigado através da infraestrutura de proxy da própria plataforma.\n* **Modelo Freemium**: O portal permite realizar buscas básicas e visualizações parciais dos resultados, contudo, o enriquecimento completo de dados, remoção de ofuscações e exportação de relatórios estruturados exigem o consumo de créditos comerciais."
  },
  {
    "id": "OSINT Stuff Tool Collection",
    "title": "OSINT Stuff Tool Collection",
    "url": "https://cipher387.github.io/osint_stuff_tool_collection/",
    "tipo": "Framework de Recursos e Diretório OSINT",
    "utilidade": "Repositório centralizado e curadoria massiva de centenas de ferramentas web e utilitários para OSINT",
    "descricao": "O OSINT Stuff Tool Collection (mantido por cipher387 / @cyb_detective) é uma das coleções e diretórios mais abrangentes da comunidade de inteligência de fontes abertas. A página funciona como um índice centralizado que categoriza e redireciona o usuário para centenas de ferramentas online, scripts e motores de busca especializados em subnichos de OSINT (como geolocalização, redes sociais específicas, análise de mídias, investigação de IPs/domínios e infraestrutura de mensageiros).",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "func/agregador",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações, este repositório atua como um canivete suíço tático na fase de planejamento e seleção de ferramentas. Em vez de o analista buscar soluções dispersas, ele pode recorrer ao índice estruturado para encontrar o utilitário exato necessário para superar um gargalo investigativo específico, economizando tempo e expandindo o arsenal técnico da operação.",
    "notes": "* Por ser um agregador de links externos, algumas ferramentas indexadas podem apresentar instabilidade ou mudar de domínio ao longo do tempo, exigindo a checagem frequente de atualizações no repositório principal do GitHub.\n* É recomendável utilizar o diretório como uma central de descobertas e salvamentos (*bookmarking*) para construir o próprio ecossistema de ferramentas customizadas do investigador.\n---"
  },
  {
    "id": "OSINT.SH",
    "title": "OSINT.SH",
    "url": "https://osint.sh",
    "tipo": "Plataforma Web de Ferramentas e Utilitários Integrados de OSINT",
    "utilidade": "Execução centralizada de consultas de infraestrutura de rede, validação de e-mails, análise de domínios, criptografia e extração de dados públicos",
    "descricao": "O OSINT.SH é uma suíte digital que centraliza dezenas de utilitários analíticos focados em investigações de fontes abertas. A plataforma dispensa a necessidade de o analista instalar ferramentas complexas em linha de comando, oferecendo módulos integrados para consultas avançadas de DNS, mapeamento de Whois, geolocalização de endereços IP, checagem de registros de e-mail (MX/SPF), além de ferramentas auxiliares de criptografia, manipulação de texto e decodificação de hashes.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "alvo/usuario-email",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No cotidiano de operações de inteligência cibernética (CYBINT) e resposta a incidentes, o OSINT.SH acelera drasticamente a fase de reconhecimento e triagem inicial (footprinting). Ele resolve o gargalo operacional de abrir múltiplos serviços isolados para obter dados básicos de um alvo, fornecendo respostas rápidas e estruturadas que servem de insumo para a formulação de hipóteses ou direcionamento de investigações mais profundas.",
    "notes": "* Por processar as requisições técnicas de varredura e consulta a partir de sua própria infraestrutura na nuvem, a plataforma atua como um proxy protetor para o investigador, garantindo uma OPSEC passiva excelente ao ocultar o IP real da máquina de análise nos servidores alvos.\n* Por se tratar de um projeto mantido de forma voluntária e comunitária, determinados endpoints e ferramentas que dependem de scrapers ou APIs de terceiros podem apresentar instabilidade ou falhas temporárias de renderização caso essas plataformas externas alterem suas estruturas.\n* Os dados de geolocalização e inteligência de rede exibidos devem ser tratados como indicadores táticos iniciais; em relatórios formais de evidências ou laudos forenses, é mandatório cruzar esses achados com as bases de dados dos registradores regionais primários (como Registro.br, RIPE ou ARIN)."
  },
  {
    "id": "OSINTLeak",
    "title": "OSINTLeak",
    "url": "https://osintleak.com/",
    "tipo": "Plataforma de Inteligência de Ameaças Cibernéticas e Vazamentos",
    "utilidade": "Pesquisa e monitoramento de credenciais expostas, vazamentos de dados (data breaches) e stealer logs.",
    "descricao": "O OSINTLeak é uma plataforma especializada em inteligência de fontes abertas voltada para a identificação e monitoramento de dados comprometidos. O serviço agrega e indexa bilhões de registros oriundos de grandes vazamentos, violações de segurança corporativas, dumps de bancos de dados clandestinos, stealer logs e conteúdos monitorados em fóruns cibercriminosos e redes anônimas.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/dominio",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto investigativo, a plataforma funciona como um motor de busca passiva e inteligência de ameaças essencial para rastrear a exposição digital de alvos, realizar correlação de credenciais e mapear superfícies de ataque.",
    "notes": "* Ideal para equipes de Red Team, analistas de Cyber Threat Intelligence (CTI) e investigadores de fraudes na identificação rápida de reutilização de senhas por alvos.\n* Apresenta filtros sofisticados de busca, permitindo refinar resultados por intervalos de anos e países específicos para mitigar falsos positivos em investigações complexas."
  },
  {
    "id": "PagSeguro (Tela de Acesso / Recuperação)",
    "title": "PagSeguro (Tela de Acesso / Recuperação)",
    "url": "https://acesso.pagseguro.uol.com.br/",
    "tipo": "Portal de Autenticação / Plataforma de Serviços Financeiros",
    "utilidade": "Validação de e-mails, números de telefone e identidades através do mecanismo de recuperação de contas (pivoting).",
    "descricao": "A URL corresponde à interface de login e recuperação de credenciais do PagSeguro (PagBank), uma das principais plataformas de serviços financeiros e meios de pagamento do Brasil. No contexto de segurança e investigações, sua área pública de redefinição de senha permite submeter dados cadastrais para verificar vínculos de contas.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/usuario-email",
      "alvo/telefone",
      "fonte/registros-publicos-gov",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, a página é utilizada como um vetor de validação ativa e *pivoting*. Ao inserir um dado conhecido na área de recuperação de conta, o investigador pode constatar a existência da conta ou obter fragmentos de informações protegidas.",
    "notes": ""
  },
  {
    "id": "Painel de Consultas Públicas - IBAMA",
    "title": "Painel de Consultas Públicas - IBAMA",
    "url": "https://www.gov.br/ibama/pt-br/servicos/consultas",
    "tipo": "Portal de Consulta Pública e Fiscalização Governamental",
    "utilidade": "Consulta de infrações ambientais, áreas embargadas, licenciamentos e regularidade cadastral (CTF) de pessoas físicas e jurídicas no Brasil.",
    "descricao": "O portal de serviços e consultas públicas do IBAMA (Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis) é a plataforma oficial centralizada que reúne as bases de dados de fiscalização, controle e licenciamento ambiental do governo federal. O sistema disponibiliza o acesso a relatórios públicos contendo autuações, multas administrativas, áreas embargadas (por desmatamento ou irregularidades), consulta ao Cadastro Técnico Federal (CTF) e o status de licenças ambientais.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações corporativas, Due Diligence imobiliária, auditorias de ESG (Environmental, Social, and Governance) e *background check*, este portal é uma fonte primária de alto valor estratégico. A consulta permite identificar passivos ambientais críticos e sanções administrativas associadas a um alvo, revelando se uma empresa ou indivíduo opera em áreas protegidas, possui restrições de comercialização de produtos agrícolas/madeireiros ou detém um histórico de contestações fiscais com o Estado que possam comprometer a integridade patrimonial.",
    "notes": "* A consulta de \"Áreas Embargadas\" é uma das ferramentas mais robustas para investigações patrimoniais e de inteligência geográfica (GEOINT). Os relatórios gerados fornecem o nome do autuado, a localização do imóvel rural, o tamanho da área afetada e, em muitos casos, os dados geográficos e polígonos de demarcação da área, que podem ser exportados e plotados diretamente em ferramentas de cartografia digital como o Google Earth Pro ou QGIS.\n* O sistema de consulta de sanções e multas permite acompanhar o andamento de processos administrativos e julgados, fornecendo datas e valores consolidados de penalidades financeiras aplicadas contra o investigado.\n* Determinados sub-módulos da plataforma adotam frameworks de busca dinâmicos com proteção perimetral contra requisições automatizadas massivas (como captchas visuais), tornando a consulta manual ou assistida a metodologia recomendada para análises cirúrgicas dentro do ciclo de produção de conhecimento."
  },
  {
    "id": "Pesquisa CNPA - ANAC",
    "title": "Pesquisa CNPA - ANAC",
    "url": "https://cnpa.anac.gov.br",
    "tipo": "Base de Dados Governamental de Propriedade de Aeronaves",
    "utilidade": "Consulta e emissão de certidões sobre a propriedade e operação de aeronaves vinculadas a CPFs ou CNPJs no Registro Aeronáutico Brasileiro",
    "descricao": "O sistema de Pesquisa CNPA (Certidão Negativa de Propriedade de Aeronaves) da Agência Nacional de Aviação Civil (ANAC) funciona como um endpoint público de consulta ao Registro Aeronáutico Brasileiro (RAB). Ao inserir um CPF ou CNPJ, a plataforma verifica instantaneamente se o termo pesquisado consta como proprietário ou operador cadastrado de alguma aeronave civil no país, emitindo uma certidão negativa caso nada seja encontrado ou listando os prefixos e marcas caso existam registros ativos.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "alvo/veiculo",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações patrimoniais, auditorias de conformidade (Compliance), recuperação de ativos e inteligência antifraude, este sistema é vital. Ele permite realizar o mapeamento passivo de ativos de alto valor financeiro atrelados a indivíduos sob suspeita ou empresas de fachada. Ao revelar as marcas de registro (prefixos), o analista ganha uma chave de pivotagem para plataformas de rastreamento de voos (como FlightRadar24 ou ADS-B Exchange), cruzando a posse do bem com a rotina física e os deslocamentos geográficos do alvo.",
    "notes": "* O sistema gera uma resposta binária e imediata: se o alvo não possuir nenhuma aeronave, gera-se uma Certidão Negativa; se possuir, o sistema interrompe a certidão negativa e exibe a lista detalhada com as marcas das aeronaves, proprietários e operadores associados.\n* A pesquisa não exige biometria, tokens ou justificativa legal para ser executada, assegurando que o investigador consulte qualquer documento de forma rápida diretamente pela interface superficial do site.\n* Como a consulta é feita em servidores públicos da ANAC e não interage com nenhuma estrutura ou conta pessoal do alvo investigado, a execução dessa busca confere uma OPSEC passiva impecável ao analista."
  },
  {
    "id": "Pesquisa Pública de Processos SEI - ANAC",
    "title": "Pesquisa Pública de Processos SEI - ANAC",
    "url": "https://sei.anac.gov.br/sei/modulos/pesquisa/md_pesq_processo_pesquisar.php?acao_externa=protocolo_pesquisar&acao_origem_externa=protocolo_pesquisar&id_orgao_acesso_externo=0",
    "tipo": "Portal Governamental de Consulta Pública e Transparência Administrativa",
    "utilidade": "Pesquisa pública de processos administrativos, documentos oficiais e atos regulatórios da Agência Nacional de Aviação Civil (ANAC) no Sistema Eletrônico de Informações (SEI)",
    "descricao": "O módulo de Pesquisa Pública do Sistema Eletrônico de Informações (SEI) da ANAC é a interface oficial voltada à consulta e acompanhamento de processos administrativos eletrônicos e documentos gerados no âmbito da agência reguladora. A plataforma permite a qualquer interessado realizar buscas parametrizadas por número de protocolo/processo, interessado/remetente (nome de pessoa física ou razão social/CNPJ), assunto, unidade geradora, data de autuação ou termos textuais livres contidos nos autos públicos.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "alvo/veiculo",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações corporativas, Due Diligence, auditoria regulatória e inteligência sobre o setor aéreo, o SEI-ANAC funciona como uma fonte primária de altíssimo valor probatório. Ele permite localizar processos de homologação, autos de infração e multas, outorgas operacionais, disputas administrativas, requerimentos de licenças e certificações técnicas. Ao consultar o nome de um alvo, CNPJ de empresa aérea/operadora de hangar ou o prefixo de uma aeronave, o analista pode ter acesso à íntegra ou ao andamento detalhado de expedientes públicos, revelando contratos, representações legais, procurações e pareceres técnicos de órgãos fiscalizadores.",
    "notes": "* A busca por termos textuais livres permite encontrar menções a nomes ou prefixos de aeronaves mesmo quando estes não foram cadastrados como interessados diretos na capa do processo.\n* Documentos classificados como restritos ou sigilosos têm o acesso bloqueado na consulta pública, sendo exibidos apenas os metadados do processo e a indicação do nível de acesso.\n* Os números de processos e documentos obtidos no SEI-ANAC podem ser utilizados como termos de busca em Diários Oficiais (DOU) ou referenciados formalmente em pedidos via Fala.BR para obtenção de cópias integrais de autos públicos."
  },
  {
    "id": "Pesquisar CNPA - ANAC (Agência Nacional de Aviação Civil)",
    "title": "Pesquisar CNPA - ANAC (Agência Nacional de Aviação Civil)",
    "url": "https://sistemas.anac.gov.br/CNPA/PesquisarCnpa",
    "tipo": "Portal de Consulta Pública Governamental",
    "utilidade": "Consulta e emissão de Certidão Negativa de Propriedade de Aeronaves (CNPA) para identificar se uma pessoa física ou jurídica possui aeronaves registradas no país.",
    "descricao": "O sistema de pesquisa do CNPA é uma plataforma pública mantida pela ANAC e diretamente integrada à base de dados do Registro Aeronáutico Brasileiro (RAB). O portal permite que qualquer cidadão consulte, por meio de um CPF ou CNPJ, a existência de aeronaves vinculadas a um determinado alvo, funcionando como um validador oficial de propriedade ou operação de vetores aéreos civis no país.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "alvo/veiculo",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações patrimoniais avançadas, auditoria corporativa, *due diligence* e *background check* de alvos de alto poder aquisitivo (HNWIs), esta ferramenta atua como um indexador reverso de ativos de luxo e infraestrutura de alta relevância. A consulta mitiga pontos cegos na busca de bens, revelando aviões ou helicópteros registrados em nome do investigado ou de suas empresas controladas, gerando insumos fundamentais para a quebra de blindagens patrimoniais.",
    "notes": "* Se o alvo não possuir nenhuma aeronave associada ao seu documento, o sistema gera instantaneamente uma Certidão Negativa de Propriedade de Aeronaves em PDF, um documento oficial que serve como evidência de \"nada consta\" patrimonial para relatórios de auditoria.\n* Havendo aeronaves registradas, o portal listará as marcas de nacionalidade e matrículas brasileiras elegíveis. Essas matrículas (ex: PP-XXX, PT-XXX, PR-XXX, PS-XXX) tornam-se insumos de entrada perfeitos para ferramentas de GEOINT e rastreamento de tráfego aéreo baseado em telemetria ADSB (como FlightRadar24, RadarBox e ADSB-Exchange), viabilizando o monitoramento do histórico de voos, rotas frequentes e aeródromos utilizados pelo alvo.\n* Por se tratar de um formulário simples de consulta governamental, a plataforma pode adotar validações pontuais contra automações agressivas, sendo mais recomendada para consultas cirúrgicas e pontuais durante o processo investigativo."
  },
  {
    "id": "PhishTank",
    "title": "PhishTank",
    "url": "https://www.phishtank.com",
    "tipo": "Plataforma Colaborativa e Base de Dados de Phishing (CTI)",
    "utilidade": "Identificação, denúncia, validação comunitária e consulta de URLs maliciosas envolvidas em campanhas de engenharia social",
    "descricao": "O PhishTank é um ecossistema comunitário gratuito, operado pela Cisco, que funciona como um repositório central de dados sobre ataques de phishing na internet. A plataforma permite que usuários e analistas submetam links suspeitos para que outros membros da comunidade os avaliem e votem em sua legitimidade, gerando um feed confiável e atualizado em tempo real de páginas de captura fraudulentas ativas.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito do Cyber Threat Intelligence (CTI) e da resposta a incidentes, o PhishTank é um recurso indispensável para a triagem e enriquecimento passivo de links suspeitos. Ele permite que o investigador verifique instantaneamente se uma URL identificada em um e-mail, SMS (smishing) ou anúncio falso já foi classificada e documentada como ameaça. Isso acelera a tomada de decisão para a implementação de bloqueios defensivos em proxies e firewalls corporativos.",
    "notes": "* A plataforma disponibiliza uma API pública robusta e sem custos, permitindo o download integral da base de dados de phishing ativo em formatos estruturados (JSON, CSV, XML) para integração direta com ferramentas de SIEM ou automações locais.\n* Como o processo de validação depende do escrutínio e da votação manual de analistas da comunidade, pode ocorrer um hiato temporal (delay) entre o surgimento de uma nova campanha de phishing altamente direcionada (como Spear Phishing) e a sua confirmação oficial no painel.\n* Consultar a reputação de um link diretamente na base do PhishTank confere uma OPSEC passiva excelente ao analista, pois evita qualquer interação ou conexão direta da máquina de investigação com o servidor controlado pelo atacante."
  },
  {
    "id": "Phonebook.cz",
    "title": "Phonebook.cz",
    "url": "https://phonebook.cz",
    "tipo": "Ferramenta de Busca e Pivoting de Identificadores Digitais",
    "utilidade": "Enumeração e extração massiva de e-mails, subdomínios e URLs vinculados a domínios alvos",
    "descricao": "O Phonebook.cz é uma aplicação web especializada de propriedade da Intelligence X que realiza pesquisas em larga escala para listar subdomínios, endereços de correio eletrônico e URLs correspondentes a um determinado domínio de entrada. A ferramenta opera consultando o massivo arquivo de dados indexados da Intelligence X, varrendo bilhões de registros para recuperar seletores de identidade associados a uma infraestrutura organizacional específica.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/dominio",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/pago"
    ],
    "utilidade_Osint": "No escopo de investigações digitais e inteligência cibernética, a ferramenta atua nas fases de reconhecimento e engenharia reversa de alvos corporativos ou institucionais. Ela permite o mapeamento inicial de superfícies de ataque, descoberta de e-mails institucionais de colaboradores, enumeração de subdomínios ocultos e rastreio de links antigos, servindo de vetor para técnicas de pivoting e engenharia social.",
    "notes": "* A ferramenta atua de forma passiva em relação ao alvo direto, uma vez que as buscas são submetidas unicamente contra o banco de dados armazenado da própria Intelligence X, garantindo excelente OPSEC ao não gerar requisições nos servidores da vítima.\n* Os resultados extraídos (especialmente listas de e-mails) devem passar por uma fase subsequente de validação de status em ferramentas de entrega para confirmar se as contas descobertas continuam ativas ou se constituem resquícios legados de vazamentos antigos."
  },
  {
    "id": "PhoneInfoga",
    "title": "PhoneInfoga",
    "url": "https://github.com/sundowndev/PhoneInfoga",
    "tipo": "Ferramenta de Reconhecimento e Coleta de Inteligência Telefônica (CLI / Web UI)",
    "utilidade": "Reconhecimento avançado, verificação de formato, identificação de operadora/geolocalização e varredura de pegada digital de números de telefone internacionais",
    "descricao": "O PhoneInfoga é uma das ferramentas de código aberto mais conhecidas para a coleta de inteligência e reconhecimento de números de telefone internacionais. Desenvolvido em Go (com suporte a execução via CLI e Web UI), o software processa números no padrão internacional E.164 para validar sua existência, determinar operadora de telefonia, linha de transmissão (VoIP, móvel, fixo), país/região geográfica associada e automatizar buscas por pegada digital em motores de busca e serviços públicos da web através de mecanismos de *footprinting*.",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "func/busca-identificacao",
      "func/scrapers-automacao",
      "func/validacao-status",
      "plataforma/terminal",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas voltadas para alvos de telefonia e engenharia reversa de contatos, o PhoneInfoga acelera a fase de reconhecimento preliminar e triagem de números telefônicos. Ele permite verificar se um número é sintético/VoIP ou pertence a uma linha celular real, além de gerar e executar consultas automatizadas em múltiplos buscadores para identificar se o número de telefone foi indexado em fóruns, vazamentos, redes sociais, cadastros comerciais ou documentos públicos.",
    "notes": "* A ferramenta oferece suporte a contêineres Docker, facilitando sua implantação em ambientes isolados de investigação sem necessidade de instalar dependências locais.\n* Para expandir a profundidade das buscas por pegada digital e mitigar bloqueios por excesso de requisições nos motores de busca, recomenda-se configurar chaves de API (como Google Custom Search) e adotar o uso de proxies ou VPNs para preservar a OPSEC do analista."
  },
  {
    "id": "Photopea",
    "title": "Photopea",
    "url": "https://www.photopea.com/",
    "tipo": "Editor de Imagens Baseado em Web / Ferramenta de Suporte e Análise de Mídia",
    "utilidade": "Edição avançada de imagens, análise vetorial, tratamento de capturas de tela e extração básica de metadados visuais",
    "descricao": "O Photopea é um editor de gráficos rasterizados e vetoriais avançado que funciona inteiramente no navegador de internet, sem a necessidade de plugins ou instalações locais. Ele possui compatibilidade nativa com os principais formatos de arquivos de imagem e design do mercado (como PSD, AI, XD, Sketch, RAW, PDF, PNG e JPG), oferecendo uma interface e funcionalidades equivalentes a softwares profissionais de edição instaláveis.",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas e inteligência de imagens (IMINT), o Photopea atua como uma ferramenta de suporte para a fase de verificação e processamento de evidências visuais. Ele permite que o analista limpe ruídos em capturas de tela, aumente o contraste de documentos digitalizados para facilitar a legibilidade, separe camadas de arquivos de design para identificar modificações e inspecione propriedades básicas de arquivos recebidos para triagem visual.",
    "notes": "* Embora processador de dados localmente (no lado do cliente), o envio de imagens confidenciais ou de alta sensibilidade institucional para plataformas web de terceiros deve ser evitado ou realizado sob uma política rígida de OPSEC para mitigar riscos de exposição.\n* É ideal para análises rápidas quando o investigador está utilizando um ambiente isolado (como uma Máquina Virtual forense limpa) e necessita de recursos avançados de edição gráfica instantâneos sem comprometer o tempo de instalação de softwares pesados de desktop."
  },
  {
    "id": "Pic2Map",
    "title": "Pic2Map",
    "url": "https://www.pic2map.com",
    "tipo": "Plataforma Web de Análise Forense de Metadados EXIF e Geolocalização",
    "utilidade": "Extração automatizada de metadados EXIF de arquivos de imagem e plotagem de coordenadas GPS em mapas digitais para verificação de veracidade",
    "descricao": "O Pic2Map é uma ferramenta online de análise forense digital especializada no processamento de arquivos fotográficos. O sistema realiza a leitura da estrutura binária de imagens submetidas pelo usuário, extraindo metadados ocultos do padrão EXIF (Exchangeable Image File Format) — como geolocalização por coordenadas GPS, data, hora e especificações técnicas do hardware captor — e renderizando os pontos geográficos diretamente em um mapa interativo.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, o Pic2Map atua diretamente na fase de validação e verificação. A extração passiva de coordenadas GPS e carimbos de data/hora permite ao analista confrontar a integridade de uma evidência visual com a narrativa ou álibi apresentado por um investigado (alvo/pessoa-identidade), estabelecendo uma linha do tempo geográfica precisa e incontestável a partir de mídias originais.",
    "notes": "* A eficácia da ferramenta está estritamente vinculada à preservação dos metadados originais no arquivo; vale ressaltar que a maioria das redes sociais comerciais remove automaticamente os blocos EXIF durante o upload por razões de privacidade dos usuários.\n* Por se tratar de uma plataforma SaaS de acesso público e gratuito, o envio de fotos sensíveis ou que exponham o andamento de investigações restritas deve ser evitado por questões de segurança operacional, visto que o site pode indexar as imagens em feeds de análise.\n* Além da geolocalização, a extração expõe parâmetros técnicos da câmera (modelo do aparelho, abertura, ISO), fornecendo assinaturas de dispositivos que auxiliam na correlação e atribuição de autoria de múltiplos arquivos de mídia."
  },
  {
    "id": "Picarta.ai",
    "title": "Picarta.ai",
    "url": "https://picarta.ai/",
    "tipo": "Ferramenta Web de Inteligência Geoespacial (GEOINT) e Análise Visual por IA",
    "utilidade": "Geolocalização automatizada de imagens e predição de coordenadas geográficas baseada em Inteligência Artificial e visão computacional",
    "descricao": "O Picarta.ai é uma plataforma online que utiliza modelos avançados de inteligência artificial, visão computacional e redes neurais profundas para geolocalizar fotografias automaticamente. Ao processar uma imagem enviada pelo usuário, o sistema analisa elementos visuais complexos — como características arquitetônicas, vegetação, relevo, sinalizações viárias, padrões climáticos e iluminação — sem depender de metadados EXIF, calculando e estimando o país, a região, a cidade e as coordenadas de GPS mais prováveis do local da captura, acompanhados de um raio de confiança estatística.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "func/analise-midia-integridade",
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações de fontes abertas, verificação de fatos (fact-checking) e operações de Inteligência Geoespacial (GEOINT/IMINT), o Picarta.ai atua na resolução de desafios de cronolocalização e identificação de locais desconhecidos a partir de evidências visuais. A plataforma é especialmente valiosa para analisar mídias extraídas de redes sociais ou aplicativos de mensageria que tiveram seus metadados EXIF completamente eliminados, permitindo ao analista restringir rapidamente áreas de busca para posterior validação cruzada com cartografia digital, imagens de satélite e ferramentas de Street View.",
    "notes": "* Os resultados fornecidos pela ferramenta constituem estimativas probabilísticas baseadas em padrões visuais; portanto, as coordenadas geradas devem ser tratadas como ponto de partida e validadas manualmente via Google Earth Pro, Yandex Maps, Mapillary ou Google Street View.\n* Sob a ótica de OPSEC, o envio de imagens sensíveis, confidenciais ou ligadas a investigações em andamento para servidores em nuvem de terceiros deve ser criterioso, evitando o upload de fotografias com rostos nítidos de alvos ou elementos que exponham a operação."
  },
  {
    "id": "PicWish",
    "title": "PicWish",
    "url": "https://picwish.com/pt/",
    "tipo": "Plataforma de Processamento e Tratamento de Mídia Baseada em Inteligência Artificial",
    "utilidade": "Remoção automatizada de fundos, restauração de mídias e melhoria de nitidez em evidências visuais",
    "descricao": "O PicWish é uma plataforma online equipada com ferramentas de inteligência artificial voltadas para o processamento, edição e aprimoramento automatizado de imagens. Suas principais funcionalidades incluem a remoção instantânea de planos de fundo, eliminação de objetos indesejados através de preenchimento inteligente, upscaling (aumento de resolução) de mídias de baixa qualidade, além de recursos para desfoque de rostos e restauração de fotografias antigas ou corrompidas.",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito da Inteligência de Imagens (IMINT) e forense computacional, o PicWish funciona como uma ferramenta de suporte para o tratamento de mídias e preparação de evidências visuais. Ela permite que o analista limpe ruídos visuais ao redor de um alvo, amplie capturas de tela desfocadas ou de baixa resolução obtidas em redes sociais para facilitar a leitura de caracteres ocultos, e remova elementos obstrutivos em imagens que possam prejudicar a análise de contexto geográfico ou de identificação de objetos.",
    "notes": "* **Atenção à OPSEC:** Visto que se trata de uma plataforma proprietária baseada em nuvem, o investigador deve evitar o upload de fotos de alvos sensíveis, documentos confidenciais ou mídias protegidas por segredo de justiça, uma vez que os dados processados passam por servidores de terceiros.\n* É uma solução ágil para analistas que necessitam decifrar de forma rápida textos em baixa resolução ou placas de veículos em imagens distorcidas sem demandar o uso de softwares complexos de desktop."
  },
  {
    "id": "PimEyes",
    "title": "PimEyes",
    "url": "https://pimeyes.com/",
    "tipo": "Motor de Busca por Reconhecimento Facial",
    "utilidade": "Busca reversa de faces e reconhecimento facial massivo na internet para localização de perfis e imagens de alvos",
    "descricao": "O PimEyes é um motor de busca de reconhecimento facial avançado baseado em nuvem que permite aos usuários fazer o upload de uma fotografia contendo um rosto humano para escanear a internet pública em busca de outras imagens contendo a mesma pessoa. A ferramenta utiliza algoritmos de inteligência artificial e aprendizado de máquina para mapear características biométricas faciais, cruzando-as com um índice massivo de fotos extraídas de sites, blogs, fóruns, portais de notícias e artigos públicos na web.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações de fontes abertas, inteligência de imagens (IMINT) e rastreamento de pessoas físicas, o PimEyes é uma das ferramentas mais potentes para a técnica de pivoting de identidade. A partir de uma única imagem parcial ou isolada de um alvo, o analista consegue descobrir outros sites onde a mesma pessoa aparece, permitindo identificar o nome real do investigado, locais frequentados, profissão, empresas associadas ou usernames e apelidos em fóruns periféricos indexados.",
    "notes": "* **Consideração de OPSEC:** O PimEyes realiza buscas de forma passiva em relação ao alvo direto, mas as imagens enviadas são submetidas à sua infraestrutura proprietária na nuvem. Investigações que exijam sigilo governamental ou institucional estrito devem avaliar o risco de armazenamento temporário da imagem nos servidores da plataforma.\n* Diferente de outros motores de busca reversa tradicionais (como Google Lens ou Yandex), que procuram por cópias da mesma imagem exata, o PimEyes foca unicamente na estrutura biométrica do rosto, sendo capaz de encontrar o mesmo indivíduo em fotos com planos de fundo, iluminações, cortes de cabelo, idades e ângulos completamente distintos."
  },
  {
    "id": "Pipl Personal Information Removal Request",
    "title": "Pipl Personal Information Removal Request",
    "url": "https://pipl.com/personal-information-removal-request",
    "tipo": "Canal de Opt-Out / Salvaguarda de Privacidade e OPSEC",
    "utilidade": "Formulário institucional para a remoção e exclusão de registros biográficos e dados pessoais indexados no motor de busca Pipl",
    "descricao": "Esta URL corresponde à página oficial de solicitação de remoção de informações pessoais (Opt-Out) do Pipl, um dos maiores e mais robustos motores de busca de identidade e agregação de dados biográficos do mundo. O formulário permite que indivíduos solicitem formalmente a exclusão de seus registros (como nomes, e-mails, históricos de endereços, números de telefone e perfis sociais) para que deixem de ser localizados e exibidos através das consultas comerciais da plataforma.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No ecossistema de inteligência de fontes abertas, esta página possui uma função de contra-inteligência e proteção defensiva (OPSEC). Ela não serve para coletar dados sobre um terceiro, mas sim para mitigar a pegada digital e a exposição do próprio investigador ou de sua instituição. Ao remover dados pessoais de indexadores massivos como o Pipl, o analista reduz a superfície de ataque contra si mesmo, impedindo que alvos investigados realizem engenharia reversa para descobrir sua identidade real, vínculos familiares ou dados residenciais.",
    "notes": "* **Impacto em Investigações:** A remoção de dados por este formulário afeta apenas os resultados de buscas dentro do ecossistema proprietário do Pipl. Ela não apaga as informações dos sites de origem (redes sociais, diários oficiais ou blogs) onde os dados foram coletados originalmente.\n* Para garantir a eficácia do processo de remoção, o solicitante geralmente precisa fornecer os e-mails e telefones exatos que deseja desvincular, exigindo uma triagem prévia da própria pegada digital antes do preenchimento do formulário."
  },
  {
    "id": "PIX QRCode Tool",
    "title": "PIX QRCode Tool / Decodificador BR Code",
    "url": "https://github.com",
    "tipo": "Utilitário Web de Parsing e Inteligência Financeira",
    "utilidade": "Decodificação passiva de strings e imagens de QR Codes do Pix para extração de chaves, nomes de beneficiários e dados transacionais",
    "descricao": "O PIX QRCode Tool é um utilitário analítico projetado para realizar o parsing de códigos baseados no padrão BR Code (a especificação do ecossistema Pix derivada do padrão global EMV Co). A ferramenta processa a linha digitável ('Pix Copia e Cola') ou a imagem do QR Code e destrincha a estrutura de tags de dados, isolando e exibindo de forma legível o nome do recebedor, a cidade da conta bancária, o valor estipulado e a chave Pix cadastrada.",
    "testada": false,
    "tags": [
      "alvo/financeiro-crypto",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito do combate a golpes digitais, páginas de phishing e extorsões, esta ferramenta é indispensável para a triagem passiva de fluxos financeiros (alvo/financeiro-crypto). Campanhas fraudulentas frequentemente utilizam o Pix como vetor de monetização. Ao decodificar o QR Code de forma isolada, o analista extrai imediatamente dados civis ou corporativos do beneficiário (ou de laranjas) e a chave Pix associada (como CPF, e-mail ou telefone), permitindo a transição ágil para uma busca direta de identidade sem a necessidade de interagir com aplicativos bancários.",
    "notes": "* A ferramenta realiza a leitura estática das tags EMV (como as sub-tags sob o ID 26, destinadas às informações da conta mercante), o que garante que nenhuma transação real seja simulada ou agendada durante a auditoria.\n* O uso deste utilitário web confere uma OPSEC passiva excelente para o investigador, uma vez que a decodificação da string ou o upload da imagem ocorre em um ambiente controlado e não dispara alertas ou notificações ao proprietário da conta Pix investigada.\n* Caso a chave Pix embutida no código seja do tipo 'Chave Aleatória' (EVP), o analista não obterá o dado direto do documento do alvo pela decodificação, mas reterá o ID exclusivo da chave para futuras requisições legais ou cruzamentos em vazamentos de dados."
  },
  {
    "id": "Pixsy Monitor",
    "title": "Pixsy Monitor",
    "url": "https://www.pixsy.com/monitor",
    "tipo": "Plataforma de Monitoramento de Ativos Visuais / IMINT",
    "utilidade": "Monitoramento contínuo de direitos autorais, rastreamento de uso indevido de imagens e busca reversa automatizada na web",
    "descricao": "O Pixsy Monitor é uma plataforma online desenvolvida para monitorar e rastrear a utilização de imagens e fotografias na internet. Utilizando algoritmos proprietários de inteligência visual e rastreadores automatizados (scrapers), o serviço permite que fotógrafos, criadores e analistas submetam portfólios visuais para escanear continuamente a web em busca de correspondências exatas ou imagens derivadas, identificando onde, quando e por quem uma mídia está sendo exibida.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/analise-midia-integridade",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações de fontes abertas, especialmente em Inteligência de Imagens (IMINT) e verificação de desinformação, o Pixsy Monitor atua como uma ferramenta de busca reversa persistente e passiva. Ela possibilita identificar campanhas de apropriação indevida de identidade (alvo/pessoa-identidade), rastrear a disseminação de fotografias de interesse em múltiplos domínios ao longo do tempo e validar a integridade contextual de conteúdos visuais originais.",
    "notes": "* A ferramenta mantém o rastreamento em segundo plano (*background*), notificando o usuário sempre que uma nova correspondência é detectada na web.\n* Por ser um serviço proprietário em nuvem, o envio de fotografias confidenciais ou sensíveis de operações deve ser avaliado sob a ótica de sigilo e OPSEC do investigador."
  },
  {
    "id": "Plataforma Krea.ai",
    "title": "Plataforma Krea.ai",
    "url": "https://www.krea.ai/",
    "tipo": "Plataforma de Processamento e Geração de Mídias via IA",
    "utilidade": "Geração, aprimoramento e upscaling de imagens e mídias visuais utilizando inteligência artificial para apoio em OPSEC e tratamento de evidências gráficas",
    "descricao": "O Krea.ai é uma plataforma baseada em inteligência artificial focada na geração, edição, ampliação (*upscaling*) e aprimoramento em tempo real de imagens e vetores. Utilizando modelos generativos avançados, a ferramenta permite converter esboços simples em imagens complexas, otimizar resoluções de arquivos visuais de baixa qualidade e renderizar elementos gráficos customizados de forma ágil.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo das investigações de fontes abertas e salvaguarda do analista, a plataforma cumpre um papel estratégico duplo: tratamento de evidências e suporte a operações de inteligência humana digital (HUMINT). O motor de *upscaling* auxilia na redução de ruídos e na melhoria de resolução de mídias coletadas (como capturas de tela degradadas ou fotos extraídas de redes sociais), facilitando a identificação de elementos secundários. Adicionalmente, suas capacidades generativas viabilizam a criação de insumos visuais realistas e exclusivos para a composição de identidades dissimuladas (*sock puppets*), evitando o uso de fotos de pessoas reais ou de bancos de dados públicos facilmente rastreáveis por busca reversa.",
    "notes": "* O recurso de *Upscale & Enhance* é de grande utilidade para clarear texturas em imagens de baixa qualidade, contudo, o analista deve estar atento ao risco de \"alucinação visual\", onde a IA reconstrói pixels ausentes baseando-se em probabilidade, o que pode descaracterizar ligeiramente o registro real da evidência.\n* É ideal para fluxos de trabalho focados na criação de ecossistemas de *personas*, permitindo gerar não apenas o rosto do perfil dissimulado, mas também fotografias de objetos pessoais e planos de fundo coerentes com a história de cobertura (*lenda*) estipulada."
  },
  {
    "id": "Plataforma Lampyre",
    "title": "Plataforma Lampyre",
    "url": "https://lampyre.io",
    "tipo": "Software Desktop de Inteligência Cibernética, Agregação e Análise de Vínculos",
    "utilidade": "Centralização de investigações digitais, cruzamento automatizado de dados lógicos e visualização de relacionamentos em grafos complexos (Link Analysis)",
    "descricao": "O Lampyre é um aplicativo desktop projetado para inteligência de fontes abertas (OSINT), análise de ameaças (CTI) e investigações cibernéticas. O sistema funciona como um hub analítico centralizado onde o investigador insere um dado inicial (como e-mail, telefone ou IP) e dispara requisições automatizadas para múltiplos bancos de dados públicos e proprietários, estruturando de forma gráfica os vínculos entre os alvos e seus ativos digitais.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/telefone",
      "alvo/dominio",
      "alvo/ip",
      "func/agregador",
      "func/analise-visualizacao",
      "plataforma/desktop",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Na fase de análise e processamento de grandes volumes de informações, o Lampyre é uma ferramenta de altíssimo impacto para a quebra de pseudônimos e atribuição. Ele permite ao analista importar chaves de identificação desconexas e gerar inteligência ao correlacionar passivamente os dados (ex: revelar que um número de telefone associado a uma conta de e-mail está amarrado a um domínio malicioso específico), facilitando a montagem rápida de árvores de relacionamentos em investigações complexas.",
    "notes": "* O software possui uma funcionalidade robusta de forense local (func/forense-local), permitindo que o investigador importe logs brutos, dumps de bancos de dados ou arquivos CSV corporativos pesados e execute análises estáticas sem que nenhuma informação sensível saia da máquina local.\n* A OPSEC passiva em relação ao alvo é excelente, visto que as consultas externas a bancos de dados online são intermediadas pela própria infraestrutura em nuvem da Lampyre; contudo, por trafegar dados sensíveis em servidores proprietários de terceiros, deve-se avaliar o sigilo da operação.\n* Como o uso de transformações externas consome créditos da plataforma, recomenda-se a triagem prévia manual das chaves de busca para otimizar os gastos e evitar o consumo desnecessário de cotas em alvos inválidos."
  },
  {
    "id": "Plataforma Let's Enhance",
    "title": "Plataforma Let's Enhance",
    "url": "https://letsenhance.io/",
    "tipo": "Plataforma de Processamento de Imagens via IA",
    "utilidade": "Aprimoramento, upscaling e correção de artefatos em imagens e evidências visuais utilizando modelos de inteligência artificial",
    "descricao": "O Let's Enhance é uma plataforma baseada em nuvem que utiliza redes neurais e algoritmos de aprendizado profundo para automatizar o aprimoramento e a ampliação (*upscaling*) de imagens. A ferramenta é especializada em aumentar a resolução de arquivos visuais em até 16 vezes sem perda de definição, remover artefatos de compressão (comuns em formatos JPEG), ajustar cores automaticamente e restaurar a nitidez de fotos desfocadas ou severamente pixeladas.",
    "testada": false,
    "tags": [
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações digitais, análise de inteligência visual (GEOINT/IMINT) e preservação de evidências, a plataforma atua diretamente no tratamento de mídias coletadas que apresentam qualidade degradada. O uso do motor de IA permite otimizar capturas de tela antigas, fotografias extraídas de redes sociais ou registros de câmeras de segurança de baixa qualidade. Esse processo auxilia o investigador a tornar legíveis elementos contextuais que estavam incompreensíveis, como placas de sinalização, logotipos de marcas, textos em segundo plano ou características gerais de vestimentas e objetos.",
    "notes": "* Por se tratar de um aprimorador preditivo baseado em inteligência artificial, a ferramenta pode \"alucinar\" ou recriar texturas finas com base em padrões estatísticos aprendidos no treinamento do modelo. Em relatórios de inteligência ou forenses, o analista deve sempre documentar o arquivo original e sinalizar que a"
  },
  {
    "id": "Plataforma Lucidchart",
    "title": "Plataforma Lucidchart",
    "url": "https://www.lucidchart.com/",
    "tipo": "Plataforma Web de Diagramação e Visualização de Dados",
    "utilidade": "Criação de mapas mentais, diagramas de vínculos, organogramas e cronologias para a visualização, estruturação e modelagem de investigações complexas",
    "descricao": "O Lucidchart é uma plataforma de colaboração visual baseada em nuvem que permite aos usuários criar diagramas, fluxogramas, mapas mentais, organogramas e esquemas técnicos de forma intuitiva. A ferramenta oferece uma vasta biblioteca de formas, conectores automáticos e recursos de arrastar e soltar, facilitando a organização de informações complexas de maneira gráfica e centralizada.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas e análise de inteligência, o Lucidchart atua como uma ferramenta analítica na fase de processamento e síntese de informações. Ele desempenha um papel fundamental ao permitir que o analista estruture a massa de dados brutos coletados em um modelo visual compreensível. É amplamente utilizado para correlacionar alvos, mapear redes de relacionamentos complexas (*link analysis*), desenhar estruturas societárias e cadeias de comando de empresas investigadas, esquematizar fluxos financeiros e construir cronologias de eventos, transformando links e dados textuais isolados em inteligência visual acionável.",
    "notes": "* Devido à sua flexibilidade, a plataforma permite a importação de dados estruturados (como planilhas CSV ou Excel) para gerar diagramas automaticamente, o que otimiza o tempo do analista ao lidar com grandes volumes de conexões societárias ou transacionais.\n* Por ser uma plataforma baseada em nuvem onde os dados são processados nos servidores da ferramenta, o analista deve adotar rígidos critérios de OPSEC e proteção de dados ao lidar com casos reais. Recomenda-se evitar a inserção de dados pessoais identificáveis (PII) altamente sensíveis nos planos gratuitos ou sem governança adequada de privacidade."
  },
  {
    "id": "PlayPhrase.me",
    "title": "PlayPhrase.me",
    "url": "https://br.playphrase.me/",
    "tipo": "Motor de Busca de Vídeo e Transcrições Audiovisuais",
    "utilidade": "Indexação, transcrição e recuperação de clipes audiovisuais e diálogos a partir de termos e frases faladas em produções cinematográficas",
    "descricao": "O PlayPhrase.me é uma plataforma de busca e indexação audiovisual que cataloga milhões de frases e diálogos falados em filmes e produções cinematográficas. A ferramenta permite que o usuário pesquise uma frase específica em texto e reproduza instantaneamente os trechos de vídeo exatos onde a expressão é pronunciada, organizando os clipes sequencialmente com legendas sincronizadas e referências aos títulos das obras.",
    "testada": false,
    "tags": [
      "fonte/arquivos-noticias",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, especialmente na checagem de fatos (*fact-checking*) e inteligência de mídia/áudio (IMINT/AVINT), a plataforma funciona como um arquivo de referência audiovisual. Ela viabiliza a verificação rápida da origem de áudios e falas presentes em mídias virais, memes ou conteúdos sintéticos (como manipulações de voz e *deepfakes*), permitindo aos analistas rastrear se determinada frase ou entonação foi extraída diretamente de uma produção cinematográfica conhecida.",
    "notes": "* Útil na identificação de trilhas de áudio isoladas ou falas atribuídas erroneamente a indivíduos em gravações vazadas e vídeos manipulados na internet.\n* A plataforma exibe o título da obra cinematográfica junto a cada clipe recuperado, facilitando o cruzamento com bancos de dados de cinema (como IMDb) e a validação do contexto cronológico da mídia original."
  },
  {
    "id": "Portal BNMP (Banco Nacional de Monitoramento de Prisões)",
    "title": "Portal BNMP (Banco Nacional de Monitoramento de Prisões)",
    "url": "https://portalbnmp.cnj.jus.br/#/pesquisa-peca",
    "tipo": "Portal de Consulta Pública / Registros Judiciais",
    "utilidade": "Consulta pública de mandados de prisão, ordens de captura e monitoramento de indivíduos no sistema penitenciário brasileiro",
    "descricao": "O Banco Nacional de Monitoramento de Prisões (BNMP), mantido pelo Conselho Nacional de Justiça (CNJ), é uma ferramenta que centraliza o registro de mandados de prisão, mandados de internação, alvarás de soltura e guias de recolhimento emitidos pelo Poder Judiciário em todo o território nacional. A interface pública de \"Pesquisa de Peça\" permite consultar ordens de restrição de liberdade ativas e pendentes de cumprimento.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações de antecedentes, inteligência de ameaças e *due diligence* de pessoas físicas, o portal serve como uma fonte primária fundamental para verificar o status legal e a idoneidade criminal de alvos. A plataforma possibilita identificar se um indivíduo é considerado foragido da justiça ou possui pendências de captura em qualquer estado brasileiro.",
    "notes": "* As peças e mandados disponíveis para visualização costumam expor dados de qualificação civil ricos para enriquecimento de perfil (*profiling*), como número de CPF, RG, filiação, data de nascimento e naturalidade.\n* Mandados de prisão decorrentes de processos que tramitam sob segredo de justiça absoluto ou que envolvam menores de idade podem ter sua exibição pública restrita pelo tribunal de origem.\n* O portal possui sistemas de verificação visual (*captchas*) para mitigar consultas automatizadas em massa, demandando intervenção humana ou soluções específicas para resolução de desafios em rotinas automatizadas."
  },
  {
    "id": "Portal da Nota Fiscal Eletrônica (Consulta NF-e)",
    "title": "Portal da Nota Fiscal Eletrônica (Consulta NF-e)",
    "url": "https://www.nfe.fazenda.gov.br",
    "tipo": "Base de Dados Governamental e Portal de Transparência Fiscal",
    "utilidade": "Consulta de validade, identificação de emissores/receptores e checagem de dados cadastrais de Notas Fiscais Eletrônicas a partir da Chave de Acesso de 44 dígitos",
    "descricao": "O Portal da Nota Fiscal Eletrônica é o ecossistema oficial centralizado pelo governo brasileiro para gerenciar os documentos fiscais digitais do país. Através do módulo de consulta pública, o investigador insere a chave numérica de 44 dígitos contida no DANFE (Documento Auxiliar da Nota Fiscal Eletrônica) para validar a existência legal da nota, conferir a razão social e documentos das partes, valores totais e a situação de autorização atual perante a Receita Federal.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito do Business Intelligence, combate à lavagem de dinheiro e repressão a fraudes fiscais, esta consulta é um ponto de virada na investigação. A partir de chaves de acesso interceptadas em logs, e-mails ou relatórios financeiros de alvos sob suspeita, o analista consegue identificar passivamente a rede de fornecedores de uma empresa de fachada (alvo/empresa) ou os hábitos de consumo e aquisição de bens de luxo por parte de um indivíduo (alvo/pessoa-identidade), fornecendo provas robustas de relações econômicas ocultas.",
    "notes": "* A execução da consulta exige obrigatoriamente a Chave de Acesso de 44 dígitos e a resolução de sistemas de verificação visual (CAPTCHA) na interface web.\n* O portal fornece dados resumidos para qualquer cidadão (suficientes para extrair nomes, CNPJs/CPFs, datas e valores totais), mas bloqueia dados analíticos profundos (como a descrição exata de cada produto e arquivos para download) para quem não faz parte ativa do documento ou não possui certificado digital ICP-Brasil.\n* Por se tratar de um barramento de consulta passiva em relação aos alvos (o investigador interage com os servidores da Receita Federal e não com os sistemas do investigado), a OPSEC da operação é preservada, não gerando alertas ou notificações para o emissor ou receptor da nota fiscal pesquisada."
  },
  {
    "id": "Portal da Transparência (Download de Dados)",
    "title": "Portal da Transparência (Download de Dados)",
    "url": "https://portaldatransparencia.gov.br/download-de-dados",
    "tipo": "Repositório de Registros Públicos e Dados Massivos Governamentais",
    "utilidade": "Extração massiva de bases de dados abertas governamentais sobre gastos públicos, contratos, convênios, servidores e benefícios sociais",
    "descricao": "A seção de Download de Dados do Portal da Transparência é o repositório oficial mantido pela Controladoria-Geral da União (CGU) para a distribuição centralizada e massiva de dados abertos do Governo Federal do Brasil. A plataforma permite o download de arquivos consolidados (geralmente em formato CSV) divididos por temas, anos e meses, abrangendo a execução financeira de despesas e receitas, contratos, convênios, licitações, patrimônio, programas de transferência de renda (como Bolsa Família) e quadros funcionais de servidores públicos civis e militares.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ecossistema de inteligência em fontes abertas, especialmente em investigações de fraudes, inteligência corporativa (Due Diligence), jornalismo investigativo e rastreamento patrimonial, esta URL é uma das fontes mais ricas de dados massivos do Brasil. Em vez de realizar consultas individuais, o analista pode baixar bases completas de empresas sancionadas (CEIS/CNEP), rastrear de forma massiva quais CPFs ou CNPJs receberam recursos e auxílios federais, cruzar dados de remuneração de servidores e identificar as empresas contratadas por órgãos públicos e seus respectivos fluxos orçamentários.",
    "notes": "* Devido ao volume massivo dos arquivos de dados abertos (que frequentemente ultrapassam a marca de milhões de linhas), o uso do Microsoft Excel para análise pode ser inviável devido aos limites de linhas do software. O analista deve preferir linguagens de programação e manipulação de dados (como Python com biblioteca Pandas ou R) ou sistemas de banco de dados locais (como SQLite, PostgreSQL) para processar as informações.\n* Excelente para a criação de gráficos de conexões locais e auditoria estática offline, reduzindo as consultas online nos portais do governo e mitigando problemas de OPSEC causados por tráfego excessivo em sistemas oficiais durante a coleta."
  },
  {
    "id": "Portal da Transparência (Pessoa Física)",
    "title": "Portal da Transparência (Pessoa Física)",
    "url": "https://portaldatransparencia.gov.br/pessoa-fisica/busca/",
    "tipo": "Repositório de Registros Públicos e Dados Biográficos",
    "utilidade": "Consulta e auditoria de vínculos institucionais, remunerações de servidores e recebimento de auxílios governamentais por pessoas físicas",
    "descricao": "A seção de Pessoa Física do Portal da Transparência, mantida pela Controladoria-Geral da União (CGU), é o canal oficial unificado do Governo Federal do Brasil para a consulta pública de dados consolidados sobre indivíduos que possuem alguma relação financeira ou funcional com o Estado. A interface permite realizar buscas estruturadas por nome completo, CPF (parcial ou mascarado) ou Número de Identificação Social (NIS).",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações de pessoas físicas, Background Check, localização de ativos e auditoria patrimonial, esta plataforma atua como uma das principais fontes abertas do cenário nacional. Ela permite mapear de forma imediata o vínculo empregatício de um alvo com a administração pública (identificando se é servidor civil ou militar, ativo, aposentado ou pensionista), descobrir a remuneração detalhada recebida do erário, além de listar o recebimento histórico ou atual de benefícios sociais e auxílios de transferência de renda (como o Bolsa Família ou auxílios temporários), fornecendo novos dados cadastrais para a continuidade do processo investigativo.",
    "notes": "* Por questões de privacidade e segurança física, o portal apresenta o CPF mascarado (exibindo apenas os dígitos centrais `***.123.456-**`). Contudo, o cruzamento do nome completo e dos dígitos expostos com outras bases (como a da Receita Federal ou Juntas Comerciais) permite a validação inequívoca da identidade do alvo.\n* É um excelente recurso para desmascarar fraudes de falsidade ideológica ou ocultação patrimonial, permitindo identificar se um alvo que alega não possuir rendimentos oficiais está recebendo remunerações de cargos públicos comissionados ou acumulando benefícios assistenciais de forma irregular."
  },
  {
    "id": "Portal da Transparência (Pessoa Jurídica)",
    "title": "Portal da Transparência (Pessoa Jurídica)",
    "url": "https://portaldatransparencia.gov.br/pessoa-juridica/",
    "tipo": "Repositório de Registros Públicos e Inteligência Corporativa",
    "utilidade": "Consulta e auditoria de contratos, convênios, repasses financeiros e sanções aplicadas a empresas pelo Governo Federal",
    "descricao": "A seção de Pessoa Jurídica do Portal da Transparência, mantida pela Controladoria-Geral da União (CGU), é o canal oficial de busca unificada voltado ao levantamento de dados econômicos, contratuais e correcionais de empresas que possuem ou possuíram interações com a Administração Pública Federal do Brasil. A interface permite pesquisar por CNPJ ou Razão Social para consolidar o histórico comercial e administrativo da entidade frente ao Estado.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações corporativas, Due Diligence, compliance e combate à corrupção, esta plataforma é indispensável para auditar o fluxo financeiro público direcionado a empresas. A ferramenta consolida em um único perfil o recebimento de recursos federais, contratos ativos ou encerrados firmados com ministérios e autarquias, convênios celebrados, além de certidões negativas ou registros de penalidades vigentes (como impedimentos de licitar ou declarações de inidoneidade).",
    "notes": "* Os dados exibidos nesta seção espelham os repasses diretos do orçamento federal. Para investigar subsidiaras estaduais ou municipais (que gerenciam orçamentos locais próprios), o analista deve cruzar as informações com os portais de transparência de cada estado ou município correspondente.\n* A página de perfil de cada empresa frequentemente aponta links para os editais de licitação e contratos originais anexados no Portal de Compras do Governo Federal (Comprasnet), fornecendo um excelente vetor de expansão para obter termos de referência, assinaturas de representantes legais e cronogramas de execução."
  },
  {
    "id": "Portal da Transparência do TCE-SP",
    "title": "Portal da Transparência do TCE-SP",
    "url": "https://transparencia.tce.sp.gov.br/",
    "tipo": "Repositório de Registros Públicos e Fiscalização Orçamentária",
    "utilidade": "Consulta e auditoria de repasses governamentais, contratos municipais, licitações e contas públicas no estado de São Paulo",
    "descricao": "O Portal da Transparência do Tribunal de Contas do Estado de São Paulo (TCE-SP) é a plataforma oficial destinada à fiscalização, controle externo e divulgação de dados orçamentários e financeiros dos órgãos jurisdicionados ao tribunal. O portal reúne dados detalhados sobre as contas públicas estaduais e de 644 municípios paulistas (excluindo a capital), abrangendo contratos, licitações, convênios, repasses a entidades do terceiro setor, além de alertas de irregularidades e painéis específicos como o \"Painel de Distribuição de Recursos\".",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações patrimoniais, Due Diligence corporativa, compliance e combate à corrupção, esta plataforma constitui uma fonte de altíssima confiabilidade para o mapeamento técnico do fluxo de dinheiro público no estado de São Paulo. Ela permite rastrear quais empresas e consórcios receberam repasses de prefeituras ou órgãos estaduais, identificar os responsáveis técnicos assinantes de contratos, analisar processos de licitação suspeitos e verificar penalidades ou condenações administrativas impostas a pessoas físicas e jurídicas.",
    "notes": "* Os dados mantidos pelo TCE-SP cobrem quase a totalidade geográfica do estado, porém, por possuir um tribunal de contas próprio, o município de São Paulo (Capital) não tem seus dados consolidados nesta plataforma, exigindo que o analista consulte o portal do TCM-SP para investigações focadas na capital.\n* O portal oferece uma seção de exportação de dados em formatos abertos (como CSV), o que viabiliza que o investigador faça análises offline estáticas no computador e cruze de forma massiva listas de CNPJs de interesse com os maiores contratos de um determinado município."
  },
  {
    "id": "Portal de Dados Abertos da ANEEL",
    "title": "Portal de Dados Abertos da ANEEL",
    "url": "https://dadosabertos.aneel.gov.br",
    "tipo": "Base de Dados Governamental, Indexador de Infraestrutura e Portal de Dados Abertos",
    "utilidade": "Mapeamento de concessionárias de energia, consulta a contratos de concessão, inventário de geração elétrica e extração de dados geográficos da malha de transmissão",
    "descricao": "O Portal de Dados Abertos da ANEEL é o catálogo oficial que centraliza os conjuntos de dados abertos da Agência Nacional de Energia Elétrica. A plataforma armazena informações públicas sobre o Sistema de Informações de Geração da ANEEL (SIGA), Sistema de Gestão da Transmissão (SIGET), tarifas de aplicação, relatórios de ouvidoria setorial e dados georreferenciados de ativos regulados de energia no Brasil.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "fonte/geoespacial",
      "func/busca-identificacao",
      "func/scrapers-automacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito do Business Intelligence e da segurança de infraestruturas críticas, este portal é uma fonte primária de pivoting tático. O analista consegue cruzar passivamente o nome de um grupo económico (alvo/empresa) com todos os seus empreendimentos energéticos homologados (como usinas eólicas, solares ou hidrelétricas), identificando locais exatos de operação e contratos estatais firmados, o que enriquece significativamente os dossiês de due diligence e análise patrimonial.",
    "notes": "* A plataforma disponibiliza os seus conjuntos de dados integrados por APIs abertas, o que facilita o desenvolvimento de scripts locais para monitorização ou carregamento massivo de indicadores diretamente para ferramentas de visualização como o Power BI.\n* A secção de dados geoespaciais e cartografia digital permite descarregar bases de dados geográficas completas (BDGD) que expõem a arquitetura física e os pontos de distribuição das empresas, funcionando como uma excelente ferramenta complementar em análises de GEOINT.\n* Por se tratar de um barramento de consulta passiva em dados consolidados em bases abertas, a execução das buscas não interage com os sistemas internos das empresas listadas, blindando a OPSEC da investigação."
  },
  {
    "id": "Portal de Dados Abertos do Governo Digital (Gov.br)",
    "title": "Portal de Dados Abertos do Governo Digital (Gov.br)",
    "url": "https://dados.gov.br",
    "tipo": "Catálogo Nacional e Motor de Busca de Dados Abertos Governamentais",
    "utilidade": "Centralização, busca global e download massivo de bases de dados estruturadas de órgãos públicos e instituições federais brasileiras",
    "descricao": "O Portal de Dados Abertos (dados.gov.br) é a ferramenta oficial que centraliza a busca e o acesso a dados públicos disponibilizados pelos órgãos do Governo Federal. Operando sobre a plataforma de código aberto CKAN, o site funciona como um grande catálogo metadados, indexando arquivos em formatos abertos e processáveis (como CSV, JSON, XML e XLS) sobre orçamento público, saúde, educação, transportes e registros corporativos.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-ampla",
      "func/scrapers-automacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo do Big Data OSINT e da Inteligência Corporativa, este portal é a 'mina de ouro' para a criação de bases de dados locais de pivoting. Em vez de fazer consultas individuais, o analista consegue baixar os dumps completos de registros da Receita Federal para mapear o quadro de sócios (QSA) de todas as empresas do país ou listas de servidores públicos para cruzamento de vínculos institucionais, permitindo auditorias massivas de compliance e identificação de redes de fraudes de forma totalmente passiva.",
    "notes": "* O portal não armazena necessariamente todos os arquivos em seus próprios servidores; muitas vezes ele atua como um indexador que redireciona o investigador para o link direto de download hospedado no site do órgão de origem (ex: SERPRO, Receita Federal, IBGE).\n* Por disponibilizar uma API robusta baseada no padrão CKAN, o investigador pode automatizar a checagem de atualizações de datasets ou extrair metadados em massa utilizando scripts em Python ou ferramentas de linha de comando.\n* Como o analista realiza o download das bases completas e executa o tratamento e os cruzamentos localmente (em ferramentas como Python, SQL ou Power BI), a OPSEC da operação após o download se torna perfeita e inviolável, impossibilitando que qualquer consulta posterior a um alvo específico deixe rastros na internet."
  },
  {
    "id": "Portal de Dados Abertos do TSE",
    "title": "Portal de Dados Abertos do TSE",
    "url": "https://dadosabertos.tse.jus.br",
    "tipo": "Base de Dados Governamental, Repositório Eleitoral e Econômico",
    "utilidade": "Consulta e download massivo de dados sobre candidaturas, prestação de contas eleitorais, bens declarados, doadores e resultados de votações",
    "descricao": "O Portal de Dados Abertos do TSE é a plataforma oficial que centraliza os conjuntos de dados públicos da Justiça Eleitoral brasileira. O catálogo oferece acesso a arquivos brutos e processáveis relacionados ao perfil do eleitorado, estatísticas de filiação partidária, informações detalhadas de candidatos, declarações patrimoniais e os fluxos completos de receitas e despesas de campanhas políticas.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "alvo/financeiro-crypto",
      "fonte/registros-publicos-gov",
      "func/busca-ampla",
      "func/scrapers-automacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo do compliance corporativo, due diligence e investigações patrimoniais, esta base é crucial. Ela permite realizar o mapeamento passivo do fluxo de capital político, identificando empresas prestadoras de serviços sob suspeita (alvo/empresa) ou analisando a evolução patrimonial declarada de indivíduos de interesse (alvo/pessoa-identidade). O cruzamento de dados de fornecedores de campanha ajuda a expor possíveis esquemas de lavagem de dinheiro, empresas fantasmas e ocultação de patrimônio (alvo/financeiro-crypto).",
    "notes": "* O portal disponibiliza dados históricos detalhados divididos por ano eleitoral, permitindo a construção de séries cronológicas complexas sobre os alvos investigados.\n* Devido ao volume massivo dos dados de prestação de contas, o uso de scripts em Python ou ferramentas de banco de dados locais é altamente recomendado para processar os arquivos compactados disponibilizados pelo portal.\n* A OPSEC é excelente e passiva: o analista faz o download dos repositórios completos e executa as pesquisas de CPFs, CNPJs e vínculos financeiros inteiramente de forma offline, sem gerar nenhuma requisição ou rastro nos servidores governamentais durante o cruzamento das informações."
  },
  {
    "id": "Portal e-Proclamas",
    "title": "Portal e-Proclamas",
    "url": "https://proclamas.org.br/",
    "tipo": "Portal de Consulta de Registros Públicos",
    "utilidade": "Localização de editais de proclamas de casamento para fins de cruzamento de dados civis e qualificação de pessoas.",
    "descricao": "O e-Proclamas é um sistema centralizado mantido por registradores civis que possibilita a pesquisa pública de editais de proclamas de casamento publicados em diversos Cartórios de Registro Civil das Pessoas Naturais. A plataforma agrupa os avisos oficiais que antecedem as uniões civis, permitindo que qualquer interessado consulte a intenção de casamento de indivíduos.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações patrimoniais, qualificação de alvos e análise de vínculos, o portal atua como uma ferramenta para confirmar o estado civil iminente ou consolidado, além de identificar nomes de cônjuges, testemunhas e eventuais ramificações familiares (vínculos de parentesco).",
    "notes": "* Ideal para a fase de estruturação e triangulação de vínculos familiares, ajudando a revelar sobrenomes de casados ou de solteiros e potenciais endereços de residência associados aos nubentes informados nos editais cartorários."
  },
  {
    "id": "Portal KePlaca",
    "title": "Portal KePlaca",
    "url": "https://www.keplaca.com/",
    "tipo": "Portal de Consulta Pública / Motor de Busca Veicular",
    "utilidade": "Consulta de dados cadastrais, procedência geográfica e especificações técnicas de veículos nacionais através da placa",
    "descricao": "O KePlaca é uma plataforma online desenvolvida para a consulta de informações cadastrais e dados técnicos de veículos registrados no território brasileiro. A partir da inserção da sequência alfanumérica de uma placa (seja no formato tradicional cinza ou no padrão Mercosul), o portal retorna registros consolidados que detalham o fabricante, modelo, ano de fabricação, ano do modelo, cor declarada, além do município e estado de emplacamento do automóvel.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações patrimoniais, diligências de campo (reconhecimento local) e análise cibernética de alvos, a ferramenta funciona como um indexador rápido para identificação e validação de ativos móveis. Ela permite correlacionar de forma ágil uma placa avistada ou documentada à sua real especificação de fábrica, auxiliando na detecção de possíveis clonagens (inconsistências de modelo/cor), rastreamento de deslocamentos e levantamento da base geográfica original do veículo investigado.",
    "notes": "* A plataforma possibilita o acesso direto aos relatórios estruturando a consulta via URL parametrizada no formato `keplaca.com/placa/[PLACA]`, o que facilita a automação de consultas simples ou a rápida checagem em dispositivos móveis.\n* Por se tratar de um indexador de dados cadastrais básicos de acesso público, as informações fornecidas não abrangem dados privados do proprietário (como CPF ou nome completo) nem restrições financeiras profundas (Gravame), demandando o cruzamento com sistemas de Detrans estaduais ou ferramentas pagas de vistoria técnica caso o objetivo exija detalhes jurídicos ou de sinistros."
  },
  {
    "id": "PortraitAI",
    "title": "PortraitAI",
    "url": "https://portraitai.app/",
    "tipo": "Ferramenta de Processamento de Mídia Baseada em Inteligência Artificial",
    "utilidade": "Geração automatizada de retratos artísticos a partir de rostos humanos e tratamento estético de fotos de identificação",
    "descricao": "O PortraitAI é uma ferramenta baseada em nuvem que utiliza redes neurais gerativas (GANs) para transformar fotografias de rostos humanos em retratos pintados de estilo clássico ou artístico. A inteligência artificial analisa as características estruturais e biométricas da face fornecida e reconstrói a imagem aplicando filtros texturizados e estilizações pictóricas automáticas.",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas e inteligência de imagens (IMINT), a ferramenta atua como um recurso auxiliar e laboratorial para a validação, renderização e processamento de mídias. O analista pode utilizá-la para isolar e extrair linhas estruturais de faces em imagens de baixa qualidade, converter rostos de alvos para modelos artísticos com o intuito de testar falhas de algoritmos de biometria facial comerciais ou ajustar filtros cromáticos em fotografias para destacar contornos e silhuetas faciais sob análise.",
    "notes": "* **Atenção à OPSEC:** Sendo uma ferramenta web proprietária de processamento externo, mídias reais de alvos sensíveis, agentes policiais disfarçados ou elementos sob segredo judicial não devem ser carregados na plataforma para evitar a indexação ou vazamento em servidores de terceiros.\n* É comumente explorada por equipes acadêmicas de segurança para conduzir estudos sobre como modificações artísticas e estilizações baseadas em IA afetam a precisão de ferramentas de busca reversa e reconhecimento facial biométrico (como PimEyes ou Google Lens)."
  },
  {
    "id": "Posteo",
    "title": "Posteo",
    "url": "https://posteo.de/",
    "tipo": "Serviço de Webmail Seguro e Privado",
    "utilidade": "Provedor de e-mail seguro e anônimo voltado para a proteção da identidade do investigador e estruturação de contas de cobertura",
    "descricao": "O Posteo é um serviço de e-mail independente com sede na Alemanha, desenvolvido com foco estrito na privacidade, segurança e proteção de dados do usuário. Operando sob o modelo de código aberto, a plataforma destaca-se por não coletar dados pessoais no momento do cadastro e por rejeitar o registro de logs de IP de conexão ou metadados de tráfego. O ecossistema disponibiliza criptografia assimétrica de ponta a ponta, recursos de autodestruição de mensagens e suporte a métodos de pagamento totalmente anônimos.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "opsec/personas",
      "plataforma/web",
      "acesso/pago"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, o Posteo atua como um recurso tático de infraestrutura defensiva e preparação do ambiente de coleta, sendo empregado para blindar a identidade do analista e viabilizar interações controladas.",
    "notes": ""
  },
  {
    "id": "Praat",
    "title": "Praat",
    "url": "https://www.fon.hum.uva.nl/praat/",
    "tipo": "Software de Análise de Áudio / Ferramenta de Fonética Forense",
    "utilidade": "Análise, síntese e manipulação de sinais de voz e fala aplicadas à fonética forense e perfilamento de fontes humanas.",
    "descricao": "O Praat é um programa de código aberto especializado na análise científica, síntese e manipulação da fala e de sinais sonoros. Desenvolvido por linguistas do Instituto de Fonética da Universidade de Amsterdã, o software permite realizar leituras detalhadas de elementos acústicos como pitch (frequência fundamental), formantes, intensidade, espectrogramas e oscilogramas.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de inteligência cibernética e fontes humanas (HUMINT), o Praat atua na validação e análise de arquivos de áudio preexistentes. Ele viabiliza o perfilamento linguístico e a comparação de locutores, auxiliando na identificação de traços biográficos de um indivíduo (como estimativa de idade, gênero, sotaques ou origem geográfica) e na verificação de autenticidade de mídias sonoras em exames de fonética forense.",
    "notes": "* É amplamente utilizado por analistas e peritos para gerar espectrogramas de alta precisão, o que ajuda a identificar anomalias físicas, edições digitais ocultas ou cortes em gravações de áudio sob investigação.\n* Por não possuir dependências de rede para processar os dados de áudio, oferece um excelente nível de isolamento operacional, permitindo que exames sensíveis de mídias sejam feitos de maneira totalmente offline."
  },
  {
    "id": "Prey Project",
    "title": "Prey Project",
    "url": "https://preyproject.com",
    "tipo": "Plataforma de Gerenciamento de Ativos, Anti-Furto e Telemetria de Dispositivos",
    "utilidade": "Rastreamento de localização, coleta de evidências de rede e monitoramento remoto de dispositivos móveis e computacionais",
    "descricao": "O Prey Project é uma suíte de segurança e gerenciamento de hardware que opera por meio de um agente de software instalado localmente no dispositivo. O sistema coleta dados contínuos de geolocalização (via GPS e triangulação de redes Wi-Fi), capturas de tela, fotos da câmera frontal e logs de conexões de rede, centralizando essas informações em um painel administrativo web para auditoria, proteção de dados e recuperação de ativos.",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "alvo/ip",
      "func/busca-identificacao",
      "plataforma/web",
      "plataforma/desktop",
      "plataforma/mobile",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto corporativo de resposta a incidentes e inteligência interna, o Prey atua como uma ferramenta ativa de busca e identificação de vetores de hardware desviados ou subtraídos. Ele permite realizar o pivoting técnico passivo a partir da telemetria do agente, isolando o endereço IP atual da rede utilizada pelo portador e capturando evidências de sua identidade visual, fornecendo insumos materiais indispensáveis para a atribuição legal e localização geográfica do ativo.",
    "notes": "* Por depender de um agente residente no sistema operacional (Client-Side), a ferramenta atua em uma camada pós-comprometimento, tornando-se ineficaz se o disco rígido do hardware for completamente formatado ou mantido permanentemente offline.\n* Os relatórios de rede gerados pelo software incluem rotas de mapeamento local e informações de sub-redes, fornecendo metadados técnicos valiosos para analistas de segurança mapearem a infraestrutura de rede onde o hardware oculto está operando.\n* A precisão do rastreamento de localização é otimizada em perímetros urbanos devido à densidade de roteadores Wi-Fi mapeados publicamente pelo algoritmo de triangulação da plataforma, funcionando com alta fidelidade mesmo em computadores desktop destituídos de chips GPS nativos."
  },
  {
    "id": "PrivateMail",
    "title": "PrivateMail",
    "url": "https://privatemail.com/",
    "tipo": "Serviço de E-mail Seguro e Anonimização",
    "utilidade": "Comunicação e armazenamento criptografado de ponta a ponta para a preservação de dados e segurança operacional.",
    "descricao": "O PrivateMail é um serviço focado em privacidade que oferece e-mail criptografado de ponta a ponta e armazenamento em nuvem seguro. Utilizando criptografia OpenPGP nativa no lado do cliente, a plataforma garante que nem mesmo os provedores de serviços tenham acesso ao conteúdo das mensagens, arquivos ou metadados de comunicação enviados e recebidos.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "plataforma/mobile",
      "acesso/pago",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No âmbito da inteligência de fontes abertas e segurança das operações (OPSEC), a ferramenta serve tanto para estabelecer canais de comunicação protegidos contra interceptação quanto para a criação e manutenção de vetores operacionais seguros. Ela viabiliza o registro de contas de cobertura em fóruns ou plataformas sob investigação através de um serviço que mitiga vazamentos de metadados técnicos do analista.",
    "notes": "* Por implementar chaves OpenPGP diretamente no navegador ou aplicativo móvel, o PrivateMail impede o vazamento de endereços IP de origem nos cabeçalhos SMTP das mensagens enviadas.\n* É ideal para armazenar relatórios de inteligência intermitentes ou evidências digitais brutas coletadas em campo, aproveitando o seu repositório em nuvem criptografado (*Secure Cloud Storage*)."
  },
  {
    "id": "Proton Mail",
    "title": "Proton Mail",
    "url": "https://proton.me/mail",
    "tipo": "Serviço de Webmail Seguro / Ferramenta de Anonimização e Privacidade",
    "utilidade": "Gestão de e-mail seguro, comunicações criptografadas e criação de identidades táticas (Sock Puppets) com foco em OPSEC",
    "descricao": "O Proton Mail é um serviço de e-mail seguro com sede na Suíça que utiliza criptografia de ponta a ponta e de zero acesso. Ele foi projetado para proteger a privacidade das comunicações, impedindo que terceiros ou o próprio provedor decodifiquem as mensagens enviadas e recebidas.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/limitado",
      "opsec/ambiente-seguro",
      "opsec/personas"
    ],
    "utilidade_Osint": "No escopo de investigações e inteligência em fontes abertas, a plataforma funciona principalmente como uma camada de proteção ativa e infraestrutura defensiva para o analista, permitindo comunicações seguras e o isolamento de identidades investigativas.",
    "notes": "* Embora seja excelente para OPSEC e anonimato, deve-se evitar o uso de domínios nativos do Proton Mail para criar AVIs (Avatares Virtuais de Investigação) em redes sociais altamente restritivas (como Instagram, Facebook e X), visto que muitas dessas plataformas bloqueiam ou exigem verificações adicionais automáticas para e-mails provenientes de domínios explicitamente anônimos.\n* O recurso de autodestruição de mensagens pode ser ativado e configurado com uma data de expiração, garantindo que e-mails enviados para alvos ou fontes humanas sejam apagados automaticamente após o período determinado."
  },
  {
    "id": "ProtonVPN",
    "title": "ProtonVPN",
    "url": "https://protonvpn.com/",
    "tipo": "Serviço de Rede Privada Virtual (VPN) / Ferramenta de Segurança Operacional (OPSEC)",
    "utilidade": "Proteção de infraestrutura, tunelamento criptografado e ocultação do endereço IP real do investigador para garantia de anonimato técnico.",
    "descricao": "O ProtonVPN é um serviço de Rede Privada Virtual (VPN) focado em privacidade, desenvolvido pela empresa suíça Proton AG. A ferramenta estabelece um túnel de comunicação totalmente criptografado entre o dispositivo do usuário e seus servidores dedicados, mascarando o endereço IP real do investigador, mitigando vazamentos de DNS e protegendo o tráfego de internet contra interceptações e monitoramento por terceiros.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "plataforma/web",
      "plataforma/desktop",
      "plataforma/mobile",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, o ProtonVPN atua de forma estritamente defensiva na fase de preparação do analista. Ele garante que as consultas realizadas em motores de busca, redes sociais e sites sob investigação não revelem a identidade digital, a operadora de internet ou a geolocalização física do investigador, além de permitir simular acessos provenientes de outros países para contornar bloqueios regionais de conteúdo.",
    "notes": "* Ideal para ser ativado antes de iniciar qualquer atividade investigativa na rede ou ao se conectar em redes Wi-Fi públicas.\n* Recomenda-se a habilitação do recurso *Kill Switch* nas configurações do aplicativo para garantir que o tráfego de dados seja imediatamente interrompido caso a conexão com o servidor VPN caia, evitando vazamentos acidentais do IP real.\n* A infraestrutura do ProtonVPN está sediada na Suíça, país que possui legislações rigorosas de proteção à privacidade fora do alcance da aliança de inteligência dos 5/9/14 Olhos.\n---"
  },
  {
    "id": "Proxy List (jetkai)",
    "title": "Proxy List (jetkai)",
    "url": "https://github.com/jetkai/proxy-list",
    "tipo": "Repositório Automatizado de Proxies Públicos e Inteligência de Rede",
    "utilidade": "Fornecimento de listas estruturadas de servidores proxy ativos (HTTP/S e SOCKS) atualizadas de hora em hora para rotação de IPs e automações",
    "descricao": "O Proxy List de jetkai é um repositório open-source no GitHub focado no fornecimento contínuo de servidores proxy gratuitos. A infraestrutura do projeto executa automações periódicas para raspar diversos endpoints públicos, testar a conectividade de cada servidor e compilar os nós ativos em arquivos estruturados (JSON, TXT, CSV, XML e YAML), disponibilizando dados complementares de geolocalização e protocolos (SOCKS4, SOCKS5, HTTP e HTTPS).",
    "testada": false,
    "tags": [
      "alvo/ip",
      "fonte/repositorio",
      "func/scrapers-automacao",
      "opsec/ambiente-seguro",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de inteligência cibernética e coleta massiva de fontes abertas, este repositório é um recurso de infraestrutura e OPSEC. Ele fornece o insumo necessário (lista de IPs e portas ativas) para alimentar scripts de raspagem (scrapers-automacao) e ferramentas de pivoting, permitindo a rotação constante de endereços IP. Isso evita o bloqueio por limite de requisições (rate-limiting) ou o rastreamento direto do servidor de análise pelo alvo investigado.",
    "notes": "* Por se tratar de uma lista pública de proxies abertos (free proxies), a estabilidade de cada nó é altamente volátil, apresentando quedas frequentes ao longo do dia, o que exige a validação contínua dos arquivos mais recentes.\n* Do ponto de vista de OPSEC estrita, proxies públicos gratuitos não criptografam o tráfego de ponta a ponta e podem pertencer a atores maliciosos ou Honeypots coletando dados. Portanto, nunca utilize essas listas para trafegar credenciais, dados sigilosos ou informações críticas da investigação.\n* O projeto fornece arquivos específicos divididos por protocolo e formato estruturado, facilitando a integração direta via requisições HTTP brutas (cURL ou bibliotecas como requests em Python) sem a necessidade de parsing complexo no repositório."
  },
  {
    "id": "PwnDB",
    "title": "PwnDB",
    "url": "http://pwndb2am4tzkvold.onion",
    "tipo": "Base de Dados de Vazamentos e Credenciais",
    "utilidade": "Busca de credenciais vazadas (e-mails e senhas) na rede Tor para investigações de cibercrime e inteligência de ameaças",
    "descricao": "O PwnDB é uma das bases de dados de credenciais vazadas mais conhecidas e utilizadas no ambiente da Dark Web. Acessível nativamente por meio de um endereço oculto na rede Tor (.onion), a ferramenta funciona como um indexador massivo contendo bilhões de registros expostos em megavazamentos históricos (como o *Collection #1* e o *Anti Public*). O serviço permite realizar buscas reversas estruturadas, possibilitando encontrar senhas atreladas a e-mails específicos ou descobrir quais e-mails compartilham a mesma senha.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "plataforma/terminal",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações de fontes abertas e inteligência cibernética (CYBINT), o PwnDB desempenha um papel fundamental no mapeamento de identidades digitais e na validação de contas. A partir de um e-mail conhecido do alvo, o analista pode extrair senhas antigas ou atuais para realizar o cruzamento de dados (*pivoting*), identificar padrões de criação de senhas e descobrir outros perfis e contas correlacionadas pertencentes ao mesmo indivíduo em diferentes plataformas web.",
    "notes": "* Por operar em um endereço oculto do protocolo Onion, a estabilidade do serviço pode oscilar frequentemente, exigindo tentativas repetidas de conexão ou o uso de proxies de rede ativos na máquina de investigação.\n* As informações obtidas devem ser tratadas com cautela analítica, servindo primordialmente como vetores de contextualização histórica e *pivoting*, dado que senhas antigas podem ter sido alteradas pelo alvo após o vazamento original."
  },
  {
    "id": "qpdf",
    "title": "qpdf",
    "url": "https://qpdf.sourceforge.io/",
    "tipo": "Utilitário de Linha de Comando / Engenharia Reversa de Documentos",
    "utilidade": "Análise, extração, linearização e criptografia de arquivos PDF em investigações digitais e forense local",
    "descricao": "O qpdf é uma ferramenta de linha de comando de código aberto especializada em realizar transformações estruturais e de conteúdo em arquivos PDF. Diferente de leitores ou editores convencionais, o qpdf interage diretamente com a árvore de objetos internos do formato PDF, permitindo descriptografar arquivos (removendo senhas de restrição de edição/impressão), linearizar documentos para visualização rápida na web (web-optimization), mesclar e dividir páginas, além de inspecionar a estrutura interna de fluxos de dados filtrados ou comprimidos.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/terminal",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações digitais, o qpdf desempenha um papel crítico na fase de processamento analítico e forense local de evidências documentais coletadas de fontes abertas. Ele permite que o analista inspecione a estrutura estática de documentos PDF suspeitos obtidos na rede para extrair fluxos ocultos de dados, remover restrições de segurança de arquivos protegidos por alvos e auditar objetos estruturais antes de qualquer visualização ativa, mitigando o risco de execução de exploits ou gatilhos de rastreamento baseados em código arbitrário embutido.",
    "notes": "* Para fins de análise estrutural, o comando `qpdf --show-pages --dump-objects` permite escanear os identificadores internos do arquivo sem a necessidade de renderizá-lo visualmente.\n* Embora seja capaz de remover a senha de proprietário (*owner password*) para liberar restrições de edição em arquivos onde o conteúdo não está fortemente encriptado, o qpdf não foi projetado para realizar ataques de força bruta em arquivos PDF protegidos por senhas de abertura de usuário complexas (*user password*)."
  },
  {
    "id": "Qual Operadora",
    "title": "Qual Operadora",
    "url": "https://www.qualoperadora.net/",
    "tipo": "Plataforma de Consulta Cadastral / Validação de Telecomunicações",
    "utilidade": "Consulta e identificação de operadora de telefonia e status de portabilidade para números fixos e móveis no Brasil",
    "descricao": "O Qual Operadora é um serviço online voltado para a identificação da operadora de telefonia atual de qualquer número de telefone (fixo ou móvel) registrado no Brasil. A plataforma consulta bases de dados de telecomunicações para retornar a operadora de origem ou o destino atual do número após processos de portabilidade, além de identificar o estado (UF) e a região geográfica associada ao código de área (DDD).",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas em solo brasileiro, a ferramenta é utilizada na fase de triagem, enriquecimento de dados e validação de alvos telefônicos. A partir de um número fornecido, o analista pode verificar se o terminal está ativo na base de dados de alguma operadora específica, o que auxilia no direcionamento de futuras ordens de quebra de sigilo ou em ações de engenharia social legítimas, além de permitir o mapeamento geográfico inicial do alvo por meio do DDD.",
    "notes": "* Por ser focada em dados estruturais de telecomunicações, a ferramenta não revela o nome do titular (CPF/CNPJ) cadastrado na linha, limitando-se estritamente à infraestrutura de rede (operadora e tecnologia).\n* É útil para cross-referencing em conjunto com ferramentas que identificam contas de WhatsApp ou Telegram associadas, permitindo confirmar se o número investigado ainda pertence à operadora tradicional ou se opera via operadoras virtuais (MVNOs)."
  },
  {
    "id": "Qubes OS",
    "title": "Qubes OS",
    "url": "https://www.qubes-os.org/",
    "tipo": "Sistema Operacional Voltado para Segurança e Privacidade",
    "utilidade": "Sistema operacional ultra-seguro baseado em hipervisor para isolamento compartimentado de ambientes de investigação e proteção de OPSEC",
    "descricao": "O Qubes OS é um sistema operacional de desktop voltado para a segurança que foca na abordagem de \"segurança por compartimentação\". Utilizando o hipervisor Xen, ele permite que o usuário divida digitalmente o computador em várias máquinas virtuais isoladas chamadas \"Qu技术bes\" (como domínios separados para trabalho, navegação pessoal, redes não confiáveis e cofres de senhas offline), garantindo que o comprometimento de um único ambiente não exponha o restante do sistema.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações baseadas em fontes abertas, o Qubes OS é considerado o padrão ouro para a infraestrutura de OPSEC e gerenciamento de riscos avançados. Ele permite que o analista execute atividades de alto risco (como abrir links suspeitos, analisar malwares ou acessar fóruns na Dark Web) dentro de uma máquina virtual descartável (*Disposable Qube*). Caso essa VM seja infectada ou sofra um ataque de contra-inteligência, ela é totalmente destruída ao fechar, blindando a máquina anfitriã e a identidade real do investigador.",
    "notes": "* O Qubes OS exige hardware robusto, demandando uma quantidade significativa de memória RAM (mínimo de 16GB) e processadores com suporte avançado a tecnologias de virtualização Intel VT-x/VT-d ou AMD-V/IOMMU.\n* A curva de aprendizado é acentuada, sendo recomendado principalmente para analistas seniores ou que lidam com investigações envolvendo ameaças persistentes avançadas (APTs) e cenários de alta hostilidade."
  },
  {
    "id": "Querido Diário",
    "title": "Querido Diário",
    "url": "https://queridodiario.ok.org.br/",
    "tipo": "Plataforma de Busca e Repositório de Registros Públicos",
    "utilidade": "Centralização, indexação e busca avançada em Diários Oficiais de municípios brasileiros para investigações patrimoniais e de integridade pública",
    "descricao": "O Querido Diário é um projeto de código aberto idealizado pela Open Knowledge Brasil (OKBR) que utiliza inteligência artificial e raspagem de dados para libertar, centralizar e indexar os Diários Oficiais dos municípios brasileiros. A plataforma transforma arquivos PDF fechados e imagens escaneadas em texto estruturado e pesquisável, permitindo que qualquer cidadão ou investigador realize buscas textuais por palavras-chave, nomes, CPFs ou CNPJs em diários oficiais municipais de diversas regiões do país através de uma única interface.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações de fontes abertas no contexto brasileiro, o Querido Diário é uma ferramenta de altíssimo valor para o levantamento de dados biográficos, inteligência societária e o mapeamento de vínculos com a administração pública municipal. Ele simplifica o processo de *pivoting*, permitindo rastrear nomeações, exonerações, contratos públicos, licitações, sanções administrativas e permissões associadas a um indivíduo ou empresa, superando a barreira histórica da fragmentação e da baixa indexação dos portais de prefeituras locais.",
    "notes": "* O projeto está em constante expansão e conta com o apoio de comunidades voluntárias para escrever novos raspadores; portanto, a cobertura de municípios deve ser verificada na própria plataforma para garantir que a localidade de interesse esteja atualmente indexada.\n* Para buscas avançadas, recomenda-se o uso de aspas duplas para pesquisar termos exatos (ex: `\"Nome do Alvo\"`) ou a combinação de identificadores como o CNPJ para mitigar problemas relacionados a homônimos."
  },
  {
    "id": "Random Name Generator",
    "title": "Random Name Generator",
    "url": "https://www.random-name-generator.com/",
    "tipo": "Gerador de Identidades Fictícias / Utilitário de OPSEC",
    "utilidade": "Geração assistida de identidades e nomes sintéticos para a criação de personas e Sock Puppets",
    "descricao": "O Random Name Generator é uma ferramenta baseada na web projetada para gerar de forma automatizada e aleatória nomes próprios e sobrenomes baseados em diferentes nacionalidades e características demográficas. A plataforma permite customizar critérios como gênero e país de origem para produzir dados de identificação fictícios realistas.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas e ações de inteligência digital, a plataforma desempenha um papel voltado à proteção do analista e ao gerenciamento de interações dissimuladas no ambiente virtual.",
    "notes": "* É ideal para a fase de planejamento de OPSEC, permitindo criar rapidamente nomes coerentes com o contexto geográfico ou cultural da investigação para compor perfis em redes sociais ou fóruns restritos.\n* Recomenda-se combinar os nomes gerados nesta plataforma com ferramentas de geração de imagens por inteligência artificial (IA) e e-mails temporários para consolidar uma persona digital robusta e com menor risco de rastreamento por contra-inteligência."
  },
  {
    "id": "Randus",
    "title": "Randus",
    "url": "https://randus.org/en",
    "tipo": "Gerador de Identidades Fictícias / Utilitário de OPSEC",
    "utilidade": "Geração automatizada de identidades sintéticas e dados pessoais fictícios russos para a criação de personas e Sock Puppets",
    "descricao": "O Randus é uma plataforma web especializada na geração aleatória de identidades fictícias e dados cadastrais baseados no contexto demográfico e civil da Rússia. A ferramenta cria perfis completos que incluem nomes russos em cirílico e transliterados, gênero, data de nascimento, endereços postais russos realistas, números de telefone simulados e até dados de documentos estruturados de forma plausível.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações baseadas em fontes abertas (OSINT), inteligência cibernética e operações em ambientes digitais restritos (especialmente no ecossistema de redes do Leste Europeu ou plataformas como VKontakte, OK.ru e canais do Telegram), a ferramenta fornece insumos técnicos essenciais para a proteção da identidade do analista.",
    "notes": "* Altamente eficaz quando a investigação exige infiltração ou criação de contas em fóruns, sites de vazamentos ou redes sociais do Leste Europeu, onde o uso de nomes de padrão ocidental levantaria suspeitas imediatas de anomalia.\n* Para consolidar a robustez da persona criada, os dados textuais gerados pelo Randus devem ser complementados com fotos sintéticas de perfil"
  },
  {
    "id": "ReceitaWS",
    "title": "ReceitaWS",
    "url": "https://receitaws.com.br/",
    "tipo": "Plataforma de API / Ferramenta de Consulta Corporativa",
    "utilidade": "Consulta e extração de dados cadastrais e societários de pessoas jurídicas por meio do CNPJ",
    "descricao": "O ReceitaWS é uma plataforma comercial que oferece uma API para a consulta automatizada de dados de pessoas jurídicas inscritas no Cadastro Nacional da Pessoa Jurídica (CNPJ) do Brasil. A ferramenta realiza a extração e estruturação das informações públicas diretamente de bases oficiais, fornecendo dados detalhados como a razão social, nome fantasia, atividade econômica (CNAE), quadro de sócios e administradores (QSA), capital social, endereço e situação cadastral.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, inteligência corporativa (Business Intelligence) e rastreamento patrimonial, o ReceitaWS funciona como um intermediário eficiente para mapear a estrutura societária e a saúde institucional de empresas brasileiras, permitindo a identificação célere de operadores, parceiros de negócios e vínculos econômicos.",
    "notes": "* A API pública gratuita é ideal para investigações pontuais e manuais, mas requer uma cadência controlada para evitar bloqueios temporários por excesso de requisições (*rate limiting*).\n* O formato de retorno em JSON facilita a integração direta dos resultados estruturados com outras ferramentas locais de análise de dados, bancos de dados gráficos ou scripts de automação."
  },
  {
    "id": "Reclame Aqui",
    "title": "Reclame Aqui",
    "url": "https://www.reclameaqui.com.br",
    "tipo": "Plataforma Web de Defesa do Consumidor e Avaliação de Empresas",
    "utilidade": "Pesquisa de reputação corporativa, histórico de reclamações de consumidores e inteligência comercial",
    "descricao": "O Reclame Aqui é a maior plataforma brasileira de monitoramento de reputação, reclamações e interações entre consumidores e empresas. O portal permite que usuários registrem insatisfações, denunciem problemas na prestação de serviços ou venda de produtos, e recebam respostas públicas das empresas cadastradas. A plataforma indexa e calcula notas de confiabilidade com base em índices de solução e intenção de novos negócios por parte dos reclamantes.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações corporativas, análise de risco reputacional e diligência prévia (*due diligence*), o Reclame Aqui atua como uma rica fonte de dados abertos. Ele possibilita mapear os principais gargalos operacionais de uma pessoa jurídica, identificar indícios de fraudes em massa de empresas de fachada, e rastrear o padrão de comportamento institucional no atendimento ao público em geral.",
    "notes": "* As postagens dos consumidores muitas vezes trazem dados anexos fornecidos de forma descuidada pelos próprios usuários, como menções a números de pedidos, nomes de atendentes ou datas exatas de eventos, servindo como ótimos insumos para cronologias de casos.\n* É uma excelente ferramenta para identificar variações de nomes de empresas (nomes fantasia) e canais alternativos de atendimento que não constam em seus registros governamentais formais (CNPJ)."
  },
  {
    "id": "Reclame Aqui (Recuperação de Senha)",
    "title": "Reclame Aqui (Recuperação de Senha)",
    "url": "https://www.reclameaqui.com.br/esqueci-minha-senha/",
    "tipo": "Validador de Identidade Digital / Plataforma Comercial",
    "utilidade": "Validação da existência e do status de contas associadas a e-mails ou CPFs via mecanismo de recuperação de credenciais",
    "descricao": "A página de recuperação de credenciais do Reclame Aqui é o canal oficial destinado a usuários (consumidores) que esqueceram suas senhas de acesso à plataforma de reclamações e resolução de conflitos de consumo. O sistema permite a inserção de um identificador para localizar o cadastro e iniciar o fluxo de redefinição de acesso.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/usuario-email",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações digitais e verificação de pegada digital, este endpoint serve como uma ferramenta de validação ativa. Ao inserir o CPF ou o e-mail de um alvo, o comportamento do sistema (seja avançando para a próxima etapa ou exibindo alertas de \"usuário não encontrado\") permite ao investigador confirmar se o alvo possui uma conta ativa na maior plataforma de consumo do Brasil, fornecendo indícios sobre seus hábitos digitais e confirmando a validade de um e-mail ou documento conhecido.",
    "notes": ""
  },
  {
    "id": "Recuperação de Senha - Casas Bahia",
    "title": "Recuperação de Senha - Casas Bahia",
    "url": "https://cliente.casasbahia.com.br/recuperacao/esqueci-senha",
    "tipo": "Portal Web de Atendimento ao Cliente / Mecanismo de Validação Passiva",
    "utilidade": "Validação da existência de contas e vínculo de CPF a partir de fluxos de recuperação de senha.",
    "descricao": "A página de recuperação de senha do portal do cliente das Casas Bahia é uma interface pública desenvolvida para permitir que usuários legítimos restabeleçam o acesso às suas contas informando identificadores civis, especificamente o CPF.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações digitais e engenharia reversa de dados cadastrais, a página é utilizada para realizar a validação passiva de vínculos institucionais e a existência de contas ativas vinculadas a um alvo sem alertá-lo.",
    "notes": "* Permite verificar a existência de vínculo comercial de um determinado CPF sem gerar alertas, notificações por SMS ou e-mails de tentativa de invasão para o dispositivo do alvo na fase inicial de inserção do dado.\n* É ideal para compor rotinas de pivoting e enriquecimento de perfis durante investigações de fraude, verificação de identidade e engenharia social legítima."
  },
  {
    "id": "Recuperação de Senha - Claro",
    "title": "Recuperação de Senha - Claro",
    "url": "https://cadastro.claro.com.br/recuperar-senha",
    "tipo": "Portal Web de Atendimento ao Cliente / Mecanismo de Validação Passiva",
    "utilidade": "Validação da existência de contas e vínculo de CPF a partir de fluxos de recuperação de senha da operadora Claro.",
    "descricao": "A página de recuperação de senha do portal de cadastro da operadora Claro é uma interface pública desenvolvida para permitir que clientes legítimos restabeleçam o acesso às suas contas de serviços residenciais ou móveis por meio da inserção de identificadores civis, especificamente o CPF.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações digitais, engenharia reversa de dados e inteligência de fontes abertas, a página é utilizada como um validador passivo para constatar o vínculo de um CPF com contas ativas na operadora sem alertar o alvo (não envia notificações ou SMS na etapa inicial de teste do dado).",
    "notes": "* Permite ao analista confirmar se um determinado CPF possui serviços de telecomunicação contratados junto à Claro na fase inicial de inserção do dado, o que ajuda a direcionar investigações telefônicas posteriores (pivoting).\n* É recomendado utilizar a ferramenta na fase de levantamento de alvos e checagem de dados cadastrais, integrando o fluxo de testes passivos de validade cadastral junto a outras plataformas comerciais e governamentais."
  },
  {
    "id": "Recuperação de Senha - Extra Hipermercados",
    "title": "Recuperação de Senha - Extra Hipermercados",
    "url": "https://cliente.extra.com.br/recuperacao/esqueci-senha",
    "tipo": "Portal Web de Atendimento ao Cliente / Mecanismo de Validação Passiva",
    "utilidade": "Validação da existência de contas e vínculo de CPF a partir de fluxos de recuperação de senha.",
    "descricao": "A página de recuperação de senha do portal do cliente do Extra é uma interface pública desenvolvida para permitir que usuários legítimos restabeleçam o acesso às suas contas informando identificadores civis, especificamente o CPF.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações digitais e engenharia reversa de dados cadastrais, a página é utilizada para realizar a validação passiva de vínculos institucionais e a existência de contas ativas vinculadas a um alvo sem alertá-lo.",
    "notes": "* Permite verificar a existência de vínculo comercial de um determinado CPF sem gerar alertas, notificações por SMS ou e-mails de tentativa de invasão para o dispositivo do alvo na fase inicial de inserção do dado.\n* É ideal para compor rotinas de pivoting e enriquecimento de perfis durante investigações de fraude, verificação de identidade e engenharia social legítima."
  },
  {
    "id": "Recuperação de Senha - Magazine Luiza",
    "title": "Recuperação de Senha - Magazine Luiza",
    "url": "https://sacola.magazineluiza.com.br/n#/recuperar-senha",
    "tipo": "Portal Web de Atendimento ao Cliente / Mecanismo de Validação Passiva",
    "utilidade": "Validação da existência de contas e vínculo de CPF a partir de fluxos de recuperação de senha da plataforma Magazine Luiza.",
    "descricao": "A página de recuperação de senha do portal de compras da Magazine Luiza é uma interface pública desenvolvida para permitir que usuários legítimos restabeleçam o acesso às suas contas informando identificadores civis, especificamente o CPF.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações digitais e engenharia reversa de dados cadastrais, a página é utilizada para realizar a validação passiva de vínculos institucionais e a existência de contas ativas vinculadas a um alvo sem alertá-lo.",
    "notes": ""
  },
  {
    "id": "Rede CNPJ",
    "title": "Rede CNPJ",
    "url": "https://www.redecnpj.com/r/",
    "tipo": "Plataforma Web de Análise de Vínculos / Banco de Dados Societários",
    "utilidade": "Consulta e visualização de relações societárias, dados cadastrais de CNPJ e redes de vínculos de empresas brasileiras.",
    "descricao": "O Rede CNPJ é uma plataforma online focada na consulta, cruzamento e mapeamento de dados cadastrais de pessoas jurídicas registradas no Brasil. A ferramenta compila informações provenientes da base pública da Receita Federal e de outras fontes abertas, exibindo estruturas corporativas e ramificações societárias de forma estruturada.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito da inteligência corporativa, investigação patrimonial e análise de fraudes, a plataforma atua como um indexador e facilitador de *pivoting*. Ela permite rastrear o Quadro de Sócios e Administradores (QSA), identificar empresas coligadas por meio de sócios comuns, localizar filiais e analisar a evolução cadastral de alvos corporativos a partir de uma entrada simples (como nome empresarial ou número de CNPJ).",
    "notes": "* Por se basear em dados públicos de registros nacionais, a atualização das informações depende dos ciclos de sincronização do site com a base da Receita Federal. Recomenda-se validar dados críticos diretamente nas fontes oficiais (como a emissão do comprovante de inscrição no site da RFB).\n* A estrutura textual das informações facilita a extração rápida de termos e nomes para prosseguimento da investigação em motores de busca ampla."
  },
  {
    "id": "REDESIM (Rede Nacional para a Simplificação do Registro e da Legalização de Empresas e Negócios)",
    "title": "REDESIM (Rede Nacional para a Simplificação do Registro e da Legalização de Empresas e Negócios)",
    "url": "https://www.gov.br/empresas-e-negocios/pt-br/redesim",
    "tipo": "Portal Governamental de Integração Federal",
    "utilidade": "Consulta de viabilidade, registro, inscrições e licenciamento de pessoas jurídicas no Brasil de forma unificada.",
    "descricao": "A REDESIM é um sistema integrado que unifica os processos de abertura, alteração, licenciamento e fechamento de empresas no Brasil. O portal conecta os sistemas das Juntas Comerciais, Receita Federal, Secretarias de Fazenda estaduais, Prefeituras e órgãos licenciadores (como Corpo de Bombeiros e Vigilância Sanitária).",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Como canal oficial de integração do registro empresarial brasileiro, a plataforma permite a realização de consultas estruturadas para validar a situação cadastral de pessoas jurídicas, verificar licenças emitidas e mapear os requisitos regulatórios atrelados a um CNPJ. É uma fonte primária fundamental para auditoria de conformidade, inteligência corporativa e due diligence.",
    "notes": "* Grande parte das consultas detalhadas dentro do ambiente exige autenticação via conta GOV.BR (níveis prata ou ouro) para a emissão de certidões e acompanhamento detalhado de protocolos.\n* É ideal para cruzar informações com dados obtidos em Juntas Comerciais estaduais, uma vez que a REDESIM atua como o agregador centralizador dessas informações em nível nacional."
  },
  {
    "id": "Regex101",
    "title": "Regex101",
    "url": "https://regex101.com/",
    "tipo": "Ferramenta Web de Desenvolvimento e Análise de Dados",
    "utilidade": "Criação, teste, depuração e análise estática de expressões regulares (RegEx) aplicadas a padrões de texto.",
    "descricao": "O Regex101 é uma ferramenta interativa online projetada para construir, testar e depurar expressões regulares. A plataforma suporta múltiplos sabores de RegEx (como PCRE, JavaScript, Python, Golang e Java), oferecendo uma interface em tempo real que destaca correspondências em blocos de texto e detalha o funcionamento de cada token utilizado na expressão.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações digitais e processamento de dados brutos, a ferramenta não realiza coletas ativas na rede, mas é fundamental para a fase de triagem e análise estática. Ela permite que o analista crie padrões precisos para extrair massivamente entidades de arquivos locais, códigos-fonte, logs ou dumps de dados (como a filtragem de listas de CPFs, e-mails, números de telefone, carteiras de criptoativos ou padrões específicos de URLs).",
    "notes": "* A ferramenta possui um painel explicativo detalhado (*Explanation*) que decompõe a lógica matemática e computacional da expressão inserida, o que mitiga erros de falsos positivos na extração de dados da investigação.\n* Possui uma função de geração de código (*Code Generator*) que traduz a expressão regular testada diretamente para strings formatadas em linguagens como Python, Bash ou JavaScript, facilitando a automação em scripts de raspagem local."
  },
  {
    "id": "Registradores - ONR (Operador Nacional do Registro Eletrônico de Imóveis)",
    "title": "Registradores - ONR (Operador Nacional do Registro Eletrônico de Imóveis)",
    "url": "https://registradores.onr.org.br/",
    "tipo": "Portal de Serviços Eletrônicos Compartilhados / Registro de Imóveis",
    "utilidade": "Centralização de consultas a matrículas, pesquisa de bens e certidões digitais de imóveis em cartórios de registro de imóveis do Brasil.",
    "descricao": "O portal Registradores é a plataforma do Serviço de Atendimento Eletrônico Compartilhado (SAEC), mantida pelo ONR sob regulação do Conselho Nacional de Justiça (CNJ). Ele unifica o acesso digital aos Cartórios de Registro de Imóveis de diversos estados brasileiros, permitindo solicitar certidões, pesquisar a existência de bens e visualizar matrículas imobiliárias.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "Em investigações patrimoniais, análise de vínculos societários ocultos e localização de ativos, este portal é uma das ferramentas mais críticas no cenário brasileiro. A partir de um CPF ou CNPJ (na funcionalidade de Pesquisa de Bens), o analista pode mapear propriedades imobiliárias registradas em nome do alvo, identificar transações de compra e venda na matrícula e rastrear garantias reais ou gravames (como penhoras judiciais).",
    "notes": "* A funcionalidade de \"Pesquisa de Bens\" exige o preenchimento exato do CPF ou CNPJ e a seleção dos estados/municípios onde deseja realizar a varredura.\n* Os documentos obtidos (Certidão Digital ou Visualização de Matrícula) contêm o histórico cronológico completo do imóvel, sendo fundamentais para identificar antigos proprietários e indícios de lavagem de dinheiro ou ocultação de patrimônio."
  },
  {
    "id": "Registrato (Banco Central do Brasil)",
    "title": "Registrato (Banco Central do Brasil)",
    "url": "https://www.bcb.gov.br/meubc/registrato",
    "tipo": "Portal Governamental de Inteligência Financeira e Relacionamentos Bancários",
    "utilidade": "Consulta de relacionamentos financeiros, chaves PIX, empréstimos, financiamentos e operações de câmbio atreladas a um CPF ou CNPJ.",
    "descricao": "O Registrato é um sistema administrado pelo Banco Central do Brasil (BCB) que permite aos cidadãos e empresas acessarem, de forma centralizada, relatórios detalhados sobre suas movimentações financeiras. O sistema consolida dados enviados por todas as instituições financeiras do país, gerando extratos de contas bancárias ativas, chaves PIX cadastradas, empréstimos, financiamentos (SCR) e operações de câmbio.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "alvo/financeiro-crypto",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações patrimoniais, auditorias de fraudes e due diligence, o portal figura como uma das fontes oficiais mais completas para o mapeamento de vínculos econômicos no Brasil. Embora as consultas detalhadas sejam restritas ao próprio titular ou mediante autorização legal/judicial, o conhecimento de sua estrutura e dos dados unificados por ele é vital para rastrear onde um alvo (pessoa física ou jurídica) possui contas ativas, dívidas registradas ou chaves de transferência financeira.",
    "notes": "* O acesso à plataforma exige obrigatoriamente a autenticação por meio do portal unificado GOV.BR (com níveis de segurança prata ou ouro).\n* Os relatórios gerados (como o CCS e o SCR) são comumente encontrados anexados a processos judiciais de quebra de sigilo bancário, tornando-se artefatos essenciais para análise forense local por parte do investigador quando disponíveis nos autos."
  },
  {
    "id": "Registro Aeronáutico Brasileiro (RAB) - Dados Abertos ANAC",
    "title": "Registro Aeronáutico Brasileiro (RAB) - Dados Abertos ANAC",
    "url": "https://www.gov.br/anac/pt-br/acesso-a-informacao/dados-abertos/areas-de-atuacao/aeronaves-1/registro-aeronautico-brasileiro",
    "tipo": "Repositório de Dados Abertos Governamentais",
    "utilidade": "Consulta e download de bases de dados estruturadas sobre o Registro Aeronáutico Brasileiro (RAB) para inteligência patrimonial e rastreamento de frotas",
    "descricao": "A página de Dados Abertos do Registro Aeronáutico Brasileiro (RAB), disponibilizada pela Agência Nacional de Aviação Civil (ANAC), é um repositório institucional que centraliza e distribui bases de dados completas e atualizadas sobre todas as aeronaves civis registradas no Brasil. O portal permite o acesso a microdados estruturados contendo informações cadastrais, fabricantes, modelos, ano de fabricação, tipo de uso, marcas de matrícula (prefixos), operadores, proprietários e status de aeronavegabilidade.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Em investigações financeiras (FinINT), levantamento patrimonial e análise societária, a base do RAB é uma fonte primária indispensável. Por disponibilizar os dados de forma consolidada e aberta, possibilita ao analista realizar buscas massivas, correlações em massa de nomes/CNPJs com aeronaves de alto valor e mapear frotas executivas corporativas ou de pessoas físicas de interesse sem restrições de consultas pontuais.",
    "notes": "* Os dados são disponibilizados em formatos estruturados (como CSV), o que permite a ingestão direta em bancos de dados locais, planilhas ou ferramentas de análise de grafos (como Maltego ou Gephi) para cruzamentos em larga escala.\n* As marcas de matrícula (prefixos) obtidas nesta base servem como chaves de entrada diretas (*pivoting*) para sistemas de rastreamento de telemetria e tráfego aéreo em tempo real (como Flightradar24, RadarBox e redes ADS-B)."
  },
  {
    "id": "Registro de Voos - Força Aérea Brasileira (FAB)",
    "title": "Registro de Voos - Força Aérea Brasileira (FAB)",
    "url": "https://www.fab.mil.br/voos",
    "tipo": "Portal de Consulta Pública e Transparência Militar/Governamental",
    "utilidade": "Consulta de registros de voos de autoridades e painéis de transporte do Correio Aéreo Nacional (CAN) da Força Aérea Brasileira.",
    "descricao": "O portal de Voos da Força Aérea Brasileira é o canal oficial de transparência ativa destinado à publicação de registros de missões de transporte aéreo doméstico e internacional. A plataforma disponibiliza dados sobre os voos realizados por autoridades públicas (Ministros de Estado, Presidentes de Poderes e demais servidores previstos em decreto) e informações institucionais referentes ao Correio Aéreo Nacional (CAN).",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/veiculo",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações de Pessoas Politicamente Expostas (PEP), auditoria de gastos públicos, *compliance* e inteligência governamental, este portal serve como fonte primária essencial. Ele permite cruzar as agendas oficiais de agentes públicos com os deslocamentos reais executados em aeronaves militares, identificando padrões de viagem, comitivas de passageiros (caronas institucionais), destinos recorrentes e datas exatas de presença territorial de um alvo.",
    "notes": "* Os relatórios de voos de autoridades costumam listar o trajeto exato (origem/destino), o horário de decolagem, o número de passageiros e a autoridade requisitante. Esses dados servem de insumo para cruzar com o Diário Oficial da União (DOU) na verificação de pagamentos de diárias de viagem.\n* Os prefixos das aeronaves identificadas nos relatórios da FAB podem ser utilizados para realizar técnicas de GEOINT aeroespacial em plataformas de telemetria baseadas em redes ADSB abertas (como ADSB-Exchange), permitindo rastrear o histórico técnico de voo daquela aeronave específica, mesmo quando omitida em plataformas comerciais (como FlightRadar24).\n* A atualização dos painéis segue fluxos regulatórios específicos e pode apresentar pequenos atrasos sazonais em relação à data do voo executado devido ao tempo de consolidação interna dos relatórios de missão militar."
  },
  {
    "id": "Registro.br WHOIS",
    "title": "Registro.br WHOIS",
    "url": "https://registro.br/tecnologia/ferramentas/whois/",
    "tipo": "Ferramenta de Consulta de WHOIS / Validação Técnica",
    "utilidade": "Consulta oficial de dados de registro e propriedade de domínios com a extensão \".br\"",
    "descricao": "O WHOIS do Registro.br é o serviço oficial e centralizado mantido pelo Núcleo de Informação e Coordenação do Ponto BR (NIC.br), responsável pela administração e registro de todos os nomes de domínio sob o Top-Level Domain (ccTLD) \".br\". A ferramenta realiza a consulta pública de dados associados a esses domínios, retornando informações cadastrais e técnicas indispensáveis sobre a propriedade do ativo digital.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações de infraestrutura e inteligência societária ou cibernética, a consulta ao WHOIS do Registro.br atua como uma fonte de dados primária e oficial para o território brasileiro. Ela permite identificar o CNPJ ou CPF do titular do domínio, a razão social da empresa ou o nome do proprietário individual, as datas de criação e expiração do site, além dos servidores de DNS apontados, servindo como ponto de partida crucial para técnicas de *pivoting*.",
    "notes": "* Diferente de registradores internacionais que ocultam dados sensíveis devido à GDPR, o Registro.br frequentemente exibe o CNPJ de empresas titulares e o nome completo do contato técnico/administrador, o que viabiliza o cruzamento direto de dados com a Receita Federal ou Juntas Comerciais.\n* O serviço impõe restrições contra a coleta massiva automatizada (*rate-limiting* no protocolo WHOIS). Para consultas em lote ou automações, é recomendável dosar o intervalo de requisições a fim de evitar o bloqueio temporário do endereço IP da máquina de investigação."
  },
  {
    "id": "REGULARIZE (Procuradoria-Geral da Fazenda Nacional - PGFN)",
    "title": "REGULARIZE (Procuradoria-Geral da Fazenda Nacional - PGFN)",
    "url": "https://www.regularize.pgfn.gov.br/",
    "tipo": "Portal Governamental de Regularização Fiscal e Cobrança",
    "utilidade": "Consulta, negociação e acompanhamento de débitos inscritos em Dívida Ativa da União e do FGTS.",
    "descricao": "O REGULARIZE é o portal digital de serviços da Procuradoria-Geral da Fazenda Nacional (PGFN). A plataforma é voltada para que contribuintes (pessoas físicas ou jurídicas) consultem, negociem (por meio de transações resolutivas), parcelem e emitam guias de pagamento para débitos tributários e não tributários que foram inscritos em Dívida Ativa da União ou do FGTS.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações patrimoniais, auditorias de conformidade (*due diligence*) e inteligência corporativa ou societária, este portal serve como uma fonte primária crucial para avaliar a saúde financeira e a regularidade jurídica de um alvo. A identificação de inscrições em dívida ativa permite rastrear o histórico de inadimplência fiscal com o Estado, mensurar o passivo financeiro acumulado por empresas ou indivíduos e identificar processos de execução fiscal em andamento.",
    "notes": "* Consultas detalhadas de painéis de negociação e parcelamentos específicos exigem autenticação eletrônica através do sistema GOV.BR ou via certificado digital.\n* Os dados de devedores inscritos na Dívida Ativa da União também alimentam de forma pública e em lote a \"Lista de Devedores da PGFN\", que pode ser explorada de maneira complementar para buscas massivas sem necessidade de login."
  },
  {
    "id": "Remaker AI",
    "title": "Remaker AI",
    "url": "https://remaker.ai/",
    "tipo": "Plataforma Web de Inteligência Artificial Generativa",
    "utilidade": "Geração e edição de imagens por inteligência artificial, criação de variações de rostos (face swap) e desenvolvimento de mídias sintéticas.",
    "descricao": "O Remaker AI é uma plataforma online baseada em inteligência artificial generativa que oferece ferramentas de edição de imagem, criação de arte digital e, principalmente, a funcionalidade de *face swap* (troca de rostos em fotos e vídeos) e geração de mídias sintéticas.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de operações de inteligência de fontes abertas (humanas e digitais - HUMINT/SOCMINT), a plataforma atua principalmente na vertente defensiva e de preparação. Não sendo uma ferramenta de busca ativa, ela é empregada para a criação e refinamento de *sock puppets* (personas/perfis dissimulados), permitindo gerar rostos hiper-realistas e customizados ou alterar mídias existentes para conferir credibilidade e profundidade a identidades operacionais falsas, mitigando riscos de detecção por busca reversa de imagem.",
    "notes": "* A ferramenta é ideal para burlar sistemas básicos de detecção de imagens duplicadas na internet, visto que a fusão de rostos cria uma assinatura digital única e inédita para a foto da persona.\n* Por processar os dados em servidores de terceiros, o analista deve evitar o upload de fotografias reais de alvos ou de dados sensíveis da investigação que possam violar o princípio de privacidade e sigilo da operação."
  },
  {
    "id": "Remove.bg",
    "title": "Remove.bg",
    "url": "https://www.remove.bg/pt-br/",
    "tipo": "Ferramenta Web de Processamento Gráfico Baseada em IA",
    "utilidade": "Remoção automatizada de fundos de imagens utilizando algoritmos de inteligência artificial.",
    "descricao": "O Remove.bg é um serviço automatizado baseado em nuvem que utiliza modelos de inteligência artificial para identificar o elemento principal em uma fotografia (como pessoas, produtos ou objetos) e isolá-lo, removendo completamente o plano de fundo em poucos segundos.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações de inteligência de fontes abertas, a plataforma opera de forma passiva e defensiva, sem realizar buscas ativas por novos dados na rede. Ela é frequentemente integrada à fase de preparação de OPSEC para o desenvolvimento de *sock puppets* (personas/avatares digitais). A ferramenta permite isolar o rosto ou corpo de um perfil sintético gerado por IA para inseri-lo em novos cenários ou fundos neutros, além de auxiliar na limpeza visual de mídias e capturas de tela que serão anexadas a relatórios de inteligência.",
    "notes": "* A remoção de metadados originais da imagem (como dados EXIF) ocorre como consequência do processo de renderização e download do novo arquivo gerado pela ferramenta.\n* Recomenda-se cautela ao fazer o upload de fotografias reais de alvos ou de evidências sensíveis da investigação, priorizando o uso da plataforma para fins de OPSEC e criação de ativos do próprio investigador."
  },
  {
    "id": "ReplayWeb.page",
    "title": "ReplayWeb.page",
    "url": "https://replayweb.page",
    "tipo": "Visualizador Local de Arquivos Web e Ferramenta Forense Serverless",
    "utilidade": "Reprodução offline e análise estática de páginas web guardadas em formatos WARC, WACZ e HAR sem fuga de dados",
    "descricao": "O ReplayWeb.page é um motor de reprodução de arquivos web que opera inteiramente do lado do utilizador (client-side) e de forma serverless. A plataforma permite carregar ficheiros brutos de preservação digital — como WARC (Web ARChive), WACZ e HAR —, processar os seus índices internamente e reconstruir o comportamento interativo original das páginas web capturadas, incluindo recursos multimédia, scripts e ligações antigas.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "fonte/arquivos-noticias",
      "func/forense-local",
      "plataforma/web",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Na fase de análise e processamento de evidências digitais, o ReplayWeb.page é uma ferramenta de eleição para garantir uma OPSEC defensiva absoluta. Ele permite ao investigador auditar minuciosamente o conteúdo histórico de um site ou rede social clonada (alvo/dominio) a partir de um ficheiro previamente descarregado, inspecionando o código-fonte, cabeçalhos HTTP e chamadas de API antigas de forma estática, sem necessidade de interagir com a internet viva ou alertar o alvo.",
    "notes": "* Por processar os ficheiros localmente através de Service Workers no navegador, o utilizador pode carregar dados altamente sensíveis com a segurança de que nenhuma informação é transmitida para servidores de terceiros.\n* Recomenda-se a conversão de ficheiros volumosos do formato WARC clássico para WACZ (usando ferramentas CLI locais) para acelerar a indexação inicial e otimizar a velocidade de navegação na interface gráfica.\n* A ferramenta possui uma funcionalidade de pesquisa avançada por texto integral (Full Text Search) e um inspetor de recursos que expõe a árvore de ficheiros ocultos contidos no arquivo, ideal para localizar scripts maliciosos ou metadados de páginas removidas."
  },
  {
    "id": "Reverse WHOIS - WhoisXMLAPI",
    "title": "Reverse WHOIS - WhoisXMLAPI",
    "url": "https://reverse-whois.whoisxmlapi.com",
    "tipo": "Plataforma Web de Inteligência de Infraestrutura e Domínios",
    "utilidade": "Busca reversa de domínios na internet com base em termos textuais, nomes de proprietários, e-mails ou corporações contidos nos registros WHOIS.",
    "descricao": "O Reverse WHOIS da WhoisXMLAPI é uma ferramenta avançada de inteligência cibernética que permite aos investigadores realizar buscas reversas em bancos de dados WHOIS globais. Em vez de pesquisar um domínio para encontrar seu proprietário, a ferramenta permite inserir termos específicos (como o nome de uma pessoa, uma empresa, uma palavra-chave ou um endereço de e-mail) para descobrir todos os nomes de domínio conectados a esse critério.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/usuario-email",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito do rastreamento de infraestrutura cibernética (CYBINT), investigações de fraudes e mapeamento de superfícies de ataque, esta plataforma funciona como um poderoso motor de *pivoting*. Ela viabiliza a identificação de redes inteiras de sites fraudulentos operados pelo mesmo ator de ameaça, descobre propriedades digitais ocultas de uma empresa alvo ou correlaciona e-mails de contato a domínios registrados globalmente.",
    "notes": "* Os resultados são extraídos de uma base massiva que inclui dados históricos, o que se torna valioso mesmo após a ocultação de registros modernos em decorrência de diretrizes de privacidade (como a GDPR).\n* Consultas avançadas suportam modificadores de busca e operadores lógicos (AND, OR, NOT) para refinar os resultados e eliminar falsos positivos quando nomes comuns são pesquisados."
  },
  {
    "id": "RocketReach",
    "title": "RocketReach",
    "url": "https://rocketreach.co",
    "tipo": "Plataforma Web de Inteligência de Contatos e Prospecção (B2B)",
    "utilidade": "Identificação de perfis profissionais, e-mails corporativos, números de telefone e links de redes sociais de tomadores de decisão globalmente.",
    "descricao": "O RocketReach é uma plataforma de inteligência de contatos comerciais que indexa perfis profissionais de milhões de empresas globalmente. A ferramenta correlaciona dados públicos, perfis de redes sociais (como o LinkedIn) e registros corporativos para encontrar e validar e-mails estruturados (pessoais e de trabalho) e números de telefone de profissionais em diversos níveis hierárquicos.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/usuario-email",
      "alvo/telefone",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito da engenharia social tática, due diligence e investigações corporativas de alvos específicos, a plataforma funciona como um motor avançado de *pivoting*. A partir do nome de um funcionário ou do domínio de uma organização, o analista consegue mapear a estrutura de pessoal de uma empresa, levantar e-mails corporativos válidos para testes de credenciais e obter pontos de contato direto que auxiliam na vetorização de investigações de inteligência cibernética ou humana.",
    "notes": "* A plataforma estima a probabilidade de entrega e validade de cada e-mail exibido (*confidence score*), reduzindo a ocorrência de falsos positivos durante a triagem.\n* As consultas deixam rastros apenas nos servidores do RocketReach, protegendo a OPSEC do investigador contra notificações diretas no perfil do alvo monitorado (como ocorreria em visitas diretas a redes sociais de negócios)."
  },
  {
    "id": "Same Energy",
    "title": "Same Energy",
    "url": "https://same.energy/",
    "tipo": "Motor de Busca Visual e Descoberta Estética por IA / IMINT",
    "utilidade": "Busca visual exploratória baseada em estilo estético, composição, paleta de cores e correlação semântica de imagens",
    "descricao": "O Same Energy é um motor de busca visual minimalista alimentado por aprendizado profundo (*deep learning*) e visão computacional. Diferente dos mecanismos de busca reversa tradicionais que buscam apenas cópias exatas ou correspondências diretas por metadados e texto, a ferramenta indexa imagens analisando estilo artístico, clima (*mood*), paleta cromática, iluminação, composição espacial e padrões semânticos, permitindo navegar infinitamente por correlações visuais similares.",
    "testada": false,
    "tags": [
      "func/busca-identificacao",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas e inteligência de imagens (IMINT), a plataforma é útil na fase de contextualização visual e enriquecimento de evidências. Ela possibilita identificar a estética predominante ou correntes visuais associadas a um determinado símbolo, padrão gráfico, ilustração ou fotografia. Além disso, auxilia analistas na identificação de comunidades, estilos de design de propaganda/campanhas de influência e elementos visuais de nicho que compartilham a mesma \"assinatura estética\" e conceitual.",
    "notes": "* A busca pode ser iniciada tanto por meio de termos textuais descritivos quanto pelo upload de imagens ou clique em resultados sugeridos para refinar a proximidade estética (*more like this*).\n* A ferramenta foca na proximidade visual/estética em vez de correspondência binária de pixels; por isso, deve ser usada para análise de estilo, contexto e semântica artística, e não como substituta única de motores de busca reversa exata (como Google Lens ou Yandex)."
  },
  {
    "id": "ScamSearch.io",
    "title": "ScamSearch.io",
    "url": "https://scamsearch.io",
    "tipo": "Motor de Busca de Fraudes e Reputação Digital",
    "utilidade": "Consulta e verificação de reputação, cruzamento de dados e identificação de registros de fraudes ou golpes associados a múltiplos identificadores digitais.",
    "descricao": "O ScamSearch.io é um indexador e motor de busca focado na consolidação de relatórios de fraudes, golpes e atividades maliciosas reportadas globalmente. A plataforma rastreia e centraliza informações coletadas de centenas de bancos de dados públicos, listas de denúncias e fóruns de segurança, permitindo consultas unificadas por e-mails, usernames, números de telefone, nomes completos ou endereços de carteiras de criptoativos.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/telefone",
      "alvo/financeiro-crypto",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações de cibercrime, due diligence de pessoas físicas e inteligência contra ameaças (Cyber Threat Intelligence), a plataforma serve como um centralizador de inteligência de reputação. Ao inserir um dado conhecido do alvo, o analista consegue identificar se aquele identificador específico já foi utilizado em campanhas de phishing, golpes financeiros ou se possui histórico de denúncias ativas pela comunidade de segurança, facilitando a atribuição e o mapeamento de riscos.",
    "notes": "* Os resultados dependem de relatos prévios e da alimentação de bases de dados de segurança. A ausência de registros na plataforma não garante, isoladamente, que o identificador ou perfil investigado seja legítimo ou seguro.\n* A plataforma funciona de forma complementar a outras ferramentas de SOCMINT e CYBINT, sendo ideal para a triagem inicial de perfis em plataformas de vendas ou contatos não solicitados recebidos pelo analista."
  },
  {
    "id": "Seção de Acesso à Informação - ICMBio",
    "title": "Seção de Acesso à Informação - ICMBio",
    "url": "https://www.gov.br/icmbio/pt-br/acesso-a-informacao",
    "tipo": "Base de Dados Governamental, Portal de Transparência Ambiental e Repositório de LAI",
    "utilidade": "Consulta de dados públicos institucionais, relatórios de fiscalização, histórico de multas/embargos ambientais e formulação de pedidos de informação via Fala.BR",
    "descricao": "A Seção de Acesso à Informação do ICMBio é o hub oficial de transparência ativa e passiva do instituto responsável pelas unidades de conservação federais. A plataforma disponibiliza auditorias, dados de servidores, processos de licitação e contratos, além de servir como portal de acesso para a consulta pública de áreas embargadas, autos de infração ambiental emitidos e o canal Fala.BR para peticionamento de dados não publicados.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito do Corporate OSINT e da gestão de riscos de imagem, esta seção permite realizar o mapeamento passivo de passivos ambientais crísticos. O analista consegue cruzar o CNPJ de um fornecedor (alvo/empresa) ou o CPF de um parceiro de negócios (alvo/pessoa-identidade) com bancos de dados de desmatamento ilegal e sanções administrativas. Adicionalmente, o uso da transparência passiva via LAI possibilita ao investigador requisitar cópias de processos de licenciamento na íntegra, revelando elos societários ocultos e relatórios de vistorias técnicas.",
    "notes": "* O acesso a relatórios padrão, dados de servidores e listagens de embargos gerais é direto e imediato pela interface web.\n* Para formular pedidos específicos de transparência passiva (dados não disponíveis nas tabelas públicas), é mandatório possuir uma conta cadastrada na plataforma Gov.br para utilizar o sistema integrado Fala.BR.\n* OPSEC Crítica: A navegação e download das tabelas de transparência ativa são puramente passivos e não geram alertas. Contudo, ao protocolar um pedido de informação formal via LAI (Fala.BR), a identidade real do analista fica registrada no sistema governamental. Embora a lei proíba a retaliação ou a revelação do nome do requerente para terceiros fora da administração, recomenda-se cautela em investigações de alta sensibilidade."
  },
  {
    "id": "Senha Web (Recuperação de Senha) - Prefeitura de São Paulo",
    "title": "Senha Web (Recuperação de Senha) - Prefeitura de São Paulo",
    "url": "https://senhaweb.prefeitura.sp.gov.br/FormsPwdRecovery/PasswordRecovery.aspx",
    "tipo": "Portal de Serviços Governamentais / Validador de Identidade",
    "utilidade": "Validação da existência cadastral de pessoas físicas (CPF) ou jurídicas (CNPJ) junto ao município de São Paulo via mecanismo de recuperação de conta",
    "descricao": "A página de recuperação de senha do sistema \"Senha Web\" da Prefeitura de São Paulo é um serviço digital voltado a cidadãos e empresas estabelecidas no município. O sistema gerencia o acesso a serviços tributários e administrativos municipais (como emissão de Notas Fiscais Paulistanas e consulta de IPTU).",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto investigativo, este endpoint atua como uma ferramenta de pivotagem e validação passiva/ativa de identidade. Ao inserir um CPF ou CNPJ sob análise, o sistema retorna mensagens de erro diferenciadas ou avança na etapa de recuperação caso o documento possua um cadastro ativo e homologado na Prefeitura de São Paulo, permitindo confirmar o vínculo administrativo ou operacional do alvo com a capital paulista.",
    "notes": "* É uma fonte valiosa para checar se uma determinada empresa fantasma ou indivíduo possui de fato operações ou histórico formal registrado no município de São Paulo.\n* Modificações frequentes nas políticas de CAPTCHA ou limites de requisição por IP na infraestrutura da Prefeitura de São Paulo podem dificultar ou mitigar tentativas de consultas automatizadas ou massivas (*scrapers*)."
  },
  {
    "id": "Shadowmap",
    "title": "Shadowmap",
    "url": "https://shadowmap.org/",
    "tipo": "Plataforma Web de Simulação e Análise Geoespacial 3D",
    "utilidade": "Visualização e modelagem em tempo real de luz solar, trajetórias do sol e projeção de sombras em edifícios, vegetações e relevos 3D.",
    "descricao": "O Shadowmap é uma plataforma interativa de inteligência geoespacial baseada em dados cartográficos tridimensionais, dados de relevo e modelos solares cronológicos. A ferramenta calcula a posição exata do sol em qualquer coordenada global, renderizando dinamicamente as sombras geradas por prédios (incluindo edifícios 3D do Google e dados do OpenStreetMap), montanhas e vegetações em qualquer data e horário do ano.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações de inteligência geoespacial (GEOINT) e de verificação de mídias (como fotos e vídeos de fontes abertas), o Shadowmap é uma das principais ferramentas para a técnica de cronolocalização (*chronolocation*). A partir da direção, tamanho e comportamento das sombras projetadas em uma imagem coletada de uma cena de crime ou evento de interesse, o analista pode usar a plataforma para retroceder ou avançar no tempo e determinar com alta precisão técnica a hora exata ou a estação do ano em que aquele registro visual foi capturado.",
    "notes": "* O controle de linha do tempo (*slider*) de horas e datas sazonais (solstícios/equinócios) permite ao analista de inteligência simular cenários históricos precisos para rebater falsas narrativas ou validar álibis visuais.\n* Os dados arquitetônicos de grandes metrópoles são altamente fiéis por conta da integração nativa com o Google 3D Tiles e Overture Buildings, reduzindo significativamente a taxa de erro em ambientes urbanos densos se comparados a cálculos puramente matemáticos de azimute e elevação solar."
  },
  {
    "id": "Sherlockeye",
    "title": "Sherlockeye",
    "url": "https://sherlockeye.io/",
    "tipo": "Plataforma Web / Agregador e Ecossistema de Inteligência",
    "utilidade": "Plataforma multifuncional de inteligência de fontes abertas (OSINT) baseada em IA para pesquisa reversa de múltiplos identificadores.",
    "descricao": "O Sherlockeye é uma plataforma avançada e integrada de OSINT alimentada por inteligência artificial, projetada para automatizar fluxos de investigação digital e unificar coletas de dados. A ferramenta conecta e cruza informações em tempo real provenientes de mais de 800 fontes abertas globais e nacionais, oferecendo recursos de pesquisa reversa a partir de um único ponto de entrada.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/usuario-email",
      "alvo/telefone",
      "alvo/dominio",
      "alvo/empresa",
      "func/agregador",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No ecossistema de investigações corporativas, inteligência cibernética (CYBINT) e repressão a fraudes, o Sherlockeye atua como um hub centralizado de enriquecimento de dados. Ele agiliza o processo de reconhecimento e mapeamento de alvos ao permitir que o analista insira uma única pista (como um e-mail, telefone, username, CPF, CNPJ ou domínio) e obtenha uma árvore completa de conexões, pegadas digitais e relatórios analíticos gerados por IA, reduzindo o tempo de coleta manual.",
    "notes": "* A plataforma dispõe de um agente autônomo de IA que pode ser instruído textualmente para formular perguntas, deduzir caminhos de investigação e estruturar relatórios complexos com base nos dados brutos agregados.\n* A ferramenta possui recursos voltados à integridade pericial, registrando os resultados de busca na blockchain Solana para assegurar a imutabilidade e a rastreabilidade das evidências digitais em processos ou auditorias.\n* Pela sua característica de concentrar múltiplas consultas de forma simultânea e automatizada, protege a OPSEC direta do analista contra interações ruidosas com os servidores ou perfis do alvo final."
  },
  {
    "id": "Shodan",
    "title": "Shodan",
    "url": "https://shodan.io",
    "tipo": "Motor de Busca de Dispositivos Conectados (Internet-of-Things / Cyber Intelligence)",
    "utilidade": "Mapeamento de infraestrutura, descoberta de dispositivos conectados à internet, servidores, portas abertas e vulnerabilidades expostas.",
    "descricao": "O Shodan é um motor de busca especializado que varre continuamente a internet global para indexar servidores, roteadores, câmeras de segurança, sistemas de controle industrial (SCADA) e qualquer outro dispositivo diretamente conectado à rede. Ao contrário dos motores de busca tradicionais que indexam o conteúdo de páginas web, o Shodan coleta e categoriza os metadados gerados pelas respostas dos protocolos de rede (banners de serviço).",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito da inteligência cibernética (CYBINT) e do reconhecimento de alvos corporativos, o Shodan é uma ferramenta essencial para o mapeamento da superfície de ataque e identificação de pegadas de infraestrutura. A partir de um endereço IP, bloco de rede (CIDR) ou nome de domínio, o analista pode identificar portas abertas, sistemas operacionais em execução, versões de softwares desatualizadas, certificados SSL/TLS associados e potenciais vulnerabilidades (CVEs) sem precisar interagir ativamente ou realizar varreduras diretas contra o alvo, preservando totalmente a OPSEC.",
    "notes": "* A eficácia das buscas no Shodan depende fortemente do uso de operadores avançados (filtros como `net:`, `org:`, `port:`, `product:` e `asn:`), o que permite refinar os dados e eliminar falsos positivos em redes compartilhadas ou serviços de nuvem.\n* Como o Shodan exibe dados históricos e capturas agendadas, as informações contidas em um relatório podem não refletir o estado exato em tempo real do dispositivo caso ele tenha mudado de configuração desde a última varredura do motor de busca."
  },
  {
    "id": "Shodan Dorks - s1rn3tz",
    "title": "Shodan Dorks - s1rn3tz",
    "url": "https://dorks.s1rn3tz.ovh/shodandorks",
    "tipo": "Diretório / Repositório de Dorks e Consultas Avançadas",
    "utilidade": "Repositório e listagem curada de Shodan Dorks para localização de dispositivos expostos, painéis de controle e vulnerabilidades.",
    "descricao": "O Shodan Dorks da s1rn3tz é uma página/repositório focado na compilação, organização e disponibilização de dorks e strings de busca especializadas para o motor de busca Shodan. A ferramenta reúne comandos prontos estruturados com filtros específicos (como portas, ASN, cabeçalhos HTTP, produtos e vulnerabilidades) para otimizar o reconhecimento de ativos.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "fonte/repositorio",
      "func/busca-dorks",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito da inteligência cibernética (CYBINT) e do mapeamento de ameaças, este repositório atua como um facilitador técnico na fase de coleta por indexação. Em vez de formular consultas do zero, o analista utiliza as dorks prontas para descobrir e isolar componentes específicos expostos na internet, como painéis de administração sem autenticação, sistemas de controle industrial (ICS/SCADA), bancos de dados desprotegidos e servidores vulneráveis vinculados a uma determinada infraestrutura ou região.",
    "notes": "* As dorks fornecidas na plataforma devem ser copiadas e executadas diretamente na barra de pesquisa do Shodan ou integradas a ferramentas automatizadas via API.\n* Recomenda-se que o investigador adapte as strings genéricas do repositório inserindo modificadores locais (como o operador `country:BR` ou `org:`) para restringir os resultados ao escopo específico de seu alvo."
  },
  {
    "id": "SICAFI - Módulo Externo (IBAMA)",
    "title": "SICAFI - Módulo Externo (IBAMA)",
    "url": "https://servicos.ibama.gov.br/sicafiext/",
    "tipo": "Portal Governamental de Fiscalização e Arrecadação Ambiental",
    "utilidade": "Consulta e emissão de Certidão Negativa de Débitos (CND), multas e regularidade fiscal/ambiental perante o IBAMA.",
    "descricao": "O SICAFI (Sistema de Cadastro, Arrecadação e Fiscalização) é a plataforma oficial do Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis (IBAMA) destinada ao gerenciamento de débitos, taxas e sanções pecuniárias aplicadas por infrações ambientais. O módulo externo permite a consulta pública de regularidade e a validação de certidões.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações patrimoniais, auditorias de conformidade corporativa (*due diligence*), inteligência do agronegócio e avaliação de riscos de reputação, o portal serve como fonte primária para identificar passivos ambientais e restrições legais. A partir de um CPF ou CNPJ, é possível verificar a existência de multas ativas, processos de cobrança, pendências de arrecadação ou restrições que impeçam a emissão da Certidão Negativa de Débitos, permitindo inferir a conduta regulatória e a saúde financeira/institucional do alvo.",
    "notes": ""
  },
  {
    "id": "SIGEF - Consulta de Parcelas (INCRA)",
    "title": "SIGEF - Consulta de Parcelas (INCRA)",
    "url": "https://sigef.incra.gov.br/consultar/parcelas/",
    "tipo": "Portal Governamental de Gestão Fundiária e Cartografia",
    "utilidade": "Consulta pública de parcelas de imóveis rurais certificados, dados de georreferenciamento e malha fundiária brasileira.",
    "descricao": "O SIGEF (Sistema de Gestão Fundiária) é a plataforma oficial desenvolvida pelo Instituto Nacional de Colonização e Reforma Agrária (INCRA) para subsidiar a governança fundiária do território nacional. O módulo de consulta de parcelas permite o acesso público e transparente a dados técnicos de imóveis rurais que foram georreferenciados e certificados nos termos da Lei nº 10.267/2001.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações patrimoniais, inteligência do agronegócio, auditorias de conformidade (*due diligence*), litígios de terras e análise geoespacial (GEOINT), este portal é uma das fontes primárias mais valiosas do ecossistema brasileiro. Ele possibilita cruzar informações físicas da terra com dados cadastrais de proprietários. A partir de parâmetros específicos, o analista pode extrair polígonos de demarcação (arquivos KML/Shapefile), memoriais descritivos e a planta do imóvel rural, além de identificar sobreposições ilegais em terras indígenas, unidades de conservação ou áreas da União.",
    "notes": "* A busca avançada é altamente flexível, permitindo pesquisar por \"Detentor\" (CPF/CNPJ), \"Imóvel\" (Nome ou Código do INCRA), \"Município\" ou dados do cartório de registro de imóveis (Código CNS e Matrícula).\n* Ao obter o código de uma parcela certificada, o investigador pode baixar o arquivo `.kml` correspondente e plotá-lo diretamente em ferramentas como o Google Earth Pro para analisar o histórico de imagens de satélite e desmatamento daquela exata coordenada ao longo dos anos.\n* É importante ressaltar que o SIGEF contempla os imóveis certificados sob a égide da terceira norma técnica do INCRA. Para uma investigação fundiária completa, o analista deve cruzar esses resultados com o SNCR (Sistema Nacional de Cadastro Rural) e com o CAR (Cadastro Ambiental Rural)."
  },
  {
    "id": "SINESP Cidadão (App Store)",
    "title": "SINESP Cidadão (App Store)",
    "url": "https://apps.apple.com/br/app/sinesp-cidad%C3%A3o/id768157962",
    "tipo": "Aplicativo Móvel Governamental de Segurança Pública",
    "utilidade": "Consulta de situação de roubo ou furto de veículos, mandados de prisão aguardando cumprimento e pessoas desaparecidas.",
    "descricao": "O SINESP Cidadão é um aplicativo oficial do Sistema Nacional de Informações de Segurança Pública, desenvolvido pelo Ministério da Justiça e Segurança Pública (MJSP) do Brasil. Ele permite o acesso direto de cidadãos a bases de dados criminais e de trânsito nacionais para checagem de restrições e mandados.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/mobile",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações de campo, análise de frotas, inteligência patrimonial e backgrounds criminais, este aplicativo é uma fonte primária de consulta ágil. A partir da placa de um veículo, o analista pode verificar imediatamente se há registro de roubo ou furto e confirmar dados de marca/modelo. Adicionalmente, permite a checagem de nomes completos e documentos para verificar a existência de mandados de prisão ativos ou registros na base de pessoas desaparecidas.",
    "notes": "* O aplicativo exige autenticação por meio do sistema unificado GOV.BR para a liberação das consultas de placas e mandados, mantendo um rastro de auditoria atrelado à conta do pesquisador.\n* Para fins de automação ou consultas massivas, o analista deve estar ciente de que o uso do aplicativo móvel é estritamente manual, sendo necessário recorrer a APIs pagas integradas ao SERPRO caso precise de extrações em lote."
  },
  {
    "id": "Sistema de Consulta de Dados Públicos (CDP) - ANP",
    "title": "Sistema de Consulta de Dados Públicos (CDP) - ANP",
    "url": "https://cdp.anp.gov.br",
    "tipo": "Plataforma Web de Consulta de Dados Regulados e Inteligência Setorial",
    "utilidade": "Consulta de situação operacional, interdições, cadastros de postos de combustível, distribuidoras e blocos exploratórios de petróleo e gás",
    "descricao": "O Sistema de Consulta de Dados Públicos (CDP) é a infraestrutura oficial da Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP) que centraliza as consultas aos agentes da indústria de combustíveis, biocombustíveis e exploração. O ecossistema permite auditar o cadastro e o estado de funcionamento (ativo, suspenso ou interditado) de revendedoras de GLP, postos varejistas e contratos de concessão de blocos petrolíferos.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito da inteligência corporativa, due diligence e compliance antifraude, o CDP da ANP é uma fonte primária fundamental para rastrear a idoneidade operacional de redes de distribuição e postos varejistas (alvo/empresa). A consulta passiva permite validar se uma empresa investigada possui autorização ativa para operar, mapear instalações físicas declaradas e monitorizar interdições vigentes por adulteração de combustíveis ou fraudes volumétricas, servindo como insumo material para a mitigação de riscos comerciais.",
    "notes": "* O sistema permite a pesquisa direta pelo CNPJ do agente económico ou pela localização geográfica da instalação, gerando relatórios imediatos sobre bicos de abastecimento, tancagem autorizada e produtos homologados.\n* Por se tratar de um barramento de consulta puramente público e institucional, o investigador atua de forma passiva sem interagir com os sistemas privados do alvo, garantindo uma excelente OPSEC operacional.\n* Em investigações complexas de cadeias de abastecimento, os achados deste portal devem ser cruzados com bases de dados fiscais (como o Portal da NF-e) para confrontar a capacidade real de tancagem declarada na ANP com o fluxo efetivo de notas fiscais emitidas."
  },
  {
    "id": "Sistema de Consultas - ANVISA",
    "title": "Sistema de Consultas - ANVISA",
    "url": "https://consultas.anvisa.gov.br",
    "tipo": "Plataforma Web de Consulta de Dados Regulatórios e Vigilância Sanitária",
    "utilidade": "Consulta de Autorização de Funcionamento de Empresas (AFE), registros de medicamentos, cosméticos, saneantes e certificações de conformidade sanitária",
    "descricao": "O Sistema de Consultas da ANVISA é o portal oficial centralizado pela Agência Nacional de Vigilância Sanitária para a verificação pública e auditoria de regularidade de empresas e insumos sob sua tutela. A plataforma subdivide-se em módulos específicos que permitem pesquisar a validade de licenças de funcionamento corporativas, o status de registro de insumos médicos e laboratoriais, além de notificações de cosméticos, alimentos e produtos saneantes.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações antifraude e due diligence (alvo/empresa), este sistema permite mapear passivamente a infraestrutura legal de fornecedores e parceiros de negócios dos setores farmacêutico, químico, alimentício e estético. O analista consegue validar se uma empresa investigada opera com autorizações legítimas ou se possui AFEs canceladas e resoluções de proibição vigentes, extraindo o nome de diretores ou técnicos responsáveis pela homologação dos produtos.",
    "notes": "* A pesquisa corporativa é otimizada ao utilizar o CNPJ raiz ou o número exato do processo de concessão de funcionamento, evitando ambiguidades geradas por termos textuais genéricos.\n* A interface web adota sistemas de validação humana (CAPTCHA) para coibir raspagens automatizadas massivas e precaver ataques de negação de serviço em seus endpoints públicos.\n* Como as consultas são efetuadas diretamente contra o repositório consolidado da agência reguladora e não interagem com o perímetro de rede ou sistemas privados do alvo, a OPSEC passiva do investigador é totalmente assegurada."
  },
  {
    "id": "Sistema de Valores a Receber - SVR (Banco Central do Brasil)",
    "title": "Sistema de Valores a Receber - SVR (Banco Central do Brasil)",
    "url": "https://valoresareceber.bcb.gov.br/publico",
    "tipo": "Portal Governamental de Consulta de Ativos e Saldos Remanescentes",
    "utilidade": "Consulta pública da existência de fundos esquecidos ou saldos credores (valores a receber) em instituições financeiras por CPFs ou CNPJs.",
    "descricao": "O Sistema de Valores a Receber (SVR) é um serviço oficial mantido pelo Banco Central do Brasil que permite a cidadãos e empresas consultarem se possuem dinheiro esquecido em bancos, consórcios, cooperativas ou outras instituições financeiras reguladas.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações patrimoniais, auditoria de espólios, due diligence e localização de ativos, o portal atua como um validador passivo de relevância financeira. A partir de dados básicos (CPF e data de nascimento para pessoas físicas, ou CNPJ e data de abertura para pessoas jurídicas), o analista pode testar se o alvo possui saldos remanescentes a serem resgatados, servindo como um indicador indireto de contas bancárias ativas ou históricas que podem não ter sido mapeadas inicialmente.",
    "notes": "* A consulta pública inicial exibe apenas uma resposta binária informando se o CPF ou CNPJ pesquisado possui ou não valores a receber. \n* O detalhamento de quais bancos detêm o dinheiro, a origem dos valores e a solicitação de resgate exigem obrigatoriamente uma segunda etapa de autenticação via conta GOV.BR (níveis prata ou ouro) do próprio titular ou de seu representante legal devidamente configurado."
  },
  {
    "id": "Situação Cadastral",
    "title": "Situação Cadastral",
    "url": "https://www.situacao-cadastral.com/",
    "tipo": "Portal Web de Consulta Cadastral",
    "utilidade": "Consulta rápida da situação cadastral e dados cadastrais básicos de CPFs e CNPJs na base da Receita Federal.",
    "descricao": "O site Situacao-Cadastral.com é uma ferramenta de utilidade pública voltada para a consulta rápida do status de inscrição de pessoas físicas (CPF) e jurídicas (CNPJ) perante a Receita Federal do Brasil. A plataforma espelha e simplifica o acesso a dados cadastrais públicos de forma direta.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/empresa",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de triagem inicial, background check e due diligence, a plataforma funciona como um mecanismo ágil de validação de identificadores. A partir de um CPF ou CNPJ, o analista consegue confirmar se o documento é existente, se está \"Ativo\", \"Suspenso\" ou \"Cancelado\", além de obter o nome completo ou a razão social atrelada, servindo como ponto de partida para a ramificação e pivoting da investigação sem a necessidade de navegar por sistemas governamentais mais complexos na fase preliminar.",
    "notes": "* A plataforma geralmente faz uso de sistemas de CAPTCHA ou verificações de segurança automatizadas para impedir consultas em massa por scripts não autorizados, exigindo interação manual do analista.\n* Por ser um indexador de terceiros que consome dados públicos, é recomendável que dados críticos identificados em cenários de litígio ou laudos periciais sejam validados e emitidos diretamente nos canais oficiais da Receita Federal para garantir a integridade da cadeia de custódia."
  },
  {
    "id": "Skymem",
    "title": "Skymem",
    "url": "https://www.skymem.info/",
    "tipo": "Motor de Busca de E-mails / Raspador de Dados Públicos",
    "utilidade": "Extração de e-mails, identificação de contatos de organizações e busca de e-mails associados a nomes ou domínios de internet.",
    "descricao": "O Skymem é um motor de busca e plataforma de raspagem de dados em fontes abertas focado na localização e validação de endereços de e-mail. A ferramenta varre continuamente a internet, perfis de redes sociais e conteúdos digitais públicos para estruturar um banco de dados massivo (com centenas de milhões de registros) vinculando e-mails a indivíduos, corporações e nomes de domínio.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/dominio",
      "fonte/arquivos-noticias",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito da inteligência cibernética (CYBINT), engenharia social tática e background checks, a plataforma opera como um indexador altamente eficiente para realizar a engenharia reversa de credenciais digitais e *pivoting*. A partir de um nome de domínio institucional ou de uma empresa-alvo, o analista consegue mapear a estrutura de e-mails ativos da organização, identificar padrões de nomenclatura (ex: nome.sobrenome@empresa.com) e descobrir novos leads humanos associados a uma marca ou propriedade na internet.",
    "notes": "* A plataforma dispõe de um módulo para extração estática de textos brutos (*Extract Emails*), onde o analista pode colar um emaranhado de dados obtidos localmente e o sistema separa e limpa as duplicatas automaticamente.\n* Por usar dados consolidados de varreduras passadas e registros históricos, alguns e-mails listados para um domínio podem representar contas inativas ou profissionais que já se desligaram da organização, tornando importante cruzar as informações com plataformas de redes sociais profissionais."
  },
  {
    "id": "SMS24.me",
    "title": "SMS24.me",
    "url": "https://sms24.me/",
    "tipo": "Plataforma de Números Virtuais Temporários",
    "utilidade": "Recebimento de SMS online através de números temporários públicos para validação de contas e serviços",
    "descricao": "O SMS24.me é um serviço online que disponibiliza números de telefone públicos e temporários de diversos países. A plataforma permite receber mensagens de texto (SMS) diretamente pela interface web, sendo amplamente utilizada para contornar etapas de verificação de número de telefone em cadastros digitais e ativações de serviços na internet.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/gratuito",
      "opsec/personas"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas, a plataforma funciona como um recurso de apoio para a criação e manutenção de infraestruturas de investigação dissimuladas, permitindo a validação de contas sem a necessidade de expor dados de telefonia reais.",
    "notes": ""
  },
  {
    "id": "SMSPVA",
    "title": "SMSPVA",
    "url": "https://smspva.com/",
    "tipo": "Serviço de Ativação SMS (Simulação de Dispositivos e Telefonia Móvel)",
    "utilidade": "Recebimento de SMS online por meio de números temporários para ativação e validação de contas em plataformas digitais",
    "descricao": "O SMSPVA é uma plataforma comercial que fornece números de telefone temporários de múltiplos países para o recebimento de mensagens de texto (SMS). O serviço é estruturado para contornar processos de verificação automatizada (PVA - *Phone Verification SMS*) em plataformas da internet, redes sociais, aplicativos de mensageria e serviços financeiros.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito de investigações digitais, engenharia social reversa e infiltração tática, a plataforma atua como um recurso de suporte essencial para contornar bloqueios cadastrais e manter a proteção do analista ao interagir com ambientes controlados ou restritos.",
    "notes": ""
  },
  {
    "id": "SNCR - Sistema Nacional de Cadastro Rural (Consulta Pública)",
    "title": "SNCR - Sistema Nacional de Cadastro Rural (Consulta Pública)",
    "url": "https://sncr.serpro.gov.br/sncr-web/consultaPublica.jsf",
    "tipo": "Repositório de Dados Abertos Governamentais",
    "utilidade": "Consulta pública de dados cadastrais de imóveis rurais e validação do Certificado de Cadastro de Imóvel Rural (CCIR)",
    "descricao": "A Consulta Pública do Sistema Nacional de Cadastro Rural (SNCR), desenvolvida pelo Serpro para o INCRA (Instituto Nacional de Colonização e Reforma Agrária), é uma interface oficial que permite a validação e consulta de dados cadastrais de imóveis rurais no território brasileiro. A plataforma possibilita a verificação da autenticidade do Certificado de Cadastro de Imóvel Rural (CCIR), documento indispensável para desmembrar, arrendar, hipotecar ou transferir propriedades rurais.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações patrimoniais, inteligência corporativa e auditoria fundiária, o portal funciona como uma fonte primária para correlacionar propriedades rurais a pessoas físicas ou jurídicas. Permite confirmar a regularidade cadastral de glebas e fazendas, identificar a área total declarada e estabelecer vínculos territoriais cruciais para o mapeamento de ativos ocultos ou verificação de conformidade ambiental e agrária.",
    "notes": "* A consulta exige parâmetros específicos como o Código do Imóvel Rural, UF, Município ou os dados do CCIR para realizar a validação de autenticidade.\n* É uma ferramenta ideal para fases avançadas de inteligência patrimonial, servindo para confrontar informações obtidas em cartórios de Registro de Imóveis (RGI) com o cadastro oficial mantido pela autarquia federal."
  },
  {
    "id": "Social Analyzer",
    "title": "Social Analyzer",
    "url": "https://github.com/qeeqbox/social-analyzer",
    "tipo": "Ferramenta de Análise e Reconhecimento em Mídias Sociais (SOCMINT / Username Enumeration)",
    "utilidade": "Varredura, análise e rastreamento automatizado de perfis, nomes de usuário e pegada digital em centenas de redes sociais e plataformas online",
    "descricao": "O Social Analyzer é uma ferramenta de código aberto voltada para a inteligência em fontes abertas (OSINT) e análise de mídias sociais (SOCMINT). O software automatiza o rastreamento, a verificação e a extração de dados públicos em centenas de redes sociais e sites, buscando correspondências para nomes de usuário (*usernames*), nomes civis e identificadores com base em heurísticas avançadas de detecção, metadados de páginas e APIs.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "func/scrapers-automacao",
      "plataforma/terminal",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito das investigações de fontes abertas, o Social Analyzer atua na fase de reconhecimento passivo e *pivoting*. A ferramenta permite mapear de forma centralizada e acelerada a pegada digital de um indivíduo a partir de um seletor conhecido (*username*), descobrindo presenças ativas em comunidades de nicho, fóruns, redes sociais convencionais e serviços web, o que auxilia na correlação de identidades online com pessoas reais.",
    "notes": "* Pode ser executado em ambiente isolado via Docker, facilitando a implantação tanto com interface de terminal quanto com a interface web integrada.\n* Oferece múltiplos níveis de análise (*analysis levels*), variando desde a simples verificação de existência do perfil até a extração profunda de metadados e fotos de perfil para reduzir a incidência de falsos positivos."
  },
  {
    "id": "Social Searcher",
    "title": "Social Searcher",
    "url": "https://www.social-searcher.com",
    "tipo": "Motor de Busca Social Global e Agregador de Menções (SOCMINT)",
    "utilidade": "Rastreamento passivo de termos, hashtags e nomes de usuário em múltiplas redes sociais simultaneamente em tempo real",
    "descricao": "O Social Searcher é um mecanismo de busca especializado no monitoramento de mídias sociais que rastreia menções públicas na internet superficial. A plataforma consolida em um único painel os resultados de publicações oriundas de diversas redes (como X/Twitter, YouTube, Reddit, Vimeo e redes de blogs), fornecendo estatísticas de engajamento, análise de sentimento automatizada (positivo, negativo ou neutro) e identificação dos usuários mais ativos associados ao termo pesquisado.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/usuario-email",
      "fonte/redes-sociais",
      "func/busca-ampla",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo do SOCMINT e do reconhecimento inicial de alvos, o Social Searcher é um recurso tático de alto valor. Ele permite ao analista mapear passivamente a repercussão e a presença digital de um indivíduo (alvo/pessoa-identidade) ou o uso de um pseudônimo específico (alvo/usuario-email) na web aberta. A ferramenta economiza tempo operacional ao dispensar a necessidade de inspecionar individualmente cada plataforma social, expondo postagens isoladas, comentários e fóruns públicos que poderiam passar despercebidos.",
    "notes": "* A execução de consultas básicas na interface web não exige a criação de uma conta ou a realização de login, proporcionando uma excelente OPSEC defensiva ao evitar o uso ou a exposição de contas dissimuladas (Sock Puppets) do investigador.\n* Os dados analíticos de sentimento fornecidos pela inteligência artificial da plataforma servem como um indicador rápido de contexto, auxiliando na triagem de ataques reputacionais ou campanhas coordenadas de desinformação.\n* Por depender diretamente do consumo de APIs públicas e mecanismos de indexação de terceiros, a profundidade dos resultados gerados pela ferramenta pode flutuar de acordo com as políticas de restrição de tráfego e rate-limiting impostas pelas redes sociais auditadas."
  },
  {
    "id": "Sogou Pic (Sogou Images)",
    "title": "Sogou Pic (Sogou Images)",
    "url": "https://pic.sogou.com/",
    "tipo": "Motor de Busca Visual e Reversa de Imagens / IMINT",
    "utilidade": "Busca reversa de imagens, reconhecimento facial e indexação visual com foco no ecossistema e redes sociais da Ásia e China",
    "descricao": "O Sogou Pic é o serviço especializado de busca de imagens e reconhecimento visual do Sogou, um dos principais motores de busca da China. A plataforma oferece capacidades avançadas de busca reversa por upload de arquivo ou URL, utilizando algoritmos de visão computacional otimizados para rastrear correspondências visuais, padrões faciais, fotografias similares e produtos em páginas indexadas da internet global e, especialmente, na web asiática.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/busca-identificacao",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de fontes abertas, inteligência de imagens (IMINT) e checagem de fatos, o Sogou Pic é uma ferramenta complementar fundamental para mitigar pontos cegos deixados por buscadores ocidentais (como Google Lens ou Bing). Ele é altamente eficaz na localização da origem de imagens, identificação de pessoas em plataformas e fóruns orientais (Weibo, Zhihu, Baidu Tieba), detecção de reaproveitamento indevido de fotografias e verificação da autenticidade de mídias virais ou perfis sintéticos (*catfishing*).",
    "notes": "* A ferramenta possui taxa de sucesso superior a motores ocidentais ao pesquisar imagens originárias ou compartilhadas dentro do ecossistema de redes sociais e fóruns chineses.\n* Recomenda-se o uso integrado a extensões de tradução automática no navegador, visto que grande parte da interface e dos resultados indexados é apresentada em mandarim."
  },
  {
    "id": "Sonic Visualiser",
    "title": "Sonic Visualiser",
    "url": "https://www.sonicvisualiser.org",
    "tipo": "Software Desktop de Análise Forense de Áudio e Espectrograma",
    "utilidade": "Visualização de formas de onda, análise profunda de espectrogramas e verificação de integridade/edição em arquivos de áudio locais",
    "descricao": "O Sonic Visualiser é uma ferramenta de código aberto voltada para a visualização, análise e anotação detalhada de arquivos de áudio. O sistema permite que o investigador examine o conteúdo sonoro através de camadas visuais interativas, como visualizadores de formas de onda e espectrogramas de altíssima resolução, suportando o uso de plugins de terceiros (padrão Vamp) para automatizar a extração de parâmetros sonoros estruturais.",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "func/forense-local",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo da verificação de veracidade de evidências visuais e sonoras, o Sonic Visualiser é indispensável para auditar mídias obtidas em fontes abertas. Ele permite ao analista inspecionar passivamente o espectrograma de uma gravação para detectar cortes abruptos, edições ocultas, ruídos de fundo manipulados ou assinaturas de compressão sintética (típicas de deepfakes de voz), auxiliando na validação e atribuição da autoria do áudio a um indivíduo de interesse (alvo/pessoa-identidade).",
    "notes": "* Por operar estritamente de forma local (offline) na máquina de análise do investigador, a ferramenta oferece uma OPSEC defensiva impecável, garantindo que nenhum arquivo de áudio sensível ou evidência protegida vaze para servidores na nuvem durante o processo de perícia.\n* A capacidade de isolar frequências específicas permite ao analista filtrar ruídos de fundo (como sirenes, motores, pássaros ou tráfego), gerando insumos fundamentais para técnicas de geolocalização acústica secundária.\n* Para expandir a capacidade de análise de dados estruturados (como detecção automática de silêncios ou alterações de pitch), recomenda-se a instalação prévia do pacote de extensões Vamp Plugins diretamente no diretório do software."
  },
  {
    "id": "Sputnik",
    "title": "Sputnik",
    "url": "https://github.com",
    "tipo": "Ferramenta de Linha de Comando (CLI) de CTI e Triagem de Infraestrutura",
    "utilidade": "Consulta automatizada e simultânea de reputação de IPs, domínios, URLs e hashes em múltiplos motores de inteligência cibernética",
    "descricao": "O Sputnik é um utilitário open-source desenvolvido em Python para operação em linha de comando que visa acelerar o processo de enriquecimento de indicadores técnicos. A ferramenta permite ao analista submeter um ativo lógico (como um endereço IP ou nome de domínio) e disparar consultas automáticas em lote para diversas APIs e motores de reputação do mercado (como VirusTotal, Shodan, URLVoid, AbuseIPDB, entre outros), centralizando as respostas estruturadas no terminal.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/terminal",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No cotidiano de operações de Cyber Threat Intelligence (CTI) e footprinting técnico, o Sputnik atua como um acelerador de triagem inicial. Em vez de o investigador abrir manualmente dezenas de abas no navegador para checar a idoneidade de um IP ou domínio suspeito associado a um ataque, a ferramenta automatiza esse cruzamento em segundos. Isso fornece um veredito consolidado de múltiplos fornecedores de segurança de forma ágil, facilitando a tomada de decisões táticas.",
    "notes": "* Para usufruir da capacidade total da ferramenta com motores que exigem autenticação corporativa, é necessário configurar previamente as chaves de API (API Keys) pessoais do analista no arquivo de configuração do script.\n* A OPSEC defensiva durante a consulta depende diretamente da natureza das APIs integradas. A maioria dos motores executa buscas puramente passivas em seus próprios bancos de dados históricos, mas o analista deve estar ciente de que o uso de chaves de API vinculadas à sua identidade corporativa registra a atividade de busca nas plataformas parceiras.\n* Devido à sua arquitetura CLI simplificada, os outputs gerados pelo Sputnik podem ser facilmente redirecionados para arquivos de texto (.txt) ou integrados a pipelines locais de automação de segurança por meio de operadores do terminal."
  },
  {
    "id": "Sr. Watson",
    "title": "Sr. Watson",
    "url": "https://srwatson.io/",
    "tipo": "Plataforma Web de Inteligência Empresarial e Análise de Vínculos",
    "utilidade": "Investigação empresarial, análise de vínculos societários, mapeamento de grupos econômicos e visualização em grafos de empresas brasileiras",
    "descricao": "O Sr. Watson é uma plataforma web voltada para a inteligência e investigação corporativa no ecossistema de dados brasileiro. A ferramenta indexa e correlaciona dezenas de milhões de registros públicos da Receita Federal e outros órgãos oficiais, permitindo pesquisar empresas por CNPJ, Razão Social, sócios (CPF), e-mails e telefones de contato. O diferencial da aplicação reside na estruturação de dados em formato de grafo interativo (mapa de vínculos), possibilitando a identificação visual de quadros societários (QSA), filiais, empresas coligadas, laranjas, grupos econômicos ocultos e endereços compartilhados.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/pessoa-identidade",
      "alvo/usuario-email",
      "alvo/telefone",
      "fonte/registros-publicos-gov",
      "func/busca-identificacao",
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito de investigações corporativas, Due Diligence, auditoria de compliance, recuperação de ativos e combate a fraudes empresariais, o Sr. Watson serve como um avançado motor de *pivoting* e visualização de vínculos. O analista consegue partir de um identificador inicial (como um CNPJ ou o nome de um sócio) para expandir interativamente toda a rede de relacionamentos da pessoa jurídica ou física, correlacionando contatos telefônicos, caixas postais corporativas e fachadas físicas compartilhadas.",
    "notes": "* A visualização em grafo facilita a identificação rápida de \"empresas de fachada\" ou \"laranjas\", especialmente quando vários CNPJs distintos compartilham o mesmo número de contato, e-mail de contador ou endereço físico.\n* O recurso de busca básica pode ser realizado de forma anônima diretamente pela barra de pesquisa do portal.\n* Para relatórios probatórios ou instrução pericial, recomenda-se contravalidar as informações societárias obtidas diretamente nas certidões das Juntas Comerciais estaduais ou na base de dados em tempo real da Receita Federal."
  },
  {
    "id": "Startpage",
    "title": "Startpage",
    "url": "https://www.startpage.com/",
    "tipo": "Motor de Busca Privativo e Proxy de Resultados Web",
    "utilidade": "Mecanismo de busca web focado em privacidade que entrega resultados do Google sem rastrear endereços IP, histórico ou metadados de usuários",
    "descricao": "O Startpage é um mecanismo de busca web privativo que atua como intermediário entre o usuário e o índice de pesquisa do Google. A plataforma consulta os servidores do Google de forma anônima e entrega os resultados ao usuário sem registrar endereços IP, sem armazenar consultas em logs de servidores, sem utilizar cookies de perfilamento e sem construir históricos comportamentais para anúncios direcionados. Além disso, disponibiliza a função \"Visualização Anônima\" (*Anonymous View*), que permite carregar páginas da lista de resultados por meio de um servidor proxy integrado.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "func/busca-dorks",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No ciclo de inteligência em fontes abertas, o Startpage é utilizado como fonte primária de reconhecimento e coleta de informações na web de superfície. Ele viabiliza a obtenção da densidade e qualidade dos resultados do Google sem expor o endereço IP real do analista e sem viés de personalização algorítmica (*filter bubble*). A ferramenta apoia a segurança operacional (OPSEC) ao evitar que termos de pesquisa investigativos sensíveis sejam vinculados à identidade digital do investigador e ao permitir a inspeção preliminar de sites desconhecidos via proxy.",
    "notes": "* A funcionalidade \"Visualização Anônima\" (*Anonymous View*) ao lado de cada link resultante permite inspecionar sites suspeitos sem que o servidor de destino capture o endereço IP real ou os cabeçalhos do navegador do investigador.\n* Por não guardar preferências ou histórico de localização geográfica, consultas regionais podem exigir a especificação explícita do país, cidade ou uso do operador `site:` com o ccTLD correspondente no campo de busca."
  },
  {
    "id": "Stolen Camera Finder",
    "title": "Stolen Camera Finder",
    "url": "https://www.stolencamerafinder.com",
    "tipo": "Plataforma Web de Busca Reversa por Número de Série e Forense de Imagem",
    "utilidade": "Rastreamento de dispositivos fotográficos e identificação de autoria de mídias através do mapeamento de números de série em metadados EXIF",
    "descricao": "O Stolen Camera Finder é uma ferramenta online que raspa e indexa continuamente imagens da internet pública para catalogar números de série exclusivos embutidos nos metadados EXIF (Exchangeable Image File Format) pelas câmeras digitais. Ao submeter uma fotografia de amostra, o sistema lê a estrutura binária do arquivo, isola o serial de hardware do sensor e varre seu banco de dados para localizar outras fotos capturadas pelo mesmo equipamento.",
    "testada": false,
    "tags": [
      "func/busca-identificacao",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo do IMINT e da engenharia social reversa, esta ferramenta é um recurso poderoso para quebrar pseudônimos e estabelecer atribuição (alvo/pessoa-identidade). A partir de uma única imagem obtida em fontes abertas, o analista consegue extrair a assinatura digital do hardware e descobrir se o mesmo equipamento foi utilizado para publicar fotos em outras plataformas (como Flickr ou blogs antigos). Isso permite conectar contas aparentemente anônimas ao mesmo indivíduo ou rastrear o paradeiro de um dispositivo furtado.",
    "notes": "* A eficácia da ferramenta depende inteiramente da preservação dos blocos de metadados originais; plataformas de redes sociais comerciais (como Instagram e Facebook) eliminam esses registros durante o upload, tornando necessário obter arquivos brutos ou hospedados em plataformas que preservem o EXIF (ex: repositórios de fotografia profissional).\n* Para preservar a OPSEC defensiva, caso a imagem sob investigação possua dados sensíveis ou geolocalização crítica associada ao investigador, recomenda-se realizar a extração do número de série localmente (via ExifTool) e inserir apenas a string numérica na caixa de pesquisa de texto do site, em vez de fazer o upload direto da foto.\n* O banco de dados da plataforma baseia-se em web scraping focado em plataformas de compartilhamento de fotos, o que significa que o sistema pode não cobrir imagens hospedadas em fóruns privados ou na deep web."
  },
  {
    "id": "Subzin",
    "title": "Subzin",
    "url": "https://www.subzin.com/",
    "tipo": "Motor de Busca de Legendas e Transcrições Audiovisuais",
    "utilidade": "Indexação, transcrição e recuperação de diálogos e frases literais em arquivos e legendas de filmes e séries",
    "descricao": "O Subzin é uma plataforma online de indexação e busca textual baseada em legendas e transcrições de obras cinematográficas e episódios de séries de televisão. O serviço mapeia milhões de linhas de diálogo, permitindo ao usuário pesquisar citações ou frases específicas para identificar o título exato da produção, a temporada/episódio e o instante temporal (*timestamp*) em que a fala ocorre.",
    "testada": false,
    "tags": [
      "fonte/arquivos-noticias",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de fontes abertas, análise de mídias (IMINT/AVINT) e checagem de fatos (*fact-checking*), o Subzin atua como repositório de referência para verificação da proveniência de conteúdos falados. A ferramenta viabiliza a identificação rápida da origem de diálogos, transcrições e áudios que circulam na internet associados a informações falsas, teorias da conspiração ou alegações enganosas sobre declarações públicas, permitindo confirmar se determinado trecho textual provém de um roteiro de ficção ou produção televisiva.",
    "notes": "* Útil para correlacionar falas extraídas de áudios manipulados ou interceptados com transcrições oficiais de filmes, auxiliando na desarticulação de boatos que utilizam dublagens ou falas fictícias como se fossem declarações reais.\n* A ferramenta fornece o contexto temporal sequencial (frases ditas imediatamente antes e depois do termo pesquisado), facilitando a confirmação do contexto dramático original da cena."
  },
  {
    "id": "SunCalc",
    "title": "SunCalc",
    "url": "https://www.suncalc.org",
    "tipo": "Plataforma Web de Análise Geoespacial e Cronolocalização Solar",
    "utilidade": "Cálculo matemático da posição do sol, ângulos de iluminação e projeção de comprimentos de sombra para qualquer coordenada e data na Terra",
    "descricao": "O SunCalc é um utilitário online interativo projetado para calcular o movimento solar e suas fases ao longo de um dia específico em uma localização geográfica selecionada. A ferramenta sobrepõe gráficos lineares a um mapa digital, exibindo a trajetória do sol, a altitude solar, o azimute e a direção/proporção exata da sombra projetada por um objeto vertical em horários específicos.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo do GEOINT e do IMINT (Inteligência de Imagens), o SunCalc é a ferramenta definitiva para realizar a cronolocalização e refutar álibis. A partir de uma fotografia cujo local de captura já foi identificado, o analista mede o ângulo e a proporção da sombra de pontos fixos (como postes ou edifícios). Ao inserir a coordenada e o dia do evento no SunCalc, o sistema calcula passivamente a correspondência exata, revelando a hora aproximada em que a imagem foi registrada e validando a integridade da evidência visual.",
    "notes": "* A precisão da análise depende da correta identificação do fuso horário local e da inclinação do terreno onde o objeto alvo está fixado, fatores que podem alterar a percepção visual da sombra.\n* Por ser uma aplicação puramente matemática baseada em equações astronômicas executadas no lado do cliente (Client-Side), a pesquisa não envia dados sensíveis ou imagens para servidores centrais, garantindo uma OPSEC defensiva excelente.\n* A ferramenta possui uma versão alternativa voltada para o mapeamento lunar (MoonCalc), útil para investigações que envolvam mídias capturadas em períodos noturnos sob condições de iluminação natural específica."
  },
  {
    "id": "SunEarthTools",
    "title": "SunEarthTools",
    "url": "https://www.sunearthtools.com",
    "tipo": "Portal Web de Utilitários Geoespaciais e Modelagem Solar",
    "utilidade": "Cálculo da trajetória do sol, medição de ângulos de sombreamento e conversão multidimensional de coordenadas geográficas",
    "descricao": "O SunEarthTools é um hub online que reúne diversas ferramentas matemáticas e cartográficas focadas na interação entre a Terra e o Sol. O sistema permite projetar o caminho do sol (Sun Path) em mapas interativos, estimar a altura do sol e o azimute para qualquer data da história, calcular o ganho térmico solar e converter dados de localização entre diferentes datums e formatos (Graus Decimais, DMS, UTM).",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo do GEOINT e da perícia de mídias de fontes abertas, o SunEarthTools é uma alternativa ou complemento robusto ao SunCalc para tarefas de cronolocalização. Ele permite ao analista inserir a geolocalização exata de um cenário (fonte/geoespacial) e extrair relatórios tabelados sobre os ângulos de incidência da luz em uma data específica. Cruzando a proporção de sombra de objetos fixos da imagem com os dados matemáticos do portal, é possível deduzir a hora exata da captura e atestar a integridade factual da evidência.",
    "notes": "* Além dos gráficos cartográficos visuais, a plataforma gera tabelas de dados brutos exportáveis com valores de azimute e zênite minuto a minuto, o que confere maior precisão matemática para investigações que exigem relatórios formais.\n* O site abriga ferramentas acessórias de alto valor prático para o analista, como conversores rápidos de coordenadas e geradores de KML para plotagem direta no Google Earth.\n* A OPSEC defensiva é excelente, visto que os algoritmos de cálculo são processados sem a necessidade de submissão de imagens do alvo aos servidores da plataforma, mantendo a triagem estritamente passiva e confidencial."
  },
  {
    "id": "SUPERAntiSpyware",
    "title": "SUPERAntiSpyware",
    "url": "https://www.superantispyware.com",
    "tipo": "Software de Segurança da Informação / Anti-Spyware e Antivírus Local",
    "utilidade": "Detecção e remoção de malwares, spywares, adwares e ameaças locais no ambiente de investigação para manutenção da segurança do analista",
    "descricao": "O SUPERAntiSpyware é um software de segurança voltado para sistemas operacionais de desktop projetado para detectar, isolar e remover uma ampla gama de ameaças cibernéticas locais, tais como spywares, adwares, malwares, cavalos de troia, rootkits e keyloggers. Ele atua fazendo varreduras profundas no sistema de arquivos e na memória do computador para mitigar infecções.",
    "testada": false,
    "tags": [
      "plataforma/desktop",
      "acesso/limitado",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, o SUPERAntiSpyware atua diretamente na proteção do analista e na integridade de sua infraestrutura local (OPSEC), garantindo que a máquina de investigação ou máquina virtual (VM) não seja comprometida por artefatos maliciosos de contra-inteligência ou spywares que possam vazar dados da operação.",
    "notes": "* Ideal para ser executado periodicamente em Máquinas Virtuais (VMs) de investigação após a conclusão de coletas de dados complexas ou interações com portais potencialmente maliciosos.\n* Pode ser utilizado em conjunto com ferramentas de monitoramento de processos para assegurar que nenhuma persistência oculta ou artefato espião permaneça ativo em segundo plano na máquina local."
  },
  {
    "id": "Swisscows",
    "title": "Swisscows",
    "url": "https://swisscows.com/pt",
    "tipo": "Motor de Busca Web Privativo e Indexador Semântico",
    "utilidade": "Mecanismo de busca privativo na web para consultas neutras, pesquisa contextual e recuperação de informações sem rastreamento de dados ou telemetria",
    "descricao": "O Swisscows é um motor de busca na web com sede e infraestrutura de servidores localizadas na Suíça, projetado com foco estrito em privacidade e proteção de dados. A ferramenta opera com indexação própria combinada a índices parceiros sem armazenar endereços IP, sem registrar o histórico de pesquisas, sem criar perfis comportamentais e sem utilizar cookies de rastreamento comercial. Além disso, disponibiliza mapas conceituais e sugestões de termos interligados por relevância semântica.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No ciclo de inteligência de fontes abertas, o Swisscows é utilizado na etapa de reconhecimento e coleta de informações em fontes abertas de superfície. Por não registrar histórico nem personalizar respostas com base em pegada digital, a plataforma fornece resultados de busca limpos e isentos da \"bolha de filtros\" (*filter bubble*). Seu uso fortalece a segurança operacional (OPSEC) do analista ao garantir que as palavras-chave e tópicos sensíveis investigados não fiquem associados à identidade ou ao endereço IP real do pesquisador.",
    "notes": "* A plataforma implementa filtros estritos voltados para conteúdos familiares (*family-friendly*), o que pode omitir ou restringir certos tópicos sensíveis em comparação com buscadores generalistas não filtrados.\n* Apresenta um painel lateral dinâmico de termos associados que auxilia na descoberta de palavras-chave correlacionadas e na expansão do escopo inicial da pesquisa investigativa."
  },
  {
    "id": "SynScan Breaches (Verified Search)",
    "title": "SynScan Breaches (Verified Search)",
    "url": "https://synscan.net/breaches",
    "tipo": "Plataforma de Inteligência de Vazamentos / Busca de Vazamentos (Breach Intelligence)",
    "utilidade": "Consulta e identificação de credenciais vazadas e dados expostos em incidentes de segurança globais para inteligência de ameaças e validação de alvos",
    "descricao": "O SynScan Breaches é um módulo especializado da plataforma SynScan voltado para a inteligência de vazamentos (*Breach Intelligence*). A ferramenta indexa e disponibiliza dados provenientes de incidentes de segurança, vazamentos de bases de dados (*data leaks*) e repositórios expostos, permitindo buscas estruturadas por múltiplos campos em texto claro mediante a comprovação de propriedade ou escopo de análise.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "alvo/pessoa-identidade",
      "alvo/telefone",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações corporativas e cibernéticas, a ferramenta é utilizada na fase de coleta e pivoteamento de dados. Ela permite verificar se um alvo (indivíduo ou organização) teve informações sensíveis expostas, auxiliando no mapeamento de pegadas digitais, senhas reutilizadas e na correlação de identificadores para a construção do perfil do investigado.",
    "notes": "* A função \"Verified Search\" exige o recebimento e a validação de um link enviado ao e-mail pesquisado para liberar a visualização dos dados em formato bruto (*plain text*), o que deve ser considerado na OPSEC do investigador para evitar notificações ao alvo.\n* É recomendada para validar se domínios corporativos sob investigação possuem credenciais ativas expostas, permitindo avaliar a superfície de ataque e o risco de comprometimento de infraestruturas."
  },
  {
    "id": "SynthID",
    "title": "SynthID",
    "url": "https://deepmind.com/synthid",
    "tipo": "Ferramenta de Detecção, Verificação e Integridade de Mídias por IA",
    "utilidade": "Identificação e inserção de marcas d'água digitais imperceptíveis em conteúdos gerados por inteligência artificial (imagens, áudio, vídeo e texto).",
    "descricao": "O SynthID é uma tecnologia desenvolvida pela Google DeepMind voltada para a aplicação e detecção de marcas d'água digitais imperceptíveis em mídias geradas por inteligência artificial. A ferramenta atua de forma nativa nas estruturas internas dos arquivos — modificando de maneira sutil a distribuição de pixels de imagens, os quadros de vídeos, os espectrogramas de áudio e as probabilidades de amostragem de tokens em cadeias de texto —, permitindo que a assinatura de procedência resista a transformações comuns, como compressão de dados, edições, cortes e aplicação de filtros, sem degradar a qualidade perceptível do conteúdo original.",
    "testada": false,
    "tags": [
      "func/analise-processamento-ia",
      "plataforma/web",
      "plataforma/terminal",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações baseadas em fontes abertas, combate à desinformação e auditoria de perfis sintéticos, o SynthID funciona como um mecanismo de validação técnica para atestar a integridade de evidências digitais e identificar conteúdos gerados artificialmente.",
    "notes": "* Altamente recomendado para a análise de procedência em investigações internacionais de guerra de informação, confirmando se comunicados oficiais ou registros audiovisuais de impacto foram fabricados utilizando modelos generativos da Google (como Imagen, Veo e Lyria) ou de plataformas parceiras integradas.\n* É importante considerar que a robustez do sinal do detector de texto pode diminuir drasticamente se o conteúdo sofrer edições profundas, reescritas humanas massivas ou for traduzido para outros idiomas antes do processo de análise técnica."
  },
  {
    "id": "Tails (The Amnesic Incognito Live System)",
    "title": "Tails (The Amnesic Incognito Live System)",
    "url": "https://tails.net/",
    "tipo": "Sistema Operacional Amigável à Privacidade (Baseado em Debian Linux)",
    "utilidade": "Preservação de anonimato técnico, evasão de censura e isolamento de infraestrutura de investigação através de um sistema operacional live focado em segurança.",
    "descricao": "O Tails é um sistema operacional portátil baseado em Debian Linux projetado especificamente para preservar a privacidade e o anonimato dos usuários. Ele é executado em modo \"Live\" diretamente a partir de uma mídia externa (como um pendrive ou DVD), operando inteiramente na memória RAM do computador sem deixar rastros ou modificar o sistema operacional instalado no disco rígido da máquina hospedeira. Por padrão, o sistema força todo o tráfego de internet de saída a passar obrigatoriamente pela rede Tor e apaga todos os dados residuais assim que é encerrado.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas e segurança das operações (OPSEC), o Tails atua como uma camada extrema de blindagem e contramedida técnica para proteger a identidade do investigador. Ele mitiga riscos de contra-inteligência e rastreamento persistente de hardware e comportamento ao isolar completamente a atividade investigativa do ambiente real do analista.",
    "notes": "* Ideal para cenários críticos em que o analista necessita acessar portais ou fóruns hostis sem riscos de contaminação por malware persistente ou rastreamento físico do dispositivo de origem.\n* Como o sistema opera de forma amnésica por padrão, é crucial configurar um volume persistente criptografado (Encrypted Persistent Storage) caso o investigador precise armazenar evidências, relatórios ou chaves de segurança entre diferentes sessões de trabalho."
  },
  {
    "id": "Tela de Recuperação de Senha - Vivo (Meu Vivo)",
    "title": "Tela de Recuperação de Senha - Vivo (Meu Vivo)",
    "url": "https://mvfront.vivo.com.br/password-recovery#/welcome-vivo/recover-password",
    "tipo": "Portal Web / Endpoint de Autenticação e Recuperação",
    "utilidade": "Validação de existência de contas e cruzamento de identificadores (CPF, telefone ou e-mail) atrelados à operadora Vivo.",
    "descricao": "A página de recuperação de senha do portal Meu Vivo é o endpoint oficial da operadora de telecomunicações Vivo destinado a permitir que usuários restabeleçam o acesso às suas contas informando dados cadastrais, como CPF, e-mail ou número de telefone celular.",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "alvo/usuario-email",
      "alvo/pessoa-identidade",
      "func/validacao-status",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações de pegada digital, verificação de identidade e engenharia reversa de dados de contato, este endpoint atua como um validador de dados numéricos e textuais. Ele permite determinar se um determinado identificador está ativamente associado a um cliente da operadora, auxiliando na redução do escopo de alvos e na confirmação de vínculos.",
    "notes": "* A análise depende da observação das respostas visuais e comportamentais da aplicação (ex: mensagens de erro diferenciadas como \"Usuário não encontrado\" versus o direcionamento para o envio de um token de validação).\n* Mecanismos de proteção modernos (como CAPTCHAs, limites de requisição por IP ou rate limiting) podem ser acionados caso múltiplas consultas consecutivas sejam realizadas, exigindo o monitoramento da OPSEC do analista."
  },
  {
    "id": "Teletudo Busqueitor",
    "title": "Teletudo Busqueitor",
    "url": "https://teletudo.com/busqueitor",
    "tipo": "Catálogo Telefônico Digital e Buscador de Assinantes",
    "utilidade": "Consulta de assinantes telefônicos, localização de endereços e identificação de titulares a partir de bases de listas telefônicas públicas e comerciais no Brasil.",
    "descricao": "O Teletudo Busqueitor é uma ferramenta web que funciona como um catálogo telefônico digital integrado para o território brasileiro. A plataforma indexa e estrutura registros de assinantes de telefonia fixa e comercial, permitindo a realização de buscas diretas e cruzadas por meio de nomes de indivíduos, termos comerciais, logradouros (endereços) ou números de telefone específicos.",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de engenharia social defensiva, rastreamento de alvos (People Intel) e investigações patrimoniais/locacionais, o Busqueitor serve como um vetor ágil de engenharia reversa de dados de contato. Ele possibilita que o analista realize o *pivoting* a partir de um número de telefone fixo isolado para descobrir a identidade de seu assinante e o endereço de instalação associado, ou utilize um endereço físico conhecido para mapear potenciais linhas telefônicas e moradores vinculados àquela localidade.",
    "notes": "* Por se basear fortemente em históricos de listas telefônicas convencionais (páginas brancas e amarelas), a ferramenta possui excelente cobertura para linhas de telefonia fixa e operadoras tradicionais, porém apresenta limitações severas na indexação de telefones celulares (móveis) recentes.\n* Do ponto de vista de OPSEC (Segurança Operacional), o site exibe uma densa camada de anúncios publicitários e scripts de rastreamento comercial. É fundamental que o investigador utilize navegadores blindados com bloqueadores de anúncios e rastreadores (como uBlock Origin) ativados para evitar a exposição de sua própria pegada digital."
  },
  {
    "id": "Tempail",
    "title": "Tempail",
    "url": "https://tempail.com/pt/",
    "tipo": "Serviço de E-mail Temporário (Burner Email Service)",
    "utilidade": "Geração de e-mails temporários e descartáveis para proteção de identidade e criação de contas de cobertura",
    "descricao": "O Tempail é uma plataforma online que fornece endereços de e-mail temporários, descartáveis e anônimos que expiram após um determinado período. O serviço permite receber mensagens e anexos em tempo real diretamente por meio de sua interface web, eliminando a necessidade de fornecer o e-mail real do investigador em sites de terceiros.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/gratuito",
      "opsec/personas"
    ],
    "utilidade_Osint": "",
    "notes": "* Ideal para contornar formulários de captura e paywalls que exigem um cadastro rápido com e-mail para liberação de downloads de relatórios ou acesso a ferramentas de consulta.\n* Por se tratar de um e-mail público e temporário, não deve ser utilizado para armazenar informações sensíveis da investigação, visto que o acesso à caixa de entrada é perdido assim que a sessão é encerrada ou o endereço expira."
  },
  {
    "id": "ThatsThem",
    "title": "ThatsThem",
    "url": "https://thatsthem.com/",
    "tipo": "Motor de Busca de Pessoas e Registros Públicos (People Search Engine)",
    "utilidade": "Mecanismo de busca e correlação cruzada de dados biográficos, telefones, endereços, e-mails e endereços IP de residentes nos EUA",
    "descricao": "O ThatsThem é um mecanismo de busca de pessoas (*people search engine*) e agregador de registros públicos focado em dados de residentes nos Estados Unidos. A plataforma indexa e correlaciona bilhões de registros públicos, cadastros comerciais e bases de dados abertas, permitindo consultas cruzadas e buscas reversas por nome completo, endereço residencial, número de telefone, endereço de e-mail, número de identificação veicular (VIN) e endereço IP.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/usuario-email",
      "alvo/telefone",
      "alvo/ip",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas e *due diligence* de pessoas físicas, o ThatsThem atua como um motor de *pivoting* multidirecional. Ele permite ao analista inserir um único identificador conhecido (como um endereço de e-mail ou número de telefone) para revelar o nome do titular, histórico de endereços residenciais, possíveis familiares/associados e até provedores ou endereços IP correlacionados, acelerando a consolidação da identidade e da pegada digital do alvo.",
    "notes": "* A base de dados é primariamente concentrada em residentes e registros dos Estados Unidos, apresentando pouca ou nenhuma assertividade para alvos sediados em outras regiões geográficas.\n* Excelente para operações de *reverse lookups* (busca reversa por e-mail ou telefone) para confirmar se um número ou e-mail de contato comercial pertence a uma pessoa física real."
  },
  {
    "id": "The Aviation Herald (AvHerald)",
    "title": "The Aviation Herald (AvHerald)",
    "url": "https://avherald.com/",
    "tipo": "Portal de Notícias e Registro de Ocorrências Aeronáuticas",
    "utilidade": "Monitoramento global e histórico de incidentes, acidentes e ocorrências na aviação comercial",
    "descricao": "O The Aviation Herald (AvHerald) é um portal especializado que rastreia, documenta e publica relatórios detalhados sobre incidentes, acidentes e anomalias operacionais ocorridas na aviação comercial global em tempo real. A plataforma consolida dados técnicos provenientes de relatórios oficiais de órgãos reguladores de aviação civil, relatórios de tripulações, dados de telemetria e comunicados de companhias aéreas.",
    "testada": false,
    "tags": [
      "alvo/veiculo",
      "fonte/arquivos-noticias",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações que envolvem inteligência aplicada a transportes, logística e rastreamento de frotas aéreas, o AvHerald serve como um repositório centralizado para levantar o histórico operacional, falhas de segurança e sinistros associados a aeronaves específicas (por meio do número de registro/cauda) ou a companhias aéreas sob investigação.",
    "notes": "* É uma fonte secundária de alta confiabilidade para cruzamento e validação de trajetórias de voo suspeitas identificadas em plataformas de telemetria ADSB (como FlightRadar24 ou ADS-B Exchange), ajudando a confirmar se uma interrupção de rota ocorreu por falha técnica registrada.\n* Os relatórios frequentemente incluem fotografias dos danos estruturais, dados meteorológicos da hora do incidente (METAR/TAF) e a transcrição de comunicados oficiais, fornecendo ricas evidências documentais para relatórios forenses."
  },
  {
    "id": "The Grugq - OPSEC Blog",
    "title": "The Grugq - OPSEC Blog",
    "url": "https://grugq.github.io/blog/categories/opsec/",
    "tipo": "Repositório de Conteúdo / Blog Especializado",
    "utilidade": "Repositório de artigos, guias técnicos e análises conceituais focadas em Segurança das Operações (OPSEC) e contra-inteligência digital",
    "descricao": "A seção de OPSEC do blog do renomado especialista em segurança \"The Grugq\" funciona como um repositório técnico e conceitual sobre Segurança das Operações. O site centraliza ensaios, lições aprendidas de casos reais e frameworks táticos detalhando como agentes, investigadores e analistas devem se comportar no ambiente digital e físico para mitigar riscos de rastreamento, atribuição e vazamento de dados corporativos ou governamentais.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No contexto acadêmico e investigativo de fontes abertas, este portal atua como um repositório doutrinário essencial para o treinamento e estruturação de procedimentos operacionais padrão (SOP). Ele fornece a base analítica necessária para projetar ambientes de pesquisa blindados, compreender as táticas de contra-inteligência dos alvos e evitar erros comuns de conduta que possam comprometer a segurança do analista ou revelar a existência da investigação.",
    "notes": "* Deve ser empregado na fase de planejamento estratégico da investigação para desenhar o modelo de ameaças (*threat modeling*) específico do caso, adequando o nível de OPSEC ao perfil técnico do alvo monitorado.\n* O material é estritamente textual e teórico-prático, focado na \"filosofia e aplicação da OPSEC\", sendo altamente recomendado para complementar a documentação de procedimentos internos de células de inteligência cibernética."
  },
  {
    "id": "This Person Does Not Exist",
    "title": "This Person Does Not Exist",
    "url": "https://this-person-does-not-exist.com",
    "tipo": "Gerador de Imagens por IA (Generative Adversarial Network)",
    "utilidade": "Geração instantânea de retratos realistas gerados por inteligência artificial para criação de identidades de cobertura",
    "descricao": "O This Person Does Not Exist é um serviço online baseado em algoritmos de Inteligência Artificial e Redes Adversariais Generativas (GAN). A plataforma gera, de forma automatizada e a cada atualização de página, um retrato fotográfico hiper-realista de um rosto humano que não pertence a nenhuma pessoa real.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "Nas investigações em fontes abertas que demandam infiltração digital ou interação em ambientes fechados (HUMINT), a ferramenta é um recurso crítico de OPSEC. Ela fornece avatares exclusivos para a montagem de contas de cobertura (*Sock Puppets*), mitigando o risco de o investigador sofrer uma busca reversa de imagem que revele a verdadeira identidade do analista ou que aponte para um banco de imagens públicas protegido por direitos autorais.",
    "notes": "* Devido à restrição de acesso a ferramentas que não realizam busca ativa na rede, esta plataforma enquadra-se exclusivamente nas categorias de infraestrutura e suporte à OPSEC, sem atribuição de tags da categoria `func/`.\n* É recomendável que o analista verifique minuciosamente a imagem gerada em busca de artefatos visuais típicos de IA (como distorções em brincos, fundos borrados de maneira assimétrica ou falhas nos óculos) antes de aplicar o retrato em uma persona oficial de investigação."
  },
  {
    "id": "ThreatFox",
    "title": "ThreatFox (abuse.ch)",
    "url": "https://threatfox.abuse.ch",
    "tipo": "Plataforma de Inteligência de Ameaças (CTI) e Repositório de IoCs",
    "utilidade": "Consulta, compartilhamento e download automatizado de Indicadores de Comprometimento (IoCs) de malware, incluindo hashes, IPs e domínios maliciosos",
    "descricao": "O ThreatFox é um projeto colaborativo e gratuito mantido pela iniciativa abuse.ch em parceria com a Spamhaus. A plataforma foi desenhada especificamente para permitir que analistas e pesquisadores de segurança compartilhem e consumam Indicadores de Comprometimento (IoCs) associados a campanhas de malware e botnets. O sistema organiza os dados por famílias de malware (usando o padrão Malpedia) e confere níveis de confiança estatística a cada registro inserido.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "alvo/dominio",
      "fonte/repositorio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo da Inteligência de Ameaças Cibernéticas (CTI) e investigações de infraestrutura (func/infraestrutura-cybint), o ThreatFox funciona como um motor de validação passiva e enriquecimento contextual. Ao isolar um endereço IP (alvo/ip) ou um domínio (alvo/dominio) suspeito coletado em logs ou em campanhas de phishing, o analista pode verificar instantaneamente se o ativo está atrelado a servidores de comando e controle (C2) ativos ou canais de distribuição de malware, mapeando a família exata da ameaça cibernética.",
    "notes": "* A plataforma oferece suporte a uma API robusta e gratuita para consultas automatizadas e integrações nativas com ferramentas de SIEM, SOAR (como Cortex XSOAR) e frameworks de compartilhamento de ameaças (como MISP).\n* A OPSEC é puramente passiva ao efetuar consultas diretamente nos registros consolidados do site ou via exportações de feeds diários, garantindo que o atacante ou a infraestrutura monitorada não receba alertas de que está sob investigação.\n* Cada indicador inserido no ecossistema conta com metadados adicionais de grande utilidade analítica, incluindo links para relatórios técnicos externos, postagens em redes sociais de pesquisadores de segurança e comentários específicos sobre o comportamento do vetor malicioso."
  },
  {
    "id": "TinEye Reverse Image Search",
    "title": "TinEye Reverse Image Search",
    "url": "https://www.tineye.com/",
    "tipo": "Motor de Busca Reversa de Imagens / IMINT",
    "utilidade": "Busca reversa de imagens para identificação de fontes originais, duplicatas, modificações e histórico de publicação na web",
    "descricao": "O TinEye é um dos pioneiros motores de busca reversa de imagens na web, utilizando tecnologia proprietária de reconhecimento de padrões e assinaturas digitais visuais (*image fingerprinting*). A plataforma permite que usuários façam o upload de um arquivo ou forneçam uma URL para encontrar correspondências exatas, versões recortadas, redimensionadas, editadas ou com sobreposições gráficas em bilhões de páginas indexadas.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "func/busca-identificacao",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito de investigações de fontes abertas, análise de mídias (IMINT) e checagem de fatos (*fact-checking*), o TinEye é uma ferramenta de referência para determinar a proveniência e a cronologia de um ativo visual. Ele possibilita identificar a publicação mais antiga de uma fotografia (*oldest result*), desmantelar perfis falsos e fraudes de identidade (*sock puppets* e *catfishing*) e detectar alterações ou manipulações em imagens utilizadas como evidências digitais.",
    "notes": "* O recurso de ordenação por \"Oldest\" (Mais antiga) é fundamental para rastrear a primeira vez que uma imagem foi indexada na internet, facilitando a identificação do autor original ou o momento em que um boato começou a circular.\n* O recurso \"Compare\" permite alternar visualmente entre a imagem original e o resultado encontrado para verificar microalterações, cortes ou adições de texto/elementos visuais."
  },
  {
    "id": "TLG.pm Search",
    "title": "TLG.pm Search",
    "url": "https://tlg.pm/search",
    "tipo": "Buscador / Indexador de Conteúdo do Telegram",
    "utilidade": "Mecanismo de busca e indexação de canais, grupos, bots e mensagens públicas na plataforma Telegram",
    "descricao": "O TLG.pm Search é um motor de busca de terceiros projetado especificamente para indexar e rastrear o ecossistema público do Telegram. A ferramenta varre repositórios abertos e metadados de chats para permitir que usuários e investigadores localizem canais, grupos de discussão, bots automatizados e postagens de texto específicas por meio do uso de palavras-chave.",
    "testada": false,
    "tags": [
      "fonte/redes-sociais",
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito da inteligência em redes sociais (SOCMINT), o Telegram tornou-se uma fonte crítica para o monitoramento de ameaças, vazamentos, cibercrime e análise geopolítica. Ferramentas como o TLG.pm Search permitem ao analista descobrir comunidades fechadas ou novos *leads* sem depender exclusivamente do mecanismo de busca global nativo do aplicativo do Telegram, que possui limitações de exibição de resultados de nicho ou históricos.",
    "notes": "* É de suma importância para a OPSEC que o analista não clique diretamente nos links dos grupos (`t.me/...`) a partir de seu navegador padrão se o aplicativo do Telegram estiver instalado na máquina principal, evitando que o perfil pessoal seja acidentalmente associado ou tente ingressar no canal monitorado.\n* Devido à volatilidade do ecossistema do Telegram, muitos canais listados podem ter mudado de nome de usuário (username), tornado-se privados ou sido banidos; portanto, o indexador serve como ponto de partida histórico que necessita de validação posterior."
  },
  {
    "id": "TorMap",
    "title": "TorMap",
    "url": "https://tormap.org",
    "tipo": "Plataforma Web de Visualização Geoespacial e Análise Cronológica da Rede Tor",
    "utilidade": "Mapeamento geográfico, filtragem histórica e auditoria técnica de nós de retransmissão (relays) públicos da rede Tor",
    "descricao": "O TorMap é um serviço web e projeto de código aberto projetado para rastrear, armazenar e visualizar a distribuição geográfica global de nós de retransmissão (relays) ativos e históricos da rede Tor. O sistema processa periodicamente os descritores públicos oficiais do Tor Project Archive, consolidando-os em uma base de dados estruturada que permite buscas retroativas, cruzamento de dados de largura de banda e filtragem por flags específicas (como Exit, Guard e Directory).",
    "testada": false,
    "tags": [
      "alvo/ip",
      "fonte/geoespacial",
      "func/infraestrutura-cybint",
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações cibernéticas (CYBINT) e forense de rede, o TorMap é um recurso crucial para contextualização temporal e atribuição. Quando um analista isola um endereço IP suspeito (alvo/ip) em logs de ataques ou acessos anômalos, a funcionalidade de 'viagem no tempo' do TorMap permite verificar passivamente se aquele IP específico operava como um nó de saída (Exit Node) legítimo da rede Tor na data e hora exatas do incidente, validando o tráfego e descartando falsos positivos.",
    "notes": "* O grande diferencial analítico da plataforma é a capacidade de aplicar filtros retrospectivos, permitindo reconstruir o estado da topologia da rede Tor em incidentes ocorridos anos atrás.\n* Os dados são importados de repositórios oficiais e imutáveis do projeto Tor, conferindo alta confiabilidade e valor probatório aos relatórios gerados a partir da plataforma.\n* A OPSEC defensiva é excelente: por operar as consultas contra uma base de dados espelhada em servidores terceiros (ou localmente caso o analista monte o container Docker do projeto), a triagem de IPs não interage com a internet viva e não alerta os operadores dos relays investigados."
  },
  {
    "id": "TorWhois",
    "title": "TorWhois",
    "url": "https://torwhois.com/",
    "tipo": "Buscador / Indexador de Infraestrutura de Domínios .onion",
    "utilidade": "Mecanismo de busca e indexação de dados cadastrais WHOIS históricos e registros de domínios ocultos da rede Tor (.onion)",
    "descricao": "O TorWhois é uma plataforma online projetada para atuar como um mecanismo de busca e índice histórico de registros de domínios pertencentes à rede de anonimato Tor (com sufixo `.onion`). Diferente da internet superficial (Clear Web), a rede Tor não possui um sistema unificado e público de registro WHOIS nativo. O TorWhois busca preencher essa lacuna coletando, catalogando e preservando metadados estruturais, títulos de páginas, cabeçalhos técnicos e referências históricas de sites da Dark Web.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "fonte/vazamentos-darkweb",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações cibernéticas (CYBINT) e monitoramento de ameaças em ambientes ocultos, o TorWhois permite ao analista realizar pesquisas reversas e cruzamento de dados de infraestrutura. A partir de um termo de interesse, nome de organização ou endereço `.onion` específico, a ferramenta auxilia na identificação de conexões ocultas, rastreamento de páginas espelho (*mirrors*) de mercados clandestinos, fóruns cibercriminosos ou repositórios de vazamentos de dados, permitindo mapear a pegada digital do alvo na Dark Web.",
    "notes": "* Devido à natureza volátil dos serviços na rede Tor, onde sites entram e saem do ar constantemente, o repositório histórico do TorWhois é de grande valia para provar a existência prévia de um serviço ou campanha de ransomware que já tenha sido desativada.\n* Como medida estrita de OPSEC, o investigador deve utilizar os resultados textuais fornecidos pela ferramenta para análise estática e triagem, evitando acessar diretamente os links `.onion` listados sem o uso de um ambiente devidamente blindado e isolado (como o Tor Browser operando dentro de uma máquina virtual forense)."
  },
  {
    "id": "Trinket Python 3 Embed",
    "title": "Trinket Python 3 Embed",
    "url": "https://trinket.io/embed/python3/a5bd54189b",
    "tipo": "Ambiente de Desenvolvimento e Execução de Código em Nuvem (Online IDE / Sandbox)",
    "utilidade": "Execução isolada, compartilhamento e teste de scripts Python 3 diretamente no navegador",
    "descricao": "O Trinket é uma plataforma baseada na nuvem que permite escrever, embutir, executar e compartilhar blocos de código em diversas linguagens de programação, com foco em Python. Esta URL específica fornece um ambiente de desenvolvimento integrado (IDE) minimalista e interativo para Python 3, executado de forma embutida e isolada dentro do próprio navegador de internet, sem a necessidade de configurações de software locais.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito acadêmico e em investigações de fontes abertas, o Trinket funciona como uma infraestrutura auxiliar para testes rápidos de scripts de raspagem de dados (*scrapers*), automações básicas de coleta ou para o processamento estático de strings e artefatos de texto previamente capturados. Ele provê um ambiente ágil para validar pequenos trechos de código (como testes de expressões regulares - Regex) antes de sua implementação na infraestrutura principal do investigador.",
    "notes": "* Devido à restrição de acesso aplicável a ferramentas que não realizam busca ativa na rede, esta plataforma enquadra-se exclusivamente como um utilitário de execução e suporte computacional, sem a atribuição de categorias estruturais do tipo `func/`.\n* Por se tratar de um ambiente web compartilhado e público, o analista deve adotar estrita OPSEC e **nunca** inserir chaves de API reais, credenciais, tokens de acesso ou dados sensíveis do alvo no código-fonte sob teste, uma vez que o script pode ser armazenado ou indexado pela plataforma."
  },
  {
    "id": "Truecaller",
    "title": "Truecaller",
    "url": "https://www.truecaller.com/pt-br",
    "tipo": "Plataforma de Inteligência Telefônica (Reverse Phone Lookup)",
    "utilidade": "Identificação avançada de chamadas, engenharia reversa de números telefônicos e detecção de spam/fraudes",
    "descricao": "O Truecaller é uma plataforma global de inteligência telefônica que funciona alimentada por um banco de dados de listas de contatos compartilhadas de forma colaborativa por milhões de usuários. O serviço mapeia, padroniza e armazena registros telefônicos vinculados a nomes reais, empresas, e-mails e categorias de risco (como spam ou golpes).",
    "testada": false,
    "tags": [
      "alvo/telefone",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas, o Truecaller é uma das principais ferramentas para a realização de engenharia reversa de dados telefônicos (*pivoting*). A partir de um número de telefone desconhecido ou suspeito, o analista pode descobrir o nome ou apelido associado ao proprietário da linha, a operadora de telefonia correspondente, a localização cadastral aproximada e se o número possui histórico de denúncias ou envolvimento em fraudes eletrônicas.",
    "notes": "* Por motivos estritos de OPSEC, o analista deve evitar realizar login no portal web utilizando sua conta Google ou Microsoft pessoal ou corporativa oficial. Recomenda-se o uso de uma conta de cobertura (*Sock Puppet*) dedicada unicamente à investigação para mitigar riscos de cruzamento de dados ou rastreamento.\n* Os nomes exibidos na plataforma são baseados na forma como terceiros salvaram aquele contato em suas respectivas agendas telefônicas; portanto, os dados podem conter variações, apelidos ou grafias incorretas, necessitando de validação cruzada com outras fontes públicas ou governamentais para confirmação da identidade civil legal."
  },
  {
    "id": "Tuta (anteriormente Tutanota)",
    "title": "Tuta (anteriormente Tutanota)",
    "url": "https://tuta.com/",
    "tipo": "Serviço de E-mail Seguro e Criptografado (Secure Webmail Service)",
    "utilidade": "Provedor de e-mail seguro com criptografia de ponta a ponta nativa para proteção de comunicações e criação de identidades de cobertura",
    "descricao": "O Tuta é um serviço global de webmail focado em estrita privacidade e segurança, sediado na Alemanha. A plataforma implementa criptografia de ponta a ponta (AES e RSA) nativa para proteger mensagens, calendários e contatos. O serviço não rastreia IPs de conexão, remove metadados dos cabeçalhos dos e-mails enviados e possui código-fonte aberto, permitindo auditorias independentes de sua infraestrutura.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/limitado",
      "opsec/personas"
    ],
    "utilidade_Osint": "No escopo de investigações em fontes abertas, o Tuta serve como uma infraestrutura de suporte indispensável para a Segurança das Operações (OPSEC). Ele atua como a conta de e-mail base necessária para o recebimento de alertas, comunicações sigilosas e, sob critérios específicos, no processo de estruturação de perfis de cobertura que exigem um canal de comunicação blindado contra monitoramento.",
    "notes": "* Devido à restrição de acesso aplicável a ferramentas que não realizam busca ativa na rede, esta plataforma enquadra-se exclusivamente nas categorias de infraestrutura de comunicações e suporte à OPSEC, sem a atribuição de categorias da família `func/`.\n* Nota tática sobre OPSEC: Conforme mapeado na doutrina de inteligência cibernética, o uso de provedores excessivamente focados em anonimato (como Tuta e ProtonMail) para criar contas diretamente em grandes plataformas de redes sociais (como Meta ou X) pode acionar defesas automáticas antifraude, resultando no bloqueio imediato da persona. Recomenda-se seu uso para comunicações diretas ou serviços específicos de OSINT."
  },
  {
    "id": "UK-OSINT - Creating Fake IDs & Personas",
    "title": "UK-OSINT - Creating Fake IDs & Personas",
    "url": "https://www.uk-osint.net/creatingids.html",
    "tipo": "Diretório Centralizado / Repositório de Links Temáticos",
    "utilidade": "Agrupamento de recursos, guias técnicos e links para a criação e gestão de identidades sintéticas (Sock Puppets)",
    "descricao": "A página \"Creating Fake IDs & Personas\" do portal UK-OSINT é um repositório especializado que reúne links, ferramentas e guias voltados para auxiliar investigadores na criação de contas de cobertura (*sock puppets*) e identidades sintéticas na internet de maneira estruturada. O site compila recursos que vão desde geradores de nomes falsos e dados civis fictícios até plataformas de recepção de SMS temporários e geradores de rostos por Inteligência Artificial.",
    "testada": false,
    "tags": [
      "fonte/repositorio",
      "func/agregador",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/personas"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, a página atua como um hub central de facilitação para a fase de preparação de OPSEC e Engenharia Social. Ela centraliza ferramentas essenciais para que o analista construa personas verossímeis e seguras, mitigando o risco de expor seus dados reais ou institucionais durante a navegação ativa e a infiltração em fóruns, canais ou redes sociais sob investigação.",
    "notes": "* Ideal para ser consultado na fase de planejamento de uma investigação cibernética, quando há a necessidade de estabelecer novas contas de cobertura limpas e desvinculadas da infraestrutura real do analista.\n* Como o site funciona como um agregador de links de terceiros, recomenda-se auditar individualmente as ferramentas sugeridas (como os serviços de SMS e e-mail temporários) antes de utilizá-las em cenários operacionais de alta sensibilidade."
  },
  {
    "id": "Undetectable AI",
    "title": "Undetectable AI",
    "url": "https://undetectable.ai/",
    "tipo": "Ferramenta de Análise de Conteúdo e Processamento de Linguagem Natural",
    "utilidade": "Detecção de escrita por Inteligência Artificial e humanização/reescrita de textos estruturados",
    "descricao": "O Undetectable AI é uma plataforma voltada para o processamento de texto que atua em duas frentes principais: a identificação de trechos escritos por modelos de linguagem generativa (como GPT, Claude e Gemini) através de múltiplos validadores simultâneos, e a reescrita automatizada de conteúdos (humanização) para modificar a estrutura sintática e o padrão de escolhas lexicais, visando contornar algoritmos de detecção automatizada de conteúdo sintético.",
    "testada": false,
    "tags": [
      "func/analise-processamento-ia",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo da Inteligência de Fontes Abertas, a ferramenta cumpre papel analítico estático e de pós-processamento de evidências textuais. Ela auxilia o investigador na avaliação de autenticidade de manifestos, postagens em fóruns, relatórios ou vazamentos de informações, ajudando a identificar se o material analisado possui indícios técnicos de geração em massa por IA. Seguindo estritamente a restrição de acesso a dados da rede, a plataforma opera exclusivamente recebendo dados brutos previamente coletados pelo analista.",
    "notes": "* Deve ser empregada como um vetor complementar de validação analítica para a avaliação de desinformação (Fake News) e atribuição de campanhas de influência digital (Astroturfing).\n* O processamento limita-se à análise estática dos caracteres inseridos pelo operador na caixa de entrada, garantindo que o conteúdo examinado não sofra vazamentos por meio de requisições ativas ou varreduras na infraestrutura viva da rede durante o diagnóstico."
  },
  {
    "id": "Unstoppable Domains",
    "title": "Unstoppable Domains",
    "url": "https://unstoppabledomains.com",
    "tipo": "Plataforma Web de Registro, Resolução e Consulta de Domínios Web3",
    "utilidade": "Resolução de domínios descentralizados para extração de endereços de carteiras de criptomoedas e mapeamento de identidades na Web3",
    "descricao": "O Unstoppable Domains é um provedor de identidades descentralizadas e sistemas de nomes de domínio (DNS) baseados em contratos inteligentes de redes blockchain (como Ethereum e Polygon). A plataforma permite converter endereços alfanuméricos complexos de carteiras de criptoativos em strings legíveis por humanos, além de funcionar como um hub de identidade digital para login em aplicações descentralizadas (dApps).",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/financeiro-crypto",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito da inteligência em fontes abertas aplicada a criptoativos e cibercrimes, esta plataforma é um vetor crucial de pivoting tático. Ao isolar um domínio descentralizado (alvo/dominio) associado a uma página de phishing, ransomware ou perfil de rede social de um investigado, o analista consegue extrair passivamente os endereços exatos de Bitcoin, Ethereum ou Polygon vinculados a ele. Isso possibilita iniciar o rastreamento do fluxo financeiro (alvo/financeiro-crypto) em exploradores de bloco de forma imediata.",
    "notes": "* Por estarem registrados de forma imutável em redes blockchain públicas, os dados de resolução histórica e atual desses domínios são totalmente transparentes e auditáveis, não podendo ser censurados ou ocultados por serviços tradicionais de WHOIS protegido.\n* A consulta direta na barra de pesquisa do site não interage com o perímetro do alvo e confere excelente OPSEC passiva. No entanto, para investigações avançadas, o analista pode interrogar diretamente os contratos inteligentes da plataforma no Polygonscan ou Etherscan de forma totalmente offline ou descentralizada.\n* Além de carteiras financeiras, os metadados do domínio podem conter registros adicionais inseridos voluntariamente pelo usuário, como links para perfis tradicionais de redes sociais (X, Bluesky), e-mails ou avatares, auxiliando diretamente na desanonimização civil do alvo (alvo/pessoa-identidade)."
  },
  {
    "id": "URLhaus",
    "title": "URLhaus (abuse.ch)",
    "url": "https://urlhaus.abuse.ch",
    "tipo": "Plataforma de Inteligência de Ameaças (CTI) e Repositório de URLs Maliciosas",
    "utilidade": "Consulta, monitoramento e extração em lote de URLs e domínios ativos utilizados para a distribuição de malwares e payloads",
    "descricao": "O URLhaus é um projeto de código aberto e comunitário operado pela abuse.ch. A plataforma foca especificamente no mapeamento de links (URLs) que estão sendo empregados por cibercriminosos para hospedar ou disseminar códigos maliciosos. O sistema valida os envios da comunidade, verifica se a URL permanece online e extrai hashes dos arquivos associados, vinculando-os a famílias de malware conhecidas.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "fonte/repositorio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No cotidiano de investigações cibernéticas (CYBINT) e análise de campanhas de engenharia social, o URLhaus é um validador passivo crucial. Diante de um link suspeito (alvo/dominio) identificado em e-mails de phishing, mensagens SMS ou logs corporativos, o analista pode checar o repositório para descobrir se a infraestrutura já foi reportada como um vetor de infecção ativo, coletando assinaturas técnicas adicionais para o enriquecimento da linha de investigação.",
    "notes": "* A plataforma disponibiliza feeds diários e atualizados em intervalos de minutos, permitindo que analistas alimentem sistemas de detecção ou scripts locais de automação de forma contínua.\n* Oferece uma OPSEC defensiva excelente para consultas na base de dados (web ou API). Contudo, o analista deve lembrar que clicar nos links brutos listados no site para tentar coletar a evidência na internet viva expõe sua máquina ao perímetro do atacante, exigindo o uso de ambientes isolados (Sandbox).\n* Cada registro no URLhaus inclui o status da URL (online/offline), a resposta HTTP obtida pelo scanner da plataforma e, quando aplicável, o link para relatórios de análise de malware do próprio arquivo hospedado em plataformas de detecção parceiras."
  },
  {
    "id": "URLScan.io",
    "title": "URLScan.io",
    "url": "https://urlscan.io/",
    "tipo": "Serviço de Análise de Sites e Inteligência de Ameaças (Cyber Threat Intelligence)",
    "utilidade": "Escaneamento, análise de requisições e detecção de comportamentos suspeitos em websites",
    "descricao": "O URLScan.io é um serviço web gratuito e comercial projetado para analisar e escanear sites de forma pública ou privada. Ao submeter uma URL, a plataforma simula o comportamento de um usuário comum navegando pela página e registra todas as requisições HTTP, conexões de rede, scripts JavaScript executados, cookies criados, além de capturar um screenshot da interface final apresentada ao visitante.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas e segurança defensiva, a ferramenta atua como um sandbox para navegação e mapeamento técnico. Ela permite inspecionar a estrutura de sites suspeitos, rastrear redirecionamentos maliciosos e identificar campanhas de phishing sem a necessidade de interagir diretamente com a infraestrutura do alvo a partir da máquina local.",
    "notes": "* É de extrema utilidade para verificar o conteúdo visual de uma página e extrair indicadores de comprometimento (IoCs) de forma segura, mitigando os riscos de infecção ou de contra-inteligência pelo administrador do site alvo.\n* É fundamental certificar-se de configurar o escaneamento como \"Privado\" (Private Scan) quando estiver lidando com investigações confidenciais ou sensíveis, impedindo que a URL pesquisada apareça no feed público da página inicial da plataforma e alerte o alvo."
  },
  {
    "id": "VeraCrypt",
    "title": "VeraCrypt",
    "url": "https://www.veracrypt.fr",
    "tipo": "Software de Criptografia de Código Aberto (Segurança de Dados)",
    "utilidade": "Criptografia de disco local, criação de volumes virtuais criptografados e ocultação de dados sensíveis para proteção de evidências e OPSEC",
    "descricao": "O VeraCrypt é um software utilitário de código aberto utilizado para criptografia de dados em tempo real (OTFE). Ele permite a criação de discos virtuais criptografados dentro de um arquivo (contêineres), a criptografia completa de partições de armazenamento locais (como pendrives e discos rígidos externos) ou a cifragem total do sistema operacional onde está instalado.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/desktop",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No escopo acadêmico e prático da inteligência de fontes abertas, a ferramenta desempenha um papel fundamental na preservação da integridade de evidências digitais coletadas e na blindagem da estação de trabalho do investigador. O processamento ocorre de maneira estritamente offline, sendo aplicado na segurança estática dos arquivos baixados, relatórios parciais, dumps de dados sensíveis e chaves de API salvos na máquina local.",
    "notes": "* É altamente recomendável para isolar e armazenar artefatos de casos criminais ou corporativos sensíveis, garantindo que o acervo probatório permaneça confidencial e imutável fora do horário de análise.\n* Durante o planejamento da investigação, o analista pode criar um contêiner virtual criptografado e configurar o Obsidian para ler o cofre (*vault*) diretamente dentro desse volume seguro, unindo a organização do conhecimento à proteção criptográfica de nível militar."
  },
  {
    "id": "VerExif",
    "title": "VerExif",
    "url": "https://www.verexif.com/",
    "tipo": "Ferramenta de Análise e Limpeza de Metadados (Forense de Imagem)",
    "utilidade": "Extração, leitura e remoção de metadados EXIF de imagens para validação de veracidade e OPSEC",
    "descricao": "O VerExif é uma plataforma online projetada para processar arquivos de imagem, permitindo a visualização detalhada de metadados ocultos contidos no padrão EXIF (Exchangeable Image File Format). O serviço possibilita que o usuário faça o upload de uma fotografia ou indique uma URL externa para inspecionar parâmetros técnicos de captura, além de oferecer uma função direta para remover todas as propriedades identificáveis do arquivo original.",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas e verificação de mídias, a ferramenta atua diretamente na validação de dados coletados e na proteção do investigador. Ela permite extrair coordenadas geográficas ocultas (GPS), modelo da câmera ou smartphone, data e hora exatas da captura e configurações técnicas de iluminação, auxiliando na verificação cronológica e geográfica de uma evidência visual. Também serve para limpar fotos capturadas pelo analista antes de publicações operacionais.",
    "notes": "* É uma alternativa rápida para a triagem inicial de fotos obtidas em fóruns ou redes sociais, validando se o registro possui metadados originais de geolocalização ou se estes já foram expurgados pela plataforma de origem.\n* Por se tratar de um serviço baseado na Web (SaaS público), o analista deve evitar o envio de imagens altamente confidenciais ou sensíveis que possam comprometer o sigilo da investigação, priorizando ferramentas de terminal ou locais nesses cenários."
  },
  {
    "id": "Verifact",
    "title": "Verifact",
    "url": "https://www.verifact.com.br/",
    "tipo": "Plataforma de Coleta e Preservação de Evidências Digitais",
    "utilidade": "Preservação, coleta auditável e registro de provas digitais com validade jurídica contra fraudes e adulterações",
    "descricao": "A Verifact é uma plataforma online brasileira especializada na coleta e preservação de provas digitais contidas na internet. O serviço permite o registro de conteúdos extraídos de sites, redes sociais, aplicativos de mensageria e e-mails, gerando um relatório técnico auditável acompanhado de metadados detalhados, vídeos do processo de captura e chaves criptográficas (hashes) que atestam a imutabilidade e a anterioridade dos dados coletados.",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/pago"
    ],
    "utilidade_Osint": "No contexto de investigações de fontes abertas e cadeia de custódia de evidências, a ferramenta atua diretamente na fase de validação e consolidação legal dos achados informacionais. Ela garante que uma evidência pública localizada pelo analista (como uma postagem difamatória, uma oferta fraudulenta ou uma infração de propriedade intelectual) seja registrada seguindo padrões forenses rígidos, impedindo que o alvo apague ou altere o conteúdo posteriormente sem deixar rastros e assegurando a aceitação do material em juízo.",
    "notes": "* Deve ser empregada especificamente no momento da formalização e congelamento da evidência já identificada, uma vez que cada sessão de captura consome créditos financeiros e deve ser planejada previamente para cobrir o escopo probatório necessário.\n* A plataforma implementa medidas de isolamento que impedem o analista de injetar códigos ou alterar o DOM da página durante o registro, assegurando que o relatório gerado espelhe fielmente a realidade do servidor de destino auditado e eliminando riscos de alegações de adulteração pela defesa do alvo."
  },
  {
    "id": "VesselFinder",
    "title": "VesselFinder",
    "url": "https://www.vesselfinder.com/",
    "tipo": "Plataforma de Inteligência Marítima e Telemetria (GEOINT)",
    "utilidade": "Rastreamento global de embarcações, telemetria marítima em tempo real e monitoramento de tráfego naval",
    "descricao": "O VesselFinder é uma plataforma de monitoramento que fornece dados em tempo real sobre as posições, movimentos e rotas de navios ao redor do mundo. Utilizando uma ampla rede de receptores do Sistema de Identificação Automática (AIS) terrestres e de satélites, o serviço compila dados técnicos detalhados sobre frotas marítimas, históricos de porto e trajetórias comerciais.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações geoespaciais (GEOINT) e de inteligência corporativa ou de suprimentos, a ferramenta permite rastrear a movimentação de mercadorias, auditar rotas logísticas e identificar o histórico de ancoragem de embarcações ligadas a alvos ou empresas sob análise. Ela ajuda a validar de forma independente alegações geográficas ou cronológicas relacionadas a transportes marítimos.",
    "notes": "* É uma fonte valiosa para cruzar dados de imagens de satélite comerciais com a real presença declarada de frotas mercantes em canais, estreitos ou portos específicos.\n* O analista deve atentar para o fato de que embarcações podem intencionalmente desligar seus transponders AIS ao entrarem em áreas de interesse ilícito ou conflito, criando lacunas no rastreamento que demandam o uso de outras fontes de GEOINT (como imagens SAR) para confirmação."
  },
  {
    "id": "VideoLAN (VLC Media Player)",
    "title": "VideoLAN (VLC Media Player)",
    "url": "https://www.videolan.org/",
    "tipo": "Reprodutor de Mídias e Framework Multimídia de Código Aberto (VLC Media Player)",
    "utilidade": "Execução de mídias, análise estática de metadados audiovisuais e forense local de arquivos de vídeo e áudio",
    "descricao": "A VideoLAN é uma organização sem fins lucrativos responsável pelo desenvolvimento de softwares multimídia de código aberto, com destaque para o VLC Media Player. O VLC é um reprodutor de mídias portátil e multiplataforma que possui decodificadores internos nativos, sendo capaz de reproduzir virtualmente qualquer formato de arquivo de áudio ou vídeo, codecs complexos, transmissões de streaming e discos físicos sem a necessidade de pacotes externos de terceiros.",
    "testada": false,
    "tags": [
      "func/forense-local",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ecossistema de investigações em fontes abertas, especialmente na análise de evidências digitais locais obtidas na rede (como vídeos baixados de redes sociais, transmissões capturadas ou mídias recebidas), o VLC atua como uma ferramenta analítica estática de triagem e preservação de OPSEC. Ele permite inspecionar de forma segura o conteúdo sem realizar requisições ativas ou conexões de rede ocultas que softwares comerciais costumam disparar. Além disso, fornece acesso rápido às propriedades estruturais do arquivo multimedia.",
    "notes": "* O atalho de teclado `E` (no Windows/Linux) permite avançar o vídeo quadro a quadro, recurso indispensável para detalhar transições visuais rápidas, identificar placas de veículos borradas ou geolocalizar pontos geográficos específicos em mídias dinâmicas.\n* A janela \"Informações sobre a Mídia\" (`Ctrl + I` ou `Cmd + I`) expõe metadados fundamentais do arquivo, ajudando a documentar tecnicamente a evidência e a validar as propriedades do arquivo de origem na confecção de relatórios."
  },
  {
    "id": "ViewDNS.info",
    "title": "ViewDNS.info",
    "url": "https://viewdns.info/",
    "tipo": "Portal de Ferramentas de Infraestrutura de Rede e Reconhecimento Técnico (CYBINT)",
    "utilidade": "Agrupamento de ferramentas de consulta de DNS, histórico de WHOIS e engenharia reversa de infraestrutura de rede",
    "descricao": "O ViewDNS.info é um portal web que centraliza uma vasta coleção de utilitários de conferência e mapeamento de rede. A plataforma permite realizar investigações reversas e diretas sobre componentes da arquitetura da internet, oferecendo consultas que cruzam históricos de IPs, servidores de nomes (Name Servers), registros de e-mail (MX), localizações geográficas de servidores e a presença de múltiplos sites compartilhando uma mesma infraestrutura.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No ecossistema de inteligência cibernética e investigação de fontes abertas, o site atua como um hub de reconhecimento passivo focado em ativos digitais. Ele é ideal para desmascarar redes de sites fraudulentos operados pelo mesmo ator, realizar pivoteamento técnico a partir de um servidor compartilhado e rastrear o histórico de modificações de um domínio, auxiliando na atribuição de propriedades digitais e na identificação de pegadas de infraestrutura.",
    "notes": "* A função \"Reverse IP Lookup\" é altamente eficaz para cenários onde um site de phishing ou fraude está hospedado em um servidor menor, ajudando a expor outras páginas possivelmente controladas pela mesma organização criminosa.\n* As pesquisas executadas no site são passivas em relação ao alvo (as consultas consultam bases de dados de terceiros ou registros públicos indexados), reduzindo as chances de o administrador do domínio investigado notar que está sob análise de infraestrutura."
  },
  {
    "id": "VirtualBox",
    "title": "VirtualBox",
    "url": "https://www.virtualbox.org/",
    "tipo": "Software de Virtualização (Hipervisor Tipo 2)",
    "utilidade": "Isolamento de ambiente, virtualização de sistemas operacionais e preservação de OPSEC",
    "descricao": "O Oracle VM VirtualBox é um software de virtualização multiplataforma de código aberto que permite a execução de múltiplos sistemas operacionais (como distribuições Linux, Windows ou Android) simultaneamente em uma única máquina física. Ele atua como um hipervisor hospedado, isolando completamente o ambiente virtualizado do sistema operacional nativo do usuário.",
    "testada": false,
    "tags": [
      "plataforma/desktop",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, o VirtualBox é uma ferramenta de infraestrutura indispensável para estabelecer e gerenciar o laboratório de análise. Ele viabiliza a execução de sistemas operacionais dedicados a investigações (como Kali Linux, CSI Linux ou Tsurugi) de forma segregada, garantindo que as atividades investigativas não exponham o computador real do analista.",
    "notes": "* É altamente recomendado desativar funções de compartilhamento de área de transferência (Clipboard) e pastas compartilhadas bidirecionais entre a máquina real e a máquina virtual ao manipular artefatos suspeitos ou realizar buscas de alto risco.\n* Permite configurar placas de rede em modo \"Em placa de rede\" (Bridged), \"NAT\" ou \"Rede Interna\", facilitando o roteamento de todo o tráfego da máquina de investigação por meio de firewalls ou gateways específicos de VPN/Tor instalados na mesma infraestrutura virtual."
  },
  {
    "id": "VirusTotal",
    "title": "VirusTotal",
    "url": "https://www.virustotal.com",
    "tipo": "Plataforma de Inteligência de Ameaças e Análise de Malware (Cyber Threat Intelligence)",
    "utilidade": "Análise técnica de ameaças, enriquecimento de infraestrutura e validação cibernética de artefatos",
    "descricao": "O VirusTotal é um serviço online que analisa arquivos brutos, URLs, endereços IP e nomes de domínio para detectar conteúdos maliciosos, códigos suspeitos e anomalias de segurança. A plataforma agrega resultados de mais de 70 antivírus, mecanismos de varredura de sites e ferramentas de extração de metadados, atuando como um gigantesco banco de dados centralizado sobre infraestrutura cibernética e vetores de ameaças.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas focadas em inteligência cibernética (CYBINT) e verificação técnica, o VirusTotal atua como uma ferramenta central para cruzar dados e realizar o *pivoting* de alvos digitais. A plataforma permite mapear as relações históricas de um endereço IP ou domínio, identificar subdomínios correlacionados, verificar registros DNS armazenados, rastrear certificados SSL/TLS e descobrir arquivos maliciosos ou ferramentas de ataque que se comunicam com uma determinada infraestrutura associada ao alvo.",
    "notes": "* **Aviso Crítico de OPSEC**: Qualquer arquivo ou URL enviado para o VirusTotal pode ser compartilhado com a comunidade de segurança parceira e analistas premium. Se o arquivo investigado contiver dados sensíveis, biográficos ou privados do analista/alvo (como um PDF de um contrato ou imagem com metadados confidenciais), o upload direto exporá esses dados na rede. Para mitigar esse risco, realize a busca exclusivamente por hashes de arquivos (MD5, SHA-1 ou SHA-256) preexistentes.\n* A aba *Relations* (Relações) é extremamente útil para criar diagramas de conexões, pois exibe visualmente os vínculos entre domínios irmãos, URLs requisitadas e as comunicações com IPs de servidores finais."
  },
  {
    "id": "VMware Workstation Player",
    "title": "VMware Workstation Player",
    "url": "https://www.vmware.com/latam/products/workstation-player/workstation-player-evaluation.html",
    "tipo": "Software de Virtualização (Hipervisor Tipo 2)",
    "utilidade": "Isolamento de ambiente, virtualização de sistemas operacionais e preservação de OPSEC",
    "descricao": "O VMware Workstation Player é um utilitário de virtualização de desktop simplificado e estável que permite a execução de múltiplos sistemas operacionais isolados na mesma máquina física. Desenvolvido pela VMware (Broadcom), o software atua como um hipervisor hospedado, criando sandboxes completas capazes de rodar distribuições de segurança, forense ou sistemas operacionais convencionais de forma totalmente segregada do sistema hospedeiro.",
    "testada": false,
    "tags": [
      "plataforma/desktop",
      "acesso/limitado",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No planejamento técnico e na preparação da infraestrutura para investigações baseadas em fontes abertas, o VMware Workstation Player desempenha papel crítico na manutenção da OPSEC (Segurança das Operações). Ele possibilita que o analista configure ambientes virtuais dedicados a casos específicos, blindando o computador pessoal ou institucional contra contra-inteligência, rastreamento persistente de navegadores e infecções por códigos maliciosos ao inspecionar artefatos coletados na rede.",
    "notes": "* Destaca-se por apresentar excelente desempenho gráfico e aceleração de hardware em comparação com outras soluções, sendo ideal para a emulação e análise de sistemas que demandam processamento de mídia ou execução de emuladores móveis internos.\n* Permite a configuração ágil de placas de rede virtuais em modo NAT ou isoladas (Host-Only), o que viabiliza o direcionamento seguro do tráfego através de appliances ou gateways de privacidade de terceiros na mesma máquina."
  },
  {
    "id": "VPN Gate",
    "title": "VPN Gate",
    "url": "https://www.vpngate.net/",
    "tipo": "Repositório e Provedor de Serviços de Redes Virtuais Privadas (VPN) Acadêmico/Público",
    "utilidade": "Proteção de infraestrutura, mascaramento de tráfego de rede e alteração de localização geográfica por meio de servidores VPN gratuitos operados por voluntários",
    "descricao": "O VPN Gate é um projeto de pesquisa científica de código aberto e de âmbito global hospedado na Universidade de Tsukuba, no Japão. A plataforma funciona como um repositório distribuído e dinâmico de servidores de VPN de trânsito público operados voluntariamente por usuários de diversas partes do mundo, suportando protocolos consolidados de comunicação segura como L2TP/IPsec, OpenVPN, MS-SSTP e SSL-VPN.",
    "testada": false,
    "tags": [
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "Em investigações e operações baseadas em fontes abertas, o VPN Gate atua na salvaguarda da identidade técnica do analista, permitindo mascarar o endereço de IP real de origem, evitar o bloqueio geográfico ou o rastreamento por contra-inteligência e emular pontos de presença de rede correspondentes a diversas localidades globais.",
    "notes": ""
  },
  {
    "id": "Wayback Machine (Internet Archive)",
    "title": "Wayback Machine (Internet Archive)",
    "url": "https://web.archive.org/",
    "tipo": "Indexador e Ferramenta de Preservação Web (Cache de Sites)",
    "utilidade": "Preservação de memória digital, recuperação de páginas removidas ou alteradas e análise histórica de conteúdos na web.",
    "descricao": "A Wayback Machine é um arquivo digital da World Wide Web fundado pelo Internet Archive. A plataforma captura, armazena e disponibiliza réplicas históricas (*snapshots*) de bilhões de páginas públicas da internet ao longo do tempo, permitindo o acesso a conteúdos que já foram modificados, deletados ou que pertencem a domínios desativados.",
    "testada": false,
    "tags": [
      "fonte/arquivos-noticias",
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, a ferramenta desempenha um papel fundamental no resgate de evidências digitais do passado, permitindo rastrear o histórico de alteração de narrativas, dados de contato antigos, postagens antigas em blogs/sites institucionais e documentos indexados que foram removidos pelo criador ou por ordens de derrubada.",
    "notes": "* Ideal para recuperar código-fonte antigo ou arquivos anexos (como PDFs e imagens) que estavam linkados em páginas investigadas antes de sua remoção.\n* Pode ser combinado com extensões de navegadores ou scripts automatizados em Python para baixar de forma massiva versões passadas de um determinado domínio ou subdomínio sob escopo."
  },
  {
    "id": "Webmii",
    "title": "Webmii",
    "url": "https://webmii.com/",
    "tipo": "Motor de Busca de Pessoas (People Search Engine)",
    "utilidade": "Busca agregada de pessoas, usernames e cruzamento de pegadas digitais em fontes abertas.",
    "descricao": "O Webmii é uma plataforma de busca global centralizada no mapeamento de pessoas e identidades na internet. A ferramenta realiza uma varredura automatizada em múltiplos serviços digitais a partir de um nome ou sobrenome fornecido, gerando um índice de visibilidade pública e correlacionando links, palavras-chave, imagens e contas associadas ao indivíduo em uma única interface.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, o Webmii é utilizado como uma ferramenta de *pivoting* inicial na busca por pessoas e identidades. Ele permite acelerar a descoberta da pegada digital de um alvo, identificando potenciais perfis em redes sociais, homônimos e menções na web, facilitando o cruzamento de dados biográficos superficiais e o levantamento de possíveis contas associadas em diferentes plataformas.",
    "notes": "* É recomendável testar variações de nomes compostos e a utilização de aspas para restringir os resultados em casos de alvos com nomes muito comuns ou com alta incidência de homônimos.\n* O índice de visibilidade atribuído pela plataforma pode servir de métrica inicial para compreender o nível de exposição digital e o tamanho da superfície de ataque ou investigação associada ao indivíduo."
  },
  {
    "id": "Webrecorder",
    "title": "Webrecorder",
    "url": "https://webrecorder.net",
    "tipo": "Suíte de Ferramentas Open-Source de Arquivamento Web e Preservação Digital",
    "utilidade": "Captura interativa, dinâmica e automatizada de páginas web complexas para geração de arquivos WARC/WACZ com alta fidelidade",
    "descricao": "O Webrecorder é um conjunto de soluções descentralizadas projetadas para realizar o arquivamento web de alta fidelidade. Ao contrário de ferramentas de raspagem tradicionais que salvam apenas o HTML estático, o Webrecorder grava todo o tráfego de rede gerado no navegador enquanto a página é carregada e manipulada (execução de scripts, carregamento de feeds infinitos, reprodução de mídias), gerando pacotes de arquivo padronizados (WARC e WACZ).",
    "testada": false,
    "tags": [
      "fonte/arquivos-noticias",
      "func/scrapers-automacao",
      "plataforma/web",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações em fontes abertas e fixação de provas digitais, o Webrecorder é uma ferramenta de elite para auditoria e preservação de ambientes dinâmicos (alvo/dominio). Em vez de o analista depender de meras capturas de tela (prints) que possuem baixo valor probatório, ele utiliza o Webrecorder para criar um espelho interativo do site ou rede social do alvo. Esse arquivo preserva o comportamento original da página, cabeçalhos HTTP e mídias ocultas, permitindo auditorias forenses posteriores e reprodução offline idêntica.",
    "notes": "* Os arquivos gerados pela suíte (.wacz) contêm índices internos de assinatura e podem ser reproduzidos de forma totalmente isolada e offline utilizando o visualizador complementar ReplayWeb.page, garantindo um fluxo de análise sem vazamento de dados.\n* O componente Browsertrix Crawler permite automatizar o arquivamento em larga escala através de contêineres Docker, simulando o comportamento humano para navegar por estruturas complexas e contornar bloqueios simples de raspagem estática.\n* OPSEC Operacional: Durante a captura ativa, o navegador utilizado pelo Webrecorder interage diretamente com o servidor do alvo. Portanto, o investigador deve configurar proxies adequados ou redes VPN para mascarar o IP de origem da coleta e evitar a atribuição da atividade por parte do administrador do site."
  },
  {
    "id": "WhatsMyName",
    "title": "WhatsMyName",
    "url": "https://whatsmyname.app",
    "tipo": "Ferramenta de Pivoting e Busca de Username (User Enumeration Tool)",
    "utilidade": "Enumeração e rastreamento de usernames em centenas de plataformas web e redes sociais simultaneamente.",
    "descricao": "O WhatsMyName é uma ferramenta especializada na detecção e enumeração de nomes de usuário (*usernames*) em uma vasta quantidade de sites, fóruns e plataformas digitais. A plataforma utiliza um método automatizado de requisições web baseadas em dicionários e assinaturas predefinidas para validar em quais serviços um determinado apelido ou identificador digital possui uma conta ativa.",
    "testada": false,
    "tags": [
      "alvo/usuario-email",
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações em fontes abertas, o WhatsMyName atua de forma direta na fase de expansão e pivoting de alvos digitais. A partir de um único nome de usuário conhecido (ex: o identificador de um perfil no Instagram ou X), a ferramenta realiza uma varredura em massa para revelar a pegada digital do investigado em centenas de outros serviços. Isso permite descobrir novas contas, portfólios profissionais, fóruns de discussão ou sites de nicho que o alvo utiliza, auxiliando na correlação de dados e na construção do seu perfil comportamental na internet.",
    "notes": "* A ferramenta permite filtrar os resultados por categorias de sites (como \"shopping\", \"coding\", \"social\"), otimizando o tempo de processamento caso o analista queira focar em nichos específicos.\n* Como se trata de uma validação baseada em respostas HTTP, recomenda-se realizar uma verificação manual nos links retornados para descartar homônimos ou falsos positivos gerados por páginas de erro genéricas."
  },
  {
    "id": "WhatsMyUA",
    "title": "WhatsMyUA",
    "url": "https://www.whatsmyua.info/",
    "tipo": "Ferramenta de Análise de Cabeçalhos e Pegada Digital técnica",
    "utilidade": "Identificação, análise e decodificação detalhada do cabeçalho User-Agent para auditoria de OPSEC.",
    "descricao": "O WhatsMyUA é uma aplicação baseada na web projetada especificamente para capturar, exibir e analisar em tempo real a *string* de User-Agent enviada pelo navegador de internet do usuário. A ferramenta quebra a assinatura técnica complexa em blocos inteligíveis, identificando com precisão o sistema operacional, arquitetura de hardware, motor de renderização, navegador e suas respectivas versões.",
    "testada": false,
    "tags": [
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito",
      "opsec/ambiente-seguro"
    ],
    "utilidade_Osint": "No ecossistema de investigações em fontes abertas, o WhatsMyUA é um utilitário de validação voltado para a Segurança das Operações (OPSEC). Antes de interagir com infraestruturas controladas por alvos ou acessar plataformas que registram logs de acessos, o analista deve utilizar a ferramenta para certificar-se de que suas técnicas de falsificação (*spoofing*) de User-Agent estão configuradas corretamente. Isso garante que a identidade do investigador se misture ao tráfego padrão esperado, evitando o disparo de alertas em sistemas de contra-inteligência do investigado.",
    "notes": "* Útil para validar o funcionamento de extensões de manipulação de User-Agent, garantindo que a alteração seja refletida tanto na leitura de cabeçalho via servidor quanto na verificação via API de JavaScript (`navigator.userAgent`).\n* Recomenda-se realizar o teste sempre que inicializar uma nova máquina virtual (VM) de investigação ou perfil de cobertura para certificar que nenhum dado nativo do analista esteja sendo exposto na requisição básica."
  },
  {
    "id": "Whimsical",
    "title": "Whimsical",
    "url": "https://whimsical.com/",
    "tipo": "Plataforma de Visualização e Modelagem de Dados",
    "utilidade": "Criação de mapas mentais, diagramas de fluxo e grafos de relacionamento para estruturação de dados investigativos.",
    "descricao": "O Whimsical é uma plataforma colaborativa baseada na web projetada para a criação centralizada de artefatos visuais, como mapas mentais, diagramas de fluxo (*flowcharts*), wireframes e quadros de notas pegajosas. A ferramenta oferece uma interface fluida que permite organizar ideias, sequências lógicas e estruturas complexas de informações de forma ágil e altamente visual.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações em fontes abertas, o Whimsical cumpre um critério importante na fase final de processamento de inteligência, atuando estritamente como um ambiente de análise estática e mapeamento de conexões sem interação ativa com redes externas. A ferramenta serve para que o analista construa o \"mapa mental\" da investigação, conectando os pontos e entidades já coletados (como a relação entre empresas, CPFs, usernames e e-mails). Sua interface permite estruturar linhas do tempo visuais e fluxogramas de vínculos relacionais que facilitam a compreensão de cenários complexos antes da confecção do relatório final.",
    "notes": "* Ideal para o desenvolvimento de cronologias de eventos ou organogramas de alvos corporativos, facilitando a exportação dos grafos em alta resolução para inclusão em relatórios acadêmicos ou corporativos.\n* Por se tratar de uma plataforma em nuvem de terceiros, recomenda-se a higienização prévia dos dados (*data masking*) antes de inseri-los nos diagramas, evitando o upload de dados sensíveis ou informações reais do analista em servidores externos."
  },
  {
    "id": "Whitepages",
    "title": "Whitepages",
    "url": "https://www.whitepages.com/",
    "tipo": "Plataforma de Busca e Diretório de Pessoas",
    "utilidade": "Localização de pessoas, identificação de números de telefone e consulta de registros residenciais ou comerciais nos Estados Unidos",
    "descricao": "O Whitepages é uma plataforma online de diretórios e registros públicos focada principalmente no território norte-americano. A ferramenta agrupa dados de listas telefônicas, registros de propriedade, históricos residenciais e cadastros civis, permitindo que os usuários busquem informações detalhadas sobre cidadãos e empresas a partir de nomes, telefones, endereços ou e-mails.",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "alvo/telefone",
      "alvo/endereco",
      "fonte/registros-publicos-gov",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas e inteligência corporativa ou patrimonial, o Whitepages atua como um repositório central para validar a existência física de indivíduos, descobrir endereços históricos, associar números de telefone a titulares específicos e mapear conexões residenciais ou familiares nos Estados Unidos, auxiliando na verificação de antecedentes e na localização de alvos corporativos ou pessoais.",
    "notes": "* A ferramenta possui restrições severas de acesso baseadas na geolocalização do IP, exigindo frequentemente o uso de conexões compatíveis ou contornos técnicos para acesso fora dos Estados Unidos.\n* Os dados obtidos devem sempre ser cruzados com outras fontes primárias, uma vez que diretórios comerciais de registros públicos podem conter desatualizações ou homônimos."
  },
  {
    "id": "Who Posted What?",
    "title": "Who Posted What?",
    "url": "https://whopostedwhat.com",
    "tipo": "Utilitário Web de Consultas Avançadas e Cronolocalização para Facebook (SOCMINT)",
    "utilidade": "Geração de sintaxes de busca e extração de IDs numéricos para localizar postagens no Facebook por palavra-chave, data exata, intervalo de tempo ou localização",
    "descricao": "O Who Posted What? é uma ferramenta de busca especializada que contorna as restrições de pesquisa nativa do Facebook. A plataforma permite que investigadores realizem buscas reversas complexas combinando termos (palavras-chave) com recortes temporais rígidos (dias, meses ou anos específicos) e filtros geoespaciais, além de contar com um extrator integrado de IDs numéricos de perfis (UID).",
    "testada": false,
    "tags": [
      "alvo/pessoa-identidade",
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo do SOCMINT e da análise de desinformação, esta ferramenta é indispensável para auditoria histórica e atribuição. Ela permite ao analista mapear passivamente quando uma narrativa específica surgiu na plataforma, rastrear testemunhas oculares de um incidente em uma coordenada exata (usando o ID do local) ou isolar tudo o que um investigado (alvo/pessoa-identidade) publicou sobre um determinado tópico em um período crítico, superando os filtros opacos do algoritmo tradicional do Facebook.",
    "notes": "* Para visualizar os resultados das consultas geradas pelo site, o investigador deve estar obrigatoriamente logado em uma conta do Facebook no mesmo navegador, pois a ferramenta apenas constrói e redireciona a requisição estruturada para o domínio da rede social.\n* OPSEC Crítica: Dado que a ferramenta redireciona o tráfego para a interface real do Facebook, o uso de contas de investigação dissimuladas (Sock Puppets) altamente preparadas é mandatório, evitando que o perfil pessoal ou corporativo real do analista seja exposto em interações ou rastreado por cookies.\n* A ferramenta acessa exclusivamente publicações configuradas como públicas na rede social. Postagens em grupos privados, perfis restritos ou conteúdos deletados permanecem inacessíveis pelo motor de busca."
  },
  {
    "id": "WhoisFreaks Reverse WHOIS Search",
    "title": "WhoisFreaks Reverse WHOIS Search",
    "url": "https://whoisfreaks.com/tools/whois/reverse/search",
    "tipo": "Ferramenta de Busca e Validação Técnica (CYBINT)",
    "utilidade": "Pivoting técnico através de busca reversa de WHOIS por nome, e-mail ou empresa",
    "descricao": "O WhoisFreaks Reverse WHOIS Search é uma ferramenta especializada de inteligência cibernética que permite a realização de buscas reversas em registros de propriedades digitais. Em vez de consultar quais dados pertencem a um domínio específico, a ferramenta permite que o investigador insira um termo conhecido (como o nome de um proprietário, um endereço de e-mail corporativo ou a razão social de uma empresa) para descobrir todos os nomes de domínio atualmente ou anteriormente vinculados àquele identificador.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/usuario-email",
      "alvo/empresa",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações cibernéticas e inteligência societária, a plataforma atua como um poderoso recurso de *pivoting*. Ela viabiliza o mapeamento completo de infraestruturas online associadas a um alvo, permitindo desvendar redes de sites fraudulentos, campanhas de desinformação ou portfólios ocultos de propriedades digitais de uma determinada organização ou indivíduo.",
    "notes": "* É extremamente útil para contornar mecanismos básicos de privacidade de WHOIS, permitindo encontrar dados históricos que foram indexados pela plataforma antes de o proprietário ocultar as informações.\n* Devido à volumetria de dados, recomenda-se usar termos exatos ou e-mails específicos para evitar falsos positivos causados por homônimos em nomes de empresas ou indivíduos."
  },
  {
    "id": "WhoIsHostingThis?",
    "title": "WhoIsHostingThis?",
    "url": "https://www.whoishostingthis.com/",
    "tipo": "Ferramenta de Busca e Validação Técnica (CYBINT)",
    "utilidade": "Identificação rápida do provedor de hospedagem e servidor web por trás de um nome de domínio",
    "descricao": "O WhoIsHostingThis? é uma ferramenta de consulta rápida projetada para identificar qual empresa ou provedor de serviços de internet (ISP) está hospedando um determinado site. Ao inserir um nome de domínio, a plataforma resolve os registros técnicos necessários para apontar o servidor web ativo, o endereço IP e a localização geográfica da infraestrutura física onde os dados do domínio estão armazenados.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "alvo/ip",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo de investigações cibernéticas e auditoria de infraestrutura digital, a ferramenta simplifica a fase de reconhecimento técnico e inteligência. Ela permite ao analista mapear de forma passiva onde os ativos digitais de um alvo estão fisicamente localizados e qual empresa hospeda o conteúdo, fornecendo os subsídios necessários para o envio de solicitações de preservação de dados ou para desvendar redes de sites fraudulentos interconectados no mesmo servidor.",
    "notes": "* É extremamente útil para identificar os provedores de sites de phishing ou de campanhas fraudulentas e descobrir os canais adequados para denúncias de abuso (*abuse desk*).\n* Caso o site investigado utilize redes de entrega de conteúdo ou proxies reversos de proteção (como a Cloudflare), a ferramenta exibirá o provedor da rede de proteção e não o servidor original de hospedagem (*backend*), demandando técnicas complementares de descoberta de IP real se o objetivo for contornar essa barreira."
  },
  {
    "id": "Whonix",
    "title": "Whonix",
    "url": "https://www.whonix.org/",
    "tipo": "Sistema Operacional focado em Privacidade e Segurança (Distribuição Linux)",
    "utilidade": "Anonimização de tráfego, isolamento de ambiente de investigação e mitigação de vazamento de dados via rede TOR.",
    "descricao": "O Whonix é um sistema operacional voltado para segurança e privacidade, baseado na distribuição Debian Linux e projetado para rodar dentro de máquinas virtuais. Sua arquitetura única é dividida em dois componentes isolados que rodam de forma simultânea: o Whonix-Gateway, que gerencia as conexões e força de forma estrita que todo o tráfego de rede passe pela rede de anonimato Tor, e o Whonix-Workstation, um ambiente de usuário totalmente isolado do qual nenhuma conexão direta à internet consegue vazar.",
    "testada": false,
    "tags": [
      "opsec/ambiente-seguro",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas, o Whonix atua como uma barreira de proteção de infraestrutura (OPSEC) para garantir que as requisições, acessos e coletas efetuadas pelo analista nunca exponham o seu IP real ou parâmetros de hardware originais da máquina hospedeira.",
    "notes": "* A eficácia técnica do Whonix depende de nunca navegar na Surface Web ou interagir com alvos utilizando contas pessoais ou credenciais que apontem para a identidade real do investigador no ambiente isolado (Workstation).\n* É compatível com o pareamento de outras ferramentas ou distribuições instaladas em redes internas virtuais customizadas, permitindo que sistemas operacionais voltados para testes de intrusão ou forense (como o Kali Linux) utilizem o Whonix-Gateway como proxy de saída seguro.\n---"
  },
  {
    "id": "Whoxy",
    "title": "Whoxy",
    "url": "https://www.whoxy.com/",
    "tipo": "API e Plataforma de Inteligência de Domínios",
    "utilidade": "Consulta massiva de histórico WHOIS, buscas reversas de domínios e monitoramento de registros de propriedades digitais.",
    "descricao": "O Whoxy é uma plataforma especializada em inteligência de domínios e serviços de WHOIS que fornece um banco de dados robusto contendo centenas de milhões de registros de domínios internacionais. A ferramenta permite realizar buscas detalhadas de dados cadastrais atuais e históricos de sites, além de oferecer funcionalidades avançadas de WHOIS reverso, onde é possível descobrir todos os domínios registrados sob o mesmo nome de proprietário, empresa, endereço de e-mail ou palavra-chave específica.",
    "testada": false,
    "tags": [
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo de investigações baseadas em fontes abertas, o Whoxy é amplamente utilizado no mapeamento de infraestruturas digitais e na atribuição de propriedades virtuais. Ele possibilita correlacionar múltiplos sites a uma mesma organização ou indivíduo a partir de dados registrais e históricos que muitas vezes foram ocultados por serviços de privacidade atuais.",
    "notes": "* É extremamente valioso em casos onde o alvo utilizou proteção de privacidade recente no WHOIS, já que o banco de dados histórico do Whoxy pode revelar os dados reais que foram inseridos no momento do primeiro registro do domínio.\n* Os dados obtidos podem ser integrados a ferramentas de análise de conexões (como o Maltego) para automatizar o enriquecimento de gráficos de infraestrutura cibernética.\n---"
  },
  {
    "id": "WiFi Map",
    "title": "WiFi Map",
    "url": "https://www.wifimap.io",
    "tipo": "Plataforma Coletiva de Inteligência Geoespacial de Redes Sem Fios (Crowdsourced)",
    "utilidade": "Mapeamento passivo de coordenadas de hotspots Wi-Fi, identificação de SSIDs e recuperação de senhas públicas de acesso",
    "descricao": "O WiFi Map é uma base de dados global e colaborativa orientada para a conectividade, contendo centenas de milhões de pontos de acesso Wi-Fi indexados pela comunidade. A aplicação correlaciona a geolocalização física de estabelecimentos, hotéis e espaços públicos com os metadados técnicos das suas redes sem fios, exibindo em tempo real nomes de redes (SSID), senhas de acesso partilhadas, testes de velocidade de conexão e comentários de fiabilidade.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "fonte/geoespacial",
      "func/busca-identificacao",
      "plataforma/web",
      "plataforma/mobile",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo do reconhecimento tático de campo, inteligência geoespacial (GEOINT) e engenharia social reversa, o WiFi Map é um indexador passivo valioso. Ele permite ao analista auditar a infraestrutura de comunicações no perímetro de um alvo sem necessidade de emitir sinais de rádio locais (Wardriving ativo). Investigando um endereço ou estabelecimento comercial antes de uma operação, consegue-se levantar quais redes Wi-Fi estão presentes, estimar o nível de segurança digital do local e identificar credenciais históricas expostas pela comunidade.",
    "notes": "* Por ser uma base alimentada inteiramente por utilizadores (crowdsourced), os dados relativos a senhas podem sofrer de obsolescência caso o administrador da rede física altere a chave de segurança recentemente sem que um colaborador atualize o registo na app.\n* OPSEC Crítica: A utilização da aplicação mobile em modo ativo envia as coordenadas GPS atuais e o scan de redes à volta da máquina do analista para os servidores da plataforma. Em missões de reconhecimento sensíveis, o investigador deve descarregar os mapas da região com antecedência na versão Pro para efetuar consultas estritamente offline, mitigando a fuga de telemetria.\n* A evolução recente da plataforma integrou serviços adicionais de conveniência operacional, como um serviço de VPN próprio para mascarar o tráfego em redes abertas, planos de dados eSIM internacionais e a indexação de pontos de interesse secundários (POIs) como bebedouros e casas de banho públicas."
  },
  {
    "id": "WiGLE",
    "title": "WiGLE (Wireless Geographic Logging Engine)",
    "url": "https://wigle.net",
    "tipo": "Base de Dados Global e Colaborativa de Geolocalização de Redes Sem Fios (GEOINT)",
    "utilidade": "Mapeamento passivo, rastreio e triangulação de coordenadas físicas de redes Wi-Fi, dispositivos Bluetooth e torres de comunicação celular através de SSIDs e BSSIDs",
    "descricao": "O WiGLE é a maior plataforma crowdsourced do mundo focada no inventário e catalogação de sinais eletromagnéticos de comunicação sem fios. Fundado em 2001, o projeto processa biliões de observações submetidas por utilizadores globais que executam práticas de wardriving. O sistema consolida nomes de redes (SSID), endereços MAC de hardware (BSSID), tipos de criptografia e estatísticas de potência de sinal, convertendo-os em pontos georreferenciados num mapa interativo.",
    "testada": false,
    "tags": [
      "alvo/ip",
      "fonte/geoespacial",
      "func/busca-identificacao",
      "plataforma/web",
      "plataforma/mobile",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No âmbito do GEOINT, rastreio de ameaças cibernéticas e engenharia social reversa, o WiGLE é uma ferramenta com poder de desanonimização avassalador. Se o analista obtiver o histórico de redes Wi-Fi às quais um dispositivo alvo já se ligou (probes contidos em artefactos forenses), ou isolar o BSSID contido em logs de ligações suspeitas, a busca reversa no WiGLE localiza a coordenada exata da residência, escritório ou locais frequentados pelo indivíduo. Também permite mapear a extensão geográfica da infraestrutura física de uma empresa alvo introduzindo padrões dos seus SSIDs corporativos.",
    "notes": "* Para efetuar pesquisas detalhadas usando curingas (wildcards) ou procurar por BSSIDs específicos na interface do mapa, é mandatório criar uma conta gratuita no portal e realizar o login.\n* OPSEC Crítica: A realização de consultas no banco de dados do WiGLE é passiva e segura. Contudo, se o analista utilizar a app mobile para mapear redes sem fios (wardriving) em operações de campo sensíveis, deve desativar o upload automático de logs para o ranking global, sob o risco de expor a rota exata da sua missão e revelar a telemetria da sua equipa de investigação.\n* Análise de Nomes Personalizados: Roteadores domésticos frequentemente possuem SSIDs customizados contendo apelidos, sobrenomes ou nomes de empresas. O cruzamento desses termos textuais com filtros geográficos refinados no portal permite identificar a localização exata de alvos que negligenciam a segurança na nomeação de suas redes."
  },
  {
    "id": "WolframAlpha",
    "title": "WolframAlpha",
    "url": "https://www.wolframalpha.com",
    "tipo": "Motor de Conhecimento Computacional e Análise de Dados Estruturados",
    "utilidade": "Resolução de consultas factuais, cálculos matemáticos complexos, verificação histórica de clima/astronomia e conversão de metadados temporais",
    "descricao": "O WolframAlpha é um mecanismo de busca computacional que responde a perguntas direcionadas utilizando inteligência algorítmica e uma vasta base de dados estruturada própria, em vez de indexar links da web. A plataforma processa requisições complexas em linguagem natural e gera relatórios analíticos, gráficos dinâmicos e cruzamentos estatísticos imediatos nas áreas de ciência, história, geografia e tecnologia.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "func/busca-ampla",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo do GEOINT (Inteligência Geoespacial) e da validação de integridade de mídias (IMINT), o WolframAlpha é um validador contextual indispensável. O analista consegue extrair dados meteorológicos históricos exatos (como temperatura, visibilidade, velocidade do vento e nebulosidade) para uma coordenada específica e uma data retroativa exata. Isso permite confrontar depoimentos de testemunhas ou comprovar se as condições visuais de uma foto ou vídeo batem com a realidade climática daquele dia. A ferramenta também atua na conversão rápida de metadados numéricos, moedas históricas com correção inflacionária e decodificação de timestamps.",
    "notes": "* O motor processa melhor as requisições escritas em inglês devido à maturidade do seu parser de linguagem natural para essa gramática específica.\n* A OPSEC passiva é impecável ao realizar pesquisas de dados históricos, pois as consultas são computadas estritamente contra os repositórios consolidados da Wolfram, sem disparar requisições ou interagir com o perímetro de rede do alvo da investigação.\n* Para análises avançadas de criptografia ou forense digital, a plataforma consegue fatorar números inteiros massivos, identificar padrões em sequências numéricas complexas e converter bases de dados estruturadas em matrizes visuais de fácil compreensão."
  },
  {
    "id": "World Bank Open Data - Brazil",
    "title": "World Bank Open Data - Brazil",
    "url": "https://data.worldbank.org/country/brazil",
    "tipo": "Banco de Dados de Indicadores Globais Governamentais / Institucionais",
    "utilidade": "Levantamento de indicadores socioeconômicos, dados demográficos macroestruturais e inteligência de cenário país.",
    "descricao": "O portal de dados abertos do Banco Mundial para o Brasil é uma plataforma institucional centralizada que compila, estrutura e disponibiliza séries temporais de indicadores de desenvolvimento global. A base de dados reúne métricas oficiais coletadas em parceria com órgãos estatísticos nacionais (como o IBGE) abrangendo dados econômicos (PIB, inflação, comércio), sociais (índices de pobreza, educação, saúde), demográficos (crescimento populacional, urbanização) e ambientais.",
    "testada": false,
    "tags": [
      "fonte/registros-publicos-gov",
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto de investigações baseadas em fontes abertas, este repositório atua como uma fonte primária de inteligência estratégica para contextualização e validação de cenários macroestruturais. Ele permite ao analista auditar e cruzar dados históricos de desenvolvimento econômico ou demográfico para embasar relatórios corporativos, compreender dinâmicas territoriais de infraestrutura e verificar a consistência de alegações financeiras e institucionais ligadas a projetos ou entidades no território brasileiro.",
    "notes": "* Os dados podem ser exportados diretamente em formatos estruturados como CSV, XML e Excel (XLS), facilitando o carregamento em ferramentas locais de processamento de dados, inteligência artificial ou geração de grafos.\n* É ideal para análises retroativas de longo prazo, permitindo correlacionar eventos históricos ou crises financeiras nacionais ao comportamento de indicadores específicos da região investigada.\n---"
  },
  {
    "id": "World Imagery Wayback (Esri Living Atlas)",
    "title": "World Imagery Wayback (Esri Living Atlas)",
    "url": "https://livingatlas.arcgis.com/wayback/",
    "tipo": "Ferramenta de Inteligência Geoespacial (GEOINT) e Arquivamento de Imagens",
    "utilidade": "Análise retroativa de dados geoespaciais e comparação de imagens de satélite históricas mundiais.",
    "descricao": "O World Imagery Wayback é uma plataforma digital desenvolvida pela Esri que funciona como um repositório histórico de mapas e imagens de satélite globais. A ferramenta permite aos usuários acessar, visualizar e comparar diferentes versões e atualizações da camada de imagens de satélite do *World Imagery* coletadas ao longo dos anos, funcionando como uma \"máquina do tempo\" geoespacial.",
    "testada": false,
    "tags": [
      "fonte/geoespacial",
      "func/busca-ampla",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito das investigações que envolvem Inteligência Geoespacial (GEOINT), o World Imagery Wayback é um recurso indispensável para o rastreamento de mudanças físicas em locais específicos. Ele permite monitorar o desenvolvimento ou demolição de infraestruturas, verificar a presença histórica de ativos (como veículos, embarcações e aeronaves) em datas retroativas, validar álibis por meio de alterações na paisagem urbana/rural e identificar metadados temporais associados a imagens georreferenciadas.",
    "notes": "* A interface permite deslizar e alternar de forma fluida entre diferentes *snapshots* temporais de um mesmo ponto de coordenada, facilitando a detecção visual de modificações no terreno.\n* Ao passar o cursor ou inspecionar as camadas disponíveis na barra lateral esquerda, o analista ganha acesso aos metadados exatos da captura, incluindo a data em que o satélite sobrevoou o local e a resolução da imagem fornecida."
  },
  {
    "id": "X Pro (antigo TweetDeck)",
    "title": "X Pro (antigo TweetDeck)",
    "url": "https://pro.x.com/",
    "tipo": "Painel de Monitoramento e Inteligência em Mídias Sociais (SOCMINT Dashboard)",
    "utilidade": "Monitoramento em tempo real, gestão multi-colunas de postagens e inteligência de redes sociais (SOCMINT) no X (Twitter)",
    "descricao": "O X Pro (anteriormente conhecido como TweetDeck) é a interface avançada de gerenciamento, visualização e monitoramento contínuo de conteúdo da rede social X. A ferramenta organiza feeds, listas de usuários, menções, notificações e pesquisas em colunas modulares em tempo real, permitindo a aplicação de operadores de busca, filtros de engajamento, restrições temporais e localização geográfica.",
    "testada": false,
    "tags": [
      "fonte/redes-sociais",
      "func/busca-identificacao",
      "plataforma/web",
      "acesso/pago"
    ],
    "utilidade_Osint": "No escopo de investigações de fontes abertas voltadas para mídias sociais (SOCMINT), o X Pro atua como um centro de comando para coleta e acompanhamento passivo de alvos e narrativas. A plataforma possibilita monitorar simultaneamente diferentes contas de interesse, acompanhar a disseminação de hashtags em tempo real durante eventos críticos, rastrear menções a entidades específicas e capturar interações antes que eventuais postagens sejam apagadas pelos autores.",
    "notes": "* A combinação de operadores de busca nativos (como `from:`, `to:`, `since:`, `until:` e `min_faves:`) dentro das colunas permite criar filtros de alta precisão para isolar dados relevantes e reduzir ruídos informacionais.\n* Permite alternar e visualizar múltiplos feeds de contas sem a necessidade de recarregar a página, facilitando o monitoramento contínuo durante incidentes ou operações em andamento."
  },
  {
    "id": "Yandex Images",
    "title": "Yandex Images",
    "url": "https://yandex.com/images",
    "tipo": "Motor de Busca Visual e Reconhecimento de Imagens",
    "utilidade": "Busca reversa de imagens, reconhecimento facial e identificação de padrões visuais em fontes abertas.",
    "descricao": "O Yandex Images é o serviço especializado de busca e indexação visual do motor de busca multinacional Yandex. A ferramenta destaca-se globalmente no cenário tecnológico devido à alta precisão e sofisticação de seus algoritmos de visão computacional, que superam frequentemente outros indexadores convencionais na identificação de similaridades geométricas, correspondência exata de locais, leitura de caracteres em texturas visuais e, especialmente, no reconhecimento e isolamento de características faciais humanas.",
    "testada": false,
    "tags": [
      "func/busca-ampla",
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No âmbito de investigações de fontes abertas (OSINT), a plataforma constitui uma das ferramentas mais críticas para inteligência de imagens (IMINT) e verificação de informações. Ela permite submeter um arquivo visual ou uma captura de tela obtida na rede para identificar a sua origem primária, rastrear perfis associados em redes sociais através do rosto de um indivíduo, geolocalizar fotografias ao reconhecer marcos arquitetônicos ou cordilheiras ao fundo, e auditar a autenticidade de mídias para identificar montagens ou reutilização de imagens em contextos enganosos.",
    "notes": "* A ferramenta é especialmente eficaz para rastrear pegadas digitais no Leste Europeu e na Ásia devido ao alto índice de indexação de redes sociais regionais, embora possua eficácia global comprovada na identificação de objetos e rostos.\n* Ao realizar análises de rostos, o algoritmo consegue filtrar e isolar a mesma pessoa mesmo sob condições variadas de iluminação, envelhecimento ou ângulos de câmera distintos, tornando-se ideal para correlacionar avatares de perfis anônimos a perfis reais.\n---"
  },
  {
    "id": "yEd Graph Editor",
    "title": "yEd Graph Editor",
    "url": "https://www.yworks.com/products/yed/download",
    "tipo": "Software de Análise Visual e Diagramação de Dados",
    "utilidade": "Criação de diagramas de rede, grafos relacionais e modelagem visual de vínculos em investigações OSINT.",
    "descricao": "O yEd Graph Editor é um software de desktop poderoso para a criação de diagramas e grafos de alta qualidade. Ele permite gerar estruturas visuais complexas de forma manual ou por meio da importação de dados externos (como planilhas do Excel), oferecendo algoritmos automáticos de layout que organizam dinamicamente grandes volumes de dados interconectados para facilitar a legibilidade de redes relacionais.",
    "testada": false,
    "tags": [
      "func/analise-visualizacao",
      "plataforma/desktop",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No escopo do processamento de inteligência e organização do conhecimento de fontes abertas, o yEd atua estritamente de maneira local e estática para conectar as evidências coletadas. Ele auxilia o analista na construção de mapas de vínculos corporativos, redes de relacionamentos entre alvos, fluxos de capitais e cronogramas de eventos, transformando dados brutos em inteligência visual clara sem realizar qualquer tipo de requisição externa ou busca ativa na rede durante o processo de modelagem.",
    "notes": "* Por operar offline e localmente, o yEd é uma excelente escolha para manter uma OPSEC estrita durante a fase de análise de vínculos, impedindo que os diagramas e entidades sob investigação vazem para servidores de terceiros na nuvem.\n* A função de importação de arquivos estruturados (como CSV ou XLS) permite carregar rapidamente logs de chamadas telefônicas, transações financeiras ou extrações de metadados para que o algoritmo do software monte automaticamente as conexões visuais.\n---"
  },
  {
    "id": "Zadarma",
    "title": "Zadarma",
    "url": "https://zadarma.com/",
    "tipo": "Serviço de Telecomunicações VoIP e Números Virtuais",
    "utilidade": "Provedor de telefonia VoIP, PABX em nuvem e fornecimento de números de telefone virtuais (DID) internacionais para recebimento de chamadas e SMS.",
    "descricao": "O Zadarma é uma plataforma global de telecomunicações baseada em nuvem que oferece serviços de VoIP (Voz sobre IP), sistemas de PABX virtual e a contratação de números de telefone virtuais (VoIP/DID) de mais de 100 países. A plataforma permite a realização e o recebimento de chamadas telefônicas via internet, além do recebimento de mensagens de texto (SMS) diretamente pelo painel web ou via integração de API.",
    "testada": false,
    "tags": [
      "opsec/personas",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No contexto de investigações em fontes abertas e inteligência cibernética, o Zadarma é utilizado principalmente para o estabelecimento de infraestrutura de contra-inteligência e proteção da identidade técnica do investigador. A aquisição de números virtuais internacionais viabiliza a ativação e validação de contas de cobertura (*sock puppets*) em redes sociais e aplicativos de mensageria de forma isolada, impedindo o rastreamento do número real do analista.",
    "notes": "* Útil para contornar restrições geográficas de plataformas que exigem verificação por números de telefone de países específicos.\n* Recomenda-se auditar o número virtual adquirido em bases públicas de identificação de chamadas antes de usá-lo operacionalmente, mitigando o risco de reaproveitar um número previamente comprometido ou associado a spam."
  },
  {
    "id": "Zoho",
    "title": "Zoho Ecosystem",
    "url": "https://www.zoho.com",
    "tipo": "Ecossistema SaaS Empresarial e Vetor de Infraestrutura Corporativa",
    "utilidade": "Mapeamento de pegada digital corporativa, auditoria de registros MX/DNS e identificação de superfícies de ataque expostas (Forms/Creator)",
    "descricao": "O Zoho é uma suíte multinacional de aplicações em nuvem que fornece soluções integradas de CRM, e-mail corporativo, gestão de projetos, formulários e banco de dados (SaaS). No contexto investigativo, o ecossistema representa um dos principais vetores de pegada tecnológica corporativa na internet, onde configurações de DNS e endpoints públicos servem como insumos cruciais de inteligência.",
    "testada": false,
    "tags": [
      "alvo/empresa",
      "alvo/dominio",
      "func/infraestrutura-cybint",
      "plataforma/web",
      "acesso/limitado"
    ],
    "utilidade_Osint": "No escopo do Corporate OSINT e da análise de superfície de ataque (Attack Surface Management), a infraestrutura do Zoho funciona como um excelente marcador de pivoting técnico. Ao auditar um domínio alvo, o analista rastreia registros MX vinculados aos servidores do Zoho Mail, validando a arquitetura de comunicação da empresa. Além disso, a busca por subdomínios expostos ou instâncias públicas mal configuradas no Zoho Forms ou Zoho Creator permite descobrir dados confidenciais vazados, listas de clientes ou repositórios internos que foram indexados incorretamente na web aberta.",
    "notes": "* O rastreamento de registros SPF e DKIM associados ao Zoho ajuda a validar a autenticidade de e-mails corporativos recebidos, sendo uma etapa essencial no combate a ataques de Business Email Compromise (BEC) e phishing.\n* A OPSEC é puramente passiva ao realizar consultas de DNS e varreduras de subdomínios de forma externa (via ferramentas como Shodan ou Dnsdumpster). Contudo, tentar interagir com painéis de login ou submeter dados em formulários privados do alvo registrará o IP do investigador nos logs de segurança da plataforma Zoho.\n* A suíte Zoho conta nativamente com módulos avançados de eDiscovery e Legal Hold para administradores, permitindo auditorias forenses locais e preservação de e-mails internos (EML) em conformidade com políticas de governança e investigações corporativas."
  },
  {
    "id": "ZXing Decoder Online",
    "title": "ZXing Decoder Online",
    "url": "https://zxing.org/w/decode.jspx",
    "tipo": "Utilitário Web de Decodificação de Códigos de Barras e QR Codes",
    "utilidade": "Extração passiva de texto, URLs e dados brutos contidos em códigos bidimensionais ou lineares por meio de arquivos de imagem ou links",
    "descricao": "O ZXing Decoder Online é uma aplicação web baseada na popular biblioteca open-source ZXing (Zebra Crossing). A ferramenta permite extrair o conteúdo de imagens contendo QR codes, Data Matrix, Aztec ou códigos de barras tradicionais. O analista pode submeter o arquivo localmente ou fornecer uma URL direta para que o sistema processe os pixels e exiba a string textual decodificada.",
    "testada": false,
    "tags": [
      "func/analise-midia-integridade",
      "plataforma/web",
      "acesso/gratuito"
    ],
    "utilidade_Osint": "No contexto da análise de ameaças (Threat Intelligence) e combate a fraudes, esta ferramenta funciona como um isolador de payloads ocultos. Diante de um e-mail de phishing com um QR code ou de uma imagem coletada em fontes abertas contendo um código de barras, o analista utiliza o ZXing para revelar a string interna (frequentemente um alvo/dominio malicioso) sem precisar ler o código com seu dispositivo móvel pessoal. Isso possibilita auditar o link extraído em ambientes isolados (Sandboxes) antes de qualquer interação real.",
    "notes": "* O processamento do arquivo é feito do lado do servidor (Server-Side), o que exige cautela do ponto de vista de OPSEC defensiva ao submeter imagens que contenham dados pessoais estritos ou informações sigilosas da investigação.\n* O algoritmo do ZXing é altamente robusto e possui boa tolerância a falhas, conseguindo interpretar com sucesso mídias borradas, fotografias de telas ou códigos com distorções de perspectiva moderadas.\n* A saída dos resultados apresenta os dados em texto puro, em formato de bytes hexadecimais e detalha a simbologia exata do código detectado, fornecendo assinaturas técnicas prontas para relatórios periciais."
  }
];
