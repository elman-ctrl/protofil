'use client';

import type { Project } from '@/lib/types';
import { useLang } from './lang-provider';

function asList(value: unknown, locale: 'fa' | 'en'): string[] {
  if (!value || typeof value !== 'object') return [];
  const obj = value as { fa?: string[]; en?: string[] };
  return (locale === 'fa' ? obj.fa : obj.en) ?? [];
}

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const { t, locale } = useLang();

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="eyebrow">{t('پروژه‌ها', 'Projects')}</div>
        <h2 className="mb-10 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-ink">
          {t('نمونه‌کارهای فنی', 'Technical Case Studies')}
        </h2>

        <div className="flex flex-col gap-4">
          {projects.map((project) => {
            const features = asList(project.features, locale);
            const challenges = asList(project.challenges, locale);
            return (
              <article
                key={project.id}
                className="card p-6 transition hover:border-copper hover:shadow-[0_10px_28px_rgba(17,33,29,0.06)]"
              >
                <h3 className="mb-2 text-[17.5px] font-bold text-ink">
                  {locale === 'fa' ? project.titleFa : project.titleEn}
                </h3>
                <p className="mb-4 text-[14.5px] text-slate">
                  {locale === 'fa' ? project.descriptionFa : project.descriptionEn}
                </p>

                <div className="mb-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <h5 className="mono mb-2 text-[10.5px] uppercase tracking-wide text-copper">
                      {t('ویژگی‌ها', 'Features')}
                    </h5>
                    <ul className="space-y-1 text-[13.3px] text-slate">
                      {features.map((item) => (
                        <li key={item} className="relative ps-3.5 before:absolute before:start-0 before:content-['–'] before:text-slate-light">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="mono mb-2 text-[10.5px] uppercase tracking-wide text-copper">
                      {t('چالش‌های حل‌شده', 'Challenges Solved')}
                    </h5>
                    <ul className="space-y-1 text-[13.3px] text-slate">
                      {challenges.map((item) => (
                        <li key={item} className="relative ps-3.5 before:absolute before:start-0 before:content-['–'] before:text-slate-light">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tag) => (
                    <span
                      key={tag}
                      className="mono border border-line bg-paper px-2.5 py-1 text-[11.5px] text-teal-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
