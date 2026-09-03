"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  ChevronRight, 
  ChevronLeft,
  Users, 
  Zap, 
  ShieldCheck, 
  Award, 
  History, 
  Compass, 
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Mail,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight
} from "lucide-react";

const TIMELINE_EVENTS = [
  {
    year: "2008",
    title: "Fundação da DSR",
    desc: "Início das atividades em São Paulo, especializando-se em manutenção emergencial e projetos em eletrônica de potência pesada."
  },
  {
    year: "2012",
    title: "Pioneirismo em Retrofit",
    desc: "Desenvolvimento dos primeiros kits plug-and-play de modernização para pontes tiristorizadas, reaproveitando transformadores originais."
  },
  {
    year: "2016",
    title: "Linha DK10 & DK30",
    desc: "Lançamento oficial dos retificadores industriais tiristorizados mono e trifásicos com controle de disparo microprocessado."
  },
  {
    year: "2020",
    title: "Módulo UDQ de 4 Etapas",
    desc: "Criação da Unidade de Diodo de Queda com monitoramento direto no consumidor e acionamento sequencial inverso."
  },
  {
    year: "2023",
    title: "Telemetria & Indústria 4.0",
    desc: "Apresentação da linha de transdutores digitais True RMS em trilho DIN e módulos de digitalização com Modbus-RTU nativo."
  },
  {
    year: "2026",
    title: "Consolidação do RIT-D",
    desc: "Plataforma integrada do Retificador Padrão Industrial Modelo RIT-D e expansão do atendimento técnico para todo o território nacional."
  }
];

const TEAM_AREAS = [
  {
    area: "Pesquisa & Desenvolvimento (P&D)",
    role: "Hardware de Potência & Firmware",
    icon: Cpu,
    description: "Equipe especializada no cálculo e projeto de pontes tiristorizadas, módulos de acionamento por pulsos e firmware em tempo real para controle e supervisão dupla."
  },
  {
    area: "Engenharia de Aplicação & Projetos",
    role: "Dimensionamento & Retrofitting",
    icon: Compass,
    description: "Engenheiros seniores dedicados ao levantamento em campo, viabilidade econômica de modernização e especificação técnica para editais e subestações industriais."
  },
  {
    area: "Engenharia de Campo & Startup",
    role: "Comissionamento & Ensaios em Carga",
    icon: Zap,
    description: "Profissionais que viajam por todo o Brasil para parametrizar equipamentos, realizar ensaios de capacidade de baterias e emitir laudos com ART registrada."
  },
  {
    area: "Montagem & Controle de Qualidade",
    role: "Integração Eletromecânica & Ensaios",
    icon: Layers,
    description: "Técnicos dedicados à conformação de barramentos de cobre maciço, chicoteamento elétrico padronizado e rigorosos ensaios de isolação dielétrica e estresse térmico."
  },
  {
    area: "Plantão & Suporte Técnico 24/7",
    role: "Atendimento Emergencial Nacional",
    icon: Clock,
    description: "Corpo técnico móvel de prontidão para diagnósticos de falha, reparos cirúrgicos e envio imediato de componentes sobressalentes para evitar paradas de fábrica."
  }
];

