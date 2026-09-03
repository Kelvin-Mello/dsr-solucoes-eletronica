"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  Filter, 
  X, 
  SlidersHorizontal, 
  ChevronRight, 
  FileText, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Sparkles,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import { Product } from "@/mock/products";
import { QuoteModal } from "@/components/QuoteModal";

interface CatalogViewProps {
  products: Product[];
}

export function CatalogView({ products }: CatalogViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedAvailability, setSelectedAvailability] = useState("Todos");
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const list = Array.from(new Set(products.map((p) => p.categoria)));
    return ["Todas", ...list];
  }, [products]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory !== "Todas" && product.categoria !== selectedCategory) {
        return false;
      }

      // Availability filter
      if (selectedAvailability !== "Todos" && product.status_disponibilidade !== selectedAvailability) {
        return false;
      }

      // Search text filter
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchName = product.nome.toLowerCase().includes(query);
        const matchCode = product.codigo_modelo.toLowerCase().includes(query);
        const matchTagline = product.tagline.toLowerCase().includes(query);
        const matchCategory = product.categoria.toLowerCase().includes(query);
        const matchSpecs = product.especificacoes_rapidas.some(
          (s) => s.chave.toLowerCase().includes(query) || s.valor.toLowerCase().includes(query)
        );

        if (!matchName && !matchCode && !matchTagline && !matchCategory && !matchSpecs) {
          return false;
        }
      }

      return true;
    });
  }, [products, selectedCategory, selectedAvailability, searchQuery]);

  const handleOpenQuote = (product: Product) => {
    setSelectedProductForQuote(product);
    setIsQuoteOpen(true);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Todas");
    setSelectedAvailability("Todos");
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls Bar */}
      <div className="rounded-xl border border-[#2a475e] bg-[#171a21]/90 p-4 sm:p-6 shadow-xl backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#8f98a0]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por modelo, tecnologia (ex: 500kW, SiC, Retrofit, Harmônicas)..."
              className="w-full rounded-lg border border-[#2a475e] bg-[#101822] pl-11 pr-10 py-3 text-sm text-white placeholder-[#8f98a0] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8f98a0] hover:text-white"
                title="Limpar busca"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Availability Selector */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-[#8f98a0] hidden sm:inline" />
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="rounded-lg border border-[#2a475e] bg-[#101822] px-3.5 py-3 text-xs sm:text-sm text-[#c6d4df] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4] transition-colors cursor-pointer"
            >
              <option value="Todos">Disponibilidade: Todas</option>
              <option value="Em Estoque">Em Estoque</option>
              <option value="Sob Encomenda">Sob Encomenda</option>
              <option value="Engenharia Customizada">Engenharia Customizada</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-4 pt-4 border-t border-[#2a475e]/50 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#8f98a0] mr-1 flex items-center gap-1.5">
            <Filter className="h-3.5 w-3.5 text-[#66c0f4]" /> Categorias:
          </span>
          {categories.map((category) => {
            const count =
              category === "Todas"
                ? products.length
                : products.filter((p) => p.categoria === category).length;
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#66c0f4] text-[#101822] shadow-[0_0_12px_rgba(102,192,244,0.35)] font-semibold"
                    : "bg-[#101822] text-[#8f98a0] border border-[#2a475e] hover:border-[#66c0f4]/60 hover:text-white"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] font-mono ${
                    isSelected ? "bg-[#101822]/20 text-[#101822]" : "bg-[#2a475e]/60 text-[#66c0f4]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Meta info */}
      <div className="flex items-center justify-between text-xs text-[#8f98a0] px-1 font-mono">
        <div>
          Exibindo <span className="text-[#66c0f4] font-semibold">{filteredProducts.length}</span> de{" "}
          <span>{products.length}</span> equipamentos cadastrados
        </div>
        {(searchQuery || selectedCategory !== "Todas" || selectedAvailability !== "Todos") && (
          <button
            onClick={handleClearFilters}
            className="text-[#66c0f4] hover:underline flex items-center gap-1"
          >
            <X className="h-3.5 w-3.5" /> Limpar filtros
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const primaryImage = product.midias[0]?.url || "/images/products/rectifier-front.jpg";
            const featuredSpecs = product.especificacoes_rapidas.filter((s) => s.destaque).slice(0, 3);

            return (
              <div
                key={product.id}
                className="group flex flex-col rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#1b2838] to-[#171a21] overflow-hidden shadow-lg hover:border-[#66c0f4]/80 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                {/* Card Header & Media Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#101822]">
                  <Image
                    src={primaryImage}
                    alt={product.nome}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171a21] via-transparent to-black/30 pointer-events-none" />

                  {/* Availability Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-mono font-medium backdrop-blur-md shadow-md ${
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

                  {/* Category Chip */}
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded bg-[#101822]/90 border border-[#2a475e] px-2.5 py-1 text-[11px] font-mono text-[#66c0f4] backdrop-blur-md">
                      {product.categoria}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5 sm:p-6 space-y-4">
                  {/* Model Code & Title */}
                  <div>
                    <div className="text-xs font-mono text-[#8f98a0] tracking-wider mb-1">
                      CÓDIGO: <span className="text-[#66c0f4] font-semibold">{product.codigo_modelo}</span>
                    </div>
                    <Link
                      href={`/produtos/${product.slug}`}
                      className="text-lg sm:text-xl font-bold text-white group-hover:text-[#66c0f4] transition-colors line-clamp-1"
                    >
                      {product.nome}
                    </Link>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm text-[#8f98a0] line-clamp-2 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* Quick Highlights / Highlights Chips */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-1">
                    {featuredSpecs.map((spec, i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-[#101822] border border-[#2a475e]/60 p-2 text-center"
                      >
                        <span className="block text-[10px] uppercase font-mono text-[#8f98a0] truncate">
                          {spec.chave}
                        </span>
                        <span className="block text-xs font-bold font-mono text-[#66c0f4] truncate">
                          {spec.valor}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Compliance Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-[#8f98a0]">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#66c0f4]" />
                    {product.certificacoes.map((cert) => (
                      <span
                        key={cert}
                        className="rounded bg-[#2a475e]/40 px-1.5 py-0.5 text-[#c6d4df]"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto pt-4 border-t border-[#2a475e]/60 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/produtos/${product.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#2a475e] hover:bg-[#3b678c] text-white px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors group-hover:shadow-[0_0_15px_rgba(42,71,94,0.4)]"
                    >
                      <span>Ver Especificações</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                    <button
                      onClick={() => handleOpenQuote(product)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#66c0f4] to-[#4198cc] hover:from-[#85d1f7] hover:to-[#57aee2] text-[#101822] px-4 py-2.5 text-xs sm:text-sm font-bold shadow-md hover:shadow-[0_0_20px_rgba(102,192,244,0.5)] transition-all"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Cotação</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-xl border border-[#2a475e] bg-[#171a21] p-12 text-center space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2a475e]/40 text-[#66c0f4]">
            <Search className="h-7 w-7" />
          </div>
          <h3 className="text-lg font-bold text-white">Nenhum equipamento localizado</h3>
          <p className="text-sm text-[#8f98a0] max-w-md mx-auto">
            Não encontramos resultados para os termos ou filtros selecionados. Tente alterar as palavras-chave ou resetar as opções.
          </p>
          <button
            onClick={handleClearFilters}
            className="inline-flex items-center gap-2 rounded-lg bg-[#2a475e] hover:bg-[#3b678c] text-white px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            <X className="h-4 w-4" />
            Restaurar Catálogo Completo
          </button>
        </div>
      )}

      {/* Custom Engineering Callout Banner */}
      <div className="rounded-xl border border-[#3b678c] bg-gradient-to-r from-[#171a21] via-[#1f374d] to-[#171a21] p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 rounded bg-[#101822] px-2.5 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/30">
              <Zap className="h-3.5 w-3.5" /> ENGENHARIA DE CAMPO & PROJETOS ESPECIAIS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Sua indústria opera com especificações de potência singulares?
            </h3>
            <p className="text-sm text-[#8f98a0] max-w-2xl">
              Desenvolvemos projetos sob medida para retificadores de altíssima corrente, retrofits de cubículos descontinuados e inversores de frequências especiais.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => handleOpenQuote(products[0])}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] font-bold px-5 py-3 text-sm transition-all shadow-[0_0_20px_rgba(102,192,244,0.3)]"
            >
              <FileText className="h-4 w-4" />
              Solicitar Estudo Técnico
            </button>
          </div>
        </div>
      </div>

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
