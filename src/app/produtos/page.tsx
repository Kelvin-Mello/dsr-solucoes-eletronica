import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  getAllProducts, 
  getAllCategories, 
  CATEGORIES_DATA 
} from "@/mock/products";
import { CatalogView } from "@/components/CatalogView";
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Gauge, 
  ChevronRight, 
  SlidersHorizontal,
  ArrowRight,
  Boxes
} from "lucide-react";

export const metadata: Metadata = {
  title: "Produtos & Categorias de Potência | DSR Soluções em Eletrônica",
  description: "Catálogo industrial de retificadores, inversores, quadros de paralelismo, módulos de digitalização True RMS e supervisão digital.",
};

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Retificadores & Carregadores": Zap,
  "Sistemas de Energia Ininterrupta & Conversão": Cpu,
  "Quadros de Distribuição & Paralelismo": Layers,
  "Módulos de Digitalização & Telemetria": Activity,
  "Supervisão, Sensores & Condicionamento": Gauge,
  "Qualidade de Energia, Proteção & Cargas": ShieldCheck,
};

export default function ProdutosPage() {
  const products = getAllProducts();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] font-semibold">Categorias & Produtos</span>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                <Boxes className="h-3.5 w-3.5" />
                PORTFÓLIO OFICIAL DSR SOLUÇÕES
              </span>
              <span className="rounded bg-[#2a475e]/60 px-2.5 py-1 text-xs font-mono text-[#8f98a0]">
                27 Equipamentos • 6 Linhas Industriais
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Linhas & Categorias de <span className="text-[#66c0f4]">Produtos</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed">
              Explore nosso catálogo organizado por linhas tecnológicas. Selecione uma categoria abaixo para visualizar os produtos e modelos correspondentes, ou navegue pelo catálogo unificado.
            </p>
          </div>
        </div>

        {/* CATEGORY SHOWCASE GRID (Imagem no topo de cada card, como se fosse um produto) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2a475e] pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Categorias de Produtos
              </h2>
              <p className="text-xs text-[#8f98a0] mt-0.5">
                Escolha a linha tecnológica para acessar as especificações de cada equipamento
              </p>
            </div>
            <span className="text-xs font-mono text-[#66c0f4] self-start sm:self-auto">
              6 Linhas de Engenharia
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.name] || Layers;
              const categoryProducts = products.filter((p) => p.categoria === cat.name);

              return (
                <div
                  key={cat.slug}
                  className="group flex flex-col rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#1b2838] to-[#171a21] overflow-hidden shadow-xl hover:border-[#66c0f4]/80 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300"
                >
                  {/* Category Image at the Top (Like a product card) */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101822]">
                    <Image
                      src={cat.imageUrl}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171a21] via-transparent to-black/20 pointer-events-none" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 rounded bg-[#101822]/90 border border-[#2a475e] px-2.5 py-1 text-[11px] font-mono font-semibold text-[#66c0f4] backdrop-blur-md">
                        <Icon className="h-3.5 w-3.5" />
                        {cat.badge}
                      </span>
                    </div>

                    {/* Count */}
                    <div className="absolute bottom-3 right-3">
                      <span className="rounded bg-[#66c0f4] text-[#101822] px-2.5 py-1 text-xs font-mono font-bold shadow-md">
                        {categoryProducts.length} {categoryProducts.length === 1 ? "Produto" : "Produtos"}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-5 space-y-3">
                    <Link
                      href={`/produtos/categoria/${cat.slug}`}
                      className="text-lg font-bold text-white group-hover:text-[#66c0f4] transition-colors leading-snug line-clamp-1"
                    >
                      {cat.name}
                    </Link>

                    <p className="text-xs text-[#8f98a0] line-clamp-2 leading-relaxed flex-1">
                      {cat.tagline}
                    </p>

                    {/* Featured Models Chips */}
                    <div className="rounded-lg bg-[#101822] p-2.5 border border-[#2a475e]/60 space-y-1 text-[11px]">
                      <span className="block font-mono text-[#66c0f4] font-semibold text-[10px] uppercase">
                        Modelos Principais:
                      </span>
                      <div className="flex flex-wrap gap-1 text-[#c6d4df]">
                        {cat.featuredModels.map((m, i) => (
                          <span
                            key={i}
                            className="rounded bg-[#2a475e]/40 px-2 py-0.5 text-[10px] font-mono text-[#c6d4df]"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <Link
                        href={`/produtos/categoria/${cat.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] py-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                      >
                        <span>Acessar Categoria</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* UNIFIED SEARCH & ALL PRODUCTS SECTION */}
        <div className="pt-8 border-t border-[#2a475e]/80 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Busca Rápida em Todo o Catálogo
              </h2>
              <p className="text-xs text-[#8f98a0] mt-0.5">
                Pesquise diretamente por modelo, tensão, protocolo ou aplicação entre os 27 produtos
              </p>
            </div>
            <span className="text-xs font-mono text-[#66c0f4] hidden sm:inline">
              Visão Completa
            </span>
          </div>

          <CatalogView products={products} />
        </div>
      </div>
    </div>
  );
}
