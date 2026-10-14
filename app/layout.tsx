import type { Metadata } from 'next';
import { Anton, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const anton = Anton({ weight: '400', subsets: ['latin'], variable: '--font-display' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-body' });

export const viewport = {
  themeColor: '#090909',
};

export const metadata: Metadata = {
  title: 'VOLT ATHLETICS — Train Without Limits',
  description:
    'A modern athletic club built for people who want to move better, get stronger, and become more capable.',
  openGraph: {
    title: 'VOLT ATHLETICS — Train Without Limits',
    description: 'A modern athletic club built for people who want to move better, get stronger, and become more capable.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOLT ATHLETICS — Train Without Limits',
    description: 'A modern athletic club built for people who want to move better, get stronger, and become more capable.',
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' fill='%23C7FF3D'/%3E%3Ctext x='16' y='23' font-family='Arial Black' font-size='20' font-weight='900' text-anchor='middle' fill='%23090909'%3EV%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${manrope.variable}`}>
      <body className="bg-ink text-paper font-body">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-volt focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <main id="main">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
