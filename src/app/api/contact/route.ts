import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

interface ContactPayload {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  protocolo?: string;
  website?: string; // Honeypot anti-spam
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;

    // 1. Verificação Honeypot (se preenchido, é bot)
    if (body.website && body.website.trim().length > 0) {
      // Retorna sucesso para enganar bots sem disparar e-mail
      return NextResponse.json({ success: true, message: "Mensagem recebida." });
    }

    const nome = (body.nome || "").trim();
    const empresa = (body.empresa || "").trim();
    const email = (body.email || "").trim();
    const telefone = (body.telefone || "").trim();
    const protocolo = (body.protocolo || "").trim();
    const assuntoBruto = (body.assunto || "Contato pelo Site").trim();
    const assunto = protocolo && !assuntoBruto.includes(protocolo)
      ? `[${protocolo}] ${assuntoBruto}`
      : assuntoBruto;
    const mensagem = (body.mensagem || "").trim();

    // 2. Validação básica de campos obrigatórios
    if (!nome || nome.length < 2) {
      return NextResponse.json(
        { success: false, error: "Nome completo é obrigatório." },
        { status: 400 }
      );
    }

    if (!empresa || empresa.length < 2) {
      return NextResponse.json(
        { success: false, error: "Empresa ou planta industrial é obrigatória." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "E-mail corporativo válido é obrigatório." },
        { status: 400 }
      );
    }

    if (!telefone || telefone.length < 8) {
      return NextResponse.json(
        { success: false, error: "Telefone ou WhatsApp de contato é obrigatório." },
        { status: 400 }
      );
    }

    if (!mensagem || mensagem.length < 5) {
      return NextResponse.json(
        { success: false, error: "Por favor, descreva detalhadamente a sua solicitação." },
        { status: 400 }
      );
    }

    // Lista de Destinatários: Entrega no e-mail do domínio e SEMPRE no Gmail da DSR como garantia
    const configuredDestinations = (process.env.CONTACT_DESTINATION_EMAILS || process.env.CONTACT_DESTINATION_EMAIL || "")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean);

    const defaultDestinations = [
      "kelvin@dsrsolucoes.com.br",
      "dsr.solucoes.eletronica@gmail.com"
    ];

    const destinationEmails = configuredDestinations.length > 0
      ? Array.from(new Set([...configuredDestinations, "dsr.solucoes.eletronica@gmail.com"]))
      : defaultDestinations;

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER || "dsr.solucoes.eletronica@gmail.com";
    const smtpPass = process.env.SMTP_PASS || "";

    const timestamp = new Date().toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    });

    const cleanPhone = telefone.replace(/\D/g, "");
    const waLink = cleanPhone ? `https://wa.me/55${cleanPhone}` : "";

    // 3. Montagem do Template HTML Elegante da DSR Soluções
    const htmlEmail = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Nova Solicitação - DSR Soluções</title>
