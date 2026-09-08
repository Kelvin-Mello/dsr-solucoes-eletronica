"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";

interface EventSlide {
  id: string;
  // Card 1: Produto (Grande Esquerda)
  card1: {
    badge: string;
    title: string;
    subtitle: string;
    href: string;
    image: string;
    discountBadge: string;
    originalPrice?: string;
    mainPrice: string;
  };
  // Card 2: Serviço (Grande Centro)
  card2: {
    badge: string;
    title: string;
    subtitle: string;
    href: string;
    image: string;
    discountBadge: string;
    originalPrice?: string;
    mainPrice: string;
  };
  // Card 3: Notícias e Novidades (Empilhado Superior Direita)
  card3: {
    badge: string;
    title: string;
    subtitle: string;
    href: string;
    image: string;
    discountBadge: string;
    originalPrice?: string;
    mainPrice: string;
  };
  // Card 4: Clientes (Empilhado Inferior Direita)
  card4: {
    badge: string;
    title: string;
    subtitle: string;
    href: string;
    image: string;
    discountBadge: string;
    originalPrice?: string;
    mainPrice: string;
  };
}

const STEAM_SLIDES: EventSlide[] = [
  {
    id: "slide-1",
    card1: {
      badge: "DESTAQUE EM PRODUTOS",
      title: "Retificadores Industriais Analógicos",
      subtitle: "Modelo RIT-D • 12 a 250Vcc até 5.000A",
      href: "/produtos/retificador-padrao-industrial-modelo-rit-d",
      image: "/images/products/rit-d-cabinet-real.jpg",
      discountBadge: "PRODUTO",
      originalPrice: "Fabricação Sob Medida",
      mainPrice: "Ver Modelo RIT-D"
    },
    card2: {
      badge: "SERVIÇO ESPECIALIZADO",
      title: "Retrofitting & Modernização de Painéis",
      subtitle: "Economia cirúrgica de até 65% sem obra civil",
      href: "/servicos/retrofitting-e-modernizacao",
      image: "/images/products/rectifier-retrofit.jpg",
      discountBadge: "-65%",
      originalPrice: "Substituição Total",
      mainPrice: "Solicitar Diagnóstico"
    },
    card3: {
      badge: "NOTÍCIAS & NOVIDADES",
      title: "Retrofit Emergencial de 2.500A em Siderúrgica",
      subtitle: "Retomada da produção industrial em apenas 36 horas",
      href: "/novidades/retrofit-emergencial-ponte-tiristorizada-2500a",
      image: "/images/categories/cat-energia-ininterrupta.jpg",
      discountBadge: "CASO REAL",
      originalPrice: "Plantão 24/7",
      mainPrice: "Ler Caso Completo"
    },
    card4: {
      badge: "CLIENTES & MERCADO",
      title: "Subestações, Siderurgia & Indústria Pesada",
      subtitle: "Mais de 100 plantas industriais atendidas em todo o Brasil",
      href: "/clientes",
      image: "/images/company/dsr-hero-industrial.jpg",
      discountBadge: "PARCEIROS",
      originalPrice: "Homologações DSR",
      mainPrice: "Conhecer Clientes"
    }
  },
  {
    id: "slide-2",
    card1: {
      badge: "DESTAQUE EM PRODUTOS",
      title: "Retificador Tiristorizado Digital",
      subtitle: "Modelo DK10 / DK30 com IHM Touchscreen e Modbus",
      href: "/produtos/retificador-industrial-tiristorizado-digital-dk10-dk30",
      image: "/images/products/rectifier-front.jpg",
      discountBadge: "DIGITAL",
      originalPrice: "SCADA Nativo",
      mainPrice: "Ver Modelo DK10/30"
    },
    card2: {
      badge: "SERVIÇO ESPECIALIZADO",
      title: "Manutenção Preventiva & Preditiva 24/7",
      subtitle: "Termografia infravermelha com laudo técnico e ART",
      href: "/servicos/manutencao-preventiva-industrial",
      image: "/images/products/filter-harmonics.jpg",
      discountBadge: "PLANTÃO",
      originalPrice: "Atendimento Nacional",
      mainPrice: "Contratar Plantão"
    },
    card3: {
      badge: "NOTÍCIAS & NOVIDADES",
      title: "Unidade de Diodo de Queda (UDQ): Funcionamento",
      subtitle: "Proteção contra sobretensão em recarga de baterias",
      href: "/novidades/unidade-diodo-queda-udq-protecao-consumidor",
      image: "/images/products/rit-d-udq.jpg",
      discountBadge: "ARTIGO",
      originalPrice: "Engenharia DSR",
      mainPrice: "Ver Artigo Técnico"
    },
    card4: {
      badge: "CLIENTES & MERCADO",
      title: "Concessionárias de Energia & Subestações",
      subtitle: "Sistemas CC críticos de 125Vcc e 250Vcc para relés e disjuntores",
      href: "/clientes",
      image: "/images/categories/cat-qualidade-energia.jpg",
      discountBadge: "SETOR",
      originalPrice: "Geração & Transmissão",
      mainPrice: "Ver Soluções por Setor"
    }
  },
  {
    id: "slide-3",
    card1: {
      badge: "DESTAQUE EM PRODUTOS",
      title: "Retificador Modular Chaveado Digital",
      subtitle: "Modelo DK-SR10 / DK-SR30 com Hot-Swap N+1",
      href: "/produtos/retificador-modular-chaveado-digital-dk-sr10-dk-sr30",
      image: "/images/categories/cat-retificadores.jpg",
      discountBadge: "HOT-SWAP",
      originalPrice: "Rendimento >95%",
      mainPrice: "Ver Modelo DK-SR"
    },
    card2: {
      badge: "SERVIÇO ESPECIALIZADO",
      title: "Digitalização de Ativos & Indústria 4.0",
      subtitle: "Transformação de painéis legados em nós conectados na nuvem",
      href: "/servicos/digitalizacao-de-ativos-e-industria-4-0",
      image: "/images/categories/cat-modulos-digitalizacao.jpg",
      discountBadge: "INDÚSTRIA 4.0",
      originalPrice: "Telemetria IoT",
      mainPrice: "Conectar Planta"
    },
    card3: {
      badge: "NOTÍCIAS & NOVIDADES",
      title: "Supervisão Duplo Microcontrolador DSR",
      subtitle: "Processamento dedicado isolado da comunicação Modbus",
      href: "/novidades/supervisao-duplo-microcontrolador-dk10-dk30",
      image: "/images/products/rit-d-supervisao-real.jpg",
      discountBadge: "TECNOLOGIA",
      originalPrice: "Arquitetura Segura",
      mainPrice: "Conhecer Arquitetura"
    },
    card4: {
      badge: "CLIENTES & MERCADO",
      title: "Siderurgia, Mineração, Papel & Celulose",
      subtitle: "Resistência a atmosferas com poeira condutiva e alta temperatura",
      href: "/clientes",
      image: "/images/categories/cat-quadros-distribuicao.jpg",
      discountBadge: "INDÚSTRIA",
      originalPrice: "Ambientes Severos",
      mainPrice: "Ver Casos Industriais"
    }
  },
  {
    id: "slide-4",
    card1: {
      badge: "DESTAQUE EM PRODUTOS",
      title: "No-Breaks & Inversores Industriais",
      subtitle: "Alimentação ininterrupta CA/CC de alta robustez",
      href: "/produtos",
      image: "/images/products/retrofit-thyristor.jpg",
      discountBadge: "CATÁLOGO",
      originalPrice: "27 Equipamentos",
      mainPrice: "Ver Catálogo Completo"
    },
    card2: {
      badge: "SERVIÇO ESPECIALIZADO",
      title: "Consultoria & Diagnóstico Especializado",
      subtitle: "Ensaios térmicos, elétricos e dimensionamento com ART",
      href: "/servicos",
      image: "/images/products/rectifier-hmi.jpg",
      discountBadge: "LAUDO ART",
      originalPrice: "CREA Homologado",
      mainPrice: "Consultar Engenharia"
    },
    card3: {
      badge: "NOTÍCIAS & NOVIDADES",
      title: "Filtragem Ativa & Correção de Fator de Potência",
      subtitle: "Eliminação de distorções harmônicas e multas de concessionária",
      href: "/novidades",
      image: "/images/products/filter-harmonics.jpg",
      discountBadge: "EFICIÊNCIA",
      originalPrice: "Qualidade de Energia",
      mainPrice: "Ver Todas as Notícias"
    },
    card4: {
      badge: "CLIENTES & MERCADO",
      title: "Parceiros & Atendimento em Todo o Brasil",
      subtitle: "Equipes volantes prontas para atendimento emergencial",
      href: "/clientes",
      image: "/images/company/dsr-hero-industrial.jpg",
      discountBadge: "NACIONAL",
      originalPrice: "Plantão Especializado",
      mainPrice: "Ver Mapa de Clientes"
    }
  }
];

