import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Building2, 
  ShieldCheck, 
  ChevronRight, 
  Handshake, 
  Factory, 
  Zap, 
  Sparkles, 
  Award,
  Users,
  CheckCircle2,
  Mail,
  PhoneCall
} from "lucide-react";

export const metadata: Metadata = {
  title: "Clientes & Parceiros | DSR Soluções em Eletrônica",
  description: "Empresas e indústrias atendidas pela DSR Soluções em Eletrônica de Potência. Subestações, siderurgia, mineração, químico e papel & celulose.",
};

// Array pronto para receber os logos dos clientes conforme forem enviados
interface ClientLogo {
  id: string;
  name: string;
  sector: string;
  logoUrl?: string; // Se indefinido, exibe o placeholder profissional
}

const CLIENT_SLOTS: ClientLogo[] = [
  { id: "c1", name: "Cliente Homologado 01", sector: "Siderurgia & Metalurgia" },
  { id: "c2", name: "Cliente Homologado 02", sector: "Subestação & Concessionária" },
  { id: "c3", name: "Cliente Homologado 03", sector: "Mineração & Cimento" },
  { id: "c4", name: "Cliente Homologado 04", sector: "Química & Petroquímica" },
  { id: "c5", name: "Cliente Homologado 05", sector: "Papel & Celulose" },
  { id: "c6", name: "Cliente Homologado 06", sector: "Geração & Transmissão" },
  { id: "c7", name: "Cliente Homologado 07", sector: "Indústria Automotiva" },
  { id: "c8", name: "Cliente Homologado 08", sector: "Alimentos & Bebidas" },
  { id: "c9", name: "Cliente Homologado 09", sector: "Óleo & Gás" },
  { id: "c10", name: "Cliente Homologado 10", sector: "Infraestrutura Crítica" },
  { id: "c11", name: "Cliente Homologado 11", sector: "Centros de Dados & Telecom" },
  { id: "c12", name: "Cliente Homologado 12", sector: "Energia Renovável & Solar" }
];

const SECTORS = [
  {
    icon: Factory,
    name: "Siderurgia & Metalurgia",
    desc: "Alimentação de fornos de arco, pontes tiristorizadas de laminação e cadinhos de fundição."
  },
  {
    icon: Zap,
    name: "Subestações & Concessionárias",
    desc: "Sistemas ininterruptos de 125Vcc/250Vcc para comando de disjuntores e relés de proteção."
  },
  {
    icon: Building2,
    name: "Química & Petroquímica",
    desc: "Retificadores industriais para eletrólise, cloração e processos químicos contínuos."
  },
  {
    icon: Award,
    name: "Mineração & Cimenteiras",
    desc: "Sistemas de potência robustos resistentes a poeira condutiva e vibrações severas."
  }
];

export default function ClientesPage() {
  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] font-semibold">Clientes & Parceiros</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                <Handshake className="h-3.5 w-3.5" />
                PARCERIA & CONFIANÇA TÉCNICA
              </span>
              <span className="rounded bg-[#2a475e]/60 px-2.5 py-1 text-xs font-mono text-[#8f98a0]">
                Homologação em Grandes Plantas
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Clientes & <span className="text-[#66c0f4]">Parceiros Industriais</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed">
              Construímos relações sólidas baseadas na entrega de tecnologia de ponta, suporte transparente e presença física de engenharia nas maiores indústrias e concessionárias de energia do país.
            </p>

            {/* Quote Manifesto DSR */}
            <div className="rounded-lg bg-[#101822]/80 border-l-4 border-[#66c0f4] p-4 text-xs sm:text-sm text-[#c6d4df] italic">
              "A DSR Soluções busca estabelecer com seus clientes sólida parceria, no mais elevado grau de ética e transparência. Acreditamos que isto se alcança oferecendo produtos e serviços com qualidade, num relacionamento 'olho no olho' com nossos clientes e com respostas verdadeiras. Esta é a nossa definição de parceria."
            </div>
          </div>
        </div>

        {/* Sectors Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SECTORS.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#1b2838] to-[#171a21] p-5 space-y-2 shadow-md hover:border-[#66c0f4]/60 transition-colors"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded bg-[#2a475e] text-[#66c0f4] border border-[#66c0f4]/30">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{sec.name}</h3>
                <p className="text-xs text-[#8f98a0] leading-relaxed">{sec.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Logos Grid Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#2a475e] pb-4">
            <div>
              <h2 className="text-xl font-bold text-white">Marcas e Indústrias Parceiras</h2>
              <p className="text-xs text-[#8f98a0] mt-0.5">
                Empresas que confiam na engenharia DSR para a segurança de sua alimentação elétrica
              </p>
            </div>
            <span className="text-xs font-mono text-[#66c0f4] self-start sm:self-auto">
              {CLIENT_SLOTS.length} Vagas Homologadas
            </span>
          </div>

          {/* Grid of Logos / Slots */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {CLIENT_SLOTS.map((slot) => (
              <div
                key={slot.id}
                className="group relative flex flex-col items-center justify-center rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#171a21] to-[#101822] p-6 text-center hover:border-[#66c0f4]/80 hover:shadow-[0_0_20px_rgba(102,192,244,0.15)] transition-all duration-300 min-h-[140px]"
              >
                {slot.logoUrl ? (
                  <div className="relative h-16 w-full">
                    <Image
                      src={slot.logoUrl}
                      alt={slot.name}
                      fill
                      className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ) : (
                  /* Placeholder estilizado pronto para receber o logo */
                  <div className="flex flex-col items-center justify-center space-y-2 text-[#8f98a0] group-hover:text-white transition-colors">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2a475e]/30 border border-[#2a475e] text-[#66c0f4]/70 group-hover:border-[#66c0f4] group-hover:text-[#66c0f4] transition-all">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-white/90">
                        {slot.name}
                      </span>
                      <span className="block text-[10px] font-mono text-[#66c0f4]/70">
                        {slot.sector}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Callout */}
        <div className="rounded-xl border border-[#3b678c] bg-gradient-to-r from-[#171a21] via-[#1f374d] to-[#101822] p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 rounded bg-[#101822] px-2.5 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/30">
                <CheckCircle2 className="h-3.5 w-3.5" /> HOMOLOGAÇÃO DE FORNECEDOR
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Sua empresa precisa de homologação técnica ou fornecimento industrial?
              </h3>
              <p className="text-sm text-[#8f98a0] max-w-2xl">
                Encaminhe os requisitos de cadastro de fornecedores ou solicite a documentação técnica e certidões da DSR Soluções em Eletrônica.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="mailto:engenharia@dsrsolucoes.com.br?subject=Homologacao de Fornecedor - DSR"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] font-bold px-5 py-3 text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(102,192,244,0.3)]"
              >
                <Mail className="h-4 w-4" />
                engenharia@dsrsolucoes.com.br
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