export default function SobrePage() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollTimeline = (direction: "left" | "right") => {
    if (timelineRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      timelineRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] font-semibold">Sobre a DSR Soluções</span>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                <Building2 className="h-3.5 w-3.5" />
                CONHEÇA NOSSA HISTÓRIA & ENGENHARIA
              </span>
              <span className="rounded bg-[#2a475e]/60 px-2.5 py-1 text-xs font-mono text-[#8f98a0]">
                São Paulo / SP • Atendimento Nacional
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Excelência em <span className="text-[#66c0f4]">Eletrônica de Potência</span> e Confiabilidade Industrial
            </h1>

            <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed">
              A DSR Soluções em Eletrônica nasceu com um compromisso claro: entregar soluções robustas de conversão e proteção de energia para as condições operacionais mais severas da indústria pesada brasileira.
            </p>
          </div>
        </div>

        {/* Manifesto Oficial DSR */}
        <div className="rounded-xl border border-[#3b678c] bg-gradient-to-b from-[#1b2838] to-[#101822] p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 border-b border-[#2a475e] pb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a475e] text-[#66c0f4] border border-[#66c0f4]/30">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#66c0f4] tracking-wider block">
                PRINCÍPIO FUNDAMENTAL DSR
              </span>
              <h2 className="text-lg font-bold text-white">
                Nossa Definição de Parceria
              </h2>
            </div>
          </div>

          <blockquote className="text-sm sm:text-base text-[#c6d4df] italic leading-relaxed border-l-4 border-[#66c0f4] pl-4 py-1">
            "A DSR Soluções busca estabelecer com seus clientes sólida parceria, no mais elevado grau de ética e transparência. Acreditamos que isto se alcança oferecendo produtos e serviços com qualidade, num relacionamento 'olho no olho' com nossos clientes e com respostas verdadeiras. Esta é a nossa definição de parceria."
          </blockquote>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#2a475e]/60 text-xs font-mono">
            <div>
              <span className="block text-[#8f98a0]">TECNOLOGIA</span>
              <span className="font-bold text-white text-sm">100% Nacional</span>
            </div>
            <div>
              <span className="block text-[#8f98a0]">CORRENTE</span>
              <span className="font-bold text-[#66c0f4] text-sm">10A a 5.000A</span>
            </div>
            <div>
              <span className="block text-[#8f98a0]">CONFORMIDADE</span>
              <span className="font-bold text-white text-sm">NR-10 e NR-12</span>
            </div>
            <div>
              <span className="block text-[#8f98a0]">PEÇAS</span>
              <span className="font-bold text-white text-sm">Pronta Aquisição</span>
            </div>
          </div>
        </div>

        {/* LINHA DO TEMPO COMPACTA COM SCROLL (Visualização opcional) */}
        <div className="rounded-xl border border-[#2a475e] bg-[#171a21] p-6 space-y-4 shadow-lg">
          <div className="flex items-center justify-between border-b border-[#2a475e] pb-3">
            <div className="flex items-center gap-2.5">
              <History className="h-5 w-5 text-[#66c0f4]" />
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Linha do Tempo de Evolução
                </h2>
                <span className="text-[11px] text-[#8f98a0]">
                  Role lateralmente para visualizar os marcos históricos da empresa
                </span>
              </div>
            </div>

            {/* Scroll Navigation Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollTimeline("left")}
                aria-label="Rolar para esquerda"
                className="h-8 w-8 rounded-lg bg-[#101822] border border-[#2a475e] hover:border-[#66c0f4] text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollTimeline("right")}
                aria-label="Rolar para direita"
                className="h-8 w-8 rounded-lg bg-[#101822] border border-[#2a475e] hover:border-[#66c0f4] text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Compact Scrollable Track */}
          <div
            ref={timelineRef}
            className="flex gap-4 overflow-x-auto pb-3 pt-1 scroll-smooth scrollbar-thin scrollbar-thumb-[#2a475e] scrollbar-track-transparent"
            style={{ scrollbarWidth: "thin" }}
          >
            {TIMELINE_EVENTS.map((event, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-72 rounded-lg bg-[#101822] border border-[#2a475e]/70 p-4 space-y-2 hover:border-[#66c0f4]/60 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded bg-[#2a475e]/60 px-2 py-0.5 text-xs font-mono font-bold text-[#66c0f4]">
                    {event.year}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#66c0f4]" />
                </div>
                <h3 className="text-sm font-bold text-white line-clamp-1">
                  {event.title}
                </h3>
                <p className="text-xs text-[#8f98a0] leading-relaxed line-clamp-3">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* EQUIPE DA EMPRESA */}
        <div className="space-y-6">
          <div className="border-b border-[#2a475e] pb-3">
            <div className="flex items-center gap-2.5">
              <Users className="h-5 w-5 text-[#66c0f4]" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Nossa Equipe de Engenharia
                </h2>
                <p className="text-xs text-[#8f98a0]">
                  Especialistas multidisciplinares que transformam desafios elétricos complexos em operação estável
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_AREAS.map((team, idx) => {
              const Icon = team.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#1b2838] to-[#171a21] p-5 sm:p-6 space-y-3 hover:border-[#66c0f4]/80 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a475e] text-[#66c0f4] border border-[#66c0f4]/30 group-hover:scale-105 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white group-hover:text-[#66c0f4] transition-colors">
                          {team.area}
                        </h3>
                        <span className="text-[11px] font-mono text-[#66c0f4] block">
                          {team.role}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-[#c6d4df] leading-relaxed">
                      {team.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#2a475e]/60 flex items-center justify-between text-[11px] font-mono text-[#8f98a0]">
                    <span>Atuação Integrada</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#66c0f4]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sede & Infraestrutura */}
        <div className="rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#171a21] via-[#1b2e3f]/60 to-[#101822] p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[10px] font-mono uppercase text-[#66c0f4] tracking-wider block">
                SEDE OPERACIONAL & FÁBRICA
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                DSR Soluções em Eletrônica Industrial
              </h3>
              <p className="text-xs sm:text-sm text-[#8f98a0] leading-relaxed max-w-2xl">
                Nossa fábrica em São Paulo abriga laboratório de potência, estoque estratégico de componentes de reposição e linhas de montagem de cubículos com rastreabilidade total.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/90 pt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#66c0f4]" /> Avenida Líder, 652 - Cidade Líder, São Paulo - SP
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-[#66c0f4]" /> (11) 4564-5200
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/produtos"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] font-bold py-3 px-4 text-xs uppercase tracking-wider transition-all shadow-md text-center"
              >
                <span>Conhecer Nossos Produtos</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/trabalhe-conosco"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#101822] hover:bg-[#1a2c3f] border border-[#2a475e] text-white font-semibold py-3 px-4 text-xs uppercase tracking-wider transition-colors text-center"
              >
                <span>Faça Parte da Equipe</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
