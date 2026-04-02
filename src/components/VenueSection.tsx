'use client';

import { weddingConfig } from '@/config/wedding';

const c = weddingConfig;

function handleNavigate() {
  const isWeChat = /MicroMessenger/i.test(navigator.userAgent);
  const keyword = encodeURIComponent(c.venue.name);
  const addr = encodeURIComponent(c.venue.address);

  if (isWeChat) {
    // 微信内：腾讯地图 URI，微信会自动弹出"打开腾讯地图小程序"
    window.location.href = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${c.venue.lat},${c.venue.lng};title:${keyword};addr:${addr}&referer=wedding`;
  } else {
    // 普通浏览器：关键词搜索兜底
    window.open(
      `https://apis.map.qq.com/uri/v1/search?keyword=${keyword}&region=${encodeURIComponent('招远')}&referer=wedding`,
      '_blank'
    );
  }
}

export default function VenueSection() {
  return (
    <section className="bg-lacquer px-6 py-20 text-center">
      <div className="max-w-xs mx-auto space-y-10">

        <p className="ds-sub text-gold-muted/65 tracking-[0.55em]">宴 会 地 点</p>

        <div className="w-10 mx-auto gold-rule" />

        {/* 双边框卡片 */}
        <div className="double-border px-7 py-9 space-y-5">
          <p
            className="text-gold-pale leading-snug"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.3rem, 4.5vw, 1.5rem)',
              letterSpacing: '0.06em',
              wordBreak: 'keep-all',
            }}
          >
            {c.venue.name}
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-gold-muted/40 block" />
            <p
              className="ds-sub text-gold/70"
              style={{ letterSpacing: '0.15em', wordBreak: 'keep-all' }}
            >
              {c.venue.hall}
            </p>
            <span className="h-px w-6 bg-gold-muted/40 block" />
          </div>
          <p className="ds-cap text-gold-pale/60 tracking-[0.12em] leading-relaxed">{c.venue.address}</p>
        </div>

        {/* 导航按钮 */}
        <button
          onClick={handleNavigate}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-gold/40 text-gold ds-sub tracking-[0.28em] transition-all hover:bg-gold/10 hover:border-gold/60 active:scale-95"
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          导 航 前 往
        </button>
      </div>
    </section>
  );
}
