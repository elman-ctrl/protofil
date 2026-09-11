'use client';

import type { SiteAbout } from '@/lib/types';
import { useLang } from './lang-provider';

export function AboutSection({ about }: { about?: SiteAbout | null }) {
  const { t, locale } = useLang();

  if (!about) {
    return (
      <section id="about" className="section">
        <div className="wrap">
          <div className="eyebrow">{t('درباره من', 'About Me')}</div>
          <h2 className="text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-ink">
            {t('محتوا به‌زودی از API بارگذاری می‌شود', 'Content will load from the API')}
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="eyebrow">{t('درباره من', 'About Me')}</div>
        <h2 className="mb-8 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-ink">
          {locale === 'fa' ? about.titleFa : about.titleEn}
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {about.cards.map((card) => (
            <div key={card.titleEn} className="border-s-[3px] border-copper px-4 py-1">
              <h4 className="mb-1.5 text-sm font-bold text-ink">
                {locale === 'fa' ? card.titleFa : card.titleEn}
              </h4>
              <p className="text-[14.3px] text-slate">
                {locale === 'fa' ? card.bodyFa : card.bodyEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
