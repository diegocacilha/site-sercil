import { statSync } from 'fs';
import path from 'path';

const SAO_PAULO_TZ = 'America/Sao_Paulo';

function toSaoPauloISOString(date: Date): string {
  // Componentes de data/hora no fuso de São Paulo
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: SAO_PAULO_TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);

  const get = (type: string) =>
    parts.find((p) => p.type === type)?.value ?? '00';

  // Offset do fuso naquele instante específico (ex.: "-03:00")
  const offsetName =
    new Intl.DateTimeFormat('en-US', {
      timeZone: SAO_PAULO_TZ,
      timeZoneName: 'longOffset',
    })
      .formatToParts(date)
      .find((p) => p.type === 'timeZoneName')?.value ?? 'GMT-03:00';

  const offset =
    offsetName === 'GMT' ? '+00:00' : offsetName.replace('GMT', '');

  return `${get('year')}-${get('month')}-${get('day')}T${get('hour')}:${get('minute')}:${get('second')}${offset}`;
}

export function getFileLastModified(filePath: string): string {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    const stats = statSync(fullPath);
    return toSaoPauloISOString(stats.mtime);
  } catch (error) {
    return toSaoPauloISOString(new Date());
  }
}