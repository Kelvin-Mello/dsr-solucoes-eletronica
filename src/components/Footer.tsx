import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, ShieldCheck, Cpu, HardHat, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#2a475e] bg-[#101822] text-[#8f98a0] text-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <div className="relative h-12 w-40">
                <Image
                  src="/images/logo/logo-white.png"
                  alt="DSR - Soluções em Eletrônica"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs text-[#8f98a0] leading-relaxed">
              Especialistas em eletrônica de potência pesada, retificadores industriais, inversores de alta capacidade e retrofitting de sistemas elétricos críticos.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#66c0f4]">
              <ShieldCheck className="h-4 w-4" /> Conformidade NR-10 / NR-12 / IEEE 519
            </div>

            {/* Redes Sociais Oficiais */}
            <div className="pt-2">
              <span className="block text-[10px] font-mono uppercase tracking-wider text-[#8f98a0] mb-2">
                Redes Sociais & Contato:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn da DSR"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#101822] border border-[#2a475e] text-[#8f98a0] hover:text-[#66c0f4] hover:border-[#66c0f4] transition-all"
                  title="LinkedIn da DSR"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube da DSR"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#101822] border border-[#2a475e] text-[#8f98a0] hover:text-[#66c0f4] hover:border-[#66c0f4] transition-all"
                  title="Canal YouTube da DSR"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da DSR"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#101822] border border-[#2a475e] text-[#8f98a0] hover:text-[#66c0f4] hover:border-[#66c0f4] transition-all"
                  title="Instagram da DSR"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/5511980389729"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp da DSR"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#101822] border border-[#2a475e] text-[#8f98a0] hover:text-emerald-400 hover:border-emerald-400 transition-all"
                  title="WhatsApp (11) 98038-9729"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.3-.777.978-.953 1.179-.175.2-.351.226-.652.075s-1.27-.468-2.42-1.493c-.894-.798-1.498-1.784-1.674-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.502.101-.201.05-.377-.025-.527-.075-.15-.678-1.633-.929-2.235-.245-.587-.493-.508-.678-.517-.176-.01-.377-.01-.578-.01s-.527.075-.803.377c-.276.301-1.054 1.03-1.054 2.513 0 1.482 1.079 2.914 1.23 3.115.15.2 2.124 3.243 5.145 4.549.718.311 1.28.497 1.718.636.723.23 1.381.198 1.902.12.58-.088 1.78-.727 2.031-1.43.251-.703.251-1.306.176-1.43-.075-.125-.276-.2-.577-.35zM12.042 0C5.397 0 .006 5.391.006 12.036c0 2.122.553 4.188 1.603 6.007L0 24l6.147-1.613c1.758.959 3.738 1.464 5.895 1.464 6.645 0 12.036-5.391 12.036-12.036C24.078 5.391 18.687 0 12.042 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-4 border-b border-[#2a475e] pb-2">
              Equipamentos de Potência
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/produtos/retificador-padrao-industrial-modelo-rit-d" className="hover:text-[#66c0f4] transition-colors">
                  Retificador Modelo RIT-D (UDQ)
                </Link>
              </li>
              <li>
                <Link href="/produtos/retificador-industrial-tiristorizado-digital-dk10-dk30" className="hover:text-[#66c0f4] transition-colors">
                  Retificador Digital DK10 / DK30
                </Link>
              </li>
              <li>
                <Link href="/produtos/retificador-modular-chaveado-digital-dk-sr10-dk-sr30" className="hover:text-[#66c0f4] transition-colors">
                  Retificador Modular Chaveado DK-SR
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:text-[#66c0f4] transition-colors">
                  No-breaks, Inversores & Quadros
                </Link>
              </li>
              <li>
                <Link href="/produtos" className="hover:text-[#66c0f4] transition-colors text-[#66c0f4]">
                  Ver Catálogo Completo (27 Itens) →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-4 border-b border-[#2a475e] pb-2">
              Engenharia & Serviços
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/servicos#retrofitting" className="hover:text-[#66c0f4] transition-colors">
                  Retrofitting & Modernização
                </Link>
              </li>
              <li>
                <Link href="/servicos#digitalizacao" className="hover:text-[#66c0f4] transition-colors">
                  Digitalização de Ativos & Telemetria
                </Link>
              </li>
              <li>
                <Link href="/servicos#manutencao-preventiva" className="hover:text-[#66c0f4] transition-colors">
                  Manutenção Preventiva & Preditiva
                </Link>
              </li>
              <li>
                <Link href="/servicos#comissionamento" className="hover:text-[#66c0f4] transition-colors">
                  Comissionamento & Treinamento
                </Link>
              </li>
              <li>
                <Link href="/novidades" className="hover:text-[#66c0f4] transition-colors">
                  Atividades & Novidades da Engenharia
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="hover:text-[#66c0f4] transition-colors">
                  Clientes & Parceiros Homologados
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-[#66c0f4] transition-colors">
                  Sobre a Empresa & Linha do Tempo
                </Link>
              </li>
              <li>
                <Link href="/trabalhe-conosco" className="hover:text-[#66c0f4] transition-colors text-[#66c0f4]">
                  Trabalhe Conosco (Carreiras DSR) →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-4 border-b border-[#2a475e] pb-2">
              Contato & Suporte 24/7
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#66c0f4]" /> Tel: (11) 4564-5200 | Cel: (11) 98038-9729
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#66c0f4]" /> engenharia@dsrsolucoes.com.br
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#66c0f4] flex-shrink-0 mt-0.5" />
                <span>Avenida Líder, 652 - Cidade Líder<br />CEP 03586-000 - São Paulo / SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2a475e]/60 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#8f98a0]">
          <div>
            © {new Date().getFullYear()} DSR Soluções em Eletrônica Industrial. Todos os direitos reservados.
          </div>
          <div className="font-mono text-[11px] text-[#66c0f4] mt-2 md:mt-0">
            ARQUITETURA STEAM DARK MODE INDUSTRIAL
          </div>
        </div>
      </div>
    </footer>
  );
}
