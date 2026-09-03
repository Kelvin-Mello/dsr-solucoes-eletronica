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
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-4 border-b border-[#2a475e] pb-2">
              Equipamentos de Potência
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/produtos/retificador-industrial-trifasico-alta-potencia" className="hover:text-[#66c0f4] transition-colors">
                  Retificadores Industriais Trifásicos (DSR-9000)
                </Link>
              </li>
              <li>
                <span className="hover:text-[#66c0f4] transition-colors cursor-pointer">
                  Inversores para Fornos de Indução
                </span>
              </li>
              <li>
                <span className="hover:text-[#66c0f4] transition-colors cursor-pointer">
                  Fontes Chaveadas de Alta Corrente DC
                </span>
              </li>
              <li>
                <span className="hover:text-[#66c0f4] transition-colors cursor-pointer">
                  Sistemas No-Break Industriais (UPS Dinâmico)
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold text-white uppercase text-xs tracking-wider mb-4 border-b border-[#2a475e] pb-2">
              Engenharia & Retrofitting
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Modernização de Pontes Tiristorizadas</li>
              <li>Substituição de Módulos GTO por IGBT</li>
              <li>Filtragem Ativa e Correção de Harmônicos</li>
              <li>Manutenção Preditiva com Oscilografia Digital</li>
              <li>Comissionamento e Startup em Campo</li>
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
