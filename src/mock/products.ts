export interface ProductMedia {
  id: string;
  type: "image" | "video";
  url: string;
  thumbnailUrl: string;
  title: string;
  alt: string;
  description?: string;
  badge?: string;
}

export interface QuickSpec {
  chave: string;
  valor: string;
  destaque?: boolean;
}

export interface TechnicalFeature {
  titulo: string;
  descricao: string;
  icone?: string;
}

export interface Product {
  id: string;
  slug: string;
  nome: string;
  codigo_modelo: string;
  categoria: string;
  subcategoria?: string;
  tagline: string;
  descricao: string;
  descricao_detalhada: string;
  texto_tecnologia: string;
  recursos_principais: TechnicalFeature[];
  especificacoes_rapidas: QuickSpec[];
  especificacoes_completas?: {
    grupo: string;
    itens: { parametro: string; valor: string }[];
  }[];
  midias: ProductMedia[];
  status_disponibilidade: "Em Estoque" | "Sob Encomenda" | "Engenharia Customizada";
  garantia: string;
  certificacoes: string[];
  datasheet_url?: string;
  resumo_exclusivo?: string;
}

export const CATEGORIES_LIST = [
  "Retificadores & Carregadores",
  "Sistemas de Energia Ininterrupta & Conversão",
  "Quadros de Distribuição & Paralelismo",
  "Módulos de Digitalização & Telemetria",
  "Supervisão, Sensores & Condicionamento",
  "Qualidade de Energia, Proteção & Cargas"
] as const;

