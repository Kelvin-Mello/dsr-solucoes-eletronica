/**
 * ARQUIVO DE PRODUTOS ARQUIVADOS - DSR SOLUÇÕES EM ELETRÔNICA
 * 
 * Este arquivo preserva todas as informações, conceitos técnicos, especificações e ideias
 * dos equipamentos conceituais e protótipos criados anteriormente na plataforma.
 * 
 * Preservado em: 03/09/2026
 */

import { Product } from "./products";

export const ARCHIVED_PRODUCTS: Product[] = [
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
      }
    ],
    midias: [
      {
        id: "media-1",
        type: "image",
        url: "/images/products/rectifier-front.jpg",
        thumbnailUrl: "/images/products/rectifier-front.jpg",
        title: "Visão Frontal do Painel e Barramentos",
        alt: "Gabinete do Retificador Industrial DSR-9000 Pro",
        badge: "Vista Principal"
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
    descricao: "O Inversor Ressonante DSR-IND 350kW foi projetado para operações severas e ininterruptas de fundição, forjaria, brasagem e têmpera por indução eletromagnética. Conta com controle digital de ressonância em malha fechada (PLL adaptativo).",
    descricao_detalhada: "Equipado com pontes comutadas em zero de tensão e zero de corrente (ZVS/ZCS), o DSR-IND 350kW reduz drasticamente o aquecimento interno e o desgaste dos semicondutores.",
    texto_tecnologia: "Topologia Ressonante ZVS/ZCS com FPGA de 200 MHz: O processamento em hardware ultrarrápido amostra o sinal de corrente de ressonância e recalcula o ângulo de disparo a cada meio ciclo.",
    status_disponibilidade: "Engenharia Customizada",
    garantia: "24 Meses (Garantia de Fábrica DSR)",
    certificacoes: ["NR-10", "NR-12", "IEC 60519", "ISO 9001"],
    recursos_principais: [
      {
        titulo: "Sintonia Automática de Ressonância (PLL)",
        descricao: "Rastreia o ponto ideal de operação entre 1 kHz e 50 kHz sem necessidade de ajuste manual.",
        icone: "Zap"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Potência de Saída", valor: "350 kW contínuos", destaque: true },
      { chave: "Faixa de Frequência", valor: "1 kHz a 50 kHz (Auto-ajustável)", destaque: true },
      { chave: "Eficiência Elétrica", valor: "> 97,2% em regime pleno", destaque: true }
    ],
    midias: [
      {
        id: "media-inv-1",
        type: "image",
        url: "/images/products/inverter-furnace.jpg",
        thumbnailUrl: "/images/products/inverter-furnace.jpg",
        title: "Inversor Ressonante DSR-IND 350kW",
        alt: "Inversor Ressonante DSR",
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
    descricao_detalhada: "Com engenharia mecânica adaptativa e chicotes pré-conectorizados, o kit substitui placas de disparo antigas, componentes descontinuados e relés mecânicos por um controlador digital DSP integrado de alta imunidade a ruídos (EMC).",
    texto_tecnologia: "Controle Digital Microprocessado com Disparo por Fibra Óptica: O disparo dos tiristores de potência é conduzido por pulsos ópticos imunes a interferências eletromagnéticas severas.",
    status_disponibilidade: "Sob Encomenda",
    garantia: "24 Meses (Garantia de Retrofit DSR)",
    certificacoes: ["NR-10", "NR-12", "IEC 60146", "ISO 9001"],
    recursos_principais: [
      {
        titulo: "Turnaround Rápido (24h a 48h)",
        descricao: "Instalação mecânica e parametrização direta no cubículo existente sem atrasar a produção.",
        icone: "Cpu"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Capacidade de Corrente", valor: "Até 4.000 A CC contínuos", destaque: true },
      { chave: "Economia Financeira", valor: "Até 65% em comparação a cubículo novo", destaque: true }
    ],
    midias: [
      {
        id: "media-retro-1",
        type: "image",
        url: "/images/products/retrofit-thyristor.jpg",
        thumbnailUrl: "/images/products/retrofit-thyristor.jpg",
        title: "Kit de Retrofit DSR",
        alt: "Kit de Retrofit DSR",
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
    descricao: "O Filtro Ativo DSR-AFQ 300A é a solução definitiva para plantas industriais com cargas não-lineares severas. Atuando como uma fonte de corrente em paralelo com a rede, injeta correntes harmônicas em contra-fase com precisão cirúrgica, reduzindo o THDi para menos de 3% e elevando o Fator de Potência para 1,00.",
    descricao_detalhada: "Fabricado em arquitetura modular de gavetas rack-mount de 75A ou 100A, permite expansão facilitada conforme o crescimento da planta até 1.800 A em um único barramento.",
    texto_tecnologia: "Conversor 3 Níveis NPC com Processamento FFT em Hardware: A topologia Neutral-Point Clamped reduz em 40% as perdas térmicas por comutação.",
    status_disponibilidade: "Em Estoque",
    garantia: "36 Meses (Garantia de Fábrica DSR)",
    certificacoes: ["IEEE 519", "IEC 61000-3-4", "NR-10", "PRODIST"],
    recursos_principais: [
      {
        titulo: "Mitigação até a 50ª Ordem Harmônica",
        descricao: "Compensação seletiva configurável individualmente para cada harmônica crítica da planta.",
        icone: "Activity"
      }
    ],
    especificacoes_rapidas: [
      { chave: "Capacidade Nominal", valor: "300 A contínuos (Modular até 1.800 A)", destaque: true },
      { chave: "Ordens Harmônicas", valor: "2ª à 50ª ordem", destaque: true }
    ],
    midias: [
      {
        id: "media-filter-1",
        type: "image",
        url: "/images/products/filter-harmonics.jpg",
        thumbnailUrl: "/images/products/filter-harmonics.jpg",
        title: "Filtro Ativo DSR-AFQ 300A",
        alt: "Filtro Ativo DSR",
        badge: "Cubículo Ativo"
      }
    ]
  }
];
