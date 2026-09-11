'use client';

import type { ResumePayload } from '@/lib/types';
import { useLang } from './lang-provider';

export function ResumeSection({ resume }: { resume: ResumePayload }) {
  const { t, locale } = useLang();
  const meta = resume.meta;

  return (
    <section id="resume" className="section border-t border-line bg-paper-raised">
      <div className="wrap">
        <div className="eyebrow">{t('رزومه', 'Resume')}</div>
        <h2 className="mb-3 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-ink">
          {t('خلاصه رزومه', 'Resume Summary')}
        </h2>
        <p className="mb-8 max-w-2xl text-slate">
          {t(
            'خلاصه‌ای فشرده از مسیر، تجربه عملی و مهارت‌ها — نسخه کامل PDF در بخش ارتباط قابل دانلوده.',
            'A compact summary of the path, hands-on experience, and skills — full PDF is downloadable in Contact.',
          )}
        </p>

        <div className="card p-6 shadow-[0_4px_18px_rgba(15,44,40,0.05)]">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-teal-900 pb-4">
            <h3 className="text-xl font-extrabold text-teal-900">
              {meta
                ? locale === 'fa'
                  ? meta.headlineFa
                  : meta.headlineEn
                : t('المان فتوحی', 'Elman Fotouhi')}
            </h3>
            <span className="mono text-[12.5px] text-slate">
              {meta
                ? locale === 'fa'
                  ? meta.locationFa
                  : meta.locationEn
                : ''}
            </span>
          </div>

          {meta && (
            <div className="mb-6">
              <h4 className="mono mb-2 text-xs uppercase tracking-wide text-copper">
                {t('خلاصه', 'Summary')}
              </h4>
              <p className="text-[14.5px] text-ink">
                {locale === 'fa' ? meta.summaryFa : meta.summaryEn}
              </p>
            </div>
          )}

          <div className="mb-6">
            <h4 className="mono mb-3 text-xs uppercase tracking-wide text-copper">
              {t('تجربه', 'Experience')}
            </h4>
            {resume.experiences.map((exp) => (
              <div key={exp.id} className="mb-3">
                <div className="text-[14.5px] font-bold text-ink">
                  {locale === 'fa' ? exp.titleFa : exp.titleEn}
                </div>
                <p className="mt-1 text-sm text-slate">
                  {locale === 'fa' ? exp.descriptionFa : exp.descriptionEn}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <h4 className="mono mb-3 text-xs uppercase tracking-wide text-copper">
              {t('پروژه‌های کلیدی', 'Key Projects')}
            </h4>
            {resume.keyProjects.map((p) => (
              <div key={p.id} className="mb-3">
                <div className="text-[14.5px] font-bold text-ink">
                  {locale === 'fa' ? p.titleFa : p.titleEn}
                </div>
                <p className="mt-1 text-sm text-slate">
                  {locale === 'fa' ? p.descriptionFa : p.descriptionEn}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-2">
            <h4 className="mono mb-3 text-xs uppercase tracking-wide text-copper">
              {t('مهارت‌های فنی به تفکیک', 'Technical Skills by Category')}
            </h4>
            {resume.skillGroups.map((group) => (
              <div key={group.id} className="mb-4">
                <div className="mb-2 text-[14.5px] font-bold text-ink">
                  {locale === 'fa' ? group.categoryNameFa : group.categoryNameEn}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(Array.isArray(group.skills) ? group.skills : []).map((skill) => (
                    <span
                      key={skill}
                      className="mono border border-line bg-paper px-2.5 py-1 text-[11.5px] text-slate"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <a href="/resume" className="btn btn-primary chamfer-sm">
              {t('نسخه قابل چاپ / PDF', 'Printable / PDF version')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
