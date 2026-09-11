'use client';

import { useEffect, useRef } from 'react';
import type { SkillCategory } from '@/lib/types';
import { useLang } from './lang-provider';

export function SkillsSection({ categories }: { categories: SkillCategory[] }) {
  const { t, locale } = useLang();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const bars = root.querySelectorAll<HTMLElement>('[data-fill]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.width = `${el.dataset.fill}%`;
          io.unobserve(el);
        });
      },
      { threshold: 0.3 },
    );
    bars.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, [categories]);

  return (
    <section id="skills" className="section border-y border-line bg-paper-raised">
      <div className="wrap" ref={ref}>
        <div className="eyebrow">{t('مهارت‌ها', 'Skills')}</div>
        <h2 className="mb-10 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-ink">
          {t(
            'ابزارها و فناوری‌هایی که با آن‌ها کار می‌کنم',
            'Tools & Technologies I Work With',
          )}
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="card border border-line bg-paper p-5 transition hover:-translate-y-0.5 hover:border-copper"
            >
              <h3 className="mb-5 flex items-center gap-2 text-[15.5px] font-bold text-ink">
                <span
                  className="inline-block h-2.5 w-2.5"
                  style={{ background: cat.iconColor }}
                />
                {locale === 'fa' ? cat.nameFa : cat.nameEn}
              </h3>
              <div className="space-y-3.5">
                {cat.skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="mb-1.5 flex justify-between text-[13.3px] text-slate">
                      <span>{skill.name}</span>
                    </div>
                    <div className="h-[5px] overflow-hidden bg-line">
                      <div
                        data-fill={skill.levelPercent}
                        className="h-full w-0 bg-gradient-to-r from-copper to-copper-bright transition-[width] duration-1000"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
