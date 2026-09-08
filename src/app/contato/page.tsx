"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight, 
  Zap, 
  MessageSquare,
  Building2,
  Phone
} from "lucide-react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    assunto: "Cotação de Equipamento Novo",
    mensagem: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0]">
          <Link href="/" className="hover:text-[#66c0f4] transition-colors">
            Início
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
          <span className="text-[#66c0f4] font-semibold">
            Contato
          </span>
        </nav>

        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-[#101822] px-3 py-1 text-xs font-mono text-[#66c0f4] border border-[#66c0f4]/40">
                <PhoneCall className="h-3.5 w-3.5" />
                CENTRAL DE ATENDIMENTO & ENGENHARIA
              </span>
              <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-1 text-xs font-mono font-bold text-emerald-400">
                PLANTÃO 24 HORAS ATIVO
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Fale com a DSR Soluções
            </h1>

            <p className="text-sm sm:text-base text-[#8f98a0] leading-relaxed max-w-3xl">
              Canais diretos para orçamentos de retificadores, estudos de retrofitting, manutenção preventiva em campo e acionamento do plantão emergencial em todo o território nacional.
            </p>
          </div>
        </div>

        {/* Grid Principal: Formulário à Esquerda e Canais Rápidos à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Coluna Esquerda: Formulário de Contato */}
          <div className="lg:col-span-7 bg-[#171a21]/90 rounded-xl border border-[#2a475e] p-6 sm:p-8 shadow-xl">
            <h2 className="text-xl font-bold text-white tracking-wide mb-1 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-[#66c0f4]" />
              Envie sua Mensagem ou Solicitação
            </h2>
            <p className="text-xs text-[#8f98a0] mb-6">
              Preencha os campos abaixo. Nossa equipe de engenheiros de aplicação responde em menos de 2 horas em horário comercial.
            </p>

            {isSubmitted ? (
              <div className="rounded-xl bg-[#102419] border border-emerald-500/50 p-6 text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-white">Solicitação Enviada com Sucesso!</h3>
                <p className="text-xs text-[#c6d4df] max-w-md mx-auto">
                  Recebemos seus dados. Um engenheiro técnico da DSR entrará em contato em breve para dar seguimento ao seu atendimento.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        nome: "",
                        empresa: "",
                        email: "",
                        telefone: "",
                        assunto: "Cotação de Equipamento Novo",
                        mensagem: ""
                      });
                    }}
                    className="text-xs font-semibold text-[#66c0f4] hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8f98a0] mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Ex: Carlos Eduardo"
                      className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2.5 text-sm text-white focus:border-[#66c0f4] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8f98a0] mb-1.5">
                      Empresa / Planta Industrial *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder="Ex: Siderúrgica Vale do Aço"
                      className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2.5 text-sm text-white focus:border-[#66c0f4] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8f98a0] mb-1.5">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="carlos@empresa.com.br"
                      className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2.5 text-sm text-white focus:border-[#66c0f4] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#8f98a0] mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(11) 98038-0000"
                      className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2.5 text-sm text-white focus:border-[#66c0f4] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#8f98a0] mb-1.5">
                    Assunto Principal *
                  </label>
                  <select
                    value={formData.assunto}
                    onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                    className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2.5 text-sm text-white focus:border-[#66c0f4] focus:outline-none transition-colors"
                  >
                    <option value="Cotação de Equipamento Novo">Cotação de Retificador ou Equipamento Novo</option>
                    <option value="Estudo de Retrofitting de Painel">Estudo Gratuito de Retrofitting / Modernização</option>
                    <option value="Manutenção Preventiva & Termografia">Manutenção Preventiva, Preditiva & Laudos com ART</option>
                    <option value="Plantão Emergencial 24h">Acionamento de Plantão Emergencial 24h</option>
                    <option value="Fornecimento de Peças & PCIs">Reposição de Módulos (PCIs), Tiristores e Diodos</option>
                    <option value="Outros Assuntos">Outros Assuntos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#8f98a0] mb-1.5">
                    Detalhes da Necessidade / Mensagem *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Descreva a tensão/corrente necessária, modelo do equipamento existente ou problema operacional enfrentado..."
                    className="w-full rounded-lg bg-[#101822] border border-[#2a475e] p-3.5 text-sm text-white focus:border-[#66c0f4] focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#66c0f4] to-[#1b75bc] hover:from-[#85d1f7] hover:to-[#2892e6] text-[#0a1118] font-bold text-sm uppercase tracking-wider py-3.5 shadow-[0_0_20px_rgba(102,192,244,0.4)] transition-all cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem para a Engenharia"}
                </button>
              </form>
            )}
          </div>

          {/* Coluna Direita: Canais Diretos, Telefones e Localização */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card Plantão Emergencial 24/7 */}
            <div className="rounded-xl bg-gradient-to-br from-[#101822] to-[#162738] border border-[#3b678c] p-6 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400">
                  <Zap className="h-4 w-4" />
                  PLANTÃO INDUSTRIAL 24/7
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Atendimento Rápido para Paradas Não Programadas
              </h3>
              <p className="text-xs text-[#8f98a0] leading-relaxed">
                Técnicos e engenheiros prontos para suporte remoto imediato ou deslocamento de emergência com peças e instrumentação de ensaio.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="https://wa.me/5511980389729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-[#07130c] font-black text-xs uppercase tracking-wider py-2.5 transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  WhatsApp: (11) 98038-9729
                </a>
              </div>
            </div>

            {/* Central Telefônica & E-mails */}
            <div className="rounded-xl bg-[#171a21]/90 border border-[#2a475e] p-6 space-y-4 shadow-lg">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#2a475e] pb-2 flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-[#66c0f4]" />
                Canais de Contato Corporativo
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <PhoneCall className="h-4 w-4 text-[#66c0f4] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Central Telefônica:</span>
                    <span className="text-[#8f98a0] font-mono">(11) 4564-5200</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-[#66c0f4] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Engenharia & Aplicações:</span>
                    <span className="text-[#8f98a0] font-mono">engenharia@dsrsolucoes.com.br</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-[#66c0f4] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Comercial & Cotações:</span>
                    <span className="text-[#8f98a0] font-mono">comercial@dsrsolucoes.com.br</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#66c0f4] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Endereço da Sede:</span>
                    <span className="text-[#8f98a0]">
                      Avenida Líder, 652 - Cidade Líder<br />
                      CEP 03586-000 — São Paulo / SP
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-[#66c0f4] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Horário de Funcionamento:</span>
                    <span className="text-[#8f98a0]">
                      Segunda a Sexta-feira: 08h00 às 18h00<br />
                      Plantão Técnico Operacional: 24 Horas
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Garantias & Conformidades */}
            <div className="rounded-xl bg-[#101822]/80 border border-[#2a475e] p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Atendimento Técnico Homologado
              </div>
              <p className="text-[11px] text-[#8f98a0] leading-relaxed">
                Todos os serviços prestados pela DSR Soluções em Eletrônica contam com registro no CREA e emissão de ART (Anotação de Responsabilidade Técnica), respeitando as normas NR-10 e NR-12.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
