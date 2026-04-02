import type { Metadata, Viewport } from 'next';
import './globals.css';
import { weddingConfig } from '@/config/wedding';

const c = weddingConfig;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
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
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}