</head>
<body style="margin: 0; padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b121a; color: #c6d4df;">
  <div style="max-width: 650px; margin: 0 auto; background-color: #101822; border: 1px solid #2a475e; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
    
    <!-- Cabeçalho Industrial DSR -->
    <div style="background: linear-gradient(135deg, #172535 0%, #0d1622 100%); padding: 24px 30px; border-bottom: 2px solid #66c0f4;">
      <div style="font-size: 11px; font-family: monospace; color: #66c0f4; text-transform: uppercase; letter-spacing: 2px; font-weight: bold; margin-bottom: 4px;">
        DSR Soluções em Eletrônica • Portal de Engenharia
      </div>
      <h1 style="margin: 0; font-size: 22px; color: #ffffff; font-weight: 800;">
        Nova Solicitação / Cotação Técnica
      </h1>
      <p style="margin: 6px 0 0; font-size: 12px; color: #8f98a0; font-family: monospace;">
        Recebido em ${timestamp} (Horário de Brasília)
      </p>
    </div>

    <!-- Conteúdo Principal -->
    <div style="padding: 30px;">
      
      <!-- Box do Assunto e Protocolo -->
      <div style="background-color: #172433; border: 1px solid #3b678c; border-left: 4px solid #66c0f4; padding: 14px 18px; border-radius: 6px; margin-bottom: 24px;">
        ${protocolo ? `
        <div style="margin-bottom: 8px;">
          <span style="font-size: 10px; font-family: monospace; color: #8f98a0; text-transform: uppercase; letter-spacing: 1px;">Protocolo Oficial:</span>
          <span style="display: inline-block; background-color: rgba(102, 192, 244, 0.2); border: 1px solid #66c0f4; border-radius: 4px; padding: 3px 8px; font-family: monospace; font-size: 13px; font-weight: bold; color: #66c0f4; margin-left: 6px;">
            ${escapeHtml(protocolo)}
          </span>
        </div>
        ` : ""}
        <span style="font-size: 11px; font-family: monospace; color: #8f98a0; text-transform: uppercase;">Assunto Principal:</span>
        <div style="font-size: 16px; font-weight: bold; color: #ffffff; margin-top: 2px;">
          ${escapeHtml(assunto)}
        </div>
      </div>

      <!-- Dados do Solicitante -->
      <h2 style="font-size: 14px; font-family: monospace; text-transform: uppercase; color: #66c0f4; letter-spacing: 1px; margin-bottom: 12px;">
        ● Dados do Solicitante
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr>
          <td style="padding: 10px 14px; border: 1px solid #203548; background-color: #141f2d; font-size: 12px; color: #8f98a0; width: 35%; font-weight: 600;">
            Nome do Contato:
          </td>
          <td style="padding: 10px 14px; border: 1px solid #203548; background-color: #101822; font-size: 13px; color: #ffffff; font-weight: bold;">
            ${escapeHtml(nome)}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; border: 1px solid #203548; background-color: #141f2d; font-size: 12px; color: #8f98a0; font-weight: 600;">
            Empresa / Planta:
          </td>
          <td style="padding: 10px 14px; border: 1px solid #203548; background-color: #101822; font-size: 13px; color: #ffffff; font-weight: bold;">
            ${escapeHtml(empresa)}
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; border: 1px solid #203548; background-color: #141f2d; font-size: 12px; color: #8f98a0; font-weight: 600;">
            E-mail Corporativo:
          </td>
          <td style="padding: 10px 14px; border: 1px solid #203548; background-color: #101822; font-size: 13px;">
            <a href="mailto:${escapeHtml(email)}" style="color: #66c0f4; text-decoration: none; font-weight: 600;">
              ${escapeHtml(email)}
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; border: 1px solid #203548; background-color: #141f2d; font-size: 12px; color: #8f98a0; font-weight: 600;">
            Telefone / WhatsApp:
          </td>
          <td style="padding: 10px 14px; border: 1px solid #203548; background-color: #101822; font-size: 13px; color: #ffffff;">
            ${escapeHtml(telefone)}
            ${waLink ? ` &bull; <a href="${waLink}" style="color: #34d399; text-decoration: none; font-weight: bold;">[Abrir no WhatsApp]</a>` : ""}
          </td>
        </tr>
      </table>

      <!-- Mensagem / Especificações Técnicas -->
      <h2 style="font-size: 14px; font-family: monospace; text-transform: uppercase; color: #66c0f4; letter-spacing: 1px; margin-bottom: 12px;">
        ● Detalhes da Solicitação / Mensagem
      </h2>
      <div style="background-color: #0b121a; border: 1px solid #2a475e; border-radius: 8px; padding: 18px; font-size: 13px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; font-family: monospace;">
