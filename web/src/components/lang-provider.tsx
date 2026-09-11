'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { Locale } from '@/lib/types';

type LangContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (fa: string, en: string) => string;
  dir: 'rtl' | 'ltr';
};

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fa');

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-lang', next);
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'fa' || saved === 'en') setLocaleState(saved);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === 'fa' ? 'rtl' : 'ltr';
    root.classList.toggle('lang-en', locale === 'en');
  }, [locale]);

  const value = useMemo<LangContextValue>(
    () => ({
      locale,
      setLocale,
      t: (fa, en) => (locale === 'fa' ? fa : en),
      dir: locale === 'fa' ? 'rtl' : 'ltr',
    }),
    [locale, setLocale],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
