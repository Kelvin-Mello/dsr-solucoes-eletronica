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
import { PRODUCTS_MOCK } from "@/mock/products";

export default function Home() {
  const featuredProduct = PRODUCTS_MOCK[0];

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
                  href={`/produtos/${featuredProduct.slug}`}
                  className="flex items-center gap-2 rounded bg-gradient-to-r from-[#66c0f4] to-[#1b75bc] hover:from-[#85d1f7] hover:to-[#2892e6] text-[#0e141b] font-bold px-6 py-3.5 text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(102,192,244,0.4)] transition-all transform hover:scale-[1.02]"
                >
                  <Cpu className="h-4 w-4" />
                  Ver Retificador DSR-9000 Pro
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

            {/* Right Card / Product Highlight */}
            <div className="lg:col-span-5">
              <Link
                href={`/produtos/${featuredProduct.slug}`}
                className="group block relative overflow-hidden rounded-lg bg-gradient-to-b from-[#2a475e] to-[#1b2e3f] border border-[#3b678c] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:border-[#66c0f4] transition-all duration-300"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded bg-black">
                  <Image
                    src={featuredProduct.midias[0].url}
                    alt={featuredProduct.nome}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 rounded bg-[#101822]/90 border border-[#66c0f4]/50 px-2 py-0.5 text-[11px] font-mono text-[#66c0f4]">
                    DESTAQUE INDUSTRIAL
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#66c0f4]">
                      {featuredProduct.codigo_modelo}
                    </span>
                    <span className="text-xs text-[#8f98a0]">
                      {featuredProduct.status_disponibilidade}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#66c0f4] transition-colors">
                    {featuredProduct.nome}
                  </h3>
                  <p className="text-xs text-[#8f98a0] line-clamp-2">
                    {featuredProduct.descricao}
                  </p>

                  <div className="pt-2 border-t border-[#3b678c]/40 flex items-center justify-between text-xs text-[#66c0f4] font-semibold">
                    <span>Acessar Ficha Completa e Carrossel</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
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
