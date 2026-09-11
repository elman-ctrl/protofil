'use client';

import type { SiteHero } from '@/lib/types';
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
  caps: [],
  ctaProjectsFa: 'مشاهده پروژه‌ها',
  ctaProjectsEn: 'View Projects',
  ctaContactFa: 'تماس با من',
  ctaContactEn: 'Contact Me',
  email: 'Elmanfotouhi@gmail.com',
};

export function Hero({ hero }: { hero?: SiteHero | null }) {
  const { locale } = useLang();
  const h = hero ?? fallbackHero;

  return (
    <header
      id="top"
      className="relative flex min-h-[72vh] items-center pb-16 pt-[calc(var(--nav-h)+3rem)] text-[#EEF3F0]"
      style={{
        background: 'linear-gradient(165deg, #0A211E 0%, #0F2C28 55%, #163B35 100%)',
      }}
    >
      <div className="wrap relative z-10">
        <p className="mb-5 text-sm text-copper-bright">
          {locale === 'fa' ? h.availabilityFa : h.availabilityEn}
        </p>

        <h1 className="mb-4 text-[clamp(2.1rem,4.5vw,3.2rem)] font-extrabold tracking-tight text-[#F4F1EA]">
          {locale === 'fa' ? h.nameFa : h.nameEn}
        </h1>

        <p className="mb-8 max-w-xl text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-[#AEC0B8]">
          {locale === 'fa' ? h.roleBeforeFa : h.roleBeforeEn}
          <strong className="font-bold text-white">
            {locale === 'fa' ? h.roleNetworkFa : h.roleNetworkEn}
          </strong>
          {locale === 'fa' ? h.roleMidFa : h.roleMidEn}
          <strong className="font-bold text-white">DevOps</strong>
          {locale === 'fa' ? h.roleAfterFa : h.roleAfterEn}
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary chamfer-sm">
            {locale === 'fa' ? h.ctaProjectsFa : h.ctaProjectsEn}
          </a>
          <a href="#resume" className="btn btn-ghost chamfer-sm">
            {locale === 'fa' ? 'رزومه' : 'Resume'}
          </a>
          <a href="#contact" className="btn btn-ghost chamfer-sm">
            {locale === 'fa' ? h.ctaContactFa : h.ctaContactEn}
          </a>
        </div>
      </div>
    </header>
  );
}
