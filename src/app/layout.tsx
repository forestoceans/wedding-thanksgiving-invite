import type { Metadata, Viewport } from 'next';
import { Ma_Shan_Zheng, Noto_Serif_SC, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { weddingConfig } from '@/config/wedding';

const c = weddingConfig;

// 马善政楷体 — 标题装饰用，optional：加载不及时直接用 fallback，不闪
const maShangZheng = Ma_Shan_Zheng({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'optional',
  preload: false,
});

// 思源宋体 — 正文用，optional + preload：尽量预加载，但不强制等待
const notoSerifSC = Noto_Serif_SC({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'optional',
  preload: true,
});

// Cormorant Garamond — 英文装饰用，optional：不闪，fallback 用 Georgia
const cormorant = Cormorant_Garamond({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-latin',
  display: 'optional',
  preload: false,
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
  icons: {
    icon: '/icons/favicon.png',
  },
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
