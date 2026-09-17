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
  ArrowRight
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

const SHOWCASE_CATEGORIES = [
  {
    id: "retificadores",
    title: "RETIFICADORES",
    subtitle: "Sistemas Tiristorizados & Modulares",
    description: "Retificadores Industriais, Carregadores de Bateria e Formadores de 12V a 250Vcc até 5.000A.",
    actionText: "VER LINHA COMPLETA",
    href: "/produtos/categoria/retificadores-e-carregadores",
    bannerUrl: "/images/categories/banner-retificadores.png",
    theme: "orange" as const,
    priority: true,
  },
  {
    id: "ups-nobreaks",
    title: "UPS / NO-BREAKS",
    subtitle: "On-Line Dupla Conversão & STS",
    description: "No-breaks industriais e sistemas ininterruptos de energia crítica 24/7 para subestações e data centers.",
    actionText: "VER LINHA COMPLETA",
    href: "/produtos/categoria/sistemas-de-energia-ininterrupta-e-conversao",
    bannerUrl: "/images/categories/banner-ups-nobreaks.png",
    theme: "blue" as const,
    priority: true,
  },
  {
    id: "conversores",
    title: "CONVERSORES",
    subtitle: "Conversores Estáticos & Fontes CC",
    description: "Conversores estáticos industriais de alta eficiência, fontes chaveadas e conversores CC/CC.",
    actionText: "VER LINHA COMPLETA",
    href: "/produtos/categoria/sistemas-de-energia-ininterrupta-e-conversao",
    bannerUrl: "/images/categories/banner-conversores.png",
    theme: "blue" as const,
    priority: false,
  },
  {
    id: "inversores",
    title: "INVERSORES",
    subtitle: "Inversores Industriais CC/CA",
    description: "Inversores estáticos senoidais com chave de transferência estática rápida e isolamento galvânico.",
    actionText: "VER LINHA COMPLETA",
    href: "/produtos/categoria/sistemas-de-energia-ininterrupta-e-conversao",
    bannerUrl: "/images/categories/banner-inversores.png",
    theme: "orange" as const,
    priority: false,
  },
  {
    id: "transformadores",
    title: "TRANSFORMADORES",
    subtitle: "Transformadores a Seco & Filtros",
    description: "Transformadores industriais a seco em resina epóxi, isoladores de alta rigidez e filtros de potência.",
    actionText: "VER LINHA COMPLETA",
    href: "/produtos/categoria/qualidade-de-energia-protecao-e-cargas",
    bannerUrl: "/images/categories/banner-transformadores.png",
    theme: "orange" as const,
    priority: false,
  },
  {
    id: "assistencia-tecnica",
    title: "ASSISTÊNCIA TÉCNICA",
    subtitle: "Retrofitting, Manutenção & Plantão 24h",
    description: "Plantão técnico 24 horas, modernização e retrofitting de painéis multimarcas com emissão de ART.",
    actionText: "SAIBA MAIS",
    href: "/servicos",
    bannerUrl: "/images/categories/banner-assistencia-tecnica.png",
    theme: "blue" as const,
    priority: false,
  },
];

export default function ProdutosPage() {
  const products = getAllProducts();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb - Perfeitamente centralizado verticalmente */}
        <div className="py-2 sm:py-2.5 flex items-center">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0] leading-none">
            <Link href="/" className="hover:text-[#66c0f4] transition-colors">
              Início
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
            <span className="text-[#66c0f4] font-semibold">Categorias & Produtos</span>
          </nav>
        </div>

        {/* Content sections wrapper */}
        <div className="space-y-10 sm:space-y-12">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Linhas & Categorias de <span className="text-[#66c0f4]">Produtos</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed">
              Explore nosso catálogo organizado por linhas tecnológicas. Selecione uma categoria abaixo para visualizar os produtos e modelos correspondentes, ou navegue pelo catálogo unificado.
            </p>
          </div>
        </div>

        {/* CATEGORY SHOWCASE GRID - REF INDUSTRIAL TECH DSR */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2a475e] pb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Categorias Principais
              </h2>
              <p className="text-xs text-[#8f98a0] mt-0.5">
                Selecione a linha de equipamentos ou serviços para acessar as especificações de cada modelo
              </p>
            </div>
            <span className="text-xs font-mono text-[#66c0f4] self-start sm:self-auto">
              6 Divisões Industriais
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {SHOWCASE_CATEGORIES.map((card) => {
              return (
                <Link
                  key={card.id}
                  href={card.href}
                  className="group relative block rounded-2xl overflow-hidden border border-[#203548] bg-[#0c131a] shadow-xl hover:shadow-[0_12px_35px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-[1.015] focus:outline-none focus:ring-2 focus:ring-[#66c0f4]"
                  title={`${card.title} - ${card.actionText}`}
                >
                  <div className="relative aspect-[494/167] w-full overflow-hidden bg-[#0c131a]">
                    <Image
                      src={card.bannerUrl}
                      alt={`${card.title} - ${card.subtitle}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={card.priority}
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                    />
                    
                    {/* Glow border highlight on hover matching theme */}
                    <div
                      className={`absolute inset-0 rounded-2xl border-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        card.theme === "blue"
                          ? "border-[#66c0f4]/60 shadow-[inset_0_0_25px_rgba(102,192,244,0.25)]"
                          : "border-amber-400/60 shadow-[inset_0_0_25px_rgba(245,158,11,0.25)]"
                      }`}
                    />
                  </div>

                  <span className="sr-only">{card.title} - {card.description}</span>
                </Link>
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
  </div>
  );
}
