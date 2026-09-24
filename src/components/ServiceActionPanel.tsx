"use client";

import React, { useState } from "react";
import { Send, PhoneCall } from "lucide-react";
import { ServiceItem } from "@/mock/services";
import { QuoteModal } from "./QuoteModal";

interface ServiceActionPanelProps {
  service: ServiceItem;
}

export function ServiceActionPanel({ service }: ServiceActionPanelProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="pt-3 border-t border-[#2a475e]/80 flex flex-col gap-2.5">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-lg bg-gradient-to-r from-[#66c0f4] via-[#4ba6df] to-[#1b75bc] py-3 px-4 text-center font-bold uppercase tracking-wider text-[#0e141b] text-xs sm:text-sm shadow-[0_0_15px_rgba(102,192,244,0.4)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_25px_rgba(102,192,244,0.6)] active:scale-[0.98] cursor-pointer"
        >
          <Send className="h-4 w-4 text-[#0e141b] transition-transform group-hover:translate-x-1" />
          <span>Solicitar Cotação / Proposta</span>
        </button>

        <a
          href={`https://wa.me/5511952345037?text=Ol%C3%A1%2C+gostaria+de+informa%C3%A7%C3%B5es+sobre+o+servi%C3%A7o+de+${encodeURIComponent(
            service.title
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#101822] hover:bg-[#1a2c3f] text-emerald-400 border border-emerald-500/40 font-bold py-2.5 px-3 text-xs uppercase tracking-wider transition-all shadow-sm"
        >
          <PhoneCall className="h-4 w-4 text-emerald-400" />
          <span>WhatsApp Direto (11) 95234-5037</span>
        </a>
      </div>

      <QuoteModal
        service={service}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
