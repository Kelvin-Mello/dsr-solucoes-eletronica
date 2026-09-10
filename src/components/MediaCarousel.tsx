"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Layers, X } from "lucide-react";
import { ProductMedia } from "@/mock/products";

interface MediaCarouselProps {
  mediaList: ProductMedia[];
  productName: string;
}

interface CarouselScrollbarProps {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

function CarouselScrollbar({
  currentIndex,
  total,
  onPrev,
  onNext,
  onSelect,
}: CarouselScrollbarProps) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  if (total <= 1) return null;

  // Largura do slider proporcional à quantidade de mídias
  const thumbWidthPercent = Math.min(Math.max(100 / total, 12), 26);
  const maxLeft = 100 - thumbWidthPercent;
  const currentLeft = (currentIndex / (total - 1)) * maxLeft;

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetIndex = Math.round(ratio * (total - 1));
    onSelect(targetIndex);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDragging(true);
  };

  React.useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const moveX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, moveX / rect.width));
      const targetIndex = Math.round(ratio * (total - 1));
      onSelect(targetIndex);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, total, onSelect]);

  return (
    <div className="flex items-center gap-1.5 w-full bg-[#0a0f16] border border-[#1d2f42] rounded px-1.5 py-1 select-none">
      {/* Botão Seta Esquerda < */}
      <button
        type="button"
        onClick={onPrev}
        className="flex h-5 w-6 items-center justify-center rounded bg-[#101b26] hover:bg-[#1a334d] text-[#8fa7be] hover:text-white border border-[#1e3347] hover:border-[#66c0f4] transition-colors shrink-0 active:scale-95"
        title="Mídia anterior"
        aria-label="Mídia anterior"
      >
        <ChevronLeft className="h-3.5 w-3.5" />
      </button>

      {/* Trilha do Slider com movimentação em passos */}
      <div
        ref={trackRef}
        onClick={handleTrackClick}
        className="relative flex-1 h-4.5 bg-[#0c141e] hover:bg-[#0f1824] rounded-sm cursor-pointer overflow-hidden border border-[#162536] transition-colors"
        title="Clique ou arraste para avançar pelas fotos e vídeos"
      >
        {/* Marcadores de passos discretos na trilha */}
        <div className="absolute inset-0 flex justify-between items-center px-1 pointer-events-none opacity-20">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-0.5 rounded-full ${
                i === currentIndex ? "bg-[#66c0f4]" : "bg-[#2a475e]"
              }`}
            />
          ))}
        </div>

        {/* Thumb (pastilha deslizante estilo Steam que anda em passos de acordo com o total) */}
        <div
          onMouseDown={handleMouseDown}
          style={{
            width: `${thumbWidthPercent}%`,
            left: `${currentLeft}%`,
          }}
          className={`absolute top-0.5 bottom-0.5 rounded-sm transition-all duration-150 cursor-grab active:cursor-grabbing border ${
            isDragging
              ? "bg-[#38729e] border-[#66c0f4] shadow-[0_0_8px_rgba(102,192,244,0.6)]"
              : "bg-[#1f3a54] hover:bg-[#2a4d70] border-[#335c85] hover:border-[#66c0f4]/80"
          }`}
        />
      </div>

      {/* Botão Seta Direita > */}
      <button
        type="button"
        onClick={onNext}
        className="flex h-5 w-6 items-center justify-center rounded bg-[#101b26] hover:bg-[#1a334d] text-[#8fa7be] hover:text-white border border-[#1e3347] hover:border-[#66c0f4] transition-colors shrink-0 active:scale-95"
        title="Próxima mídia"
        aria-label="Próxima mídia"
      >
        <ChevronRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

export function MediaCarousel({ mediaList, productName }: MediaCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const thumbnailRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const modalThumbnailRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const currentMedia = mediaList[selectedIndex] || mediaList[0];

  const handleSelect = (index: number) => {
    setDirection(index > selectedIndex ? 1 : -1);
    setSelectedIndex(index);
  };

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setSelectedIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
  }, [mediaList.length]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setSelectedIndex((prev) => (prev === mediaList.length - 1 ? 0 : prev + 1));
  }, [mediaList.length]);

  // Auto-scroll da miniatura ativa
  useEffect(() => {
    if (thumbnailRefs.current[selectedIndex]) {
      thumbnailRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
    if (isFullscreen && modalThumbnailRefs.current[selectedIndex]) {
      modalThumbnailRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedIndex, isFullscreen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape" && isFullscreen) setIsFullscreen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, isFullscreen]);

  if (!mediaList || mediaList.length === 0) {
    return (
      <div className="flex h-96 w-full items-center justify-center rounded-lg bg-[#171a21] border border-[#2a475e] text-[#8f98a0]">
        Nenhuma mídia disponível
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full select-none">
      {/* Main Showcase Frame - Clicável diretamente na foto para abrir visualização completa */}
      <div
        onClick={() => setIsFullscreen(true)}
        className="relative aspect-video w-full overflow-hidden rounded-md bg-[#000000] border border-[#2a475e] shadow-[0_10px_30px_rgba(0,0,0,0.8)] group cursor-pointer"
        title="Clique na foto para ampliar a visualização"
      >
        {/* Subtle Steam Gradient Vignette */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80" />

        {/* Animated Main Media with Framer Motion Fade */}
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentMedia.id}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.015 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative h-full w-full flex items-center justify-center bg-[#000000]"
          >
            {currentMedia.type === "video" ? (
              <video
                src={currentMedia.url}
                controls
                className="h-full w-full object-contain object-center bg-[#000000]"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <Image
                src={currentMedia.url}
                alt={currentMedia.alt || `${productName} - Imagem ${selectedIndex + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-contain object-center bg-[#000000]"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Top Badges & Status */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
          {currentMedia.badge && (
            <span className="inline-flex items-center gap-1.5 rounded bg-[#101822]/85 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#66c0f4] border border-[#66c0f4]/30 backdrop-blur-md shadow-md">
              <Layers className="h-3 w-3 text-[#66c0f4]" />
              {currentMedia.badge}
            </span>
          )}
          <span className="inline-flex items-center gap-1 rounded bg-[#171a21]/80 px-2 py-1 text-xs font-mono text-[#c6d4df] border border-[#2a475e]/80 backdrop-blur-md">
            {selectedIndex + 1} / {mediaList.length}
          </span>
        </div>

        {/* Fullscreen indicator button */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
          <span className="hidden sm:inline-flex items-center gap-1 rounded bg-[#101822]/85 px-2.5 py-1 text-[11px] font-medium text-[#66c0f4] border border-[#2a475e] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Clique para ampliar
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(true);
            }}
            className="flex h-8 w-8 items-center justify-center rounded bg-[#101822]/80 text-[#c6d4df] border border-[#2a475e] hover:border-[#66c0f4] hover:text-[#66c0f4] transition-all opacity-80 group-hover:opacity-100 duration-200 shadow-md"
            title="Clique para ampliar em tela cheia"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation Arrows na Pré-visualização */}
        {mediaList.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Mídia anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-9 items-center justify-center rounded bg-[#101822]/80 text-[#c6d4df] border border-[#2a475e] hover:bg-[#2a475e] hover:text-[#66c0f4] hover:border-[#66c0f4] transition-all duration-150 backdrop-blur-sm shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Próxima mídia"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-9 items-center justify-center rounded bg-[#101822]/80 text-[#c6d4df] border border-[#2a475e] hover:bg-[#2a475e] hover:text-[#66c0f4] hover:border-[#66c0f4] transition-all duration-150 backdrop-blur-sm shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Bottom Title / Description overlay */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-col gap-0.5 pointer-events-none">
          <h4 className="text-sm font-semibold text-[#ffffff] drop-shadow-md">
            {currentMedia.title}
          </h4>
          {currentMedia.description && (
            <p className="text-xs text-[#c6d4df] line-clamp-1 drop-shadow-md opacity-90">
              {currentMedia.description}
            </p>
          )}
        </div>
      </div>

      {/* Thumbnails Row (Steam style horizontal tray) */}
      <div className="relative flex items-center gap-2.5 overflow-x-auto px-3 py-2 scrollbar-thin">
        {mediaList.map((media, index) => {
          const isActive = index === selectedIndex;
          return (
            <button
              key={media.id}
              ref={(el) => {
                thumbnailRefs.current[index] = el;
              }}
              type="button"
              onClick={() => handleSelect(index)}
              className={`relative flex-shrink-0 h-16 w-28 md:h-20 md:w-36 overflow-hidden rounded transition-all duration-200 text-left group bg-[#000000] ${
                isActive
                  ? "ring-2 ring-[#66c0f4] ring-offset-2 ring-offset-[#171a21] opacity-100 shadow-[0_0_14px_rgba(102,192,244,0.5)] scale-[1.02]"
                  : "opacity-60 hover:opacity-100 border border-[#2a475e] hover:border-[#66c0f4]/60"
              }`}
            >
              <Image
                src={media.thumbnailUrl || media.url}
                alt={media.alt || `${productName} miniatura ${index + 1}`}
                fill
                sizes="150px"
                className="object-contain object-center bg-[#000000] transition-transform duration-300 group-hover:scale-105"
              />
              {/* Highlight Overlay on Hover/Active */}
              <div
                className={`absolute inset-0 transition-colors duration-150 pointer-events-none ${
                  isActive
                    ? "bg-[#66c0f4]/10"
                    : "bg-transparent group-hover:bg-[#66c0f4]/5"
                }`}
              />
              {media.badge && (
                <span className="absolute bottom-1 right-1 rounded bg-[#101822]/90 px-1.5 py-0.5 text-[9px] font-medium text-[#c6d4df] border border-[#2a475e]">
                  {media.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Horizontal Step-Based Scrollbar (Steam Style) */}
      <CarouselScrollbar
        currentIndex={selectedIndex}
        total={mediaList.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onSelect={handleSelect}
      />

      {/* Fullscreen Lightbox Modal - Visualização Completa e Maior com Setas Laterais */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-md p-3 md:p-6 select-none"
            onClick={() => setIsFullscreen(false)}
          >
            {/* Top Bar inside Modal - Apenas o nome da foto de forma centralizada */}
            <div
              className="w-full max-w-7xl relative flex items-center justify-center z-50 py-3 px-4 rounded-lg bg-[#101822]/90 border border-[#2a475e]/80 backdrop-blur-md shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Título da foto centralizado */}
              <h3 className="text-sm md:text-base font-semibold text-white text-center px-12 truncate">
                {currentMedia.title}
              </h3>

              {/* Botão Fechar no canto direito */}
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#1b2838] text-[#c6d4df] border border-[#2a475e] hover:border-[#66c0f4] hover:text-white hover:bg-[#66c0f4]/20 transition-all font-bold"
                title="Fechar visualização (Esc)"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Center Viewing Stage with Lateral Navigation Arrows */}
            <div
              className="relative flex-1 w-full max-w-7xl flex items-center justify-center my-2 md:my-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Seta Lateral: ANTERIOR */}
              {mediaList.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Mídia anterior"
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 flex h-14 w-12 md:h-16 md:w-14 items-center justify-center rounded-xl bg-[#101822]/90 text-[#c6d4df] border border-[#2a475e] hover:bg-[#1b2838] hover:text-[#66c0f4] hover:border-[#66c0f4] hover:scale-110 active:scale-95 transition-all shadow-[0_6px_25px_rgba(0,0,0,0.85)] backdrop-blur-md cursor-pointer group"
                  title="Anterior (Seta Esquerda)"
                >
                  <ChevronLeft className="h-8 w-8 md:h-9 md:w-9 text-[#c6d4df] group-hover:text-[#66c0f4] transition-colors" />
                </button>
              )}

              {/* Seta Lateral: PRÓXIMA */}
              {mediaList.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Próxima mídia"
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 flex h-14 w-12 md:h-16 md:w-14 items-center justify-center rounded-xl bg-[#101822]/90 text-[#c6d4df] border border-[#2a475e] hover:bg-[#1b2838] hover:text-[#66c0f4] hover:border-[#66c0f4] hover:scale-110 active:scale-95 transition-all shadow-[0_6px_25px_rgba(0,0,0,0.85)] backdrop-blur-md cursor-pointer group"
                  title="Próximo (Seta Direita)"
                >
                  <ChevronRight className="h-8 w-8 md:h-9 md:w-9 text-[#c6d4df] group-hover:text-[#66c0f4] transition-colors" />
                </button>
              )}

              {/* Animated Media Frame */}
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={currentMedia.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="relative w-full h-full flex items-center justify-center p-2"
                >
                  {currentMedia.type === "video" ? (
                    <video
                      src={currentMedia.url}
                      controls
                      autoPlay
                      className="max-h-[76vh] max-w-[85vw] object-contain rounded-lg border border-[#2a475e] shadow-2xl bg-black"
                    />
                  ) : (
                    <div className="relative flex items-center justify-center max-h-[76vh] max-w-[85vw] w-full h-full">
                      <img
                        src={currentMedia.url}
                        alt={currentMedia.alt || currentMedia.title}
                        className="max-h-[76vh] max-w-[85vw] w-auto h-auto object-contain rounded-lg border border-[#2a475e] shadow-[0_15px_50px_rgba(0,0,0,0.95)] bg-black select-none"
                      />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Modal Bottom Footer: Apenas Carrossel de Imagens + Contagem Centralizada Abaixo */}
            <div
              className="w-full max-w-7xl flex flex-col items-center gap-2 z-50 bg-[#101822]/90 border border-[#2a475e]/80 rounded-lg py-2.5 px-4 backdrop-blur-md shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Carrossel de imagens dentro do modal com padding vertical ampliado para não cortar o ring azul */}
              {mediaList.length > 1 && (
                <>
                  <div className="w-full flex items-center justify-center gap-3 overflow-x-auto py-3.5 px-4 scrollbar-thin">
                    {mediaList.map((media, index) => {
                      const isActive = index === selectedIndex;
                      return (
                        <button
                          key={media.id}
                          ref={(el) => {
                            modalThumbnailRefs.current[index] = el;
                          }}
                          type="button"
                          onClick={() => handleSelect(index)}
                          className={`relative h-14 w-24 flex-shrink-0 rounded-md transition-all bg-black ${
                            isActive
                              ? "ring-2 ring-[#66c0f4] ring-offset-2 ring-offset-[#101822] scale-105 opacity-100 shadow-[0_0_14px_rgba(102,192,244,0.6)]"
                              : "opacity-50 hover:opacity-100 border border-[#2a475e] hover:border-[#66c0f4]/50"
                          }`}
                          title={media.title}
                        >
                          <div className="relative w-full h-full overflow-hidden rounded">
                            <img
                              src={media.thumbnailUrl || media.url}
                              alt={media.title}
                              className="h-full w-full object-contain bg-black"
                            />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Horizontal Step-Based Scrollbar inside Modal */}
                  <div className="w-full max-w-xl px-2">
                    <CarouselScrollbar
                      currentIndex={selectedIndex}
                      total={mediaList.length}
                      onPrev={handlePrev}
                      onNext={handleNext}
                      onSelect={handleSelect}
                    />
                  </div>
                </>
              )}

              {/* Contagem de fotos/vídeos centralizada abaixo do carrossel */}
              <div className="flex items-center justify-center pb-0.5">
                <span className="font-mono text-xs text-[#c6d4df] bg-[#171a21] px-3.5 py-1 rounded-full border border-[#2a475e] shadow-inner">
                  {selectedIndex + 1} / {mediaList.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
