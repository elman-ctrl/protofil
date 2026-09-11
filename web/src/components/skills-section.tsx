'use client';

import type { SkillCategory } from '@/lib/types';
import { useLang } from './lang-provider';

export function SkillsSection({ categories }: { categories: SkillCategory[] }) {
  const { t, locale } = useLang();

  if (!categories.length) return null;

  return (
    <section id="skills" className="section border-y border-line bg-paper-raised">
      <div className="wrap">
        <div className="eyebrow">{t('مهارت‌ها', 'Skills')}</div>
        <h2 className="mb-8 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-ink">
          {t('ابزارها و فناوری‌ها', 'Tools & Technologies')}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.id}>
              <h3 className="mb-3 text-[15px] font-bold text-ink">
                {locale === 'fa' ? cat.nameFa : cat.nameEn}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="border border-line bg-paper px-2.5 py-1 text-[12.5px] text-slate"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
