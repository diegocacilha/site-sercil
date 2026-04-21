import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Sercil",
  description:
    "Saiba como a Sercil coleta, utiliza e protege seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaPrivacidade() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
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
        Política de Privacidade
      </h1>

      <p className="text-secondary mb-8">
        Última atualização: {new Date().toLocaleDateString("pt-BR")}
      </p>

      <div className="prose prose-slate max-w-none space-y-6 text-secondary">
        <p>
          A Sercil leva a sério a privacidade e a proteção dos seus dados
          pessoais. Esta Política de Privacidade explica como coletamos,
          utilizamos, armazenamos e protegemos suas informações quando você
          visita nosso site ou utiliza nossos serviços, em conformidade com a{" "}
          <strong>
            Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD)
          </strong>
          .
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          1. Quem é o Controlador dos Dados
        </h2>
        <p>
          <strong>Sercil - Desenvolvimento de Sistemas</strong>
          <br />
          Para questões de privacidade entre em contato pelo {" "}
          <a
            href="/#contato"
            className="text-accent hover:underline"
          >
            formulário de contato.
          </a>
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          2. Quais Dados Coletamos e Por Quê
        </h2>

        <h3 className="text-lg font-medium text-primary mt-6 mb-2">
          2.1 Dados Fornecidos por Você (Formulário de Contato)
        </h3>
        <p>
          Quando você preenche nosso formulário de contato, coletamos:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <strong>Nome completo</strong> - Para nos dirigirmos a você
            corretamente.
          </li>
          <li>
            <strong>E-mail profissional</strong> - Para respondermos à sua
            solicitação de contato.
          </li>
          <li>
            <strong>Mensagem (opcional)</strong> - Para entendermos melhor sua
            necessidade.
          </li>
        </ul>
        <p className="mt-2">
          <strong>Finalidade:</strong> Esses dados são utilizados exclusivamente
          para entrar em contato com você e prestar informações sobre nossos
          serviços de desenvolvimento de sistemas. Não utilizamos esses dados
          para envio de marketing sem seu consentimento prévio.
        </p>
        <p>
          <strong>Base Legal (LGPD):</strong> Legítimo interesse (art. 7º, IX)
          e execução de diligências pré-contratuais (art. 7º, V).
        </p>

        <h3 className="text-lg font-medium text-primary mt-6 mb-2">
          2.2 Dados de Navegação (Google Analytics)
        </h3>
        <p>
          Utilizamos o <strong>Google Analytics</strong>, uma ferramenta de
          análise de tráfego que coleta informações anônimas sobre como os
          visitantes interagem com nosso site.
        </p>
        <p>Os dados coletados incluem:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Páginas visitadas e tempo de permanência.</li>
          <li>Tipo de dispositivo e navegador utilizado.</li>
          <li>Localização geográfica aproximada (cidade/país).</li>
          <li>Fonte de tráfego (como você chegou ao site).</li>
        </ul>
        <p className="mt-2">
          <strong>Finalidade:</strong> Esses dados nos ajudam a entender o
          comportamento dos visitantes para melhorar continuamente nosso site e
          nossos serviços. As informações são agregadas e anônimas, não
          permitindo sua identificação pessoal.
        </p>
        <p>
          <strong>Base Legal (LGPD):</strong> Legítimo interesse do controlador
          (art. 7º, IX).
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          3. Cookies e Tecnologias Semelhantes
        </h2>
        <p>
          O Google Analytics utiliza cookies (pequenos arquivos de texto
          armazenados no seu navegador) para coletar dados de navegação. Você
          pode gerenciar ou desabilitar os cookies nas configurações do seu
          navegador a qualquer momento. Para saber mais sobre como o Google
          utiliza os dados, acesse a{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Política de Privacidade do Google
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          4. Compartilhamento de Dados
        </h2>
        <p>
          A Sercil <strong>não vende, aluga ou compartilha</strong> seus dados
          pessoais com terceiros para fins comerciais. Seus dados de contato
          (nome e e-mail) são armazenados exclusivamente em nossos sistemas
          internos (Firebase/Firestore). Os dados anônimos de navegação são
          processados pelo Google Analytics, conforme descrito acima.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          5. Armazenamento e Segurança
        </h2>
        <p>
          Seus dados são armazenados em servidores seguros do Google Cloud
          Platform (Firestore), que adota medidas técnicas e organizacionais
          robustas para proteger suas informações contra acessos não
          autorizados, perda ou alteração. Mantemos seus dados apenas pelo tempo
          necessário para responder à sua solicitação ou conforme exigido por
          lei.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          6. Seus Direitos (LGPD)
        </h2>
        <p>
          De acordo com a LGPD, você tem os seguintes direitos sobre seus dados
          pessoais:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Confirmar se tratamos seus dados.</li>
          <li>Acessar seus dados.</li>
          <li>Corrigir dados incompletos ou desatualizados.</li>
          <li>Solicitar a exclusão dos dados (quando aplicável).</li>
          <li>Revogar seu consentimento.</li>
        </ul>
        <p className="mt-2">
          Para exercer qualquer um desses direitos, entre em contato pelo {" "}
          <a
            href="/#contato"
            className="text-accent hover:underline"
          >
            formulário de contato
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          7. Alterações nesta Política
        </h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente. A data
          da última atualização estará sempre indicada no topo da página.
          Recomendamos que você revise esta política ocasionalmente para se
          manter informado.
        </p>

        <h2 className="text-xl font-semibold text-primary mt-8 mb-4">
          8. Contato
        </h2>
        <p>
          Se você tiver qualquer dúvida sobre esta Política de Privacidade ou
          sobre o tratamento dos seus dados, entre em contato com nosso
          Encarregado de Dados pelo 
          {" "}
          <a
            href="/#contato"
            className="text-accent hover:underline"
          >
            formulário de contato.
          </a>
        </p>
      </div>
    </div>
  );
}