"use client";

import React, { useState } from "react";
import { Sparkles, Layers, SlidersHorizontal, CheckCircle2 } from "lucide-react";
import { ServiceItem } from "@/mock/services";
import { MediaCarousel } from "./MediaCarousel";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

interface ServiceHeroMediaProps {
  service: ServiceItem;
}

export function ServiceHeroMedia({ service }: ServiceHeroMediaProps) {
  const isRetrofit = service.slug === "retrofitting-e-modernizacao";
  // Para o serviço de retrofitting, o comparador Antes & Depois fica ativo por padrão
  const [activeTab, setActiveTab] = useState<"slider" | "gallery">(
    isRetrofit ? "slider" : "gallery"
  );

  // Para outros serviços, renderiza diretamente o MediaCarousel padrão
  if (!isRetrofit) {
    return (
      <MediaCarousel
        mediaList={service.midias}
        productName={service.title}
      />
    );
  }

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Barra de Abas do Topo: Alternar entre Comparativo e Galeria */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#2a475e]/70">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("slider")}
            className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === "slider"
                ? "bg-[#66c0f4] text-[#0e141b] shadow-[0_0_15px_rgba(102,192,244,0.45)]"
                : "bg-[#101822] text-[#8f98a0] hover:text-white border border-[#2a475e] hover:border-[#66c0f4]/50"
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Antes &amp; Depois Interativo</span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-black ${
                activeTab === "slider"
                  ? "bg-[#0e141b]/20 text-[#0e141b]"
                  : "bg-[#66c0f4]/20 text-[#66c0f4]"
              }`}
            >
              Em Tempo Real
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("gallery")}
            className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeTab === "gallery"
                ? "bg-[#66c0f4] text-[#0e141b] shadow-[0_0_15px_rgba(102,192,244,0.45)]"
                : "bg-[#101822] text-[#8f98a0] hover:text-white border border-[#2a475e] hover:border-[#66c0f4]/50"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Galeria Geral ({service.midias?.length || 0})</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[#8f98a0]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Caso Real DSR: Retificador 2</span>
        </div>
      </div>

      {/* Área Principal de Exibição */}
      <div className="flex-1 flex flex-col justify-center">
        {activeTab === "slider" ? (
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-[420px] mx-auto">
              <BeforeAfterSlider
                beforeImage="/images/services/retrofit-before.jpg"
                afterImage="/images/services/retrofit-after.jpg"
                beforeLabel="Antes (Painel Legado)"
                afterLabel="Depois (Retrofit DSR)"
                aspectRatio="aspect-[3/4]"
                showControls={true}
              />
            </div>
          </div>
        ) : (
          <MediaCarousel
            mediaList={service.midias}
            productName={service.title}
          />
        )}
      </div>
    </div>
  );
}
