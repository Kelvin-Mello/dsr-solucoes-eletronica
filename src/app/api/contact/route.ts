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
    const assunto = (body.assunto || "Contato pelo Site").trim();
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

    const destinationEmail =
      process.env.CONTACT_DESTINATION_EMAIL || "dsr.solucoes.eletronica@gmail.com";
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
      
      <!-- Box do Assunto -->
      <div style="background-color: #172433; border: 1px solid #3b678c; border-left: 4px solid #66c0f4; padding: 14px 18px; border-radius: 6px; margin-bottom: 24px;">
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
---------------------------------------------------------
Assunto: ${assunto}
Nome do Contato: ${nome}
Empresa / Planta: ${empresa}
E-mail: ${email}
Telefone/WhatsApp: ${telefone}

MENSAGEM:
${mensagem}
---------------------------------------------------------
    `.trim();

    // 4. Disparo via SMTP direto (se SMTP_PASS configurado)
    if (smtpPass) {
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
        to: destinationEmail,
        replyTo: `"${nome}" <${email}>`,
        subject: `[Site DSR] ${assunto} - ${empresa} (${nome})`,
        text: textEmail,
        html: htmlEmail,
      });

      return NextResponse.json({
        success: true,
        delivered: true,
        provider: "smtp",
        message: "E-mail enviado com sucesso para a equipe técnica da DSR!",
      });
    }

    // 5. Disparo via Web3Forms API (se WEB3FORMS_ACCESS_KEY configurado)
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (web3Key) {
      const w3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3Key,
          subject: `[Site DSR] ${assunto} - ${empresa} (${nome})`,
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
          message: "E-mail transmitido com sucesso para a DSR Soluções!",
        });
      } else {
        console.error("[WEB3FORMS ERROR]", w3Result);
      }
    }

    // 6. Disparo via FormSubmit.co direto para o e-mail da DSR (Ativo e sem captcha)
    try {
      const originHeader =
        request.headers.get("origin") ||
        request.nextUrl.origin ||
        "https://dsr-solucoes-eletronica.vercel.app";
      const refererHeader =
        request.headers.get("referer") || `${originHeader}/contato`;

      const fsResponse = await fetch(`https://formsubmit.co/ajax/${destinationEmail}`, {
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
          _subject: `[Site DSR] ${assunto} - ${empresa} (${nome})`,
          _replyto: email,
          _captcha: "false",
          _template: "table",
          "Nome do Contato": nome,
          "Empresa / Planta": empresa,
          "E-mail Corporativo": email,
          "Telefone / WhatsApp": telefone,
          "Assunto Principal": assunto,
          "Detalhes da Solicitação": mensagem,
        }),
      });

      const fsData = await fsResponse.json();
      console.log("[FORMSUBMIT RESPONSE]", fsData);

      if (fsData.success === "true" || fsData.success === true) {
        return NextResponse.json({
          success: true,
          delivered: true,
          provider: "formsubmit",
          message: "E-mail transmitido com sucesso para dsr.solucoes.eletronica@gmail.com!",
        });
      }

      if (fsData.message && fsData.message.includes("Activation")) {
        console.warn("[FORMSUBMIT ACTIVATION REQUIRED] Um e-mail de ativação foi enviado para dsr.solucoes.eletronica@gmail.com");
      }
    } catch (fsError) {
      console.error("[FORMSUBMIT ERROR]", fsError);
    }

    // 7. Se nenhuma credencial de envio estiver cadastrada/ativada, orienta com fallback manual
    console.warn("==================================================");
    console.warn("[DSR CONTATO - ATENÇÃO: CREDENCIAIS NÃO CONFIGURADAS]");
    console.warn(`De: ${nome} (${empresa}) <${email}>`);
    console.warn(`Telefone: ${telefone}`);
    console.warn(`Assunto: ${assunto}`);
    console.warn(`Mensagem: ${mensagem}`);
    console.warn(
      "Ação necessária: Configure a variável SMTP_PASS (Senha de App do Gmail) ou WEB3FORMS_ACCESS_KEY nas variáveis de ambiente da Vercel para efetivar a entrega automática."
    );
    console.warn("==================================================");

    return NextResponse.json(
      {
        success: false,
        delivered: false,
        needsConfiguration: true,
        destination: destinationEmail,
        error:
          "O envio automático de e-mail requer a configuração das credenciais (Senha de App do Gmail ou chave Web3Forms) no servidor.",
        lead: {
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
