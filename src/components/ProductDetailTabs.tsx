"use client";

import React, { useState } from "react";
import { 
  Sliders, 
  Cpu, 
  FileDown, 
  ShieldCheck, 
  Download, 
  Gauge, 
  CheckCircle, 
  Clock, 
  FileText, 
  Layers
} from "lucide-react";
import { Product } from "@/mock/products";

interface ProductDetailTabsProps {
  product: Product;
}

type TabType = "especificacoes" | "tecnologia" | "downloads" | "normas";

export function ProductDetailTabs({ product }: ProductDetailTabsProps) {
  // Default to 'especificacoes' as shown in the user's request
  const [activeTab, setActiveTab] = useState<TabType>("especificacoes");

  const tabs = [
    {
      id: "especificacoes" as TabType,
      label: "Especificações de Engenharia",
      shortLabel: "Especificações",
      icon: Sliders,
      badge: product.especificacoes_completas 
        ? `${product.especificacoes_completas.reduce((acc, g) => acc + g.itens.length, 0)} parâmetros`
        : undefined
    },
    {
      id: "tecnologia" as TabType,
      label: "Tecnologia & Topologia",
      shortLabel: "Tecnologia",
      icon: Cpu,
    },
    {
      id: "downloads" as TabType,
      label: "Downloads & Catálogos",
      shortLabel: "Downloads",
      icon: FileDown,
      badge: product.datasheet_url ? "PDF Oficial" : undefined,
      badgeColor: "bg-[#66c0f4] text-[#0e141b]"
    },
    {
      id: "normas" as TabType,
      label: "Normas & Confiabilidade",
      shortLabel: "Normas",
      icon: ShieldCheck,
      badge: `${product.certificacoes.length} normas`
    }
  ];

  return (
    <div className="rounded-xl bg-[#171a21]/90 border border-[#2a475e] shadow-2xl overflow-hidden backdrop-blur-sm">
      {/* Tab Navigation Header - Steam Styled */}
      <div className="flex items-center border-b border-[#2a475e] bg-[#101822]/90 px-2 sm:px-4 pt-2 overflow-x-auto scrollbar-none gap-1 sm:gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`group relative flex items-center gap-2 px-3.5 sm:px-5 py-3 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap border-b-2 -mb-[2px] ${
                isActive
                  ? "text-white border-[#66c0f4] bg-[#1b2838]/80 shadow-[0_-4px_15px_rgba(102,192,244,0.15)] rounded-t-md"
                  : "text-[#8f98a0] border-transparent hover:text-[#c6d4df] hover:bg-[#1b2838]/40 rounded-t-md"
              }`}
            >
              <Icon className={`h-4 w-4 transition-colors ${
                isActive ? "text-[#66c0f4]" : "text-[#8f98a0] group-hover:text-[#c6d4df]"
              }`} />
              <span className="hidden md:inline">{tab.label}</span>
              <span className="md:hidden">{tab.shortLabel}</span>
              
              {tab.badge && (
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                  tab.badgeColor || (isActive ? "bg-[#66c0f4]/20 text-[#66c0f4]" : "bg-[#2a475e]/60 text-[#8f98a0]")
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Contents Container */}
      <div className="p-5 sm:p-7 md:p-8">
        {/* ================================================================= */}
        {/* ABA 1: ESPECIFICAÇÕES TÉCNICAS                                    */}
        {/* ================================================================= */}
        {activeTab === "especificacoes" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2a475e] pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-[#101822] border border-[#66c0f4]/40 text-[#66c0f4]">
                  <Sliders className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    Parâmetros Detalhados de Engenharia
                  </h3>
                  <p className="text-xs text-[#8f98a0]">
                    Valores nominais, limites de operação e configurações construtivas de fábrica
                  </p>
                </div>
              </div>

              {product.datasheet_url && (
                <a
                  href={product.datasheet_url}
                  download={`Catalogo-DSR-${product.codigo_modelo.replace(/[^a-zA-Z0-9_-]/g, "_")}.pdf`}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#66c0f4] hover:underline"
                >
                  <Download className="h-3.5 w-3.5" /> Ficha Técnica em PDF
                </a>
              )}
            </div>

            {/* Render Detailed Specification Groups */}
            {product.especificacoes_completas && product.especificacoes_completas.length > 0 ? (
              <div className="space-y-4">
                {product.especificacoes_completas.map((grupo, gIdx) => (
                  <div 
                    key={gIdx} 
                    className="rounded-lg bg-[#101822]/90 border border-[#2a475e] overflow-hidden shadow-sm"
                  >
                    <div className="bg-[#1b2838] px-4 py-2.5 text-xs font-bold text-white uppercase tracking-wider border-b border-[#2a475e] flex items-center justify-between">
                      <span>{grupo.grupo}</span>
                      <span className="font-mono text-[11px] text-[#66c0f4]">
                        {grupo.itens.length} parâmetros
                      </span>
                    </div>
                    <div className="divide-y divide-[#2a475e]/60">
                      {grupo.itens.map((item, iIdx) => (
                        <div 
                          key={iIdx} 
                          className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 text-xs hover:bg-[#1b2838]/40 transition-colors gap-1 sm:gap-4"
                        >
                          <span className="text-[#8f98a0] font-medium sm:w-1/2">
                            {item.parametro}
                          </span>
                          <span className="font-mono font-bold text-white sm:text-right sm:w-1/2 break-words">
                            {item.valor}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Fallback to Quick Specs if no complete specs defined */
              <div className="rounded-lg bg-[#101822]/90 border border-[#2a475e] overflow-hidden">
                <div className="bg-[#1b2838] px-4 py-2.5 text-xs font-bold text-white uppercase tracking-wider border-b border-[#2a475e]">
                  Especificações Nominais do Equipamento
                </div>
                <div className="divide-y divide-[#2a475e]/60">
                  {product.especificacoes_rapidas.map((spec, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="flex items-center justify-between px-4 py-3 text-xs hover:bg-[#1b2838]/40"
                    >
                      <span className="text-[#8f98a0]">{spec.chave}</span>
                      <span className="font-mono font-bold text-white text-right">{spec.valor}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* ABA 2: TECNOLOGIA & TOPOLOGIA                                     */}
        {/* ================================================================= */}
        {activeTab === "tecnologia" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 border-b border-[#2a475e] pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-[#101822] border border-[#66c0f4]/50 text-[#66c0f4]">
                <Gauge className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  Tecnologia de Potência & Topologia
                </h3>
                <p className="text-xs text-[#66c0f4] font-mono">
                  Engenharia DSR Soluções • {product.subcategoria || "Confiabilidade Industrial"}
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-[#101822]/70 border border-[#2a475e] p-5 md:p-6 text-sm md:text-base leading-relaxed text-[#c6d4df] space-y-4">
              <p>{product.texto_tecnologia}</p>
            </div>

            {/* Quick architectural notes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-lg bg-[#101822] border border-[#2a475e] p-4 text-xs">
                <span className="font-mono text-[10px] text-[#66c0f4] uppercase tracking-wider block mb-1">
                  Arquitetura de Controle
                </span>
                <p className="text-white font-semibold">
                  Módulos de alta imunidade a ruídos eletromagnéticos (EMI/RFI).
                </p>
              </div>
              <div className="rounded-lg bg-[#101822] border border-[#2a475e] p-4 text-xs">
                <span className="font-mono text-[10px] text-[#66c0f4] uppercase tracking-wider block mb-1">
                  Manutenção & Reposição
                </span>
                <p className="text-white font-semibold">
                  Redução expressiva do MTTR com placas acessíveis e padronizadas.
                </p>
              </div>
              <div className="rounded-lg bg-[#101822] border border-[#2a475e] p-4 text-xs">
                <span className="font-mono text-[10px] text-[#66c0f4] uppercase tracking-wider block mb-1">
                  Ambiente Industrial
                </span>
                <p className="text-white font-semibold">
                  Dimensionamento térmico robusto para operação contínua em subestações.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* ABA 3: DOWNLOADS & CATÁLOGOS                                      */}
        {/* ================================================================= */}
        {activeTab === "downloads" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 border-b border-[#2a475e] pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-[#101822] border border-[#66c0f4]/50 text-[#66c0f4]">
                <FileDown className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  Downloads & Documentação Técnica
                </h3>
                <p className="text-xs text-[#8f98a0]">
                  Catálogos do fabricante, especificações de engenharia e guias de aplicação
                </p>
              </div>
            </div>

            {/* Official Catalog Card */}
            {product.datasheet_url ? (
              <div className="rounded-xl bg-gradient-to-r from-[#101822] via-[#1b2e3f] to-[#101822] border border-[#66c0f4]/50 p-5 sm:p-6 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#101822] border-2 border-[#66c0f4] text-[#66c0f4] flex-shrink-0 shadow-[0_0_15px_rgba(102,192,244,0.3)]">
                    <FileDown className="h-7 w-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-[#66c0f4] text-[#0e141b] text-[10px] font-mono px-2 py-0.5 uppercase tracking-wider font-extrabold">
                        Catálogo Oficial
                      </span>
                      <span className="text-xs text-[#8f98a0] font-mono">Formato PDF • 221 KB</span>
                    </div>
                    <h4 className="text-white font-bold text-base sm:text-lg mt-1">
                      Ficha Técnica Completa ({product.codigo_modelo})
                    </h4>
                    <p className="text-xs text-[#c6d4df] mt-1 max-w-xl">
                      Documento oficial impresso da DSR com descritivo dos módulos intercambiáveis, lógica da UDQ, histórico de alarmes e contatos da engenharia.
                    </p>
                  </div>
                </div>

                <a
                  href={product.datasheet_url}
                  download={`Catalogo-Oficial-DSR-${product.codigo_modelo.replace(/[^a-zA-Z0-9_-]/g, "_")}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-[#66c0f4] via-[#4ba6df] to-[#1b75bc] hover:brightness-110 text-[#0e141b] font-extrabold px-6 py-3 text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(102,192,244,0.4)] shrink-0"
                >
                  <Download className="h-4 w-4" />
                  Baixar Catálogo PDF
                </a>
              </div>
            ) : (
              <div className="rounded-lg bg-[#101822] border border-[#2a475e] p-6 text-center space-y-2">
                <FileText className="h-8 w-8 text-[#66c0f4] mx-auto opacity-70" />
                <h4 className="text-white font-bold text-sm">Ficha Técnica Personalizada</h4>
                <p className="text-xs text-[#8f98a0] max-w-md mx-auto">
                  A especificação deste modelo é customizada de acordo com os níveis de tensão e corrente de sua planta. Solicite uma cópia técnica pelo nosso canal de engenharia.
                </p>
              </div>
            )}

            {/* Additional Engineering Resources Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-lg bg-[#101822] border border-[#2a475e] p-4 flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#1b2838] text-[#66c0f4] flex-shrink-0">
                  <Layers className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-xs font-bold text-white">Esquemáticos & Unifilares</h5>
                  <p className="text-[11px] text-[#8f98a0]">
                    Diagramas elétricos e memoriais de cálculo de UDQ disponíveis para projetos de integração e retrofit.
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-[#101822] border border-[#2a475e] p-4 flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#1b2838] text-[#66c0f4] flex-shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <h5 className="text-xs font-bold text-white">Laudos & ART de Fabricação</h5>
                  <p className="text-[11px] text-[#8f98a0]">
                    Certificados de conformidade com normas NR-10/NR-12 e relatório de testes de fábrica (FAT).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* ABA 4: NORMAS & CONFIABILIDADE                                   */}
        {/* ================================================================= */}
        {activeTab === "normas" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 border-b border-[#2a475e] pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-[#101822] border border-[#66c0f4]/50 text-[#66c0f4]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  Normas, Conformidade & Confiabilidade
                </h3>
                <p className="text-xs text-[#8f98a0]">
                  Garantia de fábrica, critérios de conformidade normativa e suporte técnico de engenharia
                </p>
              </div>
            </div>

            {/* Certifications Badges */}
            <div className="rounded-lg bg-[#101822]/90 border border-[#2a475e] p-5 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#66c0f4] font-bold block">
                Normas de Fabricação e Conectividade Industrial
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {product.certificacoes.map((cert, idx) => (
                  <span 
                    key={idx} 
                    className="rounded bg-[#2a475e] px-3 py-1.5 text-xs text-white font-mono font-bold border border-[#3b678c] flex items-center gap-1.5"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-[#66c0f4]" />
                    {cert}
                  </span>
                ))}
              </div>
              <p className="text-xs text-[#8f98a0] leading-relaxed pt-1">
                Todos os retificadores e sistemas industriais DSR são construídos atendendo integralmente às diretrizes de segurança da NR-10 e NR-12, além de compatibilidade com protocolos industriais de automação.
              </p>
            </div>

            {/* Factory Warranty & Support */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-[#101822] border border-[#2a475e] p-5 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Clock className="h-4 w-4 text-[#66c0f4]" />
                  Termo de Garantia DSR
                </div>
                <p className="text-sm font-semibold text-[#66c0f4]">
                  {product.garantia}
                </p>
                <p className="text-xs text-[#8f98a0]">
                  Garantia de fábrica cobrindo semicondutores de potência, módulos de disparo, módulos UDQ e circuitos microcontrolados.
                </p>
              </div>

              <div className="rounded-lg bg-[#101822] border border-[#2a475e] p-5 space-y-2">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Layers className="h-4 w-4 text-[#66c0f4]" />
                  Serviços de Ciclo de Vida
                </div>
                <p className="text-xs text-[#c6d4df] leading-relaxed">
                  Disponibilidade para suporte técnico, comissionamento em campo, planos de manutenção preventiva e retrofitting de pontes existentes.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
