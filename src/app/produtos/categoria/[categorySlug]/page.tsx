import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  getAllCategories, 
  getCategoryBySlug, 
  getProductsByCategory,
  Product 
} from "@/mock/products";
import { 
  ChevronRight, 
  ArrowLeft, 
  Boxes, 
  Cpu, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Layers, 
  Gauge,
  FileText,
  CheckCircle2
} from "lucide-react";
import { CategoryProductGrid } from "@/components/CategoryProductGrid";

interface CategoryPageProps {
  params: Promise<{
    categorySlug: string;
  }>;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "Retificadores & Carregadores": Zap,
  "Sistemas de Energia Ininterrupta & Conversão": Cpu,
  "Quadros de Distribuição & Paralelismo": Layers,
  "Módulos de Digitalização & Telemetria": Activity,
  "Supervisão, Sensores & Condicionamento": Gauge,
  "Qualidade de Energia, Proteção & Cargas": ShieldCheck,
};

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    categorySlug: cat.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.categorySlug);

  if (!category) {
    return {
      title: "Categoria Não Encontrada | DSR Soluções",
    };
  }

  return {
    title: `${category.name} | Catálogo de Produtos DSR`,
    description: category.description,
  };
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.categorySlug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.name);
  const allCategories = getAllCategories();
  const otherCategories = allCategories.filter((c) => c.slug !== category.slug);
  const Icon = CATEGORY_ICONS[category.name] || Layers;

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <Link href="/produtos" className="hover:text-[#66c0f4] transition-colors">
            Categorias
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] font-semibold">{category.name}</span>
        </nav>

        {/* Category Hero Banner */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                  <Icon className="h-3.5 w-3.5" />
                  {category.badge}
                </span>
                <span className="rounded bg-[#66c0f4] text-[#101822] px-2.5 py-1 text-xs font-mono font-bold">
                  {products.length} {products.length === 1 ? "Equipamento" : "Equipamentos"}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {category.name}
              </h1>

              <p className="text-sm sm:text-base text-[#66c0f4] font-mono">
                {category.tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#8f98a0] leading-relaxed max-w-3xl">
                {category.description}
              </p>

              <div className="pt-2 flex items-center gap-2">
                <Link
                  href="/produtos"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8f98a0] hover:text-[#66c0f4] transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Ver Todas as Categorias
                </Link>
              </div>
            </div>

            {/* Representative Image in Hero */}
            <div className="lg:col-span-4 relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#2a475e] bg-[#101822] shadow-xl">
              <Image
                src={category.imageUrl}
                alt={category.name}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101822] via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-3 right-3 rounded bg-[#101822]/90 border border-[#2a475e] px-2.5 py-0.5 text-[10px] font-mono text-[#66c0f4] backdrop-blur-md">
                DSR Potência
              </span>
            </div>
          </div>
        </div>

        {/* Client Component Product Grid with Search and Quote Modal */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#2a475e] pb-3">
            <div>
              <h2 className="text-xl font-bold text-white">Equipamentos desta Categoria</h2>
              <p className="text-xs text-[#8f98a0]">Clique no produto para ver a ficha técnica e memorial de engenharia</p>
            </div>
            <span className="text-xs font-mono text-[#66c0f4]">
              {products.length} Itens Cadastrados
            </span>
          </div>

          <CategoryProductGrid products={products} />
        </div>

        {/* Switch to Other Categories */}
        <div className="rounded-xl border border-[#2a475e] bg-[#171a21] p-6 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-[#2a475e] pb-2">
            Navegar por Outras Categorias
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {otherCategories.map((other) => {
              const OtherIcon = CATEGORY_ICONS[other.name] || Layers;
              return (
                <Link
                  key={other.slug}
                  href={`/produtos/categoria/${other.slug}`}
                  className="group flex items-center gap-2.5 p-3 rounded-lg bg-[#101822] border border-[#2a475e] hover:border-[#66c0f4]/80 transition-all text-xs"
                >
                  <OtherIcon className="h-4 w-4 text-[#66c0f4] flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-white group-hover:text-[#66c0f4] transition-colors font-medium line-clamp-1">
                    {other.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
