"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";
import { ServiceItem } from "@/mock/services";
import { QuoteModal } from "./QuoteModal";

interface ServiceCardActionsProps {
  service: ServiceItem;
}

export function ServiceCardActions({ service }: ServiceCardActionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mt-auto pt-3 border-t border-[#2a475e]/60 flex items-center gap-2">
        <Link
          href={`/servicos/${service.slug}`}
          className="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-[#2a475e] hover:bg-[#3b678c] text-white px-3 py-2 text-xs font-semibold transition-colors"
        >
          <span>Detalhes</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center justify-center gap-1 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] px-3 py-2 text-xs font-bold transition-all shadow-sm cursor-pointer"
        >
          <FileText className="h-3.5 w-3.5" />
          <span>Cotação</span>
        </button>
      </div>

      <QuoteModal
        service={service}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
