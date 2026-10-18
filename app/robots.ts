// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/servicos'], 
      disallow: '/politica-de-privacidade', 
    },
    sitemap: 'https://www.sercil.com.br/sitemap.xml',
  }
}