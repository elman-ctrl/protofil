'use client';

import { useLang } from './lang-provider';

export function Hero() {
  const { t } = useLang();

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
          maskImage: 'radial-gradient(ellipse at 30% 20%, black 0%, transparent 70%)',
        }}
      />

      <div className="wrap relative z-10">
        <div className="mono mb-6 flex items-center gap-2 text-[13px] tracking-wide text-copper-bright">
          <span className="inline-block h-2 w-2 bg-gold shadow-[0_0_0_4px_rgba(201,162,39,0.22)]" />
          {t('در دسترس برای همکاری و پروژه', 'Available for collaboration & freelance work')}
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
          {t('المان فتوحی', 'Elman Fotouhi')}
        </h1>

        <p className="mb-8 max-w-2xl text-[clamp(1.05rem,2.2vw,1.3rem)] font-medium text-[#AEC0B8]">
          {t(
            'در مسیر تخصصی ',
            'Professional competency in ',
          )}
          <strong className="font-bold text-white">
            {t('مهندسی شبکه', 'Network Engineering')}
          </strong>
          {t(' و ', ' and ')}
          <strong className="font-bold text-white">DevOps</strong>
          {t(
            ' — از پیکربندی VPN و زیرساخت شبکه تا اتوماسیون دیپلوی و مدیریت سرور.',
            ' — from VPN configuration and network infrastructure to deployment automation and server administration.',
          )}
        </p>

        <div className="mb-10 flex flex-wrap gap-x-8 gap-y-4 text-[13.5px] font-semibold text-[#C7D4CD]">
          <span>{t('زیرساخت سرور', 'Server infra')}</span>
          <span>{t('شبکه و VPN', 'Networking & VPN')}</span>
          <span>{t('اتوماسیون CI/CD', 'CI/CD automation')}</span>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary chamfer-sm">
            {t('مشاهده پروژه‌ها', 'View Projects')}
          </a>
          <a href="mailto:Elmanfotouhi@gmail.com" className="btn btn-ghost chamfer-sm">
            {t('تماس با من', 'Contact Me')}
          </a>
        </div>

        <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { n: '6', fa: 'پروژه', en: 'Projects' },
            { n: '20+', fa: 'ابزار', en: 'Tools' },
            { n: '31', fa: 'مبحث مستند', en: 'Docs' },
            { n: '4', fa: 'مرحله مسیر', en: 'Stages' },
          ].map((s) => (
            <div key={s.en} className="border border-white/10 bg-white/5 px-3 py-3">
              <div className="mono text-2xl font-bold text-copper-bright">{s.n}</div>
              <div className="mt-1 text-xs text-[#AEC0B8]">{t(s.fa, s.en)}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
