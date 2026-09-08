"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Wrench,
  Sparkles
} from "lucide-react";

export interface FeaturedItem {
  id: string;
  type: "produto" | "servico";
  typeLabel: string;
  title: string;
  subtitle: string;
  tagline: string;
  href: string;
  mainImage: string;
  thumbnails: string[];
  recommendationReason: string;
  recommendationTarget: string;
  tags: string[];
  statusBadge: string;
  ctaText: string;
  iconType?: "zap" | "wrench" | "cpu" | "shield";
  imagePosition?: string;
}

const FEATURED_ITEMS: FeaturedItem[] = [
  {
    id: "feat-rit-d",
    type: "produto",
    typeLabel: "Produto Industrial",
    title: "Retificador Industrial Analógico",
    subtitle: "Modelo RIT-D",
    tagline: "Alimentação CC ininterrupta de alta robustez para subestações e geração elétrica de 12V a 250Vcc e até 5.000A.",
    href: "/produtos/retificador-padrao-industrial-modelo-rit-d",
    mainImage: "/images/products/rit-d-cabinet-real.jpg",
    thumbnails: [
      "/images/products/rit-d-cabinet-real.jpg",
      "/images/products/rit-d-supervisao-real.jpg",
      "/images/products/rit-d-udq.jpg",
      "/images/products/rit-d-cabinet.jpg"
    ],
    recommendationReason: "Recomendado pela DSR para",
    recommendationTarget: "Subestações, Siderurgia & Ambientes Industriais Severos",
    tags: ["Tiristorizado Analógico", "12 a 250Vcc", "UDQ 1-4 Etapas", "PCIs Universais"],
    statusBadge: "Fabricação Sob Medida",
    ctaText: "Ver Ficha Técnica",
    iconType: "zap",
    imagePosition: "object-[center_28%]"
  },
  {
    id: "feat-retrofit",
    type: "servico",
    typeLabel: "Serviço Especializado",
    title: "Retrofitting & Modernização de Painéis",
    subtitle: "Modernização de Cubículos com até 65% de Economia",
    tagline: "Substituição cirúrgica de semicondutores e placas obsoletas mantendo transformadores de força e barramentos originais.",
    href: "/servicos/retrofitting-e-modernizacao",
    mainImage: "/images/products/rectifier-retrofit.jpg",
    thumbnails: [
      "/images/products/rectifier-retrofit.jpg",
      "/images/products/retrofit-thyristor.jpg",
      "/images/products/rit-d-udq.jpg",
      "/images/categories/cat-energia-ininterrupta.jpg"
    ],
    recommendationReason: "Solução DSR com",
    recommendationTarget: "Economia de até 65% em relação à substituição civil",
    tags: ["Sem Obra Civil", "Parada 24h a 48h", "Garantia Estendida", "MTBF Elevado"],
    statusBadge: "Estudo Gratuito de Viabilidade",
    ctaText: "Solicitar Diagnóstico",
    iconType: "wrench"
  },
  {
    id: "feat-dk10-dk30",
    type: "produto",
    typeLabel: "Produto Industrial",
    title: "Retificador Tiristorizado Digital",
    subtitle: "Modelo DK10 / DK30",
    tagline: "Controle microcontrolado de alta exatidão com IHM touchscreen, registro de eventos e comunicação nativa para automação SCADA.",
    href: "/produtos/retificador-industrial-tiristorizado-digital-dk10-dk30",
    mainImage: "/images/products/rectifier-front.jpg",
    thumbnails: [
      "/images/products/rectifier-front.jpg",
      "/images/products/rectifier-hmi.jpg",
      "/images/products/rectifier-internals.jpg",
      "/images/products/rit-d-supervisao.jpg"
    ],
    recommendationReason: "Recomendado pela DSR para",
    recommendationTarget: "Automação Integrada SCADA & Concessionárias de Energia",
    tags: ["Microcontrolado", "IHM Touchscreen", "Modbus-RTU", "Histórico de Falhas"],
    statusBadge: "Pronta Entrega sob Projeto",
    ctaText: "Ver Especificações",
    iconType: "cpu"
  },
  {
    id: "feat-digitalizacao",
    type: "servico",
    typeLabel: "Serviço Especializado",
    title: "Digitalização de Ativos & Indústria 4.0",
    subtitle: "Telemetria e Monitoramento Contínuo em Tempo Real",
    tagline: "Transdutores digitais de tensão, corrente e temperatura com integração a supervisórios SCADA para manutenção preditiva.",
    href: "/servicos/digitalizacao-de-ativos-e-industria-4-0",
    mainImage: "/images/categories/cat-modulos-digitalizacao.jpg",
    thumbnails: [
      "/images/categories/cat-modulos-digitalizacao.jpg",
      "/images/categories/cat-supervisao-sensores.jpg",
      "/images/products/rectifier-hmi.jpg",
      "/images/products/rit-d-supervisao.jpg"
    ],
    recommendationReason: "Solução DSR para",
    recommendationTarget: "Transformar Painéis Legados em Nós Conectados na Nuvem",
    tags: ["Amostragem True RMS", "Modbus / Profinet", "Prevenção de Paradas", "Laudo Técnico"],
    statusBadge: "Proposta Técnica Direta",
    ctaText: "Conectar Planta",
    iconType: "zap"
  },
  {
    id: "feat-modular",
    type: "produto",
    typeLabel: "Produto Industrial",
    title: "Retificador Modular Chaveado Digital",
    subtitle: "Modelo DK-SR10 / DK-SR30",
    tagline: "Módulos de alta densidade energética substituíveis a quente sem interrupção de carga para telecomunicações e data centers.",
    href: "/produtos/retificador-modular-chaveado-digital-dk-sr10-dk-sr30",
    mainImage: "/images/categories/cat-retificadores.jpg",
    thumbnails: [
      "/images/categories/cat-retificadores.jpg",
      "/images/products/rectifier-internals.jpg",
      "/images/products/rectifier-front.jpg",
      "/images/categories/cat-quadros-distribuicao.jpg"
    ],
    recommendationReason: "Recomendado pela DSR para",
    recommendationTarget: "Centros de Dados, Telecomunicações e Espaços Compactos",
    tags: ["Redundância N+1", "Hot-Swap", "Eficiência >94%", "Fator de Potência 0,99"],
    statusBadge: "Alta Disponibilidade",
    ctaText: "Consultar Módulos",
    iconType: "cpu"
  },
  {
    id: "feat-manutencao",
    type: "servico",
    typeLabel: "Serviço Especializado",
    title: "Manutenção Preventiva & Preditiva 24/7",
    subtitle: "Plantão Nacional com Ensaios e Emissão de ART",
    tagline: "Termografia infravermelha, testes de isolação de semicondutores e planos contratuais para máxima confiabilidade operacional.",
    href: "/servicos/manutencao-preventiva-industrial",
    mainImage: "/images/products/filter-harmonics.jpg",
    thumbnails: [
      "/images/products/filter-harmonics.jpg",
      "/images/products/rectifier-internals.jpg",
      "/images/products/rit-d-cabinet.jpg",
      "/images/categories/cat-qualidade-energia.jpg"
    ],
    recommendationReason: "Garantia de Campo com",
    recommendationTarget: "Atendimento Emergencial 24h e Registro CREA/ART",
    tags: ["Plantão 24/7", "Termografia IR", "Relatório com ART", "MTBF Maximizado"],
    statusBadge: "Plantão Emergencial",
    ctaText: "Contratar Plantão",
    iconType: "shield"
  }
];

