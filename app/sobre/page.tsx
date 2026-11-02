// app/sobre/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sercil | Sobre",
  description:
    "Conheça a Sercil: software house especializada em sistemas web sob medida, integração com ERP, WhatsApp e planilhas. Fundada por Diego, profissional com mais de 10 anos de experiência em TI.",
  alternates: {
    canonical: "https://www.sercil.com.br/sobre",
  },
  openGraph: {
    title: "Sercil | Sobre",
    description:
      "Software house especializada em sistemas web sob medida. Fundada por Diego, profissional com mais de 10 anos de experiência em TI.",
    url: "https://www.sercil.com.br/sobre",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.sercil.com.br/#organization",
  name: "Sercil",
  url: "https://www.sercil.com.br",
  description:
    "Software house especializada em sistemas web sob medida, integração com ERP, WhatsApp e planilhas, e automação de processos para empresas.",
  founder: {
    "@type": "Person",
    "@id": "https://www.sercil.com.br/#person",
    name: "Diego Armando Cacilha",
    jobTitle: "Desenvolvedor Full Stack",
    url: "https://www.sercil.com.br/curriculo",
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  knowsAbout: [
    "Sistemas web sob medida",
    "Integração de sistemas",
    "Integração com ERP",
    "Automação de processos",
    "Dashboards e relatórios",
    "Portais corporativos",
  ],
  sameAs: ["https://www.linkedin.com/in/diegocacilha"],
};

const principios = [
  {
    title: "Diagnóstico antes do código",
    description:
      "Não começamos escrevendo software. Começamos entendendo onde o seu processo trava — no WhatsApp, na planilha ou no ERP. O sistema vem depois, para resolver o gargalo real.",
  },
  {
    title: "Integração, não mais uma ferramenta",
    description:
      "O problema não é falta de sistema. É ter sistemas que não conversam. Construímos pontes entre o que você já usa, em vez de adicionar mais uma aba ao caos.",
  },
  {
    title: "O código é seu",
    description:
      "Você recebe código-fonte, documentação e arquitetura preparada para escalar. Se amanhã quiser tocar sozinho ou trocar de parceiro, nada te prende.",
  },
  {
    title: "Evolução semanal, com base no uso real",
    description:
      "Cada semana entregamos melhoria a partir do que o time realmente usa. Não entregamos um projeto fechado e desaparecemos.",
  },
];

export default function SobrePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/"
        className="inline-flex items-center text-sm text-muted hover:text-accent transition-colors mb-8"
      >
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Voltar para o início
      </Link>

      <h1 className="text-3xl sm:text-4xl font-semibold text-primary mb-6">
        Sobre a Sercil
      </h1>

      <div className="prose prose-slate max-w-none space-y-6 text-secondary">
        <p>
          A Sercil é uma software house especializada em{" "}
          <strong>sistemas web sob medida</strong> para empresas que cresceram,
          mas cuja operação não acompanhou. Nosso foco é transformar operações
          fragmentadas — WhatsApp para vender, planilha para controlar, ERP que
          ninguém integra — em um fluxo visível, integrado e gerenciável.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          Por que existimos
        </h2>
        <p>
          A maioria das empresas não tem um problema de software. Tem um
          problema de <strong>operação quebrada em ferramentas que não
          conversam</strong>. O dono vira o único ponto de integração entre
          vendas, financeiro, estoque e produção — e passa a decidir no escuro,
          sem relatório gerencial, com retrabalho e dependência de si mesmo para
          tudo.
        </p>
        <p>
          A Sercil existe para tirar o dono desse lugar. Em vez de vender mais
          uma ferramenta, construímos o sistema que conecta o que já existe,
          substitui o que trava e devolve visibilidade sobre o processo.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          Quem está por trás
        </h2>
        <p>
          A Sercil foi fundada por{" "}
          <Link
            href="/curriculo"
            className="text-accent hover:underline font-medium"
          >
            Diego
          </Link>
          , profissional de Tecnologia da Informação com mais de 10 anos de
          experiência em análise e desenvolvimento de sistemas, sustentação de
          aplicações, integração entre sistemas e manutenção de sistemas
          legados.
        </p>
        <p>
          Essa trajetória inclui passagens por ambientes industriais, sistemas
          de gestão empresarial (ERP Senior/Sapiens), desenvolvimento web com
          Node.js, JavaScript, PHP e Laravel, além de integração de sistemas via
          APIs REST e webservices. Na prática, isso significa que a Sercil não
          aprendeu na teoria como operações quebram: viu de perto, em chão de
          fábrica e em backoffice, o custo real de processos que não se
          comunicam.
        </p>
        <p>
          É essa experiência que orienta o jeito da Sercil de trabalhar:
          entender o processo antes de escrever código, integrar em vez de
          substituir por mais uma ferramenta, e entregar algo que o cliente
          possa tocar sozinho se quiser.
        </p>
        <p className="text-sm">
          Para conhecer a trajetória técnica completa, acesse o{" "}
          <Link href="/curriculo" className="text-accent hover:underline">
            currículo de Diego
          </Link>
          .
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          Como trabalhamos
        </h2>
        <div className="not-prose mt-4 grid gap-6 sm:grid-cols-2">
          {principios.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-gray-200 p-5"
            >
              <h3 className="text-base font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          O que entregamos
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Sistemas web sob medida, alinhados ao fluxo real da operação.</li>
          <li>Integração com ERP, WhatsApp, planilhas e gateways de pagamento.</li>
          <li>Dashboards corporativos e relatórios gerenciais que geram decisão.</li>
          <li>Portais corporativos para clientes, parceiros e equipes internas.</li>
          <li>Backoffice e painéis administrativos.</li>
          <li>Automação de processos com foco em produtividade e visibilidade.</li>
        </ul>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          Para quem trabalhamos
        </h2>
        <p>
          Empresas que já passaram do estágio de planilha improvisada e
          perceberam que a operação virou um quebra-cabeça de ferramentas. Em
          geral, negócios que cresceram, têm equipe, têm processo — e sentem que
          o controle não acompanhou o crescimento. Se esse é o seu caso, a
          conversa faz sentido.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          Vamos conversar?
        </h2>
        <p>
          Se você quer entender como um sistema sob medida poderia funcionar na
          sua operação, a Sercil oferece uma simulação gratuita: em cerca de 20
          minutos de call, desenhamos o fluxo, a integração e o relatório que
          devolveriam produtividade ao seu time.
        </p>
        <p>
          <Link
            href="/#contato"
            className="text-accent hover:underline font-medium"
          >
            Entre em contato
          </Link>{" "}
          ou acesse a{" "}
          <Link href="/servicos" className="text-accent hover:underline">
            página de serviços
          </Link>{" "}
          para conhecer melhor o que fazemos.
        </p>
      </div>
    </div>
  );
}