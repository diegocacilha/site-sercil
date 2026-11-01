// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Regra geral: mantém o comportamento atual do site
      {
        userAgent: '*',
        allow: '/',
        disallow: '/politica-de-privacidade',
      },

      // Crawlers de IA — permitidos explicitamente nos recursos do currículo
      {
        userAgent: [
          'GPTBot',            // OpenAI
          'OAI-SearchBot',     // OpenAI (busca)
          'ChatGPT-User',      // ChatGPT (navegação sob demanda)
          'ClaudeBot',         // Anthropic
          'Claude-Web',        // Anthropic
          'anthropic-ai',      // Anthropic
          'PerplexityBot',     // Perplexity
          'Google-Extended',   // Google (uso em IA generativa)
          'Applebot-Extended', // Apple
          'CCBot',             // Common Crawl
          'Bytespider',        // ByteDance
          'Amazonbot',         // Amazon
          'Meta-ExternalAgent',// Meta
          'cohere-ai',         // Cohere
        ],
        allow: [
          '/',
          '/curriculo',
          '/resume.json',
          '/api/profile',
          '/schemas/',
          '/llms.txt',
        ],
        disallow: '/politica-de-privacidade',
      },
    ],
    sitemap: 'https://www.sercil.com.br/sitemap.xml',
    host: 'https://www.sercil.com.br',
  }
}