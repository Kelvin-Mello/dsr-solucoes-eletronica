"use client";

import React, { useState } from "react";
import { Send, Download } from "lucide-react";
import { Product } from "@/mock/products";
import { QuoteModal } from "./QuoteModal";

interface ProductSidebarProps {
  product: Product;
}

export function ProductSidebar({ product }: ProductSidebarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadDatasheet = () => {
    if (product.datasheet_url) {
      const link = document.createElement("a");
      link.href = product.datasheet_url;
      link.download = `Catalogo-DSR-${product.codigo_modelo.replace(/[^a-zA-Z0-9_-]/g, "_")}.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Download da Ficha Técnica Oficial (${product.codigo_modelo}.pdf) iniciado.`);
    }, 800);
  };

  return (
    <>
      <div className="rounded-xl bg-[#171a21]/90 border border-[#2a475e] p-4 sm:p-5 shadow-xl flex flex-col justify-between h-full">
        {/* Cover Thumbnail do Produto - Apenas a imagem limpa, sem textos sobrepostos */}
        {product.midias && product.midias.length > 0 && (
          <div className="relative overflow-hidden rounded-lg border border-[#3b678c]/60 bg-black shadow-md">
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <img
                src={product.midias[0].url || product.midias[0].thumbnailUrl}
                alt={product.midias[0].alt || product.nome}
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
        )}

        {/* Texto breve e curto falando sobre o produto */}
        <div className="flex-1 flex flex-col justify-center py-4 space-y-2.5">
          <p className="text-xs sm:text-sm font-semibold text-[#66c0f4] leading-relaxed">
            {product.tagline}
          </p>
          <p className="text-xs text-[#c6d4df] leading-relaxed line-clamp-4">
            {product.descricao}
          </p>
        </div>

        {/* Botões de Ação Imediata (Solicitar Cotação e Catálogo) */}
        <div className="pt-3 border-t border-[#2a475e]/80 flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-gradient-to-r from-[#66c0f4] via-[#4ba6df] to-[#1b75bc] py-3 px-4 text-center font-bold uppercase tracking-wider text-[#0e141b] text-xs sm:text-sm shadow-[0_0_15px_rgba(102,192,244,0.4)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_25px_rgba(102,192,244,0.6)] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <Send className="h-4 w-4 text-[#0e141b] transition-transform group-hover:translate-x-1" />
            <span>Solicitar Cotação</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadDatasheet}
            disabled={downloading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1b2838] hover:bg-[#203248] text-[#c6d4df] hover:text-white py-2.5 px-3 text-xs font-semibold uppercase tracking-wider border border-[#2a475e] hover:border-[#66c0f4] transition-all shadow-sm"
          >
            <Download className={`h-4 w-4 text-[#66c0f4] ${downloading ? "animate-bounce" : ""}`} />
            <span>{downloading ? "Iniciando Download..." : (product.datasheet_url ? "Baixar Catálogo Oficial (PDF)" : "Baixar Ficha Técnica")}</span>
          </button>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
