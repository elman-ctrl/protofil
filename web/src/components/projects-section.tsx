'use client';

import type { Project } from '@/lib/types';
import { useLang } from './lang-provider';

export function ProjectsSection({ projects }: { projects: Project[] }) {
  const { t, locale } = useLang();

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="eyebrow">{t('پروژه‌ها', 'Projects')}</div>
        <h2 className="mb-8 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-ink">
          {t('نمونه‌کارها', 'Selected Work')}
        </h2>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <article key={project.id} className="card p-5">
              <h3 className="mb-2 text-[17px] font-bold text-ink">
                {locale === 'fa' ? project.titleFa : project.titleEn}
              </h3>
              <p className="mb-3 text-[14.5px] text-slate">
                {locale === 'fa' ? project.descriptionFa : project.descriptionEn}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tag) => (
                  <span
                    key={tag}
                    className="border border-line bg-paper px-2.5 py-1 text-[11.5px] text-teal-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {(project.repoUrl || project.demoUrl) && (
                <div className="mt-3 flex flex-wrap gap-4">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold text-copper"
                    >
                      {t('مخزن کد', 'Repository')}
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold text-copper"
                    >
                      {t('دمو', 'Demo')}
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
