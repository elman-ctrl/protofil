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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`site-nav fixed inset-x-0 top-0 z-50 border-b transition-all duration-200 ${
        scrolled || open ? 'site-nav--solid' : 'site-nav--hero'
      }`}
      style={{ height: 'var(--nav-h)' }}
    >
      <div className="wrap flex h-full items-center justify-between gap-4">
        <a href="#top" className="site-nav__brand flex items-center gap-2 text-sm font-bold">
          <span className="mono flex h-8 w-8 items-center justify-center border border-copper/40 bg-copper/10 text-[11px] text-copper">
            EF
          </span>
          {t('المان فتوحی', 'Elman Fotouhi')}
        </a>

        <ul
          className={`site-nav__links md:flex md:items-center md:gap-6 ${
            open ? 'is-open' : 'max-md:hidden'
          }`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="site-nav__link block py-3 text-sm font-semibold md:py-0"
              >
                {locale === 'fa' ? link.fa : link.en}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="site-nav__lang flex p-0.5 chamfer-sm">
            <button
              type="button"
              onClick={() => setLocale('fa')}
              className={`mono px-2.5 py-1 text-[11px] font-semibold ${
                locale === 'fa' ? 'is-active' : ''
              }`}
            >
              FA
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`mono px-2.5 py-1 text-[11px] font-semibold ${
                locale === 'en' ? 'is-active' : ''
              }`}
            >
              EN
            </button>
          </div>
          <button
            type="button"
            className="site-nav__burger grid h-9 w-9 place-items-center md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
