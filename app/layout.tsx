import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sercil | Desenvolvimento de Sistemas Sob Medida",
  description:
    "Transforme sua operação com sistemas web personalizados. A Sercil desenvolve soluções escaláveis, seguras e focadas em resultados para o seu negócio.",
  keywords:
    "desenvolvimento de sistemas, software house, aplicações web, sistemas personalizados, desenvolvimento web",
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
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}