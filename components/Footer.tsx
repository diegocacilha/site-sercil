import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Sercil. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/politica-de-privacidade"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Política de Privacidade
            </Link>
            <p className="text-sm text-muted">
              Desenvolvido com excelência pela Sercil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}