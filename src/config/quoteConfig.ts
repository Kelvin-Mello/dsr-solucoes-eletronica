/**
 * Configurações de Cotação Técnica & Dimensionamento Customizadas por Produto e Serviço
 * DSR Soluções em Eletrônica
 */

export type QuoteLevel = "basica" | "intermediaria" | "avancada" | "direta";

export interface CustomFieldSelectOption {
  label: string;
  value: string;
}

export interface CustomFieldConfig {
  id: string;
  label: string;
  type: "text" | "number" | "select";
  options?: CustomFieldSelectOption[];
  defaultValue?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
}

export interface AnalogInstrumentOption {
  id: string;
  label: string;
  description?: string;
  defaultChecked?: boolean;
}

export interface RemoteRelayOption {
  id: string;
  label: string;
  description?: string;
  defaultChecked?: boolean;
}

export interface QuoteConfigItem {
  slug: string;
  name: string;
  code: string;
  itemType: "product" | "service";
  categoryTitle: string;
  summary: string;
  
  // Nível Intermediário
  intermediateFields: CustomFieldConfig[];

  // Nível Avançado
  advancedConfig: {
    loadTypes?: string[];
    analogInstruments?: AnalogInstrumentOption[];
    remoteRelays?: RemoteRelayOption[];
    harmonicFilterOptions?: string[];
    hasScrMonitoring?: boolean;
    hasEnclosureDimensionLimits?: boolean;
    extraAdvancedFields?: CustomFieldConfig[];
  };
}

// ============================================================================
// OPÇÕES PADRÃO DE INSTRUMENTAÇÃO ANALÓGICA (Porta do Painel)
// ============================================================================
export const DEFAULT_ANALOG_INSTRUMENTS: AnalogInstrumentOption[] = [
  { id: "volt_cc_cons", label: "Voltímetro CC Consumidor", description: "Medição contínua da tensão do barramento de carga (Classe 1.5%)", defaultChecked: true },
  { id: "amp_cc_ret", label: "Amperímetro CC Retificador", description: "Corrente total fornecida pela ponte tiristorizada", defaultChecked: true },
  { id: "amp_cc_bat", label: "Amperímetro CC Bateria (Zero Central)", description: "Visualização bidirecional de corrente de carga e descarga", defaultChecked: true },
  { id: "volt_ca_rede", label: "Voltímetro CA de Entrada com Chave", description: "Chave comutadora tripolar para medição de fases RS, ST e TR", defaultChecked: false },
  { id: "freq_ca", label: "Frequencímetro CA de Entrada", description: "Escala analógica 45 a 65 Hz com ponteiro de alta precisão", defaultChecked: false },
  { id: "amp_ca_rede", label: "Amperímetro CA de Entrada com Chave", description: "Chave seletora rotativa para corrente de fase R, S e T", defaultChecked: false },
  { id: "horimetro", label: "Horímetro Eletromecânico", description: "Contador acumulador de horas de operação do equipamento", defaultChecked: false }
];

// ============================================================================
// OPÇÕES PADRÃO DE SINALIZAÇÃO REMOTA A RELÉS (Contatos Secos NA/NF)
// ============================================================================
export const DEFAULT_REMOTE_RELAYS: RemoteRelayOption[] = [
  { id: "rele_falha_geral", label: "Falha Geral do Equipamento", description: "Alarme crítico sumarizado para o SCADA da planta", defaultChecked: true },
  { id: "rele_falha_ca", label: "Falta de Fase / Falha da Rede CA", description: "Subtensão ou corte no suprimento de corrente alternada", defaultChecked: true },
  { id: "rele_subtensao_cc", label: "Subtensão CC no Consumidor", description: "Indicação de descarga profunda do banco de baterias", defaultChecked: true },
  { id: "rele_sobretensao_cc", label: "Sobretensão CC no Consumidor", description: "Proteção contra elevação anormal de tensão no barramento", defaultChecked: true },
  { id: "rele_fuga_terra", label: "Fuga à Terra Bipolar (+ ou -)", description: "Supervisão óptica com detecção de perda de isolamento", defaultChecked: true },
  { id: "rele_dj_ca", label: "Disjuntor CA de Entrada Aberto", description: "Status de desarme por sobrecorrente ou abertura manual", defaultChecked: false },
  { id: "rele_dj_cc", label: "Disjuntor CC do Consumidor Aberto", description: "Linha de alimentação da carga interrompida", defaultChecked: false },
  { id: "rele_dj_bat", label: "Disjuntor do Banco de Baterias Aberto", description: "Banco desconectado ou em manutenção", defaultChecked: true },
  { id: "rele_fusivel_scr", label: "Fusível Queimado / Falha de SCR", description: "Queima de semicondutor de potência ou fusível ultrarrápido", defaultChecked: false },
  { id: "rele_carga_rapida", label: "Modo Equalização / Carga Rápida", description: "Retificador operando com tensão de equalização ativa", defaultChecked: false },
  { id: "rele_udq_atuada", label: "Atuação da UDQ (Diodos de Queda)", description: "Etapa de diodo inserida em série com a carga", defaultChecked: false },
  { id: "rele_sobretemperatura", label: "Sobrecarga Térmica / Dissipador", description: "Termostato de temperatura elevada nos dissipadores", defaultChecked: false }
];

// ============================================================================
// OPÇÕES PADRÃO DE FILTRAGEM HARMÔNICA
// ============================================================================
export const DEFAULT_HARMONIC_FILTERS = [
  "Padrão 6 Pulsos (Sem filtro harmônico adicional)",
  "Filtro Passivo LC Ressonante de Entrada (Redução de THDi < 10%)",
  "Ponte de 12 Pulsos com Transformador Defasador (THDi < 8%)",
  "Ponte de 18 / 24 Pulsos para Baixíssima Distorção Harmônica",
  "Filtro Ativo de Harmônicas (APF Integrado / THDi < 5%)"
];

// ============================================================================
// TIPOS DE CARGA PADRÃO
// ============================================================================
export const DEFAULT_LOAD_TYPES = [
  "Subestação Elétrica (Relés de Proteção, Bobinas de Disjuntores, Sinalização)",
  "Telecomunicações & Rádios Industriais (-48V / +24Vcc)",
  "Inversores Estáticos CC/CA & Sistemas UPS de Potência",
  "Automação Industrial, CLPs, SDCD e Instrumentação Crítica",
  "Motores de Corrente Contínua e Painéis de Excitação",
  "Iluminação de Emergência e Sistemas de Segurança",
  "Processo Eletroquímico / Tratamento Galvânico / Formação",
  "Cargas Mistas Industriais"
];