export const PRODUCTS_MOCK: Product[] = [
  // =========================================================================
  // CATEGORIA 1: RETIFICADORES & CARREGADORES INDUSTRIAIS
  // =========================================================================
  {
    id: "dsr-rit-d",
    slug: "retificador-padrao-industrial-modelo-rit-d",
    nome: "Retificador Industrial Analógico",
    codigo_modelo: "Modelo RIT-D",
    categoria: "Retificadores & Carregadores",
    subcategoria: "Retificador Industrial Tiristorizado Analógico",
    tagline: "Retificador tiristorizado analógico simples, robusto e funcional para alimentação CC ininterrupta de 12V a 250Vcc e correntes de 10A a 5.000A.",
    descricao: "Os Retificadores Industriais Modelo RIT-D foram projetados para atender às mais rígidas especificações do mercado industrial. Seus componentes e dispositivos foram dimensionados para trabalhar nos mais diversos ambientes industriais com extrema simplicidade e robustez. Trata-se de um retificador tiristorizado analógico simples e funcional, semi ou totalmente controlado de 02, 03, 04 ou 06 pulsos (modelos com 12, 18 e 24 pulsos sob consulta). Utiliza os mesmos módulos (PCIs) intercambiáveis para todas as tensões padrão industrial (12 a 250Vcc) e para redes monofásicas, bifásicas e trifásicas, independente da corrente de saída (10 a 5.000A).",
    descricao_detalhada: "Projetado com arquitetura analógica direta e confiável, o Modelo RIT-D prioriza a durabilidade e a facilidade de manutenção em campo sem dependência de microcontroladores ou softwares. No painel frontal, conta com instrumentos analógicos de medição (voltímetros e amperímetros de ponteiro) e sinalização luminosa por LEDs para os principais pontos do sistema: Alimentação CA, Retificador, Banco de Baterias e Consumidor. A concentração de circuitos no Módulo de Controle eleva o MTBF (Tempo Médio Entre Falhas) pela redução de conexões e número de placas, e reduz o MTTR (Tempo Médio Para Reparo). A fonte auxiliar chaveada possui alimentação mista CA e CC, garantindo que em caso de falta da rede CA os circuitos de controle e sinalização continuem operando através do banco de baterias.",
    texto_tecnologia: "Módulo de Controle de UDQ (Unidade de Diodo de Queda) e Proteções Analógicas: Os retificadores RIT-D possuem um Módulo de Controle de UDQ que monitora diretamente a tensão sobre o Consumidor, protegendo contra sobretensão no caso de falha ou acionamento indevido de um contator da UDQ. Seu acionamento é sequencial e a ordem de entrada dos diodos em série com o Consumidor é inversa à ordem de retirada dos mesmos (a primeira etapa inserida em tensão alta será a última a ser retirada na tensão mais baixa). Este módulo é configurável para uma a até quatro etapas e, se inseridas todas as etapas e a tensão sobre o Consumidor atingir um nível pré-ajustado, um sinal de Sobretensão CC é enviado ao Módulo de Controle para desligamento seguro do Retificador. Possui fonte auxiliar chaveada com alimentação CA e CC, proteção de fusível interrompido / disjuntor aberto por eletrônica e proteção de fuga a terra via acoplamento óptico.",
    datasheet_url: "/downloads/retificador-industrial-analogico-rit-d.pdf",
    status_disponibilidade: "Em Estoque",
    garantia: "Garantia de Fábrica DSR (com Suporte Técnico, Instalação e Retrofitting)",
    certificacoes: ["IEC 60146-1-1", "IEEE 946", "IEC 62477-1", "NR-10 / NR-12", "IEC 60529 (IP21 a IP54)"],
    recursos_principais: [
      {
        titulo: "Topologia Tiristorizada Analógica",
        descricao: "Controle analógico com disparo robusto de tiristores em pontes de 02 a 06 pulsos (12 a 24 sob consulta), imune a travamentos lógicos.",
        icone: "Cpu"
      },
      {
        titulo: "Módulo UDQ de 1 a 4 Etapas",
        descricao: "Monitoramento direto da tensão no consumidor com acionamento sequencial inverso e proteção contra sobretensão CC.",
        icone: "Zap"
      },
      {
        titulo: "Painel com Instrumentação Analógica",
        descricao: "Voltímetros e amperímetros analógicos de ponteiro com classe de precisão 1,5% e sinalização frontal por LEDs de alto brilho.",
        icone: "Activity"
      },
      {
        titulo: "Proteções Eletrônicas e Fuga a Terra",
        descricao: "Proteção de sobrecorrente por circuito eletrônico e supervisão óptica bipolar de fuga à terra (+) e (-) com isolamento galvânico.",
        icone: "ShieldCheck"
      },
      {
        titulo: "Mesmos Módulos (PCIs) Universais",
        descricao: "Mesmas placas para todas as tensões de 12 a 250Vcc e redes mono, bi e trifásicas de 10 a 5.000A, simplificando sobressalentes.",
        icone: "Layers"
      },
      {
        titulo: "Fonte Auxiliar Chaveada Mista CA e CC",
        descricao: "Alimentação mista garantindo a operação ininterrupta do controle e sinalização mesmo na perda completa da alimentação CA.",
        icone: "Sparkles"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Aplicação Principal", valor: "Sistemas CC industriais, subestações e carregamento de baterias", destaque: true },
      { chave: "Topologia de Retificação", valor: "Tiristorizada analógica semi ou totalmente controlada (02 a 06 pulsos)", destaque: true },
      { chave: "Tensão Nominal de Entrada", valor: "110V/220Vca (Mono/Bi) ou 220V/380V/440V/480Vca (Trifásico)" },
      { chave: "Tensão de Saída CC", valor: "12V, 24V, 48V, 110V, 125V, 220V ou 250Vcc (padronizada)", destaque: true },
      { chave: "Faixa de Corrente Contínua", valor: "10 A a 5.000 A (conforme modelo e projeto)", destaque: true },
      { chave: "Regime de Operação", valor: "Contínuo 24/7 (100% duty cycle)", destaque: true },
      { chave: "Ripple Elétrico (com bateria)", valor: "< 0,1% RMS (em conformidade com a IEEE 946)", destaque: true },
      { chave: "Ripple Elétrico (sem bateria)", valor: "< 1,0% RMS com filtragem LC padrão industrial" },
      { chave: "Regulação Estática", valor: "≤ ± 1,0% sob variação de rede ±10% e carga 0-100%" },
      { chave: "Unidade de Diodo de Queda", valor: "UDQ inteligente de 1 a 4 etapas sequenciais inversas", destaque: true },
      { chave: "Grau de Proteção Mecânica", valor: "IP21 padrão industrial (IP31 a IP54 sob consulta)" },
      { chave: "Instrumentação de Painel", valor: "Voltímetros e amperímetros analógicos de ponteiro + LEDs" },
      { chave: "Telemetria & Alarmes Remotos", valor: "Contatos secos inversores a relé (sem Modbus/microcontrolador)" },
      { chave: "Normas de Conformidade", valor: "IEC 60146-1-1, IEEE 946, NR-10, NR-12 e IEC 60529" }
    ],
    especificacoes_completas: [
      {
        grupo: "Classificação & Regime de Operação",
        itens: [
          { parametro: "Tipo Principal", valor: "Retificador Carregador de Baterias e Fonte CC de Potência" },
          { parametro: "Aplicações Primárias", valor: "Subestações de energia, usinas de geração, óleo e gás, mineração, indústrias de base e telecom" },
          { parametro: "Regime Nominal", valor: "Operação contínua 24/7 (100% duty cycle em plena carga nominal)" },
          { parametro: "Capacidade de Sobrecarga", valor: "125% da corrente nominal por 10 minutos; 150% por 60 segundos" },
          { parametro: "Vida Útil de Projeto", valor: "Projetado para vida em serviço contínuo superior a 20 anos" },
          { parametro: "Operação sem Bateria", valor: "Apto a operar continuamente com ou sem bateria conectada ao barramento" }
        ]
      },
      {
        grupo: "Entrada em Corrente Alternada (CA)",
        itens: [
          { parametro: "Tensão Nominal de Entrada", valor: "Monofásica/Bifásica (110/220Vca) ou Trifásica (220/380/440/480Vca)" },
          { parametro: "Número de Fases", valor: "Monofásico a 2 fios, Bifásico a 2 fios ou Trifásico a 3 fios + Terra (PE)" },
          { parametro: "Frequência da Rede", valor: "50 Hz ou 60 Hz ± 5%" },
          { parametro: "Tolerância de Tensão Permanente", valor: "± 10% da tensão nominal em regime permanente contínuo" },
          { parametro: "Tolerância de Tensão Transitória", valor: "-15% a +10% sem interrupção de suprimento na saída CC" },
          { parametro: "Corrente de Partida (Inrush)", valor: "Limitada por rampa de subida suave analógica (soft-start de 3 a 8 segundos)" },
          { parametro: "Esquema de Aterramento", valor: "Compatível com esquemas TN-S, TN-C, TT e IT" },
          { parametro: "Proteção de Entrada CA", valor: "Disjuntor termomagnético / caixa moldada e DPS Classe II (padrão)" }
        ]
      },
      {
        grupo: "Saída CC & Unidade de Diodo de Queda (UDQ)",
        itens: [
          { parametro: "Tensão Nominal de Saída CC", valor: "12V, 24V, 48V, 110V, 125V, 220V ou 250Vcc" },
          { parametro: "Faixa de Ajuste da Tensão", valor: "85% a 125% da tensão nominal através de trimpots de precisão na PCI" },
          { parametro: "Corrente Nominal Contínua", valor: "10 A a 5.000 A CC (dimensionamento sob encomenda de engenharia)" },
          { parametro: "Limite de Corrente Ajustável", valor: "Ajustável de 20% a 110% da corrente nominal com resposta analógica rápida" },
          { parametro: "Módulo de Controle de UDQ", valor: "Configurável de 1 a 4 etapas em série com o barramento do consumidor" },
          { parametro: "Lógica Sequencial de Comutação UDQ", valor: "Sequência inversa: a primeira etapa inserida em alta tensão é a última retirada" },
          { parametro: "Estabilidade no Consumidor", valor: "Mantém a tensão na carga crítica em ±2% mesmo durante equalização da bateria" },
          { parametro: "Proteção Crítica de Sobretensão CC", valor: "Envia sinal de bloqueio eletrônico ao controle para desligamento imediato e seguro" },
          { parametro: "Polaridade e Aterramento", valor: "Saída flutuante com detector óptico de fuga à terra bipolar (+) e (-)" }
        ]
      },
      {
        grupo: "Desempenho Elétrico & Filtragem LC",
        itens: [
          { parametro: "Topologia de Conversão", valor: "Ponte tiristorizada analógica semi ou totalmente controlada (02, 03, 04 ou 06 pulsos)" },
          { parametro: "Regulação Estática de Tensão", valor: "≤ ± 1,0% para variação de rede de ±10% e variação de carga de 0 a 100%" },
          { parametro: "Resposta Dinâmica", valor: "Desvio transitório < 5% com tempo de recuperação < 50 ms para degrau de carga de 10% a 100%" },
          { parametro: "Ripple com Bateria Conectada", valor: "< 0,1% RMS (atende integralmente à norma IEEE 946 para proteção de relés)" },
          { parametro: "Ripple sem Bateria Conectada", valor: "< 1,0% RMS com banco de filtragem indutivo-capacitivo (LC) padrão" },
          { parametro: "Rendimento Térmico Global", valor: "88% a 92% em regime nominal (conforme combinação de tensão e corrente)" },
          { parametro: "Fator de Potência Típico", valor: "0,80 a 0,85 indutivo (em ponte trifásica totalmente controlada)" }
        ]
      },
      {
        grupo: "Funções de Gerenciamento de Baterias",
        itens: [
          { parametro: "Tecnologias de Bateria Compatíveis", valor: "Chumbo-Ácido Ventilada (VLA), Regulada por Válvula (VRLA/Gel/AGM) e Níquel-Cádmio (Ni-Cd)" },
          { parametro: "Estágios de Carga Disponíveis", valor: "Tensão de Flutuação e Tensão de Carga Rápida (Carga Inicial / Equalização)" },
          { parametro: "Modo de Comutação Flutuação/Carga", valor: "Seleção manual por chave frontal ou automática por nível analógico de tensão" },
          { parametro: "Limite de Corrente da Bateria", valor: "Ajustável independentemente da corrente entregue aos consumidores (ex.: 10% a 20% C10)" },
          { parametro: "Proteção contra Curto de Bateria", valor: "Fusível ultrarrápido CC calibrado com monitoramento eletrônico de queima" },
          { parametro: "Alarme de Bateria em Descarga", valor: "Sinalização visual imediata por LED e atuação de relé auxiliar de telecomando" }
        ]
      },
      {
        grupo: "Construção Mecânica, Ambiente & Resfriamento",
        itens: [
          { parametro: "Formato Construtivo", valor: "Cubículo autossustentado para fixação no piso com olhais de içamento reforçados" },
          { parametro: "Material do Gabinete", valor: "Chapa de aço carbono tratada, decapada e fosfatizada (espessura 1,5mm a 2,25mm)" },
          { parametro: "Pintura & Tratamento Anticorrosivo", valor: "Pintura eletrostática a pó poliéster epóxi cor Cinza RAL 7035 com espessura ≥ 80 µm" },
          { parametro: "Grau de Proteção Mecânica", valor: "IP21 padrão industrial (disponíveis sob encomenda: IP31, IP42 e IP54 com venezianas e filtros)" },
          { parametro: "Método de Resfriamento", valor: "Convecção natural de ar (para potências reduzidas) ou ar forçado com ventiladores de rolamento" },
          { parametro: "Temperatura Ambiente de Operação", valor: "0°C a +40°C nominal contínua (operação de até +50°C com fator de derating)" },
          { parametro: "Umidade Relativa Admissível", valor: "0% a 95% sem condensação em operação contínua" },
          { parametro: "Altitude Máxima de Instalação", valor: "Até 1.000 metros sem redução de potência (derating acima de 1.000m conforme norma)" },
          { parametro: "Entrada de Cabos de Potência", valor: "Entrada inferior ou superior por placas de fechamento flangeadas removíveis" }
        ]
      },
      {
        grupo: "Painel Frontal, Sinalização & Tele-Alarmes",
        itens: [
          { parametro: "Instrumentos de Medição Frontal", valor: "Voltímetros e amperímetros analógicos de ponteiro de ferro móvel / bobina móvel (classe 1,5%)" },
          { parametro: "Sinalização Luminosa Frontal", valor: "LEDs de alto brilho: CA Normal, CA Anormal, Retificador Normal, Falha de Retificador, UDQ Atuada, Fuga a Terra (+) e Fuga a Terra (-)" },
          { parametro: "Supervisão de Fuga à Terra", valor: "Sensoriamento bipolar (+) e (-) com isolamento galvânico por acopladores ópticos" },
          { parametro: "Saídas para Tele-Alarmes (Contatos Secos)", valor: "Relés inversores (NA/NF - 5A @ 250Vca) para Falta de CA, Retificador Anormal, Bateria em Descarga, UDQ Atuada e Fuga à Terra" },
          { parametro: "Filosofia de Controle Analógico Puro", valor: "100% analógico, sem microcontrolador, sem telas digitais, sem firmware e imune a travamentos lógicos" },
          { parametro: "Intercambiabilidade de Módulos (PCIs)", valor: "Mesmas placas de circuito impresso padronizadas para qualquer faixa de 12 a 250Vcc e 10 a 5.000A" }
        ]
      },
      {
        grupo: "Normas Aplicáveis, Engenharia & Suporte",
        itens: [
          { parametro: "Segurança de Conversores Estáticos", valor: "Conforme IEC 60146-1-1 e IEC 62477-1" },
          { parametro: "Sistemas Auxiliares CC em Subestações", valor: "Projetado com base nas recomendações da norma IEEE 946" },
          { parametro: "Grau de Proteção de Invólucros", valor: "Conforme IEC 60529 (código IP padronizado)" },
          { parametro: "Normas de Segurança do Trabalho", valor: "Atendimento integral às normas regulamentadoras brasileiras NR-10 e NR-12" },
          { parametro: "Ensaios e Testes Realizados", valor: "Testes de aceitação em fábrica (FAT) com emissão de relatório técnico de ensaio" },
          { parametro: "Disponibilidade de Componentes", valor: "Construído exclusivamente com componentes de fácil aquisição no mercado nacional" },
          { parametro: "Serviços de Engenharia e Retrofit", valor: "Dimensionamento de bancos, retrofitting de painéis antigos, comissionamento e manutenção" },
          { parametro: "Contato Direto de Engenharia", valor: "engenharia@dsrsolucoes.com.br • Tel: (11) 4564-5200" }
        ]
      }
    ],
    midias: [
      {
        id: "media-rit-1",
        type: "image",
        url: "/images/products/rit-d-cabinet-real.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet-real.jpg",
        title: "Gabinete Frontal",
        alt: "Retificador Industrial Analógico Modelo RIT-D - Gabinete frontal em cubículo autossustentado com instrumentos analógicos",
        badge: "Gabinete Frontal"
      },
      {
        id: "media-rit-2",
        type: "image",
        url: "/images/products/rit-d-supervisao-real.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao-real.jpg",
        title: "Painel Frontal de Supervisão e Sinalização",
        alt: "Painel frontal de supervisão com sinalização por LED para Entrada CA, Retificador, Bateria e Consumidor",
        badge: "Painel de Supervisão"
      },
      {
        id: "media-rit-3",
        type: "image",
        url: "/images/products/rit-d-udq.jpg",
        thumbnailUrl: "/images/products/rit-d-udq.jpg",
        title: "Módulo de Controle e Etapas UDQ",
        alt: "Estágio interno da Unidade de Diodo de Queda (UDQ)",
        badge: "Módulo UDQ"
      }
    ]
  },
  {
    id: "dsr-dk10-dk30",
    slug: "retificador-industrial-tiristorizado-digital-dk10-dk30",
    nome: "Retificador Industrial Tiristorizado Digital",
    codigo_modelo: "Modelo DK10 / DK30",
    categoria: "Retificadores & Carregadores",
    subcategoria: "Retificadores Tiristorizados com Controle Digital",
    tagline: "Controle tiristorizado microprocessado de precisão para alimentação ininterrupta de subestações de energia e processos críticos (DK10 Monofásico e DK30 Trifásico).",
    descricao: "A linha DK10 (monofásica) e DK30 (trifásica) foi projetada para as mais severas aplicações de subestações de transmissão, geração de energia e plantas industriais contínuas. Dotado de controle digital por microprocessador de 32 bits e disparo preciso de tiristores em ângulo de fase, o sistema oferece regulação estática estrita (< 0,5%), baixíssimo ripple de saída (< 0,1% RMS com bateria conforme IEEE 946), rotinas automáticas de recarga de acumuladores com compensação térmica e conectividade nativa para automação de subestações (Modbus, DNP3 e IEC 61850).",
    descricao_detalhada: "Fabricado em cubículo de aço reforçado com proteção IP21 a IP54, o DK10/DK30 opera em regime 24/7 com vida de projeto superior a 20 anos. O equipamento integra IHM gráfica digital com teclado frontal, registrador histórico com relógio de tempo real (RTC) para até 1.000 eventos e alarmes com carimbo de data e hora (timestamp), além de barramento de saída desacoplado para atendimento simultâneo de banco de baterias e consumidores vitais com máxima seletividade e segurança operacional.",
    texto_tecnologia: "Controle digital microprocessado de 32 bits com amostragem True RMS e controle de disparo com compensação de ângulo de fase. Possui filtragem LC de alta ordem para rejeição de harmônicas, circuito de supervisão digital de fuga à terra bipolar (+ e -), compensação térmica automática da tensão de flutuação via sensor externo e teste dinâmico de capacidade de baterias sem qualquer perturbação no fornecimento da carga crítica.",
    datasheet_url: "/downloads/retificador-tiristorizado-digital-dk10-dk30.pdf",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia de Fábrica DSR com Assistência Técnica Autorizada)",
    certificacoes: ["IEC 60146-1-1", "IEEE 946", "IEC 61850", "IEC 62477-1", "NR-10 / NR-12", "ISO 9001"],
    recursos_principais: [
      {
        titulo: "Controle Digital Microprocessado 32-bit",
        descricao: "Disparo tiristorizado com algoritmo digital de alta precisão, regulação estática < ±0,5% e compensação de rede.",
        icone: "Cpu"
      },
      {
        titulo: "Conectividade para Subestações (IEC 61850 / DNP3)",
        descricao: "Portas RS-485 Modbus-RTU e Ethernet TCP/IP com suporte nativo a protocolos de telemetria de subestações.",
        icone: "Activity"
      },
      {
        titulo: "Ripple Ultrabaixo < 0,1% RMS (IEEE 946)",
        descricao: "Filtragem LC de alta performance para imunidade total de relés digitais de proteção contra ruídos CC.",
        icone: "Zap"
      },
      {
        titulo: "IHM Gráfica com Registro de 1.000 Eventos",
        descricao: "Tela gráfica iluminada com teclado e histórico de eventos gravado com relógio RTC de milissegundos.",
        icone: "Sliders"
      },
      {
        titulo: "Compensação Térmica e Teste Sem Corte",
        descricao: "Sensor de temperatura para ajuste fino da tensão de recarga e teste automático de bateria sem risco à carga.",
        icone: "ShieldCheck"
      },
      {
        titulo: "Paralelismo Ativo N+1",
        descricao: "Operação em paralelo com partilha ativa de corrente entre unidades para máxima disponibilidade de planta.",
        icone: "Layers"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Aplicação Principal", valor: "Subestações de energia, usinas, óleo & gás e centros de controle", destaque: true },
      { chave: "Tecnologia de Potência", valor: "Tiristores SCR totalmente controlados com controle digital 32-bit", destaque: true },
      { chave: "Configurações de Entrada", valor: "DK10 (Monofásica/Bifásica) / DK30 (Trifásica 220V a 480Vca)" },
      { chave: "Tensões de Saída CC", valor: "24V, 48V, 110V, 125V, 220V ou 250Vcc", destaque: true },
      { chave: "Faixa de Corrente Contínua", valor: "15 A a 2.500 A nominais contínuos", destaque: true },
      { chave: "Regime de Operação", valor: "Contínuo 24/7 (100% duty cycle)", destaque: true },
      { chave: "Ripple Elétrico (com bateria)", valor: "< 0,1% RMS (conforme padrão IEEE 946)", destaque: true },
      { chave: "Ripple Elétrico (sem bateria)", valor: "< 1,0% RMS através de filtro LC sintonizado" },
      { chave: "Regulação Estática", valor: "≤ ± 0,5% de zero a 100% de carga e variação de rede ±15%" },
      { chave: "Rendimento Global Garantido", valor: "90% a 93% em plena carga nominal" },
      { chave: "Resfriamento", valor: "Convecção natural ou ar forçado com ventiladores monitorados" },
      { chave: "Grau de Proteção Mecânica", valor: "IP21 padrão (IP31, IP42 e IP54 sob encomenda)" },
      { chave: "Comunicação & Protocolos", valor: "RS-485 Modbus-RTU, Ethernet Modbus-TCP, DNP3 e IEC 61850", destaque: true },
      { chave: "Normas Atendidas", valor: "IEC 60146-1-1, IEEE 946, IEC 61850, NR-10 e NR-12" }
    ],
    especificacoes_completas: [
      {
        grupo: "Classificação & Aplicação de Engenharia",
        itens: [
          { parametro: "Tipo Principal", valor: "Retificador Carregador Tiristorizado Microprocessado para Subestações" },
          { parametro: "Segmentos Atendidos", valor: "Transmissão e distribuição de energia, usinas hidrelétricas e térmicas, mineração e óleo & gás" },
          { parametro: "Modelos Disponíveis", valor: "Linha DK10 (Entrada Monofásica/Bifásica) e Linha DK30 (Entrada Trifásica)" },
          { parametro: "Regime de Trabalho", valor: "Operação contínua ininterrupta 24 horas por dia, 365 dias por ano" },
          { parametro: "Capacidade de Sobrecarga", valor: "125% da corrente nominal durante 10 minutos; 150% por 60 segundos" },
          { parametro: "Vida Útil Projetada", valor: "Superior a 20 anos em ambiente industrial severo" },
          { parametro: "Operação Sem Baterias", valor: "Totalmente apto a alimentar as cargas do consumidor sem bateria conectada" }
        ]
      },
      {
        grupo: "Entrada em Corrente Alternada (CA)",
        itens: [
          { parametro: "Tensão de Entrada DK10", valor: "110V, 127V ou 220Vca Monofásica/Bifásica (Fase-Fase ou Fase-Neutro)" },
          { parametro: "Tensão de Entrada DK30", valor: "220V, 380V, 440V ou 480Vca Trifásica a 3 fios + Terra (PE)" },
          { parametro: "Frequência Nominal", valor: "50 Hz ou 60 Hz ± 5%" },
          { parametro: "Faixa de Tolerância Permanente", valor: "± 15% contínuos sobre a tensão nominal de entrada" },
          { parametro: "Faixa Transitória Admissível", valor: "-20% a +15% com manutenção da regulação CC de saída" },
          { parametro: "Partida Suave (Soft-Start)", valor: "Rampa digital microprocessada parametrizável de 2 a 30 segundos" },
          { parametro: "Proteção de Entrada CA", valor: "Disjuntor caixa moldada com bobina de disparo, DPS Classe II e monitor de fases" }
        ]
      },
      {
        grupo: "Saída em Corrente Contínua (CC) & Regulação",
        itens: [
          { parametro: "Tensões Nominais de Saída", valor: "24V, 48V, 110V, 125V, 220V ou 250Vcc" },
          { parametro: "Faixa de Corrente Contínua", valor: "15 A a 2.500 A nominais contínuos" },
          { parametro: "Faixa de Ajuste da Tensão", valor: "80% a 135% Unom configurável com precisão decimal pela IHM" },
          { parametro: "Regulação Estática de Tensão", valor: "≤ ± 0,5% de zero a 100% de carga e variação de rede de ±15%" },
          { parametro: "Resposta Dinâmica a Degraus", valor: "Desvio transitório < 3% com recuperação < 30 ms para degrau de carga 0 a 100%" },
          { parametro: "Limite de Corrente Ajustável", valor: "Faixa de 20% a 110% da corrente nominal com limitador separado para a bateria" },
          { parametro: "Polaridade e Barramento", valor: "Saída flutuante com supervisão digital contínua de fuga à terra (+ e -)" }
        ]
      },
      {
        grupo: "Desempenho Elétrico & Qualidade de Energia",
        itens: [
          { parametro: "Topologia de Retificação", valor: "Ponte tiristorizada SCR totalmente controlada de 6 pulsos (12 pulsos sob consulta)" },
          { parametro: "Ripple com Bateria Conectada", valor: "< 0,1% RMS (rigorosamente conforme especificação IEEE 946)" },
          { parametro: "Ripple sem Bateria Conectada", valor: "< 1,0% RMS garantido por filtro LC de alta atenuação" },
          { parametro: "Rendimento Global", valor: "≥ 90% a 93% em plena carga nominal" },
          { parametro: "Fator de Potência Típico", valor: "0,82 a 0,87 indutivo sob carga nominal" },
          { parametro: "Distorção Harmônica (THDi)", valor: "< 28% (6 pulsos direto) ou < 10% com opção de transformador 12 pulsos" },
          { parametro: "Imunidade Eletromagnética (EMC)", valor: "Conforme IEC 61000-4-2 (ESD), 61000-4-4 (burst) e 61000-4-5 (surto até 4 kV)" }
        ]
      },
      {
        grupo: "Gerenciamento Avançado de Baterias",
        itens: [
          { parametro: "Tecnologias de Bateria Atendidas", valor: "Chumbo-Ácido Ventilada (VLA), VRLA (AGM/Gel), Níquel-Cádmio (Ni-Cd) e Íons de Lítio" },
          { parametro: "Estágios de Carga Inteligentes", valor: "Flutuação, Carga Rápida (Boost) e Equalização programada automática ou manual" },
          { parametro: "Compensação Térmica de Flutuação", valor: "Ajuste dinâmico por sensor de temperatura externo (-3 a -5 mV/°C/célula)" },
          { parametro: "Limite Independente da Bateria", valor: "Corrente de recarga ajustável em 10% a 25% da capacidade C10 da bateria" },
          { parametro: "Teste Automático de Bateria", valor: "Ensaio periódico programável de autonomia e impedância sem corte na carga crítica" },
          { parametro: "Proteção contra Descarga Profunda", valor: "Contator LVD (Low Voltage Disconnect) com religamento automático ao retorno da rede" }
        ]
      },
      {
        grupo: "Supervisão Digital, IHM & Comunicação",
        itens: [
          { parametro: "Interface Homem-Máquina (IHM)", valor: "Display gráfico LCD de alto contraste com iluminação LED e teclado tátil de navegação" },
          { parametro: "Grandezas Medidas no Display", valor: "Tensões CA/CC, correntes de carga e bateria, potência (kW), temperatura e estado da rede" },
          { parametro: "Registro Histórico de Eventos", valor: "Memória interna não volátil para até 1.000 eventos e alarmes com timestamp (RTC)" },
          { parametro: "Comunicação Serial Padrão", valor: "Porta RS-485 isolada galvanicamente com protocolo Modbus-RTU escravo" },
          { parametro: "Comunicação Ethernet de Subestação", valor: "Porta Ethernet 10/100 Mbps com protocolos Modbus-TCP, DNP3 e IEC 61850" },
          { parametro: "Contatos Secos de Tele-Alarme", valor: "8 relés inversores programáveis (NA/NF - 5A @ 250Vca) para alarmes urgentes e não urgentes" }
        ]
      },
      {
        grupo: "Arquitetura, Redundância & Proteções",
        itens: [
          { parametro: "Redundância e Paralelismo", valor: "Capacidade de paralelismo ativo N+1 entre 2 a 4 retificadores com partilha dinâmica de carga" },
          { parametro: "Proteções CA Integradas", valor: "Sobretensão, subtensão, falta de fase, inversão de sequência de fase e surtos de rede" },
          { parametro: "Proteções CC Integradas", valor: "Sobretensão CC com bloqueio ultrarrápido eletrônico, subtensão, sobrecorrente e polaridade reversa" },
          { parametro: "Supervisão de Fuga à Terra", valor: "Medição em tempo real de resistência de isolamento dos polos positivo e negativo à terra" },
          { parametro: "Proteção Térmica Ativa", valor: "Termistores nos tiristores e enrolamentos do transformador com alarme e desligamento seguro" }
        ]
      },
      {
        grupo: "Construção Mecânica & Normas Técnicas",
        itens: [
          { parametro: "Estrutura do Gabinete", valor: "Cubículo autossustentado em chapa de aço 2,0mm com olhais de içamento e base soleira" },
          { parametro: "Grau de Proteção do Invólucro", valor: "IP21 padrão industrial (disponíveis IP31, IP42 e IP54 com filtros laváveis)" },
          { parametro: "Pintura e Proteção Anticorrosiva", valor: "Pintura eletrostática poliéster a pó Cinza RAL 7035 com espessura mínima de 80 µm" },
          { parametro: "Resfriamento do Sistema", valor: "Convecção natural ou ar forçado com ventiladores de longa vida (> 70.000h) monitorados" },
          { parametro: "Faixa Térmica e Altitude", valor: "0°C a +40°C nominais (até +50°C com derating); altitude de até 1.000m sem redução de potência" },
          { parametro: "Normas de Conformidade", valor: "IEC 60146-1-1, IEEE 946, IEC 61850, IEC 62477-1, IEC 60529, NR-10 e NR-12" }
        ]
      }
    ],
    midias: [
      {
        id: "media-dk-1",
        type: "image",
        url: "/images/products/rit-d-cabinet.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet.jpg",
        title: "Retificador Industrial Tiristorizado DK10 / DK30",
        alt: "Retificador Industrial DK10 / DK30 em cubículo com controle digital",
        badge: "Linha Digital"
      }
    ]
  },
  {
    id: "dsr-dk-sr10-sr30",
    slug: "retificador-modular-chaveado-digital-dk-sr10-dk-sr30",
    nome: "Retificador Modular Chaveado Digital",
    codigo_modelo: "Modelo DK-SR10 / DK-SR30",
    categoria: "Retificadores & Carregadores",
    subcategoria: "Sistemas Modulares Chaveados de Alta Densidade",
    tagline: "Arquitetura modular chaveada em alta frequência com redundância ativa N+1, módulos hot-swap e rendimento > 95,5%.",
    descricao: "Os Retificadores Modulares DK-SR10 (entrada monofásica) e DK-SR30 (entrada trifásica) representam o estado da arte em fontes chaveadas de alta frequência para aplicações críticas. Utilizando conversores ressonantes em gavetas hot-swap de 19 polegadas, o sistema combina máxima densidade de potência, fator de potência unitário (PFC ≥ 0,99), distorção harmônica ultrabaixa (THDi < 3%) e eficiência superior a 95,5%, reduzindo drasticamente os custos operacionais e a dissipação térmica em salas de controle.",
    descricao_detalhada: "Projetado com arquitetura verdadeiramente redundante N+1 ou 2N, cada módulo opera com controle digital descentralizado e partilha dinâmica ativa de corrente via barramento CAN de alta velocidade (desbalanceamento < 3%). Um controlador central inteligente com tela colorida touch gerencia todo o conjunto, oferecendo supervisão avançada de baterias (VRLA, Ni-Cd e Lítio), relatórios de eventos e conectividade completa através de SNMPv3, Modbus-TCP e servidor web HTTP integrado.",
    texto_tecnologia: "Topologia ressonante chaveada em alta frequência (> 50 kHz) com comutação suave (ZVS/ZCS) em semicondutores de potência de carbeto de silício (SiC). Módulos gaveta plug-in substituíveis a quente (hot-swap) sem interrupção do barramento CC, controle de ventilação proporcional por carga/temperatura e desconexão de bateria por subtensão profunda (LVD) incorporada.",
    datasheet_url: "/downloads/retificador-modular-chaveado-dk-sr10-dk-sr30.pdf",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia de Fábrica DSR)",
    certificacoes: ["IEC 61204", "IEC 62477-1", "CISPR 22 / EN 55022", "NR-10 / NR-12", "ISO 9001"],
    recursos_principais: [
      {
        titulo: "Gavetas Hot-Swap de 19 Polegadas",
        descricao: "Substituição e adição de módulos plug-in com o sistema energizado, sem interrupção de energia no barramento.",
        icone: "Cpu"
      },
      {
        titulo: "Eficiência > 95,5% & PFC ≥ 0,99",
        descricao: "Mínima dissipação de calor em salas climatizadas e fator de potência unitário com distorção harmônica THDi < 3%.",
        icone: "Zap"
      },
      {
        titulo: "Redundância Ativa N+1 e 2N",
        descricao: "Partilha de carga dinâmica e automática entre módulos conversores via barramento CAN com tolerância a falhas.",
        icone: "Layers"
      },
      {
        titulo: "Controlador Central Touch com SNMPv3",
        descricao: "Display colorido sensível ao toque, servidor web HTTP, SNMPv3 com traps/MIBs e Modbus-TCP nativos.",
        icone: "Activity"
      },
      {
        titulo: "Gestão Multiquímica (VRLA, Ni-Cd e Lítio)",
        descricao: "Curvas de carga de precisão com compensação térmica e integração com BMS para acumuladores de Lítio (LiFePO4).",
        icone: "ShieldCheck"
      },
      {
        titulo: "Ventilação Inteligente de Longa Vida",
        descricao: "Velocidade variável controlada por temperatura e sensores de rotação com alarme preventivo de manutenção.",
        icone: "Sparkles"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Aplicação Principal", valor: "Centros de telecomunicações, data centers, automação e subestações", destaque: true },
      { chave: "Tecnologia de Potência", valor: "Fontes ressonantes chaveadas em alta frequência (> 50 kHz)", destaque: true },
      { chave: "Arquitetura do Sistema", valor: "Modular hot-swap em sub-bastidores 19'' com redundância N+1", destaque: true },
      { chave: "Tensão de Entrada CA", valor: "DK-SR10 (85-290Vca Mono) / DK-SR30 (380-440Vca Trifásico)" },
      { chave: "Tensões de Saída CC", valor: "24Vcc, 48Vcc, 110Vcc ou 125Vcc parametrizáveis", destaque: true },
      { chave: "Potência Escalável", valor: "De 3 kW a mais de 120 kW por gabinete", destaque: true },
      { chave: "Rendimento Garantido", valor: "> 95,5% a 96,2% em regime nominal", destaque: true },
      { chave: "Fator de Potência de Entrada", valor: "≥ 0,99 contínuo (Correção Ativa de FP - PFC)", destaque: true },
      { chave: "Distorção Harmônica (THDi)", valor: "< 3% a 5% em plena carga nominal", destaque: true },
      { chave: "Ripple de Saída", valor: "< 50 mV RMS ou < 0,05% RMS" },
      { chave: "Conectividade de Rede", valor: "Ethernet RJ45, SNMPv3, Modbus-TCP e Web Server HTTP", destaque: true },
      { chave: "Normas de Conformidade", valor: "IEC 61204, IEC 62477-1, CISPR 22, NR-10 e NR-12" }
    ],
    especificacoes_completas: [
      {
        grupo: "Classificação & Arquitetura Modular",
        itens: [
          { parametro: "Tipo de Equipamento", valor: "Retificador Carregador Modular Chaveado em Alta Frequência" },
          { parametro: "Arquitetura do Sistema", valor: "Módulos gaveta plug-in padrão rack 19 polegadas com montagem em sub-bastidores" },
          { parametro: "Substituição a Quente (Hot-Swap)", valor: "Troca e expansão de módulos 100% a quente sem interrupção do suprimento CC" },
          { parametro: "Configuração de Redundância", valor: "Suporte nativo a redundância N+1, N+2 e sistemas dual bus 2N" },
          { parametro: "Partilha Ativa de Corrente", valor: "Comunicação via barramento CAN interno com desbalanceamento entre módulos < 3%" },
          { parametro: "Capacidade de Potência", valor: "Escalável de 1 módulo (1,5 kW a 6 kW) até dezenas de módulos em paralelo (> 120 kW)" },
          { parametro: "Regime de Trabalho", valor: "Operação contínua ininterrupta 24 horas por dia, 7 dias por semana" }
        ]
      },
      {
        grupo: "Entrada em Corrente Alternada (CA)",
        itens: [
          { parametro: "Tensão de Entrada DK-SR10", valor: "85 Vca a 290 Vca universal monofásica (plena potência de 180V a 275Vca)" },
          { parametro: "Tensão de Entrada DK-SR30", valor: "380 Vca / 400 Vca / 440 Vca Trifásica a 3 ou 4 fios ± 20%" },
          { parametro: "Frequência Nominal", valor: "45 Hz a 66 Hz com rastreamento automático de rede" },
          { parametro: "Fator de Potência (PFC Ativo)", valor: "≥ 0,99 em ampla faixa de carga (30% a 100% da potência nominal)" },
          { parametro: "Distorção Harmônica Total (THDi)", valor: "< 3% em plena carga nominal (atende com folga à norma IEEE 519)" },
          { parametro: "Corrente de Partida (Inrush)", valor: "Praticamente nula (< 1x Inom) com soft-start eletrônico suave" },
          { parametro: "Proteção de Entrada CA", valor: "Disjuntor geral de entrada, proteção contra surtos DPS e fusíveis por módulo" }
        ]
      },
      {
        grupo: "Saída em Corrente Contínua (CC) & Potência",
        itens: [
          { parametro: "Tensões Nominais Padronizadas", valor: "24Vcc, 48Vcc, 110Vcc ou 125Vcc" },
          { parametro: "Faixa de Ajuste da Tensão CC", valor: "21V a 30Vcc (para linha 24V); 42V a 58Vcc (linha 48V); 95V a 145Vcc (linha 110/125V)" },
          { parametro: "Potência Unitária por Módulo", valor: "Módulos disponíveis em 1.500W, 3.000W e 6.000W" },
          { parametro: "Regulação Estática de Tensão", valor: "≤ ± 0,2% para variações extremas de rede de entrada e carga de zero a 100%" },
          { parametro: "Resposta Dinâmica a Transitórios", valor: "Desvio transitório < 2% com tempo de recuperação < 200 microssegundos" },
          { parametro: "Ripple e Ruído de Alta Frequência", valor: "< 50 mV RMS ou < 0,05% RMS (largura de banda de 30 MHz)" },
          { parametro: "Limite de Corrente Configurável", valor: "Limitador de corrente ajustável individualmente para cada módulo e para o barramento" }
        ]
      },
      {
        grupo: "Eficiência Energética & Térmica",
        itens: [
          { parametro: "Rendimento Global do Sistema", valor: "> 95,5% a 96,2% em regime nominal contínuo" },
          { parametro: "Curva de Rendimento por Carga", valor: "> 94% a 25% de carga; > 95,5% a 50% de carga; > 96% a 75% e 100% de carga" },
          { parametro: "Dissipação de Calor Reduzida", valor: "Redução de mais de 45% nas perdas térmicas comparado a retificadores convencionais" },
          { parametro: "Modo Econômico (Eco-Sleep)", valor: "Gerenciamento inteligente que desativa módulos excedentes em baixa carga para manter eficiência máxima" }
        ]
      },
      {
        grupo: "Gerenciamento Multiquímica de Baterias",
        itens: [
          { parametro: "Tipos de Bateria Suportados", valor: "Chumbo-Ácido VRLA (AGM/Gel), Chumbo Ventilada (VLA), Níquel-Cádmio (Ni-Cd) e Íons de Lítio (LFP)" },
          { parametro: "Ciclos de Carga Automatizados", valor: "Flutuação contínua, Carga Rápida (Boost) e Equalização programada com temporizador" },
          { parametro: "Compensação de Tensão por Temperatura", valor: "Sensor térmico externo com compensação linear ajustável (-3 a -5 mV/°C/elemento)" },
          { parametro: "Desconexão por Subtensão (LVD)", valor: "Contator magnético biestável integrado com corte seguro para preservação da vida útil das baterias" },
          { parametro: "Integração com BMS de Lítio", valor: "Comunicação nativa via barramento CAN/RS-485 com sistemas BMS de baterias de lítio" }
        ]
      },
      {
        grupo: "Supervisão Inteligente, Display & Conectividade",
        itens: [
          { parametro: "Controlador Central Inteligente", valor: "Unidade de controle microprocessada com tela gráfica colorida touchscreen de 4,3'' ou 7''" },
          { parametro: "Interface Web Integrada (HTTP/HTTPS)", valor: "Acesso a todos os parâmetros e curvas de operação através de qualquer navegador sem software especial" },
          { parametro: "Protocolo SNMPv3 para TI e Telecom", valor: "Suporte completo a SNMPv1/v2c/v3 com criptografia de segurança, arquivos MIB e traps de alarmes" },
          { parametro: "Protocolos Industriais de Automação", valor: "Modbus-TCP (Ethernet) e Modbus-RTU (RS-485) para integração com CLPs e sistemas supervisórios" },
          { parametro: "Registro de Eventos & Histórico", valor: "Armazenamento em memória não volátil de mais de 2.000 registros detalhados com data e hora (RTC)" }
        ]
      },
      {
        grupo: "Construção Mecânica & Refrigeração",
        itens: [
          { parametro: "Padrão de Gabinete", valor: "Sub-bastidor de 19 polegadas (3U a 9U) ou cubículo industrial autossustentado completo" },
          { parametro: "Método de Refrigeração", valor: "Ventilação forçada individual por módulo com ventiladores de rolamento de esferas" },
          { parametro: "Controle Inteligente de Ventiladores", valor: "Velocidade variável proporcional à temperatura e carga, com sensor tacométrico de alarme de falha" },
          { parametro: "Grau de Proteção Mecânica", valor: "IP20 / IP21 para bastidores de sala limpa; até IP54 em cubículos industriais com filtros" },
          { parametro: "Faixa de Temperatura Operacional", valor: "-20°C a +55°C contínuo (plena potência até +45°C com derating suave até +65°C)" }
        ]
      },
      {
        grupo: "Normas de Segurança & Compatibilidade EMC",
        itens: [
          { parametro: "Norma de Conversores Estáticos", valor: "Atendimento integral à IEC 61204 e IEC 62477-1" },
          { parametro: "Compatibilidade Eletromagnética (EMC)", valor: "CISPR 22 / EN 55022 Classe A e IEC 61000-4 (níveis industriais de imunidade a surtos e ruídos)" },
          { parametro: "Segurança do Trabalho", valor: "Conformidade estrita com as normas regulamentadoras brasileiras NR-10 e NR-12" },
          { parametro: "Garantia e Serviços DSR", valor: "24 meses de garantia fabril com sobressalentes e suporte de engenharia especializado" }
        ]
      }
    ],
    midias: [
      {
        id: "media-dksr-1",
        type: "image",
        url: "/images/products/rit-d-udq.jpg",
        thumbnailUrl: "/images/products/rit-d-udq.jpg",
        title: "Retificador Modular Chaveado DK-SR",
        alt: "Retificador Modular Chaveado de Alta Frequência em bastidor",
        badge: "Arquitetura Modular"
      }
    ]
  },
  {
    id: "dsr-formador-baterias",
    slug: "retificador-formador-de-baterias",
    nome: "Retificador Formador de Baterias Industrial",
    codigo_modelo: "Modelo DSR-RFB",
    categoria: "Retificadores & Carregadores",
    subcategoria: "Equipamentos Especiais para Fabricação de Baterias",
    tagline: "Ciclos programáveis de carga, formação química e despolarização por micropulsos para fabricantes e laboratórios de baterias industriais.",
    descricao: "Projetado com base nos mais exigentes padrões de processos eletroquímicos, o Retificador Formador de Baterias DSR-RFB executa rampas e patamares controlados de corrente e tensão para formação química inicial de placas e blocos de baterias, além de ciclos de regeneração profunda. O sistema incorpora integrador de Ampere-hora (Ah) e Coulomb de altíssima exatidão, algoritmos de despolarização por reversão controlada de pulsos e monitoramento térmico multicanal para evitar o superaquecimento dos vasos durante o processo de cura eletroquímica.",
    descricao_detalhada: "O DSR-RFB opera sob controle tiristorizado microprocessado de resposta dinâmica ultrarrápida, permitindo parametrizar receitas completas com até 20 etapas sequenciais de corrente constante (CC), tensão constante (CV), patamares de repouso e pulsos de alta frequência. Todo o histórico de ensaio e formação é registrado em tempo real com exportação para sistemas de qualidade fabril e rastreabilidade individual por lote de baterias.",
    texto_tecnologia: "Topologia tiristorizada com amostragem multicanal True RMS e algoritmo de pulsos de despolarização ativa. Inclui medição contínua de resistência interna dinâmica, integração digital de Ampere-hora / Coulomb com corte programado e supervisão térmica de até 16 sensores PT100/NTC posicionados diretamente nos vasos de bateria com interrupção de segurança por gradiente térmico excessivo.",
    datasheet_url: "/downloads/retificador-formador-de-baterias-dsr-rfb.pdf",
    status_disponibilidade: "Engenharia Customizada",
    garantia: "24 Meses (Garantia de Fábrica DSR com Suporte Especializado)",
    certificacoes: ["IEC 60146-1-1", "IEC 62477-1", "NR-10 / NR-12", "ISO 9001"],
    recursos_principais: [
      {
        titulo: "Receitas Eletroquímicas de até 20 Etapas",
        descricao: "Perfis flexíveis de formação com rampas, patamares CC/CV, tempos de repouso e comutação automática.",
        icone: "Activity"
      },
      {
        titulo: "Integrador de Ampere-Hora (Ah) e Coulomb",
        descricao: "Cálculo exato da energia acumulada para garantia de espessura e ativação homogênea da matéria ativa das placas.",
        icone: "Cpu"
      },
      {
        titulo: "Algoritmo de Despolarização Rápida",
        descricao: "Micropulsos reversos controlados que quebram a resistência de polarização e reduzem em até 30% o tempo de formação.",
        icone: "Zap"
      },
      {
        titulo: "Monitoramento Térmico Multicanal de Vasos",
        descricao: "Sondas térmicas individuais com corte preventivo ou redução de corrente em caso de sobreaquecimento dos vasos.",
        icone: "ShieldCheck"
      },
      {
        titulo: "Controle Preciso de Corrente de 0 a 1.500A",
        descricao: "Ajuste milimétrico de densidade de corrente com estabilidade estática e dinâmica superior a ± 0,5%.",
        icone: "Sliders"
      },
      {
        titulo: "Rastreabilidade & Exportação de Curvas",
        descricao: "Registro contínuo de curvas V(t), I(t) e T(t) com interface Ethernet para banco de dados e controle de qualidade.",
        icone: "Layers"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Aplicação Específica", valor: "Formação química, ativação e regeneração de baterias industriais", destaque: true },
      { chave: "Modos de Processo", valor: "Corrente Constante (CC), Tensão Constante (CV) e Perfis Programados", destaque: true },
      { chave: "Corrente de Saída CC", valor: "Até 1.500 A contínuos programáveis", destaque: true },
      { chave: "Tensão de Barramento CC", valor: "Configurável de 12V até 600Vcc (para múltiplos vasos em série)", destaque: true },
      { chave: "Precisão de Ajuste", valor: "Classe 0,5% de Fundo de Escala para corrente e tensão", destaque: true },
      { chave: "Integrador de Energia", valor: "Ampere-hora (Ah) e Watt-hora (Wh) com corte automático", destaque: true },
      { chave: "Pulsos de Despolarização", valor: "Inversão controlada de pulsos para aceleração eletroquímica" },
      { chave: "Supervisão Térmica", valor: "Até 16 canais de temperatura para monitoramento de vasos" },
      { chave: "Interface & Software", valor: "IHM industrial colorida + Porta Ethernet para software de laboratório" },
      { chave: "Grau de Proteção Mecânica", valor: "IP21 a IP42 com tratamento especial anticorrosivo contra vapores ácidos" }
    ],
    especificacoes_completas: [
      {
        grupo: "Classificação & Processos Eletroquímicos",
        itens: [
          { parametro: "Aplicação Primária", valor: "Formação inicial de placas, carregamento de tanques e ativação de acumuladores químicos" },
          { parametro: "Tipos de Bateria Formadas", valor: "Chumbo-Ácido (automotivas, tracionárias e estacionárias VRLA/VLA) e Níquel-Cádmio" },
          { parametro: "Modos de Operação do Processo", valor: "Corrente Constante (CC), Tensão Constante (CV), Potência Constante (CP) e Repouso" },
          { parametro: "Receitas de Formação", valor: "Armazenamento em memória de até 50 receitas com até 20 etapas sequenciais por receita" },
          { parametro: "Critérios de Mudança de Etapa", valor: "Por tempo decorrido, por tensão atingida, por Ampere-hora acumulado ou por gradiente térmico" },
          { parametro: "Regime de Trabalho", valor: "Regime industrial contínuo pesado 24/7 com proteção anticorrosiva reforçada" }
        ]
      },
      {
        grupo: "Entrada em Corrente Alternada (CA)",
        itens: [
          { parametro: "Tensão de Alimentação CA", valor: "220V, 380V ou 440Vca Trifásica (50/60 Hz ± 5%)" },
          { parametro: "Esquema de Entrada", valor: "Trifásico a 3 fios + Condutor de Proteção (PE)" },
          { parametro: "Tolerância de Tensão da Rede", valor: "± 10% permanente com compensação automática de fase" },
          { parametro: "Partida e Rampa de Corrente", valor: "Rampa programável de subida e descida de corrente de 1 a 60 segundos" },
          { parametro: "Proteção de Entrada", valor: "Disjuntor motorizado de alta capacidade de interrupção e supressores de transientes DPS" }
        ]
      },
      {
        grupo: "Saída CC & Parâmetros Eletroquímicos",
        itens: [
          { parametro: "Faixa de Tensão de Saída CC", valor: "12 Vcc a 600 Vcc (dimensionada para strings de 1 a 240 vasos de bateria)" },
          { parametro: "Faixa de Corrente Contínua", valor: "10 A a 1.500 A contínuos com controle milimétrico" },
          { parametro: "Estabilidade Estática de Corrente", valor: "≤ ± 0,5% do valor programado, independente de variações térmicas ou de rede" },
          { parametro: "Resolução de Ajuste", valor: "Resolução de 0,1 A para corrente e 0,1 V para tensão" },
          { parametro: "Ripple Residual de Corrente", valor: "< 1,5% RMS garantindo deposição eletroquímica uniforme" },
          { parametro: "Despolarização por Micropulsos", valor: "Trem de pulsos reversos de alta velocidade para eliminação de bolhas e sulfatação prematura" }
        ]
      },
      {
        grupo: "Integrador de Carga & Controle Térmico",
        itens: [
          { parametro: "Integrador de Carga Elétrica", valor: "Contador digital de Ampere-hora (Ah) e Coulomb com classe de precisão 0,2%" },
          { parametro: "Corte Automático por Carga", valor: "Desligamento automático seguro ou avanço de etapa ao atingir o valor exato de Ah programado" },
          { parametro: "Canais de Medição de Temperatura", valor: "4 a 16 canais isolados para sondas térmicas PT100/NTC instaladas nos vasos de teste" },
          { parametro: "Algoritmo de Proteção Térmica", valor: "Redução automática da corrente de carga se a temperatura do vaso ultrapassar 45°C e corte total a 55°C" }
        ]
      },
      {
        grupo: "Supervisão, Software & Rastreabilidade",
        itens: [
          { parametro: "Interface Frontal do Operador", valor: "IHM touch colorida industrial com visualização gráfica instantânea das curvas V, I e T" },
          { parametro: "Comunicação com Sala de Controle", valor: "Porta Ethernet TCP/IP nativa com protocolo Modbus-TCP para software de supervisão de fábrica" },
          { parametro: "Rastreabilidade por Lote", valor: "Associação de cada ciclo de formação ao código de barras do lote de fabricação" },
          { parametro: "Exportação de Dados de Ensaio", valor: "Geração de arquivos CSV/Excel e relatórios em PDF com laudo de formação do acumulador" }
        ]
      },
      {
        grupo: "Construção Mecânica & Ambiente Agressivo",
        itens: [
          { parametro: "Estrutura do Cubículo", valor: "Chapa de aço tratada com primer anticorrosivo e pintura em epóxi especial resistente a ácidos" },
          { parametro: "Grau de Proteção Mecânica", valor: "IP21 a IP42 com isolamento das placas eletrônicas contra atmosfera corrosiva de baterias" },
          { parametro: "Refrigeração dos Semicondutores", valor: "Ventilação forçada em túnel de vento dedicado, impedindo o contato de vapores com as placas de controle" },
          { parametro: "Normas Técnicas Aplicáveis", valor: "IEC 60146-1-1, IEC 62477-1, NR-10 e NR-12" }
        ]
      }
    ],
    midias: [
      {
        id: "media-rfb-1",
        type: "image",
        url: "/images/products/rit-d-cabinet.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet.jpg",
        title: "Retificador Formador de Baterias DSR",
        alt: "Retificador Formador de Baterias em cubículo industrial",
        badge: "Equipamento Especial"
      }
    ]
  },

  // =========================================================================
  // CATEGORIA 2: SISTEMAS DE ENERGIA ININTERRUPTA & CONVERSÃO
  // =========================================================================
  {
    id: "dsr-ups-industrial",
    slug: "no-break-ups-industrial",
    nome: "No-Break / UPS Industrial On-Line Dupla Conversão",
    codigo_modelo: "Modelo DSR-UPS-IND",
    categoria: "Sistemas de Energia Ininterrupta & Conversão",
    subcategoria: "Sistemas UPS Industriais On-Line",
    tagline: "Alimentação elétrica ininterrupta e estabilizada para cargas industriais críticas com transformador isolador galvânico incorporado.",
    descricao: "O UPS Industrial DSR foi desenvolvido para suportar condições severas de ambiente e cargas dinâmicas industriais. Operando em topologia On-line Dupla Conversão com bypass estático automático, assegura energia ininterrupta com onda senoidal pura.",
    descricao_detalhada: "Dotado de transformador isolador na saída e no bypass, isola completamente a carga sensível de perturbações e transitórios da rede elétrica pública.",
    texto_tecnologia: "Inversor IGBT com controle PWM em alta frequência e processador DSP com cálculo de forma de onda em tempo real.",
    status_disponibilidade: "Sob Encomenda",
    garantia: "24 Meses (Garantia de Fábrica DSR)",
    certificacoes: ["NR-10", "NR-12", "IEC 62040-3", "ISO 9001"],
    recursos_principais: [
      { titulo: "On-Line Dupla Conversão", descricao: "Tempo de transferência zero absoluto (0 ms) para as cargas críticas.", icone: "Zap" }
    ],
    especificacoes_rapidas: [
      { chave: "Topologia", valor: "On-Line Dupla Conversão com Bypass Estático", destaque: true },
      { chave: "Potência", valor: "10 kVA a 500 kVA", destaque: true },
      { chave: "Isolamento", valor: "Transformador Isolador Galvânico Incorporado", destaque: true },
      { chave: "Forma de Onda", valor: "Senoidal Pura (THD < 2%)" }
    ],
    midias: [
      {
        id: "media-ups-1",
        type: "image",
        url: "/images/products/rit-d-cabinet.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet.jpg",
        title: "No-Break / UPS Industrial DSR",
        alt: "UPS Industrial DSR",
        badge: "Energia Ininterrupta"
      }
    ]
  },
  {
    id: "dsr-inversor-industrial",
    slug: "inversor-industrial-estatico",
    nome: "Inversor Industrial Estático CC/CA",
    codigo_modelo: "Modelo DSR-INV-IND",
    categoria: "Sistemas de Energia Ininterrupta & Conversão",
    subcategoria: "Conversores Estáticos CC para CA Pura",
    tagline: "Conversão estática de corrente contínua de barramentos de baterias (24V a 250Vcc) em corrente alternada senoidal pura e estabilizada.",
    descricao: "Converte a tensão contínua do banco de baterias em tensão alternada estabilizada monofásica ou trifásica (110V/220V/380Vca), alimentando computadores industriais, sistemas de proteção e instrumentação crítica.",
    descricao_detalhada: "Conta com chave estática de transferência opcional para sincronismo com a rede e isolamento galvânico de alta imunidade a ruídos.",
    texto_tecnologia: "Inversor IGBT chaveado em alta frequência com malha de controle proporcional-integral e proteção térmica ativa.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "NR-12", "IEC 60146", "ISO 9001"],
    recursos_principais: [
      { titulo: "Senoidal Pura", descricao: "Onda de saída de altíssima pureza com THD inferior a 2%.", icone: "Cpu" }
    ],
    especificacoes_rapidas: [
      { chave: "Tensão de Entrada CC", valor: "24V, 48V, 110V, 125V ou 250Vcc", destaque: true },
      { chave: "Tensão de Saída CA", valor: "110V / 220V / 380Vca (50/60 Hz)", destaque: true },
      { chave: "Potência", valor: "1 kVA a 100 kVA", destaque: true }
    ],
    midias: [
      {
        id: "media-inv-ind-1",
        type: "image",
        url: "/images/products/rit-d-udq.jpg",
        thumbnailUrl: "/images/products/rit-d-udq.jpg",
        title: "Inversor Industrial Estático",
        alt: "Inversor Industrial Estático",
        badge: "Conversão CC/CA"
      }
    ]
  },
  {
    id: "dsr-chave-estatica",
    slug: "chave-estatica-transferencia-automatica",
    nome: "Chave Estática de Transferência Automática (STS)",
    codigo_modelo: "Modelo DSR-STS",
    categoria: "Sistemas de Energia Ininterrupta & Conversão",
    subcategoria: "Chaves de Transferência de Estado Sólido",
    tagline: "Comutação ultrarrápida sem interrupção (< 4ms) entre fontes de energia CA independentes para cargas ultra-sensíveis.",
    descricao: "Equipamento baseado em tiristores de potência projetado para transferir instantaneamente a alimentação de uma carga crítica entre duas fontes de energia alternada distintas em caso de falha da fonte prioritária.",
    descricao_detalhada: "O tempo de transferência típico inferior a 4 milissegundos garante que os equipamentos alimentados continuem operando sem reinicializações ou quedas de processo.",
    texto_tecnologia: "Comutação eletrônica por tiristores SCR em anti-paralelo com sincronização de ângulo de fase e proteção contra corrente cruzada.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "NR-12", "IEC 62310", "ISO 9001"],
    recursos_principais: [
      { titulo: "Comutação < 4ms", descricao: "Transferência ultrarrápida sem descontinuidade na carga.", icone: "Zap" }
    ],
    especificacoes_rapidas: [
      { chave: "Tempo de Transferência", valor: "< 4 ms (Inaudível à carga)", destaque: true },
      { chave: "Corrente Nominal", valor: "25 A a 800 A", destaque: true },
      { chave: "Tensão de Operação", valor: "110V / 220V / 380V / 440Vca" }
    ],
    midias: [
      {
        id: "media-sts-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Chave Estática de Transferência DSR",
        alt: "Chave Estática STS",
        badge: "Estado Sólido"
      }
    ]
  },
  {
    id: "dsr-estabilizador-estado-solido",
    slug: "estabilizador-eletronico-estado-solido",
    nome: "Estabilizador Eletrônico de Estado Sólido Microprocessado",
    codigo_modelo: "Modelo DSR-EST-SS",
    categoria: "Sistemas de Energia Ininterrupta & Conversão",
    subcategoria: "Reguladores de Tensão Tiristorizados",
    tagline: "Regulação estática ultrarrápida de tensão através de semicondutores tiristorizados, eliminando escovas e desgaste mecânico.",
    descricao: "Elimina oscilações, afundamentos e sobretensões de rede com velocidade de resposta instantânea, sem peças mecânicas sujeitas a fadiga e atrito.",
    descricao_detalhada: "Construído com transformador com múltiplos tapes chaveados por tiristores no cruzamento de zero de tensão, sem gerar ruídos elétricos ou distorção harmônica.",
    texto_tecnologia: "Chaveamento estático por tiristores em zero-crossing controlado por DSP de 32 bits.",
    status_disponibilidade: "Sob Encomenda",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "NR-12", "ABNT NBR 14373", "ISO 9001"],
    recursos_principais: [
      { titulo: "Zero Manutenção Mecânica", descricao: "Sem servomotores nem escovas comutadoras.", icone: "Cpu" }
    ],
    especificacoes_rapidas: [
      { chave: "Velocidade de Correção", valor: "< 10 ms (Meio ciclo de rede)", destaque: true },
      { chave: "Potência", valor: "5 kVA a 300 kVA", destaque: true },
      { chave: "Precisão de Saída", valor: "± 1% regulado" }
    ],
    midias: [
      {
        id: "media-est-1",
        type: "image",
        url: "/images/products/rit-d-cabinet.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet.jpg",
        title: "Estabilizador Eletrônico de Estado Sólido",
        alt: "Estabilizador de Estado Sólido",
        badge: "Estado Sólido"
      }
    ]
  },

  // =========================================================================
  // CATEGORIA 3: QUADROS DE DISTRIBUIÇÃO & PARALELISMO
  // =========================================================================
  {
    id: "dsr-quadro-distribuicao-ac-dc",
    slug: "quadro-distribuicao-ac-dc-digital",
    nome: "Quadro de Distribuição AC e DC Digital",
    codigo_modelo: "Modelo DSR-QD-ACDC",
    categoria: "Quadros de Distribuição & Paralelismo",
    subcategoria: "Distribuição de Força e Comando com Telemetria",
    tagline: "Distribuição seletiva e segura de circuitos CA e CC industriais com supervisão digital de disjuntores, fusíveis e medidores integrados.",
    descricao: "Painel modular montado conforme as normas NR-10 e NR-12 com barramentos de cobre dimensionados, chaves seccionadoras, disjuntores monitorados e telemetria de grandezas elétricas para supervisório central.",
    descricao_detalhada: "Inclui transdutores de corrente por circuito e contato auxiliar de disparo de proteção, permitindo saber instantaneamente qual disjuntor abriu e qual carga foi afetada.",
    texto_tecnologia: "Barramento eletrolítico com isolamento reforçado e integração digital via Modbus TCP ou RTU.",
    status_disponibilidade: "Engenharia Customizada",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "NR-12", "IEC 61439", "ISO 9001"],
    recursos_principais: [
      { titulo: "Supervisão por Circuito", descricao: "Monitoramento individual de status e corrente de cada disjuntor.", icone: "ShieldCheck" }
    ],
    especificacoes_rapidas: [
      { chave: "Tensão de Barramento", valor: "Até 690 Vca / 500 Vcc", destaque: true },
      { chave: "Corrente do Barramento", valor: "100 A a 4.000 A", destaque: true },
      { chave: "Normas de Segurança", valor: "NR-10, NR-12, IEC 61439-1" }
    ],
    midias: [
      {
        id: "media-qd-1",
        type: "image",
        url: "/images/products/rit-d-cabinet.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet.jpg",
        title: "Quadro de Distribuição Digital DSR",
        alt: "Quadro de Distribuição",
        badge: "Distribuição Industrial"
      }
    ]
  },
  {
    id: "dsr-quadro-paralelismo-dc",
    slug: "quadro-paralelismo-dc-digital",
    nome: "Quadro de Paralelismo DC Digital",
    codigo_modelo: "Modelo DSR-QP-DC",
    categoria: "Quadros de Distribuição & Paralelismo",
    subcategoria: "Acoplamento e Distribuição em Anel de Fontes CC",
    tagline: "Interligação, comutação e paralelismo seguro entre múltiplos bancos de baterias e retificadores industriais com barramento desacoplado.",
    descricao: "Permite operar com redundância entre retificadores e múltiplos bancos de acumuladores, possibilitando manutenção de um sistema sem interrupção do suprimento CC para a carga crítica.",
    descricao_detalhada: "Inclui diodos de bloqueio ou contatores estáticos de acoplamento, sensores de corrente por ramo e monitoramento de diferença de potencial entre barramentos.",
    texto_tecnologia: "Supervisão digital de correntes de circulação entre bancos com alarme antecipado de desbalanceamento.",
    status_disponibilidade: "Engenharia Customizada",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "NR-12", "ISO 9001"],
    recursos_principais: [
      { titulo: "Paralelismo Seguro", descricao: "Desacoplamento de fontes e comutação sem arco elétrico.", icone: "Zap" }
    ],
    especificacoes_rapidas: [
      { chave: "Corrente Contínua Máxima", valor: "Até 5.000 A CC", destaque: true },
      { chave: "Tensões de Operação", valor: "24V, 48V, 110V, 125V, 250Vcc", destaque: true },
      { chave: "Monitoramento", valor: "Digital com telemetria por ramo" }
    ],
    midias: [
      {
        id: "media-qpdc-1",
        type: "image",
        url: "/images/products/rit-d-udq.jpg",
        thumbnailUrl: "/images/products/rit-d-udq.jpg",
        title: "Quadro de Paralelismo DC",
        alt: "Quadro de Paralelismo DC",
        badge: "Paralelismo Seguro"
      }
    ]
  },

  // =========================================================================
  // CATEGORIA 4: MÓDULOS DE DIGITALIZAÇÃO & TELEMETRIA INDUSTRIAL
  // =========================================================================
  {
    id: "dsr-mod-tensao-ac",
    slug: "modulo-digitalizacao-tensao-ac",
    nome: "Módulo de Digitalização de Tensão AC",
    codigo_modelo: "Modelo DSR-DIGI-VAC",
    categoria: "Módulos de Digitalização & Telemetria",
    subcategoria: "Transdutores Digitais de Grandezas Elétricas",
    tagline: "Medição digital de tensão alternada monofásica e trifásica com amostragem True RMS e saída em rede Modbus-RTU.",
    descricao: "Módulo eletrônico de trilho DIN para amostragem direta de tensões alternadas até 600 Vca com isolamento galvânico e conversão direta para protocolo digital.",
    descricao_detalhada: "Substitui transdutores analógicos convencionais de 4-20mA, entregando valores digitais via RS-485 prontos para o CLP ou IHM sem perda de precisão por conversão.",
    texto_tecnologia: "Conversor A/D de 16 bits com amostragem True RMS e isolamento óptico de 2,5 kV.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "IEC 61010", "ISO 9001"],
    recursos_principais: [
      { titulo: "True RMS em Tempo Real", descricao: "Precisão elevada mesmo na presença de harmônicas.", icone: "Activity" }
    ],
    especificacoes_rapidas: [
      { chave: "Faixa de Tensão", valor: "0 a 600 Vca (Fase-Fase ou Fase-Neutro)", destaque: true },
      { chave: "Precisão", valor: "Classe 0,5%", destaque: true },
      { chave: "Interface", valor: "RS-485 Modbus-RTU", destaque: true },
      { chave: "Montagem", valor: "Trilho DIN 35mm" }
    ],
    midias: [
      {
        id: "media-mvac-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Módulo de Digitalização de Tensão AC",
        alt: "Módulo de Digitalização de Tensão AC",
        badge: "Transdutor Digital"
      }
    ]
  },
  {
    id: "dsr-mod-tensao-dc",
    slug: "modulo-digitalizacao-tensao-dc",
    nome: "Módulo de Digitalização de Tensão DC",
    codigo_modelo: "Modelo DSR-DIGI-VDC",
    categoria: "Módulos de Digitalização & Telemetria",
    subcategoria: "Transdutores Digitais de Barramento Contínuo",
    tagline: "Aferição e telemetria de alta precisão para barramentos de corrente contínua e bancos de acumuladores até 1.000 Vcc.",
    descricao: "Módulo microcontrolado dedicado à medição de tensão contínua com isolamento óptico reforçado para proteção dos circuitos de telemetria.",
    descricao_detalhada: "Ideal para medição de barramentos de retificadores, carregadores de bateria e sistemas fotovoltaicos.",
    texto_tecnologia: "Entrada analógica isolada com amplificador de instrumentação e comunicação serial Modbus.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "IEC 61010", "ISO 9001"],
    recursos_principais: [
      { titulo: "Alta Isolação", descricao: "Isolamento de 2.500 V entre potência e comunicação digital.", icone: "ShieldCheck" }
    ],
    especificacoes_rapidas: [
      { chave: "Faixa de Tensão", valor: "0 a 1.000 Vcc configurável", destaque: true },
      { chave: "Resolução", valor: "16 bits", destaque: true },
      { chave: "Comunicação", valor: "RS-485 Modbus-RTU" }
    ],
    midias: [
      {
        id: "media-mvdc-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Módulo de Digitalização de Tensão DC",
        alt: "Módulo de Digitalização de Tensão DC",
        badge: "Transdutor Digital"
      }
    ]
  },
  {
    id: "dsr-mod-corrente-ac",
    slug: "modulo-digitalizacao-corrente-ac",
    nome: "Módulo de Digitalização de Corrente AC",
    codigo_modelo: "Modelo DSR-DIGI-IAC",
    categoria: "Módulos de Digitalização & Telemetria",
    subcategoria: "Transdutores Digitais para TCs de Corrente Alternada",
    tagline: "Leitura direta de correntes alternadas com amostragem True RMS e alta imunidade a ruídos eletromagnéticos.",
    descricao: "Converte sinais secundários de transformadores de corrente (TC 1A ou 5A) em grandezas numéricas digitais de corrente via Modbus-RTU.",
    descricao_detalhada: "Elimina a necessidade de conversores externos, proporcionando monitoramento contínuo de cargas de motores, alimentadores e transformadores.",
    texto_tecnologia: "Circuito de entrada com saturação protegida e amostragem de alta velocidade por microcontrolador.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "ISO 9001"],
    recursos_principais: [
      { titulo: "Compatível com TC 1A e 5A", descricao: "Entrada configurável para os padrões industriais de TC.", icone: "Zap" }
    ],
    especificacoes_rapidas: [
      { chave: "Entrada de Corrente", valor: "0 a 5 Aca (TC padrão)", destaque: true },
      { chave: "Cálculo", valor: "True RMS até a 31ª harmônica", destaque: true },
      { chave: "Saída", valor: "Modbus-RTU RS-485" }
    ],
    midias: [
      {
        id: "media-miac-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Módulo de Digitalização de Corrente AC",
        alt: "Módulo de Corrente AC",
        badge: "Transdutor Digital"
      }
    ]
  },
  {
    id: "dsr-mod-corrente-dc",
    slug: "modulo-digitalizacao-corrente-dc",
    nome: "Módulo de Digitalização de Corrente DC",
    codigo_modelo: "Modelo DSR-DIGI-IDC",
    categoria: "Módulos de Digitalização & Telemetria",
    subcategoria: "Transdutores Digitais para Shunts e Sensores Hall",
    tagline: "Digitalização de corrente contínua a partir de shunts calibrados ou transdutores Hall para monitoramento de carga e baterias.",
    descricao: "Lê mili-volts gerados por shunts de corrente (ex: 60mV, 75mV, 100mV) ou sensores Hall ativos, convertendo diretamente para corrente real.",
    descricao_detalhada: "Permite aferição bidirecional (carga e descarga de baterias) com detecção de sentido de corrente e cálculo de acumulação de energia.",
    texto_tecnologia: "Amplificador chopper de baixo drift com compensação automática de offset de temperatura.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "ISO 9001"],
    recursos_principais: [
      { titulo: "Leitura Bidirecional", descricao: "Mede correntes de carga e descarga sem inverter fiação.", icone: "Activity" }
    ],
    especificacoes_rapidas: [
      { chave: "Entrada de Shunt", valor: "50mV, 60mV, 75mV, 100mV configurável", destaque: true },
      { chave: "Faixa Equivalente", valor: "10 A a 5.000 A", destaque: true },
      { chave: "Precisão", valor: "± 0,2% Fundo de Escala" }
    ],
    midias: [
      {
        id: "media-midc-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Módulo de Digitalização de Corrente DC",
        alt: "Módulo de Corrente DC",
        badge: "Transdutor Digital"
      }
    ]
  },
  {
    id: "dsr-mod-temperatura",
    slug: "modulo-digitalizacao-temperatura",
    nome: "Módulo de Digitalização de Temperatura",
    codigo_modelo: "Modelo DSR-DIGI-TEMP",
    categoria: "Módulos de Digitalização & Telemetria",
    subcategoria: "Transdutores Térmicos Digitais para PT100 / NTC / Termopares",
    tagline: "Monitoramento térmico multicanal com isolamento galvânico para semicondutores, transformadores e salas de baterias.",
    descricao: "Módulo de 4 a 8 canais de medição de temperatura compatível com sensores PT100 (2 ou 3 fios), NTC e termopares tipo J/K.",
    descricao_detalhada: "Supervisiona temperaturas críticas de dissipadores de potência, enrolamentos e temperatura ambiente com alarmes de sobreaquecimento programáveis.",
    texto_tecnologia: "Linearização em hardware de sensores térmicos com filtro digital de rejeição a 50/60 Hz.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "ISO 9001"],
    recursos_principais: [
      { titulo: "Multicanal", descricao: "Até 8 canais de temperatura independentes por módulo.", icone: "Activity" }
    ],
    especificacoes_rapidas: [
      { chave: "Canais", valor: "4 ou 8 canais isolados", destaque: true },
      { chave: "Sensores Aceitos", valor: "PT100, PT1000, NTC 10k, Termopar J/K", destaque: true },
      { chave: "Faixa de Medição", valor: "-50°C a +250°C (PT100)" }
    ],
    midias: [
      {
        id: "media-mtemp-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Módulo de Digitalização de Temperatura",
        alt: "Módulo de Temperatura",
        badge: "Transdutor Digital"
      }
    ]
  },
  {
    id: "dsr-mod-tensao-corrente-ac",
    slug: "modulo-digitalizacao-tensao-corrente-ac",
    nome: "Módulo de Digitalização de Tensão e Corrente AC",
    codigo_modelo: "Modelo DSR-DIGI-VIAC",
    categoria: "Módulos de Digitalização & Telemetria",
    subcategoria: "Medidor de Potência e Energia Integrado CA",
    tagline: "Aquisição simultânea de tensão, corrente, potência ativa, reativa e fator de potência com barramento digital RS-485.",
    descricao: "Unidade compacta de medição de potência que calcula simultaneamente tensão True RMS, corrente True RMS, kW, kVA, kVAr, Fator de Potência e consumo em kWh.",
    descricao_detalhada: "Ideal para instalação em entradas de alimentadores, painéis de comando e subestações industriais.",
    texto_tecnologia: "DSP de medição de energia com amostragem multicanal contínua e cálculo vetorial de potências.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "IEC 61557-12", "ISO 9001"],
    recursos_principais: [
      { titulo: "Medição Completa de Grandezas", descricao: "V, I, kW, kVA, kVAr, FP e kWh em um único módulo.", icone: "Zap" }
    ],
    especificacoes_rapidas: [
      { chave: "Entradas", valor: "Tensão até 600Vca + Corrente TC 5A", destaque: true },
      { chave: "Grandezas Calculadas", valor: "V, I, P, Q, S, FP, kWh", destaque: true },
      { chave: "Protocolo", valor: "Modbus-RTU RS-485" }
    ],
    midias: [
      {
        id: "media-mviac-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Módulo Tensão e Corrente AC",
        alt: "Módulo Tensão e Corrente AC",
        badge: "Medidor Integrado"
      }
    ]
  },
  {
    id: "dsr-mod-tensao-corrente-dc",
    slug: "modulo-digitalizacao-tensao-corrente-dc",
    nome: "Módulo de Digitalização de Tensão e Corrente DC",
    codigo_modelo: "Modelo DSR-DIGI-VIDC",
    categoria: "Módulos de Digitalização & Telemetria",
    subcategoria: "Supervisão Completa de Potência em Barramento Contínuo",
    tagline: "Módulo duplo para telemetria de tensão e corrente contínua com cálculo de potência instantânea (kW) e contagem de Ampere-hora (Ah).",
    descricao: "Supervisiona barramentos CC e bancos de baterias, integrando leitura de tensão (Vcc), corrente (Acc), potência (kW) e integrador de energia para monitoramento de autonomia de baterias.",
    descricao_detalhada: "Permite avaliar o estado de carga em tempo real de sistemas ininterruptos em subestações elétricas.",
    texto_tecnologia: "Amostragem sincronizada de tensão e corrente CC para eliminação de erros de produto de potência.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "ISO 9001"],
    recursos_principais: [
      { titulo: "Contagem de Ah", descricao: "Mede com exatidão a energia retirada ou reposta na bateria.", icone: "Activity" }
    ],
    especificacoes_rapidas: [
      { chave: "Tensão CC", valor: "Até 600 Vcc", destaque: true },
      { chave: "Corrente CC", valor: "Através de Shunt calibrado", destaque: true },
      { chave: "Integrador", valor: "Ampere-hora (Ah) e Watt-hora (Wh)" }
    ],
    midias: [
      {
        id: "media-mvidc-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Módulo Tensão e Corrente DC",
        alt: "Módulo Tensão e Corrente DC",
        badge: "Medidor Integrado"
      }
    ]
  },
  {
    id: "dsr-mod-entradas-digitais",
    slug: "modulo-digitalizacao-entradas-digitais",
    nome: "Módulo de Digitalização de Entradas Digitais",
    codigo_modelo: "Modelo DSR-DIGI-DI",
    categoria: "Módulos de Digitalização & Telemetria",
    subcategoria: "Concentrador Digital de Estados e Contatos Secos",
    tagline: "Supervisão de contatos de disjuntores, térmicos e alarmes externos com isolamento óptico multicanal e registro com timestamp.",
    descricao: "Módulo de 8 ou 16 entradas digitais isoladas para supervisão de estados de disjuntores (aberto/fechado/trip), chaves seccionadoras e alarmes de painéis.",
    descricao_detalhada: "Filtro anti-repique por hardware e software garante leituras estáveis mesmo em ambientes de alta interferência elétrica.",
    texto_tecnologia: "Acopladores ópticos de alta velocidade com led indicativo frontal por canal e porta Modbus-RTU.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "ISO 9001"],
    recursos_principais: [
      { titulo: "8 ou 16 Entradas Isoladas", descricao: "Aceita contatos secos ou sinais de 24V / 125V / 220Vcc.", icone: "Cpu" }
    ],
    especificacoes_rapidas: [
      { chave: "Canais de Entrada", valor: "8 ou 16 canais optoisolados", destaque: true },
      { chave: "Tensão de Entrada", valor: "24Vcc / 48Vcc / 125Vcc", destaque: true },
      { chave: "Comunicação", valor: "Modbus-RTU RS-485" }
    ],
    midias: [
      {
        id: "media-mdi-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Módulo de Entradas Digitais",
        alt: "Módulo de Entradas Digitais",
        badge: "Telemetria Digital"
      }
    ]
  },
  {
    id: "dsr-mod-entradas-analogicas",
    slug: "modulo-digitalizacao-entradas-analogicas",
    nome: "Módulo de Digitalização de Entradas Analógicas",
    codigo_modelo: "Modelo DSR-DIGI-AI",
    categoria: "Módulos de Digitalização & Telemetria",
    subcategoria: "Conversores A/D de Alta Precisão (0-10V / 4-20mA)",
    tagline: "Digitalização multicanal de sinais padrão industrial (4-20mA, 0-10V, 0-5V) para integração com CLPs e sistemas SCADA.",
    descricao: "Módulo de aquisição de 4 a 8 entradas analógicas universais para conexão de transmissores de pressão, nível, vazão e sensores diversos.",
    descricao_detalhada: "Permite calibrar ganhos e escalas diretamente via software para transmissão em registradores Modbus padronizados.",
    texto_tecnologia: "Conversor A/D delta-sigma de 16 bits de ultra-baixo ruído com proteção contra sobretensão na entrada.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "ISO 9001"],
    recursos_principais: [
      { titulo: "Padrões Industriais", descricao: "Entradas configuráveis por jumper/software para 4-20mA ou 0-10V.", icone: "Activity" }
    ],
    especificacoes_rapidas: [
      { chave: "Canais Analógicos", valor: "4 ou 8 canais configuráveis", destaque: true },
      { chave: "Tipos de Sinal", valor: "4-20mA, 0-20mA, 0-5V, 0-10V", destaque: true },
      { chave: "Resolução", valor: "16 bits com filtro digital" }
    ],
    midias: [
      {
        id: "media-mai-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Módulo de Entradas Analógicas",
        alt: "Módulo de Entradas Analógicas",
        badge: "Telemetria Analógica"
      }
    ]
  },

  // =========================================================================
  // CATEGORIA 5: SUPERVISÃO, SENSORES & CONDICIONAMENTO DE SINAIS
  // =========================================================================
  {
    id: "dsr-monitor-banco-baterias",
    slug: "monitor-de-banco-de-baterias",
    nome: "Monitor de Banco de Baterias (BMS Industrial)",
    codigo_modelo: "Modelo DSR-BMS-IND",
    categoria: "Supervisão, Sensores & Condicionamento",
    subcategoria: "Supervisão Célula a Célula e Impedância",
    tagline: "Monitoramento contínuo célula a célula de tensão, impedância interna, temperatura e estado de carga (SoC/SoH).",
    descricao: "O sistema BMS da DSR supervisiona cada vaso individual do banco de acumuladores, detectando células secas, sulfatadas ou em curto antes que causem falha no sistema de emergência.",
    descricao_detalhada: "Inclui medição em tempo real de tensão de flutuação, corrente de string e cálculo de resistência interna dinâmica.",
    texto_tecnologia: "Módulos de sensor dedicados por bloco de bateria com comunicação em rede isolada e unidade concentradora com display.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "IEEE 1188", "ISO 9001"],
    recursos_principais: [
      { titulo: "Detecção Preventiva", descricao: "Alerta de célula degradada meses antes de uma falha catastrófica.", icone: "ShieldCheck" }
    ],
    especificacoes_rapidas: [
      { chave: "Capacidade de Vasos", valor: "Até 240 células por concentrador", destaque: true },
      { chave: "Parâmetros Medidos", valor: "V, I, T e Resistência Interna", destaque: true },
      { chave: "Tipos de Bateria", valor: "Chumbo-Ácido (VRLA/Ventilada) e Ni-Cd" }
    ],
    midias: [
      {
        id: "media-bms-1",
        type: "image",
        url: "/images/products/rit-d-cabinet.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet.jpg",
        title: "Monitor de Banco de Baterias",
        alt: "Monitor de Baterias BMS",
        badge: "BMS Industrial"
      }
    ]
  },
  {
    id: "dsr-monitor-celulas-solares",
    slug: "monitor-de-banco-de-celulas-solares",
    nome: "Monitor de Banco de Células Solares Fotovoltaicas",
    codigo_modelo: "Modelo DSR-SOLAR-MON",
    categoria: "Supervisão, Sensores & Condicionamento",
    subcategoria: "Telemetria de Strings e Eficiência Fotovoltaica",
    tagline: "Supervisão de arranjos fotovoltaicos, detecção de células sombreadas ou degradadas e telemetria de geração em tempo real.",
    descricao: "Monitora correntes e tensões de strings fotovoltaicas, identificando perdas de rendimento por sujeira, sombreamento parcial ou queima de diodos de bypass.",
    descricao_detalhada: "Desenvolvido para usinas solares industriais e sistemas de geração distribuída acoplados a plantas de potência.",
    texto_tecnologia: "Sensores de corrente por efeito Hall multicanal integrados a processador de alta velocidade com saída Modbus TCP/RTU.",
    status_disponibilidade: "Sob Encomenda",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "ISO 9001"],
    recursos_principais: [
      { titulo: "Diagnóstico de Strings", descricao: "Identifica strings com rendimento inferior à média do arranjo.", icone: "Activity" }
    ],
    especificacoes_rapidas: [
      { chave: "Canais de String", valor: "8 a 24 strings por módulo", destaque: true },
      { chave: "Tensão de Barramento", valor: "Até 1.500 Vcc", destaque: true },
      { chave: "Comunicação", valor: "Modbus-RTU / Ethernet" }
    ],
    midias: [
      {
        id: "media-solar-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Monitor de Strings Fotovoltaicas",
        alt: "Monitor Fotovoltaico",
        badge: "Solar Industrial"
      }
    ]
  },
  {
    id: "dsr-sensor-temperatura",
    slug: "modulo-sensor-de-temperatura",
    nome: "Módulo Sensor de Temperatura Industrial",
    codigo_modelo: "Modelo DSR-SENS-TEMP",
    categoria: "Supervisão, Sensores & Condicionamento",
    subcategoria: "Sensores Térmicos de Contato e Ambiente",
    tagline: "Sondas blindadas de alta precisão para medição de temperatura em barramentos, transformadores e salas de baterias.",
    descricao: "Sensores industriais robustos com encapsulamento metálico em aço inoxidável ou latão niquelado para fixação direta em barramentos de cobre e trocadores de calor.",
    descricao_detalhada: "Alta imunidade contra campos eletromagnéticos gerados por altas correntes em condutores industriais.",
    texto_tecnologia: "Elemento sensor PT100 Classe A calibrado com cabo siliconado de alta temperatura resistente a óleos e ambientes agressivos.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "ISO 9001"],
    recursos_principais: [
      { titulo: "Encapsulamento Blindado", descricao: "Proteção mecânica e isolamento elétrico para instalação direta no barramento.", icone: "Cpu" }
    ],
    especificacoes_rapidas: [
      { chave: "Elemento", valor: "PT100 Classe A (DIN EN 60751)", destaque: true },
      { chave: "Faixa Térmica", valor: "-40°C a +200°C contínuos", destaque: true },
      { chave: "Conexão", valor: "Terminal olhal ou haste de imersão" }
    ],
    midias: [
      {
        id: "media-stemp-1",
        type: "image",
        url: "/images/products/rit-d-udq.jpg",
        thumbnailUrl: "/images/products/rit-d-udq.jpg",
        title: "Sensor de Temperatura para Barramentos",
        alt: "Sensor de Temperatura",
        badge: "Sensor Industrial"
      }
    ]
  },
  {
    id: "dsr-isolador-sinais",
    slug: "modulo-isolador-de-sinais",
    nome: "Módulo Isolador Galvânico de Sinais",
    codigo_modelo: "Modelo DSR-ISO-SIG",
    categoria: "Supervisão, Sensores & Condicionamento",
    subcategoria: "Isolação Galvânica e Condicionamento",
    tagline: "Isolação galvânica de alta rigidez dielétrica (até 2,5 kV) para sinais analógicos e digitais, eliminando loops de terra e transitórios.",
    descricao: "Elimina problemas de interferência, queima de entradas de CLPs e erros de medição causados por diferenças de potencial de aterramento entre painéis distantes.",
    descricao_detalhada: "Suporta isolação de 4-20mA, 0-10V e conversão direta entre tipos de sinal com precisão de transferência superior a 0,1%.",
    texto_tecnologia: "Transformador de alta frequência e acoplador óptico para transferência de sinal e alimentação isolada em 3 vias (entrada, saída e alimentação).",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "IEC 61010", "ISO 9001"],
    recursos_principais: [
      { titulo: "Isolação em 3 Vias", descricao: "Isola entrada, saída e alimentação entre si a 2.500 Vca.", icone: "ShieldCheck" }
    ],
    especificacoes_rapidas: [
      { chave: "Isolação Dielétrica", valor: "2,5 kV RMS / 1 minuto", destaque: true },
      { chave: "Sinais Suportados", valor: "0/4-20mA, 0-10V, 0-5V", destaque: true },
      { chave: "Tempo de Resposta", valor: "< 2 ms" }
    ],
    midias: [
      {
        id: "media-iso-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Módulo Isolador de Sinais",
        alt: "Isolador Galvânico",
        badge: "Isolação Galvânica"
      }
    ]
  },
  {
    id: "dsr-supervisao-remota-reles",
    slug: "supervisao-digital-remota-a-reles",
    nome: "Supervisão Digital Remota a Relés",
    codigo_modelo: "Modelo DSR-SUP-RELES",
    categoria: "Supervisão, Sensores & Condicionamento",
    subcategoria: "Módulos de Saídas a Relé para Telegestão",
    tagline: "Módulo de comando remoto com saídas a relés de potência para rearme, telecomando e acionamento seguro via Ethernet/Modbus.",
    descricao: "Permite comandar abertura e fechamento de disjuntores motorizados, acionamento de contatores de bypass e sinalização remota de alarmes a partir da sala de controle.",
    descricao_detalhada: "Conta com contatos secos inversores (NA/NF) de alta capacidade e proteção contra comandos indevidos por timeout de comunicação.",
    texto_tecnologia: "Lógica de intertravamento em firmware e watchdog de segurança com retorno automático a estado seguro em perda de link.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "ISO 9001"],
    recursos_principais: [
      { titulo: "Segurança de Telecomando", descricao: "Comandos protegidos contra chaveamento em perda de rede.", icone: "Cpu" }
    ],
    especificacoes_rapidas: [
      { chave: "Saídas a Relé", valor: "4, 8 ou 16 relés inversores", destaque: true },
      { chave: "Capacidade dos Contatos", valor: "10 A @ 250 Vca / 5 A @ 30 Vcc", destaque: true },
      { chave: "Comunicação", valor: "Modbus-RTU / Modbus-TCP Ethernet" }
    ],
    midias: [
      {
        id: "media-suprel-1",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Supervisão Digital Remota a Relés",
        alt: "Módulo a Relés",
        badge: "Telegestão"
      }
    ]
  },

  // =========================================================================
  // CATEGORIA 6: QUALIDADE DE ENERGIA, PROTEÇÃO & CARGAS DE ENSAIO
  // =========================================================================
  {
    id: "dsr-correcao-ativa-fp",
    slug: "correcao-ativa-de-fator-de-potencia",
    nome: "Sistema de Correção Ativa de Fator de Potência",
    codigo_modelo: "Modelo DSR-PFC-ACTIVE",
    categoria: "Qualidade de Energia, Proteção & Cargas",
    subcategoria: "Compensação Dinâmica de Reativos",
    tagline: "Compensação contínua e dinâmica de potência reativa capacitiva e indutiva em tempo real (< 5ms), mantendo o fator de potência unitário.",
    descricao: "Substitui bancos de capacitores eletromecânicos tradicionais por conversores eletrônicos de potência de alta velocidade, eliminando degraus de chaveamento e riscos de ressonância com a rede.",
    descricao_detalhada: "Compensa simultaneamente cargas indutivas (motores) e capacitivas (filtros longos e cabos subterrâneos), evitando multas na fatura de energia.",
    texto_tecnologia: "Inversor multinível IGBT com controle por vetores espaciais e resposta em menos de 5 milissegundos.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "IEEE 519", "ISO 9001"],
    recursos_principais: [
      { titulo: "Zero Degraus de Chaveamento", descricao: "Compensação linear e contínua sem transitórios de contatores.", icone: "Zap" }
    ],
    especificacoes_rapidas: [
      { chave: "Tempo de Resposta", valor: "< 5 ms", destaque: true },
      { chave: "Fator de Potência Alvo", valor: "0,99 a 1,00 contínuo", destaque: true },
      { chave: "Capacidade", valor: "50 kVAr a 1.200 kVAr" }
    ],
    midias: [
      {
        id: "media-pfc-1",
        type: "image",
        url: "/images/products/rit-d-cabinet.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet.jpg",
        title: "Correção Ativa de Fator de Potência",
        alt: "Painel PFC Ativo",
        badge: "Qualidade de Energia"
      }
    ]
  },
  {
    id: "dsr-modulo-snubber",
    slug: "modulo-de-protecao-snubber",
    nome: "Módulo de Proteção Snubber RC / RCD de Potência",
    codigo_modelo: "Modelo DSR-SNUB-PRO",
    categoria: "Qualidade de Energia, Proteção & Cargas",
    subcategoria: "Amortecimento de Picos e dv/dt em Semicondutores",
    tagline: "Supressão de transientes de comutação e amortecimento de picos dv/dt para tiristores, diodos e IGBTs de alta potência.",
    descricao: "Módulos de amortecimento RC e RCD projetados para limitar a taxa de crescimento de tensão (dv/dt) e sobretensões transitórias geradas na comutação de semicondutores de potência.",
    descricao_detalhada: "Utilizam capacitores de filme de polipropileno de baixíssima indutância parasita e resistores cerâmicos anti-indutivos de alta dissipação térmica.",
    texto_tecnologia: "Geometria de barramento coaxial para redução máxima de indutância e absorção de energia de comutação em nanossegundos.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "ISO 9001"],
    recursos_principais: [
      { titulo: "Baixíssima Indutância", descricao: "Proteção imediata no momento crítico de corte do semicondutor.", icone: "ShieldCheck" }
    ],
    especificacoes_rapidas: [
      { chave: "Tensão de Trabalho", valor: "Até 3.000 V pico", destaque: true },
      { chave: "Capacitância", valor: "0,1 µF a 4,7 µF de alta corrente", destaque: true },
      { chave: "Resistência Snubber", valor: "5 Ω a 100 Ω anti-indutiva" }
    ],
    midias: [
      {
        id: "media-snub-1",
        type: "image",
        url: "/images/products/rit-d-udq.jpg",
        thumbnailUrl: "/images/products/rit-d-udq.jpg",
        title: "Módulo de Proteção Snubber",
        alt: "Módulo Snubber",
        badge: "Proteção de Potência"
      }
    ]
  },
  {
    id: "dsr-carga-eletronica",
    slug: "carga-eletronica-programavel-industrial",
    nome: "Carga Eletrônica Programável Industrial",
    codigo_modelo: "Modelo DSR-LOAD-PROG",
    categoria: "Qualidade de Energia, Proteção & Cargas",
    subcategoria: "Bancos de Carga Eletrônica Ativa para Testes",
    tagline: "Ensaios programados de fontes, no-breaks e baterias com modos de corrente constante, resistência constante e potência constante.",
    descricao: "Equipamento para comissionamento e ensaio de capacidade real de baterias e fontes industriais, permitindo descarregar e testar o sistema sob condições dinâmicas controladas com registro digital.",
    descricao_detalhada: "Substitui resistências térmicas incandescentes manuais por semicondutores de potência refrigerados com controle digital de corrente e corte seguro por subtensão de bateria.",
    texto_tecnologia: "Controle em malha fechada por MOSFETs/IGBTs de potência linear com dissipador a ar forçado e interface para PC/supervisório.",
    status_disponibilidade: "Sob Encomenda",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "NR-12", "ISO 9001"],
    recursos_principais: [
      { titulo: "Testes Automatizados", descricao: "Curvas de descarga e ensaios de autonomia com relatório digital.", icone: "Activity" }
    ],
    especificacoes_rapidas: [
      { chave: "Modos de Operação", valor: "Corrente Constante (CC), Potência (CP), Resistência (CR)", destaque: true },
      { chave: "Faixa de Tensão", valor: "12 Vcc a 600 Vcc", destaque: true },
      { chave: "Corrente de Ensaio", valor: "Até 1.000 A contínuos" }
    ],
    midias: [
      {
        id: "media-load-1",
        type: "image",
        url: "/images/products/rit-d-cabinet.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet.jpg",
        title: "Carga Eletrônica Programável DSR",
        alt: "Carga Eletrônica Industrial",
        badge: "Equipamento de Teste"
      }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS_MOCK.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return PRODUCTS_MOCK;
}

