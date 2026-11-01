// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sercil.com.br'
  const currentDate = new Date().toISOString()
  const profileLastModified = '2026-11-01T00:00:00.000Z'

  return [
    // Página inicial
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Currículo (HTML)
    {
      url: `${baseUrl}/curriculo`,
      lastModified: profileLastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Currículo estruturado (JSON Resume)
    {
      url: `${baseUrl}/resume.json`,
      lastModified: profileLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Perfil enriquecido para agentes de IA
    {
      url: `${baseUrl}/api/profile`,
      lastModified: profileLastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Schema do perfil profissional
    {
      url: `${baseUrl}/schemas/professional-profile/v1.json`,
      lastModified: profileLastModified,
      changeFrequency: 'yearly',
      priority: 0.4,
    },

    // Serviços
    {
      url: `${baseUrl}/servicos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicos/sistemas-web-sob-medida`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicos/integracao-de-aplicacoes`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicos/automacao-de-processos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicos/dashboards-e-relatorios`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicos/backoffice-e-paineis-administrativos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/servicos/portais-corporativos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ]
}