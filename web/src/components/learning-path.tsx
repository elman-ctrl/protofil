'use client';

import type { SitePathHop } from '@/lib/types';
import { useLang } from './lang-provider';

const fallbackHops: SitePathHop[] = [
  { num: '01', fa: 'پایه‌ها', en: 'Fundamentals', sub: 'Git · Docker · Linux' },
  { num: '02', fa: 'DevOps', en: 'DevOps', sub: 'CI/CD · GitHub Actions' },
  {
    num: '03',
    fa: 'زیرساخت سرور',
    en: 'Server Infrastructure',
    sub: 'Mail Server · DNS',
  },
  {
    num: '04',
    fa: 'شبکه و VPN',
    en: 'Networking & VPN',
    sub: 'MikroTik · WireGuard · L2TP',
  },
];

export function LearningPath({ hops }: { hops?: SitePathHop[] | null }) {
  const { t } = useLang();
  const items = hops?.length ? hops : fallbackHops;

  return (
    <section className="border-b border-line bg-paper-raised py-14">
      <div className="wrap">
        <div className="mono mb-8 text-[12.5px] uppercase tracking-wide text-slate-light">
          {t('مسیر یادگیری', 'Learning Path')}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((hop, i) => (
            <div key={hop.num} className="relative pt-7">
              {i < items.length - 1 && (
                <span className="absolute start-[7px] top-[7px] hidden h-0.5 w-[calc(100%+2rem)] bg-[repeating-linear-gradient(90deg,#DCE5DF_0_6px,transparent_6px_10px)] lg:block" />
              )}
              <span className="absolute start-0 top-0 h-3.5 w-3.5 rotate-45 border-[3px] border-paper-raised bg-copper shadow-[0_0_0_2px_#BC7139]" />
              <div className="mono mb-1.5 text-[11px] text-slate-light">
                {hop.num}
              </div>
              <div className="mb-1 text-[14.5px] font-bold text-ink">
                {t(hop.fa, hop.en)}
              </div>
              <div className="text-[12.5px] text-slate-light">{hop.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
