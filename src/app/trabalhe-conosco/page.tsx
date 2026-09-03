"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  ChevronRight, 
  Send, 
  CheckCircle2, 
  Users, 
  Zap, 
  Cpu, 
  GraduationCap, 
  Building2, 
  Mail, 
  PhoneCall,
  Sparkles
} from "lucide-react";

const POSITIONS = [
  {
    title: "Engenheiro(a) de Desenvolvimento de Hardware & Potência",
    area: "P&D / Eletrônica de Potência",
    type: "Presencial / São Paulo - SP",
    description: "Desenvolvimento de conversores tiristorizados, inversores IGBT, dimensionamento térmico e projeto de placas de circuito impresso (PCIs)."
  },
  {
    title: "Engenheiro(a) de Aplicação & Comissionamento em Campo",
    area: "Engenharia de Campo",
    type: "Híbrido / Viagens Nacionais",
    description: "Startup de retificadores e sistemas UPS em subestações e plantas industriais, testes em carga e atendimento a paradas programadas."
  },
  {
    title: "Técnico(a) em Eletrônica / Eletrotécnica",
    area: "Manutenção & Testes",
    type: "Presencial / São Paulo - SP",
    description: "Diagnóstico de circuitos eletrônicos analógicos e digitais, reparo de módulos de potência e calibração de instrumentos de ensaio."
  },
  {
    title: "Montador(a) Eletromecânico de Painéis Industriais",
    area: "Produção & Montagem",
    type: "Presencial / São Paulo - SP",
    description: "Interligação de barramentos de cobre, chicoteamento elétrico de comando e montagem mecânica de cubículos industriais."
  },
  {
    title: "Estágio em Engenharia Elétrica / Eletrônica",
    area: "Formação Técnica",
    type: "Presencial / São Paulo - SP",
    description: "Vivência prática direta no laboratório de potência, firmware microcontrolado e acompanhamento de ensaios de conformidade."
  }
];

