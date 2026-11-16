import { statSync } from 'fs';
import path from 'path';

export function getFileLastModified(filePath: string): string {
  try {
    // Resolve o caminho absoluto para o arquivo da página
    const fullPath = path.join(process.cwd(), filePath);
    const stats = statSync(fullPath);
    // Retorna a data no formato ISO 8601, ideal para o JSON-LD
    return stats.mtime.toISOString();
  } catch (error) {
    // Fallback para a data atual caso o arquivo não seja encontrado
    return new Date().toISOString();
  }
}