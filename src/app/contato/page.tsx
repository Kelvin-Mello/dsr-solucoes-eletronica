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
  Phone,
  Loader2,
  AlertCircle
} from "lucide-react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    assunto: "Cotação de Retificador ou Equipamento Novo",
    mensagem: "",
    website: "" // Honeypot anti-spam invisível
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [needsManualDispatch, setNeedsManualDispatch] = useState(false);

  const formattedSummary = `*SOLICITAÇÃO DE CONTATO - DSR SOLUÇÕES*
*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa}
*E-mail:* ${formData.email}
*Telefone:* ${formData.telefone}
*Assunto:* ${formData.assunto}

*Mensagem:*
${formData.mensagem}`;

  const waLeadUrl = `https://wa.me/5511980389729?text=${encodeURIComponent(formattedSummary)}`;
  const mailtoLeadUrl = `mailto:dsr.solucoes.eletronica@gmail.com?subject=${encodeURIComponent(`[Site DSR] ${formData.assunto} - ${formData.empresa} (${formData.nome})`)}&body=${encodeURIComponent(formattedSummary)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 503 && data.needsConfiguration) {
        setNeedsManualDispatch(true);
        setIsSubmitted(true);
        return;
      }

      if (!response.ok || !data.success || !data.delivered) {
        throw new Error(data.error || "Ocorreu um erro ao enviar sua mensagem.");
      }

      setNeedsManualDispatch(false);
      setIsSubmitted(true);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Não foi possível enviar a mensagem agora. Por favor, tente novamente ou contate pelo WhatsApp.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
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
              needsManualDispatch ? (
                <div className="rounded-xl bg-gradient-to-b from-[#172433] to-[#101822] border border-[#3b678c] p-6 sm:p-8 text-center space-y-5 shadow-2xl">
                  <div className="h-14 w-14 rounded-full bg-[#66c0f4]/20 border border-[#66c0f4]/50 text-[#66c0f4] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(102,192,244,0.3)]">
                    <MessageSquare className="h-7 w-7" />
                  </div>

                  <div className="space-y-1.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#66c0f4] uppercase tracking-wider bg-[#101822] px-3 py-0.5 rounded-full border border-[#2a475e]">
                      Solicitação Compilada com Sucesso
                    </span>
                    <h3 className="text-xl font-bold text-white">Escolha o Canal para Disparo Imediato</h3>
                    <p className="text-xs sm:text-sm text-[#8f98a0] max-w-lg mx-auto leading-relaxed">
                      Seus dados foram compilados. Para atendimento prioritário pela equipe técnica da DSR, clique abaixo para transmitir sua mensagem:
                    </p>
                  </div>

                  {/* Resumo dos dados */}
                  <div className="rounded-lg bg-[#0b121a] border border-[#2a475e] p-4 text-left text-xs space-y-1.5 font-mono text-[#c6d4df] max-w-lg mx-auto">
                    <div><span className="text-[#66c0f4] font-semibold">Contato:</span> {formData.nome} ({formData.empresa})</div>
                    <div><span className="text-[#66c0f4] font-semibold">E-mail:</span> {formData.email}</div>
                    <div><span className="text-[#66c0f4] font-semibold">Telefone:</span> {formData.telefone}</div>
                    <div><span className="text-[#66c0f4] font-semibold">Assunto:</span> {formData.assunto}</div>
                  </div>

                  {/* Ações de Disparo */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
                    <a
                      href={waLeadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-[#07130c] font-black text-xs uppercase tracking-wider py-3.5 px-4 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
                    >
                      <Phone className="h-4 w-4" />
                      Enviar pelo WhatsApp
                    </a>

                    <a
                      href={mailtoLeadUrl}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#66c0f4] to-[#1b75bc] hover:from-[#85d1f7] hover:to-[#2892e6] text-[#0a1118] font-black text-xs uppercase tracking-wider py-3.5 px-4 transition-all shadow-[0_0_20px_rgba(102,192,244,0.3)]"
                    >
                      <Mail className="h-4 w-4" />
                      Abrir no E-mail (Gmail)
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setNeedsManualDispatch(false);
                      }}
                      className="text-xs text-[#8f98a0] hover:text-[#66c0f4] underline transition-colors cursor-pointer"
                    >
                      ← Voltar e editar informações
                    </button>
                  </div>
                </div>
              ) : (
                <div className="rounded-xl bg-[#102419] border border-emerald-500/50 p-6 sm:p-8 text-center space-y-4 shadow-xl">
                  <div className="h-14 w-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">Solicitação Enviada com Sucesso!</h3>
                    <p className="text-xs sm:text-sm text-[#c6d4df] max-w-lg mx-auto leading-relaxed">
                      Sua mensagem foi transmitida diretamente para o canal de engenharia da DSR (<span className="text-[#66c0f4] font-mono font-semibold">dsr.solucoes.eletronica@gmail.com</span>). Um engenheiro de aplicação entrará em contato em menos de 2 horas úteis.
                    </p>
                  </div>

                  {/* Resumo dos dados enviados */}
                  <div className="rounded-lg bg-[#0c1813] border border-emerald-500/30 p-3.5 text-left text-xs space-y-1 font-mono text-[#a3c9b7] max-w-md mx-auto">
                    <div><span className="text-emerald-400 font-semibold">Contato:</span> {formData.nome} ({formData.empresa})</div>
                    <div><span className="text-emerald-400 font-semibold">E-mail:</span> {formData.email}</div>
                    <div><span className="text-emerald-400 font-semibold">Assunto:</span> {formData.assunto}</div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setErrorMessage(null);
                        setFormData({
                          nome: "",
                          empresa: "",
                          email: "",
                          telefone: "",
                          assunto: "Cotação de Retificador ou Equipamento Novo",
                          mensagem: "",
                          website: ""
                        });
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#142330] hover:bg-[#1c3245] border border-[#2a475e] text-xs font-bold text-[#66c0f4] py-2.5 px-4 transition-all cursor-pointer"
                    >
                      Enviar outra mensagem
                    </button>

                    <a
                      href="https://wa.me/5511980389729?text=Ol%C3%A1%2C+acabei+de+enviar+uma+solicita%C3%A7%C3%A3o+pelo+site+da+DSR."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 px-4 transition-all shadow-md"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      Chamar no WhatsApp Direto
                    </a>
                  </div>
                </div>
              )
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot invisível para retenção de bots */}
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden pointer-events-none"
                  aria-hidden="true"
                />

                {errorMessage && (
                  <div className="rounded-lg bg-red-950/70 border border-red-500/50 p-3.5 text-xs text-red-200 flex items-start gap-2.5">
                    <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold text-red-300">Não foi possível completar o envio:</p>
                      <p>{errorMessage}</p>
                      <p className="pt-1 text-[11px] text-red-300/80">
                        Você também pode enviar diretamente pelo e-mail:{" "}
                        <a
                          href={`mailto:dsr.solucoes.eletronica@gmail.com?subject=${encodeURIComponent(formData.assunto || "Contato")}`}
                          className="underline text-[#66c0f4] hover:text-white"
                        >
                          dsr.solucoes.eletronica@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                )}

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
                    <option value="Cotação de Retificador ou Equipamento Novo">Cotação de Retificador ou Equipamento Novo</option>
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
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#66c0f4] to-[#1b75bc] hover:from-[#85d1f7] hover:to-[#2892e6] text-[#0a1118] font-bold text-sm uppercase tracking-wider py-3.5 shadow-[0_0_20px_rgba(102,192,244,0.4)] transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-[#0a1118]" />
                      <span>Enviando Mensagem para a Engenharia...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Enviar Mensagem para a Engenharia</span>
                    </>
                  )}
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