export function SteamEventsGrid() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slide = STEAM_SLIDES[currentSlideIndex];

  // Autoplay a cada 6 segundos
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % STEAM_SLIDES.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlideIndex]);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + STEAM_SLIDES.length) % STEAM_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % STEAM_SLIDES.length);
  };

  return (
    <div 
      className="w-full select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header idêntico à Steam */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2.5">
          <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide drop-shadow-sm">
            Destaques e eventos
          </h2>
        </div>

        <Link
          href="/produtos"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1b2838] hover:text-black bg-[#dcdedf] hover:bg-white transition-all py-1 px-3.5 rounded shadow-sm hover:shadow"
        >
          Ver mais
        </Link>
      </div>

      {/* Container Principal com Navegação Lateral e Grid de 4 Cards */}
      <div className="relative group/events">
        
        {/* Seta Esquerda Flutuante */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Slide anterior de eventos"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 h-24 w-8 sm:w-10 bg-gradient-to-r from-black/90 to-black/30 hover:from-[#66c0f4]/80 hover:to-[#66c0f4]/20 border border-[#2a475e]/80 hover:border-[#66c0f4] rounded-l flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
        >
          <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>

        {/* Seta Direita Flutuante */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Próximo slide de eventos"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 h-24 w-8 sm:w-10 bg-gradient-to-l from-black/90 to-black/30 hover:from-[#66c0f4]/80 hover:to-[#66c0f4]/20 border border-[#2a475e]/80 hover:border-[#66c0f4] rounded-r flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
        >
          <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>

        {/* Grid de 4 Cards no formato exato da imagem Steam:
            - Card 1 (Grande, vertical/quadrado)
            - Card 2 (Grande, vertical/quadrado)
            - Card 3 & 4 (Direita empilhados horizontalmente)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          
          {/* ============================================================== */}
          {/* CARD 1: PRODUTOS (Grande Vertical)                             */}
          {/* ============================================================== */}
          <Link
            href={slide.card1.href}
            className="group block relative overflow-hidden rounded bg-[#0e1621] border border-[#23384d] hover:border-[#66c0f4] shadow-[0_12px_30px_rgba(0,0,0,0.65)] transition-all duration-300 h-[340px] sm:h-[370px] lg:h-[390px] flex flex-col justify-between"
          >
            {/* Topo Badge Magenta (Estilo OFERTA DO MEIO DA SEMANA) */}
            <div className="relative w-full z-20">
              <span className="inline-block bg-[#a6256c] text-white font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider px-3 py-1 shadow-md">
                {slide.card1.badge}
              </span>
            </div>

            {/* Imagem de Fundo com zoom e contraste */}
            <div className="absolute inset-0 z-0 bg-[#070b10]">
              <img
                src={slide.card1.image}
                alt={slide.card1.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091018] via-[#091018]/40 to-transparent" />
            </div>

            {/* Conteúdo sobreposto na imagem */}
            <div className="relative z-10 p-4 mt-auto">
              <h3 className="text-base sm:text-lg font-black text-white leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:text-[#66c0f4] transition-colors">
                {slide.card1.title}
              </h3>
              <p className="text-xs text-[#c6d4df] mt-1 line-clamp-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                {slide.card1.subtitle}
              </p>
            </div>

            {/* Barra de Ação / Preço Steam (Verde Neon + Valor) */}
            <div className="relative z-10 bg-[#070e17]/95 border-t border-[#1e344a] flex items-stretch justify-end">
              <div className="bg-[#a4d007] text-[#1b2838] font-black text-xs sm:text-sm px-2.5 py-1.5 flex items-center justify-center tracking-tight shadow-sm">
                {slide.card1.discountBadge}
              </div>
              <div className="bg-[#121c27] px-3 py-1.5 flex flex-col justify-center text-right min-w-[140px]">
                {slide.card1.originalPrice && (
                  <span className="text-[10px] font-mono text-[#718292] leading-none">
                    {slide.card1.originalPrice}
                  </span>
                )}
                <span className="text-xs sm:text-[13px] font-bold text-[#bcee6d] group-hover:text-white leading-tight transition-colors">
                  {slide.card1.mainPrice}
                </span>
              </div>
            </div>
          </Link>

          {/* ============================================================== */}
          {/* CARD 2: SERVIÇOS (Grande Vertical)                             */}
          {/* ============================================================== */}
          <Link
            href={slide.card2.href}
            className="group block relative overflow-hidden rounded bg-[#0e1621] border border-[#23384d] hover:border-[#66c0f4] shadow-[0_12px_30px_rgba(0,0,0,0.65)] transition-all duration-300 h-[340px] sm:h-[370px] lg:h-[390px] flex flex-col justify-between"
          >
            {/* Topo Badge Magenta (Estilo OFERTA DO MEIO DA SEMANA) */}
            <div className="relative w-full z-20">
              <span className="inline-block bg-[#a6256c] text-white font-extrabold text-[10px] sm:text-[11px] uppercase tracking-wider px-3 py-1 shadow-md">
                {slide.card2.badge}
              </span>
            </div>

            {/* Imagem de Fundo com zoom e contraste */}
            <div className="absolute inset-0 z-0 bg-[#070b10]">
              <img
                src={slide.card2.image}
                alt={slide.card2.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091018] via-[#091018]/40 to-transparent" />
            </div>

            {/* Conteúdo sobreposto na imagem */}
            <div className="relative z-10 p-4 mt-auto">
              <h3 className="text-base sm:text-lg font-black text-white leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:text-[#66c0f4] transition-colors">
                {slide.card2.title}
              </h3>
              <p className="text-xs text-[#c6d4df] mt-1 line-clamp-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                {slide.card2.subtitle}
              </p>
            </div>

            {/* Barra de Ação / Preço Steam (Verde Neon + Valor) */}
            <div className="relative z-10 bg-[#070e17]/95 border-t border-[#1e344a] flex items-stretch justify-end">
              <div className="bg-[#a4d007] text-[#1b2838] font-black text-xs sm:text-sm px-2.5 py-1.5 flex items-center justify-center tracking-tight shadow-sm">
                {slide.card2.discountBadge}
              </div>
              <div className="bg-[#121c27] px-3 py-1.5 flex flex-col justify-center text-right min-w-[140px]">
                {slide.card2.originalPrice && (
                  <span className="text-[10px] font-mono text-[#718292] leading-none">
                    {slide.card2.originalPrice}
                  </span>
                )}
                <span className="text-xs sm:text-[13px] font-bold text-[#bcee6d] group-hover:text-white leading-tight transition-colors">
                  {slide.card2.mainPrice}
                </span>
              </div>
            </div>
          </Link>

          {/* ============================================================== */}
          {/* COLUNA 3: DOIS CARDS EMPILHADOS (Notícias em cima, Clientes em baixo) */}
          {/* ============================================================== */}
          <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-3.5 h-[340px] sm:h-[370px] lg:h-[390px]">
            
            {/* CARD 3: NOTÍCIAS E NOVIDADES (Empilhado Superior) */}
            <Link
              href={slide.card3.href}
              className="group relative overflow-hidden rounded bg-[#0e1621] border border-[#23384d] hover:border-[#66c0f4] shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-all duration-300 flex-1 flex flex-col justify-between"
            >
              {/* Topo Badge Azul/Ciano (Estilo OFERTA DO DIA) */}
              <div className="relative w-full z-20">
                <span className="inline-block bg-[#007ba2] text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 shadow-md">
                  {slide.card3.badge}
                </span>
              </div>

              {/* Imagem de Fundo com zoom e contraste */}
              <div className="absolute inset-0 z-0 bg-[#070b10]">
                <img
                  src={slide.card3.image}
                  alt={slide.card3.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091018] via-[#091018]/50 to-transparent" />
              </div>

              {/* Conteúdo sobreposto */}
              <div className="relative z-10 px-3.5 py-2 mt-auto">
                <h4 className="text-sm font-bold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:text-[#66c0f4] transition-colors line-clamp-1">
                  {slide.card3.title}
                </h4>
                <p className="text-[11px] text-[#c6d4df] mt-0.5 line-clamp-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  {slide.card3.subtitle}
                </p>
              </div>

              {/* Barra de Ação / Preço Steam */}
              <div className="relative z-10 bg-[#070e17]/95 border-t border-[#1e344a] flex items-stretch justify-end">
                <div className="bg-[#0092c8] text-white font-black text-xs px-2 py-1 flex items-center justify-center tracking-tight">
                  {slide.card3.discountBadge}
                </div>
                <div className="bg-[#121c27] px-2.5 py-1 flex flex-col justify-center text-right min-w-[125px]">
                  {slide.card3.originalPrice && (
                    <span className="text-[9px] font-mono text-[#718292] leading-none">
                      {slide.card3.originalPrice}
                    </span>
                  )}
                  <span className="text-xs font-bold text-[#66c0f4] group-hover:text-white leading-tight transition-colors">
                    {slide.card3.mainPrice}
                  </span>
                </div>
              </div>
            </Link>

            {/* CARD 4: CLIENTES DA EMPRESA (Empilhado Inferior) */}
            <Link
              href={slide.card4.href}
              className="group relative overflow-hidden rounded bg-[#0e1621] border border-[#23384d] hover:border-[#66c0f4] shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-all duration-300 flex-1 flex flex-col justify-between"
            >
              {/* Topo Badge Azul/Ciano (Estilo OFERTA DO DIA) */}
              <div className="relative w-full z-20">
                <span className="inline-block bg-[#007ba2] text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 shadow-md">
                  {slide.card4.badge}
                </span>
              </div>

              {/* Imagem de Fundo com zoom e contraste */}
              <div className="absolute inset-0 z-0 bg-[#070b10]">
                <img
                  src={slide.card4.image}
                  alt={slide.card4.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091018] via-[#091018]/50 to-transparent" />
              </div>

              {/* Conteúdo sobreposto */}
              <div className="relative z-10 px-3.5 py-2 mt-auto">
                <h4 className="text-sm font-bold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:text-[#66c0f4] transition-colors line-clamp-1">
                  {slide.card4.title}
                </h4>
                <p className="text-[11px] text-[#c6d4df] mt-0.5 line-clamp-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  {slide.card4.subtitle}
                </p>
              </div>

              {/* Barra de Ação / Preço Steam */}
              <div className="relative z-10 bg-[#070e17]/95 border-t border-[#1e344a] flex items-stretch justify-end">
                <div className="bg-[#0092c8] text-white font-black text-xs px-2 py-1 flex items-center justify-center tracking-tight">
                  {slide.card4.discountBadge}
                </div>
                <div className="bg-[#121c27] px-2.5 py-1 flex flex-col justify-center text-right min-w-[125px]">
                  {slide.card4.originalPrice && (
                    <span className="text-[9px] font-mono text-[#718292] leading-none">
                      {slide.card4.originalPrice}
                    </span>
                  )}
                  <span className="text-xs font-bold text-[#66c0f4] group-hover:text-white leading-tight transition-colors">
                    {slide.card4.mainPrice}
                  </span>
                </div>
              </div>
            </Link>

          </div>

        </div>

      </div>

      {/* Indicadores de Paginação por Cápsula (Exatamente como os 4 traços da imagem da Steam) */}
      <div className="flex items-center justify-center gap-1.5 mt-3.5">
        {STEAM_SLIDES.map((s, idx) => {
          const isActive = currentSlideIndex === idx;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentSlideIndex(idx)}
              aria-label={`Ir para conjunto de eventos ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                isActive
                  ? "w-8 bg-[#66c0f4] shadow-[0_0_8px_rgba(102,192,244,0.7)]"
                  : "w-2.5 bg-[#2a475e]/80 hover:bg-[#3b678c] hover:w-4"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
