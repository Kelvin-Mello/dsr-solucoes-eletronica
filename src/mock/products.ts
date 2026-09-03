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
    id: "dsr-rit-d",
    slug: "retificador-padrao-industrial-modelo-rit-d",
    nome: "Retificador Padrão Industrial Modelo RIT-D",
    codigo_modelo: "RIT-D",
    categoria: "Retificadores Industriais",
    subcategoria: "Sistemas de Alimentação CC Segura e Ininterrupta",
    tagline: "Alimentação CC ininterrupta de 12V a 250Vcc (10A a 5.000A) com controle microprocessado duplo, módulo UDQ de 4 etapas e supervisão digital avançada.",
    descricao: "Os Retificadores Industriais Modelo RIT-D foram projetados para atender às mais rígidas especificações do mercado de energia industrial, subestações e centros de controle. Incorporam tecnologia tiristorizada (semi ou totalmente controlada de 02 a 06 pulsos, com 12 a 24 sob consulta), duplo microcontrolador dedicado para supervisão e comunicação Modbus-RTU, além de unidade de diodo de queda (UDQ) inteligente para proteção do consumidor.",
    descricao_detalhada: "A concentração inteligente de circuitos no Módulo de Controle e Alarmes eleva drasticamente o MTBF pela redução de conexões e número de placas, além de reduzir o MTTR com módulos e placas de circuito impresso (PCIs) intercambiáveis e universais para todas as faixas de tensão (12 a 250Vcc) e redes monofásicas, bifásicas ou trifásicas. Conta com fonte auxiliar chaveada dupla (CA e CC), mantendo a supervisão 100% ativa em caso de falta de energia da rede.",
    texto_tecnologia: "Módulo de Controle de UDQ Sequencial e Duplo Microcontrolador: A Unidade de Diodo de Queda monitora diretamente a tensão no Consumidor, detectando sobretensões no caso de falha de contator. Seu acionamento é sequencial em ordem inversa (a primeira etapa inserida em alta tensão é a última retirada quando a tensão normaliza). Configurável de 1 até 4 etapas, envia sinal de desligamento seguro do retificador se todas as etapas forem inseridas e a tensão atingir o limite pré-ajustado. A janela de alarmes armazena histórico de até 20 ocorrências com registro de data e hora, supervisionando CA Alta/Baixa, Falta de Fase, CC Baixa/Alta, Fuga a Terra positiva e negativa via acoplamento óptico e queima de fusível por via eletrônica.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia de Fábrica DSR com Assistência Técnica Nacional)",
    certificacoes: ["NR-10", "NR-12", "IEC 60146", "MODBUS-RTU", "ISO 9001"],
    recursos_principais: [
      {
        titulo: "Supervisão Microcontrolada Dupla",
        descricao: "Um microcontrolador dedicado exclusivamente à supervisão do retificador e um segundo dedicado à comunicação MODBUS-RTU.",
        icone: "Cpu"
      },
      {
        titulo: "Módulo UDQ de 1 a 4 Etapas",
        descricao: "Unidade de Diodo de Queda com inserção e retirada sequencial inversa e proteção ativa contra sobretensão no consumidor.",
        icone: "Zap"
      },
      {
        titulo: "IHM Intuitiva com Teclas F1 a F4",
        descricao: "Navegação rápida e auto-compreensível com sinóptico de status completo: CA, Retificador, Baterias e Consumidor.",
        icone: "Activity"
      },
      {
        titulo: "Histórico de 20 Alarmes com Data/Hora",
        descricao: "Memória de eventos para CA, CC, fuga a terra óptica, fusível interrompido eletrônico e baterias em descarga.",
        icone: "ShieldCheck"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Faixa de Corrente", valor: "10 A a 5.000 A contínuos", destaque: true },
      { chave: "Tensão de Saída CC", valor: "12 a 250 Vcc (todas as tensões padrão)", destaque: true },
      { chave: "Topologia Tiristorizada", valor: "Semi ou Totalmente Controlada (02 a 06 pulsos / 12 a 24 sob consulta)", destaque: true },
      { chave: "Alimentação de Entrada", valor: "Redes Monofásicas, Bifásicas e Trifásicas" },
      { chave: "Unidade de Diodo de Queda", valor: "UDQ Inteligente de 1 a 4 Etapas", destaque: true },
      { chave: "Comunicação Digital", valor: "MODBUS-RTU nativo (outros sob consulta)" },
      { chave: "Placas Intercambiáveis", valor: "Mesmas PCIs para todas as tensões e correntes" },
      { chave: "Fonte Auxiliar Chaveada", valor: "Alimentação dupla CA e CC" },
      { chave: "Histórico de Alarmes", valor: "Até 20 ocorrências com registro de data/hora" },
      { chave: "Proteção Fuga a Terra", valor: "Positiva e Negativa via acoplamento óptico" },
      { chave: "MTBF / MTTR", valor: "MTBF drasticamente elevado / MTTR reduzido" },
      { chave: "Normas Atendidas", valor: "NR-10, NR-12, IEC 60146, ISO 9001" }
    ],
    especificacoes_completas: [
      {
        grupo: "Parâmetros Elétricos e Alimentação CA",
        itens: [
          { parametro: "Configuração de Rede CA", valor: "Monofásica, Bifásica ou Trifásica (todas as tensões padrão industrial)" },
          { parametro: "Frequência Nominal", valor: "50 Hz / 60 Hz ± 5%" },
          { parametro: "Supervisão da Entrada CA", valor: "Detecção e alarme de CA Alta, CA Baixa e Falta de Fase" },
          { parametro: "Fonte Auxiliar", valor: "Fonte chaveada interna com alimentação simultânea CA e CC" }
        ]
      },
      {
        grupo: "Saída CC, Baterias e Módulo UDQ",
        itens: [
          { parametro: "Tensão Nominal de Saída", valor: "12V, 24V, 48V, 110V, 125V, 220V ou 250Vcc (configurável)" },
          { parametro: "Faixa de Corrente Contínua", valor: "10 A a 5.000 A" },
          { parametro: "Módulo de Controle UDQ", valor: "1 a 4 etapas com inserção/retirada sequencial inversa" },
          { parametro: "Proteção de Sobretensão no Consumidor", valor: "Envio de sinal de bloqueio e desligamento de emergência" },
          { parametro: "Supervisão de Baterias", valor: "Monitoramento contínuo com alarme de Bateria em Descarga" }
        ]
      },
      {
        grupo: "Proteções, Alarmes e Comunicação",
        itens: [
          { parametro: "Proteção de Fuga a Terra", valor: "Detecção isolada por acoplamento óptico para Fuga (+) e Fuga (-)" },
          { parametro: "Proteção de Curto-Circuito", valor: "Fusível Interrompido / Disjuntor Aberto monitorado por via eletrônica" },
          { parametro: "Supervisão do Retificador", valor: "Alarme de Retificador Anormal e autodiagnóstico" },
          { parametro: "Janela de Alarmes & Histórico", valor: "Registro em memória de até 20 eventos com data e hora" },
          { parametro: "Protocolo de Comunicação", valor: "MODBUS-RTU nativo via RS-485 (outros sob consulta)" },
          { parametro: "Interface com Operador", valor: "IHM com display digital e teclas de atalho F1, F2, F3 e F4" }
        ]
      },
      {
        grupo: "Serviços e Manutenção de Fábrica",
        itens: [
          { parametro: "Serviços Disponíveis", valor: "Suporte técnico, Instalação, Comissionamento, Manutenção Preventiva/Corretiva e Retrofitting" },
          { parametro: "Disponibilidade de Peças", valor: "100% componentes de fácil aquisição no mercado nacional" },
          { parametro: "Engenharia de Aplicação", valor: "Suporte direto pelos engenheiros da DSR (engenharia@dsrsolucoes.com.br)" }
        ]
      }
    ],
    midias: [
      {
        id: "media-rit-1",
        type: "image",
        url: "/images/products/rit-d-cabinet.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet.jpg",
        title: "Painel do Retificador Industrial Modelo RIT-D",
        alt: "Cubículo industrial do Retificador DSR Modelo RIT-D com instrumentos analógicos, supervisão digital e venezianas de ventilação",
        description: "Gabinete padrão industrial robusto com módulo de Supervisão Digital DSR, instrumentos no topo e chassi modular de alta confiabilidade.",
        badge: "Cubículo RIT-D"
      },
      {
        id: "media-rit-2",
        type: "image",
        url: "/images/products/rit-d-supervisao.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao.jpg",
        title: "Módulo DSR Supervisão Digital com Teclas F1 a F4",
        alt: "Close-up do módulo de supervisão digital DSR com display LCD, teclas de função F1 a F4 e matriz de LEDs anunciadores",
        description: "Supervisão microcontrolada dupla com navegação intuitiva por teclas F1-F4, status sinóptico de CA, Retificador, Baterias e Consumidor.",
        badge: "Supervisão Digital"
      },
      {
        id: "media-rit-3",
        type: "image",
        url: "/images/products/rit-d-udq.jpg",
        thumbnailUrl: "/images/products/rit-d-udq.jpg",
        title: "Unidade de Diodo de Queda (UDQ) e Estágio de Potência",
        alt: "Estágio interno da Unidade de Diodo de Queda (UDQ) com contatores sequenciais, dissipadores de diodos e barramentos",
        description: "Controle de UDQ inteligente de 1 a 4 etapas com inserção sequencial inversa, proteção contra sobretensão e fonte auxiliar dupla CA/CC.",
        badge: "Módulo UDQ"
      }
    ]
  },
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
