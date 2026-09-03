import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Wrench, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  GraduationCap, 
  CheckCircle2, 
  Compass, 
  ChevronRight, 
  PhoneCall, 
  Mail, 
  Zap, 
  Layers, 
  Clock, 
  FileText,
  AlertTriangle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços de Engenharia & Retrofit | DSR Soluções",
  description: "Retrofitting de retificadores e UPS, digitalização de quadros e motores, manutenção preventiva e corretiva, comissionamento e consultoria especializada.",
};

const SERVICES = [
  {
    id: "retrofitting",
    title: "Retrofitting & Modernização",
    subtitle: "Retificadores, Inversores, No-Break / UPS e Estabilizadores",
    icon: Wrench,
    badge: "Economia de até 65%",
    description:
      "A modernização eletrônica (retrofit) substitui placas analógicas antigas, circuitos descontinuados e instrumentos obsoletos por eletrônica digital moderna com IHM touchscreen e rede Modbus/Profinet, mantendo os transformadores de força, cubículos e barramentos de cobre originais.",
    benefits: [
      "Substituição sem necessidade de obras civis ou corte de barramentos",
      "Redução drástica do MTTR e elevação do MTBF com módulos universais",
      "Turnaround rápido em paradas programadas (24h a 48h)",
      "Adição de telemetria digital para Indústria 4.0",
      "Custo até 65% menor em comparação a um equipamento novo"
    ],
    applications: "Retificadores industriais obsoletos, no-breaks de grande porte, pontes tiristorizadas e estabilizadores mecânicos."
  },
  {
    id: "digitalizacao",
    title: "Digitalização de Ativos & Indústria 4.0",
    subtitle: "Quadros de Distribuição, Motores, Transformadores e Subestações",
    icon: Cpu,
    badge: "Telemetria Conectada",
    description:
      "Transformação de painéis eletromecânicos legados em nós de dados inteligentes. Instalamos módulos transdutores digitais de tensão, corrente, temperatura e concentradores de entradas digitais comunicando diretamente via Modbus-RTU/TCP, Profinet ou Ethernet/IP.",
    benefits: [
      "Supervisão em tempo real de consumo (kWh), demanda (kW) e fator de potência",
      "Detecção precoce de anomalias térmicas e sobrecargas em barramentos",
      "Integração direta com softwares SCADA, CLPs centrais e nuvem industrial",
      "Histórico digital de eventos com data e hora de disparos de disjuntores"
    ],
    applications: "Quadros gerais de baixa e média tensão (QGBT), CCMs de motores críticos e salas de baterias."
  },
  {
    id: "manutencao-preventiva",
    title: "Manutenção Preventiva Industrial",
    subtitle: "Inspeção Preditiva, Termografia e Ensaios Periódicos",
    icon: ShieldCheck,
    badge: "Máxima Disponibilidade",
    description:
      "Planos estruturados de manutenção preventiva com inspeções termográficas por infravermelho, reaperto torquimétrico de conexões, limpeza especializada, ensaios de capacitores e baterias e calibração de instrumentos.",
    benefits: [
      "Eliminação de paradas não programadas em processos contínuos 24/7",
      "Emissão de relatórios técnicos detalhados com imagens termográficas",
      "Aferição periódica de rippple CC, tensão de flutuação e fuga a terra",
      "Conformidade com os requisitos de auditoria e normas NR-10 e NR-12"
    ],
    applications: "Plantas químicas, siderúrgicas, papel & celulose, mineradoras e subestações de transmissão."
  },
  {
    id: "manutencao-corretiva",
    title: "Manutenção Corretiva & Plantão 24/7",
    subtitle: "Diagnóstico Rápido e Reparo Especializado em Campo",
    icon: Activity,
    badge: "Atendimento Emergencial",
    description:
      "Equipe móvel de engenheiros e técnicos seniores de plantão para resposta rápida em caso de falha de sistemas de retificação, inversores ou no-breaks industriais, com estoque local de peças sobressalentes e semicondutores de potência.",
    benefits: [
      "Plantão técnico direto: (11) 4564-5200 e Cel/WhatsApp (11) 98038-9729",
      "Diagnóstico avançado com osciloscopia digital e analisadores de transitórios",
      "Reparo ou substituição ágil de módulos tiristorizados e placas de controle",
      "Peças de reposição nacionais para rápido reestabelecimento da operação"
    ],
    applications: "Qualquer sistema elétrico industrial inoperante com impacto na produção."
  },
  {
    id: "treinamento",
    title: "Treinamento Técnico & Capacitação",
    subtitle: "Operação e Manutenção para Equipes de Fábrica",
    icon: GraduationCap,
    badge: "Certificação DSR",
    description:
      "Capacitação prática e teórica in company para operadores, eletricistas e engenheiros de manutenção dos clientes, cobrindo o funcionamento de retificadores, inversores, parametrização de IHM, interpretação de alarmes e segurança elétrica.",
    benefits: [
      "Aulas ministradas por engenheiros desenvolvedores dos equipamentos",
      "Material didático completo com esquemáticos elétricos e manuais comentados",
      "Treinamento prático de simulação de falhas e procedimentos de emergência",
      "Certificado de conclusão de horas técnicas em conformidade NR-10"
    ],
    applications: "Equipes de engenharia de manutenção, operadores de subestação e eletrotécnicos industriais."
  },
  {
    id: "comissionamento",
    title: "Comissionamento & Startup em Campo",
    subtitle: "Testes em Carga, Parametrização e Entrega Técnica Assistida",
    icon: CheckCircle2,
    badge: "Partida Segura",
    description:
      "Procedimentos rigorosos de inicialização, conferência de fiação, testes de isolação dielétrica, ensaios sob carga plena com banco de carga eletrônica resistiva e parametrização sob medida para a planta.",
    benefits: [
      "Ensaios de capacidade real de baterias e teste de autonomia",
      "Verificação de resposta dinâmica a degraus de carga e tempo de comutação",
      "Ajuste fino de thresholds de alarme e integração com a rede de automação",
      "Emissão de Termo de Entrega Técnica e ART (Anotação de Responsabilidade Técnica)"
    ],
    applications: "Novas instalações elétricas, ampliações de plantas e pós-retrofitting de cubículos."
  },
  {
    id: "consultoria",
    title: "Consultoria em Engenharia & Projetos Especiais",
    subtitle: "Estudos de Qualidade de Energia, Harmônicas e Dimensionamento",
    icon: Compass,
    badge: "Engenharia Sênior",
    description:
      "Estudos aprofundados de qualidade de energia elétrica (análise de harmônicas conforme IEEE 519 e PRODIST), dimensionamento de sistemas de retificação para cargas especiais e assessoria para especificação de editais e compras técnicas.",
    benefits: [
      "Medição em campo com analisadores de energia Classe A de alta precisão",
      "Projetos de filtragem de harmônicas e correção de fator de potência",
      "Especificação técnica imparcial para otimização de CAPEX e OPEX",
      "Suporte na resolução de problemas complexos de queima repetitiva de equipamentos"
    ],
    applications: "Indústrias com problemas de multas de reativos, queimas de semicondutores e planejamento elétrico."
  }
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] font-semibold">Serviços de Engenharia</span>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                <Wrench className="h-3.5 w-3.5" />
                ENGENHARIA INDUSTRIAL ESPECIALIZADA
              </span>
              <span className="rounded bg-[#2a475e]/60 px-2.5 py-1 text-xs font-mono text-[#8f98a0]">
                NR-10 • NR-12 • CREA/SP
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Serviços Especializados em <span className="text-[#66c0f4]">Eletrônica de Potência</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed">
              Da modernização (retrofit) de sistemas legados à digitalização completa de subestações e manutenção preventiva 24/7. Conte com o suporte direto do time de engenharia desenvolvedor da tecnologia DSR.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#2a475e]/60 text-xs font-mono">
              <div>
                <span className="block text-[#8f98a0]">PLANTÃO</span>
                <span className="font-bold text-white text-sm">24 Horas / 7 Dias</span>
              </div>
              <div>
                <span className="block text-[#8f98a0]">ECONOMIA RETROFIT</span>
                <span className="font-bold text-[#66c0f4] text-sm">Até 65% vs Novo</span>
              </div>
              <div>
                <span className="block text-[#8f98a0]">ATENDIMENTO</span>
                <span className="font-bold text-white text-sm">Nacional em Campo</span>
              </div>
              <div>
                <span className="block text-[#8f98a0]">GARANTIA</span>
                <span className="font-bold text-white text-sm">Até 24 Meses</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#2a475e] pb-3">
            <h2 className="text-xl font-bold text-white">Nossos Pilares de Atuação</h2>
            <span className="text-xs font-mono text-[#66c0f4]">7 Áreas de Especialidade</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#1b2838] to-[#171a21] p-6 sm:p-8 shadow-lg hover:border-[#66c0f4]/80 transition-all flex flex-col justify-between group scroll-mt-24"
                >
                  <div className="space-y-4">
                    {/* Header with Icon and Badge */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2a475e] border border-[#66c0f4]/40 text-[#66c0f4] group-hover:scale-105 transition-transform">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-[#66c0f4] uppercase tracking-wider block">
                            Pilar 0{index + 1}
                          </span>
                          <h3 className="text-xl font-bold text-white group-hover:text-[#66c0f4] transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <span className="rounded bg-[#101822] border border-[#66c0f4]/40 px-2.5 py-1 text-[11px] font-mono text-[#66c0f4] whitespace-nowrap">
                        {service.badge}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-[#8f98a0]">
                      {service.subtitle}
                    </div>

                    <p className="text-sm text-[#c6d4df] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#66c0f4]" /> Diferenciais & Vantagens:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#8f98a0]">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#66c0f4] mt-1.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="rounded-lg bg-[#101822] p-3 border border-[#2a475e]/50 text-xs">
                      <span className="font-mono text-[#66c0f4] font-semibold block mb-0.5">
                        Aplicações Típicas:
                      </span>
                      <span className="text-[#8f98a0]">{service.applications}</span>
                    </div>
                  </div>

                  {/* Service Card Footer */}
                  <div className="mt-6 pt-4 border-t border-[#2a475e]/60 flex items-center justify-between">
                    <Link
                      href="/produtos"
                      className="text-xs font-semibold text-[#8f98a0] hover:text-[#66c0f4] flex items-center gap-1 transition-colors"
                    >
                      <span>Ver Equipamentos Relacionados</span>
                      <ChevronRight className="h-3 w-3" />
                    </Link>

                    <a
                      href="mailto:engenharia@dsrsolucoes.com.br?subject=Consulta de Servico - DSR"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] px-3.5 py-1.5 text-xs font-bold transition-all shadow-sm"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Solicitar Proposta</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Emergency Plantão Callout */}
        <div className="rounded-xl border border-[#3b678c] bg-gradient-to-r from-[#171a21] via-[#1f374d] to-[#101822] p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 rounded bg-[#101822] px-2.5 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/30">
                <Clock className="h-3.5 w-3.5 text-amber-400" /> ATENDIMENTO TÉCNICO IMEDIATO
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Sua planta industrial está enfrentando parada em equipamento crítico?
              </h3>
              <p className="text-sm text-[#8f98a0] max-w-2xl">
                Nossos engenheiros de campo prestam suporte para diagnóstico de falha, reparo emergencial e comissionamento com peças sobressalentes em estoque nacional.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="tel:551145645200"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2a475e] hover:bg-[#3b678c] text-white font-bold px-4 py-3 text-xs sm:text-sm transition-colors border border-[#66c0f4]/30"
              >
                <PhoneCall className="h-4 w-4 text-[#66c0f4]" />
                (11) 4564-5200
              </a>
              <a
                href="https://wa.me/5511980389729"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] font-bold px-5 py-3 text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(102,192,244,0.3)]"
              >
                <Zap className="h-4 w-4" />
                Plantão WhatsApp (11) 98038-9729
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