export interface CategoryData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  badge: string;
  featuredModels: string[];
}

export const CATEGORIES_DATA: CategoryData[] = [
  {
    slug: "retificadores-e-carregadores",
    name: "Retificadores & Carregadores",
    tagline: "Alimentação CC ininterrupta de 12V a 250Vcc e correntes até 5.000A com controle tiristorizado e modular.",
    description: "Sistemas de retificação industrial semi ou totalmente controlados, carregadores de baterias para subestações e equipamentos formadores de baterias com supervisão microcontrolada dupla.",
    imageUrl: "/images/categories/cat-retificadores.jpg",
    badge: "Linha Pesada & Subestações",
    featuredModels: ["Retificador Industrial Analógico (RIT-D)", "Modelo DK10 / DK30", "Modular DK-SR", "Formador de Baterias"]
  },
  {
    slug: "sistemas-de-energia-ininterrupta-e-conversao",
    name: "Sistemas de Energia Ininterrupta & Conversão",
    tagline: "No-breaks industriais On-line Dupla Conversão, inversores estáticos CC/CA e chaves estáticas de transferência.",
    description: "Conversores de energia estáticos sem interrupção de suprimento, estabilizadores eletrônicos de estado sólido sem partes móveis e chaveamento ultrarrápido < 4ms.",
    imageUrl: "/images/categories/cat-energia-ininterrupta.jpg",
    badge: "Energia Ininterrupta 24/7",
    featuredModels: ["UPS Industrial On-Line", "Inversor Estático CC/CA", "Chave Estática STS", "Estabilizador Estado Sólido"]
  },
  {
    slug: "quadros-de-distribuicao-e-paralelismo",
    name: "Quadros de Distribuição & Paralelismo",
    tagline: "Distribuição CA e CC industrial com barramentos de cobre maciço e paralelismo seguro de bancos de baterias.",
    description: "Cubículos modulares conforme NR-10 e NR-12 com supervisão digital por circuito, disjuntores motorizados e acoplamento seguro de múltiplas fontes CC.",
    imageUrl: "/images/categories/cat-quadros-distribuicao.jpg",
    badge: "Distribuição & Paralelismo",
    featuredModels: ["Quadro Distribuição AC/DC", "Quadro Paralelismo DC", "Painéis Conectados Modbus"]
  },
  {
    slug: "modulos-de-digitalizacao-e-telemetria",
    name: "Módulos de Digitalização & Telemetria",
    tagline: "Transdutores digitais True RMS de tensão, corrente, temperatura e concentradores multicanal em trilho DIN.",
    description: "Digitalização direta de grandezas elétricas e térmicas com isolamento galvânico de 2,5 kV e comunicação nativa Modbus-RTU para indústria 4.0.",
    imageUrl: "/images/categories/cat-modulos-digitalizacao.jpg",
    badge: "Telemetria & Indústria 4.0",
    featuredModels: ["Transdutor Tensão AC/DC", "Transdutor Corrente AC/DC", "Módulo Entradas Digitais/Analógicas", "Módulo Térmico"]
  },
  {
    slug: "supervisao-sensores-e-condicionamento",
    name: "Supervisão, Sensores & Condicionamento",
    tagline: "Sistemas BMS célula a célula para bancos de acumuladores, telemetria solar fotovoltaica e telecomando a relés.",
    description: "Monitoramento contínuo de impedância, tensão e temperatura de baterias estacionárias, sensores térmicos blindados e isoladores de sinal em 3 vias.",
    imageUrl: "/images/categories/cat-supervisao-sensores.jpg",
    badge: "Supervisão Crítica",
    featuredModels: ["Monitor BMS de Baterias", "Monitor Strings Solares", "Sensor Térmico Barramento", "Supervisão a Relés"]
  },
  {
    slug: "qualidade-de-energia-protecao-e-cargas",
    name: "Qualidade de Energia, Proteção & Cargas",
    tagline: "Correção ativa de fator de potência em tempo real (< 5ms), amortecedores snubber de alta energia e cargas eletrônicas.",
    description: "Equipamentos eletrônicos de potência para mitigação de reativos dinâmicos, proteção contra picos dv/dt em tiristores e bancos de carga programáveis para ensaios.",
    imageUrl: "/images/categories/cat-qualidade-energia.jpg",
    badge: "Proteção & Qualidade",
    featuredModels: ["Correção Ativa de FP", "Módulo Snubber RC/RCD", "Carga Eletrônica Programável"]
  }
];

export function getAllCategories(): CategoryData[] {
  return CATEGORIES_DATA;
}

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return CATEGORIES_DATA.find((c) => c.slug === slug);
}

export function getProductsByCategory(categoryName: string): Product[] {
  return PRODUCTS_MOCK.filter((p) => p.categoria === categoryName);
}
