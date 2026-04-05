import type { Metadata, Viewport } from 'next';
import { Ma_Shan_Zheng, Noto_Serif_SC, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { weddingConfig } from '@/config/wedding';

const c = weddingConfig;

// 马善政楷体 — 标题装饰用，单字重
const maShangZheng = Ma_Shan_Zheng({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
});

// 思源宋体 — 正文用，只保留必要字重（减少加载体积）
const notoSerifSC = Noto_Serif_SC({
  weight: ['400', '600'], // 只保留 regular + semibold
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  preload: true,
});

// Cormorant Garamond — 英文装饰用
const cormorant = Cormorant_Garamond({
  weight: ['300', '400'], // 只保留 light + regular
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-latin',
  display: 'swap',
  preload: true,
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
