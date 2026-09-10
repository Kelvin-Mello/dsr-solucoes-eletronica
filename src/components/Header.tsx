"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Produtos", href: "/produtos" },
  { label: "Serviços", href: "/servicos" },
  { label: "Clientes", href: "/clientes" },
  { label: "Novidades & Casos", href: "/novidades" },
  { label: "Contato", href: "/contato" },
  { label: "Trabalhe Conosco", href: "/trabalhe-conosco" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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

        {/* Desktop Navigation links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5 text-xs font-medium uppercase tracking-wider">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  active
                    ? "text-[#66c0f4] font-bold"
                    : "text-[#c6d4df] hover:text-[#66c0f4]"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#66c0f4] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-[#101822] text-[#c6d4df] border border-[#2a475e] hover:text-[#66c0f4] hover:border-[#66c0f4] transition-colors"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#2a475e] bg-[#101822]/98 px-4 py-4 backdrop-blur-md shadow-2xl animate-fadeIn">
          <nav className="flex flex-col gap-2 text-xs font-medium uppercase tracking-wider">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                    active
                      ? "bg-[#1b2838] text-[#66c0f4] font-bold border border-[#66c0f4]/40"
                      : "text-[#c6d4df] hover:bg-[#171a21] hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="h-2 w-2 rounded-full bg-[#66c0f4]" />}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
