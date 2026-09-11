'use client';

import { FormEvent, useState } from 'react';
import { getApiBase } from '@/lib/api';
import { useLang } from './lang-provider';
import { resumeDocument } from '@/lib/resume-content';

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
    <section id="contact" className="section text-[#EEF3F0]" style={{ background: '#0A211E' }}>
      <div className="wrap">
        <div className="eyebrow !text-copper-bright before:!bg-copper-bright">
          {t('ارتباط', 'Contact')}
        </div>
        <h2 className="mb-3 text-[clamp(1.5rem,3vw,1.95rem)] font-extrabold text-white">
          {t('ارتباط با من', 'Get in touch')}
        </h2>
        <p className="mb-6 max-w-xl text-[#AEC0B8]">
          {t(
            'برای همکاری یا فرصت شغلی از راه‌های زیر در دسترسم.',
            'Reach me below for collaboration or hiring.',
          )}
        </p>

        <div className="mb-8 flex flex-col gap-3 text-[15px] sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
          <a href="mailto:Elmanfotouhi@gmail.com" className="font-semibold text-white hover:text-copper-bright">
            Elmanfotouhi@gmail.com
          </a>
          <a
            href="https://github.com/elman-ctrl"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-copper-bright"
          >
            github.com/elman-ctrl
          </a>
          <a href={resumeDocument.pdfHref} download className="font-semibold text-white hover:text-copper-bright">
            {t('دانلود رزومه', 'Download resume')}
          </a>
        </div>

        <form onSubmit={onSubmit} className="card max-w-xl space-y-3 bg-paper p-5 text-ink">
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
              rows={4}
              className="w-full resize-y border border-line bg-paper-raised px-3 py-2 outline-none focus:border-copper"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn btn-primary chamfer-sm disabled:opacity-60"
          >
            {status === 'loading' ? t('در حال ارسال…', 'Sending…') : t('ارسال پیام', 'Send Message')}
          </button>
          {status === 'ok' && (
            <p className="text-sm text-sage">{t('پیام با موفقیت ثبت شد.', 'Message submitted successfully.')}</p>
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
