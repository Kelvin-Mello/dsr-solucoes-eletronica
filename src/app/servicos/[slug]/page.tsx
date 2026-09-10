import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { 
  Wrench, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  GraduationCap, 
  CheckCircle2, 
  Compass, 
  ChevronRight, 
  PhoneCall, 
  Mail, 
  FileText, 
  Clock, 
  Layers, 
  ArrowLeft,
  Zap,
  Award
} from "lucide-react";
import { getAllServices, getServiceBySlug, ServiceItem } from "@/mock/services";
import { MediaCarousel } from "@/components/MediaCarousel";
import { ServiceDetailTabs } from "@/components/ServiceDetailTabs";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ICON_MAP = {
  Wrench,
  Cpu,
  ShieldCheck,
  Activity,
  GraduationCap,
  CheckCircle2,
  Compass,
};

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: "Serviço Não Encontrado | DSR Soluções",
    };
  }

  return {
    title: `${service.title} | Engenharia Especializada DSR`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const allServices = getAllServices();
  const otherServices = allServices.filter((s) => s.slug !== service.slug);
  const IconComponent = ICON_MAP[service.iconName] || Wrench;

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <Link href="/servicos" className="hover:text-[#66c0f4] transition-colors">
            Serviços
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] truncate max-w-xs font-semibold">
            {service.title}
          </span>
        </nav>

        {/* Hero Title Banner */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-5 sm:p-6 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="mt-1 text-sm sm:text-base text-[#66c0f4] font-semibold font-mono">
                {service.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1.5 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                <IconComponent className="h-3.5 w-3.5" />
                SERVIÇO ESPECIALIZADO DSR
              </span>
              <span className="rounded bg-[#66c0f4]/20 border border-[#66c0f4]/40 px-2.5 py-1.5 text-xs font-mono font-bold text-[#66c0f4]">
                {service.badge}
              </span>
            </div>
          </div>
        </div>

        {/* Top Hero Row: Carrossel à esquerda e Bloco Resumo à direita limitados à mesma altura */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8">
          {/* Coluna Esquerda: Carrossel de Mídias (col-span-7 ou 8) */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <div className="rounded-xl bg-[#171a21]/90 p-3 md:p-4 border border-[#2a475e] shadow-xl h-full flex flex-col justify-between">
              <MediaCarousel
                mediaList={service.midias}
                productName={service.title}
              />
            </div>
          </div>

          {/* Coluna Direita: Bloco Resumo limitado ao mesmo tamanho do carrossel */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
            <div className="rounded-xl bg-[#171a21]/90 border border-[#2a475e] p-4 sm:p-5 shadow-xl flex flex-col justify-between h-full">
              {/* Cover Thumbnail do Serviço - Apenas a imagem limpa, sem textos ou badges sobrepostos */}
              {service.midias && service.midias.length > 0 && (
                <div className="relative overflow-hidden rounded-lg border border-[#3b678c]/60 bg-black shadow-md">
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <img
                      src={service.midias[0].url || service.midias[0].thumbnailUrl}
                      alt={service.midias[0].alt || service.title}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                </div>
              )}

              {/* Texto breve e curto falando sobre o serviço */}
              <div className="flex-1 flex flex-col justify-center py-4 space-y-2.5">
                <p className="text-xs sm:text-sm font-semibold text-[#66c0f4] leading-relaxed">
                  {service.subtitle}
                </p>
                <p className="text-xs text-[#c6d4df] leading-relaxed line-clamp-4">
                  {service.description}
                </p>
              </div>

              {/* Botões de Ação Imediata (Solicitar Proposta e WhatsApp) */}
              <div className="pt-3 border-t border-[#2a475e]/80 flex flex-col gap-2.5">
                <a
                  href={`mailto:engenharia@dsrsolucoes.com.br?subject=Proposta Tecnica - ${encodeURIComponent(service.title)}`}
                  className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-gradient-to-r from-[#66c0f4] via-[#4ba6df] to-[#1b75bc] py-3 px-4 text-center font-bold uppercase tracking-wider text-[#0e141b] text-xs sm:text-sm shadow-[0_0_15px_rgba(102,192,244,0.4)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_25px_rgba(102,192,244,0.6)] active:scale-[0.98]"
                >
                  <Mail className="h-4 w-4 text-[#0e141b] transition-transform group-hover:translate-x-1" />
                  <span>Solicitar Proposta por E-mail</span>
                </a>

                <a
                  href={`https://wa.me/5511980389729?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+o+servi%C3%A7o+de+${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#101822] hover:bg-[#1a2c3f] text-emerald-400 border border-emerald-500/40 font-bold py-2.5 px-3 text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <PhoneCall className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Direto (11) 98038-9729</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdos Inferiores em Largura Total (Full Width) */}
        <div className="space-y-8">
          {/* Interactive Engineering Tabs (Escopo, Benefícios, Equipamentos, Normas & ART) */}
          <ServiceDetailTabs service={service} />

          {/* Banner de Atendimento Técnico Emergencial 24/7 */}
          <div className="rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#171a21] via-[#1b2838] to-[#171a21] p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#66c0f4] uppercase tracking-wider">
                <Clock className="h-4 w-4" />
                Atendimento Técnico Emergencial 24/7 Nacional
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Precisa de Manutenção ou Intervenção Especializada?
              </h3>
              <p className="text-sm text-[#8f98a0] max-w-2xl">
                Mobilização rápida de equipe técnica especializada com instrumental calibrado (RBC/Inmetro) e emissão de ART para atendimento em subestações e indústrias em todo o território nacional.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href="tel:1145645200"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-[#1b2838] hover:bg-[#203248] text-white border border-[#2a475e] hover:border-[#66c0f4] px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <PhoneCall className="h-4 w-4 text-[#66c0f4]" />
                (11) 4564-5200
              </a>
              <a
                href={`https://wa.me/5511980389729?text=Ol%C3%A1%2C+preciso+de+atendimento+urgente+para+o+servi%C3%A7o+de+${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#0e141b] font-bold px-5 py-3 text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
              >
                <PhoneCall className="h-4 w-4" />
                Plantão WhatsApp
              </a>
            </div>
          </div>

          {/* Outros Serviços Especializados em Grid Horizontal Full-Width */}
          <div className="rounded-xl border border-[#2a475e] bg-[#171a21]/90 p-6 md:p-8 shadow-xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2a475e] pb-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  Outros Serviços Especializados DSR
                </h3>
                <p className="text-xs md:text-sm text-[#8f98a0]">
                  Soluções integradas de engenharia de campo, comissionamento e laudos técnicos
                </p>
              </div>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#66c0f4] hover:underline"
              >
                <span>Ver Todos os Serviços</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherServices.map((other) => {
                const OtherIcon = ICON_MAP[other.iconName] || Wrench;
                return (
                  <Link
                    key={other.id}
                    href={`/servicos/${other.slug}`}
                    className="group rounded-lg border border-[#2a475e] bg-[#1b2838]/70 hover:bg-[#203248] p-4 transition-all duration-200 hover:border-[#66c0f4]/60 hover:shadow-lg flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-[#101822] text-[#66c0f4] border border-[#66c0f4]/30 group-hover:scale-110 transition-transform">
                          <OtherIcon className="h-4 w-4" />
                        </div>
                        <span className="text-[10px] font-mono text-[#8f98a0] border border-[#2a475e] px-2 py-0.5 rounded bg-[#101822]">
                          {other.badge}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#66c0f4] transition-colors line-clamp-1">
                        {other.title}
                      </h4>
                      <p className="text-xs text-[#8f98a0] line-clamp-2 leading-relaxed">
                        {other.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-3 border-t border-[#2a475e]/50 flex items-center justify-between text-xs font-semibold text-[#66c0f4]">
                      <span>Conhecer Serviço</span>
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
