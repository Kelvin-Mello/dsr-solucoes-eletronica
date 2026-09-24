"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  CheckCircle2, 
  X, 
  Shield, 
  Phone, 
  Mail, 
  Building, 
  FileText, 
  Sliders, 
  Cpu, 
  Layers, 
  Download, 
  Check, 
  Sparkles, 
  MapPin, 
  AlertCircle, 
  Copy, 
  FileSpreadsheet, 
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { Product } from "@/mock/products";
import { ServiceItem } from "@/mock/services";
import { 
  QuoteLevel, 
  QuoteConfigItem, 
  getQuoteItemConfig, 
  searchAddressByCep,
  CepResult
} from "@/config/quoteConfig";

export interface QuoteModalProps {
  product?: Product;
  service?: ServiceItem;
  initialLevel?: QuoteLevel;
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({
  product,
  service,
  initialLevel = "basica",
  isOpen,
  onClose
}: QuoteModalProps) {
  // Determina o item em cotação e obtém a configuração técnica detalhada
  const itemSlug = product ? product.slug : (service ? service.slug : "retificador-padrao-industrial-modelo-rit-d");
  const itemName = product ? product.nome : (service ? service.title : "Equipamento Industrial DSR");
  const itemCode = product ? product.codigo_modelo : (service ? (service.badge || "SRV-DSR") : "DSR-IND");
  const itemType: "product" | "service" = service ? "service" : "product";

  const config: QuoteConfigItem = getQuoteItemConfig(itemSlug, itemType, itemName, itemCode);

  // Estado do Nível Selecionado
  const [level, setLevel] = useState<QuoteLevel>(initialLevel);

  // Estados de Envio e Sucesso
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [protocolNumber, setProtocolNumber] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Estados da Busca de CEP
  const [cepLoading, setCepLoading] = useState(false);
  const [cepFeedback, setCepFeedback] = useState<{ tipo: "sucesso" | "erro" | "neutro"; msg: string } | null>(null);

  // Estados do Formulário - Nível BÁSICO (Compartilhado em todos os níveis)
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    emailAlternativo: "",
    telefone: "",
    telefoneAlternativo: "",
    // Localização completa
    cep: "",
    pais: "Brasil",
    estado: "",
    cidade: "",
    endereco: "",
    numero: "",
    complemento: "",
    // Mensagem / Observações
    observacoes: ""
  });

  // Estados dos Parâmetros Técnicos do Nível INTERMEDIÁRIO (Dinâmicos por Produto/Serviço)
  const [intermediateData, setIntermediateData] = useState<Record<string, string>>({});

  // Estados dos Parâmetros Técnicos do Nível AVANÇADO
  const [tipoCarga, setTipoCarga] = useState<string>("");
  const [instrumentosSelecionados, setInstrumentosSelecionados] = useState<Record<string, boolean>>({});
  const [desejaSinalizacaoRemota, setDesejaSinalizacaoRemota] = useState<boolean>(true);
  const [relesSelecionados, setRelesSelecionados] = useState<Record<string, boolean>>({});
  const [temRestricaoGabinete, setTemRestricaoGabinete] = useState<boolean>(false);
  const [dimensoesGabinete, setDimensoesGabinete] = useState({
    largura: "",
    profundidade: "",
    altura: "",
    entradaCabos: "Inferior (Fundo Falso)"
  });
  const [filtroHarmonicas, setFiltroHarmonicas] = useState<string>("");
  const [monitoramentoSCR, setMonitoramentoSCR] = useState<string>("Sim - Supervisão Ativa de Pulso de Gate e Integridade");
  const [extraAdvancedData, setExtraAdvancedData] = useState<Record<string, string>>({});

  // Inicializa valores padrão ao abrir ou mudar de item
  useEffect(() => {
    if (!isOpen) return;

    // Inicializa valores intermediários default
    const initialInter: Record<string, string> = {};
    config.intermediateFields.forEach(f => {
      initialInter[f.id] = f.defaultValue || (f.options && f.options[0]?.value) || "";
    });
    setIntermediateData(initialInter);

    // Inicializa valores avançados
    if (config.advancedConfig.loadTypes && config.advancedConfig.loadTypes.length > 0) {
      setTipoCarga(config.advancedConfig.loadTypes[0]);
    }
    if (config.advancedConfig.harmonicFilterOptions && config.advancedConfig.harmonicFilterOptions.length > 0) {
      setFiltroHarmonicas(config.advancedConfig.harmonicFilterOptions[0]);
    }

    // Inicializa instrumentos analógicos padrão
    if (config.advancedConfig.analogInstruments) {
      const instInit: Record<string, boolean> = {};
      config.advancedConfig.analogInstruments.forEach(inst => {
        instInit[inst.id] = !!inst.defaultChecked;
      });
      setInstrumentosSelecionados(instInit);
    }

    // Inicializa relés remotos padrão
    if (config.advancedConfig.remoteRelays) {
      const relInit: Record<string, boolean> = {};
      config.advancedConfig.remoteRelays.forEach(rel => {
        relInit[rel.id] = !!rel.defaultChecked;
      });
      setRelesSelecionados(relInit);
    }

    // Inicializa extras avançados
    if (config.advancedConfig.extraAdvancedFields) {
      const extraInit: Record<string, string> = {};
      config.advancedConfig.extraAdvancedFields.forEach(f => {
        extraInit[f.id] = f.defaultValue || (f.options && f.options[0]?.value) || "";
      });
      setExtraAdvancedData(extraInit);
    }

    setProtocolNumber(`DSR-COT-${Math.floor(100000 + Math.random() * 900000)}`);
  }, [isOpen, itemSlug]);

  // Atualiza nível inicial quando o modal abre com parâmetro
  useEffect(() => {
    if (isOpen && initialLevel) {
      setLevel(initialLevel);
    }
  }, [isOpen, initialLevel]);

  // Função para buscar CEP com preenchimento automático mantendo liberdade para edição manual
  const handleCepSearch = async (cepValue: string) => {
    const cleanCep = cepValue.replace(/\D/g, "");
    if (cleanCep.length !== 8) {
      setCepFeedback({ tipo: "erro", msg: "O CEP deve possuir exatamente 8 números." });
      return;
    }

    setCepLoading(true);
    setCepFeedback(null);

    const res: CepResult = await searchAddressByCep(cleanCep);
    setCepLoading(false);

    if (res.sucesso) {
      setCepFeedback({ tipo: "sucesso", msg: "Endereço localizado! Você pode complementar ou alterar se necessário." });
      setFormData(prev => ({
        ...prev,
        pais: "Brasil",
        estado: res.estado || prev.estado,
        cidade: res.cidade || prev.cidade,
        endereco: res.logradouro ? `${res.logradouro}${res.bairro ? ` - ${res.bairro}` : ""}` : prev.endereco
      }));
    } else {
      setCepFeedback({ tipo: "erro", msg: res.mensagem || "CEP não encontrado. Preencha os campos de endereço manualmente." });
    }
  };

  const handleCepInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData(prev => ({ ...prev, cep: val }));
    const clean = val.replace(/\D/g, "");
    if (clean.length === 8) {
      handleCepSearch(clean);
    } else if (clean.length < 8 && cepFeedback) {
      setCepFeedback(null);
    }
  };

  // Toggle de Instrumento Analógico
  const toggleInstrumento = (id: string) => {
    setInstrumentosSelecionados(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Toggle de Relé Remoto
  const toggleRele = (id: string) => {
    setRelesSelecionados(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Download do Modelo de Documento (.csv com UTF-8 BOM para Excel direto)
  const handleDownloadModelDocument = () => {
    const fileName = `Modelo_Levantamento_DSR_${config.code.replace(/[^a-zA-Z0-9_-]/g, "_")}.csv`;
    
    // Constrói CSV estruturado com BOM para Excel
    let csvContent = "\uFEFF";
    csvContent += `DSR SOLUÇÕES EM ELETRÔNICA;MODELO DE LEVANTAMENTO TÉCNICO & COTAÇÃO\n`;
    csvContent += `EQUIPAMENTO / SERVIÇO:;${config.name}\n`;
    csvContent += `CÓDIGO / MODELO:;${config.code}\n`;
    csvContent += `DATA:;${new Date().toLocaleDateString("pt-BR")}\n`;
    csvContent += `STATUS:;SOLICITAÇÃO DE COTAÇÃO DIRETA\n\n`;

    csvContent += `1. DADOS DE CONTATO DA EMPRESA\n`;
    csvContent += `Nome do Responsável:;${formData.nome || "[A preencher]"}\n`;
    csvContent += `Empresa / Planta:;${formData.empresa || "[A preencher]"}\n`;
    csvContent += `E-mail Corporativo:;${formData.email || "[A preencher]"}\n`;
    csvContent += `E-mail Alternativo:;${formData.emailAlternativo || "[Opcional]"}\n`;
    csvContent += `Telefone / WhatsApp:;${formData.telefone || "[A preencher]"}\n`;
    csvContent += `Telefone Alternativo:;${formData.telefoneAlternativo || "[Opcional]"}\n`;
    csvContent += `CEP da Instalação:;${formData.cep || "[A preencher]"}\n`;
    csvContent += `Cidade / UF:;${formData.cidade ? `${formData.cidade} / ${formData.estado}` : "[A preencher]"}\n`;
    csvContent += `Endereço Completo:;${formData.endereco ? `${formData.endereco}, ${formData.numero} ${formData.complemento}` : "[A preencher]"}\n\n`;

    csvContent += `2. ESPECIFICAÇÕES TÉCNICAS DESEJADAS (INTERMEDIÁRIO / AVANÇADO)\n`;
    config.intermediateFields.forEach(f => {
      csvContent += `${f.label}:;${intermediateData[f.id] || f.defaultValue || "[A definir]"}\n`;
    });

    if (config.advancedConfig.loadTypes && config.advancedConfig.loadTypes.length > 0) {
      csvContent += `Tipo de Carga Prevista:;${tipoCarga || config.advancedConfig.loadTypes[0]}\n`;
    }

    if (config.advancedConfig.hasScrMonitoring) {
      csvContent += `Supervisão de Pulso SCR:;${monitoramentoSCR}\n`;
    }

    if (config.advancedConfig.harmonicFilterOptions) {
      csvContent += `Filtro de Harmônicas:;${filtroHarmonicas}\n`;
    }

    csvContent += `\n3. INSTRUMENTOS ANALÓGICOS DE PORTA DESEJADOS\n`;
    if (config.advancedConfig.analogInstruments) {
      config.advancedConfig.analogInstruments.forEach(inst => {
        csvContent += `[${instrumentosSelecionados[inst.id] ? "X" : " "}] ${inst.label};${inst.description || ""}\n`;
      });
    }

    csvContent += `\n4. SINAIS DE ALARME REMOTO A RELÉ (CONTATOS SECOS)\n`;
    csvContent += `Deseja Sinalização Remota?:;${desejaSinalizacaoRemota ? "SIM" : "NÃO"}\n`;
    if (desejaSinalizacaoRemota && config.advancedConfig.remoteRelays) {
      config.advancedConfig.remoteRelays.forEach(rel => {
        csvContent += `[${relesSelecionados[rel.id] ? "X" : " "}] ${rel.label};${rel.description || ""}\n`;
      });
    }

    csvContent += `\n5. RESTRIÇÕES DE GABINETE / SALA TÉCNICA\n`;
    csvContent += `Possui limite de tamanho?:;${temRestricaoGabinete ? "SIM" : "NÃO"}\n`;
    if (temRestricaoGabinete) {
      csvContent += `Largura Máxima:;${dimensoesGabinete.largura || "Sob consulta"} mm\n`;
      csvContent += `Profundidade Máxima:;${dimensoesGabinete.profundidade || "Sob consulta"} mm\n`;
      csvContent += `Altura Máxima:;${dimensoesGabinete.altura || "Sob consulta"} mm\n`;
      csvContent += `Entrada de Cabos:;${dimensoesGabinete.entradaCabos}\n`;
    }

    csvContent += `\n6. MENSAGEM / OBSERVAÇÕES TÉCNICAS / REQUISITOS ESPECÍFICOS\n`;
    csvContent += `Observações da Planta:;${formData.observacoes.replace(/\n/g, " ") || "[Nenhuma observação informada]"}\n\n`;

    csvContent += `7. INSTRUÇÕES DE ENVIO\n`;
    csvContent += `Envie este modelo preenchido (ou seu próprio memorial descritivo) em anexo para:;comercial@dsrsolucoes.com.br\n`;
    csvContent += `Ou envie para o WhatsApp do Plantão de Engenharia DSR:;(11) 95234-5037\n`;

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copia E-mail Direto
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("comercial@dsrsolucoes.com.br");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Monta texto e disparo de e-mail direto (mailto)
  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Cotação Técnica Direta: ${config.name} (${config.code}) - ${formData.empresa || "Cliente"}`);
    
    let body = `SOLICITAÇÃO DE COTAÇÃO DIRETA - DSR SOLUÇÕES EM ELETRÔNICA\n`;
    body += `Equipamento/Serviço: ${config.name} (${config.code})\n`;
    body += `Nível Selecionado: ${level.toUpperCase()}\n`;
    body += `------------------------------------------------------\n`;
    body += `DADOS DO SOLICITANTE:\n`;
    body += `Nome: ${formData.nome || "-"}\n`;
    body += `Empresa/Planta: ${formData.empresa || "-"}\n`;
    body += `E-mail Corporativo: ${formData.email || "-"}\n`;
    if (formData.emailAlternativo) body += `E-mail Alternativo: ${formData.emailAlternativo}\n`;
    body += `Telefone/WhatsApp: ${formData.telefone || "-"}\n`;
    if (formData.telefoneAlternativo) body += `Telefone Alternativo: ${formData.telefoneAlternativo}\n`;
    body += `Localização: ${formData.cidade || "-"} - ${formData.estado || "-"} (CEP: ${formData.cep || "-"})\n`;
    body += `Endereço: ${formData.endereco || "-"}, ${formData.numero || "-"} ${formData.complemento || ""}\n`;
    body += `------------------------------------------------------\n`;
    
    if (level === "intermediaria" || level === "avancada") {
      body += `ESPECIFICAÇÕES TÉCNICAS:\n`;
      config.intermediateFields.forEach(f => {
        body += `- ${f.label}: ${intermediateData[f.id] || "-"}\n`;
      });
    }

    if (level === "avancada") {
      body += `\nOPCIONAIS AVANÇADOS:\n`;
      if (tipoCarga) body += `- Tipo de Carga: ${tipoCarga}\n`;
      if (config.advancedConfig.hasScrMonitoring) body += `- Pulso SCR: ${monitoramentoSCR}\n`;
      if (filtroHarmonicas) body += `- Filtro Harmônicas: ${filtroHarmonicas}\n`;
      if (temRestricaoGabinete) {
        body += `- Dimensões Máximas: ${dimensoesGabinete.largura} x ${dimensoesGabinete.profundidade} x ${dimensoesGabinete.altura} mm (${dimensoesGabinete.entradaCabos})\n`;
      }
    }

    body += `\nMENSAGEM / OBSERVAÇÕES TÉCNICAS:\n`;
    body += `${formData.observacoes || "Favor enviar proposta técnica e prazo de entrega."}\n`;

    return `mailto:comercial@dsrsolucoes.com.br?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  // Envio do Formulário (Níveis Básica, Intermediária e Avançada)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Monta relatório técnico em texto estruturado
      let relatorio = `Cotação Técnica [Nível: ${level.toUpperCase()}] para: ${config.name} (${config.code})\n\n`;
      relatorio += `--- LOCALIZAÇÃO DA PLANTA ---\n`;
      relatorio += `CEP: ${formData.cep || "Não informado"}\n`;
      relatorio += `Cidade/UF: ${formData.cidade} / ${formData.estado} - ${formData.pais}\n`;
      relatorio += `Logradouro: ${formData.endereco}, Nº ${formData.numero} ${formData.complemento ? `(${formData.complemento})` : ""}\n\n`;

      if (formData.emailAlternativo || formData.telefoneAlternativo) {
        relatorio += `--- CONTATOS ALTERNATIVOS ---\n`;
        if (formData.emailAlternativo) relatorio += `E-mail Alternativo: ${formData.emailAlternativo}\n`;
        if (formData.telefoneAlternativo) relatorio += `Tel Alternativo: ${formData.telefoneAlternativo}\n`;
        relatorio += `\n`;
      }

      if (level === "intermediaria" || level === "avancada") {
        relatorio += `--- PARÂMETROS ELÉTRICOS & TÉCNICOS (INTERMEDIÁRIO) ---\n`;
        config.intermediateFields.forEach(f => {
          relatorio += `${f.label}: ${intermediateData[f.id] || "Padrão DSR"}\n`;
        });
        relatorio += `\n`;
      }

      if (level === "avancada") {
        relatorio += `--- ESPECIFICAÇÕES DE ENGENHARIA (AVANÇADO) ---\n`;
        if (tipoCarga) relatorio += `Tipo de Carga: ${tipoCarga}\n`;
        if (config.advancedConfig.hasScrMonitoring) relatorio += `Monitoramento de Pulso SCR: ${monitoramentoSCR}\n`;
        if (filtroHarmonicas) relatorio += `Filtro de Entrada Harmônicas: ${filtroHarmonicas}\n`;

        // Instrumentos analógicos marcados
        const instMarcados = Object.entries(instrumentosSelecionados)
          .filter(([, v]) => v)
          .map(([k]) => config.advancedConfig.analogInstruments?.find(i => i.id === k)?.label || k);
        if (instMarcados.length > 0) {
          relatorio += `Instrumentos de Porta: ${instMarcados.join("; ")}\n`;
        }

        // Relés remotos
        relatorio += `Sinalização Remota a Relé: ${desejaSinalizacaoRemota ? "SIM" : "NÃO"}\n`;
        if (desejaSinalizacaoRemota) {
          const relesMarcados = Object.entries(relesSelecionados)
            .filter(([, v]) => v)
            .map(([k]) => config.advancedConfig.remoteRelays?.find(r => r.id === k)?.label || k);
          if (relesMarcados.length > 0) {
            relatorio += `Sinais Remotos Solicitados: ${relesMarcados.join("; ")}\n`;
          }
        }

        // Limite de tamanho
        if (temRestricaoGabinete) {
          relatorio += `Restrição de Espaço Físico: Largura máx ${dimensoesGabinete.largura || "N/A"}mm x Profundidade máx ${dimensoesGabinete.profundidade || "N/A"}mm x Altura máx ${dimensoesGabinete.altura || "N/A"}mm (${dimensoesGabinete.entradaCabos})\n`;
        }

        // Extras
        Object.entries(extraAdvancedData).forEach(([k, v]) => {
          const fieldDef = config.advancedConfig.extraAdvancedFields?.find(f => f.id === k);
          relatorio += `${fieldDef?.label || k}: ${v}\n`;
        });

        relatorio += `\n`;
      }

      relatorio += `--- MENSAGEM / REQUISITOS ADICIONAIS ---\n`;
      relatorio += formData.observacoes || "Nenhuma mensagem adicional escrita.";

      // Dispara envio para a API de contato
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: formData.nome,
          empresa: formData.empresa,
          email: formData.email,
          telefone: formData.telefone,
          assunto: `Cotação Técnica [Nível: ${level.toUpperCase()}] - ${config.name} (${config.code})`,
          mensagem: relatorio
        })
      });
    } catch (err) {
      console.warn("Aviso na transmissão da cotação, concluindo exibição de confirmação:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0a0f16]/85 backdrop-blur-md overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 15 }}
            transition={{ type: "spring", duration: 0.35 }}
            className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-[#3b678c] bg-[#172433] shadow-[0_20px_60px_rgba(0,0,0,0.85)] text-[#c6d4df] my-auto flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header com Steam Gradient */}
            <div className="flex items-center justify-between border-b border-[#2a475e] bg-gradient-to-r from-[#101822] via-[#1b2e3f] to-[#101822] px-5 sm:px-6 py-3.5 shrink-0">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#142332] border border-[#66c0f4]/50 text-[#66c0f4] shadow-sm">
                  {config.itemType === "service" ? <Layers className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-2">
                    Solicitação de Cotação Técnica & Dimensionamento
                  </h3>
                  <p className="text-xs text-[#66c0f4] font-mono">
                    {config.name} • <span className="text-white/80">{config.code}</span>
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg p-1.5 text-[#8f98a0] hover:bg-[#2a475e] hover:text-white transition-colors"
                title="Fechar janela"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* SELETOR DE NÍVEL DE DETALHES (Segmented Control com 4 Níveis) */}
            {!submitted && (
              <div className="border-b border-[#2a475e] bg-[#0d1622] px-4 sm:px-6 py-2.5 shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8f98a0]">
                    Selecione o Nível de Detalhe da Cotação:
                  </span>
                  <span className="hidden sm:inline-block text-[11px] font-mono text-[#66c0f4]">
                    {level === "basica" && "Preenchimento ágil (1 min)"}
                    {level === "intermediaria" && "Dimensionamento elétrico padrão"}
                    {level === "avancada" && "Engenharia completa & opcionais"}
                    {level === "direta" && "E-mail direto & modelo para download"}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {/* Nível Básica */}
                  <button
                    type="button"
                    onClick={() => setLevel("basica")}
                    className={`relative flex items-center justify-center gap-2 rounded-lg py-2 px-3 text-xs font-semibold transition-all border ${
                      level === "basica"
                        ? "bg-[#1f374d] text-white border-[#66c0f4] shadow-[0_0_12px_rgba(102,192,244,0.35)] ring-1 ring-[#66c0f4]/50"
                        : "bg-[#131f2c] text-[#8fa7be] border-[#22364a] hover:bg-[#1a2b3d] hover:text-white"
                    }`}
                  >
                    <Sparkles className={`h-3.5 w-3.5 ${level === "basica" ? "text-[#66c0f4]" : "text-[#7a92a8]"}`} />
                    <span>Básica</span>
                  </button>

                  {/* Nível Intermediária */}
                  <button
                    type="button"
                    onClick={() => setLevel("intermediaria")}
                    className={`relative flex items-center justify-center gap-2 rounded-lg py-2 px-3 text-xs font-semibold transition-all border ${
                      level === "intermediaria"
                        ? "bg-[#1f374d] text-white border-[#66c0f4] shadow-[0_0_12px_rgba(102,192,244,0.35)] ring-1 ring-[#66c0f4]/50"
                        : "bg-[#131f2c] text-[#8fa7be] border-[#22364a] hover:bg-[#1a2b3d] hover:text-white"
                    }`}
                  >
                    <Sliders className={`h-3.5 w-3.5 ${level === "intermediaria" ? "text-[#66c0f4]" : "text-[#7a92a8]"}`} />
                    <span>Intermediária</span>
                    <span className="hidden md:inline text-[9px] px-1.5 py-0.2 rounded bg-[#66c0f4]/20 text-[#66c0f4] border border-[#66c0f4]/40 font-mono">
                      Recomendada
                    </span>
                  </button>

                  {/* Nível Avançada */}
                  <button
                    type="button"
                    onClick={() => setLevel("avancada")}
                    className={`relative flex items-center justify-center gap-2 rounded-lg py-2 px-3 text-xs font-semibold transition-all border ${
                      level === "avancada"
                        ? "bg-[#1f374d] text-white border-[#66c0f4] shadow-[0_0_12px_rgba(102,192,244,0.35)] ring-1 ring-[#66c0f4]/50"
                        : "bg-[#131f2c] text-[#8fa7be] border-[#22364a] hover:bg-[#1a2b3d] hover:text-white"
                    }`}
                  >
                    <Cpu className={`h-3.5 w-3.5 ${level === "avancada" ? "text-[#66c0f4]" : "text-[#7a92a8]"}`} />
                    <span>Avançada</span>
                    <span className="hidden md:inline text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">
                      Completa
                    </span>
                  </button>

                  {/* Nível Direta */}
                  <button
                    type="button"
                    onClick={() => setLevel("direta")}
                    className={`relative flex items-center justify-center gap-2 rounded-lg py-2 px-3 text-xs font-semibold transition-all border ${
                      level === "direta"
                        ? "bg-[#1f374d] text-white border-[#66c0f4] shadow-[0_0_12px_rgba(102,192,244,0.35)] ring-1 ring-[#66c0f4]/50"
                        : "bg-[#131f2c] text-[#8fa7be] border-[#22364a] hover:bg-[#1a2b3d] hover:text-white"
                    }`}
                  >
                    <Mail className={`h-3.5 w-3.5 ${level === "direta" ? "text-[#66c0f4]" : "text-[#7a92a8]"}`} />
                    <span>Direta</span>
                    <span className="hidden md:inline text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono">
                      Modelo
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* CORPO DO MODAL (Com Scroll Interno Suave) */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 custom-scrollbar">
              {submitted ? (
                /* TELA DE SUCESSO APÓS SUBMISSÃO */
                <div className="flex flex-col items-center justify-center py-6 text-center animate-fadeIn">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#66c0f4]/20 border border-[#66c0f4] text-[#66c0f4] mb-4 shadow-[0_0_20px_rgba(102,192,244,0.4)]">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Solicitação de Cotação Transmitida com Sucesso!
                  </h4>
                  <p className="text-sm text-[#8f98a0] max-w-lg mb-6 leading-relaxed">
                    Nossos engenheiros de aplicação da <strong className="text-[#66c0f4]">DSR Soluções em Eletrônica</strong> analisarão os parâmetros de <strong className="text-white">{config.name}</strong> e retornarão com o memorial técnico e a proposta comercial em até 4 horas úteis.
                  </p>

                  <div className="rounded-xl bg-[#101822] border border-[#2a475e] p-5 text-xs text-left w-full max-w-lg font-mono text-[#c6d4df] mb-6 space-y-2 shadow-inner">
                    <div className="flex items-center justify-between border-b border-[#2a475e]/60 pb-2">
                      <span className="text-[#8f98a0]">Protocolo Oficial:</span>
                      <span className="font-bold text-[#66c0f4]">{protocolNumber}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#8f98a0]">Item Solicitado:</span>
                      <span className="text-white font-semibold">{config.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#8f98a0]">Nível de Detalhe:</span>
                      <span className="text-[#66c0f4] uppercase font-bold">{level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#8f98a0]">Responsável:</span>
                      <span className="text-white">{formData.nome} ({formData.empresa})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#8f98a0]">E-mail Corporativo:</span>
                      <span className="text-white">{formData.email}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#8f98a0]">Local da Instalação:</span>
                      <span className="text-white">{formData.cidade} / {formData.estado}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-lg bg-gradient-to-r from-[#66c0f4] to-[#1b75bc] hover:brightness-110 text-[#0e141b] px-8 py-2.5 text-sm font-bold shadow-[0_0_15px_rgba(102,192,244,0.4)] transition-all"
                  >
                    Concluir e Fechar
                  </button>
                </div>
              ) : level === "direta" ? (
                /* =========================================================================
                   NÍVEL 4: COTAÇÃO DIRETA (E-mail direto & Download do Modelo)
                   ========================================================================= */
                <div className="space-y-6 animate-fadeIn">
                  {/* Banner Explicativo */}
                  <div className="rounded-xl border border-[#3b678c] bg-gradient-to-r from-[#172535] via-[#101d2c] to-[#172535] p-5 shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#142332] text-[#66c0f4] border border-[#66c0f4]/40">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">
                          Atendimento Direto & Envio de Documento Próprio
                        </h4>
                        <p className="text-xs text-[#8f98a0] mt-1 leading-relaxed">
                          Prefere tratar diretamente pelo seu cliente de e-mail ou já possui uma folha de dados técnica (datasheet interno, edital ou memorial descritivo)? Disponibilizamos nossos canais diretos e uma planilha modelo opcional para levantamento de requisitos.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card de Canais Diretos */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Canal de E-mail */}
                    <div className="rounded-xl border border-[#2a475e] bg-[#101822] p-5 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#66c0f4] font-bold">
                          E-mail Oficial da Engenharia
                        </span>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-[#172433] border border-[#2a475e]">
                          <span className="text-sm font-mono font-bold text-white select-all">
                            comercial@dsrsolucoes.com.br
                          </span>
                          <button
                            type="button"
                            onClick={handleCopyEmail}
                            className="p-1.5 rounded text-[#8f98a0] hover:text-[#66c0f4] hover:bg-[#203348] transition-colors"
                            title="Copiar e-mail"
                          >
                            {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                          </button>
                        </div>
                        {copiedEmail && (
                          <span className="text-[11px] text-emerald-400 font-mono">
                            E-mail copiado para a área de transferência!
                          </span>
                        )}
                        <p className="text-xs text-[#8f98a0]">
                          Envie suas dúvidas, editais de concorrência ou memorial descritivo completo em anexo.
                        </p>
                      </div>

                      <a
                        href={getMailtoLink()}
                        className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#66c0f4] to-[#1b75bc] hover:brightness-110 text-[#0e141b] font-bold text-xs uppercase tracking-wider py-3 px-4 shadow-[0_0_15px_rgba(102,192,244,0.35)] transition-all"
                      >
                        <Mail className="h-4 w-4" />
                        <span>Abrir E-mail Pré-Formatado</span>
                        <ExternalLink className="h-3.5 w-3.5 ml-1" />
                      </a>
                    </div>

                    {/* Canal WhatsApp */}
                    <div className="rounded-xl border border-[#2a475e] bg-[#101822] p-5 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                          Plantão de Engenharia & WhatsApp
                        </span>
                        <div className="flex items-center justify-between p-3 rounded-lg bg-[#172433] border border-[#2a475e]">
                          <span className="text-sm font-mono font-bold text-white select-all">
                            (11) 95234-5037
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            Ativo 24/7
                          </span>
                        </div>
                        <p className="text-xs text-[#8f98a0]">
                          Fale diretamente com os engenheiros de plantão para alinhamento técnico urgente ou esclarecimento de dúvidas.
                        </p>
                      </div>

                      <a
                        href={`https://wa.me/5511952345037?text=Ol%C3%A1%2C+gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+direta+para+o+equipamento%2Fservi%C3%A7o+${encodeURIComponent(config.name)}+(${encodeURIComponent(config.code)})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
                      >
                        <Phone className="h-4 w-4" />
                        <span>Chamar no WhatsApp da Engenharia</span>
                      </a>
                    </div>
                  </div>

                  {/* Card de Download do Arquivo Modelo de Levantamento */}
                  <div className="rounded-xl border border-[#2a475e] bg-[#101822] p-5 sm:p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#172a3d] border border-[#3b678c] text-[#66c0f4]">
                        <FileSpreadsheet className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-bold text-white">
                            Planilha Modelo de Levantamento Técnico (.xlsx / .csv)
                          </h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#2a475e] text-[#66c0f4] border border-[#3b678c]">
                            Sugestão Opcional
                          </span>
                        </div>
                        <p className="text-xs text-[#8f98a0] leading-relaxed">
                          Criamos uma folha de dados técnica com todas as seções e parâmetros necessários para este equipamento/serviço. O preenchimento deste modelo é <strong>uma sugestão totalmente opcional</strong>. Você pode utilizá-lo como guia interno para sua equipe técnica ou enviar seu próprio documento corporativo diretamente no e-mail.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={handleDownloadModelDocument}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-[#1b2838] hover:bg-[#23384e] text-white border border-[#3b678c] hover:border-[#66c0f4] py-2.5 px-5 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
                      >
                        <Download className="h-4 w-4 text-[#66c0f4]" />
                        <span>Baixar Modelo Personalizado ({config.code}.csv)</span>
                      </button>

                      <a
                        href="/downloads/Modelo_Levantamento_Tecnico_Cotacao_DSR.csv"
                        download="Modelo_Levantamento_Tecnico_Cotacao_DSR.csv"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-transparent hover:bg-[#1b2838] text-[#8fa7be] hover:text-white border border-[#2a475e] py-2.5 px-4 text-xs font-semibold transition-all"
                      >
                        <FileText className="h-3.5 w-3.5" />
                        <span>Baixar Ficha Padrão Geral</span>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* =========================================================================
                   NÍVEIS 1, 2 E 3 (BÁSICA, INTERMEDIÁRIA, AVANÇADA)
                   ========================================================================= */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Banner Informativo do Nível Selecionado */}
                  <div className="rounded-lg border border-[#2a475e] bg-[#101822] p-3.5 flex items-start gap-3">
                    <div className="p-1.5 rounded bg-[#172535] text-[#66c0f4] shrink-0 mt-0.5">
                      {level === "basica" && <Sparkles className="h-4 w-4" />}
                      {level === "intermediaria" && <Sliders className="h-4 w-4" />}
                      {level === "avancada" && <Cpu className="h-4 w-4" />}
                    </div>
                    <div className="text-xs leading-relaxed">
                      {level === "basica" && (
                        <span>
                          <strong className="text-white">Cotação Básica:</strong> Preenchimento ágil com dados de contato, identificação e localização da sua planta. A engenharia entrará em contato para alinhar os detalhes técnicos específicos.
                        </span>
                      )}
                      {level === "intermediaria" && (
                        <span>
                          <strong className="text-white">Cotação Intermediária:</strong> Dimensionamento dos principais parâmetros elétricos e operacionais (incluindo corrente de saída, etapas de UDQ e objetivo do projeto) para uma proposta técnica mais assertiva.
                        </span>
                      )}
                      {level === "avancada" && (
                        <span>
                          <strong className="text-white">Cotação Avançada Completa:</strong> Especificação detalhada de engenharia com instrumentos de medição de porta, sinalização remota a relés, filtro de harmônicas, limites de gabinete e supervisão de pulso SCR.
                        </span>
                      )}
                    </div>
                  </div>

                  {/* SEÇÃO 1: DADOS DO SOLICITANTE E EMPRESA (Obrigatório para todos os níveis) */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b border-[#2a475e] pb-1.5">
                      <Building className="h-4 w-4 text-[#66c0f4]" />
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                        1. Dados do Solicitante & Empresa
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                          Nome do Responsável <span className="text-[#66c0f4]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Eng. Roberto Silva"
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                          Empresa / Planta Industrial <span className="text-[#66c0f4]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Indústria Metalúrgica SA"
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Canais Principais de Contato */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                          E-mail Corporativo <span className="text-[#66c0f4]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="roberto@empresa.com.br"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                          Telefone / WhatsApp <span className="text-[#66c0f4]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(11) 98765-4321"
                          value={formData.telefone}
                          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                          className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Canais Alternativos de Contato (Solicitados pelo Usuário) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1 flex items-center justify-between">
                          <span>E-mail Alternativo</span>
                          <span className="text-[10px] text-[#6b8296] font-mono">Opcional</span>
                        </label>
                        <input
                          type="email"
                          placeholder="suporte@empresa.com.br"
                          value={formData.emailAlternativo}
                          onChange={(e) => setFormData({ ...formData, emailAlternativo: e.target.value })}
                          className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1 flex items-center justify-between">
                          <span>Telefone / WhatsApp Alternativo</span>
                          <span className="text-[10px] text-[#6b8296] font-mono">Opcional</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="(11) 3214-5678"
                          value={formData.telefoneAlternativo}
                          onChange={(e) => setFormData({ ...formData, telefoneAlternativo: e.target.value })}
                          className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SEÇÃO 2: LOCALIZAÇÃO DA PLANTA (Com Busca Automática de CEP e Edição Livre) */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between border-b border-[#2a475e] pb-1.5">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#66c0f4]" />
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                          2. Localização da Instalação / Planta
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-[#8f98a0]">
                        Busca automática por CEP
                      </span>
                    </div>

                    {/* Linha do CEP com Busca */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-end">
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                          CEP da Instalação
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            maxLength={9}
                            placeholder="01310-100"
                            value={formData.cep}
                            onChange={handleCepInputChange}
                            className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4] transition-colors"
                          />
                          {cepLoading && (
                            <div className="absolute right-3 top-2.5">
                              <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#66c0f4] border-t-transparent" />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="sm:col-span-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleCepSearch(formData.cep)}
                          disabled={cepLoading || !formData.cep}
                          className="rounded-lg bg-[#203348] hover:bg-[#2b4461] disabled:opacity-50 text-white border border-[#3b678c] px-4 py-2 text-xs font-semibold transition-colors"
                        >
                          {cepLoading ? "Buscando..." : "Buscar Endereço"}
                        </button>
                        {cepFeedback && (
                          <span className={`text-[11px] font-medium leading-tight ${cepFeedback.tipo === "sucesso" ? "text-emerald-400" : "text-amber-400"}`}>
                            {cepFeedback.msg}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Demais campos de Endereço (Todos 100% Editáveis Manualmente) */}
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5">
                      <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                          País
                        </label>
                        <input
                          type="text"
                          value={formData.pais}
                          onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                          className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                        />
                      </div>

                      <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                          Estado (UF) <span className="text-[#66c0f4]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="SP"
                          maxLength={2}
                          value={formData.estado}
                          onChange={(e) => setFormData({ ...formData, estado: e.target.value.toUpperCase() })}
                          className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                          Cidade <span className="text-[#66c0f4]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="São Paulo"
                          value={formData.cidade}
                          onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                          className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3.5">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                          Endereço / Logradouro / Distrito <span className="text-[#66c0f4]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Av. das Indústrias"
                          value={formData.endereco}
                          onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                          className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                        />
                      </div>

                      <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                          Número <span className="text-[#66c0f4]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="1500"
                          value={formData.numero}
                          onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
                          className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                        />
                      </div>

                      <div className="sm:col-span-1">
                        <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                          Complemento
                        </label>
                        <input
                          type="text"
                          placeholder="Galpão 3 / Sala Elétrica"
                          value={formData.complemento}
                          onChange={(e) => setFormData({ ...formData, complemento: e.target.value })}
                          className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SEÇÃO 3: PARÂMETROS TÉCNICOS INTERMEDIÁRIOS (Exibido nos níveis Intermediária e Avançada) */}
                  {(level === "intermediaria" || level === "avancada") && (
                    <div className="space-y-3 pt-2 animate-fadeIn">
                      <div className="flex items-center gap-2 border-b border-[#2a475e] pb-1.5">
                        <Sliders className="h-4 w-4 text-[#66c0f4]" />
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                          3. Parâmetros Técnicos & Dimensionamento ({config.code})
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {config.intermediateFields.map((field) => (
                          <div key={field.id}>
                            <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                              {field.label}
                            </label>
                            {field.type === "select" && field.options ? (
                              <div className="relative">
                                <select
                                  value={intermediateData[field.id] || field.defaultValue || ""}
                                  onChange={(e) => setIntermediateData({ ...intermediateData, [field.id]: e.target.value })}
                                  className="w-full appearance-none rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 pr-8 text-sm text-white focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                                >
                                  {field.options.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                      {opt.label}
                                    </option>
                                  ))}
                                </select>
                                <ChevronDown className="absolute right-2.5 top-3 h-4 w-4 text-[#8f98a0] pointer-events-none" />
                              </div>
                            ) : (
                              <input
                                type={field.type}
                                placeholder={field.placeholder || ""}
                                value={intermediateData[field.id] || ""}
                                onChange={(e) => setIntermediateData({ ...intermediateData, [field.id]: e.target.value })}
                                className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SEÇÃO 4: ESPECIFICAÇÃO AVANÇADA & OPCIONAIS (Exibido apenas no nível Avançada) */}
                  {level === "avancada" && (
                    <div className="space-y-4 pt-2 animate-fadeIn">
                      <div className="flex items-center gap-2 border-b border-[#2a475e] pb-1.5">
                        <Cpu className="h-4 w-4 text-[#66c0f4]" />
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                          4. Opcionais de Engenharia & Detalhamento Avançado
                        </h4>
                      </div>

                      {/* Tipo de Carga Alimentada */}
                      {config.advancedConfig.loadTypes && config.advancedConfig.loadTypes.length > 0 && (
                        <div>
                          <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                            Tipo de Carga Alimentada
                          </label>
                          <div className="relative">
                            <select
                              value={tipoCarga}
                              onChange={(e) => setTipoCarga(e.target.value)}
                              className="w-full appearance-none rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 pr-8 text-sm text-white focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                            >
                              {config.advancedConfig.loadTypes.map((t) => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-2.5 top-3 h-4 w-4 text-[#8f98a0] pointer-events-none" />
                          </div>
                        </div>
                      )}

                      {/* Instrumentos Analógicos de Porta (Se aplicável) */}
                      {config.advancedConfig.analogInstruments && config.advancedConfig.analogInstruments.length > 0 && (
                        <div className="rounded-xl border border-[#2a475e] bg-[#101822] p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <label className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                              Instrumentos Analógicos Desejados na Porta do Painel
                            </label>
                            <span className="text-[10px] font-mono text-[#66c0f4]">
                              {Object.values(instrumentosSelecionados).filter(Boolean).length} selecionados
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {config.advancedConfig.analogInstruments.map((inst) => (
                              <label
                                key={inst.id}
                                className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${
                                  instrumentosSelecionados[inst.id]
                                    ? "bg-[#172535] border-[#66c0f4]/60 text-white"
                                    : "bg-[#141f2d] border-[#203244] text-[#8fa7be] hover:border-[#2f4963]"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={!!instrumentosSelecionados[inst.id]}
                                  onChange={() => toggleInstrumento(inst.id)}
                                  className="mt-0.5 rounded border-[#3b678c] text-[#66c0f4] focus:ring-0 focus:ring-offset-0 bg-[#0d1622]"
                                />
                                <div>
                                  <div className="text-xs font-semibold">{inst.label}</div>
                                  {inst.description && (
                                    <div className="text-[10px] text-[#6b8296] leading-tight mt-0.5">{inst.description}</div>
                                  )}
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Sinalização Remota a Relés */}
                      {config.advancedConfig.remoteRelays && config.advancedConfig.remoteRelays.length > 0 && (
                        <div className="rounded-xl border border-[#2a475e] bg-[#101822] p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                                Sinalização Remota a Relés (Contatos Secos NA/NF)
                              </div>
                              <div className="text-[11px] text-[#8f98a0]">
                                Integração com sistema supervisório SCADA / CLP da planta
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => setDesejaSinalizacaoRemota(!desejaSinalizacaoRemota)}
                                className={`px-3 py-1 rounded text-xs font-mono font-bold border transition-colors ${
                                  desejaSinalizacaoRemota
                                    ? "bg-[#66c0f4]/20 border-[#66c0f4] text-[#66c0f4]"
                                    : "bg-[#1a2938] border-[#2a475e] text-[#8fa7be]"
                                }`}
                              >
                                {desejaSinalizacaoRemota ? "SIM (Habilitada)" : "NÃO (Dispensada)"}
                              </button>
                            </div>
                          </div>

                          {desejaSinalizacaoRemota && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1 animate-fadeIn">
                              {config.advancedConfig.remoteRelays.map((rel) => (
                                <label
                                  key={rel.id}
                                  className={`flex items-start gap-2 p-2 rounded-lg border cursor-pointer text-xs transition-all ${
                                    relesSelecionados[rel.id]
                                      ? "bg-[#172535] border-[#66c0f4]/50 text-white"
                                      : "bg-[#141f2d] border-[#203244] text-[#8fa7be] hover:border-[#2f4963]"
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={!!relesSelecionados[rel.id]}
                                    onChange={() => toggleRele(rel.id)}
                                    className="mt-0.5 rounded border-[#3b678c] text-[#66c0f4] focus:ring-0 focus:ring-offset-0 bg-[#0d1622]"
                                  />
                                  <span className="leading-tight">{rel.label}</span>
                                </label>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Restrição de Espaço Físico / Gabinete */}
                      {config.advancedConfig.hasEnclosureDimensionLimits && (
                        <div className="rounded-xl border border-[#2a475e] bg-[#101822] p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                                Limite Físico ou Restrição de Espaço do Gabinete
                              </div>
                              <div className="text-[11px] text-[#8f98a0]">
                                Restrições de portas de acesso ou espaço físico na sala técnica
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => setTemRestricaoGabinete(!temRestricaoGabinete)}
                              className={`px-3 py-1 rounded text-xs font-mono font-bold border transition-colors ${
                                temRestricaoGabinete
                                  ? "bg-[#66c0f4]/20 border-[#66c0f4] text-[#66c0f4]"
                                  : "bg-[#1a2938] border-[#2a475e] text-[#8fa7be]"
                              }`}
                            >
                              {temRestricaoGabinete ? "SIM (Possui Restrição)" : "NÃO (Sem Limite)"}
                            </button>
                          </div>

                          {temRestricaoGabinete && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 animate-fadeIn">
                              <div>
                                <label className="block text-[11px] font-semibold text-[#8fa7be] mb-1">
                                  Largura Máx (mm)
                                </label>
                                <input
                                  type="text"
                                  placeholder="Ex: 800"
                                  value={dimensoesGabinete.largura}
                                  onChange={(e) => setDimensoesGabinete({ ...dimensoesGabinete, largura: e.target.value })}
                                  className="w-full rounded-lg bg-[#141f2d] border border-[#2a475e] px-2.5 py-1.5 text-xs text-white"
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] font-semibold text-[#8fa7be] mb-1">
                                  Profundidade (mm)
                                </label>
                                <input
                                  type="text"
                                  placeholder="Ex: 800"
                                  value={dimensoesGabinete.profundidade}
                                  onChange={(e) => setDimensoesGabinete({ ...dimensoesGabinete, profundidade: e.target.value })}
                                  className="w-full rounded-lg bg-[#141f2d] border border-[#2a475e] px-2.5 py-1.5 text-xs text-white"
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] font-semibold text-[#8fa7be] mb-1">
                                  Altura Máx (mm)
                                </label>
                                <input
                                  type="text"
                                  placeholder="Ex: 2100"
                                  value={dimensoesGabinete.altura}
                                  onChange={(e) => setDimensoesGabinete({ ...dimensoesGabinete, altura: e.target.value })}
                                  className="w-full rounded-lg bg-[#141f2d] border border-[#2a475e] px-2.5 py-1.5 text-xs text-white"
                                />
                              </div>
                              <div>
                                <label className="block text-[11px] font-semibold text-[#8fa7be] mb-1">
                                  Entrada de Cabos
                                </label>
                                <select
                                  value={dimensoesGabinete.entradaCabos}
                                  onChange={(e) => setDimensoesGabinete({ ...dimensoesGabinete, entradaCabos: e.target.value })}
                                  className="w-full rounded-lg bg-[#141f2d] border border-[#2a475e] px-2 py-1.5 text-xs text-white"
                                >
                                  <option value="Inferior (Fundo Falso)">Inferior (Fundo Falso)</option>
                                  <option value="Superior (Calha Aérea)">Superior (Calha Aérea)</option>
                                  <option value="Ambas (Superior e Inferior)">Ambas (Superior e Inferior)</option>
                                </select>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Filtro de Entrada para Harmônicas */}
                      {config.advancedConfig.harmonicFilterOptions && config.advancedConfig.harmonicFilterOptions.length > 0 && (
                        <div>
                          <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                            Filtro de Entrada para Harmônicas
                          </label>
                          <div className="relative">
                            <select
                              value={filtroHarmonicas}
                              onChange={(e) => setFiltroHarmonicas(e.target.value)}
                              className="w-full appearance-none rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 pr-8 text-sm text-white focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                            >
                              {config.advancedConfig.harmonicFilterOptions.map((f) => (
                                <option key={f} value={f}>{f}</option>
                              ))}
                            </select>
                            <ChevronDown className="absolute right-2.5 top-3 h-4 w-4 text-[#8f98a0] pointer-events-none" />
                          </div>
                        </div>
                      )}

                      {/* Monitoramento de Pulso dos SCR */}
                      {config.advancedConfig.hasScrMonitoring && (
                        <div>
                          <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                            Monitoramento do Pulso dos SCR (Tiristores)
                          </label>
                          <div className="relative">
                            <select
                              value={monitoramentoSCR}
                              onChange={(e) => setMonitoramentoSCR(e.target.value)}
                              className="w-full appearance-none rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 pr-8 text-sm text-white focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                            >
                              <option value="Sim - Supervisão Ativa de Pulso de Gate e Integridade">
                                Sim - Supervisão Ativa de Pulso de Gate e Integridade de Tiristores
                              </option>
                              <option value="Padrão de Fábrica - Supervisão Térmica e Fusíveis Ultrarrápidos">
                                Padrão de Fábrica - Supervisão Térmica e Fusíveis Ultrarrápidos
                              </option>
                            </select>
                            <ChevronDown className="absolute right-2.5 top-3 h-4 w-4 text-[#8f98a0] pointer-events-none" />
                          </div>
                        </div>
                      )}

                      {/* Campos Avançados Extras Específicos do Produto/Serviço */}
                      {config.advancedConfig.extraAdvancedFields && config.advancedConfig.extraAdvancedFields.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {config.advancedConfig.extraAdvancedFields.map((f) => (
                            <div key={f.id}>
                              <label className="block text-xs font-semibold text-[#8fa7be] mb-1">
                                {f.label}
                              </label>
                              {f.type === "select" && f.options ? (
                                <div className="relative">
                                  <select
                                    value={extraAdvancedData[f.id] || f.defaultValue || ""}
                                    onChange={(e) => setExtraAdvancedData({ ...extraAdvancedData, [f.id]: e.target.value })}
                                    className="w-full appearance-none rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 pr-8 text-sm text-white focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                                  >
                                    {f.options.map((opt) => (
                                      <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                      </option>
                                    ))}
                                  </select>
                                  <ChevronDown className="absolute right-2.5 top-3 h-4 w-4 text-[#8f98a0] pointer-events-none" />
                                </div>
                              ) : (
                                <input
                                  type={f.type}
                                  placeholder={f.placeholder || ""}
                                  value={extraAdvancedData[f.id] || ""}
                                  onChange={(e) => setExtraAdvancedData({ ...extraAdvancedData, [f.id]: e.target.value })}
                                  className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4]"
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* SEÇÃO FINAL: MENSAGEM / OBSERVAÇÕES TÉCNICAS (Conforme solicitado expressamente) */}
                  <div className="space-y-1.5 pt-2">
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white">
                      Mensagem / Observações Técnicas / Requisitos Específicos
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Escreva aqui sua mensagem, observações e requisitos"
                      value={formData.observacoes}
                      onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
                      className="w-full rounded-lg bg-[#101822] border border-[#2a475e] px-3.5 py-2 text-sm text-white placeholder-[#455768] focus:border-[#66c0f4] focus:outline-none focus:ring-1 focus:ring-[#66c0f4] leading-relaxed transition-colors"
                    />
                  </div>

                  {/* RODAPÉ DO FORMULÁRIO COM AÇÕES E GARANTIA TÉCNICA */}
                  <div className="mt-2 flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#2a475e] gap-3">
                    <div className="flex items-center gap-2 text-xs text-[#8f98a0]">
                      <Shield className="h-4 w-4 text-[#66c0f4]" />
                      <span>Atendimento por Engenheiros Especialistas • Retorno em até 4 horas úteis</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                      <button
                        type="button"
                        onClick={onClose}
                        className="rounded-lg px-4 py-2 text-sm font-medium text-[#8f98a0] hover:text-white transition-colors"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#66c0f4] via-[#4ba6df] to-[#1b75bc] hover:brightness-110 text-[#0e141b] font-bold px-6 py-2.5 text-sm shadow-[0_0_15px_rgba(102,192,244,0.4)] transition-all transform active:scale-98 disabled:opacity-50"
                      >
                        <Send className="h-4 w-4" />
                        <span>{isSubmitting ? "Transmitindo..." : "Enviar Solicitação"}</span>
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
