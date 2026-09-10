"use client";

import React, { useState } from "react";
import { Send, Download } from "lucide-react";
import { Product } from "@/mock/products";
import { QuoteModal } from "./QuoteModal";

interface ProductSidebarProps {
  product: Product;
}

const EXCLUSIVE_PRODUCT_SUMMARIES: Record<string, string> = {
  "retificador-padrao-industrial-modelo-rit-d":
    "Equipamento de missão crítica concebido para fornecer alimentação CC ininterrupta e recarga de bancos de baterias em subestações e plantas industriais. Destaca-se pela arquitetura analógica imune a travamentos de software, controle por tiristores de alta robustez e placas modulares intercambiáveis que simplificam a manutenção e asseguram confiabilidade máxima sem complexidades operacionais.",

  "retificador-industrial-tiristorizado-digital-dk10-dk30":
    "Solução digital avançada com microprocessamento duplo e telemetria nativa para subestações conectadas. Oferece controle térmico preciso de carga para baterias, medição contínua de parâmetros em IHM integrada e comunicação Modbus/Profinet para supervisão preditiva de última geração.",

  "retificador-modular-chaveado-digital-dk-sr10-dk-sr30":
    "Sistema modular de alta densidade energética com redundância ativa N+1 e módulos hot-swap substituíveis a quente com a carga ligada. Proporciona eficiência superior a 95%, reduz custos com refrigeração e permite expansão de capacidade sob demanda.",

  "retificador-formador-de-baterias":
    "Unidade especializada de alta potência para ciclagem, formação inicial e ensaios controlados de capacidade em acumuladores industriais. Permite parametrização de curvas de corrente e tensão multiestágio com registro em tempo real para laboratórios e fabricantes.",

  "no-break-ups-industrial":
    "Sistema de energia ininterrupta on-line dupla conversão desenvolvido para ambientes fabris severos com elevado índice de poeira e flutuações de rede. Fornece onda senoidal pura e comutação nula (0 ms) para instrumentação de segurança e sistemas de controle de processo.",

  "inversor-industrial-estatico":
    "Conversor estático CC/CA de alta isolação galvânica projetado para gerar barramentos alternados estabilizados a partir de bancos de baterias industriais. Garante alimentação contínua e sem distorções para sistemas vitais mesmo durante blecautes totais de entrada CA.",

  "chave-estatica-transferencia-automatica":
    "Comutador estático de alta velocidade com tecnologia tiristorizada capaz de transferir cargas entre duas fontes CA independentes em menos de 4 milissegundos, evitando qualquer perturbação ou desligamento em servidores e CLPs sensíveis.",

  "estabilizador-eletronico-estado-solido":
    "Regulador estático de tensão de altíssima velocidade sem qualquer componente móvel ou escovas de carvão. Elimina o desgaste mecânico e corrige quedas ou elevações bruscas de tensão da rede em frações de ciclo elétrico com máxima vida útil.",

  "quadro-distribuicao-ac-dc-digital":
    "Painel de distribuição com supervisão digital individualizada por circuito. Monitora corrente, tensão e estado de cada disjuntor em tempo real, emitindo tele-alarmes seletivos para rápido isolamento e diagnóstico de falhas operacionais.",

  "quadro-paralelismo-dc-digital":
    "Painel de paralelismo inteligente para fontes e retificadores CC, assegurando equalização ativa e precisa de corrente entre múltiplos gabinetes com isolamento automático de contingência para sistemas de missão crítica.",
};

function getExclusiveProductSummary(product: Product): string {
  if (product.resumo_exclusivo) {
    return product.resumo_exclusivo;
  }
  if (EXCLUSIVE_PRODUCT_SUMMARIES[product.slug]) {
    return EXCLUSIVE_PRODUCT_SUMMARIES[product.slug];
  }
  return `Equipamento homologado pela engenharia da DSR para regime contínuo 24/7. Desenvolvido com componentes de potência sob medida, módulos de substituição simplificada e máxima conformidade técnica para subestações e operações industriais de alta criticidade.`;
}

export function ProductSidebar({ product }: ProductSidebarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownloadDatasheet = () => {
    if (product.datasheet_url) {
      const link = document.createElement("a");
      link.href = product.datasheet_url;
      link.download = `Catalogo-DSR-${product.codigo_modelo.replace(/[^a-zA-Z0-9_-]/g, "_")}.pdf`;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Download da Ficha Técnica Oficial (${product.codigo_modelo}.pdf) iniciado.`);
    }, 800);
  };

  return (
    <>
      <div className="rounded-xl bg-[#171a21]/90 border border-[#2a475e] p-4 sm:p-5 shadow-xl flex flex-col justify-between h-full">
        {/* Cover Thumbnail do Produto - Apenas a imagem limpa, sem textos sobrepostos */}
        {product.midias && product.midias.length > 0 && (
          <div className="relative overflow-hidden rounded-lg border border-[#3b678c]/60 bg-black shadow-md">
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              <img
                src={product.midias[0].url || product.midias[0].thumbnailUrl}
                alt={product.midias[0].alt || product.nome}
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
        )}

        {/* Texto exclusivo de apresentação rápida - Não copia textos de outros lugares da página */}
        <div className="flex-1 flex flex-col justify-center py-3.5 space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#66c0f4]" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#66c0f4]">
              Visão Rápida do Equipamento
            </span>
          </div>
          <p className="text-xs sm:text-[13px] text-[#c6d4df] leading-relaxed">
            {getExclusiveProductSummary(product)}
          </p>
        </div>

        {/* Botões de Ação Imediata (Solicitar Cotação e Catálogo) */}
        <div className="pt-3 border-t border-[#2a475e]/80 flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-gradient-to-r from-[#66c0f4] via-[#4ba6df] to-[#1b75bc] py-3 px-4 text-center font-bold uppercase tracking-wider text-[#0e141b] text-xs sm:text-sm shadow-[0_0_15px_rgba(102,192,244,0.4)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_25px_rgba(102,192,244,0.6)] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <Send className="h-4 w-4 text-[#0e141b] transition-transform group-hover:translate-x-1" />
            <span>Solicitar Cotação</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadDatasheet}
            disabled={downloading}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1b2838] hover:bg-[#203248] text-[#c6d4df] hover:text-white py-2.5 px-3 text-xs font-semibold uppercase tracking-wider border border-[#2a475e] hover:border-[#66c0f4] transition-all shadow-sm"
          >
            <Download className={`h-4 w-4 text-[#66c0f4] ${downloading ? "animate-bounce" : ""}`} />
            <span>{downloading ? "Iniciando Download..." : (product.datasheet_url ? "Baixar Catálogo Oficial (PDF)" : "Baixar Ficha Técnica")}</span>
          </button>
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
