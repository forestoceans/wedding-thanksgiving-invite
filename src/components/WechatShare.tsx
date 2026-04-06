'use client';

import { useEffect } from 'react';
import { weddingConfig } from '@/config/wedding';
import type { VariantConfig } from '@/config/wedding';

/**
 * 微信分享组件
 *
 * 不使用 JS-SDK（需备案域名），仅依赖 Open Graph meta 标签实现分享卡片。
 * Open Graph 配置在 layout.tsx 的 metadata 中。
 */
export default function WechatShare({ variant }: { variant?: VariantConfig }) {
  const { shareTitle, shareDesc, shareImgUrl } =
    variant?.wechat ?? weddingConfig.wechat;

  // 预加载分享图片，提升微信加载速度
  useEffect(() => {
    const img = new Image();
    img.src = shareImgUrl;
  }, [shareImgUrl]);

  return null;
}
