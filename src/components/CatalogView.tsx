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
  Layers,
  Sparkles,
  Gauge,
  Sliders,
  CheckCircle2
} from "lucide-react";
import { Product, CATEGORIES_LIST } from "@/mock/products";
import { QuoteModal } from "@/components/QuoteModal";

interface CatalogViewProps {
  products: Product[];
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Retificadores & Carregadores": Zap,
  "Sistemas de Energia Ininterrupta & Conversão": Cpu,
  "Quadros de Distribuição & Paralelismo": Layers,
  "Módulos de Digitalização & Telemetria": Activity,
  "Supervisão, Sensores & Condicionamento": Gauge,
  "Qualidade de Energia, Proteção & Cargas": ShieldCheck,
};

const CATEGORY_IMAGES: Record<string, string> = {
  "Retificadores & Carregadores": "/images/categories/cat-retificadores.jpg",
  "Sistemas de Energia Ininterrupta & Conversão": "/images/categories/cat-energia-ininterrupta.jpg",
  "Quadros de Distribuição & Paralelismo": "/images/categories/cat-quadros-distribuicao.jpg",
  "Módulos de Digitalização & Telemetria": "/images/categories/cat-modulos-digitalizacao.jpg",
  "Supervisão, Sensores & Condicionamento": "/images/categories/cat-supervisao-sensores.jpg",
  "Qualidade de Energia, Proteção & Cargas": "/images/categories/cat-qualidade-energia.jpg",
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "Retificadores & Carregadores": "Alimentação CC segura, retificação tiristorizada e modular de alta confiabilidade para subestações e centros industriais.",
  "Sistemas de Energia Ininterrupta & Conversão": "No-breaks industriais, inversores estáticos, chaves estáticas de transferência e estabilizadores de estado sólido.",
  "Quadros de Distribuição & Paralelismo": "Quadros de força e comando com supervisão digital de disjuntores e paralelismo seguro de bancos de baterias.",
  "Módulos de Digitalização & Telemetria": "Transdutores digitais True RMS de tensão, corrente, temperatura e concentradores de entradas para automação 4.0.",
  "Supervisão, Sensores & Condicionamento": "Monitores de baterias e strings solares, sensores térmicos blindados, isoladores galvânicos e telecomando a relés.",
  "Qualidade de Energia, Proteção & Cargas": "Correção ativa de fator de potência, supressores snubber de alta velocidade e cargas eletrônicas programáveis.",
};