${escapeHtml(mensagem)}
      </div>

      <!-- Botões de Ação Rápida -->
      <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #2a475e; text-align: center;">
        <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent("Resposta DSR Soluções: " + assunto)}" style="display: inline-block; background: linear-gradient(135deg, #66c0f4 0%, #1b75bc 100%); color: #0a1118; font-weight: bold; font-size: 13px; text-transform: uppercase; text-decoration: none; padding: 12px 24px; border-radius: 6px; margin-right: 12px;">
          ✉ Responder ao Cliente
        </a>
        ${waLink ? `
        <a href="${waLink}" style="display: inline-block; background-color: #059669; color: #ffffff; font-weight: bold; font-size: 13px; text-transform: uppercase; text-decoration: none; padding: 12px 24px; border-radius: 6px;">
          💬 Chamar no WhatsApp
        </a>
        ` : ""}
      </div>

    </div>

    <!-- Rodapé -->
    <div style="background-color: #0d151e; padding: 16px 30px; border-top: 1px solid #203548; text-align: center; font-size: 11px; color: #8f98a0; font-family: monospace;">
      DSR Soluções em Eletrônica • Soluções de Potência e Manutenção Industrial<br>
      Este e-mail foi gerado automaticamente pelo formulário de contato do site oficial.
    </div>

  </div>
</body>
</html>
    `.trim();

    const textEmail = `
NOVA SOLICITAÇÃO TÉCNICA - DSR SOLUÇÕES EM ELETRÔNICA
Data/Hora: ${timestamp}
${protocolo ? `Protocolo Oficial: ${protocolo}\n` : ""}---------------------------------------------------------
Assunto: ${assunto}
Nome do Contato: ${nome}
Empresa / Planta: ${empresa}
E-mail: ${email}
Telefone/WhatsApp: ${telefone}

MENSAGEM:
${mensagem}
---------------------------------------------------------
    `.trim();

    // -------------------------------------------------------------
    // MOTOR DE DISPARO MULTI-PROVEDOR COM FAILOVER EM CASCATA
    // -------------------------------------------------------------
    const dispatchErrors: Record<string, string> = {};

    // 4. PRIORIDADE 1: RESEND (Domínio Oficial @dsrsolucoes.com.br)
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const fromAddress =
          process.env.RESEND_FROM_EMAIL || "DSR Soluções <cotacoes@dsrsolucoes.com.br>";

        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromAddress,
            to: destinationEmails,
            reply_to: email,
            subject: assunto,
            html: htmlEmail,
            text: textEmail,
          }),
        });

        const resendData = await resendResponse.json();

        if (resendResponse.ok && resendData?.id) {
          return NextResponse.json({
            success: true,
            delivered: true,
            provider: "resend",
            isPrimary: true,
            destinations: destinationEmails,
            message: "Cotação transmitida com sucesso via Resend (Domínio Oficial DSR)!",
          });
        } else {
          dispatchErrors["resend"] = resendData?.message || `HTTP ${resendResponse.status}`;
          console.warn("[RESEND FAILOVER - TENTANDO PRÓXIMO MOTOR]", resendData);
        }
      } catch (resendError) {
        dispatchErrors["resend"] =
          resendError instanceof Error ? resendError.message : "Erro desconhecido no Resend";
        console.warn("[RESEND FAILOVER ERROR]", resendError);
      }
    }

    // 5. PRIORIDADE 2: GMAIL SMTP COM SENHA DE APP (Backup Seguro)
    if (smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Portal DSR Soluções" <${smtpUser}>`,
          to: destinationEmails.join(", "),
          replyTo: `"${nome}" <${email}>`,
          subject: assunto,
          text: textEmail,
          html: htmlEmail,
        });

        return NextResponse.json({
          success: true,
          delivered: true,
          provider: "smtp",
          isPrimary: true,
          destinations: destinationEmails,
          message: "Cotação transmitida com sucesso via Gmail SMTP (Backup Seguro)!",
        });
      } catch (smtpError) {
        dispatchErrors["smtp"] =
          smtpError instanceof Error ? smtpError.message : "Erro desconhecido no SMTP";
        console.warn("[SMTP FAILOVER ERROR]", smtpError);
      }
    }

    // 6. PRIORIDADE 3 (CONTINGÊNCIA): WEB3FORMS
    // Caso P1 e P2 falhem, se P3 entregar, o e-mail chega na DSR,
    // mas a API sinaliza contingencyNotice para o cliente receber aviso de contingência
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (web3Key) {
      try {
        const w3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: assunto,
            from_name: `${nome} via DSR Soluções`,
            name: nome,
            email: email,
            phone: telefone,
            company: empresa,
            topic: assunto,
            message: mensagem,
            replyto: email,
          }),
        });

        const w3Result = await w3Response.json();

        if (w3Result.success) {
          return NextResponse.json({
            success: true,
            delivered: true,
            provider: "web3forms",
            isPrimary: false,
            contingencyNotice: true,
            destinations: destinationEmails,
            message: "Cotação transmitida via contingência Web3Forms (Aviso ativado para o cliente).",
          });
        } else {
          dispatchErrors["web3forms"] = JSON.stringify(w3Result);
          console.warn("[WEB3FORMS FAILOVER ERROR]", w3Result);
        }
      } catch (w3Error) {
        dispatchErrors["web3forms"] =
          w3Error instanceof Error ? w3Error.message : "Erro desconhecido no Web3Forms";
      }
    }

    // 7. PRIORIDADE 3 (CONTINGÊNCIA): FORMSUBMIT
    try {
      const originHeader =
        request.headers.get("origin") ||
        request.nextUrl.origin ||
        "https://dsr-solucoes-eletronica.vercel.app";
      const refererHeader =
        request.headers.get("referer") || `${originHeader}/contato`;

      const fsResponse = await fetch(`https://formsubmit.co/ajax/dsr.solucoes.eletronica@gmail.com`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: originHeader,
          Referer: refererHeader,
          "User-Agent":
            request.headers.get("user-agent") ||
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
        body: JSON.stringify({
          _subject: assunto,
          _replyto: email,
          _captcha: "false",
          _template: "table",
          "Protocolo Oficial": protocolo || "N/A",
          "Nome do Contato": nome,
          "Empresa / Planta": empresa,
          "E-mail Corporativo": email,
          "Telefone / WhatsApp": telefone,
          "Assunto Principal": assunto,
          "Detalhes da Solicitação": mensagem,
        }),
      });

      const fsData = await fsResponse.json();

      if (fsData.success === "true" || fsData.success === true) {
        return NextResponse.json({
          success: true,
          delivered: true,
          provider: "formsubmit",
          isPrimary: false,
          contingencyNotice: true,
          destinations: destinationEmails,
          message: "Cotação transmitida via contingência FormSubmit (Aviso ativado para o cliente).",
        });
      }
      dispatchErrors["formsubmit"] = fsData?.message || "Rejeitado pelo FormSubmit";
    } catch (fsError) {
      dispatchErrors["formsubmit"] =
        fsError instanceof Error ? fsError.message : "Erro no FormSubmit";
    }

    // 8. Se todos os motores falharem ou não estiverem configurados:
    console.warn("==================================================");
    console.warn("[DSR CONTATO - ALERTA: NENHUM MOTOR DE ENVIO ATIVO]");
    console.warn(`Protocolo: ${protocolo}`);
    console.warn(`De: ${nome} (${empresa}) <${email}>`);
    console.warn(`Telefone: ${telefone}`);
    console.warn(`Assunto: ${assunto}`);
    console.warn(`Destinatários Planejados: ${destinationEmails.join(", ")}`);
    console.warn(`Erros dos Motores:`, dispatchErrors);
    console.warn("==================================================");

    return NextResponse.json(
      {
        success: false,
        delivered: false,
        needsConfiguration: true,
        protocolo,
        destinations: destinationEmails,
        dispatchErrors,
        error:
          "O envio automático requer a configuração de ao menos um motor de envio (Resend API Key ou Senha de App do Gmail).",
        lead: {
          protocolo,
          nome,
          empresa,
          email,
          telefone,
          assunto,
          mensagem,
        },
      },
      { status: 503 }
    );
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Erro desconhecido";
    console.error("[DSR CONTACT ERROR]", error);

    return NextResponse.json(
      {
        success: false,
        delivered: false,
        error:
          "Houve uma falha técnica no envio do e-mail. Por favor, utilize o botão de WhatsApp ou envie diretamente pelo seu aplicativo de e-mail.",
        details: process.env.NODE_ENV === "development" ? errMessage : undefined,
      },
      { status: 500 }
    );
  }
}