// ============================================================================
// DICIONÁRIO DE CONFIGURAÇÕES ESPECÍFICAS POR SLUG
// ============================================================================
const QUOTE_CONFIGS: Record<string, Partial<QuoteConfigItem>> = {
  // --------------------------------------------------------------------------
  // 1. RETIFICADOR INDUSTRIAL ANALÓGICO (RIT-D)
  // --------------------------------------------------------------------------
  "retificador-padrao-industrial-modelo-rit-d": {
    slug: "retificador-padrao-industrial-modelo-rit-d",
    name: "Retificador Industrial Analógico",
    code: "Modelo RIT-D",
    itemType: "product",
    categoryTitle: "Retificadores & Carregadores",
    summary: "Retificador tiristorizado analógico de 12V a 250Vcc e 10A a 5.000A com UDQ configurável e controle por tiristores.",
    intermediateFields: [
      {
        id: "tensaoRede",
        label: "Tensão CA da Rede de Alimentação",
        type: "select",
        options: [
          { label: "220V Monofásico / Bifásico", value: "220V Monofásico/Bifásico" },
          { label: "220V Trifásico", value: "220V Trifásico" },
          { label: "380V Trifásico", value: "380V Trifásico" },
          { label: "440V Trifásico", value: "440V Trifásico" },
          { label: "480V Trifásico", value: "480V Trifásico" },
          { label: "Média Tensão (com Transformador DSR)", value: "Média Tensão (com Trafo DSR)" }
        ],
        defaultValue: "380V Trifásico"
      },
      {
        id: "tensaoCC",
        label: "Tensão CC Nominal do Barramento",
        type: "select",
        options: [
          { label: "125 Vcc (Padrão Subestação)", value: "125 Vcc" },
          { label: "110 Vcc", value: "110 Vcc" },
          { label: "48 Vcc (Telecom / Automação)", value: "48 Vcc" },
          { label: "24 Vcc (Comando Industrial)", value: "24 Vcc" },
          { label: "220 Vcc", value: "220 Vcc" },
          { label: "250 Vcc", value: "250 Vcc" },
          { label: "Outra Tensão Especial sob Medida", value: "Tensão Especial" }
        ],
        defaultValue: "125 Vcc"
      },
      {
        id: "correnteSaida",
        label: "Corrente Nominal de Saída CC (A)",
        type: "select",
        options: [
          { label: "10 A", value: "10 A" },
          { label: "25 A", value: "25 A" },
          { label: "50 A", value: "50 A" },
          { label: "75 A", value: "75 A" },
          { label: "100 A", value: "100 A" },
          { label: "150 A", value: "150 A" },
          { label: "200 A", value: "200 A" },
          { label: "250 A", value: "250 A" },
          { label: "300 A", value: "300 A" },
          { label: "400 A", value: "400 A" },
          { label: "500 A", value: "500 A" },
          { label: "600 A", value: "600 A" },
          { label: "800 A", value: "800 A" },
          { label: "1.000 A", value: "1000 A" },
          { label: "1.500 A a 5.000 A (Projeto Especial)", value: "Alta Corrente (>1000A)" }
        ],
        defaultValue: "100 A"
      },
      {
        id: "etapasUDQ",
        label: "Quantidade de Etapas da UDQ (Diodos de Queda)",
        type: "select",
        options: [
          { label: "Sem UDQ (Alimentação Direta de Carga / Baterias)", value: "Sem UDQ" },
          { label: "1 Etapa de Diodos de Queda", value: "1 Etapa" },
          { label: "2 Etapas de Diodos de Queda", value: "2 Etapas" },
          { label: "3 Etapas de Diodos de Queda", value: "3 Etapas" },
          { label: "4 Etapas de Diodos de Queda (Controle Sequencial)", value: "4 Etapas" }
        ],
        defaultValue: "2 Etapas"
      },
      {
        id: "tipoBateria",
        label: "Banco de Baterias Acoplado",
        type: "select",
        options: [
          { label: "Chumbo-Ácido Ventilada (VLA / Planté / Tubular)", value: "Chumbo-Ácido Ventilada (VLA)" },
          { label: "Chumbo-Ácido Regulada por Válvula (VRLA / AGM / Gel)", value: "Chumbo-Ácido Selada (VRLA)" },
          { label: "Níquel-Cádmio (Ni-Cd bolsa / sinterizada)", value: "Níquel-Cádmio (Ni-Cd)" },
          { label: "Íons de Lítio (LiFePO4 com BMS)", value: "Íons de Lítio (LiFePO4)" },
          { label: "Sem Bateria (Carga CC Direta / Sem Acumulador)", value: "Sem Bateria (Carga Direta)" },
          { label: "Processo Eletroquímico / Formação Química", value: "Processo Eletroquímico" }
        ],
        defaultValue: "Chumbo-Ácido Ventilada (VLA)"
      },
      {
        id: "grauProtecao",
        label: "Grau de Proteção Mecânica do Gabinete",
        type: "select",
        options: [
          { label: "IP20 (Padrão para Salas Elétricas Climatizadas)", value: "IP20" },
          { label: "IP21 (Com Pingadeira Superior contra Pingos)", value: "IP21" },
          { label: "IP31 (Proteção contra Corpos Sólidos e Pingos)", value: "IP31" },
          { label: "IP42 (Com Ventilação Forçada e Filtros Laváveis)", value: "IP42" },
          { label: "IP54 (Ambiente Industrial Agressivo / Poeira Severa)", value: "IP54" }
        ],
        defaultValue: "IP21"
      },
      {
        id: "aplicacao",
        label: "Objetivo do Projeto",
        type: "select",
        options: [
          { label: "Retrofit de Painel Existente", value: "Retrofit de Painel Existente" },
          { label: "Nova Linha de Produção (Greenfield)", value: "Nova Linha Greenfield" },
          { label: "Substituição por Falha de Equipamento Antigo", value: "Substituição por Falha" },
          { label: "Aumento de Capacidade / Expansão de Carga", value: "Aumento de Capacidade" }
        ],
        defaultValue: "Retrofit de Painel Existente"
      },
      {
        id: "frequenciaRede",
        label: "Frequência da Rede",
        type: "select",
        options: [
          { label: "60 Hz (Padrão Brasileiro)", value: "60 Hz" },
          { label: "50 Hz (Padrão Internacional / Exportação)", value: "50 Hz" }
        ],
        defaultValue: "60 Hz"
      }
    ],
    advancedConfig: {
      loadTypes: DEFAULT_LOAD_TYPES,
      analogInstruments: DEFAULT_ANALOG_INSTRUMENTS,
      remoteRelays: DEFAULT_REMOTE_RELAYS,
      harmonicFilterOptions: DEFAULT_HARMONIC_FILTERS,
      hasScrMonitoring: true,
      hasEnclosureDimensionLimits: true,
      extraAdvancedFields: [
        {
          id: "sensorBateriaPT100",
          label: "Sensor PT100 para Baterias",
          type: "select",
          options: [
            { label: "Sim - Com Compensação Térmica Automática de Tensão de Flutuação", value: "Sim com compensação" },
            { label: "Não - Tensão de Flutuação Constante sem Sensor", value: "Não" }
          ],
          defaultValue: "Sim com compensação"
        },
        {
          id: "aquecedorAnticondensacao",
          label: "Aquecedor Anticondensação",
          type: "select",
          options: [
            { label: "Sim - Resistência com Termostato e Higrostato Regulável", value: "Sim com termostato" },
            { label: "Não necessário para a instalação", value: "Não" }
          ],
          defaultValue: "Sim com termostato"
        },
        {
          id: "iluminacaoTomadaInterna",
          label: "Iluminação & Tomada de Serviço Interna",
          type: "select",
          options: [
            { label: "Sim - Luminária LED acionada por chave de porta + Tomada 220V", value: "Sim luminaria e tomada" },
            { label: "Não", value: "Não" }
          ],
          defaultValue: "Sim luminaria e tomada"
        },
        {
          id: "corPintura",
          label: "Padrão de Cor e Pintura da Chaparia",
          type: "select",
          options: [
            { label: "Cinza Texturizado Munsell N6.5 (Padrão Petrobras / Concessionárias)", value: "Munsell N6.5" },
            { label: "Cinza Claro RAL 7035 (Padrão Internacional)", value: "RAL 7035" },
            { label: "Padrão Especial do Cliente (Especificar em observações)", value: "Especial" }
          ],
          defaultValue: "Munsell N6.5"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // 2. RETIFICADOR DIGITAL TIRISTORIZADO (DK10 / DK30)
  // --------------------------------------------------------------------------
  "retificador-industrial-tiristorizado-digital-dk10-dk30": {
    slug: "retificador-industrial-tiristorizado-digital-dk10-dk30",
    name: "Retificador Industrial Tiristorizado Digital",
    code: "Modelo DK10 / DK30",
    itemType: "product",
    categoryTitle: "Retificadores & Carregadores",
    summary: "Controle digital microprocessado duplo com IHM Touchscreen WEG colorida e telemetria Modbus-TCP nativa.",
    intermediateFields: [
      {
        id: "tensaoRede",
        label: "Tensão CA da Rede",
        type: "select",
        options: [
          { label: "220V Trifásico", value: "220V Trifásico" },
          { label: "380V Trifásico", value: "380V Trifásico" },
          { label: "440V Trifásico", value: "440V Trifásico" },
          { label: "480V Trifásico", value: "480V Trifásico" }
        ],
        defaultValue: "380V Trifásico"
      },
      {
        id: "tensaoCC",
        label: "Tensão CC Nominal",
        type: "select",
        options: [
          { label: "125 Vcc (Subestações)", value: "125 Vcc" },
          { label: "110 Vcc", value: "110 Vcc" },
          { label: "48 Vcc (Telecom)", value: "48 Vcc" },
          { label: "24 Vcc", value: "24 Vcc" },
          { label: "220 Vcc", value: "220 Vcc" }
        ],
        defaultValue: "125 Vcc"
      },
      {
        id: "correnteSaida",
        label: "Corrente Nominal de Saída (A)",
        type: "select",
        options: [
          { label: "50 A", value: "50 A" },
          { label: "100 A", value: "100 A" },
          { label: "150 A", value: "150 A" },
          { label: "200 A", value: "200 A" },
          { label: "300 A", value: "300 A" },
          { label: "500 A", value: "500 A" },
          { label: "800 A a 2000 A", value: "Alta Corrente (>800A)" }
        ],
        defaultValue: "100 A"
      },
      {
        id: "etapasUDQ",
        label: "Unidade de Diodos de Queda (UDQ)",
        type: "select",
        options: [
          { label: "Sem UDQ", value: "Sem UDQ" },
          { label: "UDQ 1 Etapa Microprocessada", value: "1 Etapa" },
          { label: "UDQ 2 Etapas Microprocessadas", value: "2 Etapas" },
          { label: "UDQ 4 Etapas com Supervisão Digital", value: "4 Etapas" }
        ],
        defaultValue: "2 Etapas"
      },
      {
        id: "ihmTipo",
        label: "Interface Homem-Máquina (IHM)",
        type: "select",
        options: [
          { label: "IHM Touchscreen WEG 7\" Colorida", value: "Touchscreen 7 pol" },
          { label: "IHM Touchscreen WEG 10\" Colorida de Alta Resolução", value: "Touchscreen 10 pol" },
          { label: "Display Gráfico LCD Retroiluminado", value: "Display Grafico" }
        ],
        defaultValue: "Touchscreen 7 pol"
      },
      {
        id: "tipoBateria",
        label: "Tecnologia de Bateria",
        type: "select",
        options: [
          { label: "Chumbo-Ácido Ventilada (VLA)", value: "VLA" },
          { label: "Chumbo-Ácido VRLA (Gel/AGM)", value: "VRLA" },
          { label: "Níquel-Cádmio (Ni-Cd)", value: "Ni-Cd" },
          { label: "Lítio LiFePO4 com Gateway BMS", value: "LiFePO4" }
        ],
        defaultValue: "VLA"
      }
    ],
    advancedConfig: {
      loadTypes: DEFAULT_LOAD_TYPES,
      analogInstruments: DEFAULT_ANALOG_INSTRUMENTS,
      remoteRelays: DEFAULT_REMOTE_RELAYS,
      harmonicFilterOptions: DEFAULT_HARMONIC_FILTERS,
      hasScrMonitoring: true,
      hasEnclosureDimensionLimits: true,
      extraAdvancedFields: [
        {
          id: "protocoloRede",
          label: "Protocolo de Comunicação SCADA",
          type: "select",
          options: [
            { label: "Modbus-RTU RS485 + Modbus-TCP Ethernet (Nativo)", value: "Modbus-RTU e TCP" },
            { label: "Profinet Industrial", value: "Profinet" },
            { label: "IEC 61850 (Automação de Subestações)", value: "IEC 61850" },
            { label: "DNP3 Serial / TCP", value: "DNP3" }
          ],
          defaultValue: "Modbus-RTU e TCP"
        },
        {
          id: "redundanciaControle",
          label: "Arquitetura de Controle",
          type: "select",
          options: [
            { label: "Microprocessador Simples com Watchdog", value: "Simples" },
            { label: "Microprocessamento Duplo Redundante (Standby Ativo)", value: "Duplo Redundante" }
          ],
          defaultValue: "Duplo Redundante"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // 3. RETIFICADOR MODULAR CHAVEADO (DK-SR10 / DK-SR30)
  // --------------------------------------------------------------------------
  "retificador-modular-chaveado-digital-dk-sr10-dk-sr30": {
    slug: "retificador-modular-chaveado-digital-dk-sr10-dk-sr30",
    name: "Retificador Modular Chaveado Digital",
    code: "Modelo DK-SR10 / DK-SR30",
    itemType: "product",
    categoryTitle: "Retificadores & Carregadores",
    summary: "Arquitetura modular chaveada de alta frequência com módulos hot-swap, redundância N+1 e eficiência >95%.",
    intermediateFields: [
      {
        id: "tensaoCC",
        label: "Tensão CC de Saída",
        type: "select",
        options: [
          { label: "48 Vcc (Telecomunicações)", value: "48 Vcc" },
          { label: "125 Vcc (Subestação / Industrial)", value: "125 Vcc" },
          { label: "110 Vcc", value: "110 Vcc" },
          { label: "24 Vcc", value: "24 Vcc" }
        ],
        defaultValue: "125 Vcc"
      },
      {
        id: "correnteTotal",
        label: "Corrente Total Desejada no Sistema (A)",
        type: "select",
        options: [
          { label: "30 A a 60 A", value: "30-60A" },
          { label: "100 A", value: "100A" },
          { label: "150 A", value: "150A" },
          { label: "200 A", value: "200A" },
          { label: "300 A", value: "300A" },
          { label: "500 A+", value: ">500A" }
        ],
        defaultValue: "100A"
      },
      {
        id: "redundanciaModulos",
        label: "Nível de Redundância Modular",
        type: "select",
        options: [
          { label: "Redundância N+1 (1 módulo reserva a quente)", value: "N+1" },
          { label: "Redundância N+2 (2 módulos reserva a quente)", value: "N+2" },
          { label: "Sem redundância (Capacidade nominal estrita)", value: "N+0" }
        ],
        defaultValue: "N+1"
      },
      {
        id: "slotsExpansao",
        label: "Espaço para Expansão Futura",
        type: "select",
        options: [
          { label: "Com gavetas sobressalentes para novos módulos", value: "Com slots livres" },
          { label: "Sub-bastidor 100% preenchido", value: "Sem slots" }
        ],
        defaultValue: "Com slots livres"
      }
    ],
    advancedConfig: {
      loadTypes: DEFAULT_LOAD_TYPES,
      remoteRelays: DEFAULT_REMOTE_RELAYS,
      hasEnclosureDimensionLimits: true,
      extraAdvancedFields: [
        {
          id: "montagemFisica",
          label: "Montagem Mecânica",
          type: "select",
          options: [
            { label: "Sub-bastidor para Rack 19 polegadas existente", value: "Sub-rack 19 pol" },
            { label: "Gabinete Industrial Autoportante DSR Fechado", value: "Gabinete Autoportante" }
          ],
          defaultValue: "Gabinete Autoportante"
        },
        {
          id: "comunicacaoAvancada",
          label: "Comunicação e Supervisão Web",
          type: "select",
          options: [
            { label: "SNMP + Web Browser (HTTP/HTTPS) + Modbus-TCP", value: "SNMP e Web" },
            { label: "Modbus-RTU RS485 apenas", value: "Modbus-RTU" }
          ],
          defaultValue: "SNMP e Web"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // 4. RETIFICADOR FORMADOR DE BATERIAS (DSR-RFB)
  // --------------------------------------------------------------------------
  "retificador-formador-de-baterias": {
    slug: "retificador-formador-de-baterias",
    name: "Retificador Formador de Baterias",
    code: "Modelo DSR-RFB",
    itemType: "product",
    categoryTitle: "Retificadores & Carregadores",
    summary: "Unidade de alta potência para ciclagem, formação inicial e ensaios multiestágio de acumuladores.",
    intermediateFields: [
      {
        id: "tensaoMaxFormacao",
        label: "Tensão Máxima do Ensaio / Formação CC",
        type: "select",
        options: [
          { label: "Até 150 Vcc", value: "150 Vcc" },
          { label: "Até 300 Vcc", value: "300 Vcc" },
          { label: "Até 600 Vcc", value: "600 Vcc" }
        ],
        defaultValue: "300 Vcc"
      },
      {
        id: "correnteFormacao",
        label: "Corrente Máxima de Carga / Descarga",
        type: "select",
        options: [
          { label: "50 A", value: "50 A" },
          { label: "100 A", value: "100 A" },
          { label: "200 A", value: "200 A" },
          { label: "500 A+", value: "500 A" }
        ],
        defaultValue: "100 A"
      },
      {
        id: "circuitosIndependentes",
        label: "Circuitos Independentes de Carga",
        type: "select",
        options: [
          { label: "1 Circuito Individual", value: "1 Circuito" },
          { label: "2 Circuitos Independentes com Controle Separado", value: "2 Circuitos" },
          { label: "4 Circuitos em Paralelo", value: "4 Circuitos" }
        ],
        defaultValue: "1 Circuito"
      }
    ],
    advancedConfig: {
      hasScrMonitoring: true,
      hasEnclosureDimensionLimits: true,
      extraAdvancedFields: [
        {
          id: "curvasParametrizaveis",
          label: "Modos de Carga Programáveis",
          type: "select",
          options: [
            { label: "Curva IU, IUIa, Wa e Pulsada Multiestágio", value: "Multiestagio Completo" },
            { label: "Apenas Corrente Constante e Tensão Constante", value: "CC e CV basico" }
          ],
          defaultValue: "Multiestagio Completo"
        },
        {
          id: "descargaResistiva",
          label: "Módulo de Descarga e Ciclagem Integrado",
          type: "select",
          options: [
            { label: "Sim - Com Banco de Carga Resistivo Interno para Ciclagem Automática", value: "Sim com descarga" },
            { label: "Não - Somente Carga e Formação", value: "Somente Carga" }
          ],
          defaultValue: "Sim com descarga"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // 5. NO-BREAK / UPS INDUSTRIAL (DSR-UPS-IND)
  // --------------------------------------------------------------------------
  "no-break-ups-industrial": {
    slug: "no-break-ups-industrial",
    name: "No-Break / UPS Industrial On-line Dupla Conversão",
    code: "Modelo DSR-UPS-IND",
    itemType: "product",
    categoryTitle: "Sistemas de Energia Ininterrupta & Conversão",
    summary: "UPS industrial on-line dupla conversão para cargas críticas com chave estática e isolação galvânica.",
    intermediateFields: [
      {
        id: "potenciaKVA",
        label: "Potência Nominal (kVA)",
        type: "select",
        options: [
          { label: "5 kVA / 4.5 kW", value: "5 kVA" },
          { label: "10 kVA / 9 kW", value: "10 kVA" },
          { label: "20 kVA / 18 kW", value: "20 kVA" },
          { label: "30 kVA / 27 kW", value: "30 kVA" },
          { label: "60 kVA / 54 kW", value: "60 kVA" },
          { label: "100 kVA / 90 kW", value: "100 kVA" },
          { label: "160 kVA a 300 kVA", value: "Acima de 160 kVA" }
        ],
        defaultValue: "20 kVA"
      },
      {
        id: "tensaoEntradaCA",
        label: "Tensão CA de Entrada",
        type: "select",
        options: [
          { label: "220V Trifásico", value: "220V Trifasico" },
          { label: "380V Trifásico", value: "380V Trifasico" },
          { label: "440V Trifásico", value: "440V Trifasico" }
        ],
        defaultValue: "380V Trifasico"
      },
      {
        id: "tensaoSaidaCA",
        label: "Tensão CA de Saída",
        type: "select",
        options: [
          { label: "120V Monofásico", value: "120V Mono" },
          { label: "220V Monofásico", value: "220V Mono" },
          { label: "220V / 127V Trifásico", value: "220V Trifasico" },
          { label: "380V / 220V Trifásico", value: "380V Trifasico" }
        ],
        defaultValue: "220V Trifasico"
      },
      {
        id: "autonomiaBateria",
        label: "Autonomia de Baterias Desejada",
        type: "select",
        options: [
          { label: "15 Minutos (Tempo para acionamento de Gerador)", value: "15 min" },
          { label: "30 Minutos", value: "30 min" },
          { label: "1 Hora", value: "1 hora" },
          { label: "2 Horas", value: "2 horas" },
          { label: "4 Horas ou Mais (Autonomia Estendida)", value: "4 horas ou mais" },
          { label: "Banco de Baterias Externo já Existente na Planta", value: "Bateria Existente" }
        ],
        defaultValue: "30 min"
      }
    ],
    advancedConfig: {
      loadTypes: DEFAULT_LOAD_TYPES,
      remoteRelays: DEFAULT_REMOTE_RELAYS,
      harmonicFilterOptions: DEFAULT_HARMONIC_FILTERS,
      hasEnclosureDimensionLimits: true,
      extraAdvancedFields: [
        {
          id: "trafoIsolador",
          label: "Transformador Isolador Galvânico",
          type: "select",
          options: [
            { label: "Sim - Na Saída com Isolação Galvânica e Fator K-13", value: "Sim K-13" },
            { label: "Não - UPS sem transformador isolador embutido", value: "Sem trafo" }
          ],
          defaultValue: "Sim K-13"
        },
        {
          id: "paralelismoRedundante",
          label: "Configuração de Redundância",
          type: "select",
          options: [
            { label: "Unitário Simples (Gabinete Único)", value: "Unitario" },
            { label: "Paralelo Ativo N+1 com Compartilhamento de Carga", value: "Paralelo N+1" }
          ],
          defaultValue: "Unitario"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // 6. INVERSOR INDUSTRIAL ESTÁTICO (DSR-INV-IND)
  // --------------------------------------------------------------------------
  "inversor-industrial-estatico": {
    slug: "inversor-industrial-estatico",
    name: "Inversor Industrial Estático CC/CA",
    code: "Modelo DSR-INV-IND",
    itemType: "product",
    categoryTitle: "Sistemas de Energia Ininterrupta & Conversão",
    summary: "Conversor estático CC/CA de alta isolação galvânica a partir de baterias industriais.",
    intermediateFields: [
      {
        id: "tensaoEntradaCC",
        label: "Tensão CC de Entrada (Alimentação)",
        type: "select",
        options: [
          { label: "125 Vcc (Padrão Subestação)", value: "125 Vcc" },
          { label: "110 Vcc", value: "110 Vcc" },
          { label: "48 Vcc (Telecom)", value: "48 Vcc" },
          { label: "24 Vcc", value: "24 Vcc" },
          { label: "220 Vcc", value: "220 Vcc" }
        ],
        defaultValue: "125 Vcc"
      },
      {
        id: "tensaoSaidaCA",
        label: "Tensão CA de Saída",
        type: "select",
        options: [
          { label: "120 Vca Monofásico (60 Hz)", value: "120 Vca" },
          { label: "220 Vca Monofásico (60 Hz)", value: "220 Vca" },
          { label: "220V Trifásico", value: "220V Tri" },
          { label: "380V Trifásico", value: "380V Tri" }
        ],
        defaultValue: "220 Vca"
      },
      {
        id: "potenciaKVA",
        label: "Potência Nominal (kVA)",
        type: "select",
        options: [
          { label: "1 kVA", value: "1 kVA" },
          { label: "2 kVA", value: "2 kVA" },
          { label: "5 kVA", value: "5 kVA" },
          { label: "10 kVA", value: "10 kVA" },
          { label: "15 kVA", value: "15 kVA" },
          { label: "20 kVA a 60 kVA", value: "Alta Potencia" }
        ],
        defaultValue: "5 kVA"
      },
      {
        id: "bypassEstatico",
        label: "Chave Estática de By-pass com a Rede CA",
        type: "select",
        options: [
          { label: "Sim - Comutação rápida em menos de 4ms com rede auxiliar", value: "Com Bypass" },
          { label: "Não - Operação isolada sem comutação", value: "Sem Bypass" }
        ],
        defaultValue: "Com Bypass"
      }
    ],
    advancedConfig: {
      loadTypes: DEFAULT_LOAD_TYPES,
      remoteRelays: DEFAULT_REMOTE_RELAYS,
      hasEnclosureDimensionLimits: true,
      extraAdvancedFields: [
        {
          id: "trafoSaida",
          label: "Transformador Isolador de Saída",
          type: "select",
          options: [
            { label: "Com Transformador Isolador com blindagem eletrostática (THD < 2%)", value: "Com trafo blindado" },
            { label: "Sem transformador isolador", value: "Sem trafo" }
          ],
          defaultValue: "Com trafo blindado"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // 7. CHAVE ESTÁTICA STS (DSR-STS)
  // --------------------------------------------------------------------------
  "chave-estatica-transferencia-automatica": {
    slug: "chave-estatica-transferencia-automatica",
    name: "Chave Estática de Transferência Automática (STS)",
    code: "Modelo DSR-STS",
    itemType: "product",
    categoryTitle: "Sistemas de Energia Ininterrupta & Conversão",
    summary: "Comutador estático de alta velocidade com tecnologia tiristorizada para transferência em < 4 ms.",
    intermediateFields: [
      {
        id: "correnteNominal",
        label: "Corrente Nominal (A)",
        type: "select",
        options: [
          { label: "30 A", value: "30 A" },
          { label: "60 A", value: "60 A" },
          { label: "100 A", value: "100 A" },
          { label: "160 A", value: "160 A" },
          { label: "250 A", value: "250 A" },
          { label: "400 A a 800 A", value: "Acima de 400A" }
        ],
        defaultValue: "100 A"
      },
      {
        id: "tensaoNominal",
        label: "Tensão Nominal de Trabalho",
        type: "select",
        options: [
          { label: "120V Monofásico", value: "120V" },
          { label: "220V Monofásico / Bifásico", value: "220V Mono" },
          { label: "220V Trifásico", value: "220V Tri" },
          { label: "380V Trifásico", value: "380V Tri" }
        ],
        defaultValue: "220V Mono"
      }
    ],
    advancedConfig: {
      remoteRelays: DEFAULT_REMOTE_RELAYS,
      hasEnclosureDimensionLimits: true,
      extraAdvancedFields: [
        {
          id: "comutacaoNeutro",
          label: "Configuração dos Pólos",
          type: "select",
          options: [
            { label: "Tripolar (3P)", value: "3P" },
            { label: "Tetrapolar com Neutro Comutado (4P)", value: "4P" }
          ],
          defaultValue: "3P"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // 8. ESTABILIZADOR ELETRÔNICO ESTADO SÓLIDO (DSR-EST-SS)
  // --------------------------------------------------------------------------
  "estabilizador-eletronico-estado-solido": {
    slug: "estabilizador-eletronico-estado-solido",
    name: "Estabilizador Eletrônico de Estado Sólido",
    code: "Modelo DSR-EST-SS",
    itemType: "product",
    categoryTitle: "Sistemas de Energia Ininterrupta & Conversão",
    summary: "Regulador estático de altíssima velocidade sem partes móveis com regulação tiristorizada sub-ciclo.",
    intermediateFields: [
      {
        id: "potenciaKVA",
        label: "Potência Nominal (kVA)",
        type: "select",
        options: [
          { label: "5 kVA a 15 kVA", value: "5-15 kVA" },
          { label: "30 kVA", value: "30 kVA" },
          { label: "50 kVA", value: "50 kVA" },
          { label: "100 kVA", value: "100 kVA" },
          { label: "250 kVA a 500 kVA", value: "Acima de 250 kVA" }
        ],
        defaultValue: "30 kVA"
      },
      {
        id: "faixaEntrada",
        label: "Faixa de Variação da Rede Suportada",
        type: "select",
        options: [
          { label: "± 15% de variação", value: "+-15%" },
          { label: "± 20% de variação severa", value: "+-20%" },
          { label: "± 30% para redes rurais ou extremas", value: "+-30%" }
        ],
        defaultValue: "+-20%"
      }
    ],
    advancedConfig: {
      hasEnclosureDimensionLimits: true
    }
  },

  // --------------------------------------------------------------------------
  // 9. QUADRO DE DISTRIBUIÇÃO AC/DC DIGITAL (DSR-QD-ACDC)
  // --------------------------------------------------------------------------
  "quadro-distribuicao-ac-dc-digital": {
    slug: "quadro-distribuicao-ac-dc-digital",
    name: "Quadro de Distribuição AC/DC Digital",
    code: "Modelo DSR-QD-ACDC",
    itemType: "product",
    categoryTitle: "Quadros de Distribuição & Paralelismo",
    summary: "Painel de distribuição com supervisão digital individualizada por circuito e telemetria Modbus.",
    intermediateFields: [
      {
        id: "tipoDistribuicao",
        label: "Tipo de Distribuição",
        type: "select",
        options: [
          { label: "Distribuição Exclusiva CC (125Vcc / 48Vcc / 24Vcc)", value: "Distribuicao CC" },
          { label: "Distribuição Mista CA e CC com Barramentos Segregados", value: "Mista CA e CC" },
          { label: "Distribuição Exclusiva CA (380V / 220V)", value: "Distribuicao CA" }
        ],
        defaultValue: "Distribuicao CC"
      },
      {
        id: "quantidadeCircuitos",
        label: "Quantidade de Circuitos Derivados",
        type: "select",
        options: [
          { label: "6 Circuitos com Disjuntores", value: "6 Circuitos" },
          { label: "12 Circuitos com Disjuntores", value: "12 Circuitos" },
          { label: "18 Circuitos com Disjuntores", value: "18 Circuitos" },
          { label: "24 Circuitos com Disjuntores", value: "24 Circuitos" },
          { label: "36 ou mais Circuitos", value: "36+ Circuitos" }
        ],
        defaultValue: "12 Circuitos"
      },
      {
        id: "correnteBarramento",
        label: "Corrente do Barramento Principal",
        type: "select",
        options: [
          { label: "100 A", value: "100 A" },
          { label: "250 A", value: "250 A" },
          { label: "400 A", value: "400 A" },
          { label: "630 A a 1.250 A", value: "Alta Corrente" }
        ],
        defaultValue: "250 A"
      }
    ],
    advancedConfig: {
      hasEnclosureDimensionLimits: true,
      extraAdvancedFields: [
        {
          id: "supervisaoTrip",
          label: "Supervisão Digital de Trip por Circuito",
          type: "select",
          options: [
            { label: "Sim - Módulo Transdutor Digital DSR com tele-alarme individual por disjuntor", value: "Sim supervisao individual" },
            { label: "Contato de trip coletivo (alarme geral de disjuntor)", value: "Trip coletivo" }
          ],
          defaultValue: "Sim supervisao individual"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // 10. QUADRO DE PARALELISMO DC DIGITAL (DSR-QP-DC)
  // --------------------------------------------------------------------------
  "quadro-paralelismo-dc-digital": {
    slug: "quadro-paralelismo-dc-digital",
    name: "Quadro de Paralelismo DC Digital",
    code: "Modelo DSR-QP-DC",
    itemType: "product",
    categoryTitle: "Quadros de Distribuição & Paralelismo",
    summary: "Paralelismo inteligente para fontes e retificadores CC com equalização ativa e desacoplamento.",
    intermediateFields: [
      {
        id: "qtdRetificadores",
        label: "Quantidade de Retificadores a Paralelizar",
        type: "select",
        options: [
          { label: "2 Retificadores em Paralelo Redundante (1+1)", value: "2 Retificadores" },
          { label: "3 Retificadores em Paralelo (2+1)", value: "3 Retificadores" },
          { label: "4 a 6 Retificadores em Paralelo", value: "4 a 6 Retificadores" }
        ],
        defaultValue: "2 Retificadores"
      },
      {
        id: "tensaoNominal",
        label: "Tensão Nominal de Barramento",
        type: "select",
        options: [
          { label: "125 Vcc", value: "125 Vcc" },
          { label: "110 Vcc", value: "110 Vcc" },
          { label: "48 Vcc", value: "48 Vcc" },
          { label: "220 Vcc", value: "220 Vcc" }
        ],
        defaultValue: "125 Vcc"
      },
      {
        id: "correnteTotalBarramento",
        label: "Corrente Total do Barramento (A)",
        type: "select",
        options: [
          { label: "100 A a 250 A", value: "100-250A" },
          { label: "500 A", value: "500A" },
          { label: "1.000 A", value: "1000A" },
          { label: "2.000 A ou mais", value: "2000A+" }
        ],
        defaultValue: "500A"
      }
    ],
    advancedConfig: {
      hasEnclosureDimensionLimits: true
    }
  },

  // ==========================================================================
  // SERVIÇOS ESPECIALIZADOS DSR (7 SERVIÇOS)
  // ==========================================================================

  // --------------------------------------------------------------------------
  // S1. RETROFITTING & MODERNIZAÇÃO
  // --------------------------------------------------------------------------
  "retrofitting-e-modernizacao": {
    slug: "retrofitting-e-modernizacao",
    name: "Retrofitting & Modernização de Painéis",
    code: "SRV-RETROFIT",
    itemType: "service",
    categoryTitle: "Serviços Especializados",
    summary: "Modernização eletrônica completa de retificadores e UPS legados, preservando transformadores e chaparia com economia de até 65%.",
    intermediateFields: [
      {
        id: "equipamentoExistente",
        label: "Tipo de Equipamento a Modernizar",
        type: "select",
        options: [
          { label: "Retificador Industrial Tiristorizado Legado", value: "Retificador Tiristorizado" },
          { label: "Sistema No-Break / UPS Industrial Antigo", value: "No-Break UPS" },
          { label: "Inversor Estático CC/CA", value: "Inversor Estatico" },
          { label: "Painel de Comando e Distribuição de Subestação", value: "Painel de Subestacao" }
        ],
        defaultValue: "Retificador Tiristorizado"
      },
      {
        id: "fabricanteOriginal",
        label: "Fabricante e Modelo do Painel Atual",
        type: "text",
        placeholder: "Ex: WEG, Alstom, Lorenzetti, Chloride, etc.",
        defaultValue: ""
      },
      {
        id: "tensaoCorrenteAtual",
        label: "Tensão e Corrente Atual de Operação",
        type: "text",
        placeholder: "Ex: 125 Vcc / 100 A - Entrada 380Vca",
        defaultValue: "125 Vcc / 100 A"
      },
      {
        id: "janelaParada",
        label: "Janela Estimada de Parada da Planta",
        type: "select",
        options: [
          { label: "Fim de semana (Parada de 24h a 48h)", value: "24h a 48h" },
          { label: "Parada Programada de 5 a 7 dias", value: "5 a 7 dias" },
          { label: "Sem parada (Alimentação contínua via retificador provisório DSR)", value: "Sem Parada (By-pass Provisorio)" }
        ],
        defaultValue: "24h a 48h"
      },
      {
        id: "visitaPrevia",
        label: "Necessidade de Visita Técnica Prévia",
        type: "select",
        options: [
          { label: "Sim - Vistoria in loco para levantamento dimensional e esquemático", value: "Sim Visita In Loco" },
          { label: "Não - Forneceremos diagramas unifilares e fotos do painel", value: "Nao Forneceremos Diagramas" }
        ],
        defaultValue: "Sim Visita In Loco"
      }
    ],
    advancedConfig: {
      hasEnclosureDimensionLimits: true,
      extraAdvancedFields: [
        {
          id: "trocaSemicondutores",
          label: "Substituição de Tiristores e Diodos de Potência",
          type: "select",
          options: [
            { label: "Sim - Troca preventiva de todos os módulos de potência por novos", value: "Sim troca completa" },
            { label: "Manter semicondutores existentes após teste dinâmico", value: "Apenas se reprovados em teste" }
          ],
          defaultValue: "Sim troca completa"
        },
        {
          id: "ihmTouchscreen",
          label: "Digitalização com IHM Touchscreen",
          type: "select",
          options: [
            { label: "Sim - Instalação de IHM Touchscreen WEG colorida na porta", value: "Sim IHM Touch" },
            { label: "Manter instrumentação analógica clássica de ponteiro", value: "Instrumentos Analogicos" }
          ],
          defaultValue: "Sim IHM Touch"
        },
        {
          id: "emissaoART",
          label: "Emissão de ART / CREA",
          type: "select",
          options: [
            { label: "Sim - Inclusa Anotação de Responsabilidade Técnica de Engenharia", value: "Sim com ART" },
            { label: "Não necessária", value: "Sem ART" }
          ],
          defaultValue: "Sim com ART"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // S2. DIGITALIZAÇÃO DE ATIVOS & INDÚSTRIA 4.0
  // --------------------------------------------------------------------------
  "digitalizacao-de-ativos-e-industria-4-0": {
    slug: "digitalizacao-de-ativos-e-industria-4-0",
    name: "Digitalização de Ativos & Indústria 4.0",
    code: "SRV-DIGITAL",
    itemType: "service",
    categoryTitle: "Serviços Especializados",
    summary: "Integração de sensores inteligentes e telemetria industrial em cubículos legados com conexão a SCADA e IoT.",
    intermediateFields: [
      {
        id: "qtdPaineis",
        label: "Quantidade de Painéis / Ativos a Conectar",
        type: "select",
        options: [
          { label: "1 a 3 Painéis", value: "1-3 Paineis" },
          { label: "4 a 10 Painéis", value: "4-10 Paineis" },
          { label: "Mais de 10 Painéis (Projeto Planta Toda)", value: "10+ Paineis" }
        ],
        defaultValue: "1-3 Paineis"
      },
      {
        id: "grandezasInteresse",
        label: "Grandezas a Monitorar",
        type: "select",
        options: [
          { label: "Tensão CC/CA, Corrente e Status de Disjuntores", value: "Tensao, Corrente e Status" },
          { label: "Tensão, Corrente, Temperatura de Barramentos e Harmônicos", value: "Completo com Termometria" },
          { label: "Telemetria de Células de Bateria (BMS)", value: "Foco em Baterias" }
        ],
        defaultValue: "Tensao, Corrente e Status"
      },
      {
        id: "protocoloPlanta",
        label: "Protocolo do SCADA / Supervisório Existente",
        type: "select",
        options: [
          { label: "Modbus-TCP / Modbus-RTU", value: "Modbus" },
          { label: "Profinet / Ethernet/IP", value: "Profinet/EthernetIP" },
          { label: "MQTT / Nuvem IoT", value: "MQTT" },
          { label: "Planta sem supervisório (Necessário Dashboard DSR)", value: "Sem supervisorio" }
        ],
        defaultValue: "Modbus"
      }
    ],
    advancedConfig: {
      extraAdvancedFields: [
        {
          id: "instalacaoEmCampo",
          label: "Escopo de Instalação Física",
          type: "select",
          options: [
            { label: "Turnkey Completo (Fornecimento de módulos + cabeamento + parametrização em campo)", value: "Turnkey Completo" },
            { label: "Apenas fornecimento dos módulos configurados e apoio remoto", value: "Fornecimento com apoio" }
          ],
          defaultValue: "Turnkey Completo"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // S3. MANUTENÇÃO PREVENTIVA INDUSTRIAL
  // --------------------------------------------------------------------------
  "manutencao-preventiva-industrial": {
    slug: "manutencao-preventiva-industrial",
    name: "Manutenção Preventiva Industrial",
    code: "SRV-PREV",
    itemType: "service",
    categoryTitle: "Serviços Especializados",
    summary: "Inspeção sistemática com termografia infravermelha, análise de ripple, teste de semicondutores e laudo conclusivo com ART.",
    intermediateFields: [
      {
        id: "qtdEquipamentos",
        label: "Quantidade de Painéis / Retificadores",
        type: "select",
        options: [
          { label: "1 a 2 Equipamentos", value: "1-2" },
          { label: "3 a 5 Equipamentos", value: "3-5" },
          { label: "6 a 10 Equipamentos", value: "6-10" },
          { label: "Mais de 10 Equipamentos (Subestação Completa)", value: "10+" }
        ],
        defaultValue: "1-2"
      },
      {
        id: "periodicidade",
        label: "Periodicidade Desejada",
        type: "select",
        options: [
          { label: "Atendimento Pontual / Avulso", value: "Pontual Avulso" },
          { label: "Contrato Semestral de Manutenção", value: "Semestral" },
          { label: "Contrato Anual com Plantão 24/7", value: "Anual com Plantao" }
        ],
        defaultValue: "Pontual Avulso"
      },
      {
        id: "cidadeEstadoPlanta",
        label: "Localização da Subestação / Fábrica",
        type: "text",
        placeholder: "Ex: Paulínia/SP, Santos/SP, Belo Horizonte/MG...",
        defaultValue: ""
      }
    ],
    advancedConfig: {
      extraAdvancedFields: [
        {
          id: "ensaioRippleTermografia",
          label: "Ensaios Instrumentados Inclusos",
          type: "select",
          options: [
            { label: "Completo: Termografia Calibrada + Osciloscópio Ripple CC + Teste de Impedância de Baterias", value: "Completo" },
            { label: "Básico: Inspeção visual, reaperto torquimétrico e limpeza dielétrica", value: "Basico" }
          ],
          defaultValue: "Completo"
        },
        {
          id: "bancoCargaDescarga",
          label: "Teste com Banco de Carga Resistivo",
          type: "select",
          options: [
            { label: "Sim - Ensaio de autonomia real da bateria sob carga nominal", value: "Sim com banco de carga" },
            { label: "Não necessário no momento", value: "Nao" }
          ],
          defaultValue: "Sim com banco de carga"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // S4. MANUTENÇÃO CORRETIVA & PLANTÃO 24/7
  // --------------------------------------------------------------------------
  "manutencao-corretiva-e-plantao-24-7": {
    slug: "manutencao-corretiva-e-plantao-24-7",
    name: "Manutenção Corretiva & Plantão 24/7",
    code: "SRV-CORRETIVA",
    itemType: "service",
    categoryTitle: "Serviços Especializados",
    summary: "Atendimento emergencial de alta prioridade com mobilização rápida de especialistas em eletrônica de potência.",
    intermediateFields: [
      {
        id: "urgencia",
        label: "Nível de Urgência Operacional",
        type: "select",
        options: [
          { label: "EMERGÊNCIA MÁXIMA: Planta ou linha parada com carga desenergizada", value: "Emergencia Maxima" },
          { label: "ALTA: Operando em modo contingência / By-pass temporário", value: "Alta Contingencia" },
          { label: "PROGRAMADA: Falha diagnosticada para correção em até 48 horas", value: "Programada 48h" }
        ],
        defaultValue: "Alta Contingencia"
      },
      {
        id: "sintomaFalha",
        label: "Sintoma ou Código de Alarme Apresentado",
        type: "text",
        placeholder: "Ex: Disparo de fusível ultrarrápido, cheiro de queimado, sem tensão de saída, alarme de sobretensão...",
        defaultValue: ""
      },
      {
        id: "dadosEquipamento",
        label: "Dados do Equipamento com Falha",
        type: "text",
        placeholder: "Fabricante, modelo e potência aproximada",
        defaultValue: ""
      }
    ],
    advancedConfig: {
      extraAdvancedFields: [
        {
          id: "estoqueSobressalentes",
          label: "Necessidade de Peças Sobressalentes Imediatas",
          type: "select",
          options: [
            { label: "Sim - Mobilizar engenheiro com módulos tiristores, diodos e placas sobressalentes", value: "Com pecas sobressalentes" },
            { label: "Apenas diagnóstico e laudo para reparo posterior", value: "Apenas diagnostico" }
          ],
          defaultValue: "Com pecas sobressalentes"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // S5. TREINAMENTO TÉCNICO & CAPACITAÇÃO
  // --------------------------------------------------------------------------
  "treinamento-tecnico-e-capacitacao": {
    slug: "treinamento-tecnico-e-capacitacao",
    name: "Treinamento Técnico & Capacitação de Equipes",
    code: "SRV-TREINA",
    itemType: "service",
    categoryTitle: "Serviços Especializados",
    summary: "Capacitação prática em eletrônica de potência, manobra segura em UDQ e interpretação de alarmes com certificado.",
    intermediateFields: [
      {
        id: "qtdParticipantes",
        label: "Número de Participantes Previsto",
        type: "select",
        options: [
          { label: "Turma Reduzida (1 a 5 profissionais)", value: "1-5 pessoas" },
          { label: "Turma Média (6 a 12 profissionais)", value: "6-12 pessoas" },
          { label: "Turma Ampla (Mais de 12 profissionais)", value: "12+ pessoas" }
        ],
        defaultValue: "1-5 pessoas"
      },
      {
        id: "localTreinamento",
        label: "Modalidade e Local",
        type: "select",
        options: [
          { label: "In Company (Nas instalações da fábrica/subestação do cliente)", value: "In Company" },
          { label: "Centro Tecnológico DSR Soluções", value: "Centro DSR" },
          { label: "Treinamento Remoto Híbrido ao Vivo", value: "Remoto Hibrido" }
        ],
        defaultValue: "In Company"
      },
      {
        id: "cargaHoraria",
        label: "Carga Horária Desejada",
        type: "select",
        options: [
          { label: "8 Horas (Imersão de 1 Dia)", value: "8 horas" },
          { label: "16 Horas (Curso Completo em 2 Dias)", value: "16 horas" },
          { label: "24 Horas (Teórico e Prático Intensivo em 3 Dias)", value: "24 horas" }
        ],
        defaultValue: "16 horas"
      }
    ],
    advancedConfig: {
      extraAdvancedFields: [
        {
          id: "perfilAlunos",
          label: "Público-Alvo Principal",
          type: "select",
          options: [
            { label: "Eletrotécnicos e Operadores de Subestação", value: "Eletrotecnicos e Operadores" },
            { label: "Engenheiros Eletricistas e de Manutenção", value: "Engenheiros" },
            { label: "Equipe Mista (Operação + Engenharia)", value: "Mista" }
          ],
          defaultValue: "Eletrotecnicos e Operadores"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // S6. COMISSIONAMENTO & STARTUP EM CAMPO
  // --------------------------------------------------------------------------
  "comissionamento-e-startup-em-campo": {
    slug: "comissionamento-e-startup-em-campo",
    name: "Comissionamento & Startup em Campo",
    code: "SRV-STARTUP",
    itemType: "service",
    categoryTitle: "Serviços Especializados",
    summary: "Testes sob carga, verificação de polaridade, calibração de malhas de regulação e entrega técnica assistida.",
    intermediateFields: [
      {
        id: "escopoStartup",
        label: "Escopo da Instalação",
        type: "select",
        options: [
          { label: "Equipamento Novo Fabricado pela DSR", value: "Equipamento Novo DSR" },
          { label: "Equipamento Retrofitado ou Reformado", value: "Equipamento Retrofitado" },
          { label: "Comissionamento de Sistema de Terceiros", value: "Sistema de Terceiros" }
        ],
        defaultValue: "Equipamento Novo DSR"
      },
      {
        id: "necessidadeBancoCarga",
        label: "Banco de Carga Resistivo DSR",
        type: "select",
        options: [
          { label: "Sim - Mobilizar banco de carga DSR para ensaio de queima sob 100% de corrente", value: "Sim Banco DSR" },
          { label: "Não - Ensaio com a carga real da fábrica", value: "Carga Real" }
        ],
        defaultValue: "Sim Banco DSR"
      },
      {
        id: "previsaoData",
        label: "Previsão Estimada para Energização",
        type: "text",
        placeholder: "Ex: Próximo mês, janela da parada de julho...",
        defaultValue: ""
      }
    ],
    advancedConfig: {
      extraAdvancedFields: [
        {
          id: "ensaioAutonomiaBaterias",
          label: "Ensaio Formal de Autonomia de Baterias",
          type: "select",
          options: [
            { label: "Sim - Com curva de descarga e medição individual de elementos", value: "Sim com curva" },
            { label: "Apenas teste de passagem de corrente", value: "Apenas teste rapido" }
          ],
          defaultValue: "Sim com curva"
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // S7. CONSULTORIA EM ENGENHARIA & PROJETOS ESPECIAIS
  // --------------------------------------------------------------------------
  "consultoria-em-engenharia-e-projetos-especiais": {
    slug: "consultoria-em-engenharia-e-projetos-especiais",
    name: "Consultoria em Engenharia & Projetos Especiais",
    code: "SRV-CONSULT",
    itemType: "service",
    categoryTitle: "Serviços Especializados",
    summary: "Estudos de harmônicas, cálculo de seletividade, memorial de dimensionamento de bancos e adequação a normas.",
    intermediateFields: [
      {
        id: "tipoEstudo",
        label: "Tipo de Estudo / Consultoria Requerida",
        type: "select",
        options: [
          { label: "Estudo de Qualidade de Energia, Harmônicas e Fator de Potência", value: "Qualidade e Harmonicas" },
          { label: "Dimensionamento e Memorial Descritivo de Retificador e Baterias", value: "Dimensionamento e Memorial" },
          { label: "Estudo de Seletividade e Curto-Circuito em Barramentos CC", value: "Seletividade e Curto CC" },
          { label: "Parecer Técnico de Falha Catastrófica (Perícia de Engenharia)", value: "Pericia Tecnica" },
          { label: "Adequação a Normas Técnicas (NR-10, IEEE 946, IEC 60146)", value: "Adequacao Normativa" }
        ],
        defaultValue: "Qualidade e Harmonicas"
      },
      {
        id: "finalidadeEstudo",
        label: "Finalidade do Trabalho",
        type: "select",
        options: [
          { label: "Adequação a Exigência de Concessionária de Energia", value: "Concessionaria" },
          { label: "Projeto de Expansão de Planta Industrial", value: "Expansao Fabril" },
          { label: "Resolução de Queima Recorrente de Equipamentos", value: "Resolucao de Falhas" }
        ],
        defaultValue: "Expansao Fabril"
      }
    ],
    advancedConfig: {
      extraAdvancedFields: [
        {
          id: "medicaoCampo",
          label: "Medições em Campo com Analisador Classe A",
          type: "select",
          options: [
            { label: "Sim - Campanhas de medição in loco de 7 dias com registro contínuo", value: "Campanha 7 dias" },
            { label: "Não - Estudo com base em dados de projeto e histórico fornecido", value: "Dados de projeto" }
          ],
          defaultValue: "Campanha 7 dias"
        }
      ]
    }
  }
};

// ============================================================================
// CONFIGURAÇÃO GENÉRICA PADRÃO (FALLBACK INTELIGENTE)
// ============================================================================
function getFallbackConfig(slug: string, itemType: "product" | "service" = "product"): QuoteConfigItem {
  const isService = itemType === "service" || slug.startsWith("srv-") || slug.includes("servico") || slug.includes("manutencao");
  
  if (isService) {
    return {
      slug,
      name: "Serviço Especializado de Engenharia",
      code: "SRV-DSR",
      itemType: "service",
      categoryTitle: "Serviços Especializados",
      summary: "Serviços de engenharia de campo, manutenção e consultoria prestados por especialistas da DSR.",
      intermediateFields: [
        {
          id: "escopoServico",
          label: "Escopo Principal Desejado",
          type: "select",
          options: [
            { label: "Modernização / Retrofit de Equipamento", value: "Retrofit" },
            { label: "Manutenção Preventiva ou Corretiva", value: "Manutencao" },
            { label: "Comissionamento e Startup", value: "Comissionamento" },
            { label: "Consultoria e Laudos Técnicos", value: "Consultoria" }
          ],
          defaultValue: "Retrofit"
        },
        {
          id: "localInstalacao",
          label: "Cidade e Estado da Instalação",
          type: "text",
          placeholder: "Ex: Paulínia/SP",
          defaultValue: ""
        },
        {
          id: "prazoDesejado",
          label: "Prazo Desejado de Atendimento",
          type: "select",
          options: [
            { label: "Imediato / Urgente (Até 48 horas)", value: "Urgente" },
            { label: "Programado (Em até 30 dias)", value: "Programado" },
            { label: "Levantamento Orçamentário", value: "Orcamento" }
          ],
          defaultValue: "Programado"
        }
      ],
      advancedConfig: {
        extraAdvancedFields: [
          {
            id: "emissaoART",
            label: "Emissão de ART / CREA",
            type: "select",
            options: [
              { label: "Sim - Inclusa Anotação de Responsabilidade Técnica", value: "Sim com ART" },
              { label: "Não", value: "Nao" }
            ],
            defaultValue: "Sim com ART"
          }
        ]
      }
    };
  }

  // Produto Genérico
  return {
    slug,
    name: "Equipamento Industrial DSR",
    code: "DSR-IND",
    itemType: "product",
    categoryTitle: "Equipamentos Industriais",
    summary: "Equipamento robusto para operação contínua 24/7 em ambientes industriais e subestações.",
    intermediateFields: [
      {
        id: "tensaoAlimentacao",
        label: "Tensão de Alimentação da Rede",
        type: "select",
        options: [
          { label: "220V Trifásico", value: "220V Trifasico" },
          { label: "380V Trifásico", value: "380V Trifasico" },
          { label: "440V Trifásico", value: "440V Trifasico" },
          { label: "127V / 220V Monofásico", value: "Monofasico" }
        ],
        defaultValue: "380V Trifasico"
      },
      {
        id: "capacidadeNominal",
        label: "Capacidade / Corrente Estimada",
        type: "text",
        placeholder: "Ex: 100A, 50kVA, etc.",
        defaultValue: ""
      },
      {
        id: "grauIP",
        label: "Grau de Proteção Mecânica",
        type: "select",
        options: [
          { label: "IP20 (Padrão Sala Elétrica)", value: "IP20" },
          { label: "IP21 (Com Pingadeira)", value: "IP21" },
          { label: "IP42 (Com Ventilação Filtrada)", value: "IP42" },
          { label: "IP54 (Industrial Severo)", value: "IP54" }
        ],
        defaultValue: "IP21"
      }
    ],
    advancedConfig: {
      loadTypes: DEFAULT_LOAD_TYPES,
      remoteRelays: DEFAULT_REMOTE_RELAYS,
      hasEnclosureDimensionLimits: true
    }
  };
}

// ============================================================================
// FUNÇÃO EXPORTADA: BUSCA A CONFIGURAÇÃO DE UM PRODUTO OU SERVIÇO
// ============================================================================
export function getQuoteItemConfig(
  slug: string, 
  itemType: "product" | "service" = "product",
  nameFallback?: string,
  codeFallback?: string
): QuoteConfigItem {
  const normalizedSlug = (slug || "").toLowerCase().trim();
  const configured = QUOTE_CONFIGS[normalizedSlug];

  if (configured) {
    const fallback = getFallbackConfig(normalizedSlug, configured.itemType || itemType);
    return {
      slug: configured.slug || normalizedSlug,
      name: nameFallback || configured.name || fallback.name,
      code: codeFallback || configured.code || fallback.code,
      itemType: configured.itemType || fallback.itemType,
      categoryTitle: configured.categoryTitle || fallback.categoryTitle,
      summary: configured.summary || fallback.summary,
      intermediateFields: configured.intermediateFields || fallback.intermediateFields,
      advancedConfig: {
        loadTypes: configured.advancedConfig?.loadTypes || fallback.advancedConfig.loadTypes,
        analogInstruments: configured.advancedConfig?.analogInstruments || fallback.advancedConfig.analogInstruments,
        remoteRelays: configured.advancedConfig?.remoteRelays || fallback.advancedConfig.remoteRelays,
        harmonicFilterOptions: configured.advancedConfig?.harmonicFilterOptions || fallback.advancedConfig.harmonicFilterOptions,
        hasScrMonitoring: configured.advancedConfig?.hasScrMonitoring ?? fallback.advancedConfig.hasScrMonitoring,
        hasEnclosureDimensionLimits: configured.advancedConfig?.hasEnclosureDimensionLimits ?? fallback.advancedConfig.hasEnclosureDimensionLimits,
        extraAdvancedFields: configured.advancedConfig?.extraAdvancedFields || fallback.advancedConfig.extraAdvancedFields,
      }
    };
  }

  // Se não encontrar configuração direta, gera fallback e sobrepõe com nomes passados
  const fallback = getFallbackConfig(normalizedSlug, itemType);
  if (nameFallback) fallback.name = nameFallback;
  if (codeFallback) fallback.code = codeFallback;
  return fallback;
}

// ============================================================================
// BUSCADOR AUTOMÁTICO DE CEP (VIACEP API)
// ============================================================================
export interface CepResult {
  sucesso: boolean;
  logradouro?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  pais?: string;
  mensagem?: string;
}

export async function searchAddressByCep(rawCep: string): Promise<CepResult> {
  const clean = rawCep.replace(/\D/g, "");
  if (clean.length !== 8) {
    return { sucesso: false, mensagem: "O CEP deve possuir exatamente 8 dígitos." };
  }

  try {
    const res = await fetch(`https://viacep.com.br/ws/${clean}/json/`, {
      method: "GET",
      headers: { Accept: "application/json" }
    });

    if (!res.ok) {
      return { sucesso: false, mensagem: "Serviço de busca de CEP temporariamente indisponível." };
    }

    const data = await res.json();
    if (data.erro === true || data.erro === "true") {
      return { sucesso: false, mensagem: "CEP não encontrado na base oficial dos Correios." };
    }

    return {
      sucesso: true,
      logradouro: data.logradouro || "",
      bairro: data.bairro || "",
      cidade: data.localidade || "",
      estado: data.uf || "",
      pais: "Brasil",
      mensagem: "Endereço localizado automaticamente!"
    };
  } catch {
    return { sucesso: false, mensagem: "Falha de rede ao consultar o serviço ViaCEP." };
  }
}