export function CatalogView({ products }: CatalogViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [selectedAvailability, setSelectedAvailability] = useState<string>("Todos");
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<Product | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  // Group products by category
  const groupedProducts = useMemo(() => {
    // First filter products by query and availability
    const filtered = products.filter((product) => {
      // Availability filter
      if (selectedAvailability !== "Todos" && product.status_disponibilidade !== selectedAvailability) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchName = product.nome.toLowerCase().includes(q);
        const matchCode = product.codigo_modelo.toLowerCase().includes(q);
        const matchTag = product.tagline.toLowerCase().includes(q);
        const matchCat = product.categoria.toLowerCase().includes(q);
        const matchSubcat = product.subcategoria?.toLowerCase().includes(q) || false;
        const matchSpecs = product.especificacoes_rapidas.some(
          (s) => s.chave.toLowerCase().includes(q) || s.valor.toLowerCase().includes(q)
        );

        if (!matchName && !matchCode && !matchTag && !matchCat && !matchSubcat && !matchSpecs) {
          return false;
        }
      }

      return true;
    });

    // Determine which categories to show
    const categoriesToShow =
      selectedCategory === "Todas"
        ? (CATEGORIES_LIST as readonly string[])
        : [selectedCategory];

    const result: { category: string; items: Product[] }[] = [];

    for (const cat of categoriesToShow) {
      const items = filtered.filter((p) => p.categoria === cat);
      if (items.length > 0 || selectedCategory === cat) {
        result.push({ category: cat, items });
      }
    }

    return result;
  }, [products, selectedCategory, selectedAvailability, searchQuery]);

  const totalResults = useMemo(() => {
    return groupedProducts.reduce((acc, group) => acc + group.items.length, 0);
  }, [groupedProducts]);

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
    <div className="space-y-10">
      {/* Search & Filter Controls Bar */}
      <div className="rounded-xl border border-[#2a475e] bg-[#171a21]/95 p-4 sm:p-6 shadow-xl backdrop-blur-md">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#8f98a0]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar em todo o catálogo (ex: RIT-D, DK30, UPS, Modbus, 125Vcc, Snubber)..."
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

        {/* Category Pills Navigation */}
        <div className="mt-4 pt-4 border-t border-[#2a475e]/50 flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#8f98a0] mr-1 flex items-center gap-1.5">
            <Filter className="h-3.5 w-3.5 text-[#66c0f4]" /> Categorias:
          </span>
          <button
            onClick={() => setSelectedCategory("Todas")}
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
              selectedCategory === "Todas"
                ? "bg-[#66c0f4] text-[#101822] shadow-[0_0_12px_rgba(102,192,244,0.35)] font-bold"
                : "bg-[#101822] text-[#8f98a0] border border-[#2a475e] hover:border-[#66c0f4]/60 hover:text-white"
            }`}
          >
            <span>Todas as Linhas</span>
            <span className="rounded-full bg-[#2a475e]/60 px-1.5 py-0.2 text-[10px] font-mono text-[#66c0f4]">
              {products.length}
            </span>
          </button>

          {CATEGORIES_LIST.map((category) => {
            const count = products.filter((p) => p.categoria === category).length;
            const isSelected = selectedCategory === category;
            const Icon = CATEGORY_ICONS[category] || Layers;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#66c0f4] text-[#101822] shadow-[0_0_12px_rgba(102,192,244,0.35)] font-bold"
                    : "bg-[#101822] text-[#8f98a0] border border-[#2a475e] hover:border-[#66c0f4]/60 hover:text-white"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
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

      {/* Meta Bar */}
      <div className="flex items-center justify-between text-xs text-[#8f98a0] px-1 font-mono">
        <div>
          Exibindo <span className="text-[#66c0f4] font-semibold">{totalResults}</span> equipamentos em{" "}
          <span className="text-white font-semibold">{groupedProducts.length}</span> categorias
        </div>
        {(searchQuery || selectedCategory !== "Todas" || selectedAvailability !== "Todos") && (
          <button
            onClick={handleClearFilters}
            className="text-[#66c0f4] hover:underline flex items-center gap-1"
          >
            <X className="h-3.5 w-3.5" /> Mostrar tudo
          </button>
        )}
      </div>

      {/* CATEGORY SECTIONS */}
      {groupedProducts.length > 0 && totalResults > 0 ? (
        <div className="space-y-12">
          {groupedProducts.map((group) => {
            const Icon = CATEGORY_ICONS[group.category] || Layers;
            const description = CATEGORY_DESCRIPTIONS[group.category] || "";

            return (
              <section
                key={group.category}
                id={group.category.toLowerCase().replace(/\s+/g, "-")}
                className="space-y-6 scroll-mt-24"
              >
                {/* Category Header Banner */}
                <div className="rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#171a21] via-[#1b2e3f]/60 to-[#171a21] p-5 sm:p-6 shadow-lg">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#2a475e] border border-[#66c0f4]/40 text-[#66c0f4]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                            {group.category}
                          </h2>
                          <span className="rounded-full bg-[#101822] px-2 py-0.5 text-xs font-mono text-[#66c0f4] border border-[#2a475e]">
                            {group.items.length} {group.items.length === 1 ? "item" : "itens"}
                          </span>
                        </div>
                        {description && (
                          <p className="text-xs sm:text-sm text-[#8f98a0] mt-1 max-w-3xl">
                            {description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Grid of Products in this Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.items.map((product) => {
                    const primaryImage = product.midias[0]?.url || "/images/products/rit-d-cabinet.jpg";
                    const featuredSpecs = product.especificacoes_rapidas.slice(0, 3);

                    return (
                      <div
                        key={product.id}
                        className="group flex flex-col rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#1b2838] to-[#171a21] overflow-hidden shadow-lg hover:border-[#66c0f4]/80 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300"
                      >
                        {/* Media Container */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101822]">
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
                        </div>

                        {/* Card Body */}
                        <div className="flex flex-1 flex-col p-4 sm:p-5 space-y-3">
                          <Link
                            href={`/produtos/${product.slug}`}
                            className="text-base sm:text-lg font-bold text-white group-hover:text-[#66c0f4] transition-colors line-clamp-2 leading-snug"
                          >
                            {product.nome}
                          </Link>

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
              </section>
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
            Não encontramos resultados para os termos pesquisados. Verifique a grafia ou restaure todas as categorias.
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
