// app/curriculo/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diego Armando Cacilha | Desenvolvedor Full Stack",
  description:
    "Currículo de Diego Armando Cacilha — profissional de TI com mais de 10 anos de experiência em análise e desenvolvimento de sistemas, sustentação de aplicações e integração de sistemas.",
  alternates: {
    canonical: "https://www.sercil.com.br/curriculo",
  },
  openGraph: {
    title: "Diego Armando Cacilha | Desenvolvedor Full Stack",
    description:
      "Profissional de TI com mais de 10 anos de experiência em análise e desenvolvimento de sistemas.",
    url: "https://www.sercil.com.br/curriculo",
    type: "profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateCreated: "2026-11-01",
  dateModified: "2026-11-01",
  mainEntity: {
    "@type": "Person",
    "@id": "https://www.sercil.com.br/#person",
    name: "Diego Armando Cacilha",
    jobTitle: "Desenvolvedor Full Stack",
    description:
      "Profissional de Tecnologia da Informação com mais de 10 anos de experiência em análise e desenvolvimento de sistemas, sustentação de aplicações, suporte técnico e manutenção de sistemas legados.",
    url: "https://www.sercil.com.br",
    email: "mailto:cacilha.tec@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/diegocacilha",
      "https://www.sercil.com.br/resume.json",
    ],
    knowsAbout: [
      "Node.js",
      "JavaScript",
      "TypeScript",
      "AngularJS",
      "PHP",
      "Laravel",
      "LSP",
      "ERP Senior/Sapiens",
      "APIs REST",
      "Webservices",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "Scrum",
      "Kanban",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Blumenau",
      addressRegion: "SC",
      addressCountry: "BR",
    },
  },
};

const experiences = [
  {
    role: "Analista de Sistemas Sênior",
    company: "Juréia Alimentos",
    period: "2023 – 2023",
    activities: [
      "Atendimento aos clientes internos e suporte aos usuários do sistema ERP Sapiens.",
      "Manutenção e implantação de rotinas customizadas utilizando a linguagem LSP, da Senior Sistemas.",
      "Consultoria em sistemas de informação, apoiando demandas relacionadas às soluções corporativas.",
      "Integração entre diferentes sistemas, contribuindo para a comunicação entre aplicações.",
      "Apoio a demandas relacionadas a contratos de Tecnologia da Informação.",
    ],
    results: [
      "Contribuição para a continuidade operacional do ERP Sapiens por meio do suporte aos usuários e da manutenção de rotinas customizadas.",
      "Apoio à integração de sistemas e à adequação das soluções tecnológicas às necessidades internas da empresa.",
    ],
  },
  {
    role: "Analista de Sistemas Sênior | Sustentação de Sistema Customizado",
    company: "Prestação de serviços em Tecnologia da Informação",
    period: "2022 – 2023",
    activities: [
      "Sustentação e manutenção de sistemas web.",
      "Desenvolvimento de aplicações web utilizando PHP e Node.js.",
      "Atendimento e suporte técnico a clientes internos e externos.",
      "Manutenção de sistemas legados.",
      "Implementação de melhorias e correção de falhas em sistemas ERP Sapiens.",
    ],
    results: [
      "Contribuição para a continuidade operacional das aplicações por meio da sustentação de sistemas web e da manutenção de sistemas legados.",
      "Aprimoramento de aplicações existentes mediante correção de falhas e implementação de melhorias no ERP Sapiens.",
    ],
  },
  {
    role: "Analista de Suporte | Desenvolvedor PHP",
    company: "Mouts TI",
    period: "2022 – 2022",
    activities: [
      "Atendimento e suporte técnico aos clientes externos.",
      "Auxílio a usuários na resolução de problemas relacionados aos sistemas.",
      "Manutenção de sistemas legados.",
      "Implementação de melhorias e correção de falhas em aplicações desenvolvidas com PHP e Laravel.",
      "Desenvolvimento e manutenção de funcionalidades utilizando JavaScript no front-end e no back-end.",
    ],
    results: [
      "Contribuição para a manutenção e o funcionamento das aplicações por meio do suporte técnico e da correção de falhas.",
      "Apoio à evolução dos sistemas mediante melhorias e manutenção de aplicações desenvolvidas em PHP, Laravel e JavaScript.",
    ],
  },
  {
    role: "Analista de Suporte Nível II",
    company: "Altenburg",
    period: "2021 – 2022",
    activities: [
      "Suporte aos clientes internos, atendendo às demandas relacionadas aos sistemas corporativos.",
      "Desenvolvimento e manutenção de triggers, stored procedures e functions.",
      "Desenvolvimento e manutenção de telas customizadas, relatórios e webservices no ERP Senior.",
      "Implementação e manutenção de regras por eventos no sistema ERP.",
      "Análise de processos fabris e implementação de customizações voltadas à melhoria e à eficiência dos processos da fábrica e da qualidade.",
    ],
    results: [
      "Contribuição para a adequação do ERP Senior às necessidades dos processos fabris por meio do desenvolvimento e da manutenção de funcionalidades customizadas.",
      "Apoio à melhoria dos processos operacionais e da qualidade por meio da análise de processos e da implementação de soluções nos sistemas.",
    ],
  },
];

