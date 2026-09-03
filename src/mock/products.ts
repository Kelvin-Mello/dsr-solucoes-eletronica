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
}

export const PRODUCTS_MOCK: Product[] = [
  {
    id: "dsr-rect-9000-pro",
    slug: "retificador-industrial-trifasico-alta-potencia",
    nome: "Retificador Industrial Trifásico DSR-9000 Pro",
    codigo_modelo: "DSR-REC-12P-500kW",
    categoria: "Retificadores Industriais",
    subcategoria: "Retificadores Industriais & Retrofit IGBT",
    tagline: "Conversão de energia de ultra-alta eficiência com controle digital microprocessado e arquitetura de retrofit modular.",
    descricao: "O Retificador Industrial Trifásico DSR-9000 Pro foi projetado para operar sob as condições mais severas do setor industrial (químico, metalúrgico, mineração e tração). Incorpora módulos de semicondutores de última geração com topologia 12-pulsos e ponte tiristorizada/IGBT comutável, garantindo baixíssimo THD e máxima confiabilidade operacional contínua.",
    descricao_detalhada: "Desenvolvido pelo time de engenharia da DSR Soluções, o DSR-9000 Pro elimina paradas não programadas através de redundância ativa N+1 em módulos de potência e controle térmico dinâmico por líquido/ar forçado. A arquitetura física é 100% preparada para projetos de Retrofitting direto em painéis legados existentes, dispensando obras civis pesadas e reduzindo o tempo de comissionamento de semanas para poucos dias.",
    texto_tecnologia: "Topologia Avançada de Potência: O sistema opera com transformador defasador dedicado e retificação multipulsos integrada a banco de filtros LC sintonizados. A malha de controle em tempo real é executada por DSP duplo de 32 bits com amostragem de 100 kHz, calculando em microssegundos o disparo ideal de tiristores e corte de picos de sobretensão transitória.",
    status_disponibilidade: "Engenharia Customizada",
    garantia: "36 Meses (Garantia de Fábrica DSR)",
    certificacoes: ["NR-10", "NR-12", "IEC 60146", "IEEE 519", "ISO 9001"],
    recursos_principais: [
      {
        titulo: "Arquitetura Pronta para Retrofitting",
        descricao: "Chassi mecânico compatível com padrão de furação de cubículos legados de diversas marcas mundiais.",
        icone: "Cpu"
      },
      {
        titulo: "Eficiência Energética > 98.4%",
        descricao: "Perdas térmicas reduzidas com semicondutores SiC e IGBTs de alta comutação.",
        icone: "Zap"
      },
      {
        titulo: "Telemetria & IHM Touchscreen 10.4\"",
        descricao: "Monitoramento em tempo real de formas de onda, THD, temperatura de junção e histórico de eventos.",
        icone: "Activity"
      },
      {
        titulo: "Conectividade Industrial 4.0",
        descricao: "Integração nativa via Modbus TCP/IP, Profinet, Ethernet/IP e barramento CAN para CLP central.",
        icone: "ShieldCheck"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Potência Nominal", valor: "500 kW / 625 kVA", destaque: true },
      { chave: "Tensão de Entrada", valor: "380V / 440V / 480V CA (Trifásico)" },
      { chave: "Tensão de Saída DC", valor: "0 a 650 VCC (Ajustável)" },
      { chave: "Corrente de Saída", valor: "Até 1.850 A contínuos", destaque: true },
      { chave: "Eficiência Global", valor: "> 98,4% em carga nominal" },
      { chave: "Topologia", valor: "12-Pulsos / Ponte H Híbrida IGBT" },
      { chave: "Fator de Potência", valor: "≥ 0,96 (com correção ativa)" },
      { chave: "Distorção Harmônica (THDi)", valor: "< 4.5% conforme IEEE 519" },
      { chave: "Refrigeração", valor: "Mista (Ar Forçado + Placa Fria Líquida)" },
      { chave: "Grau de Proteção", valor: "IP54 (Opção IP65 para áreas agressivas)" },
      { chave: "Comunicação", valor: "Modbus TCP, Profinet, CANopen" },
      { chave: "Normas Aplicáveis", valor: "NR-10, NR-12, IEC 60146-1-1" }
    ],
    especificacoes_completas: [
      {
        grupo: "Parâmetros Elétricos de Entrada",
        itens: [
          { parametro: "Tensão de Alimentação", valor: "380V / 440V / 480V ± 15%" },
          { parametro: "Frequência de Rede", valor: "50 / 60 Hz ± 5%" },
          { parametro: "Fase de Conexão", valor: "3 Fases + Terra (PE)" },
          { parametro: "Capacidade de Curto-Circuito", valor: "65 kA RMS simétrico" }
        ]
      },
      {
        grupo: "Desempenho da Saída DC",
        itens: [
          { parametro: "Faixa de Regulação de Tensão", valor: "0% a 110% da escala nominal" },
          { parametro: "Ondulação Residual (Ripple)", valor: "< 0.8% RMS em carga máxima" },
          { parametro: "Tempo de Resposta Dinâmica", valor: "< 2.5 ms para variação 10-90%" },
          { parametro: "Capacidade de Sobrecarga", valor: "150% por 60 segundos / 200% por 3 segundos" }
        ]
      },
      {
        grupo: "Estrutura Mecânica & Ambiental",
        itens: [
          { parametro: "Dimensões do Gabinete (LxAxP)", valor: "1200 x 2000 x 800 mm" },
          { parametro: "Peso Total Aproximado", valor: "680 kg" },
          { parametro: "Faixa de Temperatura de Operação", valor: "-10°C a +55°C sem desclassificação" },
          { parametro: "Tratamento Superficial", valor: "Pintura eletrostática a pó poliéster RAL 7035 / RAL 7024" }
        ]
      }
    ],
    midias: [
      {
        id: "media-1",
        type: "image",
        url: "/images/products/rectifier-front.jpg",
        thumbnailUrl: "/images/products/rectifier-front.jpg",
        title: "Visão Frontal do Painel e Barramentos",
        alt: "Gabinete do Retificador Industrial DSR-9000 Pro com porta de visualização de barramento de cobre e tela touchscreen",
        description: "Estrutura robusta padrão IP54 com porta de inspeção em policarbonato reforçado e barramentos de cobre eletrolítico.",
        badge: "Vista Principal"
      },
      {
        id: "media-2",
        type: "image",
        url: "/images/products/rectifier-internals.jpg",
        thumbnailUrl: "/images/products/rectifier-internals.jpg",
        title: "Módulos de Potência IGBT & Refrigeração Líquida",
        alt: "Módulos de semicondutores de potência IGBT, placas de controle e bloco de arrefecimento a líquido do retificador",
        description: "Ponte comutadora de semicondutores de alto rendimento montada sobre trocador de calor de cobre e barramento isolado.",
        badge: "Arquitetura Interna"
      },
      {
        id: "media-3",
        type: "image",
        url: "/images/products/rectifier-hmi.jpg",
        thumbnailUrl: "/images/products/rectifier-hmi.jpg",
        title: "IHM Digital & Monitor de Qualidade de Energia",
        alt: "Interface Homem-Máquina digital exibindo telemetria de ondas de tensão, THD e status operacional",
        description: "Painel IHM com telemetria em tempo real, análise de harmônicos e registro contínuo de oscilografia de falhas.",
        badge: "IHM & Telemetria"
      },
      {
        id: "media-4",
        type: "image",
        url: "/images/products/rectifier-retrofit.jpg",
        thumbnailUrl: "/images/products/rectifier-retrofit.jpg",
        title: "Retrofitting em Campo & Comissionamento",
        alt: "Engenheiros da DSR realizando integração e parametrização de retificador em planta fabril",
        description: "Engenharia de campo especializada para substituição e modernização (retrofit) sem impacto no cronograma fabril.",
        badge: "Engenharia de Campo"
      }
    ]
  },
  {
    id: "dsr-inv-res-350kw",
    slug: "inversor-alta-frequencia-forno-inducao",
    nome: "Inversor Ressonante para Fornos de Indução DSR-IND 350kW",
    codigo_modelo: "DSR-INV-RES-350kW",
    categoria: "Inversores & Indução",
    subcategoria: "Tratamento Térmico e Fusão por Indução",
    tagline: "Aquecimento indutivo de altíssimo rendimento com sintonia automática de frequência IGBT/SiC de 1 kHz a 50 kHz.",
    descricao: "O Inversor Ressonante DSR-IND 350kW foi projetado para operações severas e ininterruptas de fundição, forjaria, brasagem e têmpera por indução eletromagnética. Conta com controle digital de ressonância em malha fechada (PLL adaptativo) que mantém a eficiência máxima de transferência energética mesmo durante a variação da permeabilidade magnética da carga metálica.",
    descricao_detalhada: "Equipado com pontes comutadas em zero de tensão e zero de corrente (ZVS/ZCS), o DSR-IND 350kW reduz drasticamente o aquecimento interno e o desgaste dos semicondutores. Seu sistema de arrefecimento por circuito fechado de água deionizada com sensores de vazão e condutividade garante proteção contínua contra superaquecimento em fundições pesadas.",
    texto_tecnologia: "Topologia Ressonante ZVS/ZCS com FPGA de 200 MHz: O processamento em hardware ultrarrápido amostra o sinal de corrente de ressonância e recalcula o ângulo de disparo a cada meio ciclo. Caso ocorra arco na bobina ou interrupção de fluxo de água, o sistema bloqueia as pontes em menos de 1,2 microssegundos, protegendo 100% dos componentes de potência.",
    status_disponibilidade: "Engenharia Customizada",
    garantia: "24 Meses (Garantia de Fábrica DSR)",
    certificacoes: ["NR-10", "NR-12", "IEC 60519", "ISO 9001"],
    recursos_principais: [
      {
        titulo: "Sintonia Automática de Ressonância (PLL)",
        descricao: "Rastreia o ponto ideal de operação entre 1 kHz e 50 kHz sem necessidade de ajuste manual.",
        icone: "Zap"
      },
      {
        titulo: "Comutação Suave ZVS / ZCS",
        descricao: "Elimina perdas de chaveamento e aumenta a durabilidade dos módulos IGBT e tiristores rápidos.",
        icone: "Cpu"
      },
      {
        titulo: "Proteção Instantânea contra Curto de Bobina",
        descricao: "Desligamento por hardware em 1,2 µs evitando queima em contato acidental com cadinho.",
        icone: "ShieldCheck"
      },
      {
        titulo: "Interface Gráfica com Osciloscópio Digital",
        descricao: "Visualização direta de curvas de tensão, corrente e potência no display touchscreen frontal.",
        icone: "Activity"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Potência de Saída", valor: "350 kW contínuos", destaque: true },
      { chave: "Faixa de Frequência", valor: "1 kHz a 50 kHz (Auto-ajustável)", destaque: true },
      { chave: "Tensão de Alimentação", valor: "380V / 440V / 480V CA (Trifásico)" },
      { chave: "Eficiência Elétrica", valor: "> 97,2% em regime pleno", destaque: true },
      { chave: "Fator de Potência na Rede", valor: "≥ 0,95 sem banco de capacitores externo" },
      { chave: "Tipo de Carga", valor: "Fornos de Fusão, Cadinhos, Têmpera Seletiva" },
      { chave: "Refrigeração", valor: "Circuito Fechado de Água Deionizada" },
      { chave: "Vazão Mínima Requerida", valor: "45 L/min @ 3,5 bar" },
      { chave: "Controle & IHM", valor: "Touchscreen 10.4\" industrial + Remoto CLP" },
      { chave: "Normas Atendidas", valor: "NR-10, NR-12, IEC 60519-1" }
    ],
    especificacoes_completas: [
      {
        grupo: "Características de Potência",
        itens: [
          { parametro: "Potência Contínua de Saída", valor: "350 kW (Sobrecarga 115% por 10 min)" },
          { parametro: "Tensão Máxima no Tanque Ressonante", valor: "1.200 VCA" },
          { parametro: "Corrente de Bobina (Circuito Tanque)", valor: "Até 3.200 A reativos" },
          { parametro: "Estabilidade de Potência", valor: "± 0,5% sob variações de rede de ± 15%" }
        ]
      },
      {
        grupo: "Dimensões e Instalação",
        itens: [
          { parametro: "Dimensões do Cubículo (LxAxP)", valor: "1000 x 1950 x 850 mm" },
          { parametro: "Peso Líquido", valor: "540 kg" },
          { parametro: "Conexões Hidráulicas", valor: "Entrada e Saída 1\" BSP em aço inox 316" }
        ]
      }
    ],
    midias: [
      {
        id: "media-inv-1",
        type: "image",
        url: "/images/products/inverter-furnace.jpg",
        thumbnailUrl: "/images/products/inverter-furnace.jpg",
        title: "Inversor Ressonante DSR-IND 350kW em Planta Metalúrgica",
        alt: "Gabinete de inversor ressonante DSR com barramento de cobre exposto em porta de vidro e tubulações hidráulicas em fundição",
        description: "Gabinete industrial robusto com barramentos maciços de cobre, manifold hidráulico de refrigeração e IHM com análise de forma de onda.",
        badge: "Aplicação Industrial"
      }
    ]
  },
  {
    id: "dsr-kit-retro-6p",
    slug: "kit-retrofit-pontes-tiristorizadas",
    nome: "Kit de Retrofit para Pontes Tiristorizadas DSR-RETRO 6P/12P",
    codigo_modelo: "DSR-KIT-RETRO-6P",
    categoria: "Retrofitting & Modernização",
    subcategoria: "Kits Plug & Play de Retrofit de Potência",
    tagline: "Substituição direta de eletrônica analógica legada por controle digital DSP em pontes tiristorizadas de até 4.000 A.",
    descricao: "O Kit de Retrofit DSR-RETRO 6P/12P permite modernizar cubículos e painéis elétricos industriais obsoletos sem descartar transformadores, barramentos de cobre e infraestrutura civil existente, gerando economia de até 65% em relação à aquisição de um painel novo.",
    descricao_detalhada: "Com engenharia mecânica adaptativa e chicotes pré-conectorizados, o kit substitui placas de disparo antigas, componentes descontinuados e relés mecânicos por um controlador digital DSP integrado de alta imunidade a ruídos (EMC). O tempo de substituição e comissionamento em campo é executado tipicamente entre 24 e 48 horas em paradas programadas de fábrica.",
    texto_tecnologia: "Controle Digital Microprocessado com Disparo por Fibra Óptica: O disparo dos tiristores de potência é conduzido por pulsos ópticos imunes a interferências eletromagnéticas severas. A placa controladora DSR supervisiona temperatura de junção, simetria de pulsos em 6 ou 12 pulsos e registra até 5.000 eventos de oscilografia com carimbo de tempo preciso.",
    status_disponibilidade: "Sob Encomenda",
    garantia: "24 Meses (Garantia de Retrofit DSR)",
    certificacoes: ["NR-10", "NR-12", "IEC 60146", "ISO 9001"],
    recursos_principais: [
      {
        titulo: "Turnaround Rápido (24h a 48h)",
        descricao: "Instalação mecânica e parametrização direta no cubículo existente sem atrasar a produção.",
        icone: "Cpu"
      },
      {
        titulo: "Economia até 65% vs. Painel Novo",
        descricao: "Aproveita transformadores de entrada, barramentos de cobre e caixas de disjuntores.",
        icone: "Zap"
      },
      {
        titulo: "Disparo Óptico Imune a Ruído",
        descricao: "Pulsos de gate conduzidos por fibra óptica de vidro com total isolamento galvânico.",
        icone: "ShieldCheck"
      },
      {
        titulo: "Upgrade para Indústria 4.0",
        descricao: "Substitui instrumentos de ponteiro por IHM digital colorida e rede industrial Modbus/Profinet.",
        icone: "Activity"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Capacidade de Corrente", valor: "Até 4.000 A CC contínuos", destaque: true },
      { chave: "Tensão Máxima Suportada", valor: "Até 1.000 VCA Trifásico" },
      { chave: "Economia Financeira", valor: "Até 65% em comparação a cubículo novo", destaque: true },
      { chave: "Tempo de Instalação", valor: "24 a 48 horas em parada de manutenção", destaque: true },
      { chave: "Topologias Suportadas", valor: "6-Pulsos, 12-Pulsos, Pontes Anti-paralelas Reversíveis" },
      { chave: "Disparo de Tiristores", valor: "Pulsos de Alta Energia via Fibra Óptica" },
      { chave: "Comunicação", valor: "Modbus TCP, Ethernet/IP, Profibus DP" },
      { chave: "Normas Atendidas", valor: "NR-10, NR-12, IEC 60146-1" }
    ],
    especificacoes_completas: [
      {
        grupo: "Especificações de Controle e Potência",
        itens: [
          { parametro: "Resolução Angular de Disparo", valor: "0,05° elétrico" },
          { parametro: "Faixa de Tensão de Sincronismo", valor: "110V a 690V CA auto-adaptável" },
          { parametro: "Canais de Disparo", valor: "6 ou 12 canais isolados galvanicamente" },
          { parametro: "Corrente de Pulso de Gate", valor: "2,5 A de pico com tempo de subida < 1 µs" }
        ]
      }
    ],
    midias: [
      {
        id: "media-retro-1",
        type: "image",
        url: "/images/products/retrofit-thyristor.jpg",
        thumbnailUrl: "/images/products/retrofit-thyristor.jpg",
        title: "Kit de Retrofit DSR Instalado em Painel Existente",
        alt: "Painel de retrofit industrial aberto mostrando novos dissipadores de cobre, controlador DSP com display e cabeamento organizado",
        description: "Montagem em chassi universal com dissipadores de cobre, ventiladores axiais de alto fluxo e módulo digital central.",
        badge: "Kit Completo"
      }
    ]
  },
  {
    id: "dsr-afq-300a-480v",
    slug: "filtro-ativo-harmonicas-qualidade-energia",
    nome: "Filtro Ativo de Harmônicas & Corretor Dinâmico DSR-AFQ 300A",
    codigo_modelo: "DSR-AFQ-300A-480V",
    categoria: "Qualidade de Energia",
    subcategoria: "Mitigação Harmônica Ativa e Correção de FP",
    tagline: "Eliminação seletiva de harmônicas até a 50ª ordem e compensação ultrarrápida de reativos com tempo de resposta < 5ms.",
    descricao: "O Filtro Ativo DSR-AFQ 300A é a solução definitiva para plantas industriais com cargas não-lineares severas (inversores de frequência, retificadores, fornos e pontes rolantes). Atuando como uma fonte de corrente em paralelo com a rede, injeta correntes harmônicas em contra-fase com precisão cirúrgica, reduzindo o THDi para menos de 3% e elevando o Fator de Potência para 1,00.",
    descricao_detalhada: "Fabricado em arquitetura modular de gavetas rack-mount de 75A ou 100A, permite expansão facilitada conforme o crescimento da planta até 1.800 A em um único barramento. O equipamento elimina multas de excedente de reativos na fatura de energia, protege transformadores contra sobreaquecimento e evita paradas misteriosas de CLPs e equipamentos sensíveis.",
    texto_tecnologia: "Conversor 3 Níveis NPC com Processamento FFT em Hardware: A topologia Neutral-Point Clamped reduz em 40% as perdas térmicas por comutação. O algoritmo DSP calcula simultaneamente a compensação de harmônicas individuais (2ª a 50ª ordem), equilíbrio de fases e correção de fator de potência capacitivo ou indutivo.",
    status_disponibilidade: "Em Estoque",
    garantia: "36 Meses (Garantia de Fábrica DSR)",
    certificacoes: ["IEEE 519", "IEC 61000-3-4", "NR-10", "PRODIST"],
    recursos_principais: [
      {
        titulo: "Mitigação até a 50ª Ordem Harmônica",
        descricao: "Compensação seletiva configurável individualmente para cada harmônica crítica da planta.",
        icone: "Activity"
      },
      {
        titulo: "Correção Ultrarrápida de FP (< 5ms)",
        descricao: "Compensação dinâmica sem risco de ressonância comum em bancos de capacitores convencionais.",
        icone: "Zap"
      },
      {
        titulo: "Estrutura Modular em Gavetas Rack",
        descricao: "Gavetas removíveis a quente com conexão rápida para expansão gradual de capacidade.",
        icone: "Cpu"
      },
      {
        titulo: "Conformidade Total com a Norma IEEE 519",
        descricao: "Garante operação limpa na entrada da subestação, eliminando multas da concessionária.",
        icone: "ShieldCheck"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Capacidade Nominal", valor: "300 A contínuos (Modular até 1.800 A)", destaque: true },
      { chave: "Ordens Harmônicas", valor: "2ª à 50ª ordem (Seleção configurável)", destaque: true },
      { chave: "Tempo de Resposta", valor: "< 5 ms (Compensação em Tempo Real)", destaque: true },
      { chave: "Fator de Potência Alvo", valor: "0,99 a 1,00 (Indutivo ou Capacitivo)" },
      { chave: "Tensão de Operação", valor: "380V a 480V CA Trifásico (50/60 Hz)" },
      { chave: "THDi Residual", valor: "< 3.0% no ponto de acoplamento comum" },
      { chave: "Eficiência do Filtro", valor: "> 97,5% em compensação plena" },
      { chave: "Topologia", valor: "Inversor Multinível NPC de 3 Níveis" }
    ],
    especificacoes_completas: [
      {
        grupo: "Parâmetros de Filtragem e Rede",
        itens: [
          { parametro: "Faixa de Tensão Aceita", valor: "380V - 480V CA ± 20%" },
          { parametro: "Capacidade de Sobrecarga", valor: "120% por 1 minuto" },
          { parametro: "Perdas Térmicas Globais", valor: "< 2,5% da potência nominal de filtragem" }
        ]
      }
    ],
    midias: [
      {
        id: "media-filter-1",
        type: "image",
        url: "/images/products/filter-harmonics.jpg",
        thumbnailUrl: "/images/products/filter-harmonics.jpg",
        title: "Filtro Ativo DSR-AFQ 300A em Sala Elétrica Industrial",
        alt: "Cubículo metálico de filtro ativo com barras de LED indicadoras, tela de análise harmônica e gavetas de potência modulares",
        description: "Gabinete autoportante IP54 com display de análise de qualidade de energia, barras indicadoras de status e gavetas comutadoras.",
        badge: "Cubículo Ativo"
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
