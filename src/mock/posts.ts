export interface PostItem {
  id: string;
  slug: string;
  title: string;
  category: "Serviços Recentes" | "Novos Produtos" | "Desenvolvimentos" | "Artigos Técnicos";
  date: string;
  readTime: string;
  author: string;
  summary: string;
  content: string[];
  imageUrl: string;
  tags: string[];
}

export const POSTS_MOCK: PostItem[] = [
  {
    id: "post-1",
    slug: "retrofit-emergencial-ponte-tiristorizada-2500a",
    title: "Retrofit Emergencial de Ponte Tiristorizada de 2.500 A em Siderúrgica: Retomada de Produção em 36 Horas",
    category: "Serviços Recentes",
    date: "02 de Setembro, 2026",
    readTime: "4 min de leitura",
    author: "Eng. de Aplicação DSR",
    summary: "Como a equipe técnica da DSR substituiu um sistema eletrônico de disparo legado e inoperante por controle microprocessado digital sem trocar o transformador e sem corte de barramentos.",
    content: [
      "Uma das maiores siderúrgicas do estado de São Paulo enfrentou uma parada repentina em sua linha de laminação devido à queima repetitiva de placas analógicas obsoletas de uma ponte tiristorizada de 2.500 A fabricada na década de 1990. Os componentes originais haviam sido descontinuados pelo fabricante internacional, gerando uma estimativa de 6 meses para importação de um painel novo completo.",
      "Acionada no plantão técnico emergencial, a equipe de engenharia da DSR Soluções compareceu à planta em menos de 3 horas. Foi realizado o levantamento das características de disparo dos tiristores de disco (puck) existentes e dos transformadores de pulso.",
      "Utilizando o Kit de Retrofit Digital DSR com disparo por pulsos de alta imunidade a ruídos (EMC) e placa de controle microprocessada universal, a fiação volante analógica foi removida e substituída por um chicote pré-conectorizado padronizado. Os barramentos pesados de cobre e os transformadores de força foram 100% reaproveitados.",
      "Após 36 horas ininterruptas de trabalho entre engenharia mecânica, eletrônica e parametrização de software, o sistema foi comissionado sob carga plena de 2.200 A. A operação da aciaria foi retomada com sucesso, evitando milhões de reais em perdas de produção."
    ],
    imageUrl: "/images/categories/cat-energia-ininterrupta.jpg",
    tags: ["Retrofit", "Siderurgia", "Tiristores", "Plantão 24/7"]
  },
  {
    id: "post-2",
    slug: "unidade-diodo-queda-udq-protecao-consumidor",
    title: "Unidade de Diodo de Queda (UDQ): Princípios de Funcionamento e Proteção Crítica contra Sobretensão",
    category: "Artigos Técnicos",
    date: "28 de Agosto, 2026",
    readTime: "5 min de leitura",
    author: "Engenharia de Desenvolvimento DSR",
    summary: "Entenda por que a supervisão direta no consumidor e o acionamento sequencial inverso de etapas na UDQ evitam a queima de equipamentos eletrônicos sensíveis durante a recarga de baterias.",
    content: [
      "Nos sistemas industriais de corrente contínua (CC), os retificadores operam simultaneamente como carregadores de bateria e fontes de alimentação para os equipamentos consumidores (relés de proteção, inversores, CLPs e lâmpadas de emergência).",
      "Durante a fase de equalização ou recarga rápida das baterias de acumuladores, a tensão aplicada pelo retificador precisa ser elevada significativamente (por exemplo, atingindo até 140 Vcc em um sistema nominal de 125 Vcc). Essa tensão excessiva pode danificar ou reduzir drasticamente a vida útil dos componentes eletrônicos dos consumidores.",
      "A Unidade de Diodo de Queda (UDQ) atua como um regulador inteligente intercalado entre o barramento da bateria e o consumidor. Composta por diodos de potência montados em dissipadores térmicos e contatores de bypass comandados eletronicamente, a UDQ insere quedas de tensão calibradas (aproximadamente 3 a 5 V por etapa) sempre que a tensão no banco sobe.",
      "No Retificador Modelo RIT-D da DSR, a UDQ monitora diretamente a tensão no consumidor (e não apenas no retificador), garantindo que, mesmo em caso de falha de contatores, a carga nunca sofra sobretensão. Além disso, o acionamento ocorre em ordem inversa: a primeira etapa inserida na alta tensão é a última retirada quando a rede normaliza, eliminando transitórios bruscos de tensão."
    ],
    imageUrl: "/images/products/rit-d-udq.jpg",
    tags: ["UDQ", "Baterias", "Subestações", "Engenharia de Potência"]
  },
  {
    id: "post-3",
    slug: "supervisao-duplo-microcontrolador-rit-d",
    title: "Supervisão Digital com Duplo Microcontrolador e Modbus-RTU Nativo: A Arquitetura do RIT-D",
    category: "Desenvolvimentos",
    date: "20 de Agosto, 2026",
    readTime: "4 min de leitura",
    author: "P&D DSR Soluções",
    summary: "Conheça a arquitetura de processamento dedicado que isola a malha de controle em tempo real da comunicação serial, garantindo 100% de disponibilidade mesmo sob alto tráfego de rede.",
    content: [
      "Um dos desafios mais comuns em painéis de retificação industrial é o travamento de microcontroladores quando submetidos simultaneamente a tarefas críticas de disparo de tiristores em nanossegundos e comunicação serial intensa com sistemas supervisórios SCADA.",
      "Para eliminar esse gargalo definitivamente, a equipe de P&D da DSR projetou o Módulo de Supervisão Digital do Retificador RIT-D com arquitetura de Duplo Microcontrolador.",
      "O Microcontrolador Principal (MCU 1) dedica 100% de seus ciclos de clock à amostragem de tensões de entrada/saída, controle de corrente, regulação da malha UDQ e supervisão instantânea de falhas (fuga a terra, subtensão, disjuntor aberto e falha de fase).",
      "Enquanto isso, o Microcontrolador Secundário (MCU 2) gerencia com exclusividade a porta serial isolada MODBUS-RTU via RS-485, respondendo a requisições de telemetria sem interferir no laço de controle do equipamento. Como resultado, o sistema oferece MTBF drasticamente superior e total imunidade contra travamentos causados por polling de rede."
    ],
    imageUrl: "/images/products/rit-d-supervisao.jpg",
    tags: ["Modbus-RTU", "Microcontroladores", "RIT-D", "Automação"]
  },
  {
    id: "post-4",
    slug: "comissionamento-carga-subestacao-125vdc",
    title: "Comissionamento em Carga com Banco de Carga Eletrônica em Subestação de Distribuição 125 Vcc",
    category: "Serviços Recentes",
    date: "14 de Agosto, 2026",
    readTime: "3 min de leitura",
    author: "Equipe de Campo DSR",
    summary: "Ensaio de autonomia e resposta dinâmica a degraus de carga executado com carga eletrônica programável ativa em concessionária de energia elétrica.",
    content: [
      "A entrada em operação de uma nova subestação de energia exige comprovação rigorosa da capacidade de retenção de carga do banco de baterias estacionárias e da estabilidade de regulação do retificador-carregador sob condições de curto e sobrecarga.",
      "A DSR Soluções realizou o comissionamento assistido utilizando seu banco de Carga Eletrônica Programável Industrial. Diferente dos bancos resistivos incandescentes tradicionais, a carga eletrônica DSR permite parametrizar rampas de corrente precisas de 0 a 500 A com corte automático por limite de tensão de célula.",
      "Durante o ensaio de 10 horas, foram monitoradas a curva de descarga térmica dos acumuladores, a temperatura dos cabos por termografia infravermelha e a comutação da chave de transferência estática sem interrupção para o barramento de comando.",
      "O cliente recebeu o protocolo de testes com gráficos digitalizados e a devida Anotação de Responsabilidade Técnica (ART/CREA), assegurando total tranquilidade para energização definitiva da subestação."
    ],
    imageUrl: "/images/categories/cat-quadros-distribuicao.jpg",
    tags: ["Comissionamento", "Subestação", "Carga Eletrônica", "125Vcc"]
  },
  {
    id: "post-5",
    slug: "por-que-retrofit-economiza-65-por-cento",
    title: "Economia Circular na Indústria: Por que o Retrofit Economiza até 65% sem Descartar Transformadores",
    category: "Artigos Técnicos",
    date: "05 de Agosto, 2026",
    readTime: "5 min de leitura",
    author: "Diretoria de Engenharia DSR",
    summary: "Descubra como o reaproveitamento dos materiais pesados (cobre, núcleo de ferro e chassi metálico) viabiliza modernizações sustentáveis e financeiramente imbatíveis.",
    content: [
      "Em um cubículo industrial de retificação de grande porte (por exemplo, 300 kW ou superior), mais de 70% do custo de matéria-prima e peso mecânico reside nos transformadores defasadores a óleo ou a seco e nos barramentos eletrolíticos de cobre maciço.",
      "Transformadores industriais bem conservados e dimensionados com classe térmica adequada podem operar perfeitamente por 40 a 50 anos. No entanto, os circuitos eletrônicos analógicos de controle, placas de circuito impresso com componentes descontinuados e relés mecânicos costumam apresentar problemas após 10 a 15 anos de operação contínua.",
      "Descartar todo o conjunto para instalar um painel novo é um desperdício financeiro e ambiental considerável. Além do custo do equipamento novo, a empresa precisa realizar demolição civil, adaptação de canaletas, passagem de novos cabos de alta seção e semanas de parada de fábrica.",
      "O Retrofit de Potência desenvolvido pela DSR Soluções ataca cirurgicamente a parte obsoleta: remove a eletrônica desgastada e instala módulos digitais de última geração com microcontroladores modernos e conectividade industrial. O resultado é um equipamento com confiabilidade de zero quilômetro, garantia estendida de fábrica e custo até 65% menor."
    ],
    imageUrl: "/images/categories/cat-retificadores.jpg",
    tags: ["Sustentabilidade", "Retrofit", "Engenharia Financeira", "CAPEX"]
  }
];

export function getAllPosts(): PostItem[] {
  return POSTS_MOCK;
}

export function getPostBySlug(slug: string): PostItem | undefined {
  return POSTS_MOCK.find((p) => p.slug === slug);
}
