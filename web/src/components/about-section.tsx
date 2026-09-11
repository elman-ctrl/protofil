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

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {about.cards.map((card) => (
            <div
              key={card.titleEn}
              className="border-s-[3px] border-copper px-4 py-1"
            >
              <h4 className="mono mb-1.5 text-[11.5px] uppercase tracking-wide text-copper">
                {locale === 'fa' ? card.titleFa : card.titleEn}
              </h4>
              <p className="text-[14.3px] text-slate">
                {locale === 'fa' ? card.bodyFa : card.bodyEn}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative bg-teal-950 px-6 py-5 text-[#EEF3F0] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-copper before:to-gold">
            <h3 className="mono mb-4 text-xs uppercase tracking-wide text-copper-bright">
              {t('اصول کاری', 'Working Principles')}
            </h3>
            <ul className="space-y-2.5 text-[13.5px] text-[#B7C7BF]">
              {about.principles.map((p) => (
                <li
                  key={p.en}
                  className="relative ps-4 before:absolute before:start-0 before:font-bold before:text-sage before:content-['›']"
                >
                  {locale === 'fa' ? p.fa : p.en}
                </li>
              ))}
            </ul>
          </div>
          <blockquote className="border-s-[3px] border-copper px-5 py-2">
            <p className="text-[16.5px] font-semibold leading-relaxed text-ink">
              {locale === 'fa' ? about.quoteFa : about.quoteEn}
            </p>
            <span className="mono mt-2 block text-xs text-slate-light">
              {locale === 'fa' ? about.quoteByFa : about.quoteByEn}
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
