'use client';

import { ResumeDocument } from './resume-document';
import { resumeDocument } from '@/lib/resume-content';
import { useLang } from './lang-provider';

export function ResumeSection() {
  const { t } = useLang();

  return (
    <section id="resume" className="section border-t border-line bg-paper-raised">
      <div className="wrap">
        <div className="eyebrow">{t('رزومه', 'Resume')}</div>
        <h2 className="mb-3 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-ink">
          {t('رزومه', 'Resume')}
        </h2>
        <p className="mb-6 max-w-xl text-slate">
          {t(
            'نسخه یک‌صفحه‌ای برای دانلود یا مشاهده کامل.',
            'One-page version to download or view in full.',
          )}
        </p>
        <div className="mb-6 flex flex-wrap gap-2">
          <a href={resumeDocument.pdfHref} download className="btn btn-primary chamfer-sm">
            {t('دانلود PDF', 'Download PDF')}
          </a>
          <a
            href="/resume"
            className="btn chamfer-sm border border-line bg-transparent text-ink hover:border-copper"
          >
            {t('مشاهده کامل', 'View full page')}
          </a>
        </div>
        <div className="resume-preview">
          <ResumeDocument />
        </div>
      </div>
    </section>
  );
}
