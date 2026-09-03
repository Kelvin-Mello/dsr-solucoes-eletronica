export interface ServiceMethodologyStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  iconName: "Wrench" | "Cpu" | "ShieldCheck" | "Activity" | "GraduationCap" | "CheckCircle2" | "Compass";
  description: string;
  detailedDescription: string;
  benefits: string[];
  applications: string;
  equipmentCovered: string[];
  deliverables: string[];
  standards: string[];
  imageUrl: string;
}

export const SERVICES_MOCK: ServiceItem[] = [
  {
    id: "serv-retrofitting",
    slug: "retrofitting-e-modernizacao",
    title: "Retrofitting & Modernização",
    subtitle: "Retificadores, Inversores, No-Break / UPS e Estabilizadores",
    badge: "Economia de até 65%",
    iconName: "Wrench",
    description:
      "A modernização eletrônica (retrofit) substitui placas analógicas antigas, circuitos descontinuados e instrumentos obsoletos por eletrônica digital moderna com IHM touchscreen e rede Modbus/Profinet, mantendo os transformadores de força, cubículos e barramentos de cobre originais.",
    detailedDescription:
      "Projetos de retrofitting desenvolvidos pela DSR Soluções permitem estender a vida útil de ativos elétricos de grande porte por mais 15 a 20 anos, com fração do custo de um equipamento novo. Nossos engenheiros realizam o mapeamento mecânico e elétrico completo do cubículo existente, projetando um kit plug-and-play sob medida que é instalado durante janelas de parada programada de 24h a 48h, eliminando a necessidade de corte de cabos e alterações na alvenaria ou infraestrutura civil.",
    benefits: [
      "Economia de até 65% em relação à substituição por cubículo novo",
      "Sem necessidade de obras civis ou corte de barramentos principais",
      "Redução drástica do MTTR com módulos eletrônicos de reposição universais",
      "Elevação drástica do MTBF com eliminação de fiações volantes e relés obsoletos",
      "Inclusão imediata de telemetria digital Modbus-RTU/TCP e IHM intuitiva",
      "Garantia de fábrica de até 24 meses sobre o conjunto modernizado"
    ],
    applications: "Retificadores industriais tiristorizados obsoletos, no-breaks de alta potência, inversores de fornos de indução e estabilizadores de tensão com escovas.",
    equipmentCovered: [
      "Retificadores Industriais Monofásicos e Trifásicos (02 a 24 pulsos)",
      "Inversores Estáticos Industriais CC/CA",
      "Sistemas No-Break / UPS de Grande Porte",
      "Estabilizadores Eletrônicos e Eletromecânicos",
      "Chaves Estáticas de Transferência Automática"
    ],
    deliverables: [
      "Projeto executivo mecânico e elétrico em CAD/EPLAN",
      "Diagramas unifilares e trifilares atualizados",
      "Kits de eletrônica digital com chicotes identificados",
      "Comissionamento assistido em carga plena",
      "Anotação de Responsabilidade Técnica (ART/CREA)",
      "Manual de operação e manutenção atualizado"
    ],
    standards: ["NR-10", "NR-12", "IEC 60146", "IEC 61439", "ISO 9001"],
    imageUrl: "/images/categories/cat-energia-ininterrupta.jpg"
  },
  {
    id: "serv-digitalizacao",
    slug: "digitalizacao-de-ativos-e-industria-4-0",
    title: "Digitalização de Ativos & Indústria 4.0",
    subtitle: "Quadros de Distribuição, Motores, Transformadores e Subestações",
    badge: "Telemetria Conectada",
    iconName: "Cpu",
    description:
      "Transformação de painéis eletromecânicos legados em nós de dados inteligentes. Instalamos módulos transdutores digitais de tensão, corrente, temperatura e concentradores de entradas digitais comunicando diretamente via Modbus-RTU/TCP, Profinet ou Ethernet/IP.",
    detailedDescription:
      "A digitalização industrial da DSR conecta equipamentos analógicos legados diretamente aos sistemas de supervisão SCADA, historiadores de dados e plataformas de nuvem corporativas. Com amostragem True RMS e telemetria contínua, os operadores passam a ter visibilidade instantânea de sobrecargas térmicas em barramentos, afundamentos de tensão e disparo de proteções com carimbo de milissegundos.",
    benefits: [
      "Supervisão em tempo real de consumo (kWh), demanda (kW) e fator de potência",
      "Detecção precoce de anomalias térmicas e sobrecargas em barramentos",
      "Integração direta com softwares SCADA, CLPs centrais e nuvem industrial",
      "Histórico digital de eventos com data e hora de disparos de disjuntores",
      "Redução de custos com rondas presenciais em subestações isoladas"
    ],
    applications: "Quadros gerais de baixa e média tensão (QGBT), CCMs de motores críticos, transformadores de potência e salas de baterias.",
    equipmentCovered: [
      "Quadros Gerais de Baixa Tensão (QGBT)",
      "Centros de Controle de Motores (CCM)",
      "Cabines Primárias e Subestações de Entrada",
      "Transformadores a Óleo e a Seco",
      "Bancos de Acumuladores e Barramentos CC"
    ],
    deliverables: [
      "Instalação e parametrização de módulos de telemetria DIN",
      "Mapeamento completo de mapa de registradores Modbus",
      "Telas sinópticas prontas para integração ao SCADA",
      "Relatório de conectividade e validação de tráfego de rede",
      "Treinamento operacional para operadores de sala de controle"
    ],
    standards: ["NR-10", "IEC 61850", "IEEE 802.3", "Modbus IDA", "ISO 9001"],
    imageUrl: "/images/categories/cat-modulos-digitalizacao.jpg"
  },
  {
    id: "serv-manutencao-preventiva",
    slug: "manutencao-preventiva-industrial",
    title: "Manutenção Preventiva Industrial",
    subtitle: "Inspeção Preditiva, Termografia e Ensaios Periódicos",
    badge: "Máxima Disponibilidade",
    iconName: "ShieldCheck",
    description:
      "Planos estruturados de manutenção preventiva com inspeções termográficas por infravermelho, reaperto torquimétrico de conexões, limpeza especializada, ensaios de capacitores e baterias e calibração de instrumentos.",
    detailedDescription:
      "A manutenção preventiva programada é o pilar fundamental para evitar perdas financeiras milionárias causadas por paradas não programadas em indústrias de processo contínuo. Nossos técnicos utilizam câmeras termográficas calibradas, medidores de ESR para capacitores de potência e analisadores de baterias, identificando pontos quentes e componentes em início de degradação muito antes de qualquer interrupção.",
    benefits: [
      "Eliminação de paradas não programadas em processos contínuos 24/7",
      "Emissão de laudos técnicos conclusivos com imagens termográficas",
      "Aferição periódica de ripple CC, tensão de flutuação e fuga a terra",
      "Substituição planejada de ventiladores e capacitores em fim de vida útil",
      "Conformidade com auditorias de seguradoras e normas NR-10 e NR-12"
    ],
    applications: "Siderúrgicas, plantas químicas, papel & celulose, mineradoras, data centers e concessionárias de transmissão.",
    equipmentCovered: [
      "Retificadores e Carregadores de Bateria Industriais",
      "Bancos de Baterias Chumbo-Ácido e Níquel-Cádmio",
      "Sistemas UPS / No-break Estáticos e Dinâmicos",
      "Quadros Elétricos de Distribuição e Força",
      "Filtros Harmônicos e Bancos de Capacitores"
    ],
    deliverables: [
      "Laudo Termográfico Detalhado com registro fotográfico",
      "Relatório de Ensaio de Capacitância e ESR",
      "Boletim de medição de impedância vaso a vaso de baterias",
      "Checklist assinado por Engenheiro Eletricista com ART",
      "Recomendações técnicas de substituição preventiva"
    ],
    standards: ["NR-10", "ABNT NBR 5410", "ABNT NBR 14039", "IEEE 1188", "ISO 9001"],
    imageUrl: "/images/categories/cat-supervisao-sensores.jpg"
  },
  {
    id: "serv-manutencao-corretiva",
    slug: "manutencao-corretiva-e-plantao-24-7",
    title: "Manutenção Corretiva & Plantão 24/7",
    subtitle: "Diagnóstico Rápido e Reparo Especializado em Campo",
    badge: "Atendimento Emergencial",
    iconName: "Activity",
    description:
      "Equipe móvel de engenheiros e técnicos seniores de plantão para resposta rápida em caso de falha de sistemas de retificação, inversores ou no-breaks industriais, com estoque local de peças sobressalentes e semicondutores de potência.",
    detailedDescription:
      "Quando uma falha ocorre na linha de produção, cada minuto de inatividade custa milhares de reais. O serviço de manutenção corretiva da DSR opera com canal direto de engenharia de plantão. Nossos especialistas deslocam-se até a planta com instrumentação de ponta (osciloscópios isolados, fontes de teste portáteis) e módulos de reposição em estoque para diagnóstico cirúrgico da causa raiz e reparo imediato.",
    benefits: [
      "Canal de plantão direto com engenheiros: (11) 4564-5200 e WhatsApp (11) 98038-9729",
      "Diagnóstico avançado de falhas com osciloscopia digital em tempo real",
      "Substituição ágil de semicondutores (tiristores, diodos, IGBTs) e placas de controle",
      "Estoque de peças de reposição nacionais para rápido restabelecimento",
      "Relatório pós-incidente com análise de causa raiz (RCA)"
    ],
    applications: "Qualquer falha elétrica ou travamento de retificadores, inversores, chaves de transferência ou quadros elétricos.",
    equipmentCovered: [
      "Pontes Tiristorizadas de Potência",
      "Módulos Eletrônicos de Disparo e Controle",
      "Sistemas de Refrigeração Forçada de Cubículos",
      "Contatores, Fusíveis Ultrarrápidos e Disjuntores",
      "Sistemas de Supervisão e Alarmes"
    ],
    deliverables: [
      "Diagnóstico emergencial em campo",
      "Substituição de componentes danificados com teste funcional",
      "Restabelecimento assistido da carga crítica",
      "Relatório Técnico de Intervenção com fotos do defeito",
      "Emissão de ART para o serviço executado"
    ],
    standards: ["NR-10", "NR-12", "IEC 60146", "ISO 9001"],
    imageUrl: "/images/categories/cat-qualidade-energia.jpg"
  },
  {
    id: "serv-treinamento",
    slug: "treinamento-tecnico-e-capacitacao",
    title: "Treinamento Técnico & Capacitação",
    subtitle: "Operação e Manutenção para Equipes de Fábrica",
    badge: "Certificação DSR",
    iconName: "GraduationCap",
    description:
      "Capacitação prática e teórica in company para operadores, eletricistas e engenheiros de manutenção dos clientes, cobrindo o funcionamento de retificadores, inversores, parametrização de IHM, interpretação de alarmes e segurança elétrica.",
    detailedDescription:
      "Treinar a equipe interna de manutenção é o investimento mais eficaz para prolongar a vida útil dos equipamentos de potência e reduzir o tempo de resposta a alarmes. Nossos cursos são ministrados diretamente pelos engenheiros de desenvolvimento da DSR e combinam fundamentos teóricos com aulas práticas no próprio painel instalado na fábrica do cliente.",
    benefits: [
      "Aulas ministradas por engenheiros desenvolvedores da tecnologia",
      "Treinamento prático de simulação de falhas e procedimentos de emergência",
      "Interpretação detalhada de códigos de alarme e histórico de eventos da IHM",
      "Material didático completo com diagramas elétricos comentados",
      "Emissão de certificado individual de capacitação técnica em conformidade NR-10"
    ],
    applications: "Equipes de engenharia de manutenção, operadores de subestação, eletrotécnicos e profissionais de automação.",
    equipmentCovered: [
      "Retificadores Industriais Modelo RIT-D, DK10 e DK30",
      "Módulos de Controle UDQ e Fontes Auxiliares Chaveadas",
      "Sistemas No-Break e Chaves Estáticas STS",
      "Interfaces Homem-Máquina (IHM) e Comunicação Modbus",
      "Procedimentos de Segurança em Barramentos CC de Alta Energia"
    ],
    deliverables: [
      "Apostila técnica completa ilustrada",
      "Apresentações e guias rápidos de consulta para fixação em painel",
      "Simulações práticas de manobra e contingência",
      "Avaliação de conhecimento e emissão de certificados",
      "Registro de treinamento para atendimento a auditorias de segurança"
    ],
    standards: ["NR-10", "NR-12", "MTE", "ISO 9001"],
    imageUrl: "/images/categories/cat-retificadores.jpg"
  },
  {
    id: "serv-comissionamento",
    slug: "comissionamento-e-startup-em-campo",
    title: "Comissionamento & Startup em Campo",
    subtitle: "Testes em Carga, Parametrização e Entrega Técnica Assistida",
    badge: "Partida Segura",
    iconName: "CheckCircle2",
    description:
      "Procedimentos rigorosos de inicialização, conferência de fiação, testes de isolação dielétrica, ensaios sob carga plena com banco de carga eletrônica resistiva e parametrização sob medida para a planta.",
    detailedDescription:
      "O comissionamento profissional assegura que o sistema elétrico operará estritamente dentro das especificações de projeto antes de assumir a carga operacional da fábrica. A DSR realiza testes dinâmicos de resposta a degraus de carga, verificação de tempos de transferência em milissegundos e calibração de todos os transdutores com instrumentos aferidos por laboratórios acreditados pela RBC/Inmetro.",
    benefits: [
      "Ensaios de capacidade real de baterias com banco de carga eletrônica dedicada",
      "Verificação de resposta dinâmica a degraus de carga e rejeição de transitórios",
      "Ajuste fino de thresholds de alarme de acordo com as necessidades operacionais",
      "Integração e testes de comunicação com o sistema supervisório da planta",
      "Emissão de Termo de Entrega Técnica e ART de Comissionamento"
    ],
    applications: "Novas instalações elétricas, ampliações de plantas industriais e entrega de projetos de modernização.",
    equipmentCovered: [
      "Sistemas Retificadores e Carregadores de Bateria Novos ou Retrofitados",
      "Bancos de Acumuladores Estacionários Industriais",
      "Painéis de Distribuição CC e CA e Quadros de Paralelismo",
      "No-breaks Industriais e Conversores Estáticos",
      "Transdutores de Telemetria e Medidores de Qualidade de Energia"
    ],
    deliverables: [
      "Protocolo de Comissionamento e Startup assinado",
      "Curvas de ensaio sob carga e gráficos de descarga de bateria",
      "Relatório de conferência de parametrização de software/firmware",
      "Lista de conferência (Checklist) mecânica e elétrica de interligações",
      "Anotação de Responsabilidade Técnica (ART/CREA) de Comissionamento"
    ],
    standards: ["NR-10", "IEC 60146", "IEC 61439", "IEEE 450/1188", "ISO 9001"],
    imageUrl: "/images/categories/cat-quadros-distribuicao.jpg"
  },
  {
    id: "serv-consultoria",
    slug: "consultoria-em-engenharia-e-projetos-especiais",
    title: "Consultoria em Engenharia & Projetos Especiais",
    subtitle: "Estudos de Qualidade de Energia, Harmônicas e Dimensionamento",
    badge: "Engenharia Sênior",
    iconName: "Compass",
    description:
      "Estudos aprofundados de qualidade de energia elétrica (análise de harmônicas conforme IEEE 519 e PRODIST), dimensionamento de sistemas de retificação para cargas especiais e assessoria para especificação de editais e compras técnicas.",
    detailedDescription:
      "Nossa equipe de engenharia sênior presta suporte consultivo para diagnósticos complexos de engenharia elétrica: queima repetitiva inexplicável de semicondutores, problemas de ressonância em bancos de capacitores, dimensionamento de autonomia de baterias sob regimes térmicos severos e especificação técnica para licitações e contratações industriais.",
    benefits: [
      "Medições em campo com analisadores de energia Classe A de alta precisão",
      "Modelagem e simulação de correntes harmônicas e mitigação de distorções",
      "Especificação técnica imparcial para otimização de custos de CAPEX e OPEX",
      "Diagnóstico e eliminação definitiva de falhas crônicas de queima de placas",
      "Assessoria para adequação às exigências das concessionárias e ONS"
    ],
    applications: "Indústrias com multas de energia reativa, sobreaquecimento de transformadores e projetos de expansão elétrica.",
    equipmentCovered: [
      "Sistemas Elétricos Industriais de Potência",
      "Transformadores de Entrada e Conversores Eletroquímicos",
      "Filtros Harmônicos Ativos e Passivos",
      "Subestações de Entrada e Distribuição Fabril",
      "Projetos de Intertravamento e Automação de Cargas Críticas"
    ],
    deliverables: [
      "Relatório Técnico Conclusivo de Qualidade de Energia",
      "Análise espectral de harmônicas até a 50ª ordem",
      "Memoriais de cálculo de dimensionamento elétrico e térmico",
      "Especificações Técnicas de Engenharia (ET) para compras",
      "Parecer Técnico assinado por Engenheiro Especialista com ART"
    ],
    standards: ["IEEE 519", "IEC 61000-4-30", "PRODIST Módulo 8", "ONS", "ISO 9001"],
    imageUrl: "/images/categories/cat-qualidade-energia.jpg"
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_MOCK.find((s) => s.slug === slug);
}

export function getAllServices(): ServiceItem[] {
  return SERVICES_MOCK;
}
