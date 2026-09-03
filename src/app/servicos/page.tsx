import React from "react";
import type { Metadata } from "next";
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
  Zap, 
  Clock, 
  FileText
} from "lucide-react";
import { getAllServices } from "@/mock/services";

export const metadata: Metadata = {
  title: "Serviços de Engenharia & Retrofit | DSR Soluções",
  description: "Retrofitting de retificadores e UPS, digitalização de quadros e motores, manutenção preventiva e corretiva, comissionamento e consultoria especializada.",
};

const ICON_MAP = {
  Wrench,
  Cpu,
  ShieldCheck,
  Activity,
  GraduationCap,
  CheckCircle2,
  Compass,
};

export default function ServicosPage() {
  const services = getAllServices();

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] font-semibold">Serviços Especializados</span>
        </nav>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                <Wrench className="h-3.5 w-3.5" />
                ENGENHARIA INDUSTRIAL ESPECIALIZADA
              </span>
              <span className="rounded bg-[#2a475e]/60 px-2.5 py-1 text-xs font-mono text-[#8f98a0]">
                NR-10 • NR-12 • CREA/SP
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Serviços Especializados em <span className="text-[#66c0f4]">Eletrônica de Potência</span>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = ICON_MAP[service.iconName] || Wrench;
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#1b2838] to-[#171a21] p-6 sm:p-8 shadow-lg hover:border-[#66c0f4]/80 transition-all flex flex-col justify-between group scroll-mt-24"
                >
                  <div className="space-y-4">
                    {/* Header with Icon and Badge */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2a475e] border border-[#66c0f4]/40 text-[#66c0f4] group-hover:scale-105 transition-transform">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-[#66c0f4] uppercase tracking-wider block">
                            Serviço 0{index + 1}
                          </span>
                          <Link
                            href={`/servicos/${service.slug}`}
                            className="text-xl font-bold text-white group-hover:text-[#66c0f4] transition-colors"
                          >
                            {service.title}
                          </Link>
                        </div>
                      </div>

                      <span className="rounded bg-[#101822] border border-[#66c0f4]/40 px-2.5 py-1 text-[11px] font-mono text-[#66c0f4] whitespace-nowrap">
                        {service.badge}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-[#8f98a0]">
                      {service.subtitle}
                    </div>

                    <p className="text-sm text-[#c6d4df] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#66c0f4]" /> Diferenciais & Vantagens:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#8f98a0]">
                        {service.benefits.slice(0, 4).map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#66c0f4] mt-1.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Applications */}
                    <div className="rounded-lg bg-[#101822] p-3 border border-[#2a475e]/50 text-xs">
                      <span className="font-mono text-[#66c0f4] font-semibold block mb-0.5">
                        Aplicações Típicas:
                      </span>
                      <span className="text-[#8f98a0]">{service.applications}</span>
                    </div>
                  </div>

                  {/* Service Card Footer with Direct Link to Dedicated Page */}
                  <div className="mt-6 pt-4 border-t border-[#2a475e]/60 flex items-center justify-between gap-3">
                    <Link
                      href={`/servicos/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#66c0f4] hover:text-white transition-colors"
                    >
                      <span>Ver Página Completa do Serviço</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>

                    <a
                      href={`mailto:engenharia@dsrsolucoes.com.br?subject=Consulta de Servico - ${service.title}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-[#2a475e] hover:bg-[#3b678c] text-white px-3.5 py-1.5 text-xs font-semibold transition-all border border-[#66c0f4]/30"
                    >
                      <FileText className="h-3.5 w-3.5 text-[#66c0f4]" />
                      <span>Cotação</span>
                    </a>
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
                href="tel:551145645200"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2a475e] hover:bg-[#3b678c] text-white font-bold px-4 py-3 text-xs sm:text-sm transition-colors border border-[#66c0f4]/30"
              >
                <PhoneCall className="h-4 w-4 text-[#66c0f4]" />
                (11) 4564-5200
              </a>
              <a
                href="https://wa.me/5511980389729"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] font-bold px-5 py-3 text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(102,192,244,0.3)]"
              >
                <Zap className="h-4 w-4" />
                Plantão WhatsApp (11) 98038-9729
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
