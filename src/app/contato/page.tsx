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
  Loader2,
  AlertCircle
} from "lucide-react";

function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}

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

  const waLeadUrl = `https://wa.me/5511952345037?text=${encodeURIComponent(formattedSummary)}`;
  const mailtoLeadUrl = `mailto:contato@dsrsolucoes.com.br?subject=${encodeURIComponent(`[Site DSR] ${formData.assunto} - ${formData.empresa} (${formData.nome})`)}&body=${encodeURIComponent(formattedSummary)}`;

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
        // Tentativa de entrega direta pelo navegador do cliente (bypassa bloqueio de IP da nuvem/Vercel)
        try {
          const directFs = await fetch("https://formsubmit.co/ajax/dsr.solucoes.eletronica@gmail.com", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              _subject: `[Site DSR] ${formData.assunto} - ${formData.empresa} (${formData.nome})`,
              _replyto: formData.email,
              _captcha: "false",
              _template: "table",
              "Nome do Contato": formData.nome,
              "Empresa / Planta": formData.empresa,
              "E-mail Corporativo": formData.email,
              "Telefone / WhatsApp": formData.telefone,
              "Assunto Principal": formData.assunto,
              "Detalhes da Solicitação": formData.mensagem,
            }),
          });
          const fsResult = await directFs.json();
          if (fsResult.success === "true" || fsResult.success === true) {
            setNeedsManualDispatch(false);
            setIsSubmitted(true);
            return;
          }
        } catch (clientErr) {
          console.warn("Client fallback dispatch failed:", clientErr);
        }

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
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Perfeitamente centralizado verticalmente */}
        <div className="py-2 sm:py-2.5 flex items-center">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[#8f98a0] leading-none">
            <Link href="/" className="hover:text-[#66c0f4] transition-colors">
              Início
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#2a475e]" />
            <span className="text-[#66c0f4] font-semibold">
              Contato
            </span>
          </nav>
        </div>

        {/* Content sections wrapper */}
        <div className="space-y-8 sm:space-y-10">
          {/* Hero Banner */}
          <div className="relative overflow-hidden rounded-xl border border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#172535] to-[#101822] p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#66c0f4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-3">
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
              Preencha os campos abaixo. Um especialista de aplicação entrará em contato em breve.
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
                      <WhatsAppIcon className="h-4 w-4" />
                      Enviar pelo WhatsApp
                    </a>

                    <a
                      href={mailtoLeadUrl}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#66c0f4] to-[#1b75bc] hover:from-[#85d1f7] hover:to-[#2892e6] text-[#0a1118] font-black text-xs uppercase tracking-wider py-3.5 px-4 transition-all shadow-[0_0_20px_rgba(102,192,244,0.3)]"
                    >
                      <Mail className="h-4 w-4" />
                      Abrir no E-mail
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
                      Sua mensagem foi transmitida diretamente para a equipe técnica da DSR Soluções. Um especialista de aplicação entrará em contato em breve.
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
                      href="https://wa.me/5511952345037?text=Ol%C3%A1%2C+acabei+de+enviar+uma+solicita%C3%A7%C3%A3o+pelo+site+da+DSR."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-[#07130c] font-black text-xs uppercase tracking-wider py-2.5 px-4 transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)]"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
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
                          href={`mailto:contato@dsrsolucoes.com.br?subject=${encodeURIComponent(formData.assunto || "Contato")}`}
                          className="underline text-[#66c0f4] hover:text-white"
                        >
                          contato@dsrsolucoes.com.br
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
                      placeholder="(11) 95234-5037"
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
                Técnicos e especialistas prontos para suporte remoto imediato ou deslocamento de emergência com peças e instrumentação de ensaio.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="https://wa.me/5511952345037"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-[#07130c] font-black text-xs uppercase tracking-wider py-2.5 transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)]"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp: (11) 95234-5037
                </a>
              </div>
            </div>

            {/* Central Telefônica & E-mails */}
            <div className="rounded-xl bg-[#171a21]/90 border border-[#2a475e] p-6 space-y-4 shadow-lg">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-[#2a475e] pb-2 flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-[#66c0f4]" />
                Canais de Contato Corporativo
              </h4>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <PhoneCall className="h-4 w-4 text-[#66c0f4] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Central Telefônica & WhatsApp:</span>
                    <a
                      href="https://wa.me/5511952345037"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#66c0f4] hover:underline font-mono"
                    >
                      (11) 95234-5037
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-[#66c0f4] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Engenharia & Aplicações:</span>
                    <a
                      href="mailto:contato@dsrsolucoes.com.br"
                      className="text-[#8f98a0] hover:text-[#66c0f4] font-mono transition-colors"
                    >
                      contato@dsrsolucoes.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-[#66c0f4] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Comercial & Cotações:</span>
                    <a
                      href="mailto:contato@dsrsolucoes.com.br"
                      className="text-[#8f98a0] hover:text-[#66c0f4] font-mono transition-colors"
                    >
                      contato@dsrsolucoes.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#66c0f4] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Endereço da Sede:</span>
                    <span className="text-[#8f98a0] leading-relaxed">
                      Rua Frei Cristóvão Severim, 169, Jardim Nossa Senhora do Carmo<br />
                      São Paulo - SP — CEP 08275-240
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 text-[#66c0f4] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-semibold text-white">Horário de Funcionamento:</span>
                    <span className="text-[#8f98a0]">
                      Segunda a Sexta-feira: 08h00 às 17h00<br />
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
  </div>
  );
}
