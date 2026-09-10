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
  Gauge,
  PhoneCall,
  Check
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
      title: "Produto não encontrado | DSR Soluções",
      description: "O equipamento solicitado não foi encontrado no catálogo DSR.",
    };
  }

  const primaryImage = product.midias[0]?.url || "/images/products/rectifier-front.jpg";

  return {
    title: `${product.nome} | DSR Soluções em Eletrônica de Potência`,
    description: product.descricao,
    openGraph: {
      title: product.nome,
      description: product.tagline,
      images: [
        {
          url: `https://dsr-solucoes-eletronica.vercel.app${primaryImage}`,
          width: 1200,
          height: 675,
          alt: product.nome,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.nome,
      description: product.tagline,
      images: [`https://dsr-solucoes-eletronica.vercel.app${primaryImage}`],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-6 sm:py-8 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
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

        {/* Product Hero Header */}
        <div className="mb-6 rounded-lg bg-gradient-to-r from-[#171a21] via-[#2a475e]/70 to-[#171a21] border border-[#2a475e] p-5 md:p-6 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                {product.nome}
              </h1>
              <p className="mt-1 text-sm md:text-base text-[#66c0f4] font-semibold font-mono">
                {product.codigo_modelo}
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

        {/* Top Hero Row: Carrossel à esquerda e Bloco Lateral à direita limitados à mesma altura */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8">
          {/* Coluna Esquerda: Carrossel de Mídias (col-span-7 ou 8) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <div className="rounded-xl bg-[#171a21]/90 p-3 md:p-4 border border-[#2a475e] shadow-xl h-full flex flex-col justify-between">
              <MediaCarousel 
                mediaList={product.midias} 
                productName={product.nome} 
              />
            </div>
          </div>

          {/* Coluna Direita: Bloco Resumo limitado ao mesmo tamanho do carrossel */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
            <ProductSidebar product={product} />
          </div>
        </div>

        {/* Conteúdos Inferiores em Largura Total (Full Width) */}
        <div className="space-y-8">
          {/* 1. Visão Geral & Engenharia do Equipamento */}
          <article className="rounded-xl bg-[#2a475e]/40 border border-[#2a475e] p-6 md:p-8 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 border-b border-[#2a475e] pb-4 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-[#1b2838] border border-[#66c0f4]/40 text-[#66c0f4]">
                <Cpu className="h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Visão Geral & Engenharia do Equipamento
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm md:text-base leading-relaxed text-[#c6d4df]">
              <p>{product.descricao}</p>
              <p>{product.descricao_detalhada}</p>
            </div>
          </article>

          {/* 2. Destaques Tecnológicos (Cards distribuídos em 4 colunas em telas grandes) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {product.recursos_principais.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#171a21]/80 border border-[#2a475e] p-5 hover:border-[#66c0f4]/50 transition-all hover:bg-[#1b2e3f]/60 group flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#2a475e] text-[#66c0f4] group-hover:scale-110 transition-transform shadow-inner">
                      {idx === 0 && <Wrench className="h-4 w-4" />}
                      {idx === 1 && <Zap className="h-4 w-4" />}
                      {idx === 2 && <Activity className="h-4 w-4" />}
                      {idx === 3 && <ShieldCheck className="h-4 w-4" />}
                      {idx >= 4 && <Layers className="h-4 w-4" />}
                    </div>
                    <h3 className="font-bold text-white text-sm group-hover:text-[#66c0f4] transition-colors line-clamp-2">
                      {feature.titulo}
                    </h3>
                  </div>
                  <p className="text-xs text-[#8f98a0] leading-relaxed">
                    {feature.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 3. Abas Detalhadas de Engenharia em Largura Total */}
          <ProductDetailTabs product={product} />

          {/* 4. Banner de Garantia & Engenharia Dedicada DSR em Largura Total */}
          <div className="rounded-xl bg-gradient-to-r from-[#171a21] via-[#1b2e3f] to-[#171a21] border border-[#2a475e] p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider text-xs">
                <ShieldCheck className="h-4 w-4 text-[#66c0f4]" />
                Garantia de Fábrica & Engenharia Dedicada DSR
              </div>
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#8f98a0]">
                <li className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#66c0f4]" />
                  <strong className="text-white">{product.garantia}</strong>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#66c0f4]" />
                  Estudo de viabilidade de Retrofitting sem custo
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#66c0f4]" />
                  Atendimento técnico especializado e suporte nacional 24/7
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:1145645200"
                className="font-mono text-[#66c0f4] hover:text-white font-bold bg-[#101822] hover:bg-[#1b2838] border border-[#2a475e] hover:border-[#66c0f4] px-4 py-2.5 rounded-lg text-xs flex items-center gap-2 transition-all shadow-md"
              >
                <PhoneCall className="h-4 w-4" /> (11) 4564-5200
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
