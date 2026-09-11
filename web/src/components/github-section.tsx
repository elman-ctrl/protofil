'use client';

import { useLang } from './lang-provider';

const highlights = [
  {
    titleFa: 'پروفایل گیت‌هاب',
    titleEn: 'GitHub Profile',
    descFa:
      'مخزن‌ها، اسکریپت‌ها و مستندات فنی مرتبط با شبکه، لینوکس و DevOps.',
    descEn:
      'Repositories, scripts, and technical notes related to networking, Linux, and DevOps.',
    meta: 'elman-ctrl',
    href: 'https://github.com/elman-ctrl',
  },
  {
    titleFa: 'مستندسازی فنی',
    titleEn: 'Technical Documentation',
    descFa:
      'راهنماهای مرحله‌به‌مرحله برای MikroTik، VPN و راه‌اندازی سرویس‌های سرور.',
    descEn:
      'Step-by-step guides for MikroTik, VPN, and standing up server services.',
    meta: 'FA / EN',
    href: '#projects',
  },
  {
    titleFa: 'آزمایشگاه زیرساخت',
    titleEn: 'Infrastructure Lab',
    descFa:
      'محیط‌های تست ایزوله برای تانل، فیل‌اُور، CI/CD و مانیتورینگ قبل از دیپلوی واقعی.',
    descEn:
      'Isolated lab setups for tunnels, failover, CI/CD, and monitoring before live deploy.',
    meta: 'Lab-first',
    href: '#projects',
  },
  {
    titleFa: 'اتوماسیون و دیپلوی',
    titleEn: 'Automation & Deploy',
    descFa:
      'پایپلاین‌های GitHub Actions، دیپلوی SSH و استک‌های Docker برای سرویس‌های پایدار.',
    descEn:
      'GitHub Actions pipelines, SSH deploy, and Docker stacks for reliable services.',
    meta: 'CI/CD',
    href: '#skills',
  },
];

export function GithubSection() {
  const { t, locale } = useLang();

  return (
    <section id="github" className="section">
      <div className="wrap">
        <div className="eyebrow">{t('کد و مستندات', 'Code & Docs')}</div>
        <h2 className="mb-3 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-ink">
          {t('کار باز و مسیر فنی', 'Open Work & Technical Path')}
        </h2>
        <p className="mb-8 max-w-2xl text-slate">
          {t(
            'به‌جای لیست خام مخزن‌ها، اینجا مسیر کاری مرتبط با شبکه و زیرساخت را می‌بینی؛ جزئیات پروژه‌ها در بخش نمونه‌کارهاست.',
            'Instead of a raw repo dump, this highlights the networking and infrastructure path — full case studies live in Projects.',
          )}
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <a
              key={item.titleEn}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={
                item.href.startsWith('http') ? 'noopener noreferrer' : undefined
              }
              className="card block p-5 transition hover:-translate-y-0.5 hover:border-copper"
            >
              <div className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-copper">
                {item.meta}
              </div>
              <h3 className="mb-2 text-[16px] font-bold text-ink">
                {locale === 'fa' ? item.titleFa : item.titleEn}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-slate">
                {locale === 'fa' ? item.descFa : item.descEn}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="https://github.com/elman-ctrl"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary chamfer-sm"
          >
            {t('مشاهده پروفایل گیت‌هاب', 'View GitHub Profile')}
          </a>
        </div>
      </div>
    </section>
  );
}
