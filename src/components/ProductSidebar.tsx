"use client";

import React, { useState } from "react";
import { 
  Zap, 
  Cpu, 
  Shield, 
  FileText, 
  Send, 
  Download, 
  PhoneCall, 
  Clock, 
  Check, 
  ArrowRight,
  Info,
  Layers,
  Sparkles
} from "lucide-react";
import { Product } from "@/mock/products";
import { QuoteModal } from "./QuoteModal";

interface ProductSidebarProps {
  product: Product;
}

export function ProductSidebar({ product }: ProductSidebarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadDatasheet = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Download da Ficha Técnica Oficial (${product.codigo_modelo}.pdf) iniciado.`);
    }, 800);
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        {/* Steam-Inspired Quick Specs Container */}
        <div className="rounded-lg bg-gradient-to-b from-[#2a475e] to-[#1b2e3f] border border-[#3b678c] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.6)] backdrop-blur-md">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#3b678c]/60 pb-3.5 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#101822] text-[#66c0f4] border border-[#66c0f4]/40">
                <Layers className="h-4 w-4" />
              </div>
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                Especificações Rápidas
              </h2>
            </div>
            <span className="rounded bg-[#101822]/80 px-2 py-0.5 text-[10px] font-mono text-[#66c0f4] border border-[#66c0f4]/30">
              DATAPACK v3.4
            </span>
          </div>

          {/* Key / Value Specs List */}
          <div className="divide-y divide-[#1b2838]/80 text-xs">
            {product.especificacoes_rapidas.map((spec, index) => (
              <div
                key={index}
                className={`flex items-start justify-between py-2.5 px-2 rounded transition-colors ${
                  spec.destaque
                    ? "bg-[#101822]/70 font-semibold border-l-2 border-[#66c0f4]"
                    : "hover:bg-[#101822]/30"
                }`}
              >
                <span className="text-[#8f98a0] pr-2 flex items-center gap-1.5">
                  {spec.destaque && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#66c0f4]"></span>
                  )}
                  {spec.chave}
                </span>
                <span
                  className={`text-right font-mono ${
                    spec.destaque ? "text-[#66c0f4] font-bold" : "text-white"
                  }`}
                >
                  {spec.valor}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Info Callout */}
          <div className="mt-4 rounded bg-[#101822]/90 border border-[#2a475e] p-3 text-[11px] text-[#8f98a0] flex items-start gap-2">
            <Info className="h-4 w-4 text-[#66c0f4] flex-shrink-0 mt-0.5" />
            <p>
              Projetos de <strong className="text-white">Retrofit</strong> podem ser adaptados para barramentos de 220V a 13.8kV com transformador interposto.
            </p>
          </div>

          {/* High-Impact CTA Button: Solicitar Cotação */}
          <div className="mt-5 pt-4 border-t border-[#3b678c]/60 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-md bg-gradient-to-r from-[#66c0f4] via-[#4ba6df] to-[#1b75bc] p-3.5 text-center font-extrabold uppercase tracking-wider text-[#0e141b] shadow-[0_0_20px_rgba(102,192,244,0.5)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_30px_rgba(102,192,244,0.7)] active:scale-[0.98]"
            >
              {/* Button Glow Pulse Effect */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <Send className="h-5 w-5 text-[#0e141b] transition-transform group-hover:translate-x-1" />
              <span className="text-sm md:text-base drop-shadow-sm">
                Solicitar Cotação
              </span>
            </button>

            {/* Secondary Action: Baixar Ficha Técnica (Datasheet) */}
            <button
              type="button"
              onClick={handleDownloadDatasheet}
              disabled={downloading}
              className="flex w-full items-center justify-center gap-2 rounded bg-[#1b2838] hover:bg-[#203248] text-[#c6d4df] hover:text-white p-2.5 text-xs font-semibold uppercase tracking-wider border border-[#2a475e] hover:border-[#66c0f4] transition-all"
            >
              <Download className={`h-4 w-4 text-[#66c0f4] ${downloading ? "animate-bounce" : ""}`} />
              {downloading ? "Gerando Ficha Técnica..." : "Baixar Datasheet PDF"}
            </button>
          </div>
        </div>

        {/* Plantão & Suporte Técnico Box */}
        <div className="rounded-lg bg-[#171a21] border border-[#2a475e] p-4 text-xs space-y-3">
          <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider text-[11px]">
            <Shield className="h-4 w-4 text-[#66c0f4]" />
            Garantia & Engenharia Dedicada DSR
          </div>
          <ul className="space-y-2 text-[#8f98a0]">
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-[#66c0f4]" />
              <strong>{product.garantia}</strong>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-[#66c0f4]" />
              Estudo de viabilidade de Retrofitting sem custo
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-[#66c0f4]" />
              Atendimento técnico emergencial 24h para indústrias
            </li>
          </ul>

          <div className="pt-2 border-t border-[#2a475e]/60 flex items-center justify-between">
            <span className="text-[#8f98a0]">Dúvidas Técnicas?</span>
            <a
              href="tel:1140049090"
              className="font-mono text-[#66c0f4] font-bold hover:underline flex items-center gap-1"
            >
              <PhoneCall className="h-3.5 w-3.5" /> (11) 4004-9090
            </a>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
