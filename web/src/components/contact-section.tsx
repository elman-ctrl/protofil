'use client';

import { FormEvent, useState } from 'react';
import { getApiBase } from '@/lib/api';
import { useLang } from './lang-provider';

export function ContactSection() {
  const { t } = useLang();
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('loading');
    try {
      const res = await fetch(`${getApiBase()}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(data.get('name') ?? ''),
          email: String(data.get('email') ?? ''),
          message: String(data.get('message') ?? ''),
        }),
      });
      if (!res.ok) throw new Error('fail');
      setStatus('ok');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      className="section relative overflow-hidden text-[#EEF3F0]"
      style={{
        background:
          'radial-gradient(ellipse at bottom right, rgba(188,113,57,0.14) 0%, transparent 55%), #0A211E',
      }}
    >
      <div className="wrap relative z-10">
        <div className="eyebrow !text-copper-bright before:!bg-copper-bright">
          {t('ارتباط', 'Contact')}
        </div>
        <h2 className="mb-3 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-white">
          {t('بیایید صحبت کنیم', "Let's Talk")}
        </h2>
        <p className="mb-8 max-w-2xl text-[#AEC0B8]">
          {t(
            'برای فرصت‌های همکاری، استخدام یا پروژه‌های فریلنس، از راه‌های زیر در دسترسم.',
            "I'm reachable through the channels below for collaboration, hiring, or freelance opportunities.",
          )}
        </p>

        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icoFa: 'ایمیل',
              icoEn: 'Email',
              val: 'Elmanfotouhi@gmail.com',
              href: 'mailto:Elmanfotouhi@gmail.com',
              subFa: 'پاسخ‌گویی طی ۱ تا ۲ روز کاری',
              subEn: 'Reply within 1–2 business days',
            },
            {
              icoFa: 'گیت‌هاب',
              icoEn: 'GitHub',
              val: 'elman-ctrl',
              href: 'https://github.com/elman-ctrl',
              subFa: 'پروژه‌ها و کدها',
              subEn: 'Projects & code',
            },
            {
              icoFa: 'اینستاگرام',
              icoEn: 'Instagram',
              val: 'elman.fotouhi',
              href: 'https://instagram.com/elman.fotouhi',
              subFa: 'روایت مسیر یادگیری',
              subEn: 'Following the learning journey',
            },
            {
              icoFa: 'رزومه',
              icoEn: 'Resume',
              valFa: 'دانلود PDF',
              valEn: 'Download PDF',
              href: '/elman-fotouhi-resume.pdf',
              subFa: 'نسخه بازطراحی‌شده با فونت وزیرمتن',
              subEn: 'Redesigned version in Vazirmatn',
            },
          ].map((card) => (
            <a
              key={card.href}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              download={card.href.endsWith('.pdf') ? true : undefined}
              className="flex flex-col gap-2 border border-white/15 p-5 transition hover:-translate-y-0.5 hover:border-copper-bright hover:bg-white/5"
            >
              <span className="mono text-[11px] uppercase tracking-wide text-gold">
                {t(card.icoFa, card.icoEn)}
              </span>
              <span className="text-[15px] font-bold text-white break-all">
                {'val' in card ? card.val : t(card.valFa!, card.valEn!)}
              </span>
              <span className="text-[12.5px] text-[#8FA39A]">
                {t(card.subFa, card.subEn)}
              </span>
            </a>
          ))}
        </div>

        <form onSubmit={onSubmit} className="card max-w-2xl space-y-3 bg-paper p-5 text-ink">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="mb-1 block font-semibold">{t('نام', 'Name')}</span>
              <input
                name="name"
                required
                minLength={2}
                className="w-full border border-line bg-paper-raised px-3 py-2 outline-none focus:border-copper"
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-semibold">{t('ایمیل', 'Email')}</span>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-line bg-paper-raised px-3 py-2 outline-none focus:border-copper"
              />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1 block font-semibold">{t('پیام', 'Message')}</span>
            <textarea
              name="message"
              required
              minLength={10}
              rows={5}
              className="w-full resize-y border border-line bg-paper-raised px-3 py-2 outline-none focus:border-copper"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn btn-primary chamfer-sm disabled:opacity-60"
          >
            {status === 'loading'
              ? t('در حال ارسال…', 'Sending…')
              : t('ارسال پیام', 'Send Message')}
          </button>
          {status === 'ok' && (
            <p className="text-sm text-sage">
              {t('پیام با موفقیت ثبت شد.', 'Message submitted successfully.')}
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-copper">
              {t('ارسال ناموفق بود. دوباره تلاش کنید.', 'Submission failed. Please try again.')}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
