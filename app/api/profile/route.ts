// app/api/profile/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-static"; // ou "force-dynamic" se quiser ler de um banco

const profile = {
  $schema: "https://www.sercil.com.br/schemas/professional-profile/v1.json",
  schemaVersion: "1.0.0",
  lastUpdated: "2026-11-01T00:00:00Z",
  canonicalUrl: "https://www.sercil.com.br/api/profile",
  resumeUrl: "https://www.sercil.com.br/resume.json",
  humanReadableUrl: "https://www.sercil.com.br/curriculo",

  identity: {
    id: "https://www.sercil.com.br/#person",
    name: "Diego Armando Cacilha",
    preferredName: "Diego Cacilha",
    headline: "Desenvolvedor Full Stack | Analista de Sistemas",
    summary:
      "Profissional de Tecnologia da Informação com mais de 10 anos de experiência em análise e desenvolvimento de sistemas, sustentação de aplicações, suporte técnico e manutenção de sistemas legados. Atuação em ambientes corporativos e industriais, com foco em continuidade operacional, resolução de problemas técnicos e implementação de melhorias em aplicações e processos de negócio.",
    location: {
      city: "Blumenau",
      region: "SC",
      countryCode: "BR",
      timezone: "America/Sao_Paulo",
      remoteFriendly: true,
    },
    contact: {
      email: "cacilha.tec@gmail.com",
      linkedin: "https://www.linkedin.com/in/diegocacilha",
      website: "https://www.sercil.com.br",
    },
    languages: [
      { language: "Português", level: "native" },
      { language: "Inglês", level: "basic" },
    ],
  },

  professionalProfile: {
    workModel: ["remote", "hybrid", "onsite"],
    employmentTypes: ["full-time", "contract", "pj"],
    seniority: "senior",
    yearsOfExperience: 10,
    areas: [
      "backend development",
      "full-stack development",
      "system sustainment",
      "system integration",
      "ERP customization",
    ],
    interests: [
      "desenvolvimento backend",
      "desenvolvimento full-stack",
      "arquitetura de software",
      "integração de sistemas",
      "APIs REST",
      "sustentação de sistemas",
    ],
    availability: {
      status: "open_to_opportunities",
      noticePeriod: "a combinar",
      willingToRelocate: false,
    },
    salaryExpectation: {
      disclosed: false,
      note: "Pretensão salarial disponível sob demanda.",
    },
  },

  skills: [
    { name: "Node.js", category: "backend", level: "advanced", yearsOfExperience: 4, keywords: ["Express", "APIs REST"] },
    { name: "JavaScript", category: "language", level: "advanced", yearsOfExperience: 6, keywords: ["front-end", "back-end"] },
    { name: "TypeScript", category: "language", level: "intermediate", yearsOfExperience: 2, keywords: [] },
    { name: "AngularJS", category: "frontend", level: "intermediate", yearsOfExperience: 3, keywords: [] },
    { name: "PHP", category: "backend", level: "advanced", yearsOfExperience: 5, keywords: ["Laravel"] },
    { name: "Laravel", category: "backend", level: "intermediate", yearsOfExperience: 3, keywords: [] },
    { name: "LSP (Senior)", category: "erp", level: "advanced", yearsOfExperience: 5, keywords: ["ERP Sapiens", "rotinas customizadas"] },
    { name: "ERP Senior/Sapiens", category: "erp", level: "advanced", yearsOfExperience: 6, keywords: ["relatórios", "webservices", "regras por eventos"] },
    { name: "APIs REST", category: "integration", level: "advanced", yearsOfExperience: 5, keywords: ["webservices", "integração entre sistemas"] },
    { name: "Banco de dados relacional", category: "database", level: "advanced", yearsOfExperience: 6, keywords: ["triggers", "stored procedures", "functions"] },
    { name: "MongoDB", category: "database", level: "intermediate", yearsOfExperience: 2, keywords: ["NoSQL"] },
    { name: "Git", category: "tooling", level: "advanced", yearsOfExperience: 6, keywords: ["versionamento"] },
    { name: "Scrum", category: "methodology", level: "intermediate", yearsOfExperience: 4, keywords: [] },
    { name: "Kanban", category: "methodology", level: "intermediate", yearsOfExperience: 3, keywords: [] },
    { name: "Análise e sustentação de sistemas", category: "analysis", level: "advanced", yearsOfExperience: 10, keywords: ["sistemas legados", "correção de falhas"] },
  ],

  experience: [
    {
      company: "Juréia Alimentos",
      role: "Analista de Sistemas Sênior",
      startDate: "2023-01",
      endDate: "2023-12",
      location: "Brasil",
      workModel: "onsite",
      description:
        "Suporte ao ERP Sapiens, manutenção de rotinas customizadas em LSP e integração entre sistemas.",
      highlights: [
        "Atendimento aos clientes internos e suporte aos usuários do sistema ERP Sapiens.",
        "Manutenção e implantação de rotinas customizadas em LSP (Senior Sistemas).",
        "Integração entre diferentes sistemas.",
        "Apoio a contratos de Tecnologia da Informação.",
      ],
      technologies: ["LSP", "ERP Sapiens", "Senior Sistemas", "Webservices"],
    },
    {
      company: "Prestação de serviços em Tecnologia da Informação",
      role: "Analista de Sistemas Sênior | Sustentação de Sistema Customizado",
      startDate: "2022-01",
      endDate: "2023-12",
      location: "Brasil",
      workModel: "remote",
      description:
        "Sustentação de sistemas web, desenvolvimento com PHP e Node.js e manutenção de sistemas legados.",
      highlights: [
        "Sustentação e manutenção de sistemas web.",
        "Desenvolvimento de aplicações web com PHP e Node.js.",
        "Manutenção de sistemas legados.",
        "Correção de falhas e melhorias no ERP Sapiens.",
      ],
      technologies: ["PHP", "Node.js", "ERP Sapiens"],
    },
    {
      company: "Mouts TI",
      role: "Analista de Suporte | Desenvolvedor PHP",
      startDate: "2022-01",
      endDate: "2022-12",
      location: "Brasil",
      workModel: "remote",
      description:
        "Suporte técnico a clientes externos, manutenção de sistemas legados e desenvolvimento com PHP, Laravel e JavaScript.",
      highlights: [
        "Atendimento e suporte técnico aos clientes externos.",
        "Manutenção de sistemas legados.",
        "Melhorias e correções em aplicações PHP e Laravel.",
        "Desenvolvimento de funcionalidades em JavaScript (front e back-end).",
      ],
      technologies: ["PHP", "Laravel", "JavaScript"],
    },
    {
      company: "Altenburg",
      role: "Analista de Suporte Nível II",
      startDate: "2021-01",
      endDate: "2022-12",
      location: "Brasil",
      workModel: "onsite",
      description:
        "Suporte a sistemas corporativos, desenvolvimento no ERP Senior e análise de processos fabris.",
      highlights: [
        "Desenvolvimento e manutenção de triggers, stored procedures e functions.",
        "Desenvolvimento de telas customizadas, relatórios e webservices no ERP Senior.",
        "Implementação de regras por eventos no ERP.",
        "Análise de processos fabris e customizações para melhoria e qualidade.",
      ],
      technologies: ["ERP Senior", "SQL", "Webservices", "Triggers", "Stored Procedures"],
    },
  ],

  education: [
    {
      institution: "Instituto Federal Catarinense (IFC)",
      area: "Análise e Desenvolvimento de Sistemas",
      studyType: "Curso Superior",
      status: "incomplete",
      note: "Até o 4º semestre – curso não concluído.",
    },
    {
      institution: "SENAI",
      area: "Redes de Computadores",
      studyType: "Curso Técnico",
      startDate: "2009",
      endDate: "2010",
      status: "completed",
    },
  ],

  certificates: [
    { name: "Design Responsivo com Bootstrap", issuer: "Clarify" },
    { name: "Entra21", issuer: "Blusoft" },
    { name: "Node.js: Inovando com JavaScript no Backend", issuer: "Alura" },
    { name: "UX: O Que é Experiência de Usuário", issuer: "Alura" },
    { name: "MongoDB: Uma Alternativa aos Bancos Relacionais Tradicionais", issuer: "Alura" },
    { name: "TypeScript Parte 1: Evoluindo seu JavaScript", issuer: "Alura" },
  ],

  projects: [
    {
      name: "Sercil",
      url: "https://www.sercil.com.br",
      description:
        "Site pessoal com currículo estruturado em JSON Resume e perfil profissional acessível por agentes de IA.",
      role: "Desenvolvedor Full Stack",
      technologies: ["Next.js", "TypeScript", "Node.js", "JSON Resume", "JSON-LD"],
      status: "active",
    },
  ],

  verification: {
    declaredBy: "self",
    verifiedFields: [],
    note: "Informações declaradas pelo próprio candidato. Campos verificáveis (credenciais, experiências) podem ser adicionados futuramente via LER-RS ou Open Badges.",
    contactForVerification: "cacilha.tec@gmail.com",
  },

  aiHints: {
    preferredUse: [
      "Avaliar compatibilidade com vagas de desenvolvimento backend/full-stack.",
      "Identificar experiências com ERP Senior/Sapiens e LSP.",
      "Sugerir projetos ou tecnologias alinhadas ao histórico.",
    ],
    disallowedUse: [
      "Tomada de decisão automatizada sem supervisão humana.",
      "Contato comercial não solicitado.",
    ],
    contactPolicy: "Contato apenas por e-mail ou LinkedIn, com contexto claro da oportunidade.",
  },

  privacy: {
    publicFields: [
      "identity",
      "professionalProfile",
      "skills",
      "experience",
      "education",
      "certificates",
      "projects",
    ],
    withheldFields: ["phone", "fullAddress", "documents"],
    note: "Dados sensíveis (telefone, endereço completo, documentos) não são expostos publicamente.",
  },
};

export async function GET() {
  return NextResponse.json(profile, {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}