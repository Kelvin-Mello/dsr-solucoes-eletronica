"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, SlidersHorizontal, Sparkles, Maximize2, X } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
  aspectRatio?: string; // e.g. "aspect-[3/4]" or "aspect-video"
  showControls?: boolean;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Antes (Painel Legado)",
  afterLabel = "Depois (Retrofit DSR)",
  className = "",
  aspectRatio = "aspect-[3/4]",
  showControls = true,
}: BeforeAfterSliderProps) {
  // Posição padrão da linha vertical: exatamente no centro (50%)
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  // Manipulador de movimento proporcional
  const updatePosition = useCallback((clientX: number, targetContainer: HTMLDivElement | null) => {
    if (!targetContainer) return;
    const rect = targetContainer.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  // Eventos de Mouse e Touch no container principal
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX, isFullscreen ? modalContainerRef.current : containerRef.current);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX, isFullscreen ? modalContainerRef.current : containerRef.current);
    }
  };

  // Listeners globais enquanto arrasta (permite arrastar mesmo saindo da borda)
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, isFullscreen ? modalContainerRef.current : containerRef.current);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        updatePosition(e.touches[0].clientX, isFullscreen ? modalContainerRef.current : containerRef.current);
      }
    };

    const handleStopDragging = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleStopDragging);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleStopDragging);
    window.addEventListener("touchcancel", handleStopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleStopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleStopDragging);
      window.removeEventListener("touchcancel", handleStopDragging);
    };
  }, [isDragging, isFullscreen, updatePosition]);

  // Fechar modal com Escape e suporte a teclado (Setas)
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isFullscreen]);

  // Teclado para acessibilidade (Setas Esquerda/Direita)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <>
      <div className={`relative flex flex-col w-full select-none ${className}`}>
        {/* Main Comparison Stage */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="slider"
          aria-valuenow={Math.round(sliderPosition)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Comparador Antes e Depois"
          className={`relative w-full overflow-hidden rounded-xl bg-black border border-[#2a475e] shadow-[0_10px_35px_rgba(0,0,0,0.85)] cursor-ew-resize group focus:outline-none focus:ring-2 focus:ring-[#66c0f4] touch-none ${aspectRatio}`}
        >
          {/* CAMADA 1 (BASE - DEPOIS): Imagem do Painel Modernizado Retrofit DSR */}
          <div className="absolute inset-0 w-full h-full bg-black">
            <img
              src={afterImage}
              alt={afterLabel}
              className="w-full h-full object-cover object-center pointer-events-none"
            />
            {/* Badge Depois (Canto Superior Direito) */}
            <div className="absolute top-3 right-3 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822]/90 border border-[#66c0f4]/60 px-3 py-1 text-xs font-mono font-bold text-[#66c0f4] uppercase tracking-wider backdrop-blur-md shadow-lg">
                <Sparkles className="h-3.5 w-3.5 text-[#66c0f4] animate-pulse" />
                {afterLabel}
              </span>
            </div>
          </div>

          {/* CAMADA 2 (TOPO RECORTADO - ANTES): Imagem do Painel Legado */}
          <div
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            }}
            className="absolute inset-0 w-full h-full bg-black pointer-events-none"
          >
            <img
              src={beforeImage}
              alt={beforeLabel}
              className="w-full h-full object-cover object-center pointer-events-none"
            />
            {/* Badge Antes (Canto Superior Esquerdo) */}
            <div className="absolute top-3 left-3 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-black/85 border border-white/20 px-3 py-1 text-xs font-mono font-bold text-[#c6d4df] uppercase tracking-wider backdrop-blur-md shadow-lg">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                {beforeLabel}
              </span>
            </div>
          </div>

          {/* LINHA VERTICAL DIVISÓRIA (Arrastável) */}
          <div
            style={{ left: `${sliderPosition}%` }}
            className="absolute top-0 bottom-0 w-0.5 bg-[#66c0f4] shadow-[0_0_14px_rgba(102,192,244,0.95)] z-20 pointer-events-none -translate-x-1/2"
          >
            {/* Manopla Central com Ícones de Seta Dupla < | > */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#101822]/95 border-2 border-[#66c0f4] shadow-[0_0_22px_rgba(102,192,244,0.85)] flex items-center justify-center pointer-events-none group-hover:scale-110 active:scale-95 transition-transform duration-150">
              <div className="flex items-center text-[#66c0f4]">
                <ChevronLeft className="h-4 w-4 stroke-[3]" />
                <div className="w-[1.5px] h-3.5 bg-[#66c0f4]/80 rounded-full mx-[-2px]" />
                <ChevronRight className="h-4 w-4 stroke-[3]" />
              </div>
            </div>
          </div>

          {/* Botão de Tela Cheia no Canto Inferior Direito */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(true);
            }}
            className="absolute bottom-3 right-3 z-30 flex h-8 w-8 items-center justify-center rounded-lg bg-[#101822]/85 text-[#c6d4df] border border-[#2a475e] hover:border-[#66c0f4] hover:text-[#66c0f4] transition-all backdrop-blur-md opacity-80 group-hover:opacity-100 shadow-md cursor-pointer"
            title="Expandir visualização comparativa"
          >
            <Maximize2 className="h-4 w-4" />
          </button>

          {/* Dica Interativa Flutuante no Rodapé (Some suavemente após interação) */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-opacity duration-300">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 border border-[#2a475e] px-3.5 py-1 text-[11px] font-mono text-[#c6d4df] backdrop-blur-md shadow-md">
              <SlidersHorizontal className="h-3 w-3 text-[#66c0f4]" />
              Arraste a linha para transformar em tempo real
            </span>
          </div>
        </div>

        {/* Barra de Controles Rápidos Inferior */}
        {showControls && (
          <div className="flex items-center justify-between mt-2.5 px-1 text-xs text-[#8f98a0]">
            <button
              type="button"
              onClick={() => setSliderPosition(100)}
              className={`font-mono text-xs px-2.5 py-1 rounded transition-colors ${
                sliderPosition >= 95 ? "text-amber-400 font-bold bg-[#171a21]" : "hover:text-white"
              }`}
            >
              ← Ver 100% Antes
            </button>

            <button
              type="button"
              onClick={() => setSliderPosition(50)}
              className="font-mono text-xs text-[#66c0f4] hover:underline px-2.5 py-1 rounded bg-[#101822] border border-[#2a475e] hover:border-[#66c0f4]"
            >
              Centralizar (50/50)
            </button>

            <button
              type="button"
              onClick={() => setSliderPosition(0)}
              className={`font-mono text-xs px-2.5 py-1 rounded transition-colors ${
                sliderPosition <= 5 ? "text-[#66c0f4] font-bold bg-[#171a21]" : "hover:text-white"
              }`}
            >
              Ver 100% Depois →
            </button>
          </div>
        )}
      </div>

      {/* Modal Lightbox de Comparação em Tela Cheia */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-md p-3 md:p-6 select-none animate-fadeIn"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Barra Superior do Modal */}
          <div
            className="w-full max-w-6xl relative flex items-center justify-between z-50 py-3 px-4 rounded-lg bg-[#101822]/95 border border-[#2a475e] backdrop-blur-md shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#66c0f4]" />
              <h3 className="text-sm md:text-base font-semibold text-white">
                Comparador Interativo de Retrofitting: Antes & Depois
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1b2838] text-[#c6d4df] border border-[#2a475e] hover:border-[#66c0f4] hover:text-white transition-all font-bold cursor-pointer"
              title="Fechar (Esc)"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Palco Central Ampliado */}
          <div
            ref={modalContainerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="relative h-[74vh] max-h-[820px] aspect-[3/4] max-w-[95vw] my-2 mx-auto overflow-hidden rounded-xl bg-black border border-[#2a475e] shadow-2xl cursor-ew-resize select-none touch-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Camada Depois */}
            <div className="absolute inset-0 w-full h-full bg-black">
              <img
                src={afterImage}
                alt={afterLabel}
                className="w-full h-full object-cover object-center pointer-events-none"
              />
              <div className="absolute top-4 right-4 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822]/90 border border-[#66c0f4]/60 px-3.5 py-1.5 text-xs font-mono font-bold text-[#66c0f4] uppercase tracking-wider backdrop-blur-md shadow-lg">
                  <Sparkles className="h-3.5 w-3.5 text-[#66c0f4]" />
                  {afterLabel}
                </span>
              </div>
            </div>

            {/* Camada Antes Recortada */}
            <div
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
              className="absolute inset-0 w-full h-full bg-black pointer-events-none"
            >
              <img
                src={beforeImage}
                alt={beforeLabel}
                className="w-full h-full object-cover object-center pointer-events-none"
              />
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-black/85 border border-white/20 px-3.5 py-1.5 text-xs font-mono font-bold text-[#c6d4df] uppercase tracking-wider backdrop-blur-md shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  {beforeLabel}
                </span>
              </div>
            </div>

            {/* Linha Divisória */}
            <div
              style={{ left: `${sliderPosition}%` }}
              className="absolute top-0 bottom-0 w-0.5 bg-[#66c0f4] shadow-[0_0_16px_rgba(102,192,244,1)] z-20 pointer-events-none -translate-x-1/2"
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-14 w-14 rounded-full bg-[#101822]/95 border-2 border-[#66c0f4] shadow-[0_0_25px_rgba(102,192,244,0.9)] flex items-center justify-center pointer-events-none">
                <div className="flex items-center text-[#66c0f4]">
                  <ChevronLeft className="h-5 w-5 stroke-[3]" />
                  <div className="w-[1.5px] h-4 bg-[#66c0f4]/80 rounded-full mx-[-2px]" />
                  <ChevronRight className="h-5 w-5 stroke-[3]" />
                </div>
              </div>
            </div>
          </div>

          {/* Rodapé do Modal com Ações */}
          <div
            className="w-full max-w-md flex items-center justify-between py-2 px-4 rounded-lg bg-[#101822]/90 border border-[#2a475e]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSliderPosition(100)}
              className="font-mono text-xs text-[#8f98a0] hover:text-white px-2 py-1"
            >
              ← 100% Antes
            </button>
            <button
              type="button"
              onClick={() => setSliderPosition(50)}
              className="font-mono text-xs text-[#66c0f4] font-bold px-3 py-1 bg-[#171a21] rounded border border-[#2a475e]"
            >
              Centralizar (50%)
            </button>
            <button
              type="button"
              onClick={() => setSliderPosition(0)}
              className="font-mono text-xs text-[#8f98a0] hover:text-white px-2 py-1"
            >
              100% Depois →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
