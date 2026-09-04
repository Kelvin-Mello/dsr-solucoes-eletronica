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

            {/* Deep Technology Section */}
            <div className="rounded-lg bg-gradient-to-b from-[#1b2e3f]/80 to-[#171a21]/90 border border-[#3b678c] p-6 md:p-8">
              <div className="flex items-center gap-3 border-b border-[#2a475e] pb-4 mb-5">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-[#101822] border border-[#66c0f4]/50 text-[#66c0f4]">
                  <Gauge className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    Tecnologia de Potência & Topologia
                  </h3>
                  <p className="text-xs text-[#66c0f4] font-mono">
                    Engenharia DSR Soluções • {product.subcategoria || "Confiabilidade Industrial"}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base leading-relaxed text-[#c6d4df] mb-6">
                {product.texto_tecnologia}
              </p>

              {/* Official Catalog Download Banner if available */}
              {product.datasheet_url && (
                <div className="mb-6 rounded-lg bg-gradient-to-r from-[#171a21] via-[#1b2e3f] to-[#171a21] border border-[#66c0f4]/40 p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="flex h-11 w-11 items-center justify-center rounded bg-[#101822] border border-[#66c0f4]/50 text-[#66c0f4] flex-shrink-0">
                      <FileDown className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-[#66c0f4]/20 text-[#66c0f4] text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider font-semibold border border-[#66c0f4]/30">
                          Catálogo Original
                        </span>
                        <span className="text-xs text-[#8f98a0] font-mono">PDF Oficial DSR</span>
                      </div>
                      <h4 className="text-white font-bold text-sm sm:text-base mt-1">
                        Download da Ficha Técnica & Catálogo ({product.codigo_modelo})
                      </h4>
                      <p className="text-xs text-[#c6d4df] mt-0.5">
                        Documento oficial da engenharia com especificações de alarmes, módulos UDQ e dimensionamento.
                      </p>
                    </div>
                  </div>
                  <a
                    href={product.datasheet_url}
                    download={`Catalogo-Oficial-DSR-${product.codigo_modelo.replace(/[^a-zA-Z0-9_-]/g, "_")}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded bg-gradient-to-r from-[#66c0f4] to-[#4ba6df] hover:brightness-110 text-[#0e141b] font-extrabold px-5 py-2.5 text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(102,192,244,0.3)] shrink-0"
                  >
                    <FileDown className="h-4 w-4" />
                    Baixar Catálogo PDF
                  </a>
                </div>
              )}

              {/* Technical Specifications Accordion / Groups */}
              {product.especificacoes_completas && (
                <div className="mt-6 space-y-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#66c0f4] flex items-center gap-2">
                    <Sliders className="h-4 w-4" /> Parâmetros Detalhados de Engenharia
                  </h4>
                  <div className="space-y-3">
                    {product.especificacoes_completas.map((grupo, gIdx) => (
                      <div key={gIdx} className="rounded bg-[#101822]/90 border border-[#2a475e] overflow-hidden">
                        <div className="bg-[#1b2838] px-4 py-2.5 text-xs font-bold text-white uppercase tracking-wider border-b border-[#2a475e]">
                          {grupo.grupo}
                        </div>
                        <div className="divide-y divide-[#2a475e]/60">
                          {grupo.itens.map((item, iIdx) => (
                            <div key={iIdx} className="flex items-center justify-between px-4 py-2.5 text-xs">
                              <span className="text-[#8f98a0]">{item.parametro}</span>
                              <span className="font-mono font-medium text-white text-right">{item.valor}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5. Normas e Certificações */}
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg bg-[#101822]/90 border border-[#2a475e] p-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-[#8f98a0]">
                <ShieldCheck className="h-4 w-4 text-[#66c0f4]" />
                Normas de Fabricação e Segurança Industrial:
              </div>
              <div className="flex flex-wrap gap-2">
                {product.certificacoes.map((cert, idx) => (
                  <span key={idx} className="rounded bg-[#2a475e] px-2.5 py-1 text-white font-bold border border-[#3b678c]">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* RIGHT COLUMN (SIDEBAR ~ 4 to 5 cols): Stylized Quick Specs + CTA Button */}
          <aside className="lg:col-span-5 xl:col-span-4 sticky top-24">
            <ProductSidebar product={product} />
          </aside>
        </div>
      </div>
    </div>
  );
}
