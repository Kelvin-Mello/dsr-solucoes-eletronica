import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, 
  Handshake, 
  Factory, 
  Zap, 
  CheckCircle2,
  Mail,
  Flame,
  Droplets
} from "lucide-react";

export const metadata: Metadata = {
  title: "Clientes & Parceiros | DSR Soluções em Eletrônica",
  description: "Grandes indústrias, concessionárias de energia e usinas atendidas pela DSR Soluções em Eletrônica de Potência. Engie, BRF, Sabesp, Usiminas, Celesc, Inpasa, Moura e mais.",
};

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  sector: string;
  scale: string;
  desc: string;
  logoUrl: string;
}

// 20 Empresas Clientes & Parceiras ordenadas das maiores para as menores
export const CLIENTS_LIST: ClientItem[] = [
  {
    id: "engie",
    name: "Engie",
    category: "Energia",
    sector: "Geração & Transmissão de Energia",
    scale: "Multinacional Global",
    desc: "Líder global em transição energética e uma das maiores operadoras privadas de geração do Brasil.",
    logoUrl: "/images/clients/engie.svg"
  },
  {
    id: "brf",
    name: "BRF",
    category: "Alimentos",
    sector: "Complexos Agroindustriais & Alimentos",
    scale: "Multinacional Global de Alimentos",
    desc: "Uma das maiores companhias de alimentos do planeta (Sadia e Perdigão), com plantas industriais de alta escala.",
    logoUrl: "/images/clients/brf.svg"
  },
  {
    id: "sabesp",
    name: "Sabesp",
    category: "Saneamento",
    sector: "Saneamento Básico & Infraestrutura Crítica",
    scale: "Concessionária Estadual",
    desc: "Maior empresa de saneamento ambiental e abastecimento de água das Américas.",
    logoUrl: "/images/clients/sabesp.svg"
  },
  {
    id: "usiminas",
    name: "Usiminas",
    category: "Siderurgia",
    sector: "Siderurgia & Laminação Pesada",
    scale: "Siderúrgica Nacional",
    desc: "Líder brasileira na produção de aços planos laminados para indústrias automotivas e de infraestrutura.",
    logoUrl: "/images/clients/usiminas.svg"
  },
  {
    id: "celesc",
    name: "Celesc",
    category: "Energia",
    sector: "Geração & Distribuição de Energia",
    scale: "Concessionária Estadual (3,3M+ Consumidores)",
    desc: "Centrais Elétricas de Santa Catarina, uma das maiores concessionárias de distribuição e geração do Brasil, com 12 usinas próprias e atendimento a 98% do estado.",
    logoUrl: "/images/clients/celesc.svg"
  },
  {
    id: "inpasa",
    name: "Inpasa",
    category: "Agroenergia",
    sector: "Biorrefinaria & Biocombustíveis",
    scale: "Multinacional Agroenergética",
    desc: "Maior produtora de etanol de milho, bioeletricidade e coprodutos da América Latina.",
    logoUrl: "/images/clients/inpasa.png"
  },
  {
    id: "moura",
    name: "Baterias Moura",
    category: "Armazenamento",
    sector: "Acumuladores & Baterias Industriais",
    scale: "Líder Sul-Americana",
    desc: "Maior fabricante de acumuladores e baterias para sistemas críticos de energia da América do Sul.",
    logoUrl: "/images/clients/moura.svg"
  },
  {
    id: "softys",
    name: "Softys Melhoramentos",
    category: "Papel & Celulose",
    sector: "Papel, Celulose & Bens de Consumo",
    scale: "Multinacional (Grupo CMPC)",
    desc: "Líder latino-americana no desenvolvimento de produtos de higiene, tissue e cuidados pessoais.",
    logoUrl: "/images/clients/softys-melhoramentos.svg"
  },
  {
    id: "ceste",
    name: "CESTE",
    category: "Energia",
    sector: "Consórcio Estreito Energia (UHE Estreito)",
    scale: "Hidrelétrica de 1.087 MW",
    desc: "Consórcio operador da Usina Hidrelétrica Estreito no Rio Tocantins (Engie, Vale, Alcoa e InterCement).",
    logoUrl: "/images/clients/ceste.png"
  },
  {
    id: "enercan",
    name: "Enercan",
    category: "Energia",
    sector: "Campos Novos Energia S.A. (UHE)",
    scale: "Hidrelétrica de 880 MW",
    desc: "Concessionária responsável pela Usina Hidrelétrica Campos Novos, com alta disponibilidade operativa.",
    logoUrl: "/images/clients/enercan.svg"
  },
  {
    id: "diamante",
    name: "Diamante Energia",
    category: "Energia",
    sector: "Geração Térmica & Transição Energética",
    scale: "Complexo de 857 MW",
    desc: "Operadora do Complexo Termelétrico Jorge Lacerda, o maior parque de geração a carvão da América do Sul.",
    logoUrl: "/images/clients/diamante.png"
  },
  {
    id: "ceran",
    name: "Ceran",
    category: "Energia",
    sector: "Complexo Rio das Antas (3 UHEs)",
    scale: "Complexo Hídrico de 360 MW",
    desc: "Companhia Energética Rio das Antas, integrando as usinas Monte Claro, Castro Alves e 14 de Julho.",
    logoUrl: "/images/clients/ceran.png"
  },
  {
    id: "pampasul",
    name: "Pampa Sul Energia",
    category: "Energia",
    sector: "Usina Termelétrica Pampa Sul (Candiota/RS)",
    scale: "Termelétrica de 345 MW",
    desc: "Usina termelétrica a carvão mineral com tecnologia supercrítica de alta eficiência no Rio Grande do Sul.",
    logoUrl: "/images/clients/pampasul.svg"
  },
  {
    id: "geramaranhao",
    name: "Gera Maranhão",
    category: "Energia",
    sector: "UTEs Geramar I & II (Grupo Eneva)",
    scale: "Complexo Térmico de 330 MW",
    desc: "Complexo termelétrico em Miranda do Norte (MA), operado pela Eneva e estratégico para a estabilidade do SIN.",
    logoUrl: "/images/clients/geramaranhao.svg"
  },
  {
    id: "usinaatena",
    name: "Usina Atena",
    category: "Bioenergia",
    sector: "Açúcar, Etanol & Cogeração",
    scale: "Agroindústria Sucroenergética",
    desc: "Atena Açúcar e Etanol – Parque industrial com cogeração e processamento de cana-de-açúcar.",
    logoUrl: "/images/clients/atena.svg"
  },
  {
    id: "usiban",
    name: "Usiban",
    category: "Bioenergia",
    sector: "Usina Bandeirante (Açúcar & Álcool)",
    scale: "Agroindústria Sucroenergética",
    desc: "Açúcar e Álcool Bandeirantes S.A. – Produção em larga escala de bioenergia e derivados.",
    logoUrl: "/images/clients/usiban.png"
  },
  {
    id: "usinaiberia",
    name: "Usina Ibéria",
    category: "Bioenergia",
    sector: "Ibéria Agroindustrial (Açúcar & Etanol)",
    scale: "Parque Agroindustrial",
    desc: "Unidade produtora de açúcar e etanol do interior paulista (Borá/SP), associada da UDOP.",
    logoUrl: "/images/clients/iberia.svg"
  },
  {
    id: "bomsucesso",
    name: "Bom Sucesso",
    category: "Bioenergia",
    sector: "BSA Bioenergia (Bom Sucesso Agroindústria)",
    scale: "Usinagem & Bioeletricidade",
    desc: "Bom Sucesso Agroindústria S.A. em Goiatuba/GO – Produção sustentável de etanol e açúcar.",
    logoUrl: "/images/clients/bomsucesso.png"
  },
  {
    id: "hidrogeron",
    name: "Grupo Hidrogeron",
    category: "Tecnologia",
    sector: "Sistemas de Cloração por Eletrólise",
    scale: "Fabricante de Tecnologia",
    desc: "Pioneira nacional em geradores de cloro in-loco para concessionárias de saneamento e tratamento de água.",
    logoUrl: "/images/clients/hidrogeron.svg"
  },
  {
    id: "turbodrive",
    name: "Turbo Drive",
    category: "Automação",
    sector: "Automação & Acionamentos Industriais",
    scale: "Engenharia de Drives",
    desc: "Soluções em inversores, painéis de acionamento e engenharia consultiva em eletrônica de controle.",
    logoUrl: "/images/clients/turbodrive.svg"
  }
];

