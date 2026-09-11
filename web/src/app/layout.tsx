import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import { LangProvider } from '@/components/lang-provider';
import './globals.css';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
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
      <body className={`${vazirmatn.variable} ${vazirmatn.className} antialiased`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
