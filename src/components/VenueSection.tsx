'use client';

import { useState } from 'react';
import { weddingConfig } from '@/config/wedding';

const c = weddingConfig;

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

export default function VenueSection() {
  const [showPicker, setShowPicker] = useState(false);
  return (
    <section className="bg-lacquer px-6 py-20 text-center">
      <div className="max-w-xs mx-auto space-y-10">

        <p className="ds-sub text-gold-muted/80 tracking-[0.55em]">宴 会 地 点</p>

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
          onClick={() => setShowPicker(true)}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 border border-gold/40 text-gold ds-sub tracking-[0.28em] transition-all hover:bg-gold/10 hover:border-gold/60 active:scale-95"
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          导 航 前 往
        </button>
      </div>

      {/* 地图选择弹层 */}
      {showPicker && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center"
          style={{ background: 'rgba(0,0,0,0.45)' }}
          onClick={() => setShowPicker(false)}
        >
          <div
            className="w-full max-w-sm mb-6 mx-4 rounded-xl overflow-hidden"
            style={{ background: '#1a1209' }}
            onClick={e => e.stopPropagation()}
          >
            <p className="ds-cap tracking-[0.4em] text-center pt-5 pb-4" style={{ color: 'rgba(184,150,74,0.5)' }}>选 择 地 图</p>
            <div className="divide-y" style={{ borderColor: 'rgba(184,150,74,0.15)' }}>
              <button
                className="w-full py-4 ds-sub tracking-[0.2em] transition-all active:opacity-60"
                style={{ color: 'rgb(184,150,74)' }}
                onClick={() => { setShowPicker(false); openBaidu(); }}
              >
                百 度 地 图
              </button>
              <button
                className="w-full py-4 ds-sub tracking-[0.2em] transition-all active:opacity-60"
                style={{ color: 'rgb(184,150,74)' }}
                onClick={() => { setShowPicker(false); openGaode(); }}
              >
                高 德 地 图
              </button>
              <button
                className="w-full py-4 ds-cap tracking-[0.3em] transition-all active:opacity-60"
                style={{ color: 'rgba(184,150,74,0.4)' }}
                onClick={() => setShowPicker(false)}
              >
                取 消
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
