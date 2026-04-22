import CookieBanner from "@/components/CookieBanner";
import "../globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Retorna apenas o conteúdo, sem Header ou Footer
  return <>
    <Header />
    <main className="flex-1">{children}</main>
    <GoogleAnalytics />
    <CookieBanner />;    
    <Footer />
  </>;
}