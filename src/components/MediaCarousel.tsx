"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Shield, Sparkles, Layers } from "lucide-react";
import { ProductMedia } from "@/mock/products";

interface MediaCarouselProps {
  mediaList: ProductMedia[];
  productName: string;
}

export function MediaCarousel({ mediaList, productName }: MediaCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

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
      {/* Main Showcase Frame */}
      <div className="relative aspect-video w-full overflow-hidden rounded-md bg-[#000000] border border-[#2a475e] shadow-[0_10px_30px_rgba(0,0,0,0.8)] group">
        {/* Subtle Steam Gradient Vignette */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#101822]/90 via-transparent to-transparent opacity-80" />

        {/* Animated Main Media with Framer Motion Fade */}
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentMedia.id}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.015 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={currentMedia.url}
              alt={currentMedia.alt || `${productName} - Imagem ${selectedIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Top Badges & Status */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
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

        {/* Fullscreen Button */}
        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded bg-[#101822]/80 text-[#c6d4df] border border-[#2a475e] hover:border-[#66c0f4] hover:text-[#66c0f4] transition-all opacity-0 group-hover:opacity-100 duration-200"
          title="Expandir Imagem"
        >
          <Maximize2 className="h-4 w-4" />
        </button>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Mídia anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-9 items-center justify-center rounded bg-[#101822]/80 text-[#c6d4df] border border-[#2a475e] hover:bg-[#2a475e] hover:text-[#66c0f4] hover:border-[#66c0f4] transition-all duration-150 backdrop-blur-sm shadow-lg"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Próxima mídia"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-11 w-9 items-center justify-center rounded bg-[#101822]/80 text-[#c6d4df] border border-[#2a475e] hover:bg-[#2a475e] hover:text-[#66c0f4] hover:border-[#66c0f4] transition-all duration-150 backdrop-blur-sm shadow-lg"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Bottom Title / Description overlay */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-col gap-0.5">
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
      <div className="relative flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
        {mediaList.map((media, index) => {
          const isActive = index === selectedIndex;
          return (
            <button
              key={media.id}
              type="button"
              onClick={() => handleSelect(index)}
              className={`relative flex-shrink-0 h-16 w-28 md:h-20 md:w-36 overflow-hidden rounded transition-all duration-200 text-left group ${
                isActive
                  ? "ring-2 ring-[#66c0f4] ring-offset-2 ring-offset-[#1b2838] opacity-100 shadow-[0_0_12px_rgba(102,192,244,0.45)] scale-[1.02]"
                  : "opacity-60 hover:opacity-100 border border-[#2a475e] hover:border-[#66c0f4]/60"
              }`}
            >
              <Image
                src={media.thumbnailUrl || media.url}
                alt={media.alt || `${productName} miniatura ${index + 1}`}
                fill
                sizes="150px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Highlight Overlay on Hover/Active */}
              <div
                className={`absolute inset-0 transition-colors duration-150 ${
                  isActive
                    ? "bg-[#66c0f4]/10"
                    : "bg-transparent group-hover:bg-[#66c0f4]/5"
                }`}
              />
              {media.badge && (
                <span className="absolute bottom-1 right-1 rounded bg-[#101822]/90 px-1.5 py-0.5 text-[9px] font-medium text-[#c6d4df]">
                  {media.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0e141b]/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsFullscreen(false)}
          >
            <div
              className="relative max-w-6xl w-full aspect-video rounded-lg overflow-hidden border border-[#66c0f4]/40 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentMedia.url}
                alt={currentMedia.alt}
                fill
                className="object-contain"
              />
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="absolute top-4 right-4 rounded-full bg-[#1b2838]/80 text-white p-2 border border-[#66c0f4] hover:bg-[#66c0f4] hover:text-[#101822] transition-all font-bold"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-[#1b2838]/90 border border-[#2a475e] p-3 rounded">
                <div className="text-[#66c0f4] font-semibold">{currentMedia.title}</div>
                <div className="text-xs text-[#c6d4df]">{currentMedia.description}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
