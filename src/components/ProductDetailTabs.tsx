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
  // Sub-botão para exibir uma seção de parâmetros por vez
  const [selectedSpecGroup, setSelectedSpecGroup] = useState<number>(0);

  const tabs = [
    {
      id: "especificacoes" as TabType,
      label: "Especificações de Engenharia",
      shortLabel: "Especificações",
      icon: Sliders,
    },
    {
      id: "tecnologia" as TabType,
      label: "Tecnologia & Topologia",
      shortLabel: "Tecnologia",
      icon: Cpu,
    },
    {
      id: "downloads" as TabType,
      label: "Downloads & Catálogo",
      shortLabel: "Downloads & Catálogo",
      icon: FileDown,
    },
    {
      id: "normas" as TabType,
      label: "Normas & Confiabilidade",
      shortLabel: "Normas",
      icon: ShieldCheck,
    }
  ];

  return (
    <div className="rounded-xl bg-[#171a21]/90 border border-[#2a475e] shadow-2xl overflow-hidden backdrop-blur-sm">
      {/* Tab Navigation Header - Alto contraste e sem overflow da palavra Catálogo */}
      <div className="flex items-stretch border-b border-[#2a475e] bg-[#0c1219] p-1.5 sm:p-2 gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`group relative flex-1 min-w-[130px] sm:min-w-0 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all rounded-lg border ${
                isActive
                  ? "bg-gradient-to-b from-[#244b70] to-[#16334d] text-white border-[#66c0f4] shadow-[0_0_15px_rgba(102,192,244,0.35)] font-bold ring-1 ring-[#66c0f4]/50"
                  : "bg-[#121a24] text-[#8fa7be] border-[#22364a] hover:text-white hover:bg-[#1b2838] hover:border-[#38597a]"
              }`}
            >
              <Icon className={`h-4 w-4 shrink-0 transition-colors ${
                isActive ? "text-[#66c0f4]" : "text-[#7a92a8] group-hover:text-white"
              }`} />
              <span className="hidden md:inline truncate">{tab.label}</span>
              <span className="md:hidden truncate">{tab.shortLabel}</span>
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
            <div className="border-b border-[#2a475e] pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-[#101822] border border-[#66c0f4]/40 text-[#66c0f4]">
                  <Sliders className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                    Parâmetros Detalhados de Engenharia
                  </h3>
                  <p className="text-xs text-[#8f98a0]">
                    Selecione uma seção abaixo para consultar os parâmetros nominais de fábrica
                  </p>
                </div>
              </div>
            </div>

            {/* Sistema de Sub-Botões: 1 Seção por vez */}
            {product.especificacoes_completas && product.especificacoes_completas.length > 0 ? (
              <div className="space-y-5">
                {/* Botões seletores de categoria */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {product.especificacoes_completas.map((grupo, gIdx) => {
                    const isSelected = (selectedSpecGroup === gIdx) || (selectedSpecGroup >= product.especificacoes_completas!.length && gIdx === 0);
                    return (
                      <button
                        key={gIdx}
                        type="button"
                        onClick={() => setSelectedSpecGroup(gIdx)}
                        className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all border ${
                          isSelected
                            ? "bg-[#66c0f4] text-[#0a1118] font-bold border-[#66c0f4] shadow-[0_0_14px_rgba(102,192,244,0.45)]"
                            : "bg-[#101822] text-[#8fa7be] border-[#22364a] hover:bg-[#182635] hover:text-white hover:border-[#38597a]"
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-[#0a1118]" : "bg-[#66c0f4]"}`} />
                        <span>{grupo.grupo}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Exibição exclusiva do grupo selecionado com fundo escuro padronizado */}
                {(() => {
                  const currentGroup = product.especificacoes_completas[selectedSpecGroup] || product.especificacoes_completas[0];
                  if (!currentGroup) return null;
                  return (
                    <div className="rounded-xl bg-[#101822]/90 border border-[#2a475e] overflow-hidden shadow-lg animate-fadeIn">
                      <div className="bg-[#182535] px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-[#2a475e] flex items-center justify-between">
                        <span className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-sm bg-[#66c0f4] shadow-[0_0_8px_rgba(102,192,244,0.6)]" />
                          {currentGroup.grupo}
                        </span>
                      </div>
                      <div className="divide-y divide-[#2a475e]/60">
                        {currentGroup.itens.map((item, iIdx) => (
                          <div 
                            key={iIdx} 
                            className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-5 py-3 text-xs sm:text-sm bg-[#101822]/90 hover:bg-[#182635]/80 transition-colors gap-1 sm:gap-4"
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
                  );
                })()}
              </div>
            ) : (
              /* Fallback para especificações nominais do produto */
              <div className="rounded-xl bg-[#101822]/90 border border-[#2a475e] overflow-hidden shadow-lg">
                <div className="bg-[#182535] px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold text-white uppercase tracking-wider border-b border-[#2a475e]">
                  Especificações Nominais do Equipamento
                </div>
                <div className="divide-y divide-[#2a475e]/60">
                  {product.especificacoes_rapidas.map((spec, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="flex items-center justify-between px-4 sm:px-5 py-3 text-xs sm:text-sm bg-[#101822]/90 hover:bg-[#182635]/80 transition-colors"
                    >
                      <span className="text-[#8f98a0] font-medium">{spec.chave}</span>
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
                      Documento oficial impresso da DSR com descritivo dos módulos intercambiáveis, lógica da UDQ, proteções de engenharia e contatos de suporte.
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
                  Garantia de fábrica cobrindo semicondutores de potência, módulos de disparo, módulos UDQ e circuitos eletrônicos de controle.
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
