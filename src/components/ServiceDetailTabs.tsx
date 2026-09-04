"use client";

import React, { useState } from "react";
import { 
  Wrench, 
  CheckCircle2, 
  Layers, 
  Award, 
  FileText, 
  ShieldCheck, 
  Activity, 
  Send,
  PhoneCall
} from "lucide-react";
import { ServiceItem } from "@/mock/services";

interface ServiceDetailTabsProps {
  service: ServiceItem;
}

type ServiceTabType = "escopo" | "beneficios" | "equipamentos" | "normas";

export function ServiceDetailTabs({ service }: ServiceDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<ServiceTabType>("escopo");

  const tabs = [
    {
      id: "escopo" as ServiceTabType,
      label: "Escopo & Metodologia",
      shortLabel: "Metodologia",
      icon: Wrench,
    },
    {
      id: "beneficios" as ServiceTabType,
      label: "Vantagens & Benefícios",
      shortLabel: "Vantagens",
      icon: CheckCircle2,
      badge: `${service.benefits.length} ganhos`
    },
    {
      id: "equipamentos" as ServiceTabType,
      label: "Equipamentos Atendidos",
      shortLabel: "Equipamentos",
      icon: Layers,
      badge: `${service.equipmentCovered.length} tipos`
    },
    {
      id: "normas" as ServiceTabType,
      label: "Normas & Entregáveis",
      shortLabel: "Normas & ART",
      icon: Award,
    }
  ];

  return (
    <div className="rounded-xl bg-[#171a21]/90 border border-[#2a475e] shadow-2xl overflow-hidden backdrop-blur-sm">
      {/* Tab Navigation Header - Alto contraste consistente */}
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
        {/* ABA 1: ESCOPO & METODOLOGIA                                       */}
        {/* ================================================================= */}
        {activeTab === "escopo" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 border-b border-[#2a475e] pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-[#101822] border border-[#66c0f4]/40 text-[#66c0f4]">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  Escopo Técnico & Metodologia de Engenharia
                </h3>
                <p className="text-xs text-[#8f98a0]">
                  Rigor técnico, projeto executivo e conformidade normativa em campo
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-[#101822]/80 border border-[#2a475e] p-5 md:p-6 text-sm md:text-base leading-relaxed text-[#c6d4df] space-y-4">
              <p>{service.detailedDescription}</p>
            </div>

            {/* Applications Callout */}
            {service.applications && (
              <div className="rounded-lg bg-[#1b2838]/60 border border-[#2a475e] p-4 text-xs">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#66c0f4] block mb-1">
                  Principais Aplicações Industriais:
                </span>
                <p className="text-[#c6d4df] leading-relaxed">
                  {service.applications}
                </p>
              </div>
            )}
          </div>
        )}

        {/* ================================================================= */}
        {/* ABA 2: VANTAGENS & BENEFÍCIOS                                    */}
        {/* ================================================================= */}
        {activeTab === "beneficios" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 border-b border-[#2a475e] pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-[#101822] border border-[#66c0f4]/50 text-[#66c0f4]">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  Vantagens Estratégicas & Diferenciais DSR
                </h3>
                <p className="text-xs text-[#8f98a0]">
                  Ganhos operacionais, elevação de confiabilidade e retorno de investimento
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {service.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg bg-[#101822] border border-[#2a475e]/80 p-4 hover:border-[#66c0f4]/40 hover:bg-[#1b2838]/40 transition-all group"
                >
                  <span className="h-2 w-2 rounded-full bg-[#66c0f4] mt-2 flex-shrink-0 shadow-[0_0_8px_#66c0f4] group-hover:scale-125 transition-transform" />
                  <span className="text-xs sm:text-sm text-[#c6d4df] leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* ABA 3: EQUIPAMENTOS ATENDIDOS                                     */}
        {/* ================================================================= */}
        {activeTab === "equipamentos" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 border-b border-[#2a475e] pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-[#101822] border border-[#66c0f4]/50 text-[#66c0f4]">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  Equipamentos & Sistemas Atendidos
                </h3>
                <p className="text-xs text-[#8f98a0]">
                  Gama completa de ativos de potência cobertos pela engenharia DSR
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.equipmentCovered.map((eq, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg bg-[#101822] border border-[#2a475e] p-3.5 text-xs sm:text-sm text-white hover:border-[#66c0f4]/50 transition-colors"
                >
                  <span className="text-[#66c0f4] font-bold font-mono text-base">▸</span>
                  <span>{eq}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* ABA 4: NORMAS & ENTREGÁVEIS                                       */}
        {/* ================================================================= */}
        {activeTab === "normas" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 border-b border-[#2a475e] pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-[#101822] border border-[#66c0f4]/50 text-[#66c0f4]">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                  Normas Técnicas & Entregáveis do Projeto
                </h3>
                <p className="text-xs text-[#8f98a0]">
                  Conformidade legal, documentação e emissão de ART CREA/SP
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Deliverables */}
              <div className="rounded-lg bg-[#101822] border border-[#2a475e] p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#66c0f4] flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Entregáveis de Engenharia
                </h4>
                <ul className="space-y-2 text-xs text-[#8f98a0]">
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#66c0f4] font-bold">•</span>
                      <span className="text-[#c6d4df]">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standards */}
              <div className="rounded-lg bg-[#101822] border border-[#2a475e] p-5 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#66c0f4] flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" /> Normas & Legislação Aplicada
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.standards.map((st, i) => (
                    <span
                      key={i}
                      className="rounded bg-[#2a475e] border border-[#3b678c] px-3 py-1 text-xs font-mono font-bold text-[#66c0f4]"
                    >
                      {st}
                    </span>
                  ))}
                </div>
                <div className="rounded bg-[#1b2838] border border-[#2a475e] p-3 text-[11px] text-[#8f98a0] leading-relaxed mt-2">
                  Todos os projetos, comissionamentos e manutenções são executados com emissão de <strong className="text-white">Anotação de Responsabilidade Técnica (ART)</strong> registrada no CREA/SP.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
