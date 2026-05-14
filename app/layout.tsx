import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sercil | Desenvolvimento de Sistemas Sob Medida",
  description:
    "Transforme sua operação com sistemas web personalizados. A Sercil desenvolve soluções escaláveis, seguras e focadas em resultados para o seu negócio.",
  alternates: {
    canonical: "https://www.sercil.com.br",
  },
  keywords: [
    // Principais
    "sistemas web",
    "desenvolvimento de sistemas web",
    "sistemas web corporativos",
    "criação de sistemas web",
    "sistemas web sob medida",
    "software sob medida",
    "desenvolvimento de software sob medida",
    "software corporativo",
    "sistemas corporativos",

    // Portais
    "portais corporativos",
    "desenvolvimento de portais corporativos",
    "portal para clientes",
    "portal para parceiros",
    "criação de portais empresariais",

    // Gestão e automação
    "automação de processos empresariais",
    "automação empresarial",
    "sistema de gestão web",
    "gestão de processos",
    "digitalização de processos",
    "transformação digital",

    // Backoffice e operação
    "backoffice corporativo",
    "painel administrativo empresarial",
    "dashboards corporativos",
    "relatórios gerenciais",
    "controle operacional",

    // Integrações
    "integração de sistemas",
    "integração ERP",
    "sistemas integrados",
    "integração empresarial",

    // Público-alvo
    "soluções web para empresas",
    "tecnologia para empresas",
    "desenvolvimento web empresarial",
    "sistemas personalizados para empresas",

    // SEO local (ajuste conforme sua cidade/região)
    "desenvolvimento de software Blumenau",
    "sistemas web Blumenau",
    "empresa de software Blumenau",
    "software sob medida Santa Catarina",

    // Long-tail estratégicas
    "criação de sistema web para empresas",
    "desenvolvimento de portal corporativo sob medida",
    "software para automatizar processos empresariais",
    "sistema web integrado com ERP",
    "portal corporativo para gestão empresarial",
    "criação de sistema web para empresas em Blumenau"
  ],
  authors: [{ name: "Sercil" }],
  openGraph: {
    title: "Sercil | Software House Especializada em Sistemas Web",
    description:
      "Soluções digitais sob medida para empresas que buscam eficiência e inovação.",
    type: "website",
    locale: "pt_BR",
    siteName: "Sercil",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}