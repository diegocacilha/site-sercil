// src/app/actions/sendContact.ts
"use server";

import nodemailer from "nodemailer";

export interface ContactPayload {
  processo: string;
  como: string;
  cel: string;
}

export interface ContactResult {
  success: boolean;
  message: string;
}

export async function sendContactEmail(
  payload: ContactPayload
): Promise<ContactResult> {
  const { processo, como, cel } = payload;

  // Validação básica
  if (!processo || !como || !cel) {
    return { success: false, message: "Todos os campos são obrigatórios." };
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS || !process.env.GMAIL_EMAIL) {
    console.error("Variáveis GMAIL_USER e/ou GMAIL_PASS e/ou GMAIL_EMAIL não configuradas.");
    return { success: false, message: "Erro de configuração do servidor." };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: process.env.GMAIL_EMAIL,
      subject: `Novo contato do site: ${cel}`,
      text: `
        Nome: ${cel}
        Processo: ${processo}
        Como: ${como || "Nenhuma mensagem enviada."}
      `,
      html: `
        <h3>Novo contato do site Sercil</h3>
        <p><strong>Cel:</strong> ${cel}</p>
        <p><strong>Processo:</strong> ${processo}</p>
        <p><strong>Como:</strong> ${como || "Nenhuma mensagem enviada."}</p>
      `,
    });

    return { success: true, message: "E-mail enviado com sucesso!" };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return { success: false, message: "Erro ao enviar e-mail." };
  }
}