'use client';

import { useEffect } from 'react';
import { weddingConfig } from '@/config/wedding';

declare global {
  interface Window {
    wx?: {
      config: (cfg: Record<string, unknown>) => void;
      ready: (fn: () => void) => void;
      updateAppMessageShareData: (data: Record<string, unknown>) => void;
      updateTimelineShareData: (data: Record<string, unknown>) => void;
    };
  }
}

export default function WechatShare() {
  useEffect(() => {
    // 检测是否在微信浏览器中
    const ua = navigator.userAgent.toLowerCase();
    const isWechat = /micromessenger/i.test(ua);
    if (!isWechat) return;

    const { wechat } = weddingConfig;
    if (!wechat.appId) return;

    // 加载微信 JS-SDK
    const script = document.createElement('script');
    script.src = 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js';
    script.onload = () => {
      if (!window.wx) return;

      // wx.config 需要后端签名，这里预留接口
      // 实际使用时需要从后端获取 signature 等参数
      window.wx.config({
        debug: false,
        appId: wechat.appId,
        timestamp: 0,
        nonceStr: '',
        signature: '',
        jsApiList: [
          'updateAppMessageShareData',
          'updateTimelineShareData',
        ],
      });

      window.wx.ready(() => {
        const shareData = {
          title: wechat.shareTitle,
          desc: wechat.shareDesc,
          link: window.location.href,
          imgUrl: wechat.shareImgUrl,
        };

        // 分享给朋友
        window.wx?.updateAppMessageShareData(shareData);
        // 分享到朋友圈
        window.wx?.updateTimelineShareData(shareData);
      });
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
