'use client';

import Link from 'next/link';
import { ResumeDocument } from '@/components/resume-document';
import { resumeDocument } from '@/lib/resume-content';
import { useLang } from '@/components/lang-provider';

export default function ResumePrintPage() {
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-paper px-4 py-8 text-ink print:bg-white print:px-0 print:py-0">
      <div className="resume-print-bar mx-auto mb-6 flex max-w-[210mm] flex-wrap items-center justify-between gap-3">
        <Link href="/#resume" className="text-sm font-semibold text-copper">
          {t('← بازگشت به سایت', '← Back to site')}
        </Link>
        <div className="flex flex-wrap gap-2">
          <a
            href={resumeDocument.pdfHref}
            download
            className="btn chamfer-sm border border-line bg-transparent text-ink hover:border-copper"
          >
            {t('دانلود PDF', 'Download PDF')}
          </a>
          <button
            type="button"
            className="btn btn-primary chamfer-sm"
            onClick={() => window.print()}
          >
            {t('چاپ / ذخیره PDF', 'Print / Save PDF')}
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-[210mm] shadow-[0_12px_40px_rgba(15,44,40,0.08)] print:max-w-none print:shadow-none">
        <ResumeDocument />
      </div>
    </div>
  );
}
