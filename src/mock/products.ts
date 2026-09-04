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
    descricao_detalhada: "Projetado com arquitetura analógica direta e confiável, o Modelo RIT-D prioriza a durabilidade e a facilidade de manutenção em campo. No painel frontal, conta com instrumentos analógicos de medição (voltímetros e amperímetros de ponteiro) e sinalização luminosa por LEDs para os principais pontos do sistema: Alimentação CA, Retificador, Banco de Baterias e Consumidor. A concentração de circuitos no Módulo de Controle eleva o MTBF (Tempo Médio Entre Falhas) pela redução de conexões e número de placas, e reduz o MTTR (Tempo Médio Para Reparo). A fonte auxiliar chaveada possui alimentação mista CA e CC, garantindo que em caso de falta da rede CA os circuitos de controle e sinalização continuem operando através do banco de baterias.",
    texto_tecnologia: "Módulo de Controle de UDQ (Unidade de Diodo de Queda) e Proteções Analógicas: Os retificadores RIT-D possuem um Módulo de Controle de UDQ que monitora diretamente a tensão sobre o Consumidor, protegendo contra sobretensão no caso de falha ou acionamento indevido de um contator da UDQ. Seu acionamento é sequencial e a ordem de entrada dos diodos em série com o Consumidor é inversa à ordem de retirada dos mesmos (a primeira etapa inserida em tensão alta será a última a ser retirada na tensão mais baixa). Este módulo é configurável para uma a até quatro etapas e, se inseridas todas as etapas e a tensão sobre o Consumidor atingir um nível pré-ajustado, um sinal de Sobretensão CC é enviado ao Módulo de Controle para desligamento seguro do Retificador. Possui fonte auxiliar chaveada com alimentação CA e CC, proteção de fusível interrompido / disjuntor aberto por eletrônica e proteção de fuga a terra via acoplamento óptico.",
    datasheet_url: "/downloads/retificador-industrial-analogico-rit-d.pdf",
    status_disponibilidade: "Em Estoque",
    garantia: "Garantia de Fábrica DSR (com Suporte Técnico, Instalação e Retrofitting)",
    certificacoes: ["Normas Industriais ABNT/IEC", "Módulos Universais Intercambiáveis", "NR-10 / NR-12"],
    recursos_principais: [
      {
        titulo: "Topologia Tiristorizada Analógica",
        descricao: "Controle analógico com disparo robusto de tiristores em pontes de 02 a 06 pulsos (12 a 24 sob consulta).",
        icone: "Cpu"
      },
      {
        titulo: "Módulo UDQ de 1 a 4 Etapas",
        descricao: "Monitoramento direto da tensão no consumidor com acionamento sequencial inverso e proteção contra sobretensão CC.",
        icone: "Zap"
      },
      {
        titulo: "Painel com Instrumentação Analógica",
        descricao: "Voltímetros e amperímetros de ponteiro no painel com sinalização luminosa por LED para CA, Retificador, Bateria e Consumidor.",
        icone: "Activity"
      },
      {
        titulo: "Proteções Eletrônicas e Fuga a Terra",
        descricao: "Proteção contra curto-circuito via fusível eletrônico e fuga a terra (+) e (-) com isolamento óptico.",
        icone: "ShieldCheck"
      },
      {
        titulo: "Mesmos Módulos (PCIs) Universais",
        descricao: "Mesmas placas para todas as tensões de 12 a 250Vcc e redes mono, bi e trifásicas de 10 a 5.000A, facilitando a reposição.",
        icone: "Layers"
      },
      {
        titulo: "Fonte Auxiliar Chaveada CA e CC",
        descricao: "Alimentação mista que garante o funcionamento ininterrupto do controle e sinalização mesmo em caso de corte total da rede CA.",
        icone: "Sparkles"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Topologia de Retificação", valor: "Tiristorizada analógica semi ou totalmente controlada (02 a 06 pulsos)", destaque: true },
      { chave: "Tensão de Saída CC", valor: "12 a 250 Vcc (todas as tensões padrão industrial)", destaque: true },
      { chave: "Faixa de Corrente", valor: "10 A a 5.000 A", destaque: true },
      { chave: "Alimentação de Entrada", valor: "Redes Monofásicas, Bifásicas e Trifásicas" },
      { chave: "Módulos Intercambiáveis", valor: "Mesmas PCIs para qualquer tensão e corrente", destaque: true },
      { chave: "Unidade de Diodo de Queda", valor: "UDQ inteligente de 1 a 4 etapas sequenciais inversas", destaque: true },
      { chave: "Painel & Sinalização", valor: "Instrumentos analógicos de ponteiro e LEDs de status" },
      { chave: "Proteções Integradas", valor: "Eletrônica de curto-circuito e fuga a terra óptica" },
      { chave: "Fonte Auxiliar", valor: "Chaveada com alimentação híbrida CA e CC" },
      { chave: "Componentes", valor: "Componentes de fácil aquisição no mercado nacional" }
    ],
    especificacoes_completas: [
      {
        grupo: "Topologia e Parâmetros de Entrada CA",
        itens: [
          { parametro: "Topologia de Retificação", valor: "Tiristorizada analógica, semi ou totalmente controlada" },
          { parametro: "Configurações de Pulsos", valor: "02, 03, 04 ou 06 pulsos (12, 18 e 24 pulsos sob consulta)" },
          { parametro: "Alimentação da Rede", valor: "Redes industriais Monofásicas, Bifásicas e Trifásicas" },
          { parametro: "Alarmes de Entrada CA", valor: "CA Alta, CA Baixa e Falta de Fase" },
          { parametro: "Intercambiabilidade de Placas", valor: "Mesmos módulos (PCIs) para qualquer tensão de 12 a 250Vcc e corrente de 10 a 5.000A" }
        ]
      },
      {
        grupo: "Saída CC e Unidade de Diodo de Queda (UDQ)",
        itens: [
          { parametro: "Tensão Nominal de Saída CC", valor: "12V, 24V, 48V, 110V, 125V, 220V ou 250Vcc" },
          { parametro: "Faixa de Corrente Contínua", valor: "10 A a 5.000 A" },
          { parametro: "Módulo de Controle UDQ", valor: "Configurável de 1 a até 4 etapas em série com o Consumidor" },
          { parametro: "Lógica Sequencial UDQ", valor: "Sequência inversa: a primeira etapa inserida em sobretensão é a última a ser retirada" },
          { parametro: "Monitoramento do Consumidor", valor: "Monitoramento direto da tensão sobre a carga com detecção de falha de contator" },
          { parametro: "Proteção Crítica de Sobretensão", valor: "Envia sinal de Sobretensão CC ao controle para desligamento seguro do retificador" },
          { parametro: "Sinalização de Saída CC", valor: "CC Baixa, CC Alta, Bateria em Descarga, Retificador Anormal, Tensão Alta e Baixa no Consumidor" }
        ]
      },
      {
        grupo: "Painel Frontal, Sinalização e Proteções",
        itens: [
          { parametro: "Instrumentação de Painel", valor: "Voltímetros e amperímetros analógicos de ponteiro" },
          { parametro: "Sinalização Frontal", valor: "LEDs indicadores para Entrada CA, Retificador, Baterias e Consumidor" },
          { parametro: "Proteção contra Curto-Circuito", valor: "Fusível Interrompido / Disjuntor Aberto monitorado por circuito eletrônico (não mecânico)" },
          { parametro: "Proteção de Fuga à Terra", valor: "Fuga a Terra (+) e (-) via acoplamento óptico (isolamento galvânico)" },
          { parametro: "Fonte Auxiliar Chaveada", valor: "Alimentação mista CA e CC (em falta de CA, opera alimentada pelo banco de baterias)" }
        ]
      },
      {
        grupo: "Engenharia, Serviços e Suporte DSR",
        itens: [
          { parametro: "Robustez Industrial", valor: "Alta concentração no Módulo de Controle, elevando o MTBF e reduzindo o MTTR" },
          { parametro: "Aquisição de Componentes", valor: "Utilização de componentes de fácil aquisição no mercado nacional" },
          { parametro: "Serviços Disponíveis", valor: "Suporte técnico, Instalação, Comissionamento, Manutenção Preventiva, Corretiva, Retrofitting e Garantia" },
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
        title: "Foto Real: Retificador Industrial Modelo RIT-D",
        alt: "Retificador Industrial Analógico Modelo RIT-D em cubículo com medidores analógicos de ponteiro",
        badge: "Equipamento Real"
      },
      {
        id: "media-rit-2",
        type: "image",
        url: "/images/products/rit-d-supervisao-real.jpg",
        thumbnailUrl: "/images/products/rit-d-supervisao-real.jpg",
        title: "Painel Frontal com Instrumentação Analógica",
        alt: "Painel frontal do retificador com instrumentos de medição e sinalização luminosa",
        badge: "Painel Frontal"
      },
      {
        id: "media-rit-3",
        type: "image",
        url: "/images/products/rit-d-udq.jpg",
        thumbnailUrl: "/images/products/rit-d-udq.jpg",
        title: "Módulo de Controle e Etapas UDQ",
        alt: "Estágio interno da Unidade de Diodo de Queda (UDQ)",
        badge: "Módulo UDQ"
      },
      {
        id: "media-rit-4",
        type: "image",
        url: "/images/products/rit-d-cabinet.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet.jpg",
        title: "Cubículo Industrial RIT-D (Perspectiva Estrutural)",
        alt: "Gabinete padrão industrial do Retificador RIT-D",
        badge: "Cubículo Industrial"
      }
    ]
  },
  {
    id: "dsr-dk10-dk30",
    slug: "retificador-industrial-tiristorizado-digital-dk10-dk30",
    nome: "Retificador Industrial Tiristorizado Digital (DK10 / DK30)",
    codigo_modelo: "DK10 (Mono) / DK30 (Trifásico)",
    categoria: "Retificadores & Carregadores",
    subcategoria: "Retificadores Tiristorizados com Controle Digital",
    tagline: "Controle tiristorizado digital de precisão para alimentação ininterrupta de subestações e centros de controle (DK10 Monofásico e DK30 Trifásico).",
    descricao: "A linha DK10 (monofásica) e DK30 (trifásica) foi projetada para aplicações industriais severas e subestações de energia. Conta com controle digital por microprocessador, disparo preciso de tiristores, recarga automática de baterias e supervisão remota completa.",
    descricao_detalhada: "Fabricado com chassi em chapa de aço reforçada e grau de proteção industrial, o DK10/DK30 oferece regulação estática estrita (< 1%), filtragem LC de saída com baixíssimo ripple e opções de barramento desacoplado para bancos de baterias e cargas simultâneas.",
    texto_tecnologia: "Controle de disparo digital microprocessado com algoritmo de compensação de fase e telemetria de corrente e tensão via barramento Modbus-RTU.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia de Fábrica DSR)",
    certificacoes: ["NR-10", "NR-12", "IEC 60146", "ISO 9001"],
    recursos_principais: [
      { titulo: "Versões Mono e Trifásica", descricao: "DK10 para redes 110V/220V mono e DK30 para 220V/380V/440V trifásico.", icone: "Zap" },
      { titulo: "Regulação Estrita de Tensão", descricao: "Estabilidade superior a ± 1% sob variações de carga e rede.", icone: "Cpu" }
    ],
    especificacoes_rapidas: [
      { chave: "Configuração de Entrada", valor: "DK10 (Monofásica) / DK30 (Trifásica)", destaque: true },
      { chave: "Tensões de Saída CC", valor: "24V, 48V, 110V, 125V, 220Vcc", destaque: true },
      { chave: "Faixa de Corrente", valor: "15 A a 2.500 A", destaque: true },
      { chave: "Topologia", valor: "Ponte Tiristorizada Totalmente Controlada" },
      { chave: "Comunicação", valor: "Modbus-RTU / RS-485" }
    ],
    midias: [
      {
        id: "media-dk-1",
        type: "image",
        url: "/images/products/rit-d-cabinet.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet.jpg",
        title: "Retificador Industrial Tiristorizado DK10 / DK30",
        alt: "Retificador Industrial DK10 / DK30",
        badge: "Visão Geral"
      }
    ]
  },
  {
    id: "dsr-dk-sr10-sr30",
    slug: "retificador-modular-chaveado-digital-dk-sr10-dk-sr30",
    nome: "Retificador Modular Chaveado Digital (DK-SR10 / DK-SR30)",
    codigo_modelo: "DK-SR10 (Mono) / DK-SR30 (Trifásico)",
    categoria: "Retificadores & Carregadores",
    subcategoria: "Sistemas Modulares Chaveados de Alta Densidade",
    tagline: "Arquitetura modular chaveada em alta frequência com redundância ativa N+1, módulos hot-swap e alta densidade de potência.",
    descricao: "Os Retificadores Modulares DK-SR10 (entrada monofásica) e DK-SR30 (entrada trifásica) combinam fontes chaveadas em alta frequência em gavetas hot-swap, oferecendo flexibilidade de expansão, manutenção sem interrupção e rendimento > 95%.",
    descricao_detalhada: "O sistema opera com paralelismo ativo e compartilhamento de corrente dinâmico entre os módulos. Um controlador central supervisiona todas as gavetas, registrando alarmes, medições e curvas de carga das baterias.",
    texto_tecnologia: "Topologia de chaveamento suave em alta frequência com correção ativa de fator de potência (PFC unitário) e barramento CAN interno.",
    status_disponibilidade: "Em Estoque",
    garantia: "24 Meses (Garantia de Fábrica DSR)",
    certificacoes: ["NR-10", "NR-12", "IEC 61204", "ISO 9001"],
    recursos_principais: [
      { titulo: "Gavetas Hot-Swap", descricao: "Substituição ou adição de módulos com o sistema energizado.", icone: "Cpu" },
      { titulo: "Eficiência > 95%", descricao: "Baixo consumo e mínima dissipação térmica em sala de baterias.", icone: "Zap" }
    ],
    especificacoes_rapidas: [
      { chave: "Arquitetura", valor: "Modular Hot-Swap N+1", destaque: true },
      { chave: "Rendimento", valor: "> 95,5% em regime nominal", destaque: true },
      { chave: "Fator de Potência", valor: "≥ 0,99 (PFC Ativo)", destaque: true },
      { chave: "Tensões de Saída", valor: "24Vcc, 48Vcc, 110Vcc, 125Vcc" }
    ],
    midias: [
      {
        id: "media-dksr-1",
        type: "image",
        url: "/images/products/rit-d-udq.jpg",
        thumbnailUrl: "/images/products/rit-d-udq.jpg",
        title: "Retificador Modular Chaveado DK-SR",
        alt: "Retificador Modular Chaveado",
        badge: "Arquitetura Modular"
      }
    ]
  },
  {
    id: "dsr-formador-baterias",
    slug: "retificador-formador-de-baterias",
    nome: "Retificador Formador de Baterias Industrial",
    codigo_modelo: "DSR-RFB",
    categoria: "Retificadores & Carregadores",
    subcategoria: "Equipamentos Especiais para Fabricação de Baterias",
    tagline: "Ciclos programáveis de carga, formação química e despolarização para fabricantes e laboratórios de baterias industriais.",
    descricao: "Projetado especialmente para fabricantes de baterias e centros de manutenção de acumuladores, o DSR-RFB executa rampas e patamares controlados de corrente e tensão com inversão controlada para formação inicial e regeneração de placas.",
    descricao_detalhada: "Possui controle microprocessado com curvas de carga configuráveis via software, monitoramento térmico por sonda e registro contínuo de curva de formação em memória.",
    texto_tecnologia: "Controle de tiristores com amostragem rápida e algoritmo de pulsos de despolarização para evitar aquecimento excessivo dos vasos de bateria.",
    status_disponibilidade: "Engenharia Customizada",
    garantia: "24 Meses (Garantia DSR)",
    certificacoes: ["NR-10", "NR-12", "ISO 9001"],
    recursos_principais: [
      { titulo: "Ciclos Programáveis", descricao: "Perfis de formação química com múltiplas etapas de corrente e tempo.", icone: "Activity" }
    ],
    especificacoes_rapidas: [
      { chave: "Aplicação", valor: "Formação e Regeneração de Baterias", destaque: true },
      { chave: "Corrente de Saída", valor: "Até 1.500 A programáveis", destaque: true },
      { chave: "Controle", valor: "Microprocessado com perfis em memória" }
    ],
    midias: [
      {
        id: "media-rfb-1",
        type: "image",
        url: "/images/products/rit-d-cabinet.jpg",
        thumbnailUrl: "/images/products/rit-d-cabinet.jpg",
        title: "Retificador Formador de Baterias DSR",
        alt: "Retificador Formador de Baterias",
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
    codigo_modelo: "DSR-UPS-IND",
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
    codigo_modelo: "DSR-INV-IND",
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
    codigo_modelo: "DSR-STS",
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
    codigo_modelo: "DSR-EST-SS",
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
    codigo_modelo: "DSR-QD-ACDC",
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
    codigo_modelo: "DSR-QP-DC",
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
    codigo_modelo: "DSR-DIGI-VAC",
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
    codigo_modelo: "DSR-DIGI-VDC",
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
    codigo_modelo: "DSR-DIGI-IAC",
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
    codigo_modelo: "DSR-DIGI-IDC",
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
    codigo_modelo: "DSR-DIGI-TEMP",
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
    codigo_modelo: "DSR-DIGI-VIAC",
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
    codigo_modelo: "DSR-DIGI-VIDC",
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
    codigo_modelo: "DSR-DIGI-DI",
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
    codigo_modelo: "DSR-DIGI-AI",
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
    codigo_modelo: "DSR-BMS-IND",
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
    codigo_modelo: "DSR-SOLAR-MON",
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
    codigo_modelo: "DSR-SENS-TEMP",
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
    codigo_modelo: "DSR-ISO-SIG",
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
    codigo_modelo: "DSR-SUP-RELES",
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
    codigo_modelo: "DSR-PFC-ACTIVE",
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
    codigo_modelo: "DSR-SNUB-PRO",
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
    codigo_modelo: "DSR-LOAD-PROG",
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
