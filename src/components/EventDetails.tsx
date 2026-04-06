'use client';

import { useState } from 'react';
import { weddingConfig } from '@/config/wedding';
import type { VariantConfig } from '@/config/wedding';

export default function EventDetails({ variant }: { variant?: VariantConfig }) {
  const c = variant ?? weddingConfig;

  function openBaidu() {
  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const name = encodeURIComponent(c.venue.name);
  const { lat, lng } = c.venue;
  const scheme = isIOS
    ? `baidumap://map/direction?destination=latlng:${lat},${lng}|name:${name}&mode=driving&coord_type=gcj02`
    : `bdapp://map/direction?destination=latlng:${lat},${lng}|name:${name}&mode=driving&coord_type=gcj02`;
  const web = `https://api.map.baidu.com/marker?location=${lat},${lng}&title=${name}&output=html&coord_type=gcj02`;
  window.location.href = scheme;
  setTimeout(() => { if (!document.hidden) window.open(web, '_blank'); }, 2000);
}

function openGaode() {
  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isWeChat = /MicroMessenger/i.test(ua);
  const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);
  const name = encodeURIComponent(c.venue.name);
  const { lat, lng } = c.venue;
  const web = `https://uri.amap.com/marker?position=${lng},${lat}&name=${name}`;
  if (!isMobile || isWeChat) { window.open(web, '_blank'); return; }
  const scheme = isIOS
    ? `iosamap://path?sourceApplication=wedding&dname=${name}&dlat=${lat}&dlong=${lng}&dev=0&t=0`
    : `androidamap://route/plan/?sourceApplication=wedding&dname=${name}&dlat=${lat}&dlong=${lng}&dev=0&t=0`;
  window.location.href = scheme;
  setTimeout(() => { if (!document.hidden) window.open(web, '_blank'); }, 2000);
}

  const [showPicker, setShowPicker] = useState(false);
  return (
    <section id="event-details" className="px-6 py-20 text-center relative overflow-hidden" style={{ background: '#F5F0E8' }}>
      {/* 淡晕染 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(200,89,90,0.05) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(184,150,74,0.05) 0%, transparent 55%)',
        }}
      />
      {/* 背景暗纹 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(184,150,74,0.5) 40px, rgba(184,150,74,0.5) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(184,150,74,0.5) 40px, rgba(184,150,74,0.5) 41px)',
        }}
      />

      <div className="relative z-10 max-w-xs mx-auto space-y-10">

        {/* ── 时间 ── */}
        <div className="space-y-3">
          <p className="ds-sub tracking-[0.55em]" style={{ color: 'var(--color-rouge)', opacity: 0.75 }}>吉 时</p>
          <p className="ds-head tracking-[0.3em]" style={{ color: 'var(--color-ink)' }}>{c.time}</p>
          <p className="ds-cap tracking-[0.4em]" style={{ color: 'var(--color-ink-light)', opacity: 0.65 }}>恭 候 光 临</p>
        </div>

        {/* 分隔 */}
        <div className="flex items-center gap-4 justify-center">
          <span className="flex-1 max-w-[3rem]" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184,150,74,0.5), transparent)' }} />
          <span className="text-xs" style={{ color: 'var(--color-gold-muted)', opacity: 0.5 }}>✦</span>
          <span className="flex-1 max-w-[3rem]" style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(184,150,74,0.5), transparent)' }} />
        </div>

        {/* ── 地点 ── */}
        <div className="space-y-3">
          <p className="ds-sub tracking-[0.55em]" style={{ color: 'var(--color-rouge)', opacity: 0.75 }}>地 点</p>
        </div>

        {/* 双边框卡片 */}
        <div className="double-border px-7 py-8 space-y-4" style={{ background: 'rgba(253,252,250,0.6)' }}>
          <p
            className="leading-snug"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.3rem, 4.5vw, 1.5rem)',
              letterSpacing: '0.06em',
              wordBreak: 'keep-all',
              color: 'var(--color-ink)',
            }}
          >
            {c.venue.name}
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-5 block" style={{ background: 'rgba(184,150,74,0.35)' }} />
            <p className="ds-sub" style={{ letterSpacing: '0.15em', wordBreak: 'keep-all', color: 'var(--color-ink-light)' }}>
              {c.venue.hall}
            </p>
            <span className="h-px w-5 block" style={{ background: 'rgba(184,150,74,0.35)' }} />
          </div>
          <p className="ds-cap tracking-[0.1em] leading-relaxed" style={{ color: 'var(--color-ink-ghost)' }}>{c.venue.address}</p>
        </div>

        {/* 导航按钮 */}
        <button
          onClick={() => setShowPicker(true)}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 ds-sub tracking-[0.28em] transition-all active:scale-95"
          style={{ border: '1px solid rgba(200,89,90,0.35)', color: 'var(--color-rouge)' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(200,89,90,0.05)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          导 航 前 往
        </button>

        {/* 地图选择弹层 */}
        {showPicker && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center"
            style={{ background: 'rgba(0,0,0,0.45)' }}
            onClick={() => setShowPicker(false)}
          >
            <div
              className="w-full max-w-sm mb-6 mx-4 rounded-xl overflow-hidden"
              style={{ background: '#F5F0E8' }}
              onClick={e => e.stopPropagation()}
            >
              <p className="ds-cap tracking-[0.4em] text-center pt-5 pb-4" style={{ color: 'var(--color-ink-ghost)' }}>选 择 地 图</p>
              <div className="divide-y" style={{ borderColor: 'rgba(200,89,90,0.15)' }}>
                <button
                  className="w-full py-4 ds-sub tracking-[0.2em] transition-all active:opacity-60"
                  style={{ color: 'var(--color-rouge)' }}
                  onClick={() => { setShowPicker(false); openBaidu(); }}
                >
                  百 度 地 图
                </button>
                <button
                  className="w-full py-4 ds-sub tracking-[0.2em] transition-all active:opacity-60"
                  style={{ color: 'var(--color-rouge)' }}
                  onClick={() => { setShowPicker(false); openGaode(); }}
                >
                  高 德 地 图
                </button>
                <button
                  className="w-full py-4 ds-cap tracking-[0.3em] transition-all active:opacity-60"
                  style={{ color: 'var(--color-ink-ghost)' }}
                  onClick={() => setShowPicker(false)}
                >
                  取 消
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 下滑导引 → 甜蜜瞬间 */}
        <div className="pt-4 flex justify-center">
          <a
            href="#photo-carousel"
            className="flex flex-col items-center gap-1.5 px-6 py-3 group"
            aria-label="查看甜蜜瞬间照片"
          >
            <span
              className="ds-cap tracking-[0.4em] transition-opacity group-hover:opacity-80"
              style={{ color: 'var(--color-gold-muted)', opacity: 0.5 }}
            >
              甜 蜜 瞬 间
            </span>
            <span
              className="text-sm transition-opacity group-hover:opacity-70"
              style={{ color: 'var(--color-gold-muted)', opacity: 0.35, animation: 'float 2s ease-in-out infinite' }}
              aria-hidden
            >↓</span>
          </a>
        </div>

      </div>
    </section>
  );
}
