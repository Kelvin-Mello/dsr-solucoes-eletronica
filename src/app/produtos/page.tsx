import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllProducts } from "@/mock/products";
import { CatalogView } from "@/components/CatalogView";
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  ChevronRight, 
  Sliders, 
  CheckCircle2, 
  Wrench, 
  Layers 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Catálogo de Equipamentos de Potência | DSR Soluções",
  description: "Linha completa de retificadores industriais trifásicos, inversores para fornos de indução, kits de retrofit e filtros ativos de harmônicas.",
  openGraph: {
    title: "Catálogo Técnico de Eletrônica de Potência | DSR Soluções",
    description: "Engenharia de precisão para indústria pesada. Retificadores, inversores ressonantes, filtros ativos e retrofitting.",
    images: [
      {
        url: "/images/products/rectifier-front.jpg",
        width: 1200,
        height: 675,
        alt: "Catálogo de Equipamentos DSR Soluções",
      },
    ],
  },
};

export default function ProdutosPage() {
  const products = getAllProducts();

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] font-semibold">
            Catálogo de Equipamentos Industriais
          </span>
        </nav>

        {/* Catalog Hero Banner */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                <span className="h-2 w-2 rounded-full bg-[#66c0f4] animate-pulse"></span>
                LINHA INDUSTRIAL DSR 2026
              </span>
              <span className="inline-flex items-center gap-1 rounded bg-[#2a475e]/60 px-2.5 py-1 text-xs font-mono text-[#8f98a0]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#66c0f4]" /> NR-10 / NR-12 / IEEE 519
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Equipamentos de Potência & <span className="text-[#66c0f4]">Sistemas de Retrofit</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed">
              Consulte nossa linha de retificadores multipulsos, inversores de indução de alta frequência, filtros ativos de mitigação harmônica e conjuntos de modernização para cubículos existentes.
            </p>

            {/* Quick stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#2a475e]/60 text-xs font-mono">
              <div>
                <span className="block text-[#8f98a0]">EFICIÊNCIA</span>
                <span className="font-bold text-white text-sm">Até 98,4%</span>
              </div>
              <div>
                <span className="block text-[#8f98a0]">POTÊNCIAS</span>
                <span className="font-bold text-white text-sm">50 kW a 2.500 kW</span>
              </div>
              <div>
                <span className="block text-[#8f98a0]">ECONOMIA RETROFIT</span>
                <span className="font-bold text-[#66c0f4] text-sm">Até 65%</span>
              </div>
              <div>
                <span className="block text-[#8f98a0]">GARANTIA DSR</span>
                <span className="font-bold text-white text-sm">Até 36 Meses</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Catalog Component */}
        <CatalogView products={products} />
      </div>
    </div>
  );
}
