import type { Metadata } from 'next';
import {
  Caveat,
  Inter,
  JetBrains_Mono,
  Vazirmatn,
} from 'next/font/google';
import { LangProvider } from '@/components/lang-provider';
import './globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'المان فتوحی — مهندسی شبکه و DevOps',
  description:
    'المان فتوحی — در مسیر تخصصی مهندسی شبکه و DevOps. پروژه‌های واقعی در MikroTik، زیرساخت سرور، و اتوماسیون.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.variable} ${inter.variable} ${jetbrains.variable} ${caveat.variable} antialiased`}
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
