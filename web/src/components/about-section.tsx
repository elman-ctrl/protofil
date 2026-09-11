'use client';

import { useLang } from './lang-provider';

export function AboutSection() {
  const { t } = useLang();

  const cards = [
    {
      titleFa: 'کیستم',
      titleEn: 'Who I Am',
      bodyFa:
        'دانشجوی مهندسی شبکه و DevOps هستم که یادگیری را از طریق ساختن زیرساخت‌های واقعی دنبال می‌کنم، نه فقط دوره دیدن.',
      bodyEn:
        "I'm someone learning network engineering and DevOps by building real infrastructure, not just taking courses.",
    },
    {
      titleFa: 'تخصص من',
      titleEn: 'What I Specialize In',
      bodyFa:
        'پیکربندی و امن‌سازی شبکه با MikroTik، تانل‌های VPN، و مدیریت کامل سرورهای لینوکسی از جمله زیرساخت ایمیل.',
      bodyEn:
        'Network configuration and security with MikroTik, VPN tunneling, and full Linux server administration including email infrastructure.',
    },
    {
      titleFa: 'مسئله‌هایی که حل می‌کنم',
      titleEn: 'Problems I Solve',
      bodyFa:
        'اتصال امن بین شبکه‌ها، راه‌اندازی زیرساخت سرویس‌های حیاتی مثل ایمیل، و اتوماسیون فرآیندهای دیپلوی برای کاهش خطای انسانی.',
      bodyEn:
        'Secure connectivity between networks, standing up infrastructure for critical services like email, and automating deployment workflows to reduce human error.',
    },
    {
      titleFa: 'فلسفه کاری من',
      titleEn: 'My Development Philosophy',
      bodyFa:
        'قبل از اجرا، کامل بفهم. مستند کن. اول در محیط ایزوله تست کن. پایداری را فدای سرعت نکن.',
      bodyEn:
        'Understand fully before you execute. Document as you go. Test in isolation first. Never trade stability for speed.',
    },
  ];

  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="eyebrow">{t('درباره من', 'About Me')}</div>
        <h2 className="mb-8 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-ink">
          {t('یادگیری ساخت‌یافته، پروژه‌محور', 'Structured, Project-Driven Learning')}
        </h2>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.titleEn}
              className="border-s-[3px] border-copper px-4 py-1"
            >
              <h4 className="mono mb-1.5 text-[11.5px] uppercase tracking-wide text-copper">
                {t(card.titleFa, card.titleEn)}
              </h4>
              <p className="text-[14.3px] text-slate">{t(card.bodyFa, card.bodyEn)}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="relative bg-teal-950 px-6 py-5 text-[#EEF3F0] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-copper before:to-gold">
            <h3 className="mono mb-4 text-xs uppercase tracking-wide text-copper-bright">
              {t('اصول کاری', 'Working Principles')}
            </h3>
            <ul className="space-y-2.5 text-[13.5px] text-[#B7C7BF]">
              {[
                [
                  'مستندسازی هر مرحله پیش از اجرا',
                  'Document every step before execution',
                ],
                [
                  'تست در محیط آزمایشی پیش از تغییر روی سرویس فعال',
                  'Test in a lab environment before touching live services',
                ],
                [
                  'اولویت با پایداری زیرساخت، نه سرعت',
                  'Prioritize infrastructure stability over speed',
                ],
                [
                  'یادگیری از طریق پیاده‌سازی واقعی، نه فقط تئوری',
                  'Learn through real implementation, not just theory',
                ],
              ].map(([fa, en]) => (
                <li key={en} className="relative ps-4 before:absolute before:start-0 before:font-bold before:text-sage before:content-['›']">
                  {t(fa, en)}
                </li>
              ))}
            </ul>
          </div>
          <blockquote className="border-s-[3px] border-copper px-5 py-2">
            <p className="text-[16.5px] font-semibold leading-relaxed text-ink">
              {t(
                'به یادگیری‌ای اعتقاد دارم که با ساختن همراه باشد، نه فقط خواندن.',
                'I believe in learning that comes from building, not just reading.',
              )}
            </p>
            <span className="mono mt-2 block text-xs text-slate-light">
              {t('— المان', '— Elman')}
            </span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
