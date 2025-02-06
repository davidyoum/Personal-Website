import type { Metadata } from "next";
import { Figtree, Instrument_Sans } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";


const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: false,
});

const sfpro = localFont({
  src: [
    {
      path: '../public/fonts/sfpro-font.otf',
      weight: '400',
      style: 'normal',
    }
  ],
  variable: '--font-sfpro'
});

const instrument = Instrument_Sans({
  variable: '--font-instrument',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: false,
});

export const metadata = {
  title: 'David Youm',
  description: 'David Youm Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${sfpro.variable} ${instrument.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
