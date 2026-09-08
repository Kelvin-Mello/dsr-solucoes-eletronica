import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Zap, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  Activity, 
  Wrench, 
  CheckCircle2, 
  Sliders, 
  Sparkles,
  Layers,
  ChevronRight
} from "lucide-react";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df]">
      {/* Hero Section - Industrial Steam Atmosphere */}
      <section className="relative overflow-hidden border-b border-[#2a475e] bg-gradient-to-b from-[#101822] via-[#1b2838] to-[#171a21] py-16 sm:py-24">
        {/* Glow backdrop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#66c0f4]/10 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#2a475e]/80 border border-[#66c0f4]/40 px-3.5 py-1.5 text-xs font-mono text-[#66c0f4]">
                <Zap className="h-3.5 w-3.5 animate-bounce" />
                ENGENHARIA DE ELETRÔNICA DE POTÊNCIA & RETROFITTING
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Potência de Alta Confiabilidade para a <span className="text-[#66c0f4]">Indústria Pesada</span>
              </h1>

              <p className="text-base sm:text-lg text-[#8f98a0] leading-relaxed max-w-2xl">
                Projetamos e modernizamos retificadores industriais, pontes tiristorizadas e sistemas de conversão de energia para operações críticas contínuas 24/7.
              </p>

              {/* Quick bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#66c0f4]" /> Eficiência energética até 98,4%
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#66c0f4]" /> Retrofit sem interrupção de obras civis
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#66c0f4]" /> Conformidade com normas NR-10 e NR-12
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-white">
                  <CheckCircle2 className="h-4 w-4 text-[#66c0f4]" /> Telemetria integrada com CLP e IHM 10.4"
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/produtos"
                  className="flex items-center gap-2 rounded bg-gradient-to-r from-[#66c0f4] to-[#1b75bc] hover:from-[#85d1f7] hover:to-[#2892e6] text-[#0e141b] font-bold px-6 py-3.5 text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(102,192,244,0.4)] transition-all transform hover:scale-[1.02]"
                >
                  <Cpu className="h-4 w-4" />
                  Explorar Catálogo Completo
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#servicos"
                  className="flex items-center gap-2 rounded bg-[#2a475e] hover:bg-[#315a77] text-white px-5 py-3.5 text-sm font-semibold border border-[#3b678c] transition-colors"
                >
                  Serviços de Retrofit
                </Link>
              </div>
            </div>

            {/* Right Showcase: Imagem Geral que Representa a DSR como um Todo */}
            <div className="lg:col-span-5">
              <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-[#101822] via-[#162534] to-[#0c1219] border border-[#2a475e] p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-[#66c0f4]/70 transition-all duration-500">
                <div className="relative aspect-[16/11] sm:aspect-video lg:aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#070b10]">
                  <Image
                    src="/images/company/dsr-hero-industrial.jpg"
                    alt="DSR Soluções em Eletrônica de Potência - Centro de Engenharia e Manufatura"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradiente de proteção de contraste */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c131c] via-[#0c131c]/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0c131c]/50 via-transparent to-transparent pointer-events-none" />

                  {/* Badges superiores */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                    <span className="inline-flex items-center gap-1.5 rounded bg-[#101822]/90 border border-[#66c0f4]/50 px-2.5 py-1 text-[11px] font-mono font-bold text-[#66c0f4] shadow-md backdrop-blur-md">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#66c0f4]" />
                      ENGENHARIA DSR
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded bg-[#101822]/90 border border-[#2a475e] px-2.5 py-1 text-[11px] font-mono text-[#c6d4df] shadow-md backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      PLANTÃO 24/7
                    </span>
                  </div>

                  {/* Legenda institucional inferior */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <div className="rounded-lg bg-[#0d151e]/85 border border-[#2a475e]/80 p-3 backdrop-blur-md">
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                        DSR Soluções em Eletrônica de Potência
                      </h3>
                      <p className="text-[11px] text-[#c6d4df] mt-0.5 leading-normal">
                        Infraestrutura completa de engenharia, ensaios em carga real e modernização de cubículos industriais de alta potência.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Micro barra inferior de diferenciais institucionais */}
                <div className="grid grid-cols-3 gap-2 pt-2.5 px-1 text-center font-mono text-[10px] text-[#8f98a0]">
                  <div className="rounded bg-[#101822]/70 border border-[#2a475e]/60 py-1.5 px-1 truncate">
                    <span className="text-[#66c0f4] font-bold block">100%</span>
                    Nacional
                  </div>
                  <div className="rounded bg-[#101822]/70 border border-[#2a475e]/60 py-1.5 px-1 truncate">
                    <span className="text-[#66c0f4] font-bold block">CREA / ART</span>
                    Certificado
                  </div>
                  <div className="rounded bg-[#101822]/70 border border-[#2a475e]/60 py-1.5 px-1 truncate">
                    <span className="text-[#66c0f4] font-bold block">Brasil</span>
                    Atendimento
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Steam Showcase: Destaques e Recomendados (Produtos & Serviços em Rotação Automática) */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-[#101822] via-[#141f2b] to-[#171a21] border-b border-[#2a475e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeaturedCarousel />
        </div>
      </section>

      {/* Retrofitting & Engineering Pillars */}
      <section id="servicos" className="py-16 bg-[#171a21] border-b border-[#2a475e]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#66c0f4] mb-2">
              Soluções Especializadas
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Engenharia Completa do Diagnóstico ao Comissionamento
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg bg-[#1b2838] border border-[#2a475e] p-6 hover:border-[#66c0f4]/60 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#2a475e] text-[#66c0f4] mb-4">
                <Wrench className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Retrofitting de Painéis Legados
              </h4>
              <p className="text-xs text-[#8f98a0] leading-relaxed">
                Modernização completa de cubículos existentes, substituindo componentes obsoletos por semicondutores modernos sem necessidade de substituir o transformador ou a estrutura civil.
              </p>
            </div>

            <div className="rounded-lg bg-[#1b2838] border border-[#2a475e] p-6 hover:border-[#66c0f4]/60 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#2a475e] text-[#66c0f4] mb-4">
                <Activity className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Análise de Harmônicos & THDi
              </h4>
              <p className="text-xs text-[#8f98a0] leading-relaxed">
                Medições de qualidade de energia conforme IEEE 519 com filtros ativos e passivos para eliminação de distorções na rede da concessionária e proteção de geradores.
              </p>
            </div>

            <div className="rounded-lg bg-[#1b2838] border border-[#2a475e] p-6 hover:border-[#66c0f4]/60 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#2a475e] text-[#66c0f4] mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Adequação a NR-10 e NR-12
              </h4>
              <p className="text-xs text-[#8f98a0] leading-relaxed">
                Engenharia de segurança aplicada a painéis de alta tensão e corrente, bloqueios mecânicos com chave tipo intertravamento, portas com sensor e laudos com ART.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