const skills = [
  "Análise e Sustentação de Sistemas",
  "Desenvolvimento Web",
  "Node.js",
  "JavaScript",
  "TypeScript",
  "AngularJS",
  "PHP",
  "Laravel",
  "Sistemas ERP Senior/Sapiens",
  "LSP",
  "Integração de Sistemas",
  "APIs REST",
  "Webservices",
  "Banco de dados relacional (Triggers, Stored Procedures e Functions)",
  "Banco de dados orientado a documentos (NoSQL)",
  "Git e versionamento de código",
  "Kanban",
  "Scrum",
];

const courses = [
  "Design Responsivo com Bootstrap | Clarify",
  "Entra21 | Blusoft",
  "Node.js: Inovando com JavaScript no Backend | Alura",
  "UX: O Que é Experiência de Usuário | Alura",
  "MongoDB: Uma Alternativa aos Bancos Relacionais Tradicionais | Alura",
  "TypeScript Parte 1: Evoluindo seu JavaScript | Alura",
];

export default function CurriculoPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-gray-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Cabeçalho */}
      <header className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Diego Armando Cacilha
        </h1>
        <p className="mt-1 text-lg text-gray-600">
          Desenvolvedor Full Stack | Analista de Sistemas
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
          <li>Blumenau – SC</li>
          <li>
            <a
              href="mailto:cacilha.tec@gmail.com"
              className="text-blue-600 hover:underline"
            >
              cacilha.tec@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/diegocacilha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/diegocacilha
            </a>
          </li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <a
            href="/resume.json"
            className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Baixar currículo em JSON
          </a>
          <a
            href="/api/profile"
            className="rounded-md border border-blue-600 px-4 py-2 font-medium text-blue-600 hover:bg-blue-50"
          >
            Perfil para agentes de IA
          </a>
        </div>
      </header>

      {/* Resumo */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Resumo Profissional
        </h2>
        <p className="mt-2 leading-relaxed text-gray-700">
          Sou profissional de Tecnologia da Informação, com mais de 10 anos de
          experiência em análise e desenvolvimento de sistemas, suporte técnico,
          sustentação de aplicações e manutenção de sistemas legados. Possuo
          experiência no atendimento a clientes internos e externos, suporte a
          usuários de sistemas ERP, implementação de customizações e integração
          entre sistemas. Tenho conhecimentos em Node.js, JavaScript, AngularJS e
          LSP, além de experiência com sistemas Senior/Sapiens, desenvolvimento
          de relatórios, webservices e regras de negócio. Minha trajetória
          inclui atuação em ambientes industriais, sistemas de gestão
          empresarial e plataformas de educação a distância. Atuo na
          identificação e correção de falhas, manutenção de aplicações e
          implementação de melhorias em sistemas e processos. Busco contribuir
          com minha experiência técnica, capacidade analítica e foco na
          resolução de problemas para o desenvolvimento e a sustentação de
          soluções tecnológicas eficientes.
        </p>
      </section>

      {/* Competências */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">Competências</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Experiência */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Experiência Profissional
        </h2>
        <div className="mt-4 space-y-8">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.period}`}>
              <h3 className="text-lg font-semibold text-gray-900">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-600">
                {exp.company} · {exp.period}
              </p>
              <h4 className="mt-2 text-sm font-semibold text-gray-800">
                Atividades
              </h4>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-700">
                {exp.activities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h4 className="mt-2 text-sm font-semibold text-gray-800">
                Resultados
              </h4>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-gray-700">
                {exp.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Formação */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Formação Acadêmica
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
          <li>
            Curso Superior – Análise e Desenvolvimento de Sistemas | Instituto
            Federal Catarinense (IFC) | Até o 4º semestre – curso não concluído.
          </li>
          <li>
            Curso Técnico – Redes de Computadores | SENAI | 2009 – 2010.
          </li>
        </ul>
      </section>

      {/* Cursos */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Cursos Complementares
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
          {courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </section>

      {/* Idioma */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">Idioma</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">
          <li>Inglês – Básico.</li>
        </ul>
      </section>

      {/* Carta de apresentação */}
      <section className="mt-8 border-t border-gray-200 pt-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Carta de Apresentação
        </h2>
        <div className="mt-2 space-y-3 leading-relaxed text-gray-700">
          <p>
            Sou profissional de Tecnologia da Informação, com mais de 10 anos de
            experiência em análise e desenvolvimento de sistemas, sustentação de
            aplicações, suporte técnico e manutenção de sistemas legados. Ao
            longo da minha trajetória, atuei em ambientes corporativos e
            industriais, contribuindo para a continuidade operacional dos
            sistemas, a resolução de problemas técnicos e a implementação de
            melhorias nas aplicações e nos processos de negócio.
          </p>
          <p>
            Possuo conhecimentos em desenvolvimento web com Node.js,
            JavaScript, PHP, Laravel e AngularJS, além de experiência com
            sistemas ERP Senior/Sapiens, linguagem LSP, desenvolvimento de APIs
            REST, webservices, relatórios customizados e integração entre
            sistemas. Tenho também conhecimentos em bancos de dados relacionais
            e NoSQL, incluindo triggers, stored procedures e functions, além de
            familiaridade com metodologias ágeis, como Scrum e Kanban, e
            ferramentas de versionamento de código.
          </p>
          <p>
            Minha experiência profissional inclui suporte a usuários internos e
            externos, análise e correção de falhas, manutenção de aplicações,
            sustentação de sistemas customizados e desenvolvimento de
            funcionalidades alinhadas às necessidades do negócio. Sou um
            profissional analítico, comprometido com a qualidade das entregas e
            orientado à resolução de problemas, buscando desenvolver soluções
            tecnológicas eficientes, seguras e capazes de agregar valor às
            operações.
          </p>
          <p>
            Busco uma oportunidade como Desenvolvedor Full Stack para aplicar
            meus conhecimentos técnicos, ampliar minha atuação no desenvolvimento
            de soluções web e contribuir para a evolução de sistemas, a
            integração de tecnologias e a melhoria contínua dos processos,
            colaborando com equipes multidisciplinares e com os objetivos
            estratégicos da organização.
          </p>
          <p className="pt-2 font-medium text-gray-800">
            Atenciosamente,
            <br />
            Diego Armando Cacilha
          </p>
        </div>
      </section>
    </main>
  );
}