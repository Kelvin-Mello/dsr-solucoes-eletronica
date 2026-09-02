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
    categoria: "Eletrônica de Potência & Conversão",
    subcategoria: "Retificadores Industriais & Retrofit IGBT",
    tagline: "Conversão de energia de ultra-alta eficiência com controle digital microprocessado e arquitetura de retrofit modular.",
    descricao: "O Retificador Industrial Trifásico DSR-9000 Pro foi projetado para operar sob as condições mais severas do setor industrial (químico, metalúrgico, mineração e tração). Incorpora módulos de semicondutores de última geração com topologia 12-pulsos e ponte tiristorizada/IGBT comutável, garantindo baixíssimo THD (Distorção Harmônica Total) e máxima confiabilidade operacional contínua.",
    descricao_detalhada: "Desenvolvido pelo time de engenharia da DSR Soluções, o DSR-9000 Pro elimina paradas não programadas através de redundância ativa N+1 em módulos de potência e controle térmico dinâmico por líquido/ar forçado. A arquitetura física é 100% preparada para projetos de Retrofitting direto em painéis legados existentes, dispensando obras civis pesadas e reduzindo o tempo de comissionamento de semanas para poucos dias.",
    texto_tecnologia: "Topologia Avançada de Potência: O sistema opera com transformador defasador dedicado e retificação multipulsos integrada a banco de filtros LC sintonizados. A malha de controle em tempo real é executada por DSP duplo de 32 bits com amostragem de 100 kHz, calculando em microssegundos o disparo ideal de tiristores e corte de picos de sobretensão transitória (Clamping Snubber dinâmico). O barramento DC conta com desacoplamento de ultra-baixa indutância parasita em barras de cobre eletrolítico 99,99% estanhadas e proteção integrada contra surtos Classe I/II.",
    status_disponibilidade: "Engenharia Customizada",
    garantia: "36 Meses (Garantia Estendida de Fábrica DSR)",
    certificacoes: ["NR-10", "NR-12", "IEC 60146", "IEEE 519", "ISO 9001"],
    recursos_principais: [
      {
        titulo: "Arquitetura Pronta para Retrofitting",
        descricao: "Chassi mecânico compatível com padrão de furação de cubículos legados de diversas marcas mundiais.",
        icone: "Cpu"
      },
      {
        titulo: "Eficiência Energética > 98.4%",
        descricao: "Perdas térmicas drasticamente reduzidas com semicondutores de carbeto de silício (SiC) e IGBTs otimizados.",
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
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS_MOCK.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return PRODUCTS_MOCK;
}
