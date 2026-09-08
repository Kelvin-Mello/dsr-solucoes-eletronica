"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2a475e]/80 bg-[#171a21]/95 backdrop-blur-md">

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
