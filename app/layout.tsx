import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Desenvolvimento de Sistemas Sob Medida | Sercil",
  description:
    "Transforme sua operação com sistemas web personalizados. A Sercil desenvolve soluções escaláveis, seguras e focadas em resultados para o seu negócio.",
  alternates: {
    canonical: "https://www.sercil.com.br",
  },
  authors: [{ name: "Sercil" }],
  openGraph: {
    title: "Desenvolvimento de Sistemas Sob Medida | Sercil",
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
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <WhatsAppFloat />
        <GoogleAnalytics />
        <CookieBanner />
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}