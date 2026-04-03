import type { Metadata, Viewport } from 'next';
import { Ma_Shan_Zheng, Noto_Serif_SC, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { weddingConfig } from '@/config/wedding';

const c = weddingConfig;

const maShangZheng = Ma_Shan_Zheng({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const notoSerifSC = Noto_Serif_SC({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-latin',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://linyangyang.site'),
  title: `${c.groom} & ${c.bride} · 结婚答谢宴`,
  description: `诚邀您于${c.dateSolar}莅临${c.venue.name}，共赴${c.groom}与${c.bride}的结婚答谢宴`,
  openGraph: {
    title: c.wechat.shareTitle || `${c.groom} & ${c.bride} · 结婚答谢宴`,
    description: c.wechat.shareDesc,
    images: c.wechat.shareImgUrl ? [c.wechat.shareImgUrl] : [],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" className={`${maShangZheng.variable} ${notoSerifSC.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