export default function TrabalheConoscoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    area: "Engenharia de Desenvolvimento",
    experiencia: "Pleno",
    linkedin: "",
    mensagem: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] font-semibold">Trabalhe Conosco</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                <Briefcase className="h-3.5 w-3.5" />
                OPORTUNIDADES & CARREIRA
              </span>
              <span className="rounded bg-[#2a475e]/60 px-2.5 py-1 text-xs font-mono text-[#8f98a0]">
                DSR Soluções em Eletrônica
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Construa sua Carreira na <span className="text-[#66c0f4]">Eletrônica de Potência</span>
            </h1>

            <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed">
              Faça parte de um time de especialistas apaixonados por engenharia real. Desenvolvemos equipamentos de missão crítica que mantêm indústrias, siderúrgicas e subestações operando em todo o Brasil.
            </p>
          </div>
        </div>

        {/* Culture & Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-[#2a475e] bg-[#171a21] p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a475e] text-[#66c0f4]">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Engenharia Real de Alto Impacto</h3>
            <p className="text-xs text-[#8f98a0] leading-relaxed">
              Trabalhe com projetos de alta tensão e corrente contínua de 10A a 5.000A, sistemas tiristorizados e automação de subestações de missão crítica.
            </p>
          </div>

          <div className="rounded-xl border border-[#2a475e] bg-[#171a21] p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a475e] text-[#66c0f4]">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Desenvolvimento Contínuo</h3>
            <p className="text-xs text-[#8f98a0] leading-relaxed">
              Aprenda diariamente com engenheiros experientes. Estimulamos capacitação constante, inovação em hardware nacional e domínio normativo (NR-10 e IEC).
            </p>
          </div>

          <div className="rounded-xl border border-[#2a475e] bg-[#171a21] p-6 space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2a475e] text-[#66c0f4]">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white">Transparência & Respeito Mútuo</h3>
            <p className="text-xs text-[#8f98a0] leading-relaxed">
              Nosso princípio é o relacionamento "olho no olho", com comunicação transparente, valorização das contribuições técnicas individuais e ambiente seguro.
            </p>
          </div>
        </div>

        {/* Main Section: Open Positions + Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Open Positions List (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-[#2a475e] pb-3">
              <h2 className="text-xl font-bold text-white">Áreas & Vagas em Destaque</h2>
              <p className="text-xs text-[#8f98a0]">Confira os perfis mais buscados em nossa unidade fabril e em campo</p>
            </div>

            <div className="space-y-4">
              {POSITIONS.map((pos, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#2a475e] bg-gradient-to-b from-[#1b2838] to-[#171a21] p-5 space-y-2.5 hover:border-[#66c0f4]/80 transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-white group-hover:text-[#66c0f4] transition-colors">
                      {pos.title}
                    </h3>
                    <span className="rounded bg-[#101822] border border-[#2a475e] px-2.5 py-0.5 text-[11px] font-mono text-[#66c0f4] whitespace-nowrap self-start sm:self-auto">
                      {pos.area}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#8f98a0]">
                    {pos.type}
                  </div>
                  <p className="text-xs text-[#c6d4df] leading-relaxed">
                    {pos.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#3b678c] bg-gradient-to-b from-[#171a21] to-[#101822] p-6 sm:p-8 space-y-5 shadow-xl">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#66c0f4] tracking-wider block">
                  BANCO DE TALENTOS DSR
                </span>
                <h3 className="text-lg font-bold text-white">
                  Envie sua Candidatura
                </h3>
                <p className="text-xs text-[#8f98a0] mt-1 leading-relaxed">
                  Preencha os dados abaixo para que nosso time de recrutamento técnico avalie seu perfil.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-lg bg-emerald-950/60 border border-emerald-500/50 p-6 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Currículo Enviado com Sucesso!</h4>
                  <p className="text-xs text-[#c6d4df] leading-relaxed">
                    Agradecemos o seu interesse em fazer parte da DSR Soluções em Eletrônica. Seus dados foram registrados e entraremos em contato caso haja compatibilidade com nossas posições.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#66c0f4] hover:underline pt-2 block mx-auto"
                  >
                    Enviar outro currículo
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-white font-medium mb-1">Nome Completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Seu nome completo"
                      className="w-full rounded-lg border border-[#2a475e] bg-[#101822] px-3.5 py-2.5 text-white placeholder-[#8f98a0] focus:border-[#66c0f4] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white font-medium mb-1">E-mail *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full rounded-lg border border-[#2a475e] bg-[#101822] px-3.5 py-2.5 text-white placeholder-[#8f98a0] focus:border-[#66c0f4] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-1">Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(11) 99999-9999"
                        className="w-full rounded-lg border border-[#2a475e] bg-[#101822] px-3.5 py-2.5 text-white placeholder-[#8f98a0] focus:border-[#66c0f4] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white font-medium mb-1">Área de Interesse</label>
                      <select
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full rounded-lg border border-[#2a475e] bg-[#101822] px-3 py-2.5 text-white focus:border-[#66c0f4] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option>Engenharia de Desenvolvimento</option>
                        <option>Engenharia de Campo / Comissionamento</option>
                        <option>Técnico de Manutenção Eletrônica</option>
                        <option>Montagem e Produção de Painéis</option>
                        <option>Estágio / Programa de Formação</option>
                        <option>Outra Área Técnica</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-1">Nível de Experiência</label>
                      <select
                        value={formData.experiencia}
                        onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                        className="w-full rounded-lg border border-[#2a475e] bg-[#101822] px-3 py-2.5 text-white focus:border-[#66c0f4] focus:outline-none transition-colors cursor-pointer"
                      >
                        <option>Estágio / Aprendiz</option>
                        <option>Júnior (1 a 3 anos)</option>
                        <option>Pleno (3 a 5 anos)</option>
                        <option>Sênior (5+ anos)</option>
                        <option>Especialista / Consultor</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-1">Link do LinkedIn ou Portfólio</label>
                    <input
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      placeholder="https://linkedin.com/in/seuperfil"
                      className="w-full rounded-lg border border-[#2a475e] bg-[#101822] px-3.5 py-2.5 text-white placeholder-[#8f98a0] focus:border-[#66c0f4] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-1">Mensagem ou Resumo de Experiência</label>
                    <textarea
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Conte brevemente sobre seus principais projetos e conhecimentos técnicos..."
                      className="w-full rounded-lg border border-[#2a475e] bg-[#101822] px-3.5 py-2.5 text-white placeholder-[#8f98a0] focus:border-[#66c0f4] focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#66c0f4] hover:bg-[#85d1f7] text-[#101822] font-bold py-3 text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(102,192,244,0.3)]"
                  >
                    <Send className="h-4 w-4" />
                    Enviar Currículo para Avaliação
                  </button>

                  <p className="text-[10px] text-[#8f98a0] text-center pt-2">
                    Você também pode encaminhar seu currículo em PDF diretamente para{" "}
                    <a href="mailto:rh@dsrsolucoes.com.br" className="text-[#66c0f4] underline">
                      rh@dsrsolucoes.com.br
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
