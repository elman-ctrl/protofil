'use client';

import { ResumeDocument } from './resume-document';
import { resumePdfHref } from '@/lib/resume-content';
import { useLang } from './lang-provider';

export function ResumeSection() {
  const { locale, t } = useLang();

  return (
    <section id="resume" className="section border-t border-line bg-paper-raised">
      <div className="wrap">
        <div className="eyebrow">{t('رزومه', 'Resume')}</div>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-ink">
              {t('رزومه', 'Resume')}
            </h2>
            <p className="text-slate">
              {t(
                'نسخه یک‌صفحه‌ای با فونت وزیرمتن — قابل مشاهده، چاپ و دانلود.',
                'One-page version in Vazirmatn — view, print, and download.',
              )}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={resumePdfHref(locale)}
              download
              className="btn btn-primary chamfer-sm"
            >
              {t('دانلود PDF', 'Download PDF')}
            </a>
            <a href="/resume" className="btn chamfer-sm border border-line bg-transparent text-ink hover:border-copper">
              {t('نسخه تمام‌صفحه', 'Full-page version')}
            </a>
          </div>
        </div>

        <div className="overflow-hidden shadow-[0_8px_28px_rgba(15,44,40,0.08)]">
          <ResumeDocument />
        </div>
      </div>
    </section>
  );
}
