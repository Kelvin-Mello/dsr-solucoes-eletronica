"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2a475e]/80 bg-[#171a21]/95 backdrop-blur-md">
      {/* Top micro bar with industrial status */}
      <div className="border-b border-[#2a475e]/40 bg-[#101822] px-4 py-1 text-[11px] text-[#8f98a0]">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-mono text-[#66c0f4]">
              <span className="h-2 w-2 rounded-full bg-[#66c0f4] animate-pulse"></span>
              SISTEMA OPERACIONAL DSR • ENGENHARIA ATIVA
            </span>
            <span className="hidden md:inline text-[#2a475e]">|</span>
            <span className="hidden md:inline font-mono">RETROFITTING & ELETRÔNICA DE POTÊNCIA</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-white/70">PLANTÃO TÉCNICO: (11) 4564-5200 | (11) 98038-9729</span>
            <span className="rounded bg-[#2a475e]/50 px-2 py-0.5 font-mono text-[10px] text-[#66c0f4]">
              NR-10 / NR-12
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group transition-opacity hover:opacity-90">
          <div className="relative h-11 w-36 sm:w-40">
            <Image
              src="/images/logo/logo-white.png"
              alt="DSR - Soluções em Eletrônica"
              fill
              sizes="(max-width: 640px) 144px, 160px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5 text-xs font-medium uppercase tracking-wider">
          <Link
            href="/"
            className="text-[#c6d4df] hover:text-[#66c0f4] transition-colors"
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className="text-[#c6d4df] hover:text-[#66c0f4] transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="/produtos"
            className="text-[#66c0f4] hover:text-[#85d1f7] transition-colors font-bold"
          >
            Produtos
          </Link>
          <Link
            href="/servicos"
            className="text-[#c6d4df] hover:text-white transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="/clientes"
            className="text-[#c6d4df] hover:text-white transition-colors"
          >
            Clientes
          </Link>
          <Link
            href="/novidades"
            className="text-[#c6d4df] hover:text-white transition-colors"
          >
            Novidades & Casos
          </Link>
          <Link
            href="/contato"
            className="text-[#c6d4df] hover:text-white transition-colors"
          >
            Contato
          </Link>
          <Link
            href="/trabalhe-conosco"
            className="text-[#c6d4df] hover:text-white transition-colors"
          >
            Trabalhe Conosco
          </Link>
        </nav>
      </div>
    </header>
  );
}
