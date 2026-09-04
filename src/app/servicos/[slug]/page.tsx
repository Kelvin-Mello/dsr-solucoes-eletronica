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
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                <IconComponent className="h-3.5 w-3.5" />
                SERVIÇO ESPECIALIZADO DSR
              </span>
              <span className="rounded bg-[#66c0f4]/20 border border-[#66c0f4]/40 px-2.5 py-1 text-xs font-mono font-bold text-[#66c0f4]">
                {service.badge}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-[#66c0f4] font-medium font-mono">
              {service.subtitle}
            </p>

            <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed max-w-3xl">
              {service.description}
            </p>
          </div>
        </div>

        {/* Main Grid: Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (Main Details) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Media Carousel */}
            <div className="rounded-xl bg-[#171a21]/90 p-3 md:p-4 border border-[#2a475e] shadow-xl">
              <MediaCarousel
                mediaList={service.midias}
                productName={service.title}
              />
            </div>

            {/* Interactive Engineering Tabs (Escopo, Benefícios, Equipamentos, Normas & ART) */}
            <ServiceDetailTabs service={service} />
          </div>

          {/* Right Column (Sidebar CTA Fixo / Sticky com Thumbnail de Capa) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-20 lg:top-24 space-y-6">
              {/* Cover Thumbnail do Serviço */}
              {service.midias && service.midias.length > 0 && (
                <div className="relative overflow-hidden rounded-xl border border-[#3b678c] bg-[#101822] shadow-xl group">
                  <div className="relative aspect-video w-full overflow-hidden bg-[#0c1219]">
                    <img
                      src={service.midias[0].url || service.midias[0].thumbnailUrl}
                      alt={service.midias[0].alt || service.title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101822] via-transparent to-transparent opacity-60 pointer-events-none" />
                    <span className="absolute bottom-2.5 left-3 rounded bg-[#101822]/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-mono text-[#66c0f4] font-bold border border-[#66c0f4]/30 shadow-sm">
                      {service.badge || "Engenharia Especializada"}
                    </span>
                  </div>
                </div>
              )}

              {/* Quick Proposal Box */}
              <div className="rounded-xl border border-[#3b678c] bg-gradient-to-b from-[#1b2838] to-[#101822] p-6 space-y-4 shadow-xl">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#66c0f4] tracking-wider block">
                  ATENDIMENTO DIRETO
                </span>
                <h3 className="text-lg font-bold text-white">
                  Solicite uma Visita ou Proposta Técnica
                </h3>
                <p className="text-xs text-[#8f98a0] leading-relaxed">
                  Converse diretamente com os engenheiros responsáveis pela área de {service.title}.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={`mailto:engenharia@dsrsolucoes.com.br?subject=Proposta Tecnica - ${service.title}`}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] font-bold py-3 text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <Mail className="h-4 w-4" />
                  Solicitar Proposta por E-mail
                </a>

                <a
                  href={`https://wa.me/5511980389729?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+o+servi%C3%A7o+de+${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#101822] hover:bg-[#1a2c3f] text-emerald-400 border border-emerald-500/40 font-bold py-3 text-xs uppercase tracking-wider transition-all"
                >
                  <PhoneCall className="h-4 w-4" />
                  WhatsApp Direto (11) 98038-9729
                </a>
              </div>

              <div className="pt-3 border-t border-[#2a475e]/60 text-xs text-[#8f98a0] space-y-1">
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-[#66c0f4]" />
                  <span>Plantão de Campo: 24/7 Nacional</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="h-3.5 w-3.5 text-[#66c0f4]" />
                  <span>Fixo Central: (11) 4564-5200</span>
                </div>
              </div>
            </div>

            {/* Other Services Navigation */}
            <div className="rounded-xl border border-[#2a475e] bg-[#171a21] p-5 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-[#2a475e] pb-2">
                Outros Serviços Especializados
              </h4>
              <ul className="space-y-1.5">
                {otherServices.map((other) => (
                  <li key={other.id}>
                    <Link
                      href={`/servicos/${other.slug}`}
                      className="group flex items-center justify-between p-2 rounded-lg hover:bg-[#2a475e]/40 transition-colors text-xs text-[#8f98a0] hover:text-white"
                    >
                      <span className="group-hover:text-[#66c0f4] transition-colors line-clamp-1">
                        {other.title}
                      </span>
                      <ChevronRight className="h-3.5 w-3.5 text-[#2a475e] group-hover:text-[#66c0f4] transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-[#2a475e]/60">
                <Link
                  href="/servicos"
                  className="text-xs font-semibold text-[#66c0f4] hover:underline flex items-center gap-1"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Voltar para Todos os Serviços
                </Link>
              </div>
            </div>
          </div>
        </aside>
        </div>
      </div>
    </div>
  );
}
