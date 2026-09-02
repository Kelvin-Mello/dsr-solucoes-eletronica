"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, X, Shield, Phone, Mail, Building, FileText } from "lucide-react";
import { Product } from "@/mock/products";

interface QuoteModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ product, isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    tensaoRede: "380V Trifásico",
    aplicacao: "Retrofit de Painel Existente",
    observacoes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0f16]/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-lg border border-[#3b678c] bg-[#1b2838] shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-[#c6d4df]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Steam Gradient */}
            <div className="flex items-center justify-between border-b border-[#2a475e] bg-gradient-to-r from-[#171a21] via-[#1b2e3f] to-[#171a21] px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-[#2a475e] border border-[#66c0f4]/40 text-[#66c0f4]">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Solicitação de Cotação Técnica
                  </h3>
                  <p className="text-xs text-[#66c0f4] font-mono">
                    {product.nome} • {product.codigo_modelo}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded p-1.5 text-[#8f98a0] hover:bg-[#2a475e] hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#66c0f4]/20 border border-[#66c0f4] text-[#66c0f4] mb-4">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Solicitação Enviada com Sucesso!
                  </h4>
                  <p className="text-sm text-[#8f98a0] max-w-md mb-6">
                    Nossa equipe de engenharia de aplicação da <strong className="text-[#66c0f4]">DSR Soluções</strong> entrará em contato em até 4 horas úteis com a proposta técnica e de retrofitting preliminar.
                  </p>
                  <div className="rounded bg-[#171a21] border border-[#2a475e] p-4 text-xs text-left w-full max-w-md font-mono text-[#c6d4df] mb-6">
                    <div><strong>Protocolo:</strong> DSR-COT-{Math.floor(100000 + Math.random() * 900000)}</div>
                    <div><strong>Equipamento:</strong> {product.nome}</div>
                    <div><strong>Contato:</strong> {formData.email || "engenharia@empresa.com.br"}</div>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded bg-[#2a475e] hover:bg-[#315a77] text-white px-6 py-2.5 text-sm font-semibold border border-[#3b678c] transition-colors"
                  >
                    Concluir
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8f98a0] mb-1.5">
                        Nome do Responsável *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Eng. Roberto Silva"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full rounded bg-[#171a21] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#4f6479] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8f98a0] mb-1.5">
                        Empresa / Planta Industrial *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Indústria Metalúrgica SA"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full rounded bg-[#171a21] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#4f6479] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8f98a0] mb-1.5">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="roberto@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded bg-[#171a21] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#4f6479] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8f98a0] mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(11) 98765-4321"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full rounded bg-[#171a21] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#4f6479] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8f98a0] mb-1.5">
                        Tensão de Rede da Planta
                      </label>
                      <select
                        value={formData.tensaoRede}
                        onChange={(e) => setFormData({ ...formData, tensaoRede: e.target.value })}
                        className="w-full rounded bg-[#171a21] border border-[#2a475e] px-3.5 py-2 text-sm text-white focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                      >
                        <option value="380V Trifásico">380V Trifásico</option>
                        <option value="440V Trifásico">440V Trifásico</option>
                        <option value="480V Trifásico">480V Trifásico</option>
                        <option value="Média Tensão (com Trafo)">Média Tensão (com Transformador DSR)</option>
                        <option value="Outra Tensão Especial">Outra Tensão Especial</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#8f98a0] mb-1.5">
                        Objetivo do Projeto
                      </label>
                      <select
                        value={formData.aplicacao}
                        onChange={(e) => setFormData({ ...formData, aplicacao: e.target.value })}
                        className="w-full rounded bg-[#171a21] border border-[#2a475e] px-3.5 py-2 text-sm text-white focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                      >
                        <option value="Retrofit de Painel Existente">Retrofit de Painel Existente</option>
                        <option value="Nova Linha de Produção (Greenfield)">Nova Linha de Produção (Greenfield)</option>
                        <option value="Substituição por Falha de Equipamento">Substituição por Falha de Equipamento</option>
                        <option value="Aumento de Capacidade / Upgrade">Aumento de Capacidade / Upgrade</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#8f98a0] mb-1.5">
                      Observações Técnicas / Requisitos Específicos
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ex: Necessidade de integração com CLP Rockwell existente, ciclo de trabalho 24/7..."
                      value={formData.observacoes}
                      onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                      className="w-full rounded bg-[#171a21] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#4f6479] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                    />
                  </div>

                  {/* Actions */}
                  <div className="mt-2 flex items-center justify-between pt-3 border-t border-[#2a475e]">
                    <div className="flex items-center gap-2 text-xs text-[#8f98a0]">
                      <Shield className="h-4 w-4 text-[#66c0f4]" />
                      Atendimento por Engenheiros Especialistas
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={onClose}
                        className="rounded px-4 py-2 text-sm font-medium text-[#8f98a0] hover:text-white transition-colors"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="flex items-center gap-2 rounded bg-gradient-to-r from-[#66c0f4] to-[#1b75bc] hover:from-[#85d1f7] hover:to-[#2892e6] text-[#0e141b] font-bold px-6 py-2.5 text-sm shadow-[0_0_15px_rgba(102,192,244,0.4)] transition-all transform active:scale-98"
                      >
                        <Send className="h-4 w-4" />
                        Enviar Solicitação
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
