"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ChevronRight, FileText } from "lucide-react";
import { Product } from "@/mock/products";
import { QuoteModal } from "@/components/QuoteModal";

interface CategoryProductGridProps {
  products: Product[];
}

export function CategoryProductGrid({ products }: CategoryProductGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const q = searchQuery.toLowerCase();
    return products.filter((p) => {
      const matchName = p.nome.toLowerCase().includes(q);
      const matchCode = p.codigo_modelo.toLowerCase().includes(q);
      const matchTag = p.tagline.toLowerCase().includes(q);
      const matchSpecs = p.especificacoes_rapidas.some(
        (s) => s.chave.toLowerCase().includes(q) || s.valor.toLowerCase().includes(q)
      );
      return matchName || matchCode || matchTag || matchSpecs;
    });
  }, [products, searchQuery]);

  const handleOpenQuote = (product: Product) => {
    setSelectedProductForQuote(product);
    setIsQuoteOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8f98a0]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar nesta categoria (ex: modelo, tensão, protocolo)..."
          className="w-full rounded-lg border border-[#2a475e] bg-[#101822] pl-10 pr-10 py-2.5 text-xs sm:text-sm text-white placeholder-[#8f98a0] focus:border-[#66c0f4] focus:outline-none transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8f98a0] hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const primaryImage = product.midias[0]?.url || "/images/products/rit-d-cabinet.jpg";
            const featuredSpecs = product.especificacoes_rapidas.slice(0, 3);

            return (
              <div
                key={product.id}
                className="group flex flex-col rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#1b2838] to-[#171a21] overflow-hidden shadow-lg hover:border-[#66c0f4]/80 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                {/* Media Container (Clickable Link) */}
                <Link
                  href={`/produtos/${product.slug}`}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-[#101822] block cursor-pointer"
                  title={`Ver detalhes do ${product.nome}`}
                >
                  <Image
                    src={primaryImage}
                    alt={product.nome}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171a21] via-transparent to-black/20 pointer-events-none" />

                  {/* Availability Badge */}
                  <div className="absolute top-2.5 left-2.5">
                    <span
                      className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-mono font-semibold backdrop-blur-md shadow-sm ${
                        product.status_disponibilidade === "Em Estoque"
                          ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/50"
                          : product.status_disponibilidade === "Engenharia Customizada"
                          ? "bg-cyan-950/80 text-cyan-300 border border-cyan-500/50"
                          : "bg-amber-950/80 text-amber-300 border border-amber-500/50"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          product.status_disponibilidade === "Em Estoque"
                            ? "bg-emerald-400"
                            : product.status_disponibilidade === "Engenharia Customizada"
                            ? "bg-cyan-400 animate-pulse"
                            : "bg-amber-400"
                        }`}
                      />
                      {product.status_disponibilidade}
                    </span>
                  </div>

                  {/* Model Code */}
                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="rounded bg-[#101822]/90 border border-[#2a475e] px-2 py-0.5 text-[10px] font-mono text-[#66c0f4] backdrop-blur-md">
                      {product.codigo_modelo}
                    </span>
                  </div>
                </Link>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-4 sm:p-5 space-y-3">
                  <div>
                    <Link
                      href={`/produtos/${product.slug}`}
                      className="text-base sm:text-lg font-bold text-white group-hover:text-[#66c0f4] transition-colors line-clamp-2 leading-snug"
                    >
                      {product.nome}
                    </Link>
                    {product.codigo_modelo && (
                      <span className="text-xs font-mono font-semibold text-[#66c0f4] block mt-0.5">
                        {product.codigo_modelo}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#8f98a0] line-clamp-2 leading-relaxed flex-1">
                    {product.tagline}
                  </p>

                  {/* Quick Specs Chips */}
                  <div className="grid grid-cols-2 gap-1.5 py-1">
                    {featuredSpecs.map((spec, i) => (
                      <div
                        key={i}
                        className="rounded bg-[#101822] border border-[#2a475e]/60 px-2 py-1 text-center"
                      >
                        <span className="block text-[9px] uppercase font-mono text-[#8f98a0] truncate">
                          {spec.chave}
                        </span>
                        <span className="block text-[11px] font-bold font-mono text-[#66c0f4] truncate">
                          {spec.valor}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer Actions */}
                  <div className="mt-auto pt-3 border-t border-[#2a475e]/60 flex items-center gap-2">
                    <Link
                      href={`/produtos/${product.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-[#2a475e] hover:bg-[#3b678c] text-white px-3 py-2 text-xs font-semibold transition-colors"
                    >
                      <span>Detalhes</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                    <button
                      onClick={() => handleOpenQuote(product)}
                      className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] px-3 py-2 text-xs font-bold transition-all shadow-sm"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>Cotação</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-[#2a475e] bg-[#171a21] p-8 text-center space-y-3">
          <p className="text-sm text-[#8f98a0]">
            Nenhum equipamento correspondeu ao termo de busca nesta categoria.
          </p>
          <button
            onClick={() => setSearchQuery("")}
            className="text-xs font-semibold text-[#66c0f4] hover:underline"
          >
            Limpar busca
          </button>
        </div>
      )}

      {/* Embedded QuoteModal */}
      {selectedProductForQuote && (
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          product={selectedProductForQuote}
        />
      )}
    </div>
  );
}
