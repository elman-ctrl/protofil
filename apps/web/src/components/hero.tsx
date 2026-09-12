'use client';

import type { SiteHero, SiteStat } from '@/lib/types';
import { useLang } from './lang-provider';

const fallbackHero: SiteHero = {
  availabilityFa: 'در دسترس برای همکاری و پروژه',
  availabilityEn: 'Available for collaboration & freelance work',
  nameFa: 'المان فتوحی',
  nameEn: 'Elman Fotouhi',
  roleBeforeFa: 'در مسیر تخصصی ',
  roleBeforeEn: 'Professional competency in ',
  roleNetworkFa: 'مهندسی شبکه',
  roleNetworkEn: 'Network Engineering',
  roleMidFa: ' و ',
  roleMidEn: ' and ',
  roleAfterFa:
    ' — از پیکربندی VPN و زیرساخت شبکه تا اتوماسیون دیپلوی و مدیریت سرور.',
  roleAfterEn:
    ' — from VPN configuration and network infrastructure to deployment automation and server administration.',
  caps: [
    { fa: 'زیرساخت سرور', en: 'Server infra' },
    { fa: 'شبکه و VPN', en: 'Networking & VPN' },
    { fa: 'اتوماسیون CI/CD', en: 'CI/CD automation' },
  ],
  ctaProjectsFa: 'مشاهده پروژه‌ها',
  ctaProjectsEn: 'View Projects',
  ctaContactFa: 'تماس با من',
  ctaContactEn: 'Contact Me',
  email: 'Elmanfotouhi@gmail.com',
};

export function Hero({
  hero,
  stats,
}: {
  hero?: SiteHero | null;
  stats?: SiteStat[] | null;
}) {
  const { t, locale } = useLang();
  const h = hero ?? fallbackHero;
  const s =
    stats ??
    ([
      { n: '6', fa: 'پروژه', en: 'Projects' },
      { n: '20+', fa: 'ابزار', en: 'Tools' },
      { n: '31', fa: 'مبحث مستند', en: 'Docs' },
      { n: '4', fa: 'مرحله مسیر', en: 'Stages' },
    ] as SiteStat[]);

  return (
    <header
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden pb-20 pt-[calc(var(--nav-h)+3rem)] text-[#EEF3F0]"
      style={{
        background:
          'radial-gradient(ellipse at top left, rgba(214,138,78,0.10) 0%, transparent 55%), linear-gradient(165deg, #0A211E 0%, #0F2C28 55%, #163B35 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          maskImage:
            'radial-gradient(ellipse at 30% 20%, black 0%, transparent 70%)',
        }}
      />

      <div className="wrap relative z-10">
        <div className="mono mb-6 flex items-center gap-2 text-[13px] tracking-wide text-copper-bright">
          <span className="inline-block h-2 w-2 bg-gold shadow-[0_0_0_4px_rgba(201,162,39,0.22)]" />
          {locale === 'fa' ? h.availabilityFa : h.availabilityEn}
        </div>

        <h1
          className="mb-4 text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold tracking-tight"
          style={{
            background: 'linear-gradient(95deg, #F4F1EA 0%, #D68A4E 130%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {locale === 'fa' ? h.nameFa : h.nameEn}
        </h1>

        <p className="mb-8 max-w-2xl text-[clamp(1.05rem,2.2vw,1.3rem)] font-medium text-[#AEC0B8]">
          {locale === 'fa' ? h.roleBeforeFa : h.roleBeforeEn}
          <strong className="font-bold text-white">
            {locale === 'fa' ? h.roleNetworkFa : h.roleNetworkEn}
          </strong>
          {locale === 'fa' ? h.roleMidFa : h.roleMidEn}
          <strong className="font-bold text-white">DevOps</strong>
          {locale === 'fa' ? h.roleAfterFa : h.roleAfterEn}
        </p>

        <div className="mb-10 flex flex-wrap gap-x-8 gap-y-4 text-[13.5px] font-semibold text-[#C7D4CD]">
          {h.caps.map((cap) => (
            <span key={cap.en}>{locale === 'fa' ? cap.fa : cap.en}</span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary chamfer-sm">
            {locale === 'fa' ? h.ctaProjectsFa : h.ctaProjectsEn}
          </a>
          <a href={`mailto:${h.email}`} className="btn btn-ghost chamfer-sm">
            {locale === 'fa' ? h.ctaContactFa : h.ctaContactEn}
          </a>
        </div>

        <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
          {s.map((stat) => (
            <div
              key={stat.en}
              className="border border-white/10 bg-white/5 px-3 py-3"
            >
              <div className="mono text-2xl font-bold text-copper-bright">
                {stat.n}
              </div>
              <div className="mt-1 text-xs text-[#AEC0B8]">
                {t(stat.fa, stat.en)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