const SECTORS = [
  {
    icon: Zap,
    name: "Geração & Concessionárias",
    desc: "Subestações, usinas hidrelétricas e termelétricas com retificadores de 125Vcc/250Vcc para relés e comando de disjuntores."
  },
  {
    icon: Factory,
    name: "Siderurgia & Indústria Pesada",
    desc: "Alimentação de alta corrente para pontes tiristorizadas de laminação, fornos de indução e controle de potência."
  },
  {
    icon: Flame,
    name: "Sucroenergético & Bioenergia",
    desc: "Sistemas ininterruptos de potência para turbogeradores de cogeração, moendas, caldeiras e destilarias."
  },
  {
    icon: Droplets,
    name: "Saneamento & Processos Contínuos",
    desc: "Retificadores para cloração e eletrólise in-loco, automação de bombeamento e estações de tratamento de água."
  }
];

export default function ClientesPage() {
  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] font-semibold">Clientes & Parceiros</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                <Handshake className="h-3.5 w-3.5" />
                PARCERIA & CONFIANÇA TÉCNICA
              </span>
              <span className="rounded bg-[#2a475e]/60 px-2.5 py-1 text-xs font-mono text-[#8f98a0]">
                Presença nas Maiores Plantas do Brasil
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Clientes & <span className="text-[#66c0f4]">Parceiros Industriais</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed">
              Construímos relações sólidas baseadas na entrega de tecnologia de ponta, suporte transparente e presença física de engenharia nas maiores indústrias, hidrelétricas, usinas e concessionárias de energia do país.
            </p>

            {/* Quote Manifesto DSR */}
            <div className="rounded-lg bg-[#101822]/80 border-l-4 border-[#66c0f4] p-4 text-xs sm:text-sm text-[#c6d4df] italic">
              &ldquo;A DSR Soluções busca estabelecer com seus clientes sólida parceria, no mais elevado grau de ética e transparência. Acreditamos que isto se alcança oferecendo produtos e serviços com qualidade, num relacionamento &apos;olho no olho&apos; com nossos clientes e com respostas verdadeiras. Esta é a nossa definição de parceria.&rdquo;
            </div>
          </div>
        </div>

        {/* Sectors Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SECTORS.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#1b2838] to-[#171a21] p-5 space-y-2 shadow-md hover:border-[#66c0f4]/60 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded bg-[#2a475e] text-[#66c0f4] border border-[#66c0f4]/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{sec.name}</h3>
                <p className="text-xs text-[#8f98a0] leading-relaxed">{sec.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Logos Grid Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2a475e] pb-4">
            <div>
              <h2 className="text-xl font-bold text-white">Empresas e Plantas Atendidas</h2>
              <p className="text-xs text-[#8f98a0] mt-0.5">
                Organizadas da maior operação corporativa para as indústrias especializadas
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#66c0f4] self-start sm:self-auto bg-[#101822] px-3 py-1 rounded-full border border-[#2a475e]">
              <span className="h-2 w-2 rounded-full bg-[#66c0f4] animate-pulse" />
              {CLIENTS_LIST.length} Grandes Empresas
            </span>
          </div>

          {/* Grid of Logos with Square Standard Ratio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CLIENTS_LIST.map((client) => (
              <div
                key={client.id}
                className="group relative flex flex-col justify-between rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#171a21] to-[#101822] p-5 text-left hover:border-[#66c0f4] hover:shadow-[0_0_25px_rgba(102,192,244,0.2)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Square Logo Box for Optimal Fit Across All Ratios */}
                <div className="relative aspect-square w-full rounded-xl bg-white p-3 sm:p-3.5 flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-[1.02] border border-slate-200">
                  <div className="relative h-full w-full">
                    <Image
                      src={client.logoUrl}
                      alt={`Logo da ${client.name}`}
                      fill
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 240px, 260px"
                      className="object-contain transition-all duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Info Block */}
                <div className="mt-4 pt-3 border-t border-[#2a475e]/50 flex-1 flex flex-col justify-between space-y-2">
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-white group-hover:text-[#66c0f4] transition-colors truncate">
                      {client.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#66c0f4] truncate">
                      {client.sector}
                    </p>
                    <p className="text-[11px] text-[#8f98a0] leading-relaxed line-clamp-3">
                      {client.desc}
                    </p>
                  </div>

                  {/* Scale / Porte Tag at the Very Bottom */}
                  <div className="pt-2 border-t border-[#2a475e]/30 mt-auto">
                    <span className="inline-flex items-center text-[10px] font-mono text-[#c6d4df] bg-[#101822] border border-[#2a475e] px-2.5 py-1 rounded-md">
                      {client.scale}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Callout */}
        <div className="rounded-xl border border-[#3b678c] bg-gradient-to-r from-[#171a21] via-[#1f374d] to-[#101822] p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 rounded bg-[#101822] px-2.5 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/30">
                <CheckCircle2 className="h-3.5 w-3.5" /> CADASTRO TÉCNICO &amp; FORNECIMENTO
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Sua empresa precisa de homologação técnica ou fornecimento industrial?
              </h3>
              <p className="text-sm text-[#8f98a0] max-w-2xl">
                Encaminhe os requisitos de cadastro de fornecedores ou solicite a documentação técnica, certidões e histórico de projetos da DSR Soluções em Eletrônica.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="mailto:engenharia@dsrsolucoes.com.br?subject=Homologacao de Fornecedor - DSR"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] font-bold px-5 py-3 text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(102,192,244,0.3)]"
              >
                <Mail className="h-4 w-4" />
                engenharia@dsrsolucoes.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
