// src/app/actions/sendContact.ts
"use server";

import nodemailer from "nodemailer";

export interface ContactPayload {
  name: string;
  email: string;
  message?: string;
}

export interface ContactResult {
  success: boolean;
  message: string;
}

export async function sendContactEmail(
  payload: ContactPayload
): Promise<ContactResult> {
  const { name, email, message } = payload;

  // Validação básica
  if (!name || !email) {
    return { success: false, message: "Nome e e-mail são obrigatórios." };
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error("Variáveis GMAIL_USER e/ou GMAIL_PASS não configuradas.");
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
      replyTo: email,
      subject: `Novo contato do site: ${name}`,
      text: `
        Nome: ${name}
        E-mail: ${email}
        Mensagem: ${message || "Nenhuma mensagem enviada."}
      `,
      html: `
        <h3>Novo contato do site Sercil</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message || "Nenhuma mensagem enviada."}</p>
      `,
    });

    return { success: true, message: "E-mail enviado com sucesso!" };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return { success: false, message: "Erro ao enviar e-mail." };
  }
}