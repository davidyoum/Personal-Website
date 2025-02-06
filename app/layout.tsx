import { Figtree, Instrument_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";


const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: false,
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: false,
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
    <html lang="en" className={`${figtree.variable} ${inter.variable} ${instrument.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
