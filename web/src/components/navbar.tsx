'use client';

import { useEffect, useState } from 'react';
import { useLang } from './lang-provider';

const links = [
  { href: '#about', fa: 'درباره', en: 'About' },
  { href: '#skills', fa: 'مهارت‌ها', en: 'Skills' },
  { href: '#projects', fa: 'پروژه‌ها', en: 'Projects' },
  { href: '#resume', fa: 'رزومه', en: 'Resume' },
  { href: '#github', fa: 'گیت‌هاب', en: 'GitHub' },
  { href: '#contact', fa: 'ارتباط', en: 'Contact' },
];

export function Navbar() {
  const { locale, setLocale, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? 'border-white/10 bg-[rgba(10,33,30,0.9)] backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
      style={{ height: 'var(--nav-h)' }}
    >
      <div className="wrap flex h-full items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 text-sm font-bold text-[#EEF3F0]">
          <span className="mono flex h-8 w-8 items-center justify-center border border-[#D68A4E]/50 bg-[rgba(214,138,78,0.12)] text-[11px] text-[#D68A4E]">
            EF
          </span>
          {t('المان فتوحی', 'Elman Fotouhi')}
        </a>

        <ul
          className={`md:flex md:items-center md:gap-5 ${
            open
              ? 'absolute inset-x-0 top-[var(--nav-h)] flex flex-col gap-0 border-b border-white/10 bg-[rgba(10,33,30,0.97)] px-6 py-3'
              : 'hidden'
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-3 text-sm font-semibold text-[#C7D4CD] transition hover:text-white md:border-0 md:py-0"
              >
                {locale === 'fa' ? link.fa : link.en}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="flex bg-white/5 p-0.5 chamfer-sm">
            <button
              type="button"
              onClick={() => setLocale('fa')}
              className={`mono px-2.5 py-1 text-[11px] font-semibold ${
                locale === 'fa' ? 'bg-copper text-white' : 'text-[#8FA39A]'
              }`}
            >
              FA
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`mono px-2.5 py-1 text-[11px] font-semibold ${
                locale === 'en' ? 'bg-copper text-white' : 'text-[#8FA39A]'
              }`}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center border border-white/15 text-white md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-4 bg-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}
