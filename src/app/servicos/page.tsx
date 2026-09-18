import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ChevronRight, 
  PhoneCall, 
  Zap, 
  Clock, 
  FileText
} from "lucide-react";
import { getAllServices } from "@/mock/services";

export const metadata: Metadata = {
  title: "Serviços de Engenharia & Retrofit | DSR Soluções",
  description: "Retrofitting de retificadores e UPS, digitalização de quadros e motores, manutenção preventiva e corretiva, comissionamento e consultoria especializada.",
};

export default function ServicosPage() {
  const services = getAllServices();

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
            <span className="text-[#66c0f4] font-semibold">Serviços Especializados</span>
          </nav>
        </div>

        {/* Content sections wrapper */}
        <div className="space-y-10 sm:space-y-12">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Serviços <span className="text-[#66c0f4]">Especializados</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed">
              Da modernização (retrofit) de sistemas legados à digitalização completa de subestações e manutenção preventiva 24/7. Cada serviço conta com página detalhada de escopo, entregáveis e normas atendidas.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#2a475e]/60 text-xs font-mono">
              <div>
                <span className="block text-[#8f98a0]">PLANTÃO</span>
                <span className="font-bold text-white text-sm">24 Horas / 7 Dias</span>
              </div>
              <div>
                <span className="block text-[#8f98a0]">ECONOMIA RETROFIT</span>
                <span className="font-bold text-[#66c0f4] text-sm">Até 65% vs Novo</span>
              </div>
              <div>
                <span className="block text-[#8f98a0]">ATENDIMENTO</span>
                <span className="font-bold text-white text-sm">Nacional em Campo</span>
              </div>
              <div>
                <span className="block text-[#8f98a0]">GARANTIA</span>
                <span className="font-bold text-white text-sm">Até 24 Meses</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#2a475e] pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">Nossas Áreas de Atuação Técnica</h2>
              <p className="text-xs text-[#8f98a0] mt-0.5">Selecione um serviço para acessar a documentação técnica completa e metodologia</p>
            </div>
            <span className="text-xs font-mono text-[#66c0f4]">{services.length} Áreas Especializadas</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="group flex flex-col rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#1b2838] to-[#171a21] overflow-hidden shadow-lg hover:border-[#66c0f4]/80 hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300 scroll-mt-24"
                >
                  {/* Media Container (Clickable Link) */}
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="relative aspect-[16/10] w-full overflow-hidden bg-[#101822] block cursor-pointer"
                    title={`Ver documentação técnica de ${service.title}`}
                  >
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171a21] via-transparent to-black/20 pointer-events-none" />

                    {/* Badge top-left */}
                    {service.badge && (
                      <div className="absolute top-2.5 left-2.5">
                        <span className="rounded bg-[#101822]/90 border border-[#2a475e] px-2 py-0.5 text-[10px] font-mono text-[#66c0f4] backdrop-blur-md shadow-sm">
                          {service.badge}
                        </span>
                      </div>
                    )}
                  </Link>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5 space-y-3">
                    <div>
                      <Link
                        href={`/servicos/${service.slug}`}
                        className="text-base sm:text-lg font-bold text-white group-hover:text-[#66c0f4] transition-colors line-clamp-2 leading-snug"
                      >
                        {service.title}
                      </Link>
                    </div>

                    <p className="text-xs text-[#8f98a0] line-clamp-3 leading-relaxed flex-1">
                      {service.subtitle || service.description}
                    </p>

                    {/* Card Footer Actions */}
                    <div className="mt-auto pt-3 border-t border-[#2a475e]/60 flex items-center gap-2">
                      <Link
                        href={`/servicos/${service.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-[#2a475e] hover:bg-[#3b678c] text-white px-3 py-2 text-xs font-semibold transition-colors"
                      >
                        <span>Detalhes</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href={`mailto:contato@dsrsolucoes.com.br?subject=Cotação de Serviço - ${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] px-3 py-2 text-xs font-bold transition-all shadow-sm"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        <span>Cotação</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Emergency Plantão Callout */}
        <div className="rounded-xl border border-[#3b678c] bg-gradient-to-r from-[#171a21] via-[#1f374d] to-[#101822] p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 rounded bg-[#101822] px-2.5 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/30">
                <Clock className="h-3.5 w-3.5 text-amber-400" /> ATENDIMENTO TÉCNICO IMEDIATO
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Sua planta industrial está enfrentando parada em equipamento crítico?
              </h3>
              <p className="text-sm text-[#8f98a0] max-w-2xl">
                Nossos engenheiros de campo prestam suporte para diagnóstico de falha, reparo emergencial e comissionamento com peças sobressalentes em estoque nacional.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="tel:5511952345037"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2a475e] hover:bg-[#3b678c] text-white font-bold px-4 py-3 text-xs sm:text-sm transition-colors border border-[#66c0f4]/30"
              >
                <PhoneCall className="h-4 w-4 text-[#66c0f4]" />
                (11) 95234-5037
              </a>
              <a
                href="https://wa.me/5511952345037"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] font-bold px-5 py-3 text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(102,192,244,0.3)]"
              >
                <Zap className="h-4 w-4" />
                Plantão WhatsApp (11) 95234-5037
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
