import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  getProductBySlug, 
  getAllProducts, 
  Product 
} from "@/mock/products";
import { MediaCarousel } from "@/components/MediaCarousel";
import { ProductSidebar } from "@/components/ProductSidebar";
import { ProductDetailTabs } from "@/components/ProductDetailTabs";
import { 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Activity, 
  CheckCircle, 
  Layers, 
  FileDown, 
  Sparkles, 
  ChevronRight, 
  Sliders, 
  Wrench,
  Gauge
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produto Não Encontrado | DSR Soluções",
      description: "Equipamento industrial não localizado no catálogo DSR.",
    };
  }

  return {
    title: `${product.nome} | DSR Soluções em Eletrônica de Potência`,
    description: product.descricao,
    openGraph: {
      title: product.nome,
      description: product.tagline,
      images: [
        {
          url: product.midias[0]?.url || "/images/products/rectifier-front.jpg",
          width: 1200,
          height: 675,
          alt: product.nome,
        },
      ],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb - Steam Styled */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <Link href="/produtos" className="hover:text-[#66c0f4] transition-colors">
            {product.categoria}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] truncate max-w-xs sm:max-w-md font-semibold">
            {product.nome}
          </span>
        </nav>

        {/* Product Title Banner */}
        <div className="mb-6 rounded-lg bg-gradient-to-r from-[#171a21] via-[#2a475e]/70 to-[#171a21] border border-[#2a475e] p-5 md:p-6 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="inline-flex items-center gap-1 rounded bg-[#101822] px-2.5 py-0.5 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                  {product.codigo_modelo}
                </span>
                <span className="rounded bg-[#2a475e]/80 px-2 py-0.5 text-xs text-[#c6d4df]">
                  {product.subcategoria || product.categoria}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                {product.nome}
              </h1>
              <p className="mt-1.5 text-sm md:text-base text-[#8f98a0] max-w-3xl">
                {product.tagline}
              </p>
            </div>
            
            {/* Status indicator */}
            <div className="flex flex-col items-start sm:items-end gap-1 font-mono text-xs">
              <div className="flex items-center gap-2 rounded bg-[#101822] px-3 py-1.5 border border-[#3b678c]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#66c0f4] animate-pulse"></span>
                <span className="text-white font-semibold">{product.status_disponibilidade}</span>
              </div>
              <span className="text-[#8f98a0] text-[11px]">{product.garantia}</span>
            </div>
          </div>
        </div>

        {/* Main Grid Layout: 2 Columns on Desktop, flex-col on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN (LARGER ~ 7 to 8 cols): MediaCarousel + Technical Description */}
          <section className="lg:col-span-7 xl:col-span-8 flex flex-col gap-8">
            {/* 1. Media Carousel */}
            <div className="rounded-lg bg-[#171a21]/90 p-3 md:p-4 border border-[#2a475e] shadow-xl">
              <MediaCarousel 
                mediaList={product.midias} 
                productName={product.nome} 
              />
            </div>

            {/* 2. Overview Description */}
            <article className="rounded-lg bg-[#2a475e]/40 border border-[#2a475e] p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 border-b border-[#2a475e] pb-4 mb-5">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-[#1b2838] border border-[#66c0f4]/40 text-[#66c0f4]">
                  <Cpu className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-white tracking-wide">
                  Visão Geral & Engenharia do Equipamento
                </h2>
              </div>
              <div className="space-y-4 text-sm md:text-base leading-relaxed text-[#c6d4df]">
                <p>{product.descricao}</p>
                <p>{product.descricao_detalhada}</p>
              </div>
            </article>

            {/* 3. Key Technological Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.recursos_principais.map((feature, idx) => (
                <div
                  key={idx}
                  className="rounded-lg bg-[#171a21]/80 border border-[#2a475e] p-5 hover:border-[#66c0f4]/50 transition-all hover:bg-[#1b2e3f]/60 group"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded bg-[#2a475e] text-[#66c0f4] group-hover:scale-110 transition-transform">
                      {idx === 0 && <Wrench className="h-4 w-4" />}
                      {idx === 1 && <Zap className="h-4 w-4" />}
                      {idx === 2 && <Activity className="h-4 w-4" />}
                      {idx === 3 && <ShieldCheck className="h-4 w-4" />}
                    </div>
                    <h3 className="font-bold text-white text-sm group-hover:text-[#66c0f4] transition-colors">
                      {feature.titulo}
                    </h3>
                  </div>
                  <p className="text-xs text-[#8f98a0] leading-relaxed">
                    {feature.descricao}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Engineering Tabs (Especificações, Tecnologia, Downloads, Normas) */}
            <ProductDetailTabs product={product} />
          </section>

          {/* RIGHT COLUMN (SIDEBAR ~ 4 to 5 cols): Especificações Rápidas e CTA na posição original fixa */}
          <aside className="lg:col-span-5 xl:col-span-4">
            <div className="space-y-5">
              <ProductSidebar product={product} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