export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredThumbIndex, setHoveredThumbIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentItem = FEATURED_ITEMS[currentIndex];

  // Alternância automática (autoplay) a cada 5.5 segundos
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FEATURED_ITEMS.length);
      setHoveredThumbIndex(null);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentIndex]);

  const handlePrev = () => {
    setHoveredThumbIndex(null);
    setCurrentIndex((prev) => (prev - 1 + FEATURED_ITEMS.length) % FEATURED_ITEMS.length);
  };

  const handleNext = () => {
    setHoveredThumbIndex(null);
    setCurrentIndex((prev) => (prev + 1) % FEATURED_ITEMS.length);
  };

  const handleSelectSlide = (idx: number) => {
    setHoveredThumbIndex(null);
    setCurrentIndex(idx);
  };

  // Imagem exibida no lado esquerdo (se estiver com hover em um dos 4 thumbnails da direita, exibe o preview correspondente)
  const displayImage = 
    hoveredThumbIndex !== null && currentItem.thumbnails[hoveredThumbIndex]
      ? currentItem.thumbnails[hoveredThumbIndex]
      : currentItem.mainImage;

  return (
    <div 
      className="w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHoveredThumbIndex(null);
      }}
    >
      {/* Header do Carrossel no estilo exato da Steam */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2.5">
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide uppercase drop-shadow-sm">
            Destaques e recomendados
          </h2>
          <span className="hidden sm:inline-flex items-center gap-1 rounded bg-[#66c0f4]/15 border border-[#66c0f4]/40 px-2 py-0.5 text-[10px] font-mono text-[#66c0f4] uppercase font-bold">
            Produtos & Serviços
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/produtos"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-[#8f98a0] hover:text-[#66c0f4] transition-colors py-1 px-2.5 rounded bg-[#101822]/60 hover:bg-[#101822] border border-[#2a475e]/70"
          >
            Ver todos os produtos e serviços
            <ArrowUpRight className="h-3.5 w-3.5 text-[#66c0f4]" />
          </Link>
        </div>
      </div>

      {/* Card Principal do Carrossel (Estilo Steam Showcase) */}
      <div className="relative group/card rounded-xl overflow-hidden bg-gradient-to-br from-[#0c131c] via-[#101a24] to-[#152331] border border-[#2b4863] shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-md transition-all">
        
        {/* Botão Anterior (Seta Esquerda) */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Slide anterior"
          className="absolute left-0 top-0 bottom-0 z-30 w-10 sm:w-12 bg-gradient-to-r from-black/80 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 flex items-center justify-center text-white/80 hover:text-[#66c0f4] transition-all hover:w-14 cursor-pointer"
        >
          <ChevronLeft className="h-8 w-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] transform group-hover/card:-translate-x-0.5 transition-transform" />
        </button>

        {/* Botão Próximo (Seta Direita) */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Próximo slide"
          className="absolute right-0 top-0 bottom-0 z-30 w-10 sm:w-12 bg-gradient-to-l from-black/80 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 flex items-center justify-center text-white/80 hover:text-[#66c0f4] transition-all hover:w-14 cursor-pointer"
        >
          <ChevronRight className="h-8 w-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] transform group-hover/card:translate-x-0.5 transition-transform" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:h-[470px] xl:h-[490px]">
          
          {/* LADO ESQUERDO: Imagem Grande de Destaque (~65% do card em telas grandes com tamanho padronizado) */}
          <Link
            href={currentItem.href}
            className="lg:col-span-7 xl:col-span-8 relative group/preview block h-[260px] sm:h-[340px] lg:h-full w-full overflow-hidden bg-[#070b10]"
          >
            {/* Imagem travada no container com absolute inset-0 e object-cover */}
            <img
              key={displayImage}
              src={displayImage}
              alt={currentItem.title}
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover/preview:scale-105 filter brightness-[0.95] ${
                displayImage.includes("rit-d-cabinet-real") 
                  ? "object-[center_28%]" 
                  : (currentItem.imagePosition || "object-center")
              }`}
            />

            {/* Vinheta escura de sombreamento inferior */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b121a] via-[#0b121a]/30 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b121a]/60 via-transparent to-transparent pointer-events-none" />

            {/* Badge de Categoria no Topo Esquerdo */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
              <span className={`rounded px-2.5 py-1 text-[11px] font-mono font-extrabold uppercase tracking-wider shadow-md backdrop-blur-sm ${
                currentItem.type === "produto"
                  ? "bg-[#66c0f4] text-[#0a1118]"
                  : "bg-emerald-400 text-[#091512]"
              }`}>
                {currentItem.typeLabel}
              </span>
              <span className="rounded bg-[#101822]/85 border border-[#2a475e] px-2 py-1 text-[11px] font-mono text-[#c6d4df] backdrop-blur-sm">
                {currentItem.statusBadge}
              </span>
            </div>

            {/* Título e Tagline sobre a imagem grande no estilo Steam */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-tight">
                {currentItem.title}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#c6d4df] max-w-2xl line-clamp-2 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                {currentItem.tagline}
              </p>
            </div>
          </Link>

          {/* LADO DIREITO: Painel com 4 Thumbnails, Recomendação e Preço/Ação (~35%) */}
          <div className="lg:col-span-5 xl:col-span-4 bg-[#0d151e]/98 border-t lg:border-t-0 lg:border-l border-[#2a475e]/70 p-4 sm:p-5 lg:p-6 flex flex-col justify-between lg:h-full overflow-hidden">
            
            {/* Título do Produto / Serviço no Topo do Painel */}
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-[#2a475e]/60 pb-2.5 mb-3">
                <div>
                  <h4 className="text-base sm:text-lg font-extrabold text-white tracking-tight leading-snug line-clamp-2">
                    {currentItem.title}
                  </h4>
                  <p className="text-[11px] font-mono text-[#66c0f4] tracking-wide mt-0.5">
                    {currentItem.subtitle}
                  </p>
                </div>
              </div>

              {/* Grid 2x2 com 4 Thumbnails Interativas padronizadas */}
              <div className="grid grid-cols-2 gap-2 my-2">
                {currentItem.thumbnails.slice(0, 4).map((thumb, idx) => {
                  const isHovered = hoveredThumbIndex === idx;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredThumbIndex(idx)}
                      onMouseLeave={() => setHoveredThumbIndex(null)}
                      className={`relative aspect-video rounded-md overflow-hidden bg-[#070b10] cursor-pointer transition-all duration-200 border ${
                        isHovered 
                          ? "border-[#66c0f4] scale-[1.03] shadow-[0_0_12px_rgba(102,192,244,0.5)] z-10" 
                          : "border-[#2a475e]/80 hover:border-[#66c0f4]/70 opacity-90 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={thumb}
                        alt={`${currentItem.title} preview ${idx + 1}`}
                        className={`absolute inset-0 h-full w-full object-cover ${
                          thumb.includes("rit-d-cabinet-real") 
                            ? "object-[center_28%]" 
                            : "object-center"
                        }`}
                      />
                      <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                    </div>
                  );
                })}
              </div>

              {/* Bloco de Recomendação (Estilo o farol de aviso do print da Steam) */}
              <div className="mt-3 p-2.5 rounded-lg bg-[#111c27] border border-[#253e56] flex items-center gap-3">
                <div className="h-9 w-9 rounded flex items-center justify-center bg-[#1a2d3e] border border-[#66c0f4]/40 text-[#66c0f4] flex-shrink-0 shadow-[0_0_8px_rgba(102,192,244,0.3)]">
                  {currentItem.iconType === "wrench" ? (
                    <Wrench className="h-5 w-5" />
                  ) : currentItem.iconType === "cpu" ? (
                    <Cpu className="h-5 w-5" />
                  ) : currentItem.iconType === "shield" ? (
                    <ShieldCheck className="h-5 w-5" />
                  ) : (
                    <Zap className="h-5 w-5 text-amber-400" />
                  )}
                </div>

                <div className="text-xs leading-tight min-w-0">
                  <div className="font-semibold text-[#8f98a0] text-[10px] uppercase tracking-wider">
                    {currentItem.recommendationReason}:
                  </div>
                  <div className="font-bold text-white text-[11px] truncate mt-0.5">
                    {currentItem.recommendationTarget}
                  </div>
                </div>
              </div>

              {/* Badges de Parâmetros Técnicos / Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {currentItem.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded bg-[#162534] border border-[#2b4966] px-2 py-0.5 text-[10px] font-mono text-[#a6bfd6]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Rodapé do Card: Box de Cotação / Preço Steam com Botão de Ação */}
            <div className="pt-4 border-t border-[#2a475e]/60 flex items-center justify-between gap-3 mt-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase text-[#8f98a0]">
                  Disponibilidade DSR
                </span>
                <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  {currentItem.statusBadge}
                </span>
              </div>

              <Link
                href={currentItem.href}
                className="group/btn relative inline-flex items-center justify-center gap-1.5 rounded bg-gradient-to-r from-[#66c0f4] via-[#4ba6df] to-[#1b75bc] text-[#0a1118] font-black text-xs uppercase tracking-wider px-4 py-2.5 shadow-[0_0_15px_rgba(102,192,244,0.4)] hover:brightness-110 hover:shadow-[0_0_25px_rgba(102,192,244,0.6)] active:scale-95 transition-all"
              >
                <span>{currentItem.ctaText}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Navegação Inferior por Cápsulas (Pílulas arredondadas exatamente como na Steam) */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3.5">
        {FEATURED_ITEMS.map((item, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelectSlide(idx)}
              aria-label={`Ir para slide ${idx + 1}: ${item.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? "w-8 sm:w-10 bg-[#66c0f4] shadow-[0_0_10px_rgba(102,192,244,0.8)] ring-1 ring-white/60"
                  : "w-2.5 sm:w-3 bg-[#2a475e]/80 hover:bg-[#3b678c] hover:w-5"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
